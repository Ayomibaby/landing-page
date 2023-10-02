<template>
  <section class="cardWrapper">
    <img :src="require(`../../assets/svg/${post.medal}`)"  class=" mt-[-70%] md:mt-[-10%] mb-[1rem]"/>
    <h5>
     {{ post.position }}<br />
      Runner
    </h5>
    <h3 class="color">{{ post.price }}</h3>
  </section>
</template>

<script>
export default {
  name: "WinnersCard",
  props:['post'],
 
 
};
</script>

<style scoped>
.cardWrapper {
  width: 30%;
  /* height: 50%; */
  padding: 1.5rem 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid v-bind('post.border');
  background: v-bind('post.background');
  text-align: center;
}
.color{
    color: v-bind("post.border");
}
</style>
