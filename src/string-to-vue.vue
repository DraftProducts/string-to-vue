<script>
import Vue from "vue";

export default {
  name: "StringToVue",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      render: null,
    };
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        var res = Vue.compile(this.value);

        this.render = res.render;

        this.$options.staticRenderFns = [];
        this._staticTrees = [];

        this.$options.staticRenderFns.push(...res.staticRenderFns);
      },
    },
  },
  render(h) {
    if (!this.render) {
      return h("div", "rendering...");
    } else {
      return this.render();
    }
  },
};
</script>
