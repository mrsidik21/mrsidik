<template>
  <div>
    <div
      :class="[
        'navigation',
        { 'is-active': activeTriggerMenu && activeMobile}
      ]">
      <nav>
        <ul>
          <li v-for="(menu, n) in menus" :key="n">
            <a
              v-if="!activeMobile"
              :href="menu.link"
              :class="[
                'link-web',
                { 'is-active': activeTag === menu.link }
              ]"
              @click.stop.prevent="handleClickLink(menu.label)">
              <span class="menu-icon">
                <svg-icon :icon-class="menu.icon"/>
              </span>
              <span class="menu-text">
                {{ $t('label.' + menu.label) }}
              </span>
            </a>

            <a
              v-else
              :href="menu.link"
              :class="[
                'link-mobile',
                { 'is-active': activeTag === menu.link }
              ]"
              role="button"
              @click.stop.prevent="handleClickLink(menu.label)">
              <div class="menu-icon">
                <svg-icon :icon-class="menu.icon"/>
              </div>
              <div class="menu-text">
                {{ $t('label.' + menu.label) }}
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div
      :class="[
        'trigger-menu-mobile',
        { 'is-active': activeTriggerMenu}
      ]">
      <div class="left">
        <div class="dropdown">
          <button v-if="!showMenu" class="dropdown-trigger capitalize text-lg" @click="showMenu = true">
            <svg-icon :icon-class="lang"/>
          </button>
          <button v-else class="dropdown-trigger capitalize text-lg" @click="showMenu = false">
            <svg-icon :icon-class="lang"/>
          </button>
          <div
            :class="[
              'dropdown-menu',
              { 'is-active': showMenu }
            ]">
            <div
              :class="[
                'dropdown-item',
                { 'is-active': lang === 'en' }
              ]"
              @click="selectingLang('en')">
              <div class="icon">
                <svg-icon icon-class="en"/>
              </div>
              English
            </div>
            <div
              :class="[
                'dropdown-item',
                { 'is-active': lang === 'id' }
              ]"
              @click="selectingLang('id')">
              <div class="icon">
                <svg-icon icon-class="id"/>
              </div>
              Bahasa
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="activeMobile"
        class="right">
        <button
          v-if="!activeTriggerMenu"
          class="text-lg"
          @click="showingHideMenu">
          <svg-icon icon-class="humburger"/>
        </button>
        <button
          v-else
          @click="showingHideMenu">
          <svg-icon icon-class="close"/>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export { default } from './main.controller'
</script>
<style lang="scss" scoped src="./main.style.scss" />
