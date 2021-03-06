import Navigation from './navigation/main'
import Home from '@/pages/home'
export default {
  name: 'Layout',
  components: {
    Navigation,
    Home
  },
  data() {
    return {
      time: null,
      menus: this.$store.getters.menus
    }
  },
  computed: {
    activeTag() {
      return this.$store.getters.tag
    },
    loading() {
      return this.$store.getters.loading
    },
    scroll() {
      return this.$store.getters.scroll
    }
  },
  watch: {
    scroll: {
      handler(val) {
        const element = document.getElementById('layout')
        if (!val) {
          element.removeEventListener('scroll', this.handleScroll)
        } else {
          element.addEventListener('scroll', this.handleScroll)
        }
      }
    }
  },
  mounted() {
    const element = document.getElementById('layout')
    element.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    delay (time) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
      })
    },
    handleScroll(e) {
      const links = [...document.getElementsByClassName('link-web'), ...document.getElementsByClassName('link-mobile')]

      if (!!!links && !!!Array.isArray(links) && !!!links.length) return

      links.map((link) => {
        const name = link.getAttribute('href')
        const target = document.getElementById(name.replace('#', ''))

        if(!!!target) return

        const targetOffsetTop = target.offsetTop

        if (name !== this.activeTag && target) {
          const conditionOne = targetOffsetTop <= e.target.scrollTop
          const conditionTwo = (targetOffsetTop + target.offsetHeight) > e.target.scrollTop
          if (conditionOne && conditionTwo) {
            link.classList.add('is-active')
            this.$store.dispatch('setTag', name)
          }
        }
      })
    }
  }
}