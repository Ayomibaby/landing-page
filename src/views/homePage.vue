<template>
    <div id="app">
      
      <NavBar/>
      <IntroSection/>
      <BigIdea/>
      <Rules/>
      <judging/>
      <FAQ/>
      

    </div>
  </template>
  
  <script>
 import NavBar from "../components/Navbar/Navbar.vue";
 import IntroSection from "../components/homepageComponents/IntroSection"
 import BigIdea from "../components/homepageComponents/Bigidea.vue";
 import Rules from "@/components/homepageComponents/Rules.vue";
 import judging from "@/components/homepageComponents/judging.vue"
 import FAQ from "@/components/homepageComponents/FAQ.vue";

  export default {
    components:{
        NavBar,
        IntroSection,
        BigIdea,
        Rules,
        judging,
        FAQ
    },
    name: 'homePage',
    
  }
  </script>
  
  <style>
  
  </style>
  