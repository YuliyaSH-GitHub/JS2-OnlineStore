class BasketItem {
    constructor() {
        this.goodButton = document.querySelectorAll('.b-goodButton');
    }
    /**
     * Метод назначает слушателя события кнопке товара
     */
    addEventListenerGoodButton() {
        this.goodButton.forEach((button) => {
            button.addEventListener('click', this.addGoodsInBasket.bind(BasketItem));
        });
    }
    /**
     * Метод добавляет товары в корзину
     */
    addGoodsInBasket(event) {
        let target = event.target;
        let goodsInBasket =
            `<tr>
            <th scope="row">${target.dataset.id}</th>
            <td>${target.dataset.title}</td>
            <td>${target.dataset.price}</td>
            <td class="productCount" data-id="${target.dataset.id}">1</td>
            <td><i class="fas fa-trash-alt productRemoveBtn" data-id="${target.dataset.id}"></i></td>
            </tr>`;
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML('beforeend', goodsInBasket);


    }

}
let basketItem = new BasketItem();
basketItem.addEventListenerGoodButton();