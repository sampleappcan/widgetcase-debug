var isPhone = (window.navigator.platform != "Win32"),
    touch = isPhone ? "touchstart" : "mousedown";

var global = {
    //host : 'http://b2b.yyjzt.com/',
    //apploadpath : 'https://mob.jzterp.com/b2b/',
    host : 'http://test.yyjzt.com/',
    apploadpath : 'https://mob.jzterp.com/test/b2b/',
    //host : 'http://10.0.28.72:8083/',
};

/*
 *应用访问后台服务
 */
var urls = {
    // 获取分公司
    BRUNCH_LIST : "mobile/basic/mobileGetBranch.json",
    // 登陆
    LOGIN : "mobile/user/mobileLogin.json",
    // 获取购物车
    CART_GET : "mobile/member/cart/mobile_cart.json",
    //获取历史采购
    HISTORY_PURCHAGE_GET : "mobile/member/purchase/history/mobile_history_purchase.json",
    // 搜索药品
    SEARCH : "mobile/search/mobilePhone.json",
    // 添加到购物车
    CART_ADD : "mobile/cartCommon/checkNewCartMobile.json",
    // 全部订单
    OrderInfo_GET : "mobile/member/mobileIndex.json",
    // 获得主页的信息
    HOME_INFO_GET : "mobile/index.json",
    //药品详情
    SHOW_PRODUCT_DETAIL : "mobile/search/mobile_detail.json",
    // 药品分类树
    CATEGORY_TREE : "mobile/category/categoryVoForFile.json",
    // 删除购物车
    CART_DELETE : "mobile/member/cart/mobileDelete.json",
    // 去下单
    ORDER_SURE : "mobile/member/cart/MobileNextCart.json",
    // 生成订单
    ORDER_PRODUCE : "mobile/member/cart/mobileLastCart.json",
    // 模板采购列表
    TEMPLATELIST : "mobile/member/purchase/mobile_template_index.json",
    // 通过ID获取模板的明细
    TEMPLATEDETAIL : "mobile/member/purchase/template_merchandise.json",
    // 通过订单号获得订单明细信息
    ORDER_DETAIL : "mobile/member/order/mobileOrderDetail.json",
    // 确认收货
    SUER_ORDER_DETAIL : "mobile/member/order/mobileSubmitGoods.json",
    // 通过OrderCode获取订单明细
    ORDER_DETAIL_GET : "mobile/member/order/mobileOrderDetail.json",
    // 新的 全部订单获取
    ORDER_DETAIL_NEW_GET : "mobile/member/order/mobileIndex.json",
    // 用户基本信息获取
    USER_INFO_GET : "mobile/member/mobileIndex.json",
    // 用户退出
    USER_LOGIN_OUT : "mobile/user/mobileLogout.json",
    //刷新获取总代理数据
    REFRESH_COLUMNDETAIL : "mobile/info/columnInfo/mobileColumnDetailByKey.json",
    // 热销药品
    HOT_SALE : "mobile/search/hotsaleMerchandise.json",
    // 最新促销
    NEW_CX : "mobile/sale/activity/mobileIndex.json",
    // 我的收藏
    MY_COLLECT : "mobile/purchase/mobileAttention.json",
    // 我的账户
    MY_ACCOUNT : "mobile/user/mobileLicenseEdit2.json",
    // 添加收藏
    ADD_TO_COLLECT : "mobile/purchase/add_attention.json",
    // 消息中心(获得所有的消息)
    MESSAGE_INFO : "mobile/purchase/mobileDbasketItem.json?daohuo=1",
    // 消息中心 (设置已经读了的消息)
    MESSAGE_INFO_SET : "mobile/purchase/mobileDbasketItemToRead.json",
    // 更新APK   apk服务器地址
    UPDATE_APP : 'mobile/update/mobileUpdateApp.json',
    //是否可以退货验证
    IS_RETURNED_PURCHASE : "mobile/cartCommon/getInfoByID.json",
    //验证限购
    IS_QUOTA : "mobile/cartCommon/checkLimitByMerchandise.json",
    IS_QUOTA_CART : "mobile/cartCommon/checkLimit.json",
    //推送消息
    APP_PUSH_MESSAGE : "/mobile/message/push/get.json",
    //取消收藏
    REMOVE_FROM_COLLECT : "mobile/purchase/deleteAttention.json",
    //订货会参与的厂家信息
    ORDER_MEETING_MANU : "mobile/sale/fairs/index.json",
    //订货会品种
    ORDER_MEETING : "mobile/sale/fairs/merchandiseList.json",
    //活动专区
    ActivityCenter : "mobile/sale/activity/getActivityContent.json",
    //线上专区
    OLNY_ONLINE : 'mobile/sale/activity/getActivityMerchandiseList.json?activityType=1',
    //限时抢购
    FLASH_SELL : 'mobile/sale/activity/getActivityMerchandiseList.json?activityType=5',
    //会员专销
    MEMBER_SELL : 'mobile/sale/activity/getActivityMerchandiseList.json?activityType=4',
    //江苏外部业务员
    //业务员负责客户
    OUTSIDECUST : 'mobile/salesMan/switchAccount.json',
    //业务员负责商品
    OUTSIDEPROD : 'mobile/salesMan/searchMerchandise.json',
    //查询业务员所属客户的购物车主信息
    OUTSIDE_CARTMAIN : 'mobile/salesMan/cartMainIfo.json',
    //删除业务员下面某个客户的购物车数据
    OUTSIDE_CARTMAIN_DELETE : 'mobile/salesMan/cartMainDelete.json',
    ///删除某个客户的购物车里面某个商品
    OUTSIDE_CARTDETAIL_DELETE : 'mobile/salesMan/cartDetailDelete.json',
    //获取订单条目汇总信息
    OUTSIDE_ORDER_TOTLE : 'mobile/Order/getOrderStateInfoNum.json',
    //问题反馈查询
    OUTSIDE_FEEDBACK_QUERY : 'mobile/info/typeInfo/getMatterInfoRecord.json',
    //问题反馈类型
    OUTSIDE_FEEDBACK_TYPE : 'mobile/info/typeInfo/getTypeInfo.json',
    //问题反馈提交
    OUTSIDE_FEEDBACK_SUBMIT : 'mobile/info/typeInfo/setMatterInfo.json',
    //回复问题反馈
    OUTSIDE_FEEDBACK_REPLY : 'mobile/info/typeInfo/setMatterRecord.json',
    //查询某领导下属业务员
    OUTSIDE_SEARCH_SALESMAN : 'mobile/salesMan/searchSalesManList.json',
    //订单查询
    ORDER_INFO : 'mobile/Order/getOrderInfo.json',
    //订单明细
    ORDER_DETAIL : 'mobile/Order/getOrderInfoDetail.json',
    //外部业务员个人详情
    ORDER_SELF_INFO : 'mobile/salesMan/myPersonalInfo.json',
    // 业务员销售查询接口
    ORDER_SALEMAN_SELECT : 'mobile/salesMan/searchSalesManBusiness.json',

    //外部APP查询全国地区信息，省、市、区
    OURSIDE_PROVINCE : 'mobile/salesMan/searchProvinces.json',
    OURSIDE_CITY : 'mobile/salesMan/searchCities.json',
    OURSIDE_CANTON : 'mobile/salesMan/searchCantons.json',
    // 手机端注册，获取所选公司的区域列表         参数: level=4(区域最小等级,目前写死为4);branchId=J54(所选的分公司)
    CUST_AREA : 'mobile/basic/getCustArea.json',
    // 分公司的客户类型         参数：branchId=J54(所选的分公司)
    CUST_TYPE : 'mobile/basic/getCustType.json',
    //用户注册
    /*
     参数：
     branchId    分公司
     loginName   用户名
     loginPass   密码
     custName    客户名称
     areaId      区域ID 320102
     custTypeId  客户类型ID 341
     address     地址
     man         姓名
     manMobile   手机号*/
    USER_REGISTER : 'mobile/user/userRegister.json',
}

