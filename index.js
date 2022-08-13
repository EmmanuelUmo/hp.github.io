// Swiper js
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     // grabCursor: true,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });


//for home section


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  effect: "fade",
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  autoplay:{
    delay: 5500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


  
  
  // Nav open close
  const body = document.querySelector('body'),
        navMenu = body.querySelector('.menu-content'),
        navOpenBtn = body.querySelector('.navOpen-btn'),
        navCloseBtn = navMenu.querySelector('.navClose-btn');
  
  if(navMenu && navOpenBtn){
    navOpenBtn.addEventListener("click", () =>{
      navMenu.classList.add("open");
      body.style.overflowY = "hidden";
    })
  }
  
  if(navMenu && navCloseBtn){
    navCloseBtn.addEventListener("click", () =>{
      navMenu.classList.remove("open");
      body.style.overflowY = "scroll";
    })
  }
  
  // Change header bg color
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
  
    if(scrollY > 5){
      document.querySelector("header").classList.add("header-active");
    }else{
      document.querySelector("header").classList.remove("header-active");
    }
  
    // Scroll up button
    const scrollUpBtn = document.querySelector('.scrollUp-btn');
  
    if(scrollY > 250){
      scrollUpBtn.classList.add("scrollUpBtn-active");
    }else{
      scrollUpBtn.classList.remove("scrollUpBtn-active");
    }
    
    
    // Nav link indicator
  
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section =>{
      const sectionHeight = section.offsetHeight,
            sectionTop = section.offsetTop - 100;
  
            let navId = document.querySelector(`.menu-content a[href='#${section.id}']`);
            if(scrollY > sectionTop && scrollY <=  sectionTop + sectionHeight){
              navId.classList.add("active-navlink");           
            }else{
              navId.classList.remove("active-navlink");     
            }
            
            navId.addEventListener("click", () => {
              navMenu.classList.remove("open");
              body.style.overflowY = "scroll";
            })
    })
  })  
    
    
    // Scroll Reveal Animation
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    })
    
    sr.reveal(`.section-title, .section-subtitle, .section-description, .brand-image, .tesitmonial, .newsletter 
  .logo-content, .newsletter-inputBox, .newsletter-mediaIcon, .footer-content, .footer-links`, {interval:100,})
  
  sr.reveal(`.about-imageContent, .menu-items`, {origin: 'left'})
  sr.reveal(`.about-details, .time-table`, {origin: 'right'})

  //USERNAME CSS//
  
       const username= document.getElementById("username");
       function counter(){
           var name = prompt("What's your name?");
           username.innerText = name;
       }
  
       counter();
   


  // view counter

   const count = document.getElementById("count");

   incrementVisitsCount();
    
   function incrementVisitsCount(){
    let visits;

    if(!localStorage.getItem("visits"))localStorage.setItem("visits", 1);
    else{
      visits = +localStorage.getItem("visits");
      const incrementCount = visits + 1;

      localStorage.setItem("visits", incrementCount);
    }
    count.innerText = localStorage.getItem("visits")
   }






   /* CONTINUOUS SCROLLING TICKER JS CODE */
/* DATE */
var datetime = new Date().toLocaleDateString();
document.getElementById("date").innerHTML = ` Date ${datetime} `; 

/* TIME */
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleTimeString();
  timeDisplay.innerHTML = ` Time ${dateString} `;
}
  setInterval(refreshTime, 1000);

/* LOCATION */
var userlocation = document.getElementById("location");

function getLocation() {
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
} else {
    userlocation.innerHTML = "Geolocation is not supported by this browser.";
}
}

function showPosition(position) {
    userlocation.innerHTML = ` Location ${position.coords.latitude}${position.coords.longitude} `;
}

function showError(error) {
if(error.PERMISSION_DENIED){
    userlocation.innerHTML = "The User have denied the request for Geolocation.";
}
}
getLocation();     






