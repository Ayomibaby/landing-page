<template>
    <section class="sec">
    <div class="close " >
      <img src="../../assets/svg/close.svg" alt="close menu"/>
    </div>
    <div class="list">
    <h3>Timeline</h3>
    <h3>Overview</h3>
    <h3>FAQs</h3>
    <h3>Contact</h3>
    <button>Register</button>
</div>
</section>
  </template>
  
  <script>
  
  
  export default {
    name: 'Menu-name',
    
  }
  </script>
  
  <style scoped>
  .sec{
    padding: 3.37rem;
  }
  .close{
 display: flex;
 justify-content: right;
 /* border: 2px solid #903AFF;
 width: 20%;

padding: 10px;
 border-radius: 50%; */
 

  }
  h3{
    color: #FFF;
font-family: Inter;
font-size: 1.125rem;
font-style: normal;
font-weight: 500;
line-height: normal;

margin-top: 2rem;
  }
  button{
    color: #FFF;
    margin-top: 2rem;
    padding: 1rem 0;
    width: 70%;
    border-radius: 0.25rem;
    background: linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%);
  }
  .list{
    margin-top: 3rem;
  }
  </style>
  