/**
 * 加载框 显示与关闭
 */
var loading = {
    show : function(mes, t) {
        if (isPhone) {
            uexLoadingView.openCircleLoading();
        } else {
            uexWindow.toast( t ? '0' : '1', '5', mes, t ? t : 0);
        }
    },
    hide : function() {
        if (isPhone) {
            uexLoadingView.close();
        } else {
            uexWindow.closeToast();
        }
    }
}

var toast = {
    show : function(mes, t) {
        uexWindow.toast( t ? '0' : '1', '5', mes, t ? t : 0);
    },
    hide : function() {
        uexWindow.closeToast();
    }
}

/**
 * 弹出框
 * @param String msg 弹出信息
 * @param option    参数
 * {
 *     callback：回调函数
 *     btsArray：按钮组
 *     title：弹出框标题
 * }
 */
var alert = function(msg, option) {
    var title = '提示';
    if (option && option.title) {
        title = option.title;
    }
    if (option && (option.callback || option.btsArray)) {
        uexWindow.cbConfirm = function(opId, dataType, data) {
            log('uexWindow.cbConfirm:' + data);
            option.callback(opId, dataType, data);
        };
        uexWindow.confirm(title, msg, option.btsArray || ['确定']);
    } else
        uexWindow.alert(title, msg, '确定');
};

