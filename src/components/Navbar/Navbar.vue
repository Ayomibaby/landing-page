<template>
   <section >
    <section class="nav">
    <h2>get<span class="linked">linked</span></h2>
    <img src="../../assets/svg/hamMenu.svg" alt="hamburger menu"/>
  </section>
    <Menu/>
   </section>

  </template>
  
  <script>
  import Menu from './Menu.vue';
  export default {
    components:{
      Menu
    },
    name: 'Nav-bar',
    
  }
  </script>
  
  <style scoped>
  .nav{
    padding: 1.75rem 3.37rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid white;
    

  }
  h2{
    font-family: Clash Display;
font-size: 0.9375rem;
font-style: normal;
font-weight: 700;
line-height: normal;
color: white;
}
  .linked{
    color: #D434FE;
  }
  </style>
  