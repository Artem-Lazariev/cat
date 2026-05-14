const arrayloc = [
    {
        name: "test",
        img: "card1.jpg",
        info: "test",
        where: "test",
        facebook: "https://facebook.com/",
        instagram: "https://instagram.com/",
        twitter: "https://twitter.com/",
        google: "https://google.com/",
    },

];

function gen(item) {
    return `
        <li class="team__item">
            <img 
                alt="${item.name}" 
                class="team__img" 
                src="img/${item.img}"
            />

            <div class="team__wrap">
                <h3 class="team__name">
                    ${item.name}
                </h3>

                <p class="team__taxt">
                    ${item.where}
                </p>

                <ul class="team__items">

                    ${
        item.instagram
            ? `
                        <li class="team__itm">
                            <a 
                                class="team__link" 
                                href="${item.instagram}" 
                                target="_blank"
                            >
                                <svg class="team__icon">
                                    <use href="./img/symbol-defs.svg#icon-instagram"></use>
                                </svg>
                            </a>
                        </li>
                    `
            : ""
    }

                    ${
        item.twitter
            ? `
                        <li class="team__itm">
                            <a 
                                class="team__link" 
                                href="${item.twitter}" 
                                target="_blank"
                            >
                                <svg class="team__icon">
                                    <use href="./img/symbol-defs.svg#icon-twitter"></use>
                                </svg>
                            </a>
                        </li>
                    `
            : ""
    }

                    ${
        item.facebook
            ? `
                        <li class="team__itm">
                            <a 
                                class="team__link" 
                                href="${item.facebook}" 
                                target="_blank"
                            >
                                <svg class="team__icon">
                                    <use href="./img/symbol-defs.svg#icon-facebook"></use>
                                </svg>
                            </a>
                        </li>
                    `
            : ""
    }

                    ${
        item.google
            ? `
                        <li class="team__itm">
                            <a 
                                class="team__link" 
                                href="${item.google}" 
                                target="_blank"
                            >
                                <svg class="team__icon">
                                    <use href="./img/symbol-defs.svg#icon-google"></use>
                                </svg>
                            </a>
                        </li>
                    `
            : ""
    }

                </ul>
            </div>
        </li>
    `;
}

const team = document.getElementById("team");

team.innerHTML = arrayloc.map(gen).join("");