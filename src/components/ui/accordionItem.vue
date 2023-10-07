<template>
   <section class="accordion-wrapper" @click="Reveal">
   
        <div class="accordion-item mx-auto lg:mx-0" >
            <h5 class="text-left">{{ question.question }}</h5>
            <img src="../../assets/svg/plus.svg" alt="plus"/>
        </div>
        <div v-show="open">
          <h5>{{ question.details }}</h5>
        </div>
    
   </section>
  </template>
  
  <script>

  export default {
    props:['question'],
    name: 'accordionItem',
    data(){
      return{
        open:false
      }
    },
    methods:{
      Reveal(){
        this.open = !this.open
      }
    }
    
  }
  </script>
  
  <style scoped>
  .accordion-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding-bottom: 0.75rem;
 

  
}

.accordion-wrapper{
  border-bottom: 2px solid #D434FE;
    margin-top: 0.83rem;
    width: 80%;
    padding-bottom: 0.75rem;
    cursor: pointer;
    
}

  </style>
  