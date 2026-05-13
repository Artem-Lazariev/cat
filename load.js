const arrayloc = [
    {
        name: "test",
        img: "card1.jpg",
        info: "test",
        where: "test"
    }
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
                    <li class="team__itm">
                        <a class="team__link" href="">
                            <svg class="team__icon">
                                <use href="./img/symbol-defs.svg#icon-instagram"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="team__itm">
                        <a class="team__link" href="">
                            <svg class="team__icon">
                                <use href="./img/symbol-defs.svg#icon-twitter"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="team__itm">
                        <a class="team__link" href="">
                            <svg class="team__icon">
                                <use href="./img/symbol-defs.svg#icon-facebook"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="team__itm">
                        <a class="team__link" href="">
                            <svg class="team__icon">
                                <use href="./img/symbol-defs.svg#icon-linkedin"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </li>
    `;
}
const team = document.getElementById('team');

arrayloc.forEach(item => {
    team.innerHTML += gen(item);
});