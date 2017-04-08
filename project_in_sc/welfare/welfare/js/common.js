function getOs(){
	var OsObject = "";
	if( navigator.userAgent.indexOf("MSIE 6.0")>0) {
		OsObject = "ie6";
	}else if( navigator.userAgent.indexOf("MSIE 7.0")>0) {
		OsObject = "ie7";
	}else if( navigator.userAgent.indexOf("MSIE 8.0")>0) {
		OsObject = "ie8";
	}else if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
		OsObject = "Firefox";
	}else if(isChrome=navigator.userAgent.indexOf("Chrome")>0){
		OsObject = "Chrome";
	}
	else if(isSafari=navigator.userAgent.indexOf("Safari")>0) {
		OsObject = "Safari";
	}else if(isCamino=navigator.userAgent.indexOf("Camino")>0){
		OsObject = "Camino";
	}else if(isMozilla=navigator.userAgent.indexOf("Gecko/")>0){
		OsObject = "Gecko";
	}
	return OsObject;
}
 
function isThisOs(os){
	var thisOs = getOs();
	var hasThisOs = os.indexOf(thisOs);
	return hasThisOs != -1;
}

//导航
var T = 165,
	navVar = false;
	//ie6 = isThisOs('ie6');
$(window).scroll(function() {
	var a = $(window).scrollTop();
	//$(window).scrollTop() > 400 ? goTop.style.display = "block" : goTop.style.display = "none";预留置顶
	//if (!ie6) {
		if (a > T) {
			if (navVar) {
				return
			} else {
				$("#shortcut-2015").css({'position':'fixed'});
				navVar = true
			}
		} else {
			if (!navVar) {
				return
			} else {
				$("#shortcut-2015").css({'position':'static'});
				navVar = false
			}
		}
	//}
});

