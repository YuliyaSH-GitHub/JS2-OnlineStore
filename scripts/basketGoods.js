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

    }
    /**
     * Метод добавляет товары в массив товаров this.products
     * @param {id: string, title: string, price: string} product 
     */
    _addProductToObject(product) {
        if (this.products.length == 0) {
            let item = {
                id: product.id,
                title: product.title,
                price: product.price,
                count: 1,
            };
            this.products.push(item);
            return this.products;
        }
        if (this.products.length != 0) {
            let findProduct = this.products.find(elem => elem.id === product.id);
            if (findProduct) {
                findProduct.count++
            } else {
                let item = {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    count: 1,
                };
                this.products.push(item);
                return this.products;
            }
            return this.products;
        }

    }

    /**
     * Метод отрисовывает товары в корзине
     *@param {id: string, title: string, price: string} product
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
            <td><i class="far fa-minus-square productRemoveBtn" data-id="${product.id}"></i><i class="fas fa-trash-alt productRemoveGoods" data-id="${product.id}"></i></td>
            </tr>`;
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML('beforeend', goodsInBasket);
        // console.log(goodsInBasket);
        this._addRemoveBtnLesteners();
        this._addRemoveGoodsLesteners();
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
        let productRemoveBtn = document.querySelectorAll('.productRemoveBtn');
        // console.log(productRemoveBtn);
        productRemoveBtn.forEach(item => {
            item.addEventListener('click', (e) => this._removeItemProduct(e));
        });
    }
    /**
     * Метод назначает обработчик события кнопкам добавления в корзины 
     */
    _addRemoveGoodsLesteners() {
        let productRemoveGoods = document.querySelectorAll('.productRemoveGoods');
        // console.log(productRemoveBtn);
        productRemoveGoods.forEach(item => {
            item.addEventListener('click', (e) => this._removeProduct(e));
        });
    }
    /**
     * Метод удаляет 1 товар из позиции и пересчитывает стоимость корзины
     * @param {Event} e 
     */
    _removeItemProduct(e) {
        let id = e.target.dataset.id;
        this._removeItemGoods(id);
        this._renderTotalSum();

    }
    /**
     *  Метод запускает удаление позиции товара из корзины и массива товаров
     * @param {string} id
     */
    _removeItemGoods(id) {
        let findProduct = this.products.find(elem => elem.id == id);
        if (findProduct.count > 1) {
            findProduct.count--;
            let countTd = document.querySelector(`.productCount[data-id="${id}"]`);
            countTd.textContent--;
        }
        return this.products;
        // console.log(this.products);
    }
    /**
     * Метод удаляет товар из корзины и пересчитывает стоимость корзины
     * @param {Event} e 
     */
    _removeProduct(e) {
        let id = e.target.dataset.id;
        this._removeGoods(id);
        this._renderTotalSum();
    }
    /**
     *  Метод запускает удаление из корзины и из массива товаров
     * @param {string} id
     */
    _removeGoods(id) {
        let findProduct = this.products.find(elem => elem.id == id);
        console.log(findProduct);
        this.products.splice((this.products.indexOf(findProduct)), 1);
        let countTd = document.querySelector(`.productCount[data-id="${id}"]`);
        countTd.parentNode.remove();
        return this.products;
    }

}

