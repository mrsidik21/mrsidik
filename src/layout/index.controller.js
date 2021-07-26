import Navigation from './navigation/main'
export default {
  name: 'Layout',
  components: {
    Navigation
  },
  data() {
    return {
      time: null,
      menus: this.$store.getters.menus
    }
  },
  destroyed() {
    document.querySelector('.layout').removeEventListener('scroll', this.handleScroll, false)
    document.querySelector('.layout').removeEventListener('resize', this.handleResize, false)
  },
  mounted() {
    document.querySelector('.layout').addEventListener('scroll', this.handleScroll, false)
    document.querySelector('.layout').addEventListener('resize', this.handleResize, false)
  },
  methods: {
    delay (time) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
      })
    },
    handleResize(e) {
      this.handleScroll(e)
    },
    async handleScroll(e) {
      const hero = document.querySelector('#hero').offsetTop
      const about = document.querySelector('#about').offsetTop
      const resume = document.querySelector('#resume').offsetTop
      const portofolio = document.querySelector('#portofolio').offsetTop
      const contact = document.querySelector('#contact').offsetTop
      if (this.timer !== null) {
        clearTimeout(this.timer);  
      }
      this.timer = setTimeout((menus = this.menus, length = e.target.scrollTop, active = this.$route.hash, router = this.$router) => {  
        if (length < about && active !== '#hero') {
          router.push({ path: '/#hero' })
          return
        }
        if (length > about && length < resume && active !== '#about') {
          router.push({ path: '/#about' })
          return
        }
        if (length > resume && length < portofolio && active !== '#resume') {
          router.push({ path: '/#resume' })
          return
        }
        if (length > portofolio && length < contact && active !== '#portofolio') {
          router.push({ path: '/#portofolio' })
          return
        }
        if (length >= (contact - 800) && active !== '#contact') {
          router.push({ path: '/#contact' })
          return
        }
      }, 300);
    }
  }
}