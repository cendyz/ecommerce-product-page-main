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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var icon_plus_svg_1 = __importDefault(require("@/images/icon-plus.svg"));
var icon_minus_svg_1 = __importDefault(require("@/images/icon-minus.svg"));
var icon_cart_svg_1 = __importDefault(require("@/images/icon-cart.svg"));
var emit = defineEmits(['updateAmount']);
var amount = (0, vue_1.inject)('amount');
var carAmount = (0, vue_1.inject)('carAmount');
var decreaseAmount = function () {
    if (amount.value === 0)
        return;
    amount.value--;
};
var checkE = function () {
    if (amount.value === 0)
        return;
    carAmount.value += amount.value;
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("p-[2rem] xl:w-[50%]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("uppercase text-blue-200 font-k700 text-[1.1rem] tracking-widest mb-[1rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("capitalize text-[2.7rem] font-k700 mb-[1.5rem] xl:text-[5rem] xl:leading-[1.1]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-blue-200 text-[1.5rem] leading-[1.6] xl:mt-[3rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex justify-between mt-[2rem] items-center xl:block") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center gap-x-[1.6rem] xl:mb-[1rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-[2.2rem] font-k700 tracking-wide") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("px-[.8rem] py-[.2rem] bg-black text-white rounded-lg text-[1.3rem] font-k700") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-blue-200 text-[1.3rem] font-k700 tracking-wide line-through") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("xl:flex xl:items-center xl:justify-between xl:w-full xl:mt-[3rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex justify-between items-center mt-[2rem] rounded-lg bg-blue-400 xl:mt-0 xl:w-[14rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: (__VLS_ctx.decreaseAmount) }, { type: ("button") }), { class: ("p-[1.7rem] xl:w-[5rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        src: ((__VLS_ctx.minus)),
        alt: ("minus icon"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("font-k700 xl:px-[2rem] xl:w-[5rem]") }));
    (__VLS_ctx.amount);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.amount++;
        } }, { type: ("button") }), { class: ("p-[1.7rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        src: ((__VLS_ctx.plus)),
        alt: ("plus icon"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.checkE) }, { class: ("mt-[1.1rem] rounded-2xl btn no-animation bg-orange-100 text-[1.5rem] btn-block h-[4.6rem] leading-[0] hover:bg-orange-400 xl:mt-0 xl:w-[67%] xl:h-[5.2rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.cartIcon)), alt: ("cart icon") }, { class: ("cartIcon") }));
    ['p-[2rem]', 'xl:w-[50%]', 'uppercase', 'text-blue-200', 'font-k700', 'text-[1.1rem]', 'tracking-widest', 'mb-[1rem]', 'capitalize', 'text-[2.7rem]', 'font-k700', 'mb-[1.5rem]', 'xl:text-[5rem]', 'xl:leading-[1.1]', 'text-blue-200', 'text-[1.5rem]', 'leading-[1.6]', 'xl:mt-[3rem]', 'flex', 'justify-between', 'mt-[2rem]', 'items-center', 'xl:block', 'flex', 'items-center', 'gap-x-[1.6rem]', 'xl:mb-[1rem]', 'text-[2.2rem]', 'font-k700', 'tracking-wide', 'px-[.8rem]', 'py-[.2rem]', 'bg-black', 'text-white', 'rounded-lg', 'text-[1.3rem]', 'font-k700', 'text-blue-200', 'text-[1.3rem]', 'font-k700', 'tracking-wide', 'line-through', 'xl:flex', 'xl:items-center', 'xl:justify-between', 'xl:w-full', 'xl:mt-[3rem]', 'flex', 'justify-between', 'items-center', 'mt-[2rem]', 'rounded-lg', 'bg-blue-400', 'xl:mt-0', 'xl:w-[14rem]', 'p-[1.7rem]', 'xl:w-[5rem]', 'font-k700', 'xl:px-[2rem]', 'xl:w-[5rem]', 'p-[1.7rem]', 'mt-[1.1rem]', 'rounded-2xl', 'btn', 'no-animation', 'bg-orange-100', 'text-[1.5rem]', 'btn-block', 'h-[4.6rem]', 'leading-[0]', 'hover:bg-orange-400', 'xl:mt-0', 'xl:w-[67%]', 'xl:h-[5.2rem]', 'cartIcon',];
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
            plus: icon_plus_svg_1.default,
            minus: icon_minus_svg_1.default,
            cartIcon: icon_cart_svg_1.default,
            amount: amount,
            decreaseAmount: decreaseAmount,
            checkE: checkE,
        };
    },
    emits: {},
});
exports.default = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    setup: function () {
        return {};
    },
    emits: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
