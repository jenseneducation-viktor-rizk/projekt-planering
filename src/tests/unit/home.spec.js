import { shallowMount } from '@vue/test-utils'
// import Vuex from 'vuex'
import Home from '@/views/Home.vue'
import Search from '@/components/Search.vue'

describe('Home.vue', () => {
    it('should render Home', () => {
        const wrapper = shallowMount(Home)
        expect(wrapper.find('#home').exists()).toBe(true)
    }),
    it('should render searchbar', () => {
        const wrapper = shallowMount(Home, Search)
        expect(wrapper.find('.search-bar').exists()).toBe(true)
    })
});