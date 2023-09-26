<template>
    <div id="app">
      
      <NavBar/>
      <IntroSection/>
    </div>
  </template>
  
  <script>
 import NavBar from "../components/Navbar/Navbar.vue";
 import IntroSection from "../components/homepageComponents/IntroSection"

  export default {
    components:{
        NavBar,
        IntroSection
    },
    name: 'homePage',
    
  }
  </script>
  
  <style>
  
  </style>
  