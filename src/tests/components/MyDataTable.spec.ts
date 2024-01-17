import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";
import MyVDataTable from "../../components/MyVDataTable.vue";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVuetify } from "vuetify";

const vuetify = createVuetify({
  components,
  directives,
});
global.ResizeObserver = require("resize-observer-polyfill");

describe("MyVDataTable.vue", () => {
  const wrapper = mount(MyVDataTable, {
    global: {
      plugins: [vuetify],
    },
  });
  test("ヘッダーに値をセットしていることを確認", async () => {
    console.log(wrapper.html());
    const headers = wrapper.findAll("thead tr th");
    headers.map((header, index) => {
      expect(header.text()).toBe(wrapper.vm.headers[index].title);
    });
  });
});
