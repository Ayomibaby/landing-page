<template>
 <section>
    <div class="flex gap-x-6 items-center mt-[2rem]">
        <div class="flex items-center flex-col gap-y-1">
          <img src="../../assets/svg/line.svg" />
          <h6
            class="text-white w-[1.2075rem] h-[1.2075rem] text-center rounded-full "
          >
            {{ directions.no }}
          </h6>
        </div>
        <div>
          <h5 class="text-[#D434FE] mb-[1rem]">{{ directions.title}}</h5>
          <h5>
          {{ directions.text }}
          </h5>
          <h5 class="text-[#D434FE] mt-[0.75rem]">{{directions.date}}</h5>
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
  