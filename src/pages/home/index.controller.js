export default {
  name: 'Home',
  data() {
    return {
      menus: this.$store.getters.menus,
    }
  },
  computed: {
    hashTag() {
      return this.$store.getters.tag
    },
    loading() {
      return this.$store.getters.loading
    },
    icon() {
      return false
    }
  },
  watch: {
    loading: {
      async handler(val) {
        await this.delay(1000)
        this.$store.dispatch('setLoading', false)
        this.scrollingTo(this.hashTag)
      },
      immediate: true
    }
  },
  methods: {
    replaceTag(link) {
      const text = link
      return text.replace('#', '')
    },
    delay (time) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
      })
    },
    async showingGallery(data) {
      this.$refs.gallery.showingModal(data)
    },
    async scrollingTo(text) {
      if (!text) return
      const source = document.querySelector(text)
      if (source) {
        await this.delay(100)
        document.querySelector('.layout').scrollTo(0, (source.offsetTop))
      }
    }
  }
}
