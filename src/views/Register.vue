<template>
  <section class="container">
    <section>
      <div>
        <h2 class="text-[#D434FE]">Register</h2>
      </div>

      <div class="flex justify-center mt-[2rem]">
        <img src="../assets/svg/manATDesk.svg" />
      </div>
    </section>

    <section>
      <div class="movement-div">
        <h5>Be part of this movement!</h5>

        <div class="walkers">
          <img src="../assets/svg/walkingGirl.svg" />
          <img src="../assets/svg/walkingMan.svg" />
        </div>
      </div>
    </section>

    <section>
      <h2 class="font-normal">CREATE YOUR ACCOUNT</h2>

      <form class="flex flex-col gap-y-3 mt-[1rem]">
        <div>
          <label>Team’s Name</label>
          <input placeholder="Enter the name of your group" class="input" />
        </div>

        <div>
          <label>Phone</label>
          <input placeholder="Enter your phone number" class="input" />
        </div>

        <div>
          <label>Email</label>
          <input placeholder="Enter your email address" class="input" />
        </div>

        <div>
          <label>Project Topic</label>
          <input placeholder="What is your group project topic" class="input" />
        </div>

        <section class="select-boxes">
          <div>
            <label>Category</label>
            <select class="">
              <option>Select your category</option>
              <option>Front-end</option>
              <option>Mobile</option>
            </select>
          </div>

          <div>
            <label>Group Size</label>
            <select class="">
              <option>Select</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </section>
      </form>
    </section>

    <section>
      <p class="review">Please review your registration details before submitting</p>
      <div class="agreement-div">
        <input type="checkbox" />
        <h5 class="agreement">I agreed with the event terms and conditions and privacy policy</h5>
      </div>
      <div class="button-div">
      <button class="button">Submit</button>
    </div>
    </section>

    <div v-show="isRegistered"><Confirmation/></div>
    
  </section>
</template>

<script>
import Confirmation from "../components/modal/Confirmation.vue"
export default {
  name: "RegisterTion",
  components:{
    Confirmation
  }, 
  data(){
    return{
      isRegistered: false
    }
  }
};
</script>

<style scoped>
.container {
  width: 70%;
  margin: auto;
  padding: 2rem 0;
}
.movement-div {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-top: 1.4rem;
}
.walkers {
  display: flex;
  border-bottom: 2px dashed #d434fe;
  width: 35%;
}
label {
  color: #fff;
  font-family: Montserrat;
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: block;
  margin-bottom: 0.2rem;
}

.input {
  width: 100%;
  border-radius: 0.25rem;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 0.65rem 1.2rem;
}

select {
  border-radius: 0.25rem;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  height: 3rem;
  width: 100%;
}

.select-boxes {
  display: flex;
  gap: 1rem;
  width: 100%;
}

.review{
  color: #FF26B9;
font-family: Montserrat;
font-size: 0.5625rem;
font-style: italic;
font-weight: 400;
line-height: normal;
margin-top: 0.5rem;
}

.agreement{
  color: #FFF;
font-family: Montserrat;
font-size: 0.625rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.agreement-div{
  display: flex;
  gap: 0.5rem;
  margin-top: 0.85rem;
}

.button-div{
  display: flex;
  justify-content: center;
}
</style>
