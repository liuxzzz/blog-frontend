<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>
<script setup lang="ts">
import Header from "@/components/BaseHeader/index.vue";
import Footer from "@/components/BaseFooter/index.vue";
</script>