/**
 * 弹出消息提示框
 * @param String msg 提示信息
 * @param String t 显示时间
 *
 */
var fontSize = parseInt(document.defaultView.getComputedStyle(document.getElementsByTagName('body')[0], null).fontSize);
var toast = {
    show : function(msg, t, position) {
        var top;
        if (position == 1) {
            top = 1.5 * fontSize;
        } else {
            top = $('body').height() + document.body.scrollTop - 4 * fontSize;
        }
        $("body").append("<div id='divToast' class='ub ub-pc div-toast tx-c' style='width:" + $('body').width() + "px;position: absolute;top:" + top + "px;z-index:1000;'><div class=' bc-text-head p-toast uinn bc-toast tx-c'>" + msg + "</div></div>");
        setTimeout("toast.hide()", t);
    },
    hide : function() {
        var box = $("#divToast")[0];
        $("#divToast").remove();
    }
}

//日志输出
var log = function(msg) {
    console.log(msg);

    if ( typeof msg != 'String') {
        msg = JSON.stringify(msg);
    }

    /*var href = window.location.href,
     path = isPhone ? href.substring(href.indexOf('widget/') + 7) : href.substring(href.indexOf('phone/') + 6);
     msg += '-------------------信息来自:' + path;*/

    uexLog.sendLog(msg);

}
/**
 * 使用ajax jsonp访问服务器
 * @param {string} path         访问服务相对路径
 * @param {Object} data         参数
 * @param {Object} callBackFn   访问成功且无异常时的回调函数，函数参数返回数据的data属性
 * @param {Object} setting      相关参数
 {
 runinBackground:'是否后台运行，默认值    false',
 msg:'加载框显示信息，默认值   数据加载中…',
 errorFn:'服务访问失败后回调函数'
 }
 */
