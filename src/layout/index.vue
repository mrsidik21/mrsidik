<template>
  <div class="layout">
    <navigation ref="navigation"/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>
<script>
export { default } from './index.controller'
</script>
<style lang="scss" scoped src="./index.style.scss" />
