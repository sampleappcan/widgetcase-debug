var locationCallbackFn,
    getLocatoinCount = 0,
    isSetTimeout=false;
var startLocatoin = function(callbackfn, runingbackground) {
    log('获取位置信息');
    locationCallbackFn = callbackfn;
    getLocatoinCount = 0;
    isSetTimeout=false;
    if (isPhone) {
        //手机模式
        uexLocation.onChange = getlocation;
        if (!runingbackground) {
            loading.show('初始化…');
        }
        
        uexLocation.openLocation();
        setTimeout(function(){
            isSetTimeout=true;
            if(getLocatoinCount==0){
                loading.hide();
                alert('未获取到位置权限，请先检查应用位置权限或网络。');
            }
        },5000);
        /*var platform = LocStorage.get('platform');
         log(LocStorage.get('openLocation') + '        ' + platform)
         //ios 第一次启动直接定位  提示访问位置
         if (!LocStorage.get('openLocation') || platform == 1) {
         log('直接启动定位' + LocStorage.get('openLocation'));
         uexLocation.openLocation();
         LocStorage.set('openLocation', 'true');
         } else {
         checkLocation();
         }*/

    } else {
        //电脑模式
        getlocation(30.554454, 114.202184);
    }
}
function checkLocation() {
    var params = JSON.stringify({
        setting : "GPS"//位置服务功能
    });

    uexDevice.cbIsFunctionEnable = function(data) {
        log('判断某功能是否开启:' + data);
        data = JSON.parse(data);
        if (data.setting == 'GPS' && data.isEnable == true) {
            log('定位功能已开启，启动定位');
            uexLocation.openLocation();
        } else {
            loading.hide();
            //alert('应用未获取到位置权限，请先设置应用权限。');
            alert('应用未获取到位置权限，请先设置权限。打开系统设置。', {
                callback : function() {
                    uexDevice.cbOpenSetting = function(data) {
                        log('打开设置界面:' + data);
                        //data = JSON.parse(data);

                        appcan.window.evaluateScript({
                            name : '',
                            scriptContent : 'appcan.window.close(-1);'
                        });
                        appcan.window.close(-1);

                    };
                    //打开设置界面
                    uexDevice.openSetting(params);
                }
            });
        }
    }
    log('判断某功能是否开启' + params);
    uexDevice.isFunctionEnable(params);
}

function getlocation(lat, lng) {
    //获取定位之后关闭
    uexLocation.closeLocation();

    loading.hide();
    log('location Callback' + lat + lng);

    if (lat == 0) {
        alert('应用未获取到位置权限，请先设置应用权限。');
        return;
    }
    if (getLocatoinCount == 0&&!isSetTimeout) {
        getLocatoinCount++;
        if ( typeof locationCallbackFn == 'function') {
            locationCallbackFn(lat, lng);
        }
    }
}

function getDistance(pointA, pointB, toFixed) {
    if (!pointA || !pointB)
        return 0;

    if (!pointA.lng || !pointA.lat || !pointB.lng || !pointB.lat)
        return null;

    var fD = function(a, b, c) {
        for (; a > c; )
            a -= c - b;
        for (; a < b; )
            a += c - b;
        return a;
    };
    var jD = function(a, b, c) {
        b != null && ( a = Math.max(a, b));
        c != null && ( a = Math.min(a, c));
        return a;
    };
    var yk = function(a) {
        return Math.PI * a / 180
    };

    pointA.lng = fD(pointA.lng, -180, 180);
    pointA.lat = jD(pointA.lat, -74, 74);
    pointB.lng = fD(pointB.lng, -180, 180);
    pointB.lat = jD(pointB.lat, -74, 74);

    var dO = 6370996.81,
        a = yk(pointA.lng),
        b = yk(pointB.lng),
        c = yk(pointA.lat),
        d = yk(pointB.lat);

    var distance = dO * Math.acos(Math.sin(c) * Math.sin(d) + Math.cos(c) * Math.cos(d) * Math.cos(b - a));

    if (toFixed) {
        return parseFloat((distance / 1000).toFixed(2));
    } else {
        return parseFloat(distance.toFixed(2));
    }
};

/*var d = getDistance({
 lng : 114.199076,
 lat : 30.556392
 }, {
 lng : 114.199507,
 lat : 30.569297
 });
 alert(d);*/ 