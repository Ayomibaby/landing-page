<template>
  <section class="container">
    <div class="colored-border">
      <img src="../assets/svg/Back.svg" alt="backbutton" />
    </div>

    <div class="headings">
      <h2 class="text-[#D434FE] font-semibold">
        Questions or need assistance?<br/> Let us know about it
      </h2>
      <h5 class="mt-4">Email us below to any question related to our event</h5>
    </div>

    <div>
        <form>
            <input class="input" placeholder="Team's Name"/>
            <input class="input"  placeholder="Topic"/>
            <input class="input"  placeholder="Email"/>
            <textarea class="input" placeholder="Message" />

            <div class="button-container">
           <button type="submit" class="button">Submit</button>
          </div>
        </form>
    </div>

    <section class="Share">
    <div >
        <h5 class="text-[#D434FE] text-center">Share on</h5>
        <div class="flex gap-x-3">
            <img src="../assets/svg/instagram.svg" alt="instagram"/>
            <img src="../assets/svg/twitter.svg" alt="twitter"/>
            <img src="../assets/svg/faceBook.svg" alt="facebook"/>
            <img src="../assets/svg/linkedIn.svg" alt="linkedin"/>
        </div>
    </div>
  </section>
  </section>
</template>

<script>
export default {
  name: "ConTact",
};
</script>

<style scoped>
.container {
  padding-top: 3rem;
  width: 80%;
  margin: auto;
}
.colored-border {
  border: 2px solid #ff26b9;
  width: 1.4375rem;
  height: 1.4375rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.headings{
    width: 75%;
    margin-top: 3rem;
}

.input{
    width: 100%;
    border-radius: 0.25rem;
border: 1px solid #FFF;
background: rgba(255, 255, 255, 0.03);
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
padding: 0.85rem 1.5rem;
margin-top: 1rem;
}
textarea{
    height: 10rem;
}
::placeholder{
    color: #FFF;
font-family: Montserrat;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}

.Share{
    /* margin-top: 3rem; */
    display: flex;
   justify-content: center;
   
    width: 100%;
    margin: 3rem auto;
}
.button-container{
  display: flex;
   justify-content: center;
}
</style>
