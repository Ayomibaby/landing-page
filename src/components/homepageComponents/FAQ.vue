<template>
  <section class="wrapper flex justify-center">
  <section id="faq" class="py-[3.75rem] w-[90%] mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center max-w-[1500px]">
    <section class=" lg:w-[50%]">
      <div>
        <h2 class="text-center mb-[0.38rem] lg:text-[2rem] lg:text-left">
          Frequently Ask <br />
          <span class="text-[#D434FE]">Question</span>
        </h2>
        <h5 class="text-center lg:text-left lg:text-[0.85rem] leading-7">
          We got answers to the questions that you might<br />
          want to ask about <span class="font-bold">getlinked Hackathon 1.0</span> 
        </h5>
      </div>

      <section id="accordion">
        <div >
        <accordionItem v-for="quest in questions" :question="quest" :key="quest.key" />

      </div>
      </section>
    </section>

    <section class="flex justify-center mt-[5rem] lg:w-[50%]">
      <div>
        <div class="flex gap-x-10 pl-[10%] lg:pl-[20%] mb-0">
          
          <img src="../../assets/svg/fadedQuestion.svg" />
          <img src="../../assets/svg/questionMark.svg" />
          <img src="../../assets/svg/fadedQuestion.svg" />
        </div>
        <img src="../../assets/svg/thinking.svg" alt="thinking man" />
      </div>
    </section>
  </section>
</section>
</template>

<script>
import accordionItem from "@/components/ui/accordionItem.vue";
export default {
  components: {
    accordionItem,
  },
  name: "frequentQuestions",
  data() {
    return {
      questions:[ 
         {key:1, question: "Can I work on a project I started before the hackathon?", details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
      {key:2, question: "What happens if I need help during the hackathon?", details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      {key:3, question: "What happens if I don't have an idea for a project?", details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
      {key:4, question: "Can I join a team or do I have to come with one?", details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
      {key:5, question: "What happens after the hackathon ends?", details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
      {key:6, question: "Can I work on a project I started before the hackathon?", details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    ]
    };
  },
};
</script>

<style scoped>
#accordion {
  margin-top: 3rem;

}
</style>
