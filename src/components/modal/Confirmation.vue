<template>
  <section class="modal-wrapper">
    <section class="modal-body">
      <div class="illustration">
        <img src="../../assets/svg/done.svg" />
      </div>

      <h2 class="success-heading">
        Congratulations <br/> you have successfully Registered!
      </h2>
      
      <h5 class="next-step">
        Yes, it was easy and you did it! check your mail box for next step<span><img src="../../assets/svg/wink.svg" class="inline"/></span>
      </h5>
      
   <div class="flex justify-center">
      <button class="button adj">Back</button>
    </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "ConfirmMessage",
};
</script>

<style scoped>
.modal-wrapper {
  /* fixed inset-0 bg-black bg-opacity-20 backdrop-blur-xs flex justify-center z-[20] */
  position: fixed;
  inset: 0;
  background-color: rgba(21, 14, 40, 0.93);
  /* opacity: 0.5; */
  /* backdrop-filter: blur(4px); */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.modal-body {
  /* bg-white lg:h-[80%] lg:w-[30%] w-[70%] h-[70%] md:h-[40%]  pt-[1rem] mt-[5rem] px-[1.25rem] transition ease-in-out duration-300 rounded-lg */
  /* background-color:white; */
  width: 70%;
  height: 60%;
  border-radius: 0.3125rem;
  border: 2px solid #d434fe;
  background: rgba(255, 255, 255, 0.01);
  z-index: 3;
  opacity: 1;
  padding:  1.5rem;
}

.success-heading{color: #FFF;
text-align: center;
font-family: Montserrat;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
margin: 2rem 0;
}

.next-step{
  color: #FFF;
text-align: center;
font-family: Montserrat;
font-size: 0.75rem;
font-style: normal;
font-weight: 500;
line-height: normal;
}

.illustration{
  display: flex;
  justify-content: center;
}
.adj{
  width: 100%;
}
</style>
