// https://d3js.org Version 5.5.0. Copyright 2018 Mike Bostock.
(function (t, n) {
    "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n(t.d3 = t.d3 || {})
})(this, function (t) {
    "use strict";

    function n(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }

    function e(t) {
        return 1 === t.length && (t = function (t) {
            return function (e, r) {
                return n(t(e), r)
            }
        }(t)), {
            left: function (n, e, r, i) {
                for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                    var o = r + i >>> 1;
                    t(n[o], e) < 0 ? r = o + 1 : i = o
                }
                return r
            }, right: function (n, e, r, i) {
                for (null == r && (r = 0), null == i && (i = n.length); r < i;) {
                    var o = r + i >>> 1;
                    t(n[o], e) > 0 ? i = o : r = o + 1
                }
                return r
            }
        }
    }

    function r(t, n) {
        return [t, n]
    }

    function i(t) {
        return null === t ? NaN : +t
    }

    function o(t, n) {
        var e, r, o = t.length, a = 0, u = -1, f = 0, c = 0;
        if (null == n) for (; ++u < o;) isNaN(e = i(t[u])) || (c += (r = e - f) * (e - (f += r / ++a))); else for (; ++u < o;) isNaN(e = i(n(t[u], u, t))) || (c += (r = e - f) * (e - (f += r / ++a)));
        if (a > 1) return c / (a - 1)
    }

    function a(t, n) {
        var e = o(t, n);
        return e ? Math.sqrt(e) : e
    }

    function u(t, n) {
        var e, r, i, o = t.length, a = -1;
        if (null == n) {
            for (; ++a < o;) if (null != (e = t[a]) && e >= e) for (r = i = e; ++a < o;) null != (e = t[a]) && (r > e && (r = e), i < e && (i = e))
        } else for (; ++a < o;) if (null != (e = n(t[a], a, t)) && e >= e) for (r = i = e; ++a < o;) null != (e = n(t[a], a, t)) && (r > e && (r = e), i < e && (i = e));
        return [r, i]
    }

    function f(t) {
        return function () {
            return t
        }
    }

    function c(t) {
        return t
    }

    function s(t, n, e) {
        t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
        for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) o[r] = t + r * e;
        return o
    }

    function l(t, n, e) {
        var r, i, o, a, u = -1;
        if (n = +n, t = +t, e = +e, t === n && e > 0) return [t];
        if ((r = n < t) && (i = t, t = n, n = i), 0 === (a = h(t, n, e)) || !isFinite(a)) return [];
        if (a > 0) for (t = Math.ceil(t / a), n = Math.floor(n / a), o = new Array(i = Math.ceil(n - t + 1)); ++u < i;) o[u] = (t + u) * a; else for (t = Math.floor(t * a), n = Math.ceil(n * a), o = new Array(i = Math.ceil(t - n + 1)); ++u < i;) o[u] = (t - u) / a;
        return r && o.reverse(), o
    }

    function h(t, n, e) {
        var r = (n - t) / Math.max(0, e), i = Math.floor(Math.log(r) / Math.LN10), o = r / Math.pow(10, i);
        return i >= 0 ? (o >= is ? 10 : o >= os ? 5 : o >= as ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (o >= is ? 10 : o >= os ? 5 : o >= as ? 2 : 1)
    }

    function d(t, n, e) {
        var r = Math.abs(n - t) / Math.max(0, e), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), o = r / i;
        return o >= is ? i *= 10 : o >= os ? i *= 5 : o >= as && (i *= 2), n < t ? -i : i
    }

    function p(t) {
        return Math.ceil(Math.log(t.length) / Math.LN2) + 1
    }

    function v(t, n, e) {
        if (null == e && (e = i), r = t.length) {
            if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
            if (n >= 1) return +e(t[r - 1], r - 1, t);
            var r, o = (r - 1) * n, a = Math.floor(o), u = +e(t[a], a, t);
            return u + (+e(t[a + 1], a + 1, t) - u) * (o - a)
        }
    }

    function g(t, n) {
        var e, r, i = t.length, o = -1;
        if (null == n) {
            for (; ++o < i;) if (null != (e = t[o]) && e >= e) for (r = e; ++o < i;) null != (e = t[o]) && e > r && (r = e)
        } else for (; ++o < i;) if (null != (e = n(t[o], o, t)) && e >= e) for (r = e; ++o < i;) null != (e = n(t[o], o, t)) && e > r && (r = e);
        return r
    }

    function y(t) {
        for (var n, e, r, i = t.length, o = -1, a = 0; ++o < i;) a += t[o].length;
        for (e = new Array(a); --i >= 0;) for (n = (r = t[i]).length; --n >= 0;) e[--a] = r[n];
        return e
    }

    function _(t, n) {
        var e, r, i = t.length, o = -1;
        if (null == n) {
            for (; ++o < i;) if (null != (e = t[o]) && e >= e) for (r = e; ++o < i;) null != (e = t[o]) && r > e && (r = e)
        } else for (; ++o < i;) if (null != (e = n(t[o], o, t)) && e >= e) for (r = e; ++o < i;) null != (e = n(t[o], o, t)) && r > e && (r = e);
        return r
    }

    function b(t) {
        if (!(i = t.length)) return [];
        for (var n = -1, e = _(t, m), r = new Array(e); ++n < e;) for (var i, o = -1, a = r[n] = new Array(i); ++o < i;) a[o] = t[o][n];
        return r
    }

    function m(t) {
        return t.length
    }

    function x(t) {
        return t
    }

    function w(t) {
        return "translate(" + (t + .5) + ",0)"
    }

    function M(t) {
        return "translate(0," + (t + .5) + ")"
    }

    function A() {
        return !this.__axis
    }

    function T(t, n) {
        function e(e) {
            var h = null == i ? n.ticks ? n.ticks.apply(n, r) : n.domain() : i,
                d = null == o ? n.tickFormat ? n.tickFormat.apply(n, r) : x : o, p = Math.max(a, 0) + f, v = n.range(),
                g = +v[0] + .5, y = +v[v.length - 1] + .5, _ = (n.bandwidth ? function (t) {
                    var n = Math.max(0, t.bandwidth() - 1) / 2;
                    return t.round() && (n = Math.round(n)), function (e) {
                        return +t(e) + n
                    }
                } : function (t) {
                    return function (n) {
                        return +t(n)
                    }
                })(n.copy()), b = e.selection ? e.selection() : e, m = b.selectAll(".domain").data([null]),
                w = b.selectAll(".tick").data(h, n).order(), M = w.exit(),
                T = w.enter().append("g").attr("class", "tick"), N = w.select("line"), S = w.select("text");
            m = m.merge(m.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), w = w.merge(T), N = N.merge(T.append("line").attr("stroke", "#000").attr(s + "2", c * a)), S = S.merge(T.append("text").attr("fill", "#000").attr(s, c * p).attr("dy", t === fs ? "0em" : t === ss ? "0.71em" : "0.32em")), e !== b && (m = m.transition(e), w = w.transition(e), N = N.transition(e), S = S.transition(e), M = M.transition(e).attr("opacity", hs).attr("transform", function (t) {
                return isFinite(t = _(t)) ? l(t) : this.getAttribute("transform")
            }), T.attr("opacity", hs).attr("transform", function (t) {
                var n = this.parentNode.__axis;
                return l(n && isFinite(n = n(t)) ? n : _(t))
            })), M.remove(), m.attr("d", t === ls || t == cs ? "M" + c * u + "," + g + "H0.5V" + y + "H" + c * u : "M" + g + "," + c * u + "V0.5H" + y + "V" + c * u), w.attr("opacity", 1).attr("transform", function (t) {
                return l(_(t))
            }), N.attr(s + "2", c * a), S.attr(s, c * p).text(d), b.filter(A).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === cs ? "start" : t === ls ? "end" : "middle"), b.each(function () {
                this.__axis = _
            })
        }

        var r = [], i = null, o = null, a = 6, u = 6, f = 3, c = t === fs || t === ls ? -1 : 1,
            s = t === ls || t === cs ? "x" : "y", l = t === fs || t === ss ? w : M;
        return e.scale = function (t) {
            return arguments.length ? (n = t, e) : n
        }, e.ticks = function () {
            return r = us.call(arguments), e
        }, e.tickArguments = function (t) {
            return arguments.length ? (r = null == t ? [] : us.call(t), e) : r.slice()
        }, e.tickValues = function (t) {
            return arguments.length ? (i = null == t ? null : us.call(t), e) : i && i.slice()
        }, e.tickFormat = function (t) {
            return arguments.length ? (o = t, e) : o
        }, e.tickSize = function (t) {
            return arguments.length ? (a = u = +t, e) : a
        }, e.tickSizeInner = function (t) {
            return arguments.length ? (a = +t, e) : a
        }, e.tickSizeOuter = function (t) {
            return arguments.length ? (u = +t, e) : u
        }, e.tickPadding = function (t) {
            return arguments.length ? (f = +t, e) : f
        }, e
    }

    function N() {
        for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
            if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
            r[t] = []
        }
        return new S(r)
    }

    function S(t) {
        this._ = t
    }

    function E(t, n, e) {
        for (var r = 0, i = t.length; r < i; ++r) if (t[r].name === n) {
            t[r] = ds, t = t.slice(0, r).concat(t.slice(r + 1));
            break
        }
        return null != e && t.push({name: n, value: e}), t
    }

    function k(t) {
        var n = t += "", e = n.indexOf(":");
        return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), vs.hasOwnProperty(n) ? {
            space: vs[n],
            local: t
        } : t
    }

    function C(t) {
        var n = k(t);
        return (n.local ? function (t) {
            return function () {
                return this.ownerDocument.createElementNS(t.space, t.local)
            }
        } : function (t) {
            return function () {
                var n = this.ownerDocument, e = this.namespaceURI;
                return e === ps && n.documentElement.namespaceURI === ps ? n.createElement(t) : n.createElementNS(e, t)
            }
        })(n)
    }

    function P() {
    }

    function z(t) {
        return null == t ? P : function () {
            return this.querySelector(t)
        }
    }

    function R() {
        return []
    }

    function L(t) {
        return null == t ? R : function () {
            return this.querySelectorAll(t)
        }
    }

    function D(t) {
        return new Array(t.length)
    }

    function U(t, n) {
        this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
    }

    function q(t, n, e, r, i, o) {
        for (var a, u = 0, f = n.length, c = o.length; u < c; ++u) (a = n[u]) ? (a.__data__ = o[u], r[u] = a) : e[u] = new U(t, o[u]);
        for (; u < f; ++u) (a = n[u]) && (i[u] = a)
    }

    function O(t, n, e, r, i, o, a) {
        var u, f, c, s = {}, l = n.length, h = o.length, d = new Array(l);
        for (u = 0; u < l; ++u) (f = n[u]) && (d[u] = c = ms + a.call(f, f.__data__, u, n), c in s ? i[u] = f : s[c] = f);
        for (u = 0; u < h; ++u) (f = s[c = ms + a.call(t, o[u], u, o)]) ? (r[u] = f, f.__data__ = o[u], s[c] = null) : e[u] = new U(t, o[u]);
        for (u = 0; u < l; ++u) (f = n[u]) && s[d[u]] === f && (i[u] = f)
    }

    function Y(t, n) {
        return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
    }

    function B(t) {
        return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
    }

    function F(t, n) {
        return t.style.getPropertyValue(n) || B(t).getComputedStyle(t, null).getPropertyValue(n)
    }

    function I(t) {
        return t.trim().split(/^|\s+/)
    }

    function j(t) {
        return t.classList || new H(t)
    }

    function H(t) {
        this._node = t, this._names = I(t.getAttribute("class") || "")
    }

    function X(t, n) {
        for (var e = j(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
    }

    function G(t, n) {
        for (var e = j(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
    }

    function V() {
        this.textContent = ""
    }

    function $() {
        this.innerHTML = ""
    }

    function W() {
        this.nextSibling && this.parentNode.appendChild(this)
    }

    function Z() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
    }

    function Q() {
        return null
    }

    function J() {
        var t = this.parentNode;
        t && t.removeChild(this)
    }

    function K() {
        return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
    }

    function tt() {
        return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
    }

    function nt(t, n, e) {
        return t = et(t, n, e), function (n) {
            var e = n.relatedTarget;
            e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
        }
    }

    function et(n, e, r) {
        return function (i) {
            var o = t.event;
            t.event = i;
            try {
                n.call(this, this.__data__, e, r)
            } finally {
                t.event = o
            }
        }
    }

    function rt(t) {
        return function () {
            var n = this.__on;
            if (n) {
                for (var e, r = 0, i = -1, o = n.length; r < o; ++r) e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
                ++i ? n.length = i : delete this.__on
            }
        }
    }

    function it(t, n, e) {
        var r = xs.hasOwnProperty(t.type) ? nt : et;
        return function (i, o, a) {
            var u, f = this.__on, c = r(n, o, a);
            if (f) for (var s = 0, l = f.length; s < l; ++s) if ((u = f[s]).type === t.type && u.name === t.name) return this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, u.listener = c, u.capture = e), void(u.value = n);
            this.addEventListener(t.type, c, e), u = {
                type: t.type,
                name: t.name,
                value: n,
                listener: c,
                capture: e
            }, f ? f.push(u) : this.__on = [u]
        }
    }

    function ot(n, e, r, i) {
        var o = t.event;
        n.sourceEvent = t.event, t.event = n;
        try {
            return e.apply(r, i)
        } finally {
            t.event = o
        }
    }

    function at(t, n, e) {
        var r = B(t), i = r.CustomEvent;
        "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
    }

    function ut(t, n) {
        this._groups = t, this._parents = n
    }

    function ft() {
        return new ut([[document.documentElement]], ws)
    }

    function ct(t) {
        return "string" == typeof t ? new ut([[document.querySelector(t)]], [document.documentElement]) : new ut([[t]], ws)
    }

    function st() {
        return new lt
    }

    function lt() {
        this._ = "@" + (++Ms).toString(36)
    }

    function ht() {
        for (var n, e = t.event; n = e.sourceEvent;) e = n;
        return e
    }

    function dt(t, n) {
        var e = t.ownerSVGElement || t;
        if (e.createSVGPoint) {
            var r = e.createSVGPoint();
            return r.x = n.clientX, r.y = n.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
        }
        var i = t.getBoundingClientRect();
        return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
    }

    function pt(t) {
        var n = ht();
        return n.changedTouches && (n = n.changedTouches[0]), dt(t, n)
    }

    function vt(t, n, e) {
        arguments.length < 3 && (e = n, n = ht().changedTouches);
        for (var r, i = 0, o = n ? n.length : 0; i < o; ++i) if ((r = n[i]).identifier === e) return dt(t, r);
        return null
    }

    function gt() {
        t.event.stopImmediatePropagation()
    }

    function yt() {
        t.event.preventDefault(), t.event.stopImmediatePropagation()
    }

    function _t(t) {
        var n = t.document.documentElement, e = ct(t).on("dragstart.drag", yt, !0);
        "onselectstart" in n ? e.on("selectstart.drag", yt, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
    }

    function bt(t, n) {
        var e = t.document.documentElement, r = ct(t).on("dragstart.drag", null);
        n && (r.on("click.drag", yt, !0), setTimeout(function () {
            r.on("click.drag", null)
        }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
    }

    function mt(t) {
        return function () {
            return t
        }
    }

    function xt(t, n, e, r, i, o, a, u, f, c) {
        this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = a, this.dx = u, this.dy = f, this._ = c
    }

    function wt() {
        return !t.event.button
    }

    function Mt() {
        return this.parentNode
    }

    function At(n) {
        return null == n ? {x: t.event.x, y: t.event.y} : n
    }

    function Tt() {
        return "ontouchstart" in this
    }

    function Nt(t, n, e) {
        t.prototype = n.prototype = e, e.constructor = t
    }

    function St(t, n) {
        var e = Object.create(t.prototype);
        for (var r in n) e[r] = n[r];
        return e
    }

    function Et() {
    }

    function kt(t) {
        var n;
        return t = (t + "").trim().toLowerCase(), (n = Ss.exec(t)) ? (n = parseInt(n[1], 16), new Lt(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = Es.exec(t)) ? Ct(parseInt(n[1], 16)) : (n = ks.exec(t)) ? new Lt(n[1], n[2], n[3], 1) : (n = Cs.exec(t)) ? new Lt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = Ps.exec(t)) ? Pt(n[1], n[2], n[3], n[4]) : (n = zs.exec(t)) ? Pt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = Rs.exec(t)) ? Ut(n[1], n[2] / 100, n[3] / 100, 1) : (n = Ls.exec(t)) ? Ut(n[1], n[2] / 100, n[3] / 100, n[4]) : Ds.hasOwnProperty(t) ? Ct(Ds[t]) : "transparent" === t ? new Lt(NaN, NaN, NaN, 0) : null
    }

    function Ct(t) {
        return new Lt(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
    }

    function Pt(t, n, e, r) {
        return r <= 0 && (t = n = e = NaN), new Lt(t, n, e, r)
    }

    function zt(t) {
        return t instanceof Et || (t = kt(t)), t ? (t = t.rgb(), new Lt(t.r, t.g, t.b, t.opacity)) : new Lt
    }

    function Rt(t, n, e, r) {
        return 1 === arguments.length ? zt(t) : new Lt(t, n, e, null == r ? 1 : r)
    }

    function Lt(t, n, e, r) {
        this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
    }

    function Dt(t) {
        return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
    }

    function Ut(t, n, e, r) {
        return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Ot(t, n, e, r)
    }

    function qt(t, n, e, r) {
        return 1 === arguments.length ? function (t) {
            if (t instanceof Ot) return new Ot(t.h, t.s, t.l, t.opacity);
            if (t instanceof Et || (t = kt(t)), !t) return new Ot;
            if (t instanceof Ot) return t;
            var n = (t = t.rgb()).r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r),
                a = NaN, u = o - i, f = (o + i) / 2;
            return u ? (a = n === o ? (e - r) / u + 6 * (e < r) : e === o ? (r - n) / u + 2 : (n - e) / u + 4, u /= f < .5 ? o + i : 2 - o - i, a *= 60) : u = f > 0 && f < 1 ? 0 : a, new Ot(a, u, f, t.opacity)
        }(t) : new Ot(t, n, e, null == r ? 1 : r)
    }

    function Ot(t, n, e, r) {
        this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
    }

    function Yt(t, n, e) {
        return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
    }

    function Bt(t) {
        if (t instanceof It) return new It(t.l, t.a, t.b, t.opacity);
        if (t instanceof Wt) {
            if (isNaN(t.h)) return new It(t.l, 0, 0, t.opacity);
            var n = t.h * Us;
            return new It(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
        }
        t instanceof Lt || (t = zt(t));
        var e, r, i = Gt(t.r), o = Gt(t.g), a = Gt(t.b), u = jt((.2225045 * i + .7168786 * o + .0606169 * a) / Ys);
        return i === o && o === a ? e = r = u : (e = jt((.4360747 * i + .3850649 * o + .1430804 * a) / Os), r = jt((.0139322 * i + .0971045 * o + .7141733 * a) / Bs)), new It(116 * u - 16, 500 * (e - u), 200 * (u - r), t.opacity)
    }

    function Ft(t, n, e, r) {
        return 1 === arguments.length ? Bt(t) : new It(t, n, e, null == r ? 1 : r)
    }

    function It(t, n, e, r) {
        this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
    }

    function jt(t) {
        return t > Hs ? Math.pow(t, 1 / 3) : t / js + Fs
    }

    function Ht(t) {
        return t > Is ? t * t * t : js * (t - Fs)
    }

    function Xt(t) {
        return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
    }

    function Gt(t) {
        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
    }

    function Vt(t) {
        if (t instanceof Wt) return new Wt(t.h, t.c, t.l, t.opacity);
        if (t instanceof It || (t = Bt(t)), 0 === t.a && 0 === t.b) return new Wt(NaN, 0, t.l, t.opacity);
        var n = Math.atan2(t.b, t.a) * qs;
        return new Wt(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
    }

    function $t(t, n, e, r) {
        return 1 === arguments.length ? Vt(t) : new Wt(t, n, e, null == r ? 1 : r)
    }

    function Wt(t, n, e, r) {
        this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
    }

    function Zt(t, n, e, r) {
        return 1 === arguments.length ? function (t) {
            if (t instanceof Qt) return new Qt(t.h, t.s, t.l, t.opacity);
            t instanceof Lt || (t = zt(t));
            var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = (Zs * r + $s * n - Ws * e) / (Zs + $s - Ws), o = r - i,
                a = (Vs * (e - i) - Xs * o) / Gs, u = Math.sqrt(a * a + o * o) / (Vs * i * (1 - i)),
                f = u ? Math.atan2(a, o) * qs - 120 : NaN;
            return new Qt(f < 0 ? f + 360 : f, u, i, t.opacity)
        }(t) : new Qt(t, n, e, null == r ? 1 : r)
    }

    function Qt(t, n, e, r) {
        this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
    }

    function Jt(t, n, e, r, i) {
        var o = t * t, a = o * t;
        return ((1 - 3 * t + 3 * o - a) * n + (4 - 6 * o + 3 * a) * e + (1 + 3 * t + 3 * o - 3 * a) * r + a * i) / 6
    }

    function Kt(t) {
        var n = t.length - 1;
        return function (e) {
            var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n), i = t[r], o = t[r + 1],
                a = r > 0 ? t[r - 1] : 2 * i - o, u = r < n - 1 ? t[r + 2] : 2 * o - i;
            return Jt((e - r / n) * n, a, i, o, u)
        }
    }

    function tn(t) {
        var n = t.length;
        return function (e) {
            var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n), i = t[(r + n - 1) % n], o = t[r % n], a = t[(r + 1) % n],
                u = t[(r + 2) % n];
            return Jt((e - r / n) * n, i, o, a, u)
        }
    }

    function nn(t) {
        return function () {
            return t
        }
    }

    function en(t, n) {
        return function (e) {
            return t + e * n
        }
    }

    function rn(t, n) {
        var e = n - t;
        return e ? en(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : nn(isNaN(t) ? n : t)
    }

    function on(t) {
        return 1 == (t = +t) ? an : function (n, e) {
            return e - n ? function (t, n, e) {
                return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
                    return Math.pow(t + r * n, e)
                }
            }(n, e, t) : nn(isNaN(n) ? e : n)
        }
    }

    function an(t, n) {
        var e = n - t;
        return e ? en(t, e) : nn(isNaN(t) ? n : t)
    }

    function un(t) {
        return function (n) {
            var e, r, i = n.length, o = new Array(i), a = new Array(i), u = new Array(i);
            for (e = 0; e < i; ++e) r = Rt(n[e]), o[e] = r.r || 0, a[e] = r.g || 0, u[e] = r.b || 0;
            return o = t(o), a = t(a), u = t(u), r.opacity = 1, function (t) {
                return r.r = o(t), r.g = a(t), r.b = u(t), r + ""
            }
        }
    }

    function fn(t, n) {
        var e, r = n ? n.length : 0, i = t ? Math.min(r, t.length) : 0, o = new Array(i), a = new Array(r);
        for (e = 0; e < i; ++e) o[e] = dn(t[e], n[e]);
        for (; e < r; ++e) a[e] = n[e];
        return function (t) {
            for (e = 0; e < i; ++e) a[e] = o[e](t);
            return a
        }
    }

    function cn(t, n) {
        var e = new Date;
        return t = +t, n -= t, function (r) {
            return e.setTime(t + n * r), e
        }
    }

    function sn(t, n) {
        return t = +t, n -= t, function (e) {
            return t + n * e
        }
    }

    function ln(t, n) {
        var e, r = {}, i = {};
        null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {});
        for (e in n) e in t ? r[e] = dn(t[e], n[e]) : i[e] = n[e];
        return function (t) {
            for (e in r) i[e] = r[e](t);
            return i
        }
    }

    function hn(t, n) {
        var e, r, i, o = al.lastIndex = ul.lastIndex = 0, a = -1, u = [], f = [];
        for (t += "", n += ""; (e = al.exec(t)) && (r = ul.exec(n));) (i = r.index) > o && (i = n.slice(o, i), u[a] ? u[a] += i : u[++a] = i), (e = e[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null, f.push({
            i: a,
            x: sn(e, r)
        })), o = ul.lastIndex;
        return o < n.length && (i = n.slice(o), u[a] ? u[a] += i : u[++a] = i), u.length < 2 ? f[0] ? function (t) {
            return function (n) {
                return t(n) + ""
            }
        }(f[0].x) : function (t) {
            return function () {
                return t
            }
        }(n) : (n = f.length, function (t) {
            for (var e, r = 0; r < n; ++r) u[(e = f[r]).i] = e.x(t);
            return u.join("")
        })
    }

    function dn(t, n) {
        var e, r = typeof n;
        return null == n || "boolean" === r ? nn(n) : ("number" === r ? sn : "string" === r ? (e = kt(n)) ? (n = e, rl) : hn : n instanceof kt ? rl : n instanceof Date ? cn : Array.isArray(n) ? fn : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? ln : sn)(t, n)
    }

    function pn(t, n) {
        return t = +t, n -= t, function (e) {
            return Math.round(t + n * e)
        }
    }

    function vn(t, n, e, r, i, o) {
        var a, u, f;
        return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (f = t * e + n * r) && (e -= t * f, r -= n * f), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, f /= u), t * r < n * e && (t = -t, n = -n, f = -f, a = -a), {
            translateX: i,
            translateY: o,
            rotate: Math.atan2(n, t) * fl,
            skewX: Math.atan(f) * fl,
            scaleX: a,
            scaleY: u
        }
    }

    function gn(t, n, e, r) {
        function i(t) {
            return t.length ? t.pop() + " " : ""
        }

        return function (o, a) {
            var u = [], f = [];
            return o = t(o), a = t(a), function (t, r, i, o, a, u) {
                if (t !== i || r !== o) {
                    var f = a.push("translate(", null, n, null, e);
                    u.push({i: f - 4, x: sn(t, i)}, {i: f - 2, x: sn(r, o)})
                } else (i || o) && a.push("translate(" + i + n + o + e)
            }(o.translateX, o.translateY, a.translateX, a.translateY, u, f), function (t, n, e, o) {
                t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), o.push({
                    i: e.push(i(e) + "rotate(", null, r) - 2,
                    x: sn(t, n)
                })) : n && e.push(i(e) + "rotate(" + n + r)
            }(o.rotate, a.rotate, u, f), function (t, n, e, o) {
                t !== n ? o.push({
                    i: e.push(i(e) + "skewX(", null, r) - 2,
                    x: sn(t, n)
                }) : n && e.push(i(e) + "skewX(" + n + r)
            }(o.skewX, a.skewX, u, f), function (t, n, e, r, o, a) {
                if (t !== e || n !== r) {
                    var u = o.push(i(o) + "scale(", null, ",", null, ")");
                    a.push({i: u - 4, x: sn(t, e)}, {i: u - 2, x: sn(n, r)})
                } else 1 === e && 1 === r || o.push(i(o) + "scale(" + e + "," + r + ")")
            }(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, f), o = a = null, function (t) {
                for (var n, e = -1, r = f.length; ++e < r;) u[(n = f[e]).i] = n.x(t);
                return u.join("")
            }
        }
    }

    function yn(t) {
        return ((t = Math.exp(t)) + 1 / t) / 2
    }

    function _n(t, n) {
        var e, r, i = t[0], o = t[1], a = t[2], u = n[0], f = n[1], c = n[2], s = u - i, l = f - o, h = s * s + l * l;
        if (h < vl) r = Math.log(c / a) / hl, e = function (t) {
            return [i + t * s, o + t * l, a * Math.exp(hl * t * r)]
        }; else {
            var d = Math.sqrt(h), p = (c * c - a * a + pl * h) / (2 * a * dl * d),
                v = (c * c - a * a - pl * h) / (2 * c * dl * d), g = Math.log(Math.sqrt(p * p + 1) - p),
                y = Math.log(Math.sqrt(v * v + 1) - v);
            r = (y - g) / hl, e = function (t) {
                var n = t * r, e = yn(g), u = a / (dl * d) * (e * function (t) {
                    return ((t = Math.exp(2 * t)) - 1) / (t + 1)
                }(hl * n + g) - function (t) {
                    return ((t = Math.exp(t)) - 1 / t) / 2
                }(g));
                return [i + u * s, o + u * l, a * e / yn(hl * n + g)]
            }
        }
        return e.duration = 1e3 * r, e
    }

    function bn(t) {
        return function (n, e) {
            var r = t((n = qt(n)).h, (e = qt(e)).h), i = an(n.s, e.s), o = an(n.l, e.l), a = an(n.opacity, e.opacity);
            return function (t) {
                return n.h = r(t), n.s = i(t), n.l = o(t), n.opacity = a(t), n + ""
            }
        }
    }

    function mn(t) {
        return function (n, e) {
            var r = t((n = $t(n)).h, (e = $t(e)).h), i = an(n.c, e.c), o = an(n.l, e.l), a = an(n.opacity, e.opacity);
            return function (t) {
                return n.h = r(t), n.c = i(t), n.l = o(t), n.opacity = a(t), n + ""
            }
        }
    }

    function xn(t) {
        return function n(e) {
            function r(n, r) {
                var i = t((n = Zt(n)).h, (r = Zt(r)).h), o = an(n.s, r.s), a = an(n.l, r.l),
                    u = an(n.opacity, r.opacity);
                return function (t) {
                    return n.h = i(t), n.s = o(t), n.l = a(Math.pow(t, e)), n.opacity = u(t), n + ""
                }
            }

            return e = +e, r.gamma = n, r
        }(1)
    }

    function wn() {
        return Sl || (Cl(Mn), Sl = kl.now() + El)
    }

    function Mn() {
        Sl = 0
    }

    function An() {
        this._call = this._time = this._next = null
    }

    function Tn(t, n, e) {
        var r = new An;
        return r.restart(t, n, e), r
    }

    function Nn() {
        wn(), ++wl;
        for (var t, n = nl; n;) (t = Sl - n._time) >= 0 && n._call.call(null, t), n = n._next;
        --wl
    }

    function Sn() {
        Sl = (Nl = kl.now()) + El, wl = Ml = 0;
        try {
            Nn()
        } finally {
            wl = 0, function () {
                var t, n, e = nl, r = 1 / 0;
                for (; e;) e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : nl = n);
                el = t, kn(r)
            }(), Sl = 0
        }
    }

    function En() {
        var t = kl.now(), n = t - Nl;
        n > Tl && (El -= n, Nl = t)
    }

    function kn(t) {
        if (!wl) {
            Ml && (Ml = clearTimeout(Ml));
            t - Sl > 24 ? (t < 1 / 0 && (Ml = setTimeout(Sn, t - kl.now() - El)), Al && (Al = clearInterval(Al))) : (Al || (Nl = kl.now(), Al = setInterval(En, Tl)), wl = 1, Cl(Sn))
        }
    }

    function Cn(t, n, e) {
        var r = new An;
        return n = null == n ? 0 : +n, r.restart(function (e) {
            r.stop(), t(e + n)
        }, n, e), r
    }

    function Pn(t, n, e, r, i, o) {
        var a = t.__transition;
        if (a) {
            if (e in a) return
        } else t.__transition = {};
        (function (t, n, e) {
            function r(f) {
                var c, s, l, h;
                if (e.state !== Ll) return o();
                for (c in u) if ((h = u[c]).name === e.name) {
                    if (h.state === Ul) return Cn(r);
                    h.state === ql ? (h.state = Yl, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete u[c]) : +c < n && (h.state = Yl, h.timer.stop(), delete u[c])
                }
                if (Cn(function () {
                    e.state === Ul && (e.state = ql, e.timer.restart(i, e.delay, e.time), i(f))
                }), e.state = Dl, e.on.call("start", t, t.__data__, e.index, e.group), e.state === Dl) {
                    for (e.state = Ul, a = new Array(l = e.tween.length), c = 0, s = -1; c < l; ++c) (h = e.tween[c].value.call(t, t.__data__, e.index, e.group)) && (a[++s] = h);
                    a.length = s + 1
                }
            }

            function i(n) {
                for (var r = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(o), e.state = Ol, 1), i = -1, u = a.length; ++i < u;) a[i].call(null, r);
                e.state === Ol && (e.on.call("end", t, t.__data__, e.index, e.group), o())
            }

            function o() {
                e.state = Yl, e.timer.stop(), delete u[n];
                for (var r in u) return;
                delete t.__transition
            }

            var a, u = t.__transition;
            u[n] = e, e.timer = Tn(function (t) {
                e.state = Ll, e.timer.restart(r, e.delay, e.time), e.delay <= t && r(t - e.delay)
            }, 0, e.time)
        })(t, e, {
            name: n,
            index: r,
            group: i,
            on: Pl,
            tween: zl,
            time: o.time,
            delay: o.delay,
            duration: o.duration,
            ease: o.ease,
            timer: null,
            state: Rl
        })
    }

    function zn(t, n) {
        var e = Ln(t, n);
        if (e.state > Rl) throw new Error("too late; already scheduled");
        return e
    }

    function Rn(t, n) {
        var e = Ln(t, n);
        if (e.state > Dl) throw new Error("too late; already started");
        return e
    }

    function Ln(t, n) {
        var e = t.__transition;
        if (!e || !(e = e[n])) throw new Error("transition not found");
        return e
    }

    function Dn(t, n) {
        var e, r, i, o = t.__transition, a = !0;
        if (o) {
            n = null == n ? null : n + "";
            for (i in o) (e = o[i]).name === n ? (r = e.state > Dl && e.state < Ol, e.state = Yl, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : a = !1;
            a && delete t.__transition
        }
    }

    function Un(t, n, e) {
        var r = t._id;
        return t.each(function () {
            var t = Rn(this, r);
            (t.value || (t.value = {}))[n] = e.apply(this, arguments)
        }), function (t) {
            return Ln(t, r).value[n]
        }
    }

    function qn(t, n) {
        var e;
        return ("number" == typeof n ? sn : n instanceof kt ? rl : (e = kt(n)) ? (n = e, rl) : hn)(t, n)
    }

    function On(t, n, e, r) {
        this._groups = t, this._parents = n, this._name = e, this._id = r
    }

    function Yn(t) {
        return ft().transition(t)
    }

    function Bn() {
        return ++Fl
    }

    function Fn(t) {
        return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
    }

    function In(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
    }

    function jn(t) {
        return (1 - Math.cos(Gl * t)) / 2
    }

    function Hn(t) {
        return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
    }

    function Xn(t) {
        return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
    }

    function Gn(t) {
        return (t = +t) < $l ? rh * t * t : t < Zl ? rh * (t -= Wl) * t + Ql : t < Kl ? rh * (t -= Jl) * t + th : rh * (t -= nh) * t + eh
    }

    function Vn(t, n) {
        for (var e; !(e = t.__transition) || !(e = e[n]);) if (!(t = t.parentNode)) return lh.time = wn(), lh;
        return e
    }

    function $n(t) {
        return function () {
            return t
        }
    }

    function Wn() {
        t.event.stopImmediatePropagation()
    }

    function Zn() {
        t.event.preventDefault(), t.event.stopImmediatePropagation()
    }

    function Qn(t) {
        return {type: t}
    }

    function Jn() {
        return !t.event.button
    }

    function Kn() {
        var t = this.ownerSVGElement || this;
        return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]
    }

    function te(t) {
        for (; !t.__brush;) if (!(t = t.parentNode)) return;
        return t.__brush
    }

    function ne(t) {
        return t[0][0] === t[1][0] || t[0][1] === t[1][1]
    }

    function ee(n) {
        function e(t) {
            var e = t.property("__brush", u).selectAll(".overlay").data([Qn("overlay")]);
            e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", mh.overlay).merge(e).each(function () {
                var t = te(this).extent;
                ct(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
            }), t.selectAll(".selection").data([Qn("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", mh.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
            var i = t.selectAll(".handle").data(n.handles, function (t) {
                return t.type
            });
            i.exit().remove(), i.enter().append("rect").attr("class", function (t) {
                return "handle handle--" + t.type
            }).attr("cursor", function (t) {
                return mh[t.type]
            }), t.each(r).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", a)
        }

        function r() {
            var t = ct(this), n = te(this).selection;
            n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", function (t) {
                return "e" === t.type[t.type.length - 1] ? n[1][0] - h / 2 : n[0][0] - h / 2
            }).attr("y", function (t) {
                return "s" === t.type[0] ? n[1][1] - h / 2 : n[0][1] - h / 2
            }).attr("width", function (t) {
                return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + h : h
            }).attr("height", function (t) {
                return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + h : h
            })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
        }

        function i(t, n) {
            return t.__brush.emitter || new o(t, n)
        }

        function o(t, n) {
            this.that = t, this.args = n, this.state = t.__brush, this.active = 0
        }

        function a() {
            function e() {
                var t = pt(w);
                !L || m || x || (Math.abs(t[0] - U[0]) > Math.abs(t[1] - U[1]) ? x = !0 : m = !0), U = t, b = !0, Zn(), o()
            }

            function o() {
                var t;
                switch (y = U[0] - D[0], _ = U[1] - D[1], A) {
                    case ph:
                    case dh:
                        T && (y = Math.max(C - u, Math.min(z - d, y)), c = u + y, p = d + y), N && (_ = Math.max(P - l, Math.min(R - v, _)), h = l + _, g = v + _);
                        break;
                    case vh:
                        T < 0 ? (y = Math.max(C - u, Math.min(z - u, y)), c = u + y, p = d) : T > 0 && (y = Math.max(C - d, Math.min(z - d, y)), c = u, p = d + y), N < 0 ? (_ = Math.max(P - l, Math.min(R - l, _)), h = l + _, g = v) : N > 0 && (_ = Math.max(P - v, Math.min(R - v, _)), h = l, g = v + _);
                        break;
                    case gh:
                        T && (c = Math.max(C, Math.min(z, u - y * T)), p = Math.max(C, Math.min(z, d + y * T))), N && (h = Math.max(P, Math.min(R, l - _ * N)), g = Math.max(P, Math.min(R, v + _ * N)))
                }
                p < c && (T *= -1, t = u, u = d, d = t, t = c, c = p, p = t, M in xh && Y.attr("cursor", mh[M = xh[M]])), g < h && (N *= -1, t = l, l = v, v = t, t = h, h = g, g = t, M in wh && Y.attr("cursor", mh[M = wh[M]])), S.selection && (k = S.selection), m && (c = k[0][0], p = k[1][0]), x && (h = k[0][1], g = k[1][1]), k[0][0] === c && k[0][1] === h && k[1][0] === p && k[1][1] === g || (S.selection = [[c, h], [p, g]], r.call(w), q.brush())
            }

            function a() {
                if (Wn(), t.event.touches) {
                    if (t.event.touches.length) return;
                    f && clearTimeout(f), f = setTimeout(function () {
                        f = null
                    }, 500), O.on("touchmove.brush touchend.brush touchcancel.brush", null)
                } else bt(t.event.view, b), B.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                O.attr("pointer-events", "all"), Y.attr("cursor", mh.overlay), S.selection && (k = S.selection), ne(k) && (S.selection = null, r.call(w)), q.end()
            }

            if (t.event.touches) {
                if (t.event.changedTouches.length < t.event.touches.length) return Zn()
            } else if (f) return;
            if (s.apply(this, arguments)) {
                var u, c, l, h, d, p, v, g, y, _, b, m, x, w = this, M = t.event.target.__data__.type,
                    A = "selection" === (t.event.metaKey ? M = "overlay" : M) ? dh : t.event.altKey ? gh : vh,
                    T = n === _h ? null : Mh[M], N = n === yh ? null : Ah[M], S = te(w), E = S.extent, k = S.selection,
                    C = E[0][0], P = E[0][1], z = E[1][0], R = E[1][1], L = T && N && t.event.shiftKey, D = pt(w),
                    U = D, q = i(w, arguments).beforestart();
                "overlay" === M ? S.selection = k = [[u = n === _h ? C : D[0], l = n === yh ? P : D[1]], [d = n === _h ? z : u, v = n === yh ? R : l]] : (u = k[0][0], l = k[0][1], d = k[1][0], v = k[1][1]), c = u, h = l, p = d, g = v;
                var O = ct(w).attr("pointer-events", "none"), Y = O.selectAll(".overlay").attr("cursor", mh[M]);
                if (t.event.touches) O.on("touchmove.brush", e, !0).on("touchend.brush touchcancel.brush", a, !0); else {
                    var B = ct(t.event.view).on("keydown.brush", function () {
                        switch (t.event.keyCode) {
                            case 16:
                                L = T && N;
                                break;
                            case 18:
                                A === vh && (T && (d = p - y * T, u = c + y * T), N && (v = g - _ * N, l = h + _ * N), A = gh, o());
                                break;
                            case 32:
                                A !== vh && A !== gh || (T < 0 ? d = p - y : T > 0 && (u = c - y), N < 0 ? v = g - _ : N > 0 && (l = h - _), A = ph, Y.attr("cursor", mh.selection), o());
                                break;
                            default:
                                return
                        }
                        Zn()
                    }, !0).on("keyup.brush", function () {
                        switch (t.event.keyCode) {
                            case 16:
                                L && (m = x = L = !1, o());
                                break;
                            case 18:
                                A === gh && (T < 0 ? d = p : T > 0 && (u = c), N < 0 ? v = g : N > 0 && (l = h), A = vh, o());
                                break;
                            case 32:
                                A === ph && (t.event.altKey ? (T && (d = p - y * T, u = c + y * T), N && (v = g - _ * N, l = h + _ * N), A = gh) : (T < 0 ? d = p : T > 0 && (u = c), N < 0 ? v = g : N > 0 && (l = h), A = vh), Y.attr("cursor", mh[M]), o());
                                break;
                            default:
                                return
                        }
                        Zn()
                    }, !0).on("mousemove.brush", e, !0).on("mouseup.brush", a, !0);
                    _t(t.event.view)
                }
                Wn(), Dn(w), r.call(w), q.start()
            }
        }

        function u() {
            var t = this.__brush || {selection: null};
            return t.extent = c.apply(this, arguments), t.dim = n, t
        }

        var f, c = Kn, s = Jn, l = N(e, "start", "brush", "end"), h = 6;
        return e.move = function (t, e) {
            t.selection ? t.on("start.brush", function () {
                i(this, arguments).beforestart().start()
            }).on("interrupt.brush end.brush", function () {
                i(this, arguments).end()
            }).tween("brush", function () {
                function t(t) {
                    a.selection = 1 === t && ne(c) ? null : s(t), r.call(o), u.brush()
                }

                var o = this, a = o.__brush, u = i(o, arguments), f = a.selection,
                    c = n.input("function" == typeof e ? e.apply(this, arguments) : e, a.extent), s = dn(f, c);
                return f && c ? t : t(1)
            }) : t.each(function () {
                var t = arguments, o = this.__brush,
                    a = n.input("function" == typeof e ? e.apply(this, t) : e, o.extent), u = i(this, t).beforestart();
                Dn(this), o.selection = null == a || ne(a) ? null : a, r.call(this), u.start().brush().end()
            })
        }, o.prototype = {
            beforestart: function () {
                return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this
            }, start: function () {
                return this.starting && (this.starting = !1, this.emit("start")), this
            }, brush: function () {
                return this.emit("brush"), this
            }, end: function () {
                return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this
            }, emit: function (t) {
                ot(new function (t, n, e) {
                    this.target = t, this.type = n, this.selection = e
                }(e, t, n.output(this.state.selection)), l.apply, l, [t, this.that, this.args])
            }
        }, e.extent = function (t) {
            return arguments.length ? (c = "function" == typeof t ? t : $n([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), e) : c
        }, e.filter = function (t) {
            return arguments.length ? (s = "function" == typeof t ? t : $n(!!t), e) : s
        }, e.handleSize = function (t) {
            return arguments.length ? (h = +t, e) : h
        }, e.on = function () {
            var t = l.on.apply(l, arguments);
            return t === l ? e : t
        }, e
    }

    function re(t) {
        return function () {
            return t
        }
    }

    function ie() {
        this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
    }

    function oe() {
        return new ie
    }

    function ae(t) {
        return t.source
    }

    function ue(t) {
        return t.target
    }

    function fe(t) {
        return t.radius
    }

    function ce(t) {
        return t.startAngle
    }

    function se(t) {
        return t.endAngle
    }

    function le() {
    }

    function he(t, n) {
        var e = new le;
        if (t instanceof le) t.each(function (t, n) {
            e.set(n, t)
        }); else if (Array.isArray(t)) {
            var r, i = -1, o = t.length;
            if (null == n) for (; ++i < o;) e.set(i, t[i]); else for (; ++i < o;) e.set(n(r = t[i], i, t), r)
        } else if (t) for (var a in t) e.set(a, t[a]);
        return e
    }

    function de() {
        return {}
    }

    function pe(t, n, e) {
        t[n] = e
    }

    function ve() {
        return he()
    }

    function ge(t, n, e) {
        t.set(n, e)
    }

    function ye() {
    }

    function _e(t, n) {
        var e = new ye;
        if (t instanceof ye) t.each(function (t) {
            e.add(t)
        }); else if (t) {
            var r = -1, i = t.length;
            if (null == n) for (; ++r < i;) e.add(t[r]); else for (; ++r < i;) e.add(n(t[r], r, t))
        }
        return e
    }

    function be(t, n) {
        return t - n
    }

    function me(t) {
        return function () {
            return t
        }
    }

    function xe(t, n) {
        for (var e, r = -1, i = n.length; ++r < i;) if (e = function (t, n) {
            for (var e = n[0], r = n[1], i = -1, o = 0, a = t.length, u = a - 1; o < a; u = o++) {
                var f = t[o], c = f[0], s = f[1], l = t[u], h = l[0], d = l[1];
                if (function (t, n, e) {
                    var r;
                    return function (t, n, e) {
                        return (n[0] - t[0]) * (e[1] - t[1]) == (e[0] - t[0]) * (n[1] - t[1])
                    }(t, n, e) && function (t, n, e) {
                        return t <= n && n <= e || e <= n && n <= t
                    }(t[r = +(t[0] === n[0])], e[r], n[r])
                }(f, l, n)) return 0;
                s > r != d > r && e < (h - c) * (r - s) / (d - s) + c && (i = -i)
            }
            return i
        }(t, n[r])) return e;
        return 0
    }

    function we() {
    }

    function Me() {
        function t(t) {
            var e = a(t);
            if (Array.isArray(e)) e = e.slice().sort(be); else {
                var r = u(t), i = r[0], o = r[1];
                e = d(i, o, e), e = s(Math.floor(i / e) * e, Math.floor(o / e) * e, e)
            }
            return e.map(function (e) {
                return n(t, e)
            })
        }

        function n(t, n) {
            var r = [], a = [];
            return function (t, n, r) {
                function a(t) {
                    var n, i, o = [t[0][0] + u, t[0][1] + f], a = [t[1][0] + u, t[1][1] + f], c = e(o), s = e(a);
                    (n = p[c]) ? (i = d[s]) ? (delete p[n.end], delete d[i.start], n === i ? (n.ring.push(a), r(n.ring)) : d[n.start] = p[i.end] = {
                        start: n.start,
                        end: i.end,
                        ring: n.ring.concat(i.ring)
                    }) : (delete p[n.end], n.ring.push(a), p[n.end = s] = n) : (n = d[s]) ? (i = p[c]) ? (delete d[n.start], delete p[i.end], n === i ? (n.ring.push(a), r(n.ring)) : d[i.start] = p[n.end] = {
                        start: i.start,
                        end: n.end,
                        ring: i.ring.concat(n.ring)
                    }) : (delete d[n.start], n.ring.unshift(o), d[n.start = c] = n) : d[c] = p[s] = {
                        start: c,
                        end: s,
                        ring: [o, a]
                    }
                }

                var u, f, c, s, l, h, d = new Array, p = new Array;
                u = f = -1, s = t[0] >= n, qh[s << 1].forEach(a);
                for (; ++u < i - 1;) c = s, s = t[u + 1] >= n, qh[c | s << 1].forEach(a);
                qh[s << 0].forEach(a);
                for (; ++f < o - 1;) {
                    for (u = -1, s = t[f * i + i] >= n, l = t[f * i] >= n, qh[s << 1 | l << 2].forEach(a); ++u < i - 1;) c = s, s = t[f * i + i + u + 1] >= n, h = l, l = t[f * i + u + 1] >= n, qh[c | s << 1 | l << 2 | h << 3].forEach(a);
                    qh[s | l << 3].forEach(a)
                }
                u = -1, l = t[f * i] >= n, qh[l << 2].forEach(a);
                for (; ++u < i - 1;) h = l, l = t[f * i + u + 1] >= n, qh[l << 2 | h << 3].forEach(a);
                qh[l << 3].forEach(a)
            }(t, n, function (e) {
                f(e, t, n), function (t) {
                    for (var n = 0, e = t.length, r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1]; ++n < e;) r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1];
                    return r
                }(e) > 0 ? r.push([e]) : a.push(e)
            }), a.forEach(function (t) {
                for (var n, e = 0, i = r.length; e < i; ++e) if (-1 !== xe((n = r[e])[0], t)) return void n.push(t)
            }), {type: "MultiPolygon", value: n, coordinates: r}
        }

        function e(t) {
            return 2 * t[0] + t[1] * (i + 1) * 4
        }

        function r(t, n, e) {
            t.forEach(function (t) {
                var r, a = t[0], u = t[1], f = 0 | a, c = 0 | u, s = n[c * i + f];
                a > 0 && a < i && f === a && (r = n[c * i + f - 1], t[0] = a + (e - r) / (s - r) - .5), u > 0 && u < o && c === u && (r = n[(c - 1) * i + f], t[1] = u + (e - r) / (s - r) - .5)
            })
        }

        var i = 1, o = 1, a = p, f = r;
        return t.contour = n, t.size = function (n) {
            if (!arguments.length) return [i, o];
            var e = Math.ceil(n[0]), r = Math.ceil(n[1]);
            if (!(e > 0 && r > 0)) throw new Error("invalid size");
            return i = e, o = r, t
        }, t.thresholds = function (n) {
            return arguments.length ? (a = "function" == typeof n ? n : Array.isArray(n) ? me(Uh.call(n)) : me(n), t) : a
        }, t.smooth = function (n) {
            return arguments.length ? (f = n ? r : we, t) : f === r
        }, t
    }

    function Ae(t, n, e) {
        for (var r = t.width, i = t.height, o = 1 + (e << 1), a = 0; a < i; ++a) for (var u = 0, f = 0; u < r + e; ++u) u < r && (f += t.data[u + a * r]), u >= e && (u >= o && (f -= t.data[u - o + a * r]), n.data[u - e + a * r] = f / Math.min(u + 1, r - 1 + o - u, o))
    }

    function Te(t, n, e) {
        for (var r = t.width, i = t.height, o = 1 + (e << 1), a = 0; a < r; ++a) for (var u = 0, f = 0; u < i + e; ++u) u < i && (f += t.data[a + u * r]), u >= e && (u >= o && (f -= t.data[a + (u - o) * r]), n.data[a + (u - e) * r] = f / Math.min(u + 1, i - 1 + o - u, o))
    }

    function Ne(t) {
        return t[0]
    }

    function Se(t) {
        return t[1]
    }

    function Ee(t) {
        return new Function("d", "return {" + t.map(function (t, n) {
            return JSON.stringify(t) + ": d[" + n + "]"
        }).join(",") + "}")
    }

    function ke(t) {
        function n(t, n) {
            function e() {
                if (c) return Yh;
                if (s) return s = !1, Oh;
                var n, e, r = u;
                if (t.charCodeAt(r) === Bh) {
                    for (; u++ < a && t.charCodeAt(u) !== Bh || t.charCodeAt(++u) === Bh;) ;
                    return (n = u) >= a ? c = !0 : (e = t.charCodeAt(u++)) === Fh ? s = !0 : e === Ih && (s = !0, t.charCodeAt(u) === Fh && ++u), t.slice(r + 1, n - 1).replace(/""/g, '"')
                }
                for (; u < a;) {
                    if ((e = t.charCodeAt(n = u++)) === Fh) s = !0; else if (e === Ih) s = !0, t.charCodeAt(u) === Fh && ++u; else if (e !== o) continue;
                    return t.slice(r, n)
                }
                return c = !0, t.slice(r, a)
            }

            var r, i = [], a = t.length, u = 0, f = 0, c = a <= 0, s = !1;
            for (t.charCodeAt(a - 1) === Fh && --a, t.charCodeAt(a - 1) === Ih && --a; (r = e()) !== Yh;) {
                for (var l = []; r !== Oh && r !== Yh;) l.push(r), r = e();
                n && null == (l = n(l, f++)) || i.push(l)
            }
            return i
        }

        function e(n) {
            return n.map(r).join(t)
        }

        function r(t) {
            return null == t ? "" : i.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
        }

        var i = new RegExp('["' + t + "\n\r]"), o = t.charCodeAt(0);
        return {
            parse: function (t, e) {
                var r, i, o = n(t, function (t, n) {
                    if (r) return r(t, n - 1);
                    i = t, r = e ? function (t, n) {
                        var e = Ee(t);
                        return function (r, i) {
                            return n(e(r), i, t)
                        }
                    }(t, e) : Ee(t)
                });
                return o.columns = i || [], o
            }, parseRows: n, format: function (n, e) {
                return null == e && (e = function (t) {
                    var n = Object.create(null), e = [];
                    return t.forEach(function (t) {
                        for (var r in t) r in n || e.push(n[r] = r)
                    }), e
                }(n)), [e.map(r).join(t)].concat(n.map(function (n) {
                    return e.map(function (t) {
                        return r(n[t])
                    }).join(t)
                })).join("\n")
            }, formatRows: function (t) {
                return t.map(e).join("\n")
            }
        }
    }

    function Ce(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.blob()
    }

    function Pe(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.arrayBuffer()
    }

    function ze(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.text()
    }

    function Re(t, n) {
        return fetch(t, n).then(ze)
    }

    function Le(t) {
        return function (n, e, r) {
            return 2 === arguments.length && "function" == typeof e && (r = e, e = void 0), Re(n, e).then(function (n) {
                return t(n, r)
            })
        }
    }

    function De(t) {
        if (!t.ok) throw new Error(t.status + " " + t.statusText);
        return t.json()
    }

    function Ue(t) {
        return function (n, e) {
            return Re(n, e).then(function (n) {
                return (new DOMParser).parseFromString(n, t)
            })
        }
    }

    function qe(t) {
        return function () {
            return t
        }
    }

    function Oe() {
        return 1e-6 * (Math.random() - .5)
    }

    function Ye(t, n, e, r) {
        if (isNaN(n) || isNaN(e)) return t;
        var i, o, a, u, f, c, s, l, h, d = t._root, p = {data: r}, v = t._x0, g = t._y0, y = t._x1, _ = t._y1;
        if (!d) return t._root = p, t;
        for (; d.length;) if ((c = n >= (o = (v + y) / 2)) ? v = o : y = o, (s = e >= (a = (g + _) / 2)) ? g = a : _ = a, i = d, !(d = d[l = s << 1 | c])) return i[l] = p, t;
        if (u = +t._x.call(null, d.data), f = +t._y.call(null, d.data), n === u && e === f) return p.next = d, i ? i[l] = p : t._root = p, t;
        do {
            i = i ? i[l] = new Array(4) : t._root = new Array(4), (c = n >= (o = (v + y) / 2)) ? v = o : y = o, (s = e >= (a = (g + _) / 2)) ? g = a : _ = a
        } while ((l = s << 1 | c) == (h = (f >= a) << 1 | u >= o));
        return i[h] = d, i[l] = p, t
    }

    function Be(t, n, e, r, i) {
        this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i
    }

    function Fe(t) {
        return t[0]
    }

    function Ie(t) {
        return t[1]
    }

    function je(t, n, e) {
        var r = new He(null == n ? Fe : n, null == e ? Ie : e, NaN, NaN, NaN, NaN);
        return null == t ? r : r.addAll(t)
    }

    function He(t, n, e, r, i, o) {
        this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0
    }

    function Xe(t) {
        for (var n = {data: t.data}, e = n; t = t.next;) e = e.next = {data: t.data};
        return n
    }

    function Ge(t) {
        return t.x + t.vx
    }

    function Ve(t) {
        return t.y + t.vy
    }

    function $e(t) {
        return t.index
    }

    function We(t, n) {
        var e = t.get(n);
        if (!e) throw new Error("missing: " + n);
        return e
    }

    function Ze(t) {
        return t.x
    }

    function Qe(t) {
        return t.y
    }

    function Je(t, n) {
        if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
        var e, r = t.slice(0, e);
        return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
    }

    function Ke(t) {
        return (t = Je(Math.abs(t))) ? t[1] : NaN
    }

    function tr(t) {
        return new nr(t)
    }

    function nr(t) {
        if (!(n = ud.exec(t))) throw new Error("invalid format: " + t);
        var n;
        this.fill = n[1] || " ", this.align = n[2] || ">", this.sign = n[3] || "-", this.symbol = n[4] || "", this.zero = !!n[5], this.width = n[6] && +n[6], this.comma = !!n[7], this.precision = n[8] && +n[8].slice(1), this.trim = !!n[9], this.type = n[10] || ""
    }

    function er(t, n) {
        var e = Je(t, n);
        if (!e) return t + "";
        var r = e[0], i = e[1];
        return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
    }

    function rr(t) {
        return t
    }

    function ir(t) {
        function n(t) {
            function n(t) {
                var n, r, a, s = y, x = _;
                if ("c" === g) x = b(t) + x, t = ""; else {
                    var w = (t = +t) < 0;
                    if (t = b(Math.abs(t), p), v && (t = function (t) {
                        t:for (var n, e = t.length, r = 1, i = -1; r < e; ++r) switch (t[r]) {
                            case".":
                                i = n = r;
                                break;
                            case"0":
                                0 === i && (i = r), n = r;
                                break;
                            default:
                                if (i > 0) {
                                    if (!+t[r]) break t;
                                    i = 0
                                }
                        }
                        return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t
                    }(t)), w && 0 == +t && (w = !1), s = (w ? "(" === c ? c : "-" : "-" === c || "(" === c ? "" : c) + s, x = ("s" === g ? ld[8 + fd / 3] : "") + x + (w && "(" === c ? ")" : ""), m) for (n = -1, r = t.length; ++n < r;) if (48 > (a = t.charCodeAt(n)) || a > 57) {
                        x = (46 === a ? i + t.slice(n + 1) : t.slice(n)) + x, t = t.slice(0, n);
                        break
                    }
                }
                d && !l && (t = e(t, 1 / 0));
                var M = s.length + t.length + x.length, A = M < h ? new Array(h - M + 1).join(u) : "";
                switch (d && l && (t = e(A + t, A.length ? h - x.length : 1 / 0), A = ""), f) {
                    case"<":
                        t = s + t + x + A;
                        break;
                    case"=":
                        t = s + A + t + x;
                        break;
                    case"^":
                        t = A.slice(0, M = A.length >> 1) + s + t + x + A.slice(M);
                        break;
                    default:
                        t = A + s + t + x
                }
                return o(t)
            }

            var u = (t = tr(t)).fill, f = t.align, c = t.sign, s = t.symbol, l = t.zero, h = t.width, d = t.comma,
                p = t.precision, v = t.trim, g = t.type;
            "n" === g ? (d = !0, g = "g") : sd[g] || (null == p && (p = 12), v = !0, g = "g"), (l || "0" === u && "=" === f) && (l = !0, u = "0", f = "=");
            var y = "$" === s ? r[0] : "#" === s && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "",
                _ = "$" === s ? r[1] : /[%p]/.test(g) ? a : "", b = sd[g], m = /[defgprs%]/.test(g);
            return p = null == p ? 6 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, p)) : Math.max(0, Math.min(20, p)), n.toString = function () {
                return t + ""
            }, n
        }

        var e = t.grouping && t.thousands ? function (t, n) {
            return function (e, r) {
                for (var i = e.length, o = [], a = 0, u = t[0], f = 0; i > 0 && u > 0 && (f + u + 1 > r && (u = Math.max(1, r - f)), o.push(e.substring(i -= u, i + u)), !((f += u + 1) > r));) u = t[a = (a + 1) % t.length];
                return o.reverse().join(n)
            }
        }(t.grouping, t.thousands) : rr, r = t.currency, i = t.decimal, o = t.numerals ? function (t) {
            return function (n) {
                return n.replace(/[0-9]/g, function (n) {
                    return t[+n]
                })
            }
        }(t.numerals) : rr, a = t.percent || "%";
        return {
            format: n, formatPrefix: function (t, e) {
                var r = n((t = tr(t), t.type = "f", t)), i = 3 * Math.max(-8, Math.min(8, Math.floor(Ke(e) / 3))),
                    o = Math.pow(10, -i), a = ld[8 + i / 3];
                return function (t) {
                    return r(o * t) + a
                }
            }
        }
    }

    function or(n) {
        return cd = ir(n), t.format = cd.format, t.formatPrefix = cd.formatPrefix, cd
    }

    function ar(t) {
        return Math.max(0, -Ke(Math.abs(t)))
    }

    function ur(t, n) {
        return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Ke(n) / 3))) - Ke(Math.abs(t)))
    }

    function fr(t, n) {
        return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Ke(n) - Ke(t)) + 1
    }

    function cr() {
        return new sr
    }

    function sr() {
        this.reset()
    }

    function lr(t, n, e) {
        var r = t.s = n + e, i = r - n, o = r - i;
        t.t = n - o + (e - i)
    }

    function hr(t) {
        return t > 1 ? 0 : t < -1 ? Gd : Math.acos(t)
    }

    function dr(t) {
        return t > 1 ? Vd : t < -1 ? -Vd : Math.asin(t)
    }

    function pr(t) {
        return (t = ap(t / 2)) * t
    }

    function vr() {
    }

    function gr(t, n) {
        t && lp.hasOwnProperty(t.type) && lp[t.type](t, n)
    }

    function yr(t, n, e) {
        var r, i = -1, o = t.length - e;
        for (n.lineStart(); ++i < o;) r = t[i], n.point(r[0], r[1], r[2]);
        n.lineEnd()
    }

    function _r(t, n) {
        var e = -1, r = t.length;
        for (n.polygonStart(); ++e < r;) yr(t[e], n, 1);
        n.polygonEnd()
    }

    function br(t, n) {
        t && sp.hasOwnProperty(t.type) ? sp[t.type](t, n) : gr(t, n)
    }

    function mr() {
        pp.point = wr
    }

    function xr() {
        Mr(hd, dd)
    }

    function wr(t, n) {
        pp.point = Mr, hd = t, dd = n, pd = t *= Qd, vd = np(n = (n *= Qd) / 2 + $d), gd = ap(n)
    }

    function Mr(t, n) {
        n = (n *= Qd) / 2 + $d;
        var e = (t *= Qd) - pd, r = e >= 0 ? 1 : -1, i = r * e, o = np(n), a = ap(n), u = gd * a,
            f = vd * o + u * np(i), c = u * r * ap(i);
        hp.add(tp(c, f)), pd = t, vd = o, gd = a
    }

    function Ar(t) {
        return [tp(t[1], t[0]), dr(t[2])]
    }

    function Tr(t) {
        var n = t[0], e = t[1], r = np(e);
        return [r * np(n), r * ap(n), ap(e)]
    }

    function Nr(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
    }

    function Sr(t, n) {
        return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
    }

    function Er(t, n) {
        t[0] += n[0], t[1] += n[1], t[2] += n[2]
    }

    function kr(t, n) {
        return [t[0] * n, t[1] * n, t[2] * n]
    }

    function Cr(t) {
        var n = fp(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        t[0] /= n, t[1] /= n, t[2] /= n
    }

    function Pr(t, n) {
        Td.push(Nd = [yd = t, bd = t]), n < _d && (_d = n), n > md && (md = n)
    }

    function zr(t, n) {
        var e = Tr([t * Qd, n * Qd]);
        if (Ad) {
            var r = Sr(Ad, e), i = Sr([r[1], -r[0], 0], r);
            Cr(i), i = Ar(i);
            var o, a = t - xd, u = a > 0 ? 1 : -1, f = i[0] * Zd * u, c = Jd(a) > 180;
            c ^ (u * xd < f && f < u * t) ? (o = i[1] * Zd) > md && (md = o) : (f = (f + 360) % 360 - 180, c ^ (u * xd < f && f < u * t) ? (o = -i[1] * Zd) < _d && (_d = o) : (n < _d && (_d = n), n > md && (md = n))), c ? t < xd ? Or(yd, t) > Or(yd, bd) && (bd = t) : Or(t, bd) > Or(yd, bd) && (yd = t) : bd >= yd ? (t < yd && (yd = t), t > bd && (bd = t)) : t > xd ? Or(yd, t) > Or(yd, bd) && (bd = t) : Or(t, bd) > Or(yd, bd) && (yd = t)
        } else Td.push(Nd = [yd = t, bd = t]);
        n < _d && (_d = n), n > md && (md = n), Ad = e, xd = t
    }

    function Rr() {
        gp.point = zr
    }

    function Lr() {
        Nd[0] = yd, Nd[1] = bd, gp.point = Pr, Ad = null
    }

    function Dr(t, n) {
        if (Ad) {
            var e = t - xd;
            vp.add(Jd(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
        } else wd = t, Md = n;
        pp.point(t, n), zr(t, n)
    }

    function Ur() {
        pp.lineStart()
    }

    function qr() {
        Dr(wd, Md), pp.lineEnd(), Jd(vp) > Hd && (yd = -(bd = 180)), Nd[0] = yd, Nd[1] = bd, Ad = null
    }

    function Or(t, n) {
        return (n -= t) < 0 ? n + 360 : n
    }

    function Yr(t, n) {
        return t[0] - n[0]
    }

    function Br(t, n) {
        return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
    }

    function Fr(t, n) {
        t *= Qd;
        var e = np(n *= Qd);
        Ir(e * np(t), e * ap(t), ap(n))
    }

    function Ir(t, n, e) {
        kd += (t - kd) / ++Sd, Cd += (n - Cd) / Sd, Pd += (e - Pd) / Sd
    }

    function jr() {
        yp.point = Hr
    }

    function Hr(t, n) {
        t *= Qd;
        var e = np(n *= Qd);
        Bd = e * np(t), Fd = e * ap(t), Id = ap(n), yp.point = Xr, Ir(Bd, Fd, Id)
    }

    function Xr(t, n) {
        t *= Qd;
        var e = np(n *= Qd), r = e * np(t), i = e * ap(t), o = ap(n),
            a = tp(fp((a = Fd * o - Id * i) * a + (a = Id * r - Bd * o) * a + (a = Bd * i - Fd * r) * a), Bd * r + Fd * i + Id * o);
        Ed += a, zd += a * (Bd + (Bd = r)), Rd += a * (Fd + (Fd = i)), Ld += a * (Id + (Id = o)), Ir(Bd, Fd, Id)
    }

    function Gr() {
        yp.point = Fr
    }

    function Vr() {
        yp.point = Wr
    }

    function $r() {
        Zr(Od, Yd), yp.point = Fr
    }

    function Wr(t, n) {
        Od = t, Yd = n, t *= Qd, n *= Qd, yp.point = Zr;
        var e = np(n);
        Bd = e * np(t), Fd = e * ap(t), Id = ap(n), Ir(Bd, Fd, Id)
    }

    function Zr(t, n) {
        t *= Qd;
        var e = np(n *= Qd), r = e * np(t), i = e * ap(t), o = ap(n), a = Fd * o - Id * i, u = Id * r - Bd * o,
            f = Bd * i - Fd * r, c = fp(a * a + u * u + f * f), s = dr(c), l = c && -s / c;
        Dd += l * a, Ud += l * u, qd += l * f, Ed += s, zd += s * (Bd + (Bd = r)), Rd += s * (Fd + (Fd = i)), Ld += s * (Id + (Id = o)), Ir(Bd, Fd, Id)
    }

    function Qr(t) {
        return function () {
            return t
        }
    }

    function Jr(t, n) {
        function e(e, r) {
            return e = t(e, r), n(e[0], e[1])
        }

        return t.invert && n.invert && (e.invert = function (e, r) {
            return (e = n.invert(e, r)) && t.invert(e[0], e[1])
        }), e
    }

    function Kr(t, n) {
        return [t > Gd ? t - Wd : t < -Gd ? t + Wd : t, n]
    }

    function ti(t, n, e) {
        return (t %= Wd) ? n || e ? Jr(ei(t), ri(n, e)) : ei(t) : n || e ? ri(n, e) : Kr
    }

    function ni(t) {
        return function (n, e) {
            return n += t, [n > Gd ? n - Wd : n < -Gd ? n + Wd : n, e]
        }
    }

    function ei(t) {
        var n = ni(t);
        return n.invert = ni(-t), n
    }

    function ri(t, n) {
        function e(t, n) {
            var e = np(n), u = np(t) * e, f = ap(t) * e, c = ap(n), s = c * r + u * i;
            return [tp(f * o - s * a, u * r - c * i), dr(s * o + f * a)]
        }

        var r = np(t), i = ap(t), o = np(n), a = ap(n);
        return e.invert = function (t, n) {
            var e = np(n), u = np(t) * e, f = ap(t) * e, c = ap(n), s = c * o - f * a;
            return [tp(f * o + c * a, u * r + s * i), dr(s * r - u * i)]
        }, e
    }

    function ii(t) {
        function n(n) {
            return n = t(n[0] * Qd, n[1] * Qd), n[0] *= Zd, n[1] *= Zd, n
        }

        return t = ti(t[0] * Qd, t[1] * Qd, t.length > 2 ? t[2] * Qd : 0), n.invert = function (n) {
            return n = t.invert(n[0] * Qd, n[1] * Qd), n[0] *= Zd, n[1] *= Zd, n
        }, n
    }

    function oi(t, n, e, r, i, o) {
        if (e) {
            var a = np(n), u = ap(n), f = r * e;
            null == i ? (i = n + r * Wd, o = n - f / 2) : (i = ai(a, i), o = ai(a, o), (r > 0 ? i < o : i > o) && (i += r * Wd));
            for (var c, s = i; r > 0 ? s > o : s < o; s -= f) c = Ar([a, -u * np(s), -u * ap(s)]), t.point(c[0], c[1])
        }
    }

    function ai(t, n) {
        (n = Tr(n))[0] -= t, Cr(n);
        var e = hr(-n[1]);
        return ((-n[2] < 0 ? -e : e) + Wd - Hd) % Wd
    }

    function ui() {
        var t, n = [];
        return {
            point: function (n, e) {
                t.push([n, e])
            }, lineStart: function () {
                n.push(t = [])
            }, lineEnd: vr, rejoin: function () {
                n.length > 1 && n.push(n.pop().concat(n.shift()))
            }, result: function () {
                var e = n;
                return n = [], t = null, e
            }
        }
    }

    function fi(t, n) {
        return Jd(t[0] - n[0]) < Hd && Jd(t[1] - n[1]) < Hd
    }

    function ci(t, n, e, r) {
        this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
    }

    function si(t, n, e, r, i) {
        var o, a, u = [], f = [];
        if (t.forEach(function (t) {
            if (!((n = t.length - 1) <= 0)) {
                var n, e, r = t[0], a = t[n];
                if (fi(r, a)) {
                    for (i.lineStart(), o = 0; o < n; ++o) i.point((r = t[o])[0], r[1]);
                    i.lineEnd()
                } else u.push(e = new ci(r, t, null, !0)), f.push(e.o = new ci(r, null, e, !1)), u.push(e = new ci(a, t, null, !1)), f.push(e.o = new ci(a, null, e, !0))
            }
        }), u.length) {
            for (f.sort(n), li(u), li(f), o = 0, a = f.length; o < a; ++o) f[o].e = e = !e;
            for (var c, s, l = u[0]; ;) {
                for (var h = l, d = !0; h.v;) if ((h = h.n) === l) return;
                c = h.z, i.lineStart();
                do {
                    if (h.v = h.o.v = !0, h.e) {
                        if (d) for (o = 0, a = c.length; o < a; ++o) i.point((s = c[o])[0], s[1]); else r(h.x, h.n.x, 1, i);
                        h = h.n
                    } else {
                        if (d) for (c = h.p.z, o = c.length - 1; o >= 0; --o) i.point((s = c[o])[0], s[1]); else r(h.x, h.p.x, -1, i);
                        h = h.p
                    }
                    c = (h = h.o).z, d = !d
                } while (!h.v);
                i.lineEnd()
            }
        }
    }

    function li(t) {
        if (n = t.length) {
            for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
            i.n = e = t[0], e.p = i
        }
    }

    function hi(t, n) {
        var e = n[0], r = n[1], i = ap(r), o = [ap(e), -np(e), 0], a = 0, u = 0;
        kp.reset(), 1 === i ? r = Vd + Hd : -1 === i && (r = -Vd - Hd);
        for (var f = 0, c = t.length; f < c; ++f) if (l = (s = t[f]).length) for (var s, l, h = s[l - 1], d = h[0], p = h[1] / 2 + $d, v = ap(p), g = np(p), y = 0; y < l; ++y, d = b, v = x, g = w, h = _) {
            var _ = s[y], b = _[0], m = _[1] / 2 + $d, x = ap(m), w = np(m), M = b - d, A = M >= 0 ? 1 : -1, T = A * M,
                N = T > Gd, S = v * x;
            if (kp.add(tp(S * A * ap(T), g * w + S * np(T))), a += N ? M + A * Wd : M, N ^ d >= e ^ b >= e) {
                var E = Sr(Tr(h), Tr(_));
                Cr(E);
                var k = Sr(o, E);
                Cr(k);
                var C = (N ^ M >= 0 ? -1 : 1) * dr(k[2]);
                (r > C || r === C && (E[0] || E[1])) && (u += N ^ M >= 0 ? 1 : -1)
            }
        }
        return (a < -Hd || a < Hd && kp < -Hd) ^ 1 & u
    }

    function di(t, n, e, r) {
        return function (i) {
            function o(n, e) {
                t(n, e) && i.point(n, e)
            }

            function a(t, n) {
                v.point(t, n)
            }

            function u() {
                m.point = a, v.lineStart()
            }

            function f() {
                m.point = o, v.lineEnd()
            }

            function c(t, n) {
                p.push([t, n]), _.point(t, n)
            }

            function s() {
                _.lineStart(), p = []
            }

            function l() {
                c(p[0][0], p[0][1]), _.lineEnd();
                var t, n, e, r, o = _.clean(), a = g.result(), u = a.length;
                if (p.pop(), h.push(p), p = null, u) if (1 & o) {
                    if (e = a[0], (n = e.length - 1) > 0) {
                        for (b || (i.polygonStart(), b = !0), i.lineStart(), t = 0; t < n; ++t) i.point((r = e[t])[0], r[1]);
                        i.lineEnd()
                    }
                } else u > 1 && 2 & o && a.push(a.pop().concat(a.shift())), d.push(a.filter(pi))
            }

            var h, d, p, v = n(i), g = ui(), _ = n(g), b = !1, m = {
                point: o, lineStart: u, lineEnd: f, polygonStart: function () {
                    m.point = c, m.lineStart = s, m.lineEnd = l, d = [], h = []
                }, polygonEnd: function () {
                    m.point = o, m.lineStart = u, m.lineEnd = f, d = y(d);
                    var t = hi(h, r);
                    d.length ? (b || (i.polygonStart(), b = !0), si(d, vi, t, e, i)) : t && (b || (i.polygonStart(), b = !0), i.lineStart(), e(null, null, 1, i), i.lineEnd()), b && (i.polygonEnd(), b = !1), d = h = null
                }, sphere: function () {
                    i.polygonStart(), i.lineStart(), e(null, null, 1, i), i.lineEnd(), i.polygonEnd()
                }
            };
            return m
        }
    }

    function pi(t) {
        return t.length > 1
    }

    function vi(t, n) {
        return ((t = t.x)[0] < 0 ? t[1] - Vd - Hd : Vd - t[1]) - ((n = n.x)[0] < 0 ? n[1] - Vd - Hd : Vd - n[1])
    }

    function gi(t) {
        function n(t, n) {
            return np(t) * np(n) > i
        }

        function e(t, n, e) {
            var r = [1, 0, 0], o = Sr(Tr(t), Tr(n)), a = Nr(o, o), u = o[0], f = a - u * u;
            if (!f) return !e && t;
            var c = i * a / f, s = -i * u / f, l = Sr(r, o), h = kr(r, c);
            Er(h, kr(o, s));
            var d = l, p = Nr(h, d), v = Nr(d, d), g = p * p - v * (Nr(h, h) - 1);
            if (!(g < 0)) {
                var y = fp(g), _ = kr(d, (-p - y) / v);
                if (Er(_, h), _ = Ar(_), !e) return _;
                var b, m = t[0], x = n[0], w = t[1], M = n[1];
                x < m && (b = m, m = x, x = b);
                var A = x - m, T = Jd(A - Gd) < Hd;
                if (!T && M < w && (b = w, w = M, M = b), T || A < Hd ? T ? w + M > 0 ^ _[1] < (Jd(_[0] - m) < Hd ? w : M) : w <= _[1] && _[1] <= M : A > Gd ^ (m <= _[0] && _[0] <= x)) {
                    var N = kr(d, (-p + y) / v);
                    return Er(N, h), [_, Ar(N)]
                }
            }
        }

        function r(n, e) {
            var r = a ? t : Gd - t, i = 0;
            return n < -r ? i |= 1 : n > r && (i |= 2), e < -r ? i |= 4 : e > r && (i |= 8), i
        }

        var i = np(t), o = 6 * Qd, a = i > 0, u = Jd(i) > Hd;
        return di(n, function (t) {
            var i, o, f, c, s;
            return {
                lineStart: function () {
                    c = f = !1, s = 1
                }, point: function (l, h) {
                    var d, p = [l, h], v = n(l, h), g = a ? v ? 0 : r(l, h) : v ? r(l + (l < 0 ? Gd : -Gd), h) : 0;
                    if (!i && (c = f = v) && t.lineStart(), v !== f && (!(d = e(i, p)) || fi(i, d) || fi(p, d)) && (p[0] += Hd, p[1] += Hd, v = n(p[0], p[1])), v !== f) s = 0, v ? (t.lineStart(), d = e(p, i), t.point(d[0], d[1])) : (d = e(i, p), t.point(d[0], d[1]), t.lineEnd()), i = d; else if (u && i && a ^ v) {
                        var y;
                        g & o || !(y = e(p, i, !0)) || (s = 0, a ? (t.lineStart(), t.point(y[0][0], y[0][1]), t.point(y[1][0], y[1][1]), t.lineEnd()) : (t.point(y[1][0], y[1][1]), t.lineEnd(), t.lineStart(), t.point(y[0][0], y[0][1])))
                    }
                    !v || i && fi(i, p) || t.point(p[0], p[1]), i = p, f = v, o = g
                }, lineEnd: function () {
                    f && t.lineEnd(), i = null
                }, clean: function () {
                    return s | (c && f) << 1
                }
            }
        }, function (n, e, r, i) {
            oi(i, t, o, r, n, e)
        }, a ? [0, -t] : [-Gd, t - Gd])
    }

    function yi(t, n, e, r) {
        function i(i, o) {
            return t <= i && i <= e && n <= o && o <= r
        }

        function o(i, o, u, c) {
            var s = 0, l = 0;
            if (null == i || (s = a(i, u)) !== (l = a(o, u)) || f(i, o) < 0 ^ u > 0) do {
                c.point(0 === s || 3 === s ? t : e, s > 1 ? r : n)
            } while ((s = (s + u + 4) % 4) !== l); else c.point(o[0], o[1])
        }

        function a(r, i) {
            return Jd(r[0] - t) < Hd ? i > 0 ? 0 : 3 : Jd(r[0] - e) < Hd ? i > 0 ? 2 : 1 : Jd(r[1] - n) < Hd ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
        }

        function u(t, n) {
            return f(t.x, n.x)
        }

        function f(t, n) {
            var e = a(t, 1), r = a(n, 1);
            return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
        }

        return function (a) {
            function f(t, n) {
                i(t, n) && w.point(t, n)
            }

            function c(o, a) {
                var u = i(o, a);
                if (l && h.push([o, a]), m) d = o, p = a, v = u, m = !1, u && (w.lineStart(), w.point(o, a)); else if (u && b) w.point(o, a); else {
                    var f = [g = Math.max(zp, Math.min(Pp, g)), _ = Math.max(zp, Math.min(Pp, _))],
                        c = [o = Math.max(zp, Math.min(Pp, o)), a = Math.max(zp, Math.min(Pp, a))];
                    !function (t, n, e, r, i, o) {
                        var a, u = t[0], f = t[1], c = 0, s = 1, l = n[0] - u, h = n[1] - f;
                        if (a = e - u, l || !(a > 0)) {
                            if (a /= l, l < 0) {
                                if (a < c) return;
                                a < s && (s = a)
                            } else if (l > 0) {
                                if (a > s) return;
                                a > c && (c = a)
                            }
                            if (a = i - u, l || !(a < 0)) {
                                if (a /= l, l < 0) {
                                    if (a > s) return;
                                    a > c && (c = a)
                                } else if (l > 0) {
                                    if (a < c) return;
                                    a < s && (s = a)
                                }
                                if (a = r - f, h || !(a > 0)) {
                                    if (a /= h, h < 0) {
                                        if (a < c) return;
                                        a < s && (s = a)
                                    } else if (h > 0) {
                                        if (a > s) return;
                                        a > c && (c = a)
                                    }
                                    if (a = o - f, h || !(a < 0)) {
                                        if (a /= h, h < 0) {
                                            if (a > s) return;
                                            a > c && (c = a)
                                        } else if (h > 0) {
                                            if (a < c) return;
                                            a < s && (s = a)
                                        }
                                        return c > 0 && (t[0] = u + c * l, t[1] = f + c * h), s < 1 && (n[0] = u + s * l, n[1] = f + s * h), !0
                                    }
                                }
                            }
                        }
                    }(f, c, t, n, e, r) ? u && (w.lineStart(), w.point(o, a), x = !1) : (b || (w.lineStart(), w.point(f[0], f[1])), w.point(c[0], c[1]), u || w.lineEnd(), x = !1)
                }
                g = o, _ = a, b = u
            }

            var s, l, h, d, p, v, g, _, b, m, x, w = a, M = ui(), A = {
                point: f, lineStart: function () {
                    A.point = c, l && l.push(h = []), m = !0, b = !1, g = _ = NaN
                }, lineEnd: function () {
                    s && (c(d, p), v && b && M.rejoin(), s.push(M.result())), A.point = f, b && w.lineEnd()
                }, polygonStart: function () {
                    w = M, s = [], l = [], x = !0
                }, polygonEnd: function () {
                    var n = function () {
                        for (var n = 0, e = 0, i = l.length; e < i; ++e) for (var o, a, u = l[e], f = 1, c = u.length, s = u[0], h = s[0], d = s[1]; f < c; ++f) o = h, a = d, h = (s = u[f])[0], d = s[1], a <= r ? d > r && (h - o) * (r - a) > (d - a) * (t - o) && ++n : d <= r && (h - o) * (r - a) < (d - a) * (t - o) && --n;
                        return n
                    }(), e = x && n, i = (s = y(s)).length;
                    (e || i) && (a.polygonStart(), e && (a.lineStart(), o(null, null, 1, a), a.lineEnd()), i && si(s, u, n, o, a), a.polygonEnd()), w = a, s = l = h = null
                }
            };
            return A
        }
    }

    function _i() {
        Lp.point = Lp.lineEnd = vr
    }

    function bi(t, n) {
        _p = t *= Qd, bp = ap(n *= Qd), mp = np(n), Lp.point = mi
    }

    function mi(t, n) {
        t *= Qd;
        var e = ap(n *= Qd), r = np(n), i = Jd(t - _p), o = np(i), a = r * ap(i), u = mp * e - bp * r * o,
            f = bp * e + mp * r * o;
        Rp.add(tp(fp(a * a + u * u), f)), _p = t, bp = e, mp = r
    }

    function xi(t) {
        return Rp.reset(), br(t, Lp), +Rp
    }

    function wi(t, n) {
        return Dp[0] = t, Dp[1] = n, xi(Up)
    }

    function Mi(t, n) {
        return !(!t || !Op.hasOwnProperty(t.type)) && Op[t.type](t, n)
    }

    function Ai(t, n) {
        return 0 === wi(t, n)
    }

    function Ti(t, n) {
        var e = wi(t[0], t[1]);
        return wi(t[0], n) + wi(n, t[1]) <= e + Hd
    }

    function Ni(t, n) {
        return !!hi(t.map(Si), Ei(n))
    }

    function Si(t) {
        return (t = t.map(Ei)).pop(), t
    }

    function Ei(t) {
        return [t[0] * Qd, t[1] * Qd]
    }

    function ki(t, n, e) {
        var r = s(t, n - Hd, e).concat(n);
        return function (t) {
            return r.map(function (n) {
                return [t, n]
            })
        }
    }

    function Ci(t, n, e) {
        var r = s(t, n - Hd, e).concat(n);
        return function (t) {
            return r.map(function (n) {
                return [n, t]
            })
        }
    }

    function Pi() {
        function t() {
            return {type: "MultiLineString", coordinates: n()}
        }

        function n() {
            return s(ep(o / y) * y, i, y).map(d).concat(s(ep(c / _) * _, f, _).map(p)).concat(s(ep(r / v) * v, e, v).filter(function (t) {
                return Jd(t % y) > Hd
            }).map(l)).concat(s(ep(u / g) * g, a, g).filter(function (t) {
                return Jd(t % _) > Hd
            }).map(h))
        }

        var e, r, i, o, a, u, f, c, l, h, d, p, v = 10, g = v, y = 90, _ = 360, b = 2.5;
        return t.lines = function () {
            return n().map(function (t) {
                return {type: "LineString", coordinates: t}
            })
        }, t.outline = function () {
            return {
                type: "Polygon",
                coordinates: [d(o).concat(p(f).slice(1), d(i).reverse().slice(1), p(c).reverse().slice(1))]
            }
        }, t.extent = function (n) {
            return arguments.length ? t.extentMajor(n).extentMinor(n) : t.extentMinor()
        }, t.extentMajor = function (n) {
            return arguments.length ? (o = +n[0][0], i = +n[1][0], c = +n[0][1], f = +n[1][1], o > i && (n = o, o = i, i = n), c > f && (n = c, c = f, f = n), t.precision(b)) : [[o, c], [i, f]]
        }, t.extentMinor = function (n) {
            return arguments.length ? (r = +n[0][0], e = +n[1][0], u = +n[0][1], a = +n[1][1], r > e && (n = r, r = e, e = n), u > a && (n = u, u = a, a = n), t.precision(b)) : [[r, u], [e, a]]
        }, t.step = function (n) {
            return arguments.length ? t.stepMajor(n).stepMinor(n) : t.stepMinor()
        }, t.stepMajor = function (n) {
            return arguments.length ? (y = +n[0], _ = +n[1], t) : [y, _]
        }, t.stepMinor = function (n) {
            return arguments.length ? (v = +n[0], g = +n[1], t) : [v, g]
        }, t.precision = function (n) {
            return arguments.length ? (b = +n, l = ki(u, a, 90), h = Ci(r, e, b), d = ki(c, f, 90), p = Ci(o, i, b), t) : b
        }, t.extentMajor([[-180, -90 + Hd], [180, 90 - Hd]]).extentMinor([[-180, -80 - Hd], [180, 80 + Hd]])
    }

    function zi(t) {
        return t
    }

    function Ri() {
        Fp.point = Li
    }

    function Li(t, n) {
        Fp.point = Di, xp = Mp = t, wp = Ap = n
    }

    function Di(t, n) {
        Bp.add(Ap * t - Mp * n), Mp = t, Ap = n
    }

    function Ui() {
        Di(xp, wp)
    }

    function qi(t, n) {
        Vp += t, $p += n, ++Wp
    }

    function Oi() {
        ev.point = Yi
    }

    function Yi(t, n) {
        ev.point = Bi, qi(Sp = t, Ep = n)
    }

    function Bi(t, n) {
        var e = t - Sp, r = n - Ep, i = fp(e * e + r * r);
        Zp += i * (Sp + t) / 2, Qp += i * (Ep + n) / 2, Jp += i, qi(Sp = t, Ep = n)
    }

    function Fi() {
        ev.point = qi
    }

    function Ii() {
        ev.point = Hi
    }

    function ji() {
        Xi(Tp, Np)
    }

    function Hi(t, n) {
        ev.point = Xi, qi(Tp = Sp = t, Np = Ep = n)
    }

    function Xi(t, n) {
        var e = t - Sp, r = n - Ep, i = fp(e * e + r * r);
        Zp += i * (Sp + t) / 2, Qp += i * (Ep + n) / 2, Jp += i, Kp += (i = Ep * t - Sp * n) * (Sp + t), tv += i * (Ep + n), nv += 3 * i, qi(Sp = t, Ep = n)
    }

    function Gi(t) {
        this._context = t
    }

    function Vi(t, n) {
        cv.point = $i, iv = av = t, ov = uv = n
    }

    function $i(t, n) {
        av -= t, uv -= n, fv.add(fp(av * av + uv * uv)), av = t, uv = n
    }

    function Wi() {
        this._string = []
    }

    function Zi(t) {
        return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
    }

    function Qi(t) {
        return function (n) {
            var e = new Ji;
            for (var r in t) e[r] = t[r];
            return e.stream = n, e
        }
    }

    function Ji() {
    }

    function Ki(t, n, e) {
        var r = t.clipExtent && t.clipExtent();
        return t.scale(150).translate([0, 0]), null != r && t.clipExtent(null), br(e, t.stream(Gp)), n(Gp.result()), null != r && t.clipExtent(r), t
    }

    function to(t, n, e) {
        return Ki(t, function (e) {
            var r = n[1][0] - n[0][0], i = n[1][1] - n[0][1],
                o = Math.min(r / (e[1][0] - e[0][0]), i / (e[1][1] - e[0][1])),
                a = +n[0][0] + (r - o * (e[1][0] + e[0][0])) / 2, u = +n[0][1] + (i - o * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * o).translate([a, u])
        }, e)
    }

    function no(t, n, e) {
        return to(t, [[0, 0], n], e)
    }

    function eo(t, n, e) {
        return Ki(t, function (e) {
            var r = +n, i = r / (e[1][0] - e[0][0]), o = (r - i * (e[1][0] + e[0][0])) / 2, a = -i * e[0][1];
            t.scale(150 * i).translate([o, a])
        }, e)
    }

    function ro(t, n, e) {
        return Ki(t, function (e) {
            var r = +n, i = r / (e[1][1] - e[0][1]), o = -i * e[0][0], a = (r - i * (e[1][1] + e[0][1])) / 2;
            t.scale(150 * i).translate([o, a])
        }, e)
    }

    function io(t, n) {
        return +n ? function (t, n) {
            function e(r, i, o, a, u, f, c, s, l, h, d, p, v, g) {
                var y = c - r, _ = s - i, b = y * y + _ * _;
                if (b > 4 * n && v--) {
                    var m = a + h, x = u + d, w = f + p, M = fp(m * m + x * x + w * w), A = dr(w /= M),
                        T = Jd(Jd(w) - 1) < Hd || Jd(o - l) < Hd ? (o + l) / 2 : tp(x, m), N = t(T, A), S = N[0],
                        E = N[1], k = S - r, C = E - i, P = _ * k - y * C;
                    (P * P / b > n || Jd((y * k + _ * C) / b - .5) > .3 || a * h + u * d + f * p < lv) && (e(r, i, o, a, u, f, S, E, T, m /= M, x /= M, w, v, g), g.point(S, E), e(S, E, T, m, x, w, c, s, l, h, d, p, v, g))
                }
            }

            return function (n) {
                function r(e, r) {
                    e = t(e, r), n.point(e[0], e[1])
                }

                function i() {
                    y = NaN, w.point = o, n.lineStart()
                }

                function o(r, i) {
                    var o = Tr([r, i]), a = t(r, i);
                    e(y, _, g, b, m, x, y = a[0], _ = a[1], g = r, b = o[0], m = o[1], x = o[2], sv, n), n.point(y, _)
                }

                function a() {
                    w.point = r, n.lineEnd()
                }

                function u() {
                    i(), w.point = f, w.lineEnd = c
                }

                function f(t, n) {
                    o(s = t, n), l = y, h = _, d = b, p = m, v = x, w.point = o
                }

                function c() {
                    e(y, _, g, b, m, x, l, h, s, d, p, v, sv, n), w.lineEnd = a, a()
                }

                var s, l, h, d, p, v, g, y, _, b, m, x, w = {
                    point: r, lineStart: i, lineEnd: a, polygonStart: function () {
                        n.polygonStart(), w.lineStart = u
                    }, polygonEnd: function () {
                        n.polygonEnd(), w.lineStart = i
                    }
                };
                return w
            }
        }(t, n) : function (t) {
            return Qi({
                point: function (n, e) {
                    n = t(n, e), this.stream.point(n[0], n[1])
                }
            })
        }(t)
    }

    function oo(t, n, e, r) {
        function i(t, r) {
            return [u * t - f * r + n, e - f * t - u * r]
        }

        var o = np(r), a = ap(r), u = o * t, f = a * t, c = o / t, s = a / t, l = (a * e - o * n) / t,
            h = (a * n + o * e) / t;
        return i.invert = function (t, n) {
            return [c * t - s * n + l, h - s * t - c * n]
        }, i
    }

    function ao(t) {
        return uo(function () {
            return t
        })()
    }

    function uo(t) {
        function n(t) {
            return l(t[0] * Qd, t[1] * Qd)
        }

        function e() {
            var t = oo(p, 0, 0, w).apply(null, i(y, _)), n = (w ? oo : function (t, n, e) {
                function r(r, i) {
                    return [n + t * r, e - t * i]
                }

                return r.invert = function (r, i) {
                    return [(r - n) / t, (e - i) / t]
                }, r
            })(p, v - t[0], g - t[1], w);
            return o = ti(b, m, x), s = Jr(i, n), l = Jr(o, s), c = io(s, S), r()
        }

        function r() {
            return h = d = null, n
        }

        var i, o, a, u, f, c, s, l, h, d, p = 150, v = 480, g = 250, y = 0, _ = 0, b = 0, m = 0, x = 0, w = 0, M = null,
            A = Cp, T = null, N = zi, S = .5;
        return n.stream = function (t) {
            return h && d === t ? h : h = hv(function (t) {
                return Qi({
                    point: function (n, e) {
                        var r = t(n, e);
                        return this.stream.point(r[0], r[1])
                    }
                })
            }(o)(A(c(N(d = t)))))
        }, n.preclip = function (t) {
            return arguments.length ? (A = t, M = void 0, r()) : A
        }, n.postclip = function (t) {
            return arguments.length ? (N = t, T = a = u = f = null, r()) : N
        }, n.clipAngle = function (t) {
            return arguments.length ? (A = +t ? gi(M = t * Qd) : (M = null, Cp), r()) : M * Zd
        }, n.clipExtent = function (t) {
            return arguments.length ? (N = null == t ? (T = a = u = f = null, zi) : yi(T = +t[0][0], a = +t[0][1], u = +t[1][0], f = +t[1][1]), r()) : null == T ? null : [[T, a], [u, f]]
        }, n.scale = function (t) {
            return arguments.length ? (p = +t, e()) : p
        }, n.translate = function (t) {
            return arguments.length ? (v = +t[0], g = +t[1], e()) : [v, g]
        }, n.center = function (t) {
            return arguments.length ? (y = t[0] % 360 * Qd, _ = t[1] % 360 * Qd, e()) : [y * Zd, _ * Zd]
        }, n.rotate = function (t) {
            return arguments.length ? (b = t[0] % 360 * Qd, m = t[1] % 360 * Qd, x = t.length > 2 ? t[2] % 360 * Qd : 0, e()) : [b * Zd, m * Zd, x * Zd]
        }, n.angle = function (t) {
            return arguments.length ? (w = t % 360 * Qd, e()) : w * Zd
        }, n.precision = function (t) {
            return arguments.length ? (c = io(s, S = t * t), r()) : fp(S)
        }, n.fitExtent = function (t, e) {
            return to(n, t, e)
        }, n.fitSize = function (t, e) {
            return no(n, t, e)
        }, n.fitWidth = function (t, e) {
            return eo(n, t, e)
        }, n.fitHeight = function (t, e) {
            return ro(n, t, e)
        }, function () {
            return i = t.apply(this, arguments), n.invert = i.invert && function (t) {
                return (t = l.invert(t[0], t[1])) && [t[0] * Zd, t[1] * Zd]
            }, e()
        }
    }

    function fo(t) {
        var n = 0, e = Gd / 3, r = uo(t), i = r(n, e);
        return i.parallels = function (t) {
            return arguments.length ? r(n = t[0] * Qd, e = t[1] * Qd) : [n * Zd, e * Zd]
        }, i
    }

    function co(t, n) {
        function e(t, n) {
            var e = fp(o - 2 * i * ap(n)) / i;
            return [e * ap(t *= i), a - e * np(t)]
        }

        var r = ap(t), i = (r + ap(n)) / 2;
        if (Jd(i) < Hd) return function (t) {
            function n(t, n) {
                return [t * e, ap(n) / e]
            }

            var e = np(t);
            return n.invert = function (t, n) {
                return [t / e, dr(n * e)]
            }, n
        }(t);
        var o = 1 + r * (2 * i - r), a = fp(o) / i;
        return e.invert = function (t, n) {
            var e = a - n;
            return [tp(t, Jd(e)) / i * up(e), dr((o - (t * t + e * e) * i * i) / (2 * i))]
        }, e
    }

    function so() {
        return fo(co).scale(155.424).center([0, 33.6442])
    }

    function lo() {
        return so().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
    }

    function ho(t) {
        return function (n, e) {
            var r = np(n), i = np(e), o = t(r * i);
            return [o * i * ap(n), o * ap(e)]
        }
    }

    function po(t) {
        return function (n, e) {
            var r = fp(n * n + e * e), i = t(r), o = ap(i), a = np(i);
            return [tp(n * o, r * a), dr(r && e * o / r)]
        }
    }

    function vo(t, n) {
        return [t, ip(cp((Vd + n) / 2))]
    }

    function go(t) {
        function n() {
            var n = Gd * u(), a = o(ii(o.rotate()).invert([0, 0]));
            return c(null == s ? [[a[0] - n, a[1] - n], [a[0] + n, a[1] + n]] : t === vo ? [[Math.max(a[0] - n, s), e], [Math.min(a[0] + n, r), i]] : [[s, Math.max(a[1] - n, e)], [r, Math.min(a[1] + n, i)]])
        }

        var e, r, i, o = ao(t), a = o.center, u = o.scale, f = o.translate, c = o.clipExtent, s = null;
        return o.scale = function (t) {
            return arguments.length ? (u(t), n()) : u()
        }, o.translate = function (t) {
            return arguments.length ? (f(t), n()) : f()
        }, o.center = function (t) {
            return arguments.length ? (a(t), n()) : a()
        }, o.clipExtent = function (t) {
            return arguments.length ? (null == t ? s = e = r = i = null : (s = +t[0][0], e = +t[0][1], r = +t[1][0], i = +t[1][1]), n()) : null == s ? null : [[s, e], [r, i]]
        }, n()
    }

    function yo(t) {
        return cp((Vd + t) / 2)
    }

    function _o(t, n) {
        function e(t, n) {
            o > 0 ? n < -Vd + Hd && (n = -Vd + Hd) : n > Vd - Hd && (n = Vd - Hd);
            var e = o / op(yo(n), i);
            return [e * ap(i * t), o - e * np(i * t)]
        }

        var r = np(t), i = t === n ? ap(t) : ip(r / np(n)) / ip(yo(n) / yo(t)), o = r * op(yo(t), i) / i;
        return i ? (e.invert = function (t, n) {
            var e = o - n, r = up(i) * fp(t * t + e * e);
            return [tp(t, Jd(e)) / i * up(e), 2 * Kd(op(o / r, 1 / i)) - Vd]
        }, e) : vo
    }

    function bo(t, n) {
        return [t, n]
    }

    function mo(t, n) {
        function e(t, n) {
            var e = o - n, r = i * t;
            return [e * ap(r), o - e * np(r)]
        }

        var r = np(t), i = t === n ? ap(t) : (r - np(n)) / (n - t), o = r / i + t;
        return Jd(i) < Hd ? bo : (e.invert = function (t, n) {
            var e = o - n;
            return [tp(t, Jd(e)) / i * up(e), o - up(i) * fp(t * t + e * e)]
        }, e)
    }

    function xo(t, n) {
        var e = np(n), r = np(t) * e;
        return [e * ap(t) / r, ap(n) / r]
    }

    function wo(t, n, e, r) {
        return 1 === t && 1 === n && 0 === e && 0 === r ? zi : Qi({
            point: function (i, o) {
                this.stream.point(i * t + e, o * n + r)
            }
        })
    }

    function Mo(t, n) {
        var e = n * n, r = e * e;
        return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))]
    }

    function Ao(t, n) {
        return [np(n) * ap(t), ap(n)]
    }

    function To(t, n) {
        var e = np(n), r = 1 + np(t) * e;
        return [e * ap(t) / r, ap(n) / r]
    }

    function No(t, n) {
        return [ip(cp((Vd + n) / 2)), -t]
    }

    function So(t, n) {
        return t.parent === n.parent ? 1 : 2
    }

    function Eo(t, n) {
        return t + n.x
    }

    function ko(t, n) {
        return Math.max(t, n.y)
    }

    function Co(t) {
        var n = 0, e = t.children, r = e && e.length;
        if (r) for (; --r >= 0;) n += e[r].value; else n = 1;
        t.value = n
    }

    function Po(t, n) {
        var e, r, i, o, a, u = new Do(t), f = +t.value && (u.value = t.value), c = [u];
        for (null == n && (n = zo); e = c.pop();) if (f && (e.value = +e.data.value), (i = n(e.data)) && (a = i.length)) for (e.children = new Array(a), o = a - 1; o >= 0; --o) c.push(r = e.children[o] = new Do(i[o])), r.parent = e, r.depth = e.depth + 1;
        return u.eachBefore(Lo)
    }

    function zo(t) {
        return t.children
    }

    function Ro(t) {
        t.data = t.data.data
    }

    function Lo(t) {
        var n = 0;
        do {
            t.height = n
        } while ((t = t.parent) && t.height < ++n)
    }

    function Do(t) {
        this.data = t, this.depth = this.height = 0, this.parent = null
    }

    function Uo(t) {
        for (var n, e, r = 0, i = (t = function (t) {
            for (var n, e, r = t.length; r;) e = Math.random() * r-- | 0, n = t[r], t[r] = t[e], t[e] = n;
            return t
        }(vv.call(t))).length, o = []; r < i;) n = t[r], e && Oo(e, n) ? ++r : (e = function (t) {
            switch (t.length) {
                case 1:
                    return function (t) {
                        return {x: t.x, y: t.y, r: t.r}
                    }(t[0]);
                case 2:
                    return Bo(t[0], t[1]);
                case 3:
                    return Fo(t[0], t[1], t[2])
            }
        }(o = function (t, n) {
            var e, r;
            if (Yo(n, t)) return [n];
            for (e = 0; e < t.length; ++e) if (qo(n, t[e]) && Yo(Bo(t[e], n), t)) return [t[e], n];
            for (e = 0; e < t.length - 1; ++e) for (r = e + 1; r < t.length; ++r) if (qo(Bo(t[e], t[r]), n) && qo(Bo(t[e], n), t[r]) && qo(Bo(t[r], n), t[e]) && Yo(Fo(t[e], t[r], n), t)) return [t[e], t[r], n];
            throw new Error
        }(o, n)), r = 0);
        return e
    }

    function qo(t, n) {
        var e = t.r - n.r, r = n.x - t.x, i = n.y - t.y;
        return e < 0 || e * e < r * r + i * i
    }

    function Oo(t, n) {
        var e = t.r - n.r + 1e-6, r = n.x - t.x, i = n.y - t.y;
        return e > 0 && e * e > r * r + i * i
    }

    function Yo(t, n) {
        for (var e = 0; e < n.length; ++e) if (!Oo(t, n[e])) return !1;
        return !0
    }

    function Bo(t, n) {
        var e = t.x, r = t.y, i = t.r, o = n.x, a = n.y, u = n.r, f = o - e, c = a - r, s = u - i,
            l = Math.sqrt(f * f + c * c);
        return {x: (e + o + f / l * s) / 2, y: (r + a + c / l * s) / 2, r: (l + i + u) / 2}
    }

    function Fo(t, n, e) {
        var r = t.x, i = t.y, o = t.r, a = n.x, u = n.y, f = n.r, c = e.x, s = e.y, l = e.r, h = r - a, d = r - c,
            p = i - u, v = i - s, g = f - o, y = l - o, _ = r * r + i * i - o * o, b = _ - a * a - u * u + f * f,
            m = _ - c * c - s * s + l * l, x = d * p - h * v, w = (p * m - v * b) / (2 * x) - r,
            M = (v * g - p * y) / x, A = (d * b - h * m) / (2 * x) - i, T = (h * y - d * g) / x, N = M * M + T * T - 1,
            S = 2 * (o + w * M + A * T), E = w * w + A * A - o * o,
            k = -(N ? (S + Math.sqrt(S * S - 4 * N * E)) / (2 * N) : E / S);
        return {x: r + w + M * k, y: i + A + T * k, r: k}
    }

    function Io(t, n, e) {
        var r, i, o, a, u = t.x - n.x, f = t.y - n.y, c = u * u + f * f;
        c ? (i = n.r + e.r, i *= i, a = t.r + e.r, i > (a *= a) ? (r = (c + a - i) / (2 * c), o = Math.sqrt(Math.max(0, a / c - r * r)), e.x = t.x - r * u - o * f, e.y = t.y - r * f + o * u) : (r = (c + i - a) / (2 * c), o = Math.sqrt(Math.max(0, i / c - r * r)), e.x = n.x + r * u - o * f, e.y = n.y + r * f + o * u)) : (e.x = n.x + e.r, e.y = n.y)
    }

    function jo(t, n) {
        var e = t.r + n.r - 1e-6, r = n.x - t.x, i = n.y - t.y;
        return e > 0 && e * e > r * r + i * i
    }

    function Ho(t) {
        var n = t._, e = t.next._, r = n.r + e.r, i = (n.x * e.r + e.x * n.r) / r, o = (n.y * e.r + e.y * n.r) / r;
        return i * i + o * o
    }

    function Xo(t) {
        this._ = t, this.next = null, this.previous = null
    }

    function Go(t) {
        if (!(i = t.length)) return 0;
        var n, e, r, i, o, a, u, f, c, s, l;
        if (n = t[0], n.x = 0, n.y = 0, !(i > 1)) return n.r;
        if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(i > 2)) return n.r + e.r;
        Io(e, n, r = t[2]), n = new Xo(n), e = new Xo(e), r = new Xo(r), n.next = r.previous = e, e.next = n.previous = r, r.next = e.previous = n;
        t:for (u = 3; u < i; ++u) {
            Io(n._, e._, r = t[u]), r = new Xo(r), f = e.next, c = n.previous, s = e._.r, l = n._.r;
            do {
                if (s <= l) {
                    if (jo(f._, r._)) {
                        e = f, n.next = e, e.previous = n, --u;
                        continue t
                    }
                    s += f._.r, f = f.next
                } else {
                    if (jo(c._, r._)) {
                        (n = c).next = e, e.previous = n, --u;
                        continue t
                    }
                    l += c._.r, c = c.previous
                }
            } while (f !== c.next);
            for (r.previous = n, r.next = e, n.next = e.previous = e = r, o = Ho(n); (r = r.next) !== e;) (a = Ho(r)) < o && (n = r, o = a);
            e = n.next
        }
        for (n = [e._], r = e; (r = r.next) !== e;) n.push(r._);
        for (r = Uo(n), u = 0; u < i; ++u) n = t[u], n.x -= r.x, n.y -= r.y;
        return r.r
    }

    function Vo(t) {
        if ("function" != typeof t) throw new Error;
        return t
    }

    function $o() {
        return 0
    }

    function Wo(t) {
        return function () {
            return t
        }
    }

    function Zo(t) {
        return Math.sqrt(t.value)
    }

    function Qo(t) {
        return function (n) {
            n.children || (n.r = Math.max(0, +t(n) || 0))
        }
    }

    function Jo(t, n) {
        return function (e) {
            if (r = e.children) {
                var r, i, o, a = r.length, u = t(e) * n || 0;
                if (u) for (i = 0; i < a; ++i) r[i].r += u;
                if (o = Go(r), u) for (i = 0; i < a; ++i) r[i].r -= u;
                e.r = o + u
            }
        }
    }

    function Ko(t) {
        return function (n) {
            var e = n.parent;
            n.r *= t, e && (n.x = e.x + t * n.x, n.y = e.y + t * n.y)
        }
    }

    function ta(t) {
        t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
    }

    function na(t, n, e, r, i) {
        for (var o, a = t.children, u = -1, f = a.length, c = t.value && (r - n) / t.value; ++u < f;) (o = a[u]).y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * c
    }

    function ea(t) {
        return t.id
    }

    function ra(t) {
        return t.parentId
    }

    function ia(t, n) {
        return t.parent === n.parent ? 1 : 2
    }

    function oa(t) {
        var n = t.children;
        return n ? n[0] : t.t
    }

    function aa(t) {
        var n = t.children;
        return n ? n[n.length - 1] : t.t
    }

    function ua(t, n, e) {
        var r = e / (n.i - t.i);
        n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e
    }

    function fa(t, n, e) {
        return t.a.parent === n.parent ? t.a : e
    }

    function ca(t, n) {
        this._ = t, this.parent = null, this.children = null, this.A = null, this.a = this, this.z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
    }

    function sa(t, n, e, r, i) {
        for (var o, a = t.children, u = -1, f = a.length, c = t.value && (i - e) / t.value; ++u < f;) (o = a[u]).x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * c
    }

    function la(t, n, e, r, i, o) {
        for (var a, u, f, c, s, l, h, d, p, v, g, y = [], _ = n.children, b = 0, m = 0, x = _.length, w = n.value; b < x;) {
            f = i - e, c = o - r;
            do {
                s = _[m++].value
            } while (!s && m < x);
            for (l = h = s, g = s * s * (v = Math.max(c / f, f / c) / (w * t)), p = Math.max(h / g, g / l); m < x; ++m) {
                if (s += u = _[m].value, u < l && (l = u), u > h && (h = u), g = s * s * v, (d = Math.max(h / g, g / l)) > p) {
                    s -= u;
                    break
                }
                p = d
            }
            y.push(a = {
                value: s,
                dice: f < c,
                children: _.slice(b, m)
            }), a.dice ? na(a, e, r, i, w ? r += c * s / w : o) : sa(a, e, r, w ? e += f * s / w : i, o), w -= s, b = m
        }
        return y
    }

    function ha(t, n, e) {
        return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
    }

    function da(t, n) {
        return t[0] - n[0] || t[1] - n[1]
    }

    function pa(t) {
        for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; ++i) {
            for (; r > 1 && ha(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;) --r;
            e[r++] = i
        }
        return e.slice(0, r)
    }

    function va() {
        return Math.random()
    }

    function ga(t) {
        function n(n) {
            var o = n + "", a = e.get(o);
            if (!a) {
                if (i !== Pv) return i;
                e.set(o, a = r.push(n))
            }
            return t[(a - 1) % t.length]
        }

        var e = he(), r = [], i = Pv;
        return t = null == t ? [] : Cv.call(t), n.domain = function (t) {
            if (!arguments.length) return r.slice();
            r = [], e = he();
            for (var i, o, a = -1, u = t.length; ++a < u;) e.has(o = (i = t[a]) + "") || e.set(o, r.push(i));
            return n
        }, n.range = function (e) {
            return arguments.length ? (t = Cv.call(e), n) : t.slice()
        }, n.unknown = function (t) {
            return arguments.length ? (i = t, n) : i
        }, n.copy = function () {
            return ga().domain(r).range(t).unknown(i)
        }, n
    }

    function ya() {
        function t() {
            var t = i().length, r = a[1] < a[0], h = a[r - 0], d = a[1 - r];
            n = (d - h) / Math.max(1, t - f + 2 * c), u && (n = Math.floor(n)), h += (d - h - n * (t - f)) * l, e = n * (1 - f), u && (h = Math.round(h), e = Math.round(e));
            var p = s(t).map(function (t) {
                return h + n * t
            });
            return o(r ? p.reverse() : p)
        }

        var n, e, r = ga().unknown(void 0), i = r.domain, o = r.range, a = [0, 1], u = !1, f = 0, c = 0, l = .5;
        return delete r.unknown, r.domain = function (n) {
            return arguments.length ? (i(n), t()) : i()
        }, r.range = function (n) {
            return arguments.length ? (a = [+n[0], +n[1]], t()) : a.slice()
        }, r.rangeRound = function (n) {
            return a = [+n[0], +n[1]], u = !0, t()
        }, r.bandwidth = function () {
            return e
        }, r.step = function () {
            return n
        }, r.round = function (n) {
            return arguments.length ? (u = !!n, t()) : u
        }, r.padding = function (n) {
            return arguments.length ? (f = c = Math.max(0, Math.min(1, n)), t()) : f
        }, r.paddingInner = function (n) {
            return arguments.length ? (f = Math.max(0, Math.min(1, n)), t()) : f
        }, r.paddingOuter = function (n) {
            return arguments.length ? (c = Math.max(0, Math.min(1, n)), t()) : c
        }, r.align = function (n) {
            return arguments.length ? (l = Math.max(0, Math.min(1, n)), t()) : l
        }, r.copy = function () {
            return ya().domain(i()).range(a).round(u).paddingInner(f).paddingOuter(c).align(l)
        }, t()
    }

    function _a(t) {
        var n = t.copy;
        return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function () {
            return _a(n())
        }, t
    }

    function ba(t) {
        return function () {
            return t
        }
    }

    function ma(t) {
        return +t
    }

    function xa(t, n) {
        return (n -= t = +t) ? function (e) {
            return (e - t) / n
        } : ba(n)
    }

    function wa(t, n, e, r) {
        var i = t[0], o = t[1], a = n[0], u = n[1];
        return o < i ? (i = e(o, i), a = r(u, a)) : (i = e(i, o), a = r(a, u)), function (t) {
            return a(i(t))
        }
    }

    function Ma(t, n, e, r) {
        var i = Math.min(t.length, n.length) - 1, o = new Array(i), a = new Array(i), u = -1;
        for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++u < i;) o[u] = e(t[u], t[u + 1]), a[u] = r(n[u], n[u + 1]);
        return function (n) {
            var e = Kc(t, n, 1, i) - 1;
            return a[e](o[e](n))
        }
    }

    function Aa(t, n) {
        return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
    }

    function Ta(t, n) {
        function e() {
            return i = Math.min(u.length, f.length) > 2 ? Ma : wa, o = a = null, r
        }

        function r(n) {
            return (o || (o = i(u, f, s ? function (t) {
                return function (n, e) {
                    var r = t(n = +n, e = +e);
                    return function (t) {
                        return t <= n ? 0 : t >= e ? 1 : r(t)
                    }
                }
            }(t) : t, c)))(+n)
        }

        var i, o, a, u = zv, f = zv, c = dn, s = !1;
        return r.invert = function (t) {
            return (a || (a = i(f, u, xa, s ? function (t) {
                return function (n, e) {
                    var r = t(n = +n, e = +e);
                    return function (t) {
                        return t <= 0 ? n : t >= 1 ? e : r(t)
                    }
                }
            }(n) : n)))(+t)
        }, r.domain = function (t) {
            return arguments.length ? (u = kv.call(t, ma), e()) : u.slice()
        }, r.range = function (t) {
            return arguments.length ? (f = Cv.call(t), e()) : f.slice()
        }, r.rangeRound = function (t) {
            return f = Cv.call(t), c = pn, e()
        }, r.clamp = function (t) {
            return arguments.length ? (s = !!t, e()) : s
        }, r.interpolate = function (t) {
            return arguments.length ? (c = t, e()) : c
        }, e()
    }

    function Na(n) {
        var e = n.domain;
        return n.ticks = function (t) {
            var n = e();
            return l(n[0], n[n.length - 1], null == t ? 10 : t)
        }, n.tickFormat = function (n, r) {
            return function (n, e, r) {
                var i, o = n[0], a = n[n.length - 1], u = d(o, a, null == e ? 10 : e);
                switch ((r = tr(null == r ? ",f" : r)).type) {
                    case"s":
                        var f = Math.max(Math.abs(o), Math.abs(a));
                        return null != r.precision || isNaN(i = ur(u, f)) || (r.precision = i), t.formatPrefix(r, f);
                    case"":
                    case"e":
                    case"g":
                    case"p":
                    case"r":
                        null != r.precision || isNaN(i = fr(u, Math.max(Math.abs(o), Math.abs(a)))) || (r.precision = i - ("e" === r.type));
                        break;
                    case"f":
                    case"%":
                        null != r.precision || isNaN(i = ar(u)) || (r.precision = i - 2 * ("%" === r.type))
                }
                return t.format(r)
            }(e(), n, r)
        }, n.nice = function (t) {
            null == t && (t = 10);
            var r, i = e(), o = 0, a = i.length - 1, u = i[o], f = i[a];
            return f < u && (r = u, u = f, f = r, r = o, o = a, a = r), (r = h(u, f, t)) > 0 ? r = h(u = Math.floor(u / r) * r, f = Math.ceil(f / r) * r, t) : r < 0 && (r = h(u = Math.ceil(u * r) / r, f = Math.floor(f * r) / r, t)), r > 0 ? (i[o] = Math.floor(u / r) * r, i[a] = Math.ceil(f / r) * r, e(i)) : r < 0 && (i[o] = Math.ceil(u * r) / r, i[a] = Math.floor(f * r) / r, e(i)), n
        }, n
    }

    function Sa() {
        var t = Ta(xa, sn);
        return t.copy = function () {
            return Aa(t, Sa())
        }, Na(t)
    }

    function Ea() {
        function t(t) {
            return +t
        }

        var n = [0, 1];
        return t.invert = t, t.domain = t.range = function (e) {
            return arguments.length ? (n = kv.call(e, ma), t) : n.slice()
        }, t.copy = function () {
            return Ea().domain(n)
        }, Na(t)
    }

    function ka(t, n) {
        var e, r = 0, i = (t = t.slice()).length - 1, o = t[r], a = t[i];
        return a < o && (e = r, r = i, i = e, e = o, o = a, a = e), t[r] = n.floor(o), t[i] = n.ceil(a), t
    }

    function Ca(t, n) {
        return (n = Math.log(n / t)) ? function (e) {
            return Math.log(e / t) / n
        } : ba(n)
    }

    function Pa(t, n) {
        return t < 0 ? function (e) {
            return -Math.pow(-n, e) * Math.pow(-t, 1 - e)
        } : function (e) {
            return Math.pow(n, e) * Math.pow(t, 1 - e)
        }
    }

    function za(t) {
        return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
    }

    function Ra(t) {
        return 10 === t ? za : t === Math.E ? Math.exp : function (n) {
            return Math.pow(t, n)
        }
    }

    function La(t) {
        return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function (n) {
            return Math.log(n) / t
        })
    }

    function Da(t) {
        return function (n) {
            return -t(-n)
        }
    }

    function Ua() {
        function n() {
            return o = La(i), a = Ra(i), r()[0] < 0 && (o = Da(o), a = Da(a)), e
        }

        var e = Ta(Ca, Pa).domain([1, 10]), r = e.domain, i = 10, o = La(10), a = Ra(10);
        return e.base = function (t) {
            return arguments.length ? (i = +t, n()) : i
        }, e.domain = function (t) {
            return arguments.length ? (r(t), n()) : r()
        }, e.ticks = function (t) {
            var n, e = r(), u = e[0], f = e[e.length - 1];
            (n = f < u) && (d = u, u = f, f = d);
            var c, s, h, d = o(u), p = o(f), v = null == t ? 10 : +t, g = [];
            if (!(i % 1) && p - d < v) {
                if (d = Math.round(d) - 1, p = Math.round(p) + 1, u > 0) {
                    for (; d < p; ++d) for (s = 1, c = a(d); s < i; ++s) if (!((h = c * s) < u)) {
                        if (h > f) break;
                        g.push(h)
                    }
                } else for (; d < p; ++d) for (s = i - 1, c = a(d); s >= 1; --s) if (!((h = c * s) < u)) {
                    if (h > f) break;
                    g.push(h)
                }
            } else g = l(d, p, Math.min(p - d, v)).map(a);
            return n ? g.reverse() : g
        }, e.tickFormat = function (n, r) {
            if (null == r && (r = 10 === i ? ".0e" : ","), "function" != typeof r && (r = t.format(r)), n === 1 / 0) return r;
            null == n && (n = 10);
            var u = Math.max(1, i * n / e.ticks().length);
            return function (t) {
                var n = t / a(Math.round(o(t)));
                return n * i < i - .5 && (n *= i), n <= u ? r(t) : ""
            }
        }, e.nice = function () {
            return r(ka(r(), {
                floor: function (t) {
                    return a(Math.floor(o(t)))
                }, ceil: function (t) {
                    return a(Math.ceil(o(t)))
                }
            }))
        }, e.copy = function () {
            return Aa(e, Ua().base(i))
        }, e
    }

    function qa(t, n) {
        return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
    }

    function Oa() {
        var t = 1, n = Ta(function (n, e) {
            return (e = qa(e, t) - (n = qa(n, t))) ? function (r) {
                return (qa(r, t) - n) / e
            } : ba(e)
        }, function (n, e) {
            return e = qa(e, t) - (n = qa(n, t)), function (r) {
                return qa(n + e * r, 1 / t)
            }
        }), e = n.domain;
        return n.exponent = function (n) {
            return arguments.length ? (t = +n, e(e())) : t
        }, n.copy = function () {
            return Aa(n, Oa().exponent(t))
        }, Na(n)
    }

    function Ya() {
        function t() {
            var t = 0, n = Math.max(1, i.length);
            for (o = new Array(n - 1); ++t < n;) o[t - 1] = v(r, t / n);
            return e
        }

        function e(t) {
            if (!isNaN(t = +t)) return i[Kc(o, t)]
        }

        var r = [], i = [], o = [];
        return e.invertExtent = function (t) {
            var n = i.indexOf(t);
            return n < 0 ? [NaN, NaN] : [n > 0 ? o[n - 1] : r[0], n < o.length ? o[n] : r[r.length - 1]]
        }, e.domain = function (e) {
            if (!arguments.length) return r.slice();
            r = [];
            for (var i, o = 0, a = e.length; o < a; ++o) null == (i = e[o]) || isNaN(i = +i) || r.push(i);
            return r.sort(n), t()
        }, e.range = function (n) {
            return arguments.length ? (i = Cv.call(n), t()) : i.slice()
        }, e.quantiles = function () {
            return o.slice()
        }, e.copy = function () {
            return Ya().domain(r).range(i)
        }, e
    }

    function Ba() {
        function t(t) {
            if (t <= t) return a[Kc(o, t, 0, i)]
        }

        function n() {
            var n = -1;
            for (o = new Array(i); ++n < i;) o[n] = ((n + 1) * r - (n - i) * e) / (i + 1);
            return t
        }

        var e = 0, r = 1, i = 1, o = [.5], a = [0, 1];
        return t.domain = function (t) {
            return arguments.length ? (e = +t[0], r = +t[1], n()) : [e, r]
        }, t.range = function (t) {
            return arguments.length ? (i = (a = Cv.call(t)).length - 1, n()) : a.slice()
        }, t.invertExtent = function (t) {
            var n = a.indexOf(t);
            return n < 0 ? [NaN, NaN] : n < 1 ? [e, o[0]] : n >= i ? [o[i - 1], r] : [o[n - 1], o[n]]
        }, t.copy = function () {
            return Ba().domain([e, r]).range(a)
        }, Na(t)
    }

    function Fa() {
        function t(t) {
            if (t <= t) return e[Kc(n, t, 0, r)]
        }

        var n = [.5], e = [0, 1], r = 1;
        return t.domain = function (i) {
            return arguments.length ? (n = Cv.call(i), r = Math.min(n.length, e.length - 1), t) : n.slice()
        }, t.range = function (i) {
            return arguments.length ? (e = Cv.call(i), r = Math.min(n.length, e.length - 1), t) : e.slice()
        }, t.invertExtent = function (t) {
            var r = e.indexOf(t);
            return [n[r - 1], n[r]]
        }, t.copy = function () {
            return Fa().domain(n).range(e)
        }, t
    }

    function Ia(t, n, e, r) {
        function i(n) {
            return t(n = new Date(+n)), n
        }

        return i.floor = i, i.ceil = function (e) {
            return t(e = new Date(e - 1)), n(e, 1), t(e), e
        }, i.round = function (t) {
            var n = i(t), e = i.ceil(t);
            return t - n < e - t ? n : e
        }, i.offset = function (t, e) {
            return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
        }, i.range = function (e, r, o) {
            var a, u = [];
            if (e = i.ceil(e), o = null == o ? 1 : Math.floor(o), !(e < r && o > 0)) return u;
            do {
                u.push(a = new Date(+e)), n(e, o), t(e)
            } while (a < e && e < r);
            return u
        }, i.filter = function (e) {
            return Ia(function (n) {
                if (n >= n) for (; t(n), !e(n);) n.setTime(n - 1)
            }, function (t, r) {
                if (t >= t) if (r < 0) for (; ++r <= 0;) for (; n(t, -1), !e(t);) ; else for (; --r >= 0;) for (; n(t, 1), !e(t);) ;
            })
        }, e && (i.count = function (n, r) {
            return Rv.setTime(+n), Lv.setTime(+r), t(Rv), t(Lv), Math.floor(e(Rv, Lv))
        }, i.every = function (t) {
            return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (n) {
                return r(n) % t == 0
            } : function (n) {
                return i.count(0, n) % t == 0
            }) : i : null
        }), i
    }

    function ja(t) {
        return Ia(function (n) {
            n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setDate(t.getDate() + 7 * n)
        }, function (t, n) {
            return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * qv) / Ov
        })
    }

    function Ha(t) {
        return Ia(function (n) {
            n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setUTCDate(t.getUTCDate() + 7 * n)
        }, function (t, n) {
            return (n - t) / Ov
        })
    }

    function Xa(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
            return n.setFullYear(t.y), n
        }
        return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
    }

    function Ga(t) {
        if (0 <= t.y && t.y < 100) {
            var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
            return n.setUTCFullYear(t.y), n
        }
        return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
    }

    function Va(t) {
        return {y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0}
    }

    function $a(t) {
        function n(t, n) {
            return function (e) {
                var r, i, o, a = [], u = -1, f = 0, c = t.length;
                for (e instanceof Date || (e = new Date(+e)); ++u < c;) 37 === t.charCodeAt(u) && (a.push(t.slice(f, u)), null != (i = Ug[r = t.charAt(++u)]) ? r = t.charAt(++u) : i = "e" === r ? " " : "0", (o = n[r]) && (r = o(e, i)), a.push(r), f = u + 1);
                return a.push(t.slice(f, u)), a.join("")
            }
        }

        function e(t, n) {
            return function (e) {
                var i, o, a = Va(1900);
                if (r(a, t, e += "", 0) != e.length) return null;
                if ("Q" in a) return new Date(a.Q);
                if ("p" in a && (a.H = a.H % 12 + 12 * a.p), "V" in a) {
                    if (a.V < 1 || a.V > 53) return null;
                    "w" in a || (a.w = 1), "Z" in a ? (i = (o = (i = Ga(Va(a.y))).getUTCDay()) > 4 || 0 === o ? _g.ceil(i) : _g(i), i = vg.offset(i, 7 * (a.V - 1)), a.y = i.getUTCFullYear(), a.m = i.getUTCMonth(), a.d = i.getUTCDate() + (a.w + 6) % 7) : (i = (o = (i = n(Va(a.y))).getDay()) > 4 || 0 === o ? $v.ceil(i) : $v(i), i = Xv.offset(i, 7 * (a.V - 1)), a.y = i.getFullYear(), a.m = i.getMonth(), a.d = i.getDate() + (a.w + 6) % 7)
                } else ("W" in a || "U" in a) && ("w" in a || (a.w = "u" in a ? a.u % 7 : "W" in a ? 1 : 0), o = "Z" in a ? Ga(Va(a.y)).getUTCDay() : n(Va(a.y)).getDay(), a.m = 0, a.d = "W" in a ? (a.w + 6) % 7 + 7 * a.W - (o + 5) % 7 : a.w + 7 * a.U - (o + 6) % 7);
                return "Z" in a ? (a.H += a.Z / 100 | 0, a.M += a.Z % 100, Ga(a)) : n(a)
            }
        }

        function r(t, n, e, r) {
            for (var i, o, a = 0, u = n.length, f = e.length; a < u;) {
                if (r >= f) return -1;
                if (37 === (i = n.charCodeAt(a++))) {
                    if (i = n.charAt(a++), !(o = A[i in Ug ? n.charAt(a++) : i]) || (r = o(t, e, r)) < 0) return -1
                } else if (i != e.charCodeAt(r++)) return -1
            }
            return r
        }

        var i = t.dateTime, o = t.date, a = t.time, u = t.periods, f = t.days, c = t.shortDays, s = t.months,
            l = t.shortMonths, h = Qa(u), d = Ja(u), p = Qa(f), v = Ja(f), g = Qa(c), y = Ja(c), _ = Qa(s), b = Ja(s),
            m = Qa(l), x = Ja(l), w = {
                a: function (t) {
                    return c[t.getDay()]
                }, A: function (t) {
                    return f[t.getDay()]
                }, b: function (t) {
                    return l[t.getMonth()]
                }, B: function (t) {
                    return s[t.getMonth()]
                }, c: null, d: _u, e: _u, f: Mu, H: bu, I: mu, j: xu, L: wu, m: Au, M: Tu, p: function (t) {
                    return u[+(t.getHours() >= 12)]
                }, Q: Ku, s: tf, S: Nu, u: Su, U: Eu, V: ku, w: Cu, W: Pu, x: null, X: null, y: zu, Y: Ru, Z: Lu, "%": Ju
            }, M = {
                a: function (t) {
                    return c[t.getUTCDay()]
                }, A: function (t) {
                    return f[t.getUTCDay()]
                }, b: function (t) {
                    return l[t.getUTCMonth()]
                }, B: function (t) {
                    return s[t.getUTCMonth()]
                }, c: null, d: Du, e: Du, f: Bu, H: Uu, I: qu, j: Ou, L: Yu, m: Fu, M: Iu, p: function (t) {
                    return u[+(t.getUTCHours() >= 12)]
                }, Q: Ku, s: tf, S: ju, u: Hu, U: Xu, V: Gu, w: Vu, W: $u, x: null, X: null, y: Wu, Y: Zu, Z: Qu, "%": Ju
            }, A = {
                a: function (t, n, e) {
                    var r = g.exec(n.slice(e));
                    return r ? (t.w = y[r[0].toLowerCase()], e + r[0].length) : -1
                }, A: function (t, n, e) {
                    var r = p.exec(n.slice(e));
                    return r ? (t.w = v[r[0].toLowerCase()], e + r[0].length) : -1
                }, b: function (t, n, e) {
                    var r = m.exec(n.slice(e));
                    return r ? (t.m = x[r[0].toLowerCase()], e + r[0].length) : -1
                }, B: function (t, n, e) {
                    var r = _.exec(n.slice(e));
                    return r ? (t.m = b[r[0].toLowerCase()], e + r[0].length) : -1
                }, c: function (t, n, e) {
                    return r(t, i, n, e)
                }, d: fu, e: fu, f: pu, H: su, I: su, j: cu, L: du, m: uu, M: lu, p: function (t, n, e) {
                    var r = h.exec(n.slice(e));
                    return r ? (t.p = d[r[0].toLowerCase()], e + r[0].length) : -1
                }, Q: gu, s: yu, S: hu, u: tu, U: nu, V: eu, w: Ka, W: ru, x: function (t, n, e) {
                    return r(t, o, n, e)
                }, X: function (t, n, e) {
                    return r(t, a, n, e)
                }, y: ou, Y: iu, Z: au, "%": vu
            };
        return w.x = n(o, w), w.X = n(a, w), w.c = n(i, w), M.x = n(o, M), M.X = n(a, M), M.c = n(i, M), {
            format: function (t) {
                var e = n(t += "", w);
                return e.toString = function () {
                    return t
                }, e
            }, parse: function (t) {
                var n = e(t += "", Xa);
                return n.toString = function () {
                    return t
                }, n
            }, utcFormat: function (t) {
                var e = n(t += "", M);
                return e.toString = function () {
                    return t
                }, e
            }, utcParse: function (t) {
                var n = e(t, Ga);
                return n.toString = function () {
                    return t
                }, n
            }
        }
    }

    function Wa(t, n, e) {
        var r = t < 0 ? "-" : "", i = (r ? -t : t) + "", o = i.length;
        return r + (o < e ? new Array(e - o + 1).join(n) + i : i)
    }

    function Za(t) {
        return t.replace(Yg, "\\$&")
    }

    function Qa(t) {
        return new RegExp("^(?:" + t.map(Za).join("|") + ")", "i")
    }

    function Ja(t) {
        for (var n = {}, e = -1, r = t.length; ++e < r;) n[t[e].toLowerCase()] = e;
        return n
    }

    function Ka(t, n, e) {
        var r = qg.exec(n.slice(e, e + 1));
        return r ? (t.w = +r[0], e + r[0].length) : -1
    }

    function tu(t, n, e) {
        var r = qg.exec(n.slice(e, e + 1));
        return r ? (t.u = +r[0], e + r[0].length) : -1
    }

    function nu(t, n, e) {
        var r = qg.exec(n.slice(e, e + 2));
        return r ? (t.U = +r[0], e + r[0].length) : -1
    }

    function eu(t, n, e) {
        var r = qg.exec(n.slice(e, e + 2));
        return r ? (t.V = +r[0], e + r[0].length) : -1
    }

    function ru(t, n, e) {
        var r = qg.exec(n.slice(e, e + 2));
        return r ? (t.W = +r[0], e + r[0].length) : -1
    }

    function iu(t, n, e) {
        var r = qg.exec(n.slice(e, e + 4));
        return r ? (t.y = +r[0], e + r[0].length) : -1
    }

    function ou(t, n, e) {
        var r = qg.exec(n.slice(e, e + 2));
        return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
    }

    function au(t, n, e) {
        var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
        return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
    }

    function uu(t, n, e) {
        var r = qg.exec(n.slice(e, e + 2));
        return r ? (t.m = r[0] - 1, e + r[0].length) : -1
    }

    function fu(t, n, e) {
        var r = qg.exec(n.slice(e, e + 2));
        return r ? (t.d = +r[0], e + r[0].length) : -1
    }

    function cu(t, n, e) {
        var r = qg.exec(n.slice(e, e + 3));
        return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
    }

    function su(t, n, e) {
        var r = qg.exec(n.slice(e, e + 2));
        return r ? (t.H = +r[0], e + r[0].length) : -1
    }

    function lu(t, n, e) {
        var r = qg.exec(n.slice(e, e + 2));
        return r ? (t.M = +r[0], e + r[0].length) : -1
    }

    function hu(t, n, e) {
        var r = qg.exec(n.slice(e, e + 2));
        return r ? (t.S = +r[0], e + r[0].length) : -1
    }

    function du(t, n, e) {
        var r = qg.exec(n.slice(e, e + 3));
        return r ? (t.L = +r[0], e + r[0].length) : -1
    }

    function pu(t, n, e) {
        var r = qg.exec(n.slice(e, e + 6));
        return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1
    }

    function vu(t, n, e) {
        var r = Og.exec(n.slice(e, e + 1));
        return r ? e + r[0].length : -1
    }

    function gu(t, n, e) {
        var r = qg.exec(n.slice(e));
        return r ? (t.Q = +r[0], e + r[0].length) : -1
    }

    function yu(t, n, e) {
        var r = qg.exec(n.slice(e));
        return r ? (t.Q = 1e3 * +r[0], e + r[0].length) : -1
    }

    function _u(t, n) {
        return Wa(t.getDate(), n, 2)
    }

    function bu(t, n) {
        return Wa(t.getHours(), n, 2)
    }

    function mu(t, n) {
        return Wa(t.getHours() % 12 || 12, n, 2)
    }

    function xu(t, n) {
        return Wa(1 + Xv.count(cg(t), t), n, 3)
    }

    function wu(t, n) {
        return Wa(t.getMilliseconds(), n, 3)
    }

    function Mu(t, n) {
        return wu(t, n) + "000"
    }

    function Au(t, n) {
        return Wa(t.getMonth() + 1, n, 2)
    }

    function Tu(t, n) {
        return Wa(t.getMinutes(), n, 2)
    }

    function Nu(t, n) {
        return Wa(t.getSeconds(), n, 2)
    }

    function Su(t) {
        var n = t.getDay();
        return 0 === n ? 7 : n
    }

    function Eu(t, n) {
        return Wa(Vv.count(cg(t), t), n, 2)
    }

    function ku(t, n) {
        var e = t.getDay();
        return t = e >= 4 || 0 === e ? Qv(t) : Qv.ceil(t), Wa(Qv.count(cg(t), t) + (4 === cg(t).getDay()), n, 2)
    }

    function Cu(t) {
        return t.getDay()
    }

    function Pu(t, n) {
        return Wa($v.count(cg(t), t), n, 2)
    }

    function zu(t, n) {
        return Wa(t.getFullYear() % 100, n, 2)
    }

    function Ru(t, n) {
        return Wa(t.getFullYear() % 1e4, n, 4)
    }

    function Lu(t) {
        var n = t.getTimezoneOffset();
        return (n > 0 ? "-" : (n *= -1, "+")) + Wa(n / 60 | 0, "0", 2) + Wa(n % 60, "0", 2)
    }

    function Du(t, n) {
        return Wa(t.getUTCDate(), n, 2)
    }

    function Uu(t, n) {
        return Wa(t.getUTCHours(), n, 2)
    }

    function qu(t, n) {
        return Wa(t.getUTCHours() % 12 || 12, n, 2)
    }

    function Ou(t, n) {
        return Wa(1 + vg.count(Rg(t), t), n, 3)
    }

    function Yu(t, n) {
        return Wa(t.getUTCMilliseconds(), n, 3)
    }

    function Bu(t, n) {
        return Yu(t, n) + "000"
    }

    function Fu(t, n) {
        return Wa(t.getUTCMonth() + 1, n, 2)
    }

    function Iu(t, n) {
        return Wa(t.getUTCMinutes(), n, 2)
    }

    function ju(t, n) {
        return Wa(t.getUTCSeconds(), n, 2)
    }

    function Hu(t) {
        var n = t.getUTCDay();
        return 0 === n ? 7 : n
    }

    function Xu(t, n) {
        return Wa(yg.count(Rg(t), t), n, 2)
    }

    function Gu(t, n) {
        var e = t.getUTCDay();
        return t = e >= 4 || 0 === e ? xg(t) : xg.ceil(t), Wa(xg.count(Rg(t), t) + (4 === Rg(t).getUTCDay()), n, 2)
    }

    function Vu(t) {
        return t.getUTCDay()
    }

    function $u(t, n) {
        return Wa(_g.count(Rg(t), t), n, 2)
    }

    function Wu(t, n) {
        return Wa(t.getUTCFullYear() % 100, n, 2)
    }

    function Zu(t, n) {
        return Wa(t.getUTCFullYear() % 1e4, n, 4)
    }

    function Qu() {
        return "+0000"
    }

    function Ju() {
        return "%"
    }

    function Ku(t) {
        return +t
    }

    function tf(t) {
        return Math.floor(+t / 1e3)
    }

    function nf(n) {
        return Lg = $a(n), t.timeFormat = Lg.format, t.timeParse = Lg.parse, t.utcFormat = Lg.utcFormat, t.utcParse = Lg.utcParse, Lg
    }

    function ef(t) {
        return new Date(t)
    }

    function rf(t) {
        return t instanceof Date ? +t : +new Date(+t)
    }

    function of(t, n, r, i, o, a, u, f, c) {
        function s(e) {
            return (u(e) < e ? g : a(e) < e ? y : o(e) < e ? _ : i(e) < e ? b : n(e) < e ? r(e) < e ? m : x : t(e) < e ? w : M)(e)
        }

        function l(n, r, i, o) {
            if (null == n && (n = 10), "number" == typeof n) {
                var a = Math.abs(i - r) / n, u = e(function (t) {
                    return t[2]
                }).right(A, a);
                u === A.length ? (o = d(r / Wg, i / Wg, n), n = t) : u ? (o = (u = A[a / A[u - 1][2] < A[u][2] / a ? u - 1 : u])[1], n = u[0]) : (o = Math.max(d(r, i, n), 1), n = f)
            }
            return null == o ? n : n.every(o)
        }

        var h = Ta(xa, sn), p = h.invert, v = h.domain, g = c(".%L"), y = c(":%S"), _ = c("%I:%M"), b = c("%I %p"),
            m = c("%a %d"), x = c("%b %d"), w = c("%B"), M = c("%Y"),
            A = [[u, 1, jg], [u, 5, 5 * jg], [u, 15, 15 * jg], [u, 30, 30 * jg], [a, 1, Hg], [a, 5, 5 * Hg], [a, 15, 15 * Hg], [a, 30, 30 * Hg], [o, 1, Xg], [o, 3, 3 * Xg], [o, 6, 6 * Xg], [o, 12, 12 * Xg], [i, 1, Gg], [i, 2, 2 * Gg], [r, 1, Vg], [n, 1, $g], [n, 3, 3 * $g], [t, 1, Wg]];
        return h.invert = function (t) {
            return new Date(p(t))
        }, h.domain = function (t) {
            return arguments.length ? v(kv.call(t, rf)) : v().map(ef)
        }, h.ticks = function (t, n) {
            var e, r = v(), i = r[0], o = r[r.length - 1], a = o < i;
            return a && (e = i, i = o, o = e), e = l(t, i, o, n), e = e ? e.range(i, o + 1) : [], a ? e.reverse() : e
        }, h.tickFormat = function (t, n) {
            return null == n ? s : c(n)
        }, h.nice = function (t, n) {
            var e = v();
            return (t = l(t, e[0], e[e.length - 1], n)) ? v(ka(e, t)) : h
        }, h.copy = function () {
            return Aa(h, of(t, n, r, i, o, a, u, f, c))
        }, h
    }

    function af(t) {
        function n(n) {
            var r = (n - e) * i;
            return t(o ? Math.max(0, Math.min(1, r)) : r)
        }

        var e = 0, r = 1, i = 1, o = !1;
        return n.domain = function (t) {
            return arguments.length ? (e = +t[0], r = +t[1], i = e === r ? 0 : 1 / (r - e), n) : [e, r]
        }, n.clamp = function (t) {
            return arguments.length ? (o = !!t, n) : o
        }, n.interpolator = function (e) {
            return arguments.length ? (t = e, n) : t
        }, n.copy = function () {
            return af(t).domain([e, r]).clamp(o)
        }, Na(n)
    }

    function uf(t) {
        function n(n) {
            var e = .5 + ((n = +n) - r) * (n < r ? o : a);
            return t(u ? Math.max(0, Math.min(1, e)) : e)
        }

        var e = 0, r = .5, i = 1, o = 1, a = 1, u = !1;
        return n.domain = function (t) {
            return arguments.length ? (e = +t[0], r = +t[1], i = +t[2], o = e === r ? 0 : .5 / (r - e), a = r === i ? 0 : .5 / (i - r), n) : [e, r, i]
        }, n.clamp = function (t) {
            return arguments.length ? (u = !!t, n) : u
        }, n.interpolator = function (e) {
            return arguments.length ? (t = e, n) : t
        }, n.copy = function () {
            return uf(t).domain([e, r, i]).clamp(u)
        }, Na(n)
    }

    function ff(t) {
        for (var n = t.length / 6 | 0, e = new Array(n), r = 0; r < n;) e[r] = "#" + t.slice(6 * r, 6 * ++r);
        return e
    }

    function cf(t) {
        return il(t[t.length - 1])
    }

    function sf(t) {
        var n = t.length;
        return function (e) {
            return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))]
        }
    }

    function lf(t) {
        return function () {
            return t
        }
    }

    function hf(t) {
        return t >= 1 ? T_ : t <= -1 ? -T_ : Math.asin(t)
    }

    function df(t) {
        return t.innerRadius
    }

    function pf(t) {
        return t.outerRadius
    }

    function vf(t) {
        return t.startAngle
    }

    function gf(t) {
        return t.endAngle
    }

    function yf(t) {
        return t && t.padAngle
    }

    function _f(t, n, e, r, i, o, a) {
        var u = t - e, f = n - r, c = (a ? o : -o) / w_(u * u + f * f), s = c * f, l = -c * u, h = t + s, d = n + l,
            p = e + s, v = r + l, g = (h + p) / 2, y = (d + v) / 2, _ = p - h, b = v - d, m = _ * _ + b * b, x = i - o,
            w = h * v - p * d, M = (b < 0 ? -1 : 1) * w_(b_(0, x * x * m - w * w)), A = (w * b - _ * M) / m,
            T = (-w * _ - b * M) / m, N = (w * b + _ * M) / m, S = (-w * _ + b * M) / m, E = A - g, k = T - y,
            C = N - g, P = S - y;
        return E * E + k * k > C * C + P * P && (A = N, T = S), {
            cx: A,
            cy: T,
            x01: -s,
            y01: -l,
            x11: A * (i / x - 1),
            y11: T * (i / x - 1)
        }
    }

    function bf(t) {
        this._context = t
    }

    function mf(t) {
        return new bf(t)
    }

    function xf(t) {
        return t[0]
    }

    function wf(t) {
        return t[1]
    }

    function Mf() {
        function t(t) {
            var u, f, c, s = t.length, l = !1;
            for (null == i && (a = o(c = oe())), u = 0; u <= s; ++u) !(u < s && r(f = t[u], u, t)) === l && ((l = !l) ? a.lineStart() : a.lineEnd()), l && a.point(+n(f, u, t), +e(f, u, t));
            if (c) return a = null, c + "" || null
        }

        var n = xf, e = wf, r = lf(!0), i = null, o = mf, a = null;
        return t.x = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : lf(+e), t) : n
        }, t.y = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : lf(+n), t) : e
        }, t.defined = function (n) {
            return arguments.length ? (r = "function" == typeof n ? n : lf(!!n), t) : r
        }, t.curve = function (n) {
            return arguments.length ? (o = n, null != i && (a = o(i)), t) : o
        }, t.context = function (n) {
            return arguments.length ? (null == n ? i = a = null : a = o(i = n), t) : i
        }, t
    }

    function Af() {
        function t(t) {
            var n, s, l, h, d, p = t.length, v = !1, g = new Array(p), y = new Array(p);
            for (null == u && (c = f(d = oe())), n = 0; n <= p; ++n) {
                if (!(n < p && a(h = t[n], n, t)) === v) if (v = !v) s = n, c.areaStart(), c.lineStart(); else {
                    for (c.lineEnd(), c.lineStart(), l = n - 1; l >= s; --l) c.point(g[l], y[l]);
                    c.lineEnd(), c.areaEnd()
                }
                v && (g[n] = +e(h, n, t), y[n] = +i(h, n, t), c.point(r ? +r(h, n, t) : g[n], o ? +o(h, n, t) : y[n]))
            }
            if (d) return c = null, d + "" || null
        }

        function n() {
            return Mf().defined(a).curve(f).context(u)
        }

        var e = xf, r = null, i = lf(0), o = wf, a = lf(!0), u = null, f = mf, c = null;
        return t.x = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : lf(+n), r = null, t) : e
        }, t.x0 = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : lf(+n), t) : e
        }, t.x1 = function (n) {
            return arguments.length ? (r = null == n ? null : "function" == typeof n ? n : lf(+n), t) : r
        }, t.y = function (n) {
            return arguments.length ? (i = "function" == typeof n ? n : lf(+n), o = null, t) : i
        }, t.y0 = function (n) {
            return arguments.length ? (i = "function" == typeof n ? n : lf(+n), t) : i
        }, t.y1 = function (n) {
            return arguments.length ? (o = null == n ? null : "function" == typeof n ? n : lf(+n), t) : o
        }, t.lineX0 = t.lineY0 = function () {
            return n().x(e).y(i)
        }, t.lineY1 = function () {
            return n().x(e).y(o)
        }, t.lineX1 = function () {
            return n().x(r).y(i)
        }, t.defined = function (n) {
            return arguments.length ? (a = "function" == typeof n ? n : lf(!!n), t) : a
        }, t.curve = function (n) {
            return arguments.length ? (f = n, null != u && (c = f(u)), t) : f
        }, t.context = function (n) {
            return arguments.length ? (null == n ? u = c = null : c = f(u = n), t) : u
        }, t
    }

    function Tf(t, n) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
    }

    function Nf(t) {
        return t
    }

    function Sf(t) {
        this._curve = t
    }

    function Ef(t) {
        function n(n) {
            return new Sf(t(n))
        }

        return n._curve = t, n
    }

    function kf(t) {
        var n = t.curve;
        return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function (t) {
            return arguments.length ? n(Ef(t)) : n()._curve
        }, t
    }

    function Cf() {
        return kf(Mf().curve(S_))
    }

    function Pf() {
        var t = Af().curve(S_), n = t.curve, e = t.lineX0, r = t.lineX1, i = t.lineY0, o = t.lineY1;
        return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function () {
            return kf(e())
        }, delete t.lineX0, t.lineEndAngle = function () {
            return kf(r())
        }, delete t.lineX1, t.lineInnerRadius = function () {
            return kf(i())
        }, delete t.lineY0, t.lineOuterRadius = function () {
            return kf(o())
        }, delete t.lineY1, t.curve = function (t) {
            return arguments.length ? n(Ef(t)) : n()._curve
        }, t
    }

    function zf(t, n) {
        return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)]
    }

    function Rf(t) {
        return t.source
    }

    function Lf(t) {
        return t.target
    }

    function Df(t) {
        function n() {
            var n, u = E_.call(arguments), f = e.apply(this, u), c = r.apply(this, u);
            if (a || (a = n = oe()), t(a, +i.apply(this, (u[0] = f, u)), +o.apply(this, u), +i.apply(this, (u[0] = c, u)), +o.apply(this, u)), n) return a = null, n + "" || null
        }

        var e = Rf, r = Lf, i = xf, o = wf, a = null;
        return n.source = function (t) {
            return arguments.length ? (e = t, n) : e
        }, n.target = function (t) {
            return arguments.length ? (r = t, n) : r
        }, n.x = function (t) {
            return arguments.length ? (i = "function" == typeof t ? t : lf(+t), n) : i
        }, n.y = function (t) {
            return arguments.length ? (o = "function" == typeof t ? t : lf(+t), n) : o
        }, n.context = function (t) {
            return arguments.length ? (a = null == t ? null : t, n) : a
        }, n
    }

    function Uf(t, n, e, r, i) {
        t.moveTo(n, e), t.bezierCurveTo(n = (n + r) / 2, e, n, i, r, i)
    }

    function qf(t, n, e, r, i) {
        t.moveTo(n, e), t.bezierCurveTo(n, e = (e + i) / 2, r, e, r, i)
    }

    function Of(t, n, e, r, i) {
        var o = zf(n, e), a = zf(n, e = (e + i) / 2), u = zf(r, e), f = zf(r, i);
        t.moveTo(o[0], o[1]), t.bezierCurveTo(a[0], a[1], u[0], u[1], f[0], f[1])
    }

    function Yf() {
    }

    function Bf(t, n, e) {
        t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
    }

    function Ff(t) {
        this._context = t
    }

    function If(t) {
        this._context = t
    }

    function jf(t) {
        this._context = t
    }

    function Hf(t, n) {
        this._basis = new Ff(t), this._beta = n
    }

    function Xf(t, n, e) {
        t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
    }

    function Gf(t, n) {
        this._context = t, this._k = (1 - n) / 6
    }

    function Vf(t, n) {
        this._context = t, this._k = (1 - n) / 6
    }

    function $f(t, n) {
        this._context = t, this._k = (1 - n) / 6
    }

    function Wf(t, n, e) {
        var r = t._x1, i = t._y1, o = t._x2, a = t._y2;
        if (t._l01_a > M_) {
            var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, f = 3 * t._l01_a * (t._l01_a + t._l12_a);
            r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / f, i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / f
        }
        if (t._l23_a > M_) {
            var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, s = 3 * t._l23_a * (t._l23_a + t._l12_a);
            o = (o * c + t._x1 * t._l23_2a - n * t._l12_2a) / s, a = (a * c + t._y1 * t._l23_2a - e * t._l12_2a) / s
        }
        t._context.bezierCurveTo(r, i, o, a, t._x2, t._y2)
    }

    function Zf(t, n) {
        this._context = t, this._alpha = n
    }

    function Qf(t, n) {
        this._context = t, this._alpha = n
    }

    function Jf(t, n) {
        this._context = t, this._alpha = n
    }

    function Kf(t) {
        this._context = t
    }

    function tc(t) {
        return t < 0 ? -1 : 1
    }

    function nc(t, n, e) {
        var r = t._x1 - t._x0, i = n - t._x1, o = (t._y1 - t._y0) / (r || i < 0 && -0),
            a = (e - t._y1) / (i || r < 0 && -0), u = (o * i + a * r) / (r + i);
        return (tc(o) + tc(a)) * Math.min(Math.abs(o), Math.abs(a), .5 * Math.abs(u)) || 0
    }

    function ec(t, n) {
        var e = t._x1 - t._x0;
        return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
    }

    function rc(t, n, e) {
        var r = t._x0, i = t._y0, o = t._x1, a = t._y1, u = (o - r) / 3;
        t._context.bezierCurveTo(r + u, i + u * n, o - u, a - u * e, o, a)
    }

    function ic(t) {
        this._context = t
    }

    function oc(t) {
        this._context = new ac(t)
    }

    function ac(t) {
        this._context = t
    }

    function uc(t) {
        this._context = t
    }

    function fc(t) {
        var n, e, r = t.length - 1, i = new Array(r), o = new Array(r), a = new Array(r);
        for (i[0] = 0, o[0] = 2, a[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1, o[n] = 4, a[n] = 4 * t[n] + 2 * t[n + 1];
        for (i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / o[n - 1], o[n] -= e, a[n] -= e * a[n - 1];
        for (i[r - 1] = a[r - 1] / o[r - 1], n = r - 2; n >= 0; --n) i[n] = (a[n] - i[n + 1]) / o[n];
        for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) o[n] = 2 * t[n + 1] - i[n + 1];
        return [i, o]
    }

    function cc(t, n) {
        this._context = t, this._t = n
    }

    function sc(t, n) {
        if ((i = t.length) > 1) for (var e, r, i, o = 1, a = t[n[0]], u = a.length; o < i; ++o) for (r = a, a = t[n[o]], e = 0; e < u; ++e) a[e][1] += a[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
    }

    function lc(t) {
        for (var n = t.length, e = new Array(n); --n >= 0;) e[n] = n;
        return e
    }

    function hc(t, n) {
        return t[n]
    }

    function dc(t) {
        var n = t.map(pc);
        return lc(t).sort(function (t, e) {
            return n[t] - n[e]
        })
    }

    function pc(t) {
        for (var n, e = 0, r = -1, i = t.length; ++r < i;) (n = +t[r][1]) && (e += n);
        return e
    }

    function vc(t) {
        return function () {
            return t
        }
    }

    function gc(t) {
        return t[0]
    }

    function yc(t) {
        return t[1]
    }

    function _c() {
        this._ = null
    }

    function bc(t) {
        t.U = t.C = t.L = t.R = t.P = t.N = null
    }

    function mc(t, n) {
        var e = n, r = n.R, i = e.U;
        i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
    }

    function xc(t, n) {
        var e = n, r = n.L, i = e.U;
        i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
    }

    function wc(t) {
        for (; t.L;) t = t.L;
        return t
    }

    function Mc(t, n, e, r) {
        var i = [null, null], o = rb.push(i) - 1;
        return i.left = t, i.right = n, e && Tc(i, t, n, e), r && Tc(i, n, t, r), nb[t.index].halfedges.push(o), nb[n.index].halfedges.push(o), i
    }

    function Ac(t, n, e) {
        var r = [n, e];
        return r.left = t, r
    }

    function Tc(t, n, e, r) {
        t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r, t.left = n, t.right = e)
    }

    function Nc(t, n, e, r, i) {
        var o, a = t[0], u = t[1], f = a[0], c = a[1], s = 0, l = 1, h = u[0] - f, d = u[1] - c;
        if (o = n - f, h || !(o > 0)) {
            if (o /= h, h < 0) {
                if (o < s) return;
                o < l && (l = o)
            } else if (h > 0) {
                if (o > l) return;
                o > s && (s = o)
            }
            if (o = r - f, h || !(o < 0)) {
                if (o /= h, h < 0) {
                    if (o > l) return;
                    o > s && (s = o)
                } else if (h > 0) {
                    if (o < s) return;
                    o < l && (l = o)
                }
                if (o = e - c, d || !(o > 0)) {
                    if (o /= d, d < 0) {
                        if (o < s) return;
                        o < l && (l = o)
                    } else if (d > 0) {
                        if (o > l) return;
                        o > s && (s = o)
                    }
                    if (o = i - c, d || !(o < 0)) {
                        if (o /= d, d < 0) {
                            if (o > l) return;
                            o > s && (s = o)
                        } else if (d > 0) {
                            if (o < s) return;
                            o < l && (l = o)
                        }
                        return !(s > 0 || l < 1) || (s > 0 && (t[0] = [f + s * h, c + s * d]), l < 1 && (t[1] = [f + l * h, c + l * d]), !0)
                    }
                }
            }
        }
    }

    function Sc(t, n, e, r, i) {
        var o = t[1];
        if (o) return !0;
        var a, u, f = t[0], c = t.left, s = t.right, l = c[0], h = c[1], d = s[0], p = s[1], v = (l + d) / 2,
            g = (h + p) / 2;
        if (p === h) {
            if (v < n || v >= r) return;
            if (l > d) {
                if (f) {
                    if (f[1] >= i) return
                } else f = [v, e];
                o = [v, i]
            } else {
                if (f) {
                    if (f[1] < e) return
                } else f = [v, i];
                o = [v, e]
            }
        } else if (a = (l - d) / (p - h), u = g - a * v, a < -1 || a > 1) if (l > d) {
            if (f) {
                if (f[1] >= i) return
            } else f = [(e - u) / a, e];
            o = [(i - u) / a, i]
        } else {
            if (f) {
                if (f[1] < e) return
            } else f = [(i - u) / a, i];
            o = [(e - u) / a, e]
        } else if (h < p) {
            if (f) {
                if (f[0] >= r) return
            } else f = [n, a * n + u];
            o = [r, a * r + u]
        } else {
            if (f) {
                if (f[0] < n) return
            } else f = [r, a * r + u];
            o = [n, a * n + u]
        }
        return t[0] = f, t[1] = o, !0
    }

    function Ec(t, n) {
        var e = t.site, r = n.left, i = n.right;
        return e === i && (i = r, r = e), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]))
    }

    function kc(t, n) {
        return n[+(n.left !== t.site)]
    }

    function Cc(t, n) {
        return n[+(n.left === t.site)]
    }

    function Pc(t) {
        var n = t.P, e = t.N;
        if (n && e) {
            var r = n.site, i = t.site, o = e.site;
            if (r !== o) {
                var a = i[0], u = i[1], f = r[0] - a, c = r[1] - u, s = o[0] - a, l = o[1] - u, h = 2 * (f * l - c * s);
                if (!(h >= -ub)) {
                    var d = f * f + c * c, p = s * s + l * l, v = (l * d - c * p) / h, g = (f * p - s * d) / h,
                        y = ib.pop() || new function () {
                            bc(this), this.x = this.y = this.arc = this.site = this.cy = null
                        };
                    y.arc = t, y.site = i, y.x = v + a, y.y = (y.cy = g + u) + Math.sqrt(v * v + g * g), t.circle = y;
                    for (var _ = null, b = eb._; b;) if (y.y < b.y || y.y === b.y && y.x <= b.x) {
                        if (!b.L) {
                            _ = b.P;
                            break
                        }
                        b = b.L
                    } else {
                        if (!b.R) {
                            _ = b;
                            break
                        }
                        b = b.R
                    }
                    eb.insert(_, y), _ || (K_ = y)
                }
            }
        }
    }

    function zc(t) {
        var n = t.circle;
        n && (n.P || (K_ = n.N), eb.remove(n), ib.push(n), bc(n), t.circle = null)
    }

    function Rc(t) {
        var n = ob.pop() || new function () {
            bc(this), this.edge = this.site = this.circle = null
        };
        return n.site = t, n
    }

    function Lc(t) {
        zc(t), tb.remove(t), ob.push(t), bc(t)
    }

    function Dc(t) {
        var n = t.circle, e = n.x, r = n.cy, i = [e, r], o = t.P, a = t.N, u = [t];
        Lc(t);
        for (var f = o; f.circle && Math.abs(e - f.circle.x) < ab && Math.abs(r - f.circle.cy) < ab;) o = f.P, u.unshift(f), Lc(f), f = o;
        u.unshift(f), zc(f);
        for (var c = a; c.circle && Math.abs(e - c.circle.x) < ab && Math.abs(r - c.circle.cy) < ab;) a = c.N, u.push(c), Lc(c), c = a;
        u.push(c), zc(c);
        var s, l = u.length;
        for (s = 1; s < l; ++s) c = u[s], f = u[s - 1], Tc(c.edge, f.site, c.site, i);
        f = u[0], (c = u[l - 1]).edge = Mc(f.site, c.site, null, i), Pc(f), Pc(c)
    }

    function Uc(t) {
        for (var n, e, r, i, o = t[0], a = t[1], u = tb._; u;) if ((r = qc(u, a) - o) > ab) u = u.L; else {
            if (!((i = o - function (t, n) {
                var e = t.N;
                if (e) return qc(e, n);
                var r = t.site;
                return r[1] === n ? r[0] : 1 / 0
            }(u, a)) > ab)) {
                r > -ab ? (n = u.P, e = u) : i > -ab ? (n = u, e = u.N) : n = e = u;
                break
            }
            if (!u.R) {
                n = u;
                break
            }
            u = u.R
        }
        (function (t) {
            nb[t.index] = {site: t, halfedges: []}
        })(t);
        var f = Rc(t);
        if (tb.insert(n, f), n || e) {
            if (n === e) return zc(n), e = Rc(n.site), tb.insert(f, e), f.edge = e.edge = Mc(n.site, f.site), Pc(n), void Pc(e);
            if (e) {
                zc(n), zc(e);
                var c = n.site, s = c[0], l = c[1], h = t[0] - s, d = t[1] - l, p = e.site, v = p[0] - s, g = p[1] - l,
                    y = 2 * (h * g - d * v), _ = h * h + d * d, b = v * v + g * g,
                    m = [(g * _ - d * b) / y + s, (h * b - v * _) / y + l];
                Tc(e.edge, c, p, m), f.edge = Mc(c, t, null, m), e.edge = Mc(t, p, null, m), Pc(n), Pc(e)
            } else f.edge = Mc(n.site, f.site)
        }
    }

    function qc(t, n) {
        var e = t.site, r = e[0], i = e[1], o = i - n;
        if (!o) return r;
        var a = t.P;
        if (!a) return -1 / 0;
        var u = (e = a.site)[0], f = e[1], c = f - n;
        if (!c) return u;
        var s = u - r, l = 1 / o - 1 / c, h = s / c;
        return l ? (-h + Math.sqrt(h * h - 2 * l * (s * s / (-2 * c) - f + c / 2 + i - o / 2))) / l + r : (r + u) / 2
    }

    function Oc(t, n, e) {
        return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1])
    }

    function Yc(t, n) {
        return n[1] - t[1] || n[0] - t[0]
    }

    function Bc(t, n) {
        var e, r, i, o = t.sort(Yc).pop();
        for (rb = [], nb = new Array(t.length), tb = new _c, eb = new _c; ;) if (i = K_, o && (!i || o[1] < i.y || o[1] === i.y && o[0] < i.x)) o[0] === e && o[1] === r || (Uc(o), e = o[0], r = o[1]), o = t.pop(); else {
            if (!i) break;
            Dc(i.arc)
        }
        if (function () {
            for (var t, n, e, r, i = 0, o = nb.length; i < o; ++i) if ((t = nb[i]) && (r = (n = t.halfedges).length)) {
                var a = new Array(r), u = new Array(r);
                for (e = 0; e < r; ++e) a[e] = e, u[e] = Ec(t, rb[n[e]]);
                for (a.sort(function (t, n) {
                    return u[n] - u[t]
                }), e = 0; e < r; ++e) u[e] = n[a[e]];
                for (e = 0; e < r; ++e) n[e] = u[e]
            }
        }(), n) {
            var a = +n[0][0], u = +n[0][1], f = +n[1][0], c = +n[1][1];
            (function (t, n, e, r) {
                for (var i, o = rb.length; o--;) Sc(i = rb[o], t, n, e, r) && Nc(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > ab || Math.abs(i[0][1] - i[1][1]) > ab) || delete rb[o]
            })(a, u, f, c), function (t, n, e, r) {
                var i, o, a, u, f, c, s, l, h, d, p, v, g = nb.length, y = !0;
                for (i = 0; i < g; ++i) if (o = nb[i]) {
                    for (a = o.site, u = (f = o.halfedges).length; u--;) rb[f[u]] || f.splice(u, 1);
                    for (u = 0, c = f.length; u < c;) p = (d = Cc(o, rb[f[u]]))[0], v = d[1], l = (s = kc(o, rb[f[++u % c]]))[0], h = s[1], (Math.abs(p - l) > ab || Math.abs(v - h) > ab) && (f.splice(u, 0, rb.push(Ac(a, d, Math.abs(p - t) < ab && r - v > ab ? [t, Math.abs(l - t) < ab ? h : r] : Math.abs(v - r) < ab && e - p > ab ? [Math.abs(h - r) < ab ? l : e, r] : Math.abs(p - e) < ab && v - n > ab ? [e, Math.abs(l - e) < ab ? h : n] : Math.abs(v - n) < ab && p - t > ab ? [Math.abs(h - n) < ab ? l : t, n] : null)) - 1), ++c);
                    c && (y = !1)
                }
                if (y) {
                    var _, b, m, x = 1 / 0;
                    for (i = 0, y = null; i < g; ++i) (o = nb[i]) && (m = (_ = (a = o.site)[0] - t) * _ + (b = a[1] - n) * b) < x && (x = m, y = o);
                    if (y) {
                        var w = [t, n], M = [t, r], A = [e, r], T = [e, n];
                        y.halfedges.push(rb.push(Ac(a = y.site, w, M)) - 1, rb.push(Ac(a, M, A)) - 1, rb.push(Ac(a, A, T)) - 1, rb.push(Ac(a, T, w)) - 1)
                    }
                }
                for (i = 0; i < g; ++i) (o = nb[i]) && (o.halfedges.length || delete nb[i])
            }(a, u, f, c)
        }
        this.edges = rb, this.cells = nb, tb = eb = rb = nb = null
    }

    function Fc(t) {
        return function () {
            return t
        }
    }

    function Ic(t, n, e) {
        this.k = t, this.x = n, this.y = e
    }

    function jc(t) {
        return t.__zoom || fb
    }

    function Hc() {
        t.event.stopImmediatePropagation()
    }

    function Xc() {
        t.event.preventDefault(), t.event.stopImmediatePropagation()
    }

    function Gc() {
        return !t.event.button
    }

    function Vc() {
        var t, n, e = this;
        return e instanceof SVGElement ? (t = (e = e.ownerSVGElement || e).width.baseVal.value, n = e.height.baseVal.value) : (t = e.clientWidth, n = e.clientHeight), [[0, 0], [t, n]]
    }

    function $c() {
        return this.__zoom || fb
    }

    function Wc() {
        return -t.event.deltaY * (t.event.deltaMode ? 120 : 1) / 500
    }

    function Zc() {
        return "ontouchstart" in this
    }

    function Qc(t, n, e) {
        var r = t.invertX(n[0][0]) - e[0][0], i = t.invertX(n[1][0]) - e[1][0], o = t.invertY(n[0][1]) - e[0][1],
            a = t.invertY(n[1][1]) - e[1][1];
        return t.translate(i > r ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), a > o ? (o + a) / 2 : Math.min(0, o) || Math.max(0, a))
    }

    var Jc = e(n), Kc = Jc.right, ts = Jc.left, ns = Array.prototype, es = ns.slice, rs = ns.map, is = Math.sqrt(50),
        os = Math.sqrt(10), as = Math.sqrt(2), us = Array.prototype.slice, fs = 1, cs = 2, ss = 3, ls = 4, hs = 1e-6,
        ds = {
            value: function () {
            }
        };
    S.prototype = N.prototype = {
        constructor: S, on: function (t, n) {
            var e, r = this._, i = function (t, n) {
                return t.trim().split(/^|\s+/).map(function (t) {
                    var e = "", r = t.indexOf(".");
                    if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                    return {type: t, name: e}
                })
            }(t + "", r), o = -1, a = i.length;
            {
                if (!(arguments.length < 2)) {
                    if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                    for (; ++o < a;) if (e = (t = i[o]).type) r[e] = E(r[e], t.name, n); else if (null == n) for (e in r) r[e] = E(r[e], t.name, null);
                    return this
                }
                for (; ++o < a;) if ((e = (t = i[o]).type) && (e = function (t, n) {
                    for (var e, r = 0, i = t.length; r < i; ++r) if ((e = t[r]).name === n) return e.value
                }(r[e], t.name))) return e
            }
        }, copy: function () {
            var t = {}, n = this._;
            for (var e in n) t[e] = n[e].slice();
            return new S(t)
        }, call: function (t, n) {
            if ((e = arguments.length - 2) > 0) for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i)
        }, apply: function (t, n, e) {
            if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e)
        }
    };
    var ps = "http://www.w3.org/1999/xhtml", vs = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: ps,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    }, gs = function (t) {
        return function () {
            return this.matches(t)
        }
    };
    if ("undefined" != typeof document) {
        var ys = document.documentElement;
        if (!ys.matches) {
            var _s = ys.webkitMatchesSelector || ys.msMatchesSelector || ys.mozMatchesSelector || ys.oMatchesSelector;
            gs = function (t) {
                return function () {
                    return _s.call(this, t)
                }
            }
        }
    }
    var bs = gs;
    U.prototype = {
        constructor: U, appendChild: function (t) {
            return this._parent.insertBefore(t, this._next)
        }, insertBefore: function (t, n) {
            return this._parent.insertBefore(t, n)
        }, querySelector: function (t) {
            return this._parent.querySelector(t)
        }, querySelectorAll: function (t) {
            return this._parent.querySelectorAll(t)
        }
    };
    var ms = "$";
    H.prototype = {
        add: function (t) {
            this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
        }, remove: function (t) {
            var n = this._names.indexOf(t);
            n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
        }, contains: function (t) {
            return this._names.indexOf(t) >= 0
        }
    };
    var xs = {};
    if (t.event = null, "undefined" != typeof document) {
        "onmouseenter" in document.documentElement || (xs = {mouseenter: "mouseover", mouseleave: "mouseout"})
    }
    var ws = [null];
    ut.prototype = ft.prototype = {
        constructor: ut, select: function (t) {
            "function" != typeof t && (t = z(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) for (var o, a, u = n[i], f = u.length, c = r[i] = new Array(f), s = 0; s < f; ++s) (o = u[s]) && (a = t.call(o, o.__data__, s, u)) && ("__data__" in o && (a.__data__ = o.__data__), c[s] = a);
            return new ut(r, this._parents)
        }, selectAll: function (t) {
            "function" != typeof t && (t = L(t));
            for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o) for (var a, u = n[o], f = u.length, c = 0; c < f; ++c) (a = u[c]) && (r.push(t.call(a, a.__data__, c, u)), i.push(a));
            return new ut(r, i)
        }, filter: function (t) {
            "function" != typeof t && (t = bs(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) for (var o, a = n[i], u = a.length, f = r[i] = [], c = 0; c < u; ++c) (o = a[c]) && t.call(o, o.__data__, c, a) && f.push(o);
            return new ut(r, this._parents)
        }, data: function (t, n) {
            if (!t) return d = new Array(this.size()), c = -1, this.each(function (t) {
                d[++c] = t
            }), d;
            var e = n ? O : q, r = this._parents, i = this._groups;
            "function" != typeof t && (t = function (t) {
                return function () {
                    return t
                }
            }(t));
            for (var o = i.length, a = new Array(o), u = new Array(o), f = new Array(o), c = 0; c < o; ++c) {
                var s = r[c], l = i[c], h = l.length, d = t.call(s, s && s.__data__, c, r), p = d.length,
                    v = u[c] = new Array(p), g = a[c] = new Array(p);
                e(s, l, v, g, f[c] = new Array(h), d, n);
                for (var y, _, b = 0, m = 0; b < p; ++b) if (y = v[b]) {
                    for (b >= m && (m = b + 1); !(_ = g[m]) && ++m < p;) ;
                    y._next = _ || null
                }
            }
            return a = new ut(a, r), a._enter = u, a._exit = f, a
        }, enter: function () {
            return new ut(this._enter || this._groups.map(D), this._parents)
        }, exit: function () {
            return new ut(this._exit || this._groups.map(D), this._parents)
        }, merge: function (t) {
            for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u) for (var f, c = n[u], s = e[u], l = c.length, h = a[u] = new Array(l), d = 0; d < l; ++d) (f = c[d] || s[d]) && (h[d] = f);
            for (; u < r; ++u) a[u] = n[u];
            return new ut(a, this._parents)
        }, order: function () {
            for (var t = this._groups, n = -1, e = t.length; ++n < e;) for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0;) (r = i[o]) && (a && a !== r.nextSibling && a.parentNode.insertBefore(r, a), a = r);
            return this
        }, sort: function (t) {
            function n(n, e) {
                return n && e ? t(n.__data__, e.__data__) : !n - !e
            }

            t || (t = Y);
            for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
                for (var a, u = e[o], f = u.length, c = i[o] = new Array(f), s = 0; s < f; ++s) (a = u[s]) && (c[s] = a);
                c.sort(n)
            }
            return new ut(i, this._parents).order()
        }, call: function () {
            var t = arguments[0];
            return arguments[0] = this, t.apply(null, arguments), this
        }, nodes: function () {
            var t = new Array(this.size()), n = -1;
            return this.each(function () {
                t[++n] = this
            }), t
        }, node: function () {
            for (var t = this._groups, n = 0, e = t.length; n < e; ++n) for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
                var a = r[i];
                if (a) return a
            }
            return null
        }, size: function () {
            var t = 0;
            return this.each(function () {
                ++t
            }), t
        }, empty: function () {
            return !this.node()
        }, each: function (t) {
            for (var n = this._groups, e = 0, r = n.length; e < r; ++e) for (var i, o = n[e], a = 0, u = o.length; a < u; ++a) (i = o[a]) && t.call(i, i.__data__, a, o);
            return this
        }, attr: function (t, n) {
            var e = k(t);
            if (arguments.length < 2) {
                var r = this.node();
                return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
            }
            return this.each((null == n ? e.local ? function (t) {
                return function () {
                    this.removeAttributeNS(t.space, t.local)
                }
            } : function (t) {
                return function () {
                    this.removeAttribute(t)
                }
            } : "function" == typeof n ? e.local ? function (t, n) {
                return function () {
                    var e = n.apply(this, arguments);
                    null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                }
            } : function (t, n) {
                return function () {
                    var e = n.apply(this, arguments);
                    null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                }
            } : e.local ? function (t, n) {
                return function () {
                    this.setAttributeNS(t.space, t.local, n)
                }
            } : function (t, n) {
                return function () {
                    this.setAttribute(t, n)
                }
            })(e, n))
        }, style: function (t, n, e) {
            return arguments.length > 1 ? this.each((null == n ? function (t) {
                return function () {
                    this.style.removeProperty(t)
                }
            } : "function" == typeof n ? function (t, n, e) {
                return function () {
                    var r = n.apply(this, arguments);
                    null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
                }
            } : function (t, n, e) {
                return function () {
                    this.style.setProperty(t, n, e)
                }
            })(t, n, null == e ? "" : e)) : F(this.node(), t)
        }, property: function (t, n) {
            return arguments.length > 1 ? this.each((null == n ? function (t) {
                return function () {
                    delete this[t]
                }
            } : "function" == typeof n ? function (t, n) {
                return function () {
                    var e = n.apply(this, arguments);
                    null == e ? delete this[t] : this[t] = e
                }
            } : function (t, n) {
                return function () {
                    this[t] = n
                }
            })(t, n)) : this.node()[t]
        }, classed: function (t, n) {
            var e = I(t + "");
            if (arguments.length < 2) {
                for (var r = j(this.node()), i = -1, o = e.length; ++i < o;) if (!r.contains(e[i])) return !1;
                return !0
            }
            return this.each(("function" == typeof n ? function (t, n) {
                return function () {
                    (n.apply(this, arguments) ? X : G)(this, t)
                }
            } : n ? function (t) {
                return function () {
                    X(this, t)
                }
            } : function (t) {
                return function () {
                    G(this, t)
                }
            })(e, n))
        }, text: function (t) {
            return arguments.length ? this.each(null == t ? V : ("function" == typeof t ? function (t) {
                return function () {
                    var n = t.apply(this, arguments);
                    this.textContent = null == n ? "" : n
                }
            } : function (t) {
                return function () {
                    this.textContent = t
                }
            })(t)) : this.node().textContent
        }, html: function (t) {
            return arguments.length ? this.each(null == t ? $ : ("function" == typeof t ? function (t) {
                return function () {
                    var n = t.apply(this, arguments);
                    this.innerHTML = null == n ? "" : n
                }
            } : function (t) {
                return function () {
                    this.innerHTML = t
                }
            })(t)) : this.node().innerHTML
        }, raise: function () {
            return this.each(W)
        }, lower: function () {
            return this.each(Z)
        }, append: function (t) {
            var n = "function" == typeof t ? t : C(t);
            return this.select(function () {
                return this.appendChild(n.apply(this, arguments))
            })
        }, insert: function (t, n) {
            var e = "function" == typeof t ? t : C(t), r = null == n ? Q : "function" == typeof n ? n : z(n);
            return this.select(function () {
                return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
            })
        }, remove: function () {
            return this.each(J)
        }, clone: function (t) {
            return this.select(t ? tt : K)
        }, datum: function (t) {
            return arguments.length ? this.property("__data__", t) : this.node().__data__
        }, on: function (t, n, e) {
            var r, i, o = function (t) {
                return t.trim().split(/^|\s+/).map(function (t) {
                    var n = "", e = t.indexOf(".");
                    return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {type: t, name: n}
                })
            }(t + ""), a = o.length;
            if (!(arguments.length < 2)) {
                for (u = n ? it : rt, null == e && (e = !1), r = 0; r < a; ++r) this.each(u(o[r], n, e));
                return this
            }
            var u = this.node().__on;
            if (u) for (var f, c = 0, s = u.length; c < s; ++c) for (r = 0, f = u[c]; r < a; ++r) if ((i = o[r]).type === f.type && i.name === f.name) return f.value
        }, dispatch: function (t, n) {
            return this.each(("function" == typeof n ? function (t, n) {
                return function () {
                    return at(this, t, n.apply(this, arguments))
                }
            } : function (t, n) {
                return function () {
                    return at(this, t, n)
                }
            })(t, n))
        }
    };
    var Ms = 0;
    lt.prototype = st.prototype = {
        constructor: lt, get: function (t) {
            for (var n = this._; !(n in t);) if (!(t = t.parentNode)) return;
            return t[n]
        }, set: function (t, n) {
            return t[this._] = n
        }, remove: function (t) {
            return this._ in t && delete t[this._]
        }, toString: function () {
            return this._
        }
    }, xt.prototype.on = function () {
        var t = this._.on.apply(this._, arguments);
        return t === this._ ? this : t
    };
    var As = "\\s*([+-]?\\d+)\\s*", Ts = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        Ns = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ss = /^#([0-9a-f]{3})$/, Es = /^#([0-9a-f]{6})$/,
        ks = new RegExp("^rgb\\(" + [As, As, As] + "\\)$"), Cs = new RegExp("^rgb\\(" + [Ns, Ns, Ns] + "\\)$"),
        Ps = new RegExp("^rgba\\(" + [As, As, As, Ts] + "\\)$"),
        zs = new RegExp("^rgba\\(" + [Ns, Ns, Ns, Ts] + "\\)$"), Rs = new RegExp("^hsl\\(" + [Ts, Ns, Ns] + "\\)$"),
        Ls = new RegExp("^hsla\\(" + [Ts, Ns, Ns, Ts] + "\\)$"), Ds = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };
    Nt(Et, kt, {
        displayable: function () {
            return this.rgb().displayable()
        }, hex: function () {
            return this.rgb().hex()
        }, toString: function () {
            return this.rgb() + ""
        }
    }), Nt(Lt, Rt, St(Et, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Lt(this.r * t, this.g * t, this.b * t, this.opacity)
        }, darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new Lt(this.r * t, this.g * t, this.b * t, this.opacity)
        }, rgb: function () {
            return this
        }, displayable: function () {
            return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
        }, hex: function () {
            return "#" + Dt(this.r) + Dt(this.g) + Dt(this.b)
        }, toString: function () {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
        }
    })), Nt(Ot, qt, St(Et, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Ot(this.h, this.s, this.l * t, this.opacity)
        }, darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new Ot(this.h, this.s, this.l * t, this.opacity)
        }, rgb: function () {
            var t = this.h % 360 + 360 * (this.h < 0), n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l,
                r = e + (e < .5 ? e : 1 - e) * n, i = 2 * e - r;
            return new Lt(Yt(t >= 240 ? t - 240 : t + 120, i, r), Yt(t, i, r), Yt(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
        }, displayable: function () {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
        }
    }));
    var Us = Math.PI / 180, qs = 180 / Math.PI, Os = .96422, Ys = 1, Bs = .82521, Fs = 4 / 29, Is = 6 / 29,
        js = 3 * Is * Is, Hs = Is * Is * Is;
    Nt(It, Ft, St(Et, {
        brighter: function (t) {
            return new It(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        }, darker: function (t) {
            return new It(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
        }, rgb: function () {
            var t = (this.l + 16) / 116, n = isNaN(this.a) ? t : t + this.a / 500,
                e = isNaN(this.b) ? t : t - this.b / 200;
            return n = Os * Ht(n), t = Ys * Ht(t), e = Bs * Ht(e), new Lt(Xt(3.1338561 * n - 1.6168667 * t - .4906146 * e), Xt(-.9787684 * n + 1.9161415 * t + .033454 * e), Xt(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity)
        }
    })), Nt(Wt, $t, St(Et, {
        brighter: function (t) {
            return new Wt(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
        }, darker: function (t) {
            return new Wt(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
        }, rgb: function () {
            return Bt(this).rgb()
        }
    }));
    var Xs = -.29227, Gs = -.90649, Vs = 1.97294, $s = Vs * Gs, Ws = 1.78277 * Vs, Zs = 1.78277 * Xs - -.14861 * Gs;
    Nt(Qt, Zt, St(Et, {
        brighter: function (t) {
            return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new Qt(this.h, this.s, this.l * t, this.opacity)
        }, darker: function (t) {
            return t = null == t ? .7 : Math.pow(.7, t), new Qt(this.h, this.s, this.l * t, this.opacity)
        }, rgb: function () {
            var t = isNaN(this.h) ? 0 : (this.h + 120) * Us, n = +this.l, e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                r = Math.cos(t), i = Math.sin(t);
            return new Lt(255 * (n + e * (-.14861 * r + 1.78277 * i)), 255 * (n + e * (Xs * r + Gs * i)), 255 * (n + e * (Vs * r)), this.opacity)
        }
    }));
    var Qs, Js, Ks, tl, nl, el, rl = function t(n) {
            function e(t, n) {
                var e = r((t = Rt(t)).r, (n = Rt(n)).r), i = r(t.g, n.g), o = r(t.b, n.b), a = an(t.opacity, n.opacity);
                return function (n) {
                    return t.r = e(n), t.g = i(n), t.b = o(n), t.opacity = a(n), t + ""
                }
            }

            var r = on(n);
            return e.gamma = t, e
        }(1), il = un(Kt), ol = un(tn), al = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ul = new RegExp(al.source, "g"),
        fl = 180 / Math.PI, cl = {translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1},
        sl = gn(function (t) {
            return "none" === t ? cl : (Qs || (Qs = document.createElement("DIV"), Js = document.documentElement, Ks = document.defaultView), Qs.style.transform = t, t = Ks.getComputedStyle(Js.appendChild(Qs), null).getPropertyValue("transform"), Js.removeChild(Qs), t = t.slice(7, -1).split(","), vn(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
        }, "px, ", "px)", "deg)"), ll = gn(function (t) {
            return null == t ? cl : (tl || (tl = document.createElementNS("http://www.w3.org/2000/svg", "g")), tl.setAttribute("transform", t), (t = tl.transform.baseVal.consolidate()) ? (t = t.matrix, vn(t.a, t.b, t.c, t.d, t.e, t.f)) : cl)
        }, ", ", ")", ")"), hl = Math.SQRT2, dl = 2, pl = 4, vl = 1e-12, gl = bn(rn), yl = bn(an), _l = mn(rn), bl = mn(an),
        ml = xn(rn), xl = xn(an), wl = 0, Ml = 0, Al = 0, Tl = 1e3, Nl = 0, Sl = 0, El = 0,
        kl = "object" == typeof performance && performance.now ? performance : Date,
        Cl = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
            setTimeout(t, 17)
        };
    An.prototype = Tn.prototype = {
        constructor: An, restart: function (t, n, e) {
            if ("function" != typeof t) throw new TypeError("callback is not a function");
            e = (null == e ? wn() : +e) + (null == n ? 0 : +n), this._next || el === this || (el ? el._next = this : nl = this, el = this), this._call = t, this._time = e, kn()
        }, stop: function () {
            this._call && (this._call = null, this._time = 1 / 0, kn())
        }
    };
    var Pl = N("start", "end", "interrupt"), zl = [], Rl = 0, Ll = 1, Dl = 2, Ul = 3, ql = 4, Ol = 5, Yl = 6,
        Bl = ft.prototype.constructor, Fl = 0, Il = ft.prototype;
    On.prototype = Yn.prototype = {
        constructor: On,
        select: function (t) {
            var n = this._name, e = this._id;
            "function" != typeof t && (t = z(t));
            for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a) for (var u, f, c = r[a], s = c.length, l = o[a] = new Array(s), h = 0; h < s; ++h) (u = c[h]) && (f = t.call(u, u.__data__, h, c)) && ("__data__" in u && (f.__data__ = u.__data__), l[h] = f, Pn(l[h], n, e, h, l, Ln(u, e)));
            return new On(o, this._parents, n, e)
        },
        selectAll: function (t) {
            var n = this._name, e = this._id;
            "function" != typeof t && (t = L(t));
            for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u) for (var f, c = r[u], s = c.length, l = 0; l < s; ++l) if (f = c[l]) {
                for (var h, d = t.call(f, f.__data__, l, c), p = Ln(f, e), v = 0, g = d.length; v < g; ++v) (h = d[v]) && Pn(h, n, e, v, d, p);
                o.push(d), a.push(f)
            }
            return new On(o, a, n, e)
        },
        filter: function (t) {
            "function" != typeof t && (t = bs(t));
            for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) for (var o, a = n[i], u = a.length, f = r[i] = [], c = 0; c < u; ++c) (o = a[c]) && t.call(o, o.__data__, c, a) && f.push(o);
            return new On(r, this._parents, this._name, this._id)
        },
        merge: function (t) {
            if (t._id !== this._id) throw new Error;
            for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), u = 0; u < o; ++u) for (var f, c = n[u], s = e[u], l = c.length, h = a[u] = new Array(l), d = 0; d < l; ++d) (f = c[d] || s[d]) && (h[d] = f);
            for (; u < r; ++u) a[u] = n[u];
            return new On(a, this._parents, this._name, this._id)
        },
        selection: function () {
            return new Bl(this._groups, this._parents)
        },
        transition: function () {
            for (var t = this._name, n = this._id, e = Bn(), r = this._groups, i = r.length, o = 0; o < i; ++o) for (var a, u = r[o], f = u.length, c = 0; c < f; ++c) if (a = u[c]) {
                var s = Ln(a, n);
                Pn(a, t, e, c, u, {time: s.time + s.delay + s.duration, delay: 0, duration: s.duration, ease: s.ease})
            }
            return new On(r, this._parents, t, e)
        },
        call: Il.call,
        nodes: Il.nodes,
        node: Il.node,
        size: Il.size,
        empty: Il.empty,
        each: Il.each,
        on: function (t, n) {
            var e = this._id;
            return arguments.length < 2 ? Ln(this.node(), e).on.on(t) : this.each(function (t, n, e) {
                var r, i, o = function (t) {
                    return (t + "").trim().split(/^|\s+/).every(function (t) {
                        var n = t.indexOf(".");
                        return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
                    })
                }(n) ? zn : Rn;
                return function () {
                    var a = o(this, t), u = a.on;
                    u !== r && (i = (r = u).copy()).on(n, e), a.on = i
                }
            }(e, t, n))
        },
        attr: function (t, n) {
            var e = k(t), r = "transform" === e ? ll : qn;
            return this.attrTween(t, "function" == typeof n ? (e.local ? function (t, n, e) {
                var r, i, o;
                return function () {
                    var a, u = e(this);
                    if (null != u) return (a = this.getAttributeNS(t.space, t.local)) === u ? null : a === r && u === i ? o : o = n(r = a, i = u);
                    this.removeAttributeNS(t.space, t.local)
                }
            } : function (t, n, e) {
                var r, i, o;
                return function () {
                    var a, u = e(this);
                    if (null != u) return (a = this.getAttribute(t)) === u ? null : a === r && u === i ? o : o = n(r = a, i = u);
                    this.removeAttribute(t)
                }
            })(e, r, Un(this, "attr." + t, n)) : null == n ? (e.local ? function (t) {
                return function () {
                    this.removeAttributeNS(t.space, t.local)
                }
            } : function (t) {
                return function () {
                    this.removeAttribute(t)
                }
            })(e) : (e.local ? function (t, n, e) {
                var r, i;
                return function () {
                    var o = this.getAttributeNS(t.space, t.local);
                    return o === e ? null : o === r ? i : i = n(r = o, e)
                }
            } : function (t, n, e) {
                var r, i;
                return function () {
                    var o = this.getAttribute(t);
                    return o === e ? null : o === r ? i : i = n(r = o, e)
                }
            })(e, r, n + ""))
        },
        attrTween: function (t, n) {
            var e = "attr." + t;
            if (arguments.length < 2) return (e = this.tween(e)) && e._value;
            if (null == n) return this.tween(e, null);
            if ("function" != typeof n) throw new Error;
            var r = k(t);
            return this.tween(e, (r.local ? function (t, n) {
                function e() {
                    var e = this, r = n.apply(e, arguments);
                    return r && function (n) {
                        e.setAttributeNS(t.space, t.local, r(n))
                    }
                }

                return e._value = n, e
            } : function (t, n) {
                function e() {
                    var e = this, r = n.apply(e, arguments);
                    return r && function (n) {
                        e.setAttribute(t, r(n))
                    }
                }

                return e._value = n, e
            })(r, n))
        },
        style: function (t, n, e) {
            var r = "transform" == (t += "") ? sl : qn;
            return null == n ? this.styleTween(t, function (t, n) {
                var e, r, i;
                return function () {
                    var o = F(this, t), a = (this.style.removeProperty(t), F(this, t));
                    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a)
                }
            }(t, r)).on("end.style." + t, function (t) {
                return function () {
                    this.style.removeProperty(t)
                }
            }(t)) : this.styleTween(t, "function" == typeof n ? function (t, n, e) {
                var r, i, o;
                return function () {
                    var a = F(this, t), u = e(this);
                    return null == u && (this.style.removeProperty(t), u = F(this, t)), a === u ? null : a === r && u === i ? o : o = n(r = a, i = u)
                }
            }(t, r, Un(this, "style." + t, n)) : function (t, n, e) {
                var r, i;
                return function () {
                    var o = F(this, t);
                    return o === e ? null : o === r ? i : i = n(r = o, e)
                }
            }(t, r, n + ""), e)
        },
        styleTween: function (t, n, e) {
            var r = "style." + (t += "");
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == n) return this.tween(r, null);
            if ("function" != typeof n) throw new Error;
            return this.tween(r, function (t, n, e) {
                function r() {
                    var r = this, i = n.apply(r, arguments);
                    return i && function (n) {
                        r.style.setProperty(t, i(n), e)
                    }
                }

                return r._value = n, r
            }(t, n, null == e ? "" : e))
        },
        text: function (t) {
            return this.tween("text", "function" == typeof t ? function (t) {
                return function () {
                    var n = t(this);
                    this.textContent = null == n ? "" : n
                }
            }(Un(this, "text", t)) : function (t) {
                return function () {
                    this.textContent = t
                }
            }(null == t ? "" : t + ""))
        },
        remove: function () {
            return this.on("end.remove", function (t) {
                return function () {
                    var n = this.parentNode;
                    for (var e in this.__transition) if (+e !== t) return;
                    n && n.removeChild(this)
                }
            }(this._id))
        },
        tween: function (t, n) {
            var e = this._id;
            if (t += "", arguments.length < 2) {
                for (var r, i = Ln(this.node(), e).tween, o = 0, a = i.length; o < a; ++o) if ((r = i[o]).name === t) return r.value;
                return null
            }
            return this.each((null == n ? function (t, n) {
                var e, r;
                return function () {
                    var i = Rn(this, t), o = i.tween;
                    if (o !== e) for (var a = 0, u = (r = e = o).length; a < u; ++a) if (r[a].name === n) {
                        (r = r.slice()).splice(a, 1);
                        break
                    }
                    i.tween = r
                }
            } : function (t, n, e) {
                var r, i;
                if ("function" != typeof e) throw new Error;
                return function () {
                    var o = Rn(this, t), a = o.tween;
                    if (a !== r) {
                        i = (r = a).slice();
                        for (var u = {name: n, value: e}, f = 0, c = i.length; f < c; ++f) if (i[f].name === n) {
                            i[f] = u;
                            break
                        }
                        f === c && i.push(u)
                    }
                    o.tween = i
                }
            })(e, t, n))
        },
        delay: function (t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? function (t, n) {
                return function () {
                    zn(this, t).delay = +n.apply(this, arguments)
                }
            } : function (t, n) {
                return n = +n, function () {
                    zn(this, t).delay = n
                }
            })(n, t)) : Ln(this.node(), n).delay
        },
        duration: function (t) {
            var n = this._id;
            return arguments.length ? this.each(("function" == typeof t ? function (t, n) {
                return function () {
                    Rn(this, t).duration = +n.apply(this, arguments)
                }
            } : function (t, n) {
                return n = +n, function () {
                    Rn(this, t).duration = n
                }
            })(n, t)) : Ln(this.node(), n).duration
        },
        ease: function (t) {
            var n = this._id;
            return arguments.length ? this.each(function (t, n) {
                if ("function" != typeof n) throw new Error;
                return function () {
                    Rn(this, t).ease = n
                }
            }(n, t)) : Ln(this.node(), n).ease
        }
    };
    var jl = function t(n) {
            function e(t) {
                return Math.pow(t, n)
            }

            return n = +n, e.exponent = t, e
        }(3), Hl = function t(n) {
            function e(t) {
                return 1 - Math.pow(1 - t, n)
            }

            return n = +n, e.exponent = t, e
        }(3), Xl = function t(n) {
            function e(t) {
                return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
            }

            return n = +n, e.exponent = t, e
        }(3), Gl = Math.PI, Vl = Gl / 2, $l = 4 / 11, Wl = 6 / 11, Zl = 8 / 11, Ql = .75, Jl = 9 / 11, Kl = 10 / 11,
        th = .9375, nh = 21 / 22, eh = 63 / 64, rh = 1 / $l / $l, ih = function t(n) {
            function e(t) {
                return t * t * ((n + 1) * t - n)
            }

            return n = +n, e.overshoot = t, e
        }(1.70158), oh = function t(n) {
            function e(t) {
                return --t * t * ((n + 1) * t + n) + 1
            }

            return n = +n, e.overshoot = t, e
        }(1.70158), ah = function t(n) {
            function e(t) {
                return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
            }

            return n = +n, e.overshoot = t, e
        }(1.70158), uh = 2 * Math.PI, fh = function t(n, e) {
            function r(t) {
                return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e)
            }

            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= uh);
            return r.amplitude = function (n) {
                return t(n, e * uh)
            }, r.period = function (e) {
                return t(n, e)
            }, r
        }(1, .3), ch = function t(n, e) {
            function r(t) {
                return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e)
            }

            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= uh);
            return r.amplitude = function (n) {
                return t(n, e * uh)
            }, r.period = function (e) {
                return t(n, e)
            }, r
        }(1, .3), sh = function t(n, e) {
            function r(t) {
                return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2
            }

            var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= uh);
            return r.amplitude = function (n) {
                return t(n, e * uh)
            }, r.period = function (e) {
                return t(n, e)
            }, r
        }(1, .3), lh = {time: null, delay: 0, duration: 250, ease: In};
    ft.prototype.interrupt = function (t) {
        return this.each(function () {
            Dn(this, t)
        })
    }, ft.prototype.transition = function (t) {
        var n, e;
        t instanceof On ? (n = t._id, t = t._name) : (n = Bn(), (e = lh).time = wn(), t = null == t ? null : t + "");
        for (var r = this._groups, i = r.length, o = 0; o < i; ++o) for (var a, u = r[o], f = u.length, c = 0; c < f; ++c) (a = u[c]) && Pn(a, t, n, c, u, e || Vn(a, n));
        return new On(r, this._parents, t, n)
    };
    var hh = [null], dh = {name: "drag"}, ph = {name: "space"}, vh = {name: "handle"}, gh = {name: "center"}, yh = {
            name: "x", handles: ["e", "w"].map(Qn), input: function (t, n) {
                return t && [[t[0], n[0][1]], [t[1], n[1][1]]]
            }, output: function (t) {
                return t && [t[0][0], t[1][0]]
            }
        }, _h = {
            name: "y", handles: ["n", "s"].map(Qn), input: function (t, n) {
                return t && [[n[0][0], t[0]], [n[1][0], t[1]]]
            }, output: function (t) {
                return t && [t[0][1], t[1][1]]
            }
        }, bh = {
            name: "xy", handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Qn), input: function (t) {
                return t
            }, output: function (t) {
                return t
            }
        }, mh = {
            overlay: "crosshair",
            selection: "move",
            n: "ns-resize",
            e: "ew-resize",
            s: "ns-resize",
            w: "ew-resize",
            nw: "nwse-resize",
            ne: "nesw-resize",
            se: "nwse-resize",
            sw: "nesw-resize"
        }, xh = {e: "w", w: "e", nw: "ne", ne: "nw", se: "sw", sw: "se"},
        wh = {n: "s", s: "n", nw: "sw", ne: "se", se: "ne", sw: "nw"},
        Mh = {overlay: 1, selection: 1, n: null, e: 1, s: null, w: -1, nw: -1, ne: 1, se: 1, sw: -1},
        Ah = {overlay: 1, selection: 1, n: -1, e: null, s: 1, w: null, nw: -1, ne: -1, se: 1, sw: 1}, Th = Math.cos,
        Nh = Math.sin, Sh = Math.PI, Eh = Sh / 2, kh = 2 * Sh, Ch = Math.max, Ph = Array.prototype.slice, zh = Math.PI,
        Rh = 2 * zh, Lh = Rh - 1e-6;
    ie.prototype = oe.prototype = {
        constructor: ie, moveTo: function (t, n) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
        }, closePath: function () {
            null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
        }, lineTo: function (t, n) {
            this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
        }, quadraticCurveTo: function (t, n, e, r) {
            this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
        }, bezierCurveTo: function (t, n, e, r, i, o) {
            this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o)
        }, arcTo: function (t, n, e, r, i) {
            t = +t, n = +n, e = +e, r = +r, i = +i;
            var o = this._x1, a = this._y1, u = e - t, f = r - n, c = o - t, s = a - n, l = c * c + s * s;
            if (i < 0) throw new Error("negative radius: " + i);
            if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n); else if (l > 1e-6) if (Math.abs(s * u - f * c) > 1e-6 && i) {
                var h = e - o, d = r - a, p = u * u + f * f, v = h * h + d * d, g = Math.sqrt(p), y = Math.sqrt(l),
                    _ = i * Math.tan((zh - Math.acos((p + l - v) / (2 * g * y))) / 2), b = _ / y, m = _ / g;
                Math.abs(b - 1) > 1e-6 && (this._ += "L" + (t + b * c) + "," + (n + b * s)), this._ += "A" + i + "," + i + ",0,0," + +(s * h > c * d) + "," + (this._x1 = t + m * u) + "," + (this._y1 = n + m * f)
            } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n); else ;
        }, arc: function (t, n, e, r, i, o) {
            t = +t, n = +n;
            var a = (e = +e) * Math.cos(r), u = e * Math.sin(r), f = t + a, c = n + u, s = 1 ^ o, l = o ? r - i : i - r;
            if (e < 0) throw new Error("negative radius: " + e);
            null === this._x1 ? this._ += "M" + f + "," + c : (Math.abs(this._x1 - f) > 1e-6 || Math.abs(this._y1 - c) > 1e-6) && (this._ += "L" + f + "," + c), e && (l < 0 && (l = l % Rh + Rh), l > Lh ? this._ += "A" + e + "," + e + ",0,1," + s + "," + (t - a) + "," + (n - u) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = f) + "," + (this._y1 = c) : l > 1e-6 && (this._ += "A" + e + "," + e + ",0," + +(l >= zh) + "," + s + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))))
        }, rect: function (t, n, e, r) {
            this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
        }, toString: function () {
            return this._
        }
    };
    le.prototype = he.prototype = {
        constructor: le, has: function (t) {
            return "$" + t in this
        }, get: function (t) {
            return this["$" + t]
        }, set: function (t, n) {
            return this["$" + t] = n, this
        }, remove: function (t) {
            var n = "$" + t;
            return n in this && delete this[n]
        }, clear: function () {
            for (var t in this) "$" === t[0] && delete this[t]
        }, keys: function () {
            var t = [];
            for (var n in this) "$" === n[0] && t.push(n.slice(1));
            return t
        }, values: function () {
            var t = [];
            for (var n in this) "$" === n[0] && t.push(this[n]);
            return t
        }, entries: function () {
            var t = [];
            for (var n in this) "$" === n[0] && t.push({key: n.slice(1), value: this[n]});
            return t
        }, size: function () {
            var t = 0;
            for (var n in this) "$" === n[0] && ++t;
            return t
        }, empty: function () {
            for (var t in this) if ("$" === t[0]) return !1;
            return !0
        }, each: function (t) {
            for (var n in this) "$" === n[0] && t(this[n], n.slice(1), this)
        }
    };
    var Dh = he.prototype;
    ye.prototype = _e.prototype = {
        constructor: ye, has: Dh.has, add: function (t) {
            return t += "", this["$" + t] = t, this
        }, remove: Dh.remove, clear: Dh.clear, values: Dh.keys, size: Dh.size, empty: Dh.empty, each: Dh.each
    };
    var Uh = Array.prototype.slice,
        qh = [[], [[[1, 1.5], [.5, 1]]], [[[1.5, 1], [1, 1.5]]], [[[1.5, 1], [.5, 1]]], [[[1, .5], [1.5, 1]]], [[[1, 1.5], [.5, 1]], [[1, .5], [1.5, 1]]], [[[1, .5], [1, 1.5]]], [[[1, .5], [.5, 1]]], [[[.5, 1], [1, .5]]], [[[1, 1.5], [1, .5]]], [[[.5, 1], [1, .5]], [[1.5, 1], [1, 1.5]]], [[[1.5, 1], [1, .5]]], [[[.5, 1], [1.5, 1]]], [[[1, 1.5], [1.5, 1]]], [[[.5, 1], [1, 1.5]]], []],
        Oh = {}, Yh = {}, Bh = 34, Fh = 10, Ih = 13, jh = ke(","), Hh = jh.parse, Xh = jh.parseRows, Gh = jh.format,
        Vh = jh.formatRows, $h = ke("\t"), Wh = $h.parse, Zh = $h.parseRows, Qh = $h.format, Jh = $h.formatRows,
        Kh = Le(Hh), td = Le(Wh), nd = Ue("application/xml"), ed = Ue("text/html"), rd = Ue("image/svg+xml"),
        id = je.prototype = He.prototype;
    id.copy = function () {
        var t, n, e = new He(this._x, this._y, this._x0, this._y0, this._x1, this._y1), r = this._root;
        if (!r) return e;
        if (!r.length) return e._root = Xe(r), e;
        for (t = [{
            source: r,
            target: e._root = new Array(4)
        }]; r = t.pop();) for (var i = 0; i < 4; ++i) (n = r.source[i]) && (n.length ? t.push({
            source: n,
            target: r.target[i] = new Array(4)
        }) : r.target[i] = Xe(n));
        return e
    }, id.add = function (t) {
        var n = +this._x.call(null, t), e = +this._y.call(null, t);
        return Ye(this.cover(n, e), n, e, t)
    }, id.addAll = function (t) {
        var n, e, r, i, o = t.length, a = new Array(o), u = new Array(o), f = 1 / 0, c = 1 / 0, s = -1 / 0, l = -1 / 0;
        for (e = 0; e < o; ++e) isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || (a[e] = r, u[e] = i, r < f && (f = r), r > s && (s = r), i < c && (c = i), i > l && (l = i));
        for (s < f && (f = this._x0, s = this._x1), l < c && (c = this._y0, l = this._y1), this.cover(f, c).cover(s, l), e = 0; e < o; ++e) Ye(this, a[e], u[e], t[e]);
        return this
    }, id.cover = function (t, n) {
        if (isNaN(t = +t) || isNaN(n = +n)) return this;
        var e = this._x0, r = this._y0, i = this._x1, o = this._y1;
        if (isNaN(e)) i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1; else {
            if (!(e > t || t > i || r > n || n > o)) return this;
            var a, u, f = i - e, c = this._root;
            switch (u = (n < (r + o) / 2) << 1 | t < (e + i) / 2) {
                case 0:
                    do {
                        a = new Array(4), a[u] = c, c = a
                    } while (f *= 2, i = e + f, o = r + f, t > i || n > o);
                    break;
                case 1:
                    do {
                        a = new Array(4), a[u] = c, c = a
                    } while (f *= 2, e = i - f, o = r + f, e > t || n > o);
                    break;
                case 2:
                    do {
                        a = new Array(4), a[u] = c, c = a
                    } while (f *= 2, i = e + f, r = o - f, t > i || r > n);
                    break;
                case 3:
                    do {
                        a = new Array(4), a[u] = c, c = a
                    } while (f *= 2, e = i - f, r = o - f, e > t || r > n)
            }
            this._root && this._root.length && (this._root = c)
        }
        return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this
    }, id.data = function () {
        var t = [];
        return this.visit(function (n) {
            if (!n.length) do {
                t.push(n.data)
            } while (n = n.next)
        }), t
    }, id.extent = function (t) {
        return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]]
    }, id.find = function (t, n, e) {
        var r, i, o, a, u, f, c, s = this._x0, l = this._y0, h = this._x1, d = this._y1, p = [], v = this._root;
        for (v && p.push(new Be(v, s, l, h, d)), null == e ? e = 1 / 0 : (s = t - e, l = n - e, h = t + e, d = n + e, e *= e); f = p.pop();) if (!(!(v = f.node) || (i = f.x0) > h || (o = f.y0) > d || (a = f.x1) < s || (u = f.y1) < l)) if (v.length) {
            var g = (i + a) / 2, y = (o + u) / 2;
            p.push(new Be(v[3], g, y, a, u), new Be(v[2], i, y, g, u), new Be(v[1], g, o, a, y), new Be(v[0], i, o, g, y)), (c = (n >= y) << 1 | t >= g) && (f = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - c], p[p.length - 1 - c] = f)
        } else {
            var _ = t - +this._x.call(null, v.data), b = n - +this._y.call(null, v.data), m = _ * _ + b * b;
            if (m < e) {
                var x = Math.sqrt(e = m);
                s = t - x, l = n - x, h = t + x, d = n + x, r = v.data
            }
        }
        return r
    }, id.remove = function (t) {
        if (isNaN(o = +this._x.call(null, t)) || isNaN(a = +this._y.call(null, t))) return this;
        var n, e, r, i, o, a, u, f, c, s, l, h, d = this._root, p = this._x0, v = this._y0, g = this._x1, y = this._y1;
        if (!d) return this;
        if (d.length) for (; ;) {
            if ((c = o >= (u = (p + g) / 2)) ? p = u : g = u, (s = a >= (f = (v + y) / 2)) ? v = f : y = f, n = d, !(d = d[l = s << 1 | c])) return this;
            if (!d.length) break;
            (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l)
        }
        for (; d.data !== t;) if (r = d, !(d = d.next)) return this;
        return (i = d.next) && delete d.next, r ? (i ? r.next = i : delete r.next, this) : n ? (i ? n[l] = i : delete n[l], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[h] = d : this._root = d), this) : (this._root = i, this)
    }, id.removeAll = function (t) {
        for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
        return this
    }, id.root = function () {
        return this._root
    }, id.size = function () {
        var t = 0;
        return this.visit(function (n) {
            if (!n.length) do {
                ++t
            } while (n = n.next)
        }), t
    }, id.visit = function (t) {
        var n, e, r, i, o, a, u = [], f = this._root;
        for (f && u.push(new Be(f, this._x0, this._y0, this._x1, this._y1)); n = u.pop();) if (!t(f = n.node, r = n.x0, i = n.y0, o = n.x1, a = n.y1) && f.length) {
            var c = (r + o) / 2, s = (i + a) / 2;
            (e = f[3]) && u.push(new Be(e, c, s, o, a)), (e = f[2]) && u.push(new Be(e, r, s, c, a)), (e = f[1]) && u.push(new Be(e, c, i, o, s)), (e = f[0]) && u.push(new Be(e, r, i, c, s))
        }
        return this
    }, id.visitAfter = function (t) {
        var n, e = [], r = [];
        for (this._root && e.push(new Be(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
            var i = n.node;
            if (i.length) {
                var o, a = n.x0, u = n.y0, f = n.x1, c = n.y1, s = (a + f) / 2, l = (u + c) / 2;
                (o = i[0]) && e.push(new Be(o, a, u, s, l)), (o = i[1]) && e.push(new Be(o, s, u, f, l)), (o = i[2]) && e.push(new Be(o, a, l, s, c)), (o = i[3]) && e.push(new Be(o, s, l, f, c))
            }
            r.push(n)
        }
        for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
        return this
    }, id.x = function (t) {
        return arguments.length ? (this._x = t, this) : this._x
    }, id.y = function (t) {
        return arguments.length ? (this._y = t, this) : this._y
    };
    var od = 10, ad = Math.PI * (3 - Math.sqrt(5)),
        ud = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    tr.prototype = nr.prototype, nr.prototype.toString = function () {
        return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
    };
    var fd, cd, sd = {
        "%": function (t, n) {
            return (100 * t).toFixed(n)
        }, b: function (t) {
            return Math.round(t).toString(2)
        }, c: function (t) {
            return t + ""
        }, d: function (t) {
            return Math.round(t).toString(10)
        }, e: function (t, n) {
            return t.toExponential(n)
        }, f: function (t, n) {
            return t.toFixed(n)
        }, g: function (t, n) {
            return t.toPrecision(n)
        }, o: function (t) {
            return Math.round(t).toString(8)
        }, p: function (t, n) {
            return er(100 * t, n)
        }, r: er, s: function (t, n) {
            var e = Je(t, n);
            if (!e) return t + "";
            var r = e[0], i = e[1], o = i - (fd = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1, a = r.length;
            return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + Je(t, Math.max(0, n + o - 1))[0]
        }, X: function (t) {
            return Math.round(t).toString(16).toUpperCase()
        }, x: function (t) {
            return Math.round(t).toString(16)
        }
    }, ld = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
    or({decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""]}), sr.prototype = {
        constructor: sr,
        reset: function () {
            this.s = this.t = 0
        },
        add: function (t) {
            lr(jd, t, this.t), lr(this, jd.s, this.s), this.s ? this.t += jd.t : this.s = jd.t
        },
        valueOf: function () {
            return this.s
        }
    };
    var hd, dd, pd, vd, gd, yd, _d, bd, md, xd, wd, Md, Ad, Td, Nd, Sd, Ed, kd, Cd, Pd, zd, Rd, Ld, Dd, Ud, qd, Od, Yd,
        Bd, Fd, Id, jd = new sr, Hd = 1e-6, Xd = 1e-12, Gd = Math.PI, Vd = Gd / 2, $d = Gd / 4, Wd = 2 * Gd,
        Zd = 180 / Gd, Qd = Gd / 180, Jd = Math.abs, Kd = Math.atan, tp = Math.atan2, np = Math.cos, ep = Math.ceil,
        rp = Math.exp, ip = Math.log, op = Math.pow, ap = Math.sin, up = Math.sign || function (t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0
        }, fp = Math.sqrt, cp = Math.tan, sp = {
            Feature: function (t, n) {
                gr(t.geometry, n)
            }, FeatureCollection: function (t, n) {
                for (var e = t.features, r = -1, i = e.length; ++r < i;) gr(e[r].geometry, n)
            }
        }, lp = {
            Sphere: function (t, n) {
                n.sphere()
            }, Point: function (t, n) {
                t = t.coordinates, n.point(t[0], t[1], t[2])
            }, MultiPoint: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2])
            }, LineString: function (t, n) {
                yr(t.coordinates, n, 0)
            }, MultiLineString: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) yr(e[r], n, 0)
            }, Polygon: function (t, n) {
                _r(t.coordinates, n)
            }, MultiPolygon: function (t, n) {
                for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) _r(e[r], n)
            }, GeometryCollection: function (t, n) {
                for (var e = t.geometries, r = -1, i = e.length; ++r < i;) gr(e[r], n)
            }
        }, hp = cr(), dp = cr(), pp = {
            point: vr, lineStart: vr, lineEnd: vr, polygonStart: function () {
                hp.reset(), pp.lineStart = mr, pp.lineEnd = xr
            }, polygonEnd: function () {
                var t = +hp;
                dp.add(t < 0 ? Wd + t : t), this.lineStart = this.lineEnd = this.point = vr
            }, sphere: function () {
                dp.add(Wd)
            }
        }, vp = cr(), gp = {
            point: Pr, lineStart: Rr, lineEnd: Lr, polygonStart: function () {
                gp.point = Dr, gp.lineStart = Ur, gp.lineEnd = qr, vp.reset(), pp.polygonStart()
            }, polygonEnd: function () {
                pp.polygonEnd(), gp.point = Pr, gp.lineStart = Rr, gp.lineEnd = Lr, hp < 0 ? (yd = -(bd = 180), _d = -(md = 90)) : vp > Hd ? md = 90 : vp < -Hd && (_d = -90), Nd[0] = yd, Nd[1] = bd
            }
        }, yp = {
            sphere: vr, point: Fr, lineStart: jr, lineEnd: Gr, polygonStart: function () {
                yp.lineStart = Vr, yp.lineEnd = $r
            }, polygonEnd: function () {
                yp.lineStart = jr, yp.lineEnd = Gr
            }
        };
    Kr.invert = Kr;
    var _p, bp, mp, xp, wp, Mp, Ap, Tp, Np, Sp, Ep, kp = cr(), Cp = di(function () {
        return !0
    }, function (t) {
        var n, e = NaN, r = NaN, i = NaN;
        return {
            lineStart: function () {
                t.lineStart(), n = 1
            }, point: function (o, a) {
                var u = o > 0 ? Gd : -Gd, f = Jd(o - e);
                Jd(f - Gd) < Hd ? (t.point(e, r = (r + a) / 2 > 0 ? Vd : -Vd), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), t.point(o, r), n = 0) : i !== u && f >= Gd && (Jd(e - i) < Hd && (e -= i * Hd), Jd(o - u) < Hd && (o -= u * Hd), r = function (t, n, e, r) {
                    var i, o, a = ap(t - e);
                    return Jd(a) > Hd ? Kd((ap(n) * (o = np(r)) * ap(e) - ap(r) * (i = np(n)) * ap(t)) / (i * o * a)) : (n + r) / 2
                }(e, r, o, a), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), n = 0), t.point(e = o, r = a), i = u
            }, lineEnd: function () {
                t.lineEnd(), e = r = NaN
            }, clean: function () {
                return 2 - n
            }
        }
    }, function (t, n, e, r) {
        var i;
        if (null == t) i = e * Vd, r.point(-Gd, i), r.point(0, i), r.point(Gd, i), r.point(Gd, 0), r.point(Gd, -i), r.point(0, -i), r.point(-Gd, -i), r.point(-Gd, 0), r.point(-Gd, i); else if (Jd(t[0] - n[0]) > Hd) {
            var o = t[0] < n[0] ? Gd : -Gd;
            i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
        } else r.point(n[0], n[1])
    }, [-Gd, -Vd]), Pp = 1e9, zp = -Pp, Rp = cr(), Lp = {
        sphere: vr, point: vr, lineStart: function () {
            Lp.point = bi, Lp.lineEnd = _i
        }, lineEnd: vr, polygonStart: vr, polygonEnd: vr
    }, Dp = [null, null], Up = {type: "LineString", coordinates: Dp}, qp = {
        Feature: function (t, n) {
            return Mi(t.geometry, n)
        }, FeatureCollection: function (t, n) {
            for (var e = t.features, r = -1, i = e.length; ++r < i;) if (Mi(e[r].geometry, n)) return !0;
            return !1
        }
    }, Op = {
        Sphere: function () {
            return !0
        }, Point: function (t, n) {
            return Ai(t.coordinates, n)
        }, MultiPoint: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) if (Ai(e[r], n)) return !0;
            return !1
        }, LineString: function (t, n) {
            return Ti(t.coordinates, n)
        }, MultiLineString: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) if (Ti(e[r], n)) return !0;
            return !1
        }, Polygon: function (t, n) {
            return Ni(t.coordinates, n)
        }, MultiPolygon: function (t, n) {
            for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) if (Ni(e[r], n)) return !0;
            return !1
        }, GeometryCollection: function (t, n) {
            for (var e = t.geometries, r = -1, i = e.length; ++r < i;) if (Mi(e[r], n)) return !0;
            return !1
        }
    }, Yp = cr(), Bp = cr(), Fp = {
        point: vr, lineStart: vr, lineEnd: vr, polygonStart: function () {
            Fp.lineStart = Ri, Fp.lineEnd = Ui
        }, polygonEnd: function () {
            Fp.lineStart = Fp.lineEnd = Fp.point = vr, Yp.add(Jd(Bp)), Bp.reset()
        }, result: function () {
            var t = Yp / 2;
            return Yp.reset(), t
        }
    }, Ip = 1 / 0, jp = Ip, Hp = -Ip, Xp = Hp, Gp = {
        point: function (t, n) {
            t < Ip && (Ip = t), t > Hp && (Hp = t), n < jp && (jp = n), n > Xp && (Xp = n)
        }, lineStart: vr, lineEnd: vr, polygonStart: vr, polygonEnd: vr, result: function () {
            var t = [[Ip, jp], [Hp, Xp]];
            return Hp = Xp = -(jp = Ip = 1 / 0), t
        }
    }, Vp = 0, $p = 0, Wp = 0, Zp = 0, Qp = 0, Jp = 0, Kp = 0, tv = 0, nv = 0, ev = {
        point: qi, lineStart: Oi, lineEnd: Fi, polygonStart: function () {
            ev.lineStart = Ii, ev.lineEnd = ji
        }, polygonEnd: function () {
            ev.point = qi, ev.lineStart = Oi, ev.lineEnd = Fi
        }, result: function () {
            var t = nv ? [Kp / nv, tv / nv] : Jp ? [Zp / Jp, Qp / Jp] : Wp ? [Vp / Wp, $p / Wp] : [NaN, NaN];
            return Vp = $p = Wp = Zp = Qp = Jp = Kp = tv = nv = 0, t
        }
    };
    Gi.prototype = {
        _radius: 4.5, pointRadius: function (t) {
            return this._radius = t, this
        }, polygonStart: function () {
            this._line = 0
        }, polygonEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._point = 0
        }, lineEnd: function () {
            0 === this._line && this._context.closePath(), this._point = NaN
        }, point: function (t, n) {
            switch (this._point) {
                case 0:
                    this._context.moveTo(t, n), this._point = 1;
                    break;
                case 1:
                    this._context.lineTo(t, n);
                    break;
                default:
                    this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, Wd)
            }
        }, result: vr
    };
    var rv, iv, ov, av, uv, fv = cr(), cv = {
        point: vr, lineStart: function () {
            cv.point = Vi
        }, lineEnd: function () {
            rv && $i(iv, ov), cv.point = vr
        }, polygonStart: function () {
            rv = !0
        }, polygonEnd: function () {
            rv = null
        }, result: function () {
            var t = +fv;
            return fv.reset(), t
        }
    };
    Wi.prototype = {
        _radius: 4.5, _circle: Zi(4.5), pointRadius: function (t) {
            return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this
        }, polygonStart: function () {
            this._line = 0
        }, polygonEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._point = 0
        }, lineEnd: function () {
            0 === this._line && this._string.push("Z"), this._point = NaN
        }, point: function (t, n) {
            switch (this._point) {
                case 0:
                    this._string.push("M", t, ",", n), this._point = 1;
                    break;
                case 1:
                    this._string.push("L", t, ",", n);
                    break;
                default:
                    null == this._circle && (this._circle = Zi(this._radius)), this._string.push("M", t, ",", n, this._circle)
            }
        }, result: function () {
            if (this._string.length) {
                var t = this._string.join("");
                return this._string = [], t
            }
            return null
        }
    }, Ji.prototype = {
        constructor: Ji, point: function (t, n) {
            this.stream.point(t, n)
        }, sphere: function () {
            this.stream.sphere()
        }, lineStart: function () {
            this.stream.lineStart()
        }, lineEnd: function () {
            this.stream.lineEnd()
        }, polygonStart: function () {
            this.stream.polygonStart()
        }, polygonEnd: function () {
            this.stream.polygonEnd()
        }
    };
    var sv = 16, lv = np(30 * Qd), hv = Qi({
        point: function (t, n) {
            this.stream.point(t * Qd, n * Qd)
        }
    }), dv = ho(function (t) {
        return fp(2 / (1 + t))
    });
    dv.invert = po(function (t) {
        return 2 * dr(t / 2)
    });
    var pv = ho(function (t) {
        return (t = hr(t)) && t / ap(t)
    });
    pv.invert = po(function (t) {
        return t
    }), vo.invert = function (t, n) {
        return [t, 2 * Kd(rp(n)) - Vd]
    }, bo.invert = bo, xo.invert = po(Kd), Mo.invert = function (t, n) {
        var e, r = n, i = 25;
        do {
            var o = r * r, a = o * o;
            r -= e = (r * (1.007226 + o * (.015085 + a * (.028874 * o - .044475 - .005916 * a))) - n) / (1.007226 + o * (.045255 + a * (.259866 * o - .311325 - .005916 * 11 * a)))
        } while (Jd(e) > Hd && --i > 0);
        return [t / (.8707 + (o = r * r) * (o * (o * o * o * (.003971 - .001529 * o) - .013791) - .131979)), r]
    }, Ao.invert = po(dr), To.invert = po(function (t) {
        return 2 * Kd(t)
    }), No.invert = function (t, n) {
        return [-n, 2 * Kd(rp(t)) - Vd]
    }, Do.prototype = Po.prototype = {
        constructor: Do, count: function () {
            return this.eachAfter(Co)
        }, each: function (t) {
            var n, e, r, i, o = this, a = [o];
            do {
                for (n = a.reverse(), a = []; o = n.pop();) if (t(o), e = o.children) for (r = 0, i = e.length; r < i; ++r) a.push(e[r])
            } while (a.length);
            return this
        }, eachAfter: function (t) {
            for (var n, e, r, i = this, o = [i], a = []; i = o.pop();) if (a.push(i), n = i.children) for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
            for (; i = a.pop();) t(i);
            return this
        }, eachBefore: function (t) {
            for (var n, e, r = this, i = [r]; r = i.pop();) if (t(r), n = r.children) for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
            return this
        }, sum: function (t) {
            return this.eachAfter(function (n) {
                for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0;) e += r[i].value;
                n.value = e
            })
        }, sort: function (t) {
            return this.eachBefore(function (n) {
                n.children && n.children.sort(t)
            })
        }, path: function (t) {
            for (var n = this, e = function (t, n) {
                if (t === n) return t;
                var e = t.ancestors(), r = n.ancestors(), i = null;
                for (t = e.pop(), n = r.pop(); t === n;) i = t, t = e.pop(), n = r.pop();
                return i
            }(n, t), r = [n]; n !== e;) n = n.parent, r.push(n);
            for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent;
            return r
        }, ancestors: function () {
            for (var t = this, n = [t]; t = t.parent;) n.push(t);
            return n
        }, descendants: function () {
            var t = [];
            return this.each(function (n) {
                t.push(n)
            }), t
        }, leaves: function () {
            var t = [];
            return this.eachBefore(function (n) {
                n.children || t.push(n)
            }), t
        }, links: function () {
            var t = this, n = [];
            return t.each(function (e) {
                e !== t && n.push({source: e.parent, target: e})
            }), n
        }, copy: function () {
            return Po(this).eachBefore(Ro)
        }
    };
    var vv = Array.prototype.slice, gv = "$", yv = {depth: -1}, _v = {};
    ca.prototype = Object.create(Do.prototype);
    var bv = (1 + Math.sqrt(5)) / 2, mv = function t(n) {
            function e(t, e, r, i, o) {
                la(n, t, e, r, i, o)
            }

            return e.ratio = function (n) {
                return t((n = +n) > 1 ? n : 1)
            }, e
        }(bv), xv = function t(n) {
            function e(t, e, r, i, o) {
                if ((a = t._squarify) && a.ratio === n) for (var a, u, f, c, s, l = -1, h = a.length, d = t.value; ++l < h;) {
                    for (f = (u = a[l]).children, c = u.value = 0, s = f.length; c < s; ++c) u.value += f[c].value;
                    u.dice ? na(u, e, r, i, r += (o - r) * u.value / d) : sa(u, e, r, e += (i - e) * u.value / d, o), d -= u.value
                } else t._squarify = a = la(n, t, e, r, i, o), a.ratio = n
            }

            return e.ratio = function (n) {
                return t((n = +n) > 1 ? n : 1)
            }, e
        }(bv), wv = function t(n) {
            function e(t, e) {
                return t = null == t ? 0 : +t, e = null == e ? 1 : +e, 1 === arguments.length ? (e = t, t = 0) : e -= t, function () {
                    return n() * e + t
                }
            }

            return e.source = t, e
        }(va), Mv = function t(n) {
            function e(t, e) {
                var r, i;
                return t = null == t ? 0 : +t, e = null == e ? 1 : +e, function () {
                    var o;
                    if (null != r) o = r, r = null; else do {
                        r = 2 * n() - 1, o = 2 * n() - 1, i = r * r + o * o
                    } while (!i || i > 1);
                    return t + e * o * Math.sqrt(-2 * Math.log(i) / i)
                }
            }

            return e.source = t, e
        }(va), Av = function t(n) {
            function e() {
                var t = Mv.source(n).apply(this, arguments);
                return function () {
                    return Math.exp(t())
                }
            }

            return e.source = t, e
        }(va), Tv = function t(n) {
            function e(t) {
                return function () {
                    for (var e = 0, r = 0; r < t; ++r) e += n();
                    return e
                }
            }

            return e.source = t, e
        }(va), Nv = function t(n) {
            function e(t) {
                var e = Tv.source(n)(t);
                return function () {
                    return e() / t
                }
            }

            return e.source = t, e
        }(va), Sv = function t(n) {
            function e(t) {
                return function () {
                    return -Math.log(1 - n()) / t
                }
            }

            return e.source = t, e
        }(va), Ev = Array.prototype, kv = Ev.map, Cv = Ev.slice, Pv = {name: "implicit"}, zv = [0, 1], Rv = new Date,
        Lv = new Date, Dv = Ia(function () {
        }, function (t, n) {
            t.setTime(+t + n)
        }, function (t, n) {
            return n - t
        });
    Dv.every = function (t) {
        return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Ia(function (n) {
            n.setTime(Math.floor(n / t) * t)
        }, function (n, e) {
            n.setTime(+n + e * t)
        }, function (n, e) {
            return (e - n) / t
        }) : Dv : null
    };
    var Uv = Dv.range, qv = 6e4, Ov = 6048e5, Yv = Ia(function (t) {
            t.setTime(1e3 * Math.floor(t / 1e3))
        }, function (t, n) {
            t.setTime(+t + 1e3 * n)
        }, function (t, n) {
            return (n - t) / 1e3
        }, function (t) {
            return t.getUTCSeconds()
        }), Bv = Yv.range, Fv = Ia(function (t) {
            t.setTime(Math.floor(t / qv) * qv)
        }, function (t, n) {
            t.setTime(+t + n * qv)
        }, function (t, n) {
            return (n - t) / qv
        }, function (t) {
            return t.getMinutes()
        }), Iv = Fv.range, jv = Ia(function (t) {
            var n = t.getTimezoneOffset() * qv % 36e5;
            n < 0 && (n += 36e5), t.setTime(36e5 * Math.floor((+t - n) / 36e5) + n)
        }, function (t, n) {
            t.setTime(+t + 36e5 * n)
        }, function (t, n) {
            return (n - t) / 36e5
        }, function (t) {
            return t.getHours()
        }), Hv = jv.range, Xv = Ia(function (t) {
            t.setHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setDate(t.getDate() + n)
        }, function (t, n) {
            return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * qv) / 864e5
        }, function (t) {
            return t.getDate() - 1
        }), Gv = Xv.range, Vv = ja(0), $v = ja(1), Wv = ja(2), Zv = ja(3), Qv = ja(4), Jv = ja(5), Kv = ja(6),
        tg = Vv.range, ng = $v.range, eg = Wv.range, rg = Zv.range, ig = Qv.range, og = Jv.range, ag = Kv.range,
        ug = Ia(function (t) {
            t.setDate(1), t.setHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setMonth(t.getMonth() + n)
        }, function (t, n) {
            return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
        }, function (t) {
            return t.getMonth()
        }), fg = ug.range, cg = Ia(function (t) {
            t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setFullYear(t.getFullYear() + n)
        }, function (t, n) {
            return n.getFullYear() - t.getFullYear()
        }, function (t) {
            return t.getFullYear()
        });
    cg.every = function (t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? Ia(function (n) {
            n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0)
        }, function (n, e) {
            n.setFullYear(n.getFullYear() + e * t)
        }) : null
    };
    var sg = cg.range, lg = Ia(function (t) {
            t.setUTCSeconds(0, 0)
        }, function (t, n) {
            t.setTime(+t + n * qv)
        }, function (t, n) {
            return (n - t) / qv
        }, function (t) {
            return t.getUTCMinutes()
        }), hg = lg.range, dg = Ia(function (t) {
            t.setUTCMinutes(0, 0, 0)
        }, function (t, n) {
            t.setTime(+t + 36e5 * n)
        }, function (t, n) {
            return (n - t) / 36e5
        }, function (t) {
            return t.getUTCHours()
        }), pg = dg.range, vg = Ia(function (t) {
            t.setUTCHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setUTCDate(t.getUTCDate() + n)
        }, function (t, n) {
            return (n - t) / 864e5
        }, function (t) {
            return t.getUTCDate() - 1
        }), gg = vg.range, yg = Ha(0), _g = Ha(1), bg = Ha(2), mg = Ha(3), xg = Ha(4), wg = Ha(5), Mg = Ha(6),
        Ag = yg.range, Tg = _g.range, Ng = bg.range, Sg = mg.range, Eg = xg.range, kg = wg.range, Cg = Mg.range,
        Pg = Ia(function (t) {
            t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setUTCMonth(t.getUTCMonth() + n)
        }, function (t, n) {
            return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
        }, function (t) {
            return t.getUTCMonth()
        }), zg = Pg.range, Rg = Ia(function (t) {
            t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
        }, function (t, n) {
            t.setUTCFullYear(t.getUTCFullYear() + n)
        }, function (t, n) {
            return n.getUTCFullYear() - t.getUTCFullYear()
        }, function (t) {
            return t.getUTCFullYear()
        });
    Rg.every = function (t) {
        return isFinite(t = Math.floor(t)) && t > 0 ? Ia(function (n) {
            n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0)
        }, function (n, e) {
            n.setUTCFullYear(n.getUTCFullYear() + e * t)
        }) : null
    };
    var Lg, Dg = Rg.range, Ug = {"-": "", _: " ", 0: "0"}, qg = /^\s*\d+/, Og = /^%/, Yg = /[\\^$*+?|[\]().{}]/g;
    nf({
        dateTime: "%x, %X",
        date: "%-m/%-d/%Y",
        time: "%-I:%M:%S %p",
        periods: ["AM", "PM"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    var Bg = "%Y-%m-%dT%H:%M:%S.%LZ", Fg = Date.prototype.toISOString ? function (t) {
            return t.toISOString()
        } : t.utcFormat(Bg), Ig = +new Date("2000-01-01T00:00:00.000Z") ? function (t) {
            var n = new Date(t);
            return isNaN(n) ? null : n
        } : t.utcParse(Bg), jg = 1e3, Hg = 60 * jg, Xg = 60 * Hg, Gg = 24 * Xg, Vg = 7 * Gg, $g = 30 * Gg, Wg = 365 * Gg,
        Zg = ff("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
        Qg = ff("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
        Jg = ff("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
        Kg = ff("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),
        ty = ff("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
        ny = ff("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
        ey = ff("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
        ry = ff("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
        iy = ff("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),
        oy = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(ff),
        ay = cf(oy),
        uy = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(ff),
        fy = cf(uy),
        cy = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(ff),
        sy = cf(cy),
        ly = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(ff),
        hy = cf(ly),
        dy = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(ff),
        py = cf(dy),
        vy = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(ff),
        gy = cf(vy),
        yy = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(ff),
        _y = cf(yy),
        by = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(ff),
        my = cf(by),
        xy = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(ff),
        wy = cf(xy),
        My = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(ff),
        Ay = cf(My),
        Ty = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(ff),
        Ny = cf(Ty),
        Sy = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(ff),
        Ey = cf(Sy),
        ky = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(ff),
        Cy = cf(ky),
        Py = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(ff),
        zy = cf(Py),
        Ry = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(ff),
        Ly = cf(Ry),
        Dy = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(ff),
        Uy = cf(Dy),
        qy = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(ff),
        Oy = cf(qy),
        Yy = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(ff),
        By = cf(Yy),
        Fy = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(ff),
        Iy = cf(Fy),
        jy = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(ff),
        Hy = cf(jy),
        Xy = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(ff),
        Gy = cf(Xy),
        Vy = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(ff),
        $y = cf(Vy),
        Wy = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(ff),
        Zy = cf(Wy),
        Qy = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(ff),
        Jy = cf(Qy),
        Ky = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(ff),
        t_ = cf(Ky),
        n_ = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(ff),
        e_ = cf(n_),
        r_ = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(ff),
        i_ = cf(r_), o_ = xl(Zt(300, .5, 0), Zt(-240, .5, 1)), a_ = xl(Zt(-100, .75, .35), Zt(80, 1.5, .8)),
        u_ = xl(Zt(260, .75, .35), Zt(80, 1.5, .8)), f_ = Zt(), c_ = Rt(), s_ = Math.PI / 3, l_ = 2 * Math.PI / 3,
        h_ = sf(ff("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
        d_ = sf(ff("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
        p_ = sf(ff("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
        v_ = sf(ff("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),
        g_ = Math.abs, y_ = Math.atan2, __ = Math.cos, b_ = Math.max, m_ = Math.min, x_ = Math.sin, w_ = Math.sqrt,
        M_ = 1e-12, A_ = Math.PI, T_ = A_ / 2, N_ = 2 * A_;
    bf.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._point = 0
        }, lineEnd: function () {
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                default:
                    this._context.lineTo(t, n)
            }
        }
    };
    var S_ = Ef(mf);
    Sf.prototype = {
        areaStart: function () {
            this._curve.areaStart()
        }, areaEnd: function () {
            this._curve.areaEnd()
        }, lineStart: function () {
            this._curve.lineStart()
        }, lineEnd: function () {
            this._curve.lineEnd()
        }, point: function (t, n) {
            this._curve.point(n * Math.sin(t), n * -Math.cos(t))
        }
    };
    var E_ = Array.prototype.slice, k_ = {
        draw: function (t, n) {
            var e = Math.sqrt(n / A_);
            t.moveTo(e, 0), t.arc(0, 0, e, 0, N_)
        }
    }, C_ = {
        draw: function (t, n) {
            var e = Math.sqrt(n / 5) / 2;
            t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
        }
    }, P_ = Math.sqrt(1 / 3), z_ = 2 * P_, R_ = {
        draw: function (t, n) {
            var e = Math.sqrt(n / z_), r = e * P_;
            t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath()
        }
    }, L_ = Math.sin(A_ / 10) / Math.sin(7 * A_ / 10), D_ = Math.sin(N_ / 10) * L_, U_ = -Math.cos(N_ / 10) * L_, q_ = {
        draw: function (t, n) {
            var e = Math.sqrt(.8908130915292852 * n), r = D_ * e, i = U_ * e;
            t.moveTo(0, -e), t.lineTo(r, i);
            for (var o = 1; o < 5; ++o) {
                var a = N_ * o / 5, u = Math.cos(a), f = Math.sin(a);
                t.lineTo(f * e, -u * e), t.lineTo(u * r - f * i, f * r + u * i)
            }
            t.closePath()
        }
    }, O_ = {
        draw: function (t, n) {
            var e = Math.sqrt(n), r = -e / 2;
            t.rect(r, r, e, e)
        }
    }, Y_ = Math.sqrt(3), B_ = {
        draw: function (t, n) {
            var e = -Math.sqrt(n / (3 * Y_));
            t.moveTo(0, 2 * e), t.lineTo(-Y_ * e, -e), t.lineTo(Y_ * e, -e), t.closePath()
        }
    }, F_ = Math.sqrt(3) / 2, I_ = 1 / Math.sqrt(12), j_ = 3 * (I_ / 2 + 1), H_ = {
        draw: function (t, n) {
            var e = Math.sqrt(n / j_), r = e / 2, i = e * I_, o = r, a = e * I_ + e, u = -o, f = a;
            t.moveTo(r, i), t.lineTo(o, a), t.lineTo(u, f), t.lineTo(-.5 * r - F_ * i, F_ * r + -.5 * i), t.lineTo(-.5 * o - F_ * a, F_ * o + -.5 * a), t.lineTo(-.5 * u - F_ * f, F_ * u + -.5 * f), t.lineTo(-.5 * r + F_ * i, -.5 * i - F_ * r), t.lineTo(-.5 * o + F_ * a, -.5 * a - F_ * o), t.lineTo(-.5 * u + F_ * f, -.5 * f - F_ * u), t.closePath()
        }
    }, X_ = [k_, C_, R_, O_, q_, B_, H_];
    Ff.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 3:
                    Bf(this, this._x1, this._y1);
                case 2:
                    this._context.lineTo(this._x1, this._y1)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                default:
                    Bf(this, t, n)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
        }
    }, If.prototype = {
        areaStart: Yf, areaEnd: Yf, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x2, this._y2), this._context.closePath();
                    break;
                case 2:
                    this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
            }
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._x2 = t, this._y2 = n;
                    break;
                case 1:
                    this._point = 2, this._x3 = t, this._y3 = n;
                    break;
                case 2:
                    this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                    break;
                default:
                    Bf(this, t, n)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
        }
    }, jf.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
        }, lineEnd: function () {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                    var e = (this._x0 + 4 * this._x1 + t) / 6, r = (this._y0 + 4 * this._y1 + n) / 6;
                    this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                    break;
                case 3:
                    this._point = 4;
                default:
                    Bf(this, t, n)
            }
            this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
        }
    }, Hf.prototype = {
        lineStart: function () {
            this._x = [], this._y = [], this._basis.lineStart()
        }, lineEnd: function () {
            var t = this._x, n = this._y, e = t.length - 1;
            if (e > 0) for (var r, i = t[0], o = n[0], a = t[e] - i, u = n[e] - o, f = -1; ++f <= e;) r = f / e, this._basis.point(this._beta * t[f] + (1 - this._beta) * (i + r * a), this._beta * n[f] + (1 - this._beta) * (o + r * u));
            this._x = this._y = null, this._basis.lineEnd()
        }, point: function (t, n) {
            this._x.push(+t), this._y.push(+n)
        }
    };
    var G_ = function t(n) {
        function e(t) {
            return 1 === n ? new Ff(t) : new Hf(t, n)
        }

        return e.beta = function (n) {
            return t(+n)
        }, e
    }(.85);
    Gf.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    Xf(this, this._x1, this._y1)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2, this._x1 = t, this._y1 = n;
                    break;
                case 2:
                    this._point = 3;
                default:
                    Xf(this, t, n)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var V_ = function t(n) {
        function e(t) {
            return new Gf(t, n)
        }

        return e.tension = function (n) {
            return t(+n)
        }, e
    }(0);
    Vf.prototype = {
        areaStart: Yf, areaEnd: Yf, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
            }
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = n;
                    break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                    break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = n;
                    break;
                default:
                    Xf(this, t, n)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var $_ = function t(n) {
        function e(t) {
            return new Vf(t, n)
        }

        return e.tension = function (n) {
            return t(+n)
        }, e
    }(0);
    $f.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
        }, lineEnd: function () {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    Xf(this, t, n)
            }
            this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var W_ = function t(n) {
        function e(t) {
            return new $f(t, n)
        }

        return e.tension = function (n) {
            return t(+n)
        }, e
    }(0);
    Zf.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x2, this._y2);
                    break;
                case 3:
                    this.point(this._x2, this._y2)
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t, r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                default:
                    Wf(this, t, n)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var Z_ = function t(n) {
        function e(t) {
            return n ? new Zf(t, n) : new Gf(t, 0)
        }

        return e.alpha = function (n) {
            return t(+n)
        }, e
    }(.5);
    Qf.prototype = {
        areaStart: Yf, areaEnd: Yf, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 1:
                    this._context.moveTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 2:
                    this._context.lineTo(this._x3, this._y3), this._context.closePath();
                    break;
                case 3:
                    this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
            }
        }, point: function (t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t, r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1, this._x3 = t, this._y3 = n;
                    break;
                case 1:
                    this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                    break;
                case 2:
                    this._point = 3, this._x5 = t, this._y5 = n;
                    break;
                default:
                    Wf(this, t, n)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var Q_ = function t(n) {
        function e(t) {
            return n ? new Qf(t, n) : new Vf(t, 0)
        }

        return e.alpha = function (n) {
            return t(+n)
        }, e
    }(.5);
    Jf.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
        }, lineEnd: function () {
            (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            if (t = +t, n = +n, this._point) {
                var e = this._x2 - t, r = this._y2 - n;
                this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
            }
            switch (this._point) {
                case 0:
                    this._point = 1;
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                    break;
                case 3:
                    this._point = 4;
                default:
                    Wf(this, t, n)
            }
            this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
        }
    };
    var J_ = function t(n) {
        function e(t) {
            return n ? new Jf(t, n) : new $f(t, 0)
        }

        return e.alpha = function (n) {
            return t(+n)
        }, e
    }(.5);
    Kf.prototype = {
        areaStart: Yf, areaEnd: Yf, lineStart: function () {
            this._point = 0
        }, lineEnd: function () {
            this._point && this._context.closePath()
        }, point: function (t, n) {
            t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
        }
    }, ic.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
        }, lineEnd: function () {
            switch (this._point) {
                case 2:
                    this._context.lineTo(this._x1, this._y1);
                    break;
                case 3:
                    rc(this, this._t0, ec(this, this._t0))
            }
            (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
        }, point: function (t, n) {
            var e = NaN;
            if (t = +t, n = +n, t !== this._x1 || n !== this._y1) {
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, rc(this, ec(this, e = nc(this, t, n)), e);
                        break;
                    default:
                        rc(this, this._t0, e = nc(this, t, n))
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
            }
        }
    }, (oc.prototype = Object.create(ic.prototype)).point = function (t, n) {
        ic.prototype.point.call(this, n, t)
    }, ac.prototype = {
        moveTo: function (t, n) {
            this._context.moveTo(n, t)
        }, closePath: function () {
            this._context.closePath()
        }, lineTo: function (t, n) {
            this._context.lineTo(n, t)
        }, bezierCurveTo: function (t, n, e, r, i, o) {
            this._context.bezierCurveTo(n, t, r, e, o, i)
        }
    }, uc.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x = [], this._y = []
        }, lineEnd: function () {
            var t = this._x, n = this._y, e = t.length;
            if (e) if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]); else for (var r = fc(t), i = fc(n), o = 0, a = 1; a < e; ++o, ++a) this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[a], n[a]);
            (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
        }, point: function (t, n) {
            this._x.push(+t), this._y.push(+n)
        }
    }, cc.prototype = {
        areaStart: function () {
            this._line = 0
        }, areaEnd: function () {
            this._line = NaN
        }, lineStart: function () {
            this._x = this._y = NaN, this._point = 0
        }, lineEnd: function () {
            0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line)
        }, point: function (t, n) {
            switch (t = +t, n = +n, this._point) {
                case 0:
                    this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                    break;
                case 1:
                    this._point = 2;
                default:
                    if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n); else {
                        var e = this._x * (1 - this._t) + t * this._t;
                        this._context.lineTo(e, this._y), this._context.lineTo(e, n)
                    }
            }
            this._x = t, this._y = n
        }
    }, _c.prototype = {
        constructor: _c, insert: function (t, n) {
            var e, r, i;
            if (t) {
                if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                    for (t = t.R; t.L;) t = t.L;
                    t.L = n
                } else t.R = n;
                e = t
            } else this._ ? (t = wc(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
            for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) e === (r = e.U).L ? (i = r.R) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (mc(this, e), e = (t = e).U), e.C = !1, r.C = !0, xc(this, r)) : (i = r.L) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (xc(this, e), e = (t = e).U), e.C = !1, r.C = !0, mc(this, r)), e = t.U;
            this._.C = !1
        }, remove: function (t) {
            t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
            var n, e, r, i = t.U, o = t.L, a = t.R;
            if (e = o ? a ? wc(a) : o : a, i ? i.L === t ? i.L = e : i.R = e : this._ = e, o && a ? (r = e.C, e.C = t.C, e.L = o, o.U = e, e !== a ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = a, a.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r) if (t && t.C) t.C = !1; else {
                do {
                    if (t === this._) break;
                    if (t === i.L) {
                        if ((n = i.R).C && (n.C = !1, i.C = !0, mc(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
                            n.R && n.R.C || (n.L.C = !1, n.C = !0, xc(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, mc(this, i), t = this._;
                            break
                        }
                    } else if ((n = i.L).C && (n.C = !1, i.C = !0, xc(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
                        n.L && n.L.C || (n.R.C = !1, n.C = !0, mc(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, xc(this, i), t = this._;
                        break
                    }
                    n.C = !0, t = i, i = i.U
                } while (!t.C);
                t && (t.C = !1)
            }
        }
    };
    var K_, tb, nb, eb, rb, ib = [], ob = [], ab = 1e-6, ub = 1e-12;
    Bc.prototype = {
        constructor: Bc, polygons: function () {
            var t = this.edges;
            return this.cells.map(function (n) {
                var e = n.halfedges.map(function (e) {
                    return kc(n, t[e])
                });
                return e.data = n.site.data, e
            })
        }, triangles: function () {
            var t = [], n = this.edges;
            return this.cells.forEach(function (e, r) {
                if (o = (i = e.halfedges).length) for (var i, o, a, u = e.site, f = -1, c = n[i[o - 1]], s = c.left === u ? c.right : c.left; ++f < o;) a = s, s = (c = n[i[f]]).left === u ? c.right : c.left, a && s && r < a.index && r < s.index && Oc(u, a, s) < 0 && t.push([u.data, a.data, s.data])
            }), t
        }, links: function () {
            return this.edges.filter(function (t) {
                return t.right
            }).map(function (t) {
                return {source: t.left.data, target: t.right.data}
            })
        }, find: function (t, n, e) {
            for (var r, i, o = this, a = o._found || 0, u = o.cells.length; !(i = o.cells[a]);) if (++a >= u) return null;
            var f = t - i.site[0], c = n - i.site[1], s = f * f + c * c;
            do {
                i = o.cells[r = a], a = null, i.halfedges.forEach(function (e) {
                    var r = o.edges[e], u = r.left;
                    if (u !== i.site && u || (u = r.right)) {
                        var f = t - u[0], c = n - u[1], l = f * f + c * c;
                        l < s && (s = l, a = u.index)
                    }
                })
            } while (null !== a);
            return o._found = r, null == e || s <= e * e ? i.site : null
        }
    }, Ic.prototype = {
        constructor: Ic, scale: function (t) {
            return 1 === t ? this : new Ic(this.k * t, this.x, this.y)
        }, translate: function (t, n) {
            return 0 === t & 0 === n ? this : new Ic(this.k, this.x + this.k * t, this.y + this.k * n)
        }, apply: function (t) {
            return [t[0] * this.k + this.x, t[1] * this.k + this.y]
        }, applyX: function (t) {
            return t * this.k + this.x
        }, applyY: function (t) {
            return t * this.k + this.y
        }, invert: function (t) {
            return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
        }, invertX: function (t) {
            return (t - this.x) / this.k
        }, invertY: function (t) {
            return (t - this.y) / this.k
        }, rescaleX: function (t) {
            return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
        }, rescaleY: function (t) {
            return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
        }, toString: function () {
            return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
        }
    };
    var fb = new Ic(1, 0, 0);
    jc.prototype = Ic.prototype, t.version = "5.5.0", t.bisect = Kc, t.bisectRight = Kc, t.bisectLeft = ts, t.ascending = n, t.bisector = e, t.cross = function (t, n, e) {
        var i, o, a, u, f = t.length, c = n.length, s = new Array(f * c);
        for (null == e && (e = r), i = a = 0; i < f; ++i) for (u = t[i], o = 0; o < c; ++o, ++a) s[a] = e(u, n[o]);
        return s
    }, t.descending = function (t, n) {
        return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN
    }, t.deviation = a, t.extent = u, t.histogram = function () {
        function t(t) {
            var i, o, a = t.length, u = new Array(a);
            for (i = 0; i < a; ++i) u[i] = n(t[i], i, t);
            var f = e(u), c = f[0], l = f[1], h = r(u, c, l);
            Array.isArray(h) || (h = d(c, l, h), h = s(Math.ceil(c / h) * h, Math.floor(l / h) * h, h));
            for (var p = h.length; h[0] <= c;) h.shift(), --p;
            for (; h[p - 1] > l;) h.pop(), --p;
            var v, g = new Array(p + 1);
            for (i = 0; i <= p; ++i) (v = g[i] = []).x0 = i > 0 ? h[i - 1] : c, v.x1 = i < p ? h[i] : l;
            for (i = 0; i < a; ++i) c <= (o = u[i]) && o <= l && g[Kc(h, o, 0, p)].push(t[i]);
            return g
        }

        var n = c, e = u, r = p;
        return t.value = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : f(e), t) : n
        }, t.domain = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : f([n[0], n[1]]), t) : e
        }, t.thresholds = function (n) {
            return arguments.length ? (r = "function" == typeof n ? n : Array.isArray(n) ? f(es.call(n)) : f(n), t) : r
        }, t
    }, t.thresholdFreedmanDiaconis = function (t, e, r) {
        return t = rs.call(t, i).sort(n), Math.ceil((r - e) / (2 * (v(t, .75) - v(t, .25)) * Math.pow(t.length, -1 / 3)))
    }, t.thresholdScott = function (t, n, e) {
        return Math.ceil((e - n) / (3.5 * a(t) * Math.pow(t.length, -1 / 3)))
    }, t.thresholdSturges = p, t.max = g, t.mean = function (t, n) {
        var e, r = t.length, o = r, a = -1, u = 0;
        if (null == n) for (; ++a < r;) isNaN(e = i(t[a])) ? --o : u += e; else for (; ++a < r;) isNaN(e = i(n(t[a], a, t))) ? --o : u += e;
        if (o) return u / o
    }, t.median = function (t, e) {
        var r, o = t.length, a = -1, u = [];
        if (null == e) for (; ++a < o;) isNaN(r = i(t[a])) || u.push(r); else for (; ++a < o;) isNaN(r = i(e(t[a], a, t))) || u.push(r);
        return v(u.sort(n), .5)
    }, t.merge = y, t.min = _, t.pairs = function (t, n) {
        null == n && (n = r);
        for (var e = 0, i = t.length - 1, o = t[0], a = new Array(i < 0 ? 0 : i); e < i;) a[e] = n(o, o = t[++e]);
        return a
    }, t.permute = function (t, n) {
        for (var e = n.length, r = new Array(e); e--;) r[e] = t[n[e]];
        return r
    }, t.quantile = v, t.range = s, t.scan = function (t, e) {
        if (r = t.length) {
            var r, i, o = 0, a = 0, u = t[a];
            for (null == e && (e = n); ++o < r;) (e(i = t[o], u) < 0 || 0 !== e(u, u)) && (u = i, a = o);
            return 0 === e(u, u) ? a : void 0
        }
    }, t.shuffle = function (t, n, e) {
        for (var r, i, o = (null == e ? t.length : e) - (n = null == n ? 0 : +n); o;) i = Math.random() * o-- | 0, r = t[o + n], t[o + n] = t[i + n], t[i + n] = r;
        return t
    }, t.sum = function (t, n) {
        var e, r = t.length, i = -1, o = 0;
        if (null == n) for (; ++i < r;) (e = +t[i]) && (o += e); else for (; ++i < r;) (e = +n(t[i], i, t)) && (o += e);
        return o
    }, t.ticks = l, t.tickIncrement = h, t.tickStep = d, t.transpose = b, t.variance = o, t.zip = function () {
        return b(arguments)
    }, t.axisTop = function (t) {
        return T(fs, t)
    }, t.axisRight = function (t) {
        return T(cs, t)
    }, t.axisBottom = function (t) {
        return T(ss, t)
    }, t.axisLeft = function (t) {
        return T(ls, t)
    }, t.brush = function () {
        return ee(bh)
    }, t.brushX = function () {
        return ee(yh)
    }, t.brushY = function () {
        return ee(_h)
    }, t.brushSelection = function (t) {
        var n = t.__brush;
        return n ? n.dim.output(n.selection) : null
    }, t.chord = function () {
        function t(t) {
            var o, a, u, f, c, l, h = t.length, d = [], p = s(h), v = [], g = [], y = g.groups = new Array(h),
                _ = new Array(h * h);
            for (o = 0, c = -1; ++c < h;) {
                for (a = 0, l = -1; ++l < h;) a += t[c][l];
                d.push(a), v.push(s(h)), o += a
            }
            for (e && p.sort(function (t, n) {
                return e(d[t], d[n])
            }), r && v.forEach(function (n, e) {
                n.sort(function (n, i) {
                    return r(t[e][n], t[e][i])
                })
            }), f = (o = Ch(0, kh - n * h) / o) ? n : kh / h, a = 0, c = -1; ++c < h;) {
                for (u = a, l = -1; ++l < h;) {
                    var b = p[c], m = v[b][l], x = t[b][m], w = a, M = a += x * o;
                    _[m * h + b] = {index: b, subindex: m, startAngle: w, endAngle: M, value: x}
                }
                y[b] = {index: b, startAngle: u, endAngle: a, value: d[b]}, a += f
            }
            for (c = -1; ++c < h;) for (l = c - 1; ++l < h;) {
                var A = _[l * h + c], T = _[c * h + l];
                (A.value || T.value) && g.push(A.value < T.value ? {source: T, target: A} : {source: A, target: T})
            }
            return i ? g.sort(i) : g
        }

        var n = 0, e = null, r = null, i = null;
        return t.padAngle = function (e) {
            return arguments.length ? (n = Ch(0, e), t) : n
        }, t.sortGroups = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.sortSubgroups = function (n) {
            return arguments.length ? (r = n, t) : r
        }, t.sortChords = function (n) {
            return arguments.length ? (null == n ? i = null : (i = function (t) {
                return function (n, e) {
                    return t(n.source.value + n.target.value, e.source.value + e.target.value)
                }
            }(n))._ = n, t) : i && i._
        }, t
    }, t.ribbon = function () {
        function t() {
            var t, u = Ph.call(arguments), f = n.apply(this, u), c = e.apply(this, u),
                s = +r.apply(this, (u[0] = f, u)), l = i.apply(this, u) - Eh, h = o.apply(this, u) - Eh, d = s * Th(l),
                p = s * Nh(l), v = +r.apply(this, (u[0] = c, u)), g = i.apply(this, u) - Eh, y = o.apply(this, u) - Eh;
            if (a || (a = t = oe()), a.moveTo(d, p), a.arc(0, 0, s, l, h), l === g && h === y || (a.quadraticCurveTo(0, 0, v * Th(g), v * Nh(g)), a.arc(0, 0, v, g, y)), a.quadraticCurveTo(0, 0, d, p), a.closePath(), t) return a = null, t + "" || null
        }

        var n = ae, e = ue, r = fe, i = ce, o = se, a = null;
        return t.radius = function (n) {
            return arguments.length ? (r = "function" == typeof n ? n : re(+n), t) : r
        }, t.startAngle = function (n) {
            return arguments.length ? (i = "function" == typeof n ? n : re(+n), t) : i
        }, t.endAngle = function (n) {
            return arguments.length ? (o = "function" == typeof n ? n : re(+n), t) : o
        }, t.source = function (e) {
            return arguments.length ? (n = e, t) : n
        }, t.target = function (n) {
            return arguments.length ? (e = n, t) : e
        }, t.context = function (n) {
            return arguments.length ? (a = null == n ? null : n, t) : a
        }, t
    }, t.nest = function () {
        function t(n, i, a, u) {
            if (i >= o.length) return null != e && n.sort(e), null != r ? r(n) : n;
            for (var f, c, s, l = -1, h = n.length, d = o[i++], p = he(), v = a(); ++l < h;) (s = p.get(f = d(c = n[l]) + "")) ? s.push(c) : p.set(f, [c]);
            return p.each(function (n, e) {
                u(v, e, t(n, i, a, u))
            }), v
        }

        function n(t, e) {
            if (++e > o.length) return t;
            var i, u = a[e - 1];
            return null != r && e >= o.length ? i = t.entries() : (i = [], t.each(function (t, r) {
                i.push({key: r, values: n(t, e)})
            })), null != u ? i.sort(function (t, n) {
                return u(t.key, n.key)
            }) : i
        }

        var e, r, i, o = [], a = [];
        return i = {
            object: function (n) {
                return t(n, 0, de, pe)
            }, map: function (n) {
                return t(n, 0, ve, ge)
            }, entries: function (e) {
                return n(t(e, 0, ve, ge), 0)
            }, key: function (t) {
                return o.push(t), i
            }, sortKeys: function (t) {
                return a[o.length - 1] = t, i
            }, sortValues: function (t) {
                return e = t, i
            }, rollup: function (t) {
                return r = t, i
            }
        }
    }, t.set = _e, t.map = he, t.keys = function (t) {
        var n = [];
        for (var e in t) n.push(e);
        return n
    }, t.values = function (t) {
        var n = [];
        for (var e in t) n.push(t[e]);
        return n
    }, t.entries = function (t) {
        var n = [];
        for (var e in t) n.push({key: e, value: t[e]});
        return n
    }, t.color = kt, t.rgb = Rt, t.hsl = qt, t.lab = Ft, t.hcl = $t, t.lch = function (t, n, e, r) {
        return 1 === arguments.length ? Vt(t) : new Wt(e, n, t, null == r ? 1 : r)
    }, t.gray = function (t, n) {
        return new It(t, 0, 0, null == n ? 1 : n)
    }, t.cubehelix = Zt, t.contours = Me, t.contourDensity = function () {
        function t(t) {
            var e = new Float32Array(v * y), r = new Float32Array(v * y);
            t.forEach(function (t, n, r) {
                var i = a(t, n, r) + p >> h, o = u(t, n, r) + p >> h;
                i >= 0 && i < v && o >= 0 && o < y && ++e[i + o * v]
            }), Ae({width: v, height: y, data: e}, {width: v, height: y, data: r}, l >> h), Te({
                width: v,
                height: y,
                data: r
            }, {width: v, height: y, data: e}, l >> h), Ae({width: v, height: y, data: e}, {
                width: v,
                height: y,
                data: r
            }, l >> h), Te({width: v, height: y, data: r}, {width: v, height: y, data: e}, l >> h), Ae({
                width: v,
                height: y,
                data: e
            }, {width: v, height: y, data: r}, l >> h), Te({width: v, height: y, data: r}, {
                width: v,
                height: y,
                data: e
            }, l >> h);
            var i = _(e);
            if (!Array.isArray(i)) {
                var o = g(e);
                i = d(0, o, i), (i = s(0, Math.floor(o / i) * i, i)).shift()
            }
            return Me().thresholds(i).size([v, y])(e).map(n)
        }

        function n(t) {
            return t.value *= Math.pow(2, -2 * h), t.coordinates.forEach(e), t
        }

        function e(t) {
            t.forEach(r)
        }

        function r(t) {
            t.forEach(i)
        }

        function i(t) {
            t[0] = t[0] * Math.pow(2, h) - p, t[1] = t[1] * Math.pow(2, h) - p
        }

        function o() {
            return p = 3 * l, v = f + 2 * p >> h, y = c + 2 * p >> h, t
        }

        var a = Ne, u = Se, f = 960, c = 500, l = 20, h = 2, p = 3 * l, v = f + 2 * p >> h, y = c + 2 * p >> h,
            _ = me(20);
        return t.x = function (n) {
            return arguments.length ? (a = "function" == typeof n ? n : me(+n), t) : a
        }, t.y = function (n) {
            return arguments.length ? (u = "function" == typeof n ? n : me(+n), t) : u
        }, t.size = function (t) {
            if (!arguments.length) return [f, c];
            var n = Math.ceil(t[0]), e = Math.ceil(t[1]);
            if (!(n >= 0 || n >= 0)) throw new Error("invalid size");
            return f = n, c = e, o()
        }, t.cellSize = function (t) {
            if (!arguments.length) return 1 << h;
            if (!((t = +t) >= 1)) throw new Error("invalid cell size");
            return h = Math.floor(Math.log(t) / Math.LN2), o()
        }, t.thresholds = function (n) {
            return arguments.length ? (_ = "function" == typeof n ? n : Array.isArray(n) ? me(Uh.call(n)) : me(n), t) : _
        }, t.bandwidth = function (t) {
            if (!arguments.length) return Math.sqrt(l * (l + 1));
            if (!((t = +t) >= 0)) throw new Error("invalid bandwidth");
            return l = Math.round((Math.sqrt(4 * t * t + 1) - 1) / 2), o()
        }, t
    }, t.dispatch = N, t.drag = function () {
        function n(t) {
            t.on("mousedown.drag", e).filter(g).on("touchstart.drag", o).on("touchmove.drag", a).on("touchend.drag touchcancel.drag", u).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        }

        function e() {
            if (!h && d.apply(this, arguments)) {
                var n = f("mouse", p.apply(this, arguments), pt, this, arguments);
                n && (ct(t.event.view).on("mousemove.drag", r, !0).on("mouseup.drag", i, !0), _t(t.event.view), gt(), l = !1, c = t.event.clientX, s = t.event.clientY, n("start"))
            }
        }

        function r() {
            if (yt(), !l) {
                var n = t.event.clientX - c, e = t.event.clientY - s;
                l = n * n + e * e > m
            }
            y.mouse("drag")
        }

        function i() {
            ct(t.event.view).on("mousemove.drag mouseup.drag", null), bt(t.event.view, l), yt(), y.mouse("end")
        }

        function o() {
            if (d.apply(this, arguments)) {
                var n, e, r = t.event.changedTouches, i = p.apply(this, arguments), o = r.length;
                for (n = 0; n < o; ++n) (e = f(r[n].identifier, i, vt, this, arguments)) && (gt(), e("start"))
            }
        }

        function a() {
            var n, e, r = t.event.changedTouches, i = r.length;
            for (n = 0; n < i; ++n) (e = y[r[n].identifier]) && (yt(), e("drag"))
        }

        function u() {
            var n, e, r = t.event.changedTouches, i = r.length;
            for (h && clearTimeout(h), h = setTimeout(function () {
                h = null
            }, 500), n = 0; n < i; ++n) (e = y[r[n].identifier]) && (gt(), e("end"))
        }

        function f(e, r, i, o, a) {
            var u, f, c, s = i(r, e), l = _.copy();
            if (ot(new xt(n, "beforestart", u, e, b, s[0], s[1], 0, 0, l), function () {
                return null != (t.event.subject = u = v.apply(o, a)) && (f = u.x - s[0] || 0, c = u.y - s[1] || 0, !0)
            })) return function t(h) {
                var d, p = s;
                switch (h) {
                    case"start":
                        y[e] = t, d = b++;
                        break;
                    case"end":
                        delete y[e], --b;
                    case"drag":
                        s = i(r, e), d = b
                }
                ot(new xt(n, h, u, e, d, s[0] + f, s[1] + c, s[0] - p[0], s[1] - p[1], l), l.apply, l, [h, o, a])
            }
        }

        var c, s, l, h, d = wt, p = Mt, v = At, g = Tt, y = {}, _ = N("start", "drag", "end"), b = 0, m = 0;
        return n.filter = function (t) {
            return arguments.length ? (d = "function" == typeof t ? t : mt(!!t), n) : d
        }, n.container = function (t) {
            return arguments.length ? (p = "function" == typeof t ? t : mt(t), n) : p
        }, n.subject = function (t) {
            return arguments.length ? (v = "function" == typeof t ? t : mt(t), n) : v
        }, n.touchable = function (t) {
            return arguments.length ? (g = "function" == typeof t ? t : mt(!!t), n) : g
        }, n.on = function () {
            var t = _.on.apply(_, arguments);
            return t === _ ? n : t
        }, n.clickDistance = function (t) {
            return arguments.length ? (m = (t = +t) * t, n) : Math.sqrt(m)
        }, n
    }, t.dragDisable = _t, t.dragEnable = bt, t.dsvFormat = ke, t.csvParse = Hh, t.csvParseRows = Xh, t.csvFormat = Gh, t.csvFormatRows = Vh, t.tsvParse = Wh, t.tsvParseRows = Zh, t.tsvFormat = Qh, t.tsvFormatRows = Jh, t.easeLinear = function (t) {
        return +t
    }, t.easeQuad = Fn, t.easeQuadIn = function (t) {
        return t * t
    }, t.easeQuadOut = function (t) {
        return t * (2 - t)
    }, t.easeQuadInOut = Fn, t.easeCubic = In, t.easeCubicIn = function (t) {
        return t * t * t
    }, t.easeCubicOut = function (t) {
        return --t * t * t + 1
    }, t.easeCubicInOut = In, t.easePoly = Xl, t.easePolyIn = jl, t.easePolyOut = Hl, t.easePolyInOut = Xl, t.easeSin = jn, t.easeSinIn = function (t) {
        return 1 - Math.cos(t * Vl)
    }, t.easeSinOut = function (t) {
        return Math.sin(t * Vl)
    }, t.easeSinInOut = jn, t.easeExp = Hn, t.easeExpIn = function (t) {
        return Math.pow(2, 10 * t - 10)
    }, t.easeExpOut = function (t) {
        return 1 - Math.pow(2, -10 * t)
    }, t.easeExpInOut = Hn, t.easeCircle = Xn, t.easeCircleIn = function (t) {
        return 1 - Math.sqrt(1 - t * t)
    }, t.easeCircleOut = function (t) {
        return Math.sqrt(1 - --t * t)
    }, t.easeCircleInOut = Xn, t.easeBounce = Gn, t.easeBounceIn = function (t) {
        return 1 - Gn(1 - t)
    }, t.easeBounceOut = Gn, t.easeBounceInOut = function (t) {
        return ((t *= 2) <= 1 ? 1 - Gn(1 - t) : Gn(t - 1) + 1) / 2
    },t.easeBack = ah,t.easeBackIn = ih,t.easeBackOut = oh,t.easeBackInOut = ah,t.easeElastic = ch,t.easeElasticIn = fh,t.easeElasticOut = ch,t.easeElasticInOut = sh,t.blob = function (t, n) {
        return fetch(t, n).then(Ce)
    },t.buffer = function (t, n) {
        return fetch(t, n).then(Pe)
    },t.dsv = function (t, n, e, r) {
        3 === arguments.length && "function" == typeof e && (r = e, e = void 0);
        var i = ke(t);
        return Re(n, e).then(function (t) {
            return i.parse(t, r)
        })
    },t.csv = Kh,t.tsv = td,t.image = function (t, n) {
        return new Promise(function (e, r) {
            var i = new Image;
            for (var o in n) i[o] = n[o];
            i.onerror = r, i.onload = function () {
                e(i)
            }, i.src = t
        })
    },t.json = function (t, n) {
        return fetch(t, n).then(De)
    },t.text = Re,t.xml = nd,t.html = ed,t.svg = rd,t.forceCenter = function (t, n) {
        function e() {
            var e, i, o = r.length, a = 0, u = 0;
            for (e = 0; e < o; ++e) a += (i = r[e]).x, u += i.y;
            for (a = a / o - t, u = u / o - n, e = 0; e < o; ++e) (i = r[e]).x -= a, i.y -= u
        }

        var r;
        return null == t && (t = 0), null == n && (n = 0), e.initialize = function (t) {
            r = t
        }, e.x = function (n) {
            return arguments.length ? (t = +n, e) : t
        }, e.y = function (t) {
            return arguments.length ? (n = +t, e) : n
        }, e
    },t.forceCollide = function (t) {
        function n() {
            for (var t, n, r, f, c, s, l, h = i.length, d = 0; d < u; ++d) for (n = je(i, Ge, Ve).visitAfter(e), t = 0; t < h; ++t) r = i[t], s = o[r.index], l = s * s, f = r.x + r.vx, c = r.y + r.vy, n.visit(function (t, n, e, i, o) {
                var u = t.data, h = t.r, d = s + h;
                if (!u) return n > f + d || i < f - d || e > c + d || o < c - d;
                if (u.index > r.index) {
                    var p = f - u.x - u.vx, v = c - u.y - u.vy, g = p * p + v * v;
                    g < d * d && (0 === p && (p = Oe(), g += p * p), 0 === v && (v = Oe(), g += v * v), g = (d - (g = Math.sqrt(g))) / g * a, r.vx += (p *= g) * (d = (h *= h) / (l + h)), r.vy += (v *= g) * d, u.vx -= p * (d = 1 - d), u.vy -= v * d)
                }
            })
        }

        function e(t) {
            if (t.data) return t.r = o[t.data.index];
            for (var n = t.r = 0; n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r)
        }

        function r() {
            if (i) {
                var n, e, r = i.length;
                for (o = new Array(r), n = 0; n < r; ++n) e = i[n], o[e.index] = +t(e, n, i)
            }
        }

        var i, o, a = 1, u = 1;
        return "function" != typeof t && (t = qe(null == t ? 1 : +t)), n.initialize = function (t) {
            i = t, r()
        }, n.iterations = function (t) {
            return arguments.length ? (u = +t, n) : u
        }, n.strength = function (t) {
            return arguments.length ? (a = +t, n) : a
        }, n.radius = function (e) {
            return arguments.length ? (t = "function" == typeof e ? e : qe(+e), r(), n) : t
        }, n
    },t.forceLink = function (t) {
        function n(n) {
            for (var e = 0, r = t.length; e < d; ++e) for (var i, u, f, s, l, h, p, v = 0; v < r; ++v) u = (i = t[v]).source, s = (f = i.target).x + f.vx - u.x - u.vx || Oe(), l = f.y + f.vy - u.y - u.vy || Oe(), s *= h = ((h = Math.sqrt(s * s + l * l)) - a[v]) / h * n * o[v], l *= h, f.vx -= s * (p = c[v]), f.vy -= l * p, u.vx += s * (p = 1 - p), u.vy += l * p
        }

        function e() {
            if (u) {
                var n, e, l = u.length, h = t.length, d = he(u, s);
                for (n = 0, f = new Array(l); n < h; ++n) (e = t[n]).index = n, "object" != typeof e.source && (e.source = We(d, e.source)), "object" != typeof e.target && (e.target = We(d, e.target)), f[e.source.index] = (f[e.source.index] || 0) + 1, f[e.target.index] = (f[e.target.index] || 0) + 1;
                for (n = 0, c = new Array(h); n < h; ++n) e = t[n], c[n] = f[e.source.index] / (f[e.source.index] + f[e.target.index]);
                o = new Array(h), r(), a = new Array(h), i()
            }
        }

        function r() {
            if (u) for (var n = 0, e = t.length; n < e; ++n) o[n] = +l(t[n], n, t)
        }

        function i() {
            if (u) for (var n = 0, e = t.length; n < e; ++n) a[n] = +h(t[n], n, t)
        }

        var o, a, u, f, c, s = $e, l = function (t) {
            return 1 / Math.min(f[t.source.index], f[t.target.index])
        }, h = qe(30), d = 1;
        return null == t && (t = []), n.initialize = function (t) {
            u = t, e()
        }, n.links = function (r) {
            return arguments.length ? (t = r, e(), n) : t
        }, n.id = function (t) {
            return arguments.length ? (s = t, n) : s
        }, n.iterations = function (t) {
            return arguments.length ? (d = +t, n) : d
        }, n.strength = function (t) {
            return arguments.length ? (l = "function" == typeof t ? t : qe(+t), r(), n) : l
        }, n.distance = function (t) {
            return arguments.length ? (h = "function" == typeof t ? t : qe(+t), i(), n) : h
        }, n
    },t.forceManyBody = function () {
        function t(t) {
            var n, u = i.length, f = je(i, Ze, Qe).visitAfter(e);
            for (a = t, n = 0; n < u; ++n) o = i[n], f.visit(r)
        }

        function n() {
            if (i) {
                var t, n, e = i.length;
                for (u = new Array(e), t = 0; t < e; ++t) n = i[t], u[n.index] = +f(n, t, i)
            }
        }

        function e(t) {
            var n, e, r, i, o, a = 0, f = 0;
            if (t.length) {
                for (r = i = o = 0; o < 4; ++o) (n = t[o]) && (e = Math.abs(n.value)) && (a += n.value, f += e, r += e * n.x, i += e * n.y);
                t.x = r / f, t.y = i / f
            } else {
                (n = t).x = n.data.x, n.y = n.data.y;
                do {
                    a += u[n.data.index]
                } while (n = n.next)
            }
            t.value = a
        }

        function r(t, n, e, r) {
            if (!t.value) return !0;
            var i = t.x - o.x, f = t.y - o.y, h = r - n, d = i * i + f * f;
            if (h * h / l < d) return d < s && (0 === i && (i = Oe(), d += i * i), 0 === f && (f = Oe(), d += f * f), d < c && (d = Math.sqrt(c * d)), o.vx += i * t.value * a / d, o.vy += f * t.value * a / d), !0;
            if (!(t.length || d >= s)) {
                (t.data !== o || t.next) && (0 === i && (i = Oe(), d += i * i), 0 === f && (f = Oe(), d += f * f), d < c && (d = Math.sqrt(c * d)));
                do {
                    t.data !== o && (h = u[t.data.index] * a / d, o.vx += i * h, o.vy += f * h)
                } while (t = t.next)
            }
        }

        var i, o, a, u, f = qe(-30), c = 1, s = 1 / 0, l = .81;
        return t.initialize = function (t) {
            i = t, n()
        }, t.strength = function (e) {
            return arguments.length ? (f = "function" == typeof e ? e : qe(+e), n(), t) : f
        }, t.distanceMin = function (n) {
            return arguments.length ? (c = n * n, t) : Math.sqrt(c)
        }, t.distanceMax = function (n) {
            return arguments.length ? (s = n * n, t) : Math.sqrt(s)
        }, t.theta = function (n) {
            return arguments.length ? (l = n * n, t) : Math.sqrt(l)
        }, t
    },t.forceRadial = function (t, n, e) {
        function r(t) {
            for (var r = 0, i = o.length; r < i; ++r) {
                var f = o[r], c = f.x - n || 1e-6, s = f.y - e || 1e-6, l = Math.sqrt(c * c + s * s),
                    h = (u[r] - l) * a[r] * t / l;
                f.vx += c * h, f.vy += s * h
            }
        }

        function i() {
            if (o) {
                var n, e = o.length;
                for (a = new Array(e), u = new Array(e), n = 0; n < e; ++n) u[n] = +t(o[n], n, o), a[n] = isNaN(u[n]) ? 0 : +f(o[n], n, o)
            }
        }

        var o, a, u, f = qe(.1);
        return "function" != typeof t && (t = qe(+t)), null == n && (n = 0), null == e && (e = 0), r.initialize = function (t) {
            o = t, i()
        }, r.strength = function (t) {
            return arguments.length ? (f = "function" == typeof t ? t : qe(+t), i(), r) : f
        }, r.radius = function (n) {
            return arguments.length ? (t = "function" == typeof n ? n : qe(+n), i(), r) : t
        }, r.x = function (t) {
            return arguments.length ? (n = +t, r) : n
        }, r.y = function (t) {
            return arguments.length ? (e = +t, r) : e
        }, r
    },t.forceSimulation = function (t) {
        function n() {
            e(), d.call("tick", o), a < u && (h.stop(), d.call("end", o))
        }

        function e() {
            var n, e, r = t.length;
            for (a += (c - a) * f, l.each(function (t) {
                t(a)
            }), n = 0; n < r; ++n) null == (e = t[n]).fx ? e.x += e.vx *= s : (e.x = e.fx, e.vx = 0), null == e.fy ? e.y += e.vy *= s : (e.y = e.fy, e.vy = 0)
        }

        function r() {
            for (var n, e = 0, r = t.length; e < r; ++e) {
                if (n = t[e], n.index = e, isNaN(n.x) || isNaN(n.y)) {
                    var i = od * Math.sqrt(e), o = e * ad;
                    n.x = i * Math.cos(o), n.y = i * Math.sin(o)
                }
                (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0)
            }
        }

        function i(n) {
            return n.initialize && n.initialize(t), n
        }

        var o, a = 1, u = .001, f = 1 - Math.pow(u, 1 / 300), c = 0, s = .6, l = he(), h = Tn(n), d = N("tick", "end");
        return null == t && (t = []), r(), o = {
            tick: e, restart: function () {
                return h.restart(n), o
            }, stop: function () {
                return h.stop(), o
            }, nodes: function (n) {
                return arguments.length ? (t = n, r(), l.each(i), o) : t
            }, alpha: function (t) {
                return arguments.length ? (a = +t, o) : a
            }, alphaMin: function (t) {
                return arguments.length ? (u = +t, o) : u
            }, alphaDecay: function (t) {
                return arguments.length ? (f = +t, o) : +f
            }, alphaTarget: function (t) {
                return arguments.length ? (c = +t, o) : c
            }, velocityDecay: function (t) {
                return arguments.length ? (s = 1 - t, o) : 1 - s
            }, force: function (t, n) {
                return arguments.length > 1 ? (null == n ? l.remove(t) : l.set(t, i(n)), o) : l.get(t)
            }, find: function (n, e, r) {
                var i, o, a, u, f, c = 0, s = t.length;
                for (null == r ? r = 1 / 0 : r *= r, c = 0; c < s; ++c) (a = (i = n - (u = t[c]).x) * i + (o = e - u.y) * o) < r && (f = u, r = a);
                return f
            }, on: function (t, n) {
                return arguments.length > 1 ? (d.on(t, n), o) : d.on(t)
            }
        }
    },t.forceX = function (t) {
        function n(t) {
            for (var n, e = 0, a = r.length; e < a; ++e) (n = r[e]).vx += (o[e] - n.x) * i[e] * t
        }

        function e() {
            if (r) {
                var n, e = r.length;
                for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +a(r[n], n, r)
            }
        }

        var r, i, o, a = qe(.1);
        return "function" != typeof t && (t = qe(null == t ? 0 : +t)), n.initialize = function (t) {
            r = t, e()
        }, n.strength = function (t) {
            return arguments.length ? (a = "function" == typeof t ? t : qe(+t), e(), n) : a
        }, n.x = function (r) {
            return arguments.length ? (t = "function" == typeof r ? r : qe(+r), e(), n) : t
        }, n
    },t.forceY = function (t) {
        function n(t) {
            for (var n, e = 0, a = r.length; e < a; ++e) (n = r[e]).vy += (o[e] - n.y) * i[e] * t
        }

        function e() {
            if (r) {
                var n, e = r.length;
                for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n) i[n] = isNaN(o[n] = +t(r[n], n, r)) ? 0 : +a(r[n], n, r)
            }
        }

        var r, i, o, a = qe(.1);
        return "function" != typeof t && (t = qe(null == t ? 0 : +t)), n.initialize = function (t) {
            r = t, e()
        }, n.strength = function (t) {
            return arguments.length ? (a = "function" == typeof t ? t : qe(+t), e(), n) : a
        }, n.y = function (r) {
            return arguments.length ? (t = "function" == typeof r ? r : qe(+r), e(), n) : t
        }, n
    },t.formatDefaultLocale = or,t.formatLocale = ir,t.formatSpecifier = tr,t.precisionFixed = ar,t.precisionPrefix = ur,t.precisionRound = fr,t.geoArea = function (t) {
        return dp.reset(), br(t, pp), 2 * dp
    },t.geoBounds = function (t) {
        var n, e, r, i, o, a, u;
        if (md = bd = -(yd = _d = 1 / 0), Td = [], br(t, gp), e = Td.length) {
            for (Td.sort(Yr), n = 1, o = [r = Td[0]]; n < e; ++n) Br(r, (i = Td[n])[0]) || Br(r, i[1]) ? (Or(r[0], i[1]) > Or(r[0], r[1]) && (r[1] = i[1]), Or(i[0], r[1]) > Or(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
            for (a = -1 / 0, n = 0, r = o[e = o.length - 1]; n <= e; r = i, ++n) i = o[n], (u = Or(r[1], i[0])) > a && (a = u, yd = i[0], bd = r[1])
        }
        return Td = Nd = null, yd === 1 / 0 || _d === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[yd, _d], [bd, md]]
    },t.geoCentroid = function (t) {
        Sd = Ed = kd = Cd = Pd = zd = Rd = Ld = Dd = Ud = qd = 0, br(t, yp);
        var n = Dd, e = Ud, r = qd, i = n * n + e * e + r * r;
        return i < Xd && (n = zd, e = Rd, r = Ld, Ed < Hd && (n = kd, e = Cd, r = Pd), (i = n * n + e * e + r * r) < Xd) ? [NaN, NaN] : [tp(e, n) * Zd, dr(r / fp(i)) * Zd]
    },t.geoCircle = function () {
        function t() {
            var t = r.apply(this, arguments), u = i.apply(this, arguments) * Qd, f = o.apply(this, arguments) * Qd;
            return n = [], e = ti(-t[0] * Qd, -t[1] * Qd, 0).invert, oi(a, u, f, 1), t = {
                type: "Polygon",
                coordinates: [n]
            }, n = e = null, t
        }

        var n, e, r = Qr([0, 0]), i = Qr(90), o = Qr(6), a = {
            point: function (t, r) {
                n.push(t = e(t, r)), t[0] *= Zd, t[1] *= Zd
            }
        };
        return t.center = function (n) {
            return arguments.length ? (r = "function" == typeof n ? n : Qr([+n[0], +n[1]]), t) : r
        }, t.radius = function (n) {
            return arguments.length ? (i = "function" == typeof n ? n : Qr(+n), t) : i
        }, t.precision = function (n) {
            return arguments.length ? (o = "function" == typeof n ? n : Qr(+n), t) : o
        }, t
    },t.geoClipAntimeridian = Cp,t.geoClipCircle = gi,t.geoClipExtent = function () {
        var t, n, e, r = 0, i = 0, o = 960, a = 500;
        return e = {
            stream: function (e) {
                return t && n === e ? t : t = yi(r, i, o, a)(n = e)
            }, extent: function (u) {
                return arguments.length ? (r = +u[0][0], i = +u[0][1], o = +u[1][0], a = +u[1][1], t = n = null, e) : [[r, i], [o, a]]
            }
        }
    },t.geoClipRectangle = yi,t.geoContains = function (t, n) {
        return (t && qp.hasOwnProperty(t.type) ? qp[t.type] : Mi)(t, n)
    },t.geoDistance = wi,t.geoGraticule = Pi,t.geoGraticule10 = function () {
        return Pi()()
    },t.geoInterpolate = function (t, n) {
        var e = t[0] * Qd, r = t[1] * Qd, i = n[0] * Qd, o = n[1] * Qd, a = np(r), u = ap(r), f = np(o), c = ap(o),
            s = a * np(e), l = a * ap(e), h = f * np(i), d = f * ap(i), p = 2 * dr(fp(pr(o - r) + a * f * pr(i - e))),
            v = ap(p), g = p ? function (t) {
                var n = ap(t *= p) / v, e = ap(p - t) / v, r = e * s + n * h, i = e * l + n * d, o = e * u + n * c;
                return [tp(i, r) * Zd, tp(o, fp(r * r + i * i)) * Zd]
            } : function () {
                return [e * Zd, r * Zd]
            };
        return g.distance = p, g
    },t.geoLength = xi,t.geoPath = function (t, n) {
        function e(t) {
            return t && ("function" == typeof o && i.pointRadius(+o.apply(this, arguments)), br(t, r(i))), i.result()
        }

        var r, i, o = 4.5;
        return e.area = function (t) {
            return br(t, r(Fp)), Fp.result()
        }, e.measure = function (t) {
            return br(t, r(cv)), cv.result()
        }, e.bounds = function (t) {
            return br(t, r(Gp)), Gp.result()
        }, e.centroid = function (t) {
            return br(t, r(ev)), ev.result()
        }, e.projection = function (n) {
            return arguments.length ? (r = null == n ? (t = null, zi) : (t = n).stream, e) : t
        }, e.context = function (t) {
            return arguments.length ? (i = null == t ? (n = null, new Wi) : new Gi(n = t), "function" != typeof o && i.pointRadius(o), e) : n
        }, e.pointRadius = function (t) {
            return arguments.length ? (o = "function" == typeof t ? t : (i.pointRadius(+t), +t), e) : o
        }, e.projection(t).context(n)
    },t.geoAlbers = lo,t.geoAlbersUsa = function () {
        function t(t) {
            var n = t[0], e = t[1];
            return u = null, i.point(n, e), u || (o.point(n, e), u) || (a.point(n, e), u)
        }

        function n() {
            return e = r = null, t
        }

        var e, r, i, o, a, u, f = lo(), c = so().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
            s = so().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), l = {
                point: function (t, n) {
                    u = [t, n]
                }
            };
        return t.invert = function (t) {
            var n = f.scale(), e = f.translate(), r = (t[0] - e[0]) / n, i = (t[1] - e[1]) / n;
            return (i >= .12 && i < .234 && r >= -.425 && r < -.214 ? c : i >= .166 && i < .234 && r >= -.214 && r < -.115 ? s : f).invert(t)
        }, t.stream = function (t) {
            return e && r === t ? e : e = function (t) {
                var n = t.length;
                return {
                    point: function (e, r) {
                        for (var i = -1; ++i < n;) t[i].point(e, r)
                    }, sphere: function () {
                        for (var e = -1; ++e < n;) t[e].sphere()
                    }, lineStart: function () {
                        for (var e = -1; ++e < n;) t[e].lineStart()
                    }, lineEnd: function () {
                        for (var e = -1; ++e < n;) t[e].lineEnd()
                    }, polygonStart: function () {
                        for (var e = -1; ++e < n;) t[e].polygonStart()
                    }, polygonEnd: function () {
                        for (var e = -1; ++e < n;) t[e].polygonEnd()
                    }
                }
            }([f.stream(r = t), c.stream(t), s.stream(t)])
        }, t.precision = function (t) {
            return arguments.length ? (f.precision(t), c.precision(t), s.precision(t), n()) : f.precision()
        }, t.scale = function (n) {
            return arguments.length ? (f.scale(n), c.scale(.35 * n), s.scale(n), t.translate(f.translate())) : f.scale()
        }, t.translate = function (t) {
            if (!arguments.length) return f.translate();
            var e = f.scale(), r = +t[0], u = +t[1];
            return i = f.translate(t).clipExtent([[r - .455 * e, u - .238 * e], [r + .455 * e, u + .238 * e]]).stream(l), o = c.translate([r - .307 * e, u + .201 * e]).clipExtent([[r - .425 * e + Hd, u + .12 * e + Hd], [r - .214 * e - Hd, u + .234 * e - Hd]]).stream(l), a = s.translate([r - .205 * e, u + .212 * e]).clipExtent([[r - .214 * e + Hd, u + .166 * e + Hd], [r - .115 * e - Hd, u + .234 * e - Hd]]).stream(l), n()
        }, t.fitExtent = function (n, e) {
            return to(t, n, e)
        }, t.fitSize = function (n, e) {
            return no(t, n, e)
        }, t.fitWidth = function (n, e) {
            return eo(t, n, e)
        }, t.fitHeight = function (n, e) {
            return ro(t, n, e)
        }, t.scale(1070)
    },t.geoAzimuthalEqualArea = function () {
        return ao(dv).scale(124.75).clipAngle(179.999)
    },t.geoAzimuthalEqualAreaRaw = dv,t.geoAzimuthalEquidistant = function () {
        return ao(pv).scale(79.4188).clipAngle(179.999)
    },t.geoAzimuthalEquidistantRaw = pv,t.geoConicConformal = function () {
        return fo(_o).scale(109.5).parallels([30, 30])
    },t.geoConicConformalRaw = _o,t.geoConicEqualArea = so,t.geoConicEqualAreaRaw = co,t.geoConicEquidistant = function () {
        return fo(mo).scale(131.154).center([0, 13.9389])
    },t.geoConicEquidistantRaw = mo,t.geoEquirectangular = function () {
        return ao(bo).scale(152.63)
    },t.geoEquirectangularRaw = bo,t.geoGnomonic = function () {
        return ao(xo).scale(144.049).clipAngle(60)
    },t.geoGnomonicRaw = xo,t.geoIdentity = function () {
        function t() {
            return i = o = null, a
        }

        var n, e, r, i, o, a, u = 1, f = 0, c = 0, s = 1, l = 1, h = zi, d = null, p = zi;
        return a = {
            stream: function (t) {
                return i && o === t ? i : i = h(p(o = t))
            }, postclip: function (i) {
                return arguments.length ? (p = i, d = n = e = r = null, t()) : p
            }, clipExtent: function (i) {
                return arguments.length ? (p = null == i ? (d = n = e = r = null, zi) : yi(d = +i[0][0], n = +i[0][1], e = +i[1][0], r = +i[1][1]), t()) : null == d ? null : [[d, n], [e, r]]
            }, scale: function (n) {
                return arguments.length ? (h = wo((u = +n) * s, u * l, f, c), t()) : u
            }, translate: function (n) {
                return arguments.length ? (h = wo(u * s, u * l, f = +n[0], c = +n[1]), t()) : [f, c]
            }, reflectX: function (n) {
                return arguments.length ? (h = wo(u * (s = n ? -1 : 1), u * l, f, c), t()) : s < 0
            }, reflectY: function (n) {
                return arguments.length ? (h = wo(u * s, u * (l = n ? -1 : 1), f, c), t()) : l < 0
            }, fitExtent: function (t, n) {
                return to(a, t, n)
            }, fitSize: function (t, n) {
                return no(a, t, n)
            }, fitWidth: function (t, n) {
                return eo(a, t, n)
            }, fitHeight: function (t, n) {
                return ro(a, t, n)
            }
        }
    },t.geoProjection = ao,t.geoProjectionMutator = uo,t.geoMercator = function () {
        return go(vo).scale(961 / Wd)
    },t.geoMercatorRaw = vo,t.geoNaturalEarth1 = function () {
        return ao(Mo).scale(175.295)
    },t.geoNaturalEarth1Raw = Mo,t.geoOrthographic = function () {
        return ao(Ao).scale(249.5).clipAngle(90 + Hd)
    },t.geoOrthographicRaw = Ao,t.geoStereographic = function () {
        return ao(To).scale(250).clipAngle(142)
    },t.geoStereographicRaw = To,t.geoTransverseMercator = function () {
        var t = go(No), n = t.center, e = t.rotate;
        return t.center = function (t) {
            return arguments.length ? n([-t[1], t[0]]) : (t = n(), [t[1], -t[0]])
        }, t.rotate = function (t) {
            return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : (t = e(), [t[0], t[1], t[2] - 90])
        }, e([0, 0, 90]).scale(159.155)
    },t.geoTransverseMercatorRaw = No,t.geoRotation = ii,t.geoStream = br,t.geoTransform = function (t) {
        return {stream: Qi(t)}
    },t.cluster = function () {
        function t(t) {
            var o, a = 0;
            t.eachAfter(function (t) {
                var e = t.children;
                e ? (t.x = function (t) {
                    return t.reduce(Eo, 0) / t.length
                }(e), t.y = function (t) {
                    return 1 + t.reduce(ko, 0)
                }(e)) : (t.x = o ? a += n(t, o) : 0, t.y = 0, o = t)
            });
            var u = function (t) {
                for (var n; n = t.children;) t = n[0];
                return t
            }(t), f = function (t) {
                for (var n; n = t.children;) t = n[n.length - 1];
                return t
            }(t), c = u.x - n(u, f) / 2, s = f.x + n(f, u) / 2;
            return t.eachAfter(i ? function (n) {
                n.x = (n.x - t.x) * e, n.y = (t.y - n.y) * r
            } : function (n) {
                n.x = (n.x - c) / (s - c) * e, n.y = (1 - (t.y ? n.y / t.y : 1)) * r
            })
        }

        var n = So, e = 1, r = 1, i = !1;
        return t.separation = function (e) {
            return arguments.length ? (n = e, t) : n
        }, t.size = function (n) {
            return arguments.length ? (i = !1, e = +n[0], r = +n[1], t) : i ? null : [e, r]
        }, t.nodeSize = function (n) {
            return arguments.length ? (i = !0, e = +n[0], r = +n[1], t) : i ? [e, r] : null
        }, t
    },t.hierarchy = Po,t.pack = function () {
        function t(t) {
            return t.x = e / 2, t.y = r / 2, n ? t.eachBefore(Qo(n)).eachAfter(Jo(i, .5)).eachBefore(Ko(1)) : t.eachBefore(Qo(Zo)).eachAfter(Jo($o, 1)).eachAfter(Jo(i, t.r / Math.min(e, r))).eachBefore(Ko(Math.min(e, r) / (2 * t.r))), t
        }

        var n = null, e = 1, r = 1, i = $o;
        return t.radius = function (e) {
            return arguments.length ? (n = function (t) {
                return null == t ? null : Vo(t)
            }(e), t) : n
        }, t.size = function (n) {
            return arguments.length ? (e = +n[0], r = +n[1], t) : [e, r]
        }, t.padding = function (n) {
            return arguments.length ? (i = "function" == typeof n ? n : Wo(+n), t) : i
        }, t
    },t.packSiblings = function (t) {
        return Go(t), t
    },t.packEnclose = Uo,t.partition = function () {
        function t(t) {
            var o = t.height + 1;
            return t.x0 = t.y0 = r, t.x1 = n, t.y1 = e / o, t.eachBefore(function (t, n) {
                return function (e) {
                    e.children && na(e, e.x0, t * (e.depth + 1) / n, e.x1, t * (e.depth + 2) / n);
                    var i = e.x0, o = e.y0, a = e.x1 - r, u = e.y1 - r;
                    a < i && (i = a = (i + a) / 2), u < o && (o = u = (o + u) / 2), e.x0 = i, e.y0 = o, e.x1 = a, e.y1 = u
                }
            }(e, o)), i && t.eachBefore(ta), t
        }

        var n = 1, e = 1, r = 0, i = !1;
        return t.round = function (n) {
            return arguments.length ? (i = !!n, t) : i
        }, t.size = function (r) {
            return arguments.length ? (n = +r[0], e = +r[1], t) : [n, e]
        }, t.padding = function (n) {
            return arguments.length ? (r = +n, t) : r
        }, t
    },t.stratify = function () {
        function t(t) {
            var r, i, o, a, u, f, c, s = t.length, l = new Array(s), h = {};
            for (i = 0; i < s; ++i) r = t[i], u = l[i] = new Do(r), null != (f = n(r, i, t)) && (f += "") && (h[c = gv + (u.id = f)] = c in h ? _v : u);
            for (i = 0; i < s; ++i) if (u = l[i], null != (f = e(t[i], i, t)) && (f += "")) {
                if (!(a = h[gv + f])) throw new Error("missing: " + f);
                if (a === _v) throw new Error("ambiguous: " + f);
                a.children ? a.children.push(u) : a.children = [u], u.parent = a
            } else {
                if (o) throw new Error("multiple roots");
                o = u
            }
            if (!o) throw new Error("no root");
            if (o.parent = yv, o.eachBefore(function (t) {
                t.depth = t.parent.depth + 1, --s
            }).eachBefore(Lo), o.parent = null, s > 0) throw new Error("cycle");
            return o
        }

        var n = ea, e = ra;
        return t.id = function (e) {
            return arguments.length ? (n = Vo(e), t) : n
        }, t.parentId = function (n) {
            return arguments.length ? (e = Vo(n), t) : e
        }, t
    },t.tree = function () {
        function t(t) {
            var f = function (t) {
                for (var n, e, r, i, o, a = new ca(t, 0), u = [a]; n = u.pop();) if (r = n._.children) for (n.children = new Array(o = r.length), i = o - 1; i >= 0; --i) u.push(e = n.children[i] = new ca(r[i], i)), e.parent = n;
                return (a.parent = new ca(null, 0)).children = [a], a
            }(t);
            if (f.eachAfter(n), f.parent.m = -f.z, f.eachBefore(e), u) t.eachBefore(r); else {
                var c = t, s = t, l = t;
                t.eachBefore(function (t) {
                    t.x < c.x && (c = t), t.x > s.x && (s = t), t.depth > l.depth && (l = t)
                });
                var h = c === s ? 1 : i(c, s) / 2, d = h - c.x, p = o / (s.x + h + d), v = a / (l.depth || 1);
                t.eachBefore(function (t) {
                    t.x = (t.x + d) * p, t.y = t.depth * v
                })
            }
            return t
        }

        function n(t) {
            var n = t.children, e = t.parent.children, r = t.i ? e[t.i - 1] : null;
            if (n) {
                (function (t) {
                    for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0;) (n = i[o]).z += e, n.m += e, e += n.s + (r += n.c)
                })(t);
                var o = (n[0].z + n[n.length - 1].z) / 2;
                r ? (t.z = r.z + i(t._, r._), t.m = t.z - o) : t.z = o
            } else r && (t.z = r.z + i(t._, r._));
            t.parent.A = function (t, n, e) {
                if (n) {
                    for (var r, o = t, a = t, u = n, f = o.parent.children[0], c = o.m, s = a.m, l = u.m, h = f.m; u = aa(u), o = oa(o), u && o;) f = oa(f), (a = aa(a)).a = t, (r = u.z + l - o.z - c + i(u._, o._)) > 0 && (ua(fa(u, t, e), t, r), c += r, s += r), l += u.m, c += o.m, h += f.m, s += a.m;
                    u && !aa(a) && (a.t = u, a.m += l - s), o && !oa(f) && (f.t = o, f.m += c - h, e = t)
                }
                return e
            }(t, r, t.parent.A || e[0])
        }

        function e(t) {
            t._.x = t.z + t.parent.m, t.m += t.parent.m
        }

        function r(t) {
            t.x *= o, t.y = t.depth * a
        }

        var i = ia, o = 1, a = 1, u = null;
        return t.separation = function (n) {
            return arguments.length ? (i = n, t) : i
        }, t.size = function (n) {
            return arguments.length ? (u = !1, o = +n[0], a = +n[1], t) : u ? null : [o, a]
        }, t.nodeSize = function (n) {
            return arguments.length ? (u = !0, o = +n[0], a = +n[1], t) : u ? [o, a] : null
        }, t
    },t.treemap = function () {
        function t(t) {
            return t.x0 = t.y0 = 0, t.x1 = i, t.y1 = o, t.eachBefore(n), a = [0], r && t.eachBefore(ta), t
        }

        function n(t) {
            var n = a[t.depth], r = t.x0 + n, i = t.y0 + n, o = t.x1 - n, h = t.y1 - n;
            o < r && (r = o = (r + o) / 2), h < i && (i = h = (i + h) / 2), t.x0 = r, t.y0 = i, t.x1 = o, t.y1 = h, t.children && (n = a[t.depth + 1] = u(t) / 2, r += l(t) - n, i += f(t) - n, o -= c(t) - n, h -= s(t) - n, o < r && (r = o = (r + o) / 2), h < i && (i = h = (i + h) / 2), e(t, r, i, o, h))
        }

        var e = mv, r = !1, i = 1, o = 1, a = [0], u = $o, f = $o, c = $o, s = $o, l = $o;
        return t.round = function (n) {
            return arguments.length ? (r = !!n, t) : r
        }, t.size = function (n) {
            return arguments.length ? (i = +n[0], o = +n[1], t) : [i, o]
        }, t.tile = function (n) {
            return arguments.length ? (e = Vo(n), t) : e
        }, t.padding = function (n) {
            return arguments.length ? t.paddingInner(n).paddingOuter(n) : t.paddingInner()
        }, t.paddingInner = function (n) {
            return arguments.length ? (u = "function" == typeof n ? n : Wo(+n), t) : u
        }, t.paddingOuter = function (n) {
            return arguments.length ? t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n) : t.paddingTop()
        }, t.paddingTop = function (n) {
            return arguments.length ? (f = "function" == typeof n ? n : Wo(+n), t) : f
        }, t.paddingRight = function (n) {
            return arguments.length ? (c = "function" == typeof n ? n : Wo(+n), t) : c
        }, t.paddingBottom = function (n) {
            return arguments.length ? (s = "function" == typeof n ? n : Wo(+n), t) : s
        }, t.paddingLeft = function (n) {
            return arguments.length ? (l = "function" == typeof n ? n : Wo(+n), t) : l
        }, t
    },t.treemapBinary = function (t, n, e, r, i) {
        function o(t, n, e, r, i, a, u) {
            if (t >= n - 1) {
                var c = f[t];
                return c.x0 = r, c.y0 = i, c.x1 = a, void(c.y1 = u)
            }
            for (var l = s[t], h = e / 2 + l, d = t + 1, p = n - 1; d < p;) {
                var v = d + p >>> 1;
                s[v] < h ? d = v + 1 : p = v
            }
            h - s[d - 1] < s[d] - h && t + 1 < d && --d;
            var g = s[d] - l, y = e - g;
            if (a - r > u - i) {
                var _ = (r * y + a * g) / e;
                o(t, d, g, r, i, _, u), o(d, n, y, _, i, a, u)
            } else {
                var b = (i * y + u * g) / e;
                o(t, d, g, r, i, a, b), o(d, n, y, r, b, a, u)
            }
        }

        var a, u, f = t.children, c = f.length, s = new Array(c + 1);
        for (s[0] = u = a = 0; a < c; ++a) s[a + 1] = u += f[a].value;
        o(0, c, t.value, n, e, r, i)
    },t.treemapDice = na,t.treemapSlice = sa,t.treemapSliceDice = function (t, n, e, r, i) {
        (1 & t.depth ? sa : na)(t, n, e, r, i)
    },t.treemapSquarify = mv,t.treemapResquarify = xv,t.interpolate = dn,t.interpolateArray = fn,t.interpolateBasis = Kt,t.interpolateBasisClosed = tn,t.interpolateDate = cn,t.interpolateNumber = sn,t.interpolateObject = ln,t.interpolateRound = pn,t.interpolateString = hn,t.interpolateTransformCss = sl,t.interpolateTransformSvg = ll,t.interpolateZoom = _n,t.interpolateRgb = rl,t.interpolateRgbBasis = il,t.interpolateRgbBasisClosed = ol,t.interpolateHsl = gl,t.interpolateHslLong = yl,t.interpolateLab = function (t, n) {
        var e = an((t = Ft(t)).l, (n = Ft(n)).l), r = an(t.a, n.a), i = an(t.b, n.b), o = an(t.opacity, n.opacity);
        return function (n) {
            return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = o(n), t + ""
        }
    },t.interpolateHcl = _l,t.interpolateHclLong = bl,t.interpolateCubehelix = ml,t.interpolateCubehelixLong = xl,t.piecewise = function (t, n) {
        for (var e = 0, r = n.length - 1, i = n[0], o = new Array(r < 0 ? 0 : r); e < r;) o[e] = t(i, i = n[++e]);
        return function (t) {
            var n = Math.max(0, Math.min(r - 1, Math.floor(t *= r)));
            return o[n](t - n)
        }
    },t.quantize = function (t, n) {
        for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
        return e
    },t.path = oe,t.polygonArea = function (t) {
        for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r;) n = i, i = t[e], o += n[1] * i[0] - n[0] * i[1];
        return o / 2
    },t.polygonCentroid = function (t) {
        for (var n, e, r = -1, i = t.length, o = 0, a = 0, u = t[i - 1], f = 0; ++r < i;) n = u, u = t[r], f += e = n[0] * u[1] - u[0] * n[1], o += (n[0] + u[0]) * e, a += (n[1] + u[1]) * e;
        return f *= 3, [o / f, a / f]
    },t.polygonHull = function (t) {
        if ((e = t.length) < 3) return null;
        var n, e, r = new Array(e), i = new Array(e);
        for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n];
        for (r.sort(da), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]];
        var o = pa(r), a = pa(i), u = a[0] === o[0], f = a[a.length - 1] === o[o.length - 1], c = [];
        for (n = o.length - 1; n >= 0; --n) c.push(t[r[o[n]][2]]);
        for (n = +u; n < a.length - f; ++n) c.push(t[r[a[n]][2]]);
        return c
    },t.polygonContains = function (t, n) {
        for (var e, r, i = t.length, o = t[i - 1], a = n[0], u = n[1], f = o[0], c = o[1], s = !1, l = 0; l < i; ++l) e = (o = t[l])[0], (r = o[1]) > u != c > u && a < (f - e) * (u - r) / (c - r) + e && (s = !s), f = e, c = r;
        return s
    },t.polygonLength = function (t) {
        for (var n, e, r = -1, i = t.length, o = t[i - 1], a = o[0], u = o[1], f = 0; ++r < i;) n = a, e = u, n -= a = (o = t[r])[0], e -= u = o[1], f += Math.sqrt(n * n + e * e);
        return f
    },t.quadtree = je,t.randomUniform = wv,t.randomNormal = Mv,t.randomLogNormal = Av,t.randomBates = Nv,t.randomIrwinHall = Tv,t.randomExponential = Sv,t.scaleBand = ya,t.scalePoint = function () {
        return _a(ya().paddingInner(1))
    },t.scaleIdentity = Ea,t.scaleLinear = Sa,t.scaleLog = Ua,t.scaleOrdinal = ga,t.scaleImplicit = Pv,t.scalePow = Oa,t.scaleSqrt = function () {
        return Oa().exponent(.5)
    },t.scaleQuantile = Ya,t.scaleQuantize = Ba,t.scaleThreshold = Fa,t.scaleTime = function () {
        return of(cg, ug, Vv, Xv, jv, Fv, Yv, Dv, t.timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
    },t.scaleUtc = function () {
        return of(Rg, Pg, yg, vg, dg, lg, Yv, Dv, t.utcFormat).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
    },t.scaleSequential = af,t.scaleDiverging = uf,t.schemeCategory10 = Zg,t.schemeAccent = Qg,t.schemeDark2 = Jg,t.schemePaired = Kg,t.schemePastel1 = ty,t.schemePastel2 = ny,t.schemeSet1 = ey,t.schemeSet2 = ry,t.schemeSet3 = iy,t.interpolateBrBG = ay,t.schemeBrBG = oy,t.interpolatePRGn = fy,t.schemePRGn = uy,t.interpolatePiYG = sy,t.schemePiYG = cy,t.interpolatePuOr = hy,t.schemePuOr = ly,t.interpolateRdBu = py,t.schemeRdBu = dy,t.interpolateRdGy = gy,t.schemeRdGy = vy,t.interpolateRdYlBu = _y,t.schemeRdYlBu = yy,t.interpolateRdYlGn = my,t.schemeRdYlGn = by,t.interpolateSpectral = wy,t.schemeSpectral = xy,t.interpolateBuGn = Ay,t.schemeBuGn = My,t.interpolateBuPu = Ny,t.schemeBuPu = Ty,t.interpolateGnBu = Ey,t.schemeGnBu = Sy,t.interpolateOrRd = Cy,t.schemeOrRd = ky,t.interpolatePuBuGn = zy,t.schemePuBuGn = Py,t.interpolatePuBu = Ly,t.schemePuBu = Ry,t.interpolatePuRd = Uy,t.schemePuRd = Dy,t.interpolateRdPu = Oy,t.schemeRdPu = qy,t.interpolateYlGnBu = By,t.schemeYlGnBu = Yy,t.interpolateYlGn = Iy,t.schemeYlGn = Fy,t.interpolateYlOrBr = Hy,t.schemeYlOrBr = jy,t.interpolateYlOrRd = Gy,t.schemeYlOrRd = Xy,t.interpolateBlues = $y,t.schemeBlues = Vy,t.interpolateGreens = Zy,t.schemeGreens = Wy,t.interpolateGreys = Jy,t.schemeGreys = Qy,t.interpolatePurples = t_,t.schemePurples = Ky,t.interpolateReds = e_,t.schemeReds = n_,t.interpolateOranges = i_,t.schemeOranges = r_,t.interpolateCubehelixDefault = o_,t.interpolateRainbow = function (t) {
        (t < 0 || t > 1) && (t -= Math.floor(t));
        var n = Math.abs(t - .5);
        return f_.h = 360 * t - 100, f_.s = 1.5 - 1.5 * n, f_.l = .8 - .9 * n, f_ + ""
    },t.interpolateWarm = a_,t.interpolateCool = u_,t.interpolateSinebow = function (t) {
        var n;
        return t = (.5 - t) * Math.PI, c_.r = 255 * (n = Math.sin(t)) * n, c_.g = 255 * (n = Math.sin(t + s_)) * n, c_.b = 255 * (n = Math.sin(t + l_)) * n, c_ + ""
    },t.interpolateViridis = h_,t.interpolateMagma = d_,t.interpolateInferno = p_,t.interpolatePlasma = v_,t.create = function (t) {
        return ct(C(t).call(document.documentElement))
    },t.creator = C,t.local = st,t.matcher = bs,t.mouse = pt,t.namespace = k,t.namespaces = vs,t.clientPoint = dt,t.select = ct,t.selectAll = function (t) {
        return "string" == typeof t ? new ut([document.querySelectorAll(t)], [document.documentElement]) : new ut([null == t ? [] : t], ws)
    },t.selection = ft,t.selector = z,t.selectorAll = L,t.style = F,t.touch = vt,t.touches = function (t, n) {
        null == n && (n = ht().touches);
        for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e) i[e] = dt(t, n[e]);
        return i
    },t.window = B,t.customEvent = ot,t.arc = function () {
        function t() {
            var t, c, s = +n.apply(this, arguments), l = +e.apply(this, arguments), h = o.apply(this, arguments) - T_,
                d = a.apply(this, arguments) - T_, p = g_(d - h), v = d > h;
            if (f || (f = t = oe()), l < s && (c = l, l = s, s = c), l > M_) if (p > N_ - M_) f.moveTo(l * __(h), l * x_(h)), f.arc(0, 0, l, h, d, !v), s > M_ && (f.moveTo(s * __(d), s * x_(d)), f.arc(0, 0, s, d, h, v)); else {
                var g, y, _ = h, b = d, m = h, x = d, w = p, M = p, A = u.apply(this, arguments) / 2,
                    T = A > M_ && (i ? +i.apply(this, arguments) : w_(s * s + l * l)),
                    N = m_(g_(l - s) / 2, +r.apply(this, arguments)), S = N, E = N;
                if (T > M_) {
                    var k = hf(T / s * x_(A)), C = hf(T / l * x_(A));
                    (w -= 2 * k) > M_ ? (k *= v ? 1 : -1, m += k, x -= k) : (w = 0, m = x = (h + d) / 2), (M -= 2 * C) > M_ ? (C *= v ? 1 : -1, _ += C, b -= C) : (M = 0, _ = b = (h + d) / 2)
                }
                var P = l * __(_), z = l * x_(_), R = s * __(x), L = s * x_(x);
                if (N > M_) {
                    var D = l * __(b), U = l * x_(b), q = s * __(m), O = s * x_(m);
                    if (p < A_) {
                        var Y = w > M_ ? function (t, n, e, r, i, o, a, u) {
                                var f = e - t, c = r - n, s = a - i, l = u - o,
                                    h = (s * (n - o) - l * (t - i)) / (l * f - s * c);
                                return [t + h * f, n + h * c]
                            }(P, z, q, O, D, U, R, L) : [R, L], B = P - Y[0], F = z - Y[1], I = D - Y[0], j = U - Y[1],
                            H = 1 / x_(function (t) {
                                return t > 1 ? 0 : t < -1 ? A_ : Math.acos(t)
                            }((B * I + F * j) / (w_(B * B + F * F) * w_(I * I + j * j))) / 2),
                            X = w_(Y[0] * Y[0] + Y[1] * Y[1]);
                        S = m_(N, (s - X) / (H - 1)), E = m_(N, (l - X) / (H + 1))
                    }
                }
                M > M_ ? E > M_ ? (g = _f(q, O, P, z, l, E, v), y = _f(D, U, R, L, l, E, v), f.moveTo(g.cx + g.x01, g.cy + g.y01), E < N ? f.arc(g.cx, g.cy, E, y_(g.y01, g.x01), y_(y.y01, y.x01), !v) : (f.arc(g.cx, g.cy, E, y_(g.y01, g.x01), y_(g.y11, g.x11), !v), f.arc(0, 0, l, y_(g.cy + g.y11, g.cx + g.x11), y_(y.cy + y.y11, y.cx + y.x11), !v), f.arc(y.cx, y.cy, E, y_(y.y11, y.x11), y_(y.y01, y.x01), !v))) : (f.moveTo(P, z), f.arc(0, 0, l, _, b, !v)) : f.moveTo(P, z), s > M_ && w > M_ ? S > M_ ? (g = _f(R, L, D, U, s, -S, v), y = _f(P, z, q, O, s, -S, v), f.lineTo(g.cx + g.x01, g.cy + g.y01), S < N ? f.arc(g.cx, g.cy, S, y_(g.y01, g.x01), y_(y.y01, y.x01), !v) : (f.arc(g.cx, g.cy, S, y_(g.y01, g.x01), y_(g.y11, g.x11), !v), f.arc(0, 0, s, y_(g.cy + g.y11, g.cx + g.x11), y_(y.cy + y.y11, y.cx + y.x11), v), f.arc(y.cx, y.cy, S, y_(y.y11, y.x11), y_(y.y01, y.x01), !v))) : f.arc(0, 0, s, x, m, v) : f.lineTo(R, L)
            } else f.moveTo(0, 0);
            if (f.closePath(), t) return f = null, t + "" || null
        }

        var n = df, e = pf, r = lf(0), i = null, o = vf, a = gf, u = yf, f = null;
        return t.centroid = function () {
            var t = (+n.apply(this, arguments) + +e.apply(this, arguments)) / 2,
                r = (+o.apply(this, arguments) + +a.apply(this, arguments)) / 2 - A_ / 2;
            return [__(r) * t, x_(r) * t]
        }, t.innerRadius = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : lf(+e), t) : n
        }, t.outerRadius = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : lf(+n), t) : e
        }, t.cornerRadius = function (n) {
            return arguments.length ? (r = "function" == typeof n ? n : lf(+n), t) : r
        }, t.padRadius = function (n) {
            return arguments.length ? (i = null == n ? null : "function" == typeof n ? n : lf(+n), t) : i
        }, t.startAngle = function (n) {
            return arguments.length ? (o = "function" == typeof n ? n : lf(+n), t) : o
        }, t.endAngle = function (n) {
            return arguments.length ? (a = "function" == typeof n ? n : lf(+n), t) : a
        }, t.padAngle = function (n) {
            return arguments.length ? (u = "function" == typeof n ? n : lf(+n), t) : u
        }, t.context = function (n) {
            return arguments.length ? (f = null == n ? null : n, t) : f
        }, t
    },t.area = Af,t.line = Mf,t.pie = function () {
        function t(t) {
            var u, f, c, s, l, h = t.length, d = 0, p = new Array(h), v = new Array(h), g = +i.apply(this, arguments),
                y = Math.min(N_, Math.max(-N_, o.apply(this, arguments) - g)),
                _ = Math.min(Math.abs(y) / h, a.apply(this, arguments)), b = _ * (y < 0 ? -1 : 1);
            for (u = 0; u < h; ++u) (l = v[p[u] = u] = +n(t[u], u, t)) > 0 && (d += l);
            for (null != e ? p.sort(function (t, n) {
                return e(v[t], v[n])
            }) : null != r && p.sort(function (n, e) {
                return r(t[n], t[e])
            }), u = 0, c = d ? (y - h * b) / d : 0; u < h; ++u, g = s) f = p[u], s = g + ((l = v[f]) > 0 ? l * c : 0) + b, v[f] = {
                data: t[f],
                index: u,
                value: l,
                startAngle: g,
                endAngle: s,
                padAngle: _
            };
            return v
        }

        var n = Nf, e = Tf, r = null, i = lf(0), o = lf(N_), a = lf(0);
        return t.value = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : lf(+e), t) : n
        }, t.sortValues = function (n) {
            return arguments.length ? (e = n, r = null, t) : e
        }, t.sort = function (n) {
            return arguments.length ? (r = n, e = null, t) : r
        }, t.startAngle = function (n) {
            return arguments.length ? (i = "function" == typeof n ? n : lf(+n), t) : i
        }, t.endAngle = function (n) {
            return arguments.length ? (o = "function" == typeof n ? n : lf(+n), t) : o
        }, t.padAngle = function (n) {
            return arguments.length ? (a = "function" == typeof n ? n : lf(+n), t) : a
        }, t
    },t.areaRadial = Pf,t.radialArea = Pf,t.lineRadial = Cf,t.radialLine = Cf,t.pointRadial = zf,t.linkHorizontal = function () {
        return Df(Uf)
    },t.linkVertical = function () {
        return Df(qf)
    },t.linkRadial = function () {
        var t = Df(Of);
        return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t
    },t.symbol = function () {
        function t() {
            var t;
            if (r || (r = t = oe()), n.apply(this, arguments).draw(r, +e.apply(this, arguments)), t) return r = null, t + "" || null
        }

        var n = lf(k_), e = lf(64), r = null;
        return t.type = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : lf(e), t) : n
        }, t.size = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : lf(+n), t) : e
        }, t.context = function (n) {
            return arguments.length ? (r = null == n ? null : n, t) : r
        }, t
    },t.symbols = X_,t.symbolCircle = k_,t.symbolCross = C_,t.symbolDiamond = R_,t.symbolSquare = O_,t.symbolStar = q_,t.symbolTriangle = B_,t.symbolWye = H_,t.curveBasisClosed = function (t) {
        return new If(t)
    },t.curveBasisOpen = function (t) {
        return new jf(t)
    },t.curveBasis = function (t) {
        return new Ff(t)
    },t.curveBundle = G_,t.curveCardinalClosed = $_,t.curveCardinalOpen = W_,t.curveCardinal = V_,t.curveCatmullRomClosed = Q_,t.curveCatmullRomOpen = J_,t.curveCatmullRom = Z_,t.curveLinearClosed = function (t) {
        return new Kf(t)
    },t.curveLinear = mf,t.curveMonotoneX = function (t) {
        return new ic(t)
    },t.curveMonotoneY = function (t) {
        return new oc(t)
    },t.curveNatural = function (t) {
        return new uc(t)
    },t.curveStep = function (t) {
        return new cc(t, .5)
    },t.curveStepAfter = function (t) {
        return new cc(t, 1)
    },t.curveStepBefore = function (t) {
        return new cc(t, 0)
    },t.stack = function () {
        function t(t) {
            var o, a, u = n.apply(this, arguments), f = t.length, c = u.length, s = new Array(c);
            for (o = 0; o < c; ++o) {
                for (var l, h = u[o], d = s[o] = new Array(f), p = 0; p < f; ++p) d[p] = l = [0, +i(t[p], h, p, t)], l.data = t[p];
                d.key = h
            }
            for (o = 0, a = e(s); o < c; ++o) s[a[o]].index = o;
            return r(s, a), s
        }

        var n = lf([]), e = lc, r = sc, i = hc;
        return t.keys = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : lf(E_.call(e)), t) : n
        }, t.value = function (n) {
            return arguments.length ? (i = "function" == typeof n ? n : lf(+n), t) : i
        }, t.order = function (n) {
            return arguments.length ? (e = null == n ? lc : "function" == typeof n ? n : lf(E_.call(n)), t) : e
        }, t.offset = function (n) {
            return arguments.length ? (r = null == n ? sc : n, t) : r
        }, t
    },t.stackOffsetExpand = function (t, n) {
        if ((r = t.length) > 0) {
            for (var e, r, i, o = 0, a = t[0].length; o < a; ++o) {
                for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0;
                if (i) for (e = 0; e < r; ++e) t[e][o][1] /= i
            }
            sc(t, n)
        }
    },t.stackOffsetDiverging = function (t, n) {
        if ((u = t.length) > 1) for (var e, r, i, o, a, u, f = 0, c = t[n[0]].length; f < c; ++f) for (o = a = 0, e = 0; e < u; ++e) (i = (r = t[n[e]][f])[1] - r[0]) >= 0 ? (r[0] = o, r[1] = o += i) : i < 0 ? (r[1] = a, r[0] = a += i) : r[0] = o
    },t.stackOffsetNone = sc,t.stackOffsetSilhouette = function (t, n) {
        if ((e = t.length) > 0) {
            for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
                for (var a = 0, u = 0; a < e; ++a) u += t[a][r][1] || 0;
                i[r][1] += i[r][0] = -u / 2
            }
            sc(t, n)
        }
    },t.stackOffsetWiggle = function (t, n) {
        if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
            for (var e, r, i, o = 0, a = 1; a < r; ++a) {
                for (var u = 0, f = 0, c = 0; u < i; ++u) {
                    for (var s = t[n[u]], l = s[a][1] || 0, h = (l - (s[a - 1][1] || 0)) / 2, d = 0; d < u; ++d) {
                        var p = t[n[d]];
                        h += (p[a][1] || 0) - (p[a - 1][1] || 0)
                    }
                    f += l, c += h * l
                }
                e[a - 1][1] += e[a - 1][0] = o, f && (o -= c / f)
            }
            e[a - 1][1] += e[a - 1][0] = o, sc(t, n)
        }
    },t.stackOrderAscending = dc,t.stackOrderDescending = function (t) {
        return dc(t).reverse()
    },t.stackOrderInsideOut = function (t) {
        var n, e, r = t.length, i = t.map(pc), o = lc(t).sort(function (t, n) {
            return i[n] - i[t]
        }), a = 0, u = 0, f = [], c = [];
        for (n = 0; n < r; ++n) e = o[n], a < u ? (a += i[e], f.push(e)) : (u += i[e], c.push(e));
        return c.reverse().concat(f)
    },t.stackOrderNone = lc,t.stackOrderReverse = function (t) {
        return lc(t).reverse()
    },t.timeInterval = Ia,t.timeMillisecond = Dv,t.timeMilliseconds = Uv,t.utcMillisecond = Dv,t.utcMilliseconds = Uv,t.timeSecond = Yv,t.timeSeconds = Bv,t.utcSecond = Yv,t.utcSeconds = Bv,t.timeMinute = Fv,t.timeMinutes = Iv,t.timeHour = jv,t.timeHours = Hv,t.timeDay = Xv,t.timeDays = Gv,t.timeWeek = Vv,t.timeWeeks = tg,t.timeSunday = Vv,t.timeSundays = tg,t.timeMonday = $v,t.timeMondays = ng,t.timeTuesday = Wv,t.timeTuesdays = eg,t.timeWednesday = Zv,t.timeWednesdays = rg,t.timeThursday = Qv,t.timeThursdays = ig,t.timeFriday = Jv,t.timeFridays = og,t.timeSaturday = Kv,t.timeSaturdays = ag,t.timeMonth = ug,t.timeMonths = fg,t.timeYear = cg,t.timeYears = sg,t.utcMinute = lg,t.utcMinutes = hg,t.utcHour = dg,t.utcHours = pg,t.utcDay = vg,t.utcDays = gg,t.utcWeek = yg,t.utcWeeks = Ag,t.utcSunday = yg,t.utcSundays = Ag,t.utcMonday = _g,t.utcMondays = Tg,t.utcTuesday = bg,t.utcTuesdays = Ng,t.utcWednesday = mg,t.utcWednesdays = Sg,t.utcThursday = xg,t.utcThursdays = Eg,t.utcFriday = wg,t.utcFridays = kg,t.utcSaturday = Mg,t.utcSaturdays = Cg,t.utcMonth = Pg,t.utcMonths = zg,t.utcYear = Rg,t.utcYears = Dg,t.timeFormatDefaultLocale = nf,t.timeFormatLocale = $a,t.isoFormat = Fg,t.isoParse = Ig,t.now = wn,t.timer = Tn,t.timerFlush = Nn,t.timeout = Cn,t.interval = function (t, n, e) {
        var r = new An, i = n;
        return null == n ? (r.restart(t, n, e), r) : (n = +n, e = null == e ? wn() : +e, r.restart(function o(a) {
            a += i, r.restart(o, i += n, e), t(a)
        }, n, e), r)
    },t.transition = Yn,t.active = function (t, n) {
        var e, r, i = t.__transition;
        if (i) {
            n = null == n ? null : n + "";
            for (r in i) if ((e = i[r]).state > Ll && e.name === n) return new On([[t]], hh, n, +r)
        }
        return null
    },t.interrupt = Dn,t.voronoi = function () {
        function t(t) {
            return new Bc(t.map(function (r, i) {
                var o = [Math.round(n(r, i, t) / ab) * ab, Math.round(e(r, i, t) / ab) * ab];
                return o.index = i, o.data = r, o
            }), r)
        }

        var n = gc, e = yc, r = null;
        return t.polygons = function (n) {
            return t(n).polygons()
        }, t.links = function (n) {
            return t(n).links()
        }, t.triangles = function (n) {
            return t(n).triangles()
        }, t.x = function (e) {
            return arguments.length ? (n = "function" == typeof e ? e : vc(+e), t) : n
        }, t.y = function (n) {
            return arguments.length ? (e = "function" == typeof n ? n : vc(+n), t) : e
        }, t.extent = function (n) {
            return arguments.length ? (r = null == n ? null : [[+n[0][0], +n[0][1]], [+n[1][0], +n[1][1]]], t) : r && [[r[0][0], r[0][1]], [r[1][0], r[1][1]]]
        }, t.size = function (n) {
            return arguments.length ? (r = null == n ? null : [[0, 0], [+n[0], +n[1]]], t) : r && [r[1][0] - r[0][0], r[1][1] - r[0][1]]
        }, t
    },t.zoom = function () {
        function n(t) {
            t.property("__zoom", $c).on("wheel.zoom", f).on("mousedown.zoom", c).on("dblclick.zoom", s).filter(m).on("touchstart.zoom", l).on("touchmove.zoom", h).on("touchend.zoom touchcancel.zoom", d).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
        }

        function e(t, n) {
            return (n = Math.max(x[0], Math.min(x[1], n))) === t.k ? t : new Ic(n, t.x, t.y)
        }

        function r(t, n, e) {
            var r = n[0] - e[0] * t.k, i = n[1] - e[1] * t.k;
            return r === t.x && i === t.y ? t : new Ic(t.k, r, i)
        }

        function i(t) {
            return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
        }

        function o(t, n, e) {
            t.on("start.zoom", function () {
                a(this, arguments).start()
            }).on("interrupt.zoom end.zoom", function () {
                a(this, arguments).end()
            }).tween("zoom", function () {
                var t = arguments, r = a(this, t), o = y.apply(this, t), u = e || i(o),
                    f = Math.max(o[1][0] - o[0][0], o[1][1] - o[0][1]), c = this.__zoom,
                    s = "function" == typeof n ? n.apply(this, t) : n,
                    l = A(c.invert(u).concat(f / c.k), s.invert(u).concat(f / s.k));
                return function (t) {
                    if (1 === t) t = s; else {
                        var n = l(t), e = f / n[2];
                        t = new Ic(e, u[0] - n[0] * e, u[1] - n[1] * e)
                    }
                    r.zoom(null, t)
                }
            })
        }

        function a(t, n) {
            for (var e, r = 0, i = T.length; r < i; ++r) if ((e = T[r]).that === t) return e;
            return new u(t, n)
        }

        function u(t, n) {
            this.that = t, this.args = n, this.index = -1, this.active = 0, this.extent = y.apply(t, n)
        }

        function f() {
            if (g.apply(this, arguments)) {
                var t = a(this, arguments), n = this.__zoom,
                    i = Math.max(x[0], Math.min(x[1], n.k * Math.pow(2, b.apply(this, arguments)))), o = pt(this);
                if (t.wheel) t.mouse[0][0] === o[0] && t.mouse[0][1] === o[1] || (t.mouse[1] = n.invert(t.mouse[0] = o)), clearTimeout(t.wheel); else {
                    if (n.k === i) return;
                    t.mouse = [o, n.invert(o)], Dn(this), t.start()
                }
                Xc(), t.wheel = setTimeout(function () {
                    t.wheel = null, t.end()
                }, k), t.zoom("mouse", _(r(e(n, i), t.mouse[0], t.mouse[1]), t.extent, w))
            }
        }

        function c() {
            if (!v && g.apply(this, arguments)) {
                var n = a(this, arguments), e = ct(t.event.view).on("mousemove.zoom", function () {
                    if (Xc(), !n.moved) {
                        var e = t.event.clientX - o, i = t.event.clientY - u;
                        n.moved = e * e + i * i > C
                    }
                    n.zoom("mouse", _(r(n.that.__zoom, n.mouse[0] = pt(n.that), n.mouse[1]), n.extent, w))
                }, !0).on("mouseup.zoom", function () {
                    e.on("mousemove.zoom mouseup.zoom", null), bt(t.event.view, n.moved), Xc(), n.end()
                }, !0), i = pt(this), o = t.event.clientX, u = t.event.clientY;
                _t(t.event.view), Hc(), n.mouse = [i, this.__zoom.invert(i)], Dn(this), n.start()
            }
        }

        function s() {
            if (g.apply(this, arguments)) {
                var i = this.__zoom, a = pt(this), u = i.invert(a), f = i.k * (t.event.shiftKey ? .5 : 2),
                    c = _(r(e(i, f), a, u), y.apply(this, arguments), w);
                Xc(), M > 0 ? ct(this).transition().duration(M).call(o, c, a) : ct(this).call(n.transform, c)
            }
        }

        function l() {
            if (g.apply(this, arguments)) {
                var n, e, r, i, o = a(this, arguments), u = t.event.changedTouches, f = u.length;
                for (Hc(), e = 0; e < f; ++e) i = [i = vt(this, u, (r = u[e]).identifier), this.__zoom.invert(i), r.identifier], o.touch0 ? o.touch1 || (o.touch1 = i) : (o.touch0 = i, n = !0);
                if (p && (p = clearTimeout(p), !o.touch1)) return o.end(), void((i = ct(this).on("dblclick.zoom")) && i.apply(this, arguments));
                n && (p = setTimeout(function () {
                    p = null
                }, E), Dn(this), o.start())
            }
        }

        function h() {
            var n, i, o, u, f = a(this, arguments), c = t.event.changedTouches, s = c.length;
            for (Xc(), p && (p = clearTimeout(p)), n = 0; n < s; ++n) o = vt(this, c, (i = c[n]).identifier), f.touch0 && f.touch0[2] === i.identifier ? f.touch0[0] = o : f.touch1 && f.touch1[2] === i.identifier && (f.touch1[0] = o);
            if (i = f.that.__zoom, f.touch1) {
                var l = f.touch0[0], h = f.touch0[1], d = f.touch1[0], v = f.touch1[1],
                    g = (g = d[0] - l[0]) * g + (g = d[1] - l[1]) * g,
                    y = (y = v[0] - h[0]) * y + (y = v[1] - h[1]) * y;
                i = e(i, Math.sqrt(g / y)), o = [(l[0] + d[0]) / 2, (l[1] + d[1]) / 2], u = [(h[0] + v[0]) / 2, (h[1] + v[1]) / 2]
            } else {
                if (!f.touch0) return;
                o = f.touch0[0], u = f.touch0[1]
            }
            f.zoom("touch", _(r(i, o, u), f.extent, w))
        }

        function d() {
            var n, e, r = a(this, arguments), i = t.event.changedTouches, o = i.length;
            for (Hc(), v && clearTimeout(v), v = setTimeout(function () {
                v = null
            }, E), n = 0; n < o; ++n) e = i[n], r.touch0 && r.touch0[2] === e.identifier ? delete r.touch0 : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
            r.touch1 && !r.touch0 && (r.touch0 = r.touch1, delete r.touch1), r.touch0 ? r.touch0[1] = this.__zoom.invert(r.touch0[0]) : r.end()
        }

        var p, v, g = Gc, y = Vc, _ = Qc, b = Wc, m = Zc, x = [0, 1 / 0], w = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]],
            M = 250, A = _n, T = [], S = N("start", "zoom", "end"), E = 500, k = 150, C = 0;
        return n.transform = function (t, n) {
            var e = t.selection ? t.selection() : t;
            e.property("__zoom", $c), t !== e ? o(t, n) : e.interrupt().each(function () {
                a(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
            })
        }, n.scaleBy = function (t, e) {
            n.scaleTo(t, function () {
                return this.__zoom.k * ("function" == typeof e ? e.apply(this, arguments) : e)
            })
        }, n.scaleTo = function (t, o) {
            n.transform(t, function () {
                var t = y.apply(this, arguments), n = this.__zoom, a = i(t), u = n.invert(a),
                    f = "function" == typeof o ? o.apply(this, arguments) : o;
                return _(r(e(n, f), a, u), t, w)
            })
        }, n.translateBy = function (t, e, r) {
            n.transform(t, function () {
                return _(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof r ? r.apply(this, arguments) : r), y.apply(this, arguments), w)
            })
        }, n.translateTo = function (t, e, r) {
            n.transform(t, function () {
                var t = y.apply(this, arguments), n = this.__zoom, o = i(t);
                return _(fb.translate(o[0], o[1]).scale(n.k).translate("function" == typeof e ? -e.apply(this, arguments) : -e, "function" == typeof r ? -r.apply(this, arguments) : -r), t, w)
            })
        }, u.prototype = {
            start: function () {
                return 1 == ++this.active && (this.index = T.push(this) - 1, this.emit("start")), this
            }, zoom: function (t, n) {
                return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
            }, end: function () {
                return 0 == --this.active && (T.splice(this.index, 1), this.index = -1, this.emit("end")), this
            }, emit: function (t) {
                ot(new function (t, n, e) {
                    this.target = t, this.type = n, this.transform = e
                }(n, t, this.that.__zoom), S.apply, S, [t, this.that, this.args])
            }
        }, n.wheelDelta = function (t) {
            return arguments.length ? (b = "function" == typeof t ? t : Fc(+t), n) : b
        }, n.filter = function (t) {
            return arguments.length ? (g = "function" == typeof t ? t : Fc(!!t), n) : g
        }, n.touchable = function (t) {
            return arguments.length ? (m = "function" == typeof t ? t : Fc(!!t), n) : m
        }, n.extent = function (t) {
            return arguments.length ? (y = "function" == typeof t ? t : Fc([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), n) : y
        }, n.scaleExtent = function (t) {
            return arguments.length ? (x[0] = +t[0], x[1] = +t[1], n) : [x[0], x[1]]
        }, n.translateExtent = function (t) {
            return arguments.length ? (w[0][0] = +t[0][0], w[1][0] = +t[1][0], w[0][1] = +t[0][1], w[1][1] = +t[1][1], n) : [[w[0][0], w[0][1]], [w[1][0], w[1][1]]]
        }, n.constrain = function (t) {
            return arguments.length ? (_ = t, n) : _
        }, n.duration = function (t) {
            return arguments.length ? (M = +t, n) : M
        }, n.interpolate = function (t) {
            return arguments.length ? (A = t, n) : A
        }, n.on = function () {
            var t = S.on.apply(S, arguments);
            return t === S ? n : t
        }, n.clickDistance = function (t) {
            return arguments.length ? (C = (t = +t) * t, n) : Math.sqrt(C)
        }, n
    },t.zoomTransform = jc,t.zoomIdentity = fb,Object.defineProperty(t, "__esModule", {value: !0})
});