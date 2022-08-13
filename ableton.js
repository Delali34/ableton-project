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
      let quantityInputs = document.getElementsByClassName('.cart-quantity');
      for (var i = 0; i < removeCartButtons.length; i++){
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
      }
    }
    function removeCartItem(event){
      let buttonClicked = event.target;
      buttonClicked.parentElement.remove();
      updatetotal();
    }
    // quantity chnages
    function quantityChanged(event){
      let input = event.target
      if (isNaN(input.value) || input.value <= 0 ){
        input.value = 1;
      }
      updatetotal();
    }
    // adding items
    function updatetotal(){
      let cartContent = document.getElementsByClassName('.cart-view')[0]
      let cartBoxes = cartContent.getElementsByClassName('.cart-box')
      let total =0;
      for (var i = 0; i < cartBoxes.length; i++){
        let cartBox = cartBoxes[i]
        let priceElement = cartBox.getElementsByClassName('.cart-price')[0]
        let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        let price = parseFloat(priceElement.innerText.replace('GHC', ''))
        let quantity = quantityElement.value
        total= total + (price * quantity);  
        document.getElementsByClassName('.total-price')[0].innerText = 'GHC' + total;
      }
    }
    // timer
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
   