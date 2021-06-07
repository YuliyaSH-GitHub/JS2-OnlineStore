class BasketItem {
    constructor() {
        this.goodButton = document.querySelectorAll(".b-goodButton");
        this.products = [];
    }
    /**
     * Метод назначает слушателя события кнопке товара
     */
    addEventListenerGoodButton() {
        this.goodButton.forEach((button) => {
            button.addEventListener("click", (event) => {
                let id = event.target.dataset.id;
                let title = event.target.dataset.title;
                let price = event.target.dataset.price;
                this._addProduct({
                    id: id,
                    title: title,
                    price: price,
                });
            });
        });
    }
    /**
     * Метод добавляет товары в корзину
     * @param {id: string, title: string, price: string} product 
     */
    _addProduct(product) {
        this._addProductToObject(product);
        this._renderGoodsInBasket(product);
        this._renderTotalSum();
        // this._addRemoveBtnLesteners();
    }
    /**
     * Метод добавляет товары в массив товаров this.products
     * @param {id: string, title: string, price: string} product 
     */
    _addProductToObject(product) {
        if (this.products[product.id] == undefined) {
            this.products[product.id] = {
                title: product.title,
                price: product.price,
                count: 1,
            }
        } else {
            this.products[product.id].count++;
        }
    }
    /**
     * Метод отрисовывает товары в корзине
     */
    _renderGoodsInBasket(product) {
        let productExist = document.querySelector(`.productCount[data-id="${product.id}"]`);
        if (productExist) {
            productExist.textContent++;
            return;
        }
        let goodsInBasket =
            `<tr>
            <th scope="row">${product.id}</th>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td class="productCount" data-id="${product.id}">1</td>
            <td><i class="fas fa-trash-alt productRemoveBtn" data-id="${product.id}"></i></td>
            </tr>`;
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML('beforeend', goodsInBasket);

    }
    _renderTotalSum() {
        document.querySelector('.total').innerHTML = this._getTotalSum();
    }
    _getTotalSum() {
        let totalSum = 0;
        this.products.forEach(item => {
            totalSum += item.price * item.count;
        })
        return totalSum;
    }

    // /**
    //  * Метод добавляет товары в корзину (массив товаров)
    //  */
    // addGoodsInBasket() {}
    // /**
    //  * Метод удаляет товары из корзины
    //  */
    // removeGoodsInBasket() {}
}
// let basketItem = new BasketItem();
// basketItem.addEventListenerGoodButton();