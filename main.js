const loadAnalytics = () => {
    (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0]
          , j = d.createElement(s)
          , dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = !0;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f)
    }
    )(window, document, 'script', 'dataLayer', 'GTM-M8RMXWW')
}
document.addEventListener('DOMContentLoaded', () => {
    function loadAnalyticsOnce() {
        window.removeEventListener('scroll', handleEvent);
        window.removeEventListener('click', handleEvent);
        clearTimeout(timeoutId);
        loadAnalytics()
    }
    function handleEvent() {
        loadAnalyticsOnce()
    }
    window.addEventListener('scroll', handleEvent);
    window.addEventListener('click', handleEvent);
    const timeoutId = setTimeout(loadAnalyticsOnce, 5000)
}
);
!function(n, e, t, r, s, a) {
    function c(n, r) {
        var s = e.createElement(t)
          , a = e.getElementsByTagName(t)[0];
        s.async = 1,
        s.src = n,
        s.onerror = r,
        a.parentNode.insertBefore(s, a)
    }
    n.SustainImpact = {
        k: r,
        ready: !1
    },
    n[r] = function() {
        var e, t, s = new Promise(function(n, r) {
            e = n,
            t = r
        }
        );
        return (n[r].r = n[r].r || []).push({
            s: e,
            f: t
        }),
        (n[r].c = n[r].c || []).push(arguments),
        s
    }
    ,
    c(s, function() {
        c(a)
    })
}(window, document, "script", "impact", "https://cdn.sustain-impact.de/userBundleSustainImpact.js", "https://bundle.sustain-impact.de/userBundleSustainImpact.js");
impact('init', '3a0d07b2-f2c9-4fa4-8061-410fc40b705c');
impact('start');
/**
 * Swiper 11.1.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2024 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 30, 2024
 */

var Swiper = function() {
    "use strict";
    function e(e) {
        return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
    }
    function t(s, a) {
        void 0 === s && (s = {}),
        void 0 === a && (a = {}),
        Object.keys(a).forEach((i => {
            void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
        }
        ))
    }
    const s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s),
        e
    }
    const i = {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(),
        null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };
    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i),
        e
    }
    function n(e) {
        return void 0 === e && (e = ""),
        e.trim().split(" ").filter((e => !!e.trim()))
    }
    function l(e, t) {
        return void 0 === t && (t = 0),
        setTimeout(e, t)
    }
    function o() {
        return Date.now()
    }
    function d(e, t) {
        void 0 === t && (t = "x");
        const s = r();
        let a, i, n;
        const l = function(e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)),
            !s && e.currentStyle && (s = e.currentStyle),
            s || (s = e.style),
            s
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform,
        i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")),
        n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
        a = n.toString().split(",")),
        "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
        "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
        i || 0
    }
    function c(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }
    function p() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0])
          , t = ["__proto__", "constructor", "prototype"];
        for (let a = 1; a < arguments.length; a += 1) {
            const i = a < 0 || arguments.length <= a ? void 0 : arguments[a];
            if (null != i && (s = i,
            !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
                const s = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
                for (let t = 0, a = s.length; t < a; t += 1) {
                    const a = s[t]
                      , r = Object.getOwnPropertyDescriptor(i, a);
                    void 0 !== r && r.enumerable && (c(e[a]) && c(i[a]) ? i[a].__swiper__ ? e[a] = i[a] : p(e[a], i[a]) : !c(e[a]) && c(i[a]) ? (e[a] = {},
                    i[a].__swiper__ ? e[a] = i[a] : p(e[a], i[a])) : e[a] = i[a])
                }
            }
        }
        var s;
        return e
    }
    function u(e, t, s) {
        e.style.setProperty(t, s)
    }
    function m(e) {
        let {swiper: t, targetPosition: s, side: a} = e;
        const i = r()
          , n = -t.translate;
        let l, o = null;
        const d = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none",
        i.cancelAnimationFrame(t.cssModeFrameID);
        const c = s > n ? "next" : "prev"
          , p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t
          , u = () => {
            l = (new Date).getTime(),
            null === o && (o = l);
            const e = Math.max(Math.min((l - o) / d, 1), 0)
              , r = .5 - Math.cos(e * Math.PI) / 2;
            let c = n + r * (s - n);
            if (p(c, s) && (c = s),
            t.wrapperEl.scrollTo({
                [a]: c
            }),
            p(c, s))
                return t.wrapperEl.style.overflow = "hidden",
                t.wrapperEl.style.scrollSnapType = "",
                setTimeout(( () => {
                    t.wrapperEl.style.overflow = "",
                    t.wrapperEl.scrollTo({
                        [a]: c
                    })
                }
                )),
                void i.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = i.requestAnimationFrame(u)
        }
        ;
        u()
    }
    function h(e) {
        return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
    }
    function f(e, t) {
        return void 0 === t && (t = ""),
        [...e.children].filter((e => e.matches(t)))
    }
    function g(e) {
        try {
            return void console.warn(e)
        } catch (e) {}
    }
    function v(e, t) {
        void 0 === t && (t = []);
        const s = document.createElement(e);
        return s.classList.add(...Array.isArray(t) ? t : n(t)),
        s
    }
    function w(e) {
        const t = r()
          , s = a()
          , i = e.getBoundingClientRect()
          , n = s.body
          , l = e.clientTop || n.clientTop || 0
          , o = e.clientLeft || n.clientLeft || 0
          , d = e === t ? t.scrollY : e.scrollTop
          , c = e === t ? t.scrollX : e.scrollLeft;
        return {
            top: i.top + d - l,
            left: i.left + c - o
        }
    }
    function b(e, t) {
        return r().getComputedStyle(e, null).getPropertyValue(t)
    }
    function y(e) {
        let t, s = e;
        if (s) {
            for (t = 0; null !== (s = s.previousSibling); )
                1 === s.nodeType && (t += 1);
            return t
        }
    }
    function E(e, t) {
        const s = [];
        let a = e.parentElement;
        for (; a; )
            t ? a.matches(t) && s.push(a) : s.push(a),
            a = a.parentElement;
        return s
    }
    function x(e, t) {
        t && e.addEventListener("transitionend", (function s(a) {
            a.target === e && (t.call(e, a),
            e.removeEventListener("transitionend", s))
        }
        ))
    }
    function S(e, t, s) {
        const a = r();
        return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(a.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
    }
    function T(e) {
        return (Array.isArray(e) ? e : [e]).filter((e => !!e))
    }
    let M, C, P;
    function L() {
        return M || (M = function() {
            const e = r()
              , t = a();
            return {
                smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior"in t.documentElement.style,
                touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch)
            }
        }()),
        M
    }
    function I(e) {
        return void 0 === e && (e = {}),
        C || (C = function(e) {
            let {userAgent: t} = void 0 === e ? {} : e;
            const s = L()
              , a = r()
              , i = a.navigator.platform
              , n = t || a.navigator.userAgent
              , l = {
                ios: !1,
                android: !1
            }
              , o = a.screen.width
              , d = a.screen.height
              , c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/)
              , m = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
              , h = "Win32" === i;
            let f = "MacIntel" === i;
            return !p && f && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/),
            p || (p = [0, 1, "13_0_0"]),
            f = !1),
            c && !h && (l.os = "android",
            l.android = !0),
            (p || m || u) && (l.os = "ios",
            l.ios = !0),
            l
        }(e)),
        C
    }
    function A() {
        return P || (P = function() {
            const e = r()
              , t = I();
            let s = !1;
            function a() {
                const t = e.navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }
            if (a()) {
                const t = String(e.navigator.userAgent);
                if (t.includes("Version/")) {
                    const [e,a] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                    s = e < 16 || 16 === e && a < 2
                }
            }
            const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
              , n = a();
            return {
                isSafari: s || n,
                needPerspectiveFix: s,
                need3dFix: n || i && t.ios,
                isWebView: i
            }
        }()),
        P
    }
    var z = {
        on(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed)
                return a;
            if ("function" != typeof t)
                return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                a.eventsListeners[e] || (a.eventsListeners[e] = []),
                a.eventsListeners[e][i](t)
            }
            )),
            a
        },
        once(e, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed)
                return a;
            if ("function" != typeof t)
                return a;
            function i() {
                a.off(e, i),
                i.__emitterProxy && delete i.__emitterProxy;
                for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
                    r[n] = arguments[n];
                t.apply(a, r)
            }
            return i.__emitterProxy = t,
            a.on(e, i, s)
        },
        onAny(e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed)
                return s;
            if ("function" != typeof e)
                return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e),
            s
        },
        offAny(e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed)
                return t;
            if (!t.eventsAnyListeners)
                return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1),
            t
        },
        off(e, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(( (a, i) => {
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                }
                ))
            }
            )),
            s) : s
        },
        emit() {
            const e = this;
            if (!e.eventsListeners || e.destroyed)
                return e;
            if (!e.eventsListeners)
                return e;
            let t, s, a;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
                r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0]) ? (t = r[0],
            s = r.slice(1, r.length),
            a = e) : (t = r[0].events,
            s = r[0].data,
            a = r[0].context || e),
            s.unshift(a);
            return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                    e.apply(a, [t, ...s])
                }
                )),
                e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                    e.apply(a, s)
                }
                ))
            }
            )),
            e
        }
    };
    const $ = (e, t, s) => {
        t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
    }
    ;
    const k = (e, t, s) => {
        t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
    }
    ;
    const O = (e, t) => {
        if (!e || e.destroyed || !e.params)
            return;
        const s = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
        if (s) {
            let t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(( () => {
                s.shadowRoot && (t = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),
                t && t.remove())
            }
            ))),
            t && t.remove()
        }
    }
      , D = (e, t) => {
        if (!e.slides[t])
            return;
        const s = e.slides[t].querySelector('[loading="lazy"]');
        s && s.removeAttribute("loading")
    }
      , G = e => {
        if (!e || e.destroyed || !e.params)
            return;
        let t = e.params.lazyPreloadPrevNext;
        const s = e.slides.length;
        if (!s || !t || t < 0)
            return;
        t = Math.min(t, s);
        const a = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView)
          , i = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
            const s = i
              , r = [s - t];
            return r.push(...Array.from({
                length: t
            }).map(( (e, t) => s + a + t))),
            void e.slides.forEach(( (t, s) => {
                r.includes(t.column) && D(e, s)
            }
            ))
        }
        const r = i + a - 1;
        if (e.params.rewind || e.params.loop)
            for (let a = i - t; a <= r + t; a += 1) {
                const t = (a % s + s) % s;
                (t < i || t > r) && D(e, t)
            }
        else
            for (let a = Math.max(i - t, 0); a <= Math.min(r + t, s - 1); a += 1)
                a !== i && (a > r || a < i) && D(e, a)
    }
    ;
    var H = {
        updateSize: function() {
            const e = this;
            let t, s;
            const a = e.el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a.clientWidth,
            s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a.clientHeight,
            0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(b(a, "padding-left") || 0, 10) - parseInt(b(a, "padding-right") || 0, 10),
            s = s - parseInt(b(a, "padding-top") || 0, 10) - parseInt(b(a, "padding-bottom") || 0, 10),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
            }))
        },
        updateSlides: function() {
            const e = this;
            function t(t, s) {
                return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0)
            }
            const s = e.params
              , {wrapperEl: a, slidesEl: i, size: r, rtlTranslate: n, wrongRTL: l} = e
              , o = e.virtual && s.virtual.enabled
              , d = o ? e.virtual.slides.length : e.slides.length
              , c = f(i, `.${e.params.slideClass}, swiper-slide`)
              , p = o ? e.virtual.slides.length : c.length;
            let m = [];
            const h = []
              , g = [];
            let v = s.slidesOffsetBefore;
            "function" == typeof v && (v = s.slidesOffsetBefore.call(e));
            let w = s.slidesOffsetAfter;
            "function" == typeof w && (w = s.slidesOffsetAfter.call(e));
            const y = e.snapGrid.length
              , E = e.slidesGrid.length;
            let x = s.spaceBetween
              , T = -v
              , M = 0
              , C = 0;
            if (void 0 === r)
                return;
            "string" == typeof x && x.indexOf("%") >= 0 ? x = parseFloat(x.replace("%", "")) / 100 * r : "string" == typeof x && (x = parseFloat(x)),
            e.virtualSize = -x,
            c.forEach((e => {
                n ? e.style.marginLeft = "" : e.style.marginRight = "",
                e.style.marginBottom = "",
                e.style.marginTop = ""
            }
            )),
            s.centeredSlides && s.cssMode && (u(a, "--swiper-centered-offset-before", ""),
            u(a, "--swiper-centered-offset-after", ""));
            const P = s.grid && s.grid.rows > 1 && e.grid;
            let L;
            P ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
            const I = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => void 0 !== s.breakpoints[e].slidesPerView)).length > 0;
            for (let a = 0; a < p; a += 1) {
                let i;
                if (L = 0,
                c[a] && (i = c[a]),
                P && e.grid.updateSlide(a, i, c),
                !c[a] || "none" !== b(i, "display")) {
                    if ("auto" === s.slidesPerView) {
                        I && (c[a].style[e.getDirectionLabel("width")] = "");
                        const r = getComputedStyle(i)
                          , n = i.style.transform
                          , l = i.style.webkitTransform;
                        if (n && (i.style.transform = "none"),
                        l && (i.style.webkitTransform = "none"),
                        s.roundLengths)
                            L = e.isHorizontal() ? S(i, "width", !0) : S(i, "height", !0);
                        else {
                            const e = t(r, "width")
                              , s = t(r, "padding-left")
                              , a = t(r, "padding-right")
                              , n = t(r, "margin-left")
                              , l = t(r, "margin-right")
                              , o = r.getPropertyValue("box-sizing");
                            if (o && "border-box" === o)
                                L = e + n + l;
                            else {
                                const {clientWidth: t, offsetWidth: r} = i;
                                L = e + s + a + n + l + (r - t)
                            }
                        }
                        n && (i.style.transform = n),
                        l && (i.style.webkitTransform = l),
                        s.roundLengths && (L = Math.floor(L))
                    } else
                        L = (r - (s.slidesPerView - 1) * x) / s.slidesPerView,
                        s.roundLengths && (L = Math.floor(L)),
                        c[a] && (c[a].style[e.getDirectionLabel("width")] = `${L}px`);
                    c[a] && (c[a].swiperSlideSize = L),
                    g.push(L),
                    s.centeredSlides ? (T = T + L / 2 + M / 2 + x,
                    0 === M && 0 !== a && (T = T - r / 2 - x),
                    0 === a && (T = T - r / 2 - x),
                    Math.abs(T) < .001 && (T = 0),
                    s.roundLengths && (T = Math.floor(T)),
                    C % s.slidesPerGroup == 0 && m.push(T),
                    h.push(T)) : (s.roundLengths && (T = Math.floor(T)),
                    (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && m.push(T),
                    h.push(T),
                    T = T + L + x),
                    e.virtualSize += L + x,
                    M = L,
                    C += 1
                }
            }
            if (e.virtualSize = Math.max(e.virtualSize, r) + w,
            n && l && ("slide" === s.effect || "coverflow" === s.effect) && (a.style.width = `${e.virtualSize + x}px`),
            s.setWrapperSize && (a.style[e.getDirectionLabel("width")] = `${e.virtualSize + x}px`),
            P && e.grid.updateWrapperSize(L, m),
            !s.centeredSlides) {
                const t = [];
                for (let a = 0; a < m.length; a += 1) {
                    let i = m[a];
                    s.roundLengths && (i = Math.floor(i)),
                    m[a] <= e.virtualSize - r && t.push(i)
                }
                m = t,
                Math.floor(e.virtualSize - r) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - r)
            }
            if (o && s.loop) {
                const t = g[0] + x;
                if (s.slidesPerGroup > 1) {
                    const a = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup)
                      , i = t * s.slidesPerGroup;
                    for (let e = 0; e < a; e += 1)
                        m.push(m[m.length - 1] + i)
                }
                for (let a = 0; a < e.virtual.slidesBefore + e.virtual.slidesAfter; a += 1)
                    1 === s.slidesPerGroup && m.push(m[m.length - 1] + t),
                    h.push(h[h.length - 1] + t),
                    e.virtualSize += t
            }
            if (0 === m.length && (m = [0]),
            0 !== x) {
                const t = e.isHorizontal() && n ? "marginLeft" : e.getDirectionLabel("marginRight");
                c.filter(( (e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1)).forEach((e => {
                    e.style[t] = `${x}px`
                }
                ))
            }
            if (s.centeredSlides && s.centeredSlidesBounds) {
                let e = 0;
                g.forEach((t => {
                    e += t + (x || 0)
                }
                )),
                e -= x;
                const t = e - r;
                m = m.map((e => e <= 0 ? -v : e > t ? t + w : e))
            }
            if (s.centerInsufficientSlides) {
                let e = 0;
                g.forEach((t => {
                    e += t + (x || 0)
                }
                )),
                e -= x;
                const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
                if (e + t < r) {
                    const s = (r - e - t) / 2;
                    m.forEach(( (e, t) => {
                        m[t] = e - s
                    }
                    )),
                    h.forEach(( (e, t) => {
                        h[t] = e + s
                    }
                    ))
                }
            }
            if (Object.assign(e, {
                slides: c,
                snapGrid: m,
                slidesGrid: h,
                slidesSizesGrid: g
            }),
            s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                u(a, "--swiper-centered-offset-before", -m[0] + "px"),
                u(a, "--swiper-centered-offset-after", e.size / 2 - g[g.length - 1] / 2 + "px");
                const t = -e.snapGrid[0]
                  , s = -e.slidesGrid[0];
                e.snapGrid = e.snapGrid.map((e => e + t)),
                e.slidesGrid = e.slidesGrid.map((e => e + s))
            }
            if (p !== d && e.emit("slidesLengthChange"),
            m.length !== y && (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
            h.length !== E && e.emit("slidesGridLengthChange"),
            s.watchSlidesProgress && e.updateSlidesOffset(),
            e.emit("slidesUpdated"),
            !(o || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
                const t = `${s.containerModifierClass}backface-hidden`
                  , a = e.el.classList.contains(t);
                p <= s.maxBackfaceHiddenSlides ? a || e.el.classList.add(t) : a && e.el.classList.remove(t)
            }
        },
        updateAutoHeight: function(e) {
            const t = this
              , s = []
              , a = t.virtual && t.params.virtual.enabled;
            let i, r = 0;
            "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const n = e => a ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                if (t.params.centeredSlides)
                    (t.visibleSlides || []).forEach((e => {
                        s.push(e)
                    }
                    ));
                else
                    for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                        const e = t.activeIndex + i;
                        if (e > t.slides.length && !a)
                            break;
                        s.push(n(e))
                    }
            else
                s.push(n(t.activeIndex));
            for (i = 0; i < s.length; i += 1)
                if (void 0 !== s[i]) {
                    const e = s[i].offsetHeight;
                    r = e > r ? e : r
                }
            (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`)
        },
        updateSlidesOffset: function() {
            const e = this
              , t = e.slides
              , s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
            for (let a = 0; a < t.length; a += 1)
                t[a].swiperSlideOffset = (e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop) - s - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            const t = this
              , s = t.params
              , {slides: a, rtlTranslate: i, snapGrid: r} = t;
            if (0 === a.length)
                return;
            void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e),
            t.visibleSlidesIndexes = [],
            t.visibleSlides = [];
            let l = s.spaceBetween;
            "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * t.size : "string" == typeof l && (l = parseFloat(l));
            for (let e = 0; e < a.length; e += 1) {
                const o = a[e];
                let d = o.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (d -= a[0].swiperSlideOffset);
                const c = (n + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l)
                  , p = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + l)
                  , u = -(n - d)
                  , m = u + t.slidesSizesGrid[e]
                  , h = u >= 0 && u <= t.size - t.slidesSizesGrid[e]
                  , f = u >= 0 && u < t.size - 1 || m > 1 && m <= t.size || u <= 0 && m >= t.size;
                f && (t.visibleSlides.push(o),
                t.visibleSlidesIndexes.push(e)),
                $(o, f, s.slideVisibleClass),
                $(o, h, s.slideFullyVisibleClass),
                o.progress = i ? -c : c,
                o.originalProgress = i ? -p : p
            }
        },
        updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * s || 0
            }
            const s = t.params
              , a = t.maxTranslate() - t.minTranslate();
            let {progress: i, isBeginning: r, isEnd: n, progressLoop: l} = t;
            const o = r
              , d = n;
            if (0 === a)
                i = 0,
                r = !0,
                n = !0;
            else {
                i = (e - t.minTranslate()) / a;
                const s = Math.abs(e - t.minTranslate()) < 1
                  , l = Math.abs(e - t.maxTranslate()) < 1;
                r = s || i <= 0,
                n = l || i >= 1,
                s && (i = 0),
                l && (i = 1)
            }
            if (s.loop) {
                const s = t.getSlideIndexByData(0)
                  , a = t.getSlideIndexByData(t.slides.length - 1)
                  , i = t.slidesGrid[s]
                  , r = t.slidesGrid[a]
                  , n = t.slidesGrid[t.slidesGrid.length - 1]
                  , o = Math.abs(e);
                l = o >= i ? (o - i) / n : (o + n - r) / n,
                l > 1 && (l -= 1)
            }
            Object.assign(t, {
                progress: i,
                progressLoop: l,
                isBeginning: r,
                isEnd: n
            }),
            (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e),
            r && !o && t.emit("reachBeginning toEdge"),
            n && !d && t.emit("reachEnd toEdge"),
            (o && !r || d && !n) && t.emit("fromEdge"),
            t.emit("progress", i)
        },
        updateSlidesClasses: function() {
            const e = this
              , {slides: t, params: s, slidesEl: a, activeIndex: i} = e
              , r = e.virtual && s.virtual.enabled
              , n = e.grid && s.grid && s.grid.rows > 1
              , l = e => f(a, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
            let o, d, c;
            if (r)
                if (s.loop) {
                    let t = i - e.virtual.slidesBefore;
                    t < 0 && (t = e.virtual.slides.length + t),
                    t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                    o = l(`[data-swiper-slide-index="${t}"]`)
                } else
                    o = l(`[data-swiper-slide-index="${i}"]`);
            else
                n ? (o = t.filter((e => e.column === i))[0],
                c = t.filter((e => e.column === i + 1))[0],
                d = t.filter((e => e.column === i - 1))[0]) : o = t[i];
            o && (n || (c = function(e, t) {
                const s = [];
                for (; e.nextElementSibling; ) {
                    const a = e.nextElementSibling;
                    t ? a.matches(t) && s.push(a) : s.push(a),
                    e = a
                }
                return s
            }(o, `.${s.slideClass}, swiper-slide`)[0],
            s.loop && !c && (c = t[0]),
            d = function(e, t) {
                const s = [];
                for (; e.previousElementSibling; ) {
                    const a = e.previousElementSibling;
                    t ? a.matches(t) && s.push(a) : s.push(a),
                    e = a
                }
                return s
            }(o, `.${s.slideClass}, swiper-slide`)[0],
            s.loop && 0 === !d && (d = t[t.length - 1]))),
            t.forEach((e => {
                k(e, e === o, s.slideActiveClass),
                k(e, e === c, s.slideNextClass),
                k(e, e === d, s.slidePrevClass)
            }
            )),
            e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
            const t = this
              , s = t.rtlTranslate ? t.translate : -t.translate
              , {snapGrid: a, params: i, activeIndex: r, realIndex: n, snapIndex: l} = t;
            let o, d = e;
            const c = e => {
                let s = e - t.virtual.slidesBefore;
                return s < 0 && (s = t.virtual.slides.length + s),
                s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
                s
            }
            ;
            if (void 0 === d && (d = function(e) {
                const {slidesGrid: t, params: s} = e
                  , a = e.rtlTranslate ? e.translate : -e.translate;
                let i;
                for (let e = 0; e < t.length; e += 1)
                    void 0 !== t[e + 1] ? a >= t[e] && a < t[e + 1] - (t[e + 1] - t[e]) / 2 ? i = e : a >= t[e] && a < t[e + 1] && (i = e + 1) : a >= t[e] && (i = e);
                return s.normalizeSlideIndex && (i < 0 || void 0 === i) && (i = 0),
                i
            }(t)),
            a.indexOf(s) >= 0)
                o = a.indexOf(s);
            else {
                const e = Math.min(i.slidesPerGroupSkip, d);
                o = e + Math.floor((d - e) / i.slidesPerGroup)
            }
            if (o >= a.length && (o = a.length - 1),
            d === r && !t.params.loop)
                return void (o !== l && (t.snapIndex = o,
                t.emit("snapIndexChange")));
            if (d === r && t.params.loop && t.virtual && t.params.virtual.enabled)
                return void (t.realIndex = c(d));
            const p = t.grid && i.grid && i.grid.rows > 1;
            let u;
            if (t.virtual && i.virtual.enabled && i.loop)
                u = c(d);
            else if (p) {
                const e = t.slides.filter((e => e.column === d))[0];
                let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)),
                u = Math.floor(s / i.grid.rows)
            } else if (t.slides[d]) {
                const e = t.slides[d].getAttribute("data-swiper-slide-index");
                u = e ? parseInt(e, 10) : d
            } else
                u = d;
            Object.assign(t, {
                previousSnapIndex: l,
                snapIndex: o,
                previousRealIndex: n,
                realIndex: u,
                previousIndex: r,
                activeIndex: d
            }),
            t.initialized && G(t),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) && (n !== u && t.emit("realIndexChange"),
            t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
            const s = this
              , a = s.params;
            let i = e.closest(`.${a.slideClass}, swiper-slide`);
            !i && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
                !i && e.matches && e.matches(`.${a.slideClass}, swiper-slide`) && (i = e)
            }
            ));
            let r, n = !1;
            if (i)
                for (let e = 0; e < s.slides.length; e += 1)
                    if (s.slides[e] === i) {
                        n = !0,
                        r = e;
                        break
                    }
            if (!i || !n)
                return s.clickedSlide = void 0,
                void (s.clickedIndex = void 0);
            s.clickedSlide = i,
            s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = r,
            a.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
        }
    };
    var N = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const {params: t, rtlTranslate: s, translate: a, wrapperEl: i} = this;
            if (t.virtualTranslate)
                return s ? -a : a;
            if (t.cssMode)
                return a;
            let r = d(i, e);
            return r += this.cssOverflowAdjustment(),
            s && (r = -r),
            r || 0
        },
        setTranslate: function(e, t) {
            const s = this
              , {rtlTranslate: a, params: i, wrapperEl: r, progress: n} = s;
            let l, o = 0, d = 0;
            s.isHorizontal() ? o = a ? -e : e : d = e,
            i.roundLengths && (o = Math.floor(o),
            d = Math.floor(d)),
            s.previousTranslate = s.translate,
            s.translate = s.isHorizontal() ? o : d,
            i.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -d : i.virtualTranslate || (s.isHorizontal() ? o -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(),
            r.style.transform = `translate3d(${o}px, ${d}px, 0px)`);
            const c = s.maxTranslate() - s.minTranslate();
            l = 0 === c ? 0 : (e - s.minTranslate()) / c,
            l !== n && s.updateProgress(e),
            s.emit("setTranslate", s.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        },
        translateTo: function(e, t, s, a, i) {
            void 0 === e && (e = 0),
            void 0 === t && (t = this.params.speed),
            void 0 === s && (s = !0),
            void 0 === a && (a = !0);
            const r = this
              , {params: n, wrapperEl: l} = r;
            if (r.animating && n.preventInteractionOnTransition)
                return !1;
            const o = r.minTranslate()
              , d = r.maxTranslate();
            let c;
            if (c = a && e > o ? o : a && e < d ? d : e,
            r.updateProgress(c),
            n.cssMode) {
                const e = r.isHorizontal();
                if (0 === t)
                    l[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                    if (!r.support.smoothScroll)
                        return m({
                            swiper: r,
                            targetPosition: -c,
                            side: e ? "left" : "top"
                        }),
                        !0;
                    l.scrollTo({
                        [e ? "left" : "top"]: -c,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return 0 === t ? (r.setTransition(0),
            r.setTranslate(c),
            s && (r.emit("beforeTransitionStart", t, i),
            r.emit("transitionEnd"))) : (r.setTransition(t),
            r.setTranslate(c),
            s && (r.emit("beforeTransitionStart", t, i),
            r.emit("transitionStart")),
            r.animating || (r.animating = !0,
            r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd),
                r.onTranslateToWrapperTransitionEnd = null,
                delete r.onTranslateToWrapperTransitionEnd,
                r.animating = !1,
                s && r.emit("transitionEnd"))
            }
            ),
            r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))),
            !0
        }
    };
    function X(e) {
        let {swiper: t, runCallbacks: s, direction: a, step: i} = e;
        const {activeIndex: r, previousIndex: n} = t;
        let l = a;
        if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"),
        t.emit(`transition${i}`),
        s && r !== n) {
            if ("reset" === l)
                return void t.emit(`slideResetTransition${i}`);
            t.emit(`slideChangeTransition${i}`),
            "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
        }
    }
    var B = {
        slideTo: function(e, t, s, a, i) {
            void 0 === e && (e = 0),
            void 0 === s && (s = !0),
            "string" == typeof e && (e = parseInt(e, 10));
            const r = this;
            let n = e;
            n < 0 && (n = 0);
            const {params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: h, enabled: f} = r;
            if (!f && !a && !i || r.destroyed || r.animating && l.preventInteractionOnTransition)
                return !1;
            void 0 === t && (t = r.params.speed);
            const g = Math.min(r.params.slidesPerGroupSkip, n);
            let v = g + Math.floor((n - g) / r.params.slidesPerGroup);
            v >= o.length && (v = o.length - 1);
            const w = -o[v];
            if (l.normalizeSlideIndex)
                for (let e = 0; e < d.length; e += 1) {
                    const t = -Math.floor(100 * w)
                      , s = Math.floor(100 * d[e])
                      , a = Math.floor(100 * d[e + 1]);
                    void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
                }
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && (u ? w > r.translate && w > r.minTranslate() : w < r.translate && w < r.minTranslate()))
                    return !1;
                if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n)
                    return !1
            }
            let b;
            if (n !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
            r.updateProgress(w),
            b = n > p ? "next" : n < p ? "prev" : "reset",
            u && -w === r.translate || !u && w === r.translate)
                return r.updateActiveIndex(n),
                l.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
                "slide" !== l.effect && r.setTranslate(w),
                "reset" !== b && (r.transitionStart(s, b),
                r.transitionEnd(s, b)),
                !1;
            if (l.cssMode) {
                const e = r.isHorizontal()
                  , s = u ? w : -w;
                if (0 === t) {
                    const t = r.virtual && r.params.virtual.enabled;
                    t && (r.wrapperEl.style.scrollSnapType = "none",
                    r._immediateVirtual = !0),
                    t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0,
                    requestAnimationFrame(( () => {
                        h[e ? "scrollLeft" : "scrollTop"] = s
                    }
                    ))) : h[e ? "scrollLeft" : "scrollTop"] = s,
                    t && requestAnimationFrame(( () => {
                        r.wrapperEl.style.scrollSnapType = "",
                        r._immediateVirtual = !1
                    }
                    ))
                } else {
                    if (!r.support.smoothScroll)
                        return m({
                            swiper: r,
                            targetPosition: s,
                            side: e ? "left" : "top"
                        }),
                        !0;
                    h.scrollTo({
                        [e ? "left" : "top"]: s,
                        behavior: "smooth"
                    })
                }
                return !0
            }
            return r.setTransition(t),
            r.setTranslate(w),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, a),
            r.transitionStart(s, b),
            0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0,
            r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                r.onSlideToWrapperTransitionEnd = null,
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(s, b))
            }
            ),
            r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)),
            !0
        },
        slideToLoop: function(e, t, s, a) {
            if (void 0 === e && (e = 0),
            void 0 === s && (s = !0),
            "string" == typeof e) {
                e = parseInt(e, 10)
            }
            const i = this;
            if (i.destroyed)
                return;
            void 0 === t && (t = i.params.speed);
            const r = i.grid && i.params.grid && i.params.grid.rows > 1;
            let n = e;
            if (i.params.loop)
                if (i.virtual && i.params.virtual.enabled)
                    n += i.virtual.slidesBefore;
                else {
                    let e;
                    if (r) {
                        const t = n * i.params.grid.rows;
                        e = i.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                    } else
                        e = i.getSlideIndexByData(n);
                    const t = r ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length
                      , {centeredSlides: s} = i.params;
                    let l = i.params.slidesPerView;
                    "auto" === l ? l = i.slidesPerViewDynamic() : (l = Math.ceil(parseFloat(i.params.slidesPerView, 10)),
                    s && l % 2 == 0 && (l += 1));
                    let o = t - e < l;
                    if (s && (o = o || e < Math.ceil(l / 2)),
                    a && s && "auto" !== i.params.slidesPerView && !r && (o = !1),
                    o) {
                        const a = s ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                        i.loopFix({
                            direction: a,
                            slideTo: !0,
                            activeSlideIndex: "next" === a ? e + 1 : e - t + 1,
                            slideRealIndex: "next" === a ? i.realIndex : void 0
                        })
                    }
                    if (r) {
                        const e = n * i.params.grid.rows;
                        n = i.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                    } else
                        n = i.getSlideIndexByData(n)
                }
            return requestAnimationFrame(( () => {
                i.slideTo(n, t, s, a)
            }
            )),
            i
        },
        slideNext: function(e, t, s) {
            void 0 === t && (t = !0);
            const a = this
              , {enabled: i, params: r, animating: n} = a;
            if (!i || a.destroyed)
                return a;
            void 0 === e && (e = a.params.speed);
            let l = r.slidesPerGroup;
            "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
            const o = a.activeIndex < r.slidesPerGroupSkip ? 1 : l
              , d = a.virtual && r.virtual.enabled;
            if (r.loop) {
                if (n && !d && r.loopPreventsSliding)
                    return !1;
                if (a.loopFix({
                    direction: "next"
                }),
                a._clientLeft = a.wrapperEl.clientLeft,
                a.activeIndex === a.slides.length - 1 && r.cssMode)
                    return requestAnimationFrame(( () => {
                        a.slideTo(a.activeIndex + o, e, t, s)
                    }
                    )),
                    !0
            }
            return r.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s)
        },
        slidePrev: function(e, t, s) {
            void 0 === t && (t = !0);
            const a = this
              , {params: i, snapGrid: r, slidesGrid: n, rtlTranslate: l, enabled: o, animating: d} = a;
            if (!o || a.destroyed)
                return a;
            void 0 === e && (e = a.params.speed);
            const c = a.virtual && i.virtual.enabled;
            if (i.loop) {
                if (d && !c && i.loopPreventsSliding)
                    return !1;
                a.loopFix({
                    direction: "prev"
                }),
                a._clientLeft = a.wrapperEl.clientLeft
            }
            function p(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const u = p(l ? a.translate : -a.translate)
              , m = r.map((e => p(e)));
            let h = r[m.indexOf(u) - 1];
            if (void 0 === h && i.cssMode) {
                let e;
                r.forEach(( (t, s) => {
                    u >= t && (e = s)
                }
                )),
                void 0 !== e && (h = r[e > 0 ? e - 1 : e])
            }
            let f = 0;
            if (void 0 !== h && (f = n.indexOf(h),
            f < 0 && (f = a.activeIndex - 1),
            "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (f = f - a.slidesPerViewDynamic("previous", !0) + 1,
            f = Math.max(f, 0))),
            i.rewind && a.isBeginning) {
                const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                return a.slideTo(i, e, t, s)
            }
            return i.loop && 0 === a.activeIndex && i.cssMode ? (requestAnimationFrame(( () => {
                a.slideTo(f, e, t, s)
            }
            )),
            !0) : a.slideTo(f, e, t, s)
        },
        slideReset: function(e, t, s) {
            void 0 === t && (t = !0);
            const a = this;
            if (!a.destroyed)
                return void 0 === e && (e = a.params.speed),
                a.slideTo(a.activeIndex, e, t, s)
        },
        slideToClosest: function(e, t, s, a) {
            void 0 === t && (t = !0),
            void 0 === a && (a = .5);
            const i = this;
            if (i.destroyed)
                return;
            void 0 === e && (e = i.params.speed);
            let r = i.activeIndex;
            const n = Math.min(i.params.slidesPerGroupSkip, r)
              , l = n + Math.floor((r - n) / i.params.slidesPerGroup)
              , o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[l]) {
                const e = i.snapGrid[l];
                o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
            } else {
                const e = i.snapGrid[l - 1];
                o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
            }
            return r = Math.max(r, 0),
            r = Math.min(r, i.slidesGrid.length - 1),
            i.slideTo(r, e, t, s)
        },
        slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed)
                return;
            const {params: t, slidesEl: s} = e
              , a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, r = e.clickedIndex;
            const n = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
                if (e.animating)
                    return;
                i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
                t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(),
                r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${i}"]`)[0]),
                l(( () => {
                    e.slideTo(r)
                }
                ))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(),
                r = e.getSlideIndex(f(s, `${n}[data-swiper-slide-index="${i}"]`)[0]),
                l(( () => {
                    e.slideTo(r)
                }
                ))) : e.slideTo(r)
            } else
                e.slideTo(r)
        }
    };
    var Y = {
        loopCreate: function(e) {
            const t = this
              , {params: s, slidesEl: a} = t;
            if (!s.loop || t.virtual && t.params.virtual.enabled)
                return;
            const i = () => {
                f(a, `.${s.slideClass}, swiper-slide`).forEach(( (e, t) => {
                    e.setAttribute("data-swiper-slide-index", t)
                }
                ))
            }
              , r = t.grid && s.grid && s.grid.rows > 1
              , n = s.slidesPerGroup * (r ? s.grid.rows : 1)
              , l = t.slides.length % n != 0
              , o = r && t.slides.length % s.grid.rows != 0
              , d = e => {
                for (let a = 0; a < e; a += 1) {
                    const e = t.isElement ? v("swiper-slide", [s.slideBlankClass]) : v("div", [s.slideClass, s.slideBlankClass]);
                    t.slidesEl.append(e)
                }
            }
            ;
            if (l) {
                if (s.loopAddBlankSlides) {
                    d(n - t.slides.length % n),
                    t.recalcSlides(),
                    t.updateSlides()
                } else
                    g("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                i()
            } else if (o) {
                if (s.loopAddBlankSlides) {
                    d(s.grid.rows - t.slides.length % s.grid.rows),
                    t.recalcSlides(),
                    t.updateSlides()
                } else
                    g("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                i()
            } else
                i();
            t.loopFix({
                slideRealIndex: e,
                direction: s.centeredSlides ? void 0 : "next"
            })
        },
        loopFix: function(e) {
            let {slideRealIndex: t, slideTo: s=!0, direction: a, setTranslate: i, activeSlideIndex: r, byController: n, byMousewheel: l} = void 0 === e ? {} : e;
            const o = this;
            if (!o.params.loop)
                return;
            o.emit("beforeLoopFix");
            const {slides: d, allowSlidePrev: c, allowSlideNext: p, slidesEl: u, params: m} = o
              , {centeredSlides: h} = m;
            if (o.allowSlidePrev = !0,
            o.allowSlideNext = !0,
            o.virtual && m.virtual.enabled)
                return s && (m.centeredSlides || 0 !== o.snapIndex ? m.centeredSlides && o.snapIndex < m.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)),
                o.allowSlidePrev = c,
                o.allowSlideNext = p,
                void o.emit("loopFix");
            let f = m.slidesPerView;
            "auto" === f ? f = o.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(m.slidesPerView, 10)),
            h && f % 2 == 0 && (f += 1));
            const v = m.slidesPerGroupAuto ? f : m.slidesPerGroup;
            let w = v;
            w % v != 0 && (w += v - w % v),
            w += m.loopAdditionalSlides,
            o.loopedSlides = w;
            const b = o.grid && m.grid && m.grid.rows > 1;
            d.length < f + w ? g("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === m.grid.fill && g("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const y = []
              , E = [];
            let x = o.activeIndex;
            void 0 === r ? r = o.getSlideIndex(d.filter((e => e.classList.contains(m.slideActiveClass)))[0]) : x = r;
            const S = "next" === a || !a
              , T = "prev" === a || !a;
            let M = 0
              , C = 0;
            const P = b ? Math.ceil(d.length / m.grid.rows) : d.length
              , L = (b ? d[r].column : r) + (h && void 0 === i ? -f / 2 + .5 : 0);
            if (L < w) {
                M = Math.max(w - L, v);
                for (let e = 0; e < w - L; e += 1) {
                    const t = e - Math.floor(e / P) * P;
                    if (b) {
                        const e = P - t - 1;
                        for (let t = d.length - 1; t >= 0; t -= 1)
                            d[t].column === e && y.push(t)
                    } else
                        y.push(P - t - 1)
                }
            } else if (L + f > P - w) {
                C = Math.max(L - (P - 2 * w), v);
                for (let e = 0; e < C; e += 1) {
                    const t = e - Math.floor(e / P) * P;
                    b ? d.forEach(( (e, s) => {
                        e.column === t && E.push(s)
                    }
                    )) : E.push(t)
                }
            }
            if (o.__preventObserver__ = !0,
            requestAnimationFrame(( () => {
                o.__preventObserver__ = !1
            }
            )),
            T && y.forEach((e => {
                d[e].swiperLoopMoveDOM = !0,
                u.prepend(d[e]),
                d[e].swiperLoopMoveDOM = !1
            }
            )),
            S && E.forEach((e => {
                d[e].swiperLoopMoveDOM = !0,
                u.append(d[e]),
                d[e].swiperLoopMoveDOM = !1
            }
            )),
            o.recalcSlides(),
            "auto" === m.slidesPerView ? o.updateSlides() : b && (y.length > 0 && T || E.length > 0 && S) && o.slides.forEach(( (e, t) => {
                o.grid.updateSlide(t, e, o.slides)
            }
            )),
            m.watchSlidesProgress && o.updateSlidesOffset(),
            s)
                if (y.length > 0 && T) {
                    if (void 0 === t) {
                        const e = o.slidesGrid[x]
                          , t = o.slidesGrid[x + M] - e;
                        l ? o.setTranslate(o.translate - t) : (o.slideTo(x + Math.ceil(M), 0, !1, !0),
                        i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t,
                        o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
                    } else if (i) {
                        const e = b ? y.length / m.grid.rows : y.length;
                        o.slideTo(o.activeIndex + e, 0, !1, !0),
                        o.touchEventsData.currentTranslate = o.translate
                    }
                } else if (E.length > 0 && S)
                    if (void 0 === t) {
                        const e = o.slidesGrid[x]
                          , t = o.slidesGrid[x - C] - e;
                        l ? o.setTranslate(o.translate - t) : (o.slideTo(x - C, 0, !1, !0),
                        i && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t,
                        o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
                    } else {
                        const e = b ? E.length / m.grid.rows : E.length;
                        o.slideTo(o.activeIndex - e, 0, !1, !0)
                    }
            if (o.allowSlidePrev = c,
            o.allowSlideNext = p,
            o.controller && o.controller.control && !n) {
                const e = {
                    slideRealIndex: t,
                    direction: a,
                    setTranslate: i,
                    activeSlideIndex: r,
                    byController: !0
                };
                Array.isArray(o.controller.control) ? o.controller.control.forEach((t => {
                    !t.destroyed && t.params.loop && t.loopFix({
                        ...e,
                        slideTo: t.params.slidesPerView === m.slidesPerView && s
                    })
                }
                )) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
                    ...e,
                    slideTo: o.controller.control.params.slidesPerView === m.slidesPerView && s
                })
            }
            o.emit("loopFix")
        },
        loopDestroy: function() {
            const e = this
              , {params: t, slidesEl: s} = e;
            if (!t.loop || e.virtual && e.params.virtual.enabled)
                return;
            e.recalcSlides();
            const a = [];
            e.slides.forEach((e => {
                const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                a[t] = e
            }
            )),
            e.slides.forEach((e => {
                e.removeAttribute("data-swiper-slide-index")
            }
            )),
            a.forEach((e => {
                s.append(e)
            }
            )),
            e.recalcSlides(),
            e.slideTo(e.realIndex, 0)
        }
    };
    function R(e, t, s) {
        const a = r()
          , {params: i} = e
          , n = i.edgeSwipeDetection
          , l = i.edgeSwipeThreshold;
        return !n || !(s <= l || s >= a.innerWidth - l) || "prevent" === n && (t.preventDefault(),
        !0)
    }
    function F(e) {
        const t = this
          , s = a();
        let i = e;
        i.originalEvent && (i = i.originalEvent);
        const n = t.touchEventsData;
        if ("pointerdown" === i.type) {
            if (null !== n.pointerId && n.pointerId !== i.pointerId)
                return;
            n.pointerId = i.pointerId
        } else
            "touchstart" === i.type && 1 === i.targetTouches.length && (n.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type)
            return void R(t, i, i.targetTouches[0].pageX);
        const {params: l, touches: d, enabled: c} = t;
        if (!c)
            return;
        if (!l.simulateTouch && "mouse" === i.pointerType)
            return;
        if (t.animating && l.preventInteractionOnTransition)
            return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let p = i.target;
        if ("wrapper" === l.touchEventsTarget && !t.wrapperEl.contains(p))
            return;
        if ("which"in i && 3 === i.which)
            return;
        if ("button"in i && i.button > 0)
            return;
        if (n.isTouched && n.isMoved)
            return;
        const u = !!l.noSwipingClass && "" !== l.noSwipingClass
          , m = i.composedPath ? i.composedPath() : i.path;
        u && i.target && i.target.shadowRoot && m && (p = m[0]);
        const h = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`
          , f = !(!i.target || !i.target.shadowRoot);
        if (l.noSwiping && (f ? function(e, t) {
            return void 0 === t && (t = this),
            function t(s) {
                if (!s || s === a() || s === r())
                    return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null
            }(t)
        }(h, p) : p.closest(h)))
            return void (t.allowClick = !0);
        if (l.swipeHandler && !p.closest(l.swipeHandler))
            return;
        d.currentX = i.pageX,
        d.currentY = i.pageY;
        const g = d.currentX
          , v = d.currentY;
        if (!R(t, i, g))
            return;
        Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }),
        d.startX = g,
        d.startY = v,
        n.touchStartTime = o(),
        t.allowClick = !0,
        t.updateSize(),
        t.swipeDirection = void 0,
        l.threshold > 0 && (n.allowThresholdMove = !1);
        let w = !0;
        p.matches(n.focusableElements) && (w = !1,
        "SELECT" === p.nodeName && (n.isTouched = !1)),
        s.activeElement && s.activeElement.matches(n.focusableElements) && s.activeElement !== p && s.activeElement.blur();
        const b = w && t.allowTouchMove && l.touchStartPreventDefault;
        !l.touchStartForcePreventDefault && !b || p.isContentEditable || i.preventDefault(),
        l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(),
        t.emit("touchStart", i)
    }
    function q(e) {
        const t = a()
          , s = this
          , i = s.touchEventsData
          , {params: r, touches: n, rtlTranslate: l, enabled: d} = s;
        if (!d)
            return;
        if (!r.simulateTouch && "mouse" === e.pointerType)
            return;
        let c, p = e;
        if (p.originalEvent && (p = p.originalEvent),
        "pointermove" === p.type) {
            if (null !== i.touchId)
                return;
            if (p.pointerId !== i.pointerId)
                return
        }
        if ("touchmove" === p.type) {
            if (c = [...p.changedTouches].filter((e => e.identifier === i.touchId))[0],
            !c || c.identifier !== i.touchId)
                return
        } else
            c = p;
        if (!i.isTouched)
            return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", p));
        const u = c.pageX
          , m = c.pageY;
        if (p.preventedByNestedSwiper)
            return n.startX = u,
            void (n.startY = m);
        if (!s.allowTouchMove)
            return p.target.matches(i.focusableElements) || (s.allowClick = !1),
            void (i.isTouched && (Object.assign(n, {
                startX: u,
                startY: m,
                currentX: u,
                currentY: m
            }),
            i.touchStartTime = o()));
        if (r.touchReleaseOnEdges && !r.loop)
            if (s.isVertical()) {
                if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate())
                    return i.isTouched = !1,
                    void (i.isMoved = !1)
            } else if (u < n.startX && s.translate <= s.maxTranslate() || u > n.startX && s.translate >= s.minTranslate())
                return;
        if (t.activeElement && p.target === t.activeElement && p.target.matches(i.focusableElements))
            return i.isMoved = !0,
            void (s.allowClick = !1);
        i.allowTouchCallbacks && s.emit("touchMove", p),
        n.previousX = n.currentX,
        n.previousY = n.currentY,
        n.currentX = u,
        n.currentY = m;
        const h = n.currentX - n.startX
          , f = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(h ** 2 + f ** 2) < s.params.threshold)
            return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : h * h + f * f >= 25 && (e = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI,
            i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", p),
        void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)),
        i.isScrolling || "touchmove" === p.type && i.preventTouchMoveFromPointerMove)
            return void (i.isTouched = !1);
        if (!i.startMoving)
            return;
        s.allowClick = !1,
        !r.cssMode && p.cancelable && p.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && p.stopPropagation();
        let g = s.isHorizontal() ? h : f
          , v = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
        r.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1),
        v = Math.abs(v) * (l ? 1 : -1)),
        n.diff = g,
        g *= r.touchRatio,
        l && (g = -g,
        v = -v);
        const w = s.touchesDirection;
        s.swipeDirection = g > 0 ? "prev" : "next",
        s.touchesDirection = v > 0 ? "prev" : "next";
        const b = s.params.loop && !r.cssMode
          , y = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
        if (!i.isMoved) {
            if (b && y && s.loopFix({
                direction: s.swipeDirection
            }),
            i.startTranslate = s.getTranslate(),
            s.setTransition(0),
            s.animating) {
                const e = new window.CustomEvent("transitionend",{
                    bubbles: !0,
                    cancelable: !0,
                    detail: {
                        bySwiperTouchMove: !0
                    }
                });
                s.wrapperEl.dispatchEvent(e)
            }
            i.allowMomentumBounce = !1,
            !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0),
            s.emit("sliderFirstMove", p)
        }
        if ((new Date).getTime(),
        i.isMoved && i.allowThresholdMove && w !== s.touchesDirection && b && y && Math.abs(g) >= 1)
            return Object.assign(n, {
                startX: u,
                startY: m,
                currentX: u,
                currentY: m,
                startTranslate: i.currentTranslate
            }),
            i.loopSwapReset = !0,
            void (i.startTranslate = i.currentTranslate);
        s.emit("sliderMove", p),
        i.isMoved = !0,
        i.currentTranslate = g + i.startTranslate;
        let E = !0
          , x = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (x = 0),
        g > 0 ? (b && y && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] : s.minTranslate()) && s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }),
        i.currentTranslate > s.minTranslate() && (E = !1,
        r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + g) ** x))) : g < 0 && (b && y && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] : s.maxTranslate()) && s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: s.slides.length - ("auto" === r.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
        }),
        i.currentTranslate < s.maxTranslate() && (E = !1,
        r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - g) ** x))),
        E && (p.preventedByNestedSwiper = !0),
        !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate),
        r.threshold > 0) {
            if (!(Math.abs(g) > r.threshold || i.allowThresholdMove))
                return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove)
                return i.allowThresholdMove = !0,
                n.startX = n.currentX,
                n.startY = n.currentY,
                i.currentTranslate = i.startTranslate,
                void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(),
        s.updateSlidesClasses()),
        r.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate))
    }
    function V(e) {
        const t = this
          , s = t.touchEventsData;
        let a, i = e;
        i.originalEvent && (i = i.originalEvent);
        if ("touchend" === i.type || "touchcancel" === i.type) {
            if (a = [...i.changedTouches].filter((e => e.identifier === s.touchId))[0],
            !a || a.identifier !== s.touchId)
                return
        } else {
            if (null !== s.touchId)
                return;
            if (i.pointerId !== s.pointerId)
                return;
            a = i
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type)) {
            if (!(["pointercancel", "contextmenu"].includes(i.type) && (t.browser.isSafari || t.browser.isWebView)))
                return
        }
        s.pointerId = null,
        s.touchId = null;
        const {params: r, touches: n, rtlTranslate: d, slidesGrid: c, enabled: p} = t;
        if (!p)
            return;
        if (!r.simulateTouch && "mouse" === i.pointerType)
            return;
        if (s.allowTouchCallbacks && t.emit("touchEnd", i),
        s.allowTouchCallbacks = !1,
        !s.isTouched)
            return s.isMoved && r.grabCursor && t.setGrabCursor(!1),
            s.isMoved = !1,
            void (s.startMoving = !1);
        r.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const u = o()
          , m = u - s.touchStartTime;
        if (t.allowClick) {
            const e = i.path || i.composedPath && i.composedPath();
            t.updateClickedSlide(e && e[0] || i.target, e),
            t.emit("tap click", i),
            m < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", i)
        }
        if (s.lastClickTime = o(),
        l(( () => {
            t.destroyed || (t.allowClick = !0)
        }
        )),
        !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset)
            return s.isTouched = !1,
            s.isMoved = !1,
            void (s.startMoving = !1);
        let h;
        if (s.isTouched = !1,
        s.isMoved = !1,
        s.startMoving = !1,
        h = r.followFinger ? d ? t.translate : -t.translate : -s.currentTranslate,
        r.cssMode)
            return;
        if (r.freeMode && r.freeMode.enabled)
            return void t.freeMode.onTouchEnd({
                currentPos: h
            });
        const f = h >= -t.maxTranslate() && !t.params.loop;
        let g = 0
          , v = t.slidesSizesGrid[0];
        for (let e = 0; e < c.length; e += e < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
            const t = e < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            void 0 !== c[e + t] ? (f || h >= c[e] && h < c[e + t]) && (g = e,
            v = c[e + t] - c[e]) : (f || h >= c[e]) && (g = e,
            v = c[c.length - 1] - c[c.length - 2])
        }
        let w = null
          , b = null;
        r.rewind && (t.isBeginning ? b = r.virtual && r.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (w = 0));
        const y = (h - c[g]) / v
          , E = g < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        if (m > r.longSwipesMs) {
            if (!r.longSwipes)
                return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (y >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? w : g + E) : t.slideTo(g)),
            "prev" === t.swipeDirection && (y > 1 - r.longSwipesRatio ? t.slideTo(g + E) : null !== b && y < 0 && Math.abs(y) > r.longSwipesRatio ? t.slideTo(b) : t.slideTo(g))
        } else {
            if (!r.shortSwipes)
                return void t.slideTo(t.activeIndex);
            t.navigation && (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl) ? i.target === t.navigation.nextEl ? t.slideTo(g + E) : t.slideTo(g) : ("next" === t.swipeDirection && t.slideTo(null !== w ? w : g + E),
            "prev" === t.swipeDirection && t.slideTo(null !== b ? b : g))
        }
    }
    function _() {
        const e = this
          , {params: t, el: s} = e;
        if (s && 0 === s.offsetWidth)
            return;
        t.breakpoints && e.setBreakpoint();
        const {allowSlideNext: a, allowSlidePrev: i, snapGrid: r} = e
          , n = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0,
        e.allowSlidePrev = !0,
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
        const l = n && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || l ? e.params.loop && !n ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0),
        e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout),
        e.autoplay.resizeTimeout = setTimeout(( () => {
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }
        ), 500)),
        e.allowSlidePrev = i,
        e.allowSlideNext = a,
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }
    function W(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
        e.stopImmediatePropagation())))
    }
    function j() {
        const e = this
          , {wrapperEl: t, rtlTranslate: s, enabled: a} = e;
        if (!a)
            return;
        let i;
        e.previousTranslate = e.translate,
        e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
        0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r,
        i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1)
    }
    function U(e) {
        const t = this;
        O(t, e.target),
        t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
    }
    function K() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0,
        e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
    }
    const Z = (e, t) => {
        const s = a()
          , {params: i, el: r, wrapperEl: n, device: l} = e
          , o = !!i.nested
          , d = "on" === t ? "addEventListener" : "removeEventListener"
          , c = t;
        r && "string" != typeof r && (s[d]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: o
        }),
        r[d]("touchstart", e.onTouchStart, {
            passive: !1
        }),
        r[d]("pointerdown", e.onTouchStart, {
            passive: !1
        }),
        s[d]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: o
        }),
        s[d]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: o
        }),
        s[d]("touchend", e.onTouchEnd, {
            passive: !0
        }),
        s[d]("pointerup", e.onTouchEnd, {
            passive: !0
        }),
        s[d]("pointercancel", e.onTouchEnd, {
            passive: !0
        }),
        s[d]("touchcancel", e.onTouchEnd, {
            passive: !0
        }),
        s[d]("pointerout", e.onTouchEnd, {
            passive: !0
        }),
        s[d]("pointerleave", e.onTouchEnd, {
            passive: !0
        }),
        s[d]("contextmenu", e.onTouchEnd, {
            passive: !0
        }),
        (i.preventClicks || i.preventClicksPropagation) && r[d]("click", e.onClick, !0),
        i.cssMode && n[d]("scroll", e.onScroll),
        i.updateOnWindowResize ? e[c](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", _, !0) : e[c]("observerUpdate", _, !0),
        r[d]("load", e.onLoad, {
            capture: !0
        }))
    }
    ;
    const Q = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var J = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    function ee(e, t) {
        return function(s) {
            void 0 === s && (s = {});
            const a = Object.keys(s)[0]
              , i = s[a];
            "object" == typeof i && null !== i ? (!0 === e[a] && (e[a] = {
                enabled: !0
            }),
            "navigation" === a && e[a] && e[a].enabled && !e[a].prevEl && !e[a].nextEl && (e[a].auto = !0),
            ["pagination", "scrollbar"].indexOf(a) >= 0 && e[a] && e[a].enabled && !e[a].el && (e[a].auto = !0),
            a in e && "enabled"in i ? ("object" != typeof e[a] || "enabled"in e[a] || (e[a].enabled = !0),
            e[a] || (e[a] = {
                enabled: !1
            }),
            p(t, s)) : p(t, s)) : p(t, s)
        }
    }
    const te = {
        eventsEmitter: z,
        update: H,
        translate: N,
        transition: {
            setTransition: function(e, t) {
                const s = this;
                s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`,
                s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""),
                s.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
                void 0 === e && (e = !0);
                const s = this
                  , {params: a} = s;
                a.cssMode || (a.autoHeight && s.updateAutoHeight(),
                X({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }))
            },
            transitionEnd: function(e, t) {
                void 0 === e && (e = !0);
                const s = this
                  , {params: a} = s;
                s.animating = !1,
                a.cssMode || (s.setTransition(0),
                X({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }))
            }
        },
        slide: B,
        loop: Y,
        grabCursor: {
            setGrabCursor: function(e) {
                const t = this;
                if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
                    return;
                const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                t.isElement && (t.__preventObserver__ = !0),
                s.style.cursor = "move",
                s.style.cursor = e ? "grabbing" : "grab",
                t.isElement && requestAnimationFrame(( () => {
                    t.__preventObserver__ = !1
                }
                ))
            },
            unsetGrabCursor: function() {
                const e = this;
                e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0),
                e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "",
                e.isElement && requestAnimationFrame(( () => {
                    e.__preventObserver__ = !1
                }
                )))
            }
        },
        events: {
            attachEvents: function() {
                const e = this
                  , {params: t} = e;
                e.onTouchStart = F.bind(e),
                e.onTouchMove = q.bind(e),
                e.onTouchEnd = V.bind(e),
                e.onDocumentTouchStart = K.bind(e),
                t.cssMode && (e.onScroll = j.bind(e)),
                e.onClick = W.bind(e),
                e.onLoad = U.bind(e),
                Z(e, "on")
            },
            detachEvents: function() {
                Z(this, "off")
            }
        },
        breakpoints: {
            setBreakpoint: function() {
                const e = this
                  , {realIndex: t, initialized: s, params: a, el: i} = e
                  , r = a.breakpoints;
                if (!r || r && 0 === Object.keys(r).length)
                    return;
                const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
                if (!n || e.currentBreakpoint === n)
                    return;
                const l = (n in r ? r[n] : void 0) || e.originalParams
                  , o = Q(e, a)
                  , d = Q(e, l)
                  , c = e.params.grabCursor
                  , u = l.grabCursor
                  , m = a.enabled;
                o && !d ? (i.classList.remove(`${a.containerModifierClass}grid`, `${a.containerModifierClass}grid-column`),
                e.emitContainerClasses()) : !o && d && (i.classList.add(`${a.containerModifierClass}grid`),
                (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === a.grid.fill) && i.classList.add(`${a.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
                c && !u ? e.unsetGrabCursor() : !c && u && e.setGrabCursor(),
                ["navigation", "pagination", "scrollbar"].forEach((t => {
                    if (void 0 === l[t])
                        return;
                    const s = a[t] && a[t].enabled
                      , i = l[t] && l[t].enabled;
                    s && !i && e[t].disable(),
                    !s && i && e[t].enable()
                }
                ));
                const h = l.direction && l.direction !== a.direction
                  , f = a.loop && (l.slidesPerView !== a.slidesPerView || h)
                  , g = a.loop;
                h && s && e.changeDirection(),
                p(e.params, l);
                const v = e.params.enabled
                  , w = e.params.loop;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }),
                m && !v ? e.disable() : !m && v && e.enable(),
                e.currentBreakpoint = n,
                e.emit("_beforeBreakpoint", l),
                s && (f ? (e.loopDestroy(),
                e.loopCreate(t),
                e.updateSlides()) : !g && w ? (e.loopCreate(t),
                e.updateSlides()) : g && !w && e.loopDestroy()),
                e.emit("breakpoint", l)
            },
            getBreakpoint: function(e, t, s) {
                if (void 0 === t && (t = "window"),
                !e || "container" === t && !s)
                    return;
                let a = !1;
                const i = r()
                  , n = "window" === t ? i.innerHeight : s.clientHeight
                  , l = Object.keys(e).map((e => {
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {
                            value: n * t,
                            point: e
                        }
                    }
                    return {
                        value: e,
                        point: e
                    }
                }
                ));
                l.sort(( (e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                for (let e = 0; e < l.length; e += 1) {
                    const {point: r, value: n} = l[e];
                    "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
                }
                return a || "max"
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                const e = this
                  , {isLocked: t, params: s} = e
                  , {slidesOffsetBefore: a} = s;
                if (a) {
                    const t = e.slides.length - 1
                      , s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                    e.isLocked = e.size > s
                } else
                    e.isLocked = 1 === e.snapGrid.length;
                !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
        },
        classes: {
            addClasses: function() {
                const e = this
                  , {classNames: t, params: s, rtl: a, el: i, device: r} = e
                  , n = function(e, t) {
                    const s = [];
                    return e.forEach((e => {
                        "object" == typeof e ? Object.keys(e).forEach((a => {
                            e[a] && s.push(t + a)
                        }
                        )) : "string" == typeof e && s.push(t + e)
                    }
                    )),
                    s
                }(["initialized", s.direction, {
                    "free-mode": e.params.freeMode && s.freeMode.enabled
                }, {
                    autoheight: s.autoHeight
                }, {
                    rtl: a
                }, {
                    grid: s.grid && s.grid.rows > 1
                }, {
                    "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                }, {
                    android: r.android
                }, {
                    ios: r.ios
                }, {
                    "css-mode": s.cssMode
                }, {
                    centered: s.cssMode && s.centeredSlides
                }, {
                    "watch-progress": s.watchSlidesProgress
                }], s.containerModifierClass);
                t.push(...n),
                i.classList.add(...t),
                e.emitContainerClasses()
            },
            removeClasses: function() {
                const {el: e, classNames: t} = this;
                e && "string" != typeof e && (e.classList.remove(...t),
                this.emitContainerClasses())
            }
        }
    }
      , se = {};
    class ae {
        constructor() {
            let e, t;
            for (var s = arguments.length, i = new Array(s), r = 0; r < s; r++)
                i[r] = arguments[r];
            1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e,t] = i,
            t || (t = {}),
            t = p({}, t),
            e && !t.el && (t.el = e);
            const n = a();
            if (t.el && "string" == typeof t.el && n.querySelectorAll(t.el).length > 1) {
                const e = [];
                return n.querySelectorAll(t.el).forEach((s => {
                    const a = p({}, t, {
                        el: s
                    });
                    e.push(new ae(a))
                }
                )),
                e
            }
            const l = this;
            l.__swiper__ = !0,
            l.support = L(),
            l.device = I({
                userAgent: t.userAgent
            }),
            l.browser = A(),
            l.eventsListeners = {},
            l.eventsAnyListeners = [],
            l.modules = [...l.__modules__],
            t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
            const o = {};
            l.modules.forEach((e => {
                e({
                    params: t,
                    swiper: l,
                    extendParams: ee(t, o),
                    on: l.on.bind(l),
                    once: l.once.bind(l),
                    off: l.off.bind(l),
                    emit: l.emit.bind(l)
                })
            }
            ));
            const d = p({}, J, o);
            return l.params = p({}, d, se, t),
            l.originalParams = p({}, l.params),
            l.passedParams = p({}, t),
            l.params && l.params.on && Object.keys(l.params.on).forEach((e => {
                l.on(e, l.params.on[e])
            }
            )),
            l.params && l.params.onAny && l.onAny(l.params.onAny),
            Object.assign(l, {
                enabled: l.params.enabled,
                el: e,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === l.params.direction,
                isVertical: () => "vertical" === l.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                },
                allowSlideNext: l.params.allowSlideNext,
                allowSlidePrev: l.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: l.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    pointerId: null,
                    touchId: null
                },
                allowClick: !0,
                allowTouchMove: l.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }),
            l.emit("_swiper"),
            l.params.init && l.init(),
            l
        }
        getDirectionLabel(e) {
            return this.isHorizontal() ? e : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom"
            }[e]
        }
        getSlideIndex(e) {
            const {slidesEl: t, params: s} = this
              , a = y(f(t, `.${s.slideClass}, swiper-slide`)[0]);
            return y(e) - a
        }
        getSlideIndexByData(e) {
            return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
        }
        recalcSlides() {
            const {slidesEl: e, params: t} = this;
            this.slides = f(e, `.${t.slideClass}, swiper-slide`)
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0,
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1,
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"))
        }
        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate()
              , i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t),
            s.updateActiveIndex(),
            s.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el)
                return;
            const t = [];
            e.slides.forEach((s => {
                const a = e.getSlideClasses(s);
                t.push({
                    slideEl: s,
                    classNames: a
                }),
                e.emit("_slideClass", s, a)
            }
            )),
            e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"),
            void 0 === t && (t = !1);
            const {params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l} = this;
            let o = 1;
            if ("number" == typeof s.slidesPerView)
                return s.slidesPerView;
            if (s.centeredSlides) {
                let e, t = a[l] ? Math.ceil(a[l].swiperSlideSize) : 0;
                for (let s = l + 1; s < a.length; s += 1)
                    a[s] && !e && (t += Math.ceil(a[s].swiperSlideSize),
                    o += 1,
                    t > n && (e = !0));
                for (let s = l - 1; s >= 0; s -= 1)
                    a[s] && !e && (t += a[s].swiperSlideSize,
                    o += 1,
                    t > n && (e = !0))
            } else if ("current" === e)
                for (let e = l + 1; e < a.length; e += 1) {
                    (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
                }
            else
                for (let e = l - 1; e >= 0; e -= 1) {
                    i[l] - i[e] < n && (o += 1)
                }
            return o
        }
        update() {
            const e = this;
            if (!e || e.destroyed)
                return;
            const {snapGrid: t, params: s} = e;
            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate
                  , s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s),
                e.updateActiveIndex(),
                e.updateSlidesClasses()
            }
            let i;
            if (s.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                t.complete && O(e, t)
            }
            )),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            s.freeMode && s.freeMode.enabled && !s.cssMode)
                a(),
                s.autoHeight && e.updateAutoHeight();
            else {
                if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                    const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                    i = e.slideTo(t.length - 1, 0, !1, !0)
                } else
                    i = e.slideTo(e.activeIndex, 0, !1, !0);
                i || a()
            }
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update")
        }
        changeDirection(e, t) {
            void 0 === t && (t = !0);
            const s = this
              , a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"),
            e === a || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove(`${s.params.containerModifierClass}${a}`),
            s.el.classList.add(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            s.params.direction = e,
            s.slides.forEach((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            }
            )),
            s.emit("changeDirection"),
            t && s.update()),
            s
        }
        changeLanguageDirection(e) {
            const t = this;
            t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e,
            t.rtlTranslate = "horizontal" === t.params.direction && t.rtl,
            t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            t.el.dir = "ltr"),
            t.update())
        }
        mount(e) {
            const t = this;
            if (t.mounted)
                return !0;
            let s = e || t.params.el;
            if ("string" == typeof s && (s = document.querySelector(s)),
            !s)
                return !1;
            s.swiper = t,
            s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
            const a = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
            let i = ( () => {
                if (s && s.shadowRoot && s.shadowRoot.querySelector) {
                    return s.shadowRoot.querySelector(a())
                }
                return f(s, a())[0]
            }
            )();
            return !i && t.params.createElements && (i = v("div", t.params.wrapperClass),
            s.append(i),
            f(s, `.${t.params.slideClass}`).forEach((e => {
                i.append(e)
            }
            ))),
            Object.assign(t, {
                el: s,
                wrapperEl: i,
                slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i,
                hostEl: t.isElement ? s.parentNode.host : s,
                mounted: !0,
                rtl: "rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction")),
                wrongRTL: "-webkit-box" === b(i, "display")
            }),
            !0
        }
        init(e) {
            const t = this;
            if (t.initialized)
                return t;
            if (!1 === t.mount(e))
                return t;
            t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
            const s = [...t.el.querySelectorAll('[loading="lazy"]')];
            return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            s.forEach((e => {
                e.complete ? O(t, e) : e.addEventListener("load", (e => {
                    O(t, e.target)
                }
                ))
            }
            )),
            G(t),
            t.initialized = !0,
            G(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
        }
        destroy(e, t) {
            void 0 === e && (e = !0),
            void 0 === t && (t = !0);
            const s = this
              , {params: a, el: i, wrapperEl: r, slides: n} = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"),
            s.initialized = !1,
            s.detachEvents(),
            a.loop && s.loopDestroy(),
            t && (s.removeClasses(),
            i && "string" != typeof i && i.removeAttribute("style"),
            r && r.removeAttribute("style"),
            n && n.length && n.forEach((e => {
                e.classList.remove(a.slideVisibleClass, a.slideFullyVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass),
                e.removeAttribute("style"),
                e.removeAttribute("data-swiper-slide-index")
            }
            ))),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e => {
                s.off(e)
            }
            )),
            !1 !== e && (s.el && "string" != typeof s.el && (s.el.swiper = null),
            function(e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }
                ))
            }(s)),
            s.destroyed = !0),
            null
        }
        static extendDefaults(e) {
            p(se, e)
        }
        static get extendedDefaults() {
            return se
        }
        static get defaults() {
            return J
        }
        static installModule(e) {
            ae.prototype.__modules__ || (ae.prototype.__modules__ = []);
            const t = ae.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => ae.installModule(e))),
            ae) : (ae.installModule(e),
            ae)
        }
    }
    function ie(e, t, s, a) {
        return e.params.createElements && Object.keys(a).forEach((i => {
            if (!s[i] && !0 === s.auto) {
                let r = f(e.el, `.${a[i]}`)[0];
                r || (r = v("div", a[i]),
                r.className = a[i],
                e.el.append(r)),
                s[i] = r,
                t[i] = r
            }
        }
        )),
        s
    }
    function re(e) {
        return void 0 === e && (e = ""),
        `.${e.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`
    }
    function ne(e) {
        const t = this
          , {params: s, slidesEl: a} = t;
        s.loop && t.loopDestroy();
        const i = e => {
            if ("string" == typeof e) {
                const t = document.createElement("div");
                t.innerHTML = e,
                a.append(t.children[0]),
                t.innerHTML = ""
            } else
                a.append(e)
        }
        ;
        if ("object" == typeof e && "length"in e)
            for (let t = 0; t < e.length; t += 1)
                e[t] && i(e[t]);
        else
            i(e);
        t.recalcSlides(),
        s.loop && t.loopCreate(),
        s.observer && !t.isElement || t.update()
    }
    function le(e) {
        const t = this
          , {params: s, activeIndex: a, slidesEl: i} = t;
        s.loop && t.loopDestroy();
        let r = a + 1;
        const n = e => {
            if ("string" == typeof e) {
                const t = document.createElement("div");
                t.innerHTML = e,
                i.prepend(t.children[0]),
                t.innerHTML = ""
            } else
                i.prepend(e)
        }
        ;
        if ("object" == typeof e && "length"in e) {
            for (let t = 0; t < e.length; t += 1)
                e[t] && n(e[t]);
            r = a + e.length
        } else
            n(e);
        t.recalcSlides(),
        s.loop && t.loopCreate(),
        s.observer && !t.isElement || t.update(),
        t.slideTo(r, 0, !1)
    }
    function oe(e, t) {
        const s = this
          , {params: a, activeIndex: i, slidesEl: r} = s;
        let n = i;
        a.loop && (n -= s.loopedSlides,
        s.loopDestroy(),
        s.recalcSlides());
        const l = s.slides.length;
        if (e <= 0)
            return void s.prependSlide(t);
        if (e >= l)
            return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
            const e = s.slides[t];
            e.remove(),
            d.unshift(e)
        }
        if ("object" == typeof t && "length"in t) {
            for (let e = 0; e < t.length; e += 1)
                t[e] && r.append(t[e]);
            o = n > e ? n + t.length : n
        } else
            r.append(t);
        for (let e = 0; e < d.length; e += 1)
            r.append(d[e]);
        s.recalcSlides(),
        a.loop && s.loopCreate(),
        a.observer && !s.isElement || s.update(),
        a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
    }
    function de(e) {
        const t = this
          , {params: s, activeIndex: a} = t;
        let i = a;
        s.loop && (i -= t.loopedSlides,
        t.loopDestroy());
        let r, n = i;
        if ("object" == typeof e && "length"in e) {
            for (let s = 0; s < e.length; s += 1)
                r = e[s],
                t.slides[r] && t.slides[r].remove(),
                r < n && (n -= 1);
            n = Math.max(n, 0)
        } else
            r = e,
            t.slides[r] && t.slides[r].remove(),
            r < n && (n -= 1),
            n = Math.max(n, 0);
        t.recalcSlides(),
        s.loop && t.loopCreate(),
        s.observer && !t.isElement || t.update(),
        s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
    }
    function ce() {
        const e = this
          , t = [];
        for (let s = 0; s < e.slides.length; s += 1)
            t.push(s);
        e.removeSlide(t)
    }
    function pe(e) {
        const {effect: t, swiper: s, on: a, setTranslate: i, setTransition: r, overwriteParams: n, perspective: l, recreateShadows: o, getEffectParams: d} = e;
        let c;
        a("beforeInit", ( () => {
            if (s.params.effect !== t)
                return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`),
            l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e),
            Object.assign(s.originalParams, e)
        }
        )),
        a("setTranslate", ( () => {
            s.params.effect === t && i()
        }
        )),
        a("setTransition", ( (e, a) => {
            s.params.effect === t && r(a)
        }
        )),
        a("transitionEnd", ( () => {
            if (s.params.effect === t && o) {
                if (!d || !d().slideShadows)
                    return;
                s.slides.forEach((e => {
                    e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((e => e.remove()))
                }
                )),
                o()
            }
        }
        )),
        a("virtualUpdate", ( () => {
            s.params.effect === t && (s.slides.length || (c = !0),
            requestAnimationFrame(( () => {
                c && s.slides && s.slides.length && (i(),
                c = !1)
            }
            )))
        }
        ))
    }
    function ue(e, t) {
        const s = h(t);
        return s !== t && (s.style.backfaceVisibility = "hidden",
        s.style["-webkit-backface-visibility"] = "hidden"),
        s
    }
    function me(e) {
        let {swiper: t, duration: s, transformElements: a, allSlides: i} = e;
        const {activeIndex: r} = t;
        if (t.params.virtualTranslate && 0 !== s) {
            let e, s = !1;
            e = i ? a : a.filter((e => {
                const s = e.classList.contains("swiper-slide-transform") ? (e => {
                    if (!e.parentElement)
                        return t.slides.filter((t => t.shadowRoot && t.shadowRoot === e.parentNode))[0];
                    return e.parentElement
                }
                )(e) : e;
                return t.getSlideIndex(s) === r
            }
            )),
            e.forEach((e => {
                x(e, ( () => {
                    if (s)
                        return;
                    if (!t || t.destroyed)
                        return;
                    s = !0,
                    t.animating = !1;
                    const e = new window.CustomEvent("transitionend",{
                        bubbles: !0,
                        cancelable: !0
                    });
                    t.wrapperEl.dispatchEvent(e)
                }
                ))
            }
            ))
        }
    }
    function he(e, t, s) {
        const a = `swiper-slide-shadow${s ? `-${s}` : ""}${e ? ` swiper-slide-shadow-${e}` : ""}`
          , i = h(t);
        let r = i.querySelector(`.${a.split(" ").join(".")}`);
        return r || (r = v("div", a.split(" ")),
        i.append(r)),
        r
    }
    Object.keys(te).forEach((e => {
        Object.keys(te[e]).forEach((t => {
            ae.prototype[t] = te[e][t]
        }
        ))
    }
    )),
    ae.use([function(e) {
        let {swiper: t, on: s, emit: a} = e;
        const i = r();
        let n = null
          , l = null;
        const o = () => {
            t && !t.destroyed && t.initialized && (a("beforeResize"),
            a("resize"))
        }
          , d = () => {
            t && !t.destroyed && t.initialized && a("orientationchange")
        }
        ;
        s("init", ( () => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
                l = i.requestAnimationFrame(( () => {
                    const {width: s, height: a} = t;
                    let i = s
                      , r = a;
                    e.forEach((e => {
                        let {contentBoxSize: s, contentRect: a, target: n} = e;
                        n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize,
                        r = a ? a.height : (s[0] || s).blockSize)
                    }
                    )),
                    i === s && r === a || o()
                }
                ))
            }
            )),
            n.observe(t.el)) : (i.addEventListener("resize", o),
            i.addEventListener("orientationchange", d))
        }
        )),
        s("destroy", ( () => {
            l && i.cancelAnimationFrame(l),
            n && n.unobserve && t.el && (n.unobserve(t.el),
            n = null),
            i.removeEventListener("resize", o),
            i.removeEventListener("orientationchange", d)
        }
        ))
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = []
          , l = r()
          , o = function(e, s) {
            void 0 === s && (s = {});
            const a = new (l.MutationObserver || l.WebkitMutationObserver)((e => {
                if (t.__preventObserver__)
                    return;
                if (1 === e.length)
                    return void i("observerUpdate", e[0]);
                const s = function() {
                    i("observerUpdate", e[0])
                };
                l.requestAnimationFrame ? l.requestAnimationFrame(s) : l.setTimeout(s, 0)
            }
            ));
            a.observe(e, {
                attributes: void 0 === s.attributes || s.attributes,
                childList: void 0 === s.childList || s.childList,
                characterData: void 0 === s.characterData || s.characterData
            }),
            n.push(a)
        };
        s({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }),
        a("init", ( () => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = E(t.hostEl);
                    for (let t = 0; t < e.length; t += 1)
                        o(e[t])
                }
                o(t.hostEl, {
                    childList: t.params.observeSlideChildren
                }),
                o(t.wrapperEl, {
                    attributes: !1
                })
            }
        }
        )),
        a("destroy", ( () => {
            n.forEach((e => {
                e.disconnect()
            }
            )),
            n.splice(0, n.length)
        }
        ))
    }
    ]);
    const fe = [function(e) {
        let t, {swiper: s, extendParams: i, on: r, emit: n} = e;
        i({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        });
        const l = a();
        s.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        };
        const o = l.createElement("div");
        function d(e, t) {
            const a = s.params.virtual;
            if (a.cache && s.virtual.cache[t])
                return s.virtual.cache[t];
            let i;
            return a.renderSlide ? (i = a.renderSlide.call(s, e, t),
            "string" == typeof i && (o.innerHTML = i,
            i = o.children[0])) : i = s.isElement ? v("swiper-slide") : v("div", s.params.slideClass),
            i.setAttribute("data-swiper-slide-index", t),
            a.renderSlide || (i.innerHTML = e),
            a.cache && (s.virtual.cache[t] = i),
            i
        }
        function c(e, t) {
            const {slidesPerView: a, slidesPerGroup: i, centeredSlides: r, loop: l, initialSlide: o} = s.params;
            if (t && !l && o > 0)
                return;
            const {addSlidesBefore: c, addSlidesAfter: p} = s.params.virtual
              , {from: u, to: m, slides: h, slidesGrid: g, offset: v} = s.virtual;
            s.params.cssMode || s.updateActiveIndex();
            const w = s.activeIndex || 0;
            let b, y, E;
            b = s.rtlTranslate ? "right" : s.isHorizontal() ? "left" : "top",
            r ? (y = Math.floor(a / 2) + i + p,
            E = Math.floor(a / 2) + i + c) : (y = a + (i - 1) + p,
            E = (l ? a : i) + c);
            let x = w - E
              , S = w + y;
            l || (x = Math.max(x, 0),
            S = Math.min(S, h.length - 1));
            let T = (s.slidesGrid[x] || 0) - (s.slidesGrid[0] || 0);
            function M() {
                s.updateSlides(),
                s.updateProgress(),
                s.updateSlidesClasses(),
                n("virtualUpdate")
            }
            if (l && w >= E ? (x -= E,
            r || (T += s.slidesGrid[0])) : l && w < E && (x = -E,
            r && (T += s.slidesGrid[0])),
            Object.assign(s.virtual, {
                from: x,
                to: S,
                offset: T,
                slidesGrid: s.slidesGrid,
                slidesBefore: E,
                slidesAfter: y
            }),
            u === x && m === S && !e)
                return s.slidesGrid !== g && T !== v && s.slides.forEach((e => {
                    e.style[b] = T - Math.abs(s.cssOverflowAdjustment()) + "px"
                }
                )),
                s.updateProgress(),
                void n("virtualUpdate");
            if (s.params.virtual.renderExternal)
                return s.params.virtual.renderExternal.call(s, {
                    offset: T,
                    from: x,
                    to: S,
                    slides: function() {
                        const e = [];
                        for (let t = x; t <= S; t += 1)
                            e.push(h[t]);
                        return e
                    }()
                }),
                void (s.params.virtual.renderExternalUpdate ? M() : n("virtualUpdate"));
            const C = []
              , P = []
              , L = e => {
                let t = e;
                return e < 0 ? t = h.length + e : t >= h.length && (t -= h.length),
                t
            }
            ;
            if (e)
                s.slides.filter((e => e.matches(`.${s.params.slideClass}, swiper-slide`))).forEach((e => {
                    e.remove()
                }
                ));
            else
                for (let e = u; e <= m; e += 1)
                    if (e < x || e > S) {
                        const t = L(e);
                        s.slides.filter((e => e.matches(`.${s.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`))).forEach((e => {
                            e.remove()
                        }
                        ))
                    }
            const I = l ? -h.length : 0
              , A = l ? 2 * h.length : h.length;
            for (let t = I; t < A; t += 1)
                if (t >= x && t <= S) {
                    const s = L(t);
                    void 0 === m || e ? P.push(s) : (t > m && P.push(s),
                    t < u && C.push(s))
                }
            if (P.forEach((e => {
                s.slidesEl.append(d(h[e], e))
            }
            )),
            l)
                for (let e = C.length - 1; e >= 0; e -= 1) {
                    const t = C[e];
                    s.slidesEl.prepend(d(h[t], t))
                }
            else
                C.sort(( (e, t) => t - e)),
                C.forEach((e => {
                    s.slidesEl.prepend(d(h[e], e))
                }
                ));
            f(s.slidesEl, ".swiper-slide, swiper-slide").forEach((e => {
                e.style[b] = T - Math.abs(s.cssOverflowAdjustment()) + "px"
            }
            )),
            M()
        }
        r("beforeInit", ( () => {
            if (!s.params.virtual.enabled)
                return;
            let e;
            if (void 0 === s.passedParams.virtual.slides) {
                const t = [...s.slidesEl.children].filter((e => e.matches(`.${s.params.slideClass}, swiper-slide`)));
                t && t.length && (s.virtual.slides = [...t],
                e = !0,
                t.forEach(( (e, t) => {
                    e.setAttribute("data-swiper-slide-index", t),
                    s.virtual.cache[t] = e,
                    e.remove()
                }
                )))
            }
            e || (s.virtual.slides = s.params.virtual.slides),
            s.classNames.push(`${s.params.containerModifierClass}virtual`),
            s.params.watchSlidesProgress = !0,
            s.originalParams.watchSlidesProgress = !0,
            c(!1, !0)
        }
        )),
        r("setTranslate", ( () => {
            s.params.virtual.enabled && (s.params.cssMode && !s._immediateVirtual ? (clearTimeout(t),
            t = setTimeout(( () => {
                c()
            }
            ), 100)) : c())
        }
        )),
        r("init update resize", ( () => {
            s.params.virtual.enabled && s.params.cssMode && u(s.wrapperEl, "--swiper-virtual-size", `${s.virtualSize}px`)
        }
        )),
        Object.assign(s.virtual, {
            appendSlide: function(e) {
                if ("object" == typeof e && "length"in e)
                    for (let t = 0; t < e.length; t += 1)
                        e[t] && s.virtual.slides.push(e[t]);
                else
                    s.virtual.slides.push(e);
                c(!0)
            },
            prependSlide: function(e) {
                const t = s.activeIndex;
                let a = t + 1
                  , i = 1;
                if (Array.isArray(e)) {
                    for (let t = 0; t < e.length; t += 1)
                        e[t] && s.virtual.slides.unshift(e[t]);
                    a = t + e.length,
                    i = e.length
                } else
                    s.virtual.slides.unshift(e);
                if (s.params.virtual.cache) {
                    const e = s.virtual.cache
                      , t = {};
                    Object.keys(e).forEach((s => {
                        const a = e[s]
                          , r = a.getAttribute("data-swiper-slide-index");
                        r && a.setAttribute("data-swiper-slide-index", parseInt(r, 10) + i),
                        t[parseInt(s, 10) + i] = a
                    }
                    )),
                    s.virtual.cache = t
                }
                c(!0),
                s.slideTo(a, 0)
            },
            removeSlide: function(e) {
                if (null == e)
                    return;
                let t = s.activeIndex;
                if (Array.isArray(e))
                    for (let a = e.length - 1; a >= 0; a -= 1)
                        s.params.virtual.cache && (delete s.virtual.cache[e[a]],
                        Object.keys(s.virtual.cache).forEach((t => {
                            t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t],
                            s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1),
                            delete s.virtual.cache[t])
                        }
                        ))),
                        s.virtual.slides.splice(e[a], 1),
                        e[a] < t && (t -= 1),
                        t = Math.max(t, 0);
                else
                    s.params.virtual.cache && (delete s.virtual.cache[e],
                    Object.keys(s.virtual.cache).forEach((t => {
                        t > e && (s.virtual.cache[t - 1] = s.virtual.cache[t],
                        s.virtual.cache[t - 1].setAttribute("data-swiper-slide-index", t - 1),
                        delete s.virtual.cache[t])
                    }
                    ))),
                    s.virtual.slides.splice(e, 1),
                    e < t && (t -= 1),
                    t = Math.max(t, 0);
                c(!0),
                s.slideTo(t, 0)
            },
            removeAllSlides: function() {
                s.virtual.slides = [],
                s.params.virtual.cache && (s.virtual.cache = {}),
                c(!0),
                s.slideTo(0, 0)
            },
            update: c
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: i, emit: n} = e;
        const l = a()
          , o = r();
        function d(e) {
            if (!t.enabled)
                return;
            const {rtlTranslate: s} = t;
            let a = e;
            a.originalEvent && (a = a.originalEvent);
            const i = a.keyCode || a.charCode
              , r = t.params.keyboard.pageUpDown
              , d = r && 33 === i
              , c = r && 34 === i
              , p = 37 === i
              , u = 39 === i
              , m = 38 === i
              , h = 40 === i;
            if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && h || c))
                return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && m || d))
                return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (d || c || p || u || m || h)) {
                    let e = !1;
                    if (E(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 && 0 === E(t.el, `.${t.params.slideActiveClass}`).length)
                        return;
                    const a = t.el
                      , i = a.clientWidth
                      , r = a.clientHeight
                      , n = o.innerWidth
                      , l = o.innerHeight
                      , d = w(a);
                    s && (d.left -= a.scrollLeft);
                    const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
                    for (let t = 0; t < c.length; t += 1) {
                        const s = c[t];
                        if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                            if (0 === s[0] && 0 === s[1])
                                continue;
                            e = !0
                        }
                    }
                    if (!e)
                        return
                }
                t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                ((c || u) && !s || (d || p) && s) && t.slideNext(),
                ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || m || h) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1),
                (c || h) && t.slideNext(),
                (d || m) && t.slidePrev()),
                n("keyPress", i)
            }
        }
        function c() {
            t.keyboard.enabled || (l.addEventListener("keydown", d),
            t.keyboard.enabled = !0)
        }
        function p() {
            t.keyboard.enabled && (l.removeEventListener("keydown", d),
            t.keyboard.enabled = !1)
        }
        t.keyboard = {
            enabled: !1
        },
        s({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }),
        i("init", ( () => {
            t.params.keyboard.enabled && c()
        }
        )),
        i("destroy", ( () => {
            t.keyboard.enabled && p()
        }
        )),
        Object.assign(t.keyboard, {
            enable: c,
            disable: p
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = r();
        let d;
        s({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null,
                noMousewheelClass: "swiper-no-mousewheel"
            }
        }),
        t.mousewheel = {
            enabled: !1
        };
        let c, p = o();
        const u = [];
        function m() {
            t.enabled && (t.mouseEntered = !0)
        }
        function h() {
            t.enabled && (t.mouseEntered = !1)
        }
        function f(e) {
            return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && (!(t.params.mousewheel.thresholdTime && o() - p < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && o() - p < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(),
            i("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(),
            i("scroll", e.raw)),
            p = (new n.Date).getTime(),
            !1)))
        }
        function g(e) {
            let s = e
              , a = !0;
            if (!t.enabled)
                return;
            if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`))
                return;
            const r = t.params.mousewheel;
            t.params.cssMode && s.preventDefault();
            let n = t.el;
            "container" !== t.params.mousewheel.eventsTarget && (n = document.querySelector(t.params.mousewheel.eventsTarget));
            const p = n && n.contains(s.target);
            if (!t.mouseEntered && !p && !r.releaseOnEdges)
                return !0;
            s.originalEvent && (s = s.originalEvent);
            let m = 0;
            const h = t.rtlTranslate ? -1 : 1
              , g = function(e) {
                let t = 0
                  , s = 0
                  , a = 0
                  , i = 0;
                return "detail"in e && (s = e.detail),
                "wheelDelta"in e && (s = -e.wheelDelta / 120),
                "wheelDeltaY"in e && (s = -e.wheelDeltaY / 120),
                "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
                "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = s,
                s = 0),
                a = 10 * t,
                i = 10 * s,
                "deltaY"in e && (i = e.deltaY),
                "deltaX"in e && (a = e.deltaX),
                e.shiftKey && !a && (a = i,
                i = 0),
                (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40,
                i *= 40) : (a *= 800,
                i *= 800)),
                a && !t && (t = a < 1 ? -1 : 1),
                i && !s && (s = i < 1 ? -1 : 1),
                {
                    spinX: t,
                    spinY: s,
                    pixelX: a,
                    pixelY: i
                }
            }(s);
            if (r.forceToAxis)
                if (t.isHorizontal()) {
                    if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY)))
                        return !0;
                    m = -g.pixelX * h
                } else {
                    if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX)))
                        return !0;
                    m = -g.pixelY
                }
            else
                m = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * h : -g.pixelY;
            if (0 === m)
                return !0;
            r.invert && (m = -m);
            let v = t.getTranslate() + m * r.sensitivity;
            if (v >= t.minTranslate() && (v = t.minTranslate()),
            v <= t.maxTranslate() && (v = t.maxTranslate()),
            a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate()),
            a && t.params.nested && s.stopPropagation(),
            t.params.freeMode && t.params.freeMode.enabled) {
                const e = {
                    time: o(),
                    delta: Math.abs(m),
                    direction: Math.sign(m)
                }
                  , a = c && e.time < c.time + 500 && e.delta <= c.delta && e.direction === c.direction;
                if (!a) {
                    c = void 0;
                    let n = t.getTranslate() + m * r.sensitivity;
                    const o = t.isBeginning
                      , p = t.isEnd;
                    if (n >= t.minTranslate() && (n = t.minTranslate()),
                    n <= t.maxTranslate() && (n = t.maxTranslate()),
                    t.setTransition(0),
                    t.setTranslate(n),
                    t.updateProgress(),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses(),
                    (!o && t.isBeginning || !p && t.isEnd) && t.updateSlidesClasses(),
                    t.params.loop && t.loopFix({
                        direction: e.direction < 0 ? "next" : "prev",
                        byMousewheel: !0
                    }),
                    t.params.freeMode.sticky) {
                        clearTimeout(d),
                        d = void 0,
                        u.length >= 15 && u.shift();
                        const s = u.length ? u[u.length - 1] : void 0
                          , a = u[0];
                        if (u.push(e),
                        s && (e.delta > s.delta || e.direction !== s.direction))
                            u.splice(0);
                        else if (u.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                            const s = m > 0 ? .8 : .2;
                            c = e,
                            u.splice(0),
                            d = l(( () => {
                                t.slideToClosest(t.params.speed, !0, void 0, s)
                            }
                            ), 0)
                        }
                        d || (d = l(( () => {
                            c = e,
                            u.splice(0),
                            t.slideToClosest(t.params.speed, !0, void 0, .5)
                        }
                        ), 500))
                    }
                    if (a || i("scroll", s),
                    t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(),
                    r.releaseOnEdges && (n === t.minTranslate() || n === t.maxTranslate()))
                        return !0
                }
            } else {
                const s = {
                    time: o(),
                    delta: Math.abs(m),
                    direction: Math.sign(m),
                    raw: e
                };
                u.length >= 2 && u.shift();
                const a = u.length ? u[u.length - 1] : void 0;
                if (u.push(s),
                a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && f(s) : f(s),
                function(e) {
                    const s = t.params.mousewheel;
                    if (e.direction < 0) {
                        if (t.isEnd && !t.params.loop && s.releaseOnEdges)
                            return !0
                    } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges)
                        return !0;
                    return !1
                }(s))
                    return !0
            }
            return s.preventDefault ? s.preventDefault() : s.returnValue = !1,
            !1
        }
        function v(e) {
            let s = t.el;
            "container" !== t.params.mousewheel.eventsTarget && (s = document.querySelector(t.params.mousewheel.eventsTarget)),
            s[e]("mouseenter", m),
            s[e]("mouseleave", h),
            s[e]("wheel", g)
        }
        function w() {
            return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", g),
            !0) : !t.mousewheel.enabled && (v("addEventListener"),
            t.mousewheel.enabled = !0,
            !0)
        }
        function b() {
            return t.params.cssMode ? (t.wrapperEl.addEventListener(event, g),
            !0) : !!t.mousewheel.enabled && (v("removeEventListener"),
            t.mousewheel.enabled = !1,
            !0)
        }
        a("init", ( () => {
            !t.params.mousewheel.enabled && t.params.cssMode && b(),
            t.params.mousewheel.enabled && w()
        }
        )),
        a("destroy", ( () => {
            t.params.cssMode && w(),
            t.mousewheel.enabled && b()
        }
        )),
        Object.assign(t.mousewheel, {
            enable: w,
            disable: b
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        function r(e) {
            let s;
            return e && "string" == typeof e && t.isElement && (s = t.el.querySelector(e),
            s) ? s : (e && ("string" == typeof e && (s = [...document.querySelectorAll(e)]),
            t.params.uniqueNavElements && "string" == typeof e && s && s.length > 1 && 1 === t.el.querySelectorAll(e).length ? s = t.el.querySelector(e) : s && 1 === s.length && (s = s[0])),
            e && !s ? e : s)
        }
        function n(e, s) {
            const a = t.params.navigation;
            (e = T(e)).forEach((e => {
                e && (e.classList[s ? "add" : "remove"](...a.disabledClass.split(" ")),
                "BUTTON" === e.tagName && (e.disabled = s),
                t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](a.lockClass))
            }
            ))
        }
        function l() {
            const {nextEl: e, prevEl: s} = t.navigation;
            if (t.params.loop)
                return n(s, !1),
                void n(e, !1);
            n(s, t.isBeginning && !t.params.rewind),
            n(e, t.isEnd && !t.params.rewind)
        }
        function o(e) {
            e.preventDefault(),
            (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(),
            i("navigationPrev"))
        }
        function d(e) {
            e.preventDefault(),
            (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(),
            i("navigationNext"))
        }
        function c() {
            const e = t.params.navigation;
            if (t.params.navigation = ie(t, t.originalParams.navigation, t.params.navigation, {
                nextEl: "swiper-button-next",
                prevEl: "swiper-button-prev"
            }),
            !e.nextEl && !e.prevEl)
                return;
            let s = r(e.nextEl)
              , a = r(e.prevEl);
            Object.assign(t.navigation, {
                nextEl: s,
                prevEl: a
            }),
            s = T(s),
            a = T(a);
            const i = (s, a) => {
                s && s.addEventListener("click", "next" === a ? d : o),
                !t.enabled && s && s.classList.add(...e.lockClass.split(" "))
            }
            ;
            s.forEach((e => i(e, "next"))),
            a.forEach((e => i(e, "prev")))
        }
        function p() {
            let {nextEl: e, prevEl: s} = t.navigation;
            e = T(e),
            s = T(s);
            const a = (e, s) => {
                e.removeEventListener("click", "next" === s ? d : o),
                e.classList.remove(...t.params.navigation.disabledClass.split(" "))
            }
            ;
            e.forEach((e => a(e, "next"))),
            s.forEach((e => a(e, "prev")))
        }
        s({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }),
        t.navigation = {
            nextEl: null,
            prevEl: null
        },
        a("init", ( () => {
            !1 === t.params.navigation.enabled ? u() : (c(),
            l())
        }
        )),
        a("toEdge fromEdge lock unlock", ( () => {
            l()
        }
        )),
        a("destroy", ( () => {
            p()
        }
        )),
        a("enable disable", ( () => {
            let {nextEl: e, prevEl: s} = t.navigation;
            e = T(e),
            s = T(s),
            t.enabled ? l() : [...e, ...s].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
        }
        )),
        a("click", ( (e, s) => {
            let {nextEl: a, prevEl: r} = t.navigation;
            a = T(a),
            r = T(r);
            const n = s.target;
            let l = r.includes(n) || a.includes(n);
            if (t.isElement && !l) {
                const e = s.path || s.composedPath && s.composedPath();
                e && (l = e.find((e => a.includes(e) || r.includes(e))))
            }
            if (t.params.navigation.hideOnClick && !l) {
                if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n)))
                    return;
                let e;
                a.length ? e = a[0].classList.contains(t.params.navigation.hiddenClass) : r.length && (e = r[0].classList.contains(t.params.navigation.hiddenClass)),
                i(!0 === e ? "navigationShow" : "navigationHide"),
                [...a, ...r].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
            }
        }
        ));
        const u = () => {
            t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),
            p()
        }
        ;
        Object.assign(t.navigation, {
            enable: () => {
                t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),
                c(),
                l()
            }
            ,
            disable: u,
            update: l,
            init: c,
            destroy: p
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const r = "swiper-pagination";
        let n;
        s({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${r}-bullet`,
                bulletActiveClass: `${r}-bullet-active`,
                modifierClass: `${r}-`,
                currentClass: `${r}-current`,
                totalClass: `${r}-total`,
                hiddenClass: `${r}-hidden`,
                progressbarFillClass: `${r}-progressbar-fill`,
                progressbarOppositeClass: `${r}-progressbar-opposite`,
                clickableClass: `${r}-clickable`,
                lockClass: `${r}-lock`,
                horizontalClass: `${r}-horizontal`,
                verticalClass: `${r}-vertical`,
                paginationDisabledClass: `${r}-disabled`
            }
        }),
        t.pagination = {
            el: null,
            bullets: []
        };
        let l = 0;
        function o() {
            return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
        }
        function d(e, s) {
            const {bulletActiveClass: a} = t.params.pagination;
            e && (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${a}-${s}`),
            (e = e[("prev" === s ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${a}-${s}-${s}`))
        }
        function c(e) {
            const s = e.target.closest(re(t.params.pagination.bulletClass));
            if (!s)
                return;
            e.preventDefault();
            const a = y(s) * t.params.slidesPerGroup;
            if (t.params.loop) {
                if (t.realIndex === a)
                    return;
                t.slideToLoop(a)
            } else
                t.slideTo(a)
        }
        function p() {
            const e = t.rtl
              , s = t.params.pagination;
            if (o())
                return;
            let a, r, c = t.pagination.el;
            c = T(c);
            const p = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length
              , u = t.params.loop ? Math.ceil(p / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? (r = t.previousRealIndex || 0,
            a = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (a = t.snapIndex,
            r = t.previousSnapIndex) : (r = t.previousIndex || 0,
            a = t.activeIndex || 0),
            "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                const i = t.pagination.bullets;
                let o, p, u;
                if (s.dynamicBullets && (n = S(i[0], t.isHorizontal() ? "width" : "height", !0),
                c.forEach((e => {
                    e.style[t.isHorizontal() ? "width" : "height"] = n * (s.dynamicMainBullets + 4) + "px"
                }
                )),
                s.dynamicMainBullets > 1 && void 0 !== r && (l += a - (r || 0),
                l > s.dynamicMainBullets - 1 ? l = s.dynamicMainBullets - 1 : l < 0 && (l = 0)),
                o = Math.max(a - l, 0),
                p = o + (Math.min(i.length, s.dynamicMainBullets) - 1),
                u = (p + o) / 2),
                i.forEach((e => {
                    const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                    e.classList.remove(...t)
                }
                )),
                c.length > 1)
                    i.forEach((e => {
                        const i = y(e);
                        i === a ? e.classList.add(...s.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"),
                        s.dynamicBullets && (i >= o && i <= p && e.classList.add(...`${s.bulletActiveClass}-main`.split(" ")),
                        i === o && d(e, "prev"),
                        i === p && d(e, "next"))
                    }
                    ));
                else {
                    const e = i[a];
                    if (e && e.classList.add(...s.bulletActiveClass.split(" ")),
                    t.isElement && i.forEach(( (e, t) => {
                        e.setAttribute("part", t === a ? "bullet-active" : "bullet")
                    }
                    )),
                    s.dynamicBullets) {
                        const e = i[o]
                          , t = i[p];
                        for (let e = o; e <= p; e += 1)
                            i[e] && i[e].classList.add(...`${s.bulletActiveClass}-main`.split(" "));
                        d(e, "prev"),
                        d(t, "next")
                    }
                }
                if (s.dynamicBullets) {
                    const a = Math.min(i.length, s.dynamicMainBullets + 4)
                      , r = (n * a - n) / 2 - u * n
                      , l = e ? "right" : "left";
                    i.forEach((e => {
                        e.style[t.isHorizontal() ? l : "top"] = `${r}px`
                    }
                    ))
                }
            }
            c.forEach(( (e, r) => {
                if ("fraction" === s.type && (e.querySelectorAll(re(s.currentClass)).forEach((e => {
                    e.textContent = s.formatFractionCurrent(a + 1)
                }
                )),
                e.querySelectorAll(re(s.totalClass)).forEach((e => {
                    e.textContent = s.formatFractionTotal(u)
                }
                ))),
                "progressbar" === s.type) {
                    let i;
                    i = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                    const r = (a + 1) / u;
                    let n = 1
                      , l = 1;
                    "horizontal" === i ? n = r : l = r,
                    e.querySelectorAll(re(s.progressbarFillClass)).forEach((e => {
                        e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${l})`,
                        e.style.transitionDuration = `${t.params.speed}ms`
                    }
                    ))
                }
                "custom" === s.type && s.renderCustom ? (e.innerHTML = s.renderCustom(t, a + 1, u),
                0 === r && i("paginationRender", e)) : (0 === r && i("paginationRender", e),
                i("paginationUpdate", e)),
                t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](s.lockClass)
            }
            ))
        }
        function u() {
            const e = t.params.pagination;
            if (o())
                return;
            const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
            let a = t.pagination.el;
            a = T(a);
            let r = "";
            if ("bullets" === e.type) {
                let a = t.params.loop ? Math.ceil(s / t.params.slidesPerGroup) : t.snapGrid.length;
                t.params.freeMode && t.params.freeMode.enabled && a > s && (a = s);
                for (let s = 0; s < a; s += 1)
                    e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${e.bulletClass}"></${e.bulletElement}>`
            }
            "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
            "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`),
            t.pagination.bullets = [],
            a.forEach((s => {
                "custom" !== e.type && (s.innerHTML = r || ""),
                "bullets" === e.type && t.pagination.bullets.push(...s.querySelectorAll(re(e.bulletClass)))
            }
            )),
            "custom" !== e.type && i("paginationRender", a[0])
        }
        function m() {
            t.params.pagination = ie(t, t.originalParams.pagination, t.params.pagination, {
                el: "swiper-pagination"
            });
            const e = t.params.pagination;
            if (!e.el)
                return;
            let s;
            "string" == typeof e.el && t.isElement && (s = t.el.querySelector(e.el)),
            s || "string" != typeof e.el || (s = [...document.querySelectorAll(e.el)]),
            s || (s = e.el),
            s && 0 !== s.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(s) && s.length > 1 && (s = [...t.el.querySelectorAll(e.el)],
            s.length > 1 && (s = s.filter((e => E(e, ".swiper")[0] === t.el))[0])),
            Array.isArray(s) && 1 === s.length && (s = s[0]),
            Object.assign(t.pagination, {
                el: s
            }),
            s = T(s),
            s.forEach((s => {
                "bullets" === e.type && e.clickable && s.classList.add(...(e.clickableClass || "").split(" ")),
                s.classList.add(e.modifierClass + e.type),
                s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                "bullets" === e.type && e.dynamicBullets && (s.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                l = 0,
                e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                "progressbar" === e.type && e.progressbarOpposite && s.classList.add(e.progressbarOppositeClass),
                e.clickable && s.addEventListener("click", c),
                t.enabled || s.classList.add(e.lockClass)
            }
            )))
        }
        function h() {
            const e = t.params.pagination;
            if (o())
                return;
            let s = t.pagination.el;
            s && (s = T(s),
            s.forEach((s => {
                s.classList.remove(e.hiddenClass),
                s.classList.remove(e.modifierClass + e.type),
                s.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                e.clickable && (s.classList.remove(...(e.clickableClass || "").split(" ")),
                s.removeEventListener("click", c))
            }
            ))),
            t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
        }
        a("changeDirection", ( () => {
            if (!t.pagination || !t.pagination.el)
                return;
            const e = t.params.pagination;
            let {el: s} = t.pagination;
            s = T(s),
            s.forEach((s => {
                s.classList.remove(e.horizontalClass, e.verticalClass),
                s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
            }
            ))
        }
        )),
        a("init", ( () => {
            !1 === t.params.pagination.enabled ? f() : (m(),
            u(),
            p())
        }
        )),
        a("activeIndexChange", ( () => {
            void 0 === t.snapIndex && p()
        }
        )),
        a("snapIndexChange", ( () => {
            p()
        }
        )),
        a("snapGridLengthChange", ( () => {
            u(),
            p()
        }
        )),
        a("destroy", ( () => {
            h()
        }
        )),
        a("enable disable", ( () => {
            let {el: e} = t.pagination;
            e && (e = T(e),
            e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
        }
        )),
        a("lock unlock", ( () => {
            p()
        }
        )),
        a("click", ( (e, s) => {
            const a = s.target
              , r = T(t.pagination.el);
            if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !a.classList.contains(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && a === t.navigation.nextEl || t.navigation.prevEl && a === t.navigation.prevEl))
                    return;
                const e = r[0].classList.contains(t.params.pagination.hiddenClass);
                i(!0 === e ? "paginationShow" : "paginationHide"),
                r.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
            }
        }
        ));
        const f = () => {
            t.el.classList.add(t.params.pagination.paginationDisabledClass);
            let {el: e} = t.pagination;
            e && (e = T(e),
            e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))),
            h()
        }
        ;
        Object.assign(t.pagination, {
            enable: () => {
                t.el.classList.remove(t.params.pagination.paginationDisabledClass);
                let {el: e} = t.pagination;
                e && (e = T(e),
                e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))),
                m(),
                u(),
                p()
            }
            ,
            disable: f,
            render: u,
            update: p,
            init: m,
            destroy: h
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: i, emit: r} = e;
        const o = a();
        let d, c, p, u, m = !1, h = null, f = null;
        function g() {
            if (!t.params.scrollbar.el || !t.scrollbar.el)
                return;
            const {scrollbar: e, rtlTranslate: s} = t
              , {dragEl: a, el: i} = e
              , r = t.params.scrollbar
              , n = t.params.loop ? t.progressLoop : t.progress;
            let l = c
              , o = (p - c) * n;
            s ? (o = -o,
            o > 0 ? (l = c - o,
            o = 0) : -o + c > p && (l = p + o)) : o < 0 ? (l = c + o,
            o = 0) : o + c > p && (l = p - o),
            t.isHorizontal() ? (a.style.transform = `translate3d(${o}px, 0, 0)`,
            a.style.width = `${l}px`) : (a.style.transform = `translate3d(0px, ${o}px, 0)`,
            a.style.height = `${l}px`),
            r.hide && (clearTimeout(h),
            i.style.opacity = 1,
            h = setTimeout(( () => {
                i.style.opacity = 0,
                i.style.transitionDuration = "400ms"
            }
            ), 1e3))
        }
        function b() {
            if (!t.params.scrollbar.el || !t.scrollbar.el)
                return;
            const {scrollbar: e} = t
              , {dragEl: s, el: a} = e;
            s.style.width = "",
            s.style.height = "",
            p = t.isHorizontal() ? a.offsetWidth : a.offsetHeight,
            u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)),
            c = "auto" === t.params.scrollbar.dragSize ? p * u : parseInt(t.params.scrollbar.dragSize, 10),
            t.isHorizontal() ? s.style.width = `${c}px` : s.style.height = `${c}px`,
            a.style.display = u >= 1 ? "none" : "",
            t.params.scrollbar.hide && (a.style.opacity = 0),
            t.params.watchOverflow && t.enabled && e.el.classList[t.isLocked ? "add" : "remove"](t.params.scrollbar.lockClass)
        }
        function y(e) {
            return t.isHorizontal() ? e.clientX : e.clientY
        }
        function E(e) {
            const {scrollbar: s, rtlTranslate: a} = t
              , {el: i} = s;
            let r;
            r = (y(e) - w(i)[t.isHorizontal() ? "left" : "top"] - (null !== d ? d : c / 2)) / (p - c),
            r = Math.max(Math.min(r, 1), 0),
            a && (r = 1 - r);
            const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
            t.updateProgress(n),
            t.setTranslate(n),
            t.updateActiveIndex(),
            t.updateSlidesClasses()
        }
        function x(e) {
            const s = t.params.scrollbar
              , {scrollbar: a, wrapperEl: i} = t
              , {el: n, dragEl: l} = a;
            m = !0,
            d = e.target === l ? y(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null,
            e.preventDefault(),
            e.stopPropagation(),
            i.style.transitionDuration = "100ms",
            l.style.transitionDuration = "100ms",
            E(e),
            clearTimeout(f),
            n.style.transitionDuration = "0ms",
            s.hide && (n.style.opacity = 1),
            t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "none"),
            r("scrollbarDragStart", e)
        }
        function S(e) {
            const {scrollbar: s, wrapperEl: a} = t
              , {el: i, dragEl: n} = s;
            m && (e.preventDefault && e.cancelable ? e.preventDefault() : e.returnValue = !1,
            E(e),
            a.style.transitionDuration = "0ms",
            i.style.transitionDuration = "0ms",
            n.style.transitionDuration = "0ms",
            r("scrollbarDragMove", e))
        }
        function M(e) {
            const s = t.params.scrollbar
              , {scrollbar: a, wrapperEl: i} = t
              , {el: n} = a;
            m && (m = !1,
            t.params.cssMode && (t.wrapperEl.style["scroll-snap-type"] = "",
            i.style.transitionDuration = ""),
            s.hide && (clearTimeout(f),
            f = l(( () => {
                n.style.opacity = 0,
                n.style.transitionDuration = "400ms"
            }
            ), 1e3)),
            r("scrollbarDragEnd", e),
            s.snapOnRelease && t.slideToClosest())
        }
        function C(e) {
            const {scrollbar: s, params: a} = t
              , i = s.el;
            if (!i)
                return;
            const r = i
              , n = !!a.passiveListeners && {
                passive: !1,
                capture: !1
            }
              , l = !!a.passiveListeners && {
                passive: !0,
                capture: !1
            };
            if (!r)
                return;
            const d = "on" === e ? "addEventListener" : "removeEventListener";
            r[d]("pointerdown", x, n),
            o[d]("pointermove", S, n),
            o[d]("pointerup", M, l)
        }
        function P() {
            const {scrollbar: e, el: s} = t;
            t.params.scrollbar = ie(t, t.originalParams.scrollbar, t.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const a = t.params.scrollbar;
            if (!a.el)
                return;
            let i, r;
            if ("string" == typeof a.el && t.isElement && (i = t.el.querySelector(a.el)),
            i || "string" != typeof a.el)
                i || (i = a.el);
            else if (i = o.querySelectorAll(a.el),
            !i.length)
                return;
            t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.querySelectorAll(a.el).length && (i = s.querySelector(a.el)),
            i.length > 0 && (i = i[0]),
            i.classList.add(t.isHorizontal() ? a.horizontalClass : a.verticalClass),
            i && (r = i.querySelector(re(t.params.scrollbar.dragClass)),
            r || (r = v("div", t.params.scrollbar.dragClass),
            i.append(r))),
            Object.assign(e, {
                el: i,
                dragEl: r
            }),
            a.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"),
            i && i.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass))
        }
        function L() {
            const e = t.params.scrollbar
              , s = t.scrollbar.el;
            s && s.classList.remove(...n(t.isHorizontal() ? e.horizontalClass : e.verticalClass)),
            t.params.scrollbar.el && t.scrollbar.el && C("off")
        }
        s({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
                scrollbarDisabledClass: "swiper-scrollbar-disabled",
                horizontalClass: "swiper-scrollbar-horizontal",
                verticalClass: "swiper-scrollbar-vertical"
            }
        }),
        t.scrollbar = {
            el: null,
            dragEl: null
        },
        i("changeDirection", ( () => {
            if (!t.scrollbar || !t.scrollbar.el)
                return;
            const e = t.params.scrollbar;
            let {el: s} = t.scrollbar;
            s = T(s),
            s.forEach((s => {
                s.classList.remove(e.horizontalClass, e.verticalClass),
                s.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
            }
            ))
        }
        )),
        i("init", ( () => {
            !1 === t.params.scrollbar.enabled ? I() : (P(),
            b(),
            g())
        }
        )),
        i("update resize observerUpdate lock unlock changeDirection", ( () => {
            b()
        }
        )),
        i("setTranslate", ( () => {
            g()
        }
        )),
        i("setTransition", ( (e, s) => {
            !function(e) {
                t.params.scrollbar.el && t.scrollbar.el && (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`)
            }(s)
        }
        )),
        i("enable disable", ( () => {
            const {el: e} = t.scrollbar;
            e && e.classList[t.enabled ? "remove" : "add"](...n(t.params.scrollbar.lockClass))
        }
        )),
        i("destroy", ( () => {
            L()
        }
        ));
        const I = () => {
            t.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)),
            t.scrollbar.el && t.scrollbar.el.classList.add(...n(t.params.scrollbar.scrollbarDisabledClass)),
            L()
        }
        ;
        Object.assign(t.scrollbar, {
            enable: () => {
                t.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)),
                t.scrollbar.el && t.scrollbar.el.classList.remove(...n(t.params.scrollbar.scrollbarDisabledClass)),
                P(),
                b(),
                g()
            }
            ,
            disable: I,
            updateSize: b,
            setTranslate: g,
            init: P,
            destroy: L
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            parallax: {
                enabled: !1
            }
        });
        const i = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          , r = (e, s) => {
            const {rtl: a} = t
              , i = a ? -1 : 1
              , r = e.getAttribute("data-swiper-parallax") || "0";
            let n = e.getAttribute("data-swiper-parallax-x")
              , l = e.getAttribute("data-swiper-parallax-y");
            const o = e.getAttribute("data-swiper-parallax-scale")
              , d = e.getAttribute("data-swiper-parallax-opacity")
              , c = e.getAttribute("data-swiper-parallax-rotate");
            if (n || l ? (n = n || "0",
            l = l || "0") : t.isHorizontal() ? (n = r,
            l = "0") : (l = r,
            n = "0"),
            n = n.indexOf("%") >= 0 ? parseInt(n, 10) * s * i + "%" : n * s * i + "px",
            l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px",
            null != d) {
                const t = d - (d - 1) * (1 - Math.abs(s));
                e.style.opacity = t
            }
            let p = `translate3d(${n}, ${l}, 0px)`;
            if (null != o) {
                p += ` scale(${o - (o - 1) * (1 - Math.abs(s))})`
            }
            if (c && null != c) {
                p += ` rotate(${c * s * -1}deg)`
            }
            e.style.transform = p
        }
          , n = () => {
            const {el: e, slides: s, progress: a, snapGrid: n, isElement: l} = t
              , o = f(e, i);
            t.isElement && o.push(...f(t.hostEl, i)),
            o.forEach((e => {
                r(e, a)
            }
            )),
            s.forEach(( (e, s) => {
                let l = e.progress;
                t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (l += Math.ceil(s / 2) - a * (n.length - 1)),
                l = Math.min(Math.max(l, -1), 1),
                e.querySelectorAll(`${i}, [data-swiper-parallax-rotate]`).forEach((e => {
                    r(e, l)
                }
                ))
            }
            ))
        }
        ;
        a("beforeInit", ( () => {
            t.params.parallax.enabled && (t.params.watchSlidesProgress = !0,
            t.originalParams.watchSlidesProgress = !0)
        }
        )),
        a("init", ( () => {
            t.params.parallax.enabled && n()
        }
        )),
        a("setTranslate", ( () => {
            t.params.parallax.enabled && n()
        }
        )),
        a("setTransition", ( (e, s) => {
            t.params.parallax.enabled && function(e) {
                void 0 === e && (e = t.params.speed);
                const {el: s, hostEl: a} = t
                  , r = [...s.querySelectorAll(i)];
                t.isElement && r.push(...a.querySelectorAll(i)),
                r.forEach((t => {
                    let s = parseInt(t.getAttribute("data-swiper-parallax-duration"), 10) || e;
                    0 === e && (s = 0),
                    t.style.transitionDuration = `${s}ms`
                }
                ))
            }(s)
        }
        ))
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a, emit: i} = e;
        const n = r();
        s({
            zoom: {
                enabled: !1,
                limitToOriginalSize: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }),
        t.zoom = {
            enabled: !1
        };
        let l, o, c = 1, p = !1;
        const u = []
          , m = {
            originX: 0,
            originY: 0,
            slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            imageEl: void 0,
            imageWrapEl: void 0,
            maxRatio: 3
        }
          , h = {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
        }
          , g = {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
        };
        let v, b = 1;
        function y() {
            if (u.length < 2)
                return 1;
            const e = u[0].pageX
              , t = u[0].pageY
              , s = u[1].pageX
              , a = u[1].pageY;
            return Math.sqrt((s - e) ** 2 + (a - t) ** 2)
        }
        function x() {
            const e = t.params.zoom
              , s = m.imageWrapEl.getAttribute("data-swiper-zoom") || e.maxRatio;
            if (e.limitToOriginalSize && m.imageEl && m.imageEl.naturalWidth) {
                const e = m.imageEl.naturalWidth / m.imageEl.offsetWidth;
                return Math.min(e, s)
            }
            return s
        }
        function S(e) {
            const s = t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
            return !!e.target.matches(s) || t.slides.filter((t => t.contains(e.target))).length > 0
        }
        function T(e) {
            if ("mouse" === e.pointerType && u.splice(0, u.length),
            !S(e))
                return;
            const s = t.params.zoom;
            if (l = !1,
            o = !1,
            u.push(e),
            !(u.length < 2)) {
                if (l = !0,
                m.scaleStart = y(),
                !m.slideEl) {
                    m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`),
                    m.slideEl || (m.slideEl = t.slides[t.activeIndex]);
                    let a = m.slideEl.querySelector(`.${s.containerClass}`);
                    if (a && (a = a.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
                    m.imageEl = a,
                    m.imageWrapEl = a ? E(m.imageEl, `.${s.containerClass}`)[0] : void 0,
                    !m.imageWrapEl)
                        return void (m.imageEl = void 0);
                    m.maxRatio = x()
                }
                if (m.imageEl) {
                    const [e,t] = function() {
                        if (u.length < 2)
                            return {
                                x: null,
                                y: null
                            };
                        const e = m.imageEl.getBoundingClientRect();
                        return [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - e.x - n.scrollX) / c, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - e.y - n.scrollY) / c]
                    }();
                    m.originX = e,
                    m.originY = t,
                    m.imageEl.style.transitionDuration = "0ms"
                }
                p = !0
            }
        }
        function M(e) {
            if (!S(e))
                return;
            const s = t.params.zoom
              , a = t.zoom
              , i = u.findIndex((t => t.pointerId === e.pointerId));
            i >= 0 && (u[i] = e),
            u.length < 2 || (o = !0,
            m.scaleMove = y(),
            m.imageEl && (a.scale = m.scaleMove / m.scaleStart * c,
            a.scale > m.maxRatio && (a.scale = m.maxRatio - 1 + (a.scale - m.maxRatio + 1) ** .5),
            a.scale < s.minRatio && (a.scale = s.minRatio + 1 - (s.minRatio - a.scale + 1) ** .5),
            m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`))
        }
        function C(e) {
            if (!S(e))
                return;
            if ("mouse" === e.pointerType && "pointerout" === e.type)
                return;
            const s = t.params.zoom
              , a = t.zoom
              , i = u.findIndex((t => t.pointerId === e.pointerId));
            i >= 0 && u.splice(i, 1),
            l && o && (l = !1,
            o = !1,
            m.imageEl && (a.scale = Math.max(Math.min(a.scale, m.maxRatio), s.minRatio),
            m.imageEl.style.transitionDuration = `${t.params.speed}ms`,
            m.imageEl.style.transform = `translate3d(0,0,0) scale(${a.scale})`,
            c = a.scale,
            p = !1,
            a.scale > 1 && m.slideEl ? m.slideEl.classList.add(`${s.zoomedSlideClass}`) : a.scale <= 1 && m.slideEl && m.slideEl.classList.remove(`${s.zoomedSlideClass}`),
            1 === a.scale && (m.originX = 0,
            m.originY = 0,
            m.slideEl = void 0)))
        }
        function P() {
            t.touchEventsData.preventTouchMoveFromPointerMove = !1
        }
        function L(e) {
            if (!S(e) || !function(e) {
                const s = `.${t.params.zoom.containerClass}`;
                return !!e.target.matches(s) || [...t.hostEl.querySelectorAll(s)].filter((t => t.contains(e.target))).length > 0
            }(e))
                return;
            const s = t.zoom;
            if (!m.imageEl)
                return;
            if (!h.isTouched || !m.slideEl)
                return;
            h.isMoved || (h.width = m.imageEl.offsetWidth || m.imageEl.clientWidth,
            h.height = m.imageEl.offsetHeight || m.imageEl.clientHeight,
            h.startX = d(m.imageWrapEl, "x") || 0,
            h.startY = d(m.imageWrapEl, "y") || 0,
            m.slideWidth = m.slideEl.offsetWidth,
            m.slideHeight = m.slideEl.offsetHeight,
            m.imageWrapEl.style.transitionDuration = "0ms");
            const a = h.width * s.scale
              , i = h.height * s.scale;
            h.minX = Math.min(m.slideWidth / 2 - a / 2, 0),
            h.maxX = -h.minX,
            h.minY = Math.min(m.slideHeight / 2 - i / 2, 0),
            h.maxY = -h.minY,
            h.touchesCurrent.x = u.length > 0 ? u[0].pageX : e.pageX,
            h.touchesCurrent.y = u.length > 0 ? u[0].pageY : e.pageY;
            if (Math.max(Math.abs(h.touchesCurrent.x - h.touchesStart.x), Math.abs(h.touchesCurrent.y - h.touchesStart.y)) > 5 && (t.allowClick = !1),
            !h.isMoved && !p) {
                if (t.isHorizontal() && (Math.floor(h.minX) === Math.floor(h.startX) && h.touchesCurrent.x < h.touchesStart.x || Math.floor(h.maxX) === Math.floor(h.startX) && h.touchesCurrent.x > h.touchesStart.x))
                    return h.isTouched = !1,
                    void P();
                if (!t.isHorizontal() && (Math.floor(h.minY) === Math.floor(h.startY) && h.touchesCurrent.y < h.touchesStart.y || Math.floor(h.maxY) === Math.floor(h.startY) && h.touchesCurrent.y > h.touchesStart.y))
                    return h.isTouched = !1,
                    void P()
            }
            e.cancelable && e.preventDefault(),
            e.stopPropagation(),
            clearTimeout(v),
            t.touchEventsData.preventTouchMoveFromPointerMove = !0,
            v = setTimeout(( () => {
                P()
            }
            )),
            h.isMoved = !0;
            const r = (s.scale - c) / (m.maxRatio - t.params.zoom.minRatio)
              , {originX: n, originY: l} = m;
            h.currentX = h.touchesCurrent.x - h.touchesStart.x + h.startX + r * (h.width - 2 * n),
            h.currentY = h.touchesCurrent.y - h.touchesStart.y + h.startY + r * (h.height - 2 * l),
            h.currentX < h.minX && (h.currentX = h.minX + 1 - (h.minX - h.currentX + 1) ** .8),
            h.currentX > h.maxX && (h.currentX = h.maxX - 1 + (h.currentX - h.maxX + 1) ** .8),
            h.currentY < h.minY && (h.currentY = h.minY + 1 - (h.minY - h.currentY + 1) ** .8),
            h.currentY > h.maxY && (h.currentY = h.maxY - 1 + (h.currentY - h.maxY + 1) ** .8),
            g.prevPositionX || (g.prevPositionX = h.touchesCurrent.x),
            g.prevPositionY || (g.prevPositionY = h.touchesCurrent.y),
            g.prevTime || (g.prevTime = Date.now()),
            g.x = (h.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2,
            g.y = (h.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2,
            Math.abs(h.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
            Math.abs(h.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
            g.prevPositionX = h.touchesCurrent.x,
            g.prevPositionY = h.touchesCurrent.y,
            g.prevTime = Date.now(),
            m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`
        }
        function I() {
            const e = t.zoom;
            m.slideEl && t.activeIndex !== t.slides.indexOf(m.slideEl) && (m.imageEl && (m.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
            m.imageWrapEl && (m.imageWrapEl.style.transform = "translate3d(0,0,0)"),
            m.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),
            e.scale = 1,
            c = 1,
            m.slideEl = void 0,
            m.imageEl = void 0,
            m.imageWrapEl = void 0,
            m.originX = 0,
            m.originY = 0)
        }
        function A(e) {
            const s = t.zoom
              , a = t.params.zoom;
            if (!m.slideEl) {
                e && e.target && (m.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)),
                m.slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex]);
                let s = m.slideEl.querySelector(`.${a.containerClass}`);
                s && (s = s.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
                m.imageEl = s,
                m.imageWrapEl = s ? E(m.imageEl, `.${a.containerClass}`)[0] : void 0
            }
            if (!m.imageEl || !m.imageWrapEl)
                return;
            let i, r, l, o, d, p, u, g, v, b, y, S, T, M, C, P, L, I;
            t.params.cssMode && (t.wrapperEl.style.overflow = "hidden",
            t.wrapperEl.style.touchAction = "none"),
            m.slideEl.classList.add(`${a.zoomedSlideClass}`),
            void 0 === h.touchesStart.x && e ? (i = e.pageX,
            r = e.pageY) : (i = h.touchesStart.x,
            r = h.touchesStart.y);
            const A = "number" == typeof e ? e : null;
            1 === c && A && (i = void 0,
            r = void 0);
            const z = x();
            s.scale = A || z,
            c = A || z,
            !e || 1 === c && A ? (u = 0,
            g = 0) : (L = m.slideEl.offsetWidth,
            I = m.slideEl.offsetHeight,
            l = w(m.slideEl).left + n.scrollX,
            o = w(m.slideEl).top + n.scrollY,
            d = l + L / 2 - i,
            p = o + I / 2 - r,
            v = m.imageEl.offsetWidth || m.imageEl.clientWidth,
            b = m.imageEl.offsetHeight || m.imageEl.clientHeight,
            y = v * s.scale,
            S = b * s.scale,
            T = Math.min(L / 2 - y / 2, 0),
            M = Math.min(I / 2 - S / 2, 0),
            C = -T,
            P = -M,
            u = d * s.scale,
            g = p * s.scale,
            u < T && (u = T),
            u > C && (u = C),
            g < M && (g = M),
            g > P && (g = P)),
            A && 1 === s.scale && (m.originX = 0,
            m.originY = 0),
            m.imageWrapEl.style.transitionDuration = "300ms",
            m.imageWrapEl.style.transform = `translate3d(${u}px, ${g}px,0)`,
            m.imageEl.style.transitionDuration = "300ms",
            m.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`
        }
        function z() {
            const e = t.zoom
              , s = t.params.zoom;
            if (!m.slideEl) {
                t.params.virtual && t.params.virtual.enabled && t.virtual ? m.slideEl = f(t.slidesEl, `.${t.params.slideActiveClass}`)[0] : m.slideEl = t.slides[t.activeIndex];
                let e = m.slideEl.querySelector(`.${s.containerClass}`);
                e && (e = e.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]),
                m.imageEl = e,
                m.imageWrapEl = e ? E(m.imageEl, `.${s.containerClass}`)[0] : void 0
            }
            m.imageEl && m.imageWrapEl && (t.params.cssMode && (t.wrapperEl.style.overflow = "",
            t.wrapperEl.style.touchAction = ""),
            e.scale = 1,
            c = 1,
            m.imageWrapEl.style.transitionDuration = "300ms",
            m.imageWrapEl.style.transform = "translate3d(0,0,0)",
            m.imageEl.style.transitionDuration = "300ms",
            m.imageEl.style.transform = "translate3d(0,0,0) scale(1)",
            m.slideEl.classList.remove(`${s.zoomedSlideClass}`),
            m.slideEl = void 0,
            m.originX = 0,
            m.originY = 0)
        }
        function $(e) {
            const s = t.zoom;
            s.scale && 1 !== s.scale ? z() : A(e)
        }
        function k() {
            return {
                passiveListener: !!t.params.passiveListeners && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !t.params.passiveListeners || {
                    passive: !1,
                    capture: !0
                }
            }
        }
        function O() {
            const e = t.zoom;
            if (e.enabled)
                return;
            e.enabled = !0;
            const {passiveListener: s, activeListenerWithCapture: a} = k();
            t.wrapperEl.addEventListener("pointerdown", T, s),
            t.wrapperEl.addEventListener("pointermove", M, a),
            ["pointerup", "pointercancel", "pointerout"].forEach((e => {
                t.wrapperEl.addEventListener(e, C, s)
            }
            )),
            t.wrapperEl.addEventListener("pointermove", L, a)
        }
        function D() {
            const e = t.zoom;
            if (!e.enabled)
                return;
            e.enabled = !1;
            const {passiveListener: s, activeListenerWithCapture: a} = k();
            t.wrapperEl.removeEventListener("pointerdown", T, s),
            t.wrapperEl.removeEventListener("pointermove", M, a),
            ["pointerup", "pointercancel", "pointerout"].forEach((e => {
                t.wrapperEl.removeEventListener(e, C, s)
            }
            )),
            t.wrapperEl.removeEventListener("pointermove", L, a)
        }
        Object.defineProperty(t.zoom, "scale", {
            get: () => b,
            set(e) {
                if (b !== e) {
                    const t = m.imageEl
                      , s = m.slideEl;
                    i("zoomChange", e, t, s)
                }
                b = e
            }
        }),
        a("init", ( () => {
            t.params.zoom.enabled && O()
        }
        )),
        a("destroy", ( () => {
            D()
        }
        )),
        a("touchStart", ( (e, s) => {
            t.zoom.enabled && function(e) {
                const s = t.device;
                if (!m.imageEl)
                    return;
                if (h.isTouched)
                    return;
                s.android && e.cancelable && e.preventDefault(),
                h.isTouched = !0;
                const a = u.length > 0 ? u[0] : e;
                h.touchesStart.x = a.pageX,
                h.touchesStart.y = a.pageY
            }(s)
        }
        )),
        a("touchEnd", ( (e, s) => {
            t.zoom.enabled && function() {
                const e = t.zoom;
                if (!m.imageEl)
                    return;
                if (!h.isTouched || !h.isMoved)
                    return h.isTouched = !1,
                    void (h.isMoved = !1);
                h.isTouched = !1,
                h.isMoved = !1;
                let s = 300
                  , a = 300;
                const i = g.x * s
                  , r = h.currentX + i
                  , n = g.y * a
                  , l = h.currentY + n;
                0 !== g.x && (s = Math.abs((r - h.currentX) / g.x)),
                0 !== g.y && (a = Math.abs((l - h.currentY) / g.y));
                const o = Math.max(s, a);
                h.currentX = r,
                h.currentY = l;
                const d = h.width * e.scale
                  , c = h.height * e.scale;
                h.minX = Math.min(m.slideWidth / 2 - d / 2, 0),
                h.maxX = -h.minX,
                h.minY = Math.min(m.slideHeight / 2 - c / 2, 0),
                h.maxY = -h.minY,
                h.currentX = Math.max(Math.min(h.currentX, h.maxX), h.minX),
                h.currentY = Math.max(Math.min(h.currentY, h.maxY), h.minY),
                m.imageWrapEl.style.transitionDuration = `${o}ms`,
                m.imageWrapEl.style.transform = `translate3d(${h.currentX}px, ${h.currentY}px,0)`
            }()
        }
        )),
        a("doubleTap", ( (e, s) => {
            !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && $(s)
        }
        )),
        a("transitionEnd", ( () => {
            t.zoom.enabled && t.params.zoom.enabled && I()
        }
        )),
        a("slideChange", ( () => {
            t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && I()
        }
        )),
        Object.assign(t.zoom, {
            enable: O,
            disable: D,
            in: A,
            out: z,
            toggle: $
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        function i(e, t) {
            const s = function() {
                let e, t, s;
                return (a, i) => {
                    for (t = -1,
                    e = a.length; e - t > 1; )
                        s = e + t >> 1,
                        a[s] <= i ? t = s : e = s;
                    return e
                }
            }();
            let a, i;
            return this.x = e,
            this.y = t,
            this.lastIndex = e.length - 1,
            this.interpolate = function(e) {
                return e ? (i = s(this.x, e),
                a = i - 1,
                (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
            }
            ,
            this
        }
        function r() {
            t.controller.control && t.controller.spline && (t.controller.spline = void 0,
            delete t.controller.spline)
        }
        s({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }),
        t.controller = {
            control: void 0
        },
        a("beforeInit", ( () => {
            if ("undefined" != typeof window && ("string" == typeof t.params.controller.control || t.params.controller.control instanceof HTMLElement)) {
                const e = document.querySelector(t.params.controller.control);
                if (e && e.swiper)
                    t.controller.control = e.swiper;
                else if (e) {
                    const s = a => {
                        t.controller.control = a.detail[0],
                        t.update(),
                        e.removeEventListener("init", s)
                    }
                    ;
                    e.addEventListener("init", s)
                }
            } else
                t.controller.control = t.params.controller.control
        }
        )),
        a("update", ( () => {
            r()
        }
        )),
        a("resize", ( () => {
            r()
        }
        )),
        a("observerUpdate", ( () => {
            r()
        }
        )),
        a("setTranslate", ( (e, s, a) => {
            t.controller.control && !t.controller.control.destroyed && t.controller.setTranslate(s, a)
        }
        )),
        a("setTransition", ( (e, s, a) => {
            t.controller.control && !t.controller.control.destroyed && t.controller.setTransition(s, a)
        }
        )),
        Object.assign(t.controller, {
            setTranslate: function(e, s) {
                const a = t.controller.control;
                let r, n;
                const l = t.constructor;
                function o(e) {
                    if (e.destroyed)
                        return;
                    const s = t.rtlTranslate ? -t.translate : t.translate;
                    "slide" === t.params.controller.by && (!function(e) {
                        t.controller.spline = t.params.loop ? new i(t.slidesGrid,e.slidesGrid) : new i(t.snapGrid,e.snapGrid)
                    }(e),
                    n = -t.controller.spline.interpolate(-s)),
                    n && "container" !== t.params.controller.by || (r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()),
                    !Number.isNaN(r) && Number.isFinite(r) || (r = 1),
                    n = (s - t.minTranslate()) * r + e.minTranslate()),
                    t.params.controller.inverse && (n = e.maxTranslate() - n),
                    e.updateProgress(n),
                    e.setTranslate(n, t),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
                }
                if (Array.isArray(a))
                    for (let e = 0; e < a.length; e += 1)
                        a[e] !== s && a[e]instanceof l && o(a[e]);
                else
                    a instanceof l && s !== a && o(a)
            },
            setTransition: function(e, s) {
                const a = t.constructor
                  , i = t.controller.control;
                let r;
                function n(s) {
                    s.destroyed || (s.setTransition(e, t),
                    0 !== e && (s.transitionStart(),
                    s.params.autoHeight && l(( () => {
                        s.updateAutoHeight()
                    }
                    )),
                    x(s.wrapperEl, ( () => {
                        i && s.transitionEnd()
                    }
                    ))))
                }
                if (Array.isArray(i))
                    for (r = 0; r < i.length; r += 1)
                        i[r] !== s && i[r]instanceof a && n(i[r]);
                else
                    i instanceof a && s !== i && n(i)
            }
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: i} = e;
        s({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group",
                id: null
            }
        }),
        t.a11y = {
            clicked: !1
        };
        let r, n, l = null, o = (new Date).getTime();
        function d(e) {
            const t = l;
            0 !== t.length && (t.innerHTML = "",
            t.innerHTML = e)
        }
        function c(e) {
            (e = T(e)).forEach((e => {
                e.setAttribute("tabIndex", "0")
            }
            ))
        }
        function p(e) {
            (e = T(e)).forEach((e => {
                e.setAttribute("tabIndex", "-1")
            }
            ))
        }
        function u(e, t) {
            (e = T(e)).forEach((e => {
                e.setAttribute("role", t)
            }
            ))
        }
        function m(e, t) {
            (e = T(e)).forEach((e => {
                e.setAttribute("aria-roledescription", t)
            }
            ))
        }
        function h(e, t) {
            (e = T(e)).forEach((e => {
                e.setAttribute("aria-label", t)
            }
            ))
        }
        function f(e) {
            (e = T(e)).forEach((e => {
                e.setAttribute("aria-disabled", !0)
            }
            ))
        }
        function g(e) {
            (e = T(e)).forEach((e => {
                e.setAttribute("aria-disabled", !1)
            }
            ))
        }
        function w(e) {
            if (13 !== e.keyCode && 32 !== e.keyCode)
                return;
            const s = t.params.a11y
              , a = e.target;
            if (!t.pagination || !t.pagination.el || a !== t.pagination.el && !t.pagination.el.contains(e.target) || e.target.matches(re(t.params.pagination.bulletClass))) {
                if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
                    const e = T(t.navigation.prevEl);
                    T(t.navigation.nextEl).includes(a) && (t.isEnd && !t.params.loop || t.slideNext(),
                    t.isEnd ? d(s.lastSlideMessage) : d(s.nextSlideMessage)),
                    e.includes(a) && (t.isBeginning && !t.params.loop || t.slidePrev(),
                    t.isBeginning ? d(s.firstSlideMessage) : d(s.prevSlideMessage))
                }
                t.pagination && a.matches(re(t.params.pagination.bulletClass)) && a.click()
            }
        }
        function b() {
            return t.pagination && t.pagination.bullets && t.pagination.bullets.length
        }
        function E() {
            return b() && t.params.pagination.clickable
        }
        const x = (e, t, s) => {
            c(e),
            "BUTTON" !== e.tagName && (u(e, "button"),
            e.addEventListener("keydown", w)),
            h(e, s),
            function(e, t) {
                (e = T(e)).forEach((e => {
                    e.setAttribute("aria-controls", t)
                }
                ))
            }(e, t)
        }
          , S = e => {
            n && n !== e.target && !n.contains(e.target) && (r = !0),
            t.a11y.clicked = !0
        }
          , M = () => {
            r = !1,
            requestAnimationFrame(( () => {
                requestAnimationFrame(( () => {
                    t.destroyed || (t.a11y.clicked = !1)
                }
                ))
            }
            ))
        }
          , C = e => {
            o = (new Date).getTime()
        }
          , P = e => {
            if (t.a11y.clicked)
                return;
            if ((new Date).getTime() - o < 100)
                return;
            const s = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
            if (!s || !t.slides.includes(s))
                return;
            n = s;
            const a = t.slides.indexOf(s) === t.activeIndex
              , i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
            a || i || e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0,
            requestAnimationFrame(( () => {
                r || (t.params.loop ? t.slideToLoop(parseInt(s.getAttribute("data-swiper-slide-index")), 0) : t.slideTo(t.slides.indexOf(s), 0),
                r = !1)
            }
            )))
        }
          , L = () => {
            const e = t.params.a11y;
            e.itemRoleDescriptionMessage && m(t.slides, e.itemRoleDescriptionMessage),
            e.slideRole && u(t.slides, e.slideRole);
            const s = t.slides.length;
            e.slideLabelMessage && t.slides.forEach(( (a, i) => {
                const r = t.params.loop ? parseInt(a.getAttribute("data-swiper-slide-index"), 10) : i;
                h(a, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, s))
            }
            ))
        }
          , I = () => {
            const e = t.params.a11y;
            t.el.append(l);
            const s = t.el;
            e.containerRoleDescriptionMessage && m(s, e.containerRoleDescriptionMessage),
            e.containerMessage && h(s, e.containerMessage);
            const i = t.wrapperEl
              , r = e.id || i.getAttribute("id") || `swiper-wrapper-${n = 16,
            void 0 === n && (n = 16),
            "x".repeat(n).replace(/x/g, ( () => Math.round(16 * Math.random()).toString(16)))}`;
            var n;
            const o = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite";
            var d;
            d = r,
            T(i).forEach((e => {
                e.setAttribute("id", d)
            }
            )),
            function(e, t) {
                (e = T(e)).forEach((e => {
                    e.setAttribute("aria-live", t)
                }
                ))
            }(i, o),
            L();
            let {nextEl: c, prevEl: p} = t.navigation ? t.navigation : {};
            if (c = T(c),
            p = T(p),
            c && c.forEach((t => x(t, r, e.nextSlideMessage))),
            p && p.forEach((t => x(t, r, e.prevSlideMessage))),
            E()) {
                T(t.pagination.el).forEach((e => {
                    e.addEventListener("keydown", w)
                }
                ))
            }
            a().addEventListener("visibilitychange", C),
            t.el.addEventListener("focus", P, !0),
            t.el.addEventListener("focus", P, !0),
            t.el.addEventListener("pointerdown", S, !0),
            t.el.addEventListener("pointerup", M, !0)
        }
        ;
        i("beforeInit", ( () => {
            l = v("span", t.params.a11y.notificationClass),
            l.setAttribute("aria-live", "assertive"),
            l.setAttribute("aria-atomic", "true")
        }
        )),
        i("afterInit", ( () => {
            t.params.a11y.enabled && I()
        }
        )),
        i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", ( () => {
            t.params.a11y.enabled && L()
        }
        )),
        i("fromEdge toEdge afterInit lock unlock", ( () => {
            t.params.a11y.enabled && function() {
                if (t.params.loop || t.params.rewind || !t.navigation)
                    return;
                const {nextEl: e, prevEl: s} = t.navigation;
                s && (t.isBeginning ? (f(s),
                p(s)) : (g(s),
                c(s))),
                e && (t.isEnd ? (f(e),
                p(e)) : (g(e),
                c(e)))
            }()
        }
        )),
        i("paginationUpdate", ( () => {
            t.params.a11y.enabled && function() {
                const e = t.params.a11y;
                b() && t.pagination.bullets.forEach((s => {
                    t.params.pagination.clickable && (c(s),
                    t.params.pagination.renderBullet || (u(s, "button"),
                    h(s, e.paginationBulletMessage.replace(/\{\{index\}\}/, y(s) + 1)))),
                    s.matches(re(t.params.pagination.bulletActiveClass)) ? s.setAttribute("aria-current", "true") : s.removeAttribute("aria-current")
                }
                ))
            }()
        }
        )),
        i("destroy", ( () => {
            t.params.a11y.enabled && function() {
                l && l.remove();
                let {nextEl: e, prevEl: s} = t.navigation ? t.navigation : {};
                e = T(e),
                s = T(s),
                e && e.forEach((e => e.removeEventListener("keydown", w))),
                s && s.forEach((e => e.removeEventListener("keydown", w))),
                E() && T(t.pagination.el).forEach((e => {
                    e.removeEventListener("keydown", w)
                }
                ));
                a().removeEventListener("visibilitychange", C),
                t.el && "string" != typeof t.el && (t.el.removeEventListener("focus", P, !0),
                t.el.removeEventListener("pointerdown", S, !0),
                t.el.removeEventListener("pointerup", M, !0))
            }()
        }
        ))
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides",
                keepQuery: !1
            }
        });
        let i = !1
          , n = {};
        const l = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
          , o = e => {
            const t = r();
            let s;
            s = e ? new URL(e) : t.location;
            const a = s.pathname.slice(1).split("/").filter((e => "" !== e))
              , i = a.length;
            return {
                key: a[i - 2],
                value: a[i - 1]
            }
        }
          , d = (e, s) => {
            const a = r();
            if (!i || !t.params.history.enabled)
                return;
            let n;
            n = t.params.url ? new URL(t.params.url) : a.location;
            const o = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${s}"]`) : t.slides[s];
            let d = l(o.getAttribute("data-history"));
            if (t.params.history.root.length > 0) {
                let s = t.params.history.root;
                "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
                d = `${s}/${e ? `${e}/` : ""}${d}`
            } else
                n.pathname.includes(e) || (d = `${e ? `${e}/` : ""}${d}`);
            t.params.history.keepQuery && (d += n.search);
            const c = a.history.state;
            c && c.value === d || (t.params.history.replaceState ? a.history.replaceState({
                value: d
            }, null, d) : a.history.pushState({
                value: d
            }, null, d))
        }
          , c = (e, s, a) => {
            if (s)
                for (let i = 0, r = t.slides.length; i < r; i += 1) {
                    const r = t.slides[i];
                    if (l(r.getAttribute("data-history")) === s) {
                        const s = t.getSlideIndex(r);
                        t.slideTo(s, e, a)
                    }
                }
            else
                t.slideTo(0, e, a)
        }
          , p = () => {
            n = o(t.params.url),
            c(t.params.speed, n.value, !1)
        }
        ;
        a("init", ( () => {
            t.params.history.enabled && ( () => {
                const e = r();
                if (t.params.history) {
                    if (!e.history || !e.history.pushState)
                        return t.params.history.enabled = !1,
                        void (t.params.hashNavigation.enabled = !0);
                    i = !0,
                    n = o(t.params.url),
                    n.key || n.value ? (c(0, n.value, t.params.runCallbacksOnInit),
                    t.params.history.replaceState || e.addEventListener("popstate", p)) : t.params.history.replaceState || e.addEventListener("popstate", p)
                }
            }
            )()
        }
        )),
        a("destroy", ( () => {
            t.params.history.enabled && ( () => {
                const e = r();
                t.params.history.replaceState || e.removeEventListener("popstate", p)
            }
            )()
        }
        )),
        a("transitionEnd _freeModeNoMomentumRelease", ( () => {
            i && d(t.params.history.key, t.activeIndex)
        }
        )),
        a("slideChange", ( () => {
            i && t.params.cssMode && d(t.params.history.key, t.activeIndex)
        }
        ))
    }
    , function(e) {
        let {swiper: t, extendParams: s, emit: i, on: n} = e
          , l = !1;
        const o = a()
          , d = r();
        s({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1,
                getSlideIndex(e, s) {
                    if (t.virtual && t.params.virtual.enabled) {
                        const e = t.slides.filter((e => e.getAttribute("data-hash") === s))[0];
                        if (!e)
                            return 0;
                        return parseInt(e.getAttribute("data-swiper-slide-index"), 10)
                    }
                    return t.getSlideIndex(f(t.slidesEl, `.${t.params.slideClass}[data-hash="${s}"], swiper-slide[data-hash="${s}"]`)[0])
                }
            }
        });
        const c = () => {
            i("hashChange");
            const e = o.location.hash.replace("#", "")
              , s = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex];
            if (e !== (s ? s.getAttribute("data-hash") : "")) {
                const s = t.params.hashNavigation.getSlideIndex(t, e);
                if (void 0 === s || Number.isNaN(s))
                    return;
                t.slideTo(s)
            }
        }
          , p = () => {
            if (!l || !t.params.hashNavigation.enabled)
                return;
            const e = t.virtual && t.params.virtual.enabled ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`) : t.slides[t.activeIndex]
              , s = e ? e.getAttribute("data-hash") || e.getAttribute("data-history") : "";
            t.params.hashNavigation.replaceState && d.history && d.history.replaceState ? (d.history.replaceState(null, null, `#${s}` || ""),
            i("hashSet")) : (o.location.hash = s || "",
            i("hashSet"))
        }
        ;
        n("init", ( () => {
            t.params.hashNavigation.enabled && ( () => {
                if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)
                    return;
                l = !0;
                const e = o.location.hash.replace("#", "");
                if (e) {
                    const s = 0
                      , a = t.params.hashNavigation.getSlideIndex(t, e);
                    t.slideTo(a || 0, s, t.params.runCallbacksOnInit, !0)
                }
                t.params.hashNavigation.watchState && d.addEventListener("hashchange", c)
            }
            )()
        }
        )),
        n("destroy", ( () => {
            t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d.removeEventListener("hashchange", c)
        }
        )),
        n("transitionEnd _freeModeNoMomentumRelease", ( () => {
            l && p()
        }
        )),
        n("slideChange", ( () => {
            l && t.params.cssMode && p()
        }
        ))
    }
    , function(e) {
        let t, s, {swiper: i, extendParams: r, on: n, emit: l, params: o} = e;
        i.autoplay = {
            running: !1,
            paused: !1,
            timeLeft: 0
        },
        r({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !1,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        });
        let d, c, p, u, m, h, f, g, v = o && o.autoplay ? o.autoplay.delay : 3e3, w = o && o.autoplay ? o.autoplay.delay : 3e3, b = (new Date).getTime();
        function y(e) {
            i && !i.destroyed && i.wrapperEl && e.target === i.wrapperEl && (i.wrapperEl.removeEventListener("transitionend", y),
            g || e.detail && e.detail.bySwiperTouchMove || C())
        }
        const E = () => {
            if (i.destroyed || !i.autoplay.running)
                return;
            i.autoplay.paused ? c = !0 : c && (w = d,
            c = !1);
            const e = i.autoplay.paused ? d : b + w - (new Date).getTime();
            i.autoplay.timeLeft = e,
            l("autoplayTimeLeft", e, e / v),
            s = requestAnimationFrame(( () => {
                E()
            }
            ))
        }
          , x = e => {
            if (i.destroyed || !i.autoplay.running)
                return;
            cancelAnimationFrame(s),
            E();
            let a = void 0 === e ? i.params.autoplay.delay : e;
            v = i.params.autoplay.delay,
            w = i.params.autoplay.delay;
            const r = ( () => {
                let e;
                if (e = i.virtual && i.params.virtual.enabled ? i.slides.filter((e => e.classList.contains("swiper-slide-active")))[0] : i.slides[i.activeIndex],
                !e)
                    return;
                return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
            }
            )();
            !Number.isNaN(r) && r > 0 && void 0 === e && (a = r,
            v = r,
            w = r),
            d = a;
            const n = i.params.speed
              , o = () => {
                i && !i.destroyed && (i.params.autoplay.reverseDirection ? !i.isBeginning || i.params.loop || i.params.rewind ? (i.slidePrev(n, !0, !0),
                l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length - 1, n, !0, !0),
                l("autoplay")) : !i.isEnd || i.params.loop || i.params.rewind ? (i.slideNext(n, !0, !0),
                l("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(0, n, !0, !0),
                l("autoplay")),
                i.params.cssMode && (b = (new Date).getTime(),
                requestAnimationFrame(( () => {
                    x()
                }
                ))))
            }
            ;
            return a > 0 ? (clearTimeout(t),
            t = setTimeout(( () => {
                o()
            }
            ), a)) : requestAnimationFrame(( () => {
                o()
            }
            )),
            a
        }
          , S = () => {
            b = (new Date).getTime(),
            i.autoplay.running = !0,
            x(),
            l("autoplayStart")
        }
          , T = () => {
            i.autoplay.running = !1,
            clearTimeout(t),
            cancelAnimationFrame(s),
            l("autoplayStop")
        }
          , M = (e, s) => {
            if (i.destroyed || !i.autoplay.running)
                return;
            clearTimeout(t),
            e || (f = !0);
            const a = () => {
                l("autoplayPause"),
                i.params.autoplay.waitForTransition ? i.wrapperEl.addEventListener("transitionend", y) : C()
            }
            ;
            if (i.autoplay.paused = !0,
            s)
                return h && (d = i.params.autoplay.delay),
                h = !1,
                void a();
            const r = d || i.params.autoplay.delay;
            d = r - ((new Date).getTime() - b),
            i.isEnd && d < 0 && !i.params.loop || (d < 0 && (d = 0),
            a())
        }
          , C = () => {
            i.isEnd && d < 0 && !i.params.loop || i.destroyed || !i.autoplay.running || (b = (new Date).getTime(),
            f ? (f = !1,
            x(d)) : x(),
            i.autoplay.paused = !1,
            l("autoplayResume"))
        }
          , P = () => {
            if (i.destroyed || !i.autoplay.running)
                return;
            const e = a();
            "hidden" === e.visibilityState && (f = !0,
            M(!0)),
            "visible" === e.visibilityState && C()
        }
          , L = e => {
            "mouse" === e.pointerType && (f = !0,
            g = !0,
            i.animating || i.autoplay.paused || M(!0))
        }
          , I = e => {
            "mouse" === e.pointerType && (g = !1,
            i.autoplay.paused && C())
        }
        ;
        n("init", ( () => {
            i.params.autoplay.enabled && (i.params.autoplay.pauseOnMouseEnter && (i.el.addEventListener("pointerenter", L),
            i.el.addEventListener("pointerleave", I)),
            a().addEventListener("visibilitychange", P),
            S())
        }
        )),
        n("destroy", ( () => {
            i.el && "string" != typeof i.el && (i.el.removeEventListener("pointerenter", L),
            i.el.removeEventListener("pointerleave", I)),
            a().removeEventListener("visibilitychange", P),
            i.autoplay.running && T()
        }
        )),
        n("_freeModeStaticRelease", ( () => {
            (u || f) && C()
        }
        )),
        n("_freeModeNoMomentumRelease", ( () => {
            i.params.autoplay.disableOnInteraction ? T() : M(!0, !0)
        }
        )),
        n("beforeTransitionStart", ( (e, t, s) => {
            !i.destroyed && i.autoplay.running && (s || !i.params.autoplay.disableOnInteraction ? M(!0, !0) : T())
        }
        )),
        n("sliderFirstMove", ( () => {
            !i.destroyed && i.autoplay.running && (i.params.autoplay.disableOnInteraction ? T() : (p = !0,
            u = !1,
            f = !1,
            m = setTimeout(( () => {
                f = !0,
                u = !0,
                M(!0)
            }
            ), 200)))
        }
        )),
        n("touchEnd", ( () => {
            if (!i.destroyed && i.autoplay.running && p) {
                if (clearTimeout(m),
                clearTimeout(t),
                i.params.autoplay.disableOnInteraction)
                    return u = !1,
                    void (p = !1);
                u && i.params.cssMode && C(),
                u = !1,
                p = !1
            }
        }
        )),
        n("slideChange", ( () => {
            !i.destroyed && i.autoplay.running && (h = !0)
        }
        )),
        Object.assign(i.autoplay, {
            start: S,
            stop: T,
            pause: M,
            resume: C
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: i} = e;
        s({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let r = !1
          , n = !1;
        function l() {
            const e = t.thumbs.swiper;
            if (!e || e.destroyed)
                return;
            const s = e.clickedIndex
              , a = e.clickedSlide;
            if (a && a.classList.contains(t.params.thumbs.slideThumbActiveClass))
                return;
            if (null == s)
                return;
            let i;
            i = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : s,
            t.params.loop ? t.slideToLoop(i) : t.slideTo(i)
        }
        function o() {
            const {thumbs: e} = t.params;
            if (r)
                return !1;
            r = !0;
            const s = t.constructor;
            if (e.swiper instanceof s)
                t.thumbs.swiper = e.swiper,
                Object.assign(t.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                Object.assign(t.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                t.thumbs.swiper.update();
            else if (c(e.swiper)) {
                const a = Object.assign({}, e.swiper);
                Object.assign(a, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }),
                t.thumbs.swiper = new s(a),
                n = !0
            }
            return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass),
            t.thumbs.swiper.on("tap", l),
            !0
        }
        function d(e) {
            const s = t.thumbs.swiper;
            if (!s || s.destroyed)
                return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
            let i = 1;
            const r = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView),
            t.params.thumbs.multipleActiveThumbs || (i = 1),
            i = Math.floor(i),
            s.slides.forEach((e => e.classList.remove(r))),
            s.params.loop || s.params.virtual && s.params.virtual.enabled)
                for (let e = 0; e < i; e += 1)
                    f(s.slidesEl, `[data-swiper-slide-index="${t.realIndex + e}"]`).forEach((e => {
                        e.classList.add(r)
                    }
                    ));
            else
                for (let e = 0; e < i; e += 1)
                    s.slides[t.realIndex + e] && s.slides[t.realIndex + e].classList.add(r);
            const n = t.params.thumbs.autoScrollOffset
              , l = n && !s.params.loop;
            if (t.realIndex !== s.realIndex || l) {
                const i = s.activeIndex;
                let r, o;
                if (s.params.loop) {
                    const e = s.slides.filter((e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`))[0];
                    r = s.slides.indexOf(e),
                    o = t.activeIndex > t.previousIndex ? "next" : "prev"
                } else
                    r = t.realIndex,
                    o = r > t.previousIndex ? "next" : "prev";
                l && (r += "next" === o ? n : -1 * n),
                s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(r) < 0 && (s.params.centeredSlides ? r = r > i ? r - Math.floor(a / 2) + 1 : r + Math.floor(a / 2) - 1 : r > i && s.params.slidesPerGroup,
                s.slideTo(r, e ? 0 : void 0))
            }
        }
        t.thumbs = {
            swiper: null
        },
        i("beforeInit", ( () => {
            const {thumbs: e} = t.params;
            if (e && e.swiper)
                if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
                    const s = a()
                      , i = () => {
                        const a = "string" == typeof e.swiper ? s.querySelector(e.swiper) : e.swiper;
                        if (a && a.swiper)
                            e.swiper = a.swiper,
                            o(),
                            d(!0);
                        else if (a) {
                            const s = i => {
                                e.swiper = i.detail[0],
                                a.removeEventListener("init", s),
                                o(),
                                d(!0),
                                e.swiper.update(),
                                t.update()
                            }
                            ;
                            a.addEventListener("init", s)
                        }
                        return a
                    }
                      , r = () => {
                        if (t.destroyed)
                            return;
                        i() || requestAnimationFrame(r)
                    }
                    ;
                    requestAnimationFrame(r)
                } else
                    o(),
                    d(!0)
        }
        )),
        i("slideChange update resize observerUpdate", ( () => {
            d()
        }
        )),
        i("setTransition", ( (e, s) => {
            const a = t.thumbs.swiper;
            a && !a.destroyed && a.setTransition(s)
        }
        )),
        i("beforeDestroy", ( () => {
            const e = t.thumbs.swiper;
            e && !e.destroyed && n && e.destroy()
        }
        )),
        Object.assign(t.thumbs, {
            init: o,
            update: d
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, emit: a, once: i} = e;
        s({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }),
        Object.assign(t, {
            freeMode: {
                onTouchStart: function() {
                    if (t.params.cssMode)
                        return;
                    const e = t.getTranslate();
                    t.setTranslate(e),
                    t.setTransition(0),
                    t.touchEventsData.velocities.length = 0,
                    t.freeMode.onTouchEnd({
                        currentPos: t.rtl ? t.translate : -t.translate
                    })
                },
                onTouchMove: function() {
                    if (t.params.cssMode)
                        return;
                    const {touchEventsData: e, touches: s} = t;
                    0 === e.velocities.length && e.velocities.push({
                        position: s[t.isHorizontal() ? "startX" : "startY"],
                        time: e.touchStartTime
                    }),
                    e.velocities.push({
                        position: s[t.isHorizontal() ? "currentX" : "currentY"],
                        time: o()
                    })
                },
                onTouchEnd: function(e) {
                    let {currentPos: s} = e;
                    if (t.params.cssMode)
                        return;
                    const {params: r, wrapperEl: n, rtlTranslate: l, snapGrid: d, touchEventsData: c} = t
                      , p = o() - c.touchStartTime;
                    if (s < -t.minTranslate())
                        t.slideTo(t.activeIndex);
                    else if (s > -t.maxTranslate())
                        t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1);
                    else {
                        if (r.freeMode.momentum) {
                            if (c.velocities.length > 1) {
                                const e = c.velocities.pop()
                                  , s = c.velocities.pop()
                                  , a = e.position - s.position
                                  , i = e.time - s.time;
                                t.velocity = a / i,
                                t.velocity /= 2,
                                Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0),
                                (i > 150 || o() - e.time > 300) && (t.velocity = 0)
                            } else
                                t.velocity = 0;
                            t.velocity *= r.freeMode.momentumVelocityRatio,
                            c.velocities.length = 0;
                            let e = 1e3 * r.freeMode.momentumRatio;
                            const s = t.velocity * e;
                            let p = t.translate + s;
                            l && (p = -p);
                            let u, m = !1;
                            const h = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                            let f;
                            if (p < t.maxTranslate())
                                r.freeMode.momentumBounce ? (p + t.maxTranslate() < -h && (p = t.maxTranslate() - h),
                                u = t.maxTranslate(),
                                m = !0,
                                c.allowMomentumBounce = !0) : p = t.maxTranslate(),
                                r.loop && r.centeredSlides && (f = !0);
                            else if (p > t.minTranslate())
                                r.freeMode.momentumBounce ? (p - t.minTranslate() > h && (p = t.minTranslate() + h),
                                u = t.minTranslate(),
                                m = !0,
                                c.allowMomentumBounce = !0) : p = t.minTranslate(),
                                r.loop && r.centeredSlides && (f = !0);
                            else if (r.freeMode.sticky) {
                                let e;
                                for (let t = 0; t < d.length; t += 1)
                                    if (d[t] > -p) {
                                        e = t;
                                        break
                                    }
                                p = Math.abs(d[e] - p) < Math.abs(d[e - 1] - p) || "next" === t.swipeDirection ? d[e] : d[e - 1],
                                p = -p
                            }
                            if (f && i("transitionEnd", ( () => {
                                t.loopFix()
                            }
                            )),
                            0 !== t.velocity) {
                                if (e = l ? Math.abs((-p - t.translate) / t.velocity) : Math.abs((p - t.translate) / t.velocity),
                                r.freeMode.sticky) {
                                    const s = Math.abs((l ? -p : p) - t.translate)
                                      , a = t.slidesSizesGrid[t.activeIndex];
                                    e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed
                                }
                            } else if (r.freeMode.sticky)
                                return void t.slideToClosest();
                            r.freeMode.momentumBounce && m ? (t.updateProgress(u),
                            t.setTransition(e),
                            t.setTranslate(p),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating = !0,
                            x(n, ( () => {
                                t && !t.destroyed && c.allowMomentumBounce && (a("momentumBounce"),
                                t.setTransition(r.speed),
                                setTimeout(( () => {
                                    t.setTranslate(u),
                                    x(n, ( () => {
                                        t && !t.destroyed && t.transitionEnd()
                                    }
                                    ))
                                }
                                ), 0))
                            }
                            ))) : t.velocity ? (a("_freeModeNoMomentumRelease"),
                            t.updateProgress(p),
                            t.setTransition(e),
                            t.setTranslate(p),
                            t.transitionStart(!0, t.swipeDirection),
                            t.animating || (t.animating = !0,
                            x(n, ( () => {
                                t && !t.destroyed && t.transitionEnd()
                            }
                            )))) : t.updateProgress(p),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses()
                        } else {
                            if (r.freeMode.sticky)
                                return void t.slideToClosest();
                            r.freeMode && a("_freeModeNoMomentumRelease")
                        }
                        (!r.freeMode.momentum || p >= r.longSwipesMs) && (a("_freeModeStaticRelease"),
                        t.updateProgress(),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses())
                    }
                }
            }
        })
    }
    , function(e) {
        let t, s, a, i, {swiper: r, extendParams: n, on: l} = e;
        n({
            grid: {
                rows: 1,
                fill: "column"
            }
        });
        const o = () => {
            let e = r.params.spaceBetween;
            return "string" == typeof e && e.indexOf("%") >= 0 ? e = parseFloat(e.replace("%", "")) / 100 * r.size : "string" == typeof e && (e = parseFloat(e)),
            e
        }
        ;
        l("init", ( () => {
            i = r.params.grid && r.params.grid.rows > 1
        }
        )),
        l("update", ( () => {
            const {params: e, el: t} = r
              , s = e.grid && e.grid.rows > 1;
            i && !s ? (t.classList.remove(`${e.containerModifierClass}grid`, `${e.containerModifierClass}grid-column`),
            a = 1,
            r.emitContainerClasses()) : !i && s && (t.classList.add(`${e.containerModifierClass}grid`),
            "column" === e.grid.fill && t.classList.add(`${e.containerModifierClass}grid-column`),
            r.emitContainerClasses()),
            i = s
        }
        )),
        r.grid = {
            initSlides: e => {
                const {slidesPerView: i} = r.params
                  , {rows: n, fill: l} = r.params.grid
                  , o = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : e.length;
                a = Math.floor(o / n),
                t = Math.floor(o / n) === o / n ? o : Math.ceil(o / n) * n,
                "auto" !== i && "row" === l && (t = Math.max(t, i * n)),
                s = t / n
            }
            ,
            unsetSlides: () => {
                r.slides && r.slides.forEach((e => {
                    e.swiperSlideGridSet && (e.style.height = "",
                    e.style[r.getDirectionLabel("margin-top")] = "")
                }
                ))
            }
            ,
            updateSlide: (e, i, n) => {
                const {slidesPerGroup: l} = r.params
                  , d = o()
                  , {rows: c, fill: p} = r.params.grid
                  , u = r.virtual && r.params.virtual.enabled ? r.virtual.slides.length : n.length;
                let m, h, f;
                if ("row" === p && l > 1) {
                    const s = Math.floor(e / (l * c))
                      , a = e - c * l * s
                      , r = 0 === s ? l : Math.min(Math.ceil((u - s * c * l) / c), l);
                    f = Math.floor(a / r),
                    h = a - f * r + s * l,
                    m = h + f * t / c,
                    i.style.order = m
                } else
                    "column" === p ? (h = Math.floor(e / c),
                    f = e - h * c,
                    (h > a || h === a && f === c - 1) && (f += 1,
                    f >= c && (f = 0,
                    h += 1))) : (f = Math.floor(e / s),
                    h = e - f * s);
                i.row = f,
                i.column = h,
                i.style.height = `calc((100% - ${(c - 1) * d}px) / ${c})`,
                i.style[r.getDirectionLabel("margin-top")] = 0 !== f ? d && `${d}px` : "",
                i.swiperSlideGridSet = !0
            }
            ,
            updateWrapperSize: (e, s) => {
                const {centeredSlides: a, roundLengths: i} = r.params
                  , n = o()
                  , {rows: l} = r.params.grid;
                if (r.virtualSize = (e + n) * t,
                r.virtualSize = Math.ceil(r.virtualSize / l) - n,
                r.params.cssMode || (r.wrapperEl.style[r.getDirectionLabel("width")] = `${r.virtualSize + n}px`),
                a) {
                    const e = [];
                    for (let t = 0; t < s.length; t += 1) {
                        let a = s[t];
                        i && (a = Math.floor(a)),
                        s[t] < r.virtualSize + s[0] && e.push(a)
                    }
                    s.splice(0, s.length),
                    s.push(...e)
                }
            }
        }
    }
    , function(e) {
        let {swiper: t} = e;
        Object.assign(t, {
            appendSlide: ne.bind(t),
            prependSlide: le.bind(t),
            addSlide: oe.bind(t),
            removeSlide: de.bind(t),
            removeAllSlides: ce.bind(t)
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            fadeEffect: {
                crossFade: !1
            }
        }),
        pe({
            effect: "fade",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e} = t;
                t.params.fadeEffect;
                for (let s = 0; s < e.length; s += 1) {
                    const e = t.slides[s];
                    let a = -e.swiperSlideOffset;
                    t.params.virtualTranslate || (a -= t.translate);
                    let i = 0;
                    t.isHorizontal() || (i = a,
                    a = 0);
                    const r = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e.progress), 0) : 1 + Math.min(Math.max(e.progress, -1), 0)
                      , n = ue(0, e);
                    n.style.opacity = r,
                    n.style.transform = `translate3d(${a}px, ${i}px, 0px)`
                }
            }
            ,
            setTransition: e => {
                const s = t.slides.map((e => h(e)));
                s.forEach((t => {
                    t.style.transitionDuration = `${e}ms`
                }
                )),
                me({
                    swiper: t,
                    duration: e,
                    transformElements: s,
                    allSlides: !0
                })
            }
            ,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        });
        const i = (e, t, s) => {
            let a = s ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top")
              , i = s ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
            a || (a = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "left" : "top")).split(" ")),
            e.append(a)),
            i || (i = v("div", ("swiper-slide-shadow-cube swiper-slide-shadow-" + (s ? "right" : "bottom")).split(" ")),
            e.append(i)),
            a && (a.style.opacity = Math.max(-t, 0)),
            i && (i.style.opacity = Math.max(t, 0))
        }
        ;
        pe({
            effect: "cube",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {el: e, wrapperEl: s, slides: a, width: r, height: n, rtlTranslate: l, size: o, browser: d} = t
                  , c = t.params.cubeEffect
                  , p = t.isHorizontal()
                  , u = t.virtual && t.params.virtual.enabled;
                let m, h = 0;
                c.shadow && (p ? (m = t.wrapperEl.querySelector(".swiper-cube-shadow"),
                m || (m = v("div", "swiper-cube-shadow"),
                t.wrapperEl.append(m)),
                m.style.height = `${r}px`) : (m = e.querySelector(".swiper-cube-shadow"),
                m || (m = v("div", "swiper-cube-shadow"),
                e.append(m))));
                for (let e = 0; e < a.length; e += 1) {
                    const s = a[e];
                    let r = e;
                    u && (r = parseInt(s.getAttribute("data-swiper-slide-index"), 10));
                    let n = 90 * r
                      , d = Math.floor(n / 360);
                    l && (n = -n,
                    d = Math.floor(-n / 360));
                    const m = Math.max(Math.min(s.progress, 1), -1);
                    let f = 0
                      , g = 0
                      , v = 0;
                    r % 4 == 0 ? (f = 4 * -d * o,
                    v = 0) : (r - 1) % 4 == 0 ? (f = 0,
                    v = 4 * -d * o) : (r - 2) % 4 == 0 ? (f = o + 4 * d * o,
                    v = o) : (r - 3) % 4 == 0 && (f = -o,
                    v = 3 * o + 4 * o * d),
                    l && (f = -f),
                    p || (g = f,
                    f = 0);
                    const w = `rotateX(${p ? 0 : -n}deg) rotateY(${p ? n : 0}deg) translate3d(${f}px, ${g}px, ${v}px)`;
                    m <= 1 && m > -1 && (h = 90 * r + 90 * m,
                    l && (h = 90 * -r - 90 * m),
                    t.browser && t.browser.need3dFix && Math.abs(h) / 90 % 2 == 1 && (h += .001)),
                    s.style.transform = w,
                    c.slideShadows && i(s, m, p)
                }
                if (s.style.transformOrigin = `50% 50% -${o / 2}px`,
                s.style["-webkit-transform-origin"] = `50% 50% -${o / 2}px`,
                c.shadow)
                    if (p)
                        m.style.transform = `translate3d(0px, ${r / 2 + c.shadowOffset}px, ${-r / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${c.shadowScale})`;
                    else {
                        const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90)
                          , t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2)
                          , s = c.shadowScale
                          , a = c.shadowScale / t
                          , i = c.shadowOffset;
                        m.style.transform = `scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-89.99deg)`
                    }
                const f = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -o / 2 : 0;
                s.style.transform = `translate3d(0px,0,${f}px) rotateX(${t.isHorizontal() ? 0 : h}deg) rotateY(${t.isHorizontal() ? -h : 0}deg)`,
                s.style.setProperty("--swiper-cube-translate-z", `${f}px`)
            }
            ,
            setTransition: e => {
                const {el: s, slides: a} = t;
                if (a.forEach((t => {
                    t.style.transitionDuration = `${e}ms`,
                    t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }
                    ))
                }
                )),
                t.params.cubeEffect.shadow && !t.isHorizontal()) {
                    const t = s.querySelector(".swiper-cube-shadow");
                    t && (t.style.transitionDuration = `${e}ms`)
                }
            }
            ,
            recreateShadows: () => {
                const e = t.isHorizontal();
                t.slides.forEach((t => {
                    const s = Math.max(Math.min(t.progress, 1), -1);
                    i(t, s, e)
                }
                ))
            }
            ,
            getEffectParams: () => t.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        });
        const i = (e, s) => {
            let a = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-left") : e.querySelector(".swiper-slide-shadow-top")
              , i = t.isHorizontal() ? e.querySelector(".swiper-slide-shadow-right") : e.querySelector(".swiper-slide-shadow-bottom");
            a || (a = he("flip", e, t.isHorizontal() ? "left" : "top")),
            i || (i = he("flip", e, t.isHorizontal() ? "right" : "bottom")),
            a && (a.style.opacity = Math.max(-s, 0)),
            i && (i.style.opacity = Math.max(s, 0))
        }
        ;
        pe({
            effect: "flip",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e, rtlTranslate: s} = t
                  , a = t.params.flipEffect;
                for (let r = 0; r < e.length; r += 1) {
                    const n = e[r];
                    let l = n.progress;
                    t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n.progress, 1), -1));
                    const o = n.swiperSlideOffset;
                    let d = -180 * l
                      , c = 0
                      , p = t.params.cssMode ? -o - t.translate : -o
                      , u = 0;
                    t.isHorizontal() ? s && (d = -d) : (u = p,
                    p = 0,
                    c = -d,
                    d = 0),
                    t.browser && t.browser.need3dFix && (Math.abs(d) / 90 % 2 == 1 && (d += .001),
                    Math.abs(c) / 90 % 2 == 1 && (c += .001)),
                    n.style.zIndex = -Math.abs(Math.round(l)) + e.length,
                    a.slideShadows && i(n, l);
                    const m = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                    ue(0, n).style.transform = m
                }
            }
            ,
            setTransition: e => {
                const s = t.slides.map((e => h(e)));
                s.forEach((t => {
                    t.style.transitionDuration = `${e}ms`,
                    t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }
                    ))
                }
                )),
                me({
                    swiper: t,
                    duration: e,
                    transformElements: s
                })
            }
            ,
            recreateShadows: () => {
                t.params.flipEffect,
                t.slides.forEach((e => {
                    let s = e.progress;
                    t.params.flipEffect.limitRotation && (s = Math.max(Math.min(e.progress, 1), -1)),
                    i(e, s)
                }
                ))
            }
            ,
            getEffectParams: () => t.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0
            }
        }),
        pe({
            effect: "coverflow",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {width: e, height: s, slides: a, slidesSizesGrid: i} = t
                  , r = t.params.coverflowEffect
                  , n = t.isHorizontal()
                  , l = t.translate
                  , o = n ? e / 2 - l : s / 2 - l
                  , d = n ? r.rotate : -r.rotate
                  , c = r.depth;
                for (let e = 0, s = a.length; e < s; e += 1) {
                    const s = a[e]
                      , l = i[e]
                      , p = (o - s.swiperSlideOffset - l / 2) / l
                      , u = "function" == typeof r.modifier ? r.modifier(p) : p * r.modifier;
                    let m = n ? d * u : 0
                      , h = n ? 0 : d * u
                      , f = -c * Math.abs(u)
                      , g = r.stretch;
                    "string" == typeof g && -1 !== g.indexOf("%") && (g = parseFloat(r.stretch) / 100 * l);
                    let v = n ? 0 : g * u
                      , w = n ? g * u : 0
                      , b = 1 - (1 - r.scale) * Math.abs(u);
                    Math.abs(w) < .001 && (w = 0),
                    Math.abs(v) < .001 && (v = 0),
                    Math.abs(f) < .001 && (f = 0),
                    Math.abs(m) < .001 && (m = 0),
                    Math.abs(h) < .001 && (h = 0),
                    Math.abs(b) < .001 && (b = 0),
                    t.browser && t.browser.need3dFix && (Math.abs(m) / 90 % 2 == 1 && (m += .001),
                    Math.abs(h) / 90 % 2 == 1 && (h += .001));
                    const y = `translate3d(${w}px,${v}px,${f}px)  rotateX(${h}deg) rotateY(${m}deg) scale(${b})`;
                    if (ue(0, s).style.transform = y,
                    s.style.zIndex = 1 - Math.abs(Math.round(u)),
                    r.slideShadows) {
                        let e = n ? s.querySelector(".swiper-slide-shadow-left") : s.querySelector(".swiper-slide-shadow-top")
                          , t = n ? s.querySelector(".swiper-slide-shadow-right") : s.querySelector(".swiper-slide-shadow-bottom");
                        e || (e = he("coverflow", s, n ? "left" : "top")),
                        t || (t = he("coverflow", s, n ? "right" : "bottom")),
                        e && (e.style.opacity = u > 0 ? u : 0),
                        t && (t.style.opacity = -u > 0 ? -u : 0)
                    }
                }
            }
            ,
            setTransition: e => {
                t.slides.map((e => h(e))).forEach((t => {
                    t.style.transitionDuration = `${e}ms`,
                    t.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }
                    ))
                }
                ))
            }
            ,
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            creativeEffect: {
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const i = e => "string" == typeof e ? e : `${e}px`;
        pe({
            effect: "creative",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e, wrapperEl: s, slidesSizesGrid: a} = t
                  , r = t.params.creativeEffect
                  , {progressMultiplier: n} = r
                  , l = t.params.centeredSlides;
                if (l) {
                    const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
                    s.style.transform = `translateX(calc(50% - ${e}px))`
                }
                for (let s = 0; s < e.length; s += 1) {
                    const a = e[s]
                      , o = a.progress
                      , d = Math.min(Math.max(a.progress, -r.limitProgress), r.limitProgress);
                    let c = d;
                    l || (c = Math.min(Math.max(a.originalProgress, -r.limitProgress), r.limitProgress));
                    const p = a.swiperSlideOffset
                      , u = [t.params.cssMode ? -p - t.translate : -p, 0, 0]
                      , m = [0, 0, 0];
                    let h = !1;
                    t.isHorizontal() || (u[1] = u[0],
                    u[0] = 0);
                    let f = {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    };
                    d < 0 ? (f = r.next,
                    h = !0) : d > 0 && (f = r.prev,
                    h = !0),
                    u.forEach(( (e, t) => {
                        u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`
                    }
                    )),
                    m.forEach(( (e, s) => {
                        let a = f.rotate[s] * Math.abs(d * n);
                        t.browser && t.browser.need3dFix && Math.abs(a) / 90 % 2 == 1 && (a += .001),
                        m[s] = a
                    }
                    )),
                    a.style.zIndex = -Math.abs(Math.round(o)) + e.length;
                    const g = u.join(", ")
                      , v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`
                      , w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`
                      , b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n
                      , y = `translate3d(${g}) ${v} ${w}`;
                    if (h && f.shadow || !h) {
                        let e = a.querySelector(".swiper-slide-shadow");
                        if (!e && f.shadow && (e = he("creative", a)),
                        e) {
                            const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                            e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const E = ue(0, a);
                    E.style.transform = y,
                    E.style.opacity = b,
                    f.origin && (E.style.transformOrigin = f.origin)
                }
            }
            ,
            setTransition: e => {
                const s = t.slides.map((e => h(e)));
                s.forEach((t => {
                    t.style.transitionDuration = `${e}ms`,
                    t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }
                    ))
                }
                )),
                me({
                    swiper: t,
                    duration: e,
                    transformElements: s,
                    allSlides: !0
                })
            }
            ,
            perspective: () => t.params.creativeEffect.perspective,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }
    , function(e) {
        let {swiper: t, extendParams: s, on: a} = e;
        s({
            cardsEffect: {
                slideShadows: !0,
                rotate: !0,
                perSlideRotate: 2,
                perSlideOffset: 8
            }
        }),
        pe({
            effect: "cards",
            swiper: t,
            on: a,
            setTranslate: () => {
                const {slides: e, activeIndex: s, rtlTranslate: a} = t
                  , i = t.params.cardsEffect
                  , {startTranslate: r, isTouched: n} = t.touchEventsData
                  , l = a ? -t.translate : t.translate;
                for (let o = 0; o < e.length; o += 1) {
                    const d = e[o]
                      , c = d.progress
                      , p = Math.min(Math.max(c, -4), 4);
                    let u = d.swiperSlideOffset;
                    t.params.centeredSlides && !t.params.cssMode && (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`),
                    t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
                    let m = t.params.cssMode ? -u - t.translate : -u
                      , h = 0;
                    const f = -100 * Math.abs(p);
                    let g = 1
                      , v = -i.perSlideRotate * p
                      , w = i.perSlideOffset - .75 * Math.abs(p);
                    const b = t.virtual && t.params.virtual.enabled ? t.virtual.from + o : o
                      , y = (b === s || b === s - 1) && p > 0 && p < 1 && (n || t.params.cssMode) && l < r
                      , E = (b === s || b === s + 1) && p < 0 && p > -1 && (n || t.params.cssMode) && l > r;
                    if (y || E) {
                        const e = (1 - Math.abs((Math.abs(p) - .5) / .5)) ** .5;
                        v += -28 * p * e,
                        g += -.5 * e,
                        w += 96 * e,
                        h = -25 * e * Math.abs(p) + "%"
                    }
                    if (m = p < 0 ? `calc(${m}px ${a ? "-" : "+"} (${w * Math.abs(p)}%))` : p > 0 ? `calc(${m}px ${a ? "-" : "+"} (-${w * Math.abs(p)}%))` : `${m}px`,
                    !t.isHorizontal()) {
                        const e = h;
                        h = m,
                        m = e
                    }
                    const x = p < 0 ? "" + (1 + (1 - g) * p) : "" + (1 - (1 - g) * p)
                      , S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${i.rotate ? a ? -v : v : 0}deg)\n        scale(${x})\n      `;
                    if (i.slideShadows) {
                        let e = d.querySelector(".swiper-slide-shadow");
                        e || (e = he("cards", d)),
                        e && (e.style.opacity = Math.min(Math.max((Math.abs(p) - .5) / .5, 0), 1))
                    }
                    d.style.zIndex = -Math.abs(Math.round(c)) + e.length;
                    ue(0, d).style.transform = S
                }
            }
            ,
            setTransition: e => {
                const s = t.slides.map((e => h(e)));
                s.forEach((t => {
                    t.style.transitionDuration = `${e}ms`,
                    t.querySelectorAll(".swiper-slide-shadow").forEach((t => {
                        t.style.transitionDuration = `${e}ms`
                    }
                    ))
                }
                )),
                me({
                    swiper: t,
                    duration: e,
                    transformElements: s
                })
            }
            ,
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode
            })
        })
    }
    ];
    return ae.use(fe),
    ae
}();
//# sourceMappingURL=swiper-bundle.min.js.map
;/*! jQuery Migrate v3.4.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e, window)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
}(function(s, n) {
    "use strict";
    function e(e) {
        return 0 <= function(e, t) {
            for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], a = 1; a <= 3; a++) {
                if (+o[a] < +n[a])
                    return 1;
                if (+n[a] < +o[a])
                    return -1
            }
            return 0
        }(s.fn.jquery, e)
    }
    s.migrateVersion = "3.4.1";
    var t = Object.create(null);
    s.migrateDisablePatches = function() {
        for (var e = 0; e < arguments.length; e++)
            t[arguments[e]] = !0
    }
    ,
    s.migrateEnablePatches = function() {
        for (var e = 0; e < arguments.length; e++)
            delete t[arguments[e]]
    }
    ,
    s.migrateIsPatchEnabled = function(e) {
        return !t[e]
    }
    ,
    n.console && n.console.log && (s && e("3.0.0") && !e("5.0.0") || n.console.log("JQMIGRATE: jQuery 3.x-4.x REQUIRED"),
    s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
    n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
    var o = {};
    function u(e, t) {
        var r = n.console;
        !s.migrateIsPatchEnabled(e) || s.migrateDeduplicateWarnings && o[t] || (o[t] = !0,
        s.migrateWarnings.push(t + " [" + e + "]"),
        r && r.warn && !s.migrateMute && (r.warn("JQMIGRATE: " + t),
        s.migrateTrace && r.trace && r.trace()))
    }
    function r(e, t, r, n, o) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return u(n, o),
                r
            },
            set: function(e) {
                u(n, o),
                r = e
            }
        })
    }
    function a(e, t, r, n, o) {
        var a = e[t];
        e[t] = function() {
            return o && u(n, o),
            (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
        }
    }
    function c(e, t, r, n, o) {
        if (!o)
            throw new Error("No warning message provided");
        return a(e, t, r, n, o),
        0
    }
    function i(e, t, r, n) {
        return a(e, t, r, n),
        0
    }
    s.migrateDeduplicateWarnings = !0,
    s.migrateWarnings = [],
    void 0 === s.migrateTrace && (s.migrateTrace = !0),
    s.migrateReset = function() {
        o = {},
        s.migrateWarnings.length = 0
    }
    ,
    "BackCompat" === n.document.compatMode && u("quirks", "jQuery is not compatible with Quirks Mode");
    var d, l, p, f = {}, m = s.fn.init, y = s.find, h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, v = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    for (d in i(s.fn, "init", function(e) {
        var t = Array.prototype.slice.call(arguments);
        return s.migrateIsPatchEnabled("selector-empty-id") && "string" == typeof e && "#" === e && (u("selector-empty-id", "jQuery( '#' ) is not a valid selector"),
        t[0] = []),
        m.apply(this, t)
    }, "selector-empty-id"),
    s.fn.init.prototype = s.fn,
    i(s, "find", function(t) {
        var r = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && h.test(t))
            try {
                n.document.querySelector(t)
            } catch (e) {
                t = t.replace(g, function(e, t, r, n) {
                    return "[" + t + r + '"' + n + '"]'
                });
                try {
                    n.document.querySelector(t),
                    u("selector-hash", "Attribute selector with '#' must be quoted: " + r[0]),
                    r[0] = t
                } catch (e) {
                    u("selector-hash", "Attribute selector with '#' was not fixed: " + r[0])
                }
            }
        return y.apply(this, r)
    }, "selector-hash"),
    y)
        Object.prototype.hasOwnProperty.call(y, d) && (s.find[d] = y[d]);
    c(s.fn, "size", function() {
        return this.length
    }, "size", "jQuery.fn.size() is deprecated and removed; use the .length property"),
    c(s, "parseJSON", function() {
        return JSON.parse.apply(null, arguments)
    }, "parseJSON", "jQuery.parseJSON is deprecated; use JSON.parse"),
    c(s, "holdReady", s.holdReady, "holdReady", "jQuery.holdReady is deprecated"),
    c(s, "unique", s.uniqueSort, "unique", "jQuery.unique is deprecated; use jQuery.uniqueSort"),
    r(s.expr, "filters", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),
    r(s.expr, ":", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),
    e("3.1.1") && c(s, "trim", function(e) {
        return null == e ? "" : (e + "").replace(v, "$1")
    }, "trim", "jQuery.trim is deprecated; use String.prototype.trim"),
    e("3.2.0") && (c(s, "nodeName", function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, "nodeName", "jQuery.nodeName is deprecated"),
    c(s, "isArray", Array.isArray, "isArray", "jQuery.isArray is deprecated; use Array.isArray")),
    e("3.3.0") && (c(s, "isNumeric", function(e) {
        var t = typeof e;
        return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
    }, "isNumeric", "jQuery.isNumeric() is deprecated"),
    s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        f["[object " + t + "]"] = t.toLowerCase()
    }),
    c(s, "type", function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[Object.prototype.toString.call(e)] || "object" : typeof e
    }, "type", "jQuery.type is deprecated"),
    c(s, "isFunction", function(e) {
        return "function" == typeof e
    }, "isFunction", "jQuery.isFunction() is deprecated"),
    c(s, "isWindow", function(e) {
        return null != e && e === e.window
    }, "isWindow", "jQuery.isWindow() is deprecated")),
    s.ajax && (l = s.ajax,
    p = /(=)\?(?=&|$)|\?\?/,
    i(s, "ajax", function() {
        var e = l.apply(this, arguments);
        return e.promise && (c(e, "success", e.done, "jqXHR-methods", "jQXHR.success is deprecated and removed"),
        c(e, "error", e.fail, "jqXHR-methods", "jQXHR.error is deprecated and removed"),
        c(e, "complete", e.always, "jqXHR-methods", "jQXHR.complete is deprecated and removed")),
        e
    }, "jqXHR-methods"),
    e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
        !1 !== e.jsonp && (p.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && p.test(e.data)) && u("jsonp-promotion", "JSON-to-JSONP auto-promotion is deprecated")
    }));
    var j = s.fn.removeAttr
      , b = s.fn.toggleClass
      , w = /\S+/g;
    function x(e) {
        return e.replace(/-([a-z])/g, function(e, t) {
            return t.toUpperCase()
        })
    }
    i(s.fn, "removeAttr", function(e) {
        var r = this
          , n = !1;
        return s.each(e.match(w), function(e, t) {
            s.expr.match.bool.test(t) && r.each(function() {
                if (!1 !== s(this).prop(t))
                    return !(n = !0)
            }),
            n && (u("removeAttr-bool", "jQuery.fn.removeAttr no longer sets boolean properties: " + t),
            r.prop(t, !1))
        }),
        j.apply(this, arguments)
    }, "removeAttr-bool"),
    i(s.fn, "toggleClass", function(t) {
        return void 0 !== t && "boolean" != typeof t ? b.apply(this, arguments) : (u("toggleClass-bool", "jQuery.fn.toggleClass( boolean ) is deprecated"),
        this.each(function() {
            var e = this.getAttribute && this.getAttribute("class") || "";
            e && s.data(this, "__className__", e),
            this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
        }))
    }, "toggleClass-bool");
    var Q, A, R = !1, C = /^[a-z]/, N = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r && (s.cssHooks[t].get = function() {
            var e;
            return R = !0,
            e = r.apply(this, arguments),
            R = !1,
            e
        }
        )
    }),
    i(s, "swap", function(e, t, r, n) {
        var o, a, i = {};
        for (a in R || u("swap", "jQuery.swap() is undocumented and deprecated"),
        t)
            i[a] = e.style[a],
            e.style[a] = t[a];
        for (a in o = r.apply(e, n || []),
        t)
            e.style[a] = i[a];
        return o
    }, "swap"),
    e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {},{
        set: function() {
            return u("cssProps", "jQuery.cssProps is deprecated"),
            Reflect.set.apply(this, arguments)
        }
    })),
    e("4.0.0") ? (A = {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
    },
    "undefined" != typeof Proxy ? s.cssNumber = new Proxy(A,{
        get: function() {
            return u("css-number", "jQuery.cssNumber is deprecated"),
            Reflect.get.apply(this, arguments)
        },
        set: function() {
            return u("css-number", "jQuery.cssNumber is deprecated"),
            Reflect.set.apply(this, arguments)
        }
    }) : s.cssNumber = A) : A = s.cssNumber,
    Q = s.fn.css,
    i(s.fn, "css", function(e, t) {
        var r, n, o = this;
        return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
            s.fn.css.call(o, e, t)
        }),
        this) : ("number" == typeof t && (r = x(e),
        n = r,
        C.test(n) && N.test(n[0].toUpperCase() + n.slice(1)) || A[r] || u("css-number", 'Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')),
        Q.apply(this, arguments))
    }, "css-number");
    var S, P, k, H, E = s.data;
    i(s, "data", function(e, t, r) {
        var n, o, a;
        if (t && "object" == typeof t && 2 === arguments.length) {
            for (a in n = s.hasData(e) && E.call(this, e),
            o = {},
            t)
                a !== x(a) ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + a),
                n[a] = t[a]) : o[a] = t[a];
            return E.call(this, e, o),
            t
        }
        return t && "string" == typeof t && t !== x(t) && (n = s.hasData(e) && E.call(this, e)) && t in n ? (u("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + t),
        2 < arguments.length && (n[t] = r),
        n[t]) : E.apply(this, arguments)
    }, "data-camelCase"),
    s.fx && (k = s.Tween.prototype.run,
    H = function(e) {
        return e
    }
    ,
    i(s.Tween.prototype, "run", function() {
        1 < s.easing[this.easing].length && (u("easing-one-arg", "'jQuery.easing." + this.easing.toString() + "' should use only one argument"),
        s.easing[this.easing] = H),
        k.apply(this, arguments)
    }, "easing-one-arg"),
    S = s.fx.interval,
    P = "jQuery.fx.interval is deprecated",
    n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return n.document.hidden || u("fx-interval", P),
            s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S
        },
        set: function(e) {
            u("fx-interval", P),
            S = e
        }
    }));
    var M = s.fn.load
      , q = s.event.add
      , O = s.event.fix;
    s.event.props = [],
    s.event.fixHooks = {},
    r(s.event.props, "concat", s.event.props.concat, "event-old-patch", "jQuery.event.props.concat() is deprecated and removed"),
    i(s.event, "fix", function(e) {
        var t, r = e.type, n = this.fixHooks[r], o = s.event.props;
        if (o.length) {
            u("event-old-patch", "jQuery.event.props are deprecated and removed: " + o.join());
            while (o.length)
                s.event.addProp(o.pop())
        }
        if (n && !n._migrated_ && (n._migrated_ = !0,
        u("event-old-patch", "jQuery.event.fixHooks are deprecated and removed: " + r),
        (o = n.props) && o.length))
            while (o.length)
                s.event.addProp(o.pop());
        return t = O.call(this, e),
        n && n.filter ? n.filter(t, e) : t
    }, "event-old-patch"),
    i(s.event, "add", function(e, t) {
        return e === n && "load" === t && "complete" === n.document.readyState && u("load-after-event", "jQuery(window).on('load'...) called after load event occurred"),
        q.apply(this, arguments)
    }, "load-after-event"),
    s.each(["load", "unload", "error"], function(e, t) {
        i(s.fn, t, function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0] ? M.apply(this, e) : (u("shorthand-removed-v3", "jQuery.fn." + t + "() is deprecated"),
            e.splice(0, 0, t),
            arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e),
            this))
        }, "shorthand-removed-v3")
    }),
    s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
        c(s.fn, r, function(e, t) {
            return 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
        }, "shorthand-deprecated-v3", "jQuery.fn." + r + "() event shorthand is deprecated")
    }),
    s(function() {
        s(n.document).triggerHandler("ready")
    }),
    s.event.special.ready = {
        setup: function() {
            this === n.document && u("ready-event", "'ready' event is deprecated")
        }
    },
    c(s.fn, "bind", function(e, t, r) {
        return this.on(e, null, t, r)
    }, "pre-on-methods", "jQuery.fn.bind() is deprecated"),
    c(s.fn, "unbind", function(e, t) {
        return this.off(e, null, t)
    }, "pre-on-methods", "jQuery.fn.unbind() is deprecated"),
    c(s.fn, "delegate", function(e, t, r, n) {
        return this.on(t, e, r, n)
    }, "pre-on-methods", "jQuery.fn.delegate() is deprecated"),
    c(s.fn, "undelegate", function(e, t, r) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
    }, "pre-on-methods", "jQuery.fn.undelegate() is deprecated"),
    c(s.fn, "hover", function(e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e)
    }, "pre-on-methods", "jQuery.fn.hover() is deprecated");
    function T(e) {
        var t = n.document.implementation.createHTMLDocument("");
        return t.body.innerHTML = e,
        t.body && t.body.innerHTML
    }
    var F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;
    s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
        s.migrateEnablePatches("self-closed-tags")
    }
    ,
    i(s, "htmlPrefilter", function(e) {
        var t, r;
        return (r = (t = e).replace(F, "<$1></$2>")) !== t && T(t) !== T(r) && u("self-closed-tags", "HTML tags must be properly nested and closed: " + t),
        e.replace(F, "<$1></$2>")
    }, "self-closed-tags"),
    s.migrateDisablePatches("self-closed-tags");
    var D, W, _, I = s.fn.offset;
    return i(s.fn, "offset", function() {
        var e = this[0];
        return !e || e.nodeType && e.getBoundingClientRect ? I.apply(this, arguments) : (u("offset-valid-elem", "jQuery.fn.offset() requires a valid DOM element"),
        arguments.length ? this : void 0)
    }, "offset-valid-elem"),
    s.ajax && (D = s.param,
    i(s, "param", function(e, t) {
        var r = s.ajaxSettings && s.ajaxSettings.traditional;
        return void 0 === t && r && (u("param-ajax-traditional", "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),
        t = r),
        D.call(this, e, t)
    }, "param-ajax-traditional")),
    c(s.fn, "andSelf", s.fn.addBack, "andSelf", "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),
    s.Deferred && (W = s.Deferred,
    _ = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]],
    i(s, "Deferred", function(e) {
        var a = W()
          , i = a.promise();
        function t() {
            var o = arguments;
            return s.Deferred(function(n) {
                s.each(_, function(e, t) {
                    var r = "function" == typeof o[e] && o[e];
                    a[t[1]](function() {
                        var e = r && r.apply(this, arguments);
                        e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                    })
                }),
                o = null
            }).promise()
        }
        return c(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
        c(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"),
        e && e.call(a, a),
        a
    }, "deferred-pipe"),
    s.Deferred.exceptionHook = W.exceptionHook),
    s
});
document.addEventListener('DOMContentLoaded', function() {
    const masthead = document.getElementById('masthead');
    const headerBtns = document.querySelectorAll('header button.header-link');
    const menusContentLayout = document.getElementById('header-menus-layout');
    const headerMenus = menusContentLayout.querySelectorAll('.header-menu-tab');
    const atlasTabLinks = menusContentLayout.querySelectorAll('.header-menu-tab[data-tab="atlas"] .atlas-tab-link');
    const atlasTabs = menusContentLayout.querySelectorAll('.header-menu-tab[data-tab="atlas"] .atlas-tab-content');
    const searchIcon = document.getElementById('search-icon');
    const searchPopup = document.getElementById('search-popup');
    function togglePageScroll(disable) {
        document.documentElement.style.overflow = disable ? 'hidden' : 'auto'
    }
    headerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            masthead.classList.add('menu-active');
            togglePageScroll(!0);
            headerBtns.forEach(item => {
                if (item === btn && !btn.classList.contains('active')) {
                    btn.classList.add('active')
                } else {
                    item.classList.remove('active')
                }
            }
            )
            const tabName = btn.dataset.tab;
            menusContentLayout.classList.remove('active');
            headerMenus.forEach( (menu) => {
                const menuName = menu.dataset.tab;
                if (menuName === tabName && !menu.classList.contains('active')) {
                    menu.classList.add('active');
                    menusContentLayout.classList.add('active')
                } else {
                    menu.classList.remove('active')
                }
            }
            )
            if (tabName === 'atlas') {
                [...atlasTabLinks].map( (item, idx) => {
                    if (idx) {
                        item.classList.remove('active')
                    } else {
                        if (window.innerWidth >= 1080) {
                            item.classList.add('active')
                        } else {
                            item.classList.remove('active')
                        }
                    }
                }
                );
                [...atlasTabs].map( (item, idx) => {
                    if (idx) {
                        item.classList.remove('active')
                    } else {
                        if (window.innerWidth >= 1080) {
                            item.classList.add('active')
                        } else {
                            item.classList.remove('active')
                        }
                    }
                }
                )
            }
            searchPopup.classList.add('hidden')
        })
    }
    )
    atlasTabLinks.forEach(link => {
        link.addEventListener('click', function() {
            const tabValue = link.dataset.value;
            atlasTabLinks.forEach(item => {
                item.classList.remove('active')
            }
            )
            link.classList.add('active');
            atlasTabs.forEach( (tab) => {
                const tabName = tab.dataset.value;
                if (tabName === tabValue) {
                    tab.classList.add('active')
                } else {
                    tab.classList.remove('active')
                }
            }
            )
        })
    }
    )
    window.addEventListener("click", function(event) {
        if (menusContentLayout && masthead) {
            if (!menusContentLayout.contains(event.target) && !masthead.contains(event.target)) {
                menusContentLayout.classList.remove('active');
                masthead.classList.remove('menu-active');
                togglePageScroll(!1);
                headerBtns.forEach(item => {
                    item.classList.remove('active')
                }
                )
                headerMenus.forEach(item => {
                    item.classList.remove('active')
                }
                )
            }
        }
    });
    const mobileMenu = document.getElementById('mobile-header-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-button');
    const mobileMenuCloseBtn = document.getElementById('mobile-menu-close-button');
    mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.add("active");
        mobileMenuBtn.style.display = 'none';
        togglePageScroll(!0);
        mobileMenuCloseBtn.style.display = 'flex'
    }
    );
    mobileMenuCloseBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        mobileMenuCloseBtn.style.display = 'none';
        togglePageScroll(!1);
        mobileMenuBtn.style.display = 'flex'
    }
    );
    const subMenusCloseBtns = menusContentLayout.querySelectorAll('.header-menu-tab .close-header-sub-menu');
    const subMenusBackBtns = menusContentLayout.querySelectorAll('.header-menu-tab .back-header-sub-menu');
    const subAtlasBackBtns = menusContentLayout.querySelectorAll('.header-menu-tab .back-header-atlas-menu');
    subMenusCloseBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            menusContentLayout.classList.remove('active');
            headerMenus.forEach( (menu) => {
                menu.classList.remove('active')
            }
            )
            mobileMenuCloseBtn.click()
        })
    }
    )
    subMenusBackBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            menusContentLayout.classList.remove('active');
            headerMenus.forEach( (menu) => {
                menu.classList.remove('active')
            }
            )
        })
    }
    )
    subAtlasBackBtns.forEach( (btn) => {
        btn.addEventListener('click', function() {
            atlasTabs.forEach( (tab) => {
                tab.classList.remove('active')
            }
            )
        })
    }
    )
    let lastScrollTop = 0;
    const hideAfter = 50;
    let isCursorOverHeader = !1;
    masthead.addEventListener('mouseenter', () => {
        isCursorOverHeader = !0
    }
    );
    masthead.addEventListener('mouseleave', () => {
        isCursorOverHeader = !1
    }
    );
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const panel = document.getElementById('wpadminbar');
        const isMenuActive = masthead.classList.contains('menu-active');
        if (scrollTop > hideAfter && !isCursorOverHeader && !isMenuActive) {
            if (scrollTop > lastScrollTop) {
                masthead.style.top = '-100px'
            } else {
                masthead.style.top = panel ? '32px' : '0'
            }
        } else {
            masthead.style.top = panel ? '32px' : '0'
        }
        lastScrollTop = scrollTop
    }
    );
    const links = document.querySelectorAll('a[href]:not(.linkInner)');
    links.forEach(link => {
        const url = new URL(link.href);
        if (url.hostname !== window.location.hostname && url.hostname !== 'wiki.voka.io' && url.hostname !== 'pharma.voka.io') {
            link.setAttribute('rel', 'nofollow noopener');
            link.setAttribute('target', '_blank')
        } else {
            link.removeAttribute('rel')
        }
    }
    );
    let clickedButtonId = null;
    document.querySelectorAll('.wpcf7-submit').forEach(function(button) {
        button.addEventListener('click', function() {
            clickedButtonId = this.id
        })
    });
    document.querySelectorAll('.wpcf7-form').forEach(function(form) {
        let formStarted = !1;
        if (!form.classList.contains('searchform')) {
            form.querySelectorAll('input, textarea, select').forEach(function(input) {
                const event = input.classList.contains('wpcf7-select') ? 'change' : 'input';
                input.addEventListener(event, function() {
                    const thankYouPopup = document.getElementById('thankYouPopup');
                    if (!form.classList.contains('searchform') && !formStarted && thankYouPopup && thankYouPopup.style.display === 'none') {
                        dataLayer.push({
                            'event': 'form_start'
                        });
                        formStarted = !0
                    }
                })
            })
        }
        const closeButtons = document.querySelectorAll('#footer_popup .box .close-btn, #header_popup .box .close-btn');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                formStarted = !1
            })
        }
        )
    });
    document.addEventListener('wpcf7mailsent', function(event) {
        dataLayer.push({
            'event': 'form_submit'
        })
    }, !1);
    const demoButtonDesktop = document.getElementById('demo-button-desktop');
    demoButtonDesktop.addEventListener("click", () => {
        const popupForm = document.getElementById('header_popup');
        popupForm.style.display = 'flex';
        document.documentElement.style.overflow = 'hidden'
    }
    );
    const languagePopup = document.getElementById("language-popup");
    document.getElementById("open-language-popup")?.addEventListener("click", function() {
        if (languagePopup) {
            languagePopup.style.display = "flex";
            document.getElementById("search-popup").classList.add('hidden')
        }
    });
    document.getElementById("close-popup")?.addEventListener("click", function() {
        if (languagePopup) {
            languagePopup.style.display = "none"
        }
    });
    window.addEventListener("click", function(event) {
        if (languagePopup) {
            if (event.target == languagePopup) {
                languagePopup.style.display = "none"
            }
        }
    });
    const langMenu = document.getElementById('lang-menu');
    const mobileLanguages = document.getElementById('languages-mobile');
    mobileLanguages.addEventListener("click", () => {
        langMenu.classList.add("active")
    }
    );
    const langCloseBtn = document.querySelector('#lang-menu .close-header-lang-menu');
    const langBackBtn = document.querySelector('#lang-menu .back-header-lang-menu');
    langCloseBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        langMenu.classList.remove("active");
        mobileMenuCloseBtn.click()
    })
    langBackBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        langMenu.classList.remove("active")
    })
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            menusContentLayout.classList.remove('active');
            masthead.classList.remove('menu-active');
            headerBtns.forEach(item => {
                item.classList.remove('active')
            }
            )
            headerMenus.forEach( (menu) => {
                menu.classList.remove('active')
            }
            )
        })
    }
    function scaleBody() {
        const baseWidth = 1920;
        const currentWidth = window.innerWidth;
        const scale = currentWidth > baseWidth ? currentWidth / baseWidth : 1;
        document.body.style.zoom = scale
    }
    scaleBody();
    window.addEventListener('resize', scaleBody);
    const supportedLocales = ['en', 'fr', 'de', 'ru'];
    const wikiLinks = document.querySelectorAll('a[href="https://wiki.voka.io/"]');
    wikiLinks.forEach(link => {
        const locale = window.location.pathname.split('/')[1] || 'en';
        const targetLocale = supportedLocales.includes(locale) ? locale : 'en';
        if (targetLocale !== 'en') {
            link.href = `https://wiki.voka.io/${targetLocale}/`
        }
        link.target = '_blank'
    }
    )
});
function getAltTextFromImageUrl(imageUrl) {
    if (typeof imageUrl !== 'string') {
        throw new Error("Переданное значение должно быть строкой.")
    }
    const urlParts = imageUrl.split('/');
    const fileName = urlParts[urlParts.length - 1];
    const fileNameWithoutExtension = fileName.split('.')[0];
    return fileNameWithoutExtension.replace(/[-_]/g, ' ')
}
window.onload = function() {
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
        const imageUrl = img.getAttribute('src');
        const altText = getAltTextFromImageUrl(imageUrl);
        img.setAttribute('alt', altText)
    }
    )
}
document.addEventListener('alt-after-fetch', (e) => {
    const block = document.getElementById(e.detail);
    if (block) {
        const images = block.querySelectorAll('img:not([alt])');
        images.forEach(img => {
            const imageUrl = img.getAttribute('src');
            const altText = getAltTextFromImageUrl(imageUrl);
            img.setAttribute('alt', altText)
        }
        )
    }
}
);
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("s");
    const clearButton = document.getElementById("clear-search");
    clearButton.addEventListener("click", function(event) {
        event.preventDefault();
        searchInput.value = "";
        searchInput.focus()
    })
});
function extractTextInHighlightedStrong(str) {
    const regex = /<strong class="highlight">.*?<\/strong>/;
    const match = str.match(regex);
    if (match && match.length > 0) {
        const innerTextRegex = /<strong class="highlight">(.*?)<\/strong>/;
        const innerMatch = match[0].match(innerTextRegex);
        if (innerMatch && innerMatch.length > 1) {
            return innerMatch[1]
        }
    }
    return null
}
function replacePunctuationWithUnicode(str) {
    if (!str)
        return '';
    let replacedStr = str;
    replacedStr = replacedStr.replaceAll(/[.]/g, "\\u002E");
    replacedStr = replacedStr.replaceAll(/[?]/g, "\\u003F");
    replacedStr = replacedStr.replaceAll(/!/g, "\\u0021");
    replacedStr = replacedStr.replaceAll(/;/g, "\\u003B");
    return replacedStr
}
function replaceUnicodeWithPunctuation(str) {
    if (!str)
        return '';
    let replacedStr = str;
    replacedStr = replacedStr.replaceAll(/\\u002E/g, ".");
    replacedStr = replacedStr.replaceAll(/\\u003F/g, "?");
    replacedStr = replacedStr.replaceAll(/\\u0021/g, "!");
    replacedStr = replacedStr.replaceAll(/\\u003B/g, ";");
    return replacedStr
}
function truncateStringWithHighlight(value, query) {
    const text = value.replaceAll("&#038;", "&").replaceAll("&#8211;", "-");
    const maxLength = window.innerWidth > 1279 ? 180 : 140;
    if (text.length < maxLength)
        return text;
    const queryWithoutPunctuation = replacePunctuationWithUnicode(query);
    const queryLower = queryWithoutPunctuation.toLowerCase().replaceAll("'", "&#039;");
    function truncateAtPunctuation(str) {
        const match = str.match(/[.?!;]\s.*/);
        if (match) {
            const index = match.index;
            return str.substring(0, index + 1)
        }
        return str
    }
    let fullStr = '';
    let fullStrWithoutTags = '';
    function recursive(str) {
        if (!str)
            return;
        const part = truncateAtPunctuation(str);
        const partWithoutTags = part.replace(/<[^>]*>/g, '');
        if (!text.toLowerCase().includes(queryLower)) {
            if ((fullStr + part).length <= maxLength || !fullStr) {
                fullStr += part;
                recursive(str.replace(part, ''))
            }
            return
        }
        if (part.toLowerCase().includes(`<strong class="highlight">${queryLower}</strong>`)) {
            fullStr += part;
            fullStrWithoutTags += partWithoutTags;
            if (fullStrWithoutTags.length < maxLength - 50) {
                recursive(str.replace(part, ''));
                return
            }
            if (fullStrWithoutTags.length >= maxLength) {
                return
            }
            recursive(str.replace(part, ''));
            return
        }
        if (fullStr) {
            if (fullStrWithoutTags.length <= maxLength - 50) {
                fullStr += part;
                fullStrWithoutTags += partWithoutTags;
                recursive(str.replace(part, ''));
                return
            } else if ((fullStrWithoutTags + partWithoutTags).length >= maxLength + 50) {
                return
            } else if ((fullStrWithoutTags + partWithoutTags).length < maxLength + 50 && (fullStrWithoutTags + partWithoutTags).length >= maxLength) {
                fullStr += part;
                fullStrWithoutTags += partWithoutTags;
                return
            } else {
                fullStr += part;
                fullStrWithoutTags += partWithoutTags;
                recursive(str.replace(part, ''));
                return
            }
        }
        recursive(str.replace(part, ''));
        return
    }
    const highlightedText = extractTextInHighlightedStrong(text);
    const textWithoutPunctuation = replacePunctuationWithUnicode(highlightedText)
    const contentText = text.replaceAll(highlightedText, textWithoutPunctuation)
    recursive(contentText);
    const result = replaceUnicodeWithPunctuation(fullStr);
    return result
}
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        const context = this;
        clearTimeout(timeoutId);
        timeoutId = setTimeout( () => {
            func.apply(context, args)
        }
        , delay)
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const quickLinks = document.getElementById('quick-links');
    const searchInput = document.getElementById("s");
    const resultsContainer = document.getElementById("search-results");
    const loaderContainer = document.getElementById("search-results-form-loader");
    const ajaxUrl = () => window.location.origin === 'http://localhost:85' ? 'http://localhost:85/wp-admin/admin-ajax.php' : `${window.location.origin}/wp-admin/admin-ajax.php`;
    searchInput.addEventListener("input", debounce(function() {
        if (quickLinks) {
            quickLinks.classList.add('hidden')
        }
        resultsContainer.classList.remove('hidden');
        const query = searchInput.value.trim();
        if (query.length < 3) {
            resultsContainer.innerHTML = "<p>Enter at least 3 characters.</p>";
            return
        }
        if (loaderContainer) {
            loaderContainer.style.display = 'block';
            resultsContainer.innerHTML = ""
        }
        fetch(ajaxUrl(), {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                action: "main_ajax_search",
                query: query,
            }),
        }).then( (response) => response.json()).then( (data) => {
            if (data.success) {
                resultsContainer.innerHTML = '<span class="small-text results-title">Results:</span>';
                let len = data.data.length;
                let results = len > 2 ? data.data.slice(0, 2) : data.data;
                resultsContainer.insertAdjacentHTML('beforeend', results.map( (item) => `<div class="search-item">
                                    <div class="search-item-header">
                                          ${item.type ? '<span class="page-type">' + item.type + '</span>' : ''} 
                                        <a href="${item.link}">
                                            <h4 data-no-translation>${item.title}</h4>
                                        </a>
                                    </div>
                                    <p class="small-text" data-no-translation>${truncateStringWithHighlight(item.content, query)}</p>
                                </div>`).join(""));
                len > 2 && resultsContainer.insertAdjacentHTML('beforeend', `<button id="all-search" data-query="${query}" class="small-button-text all-search">Show all</button>`);
                if (loaderContainer) {
                    loaderContainer.style.display = 'none'
                }
            } else {
                if (loaderContainer) {
                    loaderContainer.style.display = 'none'
                }
                resultsContainer.innerHTML = `<p>${data.data.message}</p>`
            }
        }
        ).catch( () => {
            resultsContainer.innerHTML = "<p>Произошла ошибка. Попробуйте позже.</p>"
        }
        )
    }, 500));
    const searchIcon = document.getElementById('search-icon');
    const searchPopup = document.getElementById('search-popup');
    const header = document.querySelector('header');
    const container = document.querySelector('#search-popup .container');
    const mobileSearchClose = document.getElementById('close-mobile-search');
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            searchPopup.classList.remove('hidden');
            document.documentElement.style.overflow = 'hidden'
        })
    }
    function checkMousePosition(event) {
        if (searchPopup.classList.contains('hidden'))
            return;
        const isOutside = !header.contains(event.target) && !container.contains(event.target);
        if (isOutside) {
            searchPopup.classList.add('hidden');
            document.documentElement.style.overflow = 'auto';
            searchInput.value = '';
            if (loaderContainer) {
                loaderContainer.style.display = 'none'
            }
            if (quickLinks) {
                quickLinks.classList.remove('hidden')
            }
            resultsContainer.classList.add('hidden');
            resultsContainer.innerHTML = ''
        }
    }
    mobileSearchClose.addEventListener('click', () => {
        searchPopup.classList.add('hidden');
        document.documentElement.style.overflow = 'auto'
    }
    )
    document.addEventListener('mousemove', checkMousePosition)
});
document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'all-search') {
        const query = event.target.getAttribute('data-query');
        if (query) {
            if (allLangs?.languages) {
                const currentLang = Object.entries(allLangs.languages).find( ([key,val]) => window.location.href === val.current_page_url);
                if (currentLang?.length) {
                    const lang = currentLang[1].short_language_name;
                    if (lang === 'en') {
                        window.location.href = window.location.origin + '/?s=' + encodeURIComponent(query)
                    } else {
                        window.location.href = window.location.origin + '/' + lang + '/?s=' + encodeURIComponent(query)
                    }
                }
            } else {
                window.location.href = '/?s=' + encodeURIComponent(query)
            }
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    function calculateSpacing() {
        const masthead = document.getElementById('masthead');
        const spacing = document.getElementById('spacing');
        spacing.style.height = `${masthead.getBoundingClientRect().height}px`
    }
    calculateSpacing();
    window.addEventListener('resize', calculateSpacing)
});
(function() {
    const buttonsAddedEvent = new Event('buttonsAdded');
    document.dispatchEvent(buttonsAddedEvent)
}
)();
document.addEventListener('DOMContentLoaded', function() {
    const backgroundImageElement = document.querySelector('.image-background img');
    function setBackgroundImageSource() {
        let imageUrl;
        if (window.innerWidth <= 576) {
            imageUrl = "https://storage.googleapis.com/dev_resources_voka_io_303011/common/product_bg_mob_2.webp"
        } else if (window.innerWidth <= 1078) {
            imageUrl = "https://storage.googleapis.com/dev_resources_voka_io_303011/common/product_bg_mob.webp"
        } else if (window.innerWidth < 1440) {
            imageUrl = "https://storage.googleapis.com/dev_resources_voka_io_303011/common/product_middle_bg_new.webp"
        } else {
            imageUrl = "https://storage.googleapis.com/dev_resources_voka_io_303011/common/product_bg.webp"
        }
        backgroundImageElement.src = imageUrl
    }
    setBackgroundImageSource();
    window.addEventListener('resize', setBackgroundImageSource)
});
const fieldMapping = {
    "3D model customization": {
        clientGoal: '',
        interestType: '3D models',
        subject: 'Customization',
    },
    "Custom 3D models": {
        clientGoal: '',
        interestType: 'Custom Model',
        subject: '',
    },
    "Ready-made 3D models": {
        clientGoal: '',
        interestType: '3D models',
        subject: '',
    },
    "Technical support": {
        clientGoal: '',
        interestType: '',
        subject: 'Support and enhancement',
    },
    "Pricing, billing & licensing": {
        clientGoal: '',
        interestType: 'Licensing',
        subject: '',
    },
    "Custom development inquiry": {
        clientGoal: '',
        interestType: '',
        subject: 'Custom development inquiry',
    },
    'Ready-made animations': {
        clientGoal: '',
        interestType: '3D animation',
        subject: '',
    },
    'Custom 3D animations': {
        clientGoal: '',
        interestType: 'Custom Animation',
        subject: '',
    },
    'Customization': {
        clientGoal: '',
        interestType: 'Custom Animation',
        subject: 'Customization',
    },
    'Partnership': {
        clientGoal: 'Partnership',
        interestType: '',
        subject: '',
    },
    'Other': {
        clientGoal: 'Other',
        interestType: 'Other',
        subject: 'Other',
    }
};
function showToast(toast) {
    toast.classList.add('active');
    setTimeout( () => {
        toast.classList.remove('active')
    }
    , 3000)
}
function formatFileSize(bytes) {
    if (bytes === 0)
        return '0 B';
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
    const k = 1024;
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const size = (bytes / Math.pow(k, i)).toFixed(2);
    const formattedSize = parseFloat(size).toString();
    return `${formattedSize} ${units[i]}`
}
function autoResizeTextarea(textarea, counterElement, numberElement) {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight + 2}px`;
    const length = textarea.value.trim().length;
    if (numberElement) {
        numberElement.textContent = length
    }
    if (counterElement) {
        if (length < 100) {
            if (counterElement.classList.contains('green')) {
                counterElement.classList.add('orange');
                counterElement.classList.remove('green')
            }
        } else {
            if (counterElement.classList.contains('orange')) {
                counterElement.classList.add('green');
                counterElement.classList.remove('orange')
            }
        }
    }
}
const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'];
const maxSize = 15 * 1024 * 1024;
function validateFile(file) {
    if (!allowedTypes.includes(file.type)) {
        return 'Invalid file format'
    }
    if (file.size > maxSize) {
        return 'File size cannot exceed 15 MB'
    }
    return null
}
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    links.forEach(e => {
        e.addEventListener('click', event => {
            const title = e.getAttribute("title");
            if (title === "request-demo" || e.hash === "#popup-with-subject") {
                event.preventDefault();
                const popupFooter = document.getElementById('footer_popup');
                popupFooter.style.display = 'block';
                document.documentElement.style.overflow = 'hidden'
            }
        }
        )
    }
    );
    const allowedLanguages = ['ar', 'he', 'fil'];
    let userLanguage = localStorage.getItem('userLanguage');
    const newUserLanguage = (navigator.language || navigator.userLanguage).split('-')[0];
    if (!userLanguage || userLanguage !== newUserLanguage) {
        userLanguage = newUserLanguage;
        localStorage.setItem('userLanguage', userLanguage)
    }
    if (links && !allowedLanguages.includes(userLanguage)) {
        links.forEach(elem => {
            const title = elem.getAttribute("title");
            if (title === 'countries-redirect') {
                elem.style.display = 'none';
                elem.parentNode.style.display = 'none'
            }
        }
        )
    }
}
)
function attachListeners() {
    const cards = document.querySelectorAll('.footer-section p');
    cards.forEach( (card) => {
        card.addEventListener('click', toggleActive)
    }
    )
}
function detachListeners() {
    const cards = document.querySelectorAll('.footer-section p');
    cards.forEach( (card) => {
        card.removeEventListener('click', toggleActive)
    }
    )
}
function toggleActive(event) {
    event.currentTarget.parentNode.classList.toggle('active')
}
function handleResize() {
    if (window.innerWidth <= 1079) {
        attachListeners()
    } else {
        detachListeners()
    }
}
handleResize();
window.addEventListener('resize', handleResize);
document.addEventListener("DOMContentLoaded", function() {
    let storageKey = 'initial_referrer';
    if (!sessionStorage.getItem(storageKey)) {
        let referrer = document.referrer || window.location.href;
        sessionStorage.setItem(storageKey, referrer)
    }
    function getCookie(name) {
        let value = "; " + document.cookie;
        let parts = value.split("; " + name + "=");
        if (parts.length === 2)
            return parts.pop().split(";").shift()
    }
    let utmSource = getCookie('utm_source');
    let utmMedium = getCookie('utm_medium');
    let utmCampaign = getCookie('utm_campaign');
    let utmTerm = getCookie('utm_term');
    let utmContent = getCookie('utm_content');
    let referrerUrl = sessionStorage.getItem(storageKey);
    function setFieldValues(name, value) {
        document.querySelectorAll(`[name="${name}"]`).forEach(field => {
            if (field.tagName.toLowerCase() === 'input' && (field.type === 'text' || field.type === 'hidden')) {
                field.value = value
            } else if (field.tagName.toLowerCase() === 'textarea') {
                field.value = value
            } else if (field.tagName.toLowerCase() === 'select') {
                field.value = value
            }
        }
        )
    }
    if (utmSource)
        setFieldValues('utmSource', utmSource);
    if (utmMedium)
        setFieldValues('utmMedium', utmMedium);
    if (utmCampaign)
        setFieldValues('utmCampaign', utmCampaign);
    if (utmTerm)
        setFieldValues('utmTerm', utmTerm);
    if (utmContent)
        setFieldValues('utmContent', utmContent);
    if (referrerUrl)
        setFieldValues('referrerUrl', referrerUrl);
    setFieldValues('formUrl', window.location.href)
});
document.addEventListener('DOMContentLoaded', function() {
    const contactItems = document.querySelectorAll('.contact-mobile-item');
    const toast = document.getElementById('toast-footer');
    if (!toast || !contactItems)
        return;
    contactItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            if (window.innerWidth < 1080) {
                event.preventDefault();
                const textToCopy = this.querySelector('span')?.innerText;
                if (textToCopy) {
                    navigator.clipboard.writeText(textToCopy).then( () => {
                        showToast(toast)
                    }
                    )
                }
            }
        })
    });
    const toastCloseIcon = document.getElementById('toast-footer-close');
    if (toastCloseIcon) {
        toastCloseIcon.addEventListener('click', function() {
            toast.classList.remove('active')
        })
    }
});
function toggleAnimationTypeField(subjectSelect, field) {
    const selectedValue = subjectSelect.value;
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    if (selectedValue === 'Ready-made animations' || selectedValue === 'Custom 3D animations') {
        field.style.display = isRtl ? 'flex' : 'block';
        const label = field.querySelector('.wpcf7-list-item.first .wpcf7-list-item-label');
        label.previousElementSibling.checked = !1;
        label.classList.remove('chip-selected')
    } else {
        field.style.display = 'none';
        const wrapper = field.closest('.wpcf7-form');
        const radioButtonsError = wrapper.querySelector("p:has(.chip-radio) .wpcf7-not-valid-tip");
        if (radioButtonsError) {
            radioButtonsError.style.display = 'none'
        }
        const labels = field.querySelectorAll('.wpcf7-list-item-label');
        labels.forEach(l => {
            if (l.previousElementSibling.value !== 'Not selected') {
                l.previousElementSibling.checked = !1;
                l.classList.remove('chip-selected')
            } else {
                l.previousElementSibling.checked = !0;
                l.classList.add('chip-selected')
            }
        }
        )
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const textareaCounterHtml = `<div class="textarea-footer">
                <p class="textarea-tip">At least 100 characters required</p>
                <p class="textarea-counter">
                    <span class="textarea-highlight orange"><span class="count">0</span> character(s)</span> (minimum 100 characters)
                </p>
            </div>`;
    const subjectElements = document.querySelectorAll("form.wpcf7-form select");
    for (const elem of subjectElements) {
        const firstOption = elem.querySelector('option:first-child');
        firstOption.textContent = '';
        firstOption.setAttribute('value', '');
        firstOption.setAttribute('disabled', !0);
        firstOption.setAttribute('selected', !0)
    }
    const popups = document.querySelectorAll("#footer_popup, #header_popup");
    for (const popup of popups) {
        const form = popup.querySelector('.wpcf7-form');
        const textareaContainer = form.querySelector('.middle-fields>p:has(textarea)');
        if (textareaContainer) {
            textareaContainer.insertAdjacentHTML('beforeend', textareaCounterHtml)
        }
        const closePopupButton = popup.querySelector('.close-btn');
        const radioButtonsBlocks = form.querySelectorAll(".top-fields>p:has(.chip-radio)");
        const formControls = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
        const submitControl = form.querySelector('input[type="submit"], button[type="submit"]');
        if (submitControl) {
            form.addEventListener('submit', function() {
                submitControl.disabled = !0
            });
            form.addEventListener('wpcf7submit', function(event) {
                submitControl.disabled = !1
            })
        }
        const selectControl = form.querySelector('select');
        const interestType = form.querySelector('input[name="interest-type"]');
        const clientGoal = form.querySelector('input[name="client-goal"]');
        const subject = form.querySelector('input[name="subject-sales"]');
        const focusedClass = "focused";
        for (const formControl of formControls) {
            formControl.addEventListener("focus", function() {
                this.parentElement.previousElementSibling.classList.add(focusedClass)
            });
            formControl.addEventListener("blur", function() {
                if (!this.value) {
                    this.parentElement.previousElementSibling.classList.remove(focusedClass)
                }
            })
        }
        if (selectControl.value) {
            selectControl.parentElement.previousElementSibling.classList.add(focusedClass)
        }
        const textarea = form.querySelector('textarea');
        const number = popup.querySelector('.textarea-counter .count');
        const counter = popup.querySelector('.textarea-highlight');
        autoResizeTextarea(textarea, counter, number);
        textarea.addEventListener('input', function() {
            autoResizeTextarea(this, counter, number)
        });
        textarea.addEventListener('paste', function() {
            autoResizeTextarea(this, counter, number)
        });
        if (radioButtonsBlocks.length) {
            for (const elem of radioButtonsBlocks) {
                toggleAnimationTypeField(selectControl, elem)
            }
        }
        selectControl.addEventListener("change", function() {
            if (this.value) {
                this.parentElement.previousElementSibling.classList.add(focusedClass)
            } else {
                this.parentElement.previousElementSibling.classList.remove(focusedClass)
            }
            if (radioButtonsBlocks.length) {
                for (const elem of radioButtonsBlocks) {
                    toggleAnimationTypeField(this, elem)
                }
            }
            const value = this.value;
            if (interestType)
                interestType.value = '';
            if (clientGoal)
                clientGoal.value = '';
            if (subject)
                subject.value = '';
            if (!selectControl.classList.contains('started')) {
                selectControl.classList.add('started')
            }
            const mapping = fieldMapping[value] || {
                interestType: '',
                clientGoal: '',
                subject: ''
            };
            if (interestType)
                interestType.value = mapping.interestType;
            if (clientGoal)
                clientGoal.value = mapping.clientGoal;
            if (subject)
                subject.value = mapping.subject
        });
        selectControl.addEventListener("blur", function() {
            if (!this.value) {
                this.parentElement.previousElementSibling.classList.remove(focusedClass)
            }
        });
        form.parentElement.addEventListener("wpcf7submit", function() {
            const labels = form.querySelectorAll("label.focused");
            for (const label of labels) {
                const elem = document.getElementById(label.getAttribute('for'));
                if (elem && !elem?.value) {
                    label.classList.remove(focusedClass)
                }
            }
        });
        form.parentElement.addEventListener("wpcf7invalid", function() {
            const labels = form.querySelectorAll("label.focused");
            for (const label of labels) {
                const elem = document.getElementById(label.getAttribute('for'));
                if (elem?.tagName === 'SELECT' && elem.value) {
                    label.classList.add(focusedClass)
                } else if (elem && !elem?.value) {
                    label.classList.remove(focusedClass)
                }
            }
        });
        const fileInput = form.querySelector('input[type="file"]');
        const dragDropArea = form.querySelector('.file-wrapper');
        const dragDropLabel = dragDropArea.querySelector('p.label');
        const dragDropMobileLabel = dragDropArea.querySelector('p.mobile-label');
        const dragDropSize = dragDropArea.querySelector('p.max-size');
        const errorElement = dragDropArea.querySelector('.file-error');
        if (fileInput) {
            const dragDropCloseBtn = form.closest('.form-container').querySelector('.remove-file');
            dragDropArea.addEventListener('click', () => {
                if (!fileInput.files.length) {
                    fileInput.click()
                }
            }
            )
            dragDropCloseBtn.addEventListener('click', resetFileArea);
            function showError(message) {
                errorElement.textContent = message;
                errorElement.style.display = 'block';
                setTimeout( () => {
                    errorElement.style.display = 'none';
                    errorElement.textContent = ''
                }
                , 5000)
            }
            fileInput.addEventListener('change', e => {
                const file = e.target.files[0];
                if (file) {
                    const error = validateFile(file);
                    if (error) {
                        showError(error);
                        resetFileArea()
                    } else {
                        handleFileChange(file)
                    }
                } else {
                    resetFileArea()
                }
            }
            );
            function handleFileChange(file) {
                dragDropArea.classList.add('drag-drop-success');
                dragDropMobileLabel.innerHTML = file.name;
                dragDropLabel.innerHTML = file.name;
                dragDropSize.innerHTML = formatFileSize(file.size)
            }
            function resetFileArea() {
                fileInput.value = '';
                dragDropArea.classList.remove('drag-drop-success');
                dragDropMobileLabel.innerHTML = 'Upload file';
                dragDropLabel.innerHTML = 'Drop a file here or <span class="browse">browse</span>';
                dragDropSize.innerHTML = 'PNG, JPG, PDF, GIF, WEBP, SVG (max. 15MB)'
            }
            form.addEventListener('wpcf7mailsent', resetFileArea);
            if (window.innerWidth >= 1280) {
                ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                    dragDropArea.addEventListener(eventName, preventDefaults, !1)
                }
                );
                function preventDefaults(e) {
                    e.preventDefault();
                    e.stopPropagation()
                }
                ['dragenter', 'dragover'].forEach(eventName => {
                    dragDropArea.addEventListener(eventName, () => {
                        dragDropArea.classList.add('drag-active')
                    }
                    )
                }
                );
                ['dragleave', 'drop'].forEach(eventName => {
                    dragDropArea.addEventListener(eventName, () => {
                        dragDropArea.classList.remove('drag-active')
                    }
                    )
                }
                );
                dragDropArea.addEventListener('drop', e => {
                    const file = e.dataTransfer.files[0];
                    if (file) {
                        const error = validateFile(file);
                        if (error) {
                            showError(error);
                            resetFileArea()
                        } else {
                            fileInput.files = e.dataTransfer.files;
                            handleFileChange(file)
                        }
                    }
                }
                )
            }
        }
        const radioButtons = form.querySelectorAll(".chip-radio");
        if (radioButtons.length) {
            for (const elem of radioButtons) {
                const labels = elem.querySelectorAll('.wpcf7-list-item-label');
                labels.forEach(label => {
                    label.addEventListener('click', function() {
                        const wrapper = label.closest('.wpcf7-form');
                        const radioButtonsError = wrapper.querySelector("p:has(.chip-radio) .wpcf7-not-valid-tip");
                        if (radioButtonsError) {
                            radioButtonsError.style.display = 'none'
                        }
                        labels.forEach(l => {
                            l.classList.remove('chip-selected')
                            l.previousElementSibling.checked = !1
                        }
                        );
                        this.classList.add('chip-selected');
                        this.previousElementSibling.checked = !0
                    })
                }
                )
            }
        }
        if (popup && form && closePopupButton) {
            closePopupButton.addEventListener("click", function() {
                popup.style.display = 'none';
                document.documentElement.style.overflow = 'auto';
                form.reset();
                textarea.style.height = '60px';
                fileInput.value = '';
                dragDropArea.classList.remove('drag-drop-success');
                dragDropMobileLabel.innerHTML = 'Upload file';
                dragDropLabel.innerHTML = 'Drop a file here or <span class="browse">browse</span>';
                dragDropSize.innerHTML = 'PNG, JPG, PDF, GIF, WEBP, SVG (max. 15MB)';
                if (selectControl && selectControl.options.length > 0) {
                    selectControl.value = "";
                    const event = new Event("change",{
                        bubbles: !0
                    });
                    selectControl.dispatchEvent(event)
                }
                setTimeout( () => {
                    const invalidFields = form.querySelectorAll(".wpcf7-not-valid");
                    invalidFields.forEach(function(field) {
                        field.classList.remove("wpcf7-not-valid")
                    });
                    const labels = form.querySelectorAll("label.focused");
                    for (const label of labels) {
                        const elem = document.getElementById(label.getAttribute('for'));
                        if (elem && !elem?.value) {
                            label.classList.remove(focusedClass)
                        }
                    }
                    const errorMessages = form.querySelectorAll(".wpcf7-not-valid-tip");
                    errorMessages.forEach(function(msg) {
                        msg.remove()
                    })
                }
                , 300)
            })
        }
        document.addEventListener('wpcf7mailsent', function(event) {
            if (popup)
                popup.style.display = 'none';
            document.getElementById('thankYouPopup').style.display = 'flex';
            const labels = document.querySelectorAll(".app-demo-popup form.wpcf7-form label.focused");
            for (const label of labels) {
                const elem = document.getElementById(label.getAttribute('for'));
                if (!elem?.value) {
                    label.classList.remove(focusedClass)
                }
            }
            form.reset();
            const counter = popup.querySelector('.textarea-counter>span');
            counter.classList.remove('green');
            counter.classList.add('orange');
            counter.querySelector('.count').textContent = 0;
            textarea.style.height = '60px';
            if (selectControl && selectControl.options.length > 0) {
                selectControl.value = "";
                interestType.value = '';
                clientGoal.value = '';
                subject.value = '';
                const event = new Event("change",{
                    bubbles: !0
                });
                selectControl.dispatchEvent(event);
                selectControl.classList.remove('started')
            }
        })
        document.getElementById('thankYouPopup').addEventListener('click', function(e) {
            if (e.target === this) {
                if (popup)
                    popup.style.display = 'none';
                this.style.display = 'none'
            }
        })
    }
    function closeConfirmPopup() {
        document.getElementById('thankYouPopup').style.display = 'none';
        document.documentElement.style.overflow = 'auto';
        document.querySelectorAll('.wpcf7-form').forEach(form => form.reset())
    }
    document.getElementById('close-thankyou-popup-btn').addEventListener('click', closeConfirmPopup)
    document.getElementById('footer-close-btn-thanks').addEventListener('click', closeConfirmPopup)
});
/*! This file is auto-generated */
( () => {
    "use strict";
    var t = {
        d: (e, n) => {
            for (var r in n)
                t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: n[r]
                })
        }
        ,
        o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
        r: t => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
    }
      , e = {};
    t.r(e),
    t.d(e, {
        actions: () => P,
        addAction: () => A,
        addFilter: () => m,
        applyFilters: () => w,
        applyFiltersAsync: () => I,
        createHooks: () => h,
        currentAction: () => x,
        currentFilter: () => T,
        defaultHooks: () => f,
        didAction: () => j,
        didFilter: () => z,
        doAction: () => g,
        doActionAsync: () => k,
        doingAction: () => O,
        doingFilter: () => S,
        filters: () => Z,
        hasAction: () => _,
        hasFilter: () => v,
        removeAction: () => p,
        removeAllActions: () => F,
        removeAllFilters: () => b,
        removeFilter: () => y
    });
    const n = function(t) {
        return "string" != typeof t || "" === t ? (console.error("The namespace must be a non-empty string."),
        !1) : !!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(t) || (console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),
        !1)
    };
    const r = function(t) {
        return "string" != typeof t || "" === t ? (console.error("The hook name must be a non-empty string."),
        !1) : /^__/.test(t) ? (console.error("The hook name cannot begin with `__`."),
        !1) : !!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(t) || (console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),
        !1)
    };
    const o = function(t, e) {
        return function(o, i, s, c=10) {
            const l = t[e];
            if (!r(o))
                return;
            if (!n(i))
                return;
            if ("function" != typeof s)
                return void console.error("The hook callback must be a function.");
            if ("number" != typeof c)
                return void console.error("If specified, the hook priority must be a number.");
            const a = {
                callback: s,
                priority: c,
                namespace: i
            };
            if (l[o]) {
                const t = l[o].handlers;
                let e;
                for (e = t.length; e > 0 && !(c >= t[e - 1].priority); e--)
                    ;
                e === t.length ? t[e] = a : t.splice(e, 0, a),
                l.__current.forEach((t => {
                    t.name === o && t.currentIndex >= e && t.currentIndex++
                }
                ))
            } else
                l[o] = {
                    handlers: [a],
                    runs: 0
                };
            "hookAdded" !== o && t.doAction("hookAdded", o, i, s, c)
        }
    };
    const i = function(t, e, o=!1) {
        return function(i, s) {
            const c = t[e];
            if (!r(i))
                return;
            if (!o && !n(s))
                return;
            if (!c[i])
                return 0;
            let l = 0;
            if (o)
                l = c[i].handlers.length,
                c[i] = {
                    runs: c[i].runs,
                    handlers: []
                };
            else {
                const t = c[i].handlers;
                for (let e = t.length - 1; e >= 0; e--)
                    t[e].namespace === s && (t.splice(e, 1),
                    l++,
                    c.__current.forEach((t => {
                        t.name === i && t.currentIndex >= e && t.currentIndex--
                    }
                    )))
            }
            return "hookRemoved" !== i && t.doAction("hookRemoved", i, s),
            l
        }
    };
    const s = function(t, e) {
        return function(n, r) {
            const o = t[e];
            return void 0 !== r ? n in o && o[n].handlers.some((t => t.namespace === r)) : n in o
        }
    };
    const c = function(t, e, n, r) {
        return function(o, ...i) {
            const s = t[e];
            s[o] || (s[o] = {
                handlers: [],
                runs: 0
            }),
            s[o].runs++;
            const c = s[o].handlers;
            if (!c || !c.length)
                return n ? i[0] : void 0;
            const l = {
                name: o,
                currentIndex: 0
            };
            return (r ? async function() {
                try {
                    s.__current.add(l);
                    let t = n ? i[0] : void 0;
                    for (; l.currentIndex < c.length; ) {
                        const e = c[l.currentIndex];
                        t = await e.callback.apply(null, i),
                        n && (i[0] = t),
                        l.currentIndex++
                    }
                    return n ? t : void 0
                } finally {
                    s.__current.delete(l)
                }
            }
            : function() {
                try {
                    s.__current.add(l);
                    let t = n ? i[0] : void 0;
                    for (; l.currentIndex < c.length; ) {
                        t = c[l.currentIndex].callback.apply(null, i),
                        n && (i[0] = t),
                        l.currentIndex++
                    }
                    return n ? t : void 0
                } finally {
                    s.__current.delete(l)
                }
            }
            )()
        }
    };
    const l = function(t, e) {
        return function() {
            var n;
            const r = t[e]
              , o = Array.from(r.__current);
            return null !== (n = o.at(-1)?.name) && void 0 !== n ? n : null
        }
    };
    const a = function(t, e) {
        return function(n) {
            const r = t[e];
            return void 0 === n ? r.__current.size > 0 : Array.from(r.__current).some((t => t.name === n))
        }
    };
    const u = function(t, e) {
        return function(n) {
            const o = t[e];
            if (r(n))
                return o[n] && o[n].runs ? o[n].runs : 0
        }
    };
    class d {
        constructor() {
            this.actions = Object.create(null),
            this.actions.__current = new Set,
            this.filters = Object.create(null),
            this.filters.__current = new Set,
            this.addAction = o(this, "actions"),
            this.addFilter = o(this, "filters"),
            this.removeAction = i(this, "actions"),
            this.removeFilter = i(this, "filters"),
            this.hasAction = s(this, "actions"),
            this.hasFilter = s(this, "filters"),
            this.removeAllActions = i(this, "actions", !0),
            this.removeAllFilters = i(this, "filters", !0),
            this.doAction = c(this, "actions", !1, !1),
            this.doActionAsync = c(this, "actions", !1, !0),
            this.applyFilters = c(this, "filters", !0, !1),
            this.applyFiltersAsync = c(this, "filters", !0, !0),
            this.currentAction = l(this, "actions"),
            this.currentFilter = l(this, "filters"),
            this.doingAction = a(this, "actions"),
            this.doingFilter = a(this, "filters"),
            this.didAction = u(this, "actions"),
            this.didFilter = u(this, "filters")
        }
    }
    const h = function() {
        return new d
    }
      , f = h()
      , {addAction: A, addFilter: m, removeAction: p, removeFilter: y, hasAction: _, hasFilter: v, removeAllActions: F, removeAllFilters: b, doAction: g, doActionAsync: k, applyFilters: w, applyFiltersAsync: I, currentAction: x, currentFilter: T, doingAction: O, doingFilter: S, didAction: j, didFilter: z, actions: P, filters: Z} = f;
    (window.wp = window.wp || {}).hooks = e
}
)();
/*! This file is auto-generated */
( () => {
    var t = {
        2058: (t, e, r) => {
            var n;
            !function() {
                "use strict";
                var i = {
                    not_string: /[^s]/,
                    not_bool: /[^t]/,
                    not_type: /[^T]/,
                    not_primitive: /[^v]/,
                    number: /[diefg]/,
                    numeric_arg: /[bcdiefguxX]/,
                    json: /[j]/,
                    not_json: /[^j]/,
                    text: /^[^\x25]+/,
                    modulo: /^\x25{2}/,
                    placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
                    key: /^([a-z_][a-z_\d]*)/i,
                    key_access: /^\.([a-z_][a-z_\d]*)/i,
                    index_access: /^\[(\d+)\]/,
                    sign: /^[+-]/
                };
                function a(t) {
                    return function(t, e) {
                        var r, n, o, s, l, u, p, c, f, d = 1, h = t.length, g = "";
                        for (n = 0; n < h; n++)
                            if ("string" == typeof t[n])
                                g += t[n];
                            else if ("object" == typeof t[n]) {
                                if ((s = t[n]).keys)
                                    for (r = e[d],
                                    o = 0; o < s.keys.length; o++) {
                                        if (null == r)
                                            throw new Error(a('[sprintf] Cannot access property "%s" of undefined value "%s"', s.keys[o], s.keys[o - 1]));
                                        r = r[s.keys[o]]
                                    }
                                else
                                    r = s.param_no ? e[s.param_no] : e[d++];
                                if (i.not_type.test(s.type) && i.not_primitive.test(s.type) && r instanceof Function && (r = r()),
                                i.numeric_arg.test(s.type) && "number" != typeof r && isNaN(r))
                                    throw new TypeError(a("[sprintf] expecting number but found %T", r));
                                switch (i.number.test(s.type) && (c = r >= 0),
                                s.type) {
                                case "b":
                                    r = parseInt(r, 10).toString(2);
                                    break;
                                case "c":
                                    r = String.fromCharCode(parseInt(r, 10));
                                    break;
                                case "d":
                                case "i":
                                    r = parseInt(r, 10);
                                    break;
                                case "j":
                                    r = JSON.stringify(r, null, s.width ? parseInt(s.width) : 0);
                                    break;
                                case "e":
                                    r = s.precision ? parseFloat(r).toExponential(s.precision) : parseFloat(r).toExponential();
                                    break;
                                case "f":
                                    r = s.precision ? parseFloat(r).toFixed(s.precision) : parseFloat(r);
                                    break;
                                case "g":
                                    r = s.precision ? String(Number(r.toPrecision(s.precision))) : parseFloat(r);
                                    break;
                                case "o":
                                    r = (parseInt(r, 10) >>> 0).toString(8);
                                    break;
                                case "s":
                                    r = String(r),
                                    r = s.precision ? r.substring(0, s.precision) : r;
                                    break;
                                case "t":
                                    r = String(!!r),
                                    r = s.precision ? r.substring(0, s.precision) : r;
                                    break;
                                case "T":
                                    r = Object.prototype.toString.call(r).slice(8, -1).toLowerCase(),
                                    r = s.precision ? r.substring(0, s.precision) : r;
                                    break;
                                case "u":
                                    r = parseInt(r, 10) >>> 0;
                                    break;
                                case "v":
                                    r = r.valueOf(),
                                    r = s.precision ? r.substring(0, s.precision) : r;
                                    break;
                                case "x":
                                    r = (parseInt(r, 10) >>> 0).toString(16);
                                    break;
                                case "X":
                                    r = (parseInt(r, 10) >>> 0).toString(16).toUpperCase()
                                }
                                i.json.test(s.type) ? g += r : (!i.number.test(s.type) || c && !s.sign ? f = "" : (f = c ? "+" : "-",
                                r = r.toString().replace(i.sign, "")),
                                u = s.pad_char ? "0" === s.pad_char ? "0" : s.pad_char.charAt(1) : " ",
                                p = s.width - (f + r).length,
                                l = s.width && p > 0 ? u.repeat(p) : "",
                                g += s.align ? f + r + l : "0" === u ? f + l + r : l + f + r)
                            }
                        return g
                    }(function(t) {
                        if (s[t])
                            return s[t];
                        var e, r = t, n = [], a = 0;
                        for (; r; ) {
                            if (null !== (e = i.text.exec(r)))
                                n.push(e[0]);
                            else if (null !== (e = i.modulo.exec(r)))
                                n.push("%");
                            else {
                                if (null === (e = i.placeholder.exec(r)))
                                    throw new SyntaxError("[sprintf] unexpected placeholder");
                                if (e[2]) {
                                    a |= 1;
                                    var o = []
                                      , l = e[2]
                                      , u = [];
                                    if (null === (u = i.key.exec(l)))
                                        throw new SyntaxError("[sprintf] failed to parse named argument key");
                                    for (o.push(u[1]); "" !== (l = l.substring(u[0].length)); )
                                        if (null !== (u = i.key_access.exec(l)))
                                            o.push(u[1]);
                                        else {
                                            if (null === (u = i.index_access.exec(l)))
                                                throw new SyntaxError("[sprintf] failed to parse named argument key");
                                            o.push(u[1])
                                        }
                                    e[2] = o
                                } else
                                    a |= 2;
                                if (3 === a)
                                    throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
                                n.push({
                                    placeholder: e[0],
                                    param_no: e[1],
                                    keys: e[2],
                                    sign: e[3],
                                    pad_char: e[4],
                                    align: e[5],
                                    width: e[6],
                                    precision: e[7],
                                    type: e[8]
                                })
                            }
                            r = r.substring(e[0].length)
                        }
                        return s[t] = n
                    }(t), arguments)
                }
                function o(t, e) {
                    return a.apply(null, [t].concat(e || []))
                }
                var s = Object.create(null);
                e.sprintf = a,
                e.vsprintf = o,
                "undefined" != typeof window && (window.sprintf = a,
                window.vsprintf = o,
                void 0 === (n = function() {
                    return {
                        sprintf: a,
                        vsprintf: o
                    }
                }
                .call(e, r, e, t)) || (t.exports = n))
            }()
        }
    }
      , e = {};
    function r(n) {
        var i = e[n];
        if (void 0 !== i)
            return i.exports;
        var a = e[n] = {
            exports: {}
        };
        return t[n](a, a.exports, r),
        a.exports
    }
    r.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return r.d(e, {
            a: e
        }),
        e
    }
    ,
    r.d = (t, e) => {
        for (var n in e)
            r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: e[n]
            })
    }
    ,
    r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
    r.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ;
    var n = {};
    ( () => {
        "use strict";
        r.r(n),
        r.d(n, {
            __: () => F,
            _n: () => j,
            _nx: () => L,
            _x: () => S,
            createI18n: () => x,
            defaultI18n: () => _,
            getLocaleData: () => v,
            hasTranslation: () => D,
            isRTL: () => T,
            resetLocaleData: () => w,
            setLocaleData: () => m,
            sprintf: () => a,
            subscribe: () => k
        });
        var t = r(2058)
          , e = r.n(t);
        const i = function(t, e) {
            var r, n, i = 0;
            function a() {
                var a, o, s = r, l = arguments.length;
                t: for (; s; ) {
                    if (s.args.length === arguments.length) {
                        for (o = 0; o < l; o++)
                            if (s.args[o] !== arguments[o]) {
                                s = s.next;
                                continue t
                            }
                        return s !== r && (s === n && (n = s.prev),
                        s.prev.next = s.next,
                        s.next && (s.next.prev = s.prev),
                        s.next = r,
                        s.prev = null,
                        r.prev = s,
                        r = s),
                        s.val
                    }
                    s = s.next
                }
                for (a = new Array(l),
                o = 0; o < l; o++)
                    a[o] = arguments[o];
                return s = {
                    args: a,
                    val: t.apply(null, a)
                },
                r ? (r.prev = s,
                s.next = r) : n = s,
                i === e.maxSize ? (n = n.prev).next = null : i++,
                r = s,
                s.val
            }
            return e = e || {},
            a.clear = function() {
                r = null,
                n = null,
                i = 0
            }
            ,
            a
        }(console.error);
        function a(t, ...r) {
            try {
                return e().sprintf(t, ...r)
            } catch (e) {
                return e instanceof Error && i("sprintf error: \n\n" + e.toString()),
                t
            }
        }
        var o, s, l, u;
        o = {
            "(": 9,
            "!": 8,
            "*": 7,
            "/": 7,
            "%": 7,
            "+": 6,
            "-": 6,
            "<": 5,
            "<=": 5,
            ">": 5,
            ">=": 5,
            "==": 4,
            "!=": 4,
            "&&": 3,
            "||": 2,
            "?": 1,
            "?:": 1
        },
        s = ["(", "?"],
        l = {
            ")": ["("],
            ":": ["?", "?:"]
        },
        u = /<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;
        var p = {
            "!": function(t) {
                return !t
            },
            "*": function(t, e) {
                return t * e
            },
            "/": function(t, e) {
                return t / e
            },
            "%": function(t, e) {
                return t % e
            },
            "+": function(t, e) {
                return t + e
            },
            "-": function(t, e) {
                return t - e
            },
            "<": function(t, e) {
                return t < e
            },
            "<=": function(t, e) {
                return t <= e
            },
            ">": function(t, e) {
                return t > e
            },
            ">=": function(t, e) {
                return t >= e
            },
            "==": function(t, e) {
                return t === e
            },
            "!=": function(t, e) {
                return t !== e
            },
            "&&": function(t, e) {
                return t && e
            },
            "||": function(t, e) {
                return t || e
            },
            "?:": function(t, e, r) {
                if (t)
                    throw e;
                return r
            }
        };
        function c(t) {
            var e = function(t) {
                for (var e, r, n, i, a = [], p = []; e = t.match(u); ) {
                    for (r = e[0],
                    (n = t.substr(0, e.index).trim()) && a.push(n); i = p.pop(); ) {
                        if (l[r]) {
                            if (l[r][0] === i) {
                                r = l[r][1] || r;
                                break
                            }
                        } else if (s.indexOf(i) >= 0 || o[i] < o[r]) {
                            p.push(i);
                            break
                        }
                        a.push(i)
                    }
                    l[r] || p.push(r),
                    t = t.substr(e.index + r.length)
                }
                return (t = t.trim()) && a.push(t),
                a.concat(p.reverse())
            }(t);
            return function(t) {
                return function(t, e) {
                    var r, n, i, a, o, s, l = [];
                    for (r = 0; r < t.length; r++) {
                        if (o = t[r],
                        a = p[o]) {
                            for (n = a.length,
                            i = Array(n); n--; )
                                i[n] = l.pop();
                            try {
                                s = a.apply(null, i)
                            } catch (t) {
                                return t
                            }
                        } else
                            s = e.hasOwnProperty(o) ? e[o] : +o;
                        l.push(s)
                    }
                    return l[0]
                }(e, t)
            }
        }
        var f = {
            contextDelimiter: "",
            onMissingKey: null
        };
        function d(t, e) {
            var r;
            for (r in this.data = t,
            this.pluralForms = {},
            this.options = {},
            f)
                this.options[r] = void 0 !== e && r in e ? e[r] : f[r]
        }
        d.prototype.getPluralForm = function(t, e) {
            var r, n, i, a = this.pluralForms[t];
            return a || ("function" != typeof (i = (r = this.data[t][""])["Plural-Forms"] || r["plural-forms"] || r.plural_forms) && (n = function(t) {
                var e, r, n;
                for (e = t.split(";"),
                r = 0; r < e.length; r++)
                    if (0 === (n = e[r].trim()).indexOf("plural="))
                        return n.substr(7)
            }(r["Plural-Forms"] || r["plural-forms"] || r.plural_forms),
            i = function(t) {
                var e = c(t);
                return function(t) {
                    return +e({
                        n: t
                    })
                }
            }(n)),
            a = this.pluralForms[t] = i),
            a(e)
        }
        ,
        d.prototype.dcnpgettext = function(t, e, r, n, i) {
            var a, o, s;
            return a = void 0 === i ? 0 : this.getPluralForm(t, i),
            o = r,
            e && (o = e + this.options.contextDelimiter + r),
            (s = this.data[t][o]) && s[a] ? s[a] : (this.options.onMissingKey && this.options.onMissingKey(r, t),
            0 === a ? r : n)
        }
        ;
        const h = {
            plural_forms: t => 1 === t ? 0 : 1
        }
          , g = /^i18n\.(n?gettext|has_translation)(_|$)/
          , x = (t, e, r) => {
            const n = new d({})
              , i = new Set
              , a = () => {
                i.forEach((t => t()))
            }
              , o = (t, e="default") => {
                n.data[e] = {
                    ...n.data[e],
                    ...t
                },
                n.data[e][""] = {
                    ...h,
                    ...n.data[e]?.[""]
                },
                delete n.pluralForms[e]
            }
              , s = (t, e) => {
                o(t, e),
                a()
            }
              , l = (t="default", e, r, i, a) => (n.data[t] || o(void 0, t),
            n.dcnpgettext(t, e, r, i, a))
              , u = (t="default") => t
              , p = (t, e, n) => {
                let i = l(n, e, t);
                return r ? (i = r.applyFilters("i18n.gettext_with_context", i, t, e, n),
                r.applyFilters("i18n.gettext_with_context_" + u(n), i, t, e, n)) : i
            }
            ;
            if (t && s(t, e),
            r) {
                const t = t => {
                    g.test(t) && a()
                }
                ;
                r.addAction("hookAdded", "core/i18n", t),
                r.addAction("hookRemoved", "core/i18n", t)
            }
            return {
                getLocaleData: (t="default") => n.data[t],
                setLocaleData: s,
                addLocaleData: (t, e="default") => {
                    n.data[e] = {
                        ...n.data[e],
                        ...t,
                        "": {
                            ...h,
                            ...n.data[e]?.[""],
                            ...t?.[""]
                        }
                    },
                    delete n.pluralForms[e],
                    a()
                }
                ,
                resetLocaleData: (t, e) => {
                    n.data = {},
                    n.pluralForms = {},
                    s(t, e)
                }
                ,
                subscribe: t => (i.add(t),
                () => i.delete(t)),
                __: (t, e) => {
                    let n = l(e, void 0, t);
                    return r ? (n = r.applyFilters("i18n.gettext", n, t, e),
                    r.applyFilters("i18n.gettext_" + u(e), n, t, e)) : n
                }
                ,
                _x: p,
                _n: (t, e, n, i) => {
                    let a = l(i, void 0, t, e, n);
                    return r ? (a = r.applyFilters("i18n.ngettext", a, t, e, n, i),
                    r.applyFilters("i18n.ngettext_" + u(i), a, t, e, n, i)) : a
                }
                ,
                _nx: (t, e, n, i, a) => {
                    let o = l(a, i, t, e, n);
                    return r ? (o = r.applyFilters("i18n.ngettext_with_context", o, t, e, n, i, a),
                    r.applyFilters("i18n.ngettext_with_context_" + u(a), o, t, e, n, i, a)) : o
                }
                ,
                isRTL: () => "rtl" === p("ltr", "text direction"),
                hasTranslation: (t, e, i) => {
                    const a = e ? e + "" + t : t;
                    let o = !!n.data?.[null != i ? i : "default"]?.[a];
                    return r && (o = r.applyFilters("i18n.has_translation", o, t, e, i),
                    o = r.applyFilters("i18n.has_translation_" + u(i), o, t, e, i)),
                    o
                }
            }
        }
          , y = window.wp.hooks
          , b = x(void 0, void 0, y.defaultHooks)
          , _ = b
          , v = b.getLocaleData.bind(b)
          , m = b.setLocaleData.bind(b)
          , w = b.resetLocaleData.bind(b)
          , k = b.subscribe.bind(b)
          , F = b.__.bind(b)
          , S = b._x.bind(b)
          , j = b._n.bind(b)
          , L = b._nx.bind(b)
          , T = b.isRTL.bind(b)
          , D = b.hasTranslation.bind(b)
    }
    )(),
    (window.wp = window.wp || {}).i18n = n
}
)();
wp.i18n.setLocaleData({
    'text direction\u0004ltr': ['ltr']
});
( () => {
    "use strict";
    var t = {
        d: (e, i) => {
            for (var s in i)
                t.o(i, s) && !t.o(e, s) && Object.defineProperty(e, s, {
                    enumerable: !0,
                    get: i[s]
                })
        }
        ,
        o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
        r: t => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
    }
      , e = {};
    function i(t) {
        if (this.formData = {},
        this.tree = {},
        !(t instanceof FormData))
            return this;
        this.formData = t;
        const e = () => {
            const t = new Map;
            return t.largestIndex = 0,
            t.set = function(e, i) {
                "" === e ? e = t.largestIndex++ : /^[0-9]+$/.test(e) && (e = parseInt(e),
                t.largestIndex <= e && (t.largestIndex = e + 1)),
                Map.prototype.set.call(t, e, i)
            }
            ,
            t
        }
        ;
        this.tree = e();
        const i = /^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;
        for (const [t,s] of this.formData) {
            const o = t.match(i);
            if (o)
                if ("" === o.groups.array)
                    this.tree.set(o.groups.name, s);
                else {
                    const t = [...o.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi)].map(( ([t,e]) => e));
                    t.unshift(o.groups.name);
                    const i = t.pop();
                    t.reduce(( (t, i) => {
                        if (/^[0-9]+$/.test(i) && (i = parseInt(i)),
                        t.get(i)instanceof Map)
                            return t.get(i);
                        const s = e();
                        return t.set(i, s),
                        s
                    }
                    ), this.tree).set(i, s)
                }
        }
    }
    t.r(e),
    t.d(e, {
        all: () => D,
        any: () => M,
        date: () => m,
        dayofweek: () => u,
        email: () => r,
        enum: () => h,
        file: () => d,
        maxdate: () => z,
        maxfilesize: () => j,
        maxitems: () => v,
        maxlength: () => x,
        maxnumber: () => y,
        mindate: () => A,
        minfilesize: () => $,
        minitems: () => w,
        minlength: () => g,
        minnumber: () => b,
        number: () => c,
        required: () => n,
        requiredfile: () => a,
        stepnumber: () => I,
        tel: () => l,
        time: () => f,
        url: () => p
    }),
    i.prototype.entries = function() {
        return this.tree.entries()
    }
    ,
    i.prototype.get = function(t) {
        return this.tree.get(t)
    }
    ,
    i.prototype.getAll = function(t) {
        if (!this.has(t))
            return [];
        const e = t => {
            const i = [];
            if (t instanceof Map)
                for (const [s,o] of t)
                    i.push(...e(o));
            else
                "" !== t && i.push(t);
            return i
        }
        ;
        return e(this.get(t))
    }
    ,
    i.prototype.has = function(t) {
        return this.tree.has(t)
    }
    ,
    i.prototype.keys = function() {
        return this.tree.keys()
    }
    ,
    i.prototype.values = function() {
        return this.tree.values()
    }
    ;
    const s = i;
    function o({rule: t, field: e, error: i, ...s}) {
        this.rule = t,
        this.field = e,
        this.error = i,
        this.properties = s
    }
    const n = function(t) {
        if (0 === t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).length)
            throw new o(this)
    }
      , a = function(t) {
        if (0 === t.getAll(this.field).length)
            throw new o(this)
    }
      , r = function(t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => {
            if (t.length < 6)
                return !1;
            if (-1 === t.indexOf("@", 1))
                return !1;
            if (t.indexOf("@") !== t.lastIndexOf("@"))
                return !1;
            const [e,i] = t.split("@", 2);
            if (!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(e))
                return !1;
            if (/\.{2,}/.test(i))
                return !1;
            if (/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(i))
                return !1;
            const s = i.split(".");
            if (s.length < 2)
                return !1;
            for (const t of s) {
                if (/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(t))
                    return !1;
                if (!/^[a-z0-9-]+$/i.test(t))
                    return !1
            }
            return !0
        }
        )))
            throw new o(this)
    }
      , p = function(t) {
        const e = t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t));
        if (!e.every((t => {
            try {
                return (t => -1 !== ["http", "https", "ftp", "ftps", "mailto", "news", "irc", "irc6", "ircs", "gopher", "nntp", "feed", "telnet", "mms", "rtsp", "sms", "svn", "tel", "fax", "xmpp", "webcal", "urn"].indexOf(t))(new URL(t).protocol.replace(/:$/, ""))
            } catch {
                return !1
            }
        }
        )))
            throw new o(this)
    }
      , l = function(t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => (((t = (t = t.replace(/[#*].*$/, "")).replaceAll(/[()/.*#\s-]+/g, "")).startsWith("+") || t.startsWith("00")) && (t = `+${t.replace(/^[+0]+/, "")}`),
        !!/^[+]?[0-9]+$/.test(t) && 5 < t.length && t.length < 16))))
            throw new o(this)
    }
      , c = function(t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => !!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t) || !!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t))))
            throw new o(this)
    }
      , m = function(t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => {
            if (!/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t))
                return !1;
            const e = new Date(t);
            return !Number.isNaN(e.valueOf())
        }
        )))
            throw new o(this)
    }
      , f = function(t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => {
            const e = t.match(/^([0-9]{2})\:([0-9]{2})(?:\:([0-9]{2}))?$/);
            if (!e)
                return !1;
            const i = parseInt(e[1])
              , s = parseInt(e[2])
              , o = e[3] ? parseInt(e[3]) : 0;
            return 0 <= i && i <= 23 && 0 <= s && s <= 59 && 0 <= o && o <= 59
        }
        )))
            throw new o(this)
    }
      , d = function(t) {
        if (!t.getAll(this.field).every((t => t instanceof File && this.accept?.some((e => /^\.[a-z0-9]+$/i.test(e) ? t.name.toLowerCase().endsWith(e.toLowerCase()) : (t => {
            const e = []
              , i = t.match(/^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i);
            if (i) {
                const t = i.groups.toplevel.toLowerCase()
                  , s = i.groups.sub.toLowerCase();
                for (const [o,n] of ( () => {
                    const t = new Map;
                    return t.set("jpg|jpeg|jpe", "image/jpeg"),
                    t.set("gif", "image/gif"),
                    t.set("png", "image/png"),
                    t.set("bmp", "image/bmp"),
                    t.set("tiff|tif", "image/tiff"),
                    t.set("webp", "image/webp"),
                    t.set("ico", "image/x-icon"),
                    t.set("heic", "image/heic"),
                    t.set("asf|asx", "video/x-ms-asf"),
                    t.set("wmv", "video/x-ms-wmv"),
                    t.set("wmx", "video/x-ms-wmx"),
                    t.set("wm", "video/x-ms-wm"),
                    t.set("avi", "video/avi"),
                    t.set("divx", "video/divx"),
                    t.set("flv", "video/x-flv"),
                    t.set("mov|qt", "video/quicktime"),
                    t.set("mpeg|mpg|mpe", "video/mpeg"),
                    t.set("mp4|m4v", "video/mp4"),
                    t.set("ogv", "video/ogg"),
                    t.set("webm", "video/webm"),
                    t.set("mkv", "video/x-matroska"),
                    t.set("3gp|3gpp", "video/3gpp"),
                    t.set("3g2|3gp2", "video/3gpp2"),
                    t.set("txt|asc|c|cc|h|srt", "text/plain"),
                    t.set("csv", "text/csv"),
                    t.set("tsv", "text/tab-separated-values"),
                    t.set("ics", "text/calendar"),
                    t.set("rtx", "text/richtext"),
                    t.set("css", "text/css"),
                    t.set("htm|html", "text/html"),
                    t.set("vtt", "text/vtt"),
                    t.set("dfxp", "application/ttaf+xml"),
                    t.set("mp3|m4a|m4b", "audio/mpeg"),
                    t.set("aac", "audio/aac"),
                    t.set("ra|ram", "audio/x-realaudio"),
                    t.set("wav", "audio/wav"),
                    t.set("ogg|oga", "audio/ogg"),
                    t.set("flac", "audio/flac"),
                    t.set("mid|midi", "audio/midi"),
                    t.set("wma", "audio/x-ms-wma"),
                    t.set("wax", "audio/x-ms-wax"),
                    t.set("mka", "audio/x-matroska"),
                    t.set("rtf", "application/rtf"),
                    t.set("js", "application/javascript"),
                    t.set("pdf", "application/pdf"),
                    t.set("swf", "application/x-shockwave-flash"),
                    t.set("class", "application/java"),
                    t.set("tar", "application/x-tar"),
                    t.set("zip", "application/zip"),
                    t.set("gz|gzip", "application/x-gzip"),
                    t.set("rar", "application/rar"),
                    t.set("7z", "application/x-7z-compressed"),
                    t.set("exe", "application/x-msdownload"),
                    t.set("psd", "application/octet-stream"),
                    t.set("xcf", "application/octet-stream"),
                    t.set("doc", "application/msword"),
                    t.set("pot|pps|ppt", "application/vnd.ms-powerpoint"),
                    t.set("wri", "application/vnd.ms-write"),
                    t.set("xla|xls|xlt|xlw", "application/vnd.ms-excel"),
                    t.set("mdb", "application/vnd.ms-access"),
                    t.set("mpp", "application/vnd.ms-project"),
                    t.set("docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"),
                    t.set("docm", "application/vnd.ms-word.document.macroEnabled.12"),
                    t.set("dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"),
                    t.set("dotm", "application/vnd.ms-word.template.macroEnabled.12"),
                    t.set("xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),
                    t.set("xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"),
                    t.set("xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"),
                    t.set("xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"),
                    t.set("xltm", "application/vnd.ms-excel.template.macroEnabled.12"),
                    t.set("xlam", "application/vnd.ms-excel.addin.macroEnabled.12"),
                    t.set("pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"),
                    t.set("pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"),
                    t.set("ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"),
                    t.set("ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"),
                    t.set("potx", "application/vnd.openxmlformats-officedocument.presentationml.template"),
                    t.set("potm", "application/vnd.ms-powerpoint.template.macroEnabled.12"),
                    t.set("ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"),
                    t.set("sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"),
                    t.set("sldm", "application/vnd.ms-powerpoint.slide.macroEnabled.12"),
                    t.set("onetoc|onetoc2|onetmp|onepkg", "application/onenote"),
                    t.set("oxps", "application/oxps"),
                    t.set("xps", "application/vnd.ms-xpsdocument"),
                    t.set("odt", "application/vnd.oasis.opendocument.text"),
                    t.set("odp", "application/vnd.oasis.opendocument.presentation"),
                    t.set("ods", "application/vnd.oasis.opendocument.spreadsheet"),
                    t.set("odg", "application/vnd.oasis.opendocument.graphics"),
                    t.set("odc", "application/vnd.oasis.opendocument.chart"),
                    t.set("odb", "application/vnd.oasis.opendocument.database"),
                    t.set("odf", "application/vnd.oasis.opendocument.formula"),
                    t.set("wp|wpd", "application/wordperfect"),
                    t.set("key", "application/vnd.apple.keynote"),
                    t.set("numbers", "application/vnd.apple.numbers"),
                    t.set("pages", "application/vnd.apple.pages"),
                    t
                }
                )())
                    ("*" === s && n.startsWith(t + "/") || n === i[0]) && e.push(...o.split("|"))
            }
            return e
        }
        )(e).some((e => (e = "." + e.trim(),
        t.name.toLowerCase().endsWith(e.toLowerCase())))))))))
            throw new o(this)
    }
      , h = function(t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => this.accept?.some((e => t === String(e))))))
            throw new o(this)
    }
      , u = function(t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => {
            const e = 0 === (i = new Date(t).getDay()) ? 7 : i;
            var i;
            return this.accept?.some((t => e === parseInt(t)))
        }
        )))
            throw new o(this)
    }
      , w = function(t) {
        if (t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).length < parseInt(this.threshold))
            throw new o(this)
    }
      , v = function(t) {
        const e = t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t));
        if (parseInt(this.threshold) < e.length)
            throw new o(this)
    }
      , g = function(t) {
        const e = t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t));
        let i = 0;
        if (e.forEach((t => {
            "string" == typeof t && (i += t.length)
        }
        )),
        0 !== i && i < parseInt(this.threshold))
            throw new o(this)
    }
      , x = function(t) {
        const e = t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t));
        let i = 0;
        if (e.forEach((t => {
            "string" == typeof t && (i += t.length)
        }
        )),
        parseInt(this.threshold) < i)
            throw new o(this)
    }
      , b = function(t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => !(parseFloat(t) < parseFloat(this.threshold)))))
            throw new o(this)
    }
      , y = function(t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => !(parseFloat(this.threshold) < parseFloat(t)))))
            throw new o(this)
    }
      , A = function(t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => !(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) && /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) && t < this.threshold))))
            throw new o(this)
    }
      , z = function(t) {
        if (!t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t)).every((t => !(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) && /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) && this.threshold < t))))
            throw new o(this)
    }
      , $ = function(t) {
        const e = t.getAll(this.field);
        let i = 0;
        if (e.forEach((t => {
            t instanceof File && (i += t.size)
        }
        )),
        i < parseInt(this.threshold))
            throw new o(this)
    }
      , j = function(t) {
        const e = t.getAll(this.field);
        let i = 0;
        if (e.forEach((t => {
            t instanceof File && (i += t.size)
        }
        )),
        parseInt(this.threshold) < i)
            throw new o(this)
    }
      , I = function(t) {
        const e = t.getAll(this.field).map((t => t.trim())).filter((t => "" !== t))
          , i = parseFloat(this.base)
          , s = parseFloat(this.interval);
        if (!(0 < s))
            return !0;
        if (!e.every((t => {
            const e = (parseFloat(t) - i) % s;
            return "0.000000" === Math.abs(e).toFixed(6) || "0.000000" === Math.abs(e - s).toFixed(6)
        }
        )))
            throw new o(this)
    }
      , O = ({ruleObj: t, options: i}) => {
        const {rule: s, ...o} = t;
        return "function" == typeof e[s] && ("function" != typeof e[s].matches || e[s].matches(o, i))
    }
      , E = ({ruleObj: t, formDataTree: i, options: s}) => {
        const {rule: o} = t;
        e[o].call(t, i, s)
    }
      , k = []
      , F = t => [...k].reduce(( (t, e) => i => e(i, t)), t)
      , D = function(t, e={}) {
        const i = (this.rules ?? []).filter((t => O({
            ruleObj: t,
            options: e
        })))
          , s = F(E);
        if (!i.every((i => {
            try {
                s({
                    ruleObj: i,
                    formDataTree: t,
                    options: e
                })
            } catch (t) {
                if (!(t instanceof o))
                    throw t;
                if (void 0 !== t.error)
                    throw t;
                return !1
            }
            return !0
        }
        )))
            throw new o(this)
    }
      , M = function(t, e={}) {
        const i = (this.rules ?? []).filter((t => O({
            ruleObj: t,
            options: e
        })))
          , s = F(E);
        if (!i.some((i => {
            try {
                s({
                    ruleObj: i,
                    formDataTree: t,
                    options: e
                })
            } catch (t) {
                if (!(t instanceof o))
                    throw t;
                return !1
            }
            return !0
        }
        )))
            throw new o(this)
    };
    var L;
    window.swv = {
        validators: e,
        validate: (t, e, i={}) => {
            const n = (t.rules ?? []).filter((t => O({
                ruleObj: t,
                options: i
            })));
            if (!n.length)
                return new Map;
            const a = F(E)
              , r = new s(e)
              , p = n.reduce(( (t, e) => {
                try {
                    a({
                        ruleObj: e,
                        formDataTree: r,
                        options: i
                    })
                } catch (e) {
                    if (!(e instanceof o))
                        throw e;
                    if (void 0 !== e.field && !t.has(e.field) && void 0 !== e.error)
                        return t.set(e.field, e)
                }
                return t
            }
            ), new Map);
            for (const t of r.keys())
                p.has(t) || p.set(t, {
                    validInputs: r.getAll(t)
                });
            return p
        }
        ,
        use: t => {
            k.push(t)
        }
        ,
        ...null !== (L = window.swv) && void 0 !== L ? L : {}
    }
}
)();
var wpcf7 = {
    "api": {
        "root": "https:\/\/voka.io\/wp-json\/",
        "namespace": "contact-form-7\/v1"
    },
    "cached": 1
};
( () => {
    "use strict";
    const e = window.wp.i18n
      , t = e => Math.abs(parseInt(e, 10))
      , a = (e, t, a) => {
        const n = new CustomEvent(`wpcf7${t}`,{
            bubbles: !0,
            detail: a
        });
        "string" == typeof e && (e = document.querySelector(e)),
        e.dispatchEvent(n)
    }
      , n = (e, t) => {
        const n = new Map([["init", "init"], ["validation_failed", "invalid"], ["acceptance_missing", "unaccepted"], ["spam", "spam"], ["aborted", "aborted"], ["mail_sent", "sent"], ["mail_failed", "failed"], ["submitting", "submitting"], ["resetting", "resetting"], ["validating", "validating"], ["payment_required", "payment-required"]]);
        n.has(t) && (t = n.get(t)),
        Array.from(n.values()).includes(t) || (t = `custom-${t = (t = t.replace(/[^0-9a-z]+/i, " ").trim()).replace(/\s+/, "-")}`);
        const r = e.getAttribute("data-status");
        if (e.wpcf7.status = t,
        e.setAttribute("data-status", t),
        e.classList.add(t),
        r && r !== t) {
            e.classList.remove(r);
            const t = {
                contactFormId: e.wpcf7.id,
                pluginVersion: e.wpcf7.pluginVersion,
                contactFormLocale: e.wpcf7.locale,
                unitTag: e.wpcf7.unitTag,
                containerPostId: e.wpcf7.containerPost,
                status: e.wpcf7.status,
                prevStatus: r
            };
            a(e, "statuschanged", t)
        }
        return t
    }
      , r = e => {
        const {root: t, namespace: a="contact-form-7/v1"} = wpcf7.api;
        return c.reduceRight(( (e, t) => a => t(a, e)), (e => {
            let n, r, {url: c, path: o, endpoint: s, headers: i, body: l, data: p, ...d} = e;
            "string" == typeof s && (n = a.replace(/^\/|\/$/g, ""),
            r = s.replace(/^\//, ""),
            o = r ? n + "/" + r : n),
            "string" == typeof o && (-1 !== t.indexOf("?") && (o = o.replace("?", "&")),
            o = o.replace(/^\//, ""),
            c = t + o),
            i = {
                Accept: "application/json, */*;q=0.1",
                ...i
            },
            delete i["X-WP-Nonce"],
            p && (l = JSON.stringify(p),
            i["Content-Type"] = "application/json");
            const f = {
                code: "fetch_error",
                message: "You are probably offline."
            }
              , u = {
                code: "invalid_json",
                message: "The response is not a valid JSON response."
            };
            return window.fetch(c || o || window.location.href, {
                ...d,
                headers: i,
                body: l
            }).then((e => Promise.resolve(e).then((e => {
                if (e.status >= 200 && e.status < 300)
                    return e;
                throw e
            }
            )).then((e => {
                if (204 === e.status)
                    return null;
                if (e && e.json)
                    return e.json().catch(( () => {
                        throw u
                    }
                    ));
                throw u
            }
            ))), ( () => {
                throw f
            }
            ))
        }
        ))(e)
    }
      , c = [];
    function o(e, t={}) {
        const {target: a, scope: r=e, ...c} = t;
        if (void 0 === e.wpcf7?.schema)
            return;
        const o = {
            ...e.wpcf7.schema
        };
        if (void 0 !== a) {
            if (!e.contains(a))
                return;
            if (!a.closest(".wpcf7-form-control-wrap[data-name]"))
                return;
            if (a.closest(".novalidate"))
                return
        }
        const p = r.querySelectorAll(".wpcf7-form-control-wrap")
          , d = Array.from(p).reduce(( (e, t) => (t.closest(".novalidate") || t.querySelectorAll(":where( input, textarea, select ):enabled").forEach((t => {
            if (t.name)
                switch (t.type) {
                case "button":
                case "image":
                case "reset":
                case "submit":
                    break;
                case "checkbox":
                case "radio":
                    t.checked && e.append(t.name, t.value);
                    break;
                case "select-multiple":
                    for (const a of t.selectedOptions)
                        e.append(t.name, a.value);
                    break;
                case "file":
                    for (const a of t.files)
                        e.append(t.name, a);
                    break;
                default:
                    e.append(t.name, t.value)
                }
        }
        )),
        e)), new FormData)
          , f = e.getAttribute("data-status");
        Promise.resolve(n(e, "validating")).then((n => {
            if (void 0 !== swv) {
                const n = swv.validate(o, d, t);
                for (const t of p) {
                    if (void 0 === t.dataset.name)
                        continue;
                    const c = t.dataset.name;
                    if (n.has(c)) {
                        const {error: t, validInputs: a} = n.get(c);
                        i(e, c),
                        void 0 !== t && s(e, c, t, {
                            scope: r
                        }),
                        l(e, c, null != a ? a : [])
                    }
                    if (t.contains(a))
                        break
                }
            }
        }
        )).finally(( () => {
            n(e, f)
        }
        ))
    }
    r.use = e => {
        c.unshift(e)
    }
    ;
    const s = (e, t, a, n) => {
        const {scope: r=e, ...c} = null != n ? n : {}
          , o = `${e.wpcf7?.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, "")
          , s = e.querySelector(`.wpcf7-form-control-wrap[data-name="${t}"] .wpcf7-form-control`);
        ( () => {
            const t = document.createElement("li");
            t.setAttribute("id", o),
            s && s.id ? t.insertAdjacentHTML("beforeend", `<a href="#${s.id}">${a}</a>`) : t.insertAdjacentText("beforeend", a),
            e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(t)
        }
        )(),
        r.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e => {
            const t = document.createElement("span");
            t.classList.add("wpcf7-not-valid-tip"),
            t.setAttribute("aria-hidden", "true"),
            t.insertAdjacentText("beforeend", a),
            e.appendChild(t),
            e.querySelectorAll("[aria-invalid]").forEach((e => {
                e.setAttribute("aria-invalid", "true")
            }
            )),
            e.querySelectorAll(".wpcf7-form-control").forEach((e => {
                e.classList.add("wpcf7-not-valid"),
                e.setAttribute("aria-describedby", o),
                "function" == typeof e.setCustomValidity && e.setCustomValidity(a),
                e.closest(".use-floating-validation-tip") && (e.addEventListener("focus", (e => {
                    t.setAttribute("style", "display: none")
                }
                )),
                t.addEventListener("click", (e => {
                    t.setAttribute("style", "display: none")
                }
                )))
            }
            ))
        }
        ))
    }
      , i = (e, t) => {
        const a = `${e.wpcf7?.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, "");
        e.wpcf7.parent.querySelector(`.screen-reader-response ul li#${a}`)?.remove(),
        e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e => {
            e.querySelector(".wpcf7-not-valid-tip")?.remove(),
            e.querySelectorAll("[aria-invalid]").forEach((e => {
                e.setAttribute("aria-invalid", "false")
            }
            )),
            e.querySelectorAll(".wpcf7-form-control").forEach((e => {
                e.removeAttribute("aria-describedby"),
                e.classList.remove("wpcf7-not-valid"),
                "function" == typeof e.setCustomValidity && e.setCustomValidity("")
            }
            ))
        }
        ))
    }
      , l = (e, t, a) => {
        e.querySelectorAll(`[data-reflection-of="${t}"]`).forEach((e => {
            if ("output" === e.tagName.toLowerCase()) {
                const t = e;
                0 === a.length && a.push(t.dataset.default),
                a.slice(0, 1).forEach((e => {
                    e instanceof File && (e = e.name),
                    t.textContent = e
                }
                ))
            } else
                e.querySelectorAll("output").forEach((e => {
                    e.hasAttribute("data-default") ? 0 === a.length ? e.removeAttribute("hidden") : e.setAttribute("hidden", "hidden") : e.remove()
                }
                )),
                a.forEach((a => {
                    a instanceof File && (a = a.name);
                    const n = document.createElement("output");
                    n.setAttribute("name", t),
                    n.textContent = a,
                    e.appendChild(n)
                }
                ))
        }
        ))
    }
    ;
    function p(e, t={}) {
        if (wpcf7.blocked)
            return d(e),
            void n(e, "submitting");
        const c = new FormData(e);
        t.submitter && t.submitter.name && c.append(t.submitter.name, t.submitter.value);
        const o = {
            contactFormId: e.wpcf7.id,
            pluginVersion: e.wpcf7.pluginVersion,
            contactFormLocale: e.wpcf7.locale,
            unitTag: e.wpcf7.unitTag,
            containerPostId: e.wpcf7.containerPost,
            status: e.wpcf7.status,
            inputs: Array.from(c, (e => {
                const t = e[0]
                  , a = e[1];
                return !t.match(/^_/) && {
                    name: t,
                    value: a
                }
            }
            )).filter((e => !1 !== e)),
            formData: c
        };
        r({
            endpoint: `contact-forms/${e.wpcf7.id}/feedback`,
            method: "POST",
            body: c,
            wpcf7: {
                endpoint: "feedback",
                form: e,
                detail: o
            }
        }).then((t => {
            const r = n(e, t.status);
            return o.status = t.status,
            o.apiResponse = t,
            ["invalid", "unaccepted", "spam", "aborted"].includes(r) ? a(e, r, o) : ["sent", "failed"].includes(r) && a(e, `mail${r}`, o),
            a(e, "submit", o),
            t
        }
        )).then((t => {
            t.posted_data_hash && (e.querySelector('input[name="_wpcf7_posted_data_hash"]').value = t.posted_data_hash),
            "mail_sent" === t.status && (e.reset(),
            e.wpcf7.resetOnMailSent = !0),
            t.invalid_fields && t.invalid_fields.forEach((t => {
                s(e, t.field, t.message)
            }
            )),
            e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend", t.message),
            e.querySelectorAll(".wpcf7-response-output").forEach((e => {
                e.innerText = t.message
            }
            ))
        }
        )).catch((e => console.error(e)))
    }
    r.use(( (e, t) => {
        if (e.wpcf7 && "feedback" === e.wpcf7.endpoint) {
            const {form: t, detail: r} = e.wpcf7;
            d(t),
            a(t, "beforesubmit", r),
            n(t, "submitting")
        }
        return t(e)
    }
    ));
    const d = e => {
        e.querySelectorAll(".wpcf7-form-control-wrap").forEach((t => {
            t.dataset.name && i(e, t.dataset.name)
        }
        )),
        e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText = "",
        e.querySelectorAll(".wpcf7-response-output").forEach((e => {
            e.innerText = ""
        }
        ))
    }
    ;
    function f(e) {
        const t = new FormData(e)
          , c = {
            contactFormId: e.wpcf7.id,
            pluginVersion: e.wpcf7.pluginVersion,
            contactFormLocale: e.wpcf7.locale,
            unitTag: e.wpcf7.unitTag,
            containerPostId: e.wpcf7.containerPost,
            status: e.wpcf7.status,
            inputs: Array.from(t, (e => {
                const t = e[0]
                  , a = e[1];
                return !t.match(/^_/) && {
                    name: t,
                    value: a
                }
            }
            )).filter((e => !1 !== e)),
            formData: t
        };
        r({
            endpoint: `contact-forms/${e.wpcf7.id}/refill`,
            method: "GET",
            wpcf7: {
                endpoint: "refill",
                form: e,
                detail: c
            }
        }).then((t => {
            e.wpcf7.resetOnMailSent ? (delete e.wpcf7.resetOnMailSent,
            n(e, "mail_sent")) : n(e, "init"),
            c.apiResponse = t,
            a(e, "reset", c)
        }
        )).catch((e => console.error(e)))
    }
    r.use(( (e, t) => {
        if (e.wpcf7 && "refill" === e.wpcf7.endpoint) {
            const {form: t, detail: a} = e.wpcf7;
            d(t),
            n(t, "resetting")
        }
        return t(e)
    }
    ));
    const u = (e, t) => {
        for (const a in t) {
            const n = t[a];
            e.querySelectorAll(`input[name="${a}"]`).forEach((e => {
                e.value = ""
            }
            )),
            e.querySelectorAll(`img.wpcf7-captcha-${a.replaceAll(":", "")}`).forEach((e => {
                e.setAttribute("src", n)
            }
            ));
            const r = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
            r && e.querySelectorAll(`input[name="_wpcf7_captcha_challenge_${a}"]`).forEach((e => {
                e.value = r[1]
            }
            ))
        }
    }
      , m = (e, t) => {
        for (const a in t) {
            const n = t[a][0]
              , r = t[a][1];
            e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${a}"]`).forEach((e => {
                e.querySelector(`input[name="${a}"]`).value = "",
                e.querySelector(".wpcf7-quiz-label").textContent = n,
                e.querySelector(`input[name="_wpcf7_quiz_answer_${a}"]`).value = r
            }
            ))
        }
    }
    ;
    function w(e) {
        const a = new FormData(e);
        e.wpcf7 = {
            id: t(a.get("_wpcf7")),
            status: e.getAttribute("data-status"),
            pluginVersion: a.get("_wpcf7_version"),
            locale: a.get("_wpcf7_locale"),
            unitTag: a.get("_wpcf7_unit_tag"),
            containerPost: t(a.get("_wpcf7_container_post")),
            parent: e.closest(".wpcf7"),
            get schema() {
                return wpcf7.schemas.get(this.id)
            }
        },
        wpcf7.schemas.set(e.wpcf7.id, void 0),
        e.querySelectorAll(".has-spinner").forEach((e => {
            e.insertAdjacentHTML("afterend", '<span class="wpcf7-spinner"></span>')
        }
        )),
        (e => {
            e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t => {
                t.addEventListener("change", (t => {
                    const a = t.target.getAttribute("name");
                    e.querySelectorAll(`input[type="checkbox"][name="${a}"]`).forEach((e => {
                        e !== t.target && (e.checked = !1)
                    }
                    ))
                }
                ))
            }
            ))
        }
        )(e),
        (e => {
            e.querySelectorAll(".has-free-text").forEach((t => {
                const a = t.querySelector("input.wpcf7-free-text")
                  , n = t.querySelector('input[type="checkbox"], input[type="radio"]');
                a.disabled = !n.checked,
                e.addEventListener("change", (e => {
                    a.disabled = !n.checked,
                    e.target === n && n.checked && a.focus()
                }
                ))
            }
            ))
        }
        )(e),
        (e => {
            e.querySelectorAll(".wpcf7-validates-as-url").forEach((e => {
                e.addEventListener("change", (t => {
                    let a = e.value.trim();
                    a && !a.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== a.indexOf(".") && (a = a.replace(/^\/+/, ""),
                    a = "http://" + a),
                    e.value = a
                }
                ))
            }
            ))
        }
        )(e),
        (e => {
            if (!e.querySelector(".wpcf7-acceptance") || e.classList.contains("wpcf7-acceptance-as-validation"))
                return;
            const t = () => {
                let t = !0;
                e.querySelectorAll(".wpcf7-acceptance").forEach((e => {
                    if (!t || e.classList.contains("optional"))
                        return;
                    const a = e.querySelector('input[type="checkbox"]');
                    (e.classList.contains("invert") && a.checked || !e.classList.contains("invert") && !a.checked) && (t = !1)
                }
                )),
                e.querySelectorAll(".wpcf7-submit").forEach((e => {
                    e.disabled = !t
                }
                ))
            }
            ;
            t(),
            e.addEventListener("change", (e => {
                t()
            }
            )),
            e.addEventListener("wpcf7reset", (e => {
                t()
            }
            ))
        }
        )(e),
        (e => {
            const a = (e, a) => {
                const n = t(e.getAttribute("data-starting-value"))
                  , r = t(e.getAttribute("data-maximum-value"))
                  , c = t(e.getAttribute("data-minimum-value"))
                  , o = e.classList.contains("down") ? n - a.value.trim().length : a.value.trim().length;
                e.setAttribute("data-current-value", o),
                e.innerText = o,
                r && r < a.value.length ? e.classList.add("too-long") : e.classList.remove("too-long"),
                c && a.value.length < c ? e.classList.add("too-short") : e.classList.remove("too-short")
            }
              , n = t => {
                t = {
                    init: !1,
                    ...t
                },
                e.querySelectorAll(".wpcf7-character-count").forEach((n => {
                    const r = n.getAttribute("data-target-name")
                      , c = e.querySelector(`[name="${r}"]`);
                    c && (c.value = c.defaultValue,
                    a(n, c),
                    t.init && c.addEventListener("keyup", (e => {
                        a(n, c)
                    }
                    )))
                }
                ))
            }
            ;
            n({
                init: !0
            }),
            e.addEventListener("wpcf7reset", (e => {
                n()
            }
            ))
        }
        )(e),
        window.addEventListener("load", (t => {
            wpcf7.cached && e.reset()
        }
        )),
        e.addEventListener("reset", (t => {
            wpcf7.reset(e)
        }
        )),
        e.addEventListener("submit", (t => {
            wpcf7.submit(e, {
                submitter: t.submitter
            }),
            t.preventDefault()
        }
        )),
        e.addEventListener("wpcf7submit", (t => {
            t.detail.apiResponse.captcha && u(e, t.detail.apiResponse.captcha),
            t.detail.apiResponse.quiz && m(e, t.detail.apiResponse.quiz)
        }
        )),
        e.addEventListener("wpcf7reset", (t => {
            t.detail.apiResponse.captcha && u(e, t.detail.apiResponse.captcha),
            t.detail.apiResponse.quiz && m(e, t.detail.apiResponse.quiz)
        }
        )),
        e.addEventListener("change", (t => {
            t.target.closest(".wpcf7-form-control") && wpcf7.validate(e, {
                target: t.target
            })
        }
        )),
        e.addEventListener("wpcf7statuschanged", (t => {
            const a = t.detail.status;
            e.querySelectorAll(".active-on-any").forEach((e => {
                e.removeAttribute("inert"),
                e.classList.remove("active-on-any")
            }
            )),
            e.querySelectorAll(`.inert-on-${a}`).forEach((e => {
                e.setAttribute("inert", "inert"),
                e.classList.add("active-on-any")
            }
            ))
        }
        ))
    }
    document.addEventListener("DOMContentLoaded", (t => {
        var a;
        if ("undefined" != typeof wpcf7)
            if (void 0 !== wpcf7.api)
                if ("function" == typeof window.fetch)
                    if ("function" == typeof window.FormData)
                        if ("function" == typeof NodeList.prototype.forEach)
                            if ("function" == typeof String.prototype.replaceAll) {
                                wpcf7 = {
                                    init: w,
                                    submit: p,
                                    reset: f,
                                    validate: o,
                                    schemas: new Map,
                                    ...null !== (a = wpcf7) && void 0 !== a ? a : {}
                                },
                                document.querySelectorAll("form .wpcf7[data-wpcf7-id]").forEach((t => {
                                    const a = document.createElement("p");
                                    a.setAttribute("class", "wpcf7-form-in-wrong-place");
                                    const n = document.createElement("strong");
                                    n.append((0,
                                    e.__)("Error:", "contact-form-7"));
                                    const r = (0,
                                    e.__)("This contact form is placed in the wrong place.", "contact-form-7");
                                    a.append(n, " ", r),
                                    t.replaceWith(a)
                                }
                                )),
                                document.querySelectorAll(".wpcf7 > form").forEach((e => {
                                    wpcf7.init(e),
                                    e.closest(".wpcf7").classList.replace("no-js", "js")
                                }
                                ));
                                for (const e of wpcf7.schemas.keys())
                                    r({
                                        endpoint: `contact-forms/${e}/feedback/schema`,
                                        method: "GET"
                                    }).then((t => {
                                        wpcf7.schemas.set(e, t)
                                    }
                                    ))
                            } else
                                console.error("Your browser does not support String.replaceAll().");
                        else
                            console.error("Your browser does not support NodeList.forEach().");
                    else
                        console.error("Your browser does not support window.FormData().");
                else
                    console.error("Your browser does not support window.fetch().");
            else
                console.error("wpcf7.api is not defined.");
        else
            console.error("wpcf7 is not defined.")
    }
    ))
}
)();
(function() {
    const siteNavigation = document.getElementById('site-navigation');
    if (!siteNavigation) {
        return
    }
    const button = siteNavigation.getElementsByTagName('button')[0];
    if ('undefined' === typeof button) {
        return
    }
    const menu = siteNavigation.getElementsByTagName('ul')[0];
    if ('undefined' === typeof menu) {
        button.style.display = 'none';
        return
    }
    if (!menu.classList.contains('nav-menu')) {
        menu.classList.add('nav-menu')
    }
    button.addEventListener('click', function() {
        siteNavigation.classList.toggle('toggled');
        if (button.getAttribute('aria-expanded') === 'true') {
            button.setAttribute('aria-expanded', 'false')
        } else {
            button.setAttribute('aria-expanded', 'true')
        }
    });
    document.addEventListener('click', function(event) {
        const isClickInside = siteNavigation.contains(event.target);
        if (!isClickInside) {
            siteNavigation.classList.remove('toggled');
            button.setAttribute('aria-expanded', 'false')
        }
    });
    const links = menu.getElementsByTagName('a');
    const linksWithChildren = menu.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');
    for (const link of links) {
        link.addEventListener('focus', toggleFocus, !0);
        link.addEventListener('blur', toggleFocus, !0)
    }
    for (const link of linksWithChildren) {
        link.addEventListener('touchstart', toggleFocus, !1)
    }
    function toggleFocus() {
        if (event.type === 'focus' || event.type === 'blur') {
            let self = this;
            while (!self.classList.contains('nav-menu')) {
                if ('li' === self.tagName.toLowerCase()) {
                    self.classList.toggle('focus')
                }
                self = self.parentNode
            }
        }
        if (event.type === 'touchstart') {
            const menuItem = this.parentNode;
            event.preventDefault();
            for (const link of menuItem.parentNode.children) {
                if (menuItem !== link) {
                    link.classList.remove('focus')
                }
            }
            menuItem.classList.toggle('focus')
        }
    }
}());
/*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(n) {
    "function" == typeof define && define.amd ? define(["jquery"], n) : "object" == typeof module && module.exports ? module.exports = function(e, t) {
        return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)),
        n(t),
        t
    }
    : n(jQuery)
}(function(t) {
    var e, n, s, p, r, o, h, f, g, m, y, v, i, a, _, s = ((u = t && t.fn && t.fn.select2 && t.fn.select2.amd ? t.fn.select2.amd : u) && u.requirejs || (u ? n = u : u = {},
    g = {},
    m = {},
    y = {},
    v = {},
    i = Object.prototype.hasOwnProperty,
    a = [].slice,
    _ = /\.js$/,
    h = function(e, t) {
        var n, s, i = c(e), r = i[0], t = t[1];
        return e = i[1],
        r && (n = x(r = l(r, t))),
        r ? e = n && n.normalize ? n.normalize(e, (s = t,
        function(e) {
            return l(e, s)
        }
        )) : l(e, t) : (r = (i = c(e = l(e, t)))[0],
        e = i[1],
        r && (n = x(r))),
        {
            f: r ? r + "!" + e : e,
            n: e,
            pr: r,
            p: n
        }
    }
    ,
    f = {
        require: function(e) {
            return w(e)
        },
        exports: function(e) {
            var t = g[e];
            return void 0 !== t ? t : g[e] = {}
        },
        module: function(e) {
            return {
                id: e,
                uri: "",
                exports: g[e],
                config: (t = e,
                function() {
                    return y && y.config && y.config[t] || {}
                }
                )
            };
            var t
        }
    },
    r = function(e, t, n, s) {
        var i, r, o, a, l, c = [], u = typeof n, d = A(s = s || e);
        if ("undefined" == u || "function" == u) {
            for (t = !t.length && n.length ? ["require", "exports", "module"] : t,
            a = 0; a < t.length; a += 1)
                if ("require" === (r = (o = h(t[a], d)).f))
                    c[a] = f.require(e);
                else if ("exports" === r)
                    c[a] = f.exports(e),
                    l = !0;
                else if ("module" === r)
                    i = c[a] = f.module(e);
                else if (b(g, r) || b(m, r) || b(v, r))
                    c[a] = x(r);
                else {
                    if (!o.p)
                        throw new Error(e + " missing " + r);
                    o.p.load(o.n, w(s, !0), function(t) {
                        return function(e) {
                            g[t] = e
                        }
                    }(r), {}),
                    c[a] = g[r]
                }
            u = n ? n.apply(g[e], c) : void 0,
            e && (i && i.exports !== p && i.exports !== g[e] ? g[e] = i.exports : u === p && l || (g[e] = u))
        } else
            e && (g[e] = n)
    }
    ,
    e = n = o = function(e, t, n, s, i) {
        if ("string" == typeof e)
            return f[e] ? f[e](t) : x(h(e, A(t)).f);
        if (!e.splice) {
            if ((y = e).deps && o(y.deps, y.callback),
            !t)
                return;
            t.splice ? (e = t,
            t = n,
            n = null) : e = p
        }
        return t = t || function() {}
        ,
        "function" == typeof n && (n = s,
        s = i),
        s ? r(p, e, t, n) : setTimeout(function() {
            r(p, e, t, n)
        }, 4),
        o
    }
    ,
    o.config = function(e) {
        return o(e)
    }
    ,
    e._defined = g,
    (s = function(e, t, n) {
        if ("string" != typeof e)
            throw new Error("See almond README: incorrect module build, no module name");
        t.splice || (n = t,
        t = []),
        b(g, e) || b(m, e) || (m[e] = [e, t, n])
    }
    ).amd = {
        jQuery: !0
    },
    u.requirejs = e,
    u.require = n,
    u.define = s),
    u.define("almond", function() {}),
    u.define("jquery", [], function() {
        var e = t || $;
        return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),
        e
    }),
    u.define("select2/utils", ["jquery"], function(r) {
        var s = {};
        function c(e) {
            var t, n = e.prototype, s = [];
            for (t in n)
                "function" == typeof n[t] && "constructor" !== t && s.push(t);
            return s
        }
        s.Extend = function(e, t) {
            var n, s = {}.hasOwnProperty;
            function i() {
                this.constructor = e
            }
            for (n in t)
                s.call(t, n) && (e[n] = t[n]);
            return i.prototype = t.prototype,
            e.prototype = new i,
            e.__super__ = t.prototype,
            e
        }
        ,
        s.Decorate = function(s, i) {
            var e = c(i)
              , t = c(s);
            function r() {
                var e = Array.prototype.unshift
                  , t = i.prototype.constructor.length
                  , n = s.prototype.constructor;
                0 < t && (e.call(arguments, s.prototype.constructor),
                n = i.prototype.constructor),
                n.apply(this, arguments)
            }
            i.displayName = s.displayName,
            r.prototype = new function() {
                this.constructor = r
            }
            ;
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                r.prototype[o] = s.prototype[o]
            }
            for (var a = 0; a < e.length; a++) {
                var l = e[a];
                r.prototype[l] = function(e) {
                    var t = function() {};
                    e in r.prototype && (t = r.prototype[e]);
                    var n = i.prototype[e];
                    return function() {
                        return Array.prototype.unshift.call(arguments, t),
                        n.apply(this, arguments)
                    }
                }(l)
            }
            return r
        }
        ;
        function e() {
            this.listeners = {}
        }
        e.prototype.on = function(e, t) {
            this.listeners = this.listeners || {},
            e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
        }
        ,
        e.prototype.trigger = function(e) {
            var t = Array.prototype.slice
              , n = t.call(arguments, 1);
            this.listeners = this.listeners || {},
            0 === (n = null == n ? [] : n).length && n.push({}),
            (n[0]._type = e)in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)),
            "*"in this.listeners && this.invoke(this.listeners["*"], arguments)
        }
        ,
        e.prototype.invoke = function(e, t) {
            for (var n = 0, s = e.length; n < s; n++)
                e[n].apply(this, t)
        }
        ,
        s.Observable = e,
        s.generateChars = function(e) {
            for (var t = "", n = 0; n < e; n++)
                t += Math.floor(36 * Math.random()).toString(36);
            return t
        }
        ,
        s.bind = function(e, t) {
            return function() {
                e.apply(t, arguments)
            }
        }
        ,
        s._convertData = function(e) {
            for (var t in e) {
                var n = t.split("-")
                  , s = e;
                if (1 !== n.length) {
                    for (var i = 0; i < n.length; i++) {
                        var r = n[i];
                        (r = r.substring(0, 1).toLowerCase() + r.substring(1))in s || (s[r] = {}),
                        i == n.length - 1 && (s[r] = e[t]),
                        s = s[r]
                    }
                    delete e[t]
                }
            }
            return e
        }
        ,
        s.hasScroll = function(e, t) {
            var n = r(t)
              , s = t.style.overflowX
              , i = t.style.overflowY;
            return (s !== i || "hidden" !== i && "visible" !== i) && ("scroll" === s || "scroll" === i || (n.innerHeight() < t.scrollHeight || n.innerWidth() < t.scrollWidth))
        }
        ,
        s.escapeMarkup = function(e) {
            var t = {
                "\\": "&#92;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#47;"
            };
            return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) {
                return t[e]
            })
        }
        ,
        s.__cache = {};
        var n = 0;
        return s.GetUniqueElementId = function(e) {
            var t = e.getAttribute("data-select2-id");
            return null != t || (t = e.id ? "select2-data-" + e.id : "select2-data-" + (++n).toString() + "-" + s.generateChars(4),
            e.setAttribute("data-select2-id", t)),
            t
        }
        ,
        s.StoreData = function(e, t, n) {
            e = s.GetUniqueElementId(e);
            s.__cache[e] || (s.__cache[e] = {}),
            s.__cache[e][t] = n
        }
        ,
        s.GetData = function(e, t) {
            var n = s.GetUniqueElementId(e);
            return t ? s.__cache[n] && null != s.__cache[n][t] ? s.__cache[n][t] : r(e).data(t) : s.__cache[n]
        }
        ,
        s.RemoveData = function(e) {
            var t = s.GetUniqueElementId(e);
            null != s.__cache[t] && delete s.__cache[t],
            e.removeAttribute("data-select2-id")
        }
        ,
        s.copyNonInternalCssClasses = function(e, t) {
            var n = (n = e.getAttribute("class").trim().split(/\s+/)).filter(function(e) {
                return 0 === e.indexOf("select2-")
            })
              , t = (t = t.getAttribute("class").trim().split(/\s+/)).filter(function(e) {
                return 0 !== e.indexOf("select2-")
            })
              , t = n.concat(t);
            e.setAttribute("class", t.join(" "))
        }
        ,
        s
    }),
    u.define("select2/results", ["jquery", "./utils"], function(d, p) {
        function s(e, t, n) {
            this.$element = e,
            this.data = n,
            this.options = t,
            s.__super__.constructor.call(this)
        }
        return p.Extend(s, p.Observable),
        s.prototype.render = function() {
            var e = d('<ul class="select2-results__options" role="listbox"></ul>');
            return this.options.get("multiple") && e.attr("aria-multiselectable", "true"),
            this.$results = e
        }
        ,
        s.prototype.clear = function() {
            this.$results.empty()
        }
        ,
        s.prototype.displayMessage = function(e) {
            var t = this.options.get("escapeMarkup");
            this.clear(),
            this.hideLoading();
            var n = d('<li role="alert" aria-live="assertive" class="select2-results__option"></li>')
              , s = this.options.get("translations").get(e.message);
            n.append(t(s(e.args))),
            n[0].className += " select2-results__message",
            this.$results.append(n)
        }
        ,
        s.prototype.hideMessages = function() {
            this.$results.find(".select2-results__message").remove()
        }
        ,
        s.prototype.append = function(e) {
            this.hideLoading();
            var t = [];
            if (null != e.results && 0 !== e.results.length) {
                e.results = this.sort(e.results);
                for (var n = 0; n < e.results.length; n++) {
                    var s = e.results[n]
                      , s = this.option(s);
                    t.push(s)
                }
                this.$results.append(t)
            } else
                0 === this.$results.children().length && this.trigger("results:message", {
                    message: "noResults"
                })
        }
        ,
        s.prototype.position = function(e, t) {
            t.find(".select2-results").append(e)
        }
        ,
        s.prototype.sort = function(e) {
            return this.options.get("sorter")(e)
        }
        ,
        s.prototype.highlightFirstItem = function() {
            var e = this.$results.find(".select2-results__option--selectable")
              , t = e.filter(".select2-results__option--selected");
            (0 < t.length ? t : e).first().trigger("mouseenter"),
            this.ensureHighlightVisible()
        }
        ,
        s.prototype.setClasses = function() {
            var t = this;
            this.data.current(function(e) {
                var s = e.map(function(e) {
                    return e.id.toString()
                });
                t.$results.find(".select2-results__option--selectable").each(function() {
                    var e = d(this)
                      , t = p.GetData(this, "data")
                      , n = "" + t.id;
                    null != t.element && t.element.selected || null == t.element && -1 < s.indexOf(n) ? (this.classList.add("select2-results__option--selected"),
                    e.attr("aria-selected", "true")) : (this.classList.remove("select2-results__option--selected"),
                    e.attr("aria-selected", "false"))
                })
            })
        }
        ,
        s.prototype.showLoading = function(e) {
            this.hideLoading();
            e = {
                disabled: !0,
                loading: !0,
                text: this.options.get("translations").get("searching")(e)
            },
            e = this.option(e);
            e.className += " loading-results",
            this.$results.prepend(e)
        }
        ,
        s.prototype.hideLoading = function() {
            this.$results.find(".loading-results").remove()
        }
        ,
        s.prototype.option = function(e) {
            var t = document.createElement("li");
            t.classList.add("select2-results__option"),
            t.classList.add("select2-results__option--selectable");
            var n, s = {
                role: "option"
            }, i = window.Element.prototype.matches || window.Element.prototype.msMatchesSelector || window.Element.prototype.webkitMatchesSelector;
            for (n in (null != e.element && i.call(e.element, ":disabled") || null == e.element && e.disabled) && (s["aria-disabled"] = "true",
            t.classList.remove("select2-results__option--selectable"),
            t.classList.add("select2-results__option--disabled")),
            null == e.id && t.classList.remove("select2-results__option--selectable"),
            null != e._resultId && (t.id = e._resultId),
            e.title && (t.title = e.title),
            e.children && (s.role = "group",
            s["aria-label"] = e.text,
            t.classList.remove("select2-results__option--selectable"),
            t.classList.add("select2-results__option--group")),
            s) {
                var r = s[n];
                t.setAttribute(n, r)
            }
            if (e.children) {
                var o = d(t)
                  , a = document.createElement("strong");
                a.className = "select2-results__group",
                this.template(e, a);
                for (var l = [], c = 0; c < e.children.length; c++) {
                    var u = e.children[c]
                      , u = this.option(u);
                    l.push(u)
                }
                i = d("<ul></ul>", {
                    class: "select2-results__options select2-results__options--nested",
                    role: "none"
                });
                i.append(l),
                o.append(a),
                o.append(i)
            } else
                this.template(e, t);
            return p.StoreData(t, "data", e),
            t
        }
        ,
        s.prototype.bind = function(t, e) {
            var i = this
              , n = t.id + "-results";
            this.$results.attr("id", n),
            t.on("results:all", function(e) {
                i.clear(),
                i.append(e.data),
                t.isOpen() && (i.setClasses(),
                i.highlightFirstItem())
            }),
            t.on("results:append", function(e) {
                i.append(e.data),
                t.isOpen() && i.setClasses()
            }),
            t.on("query", function(e) {
                i.hideMessages(),
                i.showLoading(e)
            }),
            t.on("select", function() {
                t.isOpen() && (i.setClasses(),
                i.options.get("scrollAfterSelect") && i.highlightFirstItem())
            }),
            t.on("unselect", function() {
                t.isOpen() && (i.setClasses(),
                i.options.get("scrollAfterSelect") && i.highlightFirstItem())
            }),
            t.on("open", function() {
                i.$results.attr("aria-expanded", "true"),
                i.$results.attr("aria-hidden", "false"),
                i.setClasses(),
                i.ensureHighlightVisible()
            }),
            t.on("close", function() {
                i.$results.attr("aria-expanded", "false"),
                i.$results.attr("aria-hidden", "true"),
                i.$results.removeAttr("aria-activedescendant")
            }),
            t.on("results:toggle", function() {
                var e = i.getHighlightedResults();
                0 !== e.length && e.trigger("mouseup")
            }),
            t.on("results:select", function() {
                var e, t = i.getHighlightedResults();
                0 !== t.length && (e = p.GetData(t[0], "data"),
                t.hasClass("select2-results__option--selected") ? i.trigger("close", {}) : i.trigger("select", {
                    data: e
                }))
            }),
            t.on("results:previous", function() {
                var e, t = i.getHighlightedResults(), n = i.$results.find(".select2-results__option--selectable"), s = n.index(t);
                s <= 0 || (e = s - 1,
                0 === t.length && (e = 0),
                (s = n.eq(e)).trigger("mouseenter"),
                t = i.$results.offset().top,
                n = s.offset().top,
                s = i.$results.scrollTop() + (n - t),
                0 === e ? i.$results.scrollTop(0) : n - t < 0 && i.$results.scrollTop(s))
            }),
            t.on("results:next", function() {
                var e, t = i.getHighlightedResults(), n = i.$results.find(".select2-results__option--selectable"), s = n.index(t) + 1;
                s >= n.length || ((e = n.eq(s)).trigger("mouseenter"),
                t = i.$results.offset().top + i.$results.outerHeight(!1),
                n = e.offset().top + e.outerHeight(!1),
                e = i.$results.scrollTop() + n - t,
                0 === s ? i.$results.scrollTop(0) : t < n && i.$results.scrollTop(e))
            }),
            t.on("results:focus", function(e) {
                e.element[0].classList.add("select2-results__option--highlighted"),
                e.element[0].setAttribute("aria-selected", "true")
            }),
            t.on("results:message", function(e) {
                i.displayMessage(e)
            }),
            d.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                var t = i.$results.scrollTop()
                  , n = i.$results.get(0).scrollHeight - t + e.deltaY
                  , t = 0 < e.deltaY && t - e.deltaY <= 0
                  , n = e.deltaY < 0 && n <= i.$results.height();
                t ? (i.$results.scrollTop(0),
                e.preventDefault(),
                e.stopPropagation()) : n && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()),
                e.preventDefault(),
                e.stopPropagation())
            }),
            this.$results.on("mouseup", ".select2-results__option--selectable", function(e) {
                var t = d(this)
                  , n = p.GetData(this, "data");
                t.hasClass("select2-results__option--selected") ? i.options.get("multiple") ? i.trigger("unselect", {
                    originalEvent: e,
                    data: n
                }) : i.trigger("close", {}) : i.trigger("select", {
                    originalEvent: e,
                    data: n
                })
            }),
            this.$results.on("mouseenter", ".select2-results__option--selectable", function(e) {
                var t = p.GetData(this, "data");
                i.getHighlightedResults().removeClass("select2-results__option--highlighted").attr("aria-selected", "false"),
                i.trigger("results:focus", {
                    data: t,
                    element: d(this)
                })
            })
        }
        ,
        s.prototype.getHighlightedResults = function() {
            return this.$results.find(".select2-results__option--highlighted")
        }
        ,
        s.prototype.destroy = function() {
            this.$results.remove()
        }
        ,
        s.prototype.ensureHighlightVisible = function() {
            var e, t, n, s, i = this.getHighlightedResults();
            0 !== i.length && (e = this.$results.find(".select2-results__option--selectable").index(i),
            s = this.$results.offset().top,
            t = i.offset().top,
            n = this.$results.scrollTop() + (t - s),
            s = t - s,
            n -= 2 * i.outerHeight(!1),
            e <= 2 ? this.$results.scrollTop(0) : (s > this.$results.outerHeight() || s < 0) && this.$results.scrollTop(n))
        }
        ,
        s.prototype.template = function(e, t) {
            var n = this.options.get("templateResult")
              , s = this.options.get("escapeMarkup")
              , e = n(e, t);
            null == e ? t.style.display = "none" : "string" == typeof e ? t.innerHTML = s(e) : d(t).append(e)
        }
        ,
        s
    }),
    u.define("select2/keys", [], function() {
        return {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46
        }
    }),
    u.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(n, s, i) {
        function r(e, t) {
            this.$element = e,
            this.options = t,
            r.__super__.constructor.call(this)
        }
        return s.Extend(r, s.Observable),
        r.prototype.render = function() {
            var e = n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
            return this._tabindex = 0,
            null != s.GetData(this.$element[0], "old-tabindex") ? this._tabindex = s.GetData(this.$element[0], "old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")),
            e.attr("title", this.$element.attr("title")),
            e.attr("tabindex", this._tabindex),
            e.attr("aria-disabled", "false"),
            this.$selection = e
        }
        ,
        r.prototype.bind = function(e, t) {
            var n = this
              , s = e.id + "-results";
            this.container = e,
            this.$selection.on("focus", function(e) {
                n.trigger("focus", e)
            }),
            this.$selection.on("blur", function(e) {
                n._handleBlur(e)
            }),
            this.$selection.on("keydown", function(e) {
                n.trigger("keypress", e),
                e.which === i.SPACE && e.preventDefault()
            }),
            e.on("results:focus", function(e) {
                n.$selection.attr("aria-activedescendant", e.data._resultId)
            }),
            e.on("selection:update", function(e) {
                n.update(e.data)
            }),
            e.on("open", function() {
                n.$selection.attr("aria-expanded", "true"),
                n.$selection.attr("aria-owns", s),
                n._attachCloseHandler(e)
            }),
            e.on("close", function() {
                n.$selection.attr("aria-expanded", "false"),
                n.$selection.removeAttr("aria-activedescendant"),
                n.$selection.removeAttr("aria-owns"),
                n.$selection.trigger("focus"),
                n._detachCloseHandler(e)
            }),
            e.on("enable", function() {
                n.$selection.attr("tabindex", n._tabindex),
                n.$selection.attr("aria-disabled", "false")
            }),
            e.on("disable", function() {
                n.$selection.attr("tabindex", "-1"),
                n.$selection.attr("aria-disabled", "true")
            })
        }
        ,
        r.prototype._handleBlur = function(e) {
            var t = this;
            window.setTimeout(function() {
                document.activeElement == t.$selection[0] || n.contains(t.$selection[0], document.activeElement) || t.trigger("blur", e)
            }, 1)
        }
        ,
        r.prototype._attachCloseHandler = function(e) {
            n(document.body).on("mousedown.select2." + e.id, function(e) {
                var t = n(e.target).closest(".select2");
                n(".select2.select2-container--open").each(function() {
                    this != t[0] && s.GetData(this, "element").select2("close")
                })
            })
        }
        ,
        r.prototype._detachCloseHandler = function(e) {
            n(document.body).off("mousedown.select2." + e.id)
        }
        ,
        r.prototype.position = function(e, t) {
            t.find(".selection").append(e)
        }
        ,
        r.prototype.destroy = function() {
            this._detachCloseHandler(this.container)
        }
        ,
        r.prototype.update = function(e) {
            throw new Error("The `update` method must be defined in child classes.")
        }
        ,
        r.prototype.isEnabled = function() {
            return !this.isDisabled()
        }
        ,
        r.prototype.isDisabled = function() {
            return this.options.get("disabled")
        }
        ,
        r
    }),
    u.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, n, s) {
        function i() {
            i.__super__.constructor.apply(this, arguments)
        }
        return n.Extend(i, t),
        i.prototype.render = function() {
            var e = i.__super__.render.call(this);
            return e[0].classList.add("select2-selection--single"),
            e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),
            e
        }
        ,
        i.prototype.bind = function(t, e) {
            var n = this;
            i.__super__.bind.apply(this, arguments);
            var s = t.id + "-container";
            this.$selection.find(".select2-selection__rendered").attr("id", s).attr("role", "textbox").attr("aria-readonly", "true"),
            this.$selection.attr("aria-labelledby", s),
            this.$selection.attr("aria-controls", s),
            this.$selection.on("mousedown", function(e) {
                1 === e.which && n.trigger("toggle", {
                    originalEvent: e
                })
            }),
            this.$selection.on("focus", function(e) {}),
            this.$selection.on("blur", function(e) {}),
            t.on("focus", function(e) {
                t.isOpen() || n.$selection.trigger("focus")
            })
        }
        ,
        i.prototype.clear = function() {
            var e = this.$selection.find(".select2-selection__rendered");
            e.empty(),
            e.removeAttr("title")
        }
        ,
        i.prototype.display = function(e, t) {
            var n = this.options.get("templateSelection");
            return this.options.get("escapeMarkup")(n(e, t))
        }
        ,
        i.prototype.selectionContainer = function() {
            return e("<span></span>")
        }
        ,
        i.prototype.update = function(e) {
            var t, n;
            0 !== e.length ? (n = e[0],
            t = this.$selection.find(".select2-selection__rendered"),
            e = this.display(n, t),
            t.empty().append(e),
            (n = n.title || n.text) ? t.attr("title", n) : t.removeAttr("title")) : this.clear()
        }
        ,
        i
    }),
    u.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(i, e, c) {
        function r(e, t) {
            r.__super__.constructor.apply(this, arguments)
        }
        return c.Extend(r, e),
        r.prototype.render = function() {
            var e = r.__super__.render.call(this);
            return e[0].classList.add("select2-selection--multiple"),
            e.html('<ul class="select2-selection__rendered"></ul>'),
            e
        }
        ,
        r.prototype.bind = function(e, t) {
            var n = this;
            r.__super__.bind.apply(this, arguments);
            var s = e.id + "-container";
            this.$selection.find(".select2-selection__rendered").attr("id", s),
            this.$selection.on("click", function(e) {
                n.trigger("toggle", {
                    originalEvent: e
                })
            }),
            this.$selection.on("click", ".select2-selection__choice__remove", function(e) {
                var t;
                n.isDisabled() || (t = i(this).parent(),
                t = c.GetData(t[0], "data"),
                n.trigger("unselect", {
                    originalEvent: e,
                    data: t
                }))
            }),
            this.$selection.on("keydown", ".select2-selection__choice__remove", function(e) {
                n.isDisabled() || e.stopPropagation()
            })
        }
        ,
        r.prototype.clear = function() {
            var e = this.$selection.find(".select2-selection__rendered");
            e.empty(),
            e.removeAttr("title")
        }
        ,
        r.prototype.display = function(e, t) {
            var n = this.options.get("templateSelection");
            return this.options.get("escapeMarkup")(n(e, t))
        }
        ,
        r.prototype.selectionContainer = function() {
            return i('<li class="select2-selection__choice"><button type="button" class="select2-selection__choice__remove" tabindex="-1"><span aria-hidden="true">&times;</span></button><span class="select2-selection__choice__display"></span></li>')
        }
        ,
        r.prototype.update = function(e) {
            if (this.clear(),
            0 !== e.length) {
                for (var t = [], n = this.$selection.find(".select2-selection__rendered").attr("id") + "-choice-", s = 0; s < e.length; s++) {
                    var i = e[s]
                      , r = this.selectionContainer()
                      , o = this.display(i, r)
                      , a = n + c.generateChars(4) + "-";
                    i.id ? a += i.id : a += c.generateChars(4),
                    r.find(".select2-selection__choice__display").append(o).attr("id", a);
                    var l = i.title || i.text;
                    l && r.attr("title", l);
                    o = this.options.get("translations").get("removeItem"),
                    l = r.find(".select2-selection__choice__remove");
                    l.attr("title", o()),
                    l.attr("aria-label", o()),
                    l.attr("aria-describedby", a),
                    c.StoreData(r[0], "data", i),
                    t.push(r)
                }
                this.$selection.find(".select2-selection__rendered").append(t)
            }
        }
        ,
        r
    }),
    u.define("select2/selection/placeholder", [], function() {
        function e(e, t, n) {
            this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
            e.call(this, t, n)
        }
        return e.prototype.normalizePlaceholder = function(e, t) {
            return t = "string" == typeof t ? {
                id: "",
                text: t
            } : t
        }
        ,
        e.prototype.createPlaceholder = function(e, t) {
            var n = this.selectionContainer();
            n.html(this.display(t)),
            n[0].classList.add("select2-selection__placeholder"),
            n[0].classList.remove("select2-selection__choice");
            t = t.title || t.text || n.text();
            return this.$selection.find(".select2-selection__rendered").attr("title", t),
            n
        }
        ,
        e.prototype.update = function(e, t) {
            var n = 1 == t.length && t[0].id != this.placeholder.id;
            if (1 < t.length || n)
                return e.call(this, t);
            this.clear();
            t = this.createPlaceholder(this.placeholder);
            this.$selection.find(".select2-selection__rendered").append(t)
        }
        ,
        e
    }),
    u.define("select2/selection/allowClear", ["jquery", "../keys", "../utils"], function(i, s, a) {
        function e() {}
        return e.prototype.bind = function(e, t, n) {
            var s = this;
            e.call(this, t, n),
            null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),
            this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
                s._handleClear(e)
            }),
            t.on("keypress", function(e) {
                s._handleKeyboardClear(e, t)
            })
        }
        ,
        e.prototype._handleClear = function(e, t) {
            if (!this.isDisabled()) {
                var n = this.$selection.find(".select2-selection__clear");
                if (0 !== n.length) {
                    t.stopPropagation();
                    var s = a.GetData(n[0], "data")
                      , i = this.$element.val();
                    this.$element.val(this.placeholder.id);
                    var r = {
                        data: s
                    };
                    if (this.trigger("clear", r),
                    r.prevented)
                        this.$element.val(i);
                    else {
                        for (var o = 0; o < s.length; o++)
                            if (r = {
                                data: s[o]
                            },
                            this.trigger("unselect", r),
                            r.prevented)
                                return void this.$element.val(i);
                        this.$element.trigger("input").trigger("change"),
                        this.trigger("toggle", {})
                    }
                }
            }
        }
        ,
        e.prototype._handleKeyboardClear = function(e, t, n) {
            n.isOpen() || t.which != s.DELETE && t.which != s.BACKSPACE || this._handleClear(t)
        }
        ,
        e.prototype.update = function(e, t) {
            var n, s;
            e.call(this, t),
            this.$selection.find(".select2-selection__clear").remove(),
            this.$selection[0].classList.remove("select2-selection--clearable"),
            0 < this.$selection.find(".select2-selection__placeholder").length || 0 === t.length || (n = this.$selection.find(".select2-selection__rendered").attr("id"),
            s = this.options.get("translations").get("removeAllItems"),
            (e = i('<button type="button" class="select2-selection__clear" tabindex="-1"><span aria-hidden="true">&times;</span></button>')).attr("title", s()),
            e.attr("aria-label", s()),
            e.attr("aria-describedby", n),
            a.StoreData(e[0], "data", t),
            this.$selection.prepend(e),
            this.$selection[0].classList.add("select2-selection--clearable"))
        }
        ,
        e
    }),
    u.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(s, a, l) {
        function e(e, t, n) {
            e.call(this, t, n)
        }
        return e.prototype.render = function(e) {
            var t = this.options.get("translations").get("search")
              , n = s('<span class="select2-search select2-search--inline"><textarea class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" ></textarea></span>');
            this.$searchContainer = n,
            this.$search = n.find("textarea"),
            this.$search.prop("autocomplete", this.options.get("autocomplete")),
            this.$search.attr("aria-label", t());
            e = e.call(this);
            return this._transferTabIndex(),
            e.append(this.$searchContainer),
            e
        }
        ,
        e.prototype.bind = function(e, t, n) {
            var s = this
              , i = t.id + "-results"
              , r = t.id + "-container";
            e.call(this, t, n),
            s.$search.attr("aria-describedby", r),
            t.on("open", function() {
                s.$search.attr("aria-controls", i),
                s.$search.trigger("focus")
            }),
            t.on("close", function() {
                s.$search.val(""),
                s.resizeSearch(),
                s.$search.removeAttr("aria-controls"),
                s.$search.removeAttr("aria-activedescendant"),
                s.$search.trigger("focus")
            }),
            t.on("enable", function() {
                s.$search.prop("disabled", !1),
                s._transferTabIndex()
            }),
            t.on("disable", function() {
                s.$search.prop("disabled", !0)
            }),
            t.on("focus", function(e) {
                s.$search.trigger("focus")
            }),
            t.on("results:focus", function(e) {
                e.data._resultId ? s.$search.attr("aria-activedescendant", e.data._resultId) : s.$search.removeAttr("aria-activedescendant")
            }),
            this.$selection.on("focusin", ".select2-search--inline", function(e) {
                s.trigger("focus", e)
            }),
            this.$selection.on("focusout", ".select2-search--inline", function(e) {
                s._handleBlur(e)
            }),
            this.$selection.on("keydown", ".select2-search--inline", function(e) {
                var t;
                e.stopPropagation(),
                s.trigger("keypress", e),
                s._keyUpPrevented = e.isDefaultPrevented(),
                e.which !== l.BACKSPACE || "" !== s.$search.val() || 0 < (t = s.$selection.find(".select2-selection__choice").last()).length && (t = a.GetData(t[0], "data"),
                s.searchRemoveChoice(t),
                e.preventDefault())
            }),
            this.$selection.on("click", ".select2-search--inline", function(e) {
                s.$search.val() && e.stopPropagation()
            });
            var t = document.documentMode
              , o = t && t <= 11;
            this.$selection.on("input.searchcheck", ".select2-search--inline", function(e) {
                o ? s.$selection.off("input.search input.searchcheck") : s.$selection.off("keyup.search")
            }),
            this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
                var t;
                o && "input" === e.type ? s.$selection.off("input.search input.searchcheck") : (t = e.which) != l.SHIFT && t != l.CTRL && t != l.ALT && t != l.TAB && s.handleSearch(e)
            })
        }
        ,
        e.prototype._transferTabIndex = function(e) {
            this.$search.attr("tabindex", this.$selection.attr("tabindex")),
            this.$selection.attr("tabindex", "-1")
        }
        ,
        e.prototype.createPlaceholder = function(e, t) {
            this.$search.attr("placeholder", t.text)
        }
        ,
        e.prototype.update = function(e, t) {
            var n = this.$search[0] == document.activeElement;
            this.$search.attr("placeholder", ""),
            e.call(this, t),
            this.resizeSearch(),
            n && this.$search.trigger("focus")
        }
        ,
        e.prototype.handleSearch = function() {
            var e;
            this.resizeSearch(),
            this._keyUpPrevented || (e = this.$search.val(),
            this.trigger("query", {
                term: e
            })),
            this._keyUpPrevented = !1
        }
        ,
        e.prototype.searchRemoveChoice = function(e, t) {
            this.trigger("unselect", {
                data: t
            }),
            this.$search.val(t.text),
            this.handleSearch()
        }
        ,
        e.prototype.resizeSearch = function() {
            this.$search.css("width", "25px");
            var e = "100%";
            "" === this.$search.attr("placeholder") && (e = .75 * (this.$search.val().length + 1) + "em"),
            this.$search.css("width", e)
        }
        ,
        e
    }),
    u.define("select2/selection/selectionCss", ["../utils"], function(n) {
        function e() {}
        return e.prototype.render = function(e) {
            var t = e.call(this)
              , e = this.options.get("selectionCssClass") || "";
            return -1 !== e.indexOf(":all:") && (e = e.replace(":all:", ""),
            n.copyNonInternalCssClasses(t[0], this.$element[0])),
            t.addClass(e),
            t
        }
        ,
        e
    }),
    u.define("select2/selection/eventRelay", ["jquery"], function(o) {
        function e() {}
        return e.prototype.bind = function(e, t, n) {
            var s = this
              , i = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting", "clear", "clearing"]
              , r = ["opening", "closing", "selecting", "unselecting", "clearing"];
            e.call(this, t, n),
            t.on("*", function(e, t) {
                var n;
                -1 !== i.indexOf(e) && (t = t || {},
                n = o.Event("select2:" + e, {
                    params: t
                }),
                s.$element.trigger(n),
                -1 !== r.indexOf(e) && (t.prevented = n.isDefaultPrevented()))
            })
        }
        ,
        e
    }),
    u.define("select2/translation", ["jquery", "require"], function(t, n) {
        function s(e) {
            this.dict = e || {}
        }
        return s.prototype.all = function() {
            return this.dict
        }
        ,
        s.prototype.get = function(e) {
            return this.dict[e]
        }
        ,
        s.prototype.extend = function(e) {
            this.dict = t.extend({}, e.all(), this.dict)
        }
        ,
        s._cache = {},
        s.loadPath = function(e) {
            var t;
            return e in s._cache || (t = n(e),
            s._cache[e] = t),
            new s(s._cache[e])
        }
        ,
        s
    }),
    u.define("select2/diacritics", [], function() {
        return {
            "Ⓐ": "A",
            "Ａ": "A",
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ầ": "A",
            "Ấ": "A",
            "Ẫ": "A",
            "Ẩ": "A",
            "Ã": "A",
            "Ā": "A",
            "Ă": "A",
            "Ằ": "A",
            "Ắ": "A",
            "Ẵ": "A",
            "Ẳ": "A",
            "Ȧ": "A",
            "Ǡ": "A",
            "Ä": "A",
            "Ǟ": "A",
            "Ả": "A",
            "Å": "A",
            "Ǻ": "A",
            "Ǎ": "A",
            "Ȁ": "A",
            "Ȃ": "A",
            "Ạ": "A",
            "Ậ": "A",
            "Ặ": "A",
            "Ḁ": "A",
            "Ą": "A",
            "Ⱥ": "A",
            "Ɐ": "A",
            "Ꜳ": "AA",
            "Æ": "AE",
            "Ǽ": "AE",
            "Ǣ": "AE",
            "Ꜵ": "AO",
            "Ꜷ": "AU",
            "Ꜹ": "AV",
            "Ꜻ": "AV",
            "Ꜽ": "AY",
            "Ⓑ": "B",
            "Ｂ": "B",
            "Ḃ": "B",
            "Ḅ": "B",
            "Ḇ": "B",
            "Ƀ": "B",
            "Ƃ": "B",
            "Ɓ": "B",
            "Ⓒ": "C",
            "Ｃ": "C",
            "Ć": "C",
            "Ĉ": "C",
            "Ċ": "C",
            "Č": "C",
            "Ç": "C",
            "Ḉ": "C",
            "Ƈ": "C",
            "Ȼ": "C",
            "Ꜿ": "C",
            "Ⓓ": "D",
            "Ｄ": "D",
            "Ḋ": "D",
            "Ď": "D",
            "Ḍ": "D",
            "Ḑ": "D",
            "Ḓ": "D",
            "Ḏ": "D",
            "Đ": "D",
            "Ƌ": "D",
            "Ɗ": "D",
            "Ɖ": "D",
            "Ꝺ": "D",
            "Ǳ": "DZ",
            "Ǆ": "DZ",
            "ǲ": "Dz",
            "ǅ": "Dz",
            "Ⓔ": "E",
            "Ｅ": "E",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ề": "E",
            "Ế": "E",
            "Ễ": "E",
            "Ể": "E",
            "Ẽ": "E",
            "Ē": "E",
            "Ḕ": "E",
            "Ḗ": "E",
            "Ĕ": "E",
            "Ė": "E",
            "Ë": "E",
            "Ẻ": "E",
            "Ě": "E",
            "Ȅ": "E",
            "Ȇ": "E",
            "Ẹ": "E",
            "Ệ": "E",
            "Ȩ": "E",
            "Ḝ": "E",
            "Ę": "E",
            "Ḙ": "E",
            "Ḛ": "E",
            "Ɛ": "E",
            "Ǝ": "E",
            "Ⓕ": "F",
            "Ｆ": "F",
            "Ḟ": "F",
            "Ƒ": "F",
            "Ꝼ": "F",
            "Ⓖ": "G",
            "Ｇ": "G",
            "Ǵ": "G",
            "Ĝ": "G",
            "Ḡ": "G",
            "Ğ": "G",
            "Ġ": "G",
            "Ǧ": "G",
            "Ģ": "G",
            "Ǥ": "G",
            "Ɠ": "G",
            "Ꞡ": "G",
            "Ᵹ": "G",
            "Ꝿ": "G",
            "Ⓗ": "H",
            "Ｈ": "H",
            "Ĥ": "H",
            "Ḣ": "H",
            "Ḧ": "H",
            "Ȟ": "H",
            "Ḥ": "H",
            "Ḩ": "H",
            "Ḫ": "H",
            "Ħ": "H",
            "Ⱨ": "H",
            "Ⱶ": "H",
            "Ɥ": "H",
            "Ⓘ": "I",
            "Ｉ": "I",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ĩ": "I",
            "Ī": "I",
            "Ĭ": "I",
            "İ": "I",
            "Ï": "I",
            "Ḯ": "I",
            "Ỉ": "I",
            "Ǐ": "I",
            "Ȉ": "I",
            "Ȋ": "I",
            "Ị": "I",
            "Į": "I",
            "Ḭ": "I",
            "Ɨ": "I",
            "Ⓙ": "J",
            "Ｊ": "J",
            "Ĵ": "J",
            "Ɉ": "J",
            "Ⓚ": "K",
            "Ｋ": "K",
            "Ḱ": "K",
            "Ǩ": "K",
            "Ḳ": "K",
            "Ķ": "K",
            "Ḵ": "K",
            "Ƙ": "K",
            "Ⱪ": "K",
            "Ꝁ": "K",
            "Ꝃ": "K",
            "Ꝅ": "K",
            "Ꞣ": "K",
            "Ⓛ": "L",
            "Ｌ": "L",
            "Ŀ": "L",
            "Ĺ": "L",
            "Ľ": "L",
            "Ḷ": "L",
            "Ḹ": "L",
            "Ļ": "L",
            "Ḽ": "L",
            "Ḻ": "L",
            "Ł": "L",
            "Ƚ": "L",
            "Ɫ": "L",
            "Ⱡ": "L",
            "Ꝉ": "L",
            "Ꝇ": "L",
            "Ꞁ": "L",
            "Ǉ": "LJ",
            "ǈ": "Lj",
            "Ⓜ": "M",
            "Ｍ": "M",
            "Ḿ": "M",
            "Ṁ": "M",
            "Ṃ": "M",
            "Ɱ": "M",
            "Ɯ": "M",
            "Ⓝ": "N",
            "Ｎ": "N",
            "Ǹ": "N",
            "Ń": "N",
            "Ñ": "N",
            "Ṅ": "N",
            "Ň": "N",
            "Ṇ": "N",
            "Ņ": "N",
            "Ṋ": "N",
            "Ṉ": "N",
            "Ƞ": "N",
            "Ɲ": "N",
            "Ꞑ": "N",
            "Ꞥ": "N",
            "Ǌ": "NJ",
            "ǋ": "Nj",
            "Ⓞ": "O",
            "Ｏ": "O",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Ồ": "O",
            "Ố": "O",
            "Ỗ": "O",
            "Ổ": "O",
            "Õ": "O",
            "Ṍ": "O",
            "Ȭ": "O",
            "Ṏ": "O",
            "Ō": "O",
            "Ṑ": "O",
            "Ṓ": "O",
            "Ŏ": "O",
            "Ȯ": "O",
            "Ȱ": "O",
            "Ö": "O",
            "Ȫ": "O",
            "Ỏ": "O",
            "Ő": "O",
            "Ǒ": "O",
            "Ȍ": "O",
            "Ȏ": "O",
            "Ơ": "O",
            "Ờ": "O",
            "Ớ": "O",
            "Ỡ": "O",
            "Ở": "O",
            "Ợ": "O",
            "Ọ": "O",
            "Ộ": "O",
            "Ǫ": "O",
            "Ǭ": "O",
            "Ø": "O",
            "Ǿ": "O",
            "Ɔ": "O",
            "Ɵ": "O",
            "Ꝋ": "O",
            "Ꝍ": "O",
            "Œ": "OE",
            "Ƣ": "OI",
            "Ꝏ": "OO",
            "Ȣ": "OU",
            "Ⓟ": "P",
            "Ｐ": "P",
            "Ṕ": "P",
            "Ṗ": "P",
            "Ƥ": "P",
            "Ᵽ": "P",
            "Ꝑ": "P",
            "Ꝓ": "P",
            "Ꝕ": "P",
            "Ⓠ": "Q",
            "Ｑ": "Q",
            "Ꝗ": "Q",
            "Ꝙ": "Q",
            "Ɋ": "Q",
            "Ⓡ": "R",
            "Ｒ": "R",
            "Ŕ": "R",
            "Ṙ": "R",
            "Ř": "R",
            "Ȑ": "R",
            "Ȓ": "R",
            "Ṛ": "R",
            "Ṝ": "R",
            "Ŗ": "R",
            "Ṟ": "R",
            "Ɍ": "R",
            "Ɽ": "R",
            "Ꝛ": "R",
            "Ꞧ": "R",
            "Ꞃ": "R",
            "Ⓢ": "S",
            "Ｓ": "S",
            "ẞ": "S",
            "Ś": "S",
            "Ṥ": "S",
            "Ŝ": "S",
            "Ṡ": "S",
            "Š": "S",
            "Ṧ": "S",
            "Ṣ": "S",
            "Ṩ": "S",
            "Ș": "S",
            "Ş": "S",
            "Ȿ": "S",
            "Ꞩ": "S",
            "Ꞅ": "S",
            "Ⓣ": "T",
            "Ｔ": "T",
            "Ṫ": "T",
            "Ť": "T",
            "Ṭ": "T",
            "Ț": "T",
            "Ţ": "T",
            "Ṱ": "T",
            "Ṯ": "T",
            "Ŧ": "T",
            "Ƭ": "T",
            "Ʈ": "T",
            "Ⱦ": "T",
            "Ꞇ": "T",
            "Ꜩ": "TZ",
            "Ⓤ": "U",
            "Ｕ": "U",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ũ": "U",
            "Ṹ": "U",
            "Ū": "U",
            "Ṻ": "U",
            "Ŭ": "U",
            "Ü": "U",
            "Ǜ": "U",
            "Ǘ": "U",
            "Ǖ": "U",
            "Ǚ": "U",
            "Ủ": "U",
            "Ů": "U",
            "Ű": "U",
            "Ǔ": "U",
            "Ȕ": "U",
            "Ȗ": "U",
            "Ư": "U",
            "Ừ": "U",
            "Ứ": "U",
            "Ữ": "U",
            "Ử": "U",
            "Ự": "U",
            "Ụ": "U",
            "Ṳ": "U",
            "Ų": "U",
            "Ṷ": "U",
            "Ṵ": "U",
            "Ʉ": "U",
            "Ⓥ": "V",
            "Ｖ": "V",
            "Ṽ": "V",
            "Ṿ": "V",
            "Ʋ": "V",
            "Ꝟ": "V",
            "Ʌ": "V",
            "Ꝡ": "VY",
            "Ⓦ": "W",
            "Ｗ": "W",
            "Ẁ": "W",
            "Ẃ": "W",
            "Ŵ": "W",
            "Ẇ": "W",
            "Ẅ": "W",
            "Ẉ": "W",
            "Ⱳ": "W",
            "Ⓧ": "X",
            "Ｘ": "X",
            "Ẋ": "X",
            "Ẍ": "X",
            "Ⓨ": "Y",
            "Ｙ": "Y",
            "Ỳ": "Y",
            "Ý": "Y",
            "Ŷ": "Y",
            "Ỹ": "Y",
            "Ȳ": "Y",
            "Ẏ": "Y",
            "Ÿ": "Y",
            "Ỷ": "Y",
            "Ỵ": "Y",
            "Ƴ": "Y",
            "Ɏ": "Y",
            "Ỿ": "Y",
            "Ⓩ": "Z",
            "Ｚ": "Z",
            "Ź": "Z",
            "Ẑ": "Z",
            "Ż": "Z",
            "Ž": "Z",
            "Ẓ": "Z",
            "Ẕ": "Z",
            "Ƶ": "Z",
            "Ȥ": "Z",
            "Ɀ": "Z",
            "Ⱬ": "Z",
            "Ꝣ": "Z",
            "ⓐ": "a",
            "ａ": "a",
            "ẚ": "a",
            "à": "a",
            "á": "a",
            "â": "a",
            "ầ": "a",
            "ấ": "a",
            "ẫ": "a",
            "ẩ": "a",
            "ã": "a",
            "ā": "a",
            "ă": "a",
            "ằ": "a",
            "ắ": "a",
            "ẵ": "a",
            "ẳ": "a",
            "ȧ": "a",
            "ǡ": "a",
            "ä": "a",
            "ǟ": "a",
            "ả": "a",
            "å": "a",
            "ǻ": "a",
            "ǎ": "a",
            "ȁ": "a",
            "ȃ": "a",
            "ạ": "a",
            "ậ": "a",
            "ặ": "a",
            "ḁ": "a",
            "ą": "a",
            "ⱥ": "a",
            "ɐ": "a",
            "ꜳ": "aa",
            "æ": "ae",
            "ǽ": "ae",
            "ǣ": "ae",
            "ꜵ": "ao",
            "ꜷ": "au",
            "ꜹ": "av",
            "ꜻ": "av",
            "ꜽ": "ay",
            "ⓑ": "b",
            "ｂ": "b",
            "ḃ": "b",
            "ḅ": "b",
            "ḇ": "b",
            "ƀ": "b",
            "ƃ": "b",
            "ɓ": "b",
            "ⓒ": "c",
            "ｃ": "c",
            "ć": "c",
            "ĉ": "c",
            "ċ": "c",
            "č": "c",
            "ç": "c",
            "ḉ": "c",
            "ƈ": "c",
            "ȼ": "c",
            "ꜿ": "c",
            "ↄ": "c",
            "ⓓ": "d",
            "ｄ": "d",
            "ḋ": "d",
            "ď": "d",
            "ḍ": "d",
            "ḑ": "d",
            "ḓ": "d",
            "ḏ": "d",
            "đ": "d",
            "ƌ": "d",
            "ɖ": "d",
            "ɗ": "d",
            "ꝺ": "d",
            "ǳ": "dz",
            "ǆ": "dz",
            "ⓔ": "e",
            "ｅ": "e",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ề": "e",
            "ế": "e",
            "ễ": "e",
            "ể": "e",
            "ẽ": "e",
            "ē": "e",
            "ḕ": "e",
            "ḗ": "e",
            "ĕ": "e",
            "ė": "e",
            "ë": "e",
            "ẻ": "e",
            "ě": "e",
            "ȅ": "e",
            "ȇ": "e",
            "ẹ": "e",
            "ệ": "e",
            "ȩ": "e",
            "ḝ": "e",
            "ę": "e",
            "ḙ": "e",
            "ḛ": "e",
            "ɇ": "e",
            "ɛ": "e",
            "ǝ": "e",
            "ⓕ": "f",
            "ｆ": "f",
            "ḟ": "f",
            "ƒ": "f",
            "ꝼ": "f",
            "ⓖ": "g",
            "ｇ": "g",
            "ǵ": "g",
            "ĝ": "g",
            "ḡ": "g",
            "ğ": "g",
            "ġ": "g",
            "ǧ": "g",
            "ģ": "g",
            "ǥ": "g",
            "ɠ": "g",
            "ꞡ": "g",
            "ᵹ": "g",
            "ꝿ": "g",
            "ⓗ": "h",
            "ｈ": "h",
            "ĥ": "h",
            "ḣ": "h",
            "ḧ": "h",
            "ȟ": "h",
            "ḥ": "h",
            "ḩ": "h",
            "ḫ": "h",
            "ẖ": "h",
            "ħ": "h",
            "ⱨ": "h",
            "ⱶ": "h",
            "ɥ": "h",
            "ƕ": "hv",
            "ⓘ": "i",
            "ｉ": "i",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ĩ": "i",
            "ī": "i",
            "ĭ": "i",
            "ï": "i",
            "ḯ": "i",
            "ỉ": "i",
            "ǐ": "i",
            "ȉ": "i",
            "ȋ": "i",
            "ị": "i",
            "į": "i",
            "ḭ": "i",
            "ɨ": "i",
            "ı": "i",
            "ⓙ": "j",
            "ｊ": "j",
            "ĵ": "j",
            "ǰ": "j",
            "ɉ": "j",
            "ⓚ": "k",
            "ｋ": "k",
            "ḱ": "k",
            "ǩ": "k",
            "ḳ": "k",
            "ķ": "k",
            "ḵ": "k",
            "ƙ": "k",
            "ⱪ": "k",
            "ꝁ": "k",
            "ꝃ": "k",
            "ꝅ": "k",
            "ꞣ": "k",
            "ⓛ": "l",
            "ｌ": "l",
            "ŀ": "l",
            "ĺ": "l",
            "ľ": "l",
            "ḷ": "l",
            "ḹ": "l",
            "ļ": "l",
            "ḽ": "l",
            "ḻ": "l",
            "ſ": "l",
            "ł": "l",
            "ƚ": "l",
            "ɫ": "l",
            "ⱡ": "l",
            "ꝉ": "l",
            "ꞁ": "l",
            "ꝇ": "l",
            "ǉ": "lj",
            "ⓜ": "m",
            "ｍ": "m",
            "ḿ": "m",
            "ṁ": "m",
            "ṃ": "m",
            "ɱ": "m",
            "ɯ": "m",
            "ⓝ": "n",
            "ｎ": "n",
            "ǹ": "n",
            "ń": "n",
            "ñ": "n",
            "ṅ": "n",
            "ň": "n",
            "ṇ": "n",
            "ņ": "n",
            "ṋ": "n",
            "ṉ": "n",
            "ƞ": "n",
            "ɲ": "n",
            "ŉ": "n",
            "ꞑ": "n",
            "ꞥ": "n",
            "ǌ": "nj",
            "ⓞ": "o",
            "ｏ": "o",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "ồ": "o",
            "ố": "o",
            "ỗ": "o",
            "ổ": "o",
            "õ": "o",
            "ṍ": "o",
            "ȭ": "o",
            "ṏ": "o",
            "ō": "o",
            "ṑ": "o",
            "ṓ": "o",
            "ŏ": "o",
            "ȯ": "o",
            "ȱ": "o",
            "ö": "o",
            "ȫ": "o",
            "ỏ": "o",
            "ő": "o",
            "ǒ": "o",
            "ȍ": "o",
            "ȏ": "o",
            "ơ": "o",
            "ờ": "o",
            "ớ": "o",
            "ỡ": "o",
            "ở": "o",
            "ợ": "o",
            "ọ": "o",
            "ộ": "o",
            "ǫ": "o",
            "ǭ": "o",
            "ø": "o",
            "ǿ": "o",
            "ɔ": "o",
            "ꝋ": "o",
            "ꝍ": "o",
            "ɵ": "o",
            "œ": "oe",
            "ƣ": "oi",
            "ȣ": "ou",
            "ꝏ": "oo",
            "ⓟ": "p",
            "ｐ": "p",
            "ṕ": "p",
            "ṗ": "p",
            "ƥ": "p",
            "ᵽ": "p",
            "ꝑ": "p",
            "ꝓ": "p",
            "ꝕ": "p",
            "ⓠ": "q",
            "ｑ": "q",
            "ɋ": "q",
            "ꝗ": "q",
            "ꝙ": "q",
            "ⓡ": "r",
            "ｒ": "r",
            "ŕ": "r",
            "ṙ": "r",
            "ř": "r",
            "ȑ": "r",
            "ȓ": "r",
            "ṛ": "r",
            "ṝ": "r",
            "ŗ": "r",
            "ṟ": "r",
            "ɍ": "r",
            "ɽ": "r",
            "ꝛ": "r",
            "ꞧ": "r",
            "ꞃ": "r",
            "ⓢ": "s",
            "ｓ": "s",
            "ß": "s",
            "ś": "s",
            "ṥ": "s",
            "ŝ": "s",
            "ṡ": "s",
            "š": "s",
            "ṧ": "s",
            "ṣ": "s",
            "ṩ": "s",
            "ș": "s",
            "ş": "s",
            "ȿ": "s",
            "ꞩ": "s",
            "ꞅ": "s",
            "ẛ": "s",
            "ⓣ": "t",
            "ｔ": "t",
            "ṫ": "t",
            "ẗ": "t",
            "ť": "t",
            "ṭ": "t",
            "ț": "t",
            "ţ": "t",
            "ṱ": "t",
            "ṯ": "t",
            "ŧ": "t",
            "ƭ": "t",
            "ʈ": "t",
            "ⱦ": "t",
            "ꞇ": "t",
            "ꜩ": "tz",
            "ⓤ": "u",
            "ｕ": "u",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ũ": "u",
            "ṹ": "u",
            "ū": "u",
            "ṻ": "u",
            "ŭ": "u",
            "ü": "u",
            "ǜ": "u",
            "ǘ": "u",
            "ǖ": "u",
            "ǚ": "u",
            "ủ": "u",
            "ů": "u",
            "ű": "u",
            "ǔ": "u",
            "ȕ": "u",
            "ȗ": "u",
            "ư": "u",
            "ừ": "u",
            "ứ": "u",
            "ữ": "u",
            "ử": "u",
            "ự": "u",
            "ụ": "u",
            "ṳ": "u",
            "ų": "u",
            "ṷ": "u",
            "ṵ": "u",
            "ʉ": "u",
            "ⓥ": "v",
            "ｖ": "v",
            "ṽ": "v",
            "ṿ": "v",
            "ʋ": "v",
            "ꝟ": "v",
            "ʌ": "v",
            "ꝡ": "vy",
            "ⓦ": "w",
            "ｗ": "w",
            "ẁ": "w",
            "ẃ": "w",
            "ŵ": "w",
            "ẇ": "w",
            "ẅ": "w",
            "ẘ": "w",
            "ẉ": "w",
            "ⱳ": "w",
            "ⓧ": "x",
            "ｘ": "x",
            "ẋ": "x",
            "ẍ": "x",
            "ⓨ": "y",
            "ｙ": "y",
            "ỳ": "y",
            "ý": "y",
            "ŷ": "y",
            "ỹ": "y",
            "ȳ": "y",
            "ẏ": "y",
            "ÿ": "y",
            "ỷ": "y",
            "ẙ": "y",
            "ỵ": "y",
            "ƴ": "y",
            "ɏ": "y",
            "ỿ": "y",
            "ⓩ": "z",
            "ｚ": "z",
            "ź": "z",
            "ẑ": "z",
            "ż": "z",
            "ž": "z",
            "ẓ": "z",
            "ẕ": "z",
            "ƶ": "z",
            "ȥ": "z",
            "ɀ": "z",
            "ⱬ": "z",
            "ꝣ": "z",
            "Ά": "Α",
            "Έ": "Ε",
            "Ή": "Η",
            "Ί": "Ι",
            "Ϊ": "Ι",
            "Ό": "Ο",
            "Ύ": "Υ",
            "Ϋ": "Υ",
            "Ώ": "Ω",
            "ά": "α",
            "έ": "ε",
            "ή": "η",
            "ί": "ι",
            "ϊ": "ι",
            "ΐ": "ι",
            "ό": "ο",
            "ύ": "υ",
            "ϋ": "υ",
            "ΰ": "υ",
            "ώ": "ω",
            "ς": "σ",
            "’": "'"
        }
    }),
    u.define("select2/data/base", ["../utils"], function(n) {
        function s(e, t) {
            s.__super__.constructor.call(this)
        }
        return n.Extend(s, n.Observable),
        s.prototype.current = function(e) {
            throw new Error("The `current` method must be defined in child classes.")
        }
        ,
        s.prototype.query = function(e, t) {
            throw new Error("The `query` method must be defined in child classes.")
        }
        ,
        s.prototype.bind = function(e, t) {}
        ,
        s.prototype.destroy = function() {}
        ,
        s.prototype.generateResultId = function(e, t) {
            e = e.id + "-result-";
            return e += n.generateChars(4),
            null != t.id ? e += "-" + t.id.toString() : e += "-" + n.generateChars(4),
            e
        }
        ,
        s
    }),
    u.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, a, l) {
        function n(e, t) {
            this.$element = e,
            this.options = t,
            n.__super__.constructor.call(this)
        }
        return a.Extend(n, e),
        n.prototype.current = function(e) {
            var t = this;
            e(Array.prototype.map.call(this.$element[0].querySelectorAll(":checked"), function(e) {
                return t.item(l(e))
            }))
        }
        ,
        n.prototype.select = function(i) {
            var e, r = this;
            if (i.selected = !0,
            null != i.element && "option" === i.element.tagName.toLowerCase())
                return i.element.selected = !0,
                void this.$element.trigger("input").trigger("change");
            this.$element.prop("multiple") ? this.current(function(e) {
                var t = [];
                (i = [i]).push.apply(i, e);
                for (var n = 0; n < i.length; n++) {
                    var s = i[n].id;
                    -1 === t.indexOf(s) && t.push(s)
                }
                r.$element.val(t),
                r.$element.trigger("input").trigger("change")
            }) : (e = i.id,
            this.$element.val(e),
            this.$element.trigger("input").trigger("change"))
        }
        ,
        n.prototype.unselect = function(i) {
            var r = this;
            if (this.$element.prop("multiple")) {
                if (i.selected = !1,
                null != i.element && "option" === i.element.tagName.toLowerCase())
                    return i.element.selected = !1,
                    void this.$element.trigger("input").trigger("change");
                this.current(function(e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var s = e[n].id;
                        s !== i.id && -1 === t.indexOf(s) && t.push(s)
                    }
                    r.$element.val(t),
                    r.$element.trigger("input").trigger("change")
                })
            }
        }
        ,
        n.prototype.bind = function(e, t) {
            var n = this;
            (this.container = e).on("select", function(e) {
                n.select(e.data)
            }),
            e.on("unselect", function(e) {
                n.unselect(e.data)
            })
        }
        ,
        n.prototype.destroy = function() {
            this.$element.find("*").each(function() {
                a.RemoveData(this)
            })
        }
        ,
        n.prototype.query = function(t, e) {
            var n = []
              , s = this;
            this.$element.children().each(function() {
                var e;
                "option" !== this.tagName.toLowerCase() && "optgroup" !== this.tagName.toLowerCase() || (e = l(this),
                e = s.item(e),
                null !== (e = s.matches(t, e)) && n.push(e))
            }),
            e({
                results: n
            })
        }
        ,
        n.prototype.addOptions = function(e) {
            this.$element.append(e)
        }
        ,
        n.prototype.option = function(e) {
            var t;
            e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text,
            void 0 !== e.id && (t.value = e.id),
            e.disabled && (t.disabled = !0),
            e.selected && (t.selected = !0),
            e.title && (t.title = e.title);
            e = this._normalizeItem(e);
            return e.element = t,
            a.StoreData(t, "data", e),
            l(t)
        }
        ,
        n.prototype.item = function(e) {
            var t = {};
            if (null != (t = a.GetData(e[0], "data")))
                return t;
            var n = e[0];
            if ("option" === n.tagName.toLowerCase())
                t = {
                    id: e.val(),
                    text: e.text(),
                    disabled: e.prop("disabled"),
                    selected: e.prop("selected"),
                    title: e.prop("title")
                };
            else if ("optgroup" === n.tagName.toLowerCase()) {
                t = {
                    text: e.prop("label"),
                    children: [],
                    title: e.prop("title")
                };
                for (var s = e.children("option"), i = [], r = 0; r < s.length; r++) {
                    var o = l(s[r])
                      , o = this.item(o);
                    i.push(o)
                }
                t.children = i
            }
            return (t = this._normalizeItem(t)).element = e[0],
            a.StoreData(e[0], "data", t),
            t
        }
        ,
        n.prototype._normalizeItem = function(e) {
            e !== Object(e) && (e = {
                id: e,
                text: e
            });
            return null != (e = l.extend({}, {
                text: ""
            }, e)).id && (e.id = e.id.toString()),
            null != e.text && (e.text = e.text.toString()),
            null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)),
            l.extend({}, {
                selected: !1,
                disabled: !1
            }, e)
        }
        ,
        n.prototype.matches = function(e, t) {
            return this.options.get("matcher")(e, t)
        }
        ,
        n
    }),
    u.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, t, c) {
        function s(e, t) {
            this._dataToConvert = t.get("data") || [],
            s.__super__.constructor.call(this, e, t)
        }
        return t.Extend(s, e),
        s.prototype.bind = function(e, t) {
            s.__super__.bind.call(this, e, t),
            this.addOptions(this.convertToOptions(this._dataToConvert))
        }
        ,
        s.prototype.select = function(n) {
            var e = this.$element.find("option").filter(function(e, t) {
                return t.value == n.id.toString()
            });
            0 === e.length && (e = this.option(n),
            this.addOptions(e)),
            s.__super__.select.call(this, n)
        }
        ,
        s.prototype.convertToOptions = function(e) {
            var t = this
              , n = this.$element.find("option")
              , s = n.map(function() {
                return t.item(c(this)).id
            }).get()
              , i = [];
            for (var r = 0; r < e.length; r++) {
                var o, a, l = this._normalizeItem(e[r]);
                0 <= s.indexOf(l.id) ? (o = n.filter(function(e) {
                    return function() {
                        return c(this).val() == e.id
                    }
                }(l)),
                a = this.item(o),
                a = c.extend(!0, {}, l, a),
                a = this.option(a),
                o.replaceWith(a)) : (a = this.option(l),
                l.children && (l = this.convertToOptions(l.children),
                a.append(l)),
                i.push(a))
            }
            return i
        }
        ,
        s
    }),
    u.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, r) {
        function n(e, t) {
            this.ajaxOptions = this._applyDefaults(t.get("ajax")),
            null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults),
            n.__super__.constructor.call(this, e, t)
        }
        return t.Extend(n, e),
        n.prototype._applyDefaults = function(e) {
            var t = {
                data: function(e) {
                    return r.extend({}, e, {
                        q: e.term
                    })
                },
                transport: function(e, t, n) {
                    e = r.ajax(e);
                    return e.then(t),
                    e.fail(n),
                    e
                }
            };
            return r.extend({}, t, e, !0)
        }
        ,
        n.prototype.processResults = function(e) {
            return e
        }
        ,
        n.prototype.query = function(t, n) {
            var s = this;
            null != this._request && ("function" == typeof this._request.abort && this._request.abort(),
            this._request = null);
            var i = r.extend({
                type: "GET"
            }, this.ajaxOptions);
            function e() {
                var e = i.transport(i, function(e) {
                    e = s.processResults(e, t);
                    s.options.get("debug") && window.console && console.error && (e && e.results && Array.isArray(e.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),
                    n(e)
                }, function() {
                    "status"in e && (0 === e.status || "0" === e.status) || s.trigger("results:message", {
                        message: "errorLoading"
                    })
                });
                s._request = e
            }
            "function" == typeof i.url && (i.url = i.url.call(this.$element, t)),
            "function" == typeof i.data && (i.data = i.data.call(this.$element, t)),
            this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout),
            this._queryTimeout = window.setTimeout(e, this.ajaxOptions.delay)) : e()
        }
        ,
        n
    }),
    u.define("select2/data/tags", ["jquery"], function(t) {
        function e(e, t, n) {
            var s = n.get("tags")
              , i = n.get("createTag");
            void 0 !== i && (this.createTag = i);
            i = n.get("insertTag");
            if (void 0 !== i && (this.insertTag = i),
            e.call(this, t, n),
            Array.isArray(s))
                for (var r = 0; r < s.length; r++) {
                    var o = s[r]
                      , o = this._normalizeItem(o)
                      , o = this.option(o);
                    this.$element.append(o)
                }
        }
        return e.prototype.query = function(e, c, u) {
            var d = this;
            this._removeOldTags(),
            null != c.term && null == c.page ? e.call(this, c, function e(t, n) {
                for (var s = t.results, i = 0; i < s.length; i++) {
                    var r = s[i]
                      , o = null != r.children && !e({
                        results: r.children
                    }, !0);
                    if ((r.text || "").toUpperCase() === (c.term || "").toUpperCase() || o)
                        return !n && (t.data = s,
                        void u(t))
                }
                if (n)
                    return !0;
                var a, l = d.createTag(c);
                null != l && ((a = d.option(l)).attr("data-select2-tag", "true"),
                d.addOptions([a]),
                d.insertTag(s, l)),
                t.results = s,
                u(t)
            }) : e.call(this, c, u)
        }
        ,
        e.prototype.createTag = function(e, t) {
            if (null == t.term)
                return null;
            t = t.term.trim();
            return "" === t ? null : {
                id: t,
                text: t
            }
        }
        ,
        e.prototype.insertTag = function(e, t, n) {
            t.unshift(n)
        }
        ,
        e.prototype._removeOldTags = function(e) {
            this.$element.find("option[data-select2-tag]").each(function() {
                this.selected || t(this).remove()
            })
        }
        ,
        e
    }),
    u.define("select2/data/tokenizer", ["jquery"], function(c) {
        function e(e, t, n) {
            var s = n.get("tokenizer");
            void 0 !== s && (this.tokenizer = s),
            e.call(this, t, n)
        }
        return e.prototype.bind = function(e, t, n) {
            e.call(this, t, n),
            this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
        }
        ,
        e.prototype.query = function(e, t, n) {
            var s = this;
            t.term = t.term || "";
            var i = this.tokenizer(t, this.options, function(e) {
                var t, n = s._normalizeItem(e);
                s.$element.find("option").filter(function() {
                    return c(this).val() === n.id
                }).length || ((t = s.option(n)).attr("data-select2-tag", !0),
                s._removeOldTags(),
                s.addOptions([t])),
                t = n,
                s.trigger("select", {
                    data: t
                })
            });
            i.term !== t.term && (this.$search.length && (this.$search.val(i.term),
            this.$search.trigger("focus")),
            t.term = i.term),
            e.call(this, t, n)
        }
        ,
        e.prototype.tokenizer = function(e, t, n, s) {
            for (var i = n.get("tokenSeparators") || [], r = t.term, o = 0, a = this.createTag || function(e) {
                return {
                    id: e.term,
                    text: e.term
                }
            }
            ; o < r.length; ) {
                var l = r[o];
                -1 !== i.indexOf(l) ? (l = r.substr(0, o),
                null != (l = a(c.extend({}, t, {
                    term: l
                }))) ? (s(l),
                r = r.substr(o + 1) || "",
                o = 0) : o++) : o++
            }
            return {
                term: r
            }
        }
        ,
        e
    }),
    u.define("select2/data/minimumInputLength", [], function() {
        function e(e, t, n) {
            this.minimumInputLength = n.get("minimumInputLength"),
            e.call(this, t, n)
        }
        return e.prototype.query = function(e, t, n) {
            t.term = t.term || "",
            t.term.length < this.minimumInputLength ? this.trigger("results:message", {
                message: "inputTooShort",
                args: {
                    minimum: this.minimumInputLength,
                    input: t.term,
                    params: t
                }
            }) : e.call(this, t, n)
        }
        ,
        e
    }),
    u.define("select2/data/maximumInputLength", [], function() {
        function e(e, t, n) {
            this.maximumInputLength = n.get("maximumInputLength"),
            e.call(this, t, n)
        }
        return e.prototype.query = function(e, t, n) {
            t.term = t.term || "",
            0 < this.maximumInputLength && t.term.length > this.maximumInputLength ? this.trigger("results:message", {
                message: "inputTooLong",
                args: {
                    maximum: this.maximumInputLength,
                    input: t.term,
                    params: t
                }
            }) : e.call(this, t, n)
        }
        ,
        e
    }),
    u.define("select2/data/maximumSelectionLength", [], function() {
        function e(e, t, n) {
            this.maximumSelectionLength = n.get("maximumSelectionLength"),
            e.call(this, t, n)
        }
        return e.prototype.bind = function(e, t, n) {
            var s = this;
            e.call(this, t, n),
            t.on("select", function() {
                s._checkIfMaximumSelected()
            })
        }
        ,
        e.prototype.query = function(e, t, n) {
            var s = this;
            this._checkIfMaximumSelected(function() {
                e.call(s, t, n)
            })
        }
        ,
        e.prototype._checkIfMaximumSelected = function(e, t) {
            var n = this;
            this.current(function(e) {
                e = null != e ? e.length : 0;
                0 < n.maximumSelectionLength && e >= n.maximumSelectionLength ? n.trigger("results:message", {
                    message: "maximumSelected",
                    args: {
                        maximum: n.maximumSelectionLength
                    }
                }) : t && t()
            })
        }
        ,
        e
    }),
    u.define("select2/dropdown", ["jquery", "./utils"], function(t, e) {
        function n(e, t) {
            this.$element = e,
            this.options = t,
            n.__super__.constructor.call(this)
        }
        return e.Extend(n, e.Observable),
        n.prototype.render = function() {
            var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
            return e.attr("dir", this.options.get("dir")),
            this.$dropdown = e
        }
        ,
        n.prototype.bind = function() {}
        ,
        n.prototype.position = function(e, t) {}
        ,
        n.prototype.destroy = function() {
            this.$dropdown.remove()
        }
        ,
        n
    }),
    u.define("select2/dropdown/search", ["jquery"], function(r) {
        function e() {}
        return e.prototype.render = function(e) {
            var t = e.call(this)
              , n = this.options.get("translations").get("search")
              , e = r('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');
            return this.$searchContainer = e,
            this.$search = e.find("input"),
            this.$search.prop("autocomplete", this.options.get("autocomplete")),
            this.$search.attr("aria-label", n()),
            t.prepend(e),
            t
        }
        ,
        e.prototype.bind = function(e, t, n) {
            var s = this
              , i = t.id + "-results";
            e.call(this, t, n),
            this.$search.on("keydown", function(e) {
                s.trigger("keypress", e),
                s._keyUpPrevented = e.isDefaultPrevented()
            }),
            this.$search.on("input", function(e) {
                r(this).off("keyup")
            }),
            this.$search.on("keyup input", function(e) {
                s.handleSearch(e)
            }),
            t.on("open", function() {
                s.$search.attr("tabindex", 0),
                s.$search.attr("aria-controls", i),
                s.$search.trigger("focus"),
                window.setTimeout(function() {
                    s.$search.trigger("focus")
                }, 0)
            }),
            t.on("close", function() {
                s.$search.attr("tabindex", -1),
                s.$search.removeAttr("aria-controls"),
                s.$search.removeAttr("aria-activedescendant"),
                s.$search.val(""),
                s.$search.trigger("blur")
            }),
            t.on("focus", function() {
                t.isOpen() || s.$search.trigger("focus")
            }),
            t.on("results:all", function(e) {
                null != e.query.term && "" !== e.query.term || (s.showSearch(e) ? s.$searchContainer[0].classList.remove("select2-search--hide") : s.$searchContainer[0].classList.add("select2-search--hide"))
            }),
            t.on("results:focus", function(e) {
                e.data._resultId ? s.$search.attr("aria-activedescendant", e.data._resultId) : s.$search.removeAttr("aria-activedescendant")
            })
        }
        ,
        e.prototype.handleSearch = function(e) {
            var t;
            this._keyUpPrevented || (t = this.$search.val(),
            this.trigger("query", {
                term: t
            })),
            this._keyUpPrevented = !1
        }
        ,
        e.prototype.showSearch = function(e, t) {
            return !0
        }
        ,
        e
    }),
    u.define("select2/dropdown/hidePlaceholder", [], function() {
        function e(e, t, n, s) {
            this.placeholder = this.normalizePlaceholder(n.get("placeholder")),
            e.call(this, t, n, s)
        }
        return e.prototype.append = function(e, t) {
            t.results = this.removePlaceholder(t.results),
            e.call(this, t)
        }
        ,
        e.prototype.normalizePlaceholder = function(e, t) {
            return t = "string" == typeof t ? {
                id: "",
                text: t
            } : t
        }
        ,
        e.prototype.removePlaceholder = function(e, t) {
            for (var n = t.slice(0), s = t.length - 1; 0 <= s; s--) {
                var i = t[s];
                this.placeholder.id === i.id && n.splice(s, 1)
            }
            return n
        }
        ,
        e
    }),
    u.define("select2/dropdown/infiniteScroll", ["jquery"], function(n) {
        function e(e, t, n, s) {
            this.lastParams = {},
            e.call(this, t, n, s),
            this.$loadingMore = this.createLoadingMore(),
            this.loading = !1
        }
        return e.prototype.append = function(e, t) {
            this.$loadingMore.remove(),
            this.loading = !1,
            e.call(this, t),
            this.showLoadingMore(t) && (this.$results.append(this.$loadingMore),
            this.loadMoreIfNeeded())
        }
        ,
        e.prototype.bind = function(e, t, n) {
            var s = this;
            e.call(this, t, n),
            t.on("query", function(e) {
                s.lastParams = e,
                s.loading = !0
            }),
            t.on("query:append", function(e) {
                s.lastParams = e,
                s.loading = !0
            }),
            this.$results.on("scroll", this.loadMoreIfNeeded.bind(this))
        }
        ,
        e.prototype.loadMoreIfNeeded = function() {
            var e = n.contains(document.documentElement, this.$loadingMore[0]);
            !this.loading && e && (e = this.$results.offset().top + this.$results.outerHeight(!1),
            this.$loadingMore.offset().top + this.$loadingMore.outerHeight(!1) <= e + 50 && this.loadMore())
        }
        ,
        e.prototype.loadMore = function() {
            this.loading = !0;
            var e = n.extend({}, {
                page: 1
            }, this.lastParams);
            e.page++,
            this.trigger("query:append", e)
        }
        ,
        e.prototype.showLoadingMore = function(e, t) {
            return t.pagination && t.pagination.more
        }
        ,
        e.prototype.createLoadingMore = function() {
            var e = n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>')
              , t = this.options.get("translations").get("loadingMore");
            return e.html(t(this.lastParams)),
            e
        }
        ,
        e
    }),
    u.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(u, o) {
        function e(e, t, n) {
            this.$dropdownParent = u(n.get("dropdownParent") || document.body),
            e.call(this, t, n)
        }
        return e.prototype.bind = function(e, t, n) {
            var s = this;
            e.call(this, t, n),
            t.on("open", function() {
                s._showDropdown(),
                s._attachPositioningHandler(t),
                s._bindContainerResultHandlers(t)
            }),
            t.on("close", function() {
                s._hideDropdown(),
                s._detachPositioningHandler(t)
            }),
            this.$dropdownContainer.on("mousedown", function(e) {
                e.stopPropagation()
            })
        }
        ,
        e.prototype.destroy = function(e) {
            e.call(this),
            this.$dropdownContainer.remove()
        }
        ,
        e.prototype.position = function(e, t, n) {
            t.attr("class", n.attr("class")),
            t[0].classList.remove("select2"),
            t[0].classList.add("select2-container--open"),
            t.css({
                position: "absolute",
                top: -999999
            }),
            this.$container = n
        }
        ,
        e.prototype.render = function(e) {
            var t = u("<span></span>")
              , e = e.call(this);
            return t.append(e),
            this.$dropdownContainer = t
        }
        ,
        e.prototype._hideDropdown = function(e) {
            this.$dropdownContainer.detach()
        }
        ,
        e.prototype._bindContainerResultHandlers = function(e, t) {
            var n;
            this._containerResultsHandlersBound || (n = this,
            t.on("results:all", function() {
                n._positionDropdown(),
                n._resizeDropdown()
            }),
            t.on("results:append", function() {
                n._positionDropdown(),
                n._resizeDropdown()
            }),
            t.on("results:message", function() {
                n._positionDropdown(),
                n._resizeDropdown()
            }),
            t.on("select", function() {
                n._positionDropdown(),
                n._resizeDropdown()
            }),
            t.on("unselect", function() {
                n._positionDropdown(),
                n._resizeDropdown()
            }),
            this._containerResultsHandlersBound = !0)
        }
        ,
        e.prototype._attachPositioningHandler = function(e, t) {
            var n = this
              , s = "scroll.select2." + t.id
              , i = "resize.select2." + t.id
              , r = "orientationchange.select2." + t.id
              , t = this.$container.parents().filter(o.hasScroll);
            t.each(function() {
                o.StoreData(this, "select2-scroll-position", {
                    x: u(this).scrollLeft(),
                    y: u(this).scrollTop()
                })
            }),
            t.on(s, function(e) {
                var t = o.GetData(this, "select2-scroll-position");
                u(this).scrollTop(t.y)
            }),
            u(window).on(s + " " + i + " " + r, function(e) {
                n._positionDropdown(),
                n._resizeDropdown()
            })
        }
        ,
        e.prototype._detachPositioningHandler = function(e, t) {
            var n = "scroll.select2." + t.id
              , s = "resize.select2." + t.id
              , t = "orientationchange.select2." + t.id;
            this.$container.parents().filter(o.hasScroll).off(n),
            u(window).off(n + " " + s + " " + t)
        }
        ,
        e.prototype._positionDropdown = function() {
            var e = u(window)
              , t = this.$dropdown[0].classList.contains("select2-dropdown--above")
              , n = this.$dropdown[0].classList.contains("select2-dropdown--below")
              , s = null
              , i = this.$container.offset();
            i.bottom = i.top + this.$container.outerHeight(!1);
            var r = {
                height: this.$container.outerHeight(!1)
            };
            r.top = i.top,
            r.bottom = i.top + r.height;
            var o = this.$dropdown.outerHeight(!1)
              , a = e.scrollTop()
              , l = e.scrollTop() + e.height()
              , c = a < i.top - o
              , e = l > i.bottom + o
              , a = {
                left: i.left,
                top: r.bottom
            }
              , l = this.$dropdownParent;
            "static" === l.css("position") && (l = l.offsetParent());
            i = {
                top: 0,
                left: 0
            };
            (u.contains(document.body, l[0]) || l[0].isConnected) && (i = l.offset()),
            a.top -= i.top,
            a.left -= i.left,
            t || n || (s = "below"),
            e || !c || t ? !c && e && t && (s = "below") : s = "above",
            ("above" == s || t && "below" !== s) && (a.top = r.top - i.top - o),
            null != s && (this.$dropdown[0].classList.remove("select2-dropdown--below"),
            this.$dropdown[0].classList.remove("select2-dropdown--above"),
            this.$dropdown[0].classList.add("select2-dropdown--" + s),
            this.$container[0].classList.remove("select2-container--below"),
            this.$container[0].classList.remove("select2-container--above"),
            this.$container[0].classList.add("select2-container--" + s)),
            this.$dropdownContainer.css(a)
        }
        ,
        e.prototype._resizeDropdown = function() {
            var e = {
                width: this.$container.outerWidth(!1) + "px"
            };
            this.options.get("dropdownAutoWidth") && (e.minWidth = e.width,
            e.position = "relative",
            e.width = "auto"),
            this.$dropdown.css(e)
        }
        ,
        e.prototype._showDropdown = function(e) {
            this.$dropdownContainer.appendTo(this.$dropdownParent),
            this._positionDropdown(),
            this._resizeDropdown()
        }
        ,
        e
    }),
    u.define("select2/dropdown/minimumResultsForSearch", [], function() {
        function e(e, t, n, s) {
            this.minimumResultsForSearch = n.get("minimumResultsForSearch"),
            this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0),
            e.call(this, t, n, s)
        }
        return e.prototype.showSearch = function(e, t) {
            return !(function e(t) {
                for (var n = 0, s = 0; s < t.length; s++) {
                    var i = t[s];
                    i.children ? n += e(i.children) : n++
                }
                return n
            }(t.data.results) < this.minimumResultsForSearch) && e.call(this, t)
        }
        ,
        e
    }),
    u.define("select2/dropdown/selectOnClose", ["../utils"], function(s) {
        function e() {}
        return e.prototype.bind = function(e, t, n) {
            var s = this;
            e.call(this, t, n),
            t.on("close", function(e) {
                s._handleSelectOnClose(e)
            })
        }
        ,
        e.prototype._handleSelectOnClose = function(e, t) {
            if (t && null != t.originalSelect2Event) {
                var n = t.originalSelect2Event;
                if ("select" === n._type || "unselect" === n._type)
                    return
            }
            n = this.getHighlightedResults();
            n.length < 1 || (null != (n = s.GetData(n[0], "data")).element && n.element.selected || null == n.element && n.selected || this.trigger("select", {
                data: n
            }))
        }
        ,
        e
    }),
    u.define("select2/dropdown/closeOnSelect", [], function() {
        function e() {}
        return e.prototype.bind = function(e, t, n) {
            var s = this;
            e.call(this, t, n),
            t.on("select", function(e) {
                s._selectTriggered(e)
            }),
            t.on("unselect", function(e) {
                s._selectTriggered(e)
            })
        }
        ,
        e.prototype._selectTriggered = function(e, t) {
            var n = t.originalEvent;
            n && (n.ctrlKey || n.metaKey) || this.trigger("close", {
                originalEvent: n,
                originalSelect2Event: t
            })
        }
        ,
        e
    }),
    u.define("select2/dropdown/dropdownCss", ["../utils"], function(n) {
        function e() {}
        return e.prototype.render = function(e) {
            var t = e.call(this)
              , e = this.options.get("dropdownCssClass") || "";
            return -1 !== e.indexOf(":all:") && (e = e.replace(":all:", ""),
            n.copyNonInternalCssClasses(t[0], this.$element[0])),
            t.addClass(e),
            t
        }
        ,
        e
    }),
    u.define("select2/dropdown/tagsSearchHighlight", ["../utils"], function(s) {
        function e() {}
        return e.prototype.highlightFirstItem = function(e) {
            var t = this.$results.find(".select2-results__option--selectable:not(.select2-results__option--selected)");
            if (0 < t.length) {
                var n = t.first()
                  , t = s.GetData(n[0], "data").element;
                if (t && t.getAttribute && "true" === t.getAttribute("data-select2-tag"))
                    return void n.trigger("mouseenter")
            }
            e.call(this)
        }
        ,
        e
    }),
    u.define("select2/i18n/en", [], function() {
        return {
            errorLoading: function() {
                return "The results could not be loaded."
            },
            inputTooLong: function(e) {
                var t = e.input.length - e.maximum
                  , e = "Please delete " + t + " character";
                return 1 != t && (e += "s"),
                e
            },
            inputTooShort: function(e) {
                return "Please enter " + (e.minimum - e.input.length) + " or more characters"
            },
            loadingMore: function() {
                return "Loading more results…"
            },
            maximumSelected: function(e) {
                var t = "You can only select " + e.maximum + " item";
                return 1 != e.maximum && (t += "s"),
                t
            },
            noResults: function() {
                return "No results found"
            },
            searching: function() {
                return "Searching…"
            },
            removeAllItems: function() {
                return "Remove all items"
            },
            removeItem: function() {
                return "Remove item"
            },
            search: function() {
                return "Search"
            }
        }
    }),
    u.define("select2/defaults", ["jquery", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/selectionCss", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./dropdown/dropdownCss", "./dropdown/tagsSearchHighlight", "./i18n/en"], function(l, r, o, a, c, u, d, p, h, f, g, t, m, y, v, _, b, $, w, x, A, D, S, E, O, C, L, T, q, I, e) {
        function n() {
            this.reset()
        }
        return n.prototype.apply = function(e) {
            var t;
            null == (e = l.extend(!0, {}, this.defaults, e)).dataAdapter && (null != e.ajax ? e.dataAdapter = v : null != e.data ? e.dataAdapter = y : e.dataAdapter = m,
            0 < e.minimumInputLength && (e.dataAdapter = f.Decorate(e.dataAdapter, $)),
            0 < e.maximumInputLength && (e.dataAdapter = f.Decorate(e.dataAdapter, w)),
            0 < e.maximumSelectionLength && (e.dataAdapter = f.Decorate(e.dataAdapter, x)),
            e.tags && (e.dataAdapter = f.Decorate(e.dataAdapter, _)),
            null == e.tokenSeparators && null == e.tokenizer || (e.dataAdapter = f.Decorate(e.dataAdapter, b))),
            null == e.resultsAdapter && (e.resultsAdapter = r,
            null != e.ajax && (e.resultsAdapter = f.Decorate(e.resultsAdapter, E)),
            null != e.placeholder && (e.resultsAdapter = f.Decorate(e.resultsAdapter, S)),
            e.selectOnClose && (e.resultsAdapter = f.Decorate(e.resultsAdapter, L)),
            e.tags && (e.resultsAdapter = f.Decorate(e.resultsAdapter, I))),
            null == e.dropdownAdapter && (e.multiple ? e.dropdownAdapter = A : (t = f.Decorate(A, D),
            e.dropdownAdapter = t),
            0 !== e.minimumResultsForSearch && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, C)),
            e.closeOnSelect && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, T)),
            null != e.dropdownCssClass && (e.dropdownAdapter = f.Decorate(e.dropdownAdapter, q)),
            e.dropdownAdapter = f.Decorate(e.dropdownAdapter, O)),
            null == e.selectionAdapter && (e.multiple ? e.selectionAdapter = a : e.selectionAdapter = o,
            null != e.placeholder && (e.selectionAdapter = f.Decorate(e.selectionAdapter, c)),
            e.allowClear && (e.selectionAdapter = f.Decorate(e.selectionAdapter, u)),
            e.multiple && (e.selectionAdapter = f.Decorate(e.selectionAdapter, d)),
            null != e.selectionCssClass && (e.selectionAdapter = f.Decorate(e.selectionAdapter, p)),
            e.selectionAdapter = f.Decorate(e.selectionAdapter, h)),
            e.language = this._resolveLanguage(e.language),
            e.language.push("en");
            for (var n = [], s = 0; s < e.language.length; s++) {
                var i = e.language[s];
                -1 === n.indexOf(i) && n.push(i)
            }
            return e.language = n,
            e.translations = this._processTranslations(e.language, e.debug),
            e
        }
        ,
        n.prototype.reset = function() {
            function a(e) {
                return e.replace(/[^\u0000-\u007E]/g, function(e) {
                    return t[e] || e
                })
            }
            this.defaults = {
                amdLanguageBase: "./i18n/",
                autocomplete: "off",
                closeOnSelect: !0,
                debug: !1,
                dropdownAutoWidth: !1,
                escapeMarkup: f.escapeMarkup,
                language: {},
                matcher: function e(t, n) {
                    if (null == t.term || "" === t.term.trim())
                        return n;
                    if (n.children && 0 < n.children.length) {
                        for (var s = l.extend(!0, {}, n), i = n.children.length - 1; 0 <= i; i--)
                            null == e(t, n.children[i]) && s.children.splice(i, 1);
                        return 0 < s.children.length ? s : e(t, s)
                    }
                    var r = a(n.text).toUpperCase()
                      , o = a(t.term).toUpperCase();
                    return -1 < r.indexOf(o) ? n : null
                },
                minimumInputLength: 0,
                maximumInputLength: 0,
                maximumSelectionLength: 0,
                minimumResultsForSearch: 0,
                selectOnClose: !1,
                scrollAfterSelect: !1,
                sorter: function(e) {
                    return e
                },
                templateResult: function(e) {
                    return e.text
                },
                templateSelection: function(e) {
                    return e.text
                },
                theme: "default",
                width: "resolve"
            }
        }
        ,
        n.prototype.applyFromElement = function(e, t) {
            var n = e.language
              , s = this.defaults.language
              , i = t.prop("lang")
              , t = t.closest("[lang]").prop("lang")
              , t = Array.prototype.concat.call(this._resolveLanguage(i), this._resolveLanguage(n), this._resolveLanguage(s), this._resolveLanguage(t));
            return e.language = t,
            e
        }
        ,
        n.prototype._resolveLanguage = function(e) {
            if (!e)
                return [];
            if (l.isEmptyObject(e))
                return [];
            if (l.isPlainObject(e))
                return [e];
            for (var t, n = Array.isArray(e) ? e : [e], s = [], i = 0; i < n.length; i++)
                s.push(n[i]),
                "string" == typeof n[i] && 0 < n[i].indexOf("-") && (t = n[i].split("-")[0],
                s.push(t));
            return s
        }
        ,
        n.prototype._processTranslations = function(e, t) {
            for (var n = new g, s = 0; s < e.length; s++) {
                var i = new g
                  , r = e[s];
                if ("string" == typeof r)
                    try {
                        i = g.loadPath(r)
                    } catch (e) {
                        try {
                            r = this.defaults.amdLanguageBase + r,
                            i = g.loadPath(r)
                        } catch (e) {
                            t && window.console && console.warn && console.warn('Select2: The language file for "' + r + '" could not be automatically loaded. A fallback will be used instead.')
                        }
                    }
                else
                    i = l.isPlainObject(r) ? new g(r) : r;
                n.extend(i)
            }
            return n
        }
        ,
        n.prototype.set = function(e, t) {
            var n = {};
            n[l.camelCase(e)] = t;
            n = f._convertData(n);
            l.extend(!0, this.defaults, n)
        }
        ,
        new n
    }),
    u.define("select2/options", ["jquery", "./defaults", "./utils"], function(c, n, u) {
        function e(e, t) {
            this.options = e,
            null != t && this.fromElement(t),
            null != t && (this.options = n.applyFromElement(this.options, t)),
            this.options = n.apply(this.options)
        }
        return e.prototype.fromElement = function(e) {
            var t = ["select2"];
            null == this.options.multiple && (this.options.multiple = e.prop("multiple")),
            null == this.options.disabled && (this.options.disabled = e.prop("disabled")),
            null == this.options.autocomplete && e.prop("autocomplete") && (this.options.autocomplete = e.prop("autocomplete")),
            null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"),
            e.prop("disabled", this.options.disabled),
            e.prop("multiple", this.options.multiple),
            u.GetData(e[0], "select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),
            u.StoreData(e[0], "data", u.GetData(e[0], "select2Tags")),
            u.StoreData(e[0], "tags", !0)),
            u.GetData(e[0], "ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),
            e.attr("ajax--url", u.GetData(e[0], "ajaxUrl")),
            u.StoreData(e[0], "ajax-Url", u.GetData(e[0], "ajaxUrl")));
            var n = {};
            function s(e, t) {
                return t.toUpperCase()
            }
            for (var i = 0; i < e[0].attributes.length; i++) {
                var r = e[0].attributes[i].name
                  , o = "data-";
                r.substr(0, o.length) == o && (r = r.substring(o.length),
                o = u.GetData(e[0], r),
                n[r.replace(/-([a-z])/g, s)] = o)
            }
            c.fn.jquery && "1." == c.fn.jquery.substr(0, 2) && e[0].dataset && (n = c.extend(!0, {}, e[0].dataset, n));
            var a, l = c.extend(!0, {}, u.GetData(e[0]), n);
            for (a in l = u._convertData(l))
                -1 < t.indexOf(a) || (c.isPlainObject(this.options[a]) ? c.extend(this.options[a], l[a]) : this.options[a] = l[a]);
            return this
        }
        ,
        e.prototype.get = function(e) {
            return this.options[e]
        }
        ,
        e.prototype.set = function(e, t) {
            this.options[e] = t
        }
        ,
        e
    }),
    u.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(t, i, r, s) {
        var o = function(e, t) {
            null != r.GetData(e[0], "select2") && r.GetData(e[0], "select2").destroy(),
            this.$element = e,
            this.id = this._generateId(e),
            t = t || {},
            this.options = new i(t,e),
            o.__super__.constructor.call(this);
            var n = e.attr("tabindex") || 0;
            r.StoreData(e[0], "old-tabindex", n),
            e.attr("tabindex", "-1");
            t = this.options.get("dataAdapter");
            this.dataAdapter = new t(e,this.options);
            n = this.render();
            this._placeContainer(n);
            t = this.options.get("selectionAdapter");
            this.selection = new t(e,this.options),
            this.$selection = this.selection.render(),
            this.selection.position(this.$selection, n);
            t = this.options.get("dropdownAdapter");
            this.dropdown = new t(e,this.options),
            this.$dropdown = this.dropdown.render(),
            this.dropdown.position(this.$dropdown, n);
            n = this.options.get("resultsAdapter");
            this.results = new n(e,this.options,this.dataAdapter),
            this.$results = this.results.render(),
            this.results.position(this.$results, this.$dropdown);
            var s = this;
            this._bindAdapters(),
            this._registerDomEvents(),
            this._registerDataEvents(),
            this._registerSelectionEvents(),
            this._registerDropdownEvents(),
            this._registerResultsEvents(),
            this._registerEvents(),
            this.dataAdapter.current(function(e) {
                s.trigger("selection:update", {
                    data: e
                })
            }),
            e[0].classList.add("select2-hidden-accessible"),
            e.attr("aria-hidden", "true"),
            this._syncAttributes(),
            r.StoreData(e[0], "select2", this),
            e.data("select2", this)
        };
        return r.Extend(o, r.Observable),
        o.prototype._generateId = function(e) {
            return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + r.generateChars(2) : r.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
        }
        ,
        o.prototype._placeContainer = function(e) {
            e.insertAfter(this.$element);
            var t = this._resolveWidth(this.$element, this.options.get("width"));
            null != t && e.css("width", t)
        }
        ,
        o.prototype._resolveWidth = function(e, t) {
            var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
            if ("resolve" == t) {
                var s = this._resolveWidth(e, "style");
                return null != s ? s : this._resolveWidth(e, "element")
            }
            if ("element" == t) {
                s = e.outerWidth(!1);
                return s <= 0 ? "auto" : s + "px"
            }
            if ("style" != t)
                return "computedstyle" != t ? t : window.getComputedStyle(e[0]).width;
            e = e.attr("style");
            if ("string" != typeof e)
                return null;
            for (var i = e.split(";"), r = 0, o = i.length; r < o; r += 1) {
                var a = i[r].replace(/\s/g, "").match(n);
                if (null !== a && 1 <= a.length)
                    return a[1]
            }
            return null
        }
        ,
        o.prototype._bindAdapters = function() {
            this.dataAdapter.bind(this, this.$container),
            this.selection.bind(this, this.$container),
            this.dropdown.bind(this, this.$container),
            this.results.bind(this, this.$container)
        }
        ,
        o.prototype._registerDomEvents = function() {
            var t = this;
            this.$element.on("change.select2", function() {
                t.dataAdapter.current(function(e) {
                    t.trigger("selection:update", {
                        data: e
                    })
                })
            }),
            this.$element.on("focus.select2", function(e) {
                t.trigger("focus", e)
            }),
            this._syncA = r.bind(this._syncAttributes, this),
            this._syncS = r.bind(this._syncSubtree, this),
            this._observer = new window.MutationObserver(function(e) {
                t._syncA(),
                t._syncS(e)
            }
            ),
            this._observer.observe(this.$element[0], {
                attributes: !0,
                childList: !0,
                subtree: !1
            })
        }
        ,
        o.prototype._registerDataEvents = function() {
            var n = this;
            this.dataAdapter.on("*", function(e, t) {
                n.trigger(e, t)
            })
        }
        ,
        o.prototype._registerSelectionEvents = function() {
            var n = this
              , s = ["toggle", "focus"];
            this.selection.on("toggle", function() {
                n.toggleDropdown()
            }),
            this.selection.on("focus", function(e) {
                n.focus(e)
            }),
            this.selection.on("*", function(e, t) {
                -1 === s.indexOf(e) && n.trigger(e, t)
            })
        }
        ,
        o.prototype._registerDropdownEvents = function() {
            var n = this;
            this.dropdown.on("*", function(e, t) {
                n.trigger(e, t)
            })
        }
        ,
        o.prototype._registerResultsEvents = function() {
            var n = this;
            this.results.on("*", function(e, t) {
                n.trigger(e, t)
            })
        }
        ,
        o.prototype._registerEvents = function() {
            var n = this;
            this.on("open", function() {
                n.$container[0].classList.add("select2-container--open")
            }),
            this.on("close", function() {
                n.$container[0].classList.remove("select2-container--open")
            }),
            this.on("enable", function() {
                n.$container[0].classList.remove("select2-container--disabled")
            }),
            this.on("disable", function() {
                n.$container[0].classList.add("select2-container--disabled")
            }),
            this.on("blur", function() {
                n.$container[0].classList.remove("select2-container--focus")
            }),
            this.on("query", function(t) {
                n.isOpen() || n.trigger("open", {}),
                this.dataAdapter.query(t, function(e) {
                    n.trigger("results:all", {
                        data: e,
                        query: t
                    })
                })
            }),
            this.on("query:append", function(t) {
                this.dataAdapter.query(t, function(e) {
                    n.trigger("results:append", {
                        data: e,
                        query: t
                    })
                })
            }),
            this.on("keypress", function(e) {
                var t = e.which;
                n.isOpen() ? t === s.ESC || t === s.UP && e.altKey ? (n.close(e),
                e.preventDefault()) : t === s.ENTER || t === s.TAB ? (n.trigger("results:select", {}),
                e.preventDefault()) : t === s.SPACE && e.ctrlKey ? (n.trigger("results:toggle", {}),
                e.preventDefault()) : t === s.UP ? (n.trigger("results:previous", {}),
                e.preventDefault()) : t === s.DOWN && (n.trigger("results:next", {}),
                e.preventDefault()) : (t === s.ENTER || t === s.SPACE || t === s.DOWN && e.altKey) && (n.open(),
                e.preventDefault())
            })
        }
        ,
        o.prototype._syncAttributes = function() {
            this.options.set("disabled", this.$element.prop("disabled")),
            this.isDisabled() ? (this.isOpen() && this.close(),
            this.trigger("disable", {})) : this.trigger("enable", {})
        }
        ,
        o.prototype._isChangeMutation = function(e) {
            var t = this;
            if (e.addedNodes && 0 < e.addedNodes.length) {
                for (var n = 0; n < e.addedNodes.length; n++)
                    if (e.addedNodes[n].selected)
                        return !0
            } else {
                if (e.removedNodes && 0 < e.removedNodes.length)
                    return !0;
                if (Array.isArray(e))
                    return e.some(function(e) {
                        return t._isChangeMutation(e)
                    })
            }
            return !1
        }
        ,
        o.prototype._syncSubtree = function(e) {
            var e = this._isChangeMutation(e)
              , t = this;
            e && this.dataAdapter.current(function(e) {
                t.trigger("selection:update", {
                    data: e
                })
            })
        }
        ,
        o.prototype.trigger = function(e, t) {
            var n = o.__super__.trigger
              , s = {
                open: "opening",
                close: "closing",
                select: "selecting",
                unselect: "unselecting",
                clear: "clearing"
            };
            if (void 0 === t && (t = {}),
            e in s) {
                var i = s[e]
                  , s = {
                    prevented: !1,
                    name: e,
                    args: t
                };
                if (n.call(this, i, s),
                s.prevented)
                    return void (t.prevented = !0)
            }
            n.call(this, e, t)
        }
        ,
        o.prototype.toggleDropdown = function() {
            this.isDisabled() || (this.isOpen() ? this.close() : this.open())
        }
        ,
        o.prototype.open = function() {
            this.isOpen() || this.isDisabled() || this.trigger("query", {})
        }
        ,
        o.prototype.close = function(e) {
            this.isOpen() && this.trigger("close", {
                originalEvent: e
            })
        }
        ,
        o.prototype.isEnabled = function() {
            return !this.isDisabled()
        }
        ,
        o.prototype.isDisabled = function() {
            return this.options.get("disabled")
        }
        ,
        o.prototype.isOpen = function() {
            return this.$container[0].classList.contains("select2-container--open")
        }
        ,
        o.prototype.hasFocus = function() {
            return this.$container[0].classList.contains("select2-container--focus")
        }
        ,
        o.prototype.focus = function(e) {
            this.hasFocus() || (this.$container[0].classList.add("select2-container--focus"),
            this.trigger("focus", {}))
        }
        ,
        o.prototype.enable = function(e) {
            this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.');
            e = !(e = null == e || 0 === e.length ? [!0] : e)[0];
            this.$element.prop("disabled", e)
        }
        ,
        o.prototype.data = function() {
            this.options.get("debug") && 0 < arguments.length && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
            var t = [];
            return this.dataAdapter.current(function(e) {
                t = e
            }),
            t
        }
        ,
        o.prototype.val = function(e) {
            if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),
            null == e || 0 === e.length)
                return this.$element.val();
            e = e[0];
            Array.isArray(e) && (e = e.map(function(e) {
                return e.toString()
            })),
            this.$element.val(e).trigger("input").trigger("change")
        }
        ,
        o.prototype.destroy = function() {
            r.RemoveData(this.$container[0]),
            this.$container.remove(),
            this._observer.disconnect(),
            this._observer = null,
            this._syncA = null,
            this._syncS = null,
            this.$element.off(".select2"),
            this.$element.attr("tabindex", r.GetData(this.$element[0], "old-tabindex")),
            this.$element[0].classList.remove("select2-hidden-accessible"),
            this.$element.attr("aria-hidden", "false"),
            r.RemoveData(this.$element[0]),
            this.$element.removeData("select2"),
            this.dataAdapter.destroy(),
            this.selection.destroy(),
            this.dropdown.destroy(),
            this.results.destroy(),
            this.dataAdapter = null,
            this.selection = null,
            this.dropdown = null,
            this.results = null
        }
        ,
        o.prototype.render = function() {
            var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
            return e.attr("dir", this.options.get("dir")),
            this.$container = e,
            this.$container[0].classList.add("select2-container--" + this.options.get("theme")),
            r.StoreData(e[0], "element", this.$element),
            e
        }
        ,
        o
    }),
    u.define("jquery-mousewheel", ["jquery"], function(e) {
        return e
    }),
    u.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults", "./select2/utils"], function(i, e, r, t, o) {
        var a;
        return null == i.fn.select2 && (a = ["open", "close", "destroy"],
        i.fn.select2 = function(t) {
            if ("object" == typeof (t = t || {}))
                return this.each(function() {
                    var e = i.extend(!0, {}, t);
                    new r(i(this),e)
                }),
                this;
            if ("string" != typeof t)
                throw new Error("Invalid arguments for Select2: " + t);
            var n, s = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var e = o.GetData(this, "select2");
                null == e && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."),
                n = e[t].apply(e, s)
            }),
            -1 < a.indexOf(t) ? this : n
        }
        ),
        null == i.fn.select2.defaults && (i.fn.select2.defaults = t),
        r
    }),
    {
        define: u.define,
        require: u.require
    });
    function b(e, t) {
        return i.call(e, t)
    }
    function l(e, t) {
        var n, s, i, r, o, a, l, c, u, d, p = t && t.split("/"), h = y.map, f = h && h["*"] || {};
        if (e) {
            for (t = (e = e.split("/")).length - 1,
            y.nodeIdCompat && _.test(e[t]) && (e[t] = e[t].replace(_, "")),
            "." === e[0].charAt(0) && p && (e = p.slice(0, p.length - 1).concat(e)),
            c = 0; c < e.length; c++)
                "." === (d = e[c]) ? (e.splice(c, 1),
                --c) : ".." === d && (0 === c || 1 === c && ".." === e[2] || ".." === e[c - 1] || 0 < c && (e.splice(c - 1, 2),
                c -= 2));
            e = e.join("/")
        }
        if ((p || f) && h) {
            for (c = (n = e.split("/")).length; 0 < c; --c) {
                if (s = n.slice(0, c).join("/"),
                p)
                    for (u = p.length; 0 < u; --u)
                        if (i = h[p.slice(0, u).join("/")],
                        i = i && i[s]) {
                            r = i,
                            o = c;
                            break
                        }
                if (r)
                    break;
                !a && f && f[s] && (a = f[s],
                l = c)
            }
            !r && a && (r = a,
            o = l),
            r && (n.splice(0, o, r),
            e = n.join("/"))
        }
        return e
    }
    function w(t, n) {
        return function() {
            var e = a.call(arguments, 0);
            return "string" != typeof e[0] && 1 === e.length && e.push(null),
            o.apply(p, e.concat([t, n]))
        }
    }
    function x(e) {
        var t;
        if (b(m, e) && (t = m[e],
        delete m[e],
        v[e] = !0,
        r.apply(p, t)),
        !b(g, e) && !b(v, e))
            throw new Error("No " + e);
        return g[e]
    }
    function c(e) {
        var t, n = e ? e.indexOf("!") : -1;
        return -1 < n && (t = e.substring(0, n),
        e = e.substring(n + 1, e.length)),
        [t, e]
    }
    function A(e) {
        return e ? c(e) : []
    }
    var u = s.require("jquery.select2");
    return t.fn.select2.amd = s,
    u
});
;var allLangs = {
    "languages": {
        "en_US": {
            "language_name": "English",
            "language_code": "en_US",
            "short_language_name": "en",
            "flag_link": "https:\/\/storage.googleapis.com\/dev_resources_voka_io_303011\/icons\/United-States-of-America-US.svg",
            "current_page_url": "https:\/\/voka.io\/product\/"
        },
        "de_DE": {
            "language_name": "Deutsch",
            "language_code": "de_DE",
            "short_language_name": "de",
            "flag_link": "https:\/\/storage.googleapis.com\/dev_resources_voka_io_303011\/icons\/Germany-DE.svg",
            "current_page_url": "https:\/\/voka.io\/de\/product\/"
        },
        "fr_FR": {
            "language_name": "Fran\u00e7ais",
            "language_code": "fr_FR",
            "short_language_name": "fr",
            "flag_link": "https:\/\/voka.io\/wp-content\/plugins\/translatepress-multilingual\/assets\/images\/flags\/fr_FR.png",
            "current_page_url": "https:\/\/voka.io\/fr\/product\/"
        },
        "es_ES": {
            "language_name": "Espa\u00f1ol",
            "language_code": "es_ES",
            "short_language_name": "es",
            "flag_link": "https:\/\/voka.io\/wp-content\/plugins\/translatepress-multilingual\/assets\/images\/flags\/es_ES.png",
            "current_page_url": "https:\/\/voka.io\/es\/product\/"
        },
        "ru_RU": {
            "language_name": "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
            "language_code": "ru_RU",
            "short_language_name": "ru",
            "flag_link": "https:\/\/voka.io\/wp-content\/plugins\/translatepress-multilingual\/assets\/images\/flags\/ru_RU.png",
            "current_page_url": "https:\/\/voka.io\/ru\/product\/"
        },
        "it_IT": {
            "language_name": "Italiano",
            "language_code": "it_IT",
            "short_language_name": "it",
            "flag_link": "https:\/\/voka.io\/wp-content\/plugins\/translatepress-multilingual\/assets\/images\/flags\/it_IT.png",
            "current_page_url": "https:\/\/voka.io\/it\/product\/"
        },
        "pt_PT": {
            "language_name": "Portugu\u00eas",
            "language_code": "pt_PT",
            "short_language_name": "pt",
            "flag_link": "https:\/\/voka.io\/wp-content\/plugins\/translatepress-multilingual\/assets\/images\/flags\/pt_PT.png",
            "current_page_url": "https:\/\/voka.io\/pt\/product\/"
        },
        "ar": {
            "language_name": "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
            "language_code": "ar",
            "short_language_name": "ar",
            "flag_link": "https:\/\/voka.io\/wp-content\/plugins\/translatepress-multilingual\/assets\/images\/flags\/ar.png",
            "current_page_url": "https:\/\/voka.io\/ar\/product\/"
        }
    }
};
var data = {
    "currentLang": "en",
    "translations": {
        "resultFor": "<span data-no-translation>result for \"<\/span>",
        "resultsFor": "<span data-no-translation>results for \"<\/span>"
    }
};
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("s");
    const clearButton = document.getElementById("clear-search");
    clearButton.addEventListener("click", function(event) {
        event.preventDefault();
        searchInput.value = "";
        searchInput.focus()
    })
});
function extractTextInHighlightedStrong(str) {
    const regex = /<strong class="highlight">.*?<\/strong>/;
    const match = str.match(regex);
    if (match && match.length > 0) {
        const innerTextRegex = /<strong class="highlight">(.*?)<\/strong>/;
        const innerMatch = match[0].match(innerTextRegex);
        if (innerMatch && innerMatch.length > 1) {
            return innerMatch[1]
        }
    }
    return null
}
function replacePunctuationWithUnicode(str) {
    if (!str)
        return '';
    let replacedStr = str;
    replacedStr = replacedStr.replaceAll(/[.]/g, "\\u002E");
    replacedStr = replacedStr.replaceAll(/[?]/g, "\\u003F");
    replacedStr = replacedStr.replaceAll(/!/g, "\\u0021");
    replacedStr = replacedStr.replaceAll(/;/g, "\\u003B");
    return replacedStr
}
function replaceUnicodeWithPunctuation(str) {
    if (!str)
        return '';
    let replacedStr = str;
    replacedStr = replacedStr.replaceAll(/\\u002E/g, ".");
    replacedStr = replacedStr.replaceAll(/\\u003F/g, "?");
    replacedStr = replacedStr.replaceAll(/\\u0021/g, "!");
    replacedStr = replacedStr.replaceAll(/\\u003B/g, ";");
    return replacedStr
}
function truncateStringWithHighlight(value, query) {
    const text = value.replaceAll("&#038;", "&").replaceAll("&#8211;", "-");
    const maxLength = window.innerWidth > 1279 ? 180 : 140;
    if (text.length < maxLength)
        return text;
    const queryWithoutPunctuation = replacePunctuationWithUnicode(query);
    const queryLower = queryWithoutPunctuation.toLowerCase().replaceAll("'", "&#039;");
    function truncateAtPunctuation(str) {
        const match = str.match(/[.?!;]\s.*/);
        if (match) {
            const index = match.index;
            return str.substring(0, index + 1)
        }
        return str
    }
    let fullStr = '';
    let fullStrWithoutTags = '';
    function recursive(str) {
        if (!str)
            return;
        const part = truncateAtPunctuation(str);
        const partWithoutTags = part.replace(/<[^>]*>/g, '');
        if (!text.toLowerCase().includes(queryLower)) {
            if ((fullStr + part).length <= maxLength || !fullStr) {
                fullStr += part;
                recursive(str.replace(part, ''))
            }
            return
        }
        if (part.toLowerCase().includes(`<strong class="highlight">${queryLower}</strong>`)) {
            fullStr += part;
            fullStrWithoutTags += partWithoutTags;
            if (fullStrWithoutTags.length < maxLength - 50) {
                recursive(str.replace(part, ''));
                return
            }
            if (fullStrWithoutTags.length >= maxLength) {
                return
            }
            recursive(str.replace(part, ''));
            return
        }
        if (fullStr) {
            if (fullStrWithoutTags.length <= maxLength - 50) {
                fullStr += part;
                fullStrWithoutTags += partWithoutTags;
                recursive(str.replace(part, ''));
                return
            } else if ((fullStrWithoutTags + partWithoutTags).length >= maxLength + 50) {
                return
            } else if ((fullStrWithoutTags + partWithoutTags).length < maxLength + 50 && (fullStrWithoutTags + partWithoutTags).length >= maxLength) {
                fullStr += part;
                fullStrWithoutTags += partWithoutTags;
                return
            } else {
                fullStr += part;
                fullStrWithoutTags += partWithoutTags;
                recursive(str.replace(part, ''));
                return
            }
        }
        recursive(str.replace(part, ''));
        return
    }
    const highlightedText = extractTextInHighlightedStrong(text);
    const textWithoutPunctuation = replacePunctuationWithUnicode(highlightedText)
    const contentText = text.replaceAll(highlightedText, textWithoutPunctuation)
    recursive(contentText);
    const result = replaceUnicodeWithPunctuation(fullStr);
    return result
}
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        const context = this;
        clearTimeout(timeoutId);
        timeoutId = setTimeout( () => {
            func.apply(context, args)
        }
        , delay)
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const quickLinks = document.getElementById('quick-links');
    const searchInput = document.getElementById("s");
    const resultsContainer = document.getElementById("search-results");
    const loaderContainer = document.getElementById("search-results-form-loader");
    const ajaxUrl = () => window.location.origin === 'http://localhost:85' ? 'http://localhost:85/wp-admin/admin-ajax.php' : `${window.location.origin}/wp-admin/admin-ajax.php`;
    searchInput.addEventListener("input", debounce(function() {
        if (quickLinks) {
            quickLinks.classList.add('hidden')
        }
        resultsContainer.classList.remove('hidden');
        const query = searchInput.value.trim();
        if (query.length < 3) {
            resultsContainer.innerHTML = "<p>Enter at least 3 characters.</p>";
            return
        }
        if (loaderContainer) {
            loaderContainer.style.display = 'block';
            resultsContainer.innerHTML = ""
        }
        fetch(ajaxUrl(), {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                action: "main_ajax_search",
                query: query,
            }),
        }).then( (response) => response.json()).then( (data) => {
            if (data.success) {
                resultsContainer.innerHTML = '<span class="small-text results-title">Results:</span>';
                let len = data.data.length;
                let results = len > 2 ? data.data.slice(0, 2) : data.data;
                resultsContainer.insertAdjacentHTML('beforeend', results.map( (item) => `<div class="search-item">
                                    <div class="search-item-header">
                                          ${item.type ? '<span class="page-type">' + item.type + '</span>' : ''} 
                                        <a href="${item.link}">
                                            <h4 data-no-translation>${item.title}</h4>
                                        </a>
                                    </div>
                                    <p class="small-text" data-no-translation>${truncateStringWithHighlight(item.content, query)}</p>
                                </div>`).join(""));
                len > 2 && resultsContainer.insertAdjacentHTML('beforeend', `<button id="all-search" data-query="${query}" class="small-button-text all-search">Show all</button>`);
                if (loaderContainer) {
                    loaderContainer.style.display = 'none'
                }
            } else {
                if (loaderContainer) {
                    loaderContainer.style.display = 'none'
                }
                resultsContainer.innerHTML = `<p>${data.data.message}</p>`
            }
        }
        ).catch( () => {
            resultsContainer.innerHTML = "<p>Произошла ошибка. Попробуйте позже.</p>"
        }
        )
    }, 500));
    const searchIcon = document.getElementById('search-icon');
    const searchPopup = document.getElementById('search-popup');
    const header = document.querySelector('header');
    const container = document.querySelector('#search-popup .container');
    const mobileSearchClose = document.getElementById('close-mobile-search');
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            searchPopup.classList.remove('hidden');
            document.documentElement.style.overflow = 'hidden'
        })
    }
    function checkMousePosition(event) {
        if (searchPopup.classList.contains('hidden'))
            return;
        const isOutside = !header.contains(event.target) && !container.contains(event.target);
        if (isOutside) {
            searchPopup.classList.add('hidden');
            document.documentElement.style.overflow = 'auto';
            searchInput.value = '';
            if (loaderContainer) {
                loaderContainer.style.display = 'none'
            }
            if (quickLinks) {
                quickLinks.classList.remove('hidden')
            }
            resultsContainer.classList.add('hidden');
            resultsContainer.innerHTML = ''
        }
    }
    mobileSearchClose.addEventListener('click', () => {
        searchPopup.classList.add('hidden');
        document.documentElement.style.overflow = 'auto'
    }
    )
    document.addEventListener('mousemove', checkMousePosition)
});
document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'all-search') {
        const query = event.target.getAttribute('data-query');
        if (query) {
            if (allLangs?.languages) {
                const currentLang = Object.entries(allLangs.languages).find( ([key,val]) => window.location.href === val.current_page_url);
                if (currentLang?.length) {
                    const lang = currentLang[1].short_language_name;
                    if (lang === 'en') {
                        window.location.href = window.location.origin + '/?s=' + encodeURIComponent(query)
                    } else {
                        window.location.href = window.location.origin + '/' + lang + '/?s=' + encodeURIComponent(query)
                    }
                }
            } else {
                window.location.href = '/?s=' + encodeURIComponent(query)
            }
        }
    }
});
(function() {
    var w = window
      , C = '___grecaptcha_cfg'
      , cfg = w[C] = w[C] || {}
      , N = 'grecaptcha';
    var gr = w[N] = w[N] || {};
    gr.ready = gr.ready || function(f) {
        (cfg.fns = cfg.fns || []).push(f)
    }
    ;
    w.__recaptcha_api = 'https://www.google.com/recaptcha/api2/';
    (cfg.render = cfg.render || []).push('6LfrAx4qAAAAAGmFhVwNMK7_QA75dBrLM8fe-IU_');
    (cfg.clr = cfg.clr || []).push('true');
    (cfg['anchor-ms'] = cfg['anchor-ms'] || []).push(20000);
    (cfg['execute-ms'] = cfg['execute-ms'] || []).push(15000);
    w.__google_recaptcha_client = !0;
    var d = document
      , po = d.createElement('script');
    po.type = 'text/javascript';
    po.async = !0;
    po.charset = 'utf-8';
    po.src = 'https://www.gstatic.com/recaptcha/releases/KmpMK968ITgSdSG_2lbUmd1o/recaptcha__en.js';
    po.crossOrigin = 'anonymous';
    po.integrity = 'sha384-qWlX9DATG60zGx212yddKhWx0Vfq1aHzjo55NjxKQLqy/5cVwdHENaAyGpD+m8l6';
    var e = d.querySelector('script[nonce]')
      , n = e && (e.nonce || e.getAttribute('nonce'));
    if (n) {
        po.setAttribute('nonce', n)
    }
    var s = d.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s)
}
)();
!function(r) {
    "use strict";
    var t, e, n;
    t = [function(r, t, e) {
        e(1),
        e(73),
        e(76),
        e(78),
        e(80),
        e(86),
        e(95),
        e(96),
        e(107),
        e(108),
        e(113),
        e(114),
        e(116),
        e(118),
        e(119),
        e(127),
        e(128),
        e(131),
        e(137),
        e(146),
        e(148),
        e(149),
        e(150),
        r.exports = e(151)
    }
    , function(r, t, e) {
        var n = e(2)
          , o = e(67)
          , a = e(11)
          , i = e(68)
          , c = Array;
        n({
            target: "Array",
            proto: !0
        }, {
            toReversed: function() {
                return o(a(this), c)
            }
        }),
        i("toReversed")
    }
    , function(t, e, n) {
        var o = n(3)
          , a = n(4).f
          , i = n(42)
          , c = n(46)
          , u = n(36)
          , f = n(54)
          , s = n(66);
        t.exports = function(t, e) {
            var n, p, l, y, v, h = t.target, g = t.global, d = t.stat;
            if (n = g ? o : d ? o[h] || u(h, {}) : o[h] && o[h].prototype)
                for (p in e) {
                    if (y = e[p],
                    l = t.dontCallGetSet ? (v = a(n, p)) && v.value : n[p],
                    !s(g ? p : h + (d ? "." : "#") + p, t.forced) && l !== r) {
                        if (typeof y == typeof l)
                            continue;
                        f(y, l)
                    }
                    (t.sham || l && l.sham) && i(y, "sham", !0),
                    c(n, p, y, t)
                }
        }
    }
    , function(r, t, e) {
        var n = function(r) {
            return r && r.Math === Math && r
        };
        r.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof global && global) || n("object" == typeof this && this) || function() {
            return this
        }() || Function("return this")()
    }
    , function(r, t, e) {
        var n = e(5)
          , o = e(7)
          , a = e(9)
          , i = e(10)
          , c = e(11)
          , u = e(17)
          , f = e(37)
          , s = e(40)
          , p = Object.getOwnPropertyDescriptor;
        t.f = n ? p : function(r, t) {
            if (r = c(r),
            t = u(t),
            s)
                try {
                    return p(r, t)
                } catch (r) {}
            if (f(r, t))
                return i(!o(a.f, r, t), r[t])
        }
    }
    , function(r, t, e) {
        var n = e(6);
        r.exports = !n((function() {
            return 7 !== Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        }
        ))
    }
    , function(r, t, e) {
        r.exports = function(r) {
            try {
                return !!r()
            } catch (r) {
                return !0
            }
        }
    }
    , function(r, t, e) {
        var n = e(8)
          , o = Function.prototype.call;
        r.exports = n ? o.bind(o) : function() {
            return o.apply(o, arguments)
        }
    }
    , function(r, t, e) {
        var n = e(6);
        r.exports = !n((function() {
            var r = function() {}
            .bind();
            return "function" != typeof r || r.hasOwnProperty("prototype")
        }
        ))
    }
    , function(r, t, e) {
        var n = {}.propertyIsEnumerable
          , o = Object.getOwnPropertyDescriptor
          , a = o && !n.call({
            1: 2
        }, 1);
        t.f = a ? function(r) {
            var t = o(this, r);
            return !!t && t.enumerable
        }
        : n
    }
    , function(r, t, e) {
        r.exports = function(r, t) {
            return {
                enumerable: !(1 & r),
                configurable: !(2 & r),
                writable: !(4 & r),
                value: t
            }
        }
    }
    , function(r, t, e) {
        var n = e(12)
          , o = e(15);
        r.exports = function(r) {
            return n(o(r))
        }
    }
    , function(r, t, e) {
        var n = e(13)
          , o = e(6)
          , a = e(14)
          , i = Object
          , c = n("".split);
        r.exports = o((function() {
            return !i("z").propertyIsEnumerable(0)
        }
        )) ? function(r) {
            return "String" === a(r) ? c(r, "") : i(r)
        }
        : i
    }
    , function(r, t, e) {
        var n = e(8)
          , o = Function.prototype
          , a = o.call
          , i = n && o.bind.bind(a, a);
        r.exports = n ? i : function(r) {
            return function() {
                return a.apply(r, arguments)
            }
        }
    }
    , function(r, t, e) {
        var n = e(13)
          , o = n({}.toString)
          , a = n("".slice);
        r.exports = function(r) {
            return a(o(r), 8, -1)
        }
    }
    , function(r, t, e) {
        var n = e(16)
          , o = TypeError;
        r.exports = function(r) {
            if (n(r))
                throw new o("Can't call method on " + r);
            return r
        }
    }
    , function(t, e, n) {
        t.exports = function(t) {
            return null === t || t === r
        }
    }
    , function(r, t, e) {
        var n = e(18)
          , o = e(21);
        r.exports = function(r) {
            var t = n(r, "string");
            return o(t) ? t : t + ""
        }
    }
    , function(t, e, n) {
        var o = n(7)
          , a = n(19)
          , i = n(21)
          , c = n(28)
          , u = n(31)
          , f = n(32)
          , s = TypeError
          , p = f("toPrimitive");
        t.exports = function(t, e) {
            if (!a(t) || i(t))
                return t;
            var n, f = c(t, p);
            if (f) {
                if (e === r && (e = "default"),
                n = o(f, t, e),
                !a(n) || i(n))
                    return n;
                throw new s("Can't convert object to primitive value")
            }
            return e === r && (e = "number"),
            u(t, e)
        }
    }
    , function(r, t, e) {
        var n = e(20);
        r.exports = function(r) {
            return "object" == typeof r ? null !== r : n(r)
        }
    }
    , function(t, e, n) {
        var o = "object" == typeof document && document.all;
        t.exports = void 0 === o && o !== r ? function(r) {
            return "function" == typeof r || r === o
        }
        : function(r) {
            return "function" == typeof r
        }
    }
    , function(r, t, e) {
        var n = e(22)
          , o = e(20)
          , a = e(23)
          , i = e(24)
          , c = Object;
        r.exports = i ? function(r) {
            return "symbol" == typeof r
        }
        : function(r) {
            var t = n("Symbol");
            return o(t) && a(t.prototype, c(r))
        }
    }
    , function(t, e, n) {
        var o = n(3)
          , a = n(20);
        t.exports = function(t, e) {
            return arguments.length < 2 ? (n = o[t],
            a(n) ? n : r) : o[t] && o[t][e];
            var n
        }
    }
    , function(r, t, e) {
        var n = e(13);
        r.exports = n({}.isPrototypeOf)
    }
    , function(r, t, e) {
        var n = e(25);
        r.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
    }
    , function(r, t, e) {
        var n = e(26)
          , o = e(6)
          , a = e(3).String;
        r.exports = !!Object.getOwnPropertySymbols && !o((function() {
            var r = Symbol("symbol detection");
            return !a(r) || !(Object(r)instanceof Symbol) || !Symbol.sham && n && n < 41
        }
        ))
    }
    , function(r, t, e) {
        var n, o, a = e(3), i = e(27), c = a.process, u = a.Deno, f = c && c.versions || u && u.version, s = f && f.v8;
        s && (o = (n = s.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
        !o && i && (!(n = i.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = i.match(/Chrome\/(\d+)/)) && (o = +n[1]),
        r.exports = o
    }
    , function(r, t, e) {
        var n = e(3).navigator
          , o = n && n.userAgent;
        r.exports = o ? String(o) : ""
    }
    , function(t, e, n) {
        var o = n(29)
          , a = n(16);
        t.exports = function(t, e) {
            var n = t[e];
            return a(n) ? r : o(n)
        }
    }
    , function(r, t, e) {
        var n = e(20)
          , o = e(30)
          , a = TypeError;
        r.exports = function(r) {
            if (n(r))
                return r;
            throw new a(o(r) + " is not a function")
        }
    }
    , function(r, t, e) {
        var n = String;
        r.exports = function(r) {
            try {
                return n(r)
            } catch (r) {
                return "Object"
            }
        }
    }
    , function(r, t, e) {
        var n = e(7)
          , o = e(20)
          , a = e(19)
          , i = TypeError;
        r.exports = function(r, t) {
            var e, c;
            if ("string" === t && o(e = r.toString) && !a(c = n(e, r)))
                return c;
            if (o(e = r.valueOf) && !a(c = n(e, r)))
                return c;
            if ("string" !== t && o(e = r.toString) && !a(c = n(e, r)))
                return c;
            throw new i("Can't convert object to primitive value")
        }
    }
    , function(r, t, e) {
        var n = e(3)
          , o = e(33)
          , a = e(37)
          , i = e(39)
          , c = e(25)
          , u = e(24)
          , f = n.Symbol
          , s = o("wks")
          , p = u ? f.for || f : f && f.withoutSetter || i;
        r.exports = function(r) {
            return a(s, r) || (s[r] = c && a(f, r) ? f[r] : p("Symbol." + r)),
            s[r]
        }
    }
    , function(r, t, e) {
        var n = e(34);
        r.exports = function(r, t) {
            return n[r] || (n[r] = t || {})
        }
    }
    , function(r, t, e) {
        var n = e(35)
          , o = e(3)
          , a = e(36)
          , i = "__core-js_shared__"
          , c = r.exports = o[i] || a(i, {});
        (c.versions || (c.versions = [])).push({
            version: "3.39.0",
            mode: n ? "pure" : "global",
            copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",
            source: "https://github.com/zloirock/core-js"
        })
    }
    , function(r, t, e) {
        r.exports = !1
    }
    , function(r, t, e) {
        var n = e(3)
          , o = Object.defineProperty;
        r.exports = function(r, t) {
            try {
                o(n, r, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch (e) {
                n[r] = t
            }
            return t
        }
    }
    , function(r, t, e) {
        var n = e(13)
          , o = e(38)
          , a = n({}.hasOwnProperty);
        r.exports = Object.hasOwn || function(r, t) {
            return a(o(r), t)
        }
    }
    , function(r, t, e) {
        var n = e(15)
          , o = Object;
        r.exports = function(r) {
            return o(n(r))
        }
    }
    , function(t, e, n) {
        var o = n(13)
          , a = 0
          , i = Math.random()
          , c = o(1. .toString);
        t.exports = function(t) {
            return "Symbol(" + (t === r ? "" : t) + ")_" + c(++a + i, 36)
        }
    }
    , function(r, t, e) {
        var n = e(5)
          , o = e(6)
          , a = e(41);
        r.exports = !n && !o((function() {
            return 7 !== Object.defineProperty(a("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }
        ))
    }
    , function(r, t, e) {
        var n = e(3)
          , o = e(19)
          , a = n.document
          , i = o(a) && o(a.createElement);
        r.exports = function(r) {
            return i ? a.createElement(r) : {}
        }
    }
    , function(r, t, e) {
        var n = e(5)
          , o = e(43)
          , a = e(10);
        r.exports = n ? function(r, t, e) {
            return o.f(r, t, a(1, e))
        }
        : function(r, t, e) {
            return r[t] = e,
            r
        }
    }
    , function(r, t, e) {
        var n = e(5)
          , o = e(40)
          , a = e(44)
          , i = e(45)
          , c = e(17)
          , u = TypeError
          , f = Object.defineProperty
          , s = Object.getOwnPropertyDescriptor
          , p = "enumerable"
          , l = "configurable"
          , y = "writable";
        t.f = n ? a ? function(r, t, e) {
            if (i(r),
            t = c(t),
            i(e),
            "function" == typeof r && "prototype" === t && "value"in e && y in e && !e[y]) {
                var n = s(r, t);
                n && n[y] && (r[t] = e.value,
                e = {
                    configurable: l in e ? e[l] : n[l],
                    enumerable: p in e ? e[p] : n[p],
                    writable: !1
                })
            }
            return f(r, t, e)
        }
        : f : function(r, t, e) {
            if (i(r),
            t = c(t),
            i(e),
            o)
                try {
                    return f(r, t, e)
                } catch (r) {}
            if ("get"in e || "set"in e)
                throw new u("Accessors not supported");
            return "value"in e && (r[t] = e.value),
            r
        }
    }
    , function(r, t, e) {
        var n = e(5)
          , o = e(6);
        r.exports = n && o((function() {
            return 42 !== Object.defineProperty((function() {}
            ), "prototype", {
                value: 42,
                writable: !1
            }).prototype
        }
        ))
    }
    , function(r, t, e) {
        var n = e(19)
          , o = String
          , a = TypeError;
        r.exports = function(r) {
            if (n(r))
                return r;
            throw new a(o(r) + " is not an object")
        }
    }
    , function(t, e, n) {
        var o = n(20)
          , a = n(43)
          , i = n(47)
          , c = n(36);
        t.exports = function(t, e, n, u) {
            u || (u = {});
            var f = u.enumerable
              , s = u.name !== r ? u.name : e;
            if (o(n) && i(n, s, u),
            u.global)
                f ? t[e] = n : c(e, n);
            else {
                try {
                    u.unsafe ? t[e] && (f = !0) : delete t[e]
                } catch (r) {}
                f ? t[e] = n : a.f(t, e, {
                    value: n,
                    enumerable: !1,
                    configurable: !u.nonConfigurable,
                    writable: !u.nonWritable
                })
            }
            return t
        }
    }
    , function(t, e, n) {
        var o = n(13)
          , a = n(6)
          , i = n(20)
          , c = n(37)
          , u = n(5)
          , f = n(48).CONFIGURABLE
          , s = n(49)
          , p = n(50)
          , l = p.enforce
          , y = p.get
          , v = String
          , h = Object.defineProperty
          , g = o("".slice)
          , d = o("".replace)
          , b = o([].join)
          , m = u && !a((function() {
            return 8 !== h((function() {}
            ), "length", {
                value: 8
            }).length
        }
        ))
          , w = String(String).split("String")
          , E = t.exports = function(t, e, n) {
            "Symbol(" === g(v(e), 0, 7) && (e = "[" + d(v(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
            n && n.getter && (e = "get " + e),
            n && n.setter && (e = "set " + e),
            (!c(t, "name") || f && t.name !== e) && (u ? h(t, "name", {
                value: e,
                configurable: !0
            }) : t.name = e),
            m && n && c(n, "arity") && t.length !== n.arity && h(t, "length", {
                value: n.arity
            });
            try {
                n && c(n, "constructor") && n.constructor ? u && h(t, "prototype", {
                    writable: !1
                }) : t.prototype && (t.prototype = r)
            } catch (r) {}
            var o = l(t);
            return c(o, "source") || (o.source = b(w, "string" == typeof e ? e : "")),
            t
        }
        ;
        Function.prototype.toString = E((function() {
            return i(this) && y(this).source || s(this)
        }
        ), "toString")
    }
    , function(r, t, e) {
        var n = e(5)
          , o = e(37)
          , a = Function.prototype
          , i = n && Object.getOwnPropertyDescriptor
          , c = o(a, "name")
          , u = c && "something" === function() {}
        .name
          , f = c && (!n || n && i(a, "name").configurable);
        r.exports = {
            EXISTS: c,
            PROPER: u,
            CONFIGURABLE: f
        }
    }
    , function(r, t, e) {
        var n = e(13)
          , o = e(20)
          , a = e(34)
          , i = n(Function.toString);
        o(a.inspectSource) || (a.inspectSource = function(r) {
            return i(r)
        }
        ),
        r.exports = a.inspectSource
    }
    , function(r, t, e) {
        var n, o, a, i = e(51), c = e(3), u = e(19), f = e(42), s = e(37), p = e(34), l = e(52), y = e(53), v = "Object already initialized", h = c.TypeError, g = c.WeakMap;
        if (i || p.state) {
            var d = p.state || (p.state = new g);
            d.get = d.get,
            d.has = d.has,
            d.set = d.set,
            n = function(r, t) {
                if (d.has(r))
                    throw new h(v);
                return t.facade = r,
                d.set(r, t),
                t
            }
            ,
            o = function(r) {
                return d.get(r) || {}
            }
            ,
            a = function(r) {
                return d.has(r)
            }
        } else {
            var b = l("state");
            y[b] = !0,
            n = function(r, t) {
                if (s(r, b))
                    throw new h(v);
                return t.facade = r,
                f(r, b, t),
                t
            }
            ,
            o = function(r) {
                return s(r, b) ? r[b] : {}
            }
            ,
            a = function(r) {
                return s(r, b)
            }
        }
        r.exports = {
            set: n,
            get: o,
            has: a,
            enforce: function(r) {
                return a(r) ? o(r) : n(r, {})
            },
            getterFor: function(r) {
                return function(t) {
                    var e;
                    if (!u(t) || (e = o(t)).type !== r)
                        throw new h("Incompatible receiver, " + r + " required");
                    return e
                }
            }
        }
    }
    , function(r, t, e) {
        var n = e(3)
          , o = e(20)
          , a = n.WeakMap;
        r.exports = o(a) && /native code/.test(String(a))
    }
    , function(r, t, e) {
        var n = e(33)
          , o = e(39)
          , a = n("keys");
        r.exports = function(r) {
            return a[r] || (a[r] = o(r))
        }
    }
    , function(r, t, e) {
        r.exports = {}
    }
    , function(r, t, e) {
        var n = e(37)
          , o = e(55)
          , a = e(4)
          , i = e(43);
        r.exports = function(r, t, e) {
            for (var c = o(t), u = i.f, f = a.f, s = 0; s < c.length; s++) {
                var p = c[s];
                n(r, p) || e && n(e, p) || u(r, p, f(t, p))
            }
        }
    }
    , function(r, t, e) {
        var n = e(22)
          , o = e(13)
          , a = e(56)
          , i = e(65)
          , c = e(45)
          , u = o([].concat);
        r.exports = n("Reflect", "ownKeys") || function(r) {
            var t = a.f(c(r))
              , e = i.f;
            return e ? u(t, e(r)) : t
        }
    }
    , function(r, t, e) {
        var n = e(57)
          , o = e(64).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function(r) {
            return n(r, o)
        }
    }
    , function(r, t, e) {
        var n = e(13)
          , o = e(37)
          , a = e(11)
          , i = e(58).indexOf
          , c = e(53)
          , u = n([].push);
        r.exports = function(r, t) {
            var e, n = a(r), f = 0, s = [];
            for (e in n)
                !o(c, e) && o(n, e) && u(s, e);
            for (; t.length > f; )
                o(n, e = t[f++]) && (~i(s, e) || u(s, e));
            return s
        }
    }
    , function(r, t, e) {
        var n = e(11)
          , o = e(59)
          , a = e(62)
          , i = function(r) {
            return function(t, e, i) {
                var c = n(t)
                  , u = a(c);
                if (0 === u)
                    return !r && -1;
                var f, s = o(i, u);
                if (r && e != e) {
                    for (; u > s; )
                        if ((f = c[s++]) != f)
                            return !0
                } else
                    for (; u > s; s++)
                        if ((r || s in c) && c[s] === e)
                            return r || s || 0;
                return !r && -1
            }
        };
        r.exports = {
            includes: i(!0),
            indexOf: i(!1)
        }
    }
    , function(r, t, e) {
        var n = e(60)
          , o = Math.max
          , a = Math.min;
        r.exports = function(r, t) {
            var e = n(r);
            return e < 0 ? o(e + t, 0) : a(e, t)
        }
    }
    , function(r, t, e) {
        var n = e(61);
        r.exports = function(r) {
            var t = +r;
            return t != t || 0 === t ? 0 : n(t)
        }
    }
    , function(r, t, e) {
        var n = Math.ceil
          , o = Math.floor;
        r.exports = Math.trunc || function(r) {
            var t = +r;
            return (t > 0 ? o : n)(t)
        }
    }
    , function(r, t, e) {
        var n = e(63);
        r.exports = function(r) {
            return n(r.length)
        }
    }
    , function(r, t, e) {
        var n = e(60)
          , o = Math.min;
        r.exports = function(r) {
            var t = n(r);
            return t > 0 ? o(t, 9007199254740991) : 0
        }
    }
    , function(r, t, e) {
        r.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    , function(r, t, e) {
        t.f = Object.getOwnPropertySymbols
    }
    , function(r, t, e) {
        var n = e(6)
          , o = e(20)
          , a = /#|\.prototype\./
          , i = function(r, t) {
            var e = u[c(r)];
            return e === s || e !== f && (o(t) ? n(t) : !!t)
        }
          , c = i.normalize = function(r) {
            return String(r).replace(a, ".").toLowerCase()
        }
          , u = i.data = {}
          , f = i.NATIVE = "N"
          , s = i.POLYFILL = "P";
        r.exports = i
    }
    , function(r, t, e) {
        var n = e(62);
        r.exports = function(r, t) {
            for (var e = n(r), o = new t(e), a = 0; a < e; a++)
                o[a] = r[e - a - 1];
            return o
        }
    }
    , function(t, e, n) {
        var o = n(32)
          , a = n(69)
          , i = n(43).f
          , c = o("unscopables")
          , u = Array.prototype;
        u[c] === r && i(u, c, {
            configurable: !0,
            value: a(null)
        }),
        t.exports = function(r) {
            u[c][r] = !0
        }
    }
    , function(t, e, n) {
        var o, a = n(45), i = n(70), c = n(64), u = n(53), f = n(72), s = n(41), p = n(52), l = "prototype", y = "script", v = p("IE_PROTO"), h = function() {}, g = function(r) {
            return "<" + y + ">" + r + "</" + y + ">"
        }, d = function(r) {
            r.write(g("")),
            r.close();
            var t = r.parentWindow.Object;
            return r = null,
            t
        }, b = function() {
            try {
                o = new ActiveXObject("htmlfile")
            } catch (r) {}
            var r, t, e;
            b = "undefined" != typeof document ? document.domain && o ? d(o) : (t = s("iframe"),
            e = "java" + y + ":",
            t.style.display = "none",
            f.appendChild(t),
            t.src = String(e),
            (r = t.contentWindow.document).open(),
            r.write(g("document.F=Object")),
            r.close(),
            r.F) : d(o);
            for (var n = c.length; n--; )
                delete b[l][c[n]];
            return b()
        };
        u[v] = !0,
        t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (h[l] = a(t),
            n = new h,
            h[l] = null,
            n[v] = t) : n = b(),
            e === r ? n : i.f(n, e)
        }
    }
    , function(r, t, e) {
        var n = e(5)
          , o = e(44)
          , a = e(43)
          , i = e(45)
          , c = e(11)
          , u = e(71);
        t.f = n && !o ? Object.defineProperties : function(r, t) {
            i(r);
            for (var e, n = c(t), o = u(t), f = o.length, s = 0; f > s; )
                a.f(r, e = o[s++], n[e]);
            return r
        }
    }
    , function(r, t, e) {
        var n = e(57)
          , o = e(64);
        r.exports = Object.keys || function(r) {
            return n(r, o)
        }
    }
    , function(r, t, e) {
        var n = e(22);
        r.exports = n("document", "documentElement")
    }
    , function(t, e, n) {
        var o = n(2)
          , a = n(13)
          , i = n(29)
          , c = n(11)
          , u = n(74)
          , f = n(75)
          , s = n(68)
          , p = Array
          , l = a(f("Array", "sort"));
        o({
            target: "Array",
            proto: !0
        }, {
            toSorted: function(t) {
                t !== r && i(t);
                var e = c(this)
                  , n = u(p, e);
                return l(n, t)
            }
        }),
        s("toSorted")
    }
    , function(r, t, e) {
        var n = e(62);
        r.exports = function(r, t, e) {
            for (var o = 0, a = arguments.length > 2 ? e : n(t), i = new r(a); a > o; )
                i[o] = t[o++];
            return i
        }
    }
    , function(r, t, e) {
        var n = e(3);
        r.exports = function(r, t) {
            var e = n[r]
              , o = e && e.prototype;
            return o && o[t]
        }
    }
    , function(r, t, e) {
        var n = e(2)
          , o = e(68)
          , a = e(77)
          , i = e(62)
          , c = e(59)
          , u = e(11)
          , f = e(60)
          , s = Array
          , p = Math.max
          , l = Math.min;
        n({
            target: "Array",
            proto: !0
        }, {
            toSpliced: function(r, t) {
                var e, n, o, y, v = u(this), h = i(v), g = c(r, h), d = arguments.length, b = 0;
                for (0 === d ? e = n = 0 : 1 === d ? (e = 0,
                n = h - g) : (e = d - 2,
                n = l(p(f(t), 0), h - g)),
                o = a(h + e - n),
                y = s(o); b < g; b++)
                    y[b] = v[b];
                for (; b < g + e; b++)
                    y[b] = arguments[b - g + 2];
                for (; b < o; b++)
                    y[b] = v[b + n - e];
                return y
            }
        }),
        o("toSpliced")
    }
    , function(r, t, e) {
        var n = TypeError;
        r.exports = function(r) {
            if (r > 9007199254740991)
                throw n("Maximum allowed index exceeded");
            return r
        }
    }
    , function(r, t, e) {
        var n = e(2)
          , o = e(79)
          , a = e(11)
          , i = Array;
        n({
            target: "Array",
            proto: !0
        }, {
            with: function(r, t) {
                return o(a(this), i, r, t)
            }
        })
    }
    , function(r, t, e) {
        var n = e(62)
          , o = e(60)
          , a = RangeError;
        r.exports = function(r, t, e, i) {
            var c = n(r)
              , u = o(e)
              , f = u < 0 ? c + u : u;
            if (f >= c || f < 0)
                throw new a("Incorrect index");
            for (var s = new t(c), p = 0; p < c; p++)
                s[p] = p === f ? i : r[p];
            return s
        }
    }
    , function(r, t, e) {
        var n = e(5)
          , o = e(81)
          , a = e(82)
          , i = ArrayBuffer.prototype;
        n && !("detached"in i) && o(i, "detached", {
            configurable: !0,
            get: function() {
                return a(this)
            }
        })
    }
    , function(r, t, e) {
        var n = e(47)
          , o = e(43);
        r.exports = function(r, t, e) {
            return e.get && n(e.get, t, {
                getter: !0
            }),
            e.set && n(e.set, t, {
                setter: !0
            }),
            o.f(r, t, e)
        }
    }
    , function(r, t, e) {
        var n = e(3)
          , o = e(83)
          , a = e(84)
          , i = n.ArrayBuffer
          , c = i && i.prototype
          , u = c && o(c.slice);
        r.exports = function(r) {
            if (0 !== a(r))
                return !1;
            if (!u)
                return !1;
            try {
                return u(r, 0, 0),
                !1
            } catch (r) {
                return !0
            }
        }
    }
    , function(r, t, e) {
        var n = e(14)
          , o = e(13);
        r.exports = function(r) {
            if ("Function" === n(r))
                return o(r)
        }
    }
    , function(r, t, e) {
        var n = e(3)
          , o = e(85)
          , a = e(14)
          , i = n.ArrayBuffer
          , c = n.TypeError;
        r.exports = i && o(i.prototype, "byteLength", "get") || function(r) {
            if ("ArrayBuffer" !== a(r))
                throw new c("ArrayBuffer expected");
            return r.byteLength
        }
    }
    , function(r, t, e) {
        var n = e(13)
          , o = e(29);
        r.exports = function(r, t, e) {
            try {
                return n(o(Object.getOwnPropertyDescriptor(r, t)[e]))
            } catch (r) {}
        }
    }
    , function(t, e, n) {
        var o = n(2)
          , a = n(87);
        a && o({
            target: "ArrayBuffer",
            proto: !0
        }, {
            transfer: function() {
                return a(this, arguments.length ? arguments[0] : r, !0)
            }
        })
    }
    , function(t, e, n) {
        var o = n(3)
          , a = n(13)
          , i = n(85)
          , c = n(88)
          , u = n(89)
          , f = n(84)
          , s = n(90)
          , p = n(94)
          , l = o.structuredClone
          , y = o.ArrayBuffer
          , v = o.DataView
          , h = Math.min
          , g = y.prototype
          , d = v.prototype
          , b = a(g.slice)
          , m = i(g, "resizable", "get")
          , w = i(g, "maxByteLength", "get")
          , E = a(d.getInt8)
          , x = a(d.setInt8);
        t.exports = (p || s) && function(t, e, n) {
            var o, a = f(t), i = e === r ? a : c(e), g = !m || !m(t);
            if (u(t),
            p && (t = l(t, {
                transfer: [t]
            }),
            a === i && (n || g)))
                return t;
            if (a >= i && (!n || g))
                o = b(t, 0, i);
            else {
                var d = n && !g && w ? {
                    maxByteLength: w(t)
                } : r;
                o = new y(i,d);
                for (var A = new v(t), O = new v(o), R = h(i, a), S = 0; S < R; S++)
                    x(O, S, E(A, S))
            }
            return p || s(t),
            o
        }
    }
    , function(t, e, n) {
        var o = n(60)
          , a = n(63)
          , i = RangeError;
        t.exports = function(t) {
            if (t === r)
                return 0;
            var e = o(t)
              , n = a(e);
            if (e !== n)
                throw new i("Wrong length or index");
            return n
        }
    }
    , function(r, t, e) {
        var n = e(82)
          , o = TypeError;
        r.exports = function(r) {
            if (n(r))
                throw new o("ArrayBuffer is detached");
            return r
        }
    }
    , function(r, t, e) {
        var n, o, a, i, c = e(3), u = e(91), f = e(94), s = c.structuredClone, p = c.ArrayBuffer, l = c.MessageChannel, y = !1;
        if (f)
            y = function(r) {
                s(r, {
                    transfer: [r]
                })
            }
            ;
        else if (p)
            try {
                l || (n = u("worker_threads")) && (l = n.MessageChannel),
                l && (o = new l,
                a = new p(2),
                i = function(r) {
                    o.port1.postMessage(null, [r])
                }
                ,
                2 === a.byteLength && (i(a),
                0 === a.byteLength && (y = i)))
            } catch (r) {}
        r.exports = y
    }
    , function(r, t, e) {
        var n = e(3)
          , o = e(92);
        r.exports = function(r) {
            if (o) {
                try {
                    return n.process.getBuiltinModule(r)
                } catch (r) {}
                try {
                    return Function('return require("' + r + '")')()
                } catch (r) {}
            }
        }
    }
    , function(r, t, e) {
        var n = e(93);
        r.exports = "NODE" === n
    }
    , function(r, t, e) {
        var n = e(3)
          , o = e(27)
          , a = e(14)
          , i = function(r) {
            return o.slice(0, r.length) === r
        };
        r.exports = i("Bun/") ? "BUN" : i("Cloudflare-Workers") ? "CLOUDFLARE" : i("Deno/") ? "DENO" : i("Node.js/") ? "NODE" : n.Bun && "string" == typeof Bun.version ? "BUN" : n.Deno && "object" == typeof Deno.version ? "DENO" : "process" === a(n.process) ? "NODE" : n.window && n.document ? "BROWSER" : "REST"
    }
    , function(r, t, e) {
        var n = e(3)
          , o = e(6)
          , a = e(26)
          , i = e(93)
          , c = n.structuredClone;
        r.exports = !!c && !o((function() {
            if ("DENO" === i && a > 92 || "NODE" === i && a > 94 || "BROWSER" === i && a > 97)
                return !1;
            var r = new ArrayBuffer(8)
              , t = c(r, {
                transfer: [r]
            });
            return 0 !== r.byteLength || 8 !== t.byteLength
        }
        ))
    }
    , function(t, e, n) {
        var o = n(2)
          , a = n(87);
        a && o({
            target: "ArrayBuffer",
            proto: !0
        }, {
            transferToFixedLength: function() {
                return a(this, arguments.length ? arguments[0] : r, !1)
            }
        })
    }
    , function(r, t, e) {
        var n = e(2)
          , o = e(13)
          , a = e(29)
          , i = e(15)
          , c = e(97)
          , u = e(106)
          , f = e(35)
          , s = e(6)
          , p = u.Map
          , l = u.has
          , y = u.get
          , v = u.set
          , h = o([].push)
          , g = f || s((function() {
            return 1 !== p.groupBy("ab", (function(r) {
                return r
            }
            )).get("a").length
        }
        ));
        n({
            target: "Map",
            stat: !0,
            forced: f || g
        }, {
            groupBy: function(r, t) {
                i(r),
                a(t);
                var e = new p
                  , n = 0;
                return c(r, (function(r) {
                    var o = t(r, n++);
                    l(e, o) ? h(y(e, o), r) : v(e, o, [r])
                }
                )),
                e
            }
        })
    }
    , function(r, t, e) {
        var n = e(98)
          , o = e(7)
          , a = e(45)
          , i = e(30)
          , c = e(99)
          , u = e(62)
          , f = e(23)
          , s = e(101)
          , p = e(102)
          , l = e(105)
          , y = TypeError
          , v = function(r, t) {
            this.stopped = r,
            this.result = t
        }
          , h = v.prototype;
        r.exports = function(r, t, e) {
            var g, d, b, m, w, E, x, A = e && e.that, O = !(!e || !e.AS_ENTRIES), R = !(!e || !e.IS_RECORD), S = !(!e || !e.IS_ITERATOR), T = !(!e || !e.INTERRUPTED), I = n(t, A), _ = function(r) {
                return g && l(g, "normal", r),
                new v(!0,r)
            }, D = function(r) {
                return O ? (a(r),
                T ? I(r[0], r[1], _) : I(r[0], r[1])) : T ? I(r, _) : I(r)
            };
            if (R)
                g = r.iterator;
            else if (S)
                g = r;
            else {
                if (!(d = p(r)))
                    throw new y(i(r) + " is not iterable");
                if (c(d)) {
                    for (b = 0,
                    m = u(r); m > b; b++)
                        if ((w = D(r[b])) && f(h, w))
                            return w;
                    return new v(!1)
                }
                g = s(r, d)
            }
            for (E = R ? r.next : g.next; !(x = o(E, g)).done; ) {
                try {
                    w = D(x.value)
                } catch (r) {
                    l(g, "throw", r)
                }
                if ("object" == typeof w && w && f(h, w))
                    return w
            }
            return new v(!1)
        }
    }
    , function(t, e, n) {
        var o = n(83)
          , a = n(29)
          , i = n(8)
          , c = o(o.bind);
        t.exports = function(t, e) {
            return a(t),
            e === r ? t : i ? c(t, e) : function() {
                return t.apply(e, arguments)
            }
        }
    }
    , function(t, e, n) {
        var o = n(32)
          , a = n(100)
          , i = o("iterator")
          , c = Array.prototype;
        t.exports = function(t) {
            return t !== r && (a.Array === t || c[i] === t)
        }
    }
    , function(r, t, e) {
        r.exports = {}
    }
    , function(r, t, e) {
        var n = e(7)
          , o = e(29)
          , a = e(45)
          , i = e(30)
          , c = e(102)
          , u = TypeError;
        r.exports = function(r, t) {
            var e = arguments.length < 2 ? c(r) : t;
            if (o(e))
                return a(n(e, r));
            throw new u(i(r) + " is not iterable")
        }
    }
    , function(r, t, e) {
        var n = e(103)
          , o = e(28)
          , a = e(16)
          , i = e(100)
          , c = e(32)("iterator");
        r.exports = function(r) {
            if (!a(r))
                return o(r, c) || o(r, "@@iterator") || i[n(r)]
        }
    }
    , function(t, e, n) {
        var o = n(104)
          , a = n(20)
          , i = n(14)
          , c = n(32)("toStringTag")
          , u = Object
          , f = "Arguments" === i(function() {
            return arguments
        }());
        t.exports = o ? i : function(t) {
            var e, n, o;
            return t === r ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function(r, t) {
                try {
                    return r[t]
                } catch (r) {}
            }(e = u(t), c)) ? n : f ? i(e) : "Object" === (o = i(e)) && a(e.callee) ? "Arguments" : o
        }
    }
    , function(r, t, e) {
        var n = {};
        n[e(32)("toStringTag")] = "z",
        r.exports = "[object z]" === String(n)
    }
    , function(r, t, e) {
        var n = e(7)
          , o = e(45)
          , a = e(28);
        r.exports = function(r, t, e) {
            var i, c;
            o(r);
            try {
                if (!(i = a(r, "return"))) {
                    if ("throw" === t)
                        throw e;
                    return e
                }
                i = n(i, r)
            } catch (r) {
                c = !0,
                i = r
            }
            if ("throw" === t)
                throw e;
            if (c)
                throw i;
            return o(i),
            e
        }
    }
    , function(r, t, e) {
        var n = e(13)
          , o = Map.prototype;
        r.exports = {
            Map,
            set: n(o.set),
            get: n(o.get),
            has: n(o.has),
            remove: n(o.delete),
            proto: o
        }
    }
    , function(r, t, e) {
        var n = e(2)
          , o = e(22)
          , a = e(13)
          , i = e(29)
          , c = e(15)
          , u = e(17)
          , f = e(97)
          , s = e(6)
          , p = Object.groupBy
          , l = o("Object", "create")
          , y = a([].push);
        n({
            target: "Object",
            stat: !0,
            forced: !p || s((function() {
                return 1 !== p("ab", (function(r) {
                    return r
                }
                )).a.length
            }
            ))
        }, {
            groupBy: function(r, t) {
                c(r),
                i(t);
                var e = l(null)
                  , n = 0;
                return f(r, (function(r) {
                    var o = u(t(r, n++));
                    o in e ? y(e[o], r) : e[o] = [r]
                }
                )),
                e
            }
        })
    }
    , function(t, e, n) {
        var o = n(2)
          , a = n(3)
          , i = n(109)
          , c = n(110)
          , u = n(111)
          , f = n(29)
          , s = n(112)
          , p = a.Promise
          , l = !1;
        o({
            target: "Promise",
            stat: !0,
            forced: !p || !p.try || s((function() {
                p.try((function(r) {
                    l = 8 === r
                }
                ), 8)
            }
            )).error || !l
        }, {
            try: function(t) {
                var e = arguments.length > 1 ? c(arguments, 1) : []
                  , n = u.f(this)
                  , o = s((function() {
                    return i(f(t), r, e)
                }
                ));
                return (o.error ? n.reject : n.resolve)(o.value),
                n.promise
            }
        })
    }
    , function(r, t, e) {
        var n = e(8)
          , o = Function.prototype
          , a = o.apply
          , i = o.call;
        r.exports = "object" == typeof Reflect && Reflect.apply || (n ? i.bind(a) : function() {
            return i.apply(a, arguments)
        }
        )
    }
    , function(r, t, e) {
        var n = e(13);
        r.exports = n([].slice)
    }
    , function(t, e, n) {
        var o = n(29)
          , a = TypeError
          , i = function(t) {
            var e, n;
            this.promise = new t((function(t, o) {
                if (e !== r || n !== r)
                    throw new a("Bad Promise constructor");
                e = t,
                n = o
            }
            )),
            this.resolve = o(e),
            this.reject = o(n)
        };
        t.exports.f = function(r) {
            return new i(r)
        }
    }
    , function(r, t, e) {
        r.exports = function(r) {
            try {
                return {
                    error: !1,
                    value: r()
                }
            } catch (r) {
                return {
                    error: !0,
                    value: r
                }
            }
        }
    }
    , function(r, t, e) {
        var n = e(2)
          , o = e(111);
        n({
            target: "Promise",
            stat: !0
        }, {
            withResolvers: function() {
                var r = o.f(this);
                return {
                    promise: r.promise,
                    resolve: r.resolve,
                    reject: r.reject
                }
            }
        })
    }
    , function(r, t, e) {
        var n = e(3)
          , o = e(5)
          , a = e(81)
          , i = e(115)
          , c = e(6)
          , u = n.RegExp
          , f = u.prototype;
        o && c((function() {
            var r = !0;
            try {
                u(".", "d")
            } catch (t) {
                r = !1
            }
            var t = {}
              , e = ""
              , n = r ? "dgimsy" : "gimsy"
              , o = function(r, n) {
                Object.defineProperty(t, r, {
                    get: function() {
                        return e += n,
                        !0
                    }
                })
            }
              , a = {
                dotAll: "s",
                global: "g",
                ignoreCase: "i",
                multiline: "m",
                sticky: "y"
            };
            for (var i in r && (a.hasIndices = "d"),
            a)
                o(i, a[i]);
            return Object.getOwnPropertyDescriptor(f, "flags").get.call(t) !== n || e !== n
        }
        )) && a(f, "flags", {
            configurable: !0,
            get: i
        })
    }
    , function(r, t, e) {
        var n = e(45);
        r.exports = function() {
            var r = n(this)
              , t = "";
            return r.hasIndices && (t += "d"),
            r.global && (t += "g"),
            r.ignoreCase && (t += "i"),
            r.multiline && (t += "m"),
            r.dotAll && (t += "s"),
            r.unicode && (t += "u"),
            r.unicodeSets && (t += "v"),
            r.sticky && (t += "y"),
            t
        }
    }
    , function(r, t, e) {
        var n = e(2)
          , o = e(13)
          , a = e(15)
          , i = e(117)
          , c = o("".charCodeAt);
        n({
            target: "String",
            proto: !0
        }, {
            isWellFormed: function() {
                for (var r = i(a(this)), t = r.length, e = 0; e < t; e++) {
                    var n = c(r, e);
                    if (55296 == (63488 & n) && (n >= 56320 || ++e >= t || 56320 != (64512 & c(r, e))))
                        return !1
                }
                return !0
            }
        })
    }
    , function(r, t, e) {
        var n = e(103)
          , o = String;
        r.exports = function(r) {
            if ("Symbol" === n(r))
                throw new TypeError("Cannot convert a Symbol value to a string");
            return o(r)
        }
    }
    , function(r, t, e) {
        var n = e(2)
          , o = e(7)
          , a = e(13)
          , i = e(15)
          , c = e(117)
          , u = e(6)
          , f = Array
          , s = a("".charAt)
          , p = a("".charCodeAt)
          , l = a([].join)
          , y = "".toWellFormed
          , v = y && u((function() {
            return "1" !== o(y, 1)
        }
        ));
        n({
            target: "String",
            proto: !0,
            forced: v
        }, {
            toWellFormed: function() {
                var r = c(i(this));
                if (v)
                    return o(y, r);
                for (var t = r.length, e = f(t), n = 0; n < t; n++) {
                    var a = p(r, n);
                    55296 != (63488 & a) ? e[n] = s(r, n) : a >= 56320 || n + 1 >= t || 56320 != (64512 & p(r, n + 1)) ? e[n] = "�" : (e[n] = s(r, n),
                    e[++n] = s(r, n))
                }
                return l(e, "")
            }
        })
    }
    , function(r, t, e) {
        var n = e(67)
          , o = e(120)
          , a = o.aTypedArray
          , i = o.exportTypedArrayMethod
          , c = o.getTypedArrayConstructor;
        i("toReversed", (function() {
            return n(a(this), c(this))
        }
        ))
    }
    , function(t, e, n) {
        var o, a, i, c = n(121), u = n(5), f = n(3), s = n(20), p = n(19), l = n(37), y = n(103), v = n(30), h = n(42), g = n(46), d = n(81), b = n(23), m = n(122), w = n(124), E = n(32), x = n(39), A = n(50), O = A.enforce, R = A.get, S = f.Int8Array, T = S && S.prototype, I = f.Uint8ClampedArray, _ = I && I.prototype, D = S && m(S), j = T && m(T), M = Object.prototype, P = f.TypeError, C = E("toStringTag"), k = x("TYPED_ARRAY_TAG"), B = "TypedArrayConstructor", L = c && !!w && "Opera" !== y(f.opera), U = !1, N = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
        }, F = {
            BigInt64Array: 8,
            BigUint64Array: 8
        }, W = function(r) {
            var t = m(r);
            if (p(t)) {
                var e = R(t);
                return e && l(e, B) ? e[B] : W(t)
            }
        }, V = function(r) {
            if (!p(r))
                return !1;
            var t = y(r);
            return l(N, t) || l(F, t)
        };
        for (o in N)
            (i = (a = f[o]) && a.prototype) ? O(i)[B] = a : L = !1;
        for (o in F)
            (i = (a = f[o]) && a.prototype) && (O(i)[B] = a);
        if ((!L || !s(D) || D === Function.prototype) && (D = function() {
            throw new P("Incorrect invocation")
        }
        ,
        L))
            for (o in N)
                f[o] && w(f[o], D);
        if ((!L || !j || j === M) && (j = D.prototype,
        L))
            for (o in N)
                f[o] && w(f[o].prototype, j);
        if (L && m(_) !== j && w(_, j),
        u && !l(j, C))
            for (o in U = !0,
            d(j, C, {
                configurable: !0,
                get: function() {
                    return p(this) ? this[k] : r
                }
            }),
            N)
                f[o] && h(f[o], k, o);
        t.exports = {
            NATIVE_ARRAY_BUFFER_VIEWS: L,
            TYPED_ARRAY_TAG: U && k,
            aTypedArray: function(r) {
                if (V(r))
                    return r;
                throw new P("Target is not a typed array")
            },
            aTypedArrayConstructor: function(r) {
                if (s(r) && (!w || b(D, r)))
                    return r;
                throw new P(v(r) + " is not a typed array constructor")
            },
            exportTypedArrayMethod: function(r, t, e, n) {
                if (u) {
                    if (e)
                        for (var o in N) {
                            var a = f[o];
                            if (a && l(a.prototype, r))
                                try {
                                    delete a.prototype[r]
                                } catch (e) {
                                    try {
                                        a.prototype[r] = t
                                    } catch (r) {}
                                }
                        }
                    j[r] && !e || g(j, r, e ? t : L && T[r] || t, n)
                }
            },
            exportTypedArrayStaticMethod: function(r, t, e) {
                var n, o;
                if (u) {
                    if (w) {
                        if (e)
                            for (n in N)
                                if ((o = f[n]) && l(o, r))
                                    try {
                                        delete o[r]
                                    } catch (r) {}
                        if (D[r] && !e)
                            return;
                        try {
                            return g(D, r, e ? t : L && D[r] || t)
                        } catch (r) {}
                    }
                    for (n in N)
                        !(o = f[n]) || o[r] && !e || g(o, r, t)
                }
            },
            getTypedArrayConstructor: W,
            isView: function(r) {
                if (!p(r))
                    return !1;
                var t = y(r);
                return "DataView" === t || l(N, t) || l(F, t)
            },
            isTypedArray: V,
            TypedArray: D,
            TypedArrayPrototype: j
        }
    }
    , function(r, t, e) {
        r.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
    }
    , function(r, t, e) {
        var n = e(37)
          , o = e(20)
          , a = e(38)
          , i = e(52)
          , c = e(123)
          , u = i("IE_PROTO")
          , f = Object
          , s = f.prototype;
        r.exports = c ? f.getPrototypeOf : function(r) {
            var t = a(r);
            if (n(t, u))
                return t[u];
            var e = t.constructor;
            return o(e) && t instanceof e ? e.prototype : t instanceof f ? s : null
        }
    }
    , function(r, t, e) {
        var n = e(6);
        r.exports = !n((function() {
            function r() {}
            return r.prototype.constructor = null,
            Object.getPrototypeOf(new r) !== r.prototype
        }
        ))
    }
    , function(t, e, n) {
        var o = n(85)
          , a = n(19)
          , i = n(15)
          , c = n(125);
        t.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
            var r, t = !1, e = {};
            try {
                (r = o(Object.prototype, "__proto__", "set"))(e, []),
                t = e instanceof Array
            } catch (r) {}
            return function(e, n) {
                return i(e),
                c(n),
                a(e) ? (t ? r(e, n) : e.__proto__ = n,
                e) : e
            }
        }() : r)
    }
    , function(r, t, e) {
        var n = e(126)
          , o = String
          , a = TypeError;
        r.exports = function(r) {
            if (n(r))
                return r;
            throw new a("Can't set " + o(r) + " as a prototype")
        }
    }
    , function(r, t, e) {
        var n = e(19);
        r.exports = function(r) {
            return n(r) || null === r
        }
    }
    , function(t, e, n) {
        var o = n(120)
          , a = n(13)
          , i = n(29)
          , c = n(74)
          , u = o.aTypedArray
          , f = o.getTypedArrayConstructor
          , s = o.exportTypedArrayMethod
          , p = a(o.TypedArrayPrototype.sort);
        s("toSorted", (function(t) {
            t !== r && i(t);
            var e = u(this)
              , n = c(f(e), e);
            return p(n, t)
        }
        ))
    }
    , function(r, t, e) {
        var n = e(79)
          , o = e(120)
          , a = e(129)
          , i = e(60)
          , c = e(130)
          , u = o.aTypedArray
          , f = o.getTypedArrayConstructor
          , s = o.exportTypedArrayMethod
          , p = !!function() {
            try {
                new Int8Array(1).with(2, {
                    valueOf: function() {
                        throw 8
                    }
                })
            } catch (r) {
                return 8 === r
            }
        }();
        s("with", {
            with: function(r, t) {
                var e = u(this)
                  , o = i(r)
                  , s = a(e) ? c(t) : +t;
                return n(e, f(e), o, s)
            }
        }.with, !p)
    }
    , function(r, t, e) {
        var n = e(103);
        r.exports = function(r) {
            var t = n(r);
            return "BigInt64Array" === t || "BigUint64Array" === t
        }
    }
    , function(r, t, e) {
        var n = e(18)
          , o = TypeError;
        r.exports = function(r) {
            var t = n(r, "number");
            if ("number" == typeof t)
                throw new o("Can't convert number to bigint");
            return BigInt(t)
        }
    }
    , function(t, e, n) {
        var o = n(2)
          , a = n(3)
          , i = n(22)
          , c = n(10)
          , u = n(43).f
          , f = n(37)
          , s = n(132)
          , p = n(133)
          , l = n(134)
          , y = n(135)
          , v = n(136)
          , h = n(5)
          , g = n(35)
          , d = "DOMException"
          , b = i("Error")
          , m = i(d)
          , w = function() {
            s(this, E);
            var t = arguments.length
              , e = l(t < 1 ? r : arguments[0])
              , n = l(t < 2 ? r : arguments[1], "Error")
              , o = new m(e,n)
              , a = new b(e);
            return a.name = d,
            u(o, "stack", c(1, v(a.stack, 1))),
            p(o, this, w),
            o
        }
          , E = w.prototype = m.prototype
          , x = "stack"in new b(d)
          , A = "stack"in new m(1,2)
          , O = m && h && Object.getOwnPropertyDescriptor(a, d)
          , R = !(!O || O.writable && O.configurable)
          , S = x && !R && !A;
        o({
            global: !0,
            constructor: !0,
            forced: g || S
        }, {
            DOMException: S ? w : m
        });
        var T = i(d)
          , I = T.prototype;
        if (I.constructor !== T)
            for (var _ in g || u(I, "constructor", c(1, T)),
            y)
                if (f(y, _)) {
                    var D = y[_]
                      , j = D.s;
                    f(T, j) || u(T, j, c(6, D.c))
                }
    }
    , function(r, t, e) {
        var n = e(23)
          , o = TypeError;
        r.exports = function(r, t) {
            if (n(t, r))
                return r;
            throw new o("Incorrect invocation")
        }
    }
    , function(r, t, e) {
        var n = e(20)
          , o = e(19)
          , a = e(124);
        r.exports = function(r, t, e) {
            var i, c;
            return a && n(i = t.constructor) && i !== e && o(c = i.prototype) && c !== e.prototype && a(r, c),
            r
        }
    }
    , function(t, e, n) {
        var o = n(117);
        t.exports = function(t, e) {
            return t === r ? arguments.length < 2 ? "" : e : o(t)
        }
    }
    , function(r, t, e) {
        r.exports = {
            IndexSizeError: {
                s: "INDEX_SIZE_ERR",
                c: 1,
                m: 1
            },
            DOMStringSizeError: {
                s: "DOMSTRING_SIZE_ERR",
                c: 2,
                m: 0
            },
            HierarchyRequestError: {
                s: "HIERARCHY_REQUEST_ERR",
                c: 3,
                m: 1
            },
            WrongDocumentError: {
                s: "WRONG_DOCUMENT_ERR",
                c: 4,
                m: 1
            },
            InvalidCharacterError: {
                s: "INVALID_CHARACTER_ERR",
                c: 5,
                m: 1
            },
            NoDataAllowedError: {
                s: "NO_DATA_ALLOWED_ERR",
                c: 6,
                m: 0
            },
            NoModificationAllowedError: {
                s: "NO_MODIFICATION_ALLOWED_ERR",
                c: 7,
                m: 1
            },
            NotFoundError: {
                s: "NOT_FOUND_ERR",
                c: 8,
                m: 1
            },
            NotSupportedError: {
                s: "NOT_SUPPORTED_ERR",
                c: 9,
                m: 1
            },
            InUseAttributeError: {
                s: "INUSE_ATTRIBUTE_ERR",
                c: 10,
                m: 1
            },
            InvalidStateError: {
                s: "INVALID_STATE_ERR",
                c: 11,
                m: 1
            },
            SyntaxError: {
                s: "SYNTAX_ERR",
                c: 12,
                m: 1
            },
            InvalidModificationError: {
                s: "INVALID_MODIFICATION_ERR",
                c: 13,
                m: 1
            },
            NamespaceError: {
                s: "NAMESPACE_ERR",
                c: 14,
                m: 1
            },
            InvalidAccessError: {
                s: "INVALID_ACCESS_ERR",
                c: 15,
                m: 1
            },
            ValidationError: {
                s: "VALIDATION_ERR",
                c: 16,
                m: 0
            },
            TypeMismatchError: {
                s: "TYPE_MISMATCH_ERR",
                c: 17,
                m: 1
            },
            SecurityError: {
                s: "SECURITY_ERR",
                c: 18,
                m: 1
            },
            NetworkError: {
                s: "NETWORK_ERR",
                c: 19,
                m: 1
            },
            AbortError: {
                s: "ABORT_ERR",
                c: 20,
                m: 1
            },
            URLMismatchError: {
                s: "URL_MISMATCH_ERR",
                c: 21,
                m: 1
            },
            QuotaExceededError: {
                s: "QUOTA_EXCEEDED_ERR",
                c: 22,
                m: 1
            },
            TimeoutError: {
                s: "TIMEOUT_ERR",
                c: 23,
                m: 1
            },
            InvalidNodeTypeError: {
                s: "INVALID_NODE_TYPE_ERR",
                c: 24,
                m: 1
            },
            DataCloneError: {
                s: "DATA_CLONE_ERR",
                c: 25,
                m: 1
            }
        }
    }
    , function(r, t, e) {
        var n = e(13)
          , o = Error
          , a = n("".replace)
          , i = String(new o("zxcasd").stack)
          , c = /\n\s*at [^:]*:[^\n]*/
          , u = c.test(i);
        r.exports = function(r, t) {
            if (u && "string" == typeof r && !o.prepareStackTrace)
                for (; t--; )
                    r = a(r, c, "");
            return r
        }
    }
    , function(t, e, n) {
        var o, a = n(35), i = n(2), c = n(3), u = n(22), f = n(13), s = n(6), p = n(39), l = n(20), y = n(138), v = n(16), h = n(19), g = n(21), d = n(97), b = n(45), m = n(103), w = n(37), E = n(139), x = n(42), A = n(62), O = n(140), R = n(141), S = n(106), T = n(142), I = n(143), _ = n(90), D = n(145), j = n(94), M = c.Object, P = c.Array, C = c.Date, k = c.Error, B = c.TypeError, L = c.PerformanceMark, U = u("DOMException"), N = S.Map, F = S.has, W = S.get, V = S.set, z = T.Set, G = T.add, Y = T.has, H = u("Object", "keys"), Q = f([].push), X = f((!0).valueOf), q = f(1. .valueOf), K = f("".valueOf), Z = f(C.prototype.getTime), $ = p("structuredClone"), J = "DataCloneError", rr = "Transferring", tr = function(r) {
            return !s((function() {
                var t = new c.Set([7])
                  , e = r(t)
                  , n = r(M(7));
                return e === t || !e.has(7) || !h(n) || 7 != +n
            }
            )) && r
        }, er = function(r, t) {
            return !s((function() {
                var e = new t
                  , n = r({
                    a: e,
                    b: e
                });
                return !(n && n.a === n.b && n.a instanceof t && n.a.stack === e.stack)
            }
            ))
        }, nr = c.structuredClone, or = a || !er(nr, k) || !er(nr, U) || (o = nr,
        !!s((function() {
            var r = o(new c.AggregateError([1],$,{
                cause: 3
            }));
            return "AggregateError" !== r.name || 1 !== r.errors[0] || r.message !== $ || 3 !== r.cause
        }
        ))), ar = !nr && tr((function(r) {
            return new L($,{
                detail: r
            }).detail
        }
        )), ir = tr(nr) || ar, cr = function(r) {
            throw new U("Uncloneable type: " + r,J)
        }, ur = function(r, t) {
            throw new U((t || "Cloning") + " of " + r + " cannot be properly polyfilled in this engine",J)
        }, fr = function(r, t) {
            return ir || ur(t),
            ir(r)
        }, sr = function(t, e, n) {
            if (F(e, t))
                return W(e, t);
            var o, a, i, u, f, s;
            if ("SharedArrayBuffer" === (n || m(t)))
                o = ir ? ir(t) : t;
            else {
                var p = c.DataView;
                p || l(t.slice) || ur("ArrayBuffer");
                try {
                    if (l(t.slice) && !t.resizable)
                        o = t.slice(0);
                    else {
                        a = t.byteLength,
                        i = "maxByteLength"in t ? {
                            maxByteLength: t.maxByteLength
                        } : r,
                        o = new ArrayBuffer(a,i),
                        u = new p(t),
                        f = new p(o);
                        for (s = 0; s < a; s++)
                            f.setUint8(s, u.getUint8(s))
                    }
                } catch (r) {
                    throw new U("ArrayBuffer is detached",J)
                }
            }
            return V(e, t, o),
            o
        }, pr = function(t, e) {
            if (g(t) && cr("Symbol"),
            !h(t))
                return t;
            if (e) {
                if (F(e, t))
                    return W(e, t)
            } else
                e = new N;
            var n, o, a, i, f, s, p, y, v = m(t);
            switch (v) {
            case "Array":
                a = P(A(t));
                break;
            case "Object":
                a = {};
                break;
            case "Map":
                a = new N;
                break;
            case "Set":
                a = new z;
                break;
            case "RegExp":
                a = new RegExp(t.source,R(t));
                break;
            case "Error":
                switch (o = t.name) {
                case "AggregateError":
                    a = new (u(o))([]);
                    break;
                case "EvalError":
                case "RangeError":
                case "ReferenceError":
                case "SuppressedError":
                case "SyntaxError":
                case "TypeError":
                case "URIError":
                    a = new (u(o));
                    break;
                case "CompileError":
                case "LinkError":
                case "RuntimeError":
                    a = new (u("WebAssembly", o));
                    break;
                default:
                    a = new k
                }
                break;
            case "DOMException":
                a = new U(t.message,t.name);
                break;
            case "ArrayBuffer":
            case "SharedArrayBuffer":
                a = sr(t, e, v);
                break;
            case "DataView":
            case "Int8Array":
            case "Uint8Array":
            case "Uint8ClampedArray":
            case "Int16Array":
            case "Uint16Array":
            case "Int32Array":
            case "Uint32Array":
            case "Float16Array":
            case "Float32Array":
            case "Float64Array":
            case "BigInt64Array":
            case "BigUint64Array":
                s = "DataView" === v ? t.byteLength : t.length,
                a = function(r, t, e, n, o) {
                    var a = c[t];
                    return h(a) || ur(t),
                    new a(sr(r.buffer, o),e,n)
                }(t, v, t.byteOffset, s, e);
                break;
            case "DOMQuad":
                try {
                    a = new DOMQuad(pr(t.p1, e),pr(t.p2, e),pr(t.p3, e),pr(t.p4, e))
                } catch (r) {
                    a = fr(t, v)
                }
                break;
            case "File":
                if (ir)
                    try {
                        a = ir(t),
                        m(a) !== v && (a = r)
                    } catch (r) {}
                if (!a)
                    try {
                        a = new File([t],t.name,t)
                    } catch (r) {}
                a || ur(v);
                break;
            case "FileList":
                if (i = function() {
                    var r;
                    try {
                        r = new c.DataTransfer
                    } catch (t) {
                        try {
                            r = new c.ClipboardEvent("").clipboardData
                        } catch (r) {}
                    }
                    return r && r.items && r.files ? r : null
                }()) {
                    for (f = 0,
                    s = A(t); f < s; f++)
                        i.items.add(pr(t[f], e));
                    a = i.files
                } else
                    a = fr(t, v);
                break;
            case "ImageData":
                try {
                    a = new ImageData(pr(t.data, e),t.width,t.height,{
                        colorSpace: t.colorSpace
                    })
                } catch (r) {
                    a = fr(t, v)
                }
                break;
            default:
                if (ir)
                    a = ir(t);
                else
                    switch (v) {
                    case "BigInt":
                        a = M(t.valueOf());
                        break;
                    case "Boolean":
                        a = M(X(t));
                        break;
                    case "Number":
                        a = M(q(t));
                        break;
                    case "String":
                        a = M(K(t));
                        break;
                    case "Date":
                        a = new C(Z(t));
                        break;
                    case "Blob":
                        try {
                            a = t.slice(0, t.size, t.type)
                        } catch (r) {
                            ur(v)
                        }
                        break;
                    case "DOMPoint":
                    case "DOMPointReadOnly":
                        n = c[v];
                        try {
                            a = n.fromPoint ? n.fromPoint(t) : new n(t.x,t.y,t.z,t.w)
                        } catch (r) {
                            ur(v)
                        }
                        break;
                    case "DOMRect":
                    case "DOMRectReadOnly":
                        n = c[v];
                        try {
                            a = n.fromRect ? n.fromRect(t) : new n(t.x,t.y,t.width,t.height)
                        } catch (r) {
                            ur(v)
                        }
                        break;
                    case "DOMMatrix":
                    case "DOMMatrixReadOnly":
                        n = c[v];
                        try {
                            a = n.fromMatrix ? n.fromMatrix(t) : new n(t)
                        } catch (r) {
                            ur(v)
                        }
                        break;
                    case "AudioData":
                    case "VideoFrame":
                        l(t.clone) || ur(v);
                        try {
                            a = t.clone()
                        } catch (r) {
                            cr(v)
                        }
                        break;
                    case "CropTarget":
                    case "CryptoKey":
                    case "FileSystemDirectoryHandle":
                    case "FileSystemFileHandle":
                    case "FileSystemHandle":
                    case "GPUCompilationInfo":
                    case "GPUCompilationMessage":
                    case "ImageBitmap":
                    case "RTCCertificate":
                    case "WebAssembly.Module":
                        ur(v);
                    default:
                        cr(v)
                    }
            }
            switch (V(e, t, a),
            v) {
            case "Array":
            case "Object":
                for (p = H(t),
                f = 0,
                s = A(p); f < s; f++)
                    y = p[f],
                    E(a, y, pr(t[y], e));
                break;
            case "Map":
                t.forEach((function(r, t) {
                    V(a, pr(t, e), pr(r, e))
                }
                ));
                break;
            case "Set":
                t.forEach((function(r) {
                    G(a, pr(r, e))
                }
                ));
                break;
            case "Error":
                x(a, "message", pr(t.message, e)),
                w(t, "cause") && x(a, "cause", pr(t.cause, e)),
                "AggregateError" === o ? a.errors = pr(t.errors, e) : "SuppressedError" === o && (a.error = pr(t.error, e),
                a.suppressed = pr(t.suppressed, e));
            case "DOMException":
                D && x(a, "stack", pr(t.stack, e))
            }
            return a
        };
        i({
            global: !0,
            enumerable: !0,
            sham: !j,
            forced: or
        }, {
            structuredClone: function(t) {
                var e, n, o = O(arguments.length, 1) > 1 && !v(arguments[1]) ? b(arguments[1]) : r, a = o ? o.transfer : r;
                a !== r && (n = function(t, e) {
                    if (!h(t))
                        throw new B("Transfer option cannot be converted to a sequence");
                    var n = [];
                    d(t, (function(r) {
                        Q(n, b(r))
                    }
                    ));
                    for (var o, a, i, u, f, s = 0, p = A(n), v = new z; s < p; ) {
                        if (o = n[s++],
                        "ArrayBuffer" === (a = m(o)) ? Y(v, o) : F(e, o))
                            throw new U("Duplicate transferable",J);
                        if ("ArrayBuffer" !== a) {
                            if (j)
                                u = nr(o, {
                                    transfer: [o]
                                });
                            else
                                switch (a) {
                                case "ImageBitmap":
                                    i = c.OffscreenCanvas,
                                    y(i) || ur(a, rr);
                                    try {
                                        (f = new i(o.width,o.height)).getContext("bitmaprenderer").transferFromImageBitmap(o),
                                        u = f.transferToImageBitmap()
                                    } catch (r) {}
                                    break;
                                case "AudioData":
                                case "VideoFrame":
                                    l(o.clone) && l(o.close) || ur(a, rr);
                                    try {
                                        u = o.clone(),
                                        o.close()
                                    } catch (r) {}
                                    break;
                                case "MediaSourceHandle":
                                case "MessagePort":
                                case "MIDIAccess":
                                case "OffscreenCanvas":
                                case "ReadableStream":
                                case "RTCDataChannel":
                                case "TransformStream":
                                case "WebTransportReceiveStream":
                                case "WebTransportSendStream":
                                case "WritableStream":
                                    ur(a, rr)
                                }
                            if (u === r)
                                throw new U("This object cannot be transferred: " + a,J);
                            V(e, o, u)
                        } else
                            G(v, o)
                    }
                    return v
                }(a, e = new N));
                var i = pr(t, e);
                return n && function(r) {
                    I(r, (function(r) {
                        j ? ir(r, {
                            transfer: [r]
                        }) : l(r.transfer) ? r.transfer() : _ ? _(r) : ur("ArrayBuffer", rr)
                    }
                    ))
                }(n),
                i
            }
        })
    }
    , function(r, t, e) {
        var n = e(13)
          , o = e(6)
          , a = e(20)
          , i = e(103)
          , c = e(22)
          , u = e(49)
          , f = function() {}
          , s = c("Reflect", "construct")
          , p = /^\s*(?:class|function)\b/
          , l = n(p.exec)
          , y = !p.test(f)
          , v = function(r) {
            if (!a(r))
                return !1;
            try {
                return s(f, [], r),
                !0
            } catch (r) {
                return !1
            }
        }
          , h = function(r) {
            if (!a(r))
                return !1;
            switch (i(r)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return !1
            }
            try {
                return y || !!l(p, u(r))
            } catch (r) {
                return !0
            }
        };
        h.sham = !0,
        r.exports = !s || o((function() {
            var r;
            return v(v.call) || !v(Object) || !v((function() {
                r = !0
            }
            )) || r
        }
        )) ? h : v
    }
    , function(r, t, e) {
        var n = e(5)
          , o = e(43)
          , a = e(10);
        r.exports = function(r, t, e) {
            n ? o.f(r, t, a(0, e)) : r[t] = e
        }
    }
    , function(r, t, e) {
        var n = TypeError;
        r.exports = function(r, t) {
            if (r < t)
                throw new n("Not enough arguments");
            return r
        }
    }
    , function(t, e, n) {
        var o = n(7)
          , a = n(37)
          , i = n(23)
          , c = n(115)
          , u = RegExp.prototype;
        t.exports = function(t) {
            var e = t.flags;
            return e !== r || "flags"in u || a(t, "flags") || !i(u, t) ? e : o(c, t)
        }
    }
    , function(r, t, e) {
        var n = e(13)
          , o = Set.prototype;
        r.exports = {
            Set,
            add: n(o.add),
            has: n(o.has),
            remove: n(o.delete),
            proto: o
        }
    }
    , function(r, t, e) {
        var n = e(13)
          , o = e(144)
          , a = e(142)
          , i = a.Set
          , c = a.proto
          , u = n(c.forEach)
          , f = n(c.keys)
          , s = f(new i).next;
        r.exports = function(r, t, e) {
            return e ? o({
                iterator: f(r),
                next: s
            }, t) : u(r, t)
        }
    }
    , function(t, e, n) {
        var o = n(7);
        t.exports = function(t, e, n) {
            for (var a, i, c = n ? t : t.iterator, u = t.next; !(a = o(u, c)).done; )
                if ((i = e(a.value)) !== r)
                    return i
        }
    }
    , function(r, t, e) {
        var n = e(6)
          , o = e(10);
        r.exports = !n((function() {
            var r = new Error("a");
            return !("stack"in r) || (Object.defineProperty(r, "stack", o(1, 7)),
            7 !== r.stack)
        }
        ))
    }
    , function(t, e, n) {
        var o = n(2)
          , a = n(22)
          , i = n(6)
          , c = n(140)
          , u = n(117)
          , f = n(147)
          , s = a("URL")
          , p = f && i((function() {
            s.canParse()
        }
        ))
          , l = i((function() {
            return 1 !== s.canParse.length
        }
        ));
        o({
            target: "URL",
            stat: !0,
            forced: !p || l
        }, {
            canParse: function(t) {
                var e = c(arguments.length, 1)
                  , n = u(t)
                  , o = e < 2 || arguments[1] === r ? r : u(arguments[1]);
                try {
                    return !!new s(n,o)
                } catch (r) {
                    return !1
                }
            }
        })
    }
    , function(t, e, n) {
        var o = n(6)
          , a = n(32)
          , i = n(5)
          , c = n(35)
          , u = a("iterator");
        t.exports = !o((function() {
            var t = new URL("b?a=1&b=2&c=3","https://a")
              , e = t.searchParams
              , n = new URLSearchParams("a=1&a=2&b=3")
              , o = "";
            return t.pathname = "c%20d",
            e.forEach((function(r, t) {
                e.delete("b"),
                o += t + r
            }
            )),
            n.delete("a", 2),
            n.delete("b", r),
            c && (!t.toJSON || !n.has("a", 1) || n.has("a", 2) || !n.has("a", r) || n.has("b")) || !e.size && (c || !i) || !e.sort || "https://a/c%20d?a=1&c=3" !== t.href || "3" !== e.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e[u] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("https://тест").host || "#%D0%B1" !== new URL("https://a#б").hash || "a1c3" !== o || "x" !== new URL("https://x",r).host
        }
        ))
    }
    , function(t, e, n) {
        var o = n(2)
          , a = n(22)
          , i = n(140)
          , c = n(117)
          , u = n(147)
          , f = a("URL");
        o({
            target: "URL",
            stat: !0,
            forced: !u
        }, {
            parse: function(t) {
                var e = i(arguments.length, 1)
                  , n = c(t)
                  , o = e < 2 || arguments[1] === r ? r : c(arguments[1]);
                try {
                    return new f(n,o)
                } catch (r) {
                    return null
                }
            }
        })
    }
    , function(t, e, n) {
        var o = n(46)
          , a = n(13)
          , i = n(117)
          , c = n(140)
          , u = URLSearchParams
          , f = u.prototype
          , s = a(f.append)
          , p = a(f.delete)
          , l = a(f.forEach)
          , y = a([].push)
          , v = new u("a=1&a=2&b=3");
        v.delete("a", 1),
        v.delete("b", r),
        v + "" != "a=2" && o(f, "delete", (function(t) {
            var e = arguments.length
              , n = e < 2 ? r : arguments[1];
            if (e && n === r)
                return p(this, t);
            var o = [];
            l(this, (function(r, t) {
                y(o, {
                    key: t,
                    value: r
                })
            }
            )),
            c(e, 1);
            for (var a, u = i(t), f = i(n), v = 0, h = 0, g = !1, d = o.length; v < d; )
                a = o[v++],
                g || a.key === u ? (g = !0,
                p(this, a.key)) : h++;
            for (; h < d; )
                (a = o[h++]).key === u && a.value === f || s(this, a.key, a.value)
        }
        ), {
            enumerable: !0,
            unsafe: !0
        })
    }
    , function(t, e, n) {
        var o = n(46)
          , a = n(13)
          , i = n(117)
          , c = n(140)
          , u = URLSearchParams
          , f = u.prototype
          , s = a(f.getAll)
          , p = a(f.has)
          , l = new u("a=1");
        !l.has("a", 2) && l.has("a", r) || o(f, "has", (function(t) {
            var e = arguments.length
              , n = e < 2 ? r : arguments[1];
            if (e && n === r)
                return p(this, t);
            var o = s(this, t);
            c(e, 1);
            for (var a = i(n), u = 0; u < o.length; )
                if (o[u++] === a)
                    return !0;
            return !1
        }
        ), {
            enumerable: !0,
            unsafe: !0
        })
    }
    , function(r, t, e) {
        var n = e(5)
          , o = e(13)
          , a = e(81)
          , i = URLSearchParams.prototype
          , c = o(i.forEach);
        n && !("size"in i) && a(i, "size", {
            get: function() {
                var r = 0;
                return c(this, (function() {
                    r++
                }
                )),
                r
            },
            configurable: !0,
            enumerable: !0
        })
    }
    ],
    e = {},
    (n = function(r) {
        if (e[r])
            return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n),
        o.l = !0,
        o.exports
    }
    ).m = t,
    n.c = e,
    n.d = function(r, t, e) {
        n.o(r, t) || Object.defineProperty(r, t, {
            enumerable: !0,
            get: e
        })
    }
    ,
    n.r = function(r) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(r, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(r, t) {
        if (1 & t && (r = n(r)),
        8 & t)
            return r;
        if (4 & t && "object" == typeof r && r && r.__esModule)
            return r;
        var e = Object.create(null);
        if (n.r(e),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
        }),
        2 & t && "string" != typeof r)
            for (var o in r)
                n.d(e, o, function(t) {
                    return r[t]
                }
                .bind(null, o));
        return e
    }
    ,
    n.n = function(r) {
        var t = r && r.__esModule ? function() {
            return r.default
        }
        : function() {
            return r
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(r, t) {
        return Object.prototype.hasOwnProperty.call(r, t)
    }
    ,
    n.p = "",
    n(n.s = 0)
}();
var wpcf7_recaptcha = {
    "sitekey": "6LfrAx4qAAAAAGmFhVwNMK7_QA75dBrLM8fe-IU_",
    "actions": {
        "homepage": "homepage",
        "contactform": "contactform"
    }
};
document.addEventListener("DOMContentLoaded", (e => {
    var t;
    wpcf7_recaptcha = {
        ...null !== (t = wpcf7_recaptcha) && void 0 !== t ? t : {}
    };
    const c = wpcf7_recaptcha.sitekey
      , {homepage: n, contactform: a} = wpcf7_recaptcha.actions
      , o = e => {
        const {action: t, func: n, params: a} = e;
        grecaptcha.execute(c, {
            action: t
        }).then((e => {
            const c = new CustomEvent("wpcf7grecaptchaexecuted",{
                detail: {
                    action: t,
                    token: e
                }
            });
            document.dispatchEvent(c)
        }
        )).then(( () => {
            "function" == typeof n && n(...a)
        }
        )).catch((e => console.error(e)))
    }
    ;
    if (grecaptcha.ready(( () => {
        o({
            action: n
        })
    }
    )),
    document.addEventListener("change", (e => {
        o({
            action: a
        })
    }
    )),
    "undefined" != typeof wpcf7 && "function" == typeof wpcf7.submit) {
        const e = wpcf7.submit;
        wpcf7.submit = (t, c={}) => {
            o({
                action: a,
                func: e,
                params: [t, c]
            })
        }
    }
    document.addEventListener("wpcf7grecaptchaexecuted", (e => {
        const t = document.querySelectorAll('form.wpcf7-form input[name="_wpcf7_recaptcha_response"]');
        for (let c = 0; c < t.length; c++)
            t[c].setAttribute("value", e.detail.token)
    }
    ))
}
));
;document.addEventListener('DOMContentLoaded', function() {
    const triggerBlock = document.querySelector('.medical-education-better');
    const header = document.getElementById('masthead');
    const scrollClass = 'scrolled-hover';
    function checkScroll() {
        if (triggerBlock) {
            const triggerBlockTop = triggerBlock.offsetHeight;
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            if (scrollPosition > triggerBlockTop) {
                header.classList.add(scrollClass)
            } else {
                header.classList.remove(scrollClass)
            }
        }
    }
    checkScroll();
    window.addEventListener('scroll', checkScroll)
});
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.discover-the-medical-block');
    const scrollableList = container.querySelector('.scrollable-list');
    const closeButton = container.querySelector('.close-btn');
    const openButton = container.querySelector('.open-btn');
    const sketchfabIframeMask = container.querySelector('.sketchfab-iframe-mask');
    const sketchfabIframeMaskOpenButton = container.querySelector('.sketchfab-iframe-mask-open-button');
    const $sketchfabIframeMaskTryFullFuncButton = container.querySelector('.sketchfab-iframe-mask-try-full-func-button');
    const tryFullFuncButton = container.querySelector('a.arrows-button.outer');
    const toggleClasses = (element, addClasses, removeClasses) => {
        if (element) {
            addClasses.forEach(cls => element.classList.add(cls));
            removeClasses.forEach(cls => element.classList.remove(cls))
        }
    }
    ;
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            toggleClasses(scrollableList, [], ['active']);
            toggleClasses(openButton, ['active'], []);
            toggleClasses(sketchfabIframeMask, [], ['active']);
            toggleClasses(sketchfabIframeMaskOpenButton, ['active'], []);
            toggleClasses($sketchfabIframeMaskTryFullFuncButton, ['active'], [])
        }
        )
    }
    if (openButton) {
        openButton.addEventListener('click', () => {
            toggleClasses(scrollableList, ['active'], []);
            toggleClasses(closeButton, [], ['active']);
            toggleClasses(sketchfabIframeMask, ['active'], []);
            toggleClasses(openButton, [], ['active']);
            toggleClasses(sketchfabIframeMaskOpenButton, [], ['active']);
            toggleClasses($sketchfabIframeMaskTryFullFuncButton, [], ['active'])
        }
        )
    }
    function resizeMask() {
        if ($sketchfabIframeMaskTryFullFuncButton && tryFullFuncButton) {
            const buttonWidth = tryFullFuncButton.offsetWidth;
            const buttonHeight = tryFullFuncButton.offsetHeight;
            $sketchfabIframeMaskTryFullFuncButton.style.width = buttonWidth + 'px';
            $sketchfabIframeMaskTryFullFuncButton.style.height = buttonHeight + 'px'
        }
    }
    resizeMask();
    window.addEventListener('resize', resizeMask)
}
);
document.addEventListener('DOMContentLoaded', () => {
    const supportedLocales = ['en', 'de', 'ru'];
    const currentLocale = window.location.pathname.split('/')[1];
    const targetLocale = supportedLocales.includes(currentLocale) ? currentLocale : 'en';
    if (targetLocale === 'en')
        return;
    const catalogLinks = document.querySelectorAll('a[href*="https://catalog.voka.io/en"]');
    catalogLinks.forEach(link => {
        link.href = link.href.replace('https://catalog.voka.io/en', `https://catalog.voka.io/${targetLocale}`)
    }
    )
}
);
document.addEventListener('DOMContentLoaded', function() {
    const itemsContainer = document.querySelector('.moving-from-normal .items');
    const showMoreButton = document.querySelector('.show-all-button');
    const showMoreContainer = document.querySelector('.show-more-button-container');
    if (!itemsContainer || !showMoreButton)
        return;
    const allItems = Array.from(itemsContainer.children);
    let itemsPerPage = 10;
    let currentPage = 1;
    let maxPages = Math.ceil(allItems.length / itemsPerPage);
    function getItemsPerPage() {
        return window.innerWidth < 577 ? 9 : 10
    }
    function hideItems() {
        allItems.forEach( (item, index) => {
            if (index >= currentPage * itemsPerPage) {
                item.style.display = 'none'
            } else {
                item.style.display = ''
            }
        }
        )
    }
    function showNextPage() {
        if (currentPage < maxPages) {
            currentPage++;
            hideItems();
            const remainingItems = allItems.length - (currentPage * itemsPerPage);
            if (remainingItems > 0) {
                showMoreButton.textContent = `Show ${Math.min(remainingItems, itemsPerPage)} more`
            }
            if (currentPage >= maxPages) {
                showMoreContainer.style.display = 'none'
            }
        }
    }
    function initPagination() {
        if (window.innerWidth < 1440) {
            itemsPerPage = getItemsPerPage();
            maxPages = Math.ceil(allItems.length / itemsPerPage);
            showMoreContainer.style.display = 'flex';
            hideItems();
            const initialHiddenItems = Math.max(0, allItems.length - itemsPerPage);
            if (initialHiddenItems > 0) {
                showMoreButton.textContent = `Show ${Math.min(initialHiddenItems, itemsPerPage)} more`
            } else {
                showMoreContainer.style.display = 'none'
            }
        } else {
            allItems.forEach(item => item.style.display = '');
            showMoreContainer.style.display = 'none'
        }
    }
    showMoreButton.addEventListener('click', showNextPage);
    window.addEventListener('resize', function() {
        currentPage = 1;
        initPagination()
    });
    initPagination()
});
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.all-the-essentials .sections-tab-link');
    const contents = document.querySelectorAll('.all-the-essentials ~ section');
    const tabCount = tabs.length;
    contents.forEach( (c, i) => i < tabCount ? c.style.display = 'none' : null);
    contents[0] && (contents[0].style.display = 'block');
    tabs.forEach( (tab, i) => tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        contents.forEach( (c, idx) => idx < tabCount ? c.style.display = 'none' : null);
        contents[i].style.display = 'block'
    }
    ))
}
);
function updateCardBackgrounds() {
    if (window.innerWidth <= 576) {
        document.querySelectorAll('.your-field .card').forEach(function(card) {
            const mobileBg = card.getAttribute('data-bg-mobile');
            if (mobileBg) {
                card.style.backgroundImage = `url('${mobileBg}')`
            }
        })
    } else {
        document.querySelectorAll('.your-field .card').forEach(function(card) {
            const desktopBg = card.getAttribute('data-bg-desktop');
            if (desktopBg) {
                card.style.backgroundImage = `url('${desktopBg}')`
            }
        })
    }
}
document.addEventListener("DOMContentLoaded", updateCardBackgrounds);
window.addEventListener("resize", function() {
    updateCardBackgrounds()
});
document.addEventListener('DOMContentLoaded', function() {
    const textareaCounterHtml = `<div class="textarea-footer">
                    <p class="textarea-tip">At least 100 characters required</p>
                    <p class="textarea-counter">
                        <span class="textarea-highlight orange"><span class="count">0</span> character(s)</span> (minimum 100 characters)
                    </p>
                </div>`;
    const formsWithAnimatedLabels = document.querySelectorAll("section.contact-form-section form.wpcf7-form");
    const radioButtonsBlocks = document.querySelectorAll("section.contact-form-section form.wpcf7-form .top-fields>p:has(.chip-radio)");
    const focusedClass = "focused";
    for (const form of formsWithAnimatedLabels) {
        const textareaContainer = form.querySelector('.middle-fields>p:has(textarea)');
        if (textareaContainer) {
            textareaContainer.insertAdjacentHTML('beforeend', textareaCounterHtml)
        }
        const submitControl = form.querySelector('input[type="submit"], button[type="submit"]');
        if (submitControl) {
            form.addEventListener('submit', function() {
                submitControl.disabled = !0
            });
            form.addEventListener('wpcf7submit', function(event) {
                submitControl.disabled = !1
            })
        }
        const formControls = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
        for (const formControl of formControls) {
            formControl.addEventListener("focus", function() {
                this.parentElement.previousElementSibling.classList.add(focusedClass)
            });
            formControl.addEventListener("blur", function() {
                if (!this.value) {
                    this.parentElement.previousElementSibling.classList.remove(focusedClass)
                }
            })
        }
        const selectControl = form.querySelector('select');
        const interestType = form.querySelector('input[name="interest-type"]');
        const clientGoal = form.querySelector('input[name="client-goal"]');
        const subject = form.querySelector('input[name="subject-sales"]');
        if (selectControl.value) {
            selectControl.parentElement.previousElementSibling.classList.add(focusedClass)
        }
        const textarea = form.querySelector('textarea');
        const number = form.closest('.contact-form-section')?.querySelector('.textarea-counter .count');
        const counter = form.closest('.contact-form-section')?.querySelector('.textarea-highlight');
        autoResizeTextarea(textarea, counter, number);
        textarea.addEventListener('input', function() {
            autoResizeTextarea(this, counter, number)
        });
        textarea.addEventListener('paste', function() {
            autoResizeTextarea(this, counter, number)
        });
        if (radioButtonsBlocks.length) {
            for (const elem of radioButtonsBlocks) {
                toggleAnimationTypeField(selectControl, elem)
            }
        }
        selectControl.addEventListener("change", function() {
            if (this.value) {
                this.parentElement.previousElementSibling.classList.add(focusedClass)
            } else {
                this.parentElement.previousElementSibling.classList.remove(focusedClass)
            }
            if (radioButtonsBlocks.length) {
                for (const elem of radioButtonsBlocks) {
                    toggleAnimationTypeField(this, elem)
                }
            }
            const value = this.value;
            interestType.value = '';
            clientGoal.value = '';
            subject.value = '';
            if (!selectControl.classList.contains('started')) {
                selectControl.classList.add('started')
            }
            const mapping = fieldMapping[value] || {
                interestType: '',
                clientGoal: '',
                subject: ''
            };
            interestType.value = mapping.interestType;
            clientGoal.value = mapping.clientGoal;
            subject.value = mapping.subject
        });
        selectControl.addEventListener("blur", function() {
            if (!this.value) {
                this.parentElement.previousElementSibling.classList.remove(focusedClass)
            }
        });
        form.parentElement.addEventListener("wpcf7submit", function() {
            const labels = document.querySelectorAll("section.contact-form-section form.wpcf7-form label.focused");
            for (const label of labels) {
                const elem = document.getElementById(label.getAttribute('for'));
                if (!elem?.value) {
                    label.classList.remove(focusedClass)
                }
            }
        });
        form.parentElement.addEventListener("wpcf7invalid", function() {
            const labels = document.querySelectorAll("section.contact-form-section form.wpcf7-form label.focused");
            for (const label of labels) {
                const elem = document.getElementById(label.getAttribute('for'));
                if (elem?.tagName === 'SELECT' && elem.value) {
                    label.classList.add(focusedClass)
                } else if (!elem?.value) {
                    label.classList.remove(focusedClass)
                }
            }
        });
        document.getElementById('close-thankyou-popup-btn').addEventListener('click', function() {
            const labels = document.querySelectorAll("section.contact-form-section form.wpcf7-form label.focused");
            for (const label of labels) {
                const elem = document.getElementById(label.getAttribute('for'));
                if (!elem?.value) {
                    label.classList.remove(focusedClass)
                }
            }
        });
        const fileInput = form.querySelector('input[type="file"]');
        if (fileInput) {
            const dragDropArea = form.querySelector('.file-wrapper');
            const dragDropCloseBtn = document.querySelector('section.contact-form-section .form-container .remove-file');
            dragDropArea.addEventListener('click', () => {
                if (!fileInput.files.length) {
                    fileInput.click()
                }
            }
            )
            dragDropCloseBtn.addEventListener('click', resetFileArea);
            const dragDropLabel = dragDropArea.querySelector('p.label');
            const dragDropMobileLabel = dragDropArea.querySelector('p.mobile-label');
            const dragDropSize = dragDropArea.querySelector('p.max-size');
            const errorElement = dragDropArea.querySelector('.file-error');
            function showError(message) {
                errorElement.textContent = message;
                errorElement.style.display = 'block';
                setTimeout( () => {
                    errorElement.style.display = 'none';
                    errorElement.textContent = ''
                }
                , 5000)
            }
            fileInput.addEventListener('change', e => {
                const file = e.target.files[0];
                if (file) {
                    const error = validateFile(file);
                    if (error) {
                        showError(error);
                        resetFileArea()
                    } else {
                        handleFileChange(file)
                    }
                } else {
                    resetFileArea()
                }
            }
            );
            function handleFileChange(file) {
                dragDropArea.classList.add('drag-drop-success');
                dragDropMobileLabel.innerHTML = file.name;
                dragDropLabel.innerHTML = file.name;
                dragDropSize.innerHTML = formatFileSize(file.size)
            }
            function resetFileArea() {
                fileInput.value = '';
                dragDropArea.classList.remove('drag-drop-success');
                dragDropMobileLabel.innerHTML = 'Upload file';
                dragDropLabel.innerHTML = 'Drop a file here or <span class="browse">browse</span>';
                dragDropSize.innerHTML = 'PNG, JPG, PDF, GIF, WEBP, SVG (max. 15MB)'
            }
            form.addEventListener('wpcf7mailsent', function() {
                resetFileArea();
                textarea.style.height = '60px';
                const counter = form.closest('section.contact-form-section').querySelector('.textarea-counter>span');
                counter.classList.remove('green');
                counter.classList.add('orange');
                counter.querySelector('.count').textContent = 0;
                if (selectControl && selectControl.options.length > 0) {
                    selectControl.value = "";
                    interestType.value = '';
                    clientGoal.value = '';
                    subject.value = '';
                    const event = new Event("change",{
                        bubbles: !0
                    });
                    selectControl.dispatchEvent(event);
                    selectControl.classList.remove('started')
                }
            });
            if (window.innerWidth >= 1280) {
                ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                    dragDropArea.addEventListener(eventName, preventDefaults, !1)
                }
                );
                function preventDefaults(e) {
                    e.preventDefault();
                    e.stopPropagation()
                }
                ['dragenter', 'dragover'].forEach(eventName => {
                    dragDropArea.addEventListener(eventName, () => {
                        dragDropArea.classList.add('drag-active')
                    }
                    )
                }
                );
                ['dragleave', 'drop'].forEach(eventName => {
                    dragDropArea.addEventListener(eventName, () => {
                        dragDropArea.classList.remove('drag-active')
                    }
                    )
                }
                );
                dragDropArea.addEventListener('drop', e => {
                    const file = e.dataTransfer.files[0];
                    if (file) {
                        const error = validateFile(file);
                        if (error) {
                            showError(error);
                            resetFileArea()
                        } else {
                            fileInput.files = e.dataTransfer.files;
                            handleFileChange(file)
                        }
                    }
                }
                )
            }
        }
    }
    const radioButtons = document.querySelectorAll("section.contact-form-section form.wpcf7-form .chip-radio");
    if (radioButtons.length) {
        for (const elem of radioButtons) {
            const labels = elem.querySelectorAll('.wpcf7-list-item-label');
            labels.forEach(label => {
                label.addEventListener('click', function() {
                    const wrapper = label.closest('.wpcf7-form');
                    const radioButtonsError = wrapper.querySelector("p:has(.chip-radio) .wpcf7-not-valid-tip");
                    if (radioButtonsError) {
                        radioButtonsError.style.display = 'none'
                    }
                    labels.forEach(l => {
                        l.classList.remove('chip-selected')
                        l.previousElementSibling.checked = !1
                    }
                    );
                    this.classList.add('chip-selected');
                    this.previousElementSibling.checked = !0
                })
            }
            )
        }
    }
    const contactItems = document.querySelectorAll('.mobile-contact-us-wrapper .contact-mobile-item');
    const toast = document.getElementById('toast-footer');
    if (!toast || !contactItems)
        return;
    contactItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            if (window.innerWidth < 1280 && window.innerWidth >= 1080) {
                event.preventDefault();
                const textToCopy = this.querySelector('span')?.innerText;
                if (textToCopy) {
                    navigator.clipboard.writeText(textToCopy).then( () => {
                        showToast(toast)
                    }
                    )
                }
            }
        })
    })
});
