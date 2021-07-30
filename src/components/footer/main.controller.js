export default {
  name: 'SidikFooter',
  data() {
    return {
      profiles: this.$store.getters.profiles,
    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  methods: {
    goTo(path) {
      window.open(path, '_blank')
    }
  }
}
