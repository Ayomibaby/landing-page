<template>
  <section class="py-[5rem] wrapper w-[90%] mx-auto">

    <div>
    <h2 class="text-center">
      Prizes and <br />
      <span class="text-[#D434FE]">Rewards</span>
    </h2>
    <h5 class="text-center mt-[0.5rem] px-[3rem]">
      Highlight of the prizes or rewards for winners and for participants.
    </h5>
  </div>

    <div class="flex justify-center">
    <img src="../../assets/svg/throphy.svg" class="w-[20rem] h-[17rem] mt-[2.5rem] " />
  </div>

  <section class="flex justify-between mt-[6rem]">
    <winnerCard v-for="place in Places" :post="place" :key="place.position"/>
    
  </section>
  </section>
</template>

<script>
import winnerCard from '../ui/winnerCard.vue';
export default {
  name: "PrizesRewards",
  components:{
    winnerCard
  },
  data(){
    return{
      Places:[
            {
                position:"2nd",
               price: "N300,000",
               background: 'rgba(212, 52, 254, 0.12)',
               border: '#d434fe',
               medal: "secondPlace.svg" 
            },
            {
                position:"1st",
               price: "N400,000",
               background: 'rgba(144, 58, 255, 0.12)',
               border: '#903AFF',
               medal: "firstplace.svg"
            },
            {
                position:"3rd",
               price: "N150,000",
               background: 'rgba(212, 52, 254, 0.12)',
               border: '#d434fe',
               medal: "thirdplace.svg" 
            }

        ]
    }
  }
};
</script>

<style scoped></style>
