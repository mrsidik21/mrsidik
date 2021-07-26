export default {
  name: 'Home',
  data() {
    return {
      menus: this.$store.getters.menus,
      loading: true
    }
  },
  watch: {
    $route(to) {
      // this.scrollingTo(to.hash)
    }
  },
  computed: {
    hashTag() {
      return this.$route.hash
    }
  },
  async mounted() {
    this.handleResize(window)
  },
  async mounted() {
    this.loading = true
    await this.delay(300)
    this.loading = false
    this.scrollingTo(this.hashTag)
  },
  methods: {
    replaceTag(link) {
      const text = link
      return text.replace('#', '')
    },
    handleLoading(e) {
      // console.log(this.$parent)
      // this.$parent.$el.scrollTop = e.target.getBoundingClientRect().top
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
