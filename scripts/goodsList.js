const API = "http://js2-onlinestore/"; //файл json хранится на локальном сервере
class GoodsList {
    constructor() {
        this.goods = [];
        this.goodButton = [];
        this.filteredGoods = [];
        this.allProducts = [];
        this._fetchGoods()
            .then(data => { // после result.json()) получаем объект data
                this.goods = [...data];
                // console.log(this.goods);
                this.renderGoodsList();
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
            this.allProducts.push(goodsItem);
            divGoodsList.insertAdjacentHTML('beforeend', goodsItem.renderGoodsItem());
        }
        let basketItem = new BasketItem();
        basketItem.addEventListenerGoodButton();
        document.querySelector('.searchForm').addEventListener('submit', e => {
            e.preventDefault();
            this.filter(document.querySelector('.searchField').value);
        });
    }
    filter(value) {
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.allProducts.filter(product => regexp.test(product.title));
        this.allProducts.forEach(elem => {
            const block = document.querySelector(`.b-goodsList__item[data-id="${elem.id}"]`);
            if (!this.filteredGoods.includes(elem)) {
                block.classList.add('invisible');
            } else {
                block.classList.remove('invisible');
            }
        })
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
        return `<div class="b-goodsList__item" data-id="${this.id}">
        <img class= "b-goodsList__img" src=${this.imageUrl} alt="goods">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="b-goodButton" data-id = "${this.id}" data-title = "${this.title}" data-price = "${this.price}" >Купить</button>
        </div>`;
    }



}

let goodsList = new GoodsList();