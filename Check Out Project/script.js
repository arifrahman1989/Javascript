
addToCartBtn = document.getElementsByClassName('addToCartBtn');

cartContainer = document.getElementsByClassName('cartContainer')[0];


// slider animation

const slider = document.querySelector('.slider');
const container = document.querySelector('.container');
const inner = document.querySelector('.inner');


const tl = new TimelineMax();


tl.fromTo(inner, 1, { height: "0%" }, { height: '100%' });

tl.fromTo(inner, 1, { width: "90%" }, { width: '70%' });

tl.fromTo(slider, 1, { x: "-100%" }, { x: '0%' }, "-=1");



for (var i = 0; i < addToCartBtn.length; i++) {
    addToCartBtn[i].addEventListener('click', updateCartContainer)
}

function updateCartContainer(e) {

    addToCartBtn = e.target;
    productContainer = addToCartBtn.parentElement;
    productTitle = productContainer.getElementsByClassName('productTitle')[0].innerText;
    productQnt = productContainer.getElementsByClassName('productQnt')[0].innerText;
    productPrice = productContainer.getElementsByClassName('productPrice')[0].innerText;
    productTotal = productContainer.getElementsByClassName('productTotal')[0].innerText;
    productimg = productContainer.getElementsByClassName('img')[0].src;

    cartTitles = cartContainer.getElementsByClassName('cartTitle');
    for (var i = 0; i < cartTitles.length; i++) {
        if (cartTitles[i].innerText == productTitle) {
            alert('Product already to cart');
            //productQnt1 = parseInt(productQnt);
            //productQnt1++;

            return;
        }
    }

    AddRowInCart(productTitle, productQnt, productPrice, productTotal, productimg);

}

// add new row in cart

function AddRowInCart(productTitle, productQnt, productPrice, productTotal, productimg) {


    div = document.createElement('div');
    div.classList.add('row');
    insideDiv = `<div class="col-xs-2 cartImage"> <img src="${productimg}"></div>
<div class="col-xs-2 cartTitle"> ${productTitle} </div>
<div class="col-xs-2 cartQnt"> ${productQnt} <input type="text" value="0" id="call"></div>
<div class="col-xs-2 cartPrice"> ${productPrice}</div>
<div class="col-xs-2 cartTotal"> ${productTotal}<h2>0</h2> </div>
 <div class="col-xs-2 removeButton"> Remove</div>`;
    div.innerHTML = insideDiv;
    cartContainer.appendChild(div);
    totalPrice = 0;
    cartPrice = cartContainer.getElementsByClassName('cartPrice');
    for (let i = 0; i < cartPrice.length; i++) {
        priceFormatedNumb = cartPrice[i].innerText.replace('/=', '').replace(',', '');
        totalPrice = totalPrice + parseInt((priceFormatedNumb));
    }
    document.getElementsByClassName('cartTotalPrice')[0].innerText = new Number(totalPrice).toLocaleString('en') + '/=';

    removeButton = document.getElementsByClassName('removeButton');
    for (let i = 0; i < removeButton.length; i++) {
        removeButton[i].addEventListener('click', removeFromCart)
    }

    // cartTotal price

    cartTotal = cartContainer.getElementsByClassName('cartTotal');
    for (let i = 0; i < cartTotal.length; i++) {
        priceFormatedNumb = cartTotal[i].innerText.replace('/=', '').replace(',', '');
        cartPrice = cartPrice + parseInt((priceFormatedNumb));
    }
    document.getElementsByClassName('qutPrice')[0].innerText = new Number(cartPrice).toLocaleString('en') + '';


}

// remove product from Cart

function removeFromCart(e) {
    e.target.parentElement.remove();
    updatePriceAfterRemove();

}


function updatePriceAfterRemove() {
    totalPrice = 0;
    cartPrice = cartContainer.getElementsByClassName('cartPrice');
    for (var i = 0; i < cartPrice.length; i++) {
        priceFormatedNumb = cartPrice[i].innerText.replace('/=', '').replace(',', '');
        totalPrice = totalPrice + parseInt((priceFormatedNumb));
    }
    document.getElementsByClassName('cartTotalPrice')[0].innerText = new Number(totalPrice).toLocaleString('en');
}