//显示隐藏层
void 0 === $.ui && ($.ui = {}),
function(a, b) {
	function c(a) {
		return "[object Object]" === Object.prototype.toString.call(a)
	}

	function d(a) {
		try {
			a = "true" === a ? !0 : "false" === a ? !1 : "null" === a ? null : +a + "" === a ? +a : /(?:\{[\s\S]*\}|\[[\s\S]*\])$/.test(a) ? JSON.parse(a) : a
		} catch (c) {
			a = b
		}
		return a
	}

	function e(a) {
		for (var c, e, f = {}, g = a && a.attributes, h = g && g.length; h--;) e = g[h], c = e.name, "data-" === c.substring(0, 5) && (c = c.substring(5), e = d(e.value), e === b || (f[c] = e));
		return f
	}

	function f() {
		for (var b, d = [].slice.call(arguments), e = d.length; e--;) b = b || d[e], c(d[e]) || d.splice(e, 1);
		return d.length ? a.extend.apply(null, [!0, {}].concat(d)) : b
	}

	function g(b, c) {
		function d(c, g) {
			var h = this;
			h.el = a(c);
			var i = h.options = f(d.options, e(c), g);
			return h.name = b.toLowerCase(), a.ui.guid++, h.guid = a.ui.guid, h.init(i), /debug/.test(location.search) && console.log(h), h
		}
		for (var g = ["options"], h = 0; g.length > h; h++) {
			var i = g[h];
			c[i] && (d[i] = c[i]), delete c[i]
		}
		for (var h in c) d.prototype[h] = c[h];
		return d
	}
	a.ui.guid = 0, a.ui.fn = function(b) {
		var b = b.toLowerCase();
		a.fn[b] = function(c) {
			var d;
			return a.each(this, function(e, f) {
				d = new a.ui[b](f, c)
			}), d
		}
	}, a.ui.define = function(b, c) {
		a.ui[b] = g(b, c), a.ui.fn(b)
	}
}(jQuery),
function(a) {
    a.fn.Jdropdown = function(b, c) {
        if (this.length) {
            "function" == typeof b && (c = b, b = {});
            var d = a.extend({
                event: "mouseover",
                current: "hover",
                delay: 0
            }, b || {});
            var e = "mouseover" == d.event ? "mouseout" : "mouseleave";
            a.each(this, function() {
                var b = null,
                    f = null,
                    g = !1;
                a(this).bind(d.event, function() {
                    if (g) clearTimeout(f);
                    else {
                        var e = a(this);
                        b = setTimeout(function() {
                            e.addClass(d.current), g = !0, c && c(e)
                        }, d.delay)
                    }
                }).bind(e, function() {
                    if (g) {
                        var c = a(this);
                        f = setTimeout(function() {
                            c.removeClass(d.current), g = !1
                        }, d.delay)
                    } else clearTimeout(b)
                })
            })
        }
    }
}(jQuery),! function(a) {
	a.ui.define("switchable", {
		options: {
			type: "tab",
			direction: "left",
			tabSetup: !1,
			navClass: "ui-switchable-trigger",
			navItem: "ui-switchable-item",
			navSelectedClass: "ui-switchable-selected",
			navIframe: "data-iframe",
			mainClass: "ui-switchable-panel",
			mainSelectedClass: "ui-switchable-selected",
			page: !1,
			autoLock: !1,
			prevClass: "ui-switchable-prev",
			nextClass: "ui-switchable-next",
			pageCancel: "ui-switchable-cancel",
			hasArrow: !1,
			arrowClass: "ui-switchable-arrow",
			event: "mouseover",
			speed: 400,
			callback: null,
			delay: 150,
			defaultPanel: 0,
			autoPlay: !1,
			stayTime: 5e3
		},
		init: function() {
			var a = this;
			a.nav = a.el.find("." + a.options.navItem), a.main = a.el.find("." + a.options.mainClass), a.size = a.main.size();
			var b = this.options.defaultPanel;
			this.last = b, this.current = b, this.isInit = !0, this.switchTo(b), a.autoInterval = null, a.eventTimer = null, a.page(), a.autoPlay(), this.bind()
		},
		bind: function() {
			var b = this;
			b.nav.each(function(c) {
				a(this).bind(b.options.event, function() {
					clearTimeout(b.eventTimer), clearInterval(b.autoInterval), b.eventTimer = setTimeout(function() {
						b.current = c, b.switchTo(c)
					}, b.options.delay)
				}).bind("mouseleave", function() {
					b.autoPlay(), clearTimeout(b.eventTimer)
				}), "click" == b.options.event && a(this).bind("mouseover", function() {
					clearTimeout(b.eventTimer), clearInterval(b.autoInterval)
				})
			})
		},
		switchTo: function(a) {
			var b = this.options;
			this.iframe(a), this.nav.removeClass(b.navSelectedClass), this.nav.eq(a).addClass(b.navSelectedClass), this.main.removeClass(b.mainSelectedClass), this.main.eq(a).addClass(b.mainSelectedClass), (this.isInit || this.last != a) && (this.switchType(a), null != b.callback && b.callback.call(this, a, this.nav.eq(a)), this.last = a)
		},
		switchType: function(a) {
			var b = this.options;
			switch (b.type) {
				case "tab":
					this.tab(a);
					break;
				case "focus":
					this.focus(a);
					break;
				case "slider":
					this.slider(a);
					break;
				case "carousel":
					this.carousel(a)
			}
		},
		switchDefault: function(a) {
			this.main.hide(), this.main.eq(a).show()
		},
		tab: function(a) {
			if (this.options.tabSetup || this.switchDefault(a), this.options.hasArrow) {
				var b = this.options.arrowClass,
					c = (this.nav.eq(a).outerWidth() + 20) * a;
				if (this.isInit) {
					var d = this.nav.parent();
					d.prepend('<div class="' + b + '"><b></b></div>').css({
						position: "relative"
					}), this.el.find("." + b).css({
						left: c
					})
				} else this.el.find("." + b).stop(!0).animate({
					left: c
				}, this.options.speed)
			}
			this.isInit = !1
		},
		focus: function(b) {
			this.isInit ? (this.main.parent().css({
				position: "relative"
			}), this.main.css({
				position: "absolute",
				zIndex: 0,
				opacity: 0
			}).show(), this.main.eq(b).css({
				zIndex: 1,
				opacity: 1
			})) : this.main.eq(this.last).css({
				zIndex: 0
			}).stop(!0).animate({
				opacity: 1
			}, this.options.speed, function() {
				a(this).css("opacity", 0)
			}), this.main.eq(b).css({
				zIndex: 1
			}).stop(!0).animate({
				opacity: 1
			}, this.options.speed), this.isInit = !1
		},
		slider: function(a) {
			var b = this.options,
				c = this.main.parent(),
				d = this.main.outerHeight() * a,
				e = this.main.outerWidth() * a;
			this.isInit ? ("left" == b.direction ? (this.main.css({
				"float": "left"
			}), c.css({
				width: this.el.outerWidth() * this.size
			}), c.css({
				left: -e
			})) : "top" == b.direction && c.css({
				top: -d
			}), this.switchDefault(a), this.isInit = !1) : ("left" == b.direction ? c.stop(!0).animate({
				left: -e
			}, this.options.speed) : "top" == b.direction && c.stop(!0).animate({
				top: -d
			}, this.options.speed), this.main.show())
		},
		carousel: function(a) {
			this.slider(a)
		},
		page: function() {
			var b = this;
			if (b.options.page) {
				var c = this.el.find("." + this.options.nextClass),
					d = this.el.find("." + this.options.prevClass),
					e = this.options.pageCancel;
				d.bind("click", function() {
					b.options.autoLock && (c.removeClass(e), 1 == b.current && a(this).addClass(e), 0 == b.current) || b.prev()
				}), c.bind("click", function() {
					b.options.autoLock && (d.removeClass(e), b.current == b.size - 2 && a(this).addClass(e), b.current == b.size - 1) || b.next()
				}), 0 == b.current && b.options.autoLock && d.addClass(e)
			}
		},
		next: function() {
			this.current = this.current + 1, this.current >= this.size && (this.current = 0), this.switchTo(this.current)
		},
		prev: function() {
			this.current = this.current - 1, this.current < 0 && (this.current = this.size - 1), this.switchTo(this.current)
		},
		autoPlay: function() {
			var a = this;
			this.options.autoPlay && (a.autoInterval = setInterval(function() {
				a.next()
			}, a.options.stayTime))
		},
		iframe: function(a) {
			var b = this,
				c = b.main.eq(a),
				d = b.nav.eq(a),
				e = d.attr(b.options.navIframe);
			if (e) {
				var f = document.createElement("iframe");
				f.src = e, c.html(f), d.removeAttr(b.options.navIframe)
			}
		}
	})
}(jQuery)


