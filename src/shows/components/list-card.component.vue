<script>

import {ApiShowsService} from "../services/api-shows.service.js";
import ShowCard from "./show-card.component.vue";



export default {
  name: "list-card.component.vue",
  components: {ShowCard},
  data() {
    return {
      shows:[],
    }
  },
  methods: {
    async fetchData() {
      //try { logica  } -> catch { genera error } ->
      const data = await ApiShowsService.getData();
      this.shows = data;
      console.log(data);
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<template>
  <div class="show-grid">
    <show-card class="show-card" v-for="show in shows" :key="show.id" :show="show">
    </show-card>
  </div>


</template>

<style scoped>
.show-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* 3 columnas iguales */
  gap: 30px; /* espacio entre tarjetas */
  padding: 20px;
}

.show-card {
  margin: 0; /* se maneja el espaciado con gap */
}
</style>