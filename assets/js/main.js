/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')



/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
skillsHeader = document.querySelectorAll('.skills__header')

function toggleskills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++)
    {
        skillsContent[i].className = 'skills__content skills__close' 
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click', toggleskills)
})

/*==================== QUALIFICATION TABS ====================*/

 const tabs= document.querySelectorAll('[data-target]');
   const    tabContents = document.querySelectorAll('[data-content]');

       tabs.forEach(tab =>{
           tab.addEventListener('click', () =>{
               const target = document.querySelector(tab.dataset.target)

               tabContents.forEach(tabContent => {
                   tabContent.classList.remove('qualification__active')
               })
               target.classList.add('qualification__active')
               tabs.forEach(tab => {
                   tab.classList.remove('qualification__active')
               })
               tab.classList.add('qualification__active')
           })
       })




/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
       modalBtns = document.querySelectorAll('.services__button'),
       modalCloses = document.querySelectorAll('.services__modal-close')

       let modal = function(modalClick){
           modalViews[modalClick].classList.add('active-modal')

       }
       modalBtns.forEach((modalBtn, i) => {
           modalBtn.addEventListener('click', () =>{
               modal(i)
           })
       })
       modalCloses.forEach((modalClose)=> {
           modalClose.addEventListener('click',()=>{
               modalViews.forEach((modalView) =>{
                   modalView.classList.remove('active-modal')

               })
           })
       })
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
   
  });

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
   
    loop:true,
    grabCursor:true,
    spaceBetween: 48,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
   
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/  
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*==================== Contact ====================*/  
 
$(document).ready(function(){
    let emailError=true;
    let nameError=true;
    let contactError=true;
  
    $('#email_Err').hide();
    $("#inputEmail").keyup(function(){
      $('#form__message').html("");
     validateEmail();
    
    });
  
    $('#name_Err').hide();
  
    $("#inputName").keyup(function(){
      $('#form__message').html("");
      validateName();
      
     });
  
    $('#contact_Err').hide();
  
      $("#inputContact").keyup(function(e){
      var keyCode=e.which;
      validateContact(keyCode);
     });
  
  
  function validateEmail()
  {
    let email=$('#inputEmail').val();
    var emailRegx=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if(email==null || email=="")
    {
      $('#email_Err').show();
      $('#email_Err').html("*email required");
     // $("#inputEmail").css("border", "1px solid red");
      emailError=false;
      return false;
    }
    else if(! email.match(emailRegx)){
  
      $('#email_Err').show();
      $('#email_Err').html("**enter valid email");
     // $("#inputEmail").css("border", "1px solid red");
      emailError=false;
      return false;
  
      
    }
    else{
      $('#email_Err').hide();
     // $("#inputEmail").css("border","1px solid #ced4da");
      $("#inputEmail").css("border","none");


      emailError=true;
     return true;
  
    }
  
  }
  function validateName()
  {
   
    let name=$('#inputName').val();
    let strName=name.charAt(0);
    //var nameRegx=/^\S[a-zA-Z]+(\s+[-a-zA-Z-()]+)*$/;
    var nameRegx= /^[a-zA-Z][\sa-zA-Z]*/ ;
   // var nameRegx=/^[a-zA-Z ]{2,30}$/;
  
    if(name==null || name=="")
    {
      $('#name_Err').show();
      $('#name_Err').html("*name required");
    //  $("#inputName").css("border", "1px solid red");
      nameError=false;
      return false;
    }
     
    if(! name.match(nameRegx)){
  
      $('#name_Err').show();
      $('#name_Err').html("**only alphabets allowed");
     // $("#inputName").css("border", "1px solid red");
      nameError=false;
      return false;
  
      
    }
    else{
      $('#name_Err').hide();
      nameError=true;
     // $("#inputName").css("border","1px solid #ced4da");
     $("#inputName").css("border","none");

     return true;
  
    }
  }
  
  function validateContact(keyCode)
  {
  
    let contact=$('#inputContact').val();
    var contactRegx=/^\d{10}$/
    if(contact==null || contact =='')
    {
      $('#contact_Err').show();
      $('#contact_Err').html("*contact no: required");
     // $("#inputContact").css("border", "1px solid red");
      contactError=false;
      return false;
    }
  
    else if((keyCode != 8 || keyCode ==32 ) && (keyCode < 48 || keyCode > 57) && (keyCode != 46 && keyCode > 31 ) && (keyCode < 96 || keyCode > 105 ))
    
    {
      
        $('#contact_Err').show();
        $('#contact_Err').html("**only numbers allowed ");
        $('#inputContact').val($('#inputContact').val().replace(/[^0-9]/g, ''))
       // $("#inputContact").css("border", "1px solid red");
      contactError=false;
        return false;
      
    }
    else if(contact.length <10)
    {
       $('#contact_Err').show();
        $('#contact_Err').html("**contact no: should be 10 digits");
      //     $("#inputContact").css("border", "1px solid red");
        contactError=false;
        return false;
    }
    
    else{
  
  
      if(contact.length > 10)
      {
        $('#contact_Err').show();
        $('#contact_Err').html("**contact no: should not exceed 10 digits");
      //  $("#inputContact").css("border", "1px solid red");
        contactError=false;
        return false;
      }
      else{
      $('#contact_Err').hide();
      contactError=true;
      //$("#inputContact").css("border","1px solid #ced4da");
      $("#inputContact").css("border","none");
     return true;
      }
  
    }
  }
  $('#submit_btn').click(function () {
    let formMessage= $('#form__message').val();
    validateName();
    validateEmail();
    validateContact();
    if ((nameError == true) &&
        (emailError == true) &&  
        (contactError == true)) {
        return true;
    } else {
        //alert("Please fill the details")
        $('#form__message').html("*Please fill the above details")
        return false;
    }
  });
  
  
  });
  