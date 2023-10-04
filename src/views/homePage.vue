<template>
    <div id="app">
      
      <NavBar/>
      <IntroSection/>
      <BigIdea/>
      <Rules/>
      <judging/>
      <FAQ/>
      <TimeLine/>
      <PrizesVue/>
      <Partners/>
      <PrivacyPolicy/>
      <Footer/>
      

    </div>
  </template>
  
  <script>
 import NavBar from "../components/Navbar/Navbar.vue";
 import IntroSection from "../components/homepageComponents/IntroSection"
 import BigIdea from "../components/homepageComponents/Bigidea.vue";
 import Rules from "@/components/homepageComponents/Rules.vue";
 import judging from "@/components/homepageComponents/judging.vue"
 import FAQ from "@/components/homepageComponents/FAQ.vue";
 import TimeLine from "@/components/homepageComponents/timeline.vue";
 import PrizesVue from "@/components/homepageComponents/Prizes.vue";
 import Partners from "@/components/homepageComponents/Partners.vue";
 import PrivacyPolicy from "@/components/homepageComponents/PrivacyPolicy.vue";
 import Footer from "@/components/homepageComponents/Footer.vue";

  export default {
    components:{
        NavBar,
        IntroSection,
        BigIdea,
        Rules,
        judging,
        FAQ,
        TimeLine,
        PrizesVue,
        Partners,
        PrivacyPolicy,
        Footer
        
    },
    name: 'homePage',
    
  }
  </script>
  
  <style>
  
  </style>
  