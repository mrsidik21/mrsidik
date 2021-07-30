<template>
  <transition name="fade">
    <div
      v-if="show"
      class="modal">
      <div class="modal-header">Portofolio Detail</div>
      <div class="modal-closer">
        <button @click="closingModal">
          <svg-icon icon-class="close"/>
        </button>
      </div>

      <div class="modal-container" @click.self="closingModal">
        <div class="modal-content" @click.self="closingModal">
          <div
            v-if="isAnyToPrev"
            class="modal-trigger-slide prev"
            @click="prevSlide">
            <svg-icon icon-class="right-arrow"/>
          </div>

          <div
            v-if="isAnyToNext"
            class="modal-trigger-slide next"
            @click="nextSlide">
            <svg-icon icon-class="right-arrow"/>
          </div>

          <transition name="slide-fade">
            <div
              v-if="!loading"
              class="modal-content--main text-left">
              <div class="title">
                <h3>{{ detail.name }}</h3>
              </div>
              <template v-for="(photo, n) in detail.photos">
                <img
                  v-if="photo.includes('1.Pelaksana_001.jpg')"
                  :key="n"
                  src="/static/img/1.Pelaksana_001.jpg"
                />
                <img
                  v-if="photo.includes('1.Pelaksana_002.jpg')"
                  :key="n"
                  src="/static/img/1.Pelaksana_002.jpg"
                />

                <img
                  v-if="photo.includes('2.Menengah_001.jpg')"
                  :key="n"
                  src="/static/img/2.Menengah_001.jpg"
                />
                <img
                  v-if="photo.includes('2.Menengah_002.jpg')"
                  :key="n"
                  src="/static/img/2.Menengah_002.jpg"
                />

                <img
                  v-if="photo.includes('3.Lanjutan_001.jpg')"
                  :key="n"
                  src="/static/img/3.Lanjutan_001.jpg"
                />
                <img
                  v-if="photo.includes('3.Lanjutan_002.jpg')"
                  :key="n"
                  src="/static/img/3.Lanjutan_002.jpg"
                />

                <img
                  v-if="photo.includes('sertifikat excle_001.jpg')"
                  :key="n"
                  src="/static/img/sertifikat excle_001.jpg"
                />

                <img
                  v-if="photo.includes('sertifikat akuntansi_001.jpg')"
                  :key="n"
                  src="/static/img/sertifikat akuntansi_001.jpg"
                />

                <img
                  v-if="photo.includes('Scan Brevet_001.jpg')"
                  :key="n"
                  src="/static/img/Scan Brevet_001.jpg"
                />

                <img
                  v-if="photo.includes('Scan Brevet_002.jpg')"
                  :key="n"
                  src="/static/img/Scan Brevet_002.jpg"
                />
              </template>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export { default } from './main.controller'
</script>
<style lang="scss" scoped src="./main.style.scss"/>
