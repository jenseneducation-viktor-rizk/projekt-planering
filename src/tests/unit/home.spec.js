import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
    it('should render Home', () => {
        const wrapper = shallowMount(Home)
        expect(wrapper.find('#home').exists()).toBe(true)
    })
});