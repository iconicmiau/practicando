<script>
export default {
  name: "language-switcher.component",
  computed: {
    currentLang: {
      get() {
        return this.$i18n.locale
      },
      set(value){
        this.$i18n.locale = value

      }
    }
  },
  data() {
    return {
      languages: ['en', 'es'],
    }
  }
}
</script>

<template>
  <pv-select-button v-model="currentLang" :options="languages"/>
</template>


<style scoped>

</style>