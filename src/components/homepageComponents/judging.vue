<template>
  <section class="wrapper flex justify-center">
  <section class=" py-[4rem] mb-2 w-[90%] mx-auto flex flex-col lg:flex-row justify-between max-w-[1500px]">
    <section class="flex justify-center lg:w-[50%]">
      <img src="../../assets/svg/judging.svg" alt="judges" />
    </section>

    <section class="lg:w-[48%]"> 
      <h2 class="text-center lg:text-left  lg:text-[2rem]">
        Judging Criteria <br />
        <span class="text-[#D434FE]">Key attributes </span>
      </h2>

      <div class=" mt-[1rem] ">
        <p class="mt-[1.25rem] lg:text-left text-[0.75rem] lg:text-[1rem]">
          <span class="text-[#FF26B9]"> Innovation and Creativity: </span>
          <span class="expantiation"
            >Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.</span
          >
        </p>
        <p class="mt-[1.25rem] lg:text-left text-[0.75rem] lg:text-[1rem]">
          <span class="text-[#FF26B9]">Functionality: </span>
          <span class="expantiation">
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.</span
          >
        </p>
        <p class="mt-[1.25rem] lg:text-left text-[0.75rem] lg:text-[1rem]">
          <span class="text-[#FF26B9]">Impact and Relevance: </span>
          <span class="expantiation">
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.</span
          >
        </p>
        <p class="mt-[1.25rem] lg:text-left text-[0.75rem] lg:text-[1rem]">
          <span class="text-[#FF26B9]">Technical Complexity: </span>
          <span class="expantiation">
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the
            solution.</span
          >
        </p>
        <p class="mt-[1.25rem] lg:text-left text-[0.75rem] lg:text-[1rem]">
          <span class="text-[#FF26B9]">Adherence to Hackathon Rules: </span>
          <span class="expantiation">
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.</span
          >
        </p>
       
      </div>
      <div class="flex justify-center lg:justify-start mt-[2rem]">
      <button class="button">Read more</button>
    </div>
    </section>
  </section>
</section>
</template>

<script>
export default {
  name: "judgingCriteria",
};
</script>

<style>
.expantiation {
  color: #fff;
  font-family: Montserrat;
  /* font-size: 0.75rem; */
  font-style: normal;
  font-weight: 400;
  line-height: 173.5%;
}

</style>
