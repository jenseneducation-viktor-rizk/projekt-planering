import { mount } from '@vue/test-utils'
// import Vuex from 'vuex'
import EventHeader from '@/components/EventHeader.vue'

describe('EventHeader.vue', () => {
    it('should emit attendClicked with "id" as the payload', async () => {
        const wrapper = mount(EventHeader, {
            propsData: {
                id: "123"
            },
            computed: {
                event() {
                    const mockedEvent = {
                        name: "Zumba class",
                        date: "2020-02-20",
                        org: "Z-Gang",
                        id: '123',
                        img: "https://www.verywellfit.com/thmb/Gt8hUD-eWejPhLo9kSnhgWCNWYE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/zumba-fatcamera-c9d4ee824a0f4fda883484f878abc8ae.jpg",
                        attend: true
                    }
                    return mockedEvent
                }
            }
        })

        wrapper.vm.$emit('attendClicked', wrapper.props().id)
        await wrapper.vm.$nextTick()
      
        expect(wrapper.emitted('attendClicked')).toBeTruthy()
        expect(wrapper.emitted('attendClicked')[0][0]).toEqual("123")
      
    })
});