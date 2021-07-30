export default {
  name: 'SidikContact',
  data() {
    return {
      profiles: this.$store.getters.profiles,
    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    },
    isMobile() {
      return this.$parent.$parent.$refs.navigation.activeMobile || window.innerWidth <= 768
    }
  },
  methods: {
    goTo(path) {
      if (!path && path.link) return
      if (path.desc[this.language].includes('@')) {
        this.copyngToClip(path.desc[this.language])
        return
      }
      window.open(path.link, '_blank')
    },

    copyngToClip(text) {
      var TempText = document.createElement('input')
      TempText.value = text
      document.body.appendChild(TempText)
      TempText.select()
      
      document.execCommand('copy')
      document.body.removeChild(TempText)  
      alert('Copied the email: ' + TempText.value)
    }
  }
}