var AjaxFn = function(path, data, successFn, setting) {
    if (!setting) {
        setting = {};
    }
    $.ajax({
        timeout : (1000 * 60),
        url : global.host + path,
        data : data,
        type : 'GET',
        dataType : 'json',
        /*dataType : 'jsonp',
         jsonp : 'callback',*/
        beforeSend : function() {
            if (!setting.runinBackground) {
                loading.show(setting.msg || '数据加载中…');
            }
            log('-----------------------------------------------------------');
            log('AJAX请求:' + global.host + path);
            log(data || '');
            this.sendTime = new Date();
        },
        complete : function(xhr, status) {
            loading.hide();

            log('AJAX请求:' + global.host + path);
            log('耗时:' + (this.reciveTime.getTime() - this.sendTime.getTime()) / 1000 + '秒！！！');
            log('-----------------------------------------------------------');

            if ( typeof setting.completeFn == 'function') {
                setting.completeFn();
            }
        },
        success : function(result) {
            this.reciveTime = new Date();
            log('AJAX服务访问成功!!!');
            log(result);
            if ( typeof result.success !== 'undefined') {
                if (result.success) {
                    if ( typeof successFn == 'function') {
                        successFn(result);
                    }
                } else {
                    if ( typeof setting.successException == 'function') {
                        setting.successException(result);
                    } else {
                        alert(result.msgInfo || result.msg);
                    }
                }
            } else {
                if ( typeof successFn == 'function') {
                    successFn(result);
                }
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            this.reciveTime = new Date();
            log('AJAX访问失败！！！' + textStatus + ':' + errorThrown);

            if ( typeof setting.errorFn == 'function') {
                setting.errorFn(2, XMLHttpRequest, textStatus, errorThrown);
            } else {
                if (textStatus == 'timeout') {
                    alert('连接超时');
                } else {
                    alert(textStatus + ':' + errorThrown);
                }
            }
        }
    });
}
/*初始化控件*/
var Init = {
    /*下拉列表
     * con：待初始化的下拉列表控件的jquery对象
     * */
    select : function(select, data, val, text) {
        if (!select[0]) {
            log('初始化下拉列表,控件不是jquery对象');
        }
        select.empty();
        var select_option = $('<option value="">请选择</option>');
        select.append(select_option);

        $.each(data, function(index, item) {
            select_option = $('<option value="' + item[val] + '" data_index="' + (index + 1) + '" >' + item[text] + '</option>');
            select_option.attr('data', JSON.stringify(item));
            select.append(select_option);
        });
        select[0].selectedIndex = 0;
        select.trigger('change');
    },
    date : function(datePickerId, option) {
        var params = {
            datePickerId : datePickerId
        };
        if (!option) {
            option = {};
        }

        var date = option.initDate;
        if (date && typeof date == 'object' && date.year && date.month && date.day) {
            params.initDate = date;
        } else {
            var now = new Date();
            params.initDate = {
                year : now.getFullYear(),
                month : now.getMonth() + 1,
                day : now.getDate()
            };
        }

        date = option.minDate;
        if (date) {
            if ( typeof date == 'object' && date.year && date.month && date.day) {
                params.minDate = {
                    limitType : 0,
                    data : date
                };
            } else if ( typeof date == 'int') {
                params.minDate = {
                    limitType : 1,
                    data : {
                        day : date
                    }
                };
            }
        }

        date = option.maxDate;
        if (date) {
            if ( typeof date == 'object' && date.year && date.month && date.day) {
                params.maxDate = {
                    limitType : 0,
                    data : date
                };
            } else if ( typeof date == 'int') {
                params.maxDate = {
                    limitType : 1,
                    data : {
                        day : date
                    }
                };
            }
        }

        var datePicker = $('#' + datePickerId);
        datePicker.attr('readonly', 'readonly');

        if (option.initDate) {
            dateConSetVal(datePicker, params.initDate);
        }

        datePicker.bind('tap', params, function() {
            /*uexControl.cbOpenDatePickerWithConfig = function(data) {
             log(JSON.stringify(data));
             var date = new Date(data.year + '-' + data.month + '-' + data.day);

             $('#' + data.datePickerId).data(date.Format('yyyy-mm-dd')).val(date.Format('yyyy年mm月dd日'));
             };

             uexControl.openDatePickerWithConfig(params);*/

            uexControl.cbOpenDatePicker = function(opId, dataType, data) {

                log(data);
                data = eval('(' + data + ')');
                dateConSetVal(datePicker, data);
            }
            var data = datePicker.attr('data');
            log('date con data' + data);
            if (data) {
                var date = new Date(data);
                data = {
                    year : date.getFullYear(),
                    month : date.getMonth() + 1,
                    day : date.getDate()
                };
            } else {
                data = params.initDate;
            }

            log('open datePicker' + JSON.stringify(data));
            var year = data.year.toString(),
                month = data.month.toString(),
                day = data.day.toString();

            uexControl.openDatePicker(year, month, day);
            //uexControl.openDatePicker('2016', '7', '1');
        })
    }
}

var dateConSetVal = function(con, data) {
    //IOS系统不识别
    if (parseInt(data.month) < 10) {
        data.month = '0' + parseInt(data.month);
    }
    if (parseInt(data.day) < 10) {
        data.day = '0' + parseInt(data.day);
    }

    log('date:' + data.year + '-' + data.month + '-' + data.day);

    var date = new Date(data.year + '-' + data.month + '-' + data.day);

    var str1 = date.Format('yyyy-MM-dd');
    con.attr('data', str1);
    con.val(str1);

    /*var year = data.year;
     var month = data.month.toString().length == 1 ? '0' + data.month : data.month;
     var date = data.day.toString().length == 1 ? '0' + data.day : data.day;

     var str2 = year + '-' + month + '-' + date;
     var str = '';
     if (str1.length == 10) {
     str = str1;
     } else {
     str = str2;
     }
     log('dateConSetVal function finish' + str);
     con.attr('data', str);
     con.val(str);*/
}
/**
 * 时间格式化
 * @param {Object} format  eg:"yyyy年MM月dd日"
 * "MM/dd/yyyy"
 * "yyyyMMdd"
 * "yyyy-MM-dd hh:mm:ss"
 * "YYYY年MM月dd日hh小时mm分ss秒"
 */
Date.prototype.Format = function(format) {
    var o = {
        "M+" : this.getMonth() + 1, //month
        "d+" : this.getDate(), //day
        "h+" : this.getHours(), //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth() + 3) / 3), //quarter
        "S" : this.getMilliseconds() //millisecond
    }

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }

    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
};

