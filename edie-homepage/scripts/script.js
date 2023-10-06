const menu = document.querySelector("nav");
const openCloseButtom = document.querySelector(".menuButtom");
const forms = document.querySelectorAll(".form");
const cards = document.querySelectorAll(".card");

// Email validation
function isValidEmail(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
};

// Menu
openCloseButtom.addEventListener('click', () => {

    menu.classList.toggle('toggle');
    menu.style.opacity = "1";

    openCloseButtom.classList.toggle("toggleMenu");
    openCloseButtom.style.opacity = "0";

    if (openCloseButtom.innerHTML === 'menu') {

        setTimeout(() => {
            menu.style.transform = "translateX(0)";

            openCloseButtom.innerHTML = "close";
            openCloseButtom.style.cssText = "color: red; opacity: 1;";

            document.querySelector("abbr").setAttribute('title', 'Close');
        }, 100);

        setTimeout(() => {
            document.body.style.overflow = "hidden";
        }, 350);
    }

    if (openCloseButtom.innerHTML === 'close') {

        setTimeout(() => {
            document.body.style.overflow = "auto";

            menu.style.transform = "translateX(100%)";

            openCloseButtom.innerHTML = "menu";
            openCloseButtom.style.cssText = "color: #333333;";

            document.querySelector("abbr").setAttribute('title', 'Menu');
        }, 0);
    }
});

// Forms
forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let inputEmail = form.querySelector('input');

        if (inputEmail.value === " " || !isValidEmail(inputEmail.value)) {
            alert("Notice! Invalid Email.");

            inputEmail.focus();

            return;

        } else {
            form.submit();
            return alert("Email sent!");
        }
    });
});

// Button card (ux/ux design, font-end, back-and)
for (let i = 0; i < cards.length; i++) {

    cards[i].addEventListener("mouseover", () => {

        let button = cards[i].querySelector('button');

        button.style.cssText = "color: #FFFFFF; background-color: #2D9CDB; transition: .3s";
    });

    cards[i].addEventListener("mouseout", () => {

        let button = cards[i].querySelector('button');

        button.style.cssText = "color: #828282; background-color: E0E0E0; transition: .3s;";
    });
}