import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("HomeView.vue", () => {
  it("renders correctly", () => {
    const wrapper = mount(HomeView, {});
    expect(wrapper.html()).toMatchSnapshot();
  });
});
