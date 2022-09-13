<template>
  <div class="about">
    <h1>{{ $t('this_is_an_about_page') }}</h1>
    <el-date-picker type="date" v-model="dateValue" placeholder="Pick a date" style="width: 100%"></el-date-picker>
    <el-select v-model="value" size="large"> </el-select>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const dateValue = ref('');
const value = ref('');
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
