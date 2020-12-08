import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/font.scss'
import IntButton from './components/button.vue'
import IntDialog from './components/dialog.vue'
import IntInput from './components/input.vue'
import IntSwitch from './components/switch.vue'
import IntRadio from './components/radio.vue'
import IntRadioGroup from './components/radiogroup.vue'
import IntCheckbox from './components/checkbox.vue'
import IntCheckboxGroup from './components/checkboxgroup.vue'
import IntForm from './components/form.vue'
import IntFormItem from './components/formitem.vue'
import IntCarousel from './components/carousel.vue'
import IntCarouselItem from './components/carouselitem.vue'

Vue.component(IntButton.name, IntButton)
Vue.component(IntDialog.name, IntDialog)
Vue.component(IntInput.name, IntInput)
Vue.component(IntSwitch.name, IntSwitch)
Vue.component(IntRadio.name, IntRadio)
Vue.component(IntRadioGroup.name, IntRadioGroup)
Vue.component(IntCheckbox.name, IntCheckbox)
Vue.component(IntCheckboxGroup.name, IntCheckboxGroup)
Vue.component(IntForm.name, IntForm)
Vue.component(IntFormItem.name, IntFormItem)
Vue.component(IntCarousel.name, IntCarousel)
Vue.component(IntCarouselItem.name, IntCarouselItem)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
