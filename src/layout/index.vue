<template>
  <div id="layout" class="layout">
    <navigation ref="navigation"/>
    <div
      :class="[
        'content',
        { 'on-loading': loading }
      ]">
      <Home />
    </div>
  </div>
</template>
<script>
export { default } from './index.controller'
</script>
<style lang="scss" scoped src="./index.style.scss" />
