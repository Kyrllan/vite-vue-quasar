<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div>
    <h1>Quasar</h1>
    <q-btn color="primary" label="Bostão" />
    <q-input class="mt-10" filled v-model="text" label="Filled" />
  </div>
</template>
