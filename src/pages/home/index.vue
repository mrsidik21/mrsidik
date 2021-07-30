<template>
  <div>
    <sidik-loading :loading="loading" />

    <sidik-gallery ref="gallery" />

    <section id="hero">
      <sidik-hero />
    </section>
    <section id="about">
      <sidik-about />
    </section>
    <section id="resume">
      <sidik-resume />
    </section>
    <section id="portofolio">
      <sidik-portofolio @view="showingGallery" />
    </section>
    <section id="contact">
      <sidik-contact />
    </section>
    <footer>
      <sidik-footer/>
    </footer>
  </div>
</template>
<script>
export { default } from './index.controller'
</script>
<style lang="scss" scoped src="./index.style.scss" />
