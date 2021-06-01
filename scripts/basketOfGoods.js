class BasketOfGoods {
    constructor() {
        this.basketButton = document.querySelector('.b-OnlineStoreHeader__basketButton');
        this.dropdownMenu = document.querySelector('.b-OnlineStoreHeader__dropdownMenu');
    }
    /**
     * Метод назначает слушателя события кнопке Корзины
     */
    addEventListenerButton() {
        this.basketButton.addEventListener('click', () => {
            this.dropdownMenu.style.cssText = "display: block"
        });
    }
    /**
     * Метод назначает слушателя события выпадающему меню
     */
    addEventListenerDropdownMenu() {
        this.dropdownMenu.addEventListener('click', () => {
            this.dropdownMenu.style.cssText = "display: none"
        });
    }

}
let basketOfGoods = new BasketOfGoods();
basketOfGoods.addEventListenerButton();
basketOfGoods.addEventListenerDropdownMenu();