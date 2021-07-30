const getters = {
  language: state => state.app.language,
  menus: state => state.app.menus,
  profiles: state => state.app.profiles,
  loading: state => state.app.loading,
  tag: state => state.app.tag
}
export default getters
