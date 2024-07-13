<template>
  <div>
    <AppHeader/>
    <slot/>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
export default {
  name: "DefaultLayout",
  components: {AppHeader, AppFooter}
}
</script>