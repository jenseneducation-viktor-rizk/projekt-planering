import { shallowMount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import Nav from "@/components/Nav.vue";
import VueRouter from "vue-router";
import routes from "@/router/routes.js";
import Contact from "@/views/Contact.vue"
import store from "@/store/index.js";

describe("Nav.vue", () => {
    it("should route to home page when clicking on the logo", async () => {
      const localVue = createLocalVue();
      const router = new VueRouter({ routes });
      localVue.use(VueRouter);
  
      const wrapper = shallowMount(Nav, {
        localVue,
        router,
        stubs: {
          RouterLink: RouterLinkStub
        }
      });
  
      await router.push("/contact");
      await wrapper.vm.$nextTick();
      wrapper.find('#logo').trigger("click");
      await wrapper.vm.$nextTick();
  
      expect(wrapper.vm.$route.name).toBe("Home");
    });
  });