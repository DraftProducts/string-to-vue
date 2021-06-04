import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";
import buble from "@rollup/plugin-buble";
import { terser } from "rollup-plugin-terser";
export default {
  input: "src/wrapper.js",
  external: ["vue-template-compiler"],
  output: {
    name: "StringToVue",
    exports: "named",
    globals: {
      "vue-template-compiler": "VueTemplateCompiler",
    },
  },
  plugins: [
    commonjs(),
    vue({
      css: false, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function
    }),
    buble(), // Transpile to ES5
    terser(), // Minify bundle
  ],
};
