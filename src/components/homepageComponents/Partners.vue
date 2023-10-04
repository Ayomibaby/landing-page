<template>
  <section class="wrapper py-[3rem]  text-center w-[90%] mx-auto">
    <div>
      <h2 class="">Partners and Sponsors</h2>
      <p class="mt-2">
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>
    </div>
    <section class="sponsors">
      <div class="item">
        <img src="../../assets/svg/libertyAssured.svg" />
      </div>
      <div class="item">
        <img src="../../assets/svg/libertyPay.svg" />
      </div>
      <div class="item">
        <img src="../../assets/svg/winwise.svg" />
      </div>
      <div class="item">
        <img src="../../assets/svg/whispersms.svg" />
      </div>
      <div class="item">
        <img src="../../assets/svg/paybox.svg" alt="" class="w-[4rem]" />
      </div>
      <div class="item">
        <img src="../../assets/svg/visualPLus.svg" alt="" class="w-[4rem]" />
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "PartnersSponsors",
};
</script>

<style scoped>
.sponsors {
  margin-top: 3rem;
  border-radius: 0.3125rem;
  border: 1px solid #d434fe;
  background: rgba(255, 255, 255, 0.01);
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 3rem;
}
/* .item{
  /* border-right: 2px solid black ; */
  /* border-bottom: 2px solid black; */

</style>
