# String to Vue

Simple component that allows HTML interpretation from a simple string to a rendering including Vue components without all issues that you get with `v-html` directive.

## Installation

```shell
$ yarn add string-to-vue # npm install string-to-vue
```

```js
// ES6
import StringToVue from "string-to-vue";

// CommonJS
const StringToVue = require("string-to-vue");

// Browser
<script src="https://unpkg.com/string-to-vue@1.1.1/dist/string-to-vue.umd.js"></script>;
```

## Getting Started

### As component

As component you have to import it.

```html
<template>
  <StringToVue :value="html" />
</template>
<script>
  import HelloWorld from "@/components/HelloWorld.vue";
  import StringToVue from "string-to-vue";

  export default {
    components: {
      HelloWorld,
      StringToVue,
    },
    data() {
      return {
        html: `
          <h1>Demo</h1><br>
          <HelloWorld />
        `,
      };
    },
  };
</script>
```

### As Nuxt plugin

As NuxtJs plugin you can install the component globaly.

```js
// @/plugins/string-to-vue.js
import Vue from "vue";
import StringToVue from "string-to-vue";
Vue.use(StringToVue);
```

```html
<template>
  <StringToVue :value="html" />
</template>
<script>
  import HelloWorld from "@/components/HelloWorld.vue";

  export default {
    components: {
      HelloWorld,
    },
    data() {
      return {
        html: `
          <h1>Demo</h1><br>
          <HelloWorld />
        `,
      };
    },
  };
</script>
```

## Import implicitly components

In the case where you have many others components registred into the parent, you can provide components into the `components` props.

```html
<template>
  <StringToVue :value="html" :components="{ HelloWorld }" />
</template>
<script>
  import HelloWorld from "@/components/HelloWorld.vue";
  import StringToVue from "string-to-vue";

  export default {
    components: {
      HelloWorld,
      StringToVue,
    },
    data() {
      return {
        html: `
          <h1>Demo</h1><br>
          <HelloWorld />
        `,
      };
    },
  };
</script>
```
