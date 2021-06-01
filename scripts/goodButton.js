class GoodButton {
    constructor() {
        this.goodButton = document.querySelectorAll('.b-goodButton');
        // this.tbody = document.querySelector('tbody');

    }
    /**
     * Метод назначает слушателя события кнопке товара
     */
    addEventListenerGoodButton() {
        this.goodButton.forEach((button) => {
            button.addEventListener('click', this.addGoodsInBasket);
        });
    }
    addGoodsInBasket(event) {
        let target = event.target;
        let goodsInBasket = this.renderGoodsInBasket(target); //Тут проблема
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML('beforeend', goodsInBasket);

    }

    /**
     * Метод отрисовывает строку товара в корзине
     * @param {*} target 
     * @returns {HTMLElement}
     */
    renderGoodsInBasket(target) {
        return `<tr>
        <th scope="row">${target.dataset.id}</th>
        <td>${target.dataset.title}</td>
        <td>${target.dataset.price}</td>
        <td class="productCount" data-id="${target.dataset.id}">1</td>
        <td><i class="fas fa-trash-alt productRemoveBtn" data-id="${target.dataset.id}"></i></td>
        </tr>`;
    }
}
let goodButton = new GoodButton();
goodButton.addEventListenerGoodButton();