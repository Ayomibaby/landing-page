<template>
  <section class="py-[3.75rem]">
    <section class="px-[3rem]">
      <div>
        <h2 class="text-center mb-[0.38rem]">
          Frequently Ask <br />
          <span class="text-[#D434FE]">Question</span>
        </h2>
        <h5 class="text-center">
          We got answers to the questions that you might<br />
          want to ask about getlinked Hackathon 1.0
        </h5>
      </div>

      <section id="accordion">
        <accordionItem :question="question1" />
        <accordionItem :question="question2" />
        <accordionItem :question="question3" />
        <accordionItem :question="question4" />
        <accordionItem :question="question5" />
        <accordionItem :question="question6" />
      </section>
    </section>

    <section class="flex justify-center mt-[5rem]">
        <img src="../../assets/svg/thinking.svg" alt="thinking man"/>
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
      question1: "Can I work on a project I started before the hackathon?",
      question2: "What happens if I need help during the hackathon?",
      question3: "What happens if I don't have an idea for a project?",
      question4: "Can I join a team or do I have to come with one?",
      question5: "What happens after the hackathon ends?",
      question6: "Can I work on a project I started before the hackathon?",
    };
  },
};
</script>

<style scoped>
#accordion {
  margin-top: 3rem;
  padding: 0 1.75rem;
}
</style>
