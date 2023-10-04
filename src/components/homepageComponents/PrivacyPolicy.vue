<template>
  <section class=" py-[5rem] text-center w-[80%] mx-auto">
    <section>
      <h2>
        Privacy Policy and <span class="text-[#D434FE] block"> Terms </span>
      </h2>
      <h5>Last updated on September 12, 2023</h5>
      <h5 class="mt-[1.75rem]">
        Below are our privacy & policy, which outline a lot of goodies. it’s our
        aim to always take of our participant
      </h5>
    </section>

    <section class="policy">
      <h5 class="leading-6 mb-[1.31rem]">
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

        <div class="mt-[2rem]">
            <button>Read More</button>
        </div>
      </section>
    </section>
    <section class="flex justify-center flex-col ">
    <section class="relative">
        <img src="../../assets/svg/GiantShield.svg" class="absolute top-0 left-0"/>
        <img src="../../assets/svg/openedLock.svg" class="absolute top-[100px] left-0" />
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
.policy {
  padding: 3rem 0.95rem;
  margin: 1.85rem 0;
  border-radius: 0.3125rem;
  border: 1px solid #d434fe;
  background: rgba(217, 217, 217, 0.03);
}
</style>
