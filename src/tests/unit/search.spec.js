import { shallowMount } from '@vue/test-utils'
// import Vuex from 'vuex'
import Search from '@/components/Search.vue'

describe('Search.vue', () => {
    const wrapper = shallowMount(Search)
    it('should render searchbar', () => {
        expect(wrapper.find('.search-bar').exists()).toBe(true)
    }),
    it('should set value of searchWord when input', async () => {
        const input = wrapper.find('.search-bar')
        const searchWord = "stockholm"

        await input.setValue('stockholm')
        expect(input.element.value).toBe(searchWord)

        expect()
    })
});