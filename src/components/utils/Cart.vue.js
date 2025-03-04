"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var image_product_1_thumbnail_jpg_1 = __importDefault(require("@/images/image-product-1-thumbnail.jpg"));
var icon_delete_svg_1 = __importDefault(require("@/images/icon-delete.svg"));
var carAmount = (0, vue_1.inject)('carAmount');
var props = defineProps({
    emptyCart: Boolean,
});
var emits = defineEmits(['cleanCart']); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    var __VLS_0 = {}.Transition;
    /** @type { [typeof __VLS_components.Transition, typeof __VLS_components.Transition, ] } */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        mode: ("out-in"),
    }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
            mode: ("out-in"),
        }], __VLS_functionalComponentArgsRest(__VLS_1), false));
    var __VLS_6 = {};
    if (props.emptyCart) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("absolute top-[9.5%] w-[97%] left-1/2 translate-x-[-50%] bg-white rounded-lg z-[11] xl:top-[200%] xl:w-[40rem] boxShadow") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("font-k700 p-[2.2rem] pb-[2.5rem] border-b-[1px] xl:text-[1.8rem] xl:text-left xl:p-[3rem] cursor-default") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-center font-k700 text-blue-200 py-[11rem] xl:text-[1.8rem] cursor-default") }));
        __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.carAmount === 0) }), null, null);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("p-[2.2rem] xl:p-[3rem] cursor-default") }));
        __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.carAmount > 0) }), null, null);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-between") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.thumbCart)), alt: ("product icon") }, { class: ("w-[5rem] xl:w-[7rem] rounded-lg") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("text-gray-500 xl:text-[1.6rem] text-left") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("xl:mb-[2rem]") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.carAmount);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("text-black font-k700 ml-[0.2rem]") }));
        ((125 * __VLS_ctx.carAmount).toFixed(2));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!((props.emptyCart)))
                    return;
                __VLS_ctx.emits('cleanCart', 0);
            } }, { src: ((__VLS_ctx.trash)), alt: ("delete icon") }), { class: ("block xl:w-[1.8rem] cursor-pointer") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ class: ("btn btnCheckout no-animation btn-block text-[1.6rem] mt-[2.2rem] py-[2.5rem] font-k700 leading-[0] bg-orange-100 rounded-2xl xl:py-[3rem] hover:bg-orange-400") }));
    }
    __VLS_5.slots.default;
    var __VLS_5;
    ['absolute', 'top-[9.5%]', 'w-[97%]', 'left-1/2', 'translate-x-[-50%]', 'bg-white', 'rounded-lg', 'z-[11]', 'xl:top-[200%]', 'xl:w-[40rem]', 'boxShadow', 'font-k700', 'p-[2.2rem]', 'pb-[2.5rem]', 'border-b-[1px]', 'xl:text-[1.8rem]', 'xl:text-left', 'xl:p-[3rem]', 'cursor-default', 'text-center', 'font-k700', 'text-blue-200', 'py-[11rem]', 'xl:text-[1.8rem]', 'cursor-default', 'p-[2.2rem]', 'xl:p-[3rem]', 'cursor-default', 'flex', 'items-center', 'justify-between', 'w-[5rem]', 'xl:w-[7rem]', 'rounded-lg', 'text-gray-500', 'xl:text-[1.6rem]', 'text-left', 'xl:mb-[2rem]', 'text-black', 'font-k700', 'ml-[0.2rem]', 'block', 'xl:w-[1.8rem]', 'cursor-pointer', 'btn', 'btnCheckout', 'no-animation', 'btn-block', 'text-[1.6rem]', 'mt-[2.2rem]', 'py-[2.5rem]', 'font-k700', 'leading-[0]', 'bg-orange-100', 'rounded-2xl', 'xl:py-[3rem]', 'hover:bg-orange-400',];
    var __VLS_slots;
    var $slots;
    var __VLS_inheritedAttrs;
    var $attrs;
    var __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
var __VLS_self = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    setup: function () {
        return {
            thumbCart: image_product_1_thumbnail_jpg_1.default,
            trash: icon_delete_svg_1.default,
            carAmount: carAmount,
            emits: emits,
        };
    },
    emits: {},
    props: {
        emptyCart: Boolean,
    },
});
exports.default = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    setup: function () {
        return {};
    },
    emits: {},
    props: {
        emptyCart: Boolean,
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
