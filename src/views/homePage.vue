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

  export default {
    components:{
        NavBar,
        IntroSection,
        BigIdea,
        Rules,
        judging,
        FAQ,
        TimeLine,
        PrizesVue
        
    },
    name: 'homePage',
    
  }
  </script>
  
  <style>
  
  </style>
  