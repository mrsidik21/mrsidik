export default {
  name: 'SidikResume',
  data() {
    return {
      profiles: this.$store.getters.profiles,
    }
  },
  computed: {
    isMobile() {
      return this.$parent.$parent.$refs.navigation.activeMobile || window.innerWidth <= 768
    },
    language() {
      return this.$store.getters.language
    },
    loading() {
      return this.$store.getters.loading
    }
  },
  watch: {
    loading: {
      handler() {},
      immediate: true
    }
  },
  methods: {
    delay (time) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
      })
    },
    countingMySkill(rate) {
      const oldRate = rate;
      const length = []
      for (var i = 1; i <= oldRate; i+=0.5) {
        length.push(i)
      }
      let newRate = 0;
      length.map(x => {
        if (newRate <= rate) {
          newRate += x
        }
      })
      if (this.loading) return 0
      return newRate
    }
  }
}
