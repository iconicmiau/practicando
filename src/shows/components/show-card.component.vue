<script>
export default {
  name: "show-card.component",
  props: {
    show: Object
  }
}
</script>

<template>
<pv-card>
  <template #header>
    <h1>ID: {{show.id}}</h1>
    <h2>Name: {{show.name}}</h2>
  </template>
  <template #content>
    <p>SEASON: {{show.season}}</p>
    <p>NUMBER: {{show.number}}</p>
    <p v-html="show.summary"></p>
    <img class="show-img" :src="show.image" :alt="show.name" />
  </template>
  <template #footer>
    <div class="show-url">
    <span>GO TO: <a :href="show.url">{{show.url}}</a> </span>
    </div>
  </template>

</pv-card>
</template>

<style scoped>
.show-img{
  max-width: 40%;
}

.show-url {
  font-size: small;
  text-align: center;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
  word-break: break-word;

}

</style>