import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 引入字体文件
import "./assets/fonts/iconfont.css"

import Link from "./components/link.vue"
Vue.component(Link.name, Link)

import InputNumber from "./components/input-number.vue"
Vue.component(InputNumber.name, InputNumber)
// 全局注册button组件

import Button from "./components/button.vue"
Vue.component(Button.name, Button)
import Dialog from "./components/dialog.vue"
Vue.component(Dialog.name, Dialog)
import Input from "./components/input.vue"
Vue.component(Input.name, Input)
import Switch from "./components/switch.vue"
Vue.component(Switch.name, Switch)
import Radio from "./components/radio.vue"
Vue.component(Radio.name, Radio)

import RadioGroup from "./components/radio-group.vue"
Vue.component(RadioGroup.name, RadioGroup)

import CheckBox from "./components/checkbox.vue"
Vue.component(CheckBox.name, CheckBox)

import CheckBoxGroup from "./components/checkbox-group.vue"
Vue.component(CheckBoxGroup.name, CheckBoxGroup)

import Form from "./components/form.vue"
Vue.component(Form.name, Form)

import FormItem from "./components/form-item.vue"
Vue.component(FormItem.name, FormItem)


import Select from "./components/select.vue"
Vue.component(Select.name, Select)

import Carousel from "./components/carousel.vue"
Vue.component(Carousel.name, Carousel)

import CarouselItem from "./components/carousel-item.vue"
Vue.component(CarouselItem.name, CarouselItem)

import Rate from "./components/rate.vue"
Vue.component(Rate.name, Rate)

import Tag from "./components/tag.vue"
Vue.component(Tag.name, Tag)

import Pagination from "./components/pagination.vue"
Vue.component(Pagination.name, Pagination)



new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
