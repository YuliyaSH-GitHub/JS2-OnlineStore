const goods = [{
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


const renderGoodsItem = (product) => {
    return `<div class="b-goodsList__item">
            <img class= "b-goodsList__img" src=${product.imageUrl} alt="goods">
            <h3>${product.title}</h3>
            <p>${product.price}</p>
            <button class="b-goodButton">Купить</button>
            </div>`;
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item)).join(' ');
    document.querySelector('.b-goodsList').innerHTML = goodsList;
    // console.log(goodsList);
}

renderGoodsList(goods);