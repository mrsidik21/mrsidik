export default {
  name: 'SidikPortofolio',
  data() {
    return {
      profiles: this.$store.getters.profiles,
      nextNum: 0
    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    },
    activeFilter() {
      const source = [...this.profiles.filters]
      const filtered = source.filter(x => x.active)
      if (filtered.length) {
        return filtered[0]
      }
      return {}
    },
    randomIndex () {
      return Math.floor(Math.random() * this.profiles.portofolio.length)
    },
    portofolioFiltered() {
      const source = [...this.profiles.portofolio].map(x => {
        this.$set(x, 'active', true)
        return x
      })
      this.profiles.portofolio = source
      this.$store.dispatch('setProfiles', { ...this.profiles, portofolio: this.profiles.portofolio })
      if (this.activeFilter.type === 0) {
        return source
      }
      for(let i = source.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * i);
        
        let temp = source[i];
        this.$set(source, i, source[randomIndex]);
        this.$set(source, randomIndex, temp);
      }
      return source.map(x => {
        if (x.type !== this.activeFilter.type) {
          this.$set(x, 'active', false)
        }
        return x
      })
    },
    isMobile() {
      return this.$parent.$parent.$refs.navigation.activeMobile || window.innerWidth <= 768
    }
  },
  methods: {
    handleFilter(e) {
      const text = e.target.innerText.toLowerCase()
      const source = [...this.profiles.filters].map(x => {
        this.$set(x, 'active', false)
        return x
      })
      const filtered = source.filter(x => x.id === text || x.en === text)
      let key = 0

      if (!filtered.length) return

      key = source.indexOf(filtered[0])
      source[key].active = true
      const data = { ...this.$store.getters.profiles, filters: source }
      this.$store.dispatch('setProfiles', data)
    },
    showDetail(data) {
      this.$emit('view', data)
    }
  }
}
