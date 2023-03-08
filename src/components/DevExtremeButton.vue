<template>
  <DxButton text="Click me" @click="sayHelloWorld" />
</template>

<script setup lang="ts">
import DxButton from 'devextreme-vue/button';
function sayHelloWorld() {
  alert('Hello world!');
}
</script>
