<script setup lang="ts">
import DefaultTheme from "vitepress/theme";
import Twikoo from "./Twikoo.vue";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-after>
      <Twikoo></Twikoo>
    </template>
  </Layout>
</template>
