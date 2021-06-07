// const APIBasket = "http://js2-onlinestore/"; //файл json хранится на локальном сервере
class BasketOfGoods {
    constructor() {
        this.basketButton = document.querySelector('.b-OnlineStoreHeader__basketButton');
        this.dropdownMenu = document.querySelector('.b-OnlineStoreHeader__dropdownMenu');
        this.buttonClose = document.querySelector('.b-buttonClose');
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
        this.buttonClose.addEventListener('click', () => {
            this.dropdownMenu.style.cssText = "display: none"
        });
    }
    // /**
    //  * Метод считает суммарную стоимость товаров в корзине
    //  */
    // countTotalCost() {

    // }


}
let basketOfGoods = new BasketOfGoods();
basketOfGoods.addEventListenerButton();
basketOfGoods.addEventListenerDropdownMenu();