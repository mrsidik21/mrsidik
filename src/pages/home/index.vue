<template>
  <div>
    <sidik-loading :loading="loading" />

    <sidik-gallery ref="gallery" />

    <template v-for="(menu, n) in menus">
      <section
        :id="replaceTag(menu.link)"
        :key="n">
        <!--
        @mouseenter="handleLoading"
        -->
        <sidik-hero
          v-if="menu.label === 'home'"
        />
        <sidik-about
          v-else-if="menu.label === 'about'"
        />
        <sidik-resume
          v-else-if="menu.label === 'resume'"
        />
        <sidik-portofolio
          v-else-if="menu.label === 'portofolio'"
          @view="showingGallery"
        />
        <sidik-contact
          v-else-if="menu.label === 'contact'"
        />
      </section>
    </template>
    <footer>
      <sidik-footer/>
    </footer>
  </div>
</template>
<script>
export { default } from './index.controller'
</script>
<style lang="scss" scoped src="./index.style.scss" />
