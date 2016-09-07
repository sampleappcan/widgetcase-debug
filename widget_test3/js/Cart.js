/**
 * 商品加入购物车或修改数量，调出购物车数量编辑框，调用时使用editCart.show方法，带JSON参数；
 * 删除购物车商品，使用editCart.deleteCartId方法，带参数
 *
 */

var editCart = {

    /*
     * 生成购物车数量编辑控件显示
     * show参数为JSON格式
     * {
     *   merchandiseId: ,     @merchandiseId {Number} 所购商品ID
     *   callback:,           @callback {String} 添加完成后回调的js脚本方法名，ajax访问的result转为str后作为该脚本函数的参数
     *   popName:,            @popName {String}  执行回调函数的浮动窗口名称
     *   
     * 
     *   //新补充
     *   isDecimal:             0/1       是否可输入小数   
     *   retail                 0/1          是否可拆零
     *   middlingPacking：             { Number }    中包装数  不可拆零的产品，传入中包装数，购物车按钮增加时，每次增加数为中包装数
     *  
     *   
     *   winName:,            @winName {String}  非必需，执行回调函数的浮动窗口所在主窗口名称，为空则为当前窗口
     *   oldNum:,             @oldNum {Number}   非必需，购物车中原购买数量,不带或为空则为新增，非空则为更新
     * 
     * }

     */

    show : function(jsonPara) {
        if (jsonPara.merchandiseId) {
            var id = jsonPara.merchandiseId;
            jsonPara.merchandiseId = parseInt(id);
        }
        var para = JSON.stringify(jsonPara);
        LocStorage.set('shoppingCartPara', para);

        appcan.frame.open({
            id : 'shoppingCart',
            url : 'shoppingCart.html',
        });

    },

    ok : function(para) {
        var isAdd = true;
        //判断该操作为新增还是更新
        var data = [{
            merchandiseId : para.merchandiseId,
            merchandiseNumber : para.newNum
        }];

        if (para.activityType) {
            data[0].activityType = para.activityType;
        }

        if (para.orgMerchandiseCode) {
            data[0].orgMerchandiseCode = para.orgMerchandiseCode;
        }

        var array = JSON.stringify(data);
        var requestPara={
            array:array
        };
        if (parseFloat(para.oldNum)) {
            isAdd = false;
           // array = array + '&blurCart=blurCart';
            requestPara.blurCart='blurCart';
        }

        AjaxFn(urls.CART_ADD,requestPara , function(result) {
            if (isAdd) {
                appcan.frame.evaluateScript({
                    name : 'index',
                    popName : 'content_2',
                    scriptContent : 'updatePage()'
                });
            }
            appcan.frame.evaluateScript({
                name : para.winName || '',
                popName : para.popName,
                scriptContent : para.callback + '(' + JSON.stringify(result) + ')'
            });

        }, {
            successException : function(result) {
                editCart.successException = true;
                alert(result.msgInfo || result.msg, {
                    callback : function(opId, dataType, data) {
                        log(data);
                        if (data == 0) {
                            appcan.window.close(-1);
                        }
                    }
                });
            },
            completeFn : function() {
                if (!editCart.successException) {
                    appcan.window.close(-1);
                }
            }
        });

    },

    /*
     * 删除购物车中的商品，
     * @cartId {String} 多个所需删除的商品id，用逗号分隔，例如'242344,451133,5513423,'
     * @callback {Function}  添加完成后回调函数
     *
     */
    deleteCartId : function(cartId, callback) {
        AjaxFn(urls.CART_DELETE, {
            cartId : cartId
        }, callback);
    },
};
