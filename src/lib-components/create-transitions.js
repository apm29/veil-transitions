// Utilities
import { defineComponent, h, Transition, TransitionGroup } from 'vue';
export function createCssTransition(name, origin = 'top center 0', mode) {
  return defineComponent({
    name,
    props: {
      group: Boolean,
      hideOnLeave: Boolean,
      leaveAbsolute: Boolean,
      mode: {
        type: String,
        default: mode
      },
      origin: {
        type: String,
        default: origin
      }
    },

    setup(props, {
      slots
    }) {
      return () => {
        const tag = props.group ? TransitionGroup : Transition;
        return h(tag, {
          name,
          mode: props.mode,

          onBeforeEnter(el) {
            el.style.transformOrigin = props.origin;
          },

          onLeave(el) {
            if (props.leaveAbsolute) {
              const {
                offsetTop,
                offsetLeft,
                offsetWidth,
                offsetHeight
              } = el;
              el._transitionInitialStyles = {
                position: el.style.position,
                top: el.style.top,
                left: el.style.left,
                width: el.style.width,
                height: el.style.height
              };
              el.style.position = 'absolute';
              el.style.top = `${offsetTop}px`;
              el.style.left = `${offsetLeft}px`;
              el.style.width = `${offsetWidth}px`;
              el.style.height = `${offsetHeight}px`;
            }

            if (props.hideOnLeave) {
              el._initialDisplay = el.style.display;
              el.style.display = 'none';
            }
          },

          onAfterLeave(el) {
            if (props.leaveAbsolute && el != null && el._transitionInitialStyles) {
              const {
                position,
                top,
                left,
                width,
                height
              } = el._transitionInitialStyles;
              delete el._transitionInitialStyles;
              el.style.position = position || '';
              el.style.top = top || '';
              el.style.left = left || '';
              el.style.width = width || '';
              el.style.height = height || '';
            }

            if (props.hideOnLeave && el) {
              el.style.display = el._initialDisplay || '';
            }
          }

        }, slots.default);
      };
    }

  });
}

export function createJavascriptTransition(name, functions, mode = 'in-out') {
  return defineComponent({
    name,
    props: {
      mode: {
        type: String,
        default: mode
      }
    },

    setup(props, {
      slots
    }) {
      return () => {
        return h(Transition, {
          name,
          // mode: props.mode, // TODO: vuejs/vue-next#3104
          ...functions
        }, slots.default);
      };
    }

  });
}
