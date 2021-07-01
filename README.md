### Transition

从vuetify复制的transition部分

### Usage

```javascript
import { VeilSlideYTransition, VeilScaleTransition } from "veil-transitions"
import "veil-transitions/src/components/index.css"

export default {
  components: { VeilSlideYTransition, VeilScaleTransition }
}
```

```vue

<VeilScaleTransition group>
    <template v-for="(item,index) of data" :key="index">
      <div class="tw-flex tw-flex-col tw-text-left tw-m-2 tw-font-light tw-p-4 tw-shadow-lg">
        <q>{{ item.text }}</q>
        <blockquote class="tw-self-end tw-text-sm tw-font-normal">
          {{ item.author }}
        </blockquote>
      </div>
    </template>
</VeilScaleTransition>
```
