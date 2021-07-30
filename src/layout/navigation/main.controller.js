export default {
  name: '',
  data() {
    return {
      menus: this.$store.getters.menus || [],
      activeMobile: false,
      activeTriggerMenu: false,
      showMenu: false
    }
  },
  computed: {
    lang() {
      return this.$store.getters.language
    },
    activeTag() {
      return this.$store.getters.tag
    }
  },
  watch: {
    activeMobile: {
      handler(val) {
        if (!val) {
          this.activeTriggerMenu = true
          this.showingHideMenu()
        }
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
  },
  async mounted() {
    this.handleResize(window)
  },
  methods: {
    async handleResize(e) {
      if (!this.activeTag) this.$store.dispatch('setTag', '#hero')
      let width = e.innerWidth
      if (!e.innerWidth) width = e.target.innerWidth
      if (width <= 768) {
        this.activeMobile = true
        return
      }
      this.activeMobile = false
    },

    resetMenu() {
      for (var i = 0; i < this.menus.length; i++) {
        this.menus[i].active = false
      }
    },
    delay (time) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
      })
    },

    async handleClickLink(menu) {
      this.$store.dispatch('setLoading', true)
      const text = menu === 'home' ? '#hero' : '#'+ menu
      if (text === this.activeTag) {
        return
      }
      this.$store.dispatch('setTag', text)
    },

    showingHideMenu() {
      const elements = this.$parent.$children
      const element = elements[1].$parent.$el
      if (this.activeTriggerMenu) {
      if (element) element.style.overflowY = ''
        return this.activeTriggerMenu = false
      }
      if (element) element.style.overflowY = 'hidden'
      this.activeTriggerMenu = true;
    },

    selectingLang(lang) {
      this.$store.dispatch('setLanguage', lang)
      this.showMenu = false
    }
  }
}