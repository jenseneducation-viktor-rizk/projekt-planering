import { shallowMount } from '@vue/test-utils'
// import Vuex from 'vuex'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
    const wrapper = shallowMount(Home)
    it('should render Home', () => {
        expect(wrapper.find('#home').exists()).toBe(true)
    })
});