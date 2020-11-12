import { shallowMount } from '@vue/test-utils'

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../../App.vue'
Vue.use(VueRouter)
Vue.config.productionTip = false

it('does not crash', () => {
	const wrapper = shallowMount(App)
	expect(wrapper.find('#app').exists()).toBe(true)
})