<template>
  <section id="timeline" class="wrapper">
  <section class="py-[5rem] w-[90%] mx-auto  max-w-[1500px]" >
    <div class="px-[3rem]">
      <h2 class="text-center pb-[1rem] lg:text-[2rem]">Timeline</h2>
      <p>
        Here is the breakdown of the time we anticipate <br/>  using for the upcoming
        event.
      </p>
    </div>

   
   
      <div class="flex  mt-[3rem]">
        <div>
    <!-- <img src="../../assets/svg/smallPurpleStar.svg" class="relative left-[20%] width-[0.875rem] height-[1rem]"/> -->
      <Steps v-for="step in StepsTotake" :directions="step" :key="step.no"/>
<!--  </div>
        <img src="../../assets/svg/inactiveStar.svg" class="mt-4"/> -->
        </div>
      </div>
    

  </section>

  </section>

</template>

<script>
import Steps from '../ui/Steps.vue';
export default {
  name: "TimeLine",
  components:{
    Steps
  },
  data(){
return{

 StepsTotake: [   {
        no: 1,
title: "Hackathon Announcement",
text: "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
date: "November 18, 2023"

},
{
        no: 2,
title: "Teams Registration begins",
text: "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register ",
date: "November 18, 2023"

},
{
        no: 3,
title: "Teams Registration ends",
text: "Interested Participants are no longer Allowed to register ",
date: "November 18, 2023"

},
{
        no: 4,
title: "Announcement of the accepted teams and ideas",
text: "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced ",
date: "November 18, 2023"

},
{
        no: 5,
title: "Getlinked Hackathon 1.0 Offically Begins",
text: "Accepted teams can now proceed to build their ground breaking skill driven solutions ",
date: "November 18, 2023"

},
{
        no: 6,
title: "Demo Day",
text: "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day ",
date: "November 18, 2023"

}]
}
   
  }
};
</script>

<style>
h6 {
  background: linear-gradient(270deg, #903aff 0%, #d434fe 100%);
  color: #fff;
  font-family: Montserrat;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
