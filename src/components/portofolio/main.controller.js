export default {
  name: 'SidikPortofolio',
  data() {
    return {
      profiles: this.$store.getters.profiles,
      nextNum: 0,
      activeFilter: 0,
      loading: false
    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    },
    randomIndex () {
      return Math.floor(Math.random() * this.profiles.portofolio.length)
    },
    portofolioFiltered() {
      let source = [...this.profiles.portofolio].filter(x => x.type === this.activeFilter)
      if (this.activeFilter === 0) {
        source = [...this.profiles.portofolio]
      }

      for(let i = source.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        
        let temp = source[i];
        this.$set(source, i, source[randomIndex]);
        this.$set(source, randomIndex, temp);
      }
      return source
    },
    isMobile() {
      return this.$parent.$parent.$refs.navigation.activeMobile || window.innerWidth <= 768
    }
  },
  methods: {
    async handleFilter(e) {
      this.loading = true
      this.$store.dispatch('setScroll', false)
      await this.delay(300)
      this.loading = false
      await this.delay(500)
      this.$store.dispatch('setScroll', true)
      this.activeFilter = parseInt(e.target.type)
    },
    delay (time) {
      return new Promise((resolve) => {
        setTimeout(resolve, time)
      })
    },
    showDetail(data) {
      this.$emit('view', data)
    }
  }
}
