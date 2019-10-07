<template>
  <div class="landing" id="body-overlay">
   
      <div class='preloader'><div class='loaded'>&nbsp;</div></div>
      <header id="home" class="header navbar-fixed-top">
          <div class="navbar navbar-default main-menu">
              <div class="container">
                  <div class="navbar-header">
                      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                          <span class="icon-bar"></span>
                      </button>
                      <a  v-scroll-to="'#body-overlay'" href="#" class="navbar-brand"><img src="/assets/images/logo.png" alt="Logo" /></a>
                      <!-- <a class="navbar-brand" href="index.html"></a> -->
                  </div>
                  <div class="collapse navbar-collapse">
                      <ul class="nav navbar-nav navbar-right" id="navbarMenu">
                          <!--<li :class="{'active':index == clicked}" @click="clicked = index" v-for="(value, index) in navbarList" :key=value :index=index>
                             <a class="nav-link" href="#"  v-scroll-to="'#'+value">{{ $t('landing.navbar.'+value) }}</a>
                          </li>  -->
                        <scrollactive
                              class="my-nav"
                              active-class="active"
                             bezier-easing-value=".5,0,.35,1"
                              >
                                <a :href='"#"+value' class="scrollactive-item nav-link" v-for="(value, index) in navbarList" :key=value :index=index>
                                    {{ $t('landing.navbar.'+value) }}
                                </a>
                        </scrollactive>
                      </ul>
                  </div>
              </div>
          </div> <!-- end of navbar -->
      </header>
      <section id="home">
          <div id="bgimage" class="header-image">
              <div class="container">
                  <div class="row">

                      <div class="col-sm-5 col-xs-12">
                          <div class="iphone center-content wow fadeInLeft" data-wow-duration="1s">
                              <img src="/assets/images/iphone.png" alt="" />
                          </div>
                      </div>

                      <div class="col-sm-7 col-xs-12 heading-text">
                          <div class="single_home_content wow zoomIn" data-wow-duration="1s">
              <h1>Etrafındaki insanlarla tanış!</h1>
              <p class="bannerDescription">Buptis'e kaydol, bulunduğun ortamdaki kullanıcılarla tanış!</p>
              <div class="down_text_des wow fadeInUp" data-wow-duration="1.5s" style="display:flex">
                          <a><img src="/assets/images/d1.png" alt="" /></a>
                          <a><img src="/assets/images/d2.png" alt="" /></a>
                          
                      </div>
            </div>
                      </div>

                  </div> <!-- end of row -->
              </div> <!-- end of container -->

              <div class="scrolldown">
                  <a v-scroll-to="'#nasilKullanilir'" style="cursor:pointer" class="scroll_btn"></a>
              </div>

          </div>

      </section>


      <!-- Our Works Section -->

     

      <!-- Description Second Section -->

      <section id="nasilKullanilir">
          <div class="container">
              <div class="row">
                  <div class="main_description_second_contant">
                      <div class="col-md-6 col-sm-6 wow fadeIn" data-wow-duration="1.5s">
                          <div class="second_heading_text top-margin">
                              <h1>Nasıl Kullanılır?</h1>
                              <p style="color:#23388f; margin-top: -10px;">Oldukça basit!</p>
                          </div>

                          <div class="second_bottom_text">
                              <div class="row">
                                  <div class="col-md-6 col-sm-6">
                                      <div class="second_single_text">
                                        
                                          <div class="right_bottom_description">
                      
                                              <h6>1. Adım</h6>
                                              <p>Buptis'e kaydol!
                      Sana en yakın, en popüler mekanları gör veya herhangi bir mekan ara.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-md-6 col-sm-6">
                                      <div class="second_single_text">
                                        
                                          <div class="right_bottom_description">
                                              
                      <h6>2. Adım</h6>
                                              <p>İstersen gitmeyi planladığın mekana gideceğini bildir.</p>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-md-6 col-sm-6">
                                      <div class="second_single_text">
                                        
                                          <div class="right_bottom_description">
                                              
                      <h6>3. Adım</h6>
                                              <p>Bulunduğun mekanda kendini pinle ve mekandaki diğer insanlarla anlık mesajlaş!</p>
                                          </div>
                                      </div>
                                  </div>
                                  
                              </div>
                          </div>

                      </div>


                      <div class="col-md-6 col-sm-6">
                          <div class="right_desc_img center-content wow fadeInRight" data-wow-duration="1.5s">
                              <img src="/assets/images/iphone4.png" alt="" />
              
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </section>


     
      <!-- Apps Gallary  -->

      <section id="appsGallery">
          <div class="container">
              <div class="row">
                  <div class="gallery_heading_text center-content">
                      <h1>Galeri</h1>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12"> 
                    <carousel class="gallery_carousel center-content" items:4 :responsive="{0:{items:1,nav:false},600:{items:4,nav:false,}}">
                       
                            <div class="single_gallery">
                              <img src="/assets/images/g1.png" alt="" />
                          </div>
                       
                              <div class="single_gallery">
                              <img src="/assets/images/g2.png" alt="" />
                          </div>
                       
                            <div class="single_gallery">
                              <img src="/assets/images/g3.png" alt="" />
                          </div>
                       
                            <div class="single_gallery">
                              <img src="/assets/images/g4.png" alt="" />
                          </div>
                        
                    </carousel>
                  </div>
              </div>
          </div>
      </section>

      <footer id="footer" class="center-content">
          <div class="container">
              <div class="row">
                  <div>
                      <div class="socail_bookmark">
            <a><i class="fa fa-facebook"></i></a>
                          <a><i class="fa fa-twitter"></i></a>
                          <a><i class="fa fa-instagram"></i></a>
            <a><i class="fa fa-youtube-play"></i></a>
                      </div>
                  </div>
        <section style="background-color: white; text-decoration: none;">
             <a href="/assets/doc/buptis_kullanim-kosullari.pdf" target="_blank">Kullanım Koşulları</a>
             <a href="/assets/doc/buptis_gizlilik-politikasi.pdf" target="_blank">Gizlilik Politikası</a>
        </section>
              </div>
          </div>
      </footer>



      <!-- START SCROLL TO TOP  -->

      <div class="scrollup" v-scroll-to="'#body-overlay'">
          <a><i class="fa fa-chevron-up"></i></a>
      </div>

      <div id></div>

  </div>
</template>

<script>
export default {

    data(){
        return{
            isOpen:false,
            navbarList:['nasilKullanilir','appsGallery'],
        }
    },
      created: function() {
    document.body.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    document.body.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scroll = document.body.scrollTop
    },
  }
};
</script>

<style>
.owl-theme .owl-dots{
    padding-bottom: 50px
}
.owl-theme .owl-dots .owl-dot.active span{
        opacity: 1;
}
.owl-theme .owl-dots .owl-dot span{
    background: #ff792d !important;
    opacity: 0.5;
    display: block;
    width: 12px;
    height: 12px;
    margin: 5px 7px;
    filter: Alpha(Opacity=50);
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
}
@media only screen and (max-width: 489px) {
    .owl-carousel .owl-item img{
      max-width: 100%;
      width:unset;  
    }
    .single_gallery {
    padding: 0 8vh;
    }
}
</style>