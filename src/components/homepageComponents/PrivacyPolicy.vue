<template>
  <section class="flex justify-center">
  <section class=" py-[5rem] text-center lg:text-left w-[90%] mx-auto  max-w-[1500px]  lg:flex lg:justify-between lg:items-center">
    <section class="lg:w-[50%]">
      
    <section>
      <h2>
        Privacy Policy and <span class="text-[#D434FE] block"> Terms </span>
      </h2>
      <h5 class="lg:mt-[1rem]">Last updated on September 12, 2023</h5>
      <h5 class="mt-[1.75rem]">
        Below are our privacy & policy, which outline a lot of goodies. it’s our
        aim to always take of our participant
      </h5>
    </section>

    <section class="policy lg:px-[4.5rem] px-[0.85rem] py-[3rem]">
      <h5 class="leading-6 mb-[1.31rem] lg:text-[0.85rem] text-left">
        At getlinked tech Hackathon 1.0, we value your privacy and are committed
        to protecting your personal information. This Privacy Policy outlines
        how we collect, use, disclose, and safeguard your data when you
        participate in our tech hackathon event. By participating in our event,
        you consent to the practices described in this policy.
      </h5>
      <h3 class="text-[#D434FE] text-left">Licensing Policy</h3>
      <h5 class="text-left">Here are terms of our Standard License:</h5>

      <section>
        <div class="flex mt-2 gap-x-2">
          <div><img src="../../assets/svg/check.svg" class="w-[1.0625rem] h-[1.0625rem]"/></div>
          <div>
            <h5 class="text-left">
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </h5>
          </div>
        </div>

        <div class="flex mt-2 gap-x-2 ">
          <div><img src="../../assets/svg/check.svg" class="w-[1.0625rem] h-[1.0625rem]"/></div>
          <div>
            <h5 class="text-left">
              You are licensed to use the item available at any free source
              sites, for your project developement
            </h5>
          </div>
        </div>

        <div class="mt-[2rem] flex justify-center">
            <button class="button">Read More</button>
        </div>
      </section>
    </section>

  </section>

    <section class="flex justify-center flex-col lg:w-[40%]">

    <section class="container-row">
        <img src="../../assets/svg/GiantShield.svg" class="layer1"/>
        <img src="../../assets/svg/openedLock.svg" class="layer2" />
      </section>

  </section>

</section>
</section>
</template>

<script>
export default {
  name: "PrivacyPolicy",
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
.policy {
  /* padding: 3rem 0.95rem; */
  margin: 1.85rem 0;
  border-radius: 0.3125rem;
  border: 1px solid #d434fe;
  background: rgba(217, 217, 217, 0.03);
}
</style>
