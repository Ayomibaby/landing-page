<template>
  <section class="wrapper flex justify-center">
    <section class="md:w-[90%] md:mx-auto max-w-[1500px] ">
    <section class="w-[75%] mx-auto md:w-[100%]">
      <div class="flex md:justify-end justify-center">
        <h2 class="md:text-[2.25rem] text-[0.85rem] italic">
          Igniting a Revolution in HR Innovation
        </h2>
      </div>

      <div class="flex justify-end">
        <img
          src="../../assets/svg/underline.svg"
          alt="underline"
          class="md:hidden"
        />
        <div class="hidden md:contents">
          <img src="../../assets/svg/largeunderline.svg" alt="underline" />
        </div>
      </div>
    </section>

    <section class="md:flex">
    <section
      class="mt-[2rem]  w-[80%] lg:w-[65%] md:mx-0 mx-auto text-center md:text-start "
    >
      <section class="text-[2rem] md:text-[5rem]">

        <!-- <div class=" flex justify-between mx-auto  w-[50%] md:w-[65%] "> -->
          <img src="../../assets/svg/brightWhiteStar.svg" class="relative left-[35%] "/>
        
        <img src="../../assets/svg/inactiveStar.svg" class="absolute right-[20%] "/>
        <img src="../../assets/svg/lightbulb.svg" class="relative left-[78%] lg:left-[60%] mb-[-3%] w-[1.1rem] h-[1.6rem] lg:w-[3.3rem] lg:h-[3.6rem]" />
      <!-- </div> -->

     

        <h2  class="lg:text-[4rem] text-[2rem] ">getlinked Tech</h2>

        <div class="flex justify-center md:justify-start">
          <h2  class="lg:text-[4rem] text-[2rem] ">Hackathon <span class="text-[#D434FE]"> 1.0</span></h2>
          <img src="../../assets/svg/chain.svg" alt="chain" class="w-[2rem] h-[2rem] lg:w-[5rem] lg:h-[5rem]" />
          <img src="../../assets/svg/explosive.svg" alt="pow" class="w-[2rem] h-[2rem] lg:w-[4.5rem] lg:h-[4.5rem]" />
        </div>
      </section>
      <div class="w-[90%]  mx-auto md:mx-0  mt-[0.5rem]">
        <p class="lg:text-[1.25rem] text-[0.8125rem] lg:text-left">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
        <div >
        <button class="button mt-[3rem]">Register</button>
        <img src="../../assets/svg/inactiveStar.svg"/>
      </div>
      </div>
      <div class="mt-[0.75rem]">
        <h4>00<span class="text-[0.875rem]">H</span> 00<span class="text-[0.875rem]">M</span>  00<span class="text-[0.875rem]">S</span></h4>
      </div>
    </section>
    <section class="mt-[0.85rem] md:w-[45%] container-row">
      <img src="../../assets/svg/hackathonguy.svg" class="layer1"  />
      <img src="../../assets/svg/ShinyGlobe.svg" class="layer2"/>
    </section>
  </section>
  </section>
  </section>
</template>

<script>
export default {
  name: "intro-section",
};
</script>

<style scoped>
.container-row{
  display: grid;
}

.layer1, .layer2{
  grid-column: 1;
  grid-row: 1;
}
.wrapper {
  /* width: 85%;
  margin: auto; */
  padding-top: 2rem;
  background-image: url(../../assets/svg/highlight.svg);
  background-repeat: no-repeat;
  background-size: contain;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.18);
}
h2 {
  color: #fff;
  font-family: Montserrat;
  /* font-size: 2.25rem; */
  /* font-style: italic; */
  font-weight: 700;
  line-height: normal;
}
h4{
  color: #FFF;
font-family: Unica One;
font-size: 3rem;
font-style: normal;
font-weight: 400;
line-height: 133%; /* 3.99rem */
}
p{
  color: #FFF;
/* text-align: center; */
font-family: Montserrat;
/* font-size: 0.8125rem; */
font-style: normal;
font-weight: 400;
line-height: 166%; /* 1.34875rem */
}

</style>
