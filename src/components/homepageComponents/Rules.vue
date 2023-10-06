<template>
  <section class="wrapper">
  <section class="py-[2rem] w-[90%] mx-auto  mb-2 flex flex-col lg:flex-row lg:justify-between lg:items-center">
    <section class="flex justify-center mb-[0.63rem] woman-img">
      <img src="../../assets/svg/brightWhiteStar.svg"/>
      <img src="../../assets/svg/puzzle.svg" alt="woman" />
    </section>
    <section class="text-center px-[2.75rem] Rules ">
      <h2 class="pb-[0.5rem]">Rules and <br/><span class="text-[#D434FE] "> Guidelines</span></h2>
      <p>
        Our tech hackathon is a melting pot of visionaries, and its purpose is
        as clear as day: to shape the future. Whether you're a coding genius, a
        design maverick, or a concept wizard, you'll have the chance to
        transform your ideas into reality. Solving real-world problems, pushing
        the boundaries of technology, and creating solutions that can change the
        world, that's what we're all about!
      </p>
    </section>
  </section>
</section>
</template>

<script>
export default {
  name: "myRules",
};
</script>

<style scoped>
.woman-img{
  background-image: url(../../assets/svg/highlight.svg);
  background-repeat: no-repeat;
  background-size: contain;
  
  background-position: left ;
}
.Rules{
  background-image: url(../../assets/svg/highlight.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 100%;
  height: fit-content;
}

</style>
