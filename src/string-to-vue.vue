<template>
  <component v-if="component" :is="component" />
</template>

<script>
import { compileToFunctions } from "vue-template-compiler";

export default {
  name: "StringToVue",
  props: {
    value: {
      type: String,
      default: "",
    },
    options: {
      type: Object,
      default: () => ({
        outputSourceRange: false,
        whitespace: "preserve",
      }),
    },
    components: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      component: null,
    };
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        var res = compileToFunctions(`<div>${this.value}</div>`, this.options);
        this.component = Object.assign(res, {
          components: this.components,
        });
      },
    },
  },
};
</script>
