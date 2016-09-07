/*! appcan v1.0.0 Beta |  from 3g2win.com */
appcan.define("optionList", function(a, b, c) {
    var d = '<li style="position: relative;border-bottom:1px solid #BABABA;color: black;display: -webkit-box !important;display: box !important;-webkit-box-align: center;box-align: center; padding:0;"  <%if(group){%>data-group="<%=group%>"<%}%> <%if(data.id){%>id="<%=data.id%>"<%}%> data-index="<%=index%>">\r\n<div class="scroll-bar" data-index="<%=index%>" style="width: 100%;z-index:99;overflow:hidden;background-color: aliceblue;margin-left: 0px; display: -webkit-box !important;display: box !important;-webkit-box-align: center;box-align: center; <%if(data.height){%>height:<%=data.height%>;line-height:<%=data.height%>;<%}else{%>height:100%;line-height:100%;<%}%>">\r\n<%=data.content%>\r\n</div>\r\n<div class="scroll-right" data-index="<%=index%>" style="position: absolute;top: 0;right: 0; color: #FFF;display: -webkit-box !important;display: box !important;-webkit-box-align: center;box-align: center;<%if(data.height){%>height:<%=data.height%>;line-height:<%=data.height%>;<%}else{%>height:100%;line-height:100%;<%}%>;background:<%if(!$.isArray(data.hideOption.style)) {%><%=data.hideOption.style.background%><%}%>;"><div style="clear:both;font-size:<%if(!$.isArray(data.hideOption.style)) {%><%=data.hideOption.style.fontSize%><%}%>;padding:<%if(!$.isArray(data.hideOption.style)) {%><%=data.hideOption.style.padding%><%}%>;display: -webkit-box !important;display: box !important;-webkit-box-align: center;box-align: center;height: 100%;line-height: 100%;">\r\n<%if(Object.prototype.toString.call(data.hideOption.content) === "[object Array]"){%>\r\n<%data.hideOption.content.length%>\r\n<%for(var index in data.hideOption.content){%>\r\n<div data-index="<%=index%>" style="float:left;display: -webkit-box !important;display: box !important;-webkit-box-align: center;center;height: 100%;line-height: 100%;font-size:<%if($.isArray(data.hideOption.style)) {%><%=data.hideOption.style[index].fontSize%><%}%>;padding:<%if($.isArray(data.hideOption.style)) {%><%=data.hideOption.style[index].padding%><%}%>;background:<%if($.isArray(data.hideOption.style)) {%><%=data.hideOption.style[index].background%><%}%>;"><%=data.hideOption.content[index]%></div>\r\n<%}%>\r\n<%}else{%>\r\n<div><%=data.hideOption.content%></div>\r\n<%}%>\r\n</div></div>\r\n</div>\r\n</li>',
        e,
        f = appcan.view.template(d),
        g = 1;
    function h() {
        return "ontouchstart" in window ?
        void 0 : !0
    }

    function i(b) {
        appcan.extend(this, appcan.eventEmitter);
        var c = this;
        c.option = a.extend({
            selector : "body",
            type : "hiddenLine",
            hasIcon : !0,
            hasAngle : !0,
            hasSubTitle : !1,
            hasTouchEffect : !0,
            hasCheckbox : !1,
            hasRadiobox : !1,
            hasControl : !1,
            hasGroup : !1,
            align : "left",
            multiLine : 1,
            multiShow : !1,
            duration : "300ms",
            id : g++
        }, b, !0), uexWindow.getBounce && "function" == typeof uexWindow.getBounce && appcan.window.getBounceStatus(function(a, b, c) {
            e = a
        }), c.ele = a(c.option.selector), c.option.data && c.set(data)
    }


    i.prototype = {
        buildListview : function(b, c) {
            var d = a("<ul></ul>"),
                g = this,
                h = "hiddenLine" == g.option.type ? f : f;
            for (var i in b) {
                var j = a(h({
                    data : b[i],
                    option : g.option,
                    index : i,
                    group : c
                }));
                j[0].lv_data = b[i], j.off("tap").on("tap", function(a) {
                    var type = $(a.target).attr('type');
                    if (!(type == 'radio' || type == 'checkbox' || type == 'selfinput')) {
                        g.itemClick(a);
                    }
                }), j.off("longTap").on("longTap", function(c) {
                    if (c.currentTarget && "LI" == a(c.currentTarget)[0].tagName) {
                        var d = a(c.currentTarget).data("index");
                        b[d].onLongTap && "function" == typeof b[d].onLongTap ? b[d].onLongTap(a(c.currentTarget)[0], d) : g.longTapItem(c)
                    }
                }), j.off("cancleTap").on("cancleTap", function(a) {
                    g.longTapItem(a)
                }), d.append(j)
            }
            var k = 0,
                l = 0,
                m = 0,
                n = 0,
                o = a(".scrollRight").width(),
                p = 0,
                q = !0,
                r = 0,
                s = !1;
            function t(a, b) {
                var c = b.x - a.x,
                    d = b.y - a.y;
                return 360 * Math.atan(d / c) / (2 * Math.PI)
            }

            return a(document).on("touchstart", ".scroll-bar", function(b) {
                if (1 == e && appcan.window.disableBounce(), !g.option.multiShow) {
                    var c = a(this).data("index");
                    a(".scroll-bar").not(this).css({
                        "-webkit-transition-duration" : "100ms",
                        marginLeft : 0
                    })
                }
                q = !0,
                r = 0;
                var d = b.touches[0];
                k = d.pageX,
                l = d.pageY,
                m = d.pageX,
                n = d.pageY,
                p = parseInt(a(this)[0].style.marginLeft),
                o = a(this).siblings(".scroll-right").width(), a(".scroll-bar").css({
                    "-webkit-transition-duration" : "0s"
                })
            }), a(document).on("touchmove", ".scroll-bar", function(b) {
                if (0 != q) {
                    var c = b.touches[0];
                    m = c.pageX,
                    n = c.pageY, isNaN(p) && ( p = 0);
                    var d = p + m - k;
                    if ( d = 0 > d ? d : 0, 0 == r) {
                        var f = {
                            x : k,
                            y : l
                        },
                            g = {
                            x : m,
                            y : n
                        },
                            h = t(f, g);
                        if ( r = 1, parseInt(h) < -30 || parseInt(h) > 30)
                            1 == e && appcan.window.enableBounce(),
                            q = !1;
                        else {
                            if (parseInt(a(this)[0].style.marginLeft) > 0)
                                return;
                            a(this).css({
                                "-webkit-transition-duration" : "0s",
                                marginLeft : d
                            }), b.preventDefault()
                        }
                    } else {
                        if (0 == q)
                            return;
                        if (parseInt(a(this)[0].style.marginLeft) > 0)
                            return;
                        a(this).css({
                            "-webkit-transition-duration" : "0s",
                            marginLeft : d
                        })
                    }
                }
            }), a(document).on("touchend", ".scroll-bar", function(b) {
                1 == e && appcan.window.enableBounce(), q && a(this).css(k - m > o / 2 ? {
                    "-webkit-transition-duration" : g.option.duration,
                    marginLeft : -o
                } : {
                    "-webkit-transition-duration" : g.option.duration,
                    marginLeft : 0
                })
            }), a(document).on("touchcancel", ".scroll-bar", function(b) {
                1 == e && appcan.window.enableBounce(), q && a(this).css(k - m > o / 2 ? {
                    "-webkit-transition-duration" : g.option.duration,
                    marginLeft : -o
                } : {
                    "-webkit-transition-duration" : g.option.duration,
                    marginLeft : 0
                })
            }), a(document).on("mousedown", ".scroll-bar", function(b) {
                var c = this;
                g.option.multiShow || a(".scroll-bar").css({
                    "-webkit-transition-duration" : "100ms",
                    marginLeft : 0
                }),
                s = !0,
                q = !0,
                r = 0;
                var d = b.touches ? b.touches[0] : b;
                k = d.pageX,
                l = d.pageY,
                m = d.pageX,
                n = d.pageY,
                p = parseInt(a(this)[0].style.marginLeft),
                o = a(this).siblings(".scroll-right").width()
            }), a(document).on("mousemove", ".scroll-bar", function(b) {
                if (s && 0 != q) {
                    var c = b.touches ? b.touches[0] : b;
                    m = c.pageX,
                    n = c.pageY, isNaN(p) && ( p = 0);
                    var d = p + m - k;
                    if ( d = 0 > d ? d : 0, 0 == r) {
                        var e = {
                            x : k,
                            y : l
                        },
                            f = {
                            x : m,
                            y : n
                        },
                            g = t(e, f);
                        if ( r = 1, parseInt(g) < -30 || parseInt(g) > 30)
                            q = !1;
                        else {
                            if (parseInt(a(this)[0].style.marginLeft) > 0)
                                return;
                            a(this).css({
                                "-webkit-transition-duration" : "0s",
                                marginLeft : d
                            })
                        }
                    } else {
                        if (0 == q)
                            return !0;
                        if (parseInt(a(this)[0].style.marginLeft) > 0)
                            return;
                        a(this).css({
                            "-webkit-transition-duration" : "0s",
                            marginLeft : d
                        })
                    }
                }
            }), a(document).on("mouseup", ".scroll-bar", function(b) {
                s = !1, q && a(this).css(k - m > o / 2 ? {
                    "-webkit-transition-duration" : g.option.duration,
                    marginLeft : -o
                } : {
                    "-webkit-transition-duration" : g.option.duration,
                    marginLeft : 0
                })
            }), d
        },
        buildGroupview : function(b) {
            var c = this,
                d = a("<ul></ul>");
            for (var e in b) {
                var f = a(groupLineTmp({
                    data : b[e],
                    option : c.option,
                    index : e
                }));
                d.append(f), d.append(c.buildListview(b[e].items, e))
            }
            return d
        },
        add : function(b, c) {
            var d = this,
                e = d.buildListview(b);
            if (c || 1 == c)
                d.ele.append(e);
            else {
                var f = d.ele.children().first();
                f.prepend(e)
            }
            return a(".scroll-right").on("tap", function(c) {
                var d = this,
                    e = a(d).data("index"),
                    f = a(".scroll-right").length;
                b[e].hideOption.onClick && "function" == typeof b[e].hideOption.onClick && (b[e].hideOption.onClick(c, e, f), c.stopPropagation())
            }), d
        },
        set : function(b) {
            var c = this;
            if (!uexWindow.getBounce || "function" != typeof uexWindow.getBounce) {
                var d;
                return d = c.option.hasGroup ? c.buildGroupview(b) : c.buildListview(b), c.ele.html(d), a(".scroll-right").on("tap", function(c) {
                    var d = this,
                        e = a(d).data("index"),
                        f = a(".scroll-right").length,
                        g = parseInt(a(c.target).data('index')),
                        h = $(c.target).siblings().length + 1;
                    b[e].hideOption.onClick && "function" == typeof b[e].hideOption.onClick && (a(".scroll-bar").css({
                        "-webkit-transition-duration" : "100ms",
                        marginLeft : 0
                    }), b[e].hideOption.onClick(c, g, h), c.stopPropagation())
                }), c
            }
            appcan.window.getBounceStatus(function(d, f, g) {
                e = d;
                var h;
                return h = c.option.hasGroup ? c.buildGroupview(b) : c.buildListview(b), c.ele.html(h), a(".scroll-right").on("tap", function(c) {
                     var d = this,
                        e = a(d).data("index"),
                        f = a(".scroll-right").length,
                        g = parseInt(a(c.target).data('index')),
                        h = $(c.target).siblings().length + 1;
                    b[e].hideOption.onClick && "function" == typeof b[e].hideOption.onClick && (a(".scroll-bar").css({
                        "-webkit-transition-duration" : "100ms",
                        marginLeft : 0
                    }), b[e].hideOption.onClick(c, g, h), c.stopPropagation())
                }), c
            })
        },
        itemClick : function(b) {
            var c = this,
                d = a(b.currentTarget);
            this.__events.click.length > 1 ? this.__events.click.pop()(d, d[0].lv_data, a(b.target)) : this.__events.click[0](d, d[0].lv_data, a(b.target))
        },
        longTapItem : function(b) {
            if (this.option.hasTouchEffect) {
                var c = a(b.currentTarget);
                c.removeClass(this.option.touchClass)
            }
        },
        "delete" : function(b) {
            b.currentTarget && a(b.currentTarget).parent("li").remove()
        }
    }, c.exports = function(a) {
        return new i(a)
    }
});
