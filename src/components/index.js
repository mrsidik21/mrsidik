import Vue from 'vue'
import SidikHero from './hero/main.js'
import SidikLoading from './loading/main.js'
import SidikAbout from './about/main.js'
import SidikResume from './resume/main.js'
import SidikPortofolio from './portofolio/main.js'
import SidikContact from './contact/main.js'
import SidikFooter from './footer/main.js'
import SidikGallery from './gallery/main.js'
const components = [
  SidikHero,
  SidikLoading,
  SidikAbout,
  SidikResume,
  SidikPortofolio,
  SidikContact,
  SidikFooter,
  SidikGallery
]
components.forEach(component => {
  Vue.component(component.name, component)
})

const SidikComponents = {
  SidikHero,
  SidikLoading,
  SidikAbout,
  SidikResume,
  SidikPortofolio,
  SidikContact,
  SidikFooter,
  SidikGallery
}
export default SidikComponents
