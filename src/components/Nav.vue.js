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
var logo_svg_1 = __importDefault(require("@/images/logo.svg"));
var icon_menu_svg_1 = __importDefault(require("@/images/icon-menu.svg"));
var icon_cart_svg_1 = __importDefault(require("@/images/icon-cart.svg"));
var image_avatar_png_1 = __importDefault(require("@/images/image-avatar.png"));
var icon_close_svg_1 = __importDefault(require("@/images/icon-close.svg"));
var Cart_vue_1 = __importDefault(require("./utils/Cart.vue"));
var linksData = (0, vue_1.ref)(['collections', 'men', 'women', 'about', 'contact']);
var emptyCart = (0, vue_1.ref)(false);
var isOpen = (0, vue_1.inject)('isOpen');
var zIndexStatus = (0, vue_1.inject)('zIndexStatus');
var carAmount = (0, vue_1.inject)('carAmount');
var cartRef = (0, vue_1.ref)();
var handleMenu = function () {
    if (isOpen.value) {
        isOpen.value = false;
        setTimeout(function () {
            zIndexStatus.value = true;
        }, 300);
    }
    else {
        emptyCart.value = false;
        isOpen.value = true;
        zIndexStatus.value = false;
    }
};
var checkE = function (e) {
    if (e.target) {
        isOpen.value = false;
        setTimeout(function () {
            zIndexStatus.value = true;
        }, 300);
    }
};
var handleCart = function () {
    emptyCart.value = !emptyCart.value;
};
var handleClickOutside = function (e) {
    if (cartRef.value && !cartRef.value.contains(e.target)) {
        emptyCart.value = false;
    }
};
(0, vue_1.onMounted)(function () {
    document.addEventListener('click', handleClickOutside);
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)(__assign({ class: ("container") }, { ref: ("cartRef") }));
    // @ts-ignore navigation for `const cartRef = ref()`
    /** @type { typeof __VLS_ctx.cartRef } */ ;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("absolute w-[60%] h-[100%] bg-white left-0 p-[1rem] pt-[9rem] transition-transform z-20 duration-300") }, { class: ((__VLS_ctx.isOpen ? 'translate-x-0' : 'translate-x-[-100%]')) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(__assign({ class: ("menu bg-base-200 rounded-box w-fit gap-y-[2.5rem] bg-transparent") }));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.linksData)); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b[0], index = _b[1];
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            key: ((index)),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)(__assign({ class: ("capitalize text-[1.6rem] font-bold p-0 text-blue-100") }, { href: ("#") }));
        (item);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("navbar bg-base-100 p-[2rem] z-[5] bg-transparent xl:p-[4rem] xl:px-0 border-b-2 border-gray-100") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex-1 gap-x-[2rem]") }));
    var __VLS_0 = {}.Transition;
    /** @type { [typeof __VLS_components.Transition, typeof __VLS_components.Transition, ] } */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ mode: ("out-in") }, { class: ("xl:hidden") })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ mode: ("out-in") }, { class: ("xl:hidden") })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    if (!__VLS_ctx.isOpen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ onClick: (__VLS_ctx.handleMenu) }, { src: ((__VLS_ctx.burgir)), alt: ("open menu") }), { class: ("block z-[100] w-[1.7rem] h-[1.7rem]") }));
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ onClick: (__VLS_ctx.handleMenu) }, { src: ((__VLS_ctx.closeMenu)), alt: ("close menu") }), { class: ("block z-[100] w-[1.7rem] h-[1.7rem]") }));
    }
    __VLS_5.slots.default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.logo)), alt: ("sneakers") }, { class: ("mb-[.4rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(__assign({ class: ("hidden ml-[4rem] xl:flex gap-x-[2.5rem]") }));
    for (var _c = 0, _d = __VLS_getVForSourceType((__VLS_ctx.linksData)); _c < _d.length; _c++) {
        var _e = _d[_c], item = _e[0], index = _e[1];
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(__assign({ key: ((index)) }, { class: ("text-gray-600 capitalize cursor-pointer transition-colors duration-200 hover:text-gray-800 navLink") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
            href: ("#"),
        });
        (item);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex gap-x-[1.7rem] xl:gap-x-[4rem] xl:mr-[6rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("dropdown dropdown-end") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ tabindex: ("0"), role: ("button") }, { class: ("btn btn-ghost btn-circle no-animation") }), { ref: ("cartRef") }));
    // @ts-ignore navigation for `const cartRef = ref()`
    /** @type { typeof __VLS_ctx.cartRef } */ ;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("indicator") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ onClick: (__VLS_ctx.handleCart) }, { src: ((__VLS_ctx.cart)), alt: ("cart") }), { class: ("xl:w-[3rem] w-[2.2rem] cartImg hover:brightness-0") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: ("badge badge-lg indicator-item z-[0] border-none text-white") }, { class: (({
            hidden: !__VLS_ctx.carAmount,
            'bg-orange-100': __VLS_ctx.carAmount > 0,
        })) }));
    (__VLS_ctx.carAmount);
    // @ts-ignore
    /** @type { [typeof Cart, typeof Cart, ] } */ ;
    // @ts-ignore
    var __VLS_6 = __VLS_asFunctionalComponent(Cart_vue_1.default, new Cart_vue_1.default(__assign(__assign({ 'onCleanCart': {} }, { class: ("hidden xl:block") }), { emptyCart: ((__VLS_ctx.emptyCart)) })));
    var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign(__assign({ 'onCleanCart': {} }, { class: ("hidden xl:block") }), { emptyCart: ((__VLS_ctx.emptyCart)) })], __VLS_functionalComponentArgsRest(__VLS_6), false));
    var __VLS_11;
    var __VLS_12 = {
        onCleanCart: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.carAmount = $event;
        }
    };
    var __VLS_8;
    var __VLS_9;
    var __VLS_10;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("dropdown dropdown-end") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ tabindex: ("0"), role: ("button") }, { class: ("btn btn-ghost ghostBtn btn-circle avatar xl:w-[5.5rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("w-full avatarBorder rounded-full xl:border-[2px] xl:border-transparent xl:hover:border-orange-100") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        alt: ("your avatar"),
        src: ((__VLS_ctx.avatar)),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ onClick: (__VLS_ctx.checkE) }, { class: ("bg-black absolute w-full h-full top-0 left-0 transition-opacity duration-200") }), { class: (([__VLS_ctx.isOpen ? 'z-10 opacity-[.75]' : 'opacity-0', __VLS_ctx.zIndexStatus && 'z-[-10]'])) }));
    // @ts-ignore
    /** @type { [typeof Cart, typeof Cart, ] } */ ;
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(Cart_vue_1.default, new Cart_vue_1.default(__assign(__assign({ 'onCleanCart': {} }, { class: ("xl:hidden") }), { emptyCart: ((__VLS_ctx.emptyCart)) })));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign(__assign({ 'onCleanCart': {} }, { class: ("xl:hidden") }), { emptyCart: ((__VLS_ctx.emptyCart)) })], __VLS_functionalComponentArgsRest(__VLS_13), false));
    var __VLS_18;
    var __VLS_19 = {
        onCleanCart: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.carAmount = $event;
        }
    };
    var __VLS_15;
    var __VLS_16;
    var __VLS_17;
    ['container', 'absolute', 'w-[60%]', 'h-[100%]', 'bg-white', 'left-0', 'p-[1rem]', 'pt-[9rem]', 'transition-transform', 'z-20', 'duration-300', 'menu', 'bg-base-200', 'rounded-box', 'w-fit', 'gap-y-[2.5rem]', 'bg-transparent', 'capitalize', 'text-[1.6rem]', 'font-bold', 'p-0', 'text-blue-100', 'navbar', 'bg-base-100', 'p-[2rem]', 'z-[5]', 'bg-transparent', 'xl:p-[4rem]', 'xl:px-0', 'border-b-2', 'border-gray-100', 'flex-1', 'gap-x-[2rem]', 'xl:hidden', 'block', 'z-[100]', 'w-[1.7rem]', 'h-[1.7rem]', 'block', 'z-[100]', 'w-[1.7rem]', 'h-[1.7rem]', 'mb-[.4rem]', 'hidden', 'ml-[4rem]', 'xl:flex', 'gap-x-[2.5rem]', 'text-gray-600', 'capitalize', 'cursor-pointer', 'transition-colors', 'duration-200', 'hover:text-gray-800', 'navLink', 'flex', 'gap-x-[1.7rem]', 'xl:gap-x-[4rem]', 'xl:mr-[6rem]', 'dropdown', 'dropdown-end', 'btn', 'btn-ghost', 'btn-circle', 'no-animation', 'indicator', 'xl:w-[3rem]', 'w-[2.2rem]', 'cartImg', 'hover:brightness-0', 'badge', 'badge-lg', 'indicator-item', 'z-[0]', 'border-none', 'text-white', 'hidden', 'bg-orange-100', 'hidden', 'xl:block', 'dropdown', 'dropdown-end', 'btn', 'btn-ghost', 'ghostBtn', 'btn-circle', 'avatar', 'xl:w-[5.5rem]', 'w-full', 'avatarBorder', 'rounded-full', 'xl:border-[2px]', 'xl:border-transparent', 'xl:hover:border-orange-100', 'bg-black', 'absolute', 'w-full', 'h-full', 'top-0', 'left-0', 'transition-opacity', 'duration-200', 'xl:hidden',];
    var __VLS_slots;
    var $slots;
    var __VLS_inheritedAttrs;
    var $attrs;
    var __VLS_refs = {
        'cartRef': __VLS_nativeElements['div'],
    };
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
            logo: logo_svg_1.default,
            burgir: icon_menu_svg_1.default,
            cart: icon_cart_svg_1.default,
            avatar: image_avatar_png_1.default,
            closeMenu: icon_close_svg_1.default,
            Cart: Cart_vue_1.default,
            linksData: linksData,
            emptyCart: emptyCart,
            isOpen: isOpen,
            zIndexStatus: zIndexStatus,
            carAmount: carAmount,
            cartRef: cartRef,
            handleMenu: handleMenu,
            checkE: checkE,
            handleCart: handleCart,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    setup: function () {
        return {};
    },
    __typeRefs: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
