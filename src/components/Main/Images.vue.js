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
var vue_splide_1 = require("@splidejs/vue-splide");
require("@splidejs/vue-splide/css");
var image_product_1_jpg_1 = __importDefault(require("@/images/image-product-1.jpg"));
var image_product_2_jpg_1 = __importDefault(require("@/images/image-product-2.jpg"));
var image_product_3_jpg_1 = __importDefault(require("@/images/image-product-3.jpg"));
var image_product_4_jpg_1 = __importDefault(require("@/images/image-product-4.jpg"));
var icon_next_svg_1 = __importDefault(require("@/images/icon-next.svg"));
var icon_previous_svg_1 = __importDefault(require("@/images/icon-previous.svg"));
var icon_close_svg_1 = __importDefault(require("@/images/icon-close.svg"));
var imgData = (0, vue_1.ref)([image_product_1_jpg_1.default, image_product_2_jpg_1.default, image_product_3_jpg_1.default, image_product_4_jpg_1.default]);
var openedImgData = (0, vue_1.ref)([image_product_1_jpg_1.default, image_product_2_jpg_1.default, image_product_3_jpg_1.default, image_product_4_jpg_1.default]);
var isOpen = (0, vue_1.inject)('isOpen');
var actualImage = (0, vue_1.ref)(image_product_1_jpg_1.default);
var openedImage = (0, vue_1.ref)('');
var openedIndex = (0, vue_1.ref)(0);
var isOpenImages = (0, vue_1.ref)(false);
var arrowStyles = [
    'absolute z-30 bg-white top-[42%] left-[-4%] translate-y-[-50%] px-[1.7rem] py-[1.5rem] scale-[1.2] rounded-full cursor-pointer',
];
var plusIndex = function () {
    if (openedIndex.value === openedImgData.value.length - 1) {
        openedIndex.value = 0;
        return;
    }
    openedIndex.value++;
};
var minusIndex = function () {
    if (openedIndex.value === 0) {
        openedIndex.value = openedImgData.value.length - 1;
        return;
    }
    openedIndex.value--;
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("xl:hidden") }));
    var __VLS_0 = {}.Splide;
    /** @type { [typeof __VLS_components.Splide, typeof __VLS_components.Splide, ] } */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        options: (({
            type: 'loop',
            perPage: 1,
            interval: 2500,
            rewind: true,
            autoplay: true,
        })),
        'aria-label': ("My Favorite Images"),
    }));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([{
            options: (({
                type: 'loop',
                perPage: 1,
                interval: 2500,
                rewind: true,
                autoplay: true,
            })),
            'aria-label': ("My Favorite Images"),
        }], __VLS_functionalComponentArgsRest(__VLS_1), false));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.imgData)); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b[0], index = _b[1];
        var __VLS_6 = {}.SplideSlide;
        /** @type { [typeof __VLS_components.SplideSlide, typeof __VLS_components.SplideSlide, ] } */ ;
        // @ts-ignore
        var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
            key: ((index)),
        }));
        var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{
                key: ((index)),
            }], __VLS_functionalComponentArgsRest(__VLS_7), false));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ alt: ("product image"), src: ((item)) }, { class: ("w-full transition-all duration-[400ms]") }), { class: (({ 'brightness-[65%]': __VLS_ctx.isOpen, 'brightness-100': !__VLS_ctx.isOpen })) }));
        __VLS_11.slots.default;
        var __VLS_11;
    }
    __VLS_5.slots.default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("hidden xl:block w-[50%]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            ;
            (__VLS_ctx.isOpenImages = true), (__VLS_ctx.openedImage = __VLS_ctx.actualImage);
        } }, { src: ((__VLS_ctx.actualImage)), alt: ("product image") }), { class: ("w-[65rem] rounded-[2rem] cursor-pointer") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex justify-between mt-[3rem]") }));
    var _loop_1 = function (item, index) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ key: ((index)) }, { class: ("border-[3px] rounded-[1.8rem]") }), { class: (([__VLS_ctx.actualImage === item ? 'border-orange-100' : 'border-transparent'])) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                ;
                (__VLS_ctx.actualImage = item), (__VLS_ctx.openedIndex = index);
            } }, { src: ((item)), alt: ("product image") }), { class: ("w-[10rem] max-w-[10rem] rounded-[1.5rem] cursor-pointer hover:opacity-30 transition-opacity duration-300") }), { class: (({ 'opacity-30': item === __VLS_ctx.actualImage })) }));
    };
    for (var _c = 0, _d = __VLS_getVForSourceType((__VLS_ctx.imgData)); _c < _d.length; _c++) {
        var _e = _d[_c], item = _e[0], index = _e[1];
        _loop_1(item, index);
    }
    if (__VLS_ctx.isOpenImages) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-30 scale-[1.2]") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!((__VLS_ctx.isOpenImages)))
                    return;
                __VLS_ctx.isOpenImages = false;
            } }, { src: ((__VLS_ctx.close)), alt: ("close") }), { class: ("brightness-[2.1] w-[2rem] block mb-[1rem] ml-auto cursor-pointer") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("relative") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign(__assign({ onClick: (__VLS_ctx.plusIndex) }, { src: ((__VLS_ctx.nextArrow)), alt: ("next") }), { class: ((__VLS_ctx.arrowStyles)) }), { class: ("left-[96.5%]") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign({ onClick: (__VLS_ctx.minusIndex) }, { src: ((__VLS_ctx.previousArrow)), alt: ("previous") }), { class: ((__VLS_ctx.arrowStyles)) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((__VLS_ctx.openedImgData[__VLS_ctx.openedIndex])), alt: ("product icon") }, { class: ("w-[63rem] rounded-[1.3rem]") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex justify-center gap-x-[1.7rem] mt-[3rem]") }));
        var _loop_2 = function (item, index) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ key: ((index)) }, { class: ("bg-white border-[2px] rounded-[1.3rem] z-[20] overflow-hidden") }), { class: (([__VLS_ctx.openedIndex === index ? 'border-orange-100' : 'border-transparent'])) }));
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign(__assign(__assign({ onClick: function () {
                    var _a = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _a[_i] = arguments[_i];
                    }
                    var $event = _a[0];
                    if (!((__VLS_ctx.isOpenImages)))
                        return;
                    __VLS_ctx.openedIndex = index;
                } }, { src: ((item)), alt: ("Product icon") }), { class: ("w-[8rem] cursor-pointer hover:opacity-30 transition-opacity duration-300") }), { class: (({ 'opacity-30': __VLS_ctx.openedIndex === index })) }));
        };
        for (var _f = 0, _g = __VLS_getVForSourceType((__VLS_ctx.openedImgData)); _f < _g.length; _f++) {
            var _h = _g[_f], item = _h[0], index = _h[1];
            _loop_2(item, index);
        }
    }
    if (__VLS_ctx.isOpenImages) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var $event = _a[0];
                if (!((__VLS_ctx.isOpenImages)))
                    return;
                __VLS_ctx.isOpenImages = false;
            } }, { class: ("absolute top-0 left-0 w-full h-full bg-black opacity-70 z-[20]") }));
    }
    ['xl:hidden', 'w-full', 'transition-all', 'duration-[400ms]', 'brightness-[65%]', 'brightness-100', 'hidden', 'xl:block', 'w-[50%]', 'w-[65rem]', 'rounded-[2rem]', 'cursor-pointer', 'flex', 'justify-between', 'mt-[3rem]', 'border-[3px]', 'rounded-[1.8rem]', 'w-[10rem]', 'max-w-[10rem]', 'rounded-[1.5rem]', 'cursor-pointer', 'hover:opacity-30', 'transition-opacity', 'duration-300', 'opacity-30', 'absolute', 'top-1/2', 'left-1/2', 'translate-x-[-50%]', 'translate-y-[-50%]', 'z-30', 'scale-[1.2]', 'brightness-[2.1]', 'w-[2rem]', 'block', 'mb-[1rem]', 'ml-auto', 'cursor-pointer', 'relative', 'left-[96.5%]', 'w-[63rem]', 'rounded-[1.3rem]', 'flex', 'justify-center', 'gap-x-[1.7rem]', 'mt-[3rem]', 'bg-white', 'border-[2px]', 'rounded-[1.3rem]', 'z-[20]', 'overflow-hidden', 'w-[8rem]', 'cursor-pointer', 'hover:opacity-30', 'transition-opacity', 'duration-300', 'opacity-30', 'absolute', 'top-0', 'left-0', 'w-full', 'h-full', 'bg-black', 'opacity-70', 'z-[20]',];
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
            Splide: vue_splide_1.Splide,
            SplideSlide: vue_splide_1.SplideSlide,
            nextArrow: icon_next_svg_1.default,
            previousArrow: icon_previous_svg_1.default,
            close: icon_close_svg_1.default,
            imgData: imgData,
            openedImgData: openedImgData,
            isOpen: isOpen,
            actualImage: actualImage,
            openedImage: openedImage,
            openedIndex: openedIndex,
            isOpenImages: isOpenImages,
            arrowStyles: arrowStyles,
            plusIndex: plusIndex,
            minusIndex: minusIndex,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
