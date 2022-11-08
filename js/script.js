let searchForm = document.querySelector(".search-form");
let loginForm = document.querySelector(".login-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  signUp.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  signUp.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  navbar.classList.remove("active");
};

let signUp = document.querySelector(".sign-up");

document.querySelector("#open-sign-up").onclick = () => {
  signUp.classList.toggle("active");
  loginForm.classList.remove("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  signUp.classList.remove("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  signUp.classList.remove("active");
  navbar.classList.remove("active");
};

// var swiper = new Swiper(".product-slider", {
//     loop: true,
//     spaceBetween: 20,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     centeredSlides: true,
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         1020: {
//             slidesPerView: 3,
//         },
//     },
// });

// var swiper = new Swiper(".review-slider", {
//     loop: true,
//     spaceBetween: 20,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     centeredSlides: true,
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         1020: {
//             slidesPerView: 3,
//         },
//     },
// });

// const onLoad = () => {
//     const router = window.location.hash
//     switch (router) {
//         case `#dragonball`:
//             document.getElementById(`router`).innerHTML = `<section class="products" id="products">
//       <h1 class="heading"><span>Dragon Ball</span></h1>

//       <div class="product-slider">
//         <div class="wrapper">
//           <!-- 1 -->
//           <div class="box">
//             <img src="img/gohan.jpg" alt="" />
//             <h3>Son Gohan</h3>
//             <div class="price">$4.99/- - 10.99/-</div>
//             <div class="stars">
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars-half-alt"></i>
//             </div>
//           </div>
//           <!-- 2 -->
//           <div class="box">
//             <img src="img/gohan.jpg" alt="" />
//             <h3>Son Gohan</h3>
//             <div class="price">$4.99/- - 10.99/-</div>
//             <div class="stars">
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars-half-alt"></i>
//             </div>
//           </div>
//           <!-- 3 -->
//           <div class="box">
//             <img src="img/gohan.jpg" alt="">
//             <h3>Son Gohan</h3>
//             <div class="price">$4.99/- - 10.99/-</div>
//             <div class="stars">
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars-half-alt"></i>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div class="product-slider">
//         <div class="wrapper">
//           <!-- 4 -->
//           <div class="box">
//             <img src="img/son_go_ku.jpg" alt="">
//             <h3>Son Goku</h3>
//             <div class="price">$4.99/- - 10.99/-</div>
//             <div class="stars">
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars-half-alt"></i>
//             </div>
//           </div>
//           <!-- 5 -->
//           <div class="box">
//             <img src="img/son_go_ku.jpg" alt="">
//             <h3>Son Goku</h3>
//             <div class="price">$4.99/- - 10.99/-</div>
//             <div class="stars">
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars"></i>
//               <i class="fas fa-stars-half-alt"></i>
//             </div>
//           </div>
//           <!-- 6 -->
//           <div class="box">
//             <img src="img/son_go_ku.jpg" alt="">
//             <h3>Son Goku</h3>
//             <div class="price">$4.99/- -10.99/-</div>
//             <div class="stars">
//               <i class="fasfa-stars"></i>
//               <i class="fasfa-stars"></i>
//               <i class="fasfa-stars"></i>
//               <i class="fasfa-stars"></i>
//               <i class="fasfa-stars"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>`
//             break;
//     }
//     window.scrollTo(0,0)
// }
// onLoad();
