/*
 *   Kullandığım pluginleri bu dosyada topluyorum minify ederek saklıyorum.
 */

/*fancybox*/
;
(function (e, t, n, r) {
    var i = n("html"), s = n(e), o = n(t), u = n.fancybox = function () {
        u.open.apply(this, arguments)
    }, a = navigator.userAgent.match(/msie/i), f = null, l = t.createTouch !== r, c = function (e) {
        return e && e.hasOwnProperty && e instanceof n
    }, h = function (e) {
        return e && "string" === n.type(e)
    }, p = function (e) {
        return h(e) && 0 < e.indexOf("%")
    }, d = function (e, t) {
        var n = parseInt(e, 10) || 0;
        t && p(e) && (n *= u.getViewport()[t] / 100);
        return Math.ceil(n)
    }, v = function (e, t) {
        return d(e, t) + "px"
    };
    n.extend(u, {version: "2.1.5", defaults: {padding: 15, margin: 20, width: 800, height: 600, minWidth: 100, minHeight: 100, maxWidth: 9999, maxHeight: 9999, pixelRatio: 1, autoSize: !0, autoHeight: !1, autoWidth: !1, autoResize: !0, autoCenter: !l, fitToView: !0, aspectRatio: !1, topRatio: .5, leftRatio: .5, scrolling: "auto", wrapCSS: "", arrows: !0, closeBtn: !0, closeClick: !1, nextClick: !1, mouseWheel: !0, autoPlay: !1, playSpeed: 3e3, preload: 3, modal: !1, loop: !0, ajax: {dataType: "html", headers: {"X-fancyBox": !0}}, iframe: {scrolling: "auto", preload: !0}, swf: {wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"}, keys: {next: {13: "left", 34: "up", 39: "left", 40: "up"}, prev: {8: "right", 33: "down", 37: "right", 38: "down"}, close: [27], play: [32], toggle: [70]}, direction: {next: "left", prev: "right"}, scrollOutside: !0, index: 0, type: null, href: null, content: null, title: null, tpl: {wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', image: '<img class="fancybox-image" src="{href}" alt="" />', iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (a ? ' allowtransparency="true"' : "") + "></iframe>", error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>', closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>', next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>', prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'}, openEffect: "fade", openSpeed: 250, openEasing: "swing", openOpacity: !0, openMethod: "zoomIn", closeEffect: "fade", closeSpeed: 250, closeEasing: "swing", closeOpacity: !0, closeMethod: "zoomOut", nextEffect: "elastic", nextSpeed: 250, nextEasing: "swing", nextMethod: "changeIn", prevEffect: "elastic", prevSpeed: 250, prevEasing: "swing", prevMethod: "changeOut", helpers: {overlay: !0, title: !0}, onCancel: n.noop, beforeLoad: n.noop, afterLoad: n.noop, beforeShow: n.noop, afterShow: n.noop, beforeChange: n.noop, beforeClose: n.noop, afterClose: n.noop}, group: {}, opts: {}, previous: null, coming: null, current: null, isActive: !1, isOpen: !1, isOpened: !1, wrap: null, skin: null, outer: null, inner: null, player: {timer: null, isActive: !1}, ajaxLoad: null, imgPreload: null, transitions: {}, helpers: {}, open: function (e, t) {
        if (e && (n.isPlainObject(t) || (t = {}), !1 !== u.close(!0)))return n.isArray(e) || (e = c(e) ? n(e).get() : [e]), n.each(e, function (i, s) {
            var o = {}, a, f, l, p, d;
            "object" === n.type(s) && (s.nodeType && (s = n(s)), c(s) ? (o = {href: s.data("fancybox-href") || s.attr("href"), title: s.data("fancybox-title") || s.attr("title"), isDom: !0, element: s}, n.metadata && n.extend(!0, o, s.metadata())) : o = s);
            a = t.href || o.href || (h(s) ? s : null);
            f = t.title !== r ? t.title : o.title || "";
            p = (l = t.content || o.content) ? "html" : t.type || o.type;
            !p && o.isDom && (p = s.data("fancybox-type"), p || (p = (p = s.prop("class").match(/fancybox\.(\w+)/)) ? p[1] : null));
            h(a) && (p || (u.isImage(a) ? p = "image" : u.isSWF(a) ? p = "swf" : "#" === a.charAt(0) ? p = "inline" : h(s) && (p = "html", l = s)), "ajax" === p && (d = a.split(/\s+/, 2), a = d.shift(), d = d.shift()));
            l || ("inline" === p ? a ? l = n(h(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a) : o.isDom && (l = s) : "html" === p ? l = a : !p && !a && o.isDom && (p = "inline", l = s));
            n.extend(o, {href: a, type: p, content: l, title: f, selector: d});
            e[i] = o
        }), u.opts = n.extend(!0, {}, u.defaults, t), t.keys !== r && (u.opts.keys = t.keys ? n.extend({}, u.defaults.keys, t.keys) : !1), u.group = e, u._start(u.opts.index)
    }, cancel: function () {
        var e = u.coming;
        e && !1 !== u.trigger("onCancel") && (u.hideLoading(), u.ajaxLoad && u.ajaxLoad.abort(), u.ajaxLoad = null, u.imgPreload && (u.imgPreload.onload = u.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), u.coming = null, u.current || u._afterZoomOut(e))
    }, close: function (e) {
        u.cancel();
        !1 !== u.trigger("beforeClose") && (u.unbindEvents(), u.isActive && (!u.isOpen || !0 === e ? (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), u._afterZoomOut()) : (u.isOpen = u.isOpened = !1, u.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), u.wrap.stop(!0, !0).removeClass("fancybox-opened"), u.transitions[u.current.closeMethod]())))
    }, play: function (e) {
        var t = function () {
            clearTimeout(u.player.timer)
        }, n = function () {
            t();
            u.current && u.player.isActive && (u.player.timer = setTimeout(u.next, u.current.playSpeed))
        }, r = function () {
            t();
            o.unbind(".player");
            u.player.isActive = !1;
            u.trigger("onPlayEnd")
        };
        if (!0 === e || !u.player.isActive && !1 !== e) {
            if (u.current && (u.current.loop || u.current.index < u.group.length - 1))u.player.isActive = !0, o.bind({"onCancel.player beforeClose.player": r, "onUpdate.player": n, "beforeLoad.player": t}), n(), u.trigger("onPlayStart")
        } else r()
    }, next: function (e) {
        var t = u.current;
        t && (h(e) || (e = t.direction.next), u.jumpto(t.index + 1, e, "next"))
    }, prev: function (e) {
        var t = u.current;
        t && (h(e) || (e = t.direction.prev), u.jumpto(t.index - 1, e, "prev"))
    }, jumpto: function (e, t, n) {
        var i = u.current;
        i && (e = d(e), u.direction = t || i.direction[e >= i.index ? "next" : "prev"], u.router = n || "jumpto", i.loop && (0 > e && (e = i.group.length + e % i.group.length), e %= i.group.length), i.group[e] !== r && (u.cancel(), u._start(e)))
    }, reposition: function (e, t) {
        var r = u.current, i = r ? r.wrap : null, s;
        i && (s = u._getPosition(t), e && "scroll" === e.type ? (delete s.position, i.stop(!0, !0).animate(s, 200)) : (i.css(s), r.pos = n.extend({}, r.dim, s)))
    }, update: function (e) {
        var t = e && e.type, n = !t || "orientationchange" === t;
        n && (clearTimeout(f), f = null);
        u.isOpen && !f && (f = setTimeout(function () {
            var r = u.current;
            r && !u.isClosing && (u.wrap.removeClass("fancybox-tmp"), (n || "load" === t || "resize" === t && r.autoResize) && u._setDimension(), "scroll" === t && r.canShrink || u.reposition(e), u.trigger("onUpdate"), f = null)
        }, n && !l ? 0 : 300))
    }, toggle: function (e) {
        u.isOpen && (u.current.fitToView = "boolean" === n.type(e) ? e : !u.current.fitToView, l && (u.wrap.removeAttr("style").addClass("fancybox-tmp"), u.trigger("onUpdate")), u.update())
    }, hideLoading: function () {
        o.unbind(".loading");
        n("#fancybox-loading").remove()
    }, showLoading: function () {
        var e, t;
        u.hideLoading();
        e = n('<div id="fancybox-loading"><div></div></div>').click(u.cancel).appendTo("body");
        o.bind("keydown.loading", function (e) {
            if (27 === (e.which || e.keyCode))e.preventDefault(), u.cancel()
        });
        u.defaults.fixed || (t = u.getViewport(), e.css({position: "absolute", top: .5 * t.h + t.y, left: .5 * t.w + t.x}))
    }, getViewport: function () {
        var t = u.current && u.current.locked || !1, n = {x: s.scrollLeft(), y: s.scrollTop()};
        t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = l && e.innerWidth ? e.innerWidth : s.width(), n.h = l && e.innerHeight ? e.innerHeight : s.height());
        return n
    }, unbindEvents: function () {
        u.wrap && c(u.wrap) && u.wrap.unbind(".fb");
        o.unbind(".fb");
        s.unbind(".fb")
    }, bindEvents: function () {
        var e = u.current, t;
        e && (s.bind("orientationchange.fb" + (l ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), u.update), (t = e.keys) && o.bind("keydown.fb", function (i) {
            var s = i.which || i.keyCode, o = i.target || i.srcElement;
            if (27 === s && u.coming)return!1;
            !i.ctrlKey && !i.altKey && !i.shiftKey && !i.metaKey && (!o || !o.type && !n(o).is("[contenteditable]")) && n.each(t, function (t, o) {
                if (1 < e.group.length && o[s] !== r)return u[t](o[s]), i.preventDefault(), !1;
                if (-1 < n.inArray(s, o))return u[t](), i.preventDefault(), !1
            })
        }), n.fn.mousewheel && e.mouseWheel && u.wrap.bind("mousewheel.fb", function (t, r, i, s) {
            for (var o = n(t.target || null), a = !1; o.length && !a && !o.is(".fancybox-skin") && !o.is(".fancybox-wrap");)a = o[0] && !(o[0].style.overflow && "hidden" === o[0].style.overflow) && (o[0].clientWidth && o[0].scrollWidth > o[0].clientWidth || o[0].clientHeight && o[0].scrollHeight > o[0].clientHeight), o = n(o).parent();
            if (0 !== r && !a && 1 < u.group.length && !e.canShrink) {
                if (0 < s || 0 < i)u.prev(0 < s ? "down" : "left"); else if (0 > s || 0 > i)u.next(0 > s ? "up" : "right");
                t.preventDefault()
            }
        }))
    }, trigger: function (e, t) {
        var r, i = t || u.coming || u.current;
        if (i) {
            n.isFunction(i[e]) && (r = i[e].apply(i, Array.prototype.slice.call(arguments, 1)));
            if (!1 === r)return!1;
            i.helpers && n.each(i.helpers, function (t, r) {
                if (r && u.helpers[t] && n.isFunction(u.helpers[t][e]))u.helpers[t][e](n.extend(!0, {}, u.helpers[t].defaults, r), i)
            });
            o.trigger(e)
        }
    }, isImage: function (e) {
        return h(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
    }, isSWF: function (e) {
        return h(e) && e.match(/\.(swf)((\?|#).*)?$/i)
    }, _start: function (e) {
        var t = {}, r, i;
        e = d(e);
        r = u.group[e] || null;
        if (!r)return!1;
        t = n.extend(!0, {}, u.opts, r);
        r = t.margin;
        i = t.padding;
        "number" === n.type(r) && (t.margin = [r, r, r, r]);
        "number" === n.type(i) && (t.padding = [i, i, i, i]);
        t.modal && n.extend(!0, t, {closeBtn: !1, closeClick: !1, nextClick: !1, arrows: !1, mouseWheel: !1, keys: null, helpers: {overlay: {closeClick: !1}}});
        t.autoSize && (t.autoWidth = t.autoHeight = !0);
        "auto" === t.width && (t.autoWidth = !0);
        "auto" === t.height && (t.autoHeight = !0);
        t.group = u.group;
        t.index = e;
        u.coming = t;
        if (!1 === u.trigger("beforeLoad"))u.coming = null; else {
            i = t.type;
            r = t.href;
            if (!i)return u.coming = null, u.current && u.router && "jumpto" !== u.router ? (u.current.index = e, u[u.router](u.direction)) : !1;
            u.isActive = !0;
            if ("image" === i || "swf" === i)t.autoHeight = t.autoWidth = !1, t.scrolling = "visible";
            "image" === i && (t.aspectRatio = !0);
            "iframe" === i && l && (t.scrolling = "scroll");
            t.wrap = n(t.tpl.wrap).addClass("fancybox-" + (l ? "mobile" : "desktop") + " fancybox-type-" + i + " fancybox-tmp " + t.wrapCSS).appendTo(t.parent || "body");
            n.extend(t, {skin: n(".fancybox-skin", t.wrap), outer: n(".fancybox-outer", t.wrap), inner: n(".fancybox-inner", t.wrap)});
            n.each(["Top", "Right", "Bottom", "Left"], function (e, n) {
                t.skin.css("padding" + n, v(t.padding[e]))
            });
            u.trigger("onReady");
            if ("inline" === i || "html" === i) {
                if (!t.content || !t.content.length)return u._error("content")
            } else if (!r)return u._error("href");
            "image" === i ? u._loadImage() : "ajax" === i ? u._loadAjax() : "iframe" === i ? u._loadIframe() : u._afterLoad()
        }
    }, _error: function (e) {
        n.extend(u.coming, {type: "html", autoWidth: !0, autoHeight: !0, minWidth: 0, minHeight: 0, scrolling: "no", hasError: e, content: u.coming.tpl.error});
        u._afterLoad()
    }, _loadImage: function () {
        var e = u.imgPreload = new Image;
        e.onload = function () {
            this.onload = this.onerror = null;
            u.coming.width = this.width / u.opts.pixelRatio;
            u.coming.height = this.height / u.opts.pixelRatio;
            u._afterLoad()
        };
        e.onerror = function () {
            this.onload = this.onerror = null;
            u._error("image")
        };
        e.src = u.coming.href;
        !0 !== e.complete && u.showLoading()
    }, _loadAjax: function () {
        var e = u.coming;
        u.showLoading();
        u.ajaxLoad = n.ajax(n.extend({}, e.ajax, {url: e.href, error: function (e, t) {
            u.coming && "abort" !== t ? u._error("ajax", e) : u.hideLoading()
        }, success: function (t, n) {
            "success" === n && (e.content = t, u._afterLoad())
        }}))
    }, _loadIframe: function () {
        var e = u.coming, t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", l ? "auto" : e.iframe.scrolling).attr("src", e.href);
        n(e.wrap).bind("onReset", function () {
            try {
                n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
            } catch (e) {
            }
        });
        e.iframe.preload && (u.showLoading(), t.one("load", function () {
            n(this).data("ready", 1);
            l || n(this).bind("load.fb", u.update);
            n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
            u._afterLoad()
        }));
        e.content = t.appendTo(e.inner);
        e.iframe.preload || u._afterLoad()
    }, _preloadImages: function () {
        var e = u.group, t = u.current, n = e.length, r = t.preload ? Math.min(t.preload, n - 1) : 0, i, s;
        for (s = 1; s <= r; s += 1)i = e[(t.index + s) % n], "image" === i.type && i.href && ((new Image).src = i.href)
    }, _afterLoad: function () {
        var e = u.coming, t = u.current, r, i, s, o, a;
        u.hideLoading();
        if (e && !1 !== u.isActive)if (!1 === u.trigger("afterLoad", e, t))e.wrap.stop(!0).trigger("onReset").remove(), u.coming = null; else {
            t && (u.trigger("beforeChange", t), t.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
            u.unbindEvents();
            r = e.content;
            i = e.type;
            s = e.scrolling;
            n.extend(u, {wrap: e.wrap, skin: e.skin, outer: e.outer, inner: e.inner, current: e, previous: t});
            o = e.href;
            switch (i) {
                case"inline":
                case"ajax":
                case"html":
                    e.selector ? r = n("<div>").html(r).find(e.selector) : c(r) && (r.data("fancybox-placeholder") || r.data("fancybox-placeholder", n('<div class="fancybox-placeholder"></div>').insertAfter(r).hide()), r = r.show().detach(), e.wrap.bind("onReset", function () {
                        n(this).find(r).length && r.hide().replaceAll(r.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                    }));
                    break;
                case"image":
                    r = e.tpl.image.replace("{href}", o);
                    break;
                case"swf":
                    r = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + o + '"></param>', a = "", n.each(e.swf, function (e, t) {
                        r += '<param name="' + e + '" value="' + t + '"></param>';
                        a += " " + e + '="' + t + '"'
                    }), r += '<embed src="' + o + '" type="application/x-shockwave-flash" width="100%" height="100%"' + a + "></embed></object>"
            }
            (!c(r) || !r.parent().is(e.inner)) && e.inner.append(r);
            u.trigger("beforeShow");
            e.inner.css("overflow", "yes" === s ? "scroll" : "no" === s ? "hidden" : s);
            u._setDimension();
            u.reposition();
            u.isOpen = !1;
            u.coming = null;
            u.bindEvents();
            if (u.isOpened) {
                if (t.prevMethod)u.transitions[t.prevMethod]()
            } else n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove();
            u.transitions[u.isOpened ? e.nextMethod : e.openMethod]();
            u._preloadImages()
        }
    }, _setDimension: function () {
        var e = u.getViewport(), t = 0, r = !1, i = !1, r = u.wrap, s = u.skin, o = u.inner, a = u.current, i = a.width, f = a.height, l = a.minWidth, c = a.minHeight, h = a.maxWidth, m = a.maxHeight, g = a.scrolling, y = a.scrollOutside ? a.scrollbarWidth : 0, S = a.margin, x = d(S[1] + S[3]), T = d(S[0] + S[2]), N, C, k, L, A, O, M, _, D;
        r.add(s).add(o).width("auto").height("auto").removeClass("fancybox-tmp");
        S = d(s.outerWidth(!0) - s.width());
        N = d(s.outerHeight(!0) - s.height());
        C = x + S;
        k = T + N;
        L = p(i) ? (e.w - C) * d(i) / 100 : i;
        A = p(f) ? (e.h - k) * d(f) / 100 : f;
        if ("iframe" === a.type) {
            if (D = a.content, a.autoHeight && 1 === D.data("ready"))try {
                D[0].contentWindow.document.location && (o.width(L).height(9999), O = D.contents().find("body"), y && O.css("overflow-x", "hidden"), A = O.outerHeight(!0))
            } catch (P) {
            }
        } else if (a.autoWidth || a.autoHeight)o.addClass("fancybox-tmp"), a.autoWidth || o.width(L), a.autoHeight || o.height(A), a.autoWidth && (L = o.width()), a.autoHeight && (A = o.height()), o.removeClass("fancybox-tmp");
        i = d(L);
        f = d(A);
        _ = L / A;
        l = d(p(l) ? d(l, "w") - C : l);
        h = d(p(h) ? d(h, "w") - C : h);
        c = d(p(c) ? d(c, "h") - k : c);
        m = d(p(m) ? d(m, "h") - k : m);
        O = h;
        M = m;
        a.fitToView && (h = Math.min(e.w - C, h), m = Math.min(e.h - k, m));
        C = e.w - x;
        T = e.h - T;
        a.aspectRatio ? (i > h && (i = h, f = d(i / _)), f > m && (f = m, i = d(f * _)), i < l && (i = l, f = d(i / _)), f < c && (f = c, i = d(f * _))) : (i = Math.max(l, Math.min(i, h)), a.autoHeight && "iframe" !== a.type && (o.width(i), f = o.height()), f = Math.max(c, Math.min(f, m)));
        if (a.fitToView)if (o.width(i).height(f), r.width(i + S), e = r.width(), x = r.height(), a.aspectRatio)for (; (e > C || x > T) && i > l && f > c && !(19 < t++);)f = Math.max(c, Math.min(m, f - 10)), i = d(f * _), i < l && (i = l, f = d(i / _)), i > h && (i = h, f = d(i / _)), o.width(i).height(f), r.width(i + S), e = r.width(), x = r.height(); else i = Math.max(l, Math.min(i, i - (e - C))), f = Math.max(c, Math.min(f, f - (x - T)));
        y && "auto" === g && f < A && i + S + y < C && (i += y);
        o.width(i).height(f);
        r.width(i + S);
        e = r.width();
        x = r.height();
        r = (e > C || x > T) && i > l && f > c;
        i = a.aspectRatio ? i < O && f < M && i < L && f < A : (i < O || f < M) && (i < L || f < A);
        n.extend(a, {dim: {width: v(e), height: v(x)}, origWidth: L, origHeight: A, canShrink: r, canExpand: i, wPadding: S, hPadding: N, wrapSpace: x - s.outerHeight(!0), skinSpace: s.height() - f});
        !D && a.autoHeight && f > c && f < m && !i && o.height("auto")
    }, _getPosition: function (e) {
        var t = u.current, n = u.getViewport(), r = t.margin, i = u.wrap.width() + r[1] + r[3], s = u.wrap.height() + r[0] + r[2], r = {position: "absolute", top: r[0], left: r[3]};
        t.autoCenter && t.fixed && !e && s <= n.h && i <= n.w ? r.position = "fixed" : t.locked || (r.top += n.y, r.left += n.x);
        r.top = v(Math.max(r.top, r.top + (n.h - s) * t.topRatio));
        r.left = v(Math.max(r.left, r.left + (n.w - i) * t.leftRatio));
        return r
    }, _afterZoomIn: function () {
        var e = u.current;
        e && (u.isOpen = u.isOpened = !0, u.wrap.css("overflow", "visible").addClass("fancybox-opened"), u.update(), (e.closeClick || e.nextClick && 1 < u.group.length) && u.inner.css("cursor", "pointer").bind("click.fb", function (t) {
            !n(t.target).is("a") && !n(t.target).parent().is("a") && (t.preventDefault(), u[e.closeClick ? "close" : "next"]())
        }), e.closeBtn && n(e.tpl.closeBtn).appendTo(u.skin).bind("click.fb", function (e) {
            e.preventDefault();
            u.close()
        }), e.arrows && 1 < u.group.length && ((e.loop || 0 < e.index) && n(e.tpl.prev).appendTo(u.outer).bind("click.fb", u.prev), (e.loop || e.index < u.group.length - 1) && n(e.tpl.next).appendTo(u.outer).bind("click.fb", u.next)), u.trigger("afterShow"), !e.loop && e.index === e.group.length - 1 ? u.play(!1) : u.opts.autoPlay && !u.player.isActive && (u.opts.autoPlay = !1, u.play()))
    }, _afterZoomOut: function (e) {
        e = e || u.current;
        n(".fancybox-wrap").trigger("onReset").remove();
        n.extend(u, {group: {}, opts: {}, router: !1, current: null, isActive: !1, isOpened: !1, isOpen: !1, isClosing: !1, wrap: null, skin: null, outer: null, inner: null});
        u.trigger("afterClose", e)
    }});
    u.transitions = {getOrigPosition: function () {
        var e = u.current, t = e.element, n = e.orig, r = {}, i = 50, s = 50, o = e.hPadding, a = e.wPadding, f = u.getViewport();
        !n && e.isDom && t.is(":visible") && (n = t.find("img:first"), n.length || (n = t));
        c(n) ? (r = n.offset(), n.is("img") && (i = n.outerWidth(), s = n.outerHeight())) : (r.top = f.y + (f.h - s) * e.topRatio, r.left = f.x + (f.w - i) * e.leftRatio);
        if ("fixed" === u.wrap.css("position") || e.locked)r.top -= f.y, r.left -= f.x;
        return r = {top: v(r.top - o * e.topRatio), left: v(r.left - a * e.leftRatio), width: v(i + a), height: v(s + o)}
    }, step: function (e, t) {
        var n, r, i = t.prop;
        r = u.current;
        var s = r.wrapSpace, o = r.skinSpace;
        if ("width" === i || "height" === i)n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), u.isClosing && (n = 1 - n), r = "width" === i ? r.wPadding : r.hPadding, r = e - r, u.skin[i](d("width" === i ? r : r - s * n)), u.inner[i](d("width" === i ? r : r - s * n - o * n))
    }, zoomIn: function () {
        var e = u.current, t = e.pos, r = e.openEffect, i = "elastic" === r, s = n.extend({opacity: 1}, t);
        delete s.position;
        i ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === r && (t.opacity = .1);
        u.wrap.css(t).animate(s, {duration: "none" === r ? 0 : e.openSpeed, easing: e.openEasing, step: i ? this.step : null, complete: u._afterZoomIn})
    }, zoomOut: function () {
        var e = u.current, t = e.closeEffect, n = "elastic" === t, r = {opacity: .1};
        n && (r = this.getOrigPosition(), e.closeOpacity && (r.opacity = .1));
        u.wrap.animate(r, {duration: "none" === t ? 0 : e.closeSpeed, easing: e.closeEasing, step: n ? this.step : null, complete: u._afterZoomOut})
    }, changeIn: function () {
        var e = u.current, t = e.nextEffect, n = e.pos, r = {opacity: 1}, i = u.direction, s;
        n.opacity = .1;
        "elastic" === t && (s = "down" === i || "up" === i ? "top" : "left", "down" === i || "right" === i ? (n[s] = v(d(n[s]) - 200), r[s] = "+=200px") : (n[s] = v(d(n[s]) + 200), r[s] = "-=200px"));
        "none" === t ? u._afterZoomIn() : u.wrap.css(n).animate(r, {duration: e.nextSpeed, easing: e.nextEasing, complete: u._afterZoomIn})
    }, changeOut: function () {
        var e = u.previous, t = e.prevEffect, r = {opacity: .1}, i = u.direction;
        "elastic" === t && (r["down" === i || "up" === i ? "top" : "left"] = ("up" === i || "left" === i ? "-" : "+") + "=200px");
        e.wrap.animate(r, {duration: "none" === t ? 0 : e.prevSpeed, easing: e.prevEasing, complete: function () {
            n(this).trigger("onReset").remove()
        }})
    }};
    u.helpers.overlay = {defaults: {closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !l, fixed: !0}, overlay: null, fixed: !1, el: n("html"), create: function (e) {
        e = n.extend({}, this.defaults, e);
        this.overlay && this.close();
        this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(u.coming ? u.coming.parent : e.parent);
        this.fixed = !1;
        e.fixed && u.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
    }, open: function (e) {
        var t = this;
        e = n.extend({}, this.defaults, e);
        this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e);
        this.fixed || (s.bind("resize.overlay", n.proxy(this.update, this)), this.update());
        e.closeClick && this.overlay.bind("click.overlay", function (e) {
            if (n(e.target).hasClass("fancybox-overlay"))return u.isActive ? u.close() : t.close(), !1
        });
        this.overlay.css(e.css).show()
    }, close: function () {
        var e, t;
        s.unbind("resize.overlay");
        this.el.hasClass("fancybox-lock") && (n(".fancybox-margin").removeClass("fancybox-margin"), e = s.scrollTop(), t = s.scrollLeft(), this.el.removeClass("fancybox-lock"), s.scrollTop(e).scrollLeft(t));
        n(".fancybox-overlay").remove().hide();
        n.extend(this, {overlay: null, fixed: !1})
    }, update: function () {
        var e = "100%", n;
        this.overlay.width(e).height("100%");
        a ? (n = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), o.width() > n && (e = o.width())) : o.width() > s.width() && (e = o.width());
        this.overlay.width(e).height(o.height())
    }, onReady: function (e, t) {
        var r = this.overlay;
        n(".fancybox-overlay").stop(!0, !0);
        r || this.create(e);
        e.locked && this.fixed && t.fixed && (r || (this.margin = o.height() > s.height() ? n("html").css("margin-right").replace("px", "") : !1), t.locked = this.overlay.append(t.wrap), t.fixed = !1);
        !0 === e.showEarly && this.beforeShow.apply(this, arguments)
    }, beforeShow: function (e, t) {
        var r, i;
        t.locked && (!1 !== this.margin && (n("*").filter(function () {
            return"fixed" === n(this).css("position") && !n(this).hasClass("fancybox-overlay") && !n(this).hasClass("fancybox-wrap")
        }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), r = s.scrollTop(), i = s.scrollLeft(), this.el.addClass("fancybox-lock"), s.scrollTop(r).scrollLeft(i));
        this.open(e)
    }, onUpdate: function () {
        this.fixed || this.update()
    }, afterClose: function (e) {
        this.overlay && !u.coming && this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this))
    }};
    u.helpers.title = {defaults: {type: "float", position: "bottom"}, beforeShow: function (e) {
        var t = u.current, r = t.title, i = e.type;
        n.isFunction(r) && (r = r.call(t.element, t));
        if (h(r) && "" !== n.trim(r)) {
            t = n('<div class="fancybox-title fancybox-title-' + i + '-wrap">' + r + "</div>");
            switch (i) {
                case"inside":
                    i = u.skin;
                    break;
                case"outside":
                    i = u.wrap;
                    break;
                case"over":
                    i = u.inner;
                    break;
                default:
                    i = u.skin, t.appendTo("body"), a && t.width(t.width()), t.wrapInner('<span class="child"></span>'), u.current.margin[2] += Math.abs(d(t.css("margin-bottom")))
            }
            t["top" === e.position ? "prependTo" : "appendTo"](i)
        }
    }};
    n.fn.fancybox = function (e) {
        var t, r = n(this), i = this.selector || "", s = function (s) {
            var o = n(this).blur(), a = t, f, l;
            !s.ctrlKey && !s.altKey && !s.shiftKey && !s.metaKey && !o.is(".fancybox-wrap") && (f = e.groupAttr || "data-fancybox-group", l = o.attr(f), l || (f = "rel", l = o.get(0)[f]), l && "" !== l && "nofollow" !== l && (o = i.length ? n(i) : r, o = o.filter("[" + f + '="' + l + '"]'), a = o.index(this)), e.index = a, !1 !== u.open(o, e) && s.preventDefault())
        };
        e = e || {};
        t = e.index || 0;
        !i || !1 === e.live ? r.unbind("click.fb-start").bind("click.fb-start", s) : o.undelegate(i, "click.fb-start").delegate(i + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", s);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    o.ready(function () {
        var t, s;
        n.scrollbarWidth === r && (n.scrollbarWidth = function () {
            var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), t = e.children(), t = t.innerWidth() - t.height(99).innerWidth();
            e.remove();
            return t
        });
        if (n.support.fixedPosition === r) {
            t = n.support;
            s = n('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var o = 20 === s[0].offsetTop || 15 === s[0].offsetTop;
            s.remove();
            t.fixedPosition = o
        }
        n.extend(u.defaults, {scrollbarWidth: n.scrollbarWidth(), fixed: n.support.fixedPosition, parent: n("body")});
        t = n(e).width();
        i.addClass("fancybox-lock-test");
        s = n(e).width();
        i.removeClass("fancybox-lock-test");
        n("<style type='text/css'>.fancybox-margin{margin-right:" + (s - t) + "px;}</style>").appendTo("head")
    })
})(window, document, jQuery)
    /*alert*/
;
(function ($) {
    var defaults = { buttons: { button1: { text: 'OK', danger: false, onclick: function () {
        $.fallr('hide');
    } } }, icon: 'check', content: 'Hello', position: 'top', closeKey: true, closeOverlay: false, useOverlay: true, autoclose: false, easingDuration: 300, easingIn: 'swing', easingOut: 'swing', height: 'auto', width: '360px', zIndex: 100, bound: window, afterHide: function () {
    }, afterShow: function () {
    } }, opts, timeoutId, $w = $(window), methods = { hide: function (options, callback, self) {
        if (methods.isActive()) {
            $('#fallr-wrapper').stop(true, true);
            var $f = $('#fallr-wrapper'), pos = $f.css('position'), isFixed = (pos === 'fixed'), yminpos = 0;
            switch (opts.position) {
                case 'bottom':
                case 'center':
                    yminpos = (isFixed ? $w.height() : $f.offset().top + $f.outerHeight()) + 10;
                    break;
                default:
                    yminpos = (isFixed ? (-1) * ($f.outerHeight()) : $f.offset().top - $f.outerHeight()) - 10;
            }
            $f.animate({ 'top': (yminpos), 'opacity': isFixed ? 1 : 0 }, (opts.easingDuration || opts.duration), opts.easingOut, function () {
                if ($.browser.msie) {
                    $('#fallr-overlay').css('display', 'none');
                } else {
                    $('#fallr-overlay').fadeOut('fast');
                }
                $f.remove();
                clearTimeout(timeoutId);
                callback = typeof callback === "function" ? callback : opts.afterHide;
                callback.call(self);
            });
            $(document).unbind('keydown', helpers.enterKeyHandler).unbind('keydown', helpers.closeKeyHandler).unbind('keydown', helpers.tabKeyHandler);
        }
    }, resize: function (options, callback, self) {
        var $f = $('#fallr-wrapper'), newWidth = parseInt(options.width, 10), newHeight = parseInt(options.height, 10), diffWidth = Math.abs($f.outerWidth() - newWidth), diffHeight = Math.abs($f.outerHeight() - newHeight);
        if (methods.isActive() && (diffWidth > 5 || diffHeight > 5)) {
            $f.animate({ 'width': newWidth }, function () {
                $(this).animate({ 'height': newHeight }, function () {
                    helpers.fixPos();
                });
            });
            $('#fallr').animate({ 'width': newWidth - 94 }, function () {
                $(this).animate({ 'height': newHeight - 116 }, function () {
                    if (typeof callback === "function") {
                        callback.call(self);
                    }
                });
            });
        }
    }, show: function (options, callback, self) {
        if (methods.isActive()) {
            $('body', 'html').animate({ scrollTop: $('#fallr').offset().top }, function () {
                $.fallr('shake');
            });
            $.error('Can\'t create new message with content: "' + options.content + '", past message with content "' + opts.content + '" is still active');
        } else {
            opts = $.extend({}, defaults, options);
            $('<div id="fallr-wrapper"></div>').appendTo('body');
            opts.bound = $(opts.bound).length > 0 ? opts.bound : window;
            var $f = $('#fallr-wrapper'), $o = $('#fallr-overlay'), isWin = (opts.bound === window);
            $f.css({ 'width': opts.width, 'height': opts.height, 'position': 'absolute', 'top': '-9999px', 'left': '-9999px' }).html('<div id="fallr-icon"></div>' + '<div id="fallr"></div>' + '<div id="fallr-buttons"></div>').find('#fallr-icon').addClass('icon-' + opts.icon).end().find('#fallr').html(opts.content).css({ 'height': (opts.height == 'auto') ? 'auto' : $f.height() - 116, 'width': $f.width() - 94 }).end().find('#fallr-buttons').html((function () {
                var buttons = '';
                var i;
                for (i in opts.buttons) {
                    if (opts.buttons.hasOwnProperty(i)) {
                        buttons = buttons + '<a href="#" class="fallr-button ' + (opts.buttons[i].danger ? 'fallr-button-danger' : '') + '" id="fallr-button-' + i + '">' + opts.buttons[i].text + '</a>';
                    }
                }
                return buttons;
            }())).find('.fallr-button').bind('click', function () {
                var buttonId = $(this).attr('id').substring(13);
                if (typeof opts.buttons[buttonId].onclick === 'function' && opts.buttons[buttonId].onclick != false) {
                    var scope = $('#fallr');
                    opts.buttons[buttonId].onclick.apply(scope);
                } else {
                    methods.hide();
                }
                return false;
            });
            var showFallr = function () {
                $f.show();
                var xpos = isWin ? (($w.width() - $f.outerWidth()) / 2 + $w.scrollLeft()) : (($(opts.bound).width() - $f.outerWidth()) / 2 + $(opts.bound).offset().left), yminpos, ymaxpos, pos = ($w.height() > $f.height() && $w.width() > $f.width() && isWin) ? 'fixed' : 'absolute', isFixed = (pos === 'fixed');
                switch (opts.position) {
                    case 'bottom':
                        yminpos = isWin ? (isFixed ? $w.height() : $w.scrollTop() + $w.height()) : ($(opts.bound).offset().top + $(opts.bound).outerHeight());
                        ymaxpos = yminpos - $f.outerHeight();
                        break;
                    case 'center':
                        yminpos = isWin ? (isFixed ? (-1) * $f.outerHeight() : $o.offset().top - $f.outerHeight()) : ($(opts.bound).offset().top + ($(opts.bound).height() / 2) - $f.outerHeight());
                        ymaxpos = yminpos + $f.outerHeight() + (((isWin ? $w.height() : $f.outerHeight() / 2) - $f.outerHeight()) / 2);
                        break;
                    default:
                        ymaxpos = isWin ? (isFixed ? 0 : $w.scrollTop()) : $(opts.bound).offset().top;
                        yminpos = ymaxpos - $f.outerHeight();
                }
                $f.css({ 'left': xpos, 'position': pos, 'top': yminpos, 'z-index': opts.zIndex + 1 }).animate({ 'top': ymaxpos }, opts.easingDuration, opts.easingIn, function () {
                    callback = typeof callback === "function" ? callback : opts.afterShow;
                    callback.call(self);
                    if (opts.autoclose) {
                        timeoutId = setTimeout(methods.hide, opts.autoclose);
                    }
                });
            };
            if (opts.useOverlay) {
                if ($.browser.msie && $.browser.version < 9) {
                    $o.css({ 'display': 'block', 'z-index': opts.zIndex });
                    showFallr();
                } else {
                    $o.css({ 'z-index': opts.zIndex }).fadeIn(showFallr);
                }
            } else {
                showFallr();
            }
            $(document).bind('keydown', helpers.enterKeyHandler).bind('keydown', helpers.closeKeyHandler).bind('keydown', helpers.tabKeyHandler);
            $('#fallr-buttons').children().eq(-1).bind('focus', function () {
                $(this).bind('keydown', helpers.tabKeyHandler);
            });
            $f.find(':input').bind('keydown', function (e) {
                helpers.unbindKeyHandler();
                if (e.keyCode === 13) {
                    $('.fallr-button').eq(0).trigger('click');
                }
            });
        }
    }, set: function (options, callback, self) {
        for (var i in options) {
            if (defaults.hasOwnProperty(i)) {
                defaults[i] = options[i];
                if (opts && opts[i]) {
                    opts[i] = options[i];
                }
            }
        }
        if (typeof callback === "function") {
            callback.call(self);
        }
    }, isActive: function () {
        return !!($('#fallr-wrapper').length > 0);
    }, blink: function () {
        $('#fallr-wrapper').fadeOut(100, function () {
            $(this).fadeIn(100);
        });
    }, shake: function () {
        $('#fallr-wrapper').stop(true, true).animate({ 'left': '+=20px' }, 50, function () {
            $(this).animate({ 'left': '-=40px' }, 50, function () {
                $(this).animate({ 'left': '+=30px' }, 50, function () {
                    $(this).animate({ 'left': '-=20px' }, 50, function () {
                        $(this).animate({ 'left': '+=10px' }, 50);
                    });
                });
            });
        });
    } }, helpers = { fixPos: function () {
        var $f = $('#fallr-wrapper'), pos = $f.css('position');
        if ($w.width() > $f.outerWidth() && $w.height() > $f.outerHeight()) {
            var newLeft = ($w.width() - $f.outerWidth()) / 2, newTop = $w.height() - $f.outerHeight();
            switch (opts.position) {
                case 'center':
                    newTop = newTop / 2;
                    break;
                case 'bottom':
                    break;
                default:
                    newTop = 0;
            }
            if (pos == 'fixed') {
                $f.animate({ 'left': newLeft }, function () {
                    $(this).animate({ 'top': newTop });
                });
            } else {
                $f.css({ 'position': 'fixed', 'left': newLeft, 'top': newTop });
            }
        } else {
            var newLeft = ($w.width() - $f.outerWidth()) / 2 + $w.scrollLeft();
            var newTop = $w.scrollTop();
            if (pos != 'fixed') {
                $f.animate({ 'left': newLeft }, function () {
                    $(this).animate({ 'top': newTop });
                });
            } else {
                $f.css({ 'position': 'absolute', 'top': newTop, 'left': (newLeft > 0 ? newLeft : 0) });
            }
        }
    }, enterKeyHandler: function (e) {
        if (e.keyCode === 13) {
            $('#fallr-buttons').children().eq(0).focus();
            helpers.unbindKeyHandler();
        }
    }, tabKeyHandler: function (e) {
        if (e.keyCode === 9) {
            $('#fallr-wrapper').find(':input, .fallr-button').eq(0).focus();
            helpers.unbindKeyHandler();
            e.preventDefault();
        }
    }, closeKeyHandler: function (e) {
        if (e.keyCode === 27 && opts.closeKey) {
            methods.hide();
        }
    }, unbindKeyHandler: function () {
        $(document).unbind('keydown', helpers.enterKeyHandler).unbind('keydown', helpers.tabKeyHandler);
    } };
    $(document).ready(function () {
        $('body').append('<div id="fallr-overlay"></div>');
        $('#fallr-overlay').bind('click', function () {
            if (opts.closeOverlay) {
                methods.hide();
            } else {
                methods.blink();
            }
        });
    });
    $(window).resize(function () {
        if (methods.isActive() && opts.bound === window) {
            helpers.fixPos();
        }
    });
    $.fallr = function (method, options, callback) {
        var self = window;
        if (typeof method === 'object') {
            options = method;
            method = 'show';
        }
        if (methods[method]) {
            if (typeof options === 'function') {
                callback = options;
                options = null;
            }
            methods[method](options, callback, self);
        } else {
            $.error('Method "' + method + '" does not exist in $.fallr');
        }
    };
}(jQuery));
/*tipsy*/
;
(function (e) {
    function t(t, n) {
        this.$element = e(t);
        this.options = n;
        this.enabled = true;
        this.fixTitle()
    }

    t.prototype = { show: function () {
        var t = this.getTitle();
        if (t && this.enabled) {
            var n = this.tip();
            n.find(".tipsy-inner")[this.options.html ? "html" : "text"](t);
            n[0].className = "tipsy";
            n.remove().css({ top: 0, left: 0, visibility: "hidden", display: "block" }).prependTo(document.body);
            t = e.extend({}, this.$element.offset(), { width: this.$element[0].offsetWidth, height: this.$element[0].offsetHeight });
            var r = n[0].offsetWidth, i = n[0].offsetHeight, s = typeof this.options.gravity == "function" ? this.options.gravity.call(this.$element[0]) : this.options.gravity, o;
            switch (s.charAt(0)) {
                case "n":
                    o = { top: t.top + t.height + this.options.offset, left: t.left + t.width / 2 - r / 2 };
                    break;
                case "s":
                    o = { top: t.top - i - this.options.offset, left: t.left + t.width / 2 - r / 2 };
                    break;
                case "e":
                    o = { top: t.top + t.height / 2 - i / 2, left: t.left - r - this.options.offset };
                    break;
                case "w":
                    o = { top: t.top + t.height / 2 - i / 2, left: t.left + t.width + this.options.offset }
            }
            if (s.length == 2) o.left = s.charAt(1) == "w" ? t.left + t.width / 2 - 15 : t.left + t.width / 2 - r + 15;
            n.css(o).addClass("tipsy-" + s);
            n.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + s.charAt(0);
            this.options.className && n.addClass(typeof this.options.className == "function" ? this.options.className.call(this.$element[0]) : this.options.className);
            this.options.fade ? n.stop().css({ opacity: 0, display: "block", visibility: "visible" }).animate({ opacity: this.options.opacity }) : n.css({ visibility: "visible", opacity: this.options.opacity })
        }
    }, hide: function () {
        this.options.fade ? this.tip().stop().fadeOut(function () {
            e(this).remove()
        }) : this.tip().remove()
    }, fixTitle: function () {
        var e = this.$element;
        if (e.attr("title") || typeof e.attr("original-title") != "string") e.attr("original-title", e.attr("title") || "").removeAttr("title")
    }, getTitle: function () {
        var e, t = this.$element, n = this.options;
        this.fixTitle();
        n = this.options;
        if (typeof n.title == "string") e = t.attr(n.title == "title" ? "original-title" : n.title); else if (typeof n.title == "function") e = n.title.call(t[0]);
        return ("" + e).replace(/(^\s*|\s*$)/, "") || n.fallback
    }, tip: function () {
        if (!this.$tip) {
            this.$tip = e('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>');
            this.$tip.data("tipsy-pointee", this.$element[0])
        }
        return this.$tip
    }, validate: function () {
        if (!this.$element[0].parentNode) {
            this.hide();
            this.options = this.$element = null
        }
    }, enable: function () {
        this.enabled = true
    }, disable: function () {
        this.enabled = false
    }, toggleEnabled: function () {
        this.enabled = !this.enabled
    } };
    e.fn.tipsy = function (n) {
        function r(r) {
            var i = e.data(r, "tipsy");
            if (!i) {
                i = new t(r, e.fn.tipsy.elementOptions(r, n));
                e.data(r, "tipsy", i)
            }
            return i
        }

        function i() {
            var e = r(this);
            e.hoverState = "in";
            if (n.delayIn == 0) e.show(); else {
                e.fixTitle();
                setTimeout(function () {
                    e.hoverState == "in" && e.show()
                }, n.delayIn)
            }
        }

        function s() {
            var e = r(this);
            e.hoverState = "out";
            n.delayOut == 0 ? e.hide() : setTimeout(function () {
                e.hoverState == "out" && e.hide()
            }, n.delayOut)
        }

        if (n === true) return this.data("tipsy"); else if (typeof n == "string") {
            var o = this.data("tipsy");
            if (o) o[n]();
            return this
        }
        n = e.extend({}, e.fn.tipsy.defaults, n);
        n.live || this.each(function () {
            r(this)
        });
        if (n.trigger != "manual") {
            o = n.live ? "live" : "bind";
            var u = n.trigger == "hover" ? "mouseleave" : "blur";
            this[o](n.trigger == "hover" ? "mouseenter" : "focus", i)[o](u, s)
        }
        return this
    };
    e.fn.tipsy.defaults = { className: null, delayIn: 0, delayOut: 0, fade: false, fallback: "", gravity: "n", html: false, live: false, offset: 0, opacity: .8, title: "title", trigger: "hover" };
    e.fn.tipsy.revalidate = function () {
        e(".tipsy").each(function () {
            var t = e.data(this, "tipsy-pointee"), n;
            if (!(n = !t)) {
                e: {
                    for (; t = t.parentNode;) if (t == document) {
                        t = true;
                        break e
                    }
                    t = false
                }
                n = !t
            }
            n && e(this).remove()
        })
    };
    e.fn.tipsy.elementOptions = function (t, n) {
        return e.metadata ? e.extend({}, n, e(t).metadata()) : n
    };
    e.fn.tipsy.autoNS = function () {
        return e(this).offset().top > e(document).scrollTop() + e(window).height() / 2 ? "s" : "n"
    };
    e.fn.tipsy.autoWE = function () {
        return e(this).offset().left > e(document).scrollLeft() + e(window).width() / 2 ? "e" : "w"
    };
    e.fn.tipsy.autoBounds = function (t, n) {
        return function () {
            var r = { ns: n[0], ew: n.length > 1 ? n[1] : false }, i = e(document).scrollTop() + t, s = e(document).scrollLeft() + t, o = e(this);
            if (o.offset().top < i) r.ns = "n";
            if (o.offset().left < s) r.ew = "w";
            if (e(window).width() + e(document).scrollLeft() - o.offset().left < t) r.ew = "e";
            if (e(window).height() + e(document).scrollTop() - o.offset().top < t) r.ns = "s";
            return r.ns + (r.ew ? r.ew : "")
        }
    }
})(jQuery);
/*place holder */
;
(function (f, h, $) {
    var a = 'placeholder' in h.createElement('input'), d = 'placeholder' in h.createElement('textarea'), i = $.fn, c = $.valHooks, k, j;
    if (a && d) {
        j = i.placeholder = function () {
            return this
        };
        j.input = j.textarea = true
    } else {
        j = i.placeholder = function () {
            var l = this;
            l.filter((a ? 'textarea' : ':input') + '[placeholder]').not('.placeholder').bind({'focus.placeholder': b, 'blur.placeholder': e}).data('placeholder-enabled', true).trigger('blur.placeholder');
            return l
        };
        j.input = a;
        j.textarea = d;
        k = {get: function (m) {
            var l = $(m);
            return l.data('placeholder-enabled') && l.hasClass('placeholder') ? '' : m.value
        }, set: function (m, n) {
            var l = $(m);
            if (!l.data('placeholder-enabled')) {
                return m.value = n
            }
            if (n == '') {
                m.value = n;
                if (m != h.activeElement) {
                    e.call(m)
                }
            } else {
                if (l.hasClass('placeholder')) {
                    b.call(m, true, n) || (m.value = n)
                } else {
                    m.value = n
                }
            }
            return l
        }};
        a || (c.input = k);
        d || (c.textarea = k);
        $(function () {
            $(h).delegate('form', 'submit.placeholder', function () {
                var l = $('.placeholder', this).each(b);
                setTimeout(function () {
                    l.each(e)
                }, 10)
            })
        });
        $(f).bind('beforeunload.placeholder', function () {
            $('.placeholder').each(function () {
                this.value = ''
            })
        })
    }
    function g(m) {
        var l = {}, n = /^jQuery\d+$/;
        $.each(m.attributes, function (p, o) {
            if (o.specified && !n.test(o.name)) {
                l[o.name] = o.value
            }
        });
        return l
    }

    function b(m, n) {
        var l = this, o = $(l);
        if (l.value == o.attr('placeholder') && o.hasClass('placeholder')) {
            if (o.data('placeholder-password')) {
                o = o.hide().next().show().attr('id', o.removeAttr('id').data('placeholder-id'));
                if (m === true) {
                    return o[0].value = n
                }
                o.focus()
            } else {
                l.value = '';
                o.removeClass('placeholder');
                l == h.activeElement && l.select()
            }
        }
    }

    function e() {
        var q, l = this, p = $(l), m = p, o = this.id;
        if (l.value == '') {
            if (l.type == 'password') {
                if (!p.data('placeholder-textinput')) {
                    try {
                        q = p.clone().attr({type: 'text'})
                    } catch (n) {
                        q = $('<input>').attr($.extend(g(this), {type: 'text'}))
                    }
                    q.removeAttr('name').data({'placeholder-password': true, 'placeholder-id': o}).bind('focus.placeholder', b);
                    p.data({'placeholder-textinput': q, 'placeholder-id': o}).before(q)
                }
                p = p.removeAttr('id').hide().prev().attr('id', o).show()
            }
            p.addClass('placeholder');
            p[0].value = p.attr('placeholder')
        } else {
            p.removeClass('placeholder')
        }
    }
}(this, document, jQuery));
