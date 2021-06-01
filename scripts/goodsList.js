class GoodsList {
    constructor() {
        this.goods = [];
        this.сompleteGoods();
    }
    /**
     * Метод добавляет товары в массив goods
     */
    сompleteGoods() {
        this.goods = [{
                imageUrl: 'image/goods/img1.jpg',
                title: 'Phone',
                price: 150
            },
            {
                imageUrl: 'image/goods/img2.jpg',
                title: 'Headphones',
                price: 50
            },
            {
                imageUrl: 'image/goods/img3.jpg',
                title: 'Wireless headphones',
                price: 350
            },
            {
                imageUrl: 'image/goods/img4.jpg',
                title: 'Wristwatch',
                price: 250
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
}

class GoodsItem {
    constructor(goods) {
        this.imageUrl = goods.imageUrl;
        this.title = goods.title
        this.price = goods.price
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
        <button class="b-goodButton">Купить</button>
        </div>`;
    }
}

let goodsList = new GoodsList();
goodsList.renderGoodsList();