Date.prototype.AddDay = function(days, format) {
    var date = new Date(this.getTime() + (days || 0) * 24 * 60 * 60 * 1000);
    if (format) {
        return date.Format(format);
    } else {
        return date;
    }
};

Date.prototype.AddMonth = function(num, format) {
    var tempDate = this.getDate();
    this.setMonth(this.getMonth() + num);
    if (tempDate != this.getDate())
        this.setDate(0);

    if (format) {
        return this.Format(format);
    } else {
        return this;
    }
};

String.prototype.Trim = function(is_global) {
    var result;
    result = this.replace(/(^\s+)|(\s+$)/g, "");
    if (is_global.toLowerCase() == "g") {
        result = result.replace(/\s/g, "");
    }
    return result;
};

var HTML_DECODE = {
    "&lt;" : "<",
    "&gt;" : ">",
    "&amp;" : "&",
    "&nbsp;" : " ",
    "&quot;" : "\"",
    "©" : ""

    // Add more
};
var REGX_HTML_DECODE = /&\w+;|&#(\d+);/g;
String.prototype.decodeHtml = function() {
    return this.replace(REGX_HTML_DECODE, function($0, $1) {
        var c = HTML_DECODE[$0];
        // 尝试查表
        if (c === undefined) {
            // Maybe is Entity Number
            if (!isNaN($1)) {
                c = String.fromCharCode(($1 == 160) ? 32 : $1);
            } else {
                // Not Entity Number
                c = $0;
            }
        }
        return c;
    });
};

String.prototype.format = function() {
    var args = arguments;
    return this.replace(/\{(\d+)\}/g, function(m, i) {
        return args[i];
    });
}
var Clone = function(obj) {
    return JSON.parse(JSON.stringify(obj));
};
/*
 控件值 获取及设置
 * 控件属性name
 * */
var form = {
    get : function(form) {
        var data = {},
            tag;
        $.each(form.find('[name]'), function(index, con) {
            tag = con.tagName.toUpperCase();
            con = $(con);
            var val = con.attr('data');
            if (!val) {
                val = con.val();
            }
            if (tag == 'SELECT' && val.indexOf('请选择') != -1) {
                val = '';
            }
            data[con.attr('name')] = val;
        });

        return data;
    },
    set : function(form, data) {
        $.each(form.find('[name]'), function(index, con) {
            con = $(con);
            if (con.attr('selfcon') == 'date') {
                //IOS的日期必须是yyyy-MM-dd
                var orlval = data[con.attr('name')];
                var date = new Date(orlval);

                log('日期控件赋值:原始值(' + data[con.attr('name')] + ');处理值(' + orlval + ');转化值(' + date.Format('yyyy-MM-dd') + ').')
                var val = {
                    year : date.getFullYear(),
                    month : date.getMonth() + 1,
                    day : date.getDate()
                };
                dateConSetVal(con, val);
            } else {
                var val = data[con.attr('name')] || '';
                /*if (con[0].tagName === 'SELECT') {
                 if(val){
                 con[0].selectedIndex=0;
                 }else{
                 $.each(con.find('option'),function(index,item){
                 if(item.attr('value')==val){
                 con[0].selectedIndex(index);
                 return false;
                 }
                 });
                 }
                 }
                 else{
                 con.val(val);
                 } */
                con.val(val);
                con.change();
            }
            //触发onchange事件
        });
    }
}

/*
 * 获取当前文件相对路径
 */
