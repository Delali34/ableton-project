// carousel
var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
  });
  // carousel
  // stickybar
  window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY >0);
  })
  // stickybar
  // menu
  let addCart = document.querySelector('#add-cart')
  let Cart = document.querySelector('.cart')
  let cartView = document.querySelector('.cart-view')
  let closeCart = document.querySelector('#cart-close')
  let cartClosed = document.querySelector('#closingCart')


//open menu
  addCart.onclick = function(){
    Cart.classList.add('active')
  };
  //close cart
  closeCart.onclick = function(){
    Cart.classList.remove('active')
  };
  // menu working
  // open view cart

  function viewCart(){
    cartView.classList.add('active')
    };
    cartClosed.onclick = function(){
      cartView.classList.remove('active')
    };
//  working cart
    if (document.readyState =='loading'){
      document.addEventListener('DOMContentLoaded', ready)
    }
    else {
      ready()
    }
    // functionality
    function ready (){
      // remove item
      let removeCartButtons = document.getElementsByClassName('cart-remove') 
      console.log(removeCartButtons)
      for (var i = 0; i < removeCartButtons.length; i++){
        var button =removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
      }
      let quantityInputs = document.getElementsByClassName('cart-quantity');
      for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
      }
      // add to cart
      var addTocart = document.getElementsByClassName('add-cart')
      for (var i = 0; i < addTocart.length; i++){
        var button =addTocart[i];
        button.addEventListener('click', addCartClicked); 
      }
      document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked);
    }
    function buyButtonClicked(){
      alert(' Your order is successful')
      var cartContent = document.getElementsByClassName('cart-before')[0]
      while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild)
      }
      updatetotal();
    }
    function removeCartItem(event){
      let buttonClicked = event.target;
      buttonClicked.parentElement.remove();
      updatetotal();
    }
    // let Decrease = document.querySelector('#minus')
    // let Increase = document.getElementById('#plus')
    // let dispalyQuantity = document.getElementById('num')
    // let CartPrice = document.querySelector('.cart-price')
    // let totalPrice = document.querySelector('.total-price')
    // let total = 0
    // let first = 0
    //  function subtract(){
    //   if (first > 0){
    //     first--;
    //   }
    //   dispalyQuantity.textContent = first
    // };
    //  function add(){
    //   first +=1
    //   dispalyQuantity.textContent = first
    //  };
    
    
    // quantity chnages
    function quantityChanged(event){
      let input = event.target
      if (isNaN(input.value) || input.value <= 0 ){
        input.value  = 1;
      }
      updatetotal();
    }

  
    // // adding items
    function updatetotal(){
      let cartContent = document.getElementsByClassName('cart-view')[0]
      let cartBoxes = cartContent.getElementsByClassName('cart-box')
      let total =0;
      for (var i = 0; i < cartBoxes.length; i++){
        let cartBox = cartBoxes[i]
        let priceElement = cartBox.getElementsByClassName('cart-price')[0]
        let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        let price = parseFloat(priceElement.innerText.replace('GHC', ''))
        let quantity = quantityElement.value;
        total= total + (price * quantity);  
      }
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName('total-price')[0].innerText = 'GHC' + total;
      
    }
    // add to cart
    // let carts = document.querySelectorAll('.add-cart');

    // // for (let i=0; i < carts.length; i++){
    // //   carts[i].addEventListener('click', () =>{
    // //     cartNumbers();
    // //   })
    // // }
    // // function onLoadCartNumbers(){
    // //   let productNumbers = localStorage.getItem('cartNumbers');
    // //   if(productNumbers){
    // //     document.querySelector('.num-amount').textContent = '('+productNumbers+')';
    // //   }
    // // }
    // // function cartNumbers(){
    // //   let productNumbers = 0;

    // //   productNumbers = parseInt(productNumbers);
    // //   if (productNumbers){
    // //     (productNumbers + 1);
    // //     document.querySelector('.num-amount').textContent = '('+( productNumbers += 1) +')';
    // //   }else {
    // //     (productNumbers);
    // //     document.querySelector('.num-amount').textContent = '('+ 1 +')';
    // //   }
      
    // // }
    // // onLoadCartNumbers();


    function addCartClicked(event){
      var button = event.target; 
      var shopProducts = button.parentElement;
      var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
      var price = shopProducts.getElementsByClassName('price')[0].innerText;
      var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
      addProductToCart(title, price, productImg);
      updatetotal();
    }
    function addProductToCart(title, price, productImg){
      var cartShopBox = document.createElement('div');
      cartShopBox.classList.add('cart-box');
      var cartItems = document.getElementsByClassName('cart-before')[0]
      var cartItemNames = cartItems.getElementsByClassName('cart-product-title')
      for (var i = 0; i < cartItemNames.length; i++){
        if (cartItemNames[i].innerText == title){
          alert('You have already added this item to cart')
          return;
        }  
      }
        var productBoxContent = `
                                  <img src="${productImg}" alt="">
                                  <div class="detail-box">
                                      <div class="cart-product-title">${title}</div>
                                      <div class="cart-price">${price}</div>
                                      <input type="number" value="1" class="cart-quantity">
                                      </div>
                                  <!-- delete item -->
                                  <i class="fa-solid fa-trash cart-remove"></i>
      
      
      `;
      cartShopBox.innerHTML = productBoxContent;
      cartItems.append(cartShopBox);
      cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
      cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
      
    }



  const startMinutes = 60;
  let time = startMinutes * 60;
   const timerEl = document.getElementById("timer");
   setInterval(updatetimer, 1000)
   function updatetimer (){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds
    timerEl.textContent = 'STARTS IN' + ' ' +   minutes + ":" + seconds ;
    time--;
   }
   