<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div class="">
    <h1 class="text-5xl">{{ msg }}</h1>

    <div class="p-8 bg-inherit">
      <button type="button" @click="count++" class="active:outline-4 py-0.5 px-2 rounded-lg border-[1px] border-solid border-transparent transition ease-in-out delay-[25ms] hover:border-[#646cff]">count is {{ count }}</button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank" class="decoration-inherit font-medium hover:text-regal-blue-light dark:hover:text-regal-bluer"
        >create-vue</a
      >, the official Vue + Vite starter
    </p>
    <p>
      Install
      <a href="https://github.com/johnsoncodehk/volar" target="_blank"  class="decoration-inherit font-medium hover:text-regal-blue-light dark:hover:text-regal-bluer">Volar</a>
      in your IDE for a better DX
    </p>
    <p class="text-gray-600">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<!-- <style scoped>
.read-the-docs {
  color: rgb(119, 119, 119);
}
</style> -->
