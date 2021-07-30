import { Menus } from '@/utils/menus'
import { Profiles } from '@/utils/profiles'
import i18n from '@/lang'
const app = {
  state: {
    language: localStorage.language ? localStorage.language : 'en',
    menus: localStorage.menus ? JSON.parse(localStorage.menus) : Menus,
    profiles: localStorage.profiles ? JSON.parse(localStorage.profiles) : Profiles,
    loading: true,
    tag:'#hero'
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language
      localStorage.language = language
      i18n.locale = language
    },
    SET_MENUS: (state, menus) => {
      state.menus = menus
      localStorage.menus = JSON.stringify(state.menus)
    },
    SET_PROFILES: (state, menus) => {
      state.profiles = menus
      localStorage.profiles = JSON.stringify(state.profiles)
    },
    SET_LOADING: (state, loading) => {
      state.loading = loading
    },
    SET_TAG: (state, tag) => {
      state.tag = tag
    }
  },
  actions: {
    setMenus ({ commit }, menus) {
      commit('SET_MENUS', menus)
    },
    setLanguage ({ commit }, language) {
      commit('SET_LANGUAGE', language)
    },
    setProfiles ({ commit }, profiles) {
      commit('SET_PROFILES', profiles)
    },
    setLoading ({ commit }, loading) {
      commit('SET_LOADING', loading)
    },
    setTag ({ commit }, tag) {
      commit('SET_TAG', tag)
    }
  }
}

export default app
