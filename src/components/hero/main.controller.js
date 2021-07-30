export default {
  name: 'SidikHero',
  data() {
    return {
      profiles: this.$store.getters.profiles,
      typer: '',
      timer: null,
      delayTimer: 500,
      activeBlink: false
    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    },
    wordOne() {
      return this.$t('greeting.profession_one')
    },
    wordTwo() {
      return this.$t('greeting.profession_two')
    },
    isMobile() {
      return this.$parent.$parent.$refs.navigation.activeMobile || window.innerWidth <= 768
    }
  },
  watch: {
    language: {
      handler() {
        this.timer = ''
      }
    },
    typer: {
      handler(val) {
        if (val === '') {
          this.activeBlink = false
          this.printer()
        }
      },
      immediate: true
    }
  },
  methods: {
    async printer() {
      this.stopper()
      let i = -1
      this.timer = setInterval(async () => {
        if (this.typer.length >= this.wordTwo.length) {
          this.activeBlink = true
          await this.delay(900)
          this.typer = ''
          i = -1
          return
        }
        i++
        const x = i % this.wordTwo.length
        this.typer += this.wordTwo[x]
      }, this.delayTimer)
    },
    stopper() {
      clearInterval(this.timer)
      this.typer = ''
    },
    delay (time) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
      })
    },
    goTo(path) {
      window.open(path, '_blank')
    }
  }
}
