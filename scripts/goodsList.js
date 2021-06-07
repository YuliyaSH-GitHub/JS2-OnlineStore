const API = "http://js2-onlinestore/"; //файл json хранится на локальном сервере
class GoodsList {
    constructor() {
        this.goods = [];
        this.goodButton = [];
        this._fetchGoods()
            .then(data => { // после result.json()) получаем объект data
                this.goods = [...data];
                // console.log(this.goods);
                this.renderGoodsList();
                let basketItem = new BasketItem();
                basketItem.addEventListenerGoodButton();
            });

    }
    /**
     * Метод получает товары в формате json с локального сервера
     */
    _fetchGoods() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    /**
     * Метод в цикле for обходит массив товаров goods, для каждого объекта массива формируется карточка товара
     */
    renderGoodsList() {
        let divGoodsList = document.querySelector('.b-goodsList');
        for (let product of this.goods) {
            let goodsItem = new GoodsItem(product);
            divGoodsList.insertAdjacentHTML('beforeend', goodsItem.renderGoodsItem());
        }

    }
    /**
     * Метод считает суммарную стоимость товаров
     */
    countTotalCostOfGoods() {
        let totalCost = this.goods.reduce((previousValue, item) => previousValue + item.price, 0);
        console.log(totalCost);
    }
}

class GoodsItem {
    constructor(goods) {
        this.imageUrl = goods.imageUrl;
        this.title = goods.title
        this.price = goods.price
        this.id = goods.id
    }
    /**
     * Метод отрисовывает разметку карточки товара
     * @returns {HTMLElement}
     */
    renderGoodsItem() {
        return `<div class="b-goodsList__item">
        <img class= "b-goodsList__img" src=${this.imageUrl} alt="goods">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="b-goodButton" data-id = "${this.id}" data-title = "${this.title}" data-price = "${this.price}" >Купить</button>
        </div>`;
    }

}

let goodsList = new GoodsList();
// goodsList.renderGoodsList();
// goodsList.countTotalCostOfGoods();