var ymarketCallback = {};
var ymarketUI = {};
ymarketUI.init = function() {	
	$('.dorpdown').Jdropdown(),this.yCategorys(),this.smSlider(),this.itemsHover(),this.itemHover(),this.floor3()
},ymarketUI.yCategorys = function () {
	var a = this;
	var b = $("#categorys-2015 .dd");
	var c = $("#categorys-2015 .dd-inner .item");
	var d = $("#categorys-2015 .dorpdown-layer");
	var e = $("#categorys-2015 .dorpdown-layer .item-sub");
	var h = $("#categorys-2015");
	
	
	b.bind("mouseenter", function() {
		d.css("display", "block")
	}).bind("mouseleave", function() {
		d.css("display", "none"), c.removeClass("hover"), e.css("display", "none")
	}), c.bind("mouseenter", function() {
		var f = $(this).index();
		var g = c.length - 1;
		$(this).addClass("hover").siblings(".item").removeClass("hover");
		e.eq(f).css("display", "block").siblings(".item-sub").css("display", "none");
	})
	
	if(b.is(":visible")) {
		return
	} else {
		h.bind("mouseenter", function() {
			b.css("display", "block");		
		}).bind("mouseleave", function() {
			b.css("display", "none");		
		})
		
	}
}, ymarketUI.smSlider = function() {
	var a = this;
	$("#smSlider .sm-s-wrap .item").each(function(a) {
		var b = $('<a class="ui-slider-trigger" href="javascript:void(0)"></a>');
		0 === a && b.addClass("curr"), $(".sm-s-trigger").append(b)
	}), $("#smSlider").switchable({
		type: "focus",
		navItem: "ui-slider-trigger",
		navSelectedClass: "curr",
		mainClass: "ui-slider-item",
		mainSelectedClass: "selected",
		delay: 300,
		speed: 500,
		autoPlay: !0,
		stayTime: 5000
	})
},ymarketUI.itemsHover = function() {
	var a = $('.items li');
	a.bind("mouseenter", function() {
		$(this).addClass('hover');		
	}).bind("mouseleave", function() {
		$(this).removeClass('hover');		
	})	
},ymarketUI.itemHover = function() {
	var a = $('.item li');
	a.bind("mouseenter", function() {
		$(this).addClass('hover');		
	}).bind("mouseleave", function() {
		$(this).removeClass('hover');		
	})	
},ymarketUI.floor3 = function() {
	$("#floor1").switchable({
		navSelectedClass: "selected",
		mainSelectedClass: "selected",
		tabSetup: !0
	}),
	$("#floor2").switchable({
		navSelectedClass: "selected",
		mainSelectedClass: "selected",
		tabSetup: !0
	})
},ymarketUI.init();


