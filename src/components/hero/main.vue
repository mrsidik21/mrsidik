<template>
  <div>
    <h1>
      {{ profiles.name }}
    </h1>
    <div class="typer">
      <div class="inline-block text">{{ wordOne }}</div>
      <div
        :class="[
          'inline-block',
          'primary typer-cursor',
          {
            'animation-typer-id': language === 'id',
            'animation-typer':  language === 'en'
          }
        ]">
          {{ wordTwo }}</div>
    </div>

    <div class="social-media relative z-1">
      <a
        v-for="(social, n) in profiles.socials_media"
        :key="n"
        :href="social.link"
        @click.stop.prevent="goTo(social.link)">
        <svg-icon :icon-class="social.icon"/>
      </a>
    </div>
  </div>
</template>
<script>
export { default } from './main.controller'
</script>
<style lang="scss" scoped src="./main.style.scss"/>
