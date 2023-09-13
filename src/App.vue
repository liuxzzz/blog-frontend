<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#6002EE',
      },
    }"
  >
    <Header></Header>
    <router-view class="main-page"></router-view>
    <Footer></Footer>
  </a-config-provider>
</template>
<script setup lang="ts">
import Header from "@/components/BaseHeader/index.vue";
import Footer from "@/components/BaseFooter/index.vue";
</script>

<style scoped>
.main-page {
  height: calc(100% - 80px);
}
</style>
