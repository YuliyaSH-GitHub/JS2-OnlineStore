class BasketItem {
    constructor() {
        this.products = [];
    }
    /**
     * Метод назначает слушателя события кнопке товара
     */
    addEventListenerGoodButton() {
        document.querySelectorAll(".b-goodButton").forEach((button) => {
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
        this._addRemoveBtnLesteners();
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
        console.log(goodsInBasket);

    }
    /**
     * Метод выводит стоимость корзины 
     */
    _renderTotalSum() {
        document.querySelector('.total').innerHTML = this._getTotalSum();
    }
    /**
     * Метод считает итоговую стоимость корзины 
     */
    _getTotalSum() {
        let totalSum = 0;
        this.products.forEach(item => {
            totalSum += item.price * item.count;
        })
        return totalSum;
    }
    /**
     * Метод назначает обработчик события кнопкам удаления из корзины 
     */
    _addRemoveBtnLesteners() {
        let dropdownMenu = document.querySelector('.b-OnlineStoreHeader__dropdownMenu');
        let productRemoveBtn = dropdownMenu.querySelectorAll('.productRemoveBtn');
        console.log(productRemoveBtn);
        productRemoveBtn.forEach(item => {
            item.addEventListener('click', this._removeProduct.bind(this));
        });
    }
    /**
     * Метод удаляет товар из корзины и пересчитывает стоимость корзины
     * @param {Event} e 
     */
    _removeProduct(e) {
        this._removeGoods(e);
        this._renderTotalSum();

    }
    /**
     *  Метод запускает удаление из корзины и из массива товаров
     * @param {Event} e 
     */
    _removeGoods(e) {
        let id = e.target.dataset.id;
        this._removeProductFromObject(id);
        this._removeProductFromBasket(id);
    }
    /**
     * Метод удаляет продукт из массива с продуктами.
     * @param {string} id
     */
    _removeProductFromObject(id) {
        if (this.products[id].count == 1) {
            delete this.products[id];
        } else {
            this.products[id].count--;
        }
    }
    /**
     *  Метод удаляет товар из корзины.
     * @param {string} id
     */
    _removeProductFromBasket(id) {
        let countTd = document.querySelector(`.productCount[data-id="${id}"]`);
        if (countTd.textContent == 1) {
            countTd.parentNode.remove();
        } else {
            countTd.textContent--;
        }
    }
}