document.write(`

<!--==============================
Preloader
==============================-->
<div class="preloader ">
   <button class="th-btn preloaderCls">Cancel Preloader </button>
   <div class="preloader-inner">
       <div class="loader">
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
           <span></span>
       </div>
   </div>
</div>

<div class="popup-search-box d-none d-lg-block">
   <button class="searchClose"><i class="fal fa-times"></i></button>
   <form action="#">
       <input type="text" placeholder="What are you looking for?">
       <button type="submit"><i class="fal fa-search"></i></button>
   </form>
</div><!--==============================
Mobile Menu
============================== -->
<div class="th-menu-wrapper">
   <div class="th-menu-area text-center">
       <button class="th-menu-toggle"><i class="fal fa-times"></i></button>
       <div class="mobile-logo">
           <a href="index.html"><img src="assets/img/logo.svg" alt="Rakar"></a>
       </div>
       <div class="th-mobile-menu">
           <ul>
           <li><a href="index.html">Home</a></li>
           <li><a href="about.html">About Us</a></li>
           <li><a href="about.html">Corporate</a></li>
           <li><a href="about.html">Industries We Serve</a></li>
           <li class="menu-item-has-children">
           <a href="#">Our Services</a>
           <ul class="sub-menu">
               <li><a href="service.html">Our Services</a></li>
               <li><a href="service-details.html">Service Details</a></li>
           </ul>
       </li>
              
             
           </ul>
       </div>
   </div>
</div><!--==============================
Header Area
==============================-->
<header class="th-header header-layout1 style-black">
   <div class="header-top">
       <div class="container">
           <div class="row justify-content-center justify-content-lg-between align-items-center gy-2">
               <div class="col-auto d-none d-lg-block">
                   <div class="header-links">
                       <ul>
                           <li><i class="fas fa-location-dot"></i> ${address}</li>
                           <li><i class="fas fa-clock"></i> Sun to Saturday: 8.00 am - 7.00 pm</li>
                       </ul>
                   </div>
               </div>
               <div class="col-auto">
                   <div class="header-links">
                       <ul>
                           <li class="d-none d-md-inline-block"><i class="fas fa-messages"></i> <a href="faq.html">FAQ</a></li>
                           <li><i class="fas fa-headset"></i> <a href="${whatsapp}">Support</a></li>
                           <li><i class="fas fa-user"></i> <a href="${whatsapp}">Sign In / Register</a></li>
                       </ul>
                   </div>
               </div>
           </div>
       </div>
   </div>
   <div class="sticky-wrapper">
       <!-- Main Menu Area -->
       <div class="container">
           <div class="menu-area">
               <div class="row align-items-center justify-content-between">
                   <div class="col-auto">
                       <div class="header-logo">
                           <a href="index.html"><img src="assets/img/logo-white.svg" alt="Rakar"></a>
                       </div>
                   </div>
                   <div class="col-auto">
                       <nav class="main-menu d-none d-lg-inline-block">
                           <ul>
                               <li><a href="index.html">Home</a></li>
                               <li><a href="about.html">About Us</a></li>
                               <li><a href="about.html">Corporate</a></li>
                               <li><a href="about.html">Industries We Serve</a></li>
                               
                               <li class="menu-item-has-children">
                                   <a href="#">Our Services</a>
                                   <ul class="sub-menu">
                                       <li><a href="service.html">Our Services</a></li>
                                       <li><a href="service-details.html">Service Details</a></li>
                                   </ul>
                               </li>
                               
                              
                           </ul>
                       </nav>
                       <button type="button" class="th-menu-toggle d-block d-lg-none"><i class="far fa-bars"></i></button>
                   </div>
                   <div class="col-auto d-none d-xl-block">
                       <div class="header-button">
                           <a class="header-call" href="tel:${number2}"><span class="icon-btn"><i class="fas fa-phone-volume"></i></span> ${number1}</a>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
</header>


`);
