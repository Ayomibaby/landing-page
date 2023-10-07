<template>
 <section>

    <div class="flex gap-x-6 justify-center items-center mt-[2rem]">

        <div class="flex items-center flex-col gap-y-[0.5px] lg:order-2">
          <img src="../../assets/svg/line.svg" />
          <h6
            class="text-white w-[1.2075rem] h-[1.2075rem] text-center rounded-full "
          >
            {{ directions.no }}
          </h6>
        </div>

        <div class="lg:order-1 lg:w-[35%] lg:text-right">
          <h5 class="text-[#D434FE] mb-[1rem]">{{ directions.title}}</h5>
          <h5>
          {{ directions.text }}
          </h5>
          <div class="lg:order-3 lg:hidden contents">
          <h5 class="text-[#D434FE] mt-[0.75rem]">{{directions.date}}</h5>
        </div>
        </div>

        <div class=" lg:contents hidden">
          <h5 class="text-[#D434FE] mt-[0.75rem] order-3">{{directions.date}}</h5>
        </div>

      </div>
 </section>
  </template>
  
  <script>

  export default {
    
    name: 'StepsTaken',
    props:['directions'],
    mounted(){
console.log(this.directions)
  }
  }
 
  </script>
  
  <style scoped>
  
  </style>
  