const APIBasket = "http://js2-onlinestore/"; //файл json хранится на локальном сервере
class BasketOfGoods {
    constructor() {
        this.basketButton = document.querySelector('.b-OnlineStoreHeader__basketButton');
        this.dropdownMenu = document.querySelector('.b-OnlineStoreHeader__dropdownMenu');
        this.goodsOfBasket = [];
        this._addInBasket()
            .then(data => { // после result.json()) получаем объект data
                this.goodsOfBasket = data;
                let {
                    amount,
                    countGoods,
                    contents
                } = this.goodsOfBasket;
                // console.log(contents);
                this.renderGoodsInBasket(contents)
            });
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
    /**
     * Метод считает суммарную стоимость товаров в корзине
     */
    countTotalCost() {

    }
    _addInBasket() {
        return fetch(`${APIBasket}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    renderGoodsInBasket(contents) {
        contents.forEach(item => {
            let goodsInBasket =
                `<tr>
            <th scope="row">${item.id}</th>
            <td>${item.title}</td>
            <td>${item.price}</td>
            <td class="productCount" data-id="${item.id}">1</td>
            <td><i class="fas fa-trash-alt productRemoveBtn" data-id="${item.id}"></i></td>
            </tr>`;
            let tbody = document.querySelector('tbody');
            tbody.insertAdjacentHTML('beforeend', goodsInBasket);
        });
    }

}
let basketOfGoods = new BasketOfGoods();
basketOfGoods.addEventListenerButton();
basketOfGoods.addEventListenerDropdownMenu();