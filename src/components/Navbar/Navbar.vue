<template>
  <section>
    <section class="nav  py-[1.5rem] px-[2rem] md:px-[7rem]">
      <h2 class="md:text-[2.25rem] text-[0.9375rem]">get<span class="linked">linked</span></h2>

      <div class="contents md:hidden">
        <img
          @click="mobile = !mobile"
          src="../../assets/svg/hamMenu.svg"
          alt="hamburger menu"
        />
      </div>
      <div class="hidden md:contents">
        <ul class="nav-list">
          <li class="nav-item">Timeline</li>
          <li>Overview</li>
          <li>FAQs</li>
          <li>Contact</li>
          <li>
            <button>Register</button>
          </li>
        </ul>
      </div>
    </section>

    <section v-show="mobile" class="fixed top-0 z-10 bg-[#150E28] w-[100%] ">
      <section class="sec">
        <div class="close">
          <img
            src="../../assets/svg/close.svg"
            alt="close menu"
            @click="mobile = !mobile"
          />
        </div>
        <div class="menu-list">
          <h3>Timeline</h3>
          <h3>Overview</h3>
          <h3>FAQs</h3>
          <h3>Contact</h3>
          <button class="mt-[2rem]">Register</button>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  components: {},
  name: "Nav-bar",
  data() {
    return {
      mobile: false,
    };
  },
};
</script>

<style scoped>
.nav {
  /* padding: 1.5rem ; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.18);
  
}

h2 {
  font-family: Clash Display;
  /* font-size: 0.9375rem; */
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: white;
}
h3 {
  color: #fff;
  font-family: Inter;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-top: 2rem;
}
button {
  color: #fff;
  /* margin-top: 2rem; */
  padding: 1rem 3rem;
  /* width: 70%; */
  border-radius: 0.25rem;
  background: linear-gradient(
    270deg,
    #903aff 0%,
    #d434fe 56.42%,
    #ff26b9 99.99%,
    #fe34b9 100%
  );
}
.nav-list {
  display: flex;
  color: white;
  gap:  3.5rem;
  align-items: center;
}
.nav-item{
  color: #FFF;
font-family: Montserrat;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.linked {
  color: #d434fe;
}
.sec {
  padding: 3.37rem;
  height: 100vh;
}
.close {
  display: flex;
  justify-content: right;
}

.menu-list {
  margin-top: 3rem;
}
</style>
