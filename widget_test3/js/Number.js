/**
 * @author 卢倩
 * @date   2014-06-04
 * @description  浮点数值处理 两个浮点数的加减乘除，位数截取
 */
$.extend(Number, {
    /**
     * 加法函数，用来得到精确的加法结果
     * 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
     * 调用：Number.FloatAdd(arg1,arg2)
     * 返回值：arg1加上arg2的精确结果
     * @param {float} arg1
     * @param {float} arg2
     */
    FloatAdd: function(arg1, arg2){
        if (typeof arg1 == 'String' || typeof arg2 == 'String') {
        
            throw new Error(-1, '参数类型不正确，参数为数值类型！');
            return;
        }
        
        arg1 = parseFloat(arg1);
        arg2 = parseFloat(arg2);
        
        var r1, r2, m, s1 = arg1.toString(), s2 = arg2.toString();
        
        try {
            r1 = s1.split('.')[1].length;
            if (s1.indexOf('e') != -1) {
                r1 -= 3;
            }
        } 
        catch (e) {
            r1 = 0;
        }
        
        try {
            r2 = s2.split('.')[1].length;
            if (s2.indexOf('e') != -1) {
                r2 -= 3;
            }
        } 
        catch (e) {
            r2 = 0;
        }
        
        m = Math.pow(10, Math.max(r1, r2));
        
        return (this.FloatMult(arg1, m) + this.FloatMult(arg2, m)) / m;
    },
    
    /**
     * 减法函数，用来得到精确的减法结果
     * 说明：javascript的减法结果会有误差，在两个浮点数相减的时候会比较明显。这个函数返回较为精确的减法结果。
     * 调用：Number.FloatMult(arg1,arg2)
     * 返回值：arg1减去arg2的精确结果
     * @param {float} arg1
     * @param {float} arg2
     */
    FloatSubt: function(arg1, arg2){
        if (typeof arg1 == 'String' || typeof arg2 == 'String') {
        
            throw new Error(-1, '参数类型不正确，参数为数值类型！');
            return;
        }
        
        arg1 = parseFloat(arg1);
        arg2 = parseFloat(arg2);
        
        var r1, r2, m, s1 = arg1.toString(), s2 = arg2.toString();
        try {
            r1 = s1.split('.')[1].length;
            if (s1.indexOf('e') != -1) {
                r1 -= 3;
            }
        } 
        catch (e) {
            r1 = 0;
        }
        
        try {
            r2 = s2.split('.')[1].length;
            if (s2.indexOf('e') != -1) {
                r2 -= 3;
            }
        } 
        catch (e) {
            r2 = 0;
        }
        
        m = Math.pow(10, Math.max(r1, r2));
        
        return (this.FloatMult(arg1, m) - this.FloatMult(arg2, m)) / m;
    },
    
    
    /**
     * 乘法函数，用来得到精确的乘法结果
     * 说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
     * 调用：Number.FloatMult(arg1,arg2)
     * 返回值：arg1乘以arg2的精确结果
     * @param {float} arg1
     * @param {float} arg2
     */
    FloatMult: function(arg1, arg2){
        if (typeof arg1 == 'String' || typeof arg2 == 'String') {
        
            throw new Error(-1, '参数类型不正确，参数为数值类型！');
            return;
        }
        
        arg1 = parseFloat(arg1);
        arg2 = parseFloat(arg2);
        
        var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
        
        try {
            m += s1.split('.')[1].length;
            if (s1.indexOf('e') != -1) {
                m -= 3;
            }
        } 
        catch (e) {
        }
        
        try {
            m += s2.split('.')[1].length;
            if (s2.indexOf('e') != -1) {
                m -= 3;
            }
        } 
        catch (e) {
        }
        
        return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
    },
    
    /**
     * 除法函数，用来得到精确的除法结果
     * 说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
     * 调用：Number.FloatDivision(arg1,arg2)
     * 返回值：arg1除以arg2的精确结果
     * @param {float} arg1
     * @param {float} arg2
     */
    FloatDivision: function(arg1, arg2){
        if (typeof arg1 == 'String' || typeof arg2 == 'String') {
        
            throw new Error(-1, '参数类型不正确，参数为数值类型！');
            return;
        }
        
        arg1 = parseFloat(arg1);
        arg2 = parseFloat(arg2);
        
        var t1 = 0, t2 = 0, r1, r2, s1 = arg1.toString(), s2 = arg2.toString();
        
        try {
            t1 = s1.split('.')[1].length;
            if (s1.indexOf('e') != -1) {
                t1 -= 3;
            }
        } 
        catch (e) {
        }
        
        try {
            t2 = s2.split('.')[1].length;
            if (s2.indexOf('e') != -1) {
                t2 -= 3;
            }
        } 
        catch (e) {
        }
        
        with (Math) {
            r1 = Number(s1.replace('.', ''));
            r2 = Number(s2.replace('.', ''));
            
            return this.FloatMult((r1 / r2), pow(10, t2 - t1));
        }
    },
    
    /**
     * 保留小数位数,不四舍五入(直接截断)
     * 调用：Number.FloatCutOff(2.356,1)
     * 返回值：2.3
     * @param {Object} val			需要处理的值
     * @param {Object} reservation	保留的小数位数(范围为0~20)
     * @param {Object} isSupplement	是否不足补零
     */
    FloatCutOff: function(val, reservation, isSupplement){
        if (typeof val == 'String' || typeof reservation == 'String') {
        
            throw new Error(-1, '参数类型不正确，参数为数值类型！');
            return;
        }
        
        reservation = reservation || 0;
        if (reservation < 0 || reservation > 20) {
            Msg.Normal('小数位数超出0~20的范围！');
        }
        
        var vals = val.toString().split('.');
        if (vals.length == 2) {
        
            var nVal = vals[1];
            
            if (nVal.length >= reservation) {
            
                return parseFloat(vals[0] + '.' + nVal.substring(0, reservation));
            }
            else 
                if (isSupplement) {
                    var len = vals[0].length + reservation;
                    
                    return val.toPrecision(len);
                }
        }
        return val;
    },
    /**
     * 对小数格式化，四舍五入，不足补零
     * 调用：Number.FormatNum(2.356,1)
     * 返回值：2.3
     * @param {Object} value			需要处理的值
     * @param {Object} num 	保留的小数位数(范围为0~20)
     */
    FormatNum: function(value, num){
        value = parseFloat(value);
        value = value.toFixed(num);
        
        if (num) {
            var vals = value.toString().split('.');
            if (vals.length == 2 && vals[1].length < num) {
                for (var i = 0, len = num - vals[1].length; i < len; i++) {
                    value = value + '0';
                }
            }
        }
        return value;
    }
});
