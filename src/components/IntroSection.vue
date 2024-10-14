<template>
<!-- Home Section -->

<section id="home" class="parallax-section">
     <div class="container">
     <div class="row">

          <div class="col-md-6 col-sm-6">
            <div class="home-img"></div>
          </div>

          <div class="col-md-6 col-sm-6">
               <div class="home-thumb">
                    <div class="section-title">
                    <h1 class="wow fadeInUp" data-wow-delay="0.3s">{{ $t("welcome") }}</h1>
                    <h3 class="wow fadeInUp" data-wow-delay="0.6s" style="color: black">{{ $t("welcome1") }}<strong>{{ $t("welcome2") }}</strong>{{ $t("welcome3") }}</h3>
                    <p class="wow fadeInUp" data-wow-delay="0.9s">{{ $t("welcome4") }}</p>
                            
                    <router-link to="/about" class="wow fadeInUp smoothScroll section-btn btn btn-success" data-wow-delay="1.4s">{{ $t("getstart") }}</router-link>
                              
                    </div>
               </div>
          </div>

     </div>
     </div>
</section>

</template>
<script>
export default {
    
}
</script>