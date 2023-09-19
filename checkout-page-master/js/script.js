// Element selection
const form = document.querySelector("#form");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone");
const inputName = document.querySelector("#full-name");
const inputAddress = document.querySelector("#address");
const inputCity = document.querySelector("#city");
const inputCountry = document.querySelector("#country");
const inputPostalCode = document.querySelector("#postal-code");
const message = document.querySelector("#msg");
const removeButtons = document.querySelectorAll(".remove-btn");
const addButtons = document.querySelectorAll(".add-btn");
const itemNumbers = document.querySelectorAll(".item-numbers");
const currentPrices = document.querySelectorAll(".current-price");
const discountedPrices = document.querySelectorAll(".discounted-price");
const shippingValue = document.querySelector("#shipping");
const totalPrice = document.querySelector("#total-price");

// Functions
// email validation
function isValidEmail(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}

// upadate prices
function upadatePrices(currentPricesValue, discountedPricesValue, itemNumbers, currentPrices, discountedPrices) {

    currentPrices.innerHTML = (currentPricesValue * itemNumbers.value).toFixed(2);

    discountedPrices.innerHTML = (discountedPricesValue * itemNumbers.value).toFixed(2);
}

// continue button, form submission
form.addEventListener('submit', event => {
    event.preventDefault();

    const inputs = [inputEmail, inputPhone, inputName, inputAddress, inputCity, inputCountry, inputPostalCode];

    const messages = ["Email", "Phone", "Full name", "Address", "City", "Country", "Postal Code"];

    let valid = true;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "" || inputs[i].value === "Your country.." || (i === 0 && !isValidEmail(inputs[i].value))) {

            alert("Notice! missing or incomplete data");

            message.innerHTML = `<p>It seems that you forgot to fill in the <span> ${messages[i]} </span> field. <br> Please check and try again.</p>`;

            valid = false;
            break;
        }
    }

    if (valid) {
        form.submit();

        alert("Successful!");

        message.innerHTML = "<p><span>Order confirmed!</span> <br> Your purchase has been successfully processed.</p>";
    }
});

// buttons that add and remove the number of items
if (addButtons) {

    for (let i = 0; i < addButtons.length; i++) {

        const currentPricesValue = parseFloat(currentPrices[i].innerText);
        const discountedPricesValue = parseFloat(discountedPrices[i].innerText);

        addButtons[i].addEventListener('click', () => {
            itemNumbers[i].value++;

            upadatePrices(currentPricesValue, discountedPricesValue, itemNumbers[i], currentPrices[i], discountedPrices[i]);

            // update total price
            totalPrice.innerText = (parseFloat(discountedPrices[0].innerText) + parseFloat(discountedPrices[1].innerText) + parseFloat(shippingValue.innerText)).toFixed(2);
        });
    }
}

if (removeButtons) {

    for (let i = 0; i < removeButtons.length; i++) {

        const currentPricesValue = parseFloat(currentPrices[i].innerText);
        const discountedPricesValue = parseFloat(discountedPrices[i].innerText);

        removeButtons[i].addEventListener('click', () => {

            if (itemNumbers[i].value > 1) {
                itemNumbers[i].value--;

                upadatePrices(currentPricesValue, discountedPricesValue, itemNumbers[i], currentPrices[i], discountedPrices[i]);

                // update total price
                totalPrice.innerText = (parseFloat(discountedPrices[0].innerText) + parseFloat(discountedPrices[1].innerText) + parseFloat(shippingValue.innerText)).toFixed(2);
            }
        });
    }
}