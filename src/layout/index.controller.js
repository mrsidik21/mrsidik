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
      const links = [...document.getElementsByClassName('link-web')]
      const active = [...links].find(x => x.className.includes('is-active'))
      const key = [...links].findIndex(x => x.className.includes('is-active'))

      if (!active.hash) return

      const secitonActive = document.querySelector(active.hash).getBoundingClientRect()

      if (secitonActive.height < e.target.scrollTop && (secitonActive.top + secitonActive.height) > e.target.scrollTop) {
        console.log('OK')
        /*
        active.classList.remove('is-active')
        const nextActive = [...links][key + 1]
        if (nextActive) {
          nextActive.classList.add('is-active')
        }
        */
      }
    }
  }
}