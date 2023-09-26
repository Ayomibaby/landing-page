<template>
  <section class="wrapper mb-[200px]">
    <section class="md:w-[85%] md:mx-auto ">
    <section class="w-[75%] mx-auto md:w-[100%]">
      <div class="flex md:justify-end justify-center">
        <h2 class="md:text-[2.25rem] text-[1rem] italic">
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
      class="mt-[2rem]  w-[80%] md:w-[55%] md:mx-0 mx-auto text-center md:text-start "
    >
      <section class="text-[2rem] md:text-[5rem]">
        <div class=" flex justify-end w-[76%] md:w-[65%] mb-[-3%] ">
        <img src="../../assets/svg/lightbulb.svg" />
      </div>
        <h2 >getlinked Tech</h2>
        <div class="flex justify-center md:justify-start">
          <h2>Hackathon <span class="text-[#D434FE]"> 1.0</span></h2>
          <img src="../../assets/svg/chain.svg" alt="chain" />
          <img src="../../assets/svg/explosive.svg" alt="pow" />
        </div>
      </section>
      <div class="w-[80%] md:w-[65%] mx-auto md:mx-0 md:text-left mt-[0.5rem]">
        <p class="md:text-[1.25rem] text-[0.85rem]">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
        <button>Register</button>
      </div>
      <div class="mt-[0.75rem]">
        <h4>00<span class="text-[0.875rem]">H</span> 00<span class="text-[0.875rem]">M</span>  00<span class="text-[0.875rem]">S</span></h4>
      </div>
    </section>
    <section class="mt-[0.85rem] md:w-[45%]">
      <img src="../../assets/svg/hackathonguy.svg" />
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
.wrapper {
  /* width: 85%;
  margin: auto; */
  padding-top: 2rem;
  background-image: url(../../assets/svg/highlight.svg);
  background-repeat: no-repeat;
  background-size: contain;
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
button {
  color: #fff;
  margin-top: 1.5rem;
  padding: 1rem 3rem;
  /* width: 70%; */
  border-radius: 0.25rem;
  background: linear-gradient(
    270deg,
    #903aff 0%,
    #d434fe 56.42%,
    #ff26b9 99.99%,
    #fe34b9 100%
  );
}
</style>
