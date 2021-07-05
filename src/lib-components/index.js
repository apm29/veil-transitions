/* eslint-disable import/prefer-default-export */
import {
  createCssTransition,
  createJavascriptTransition,
} from './create-transitions.js'
import ExpandTransitionGenerator from "./expand-transition.js";
import "./index.css"
export const VeilCarouselTransition = createCssTransition('carousel-transition');
export const VeilCarouselReverseTransition = createCssTransition('carousel-reverse-transition');
export const VeilTabTransition = createCssTransition('tab-transition');
export const VeilTabReverseTransition = createCssTransition('tab-reverse-transition');
export const VeilMenuTransition = createCssTransition('menu-transition');
export const VeilFabTransition = createCssTransition('fab-transition', 'center center', 'out-in'); // Generic transitions

export const VeilDialogBottomTransition = createCssTransition('dialog-bottom-transition');
export const VeilDialogTopTransition = createCssTransition('dialog-top-transition');
export const VeilFadeTransition = createCssTransition('fade-transition');
export const VeilScaleTransition = createCssTransition('scale-transition');
export const VeilScrollXTransition = createCssTransition('scroll-x-transition');
export const VeilScrollXReverseTransition = createCssTransition('scroll-x-reverse-transition');
export const VeilScrollYTransition = createCssTransition('scroll-y-transition');
export const VeilScrollYReverseTransition = createCssTransition('scroll-y-reverse-transition');
export const VeilSlideXTransition = createCssTransition('slide-x-transition');
export const VeilSlideXReverseTransition = createCssTransition('slide-x-reverse-transition');
export const VeilSlideYTransition = createCssTransition('slide-y-transition');
export const VeilSlideYReverseTransition = createCssTransition('slide-y-reverse-transition'); // Javascript transitions


export const VExpandTransition = createJavascriptTransition('expand-transition', ExpandTransitionGenerator());
export const VExpandXTransition = createJavascriptTransition('expand-x-transition', ExpandTransitionGenerator('', true));
