document.write(`


<section class="space" id="process-sec" data-bg-src="assets/img/bg/process_bg_2.jpg">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-6 col-md-8">
                <div class="title-area text-center">
                    <span class="sub-title2"><img src="assets/img/theme-img/title_icon5_white.svg"
                            alt="Icon">Our Services</span>
                    <h2 class="sec-title text-white">What services we offer
                        </h2>
                    <p class="sec-text text-white">Our Team Of Experts Leading Mobile App and Web Development
                        Services Delivering Excellence Across India!</p>
                </div>
            </div>
        </div>

        <div class="process-box-wrap">
          
                CorporateWebsite2.forEach((element, index, array) => {
                     
            <div class="process-box">
                <div class="box-number">${element.number}</div>
                <div class="box-content">
                    <h3 class="box-title"><a href="${element.link}">${element.title}</a></h3>
                    <p class="box-text">${element.details}</p>
                </div>
            </div>
            
                     });
                
        </div>
    </div>
</section>


`);