import "./styles/interface.sass";
import "./faavicon.ico";
import "./img/avatar.jpg";
import "./img/bg-1.gif";
import "./img/bg-3.jpg";
import "./img/forest.jpg";
import "./img/sword.jpg";
import "./img/girl.jpg";
import "./img/house.jpg";

import Typed from "typed.js";

const navigation = document.querySelector(".navigation");
const tabs = document.querySelectorAll(".tab");
const navs = document.querySelectorAll(".menu-item");
const sidebar = document.querySelector(".sidebar-menu");

function tab(index) {
    let x;
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
        tabs[index].style.display = "flex";
}

navigation.addEventListener("click", function ({ target }) {
    if (target.dataset.index >= 0 && screen.width > 600) {
        let data = +target.dataset.index;
        tab(data);
    }
});

const typed = new Typed("#hello-block__title-typed", {
    strings: ["Пр^100ивет,^150 меня зовут^50 Алексей"],
    typeSpeed: 27,
    showCursor: false,
    onComplete: function (self) {
        console.log(self);
        return new Typed("#hello-block__text-typed", {
            strings: [
                "Пишу сайты и веб^140-приложения.^200 Вопреки всяким холиварам на тему лучшего фреймворка, я предпочитаю изучать основы и пользоваться тем, чего требуют условия. Но всё же, хотелось бы выделить лучший инструмент для разработки -",
            ],
            typeSpeed: 27,
            showCursor: false,
            onComplete: function () {
                return new Typed("#hello-block__framework-typed", {
                    strings: ["R^50e^50a^50c", "Vue.js."],
                });
            },
        });
    },
});
