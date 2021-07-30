import { dateMonths } from '@/utils/date'
export default {
  name: 'SidikAbout',
  data() {
    return {
      profiles: this.$store.getters.profiles,
      loading: true,
    }
  },
  computed: {
    isMobile() {
      return this.$parent.$parent.$refs.navigation.activeMobile || window.innerWidth <= 768
    },
    language() {
      return this.$store.getters.language
    }
  },
  watch: {
    language: {
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
    formatDate(date) {
      const newDate = new Date(date)
      let dates = newDate.getDate()
      const month = dateMonths.month[this.language][newDate.getMonth()]

      if (!month) return 'Unknown Date'

      if (date < 10) date = '0' + date

      let result = ''
      if (this.language === 'en') {
        result = month + ' ' + dates + ', ' + newDate.getFullYear()
        return result
      }
      result = dates + ' ' + month + ' ' + newDate.getFullYear()
      return result
    },
    countingMyAge() {
      const birthDay = new Date(this.profiles.about.birthday).getTime()
      const diff = new Date(Date.now()).getTime() - birthDay
      const myAge = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
      return myAge
    }
  }
}
