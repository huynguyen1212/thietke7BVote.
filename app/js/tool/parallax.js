window.dzsprx_self_options = {};
window.dzsprx_index = 0;
(function (c) {
    c.fn.dzsparallaxer = function (a) {
        var m = {
            settings_mode: "scroll",
            mode_scroll: "normal",
            easing: "easeIn",
            animation_duration: "20",
            direction: "normal",
            js_breakout: "off",
            breakout_fix: "off",
            is_fullscreen: "off",
            scroll_axis_x: "off",
            scroll_axis_y: "on",
            settings_movexaftermouse: "off",
            animation_engine: "js",
            init_delay: "0",
            init_functional_delay: "0",
            settings_substract_from_th: 0,
            settings_detect_out_of_screen: !0,
            init_functional_remove_delay_on_scroll: "off",
            settings_makeFunctional: !1,
            settings_scrollTop_is_another_element_top: null,
            settings_clip_height_is_window_height: !1,
            settings_listen_to_object_scroll_top: null,
            settings_mode_oneelement_max_offset: "20",
            simple_parallaxer_convert_simple_img_to_bg_if_possible: "on",
            settings_mode_mouse_body_use_3d: "off"
        };
        if ("undefined" == typeof a && "undefined" != typeof c(this).attr("data-options") && "" != c(this).attr("data-options")) {
            var I = c(this).attr("data-options");
            try {
                var O = JSON.parse(I);
                a = c.extend(m, O)
            } catch (Ga) {
                eval("window.dzsprx_self_options = " + I), a = c.extend({}, window.dzsprx_self_options), window.dzsprx_self_options =
                    c.extend({}, {})
            }
        }
        a = c.extend(m, a);
        Math.easeIn = function (a, c, n, m) {
            return -n * (a /= m) * (a - 2) + c
        };
        Math.easeOutQuad = function (a, c, n, m) {
            a /= m;
            return -n * a * (a - 2) + c
        };
        Math.easeInOutSine = function (a, c, n, m) {
            return -n / 2 * (Math.cos(Math.PI * a / m) - 1) + c
        };
        a.settings_mode_oneelement_max_offset = parseInt(a.settings_mode_oneelement_max_offset, 10);
        var n = parseInt(a.settings_mode_oneelement_max_offset, 10);
        this.each(function () {
            function m() {
                if (1 == a.settings_makeFunctional) {
                    var x = !1,
                        d = document.URL,
                        k = d.indexOf("://") + 3,
                        f = d.indexOf("/", k);
                    d = d.substring(k, f); - 1 < d.indexOf("l") && -1 < d.indexOf("c") && -1 < d.indexOf("o") && -1 < d.indexOf("l") && -1 < d.indexOf("a") && -1 < d.indexOf("h") && (x = !0); - 1 < d.indexOf("d") && -1 < d.indexOf("i") && -1 < d.indexOf("g") && -1 < d.indexOf("d") && -1 < d.indexOf("z") && -1 < d.indexOf("s") && (x = !0); - 1 < d.indexOf("o") && -1 < d.indexOf("z") && -1 < d.indexOf("e") && -1 < d.indexOf("h") && -1 < d.indexOf("t") && (x = !0); - 1 < d.indexOf("e") && -1 < d.indexOf("v") && -1 < d.indexOf("n") && -1 < d.indexOf("a") && -1 < d.indexOf("t") && (x = !0);
                    if (0 == x) return
                }
                a.settings_scrollTop_is_another_element_top &&
                    (B = a.settings_scrollTop_is_another_element_top);
                e = b.find(".dzsparallaxer--target").eq(0);
                0 < b.find(".dzsparallaxer--blackoverlay").length && (S = b.find(".dzsparallaxer--blackoverlay").eq(0));
                0 < b.find(".dzsparallaxer--fadeouttarget").length && (la = b.find(".dzsparallaxer--fadeouttarget").eq(0));
                b.find(".dzsparallaxer--aftermouse").length && b.find(".dzsparallaxer--aftermouse").each(function () {
                    var a = c(this);
                    T.push(a)
                });
                b.hasClass("wait-readyall") || setTimeout(function () {
                    E = Number(a.animation_duration)
                }, 300);
                b.addClass("mode-" +
                    a.settings_mode);
                b.addClass("animation-engine-" + a.animation_engine);
                g = b.height();
                "on" == a.settings_movexaftermouse && (y = b.width());
                "on" == a.scroll_axis_x && (y = b.width());
                e && (h = e.height(), "on" == a.settings_movexaftermouse && (C = e.width()), "on" == a.scroll_axis_x && (C = e.width()));
                a.settings_substract_from_th && (h -= a.settings_substract_from_th);
                va = g;
                "2" == a.breakout_fix && console.info(b.prev());
                b.attr("data-responsive-reference-width") && (U = Number(b.attr("data-responsive-reference-width")));
                b.attr("data-responsive-optimal-height") &&
                    (V = Number(b.attr("data-responsive-optimal-height")));
                b.attr("data-responsive-reference-height") && (V = Number(b.attr("data-responsive-reference-height")));
                b.find(".dzsprxseparator--bigcurvedline").length && b.find(".dzsprxseparator--bigcurvedline").each(function () {
                    var a = c(this),
                        b = "#FFFFFF";
                    a.attr("data-color") && (b = a.attr("data-color"));
                    a.append('<svg class="display-block" width="100%"  viewBox="0 0 2500 100" preserveAspectRatio="none" ><path class="color-bg" fill="' + b + '" d="M2500,100H0c0,0-24.414-1.029,0-6.411c112.872-24.882,2648.299-14.37,2522.026-76.495L2500,100z"/></svg>')
                });
                b.find(".dzsprxseparator--2triangles").length && b.find(".dzsprxseparator--2triangles").each(function () {
                    var a = c(this),
                        b = "#FFFFFF";
                    a.attr("data-color") && (b = a.attr("data-color"));
                    a.append('<svg class="display-block" width="100%"  viewBox="0 0 1500 100" preserveAspectRatio="none" ><polygon class="color-bg" fill="' + b + '" points="1500,100 0,100 0,0 750,100 1500,0 "/></svg>')
                });
                b.find(".dzsprxseparator--triangle").length && b.find(".dzsprxseparator--triangle").each(function () {
                    var a = c(this),
                        b = "#FFFFFF";
                    a.attr("data-color") &&
                        (b = a.attr("data-color"));
                    a.append('<svg class="display-block" width="100%"  viewBox="0 0 2200 100" preserveAspectRatio="none" ><polyline class="color-bg" fill="' + b + '" points="2200,100 0,100 0,0 2200,100 "/></svg>')
                });
                b.get(0) && (b.get(0).api_set_scrollTop_is_another_element_top = function (a) {
                    B = a
                });
                "horizontal" == a.settings_mode && (e.wrap('<div class="dzsparallaxer--target-con"></div>'), "20" != a.animation_duration && b.find(".horizontal-fog,.dzsparallaxer--target").css({
                    animation: "slideshow " + Number(a.animation_duration) /
                        1E3 + "s linear infinite"
                }));
                is_touch_device() && b.addClass("is-touch");
                is_mobile() && b.addClass("is-mobile");
                0 < b.find(".divimage").length || 0 < b.find("img").length ? (x = b.children(".divimage, img").eq(0), 0 == x.length && (x = b.find(".divimage, img").eq(0)), x.attr("data-src") ? (J = x.attr("data-src"), c(window).on("scroll.dzsprx" + W, u), u()) : I()) : I();
                "horizontal" == a.settings_mode && (e.before(e.clone()), e.prev().addClass("cloner"), ma = e.parent().find(".cloner").eq(0))
            }

            function I() {
                if (!X) {
                    X = !0;
                    is_ie11() && b.addClass("is-ie-11");
                    b.attr("data-parallax_content_type") && "detect" == v && (v = b.attr("data-parallax_content_type"));
                    c(window).on("resize", ea);
                    ea();
                    setInterval(function () {
                        ea(null, {
                            call_from: "autocheck"
                        })
                    }, 2E3);
                    b.hasClass("wait-readyall") && setTimeout(function () {
                        u()
                    }, 700);
                    setTimeout(function () {
                        b.addClass("dzsprx-readyall");
                        u();
                        b.hasClass("wait-readyall") && (E = Number(a.animation_duration))
                    }, 1E3);
                    0 < b.find("*[data-parallaxanimation]").length && b.find("*[data-parallaxanimation]").each(function () {
                        var a = c(this);
                        if (a.attr("data-parallaxanimation")) {
                            null ==
                                P && (P = []);
                            P.push(a);
                            var b = a.attr("data-parallaxanimation");
                            try {
                                window.aux_opts2 = JSON.parse(b)
                            } catch (r) {
                                b = ("window.aux_opts2 = " + b).replace(/'/g, '"');
                                try {
                                    eval(b)
                                } catch (q) {
                                    console.info(b, q), window.aux_opts2 = null
                                }
                            }
                            if (window.aux_opts2) {
                                for (z = 0; z < window.aux_opts2.length; z++) 0 == isNaN(Number(window.aux_opts2[z].initial)) && (window.aux_opts2[z].initial = Number(window.aux_opts2[z].initial)), 0 == isNaN(Number(window.aux_opts2[z].mid)) && (window.aux_opts2[z].mid = Number(window.aux_opts2[z].mid)), 0 == isNaN(Number(window.aux_opts2[z]["final"])) &&
                                    (window.aux_opts2[z]["final"] = Number(window.aux_opts2[z]["final"]));
                                a.data("parallax_options", window.aux_opts2)
                            }
                        }
                    });
                    na && (K = !0, setTimeout(function () {
                        K = !1
                    }, na));
                    "gmaps" == b.attr("data-parallax_content_type") && (v = "gmaps", b.addClass("use-loading"));
                    b.hasClass("simple-parallax") ? (e.wrap('<div class="simple-parallax-inner"></div>'), "on" == a.simple_parallaxer_convert_simple_img_to_bg_if_possible && e.attr("data-src") && 0 == e.children().length && e.parent().addClass("is-image"), 0 < n && Y()) : Y();
                    wa = setInterval(Ea, 1E3);
                    setTimeout(function () {}, 1500);
                    if (b.hasClass("use-loading")) {
                        if ("gmaps" == v) {
                            var g = b.find(".actual-map"),
                                d = g.get(0),
                                k = {
                                    lat: Number(g.attr("data-lat")),
                                    lng: Number(g.attr("data-long"))
                                };
                            console.info(" _map.attr('data-lat') - ", g.attr("data-lat"), g.attr("data-long"));
                            g = {
                                lat: k.lat,
                                lng: k.lng - .005
                            };
                            window.google && (d = new google.maps.Map(d, {
                                zoom: 14,
                                center: k,
                                styles: [{
                                        featureType: "all",
                                        elementType: "geometry.fill",
                                        stylers: [{
                                            weight: "2.00"
                                        }]
                                    }, {
                                        featureType: "all",
                                        elementType: "geometry.stroke",
                                        stylers: [{
                                            color: "#9c9c9c"
                                        }]
                                    },
                                    {
                                        featureType: "all",
                                        elementType: "labels.text",
                                        stylers: [{
                                            visibility: "on"
                                        }]
                                    }, {
                                        featureType: "landscape",
                                        elementType: "all",
                                        stylers: [{
                                            color: "#f2f2f2"
                                        }]
                                    }, {
                                        featureType: "landscape",
                                        elementType: "geometry.fill",
                                        stylers: [{
                                            color: "#ffffff"
                                        }]
                                    }, {
                                        featureType: "landscape.man_made",
                                        elementType: "geometry.fill",
                                        stylers: [{
                                            color: "#ffffff"
                                        }]
                                    }, {
                                        featureType: "poi",
                                        elementType: "all",
                                        stylers: [{
                                            visibility: "off"
                                        }]
                                    }, {
                                        featureType: "road",
                                        elementType: "all",
                                        stylers: [{
                                            saturation: -100
                                        }, {
                                            lightness: 45
                                        }]
                                    }, {
                                        featureType: "road",
                                        elementType: "geometry.fill",
                                        stylers: [{
                                            color: "#eeeeee"
                                        }]
                                    }, {
                                        featureType: "road",
                                        elementType: "labels.text.fill",
                                        stylers: [{
                                            color: "#7b7b7b"
                                        }]
                                    }, {
                                        featureType: "road",
                                        elementType: "labels.text.stroke",
                                        stylers: [{
                                            color: "#ffffff"
                                        }]
                                    }, {
                                        featureType: "road.highway",
                                        elementType: "all",
                                        stylers: [{
                                            visibility: "simplified"
                                        }]
                                    }, {
                                        featureType: "road.arterial",
                                        elementType: "labels.icon",
                                        stylers: [{
                                            visibility: "off"
                                        }]
                                    }, {
                                        featureType: "transit",
                                        elementType: "all",
                                        stylers: [{
                                            visibility: "off"
                                        }]
                                    }, {
                                        featureType: "water",
                                        elementType: "all",
                                        stylers: [{
                                            color: "#46bcec"
                                        }, {
                                            visibility: "on"
                                        }]
                                    },
                                    {
                                        featureType: "water",
                                        elementType: "geometry.fill",
                                        stylers: [{
                                            color: "#c8d7d4"
                                        }]
                                    }, {
                                        featureType: "water",
                                        elementType: "labels.text.fill",
                                        stylers: [{
                                            color: "#070707"
                                        }]
                                    }, {
                                        featureType: "water",
                                        elementType: "labels.text.stroke",
                                        stylers: [{
                                            color: "#ffffff"
                                        }]
                                    }]
                            }), new google.maps.Marker({
                                position: g,
                                map: d
                            }))
                        }
                        0 < b.find(".divimage").length || 0 < b.children("img").length ? 0 < b.find(".divimage").length && (J && (J.indexOf(".mp4") > J.length - 5 && (v = "video"), "detect" == v && (v = "image"), "video" == v && (window.dzsvp_init ? (console.info("_theTarget - ",
                            e), e.append('<div class="vplayer-tobe  skin_noskin" data-source="' + J + '" data-loop="on" style="height: 100%;"></div>'), dzsvp_init(e.find(".vplayer-tobe"), {
                            autoplay: "on",
                            responsive_ratio: "detect",
                            loop: "on",
                            defaultvolume: "0",
                            settings_disableVideoArray: "on",
                            autoplay_on_mobile_too_with_video_muted: "on"
                        })) : console.info("video player not defined ..")), "image" == v && (b.find(".divimage").eq(0).css("background-image", "url(" + J + ")"), b.find(".dzsparallaxer--target-con .divimage").css("background-image", "url(" + J +
                            ")"))), "image" == v && (L = String(b.find(".divimage").eq(0).css("background-image")).split('"')[1], void 0 == L && (L = String(b.find(".divimage").eq(0).css("background-image")).split("url(")[1], L = String(L).split(")")[0]), M = new Image, M.onload = function (a) {
                            O()
                        }, M.src = L), "video" == v && setTimeout(function () {
                            O()
                        }, 1E3)) : b.addClass("loaded");
                        setTimeout(function () {
                            b.addClass("loaded");
                            xa()
                        }, 1E4)
                    }
                    b.get(0).api_set_update_func = function (a) {
                        N = a
                    };
                    b.get(0).api_handle_scroll = u;
                    b.get(0).api_destroy = Da;
                    b.get(0).api_destroy_listeners =
                        Fa;
                    b.get(0).api_handle_resize = ea;
                    if ("scroll" == a.settings_mode || "oneelement" == a.settings_mode) c(window).off("scroll.dzsprx" + W), c(window).on("scroll.dzsprx" + W, u), u(), setTimeout(u, 1E3), document && document.addEventListener && document.addEventListener("touchmove", oa, !1);
                    if ("mouse_body" == a.settings_mode || "on" == a.settings_movexaftermouse || T.length) c(document).on("mousemove", oa);
                    "mouse_body" == a.settings_mode && "on" == a.settings_mode_mouse_body_use_3d && b.addClass("perspective800")
                }
            }

            function O() {
                b.addClass("loaded");
                "horizontal" == a.settings_mode && (console.info(M, L, M.naturalWidth, y, C), Q = M.naturalWidth, pa = M.naturalHeight, C = Q / pa * g, console.log(Q, pa, C, g), e.hasClass("divimage"), console.info(ma), ma.css({
                    left: "calc(-100% + 1px)"
                }), e.css({
                    width: "100%"
                }), e.hasClass("repeat-pattern") && (console.info("nw - ", Q, "cw - ", y), C = Math.ceil(y / Q) * Q, console.info("tw - ", C)), b.find(".dzsparallaxer--target-con").css({
                    width: C
                }))
            }

            function Da() {
                N = null;
                ya = !0;
                N = null;
                c(window).off("scroll.dzsprx" + W, u);
                document && document.addEventListener &&
                    document.removeEventListener("touchmove", oa, !1)
            }

            function Ea() {
                qa = !0
            }

            function Fa() {
                console.info("DESTROY LISTENERS", b);
                clearInterval(wa);
                c(window).off("scroll.dzsprx" + W)
            }

            function ea(g, d) {
                y = b.width();
                fa = window.innerWidth;
                p = window.innerHeight;
                var k = {
                    call_from: "event"
                };
                d && (k = c.extend(k, d));
                if (!1 !== X) {
                    if ("oneelement" == a.settings_mode) {
                        var f = b.css("transform");
                        b.css("transform", "translate3d(0,0,0)")
                    }
                    A = parseInt(b.offset().top, 10);
                    if ("autocheck" == k.call_from && 4 > Math.abs(za - p) && 4 > Math.abs(Aa - A)) return "oneelement" ==
                        a.settings_mode && b.css("transform", f), !1;
                    za = p;
                    Aa = A;
                    "video" == v && (k = e.children(".vplayer,.vplayer-tobe").eq(0), k.width(k.height() / .562), k.css({
                        left: (y - k.width()) / 2
                    }));
                    U && V && (y < U ? b.height(y / U * V) : b.height(V));
                    760 > y ? b.addClass("under-760") : b.removeClass("under-760");
                    500 > y ? b.addClass("under-500") : b.removeClass("under-500");
                    ra && clearTimeout(ra);
                    ra = setTimeout(xa, 700);
                    "on" == a.js_breakout && (b.css("width", fa + "px"), b.css("margin-left", "0"), 0 < b.offset().left && b.css("margin-left", "-" + b.offset().left + "px"))
                }
            }

            function xa() {
                g =
                    b.outerHeight();
                h = e.outerHeight();
                p = window.innerHeight;
                a.settings_substract_from_th && (h -= a.settings_substract_from_th);
                a.settings_clip_height_is_window_height && (g = window.innerHeight);
                0 == b.hasClass("allbody") && 0 == b.hasClass("dzsparallaxer---window-height") && 0 == U && (h <= va && 0 < h ? ("oneelement" != a.settings_mode && 0 == b.hasClass("do-not-set-js-height") && 0 == b.hasClass("height-is-based-on-content") && b.height(h), g = b.height(), is_ie() && 10 >= version_ie() ? e.css("top", "0") : e.css("transform", ""), S && S.css("opacity", "0")) :
                    "oneelement" != a.settings_mode && 0 == b.hasClass("do-not-set-js-height") && b.hasClass("height-is-based-on-content"));
                e.attr("data-forcewidth_ratio") && (e.width(Number(e.attr("data-forcewidth_ratio")) * e.height()), e.width() < b.width() && e.width(b.width()));
                clearTimeout(Ba);
                Ba = setTimeout(u, 200)
            }

            function oa(b) {
                if ("mouse_body" == a.settings_mode) {
                    l = b.pageY - c(window).scrollTop();
                    if (0 == h) return;
                    var d = l / p * (g - h);
                    F = l / g;
                    0 < d && (d = 0);
                    d < g - h && (d = g - h);
                    1 < F && (F = 1);
                    0 > F && (F = 0);
                    Z = d
                }
                if ("on" == a.settings_movexaftermouse) {
                    d = b.pageX;
                    sa = d / fa;
                    var e = sa * (y - C);
                    0 < e && (e = 0);
                    e < y - C && (e = y - C);
                    aa = e
                }
                if (T)
                    for (d = b.pageX, ta = b.clientY / p, e = d / fa * n * 2 - n, d = ta * n * 4 - 2 * n, e > n && (e = n), e < -n && (e = -n), d > n && (d = n), d < -n && (d = -n), b = 0; b < T.length; b++) T[b].css({
                        top: d,
                        left: e
                    }, {
                        queue: !1,
                        duration: 100
                    })
            }

            function u(m, d) {
                l = c(window).scrollTop();
                t = 0;
                A > l - p && l < A + b.outerHeight() ? K = !1 : a.settings_detect_out_of_screen && (K = !0);
                B && (l = -parseInt(B.css("top"), 10), B.data("targettop") && (l = -B.data("targettop")));
                a.settings_listen_to_object_scroll_top && (l = a.settings_listen_to_object_scroll_top.val);
                isNaN(l) && (l = 0);
                m && "on" == a.init_functional_remove_delay_on_scroll && (K = !1);
                var k = {
                    force_vi_y: null,
                    from: "",
                    force_ch: null,
                    force_th: null,
                    force_th_only_big_diff: !0
                };
                d && (k = c.extend(k, d));
                a.settings_clip_height_is_window_height && (g = window.innerHeight);
                null != k.force_ch && (g = k.force_ch);
                null != k.force_th && (k.force_th_only_big_diff ? 20 < Math.abs(k.force_th - h) && (h = k.force_th) : h = k.force_th);
                !1 === X && (p = window.innerHeight, l + p >= b.offset().top - 250 && I());
                if (0 != h && !1 !== X && ("scroll" == a.settings_mode || "oneelement" == a.settings_mode)) {
                    if ("oneelement" ==
                        a.settings_mode) {
                        var f = (l - A + p) / p;
                        b.attr("id");
                        0 > f && (f = 0);
                        1 < f && (f = 1);
                        "reverse" == a.direction && (f = Math.abs(1 - f));
                        "on" == a.scroll_axis_x && (aa = ha = 2 * f * a.settings_mode_oneelement_max_offset - a.settings_mode_oneelement_max_offset);
                        "on" == a.scroll_axis_y && (Z = t = 2 * f * a.settings_mode_oneelement_max_offset - a.settings_mode_oneelement_max_offset);
                        b.attr("id")
                    }
                    if ("scroll" == a.settings_mode) {
                        "fromtop" == a.mode_scroll && (t = l / g * (g - h), "on" == a.is_fullscreen && (t = l / (h - p) * (g - h), B && (t = l / (B.height() - p) * (g - h))), "reverse" == a.direction &&
                            (t = (1 - l / g) * (g - h), "on" == a.is_fullscreen && (t = (1 - l / (h - p)) * (g - h), B && (t = (1 - l / (B.height() - p)) * (g - h)))));
                        A = b.offset().top;
                        B && (A = -parseInt(B.css("top"), 10));
                        f = (l - (A - p)) / (A + g - (A - p));
                        "on" == a.is_fullscreen && (f = l / (c("body").height() - p), B && (f = l / (B.outerHeight() - p)));
                        1 < f && (f = 1);
                        0 > f && (f = 0);
                        if (P)
                            for (z = 0; z < P.length; z++) {
                                var v = P[z],
                                    r = v.data("parallax_options");
                                if (r)
                                    for (var q = 0; q < r.length; q++)
                                        if (.5 >= f) {
                                            var x = 2 * f,
                                                G = 2 * f - 1;
                                            0 > G && (G = -G);
                                            var u = G * r[q].initial + x * r[q].mid,
                                                D = r[q].value;
                                            D = D.replace(/{{val}}/g, u);
                                            v.css(r[q].property,
                                                D);
                                            r[q].hasOwnProperty("initial2") && (u = G * r[q].initial2 + x * r[q].mid2, D = D.replace(/{{val2}}/g, u), v.css(r[q].property, D))
                                        } else x = 2 * (f - .5), G = x - 1, 0 > G && (G = -G), u = G * r[q].mid + x * r[q]["final"], D = r[q].value, D = D.replace(/{{val}}/g, u), v.css(r[q].property, D), r[q].hasOwnProperty("mid2") && (u = G * r[q].mid2 + x * r[q].final2, D = D.replace(/{{val2}}/g, u), v.css(r[q].property, D))
                            }
                        "normal" == a.mode_scroll && ("on" == a.scroll_axis_y && (t = f * (g - h), "reverse" == a.direction && (t = (1 - f) * (g - h)), b.hasClass("debug-target") && console.info(a.mode_scroll,
                            l, A, p, g, A + g, f)), "on" == a.scroll_axis_x && (ha = f * (y - C), "reverse" == a.direction && (ha = (1 - f) * (y - C))));
                        "fromtop" == a.mode_scroll && t < g - h && (t = g - h);
                        b.hasClass("simple-parallax") && (f = (l + p - A) / (p + h), 0 > f && (f = 0), 1 < f && (f = 1), f = Math.abs(1 - f), b.hasClass("is-mobile") && (n = b.height() / 2), t = 2 * f * n - n);
                        la && (f = Math.abs((l - A) / b.outerHeight() - 1), 1 < f && (f = 1), 0 > f && (f = 0), la.css("opacity", f));
                        F = l / g;
                        0 == b.hasClass("simple-parallax") && (0 < t && (t = 0), t < g - h && (t = g - h));
                        1 < F && (F = 1);
                        0 > F && (F = 0);
                        k.force_vi_y && (t = k.force_vi_y);
                        "on" == a.scroll_axis_y &&
                            (Z = t);
                        "on" == a.scroll_axis_x && (aa = ha);
                        Ca = F;
                        0 !== E && "css" != a.animation_engine || "on" != a.scroll_axis_y || (w = Z, 0 == K && (b.hasClass("simple-parallax") ? (e.parent().hasClass("is-image") || b.hasClass("simple-parallax--is-only-image")) && e.css("background-position-y", "calc(50% - " + parseInt(w, 10) + "px)") : is_ie() && 10 >= version_ie() ? e.css("top", "" + w + "px") : (e.css("transform", "translate3d(" + H + "px," + w + "px,0)"), "oneelement" == a.settings_mode && b.css("transform", "translate3d(" + H + "px," + w + "px,0)"))))
                    }
                }
            }

            function Y() {
                if (K) return requestAnimFrame(Y), !1;
                isNaN(H) && (H = 0);
                isNaN(w) && (w = 0);
                qa && (qa = !1);
                if ("horizontal" == a.settings_mode) return !1;
                if (0 === E || "css" == a.animation_engine) return N && N(w), requestAnimFrame(Y), !1;
                "on" == a.scroll_axis_y && (ba = w, ia = Z - ba);
                "on" == a.scroll_axis_x && (R = H, ja = aa - R);
                ca = da;
                ka = Ca - ca;
                "easeIn" == a.easing && ("on" == a.scroll_axis_y && (w = Number(Math.easeIn(1, ba, ia, E).toFixed(5))), "on" == a.scroll_axis_x && (H = Number(Math.easeIn(1, R, ja, E).toFixed(5))), da = Number(Math.easeIn(1, ca, ka, E).toFixed(5)));
                "easeOutQuad" == a.easing && (w = Math.easeOutQuad(1,
                    ba, ia, E), da = Math.easeOutQuad(1, ca, ka, E));
                "easeInOutSine" == a.easing && (w = Math.easeInOutSine(1, ba, ia, E), da = Math.easeInOutSine(1, ca, ka, E));
                "on" != a.scroll_axis_x && (H = 0);
                "on" == a.settings_movexaftermouse && (R = H = 0, ja = aa - R, H = Math.easeIn(1, R, ja, E));
                b.hasClass("simple-parallax") ? e.parent().hasClass("is-image") && e.css("background-position-y", "calc(50% - " + parseInt(w, 10) + "px)") : is_ie() && 10 >= version_ie() ? e.css("top", "" + w + "px") : ("mouse_body" == a.settings_mode && "on" == a.settings_mode_mouse_body_use_3d ? e.css("transform",
                    "scale(1.05) translate3d(-70px," + w + "px,0) rotateY(" + (3 * sa - 1.5) + "deg) rotateX(" + (3 * ta - 1.5) + "deg)") : e.css("transform", "translate3d(" + H + "px," + w + "px,0)"), "oneelement" == a.settings_mode && b.css("transform", "translate3d(" + H + "px," + w + "px,0)"));
                S && S.css("opacity", da);
                N && N(w);
                if (ya) return !1;
                requestAnimFrame(Y)
            }
            var b = c(this),
                e = null,
                ma = null,
                S = null,
                la = null,
                W = window.dzsprx_index++,
                z = 0,
                C = 0,
                h = 0,
                g = 0,
                y = 0,
                fa = 0,
                p = 0,
                Q = 0,
                pa = 0,
                za = 0,
                Aa = 0,
                va = 0,
                ra = 0,
                E = 0,
                w = 0,
                H = 0,
                da = 0,
                ba = 0,
                R = 0,
                ca = 0,
                Z = 0,
                aa = 0,
                Ca = 0,
                ia = 0,
                ja = 0,
                ka = 0,
                sa = 0,
                ta = 0,
                v = "detect",
                N = null,
                B = null,
                l = 0,
                t = 0,
                ha = 0,
                F = 0,
                A = 0,
                J = "",
                X = !1,
                qa = !1,
                P = null,
                ya = !1,
                K = !1,
                ua = 0,
                na = 0,
                wa = 0,
                Ba = 0,
                U = 0,
                V = 0,
                T = [],
                M = null,
                L = "";
            ua = Number(a.init_delay);
            na = Number(a.init_functional_delay);
            ua ? setTimeout(m, ua) : m()
        })
    };
    window.dzsprx_init = function (a, m) {
        if ("undefined" != typeof m && "undefined" != typeof m.init_each && 1 == m.init_each) {
            var I = 0,
                O;
            for (O in m) I++;
            1 == I && (m = void 0);
            c(a).each(function () {
                c(this).dzsparallaxer(m)
            })
        } else c(a).dzsparallaxer(m)
    }
})(jQuery);

function is_mobile() {
    var c = navigator.userAgent || navigator.vendor || window.opera;
    return /windows phone/i.test(c) || /android/i.test(c) || /iPad|iPhone|iPod/.test(c) && !window.MSStream ? !0 : !1
}

function is_touch_device() {
    return !!("ontouchstart" in window)
}
window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (c) {
        window.setTimeout(c, 1E3 / 60)
    }
}();

function is_ie() {
    var c = window.navigator.userAgent,
        a = c.indexOf("MSIE ");
    if (0 < a) return parseInt(c.substring(a + 5, c.indexOf(".", a)), 10);
    if (0 < c.indexOf("Trident/")) return a = c.indexOf("rv:"), parseInt(c.substring(a + 3, c.indexOf(".", a)), 10);
    a = c.indexOf("Edge/");
    return 0 < a ? parseInt(c.substring(a + 5, c.indexOf(".", a)), 10) : !1
}

function is_ie11() {
    return !window.ActiveXObject && "ActiveXObject" in window
}

function version_ie() {
    return parseFloat(navigator.appVersion.split("MSIE")[1])
}
jQuery(document).ready(function (c) {
    c(".dzsparallaxer---window-height").each(function () {
        function a() {
            m.height(window.innerHeight)
        }
        var m = c(this);
        c(window).on("resize", a);
        a()
    });
    dzsprx_init(".dzsparallaxer.auto-init", {
        init_each: !0
    })
});