//下拉框
jQuery.fn.extend({
    fxSelect: function(opt) {
        return this.each(function() {
            var t = $(this),
                option = t.find("option"),
                isselect = true,
                width,
                _class,
                height;
            //_class = opt._class ? opt._class : "minh";
            //t.hide().after($('<div class="fx-select ' + _class + '"><div class="fx-select-val"></div><dl class="fx-select-list"></dd></dl></div>'));
            width = opt.width ? opt.width : 100;
            height = opt.height ? opt.height : 24;

            //模拟下拉框
            var l = t,
                show = l.find('.fx-select-val'),
                list = l.find('.fx-select-list');


            l.click(function(e) {
                    list.css('display') == 'none' ? list.show() : list.hide();
                })
                .mouseover(function() {
                    isselect = true;
                })
                .mouseout(function() {
                    isselect = false;
                });
			show.mouseover(function() {
				$(this).addClass('fx-select-hover');
			})
			.mouseout(function() {
				$(this).removeClass('fx-select-hover');
			});
            //列表处理
            list.find('dd')
                .mouseover(function() {
                    $(this).addClass('fx-select-list-hover');
                })
                .mouseout(function() {
                    $(this).removeClass('fx-select-list-hover');
                })
                .click(function() {
                    isselect = true;
                    show.text($(this).text());
                });
            $(document).click(function() {
                isselect == false && list.hide();
            })
        })
    }
});

$('#categorys .fx-select').fxSelect({
    width: '71',
    height: '32'
});

$('#yfBalance .fx-select').fxSelect({
    width: '166',
    height: '20'
});


//购买加一减一
function changeCount(obj, count){
	var _this = $(obj);
	var input = _this.siblings('.goodsCount');
	if(input.val()==''){
		input.val(1);
	}else{
		var goodsCount = parseInt(input.val()) + count;
		if(goodsCount > 0){
			input.val(goodsCount);
		}
	}
}

$(".decCount").each(function(index, element) {
    	$(this).click(function(){
	 		changeCount(this, -1);
	 	});	
	});
	$(".addCount").each(function(index, element) {
    	$(this).click(function(){
	 		changeCount(this, 1);
	 	});	
	});