var GetLevelUrl = function() {

    return '';

}
/*
 * 动态加载 CSS、JS 文件
 * @param {Object} path
 * @exception {TypeName}
 */
var dynamicLoading = {
    css : function(path) {
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.href = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    },
    js : function(path) {
        if (!path || path.length === 0) {
            throw new Error('argument "path" is required !');
        }
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = path;
        script.type = 'text/javascript';
        head.appendChild(script);
    }
};

/*
 $(function() {
 //动态加载css和js文件
 var levelURL=GetLevelUrl();

 dynamicLoading.css(levelURL+'css/fonts/font-awesome.min.css');
 dynamicLoading.css(levelURL+'css/ui-box.css');
 dynamicLoading.css(levelURL+'css/ui-base.css');
 dynamicLoading.css(levelURL+'css/ui-color.css');
 dynamicLoading.css(levelURL+'css/appcan.icon.css');
 dynamicLoading.css(levelURL+'css/appcan.control.css');

 dynamicLoading.js(levelURL+'js/appcan.js');
 dynamicLoading.js(levelURL+'js/appcan.control.js');
 });
 */
/*open新页面

 * @param option    参数
 * {
 *     data:新窗口填充的数据,默认值0
 *     dataType：新窗口填充的数据类型,默认值0
 * }
 * */
var open = function(param) {
    if (!param || !param.name) {
        alert('新窗口的的名称不存在!!!');
        return;
    }
    param = $.extend({}, {
        dataType : 0,
        aniId : 2
    }, param);
    appcan.window.open(param);
}
/**
 *本地存储
 */
var LocStorage = {
    /*
     * 要设置的键值对
     * key:要保存的键，key如果是数组，就会把数组中每个键值对都保存起来，如果是对象则会把对象里面每个  键值对都保存起来
     * val:要保存对应的值
     */
    set : function(key, Val) {
        appcan.locStorage.setVal(key, Val);
    },
    /**
     *获取key保存在localStorage中对应的值
     *key:要获取值的键值
     */
    get : function(key) {
        return appcan.locStorage.getVal(key);
    },
    /*清除localStorage中对应的值
     *key:要清除值的健名，如果为空会清空整个存储
     */
    remove : function(key) {
        appcan.locStorage.remove(key);
    },
    clean : function(works) {
        var keepworks = [];
        if ( typeof (works) == 'string') {
            keepworks.push(works);
        } else if ($.isArray(works)) {
            keepworks = works;
        }

        var keywords = ['platform', 'widgetInfo', 'deviceInfo', 'branchData', 'login', 'openLocation'].concat(keepworks);
        $.each(appcan.locStorage.keys(), function(index, item) {
            if (keywords.indexOf(item) == -1) {
                LocStorage.remove(item);
            }
        });
    }
}

/**
 *获取URL的参数值信息
 * @param {Object} name
 */
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
        return unescape(r[2]);
    return null;

    /*uexWindow.cbGetUrlQuery = function(opId, dataType, data) {
     if (data) {
     log(data);
     var type = data.split('=')[1];
     InitPage(type);
     }
     }

     uexWindow.getUrlQuery('name');*/
}

var bounce = {
    /**
     *页面弹出初始化
     * @param {Object} bounceType弹动的类型,如果为多个请用数组;0: 是向下拖动; 1: 是向上拖动
     * @param {Object} callback  弹动回调函数
     */
    init : function(bounceType, callback) {
        appcan.frame.setBounce(bounceType, function(type) {
            log('开始拖动');
        }, function(type) {
            log('超过临界点,产生事件了！');
        }, function(type) {
            log('松手了,产生事件了,开始更新数据！');
            setTimeout(function() {
                if ( typeof callback == 'function') {
                    callback();
                }
            }, 1000);
        }, '#fff', {
            "loadingText" : "加载中，请稍等"
        });
    },
    reset : function(bounceType) {
        appcan.frame.resetBounce(bounceType);
        log('bounce reset');
    },
    remove : function() {
        uexWindow.setBounce('0');
        log('bounce remove');
    }
}

/*
 阻止事件冒泡
 */
