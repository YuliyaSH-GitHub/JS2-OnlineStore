class GoodsList {
    constructor() {
        this.goods = [];
        this.fetchGoods();
    }
    /**
     * Метод добавляет товары в массив goods
     */
    fetchGoods() {
        this.goods = [{

                imageUrl: 'image/goods/img1.jpg',
                title: 'Phone',
                price: 150,
                id: 1
            },
            {

                imageUrl: 'image/goods/img2.jpg',
                title: 'Headphones',
                price: 50,
                id: 2
            },
            {

                imageUrl: 'image/goods/img3.jpg',
                title: 'Wireless headphones',
                price: 350,
                id: 3
            },
            {

                imageUrl: 'image/goods/img4.jpg',
                title: 'Wristwatch',
                price: 250,
                id: 4
            },
        ];
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
    countTotalCost() {

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
goodsList.renderGoodsList();