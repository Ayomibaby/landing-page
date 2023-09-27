<template>
   <section>
   
        <div class="accordion-item">
            <h5 class="text-left">{{ question }}</h5>
            <img src="../../assets/svg/plus.svg" alt="plus"/>
        </div>

    
   </section>
  </template>
  
  <script>

  export default {
    props:{
        question: String
    },
    name: 'accordionItem',
 
    
  }
  </script>
  
  <style scoped>
  .accordion-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #D434FE;
    margin-top: 0.83rem;

  
}

  </style>
  