import { describe, it, expect } from "vitest";

import { config, mount } from "@vue/test-utils";
import translations from "@/locales/zh_tw.json";
import HelloWorld from "../HelloWorld.vue";

config.global.mocks = {
  $t: (msg) => translations[msg],
};

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
