<script>
import LanguageSwitcher from "./language-switcher.component.vue";

export default {
  components: {LanguageSwitcher}
}
</script>
<template>

  <h1>{{$t('hello')}}</h1>
  <pv-toolbar>
    <template #start>
      <button class="p-button p-button-text p-button-rounded" text>
        {{$t('menu')}}
      </button>
    </template>
    <template #end>
      <language-switcher></language-switcher>
    </template>

  </pv-toolbar>
</template>