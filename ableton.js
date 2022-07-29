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
  // cart
  let addCart = document.querySelector('#add-cart')
  let Cart = document.querySelector('.cart')
  let closeCart = document.querySelector('#cart-close')

//open cart
  addCart.onclick = function(){
    Cart.classList.add('active')
  };
  //close cart
  closeCart.onclick = function(){
    Cart.classList.remove('active')
  };
  // cart working
  // open view cart


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