var eventStop = function(e) {
    //如果提供了事件对象，则这是一个非IE浏览器
    if (e && e.stopPropagation) {
        e.stopPropagation();
        //因此它支持W3C的stopPropagation()方法
    } else {
        //否则，我们需要使用IE的方式来取消事件冒泡
        window.event.cancelBubble = true;
    }
}
/*
 *
 * 调用closeDowned函数就可以把存在closeDown函数的页面关闭
 */
var closeDowning = function() {
    uexWindow.publishChannelNotification("1", "关闭窗口");
}

appcan.ready(function() {
    uexWindow.onNotification = function(ret) {
        if (ret == '关闭窗口' && ( typeof (rootpage) == 'undefined' || ( typeof (rootpage) != 'undefined' && !rootpage))) {
            appcan.window.close(-1);
        }
    };
    uexWindow.subscribeChannelNotification("1", "onNotification");

    uexWidgetOne.cbError = function(opId, errorCode, errorInfo) {
        //errorCode:(Number类型) 必选  错误代码详见ErrorCode
        //errorInfo:(String类型) 必选  错误信息

        log('uexWidgetOne Error:(' + errorCode + ')' + errorInfo);
        alert('出现异常:' + errorInfo);
    };
});

/**
 * 计算两日期时间差
 * @param   interval 计算类型：D是按照天、H是按照小时、M是按照分钟、S是按照秒、T是按照毫秒
 * @param  date1 起始日期  格式为年月格式 为2012-06-20
 * @param  date2 结束日期
 * @return
 */
function countTimeLength(interval, date1, date2) {
    var objInterval = {
        'D' : 1000 * 60 * 60 * 24,
        'H' : 1000 * 60 * 60,
        'M' : 1000 * 60,
        'S' : 1000,
        'T' : 1
    };
    interval = interval.toUpperCase();
    var dt1 = Date.parse(date1.replace(/-/g, "/"));
    var dt2 = Date.parse(date2.replace(/-/g, "/"));
    try {
        return ((dt2 - dt1) / objInterval[interval]).toFixed(2);
        //保留两位小数点
    } catch (e) {
        return e.message;
    }
}

var toggleLoading = function(loadingclick) {
    var div = $("#loading");
    if (div.length == 0) {
        div = $("<div id=\"loading\" class=\"up\" style=\"z-Index:1000;\"></div>");
        if ( typeof loadingclick == 'function') {
            div.bind( isPhone ? "touchstart" : "mousedown", function(e) {
                loadingclick(e);
            });
        }
        $("body").append(div);
    } else {
        div.remove();
    }
}
var getUrlParam = function(callbackFn) {
    var parseUrlParam = function(data) {
        var urlparam = {};
        if (data) {
            var provals = data.split('&');
            $.each(provals, function(index, item) {
                var proval = item.split('=');
                urlparam[proval[0]] = decodeURI(proval[1]);
            });
        }
        if ( typeof callbackFn == 'function') {
            callbackFn(data, urlparam);
        }
    }
    if (isPhone) {
        uexWindow.cbGetUrlQuery = function(opId, dataType, data) {
            log('获取url参数:' + data);
            parseUrlParam(data);
        };

        uexWindow.getUrlQuery();
    } else {
        parseUrlParam(location.search.substr(1, location.search.length));
    }
}
//获取url参数，返回参数对象
function zy_parse() {
    var params = {};
    var loc = String(document.location);
    if (loc.indexOf("?") > 0)
        loc = loc.substr(loc.indexOf('?') + 1);
    else
        loc = uexWindow.getUrlQuery();
    if (!loc) {
        return null;
    }

    var pieces = loc.split('&');
    params.keys = [];
    for (var i = 0; i < pieces.length; i += 1) {
        var keyVal = pieces[i].split('=');
        params[keyVal[0]] = decodeURIComponent(keyVal[1]);
        params.keys.push(keyVal[0]);
    }
    return params;
}

//商品图片缺失时显示静态图片
var imgerror = function(obj) {
    if (global.host == "http://test.yyjzt.com/" || global.host == "http://10.3.5.41:7203/") {
        obj.src = "http://static-test.yyjzt.com/static/images/nophoto.png";
        //测试环境
        obj.onerror = null;
    }
    if (global.host == "http://b2b.yyjzt.com/") {
        obj.src = "http://static.yyjzt.com/static/images/nophoto.png";
        //正式环境
        obj.onerror = null;
    }
}

