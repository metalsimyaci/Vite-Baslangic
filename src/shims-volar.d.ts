import {
   RouterLink,
   RouterView,
   useLink,
   RouteLocationNormalized,
} from 'vue-router';
import { UnwrapRef, VNode } from 'vue';

declare module '@vue/runtime-core' {
   interface ComponentCustomProperties {
      $log: typeof console.log;
   }
}

import Icon from '/src/components/Icon/Icon.vue';

declare global {
   interface __VLS_GlobalComponents {
      RouterLink: typeof RouterLink & {
         __VLS_slots: {
            default: UnwrapRef<ReturnType<typeof useLink>>;
         };
      };
      RouterView: typeof RouterView & {
         __VLS_slots: {
            default: {
               Component: VNode;
               route: RouteLocationNormalized & { href: string };
            };
         };
      };
      Icon: typeof Icon;
   }
}

import store from './store';
declare module 'vue' {
   interface ComponentCustomProperties {
      $store: typeof store;
   }
}

declare global {
   interface Window {
      circleSelect: (el: HTMLDivElement, id: string) => void;
   }
}
