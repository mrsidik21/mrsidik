<template>
  <div>
    <div class="section-title mb-56">
      <h2 :id="$t('label.portofolio')">{{ $t('label.portofolio') }}</h2>
    </div>

    <div class="row">
      <div class="col">
        <ul class="portofolio-filters">
          <li
            v-for="(filter, n) in profiles.filters"
            :key="n"
            :type="filter.type"
            :class="{ 'is-active': filter.type === activeFilter }"
            role="button"
            @click="handleFilter">
            {{ filter[language] }}
          </li>
        </ul>
      </div>
    </div>

    <transition name="scale" tag="div" >
      <div v-if="!loading" class="row">
          <div
            v-for="(portofolio, n) in portofolioFiltered"
            :key="'port' + n"
            :class="{ 'is-hidden': !portofolio.active }"
            class="col portofolio my-8">
            <div
              :class="['img-fluid', portofolio.class]"
            />
            <div class="portofolio-wrap">
              <div class="portofolio-info">
                <div class="portofolio-name">
                  <h4> {{ portofolio.name }} </h4>
                  <p class="my-8 font-sm">{{ portofolio.publisher }}</p>
                  <a class="link-view" @click.stop.prevent="showDetail(portofolio)">
                    view
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </transition>
  </div>
</template>
<script>
export { default } from './main.controller'
</script>
<style lang="scss" scoped src="./main.style.scss"/>
