(function ($) {
    $.fn.oneall = function (moduleName, param) {
        
        if ('attrs' == moduleName) {
            return attrs(this,param)
        }else if ('swap' == moduleName){
            swap(this,param);
        }
    };

    function attrs(self, name) {
        var values = [];
        self.each(function (index, ele) {
            values.push($(ele).attr(name))
        })
        return values
    }


    function swap(self,target) {
        if (!target || target.length == 0)
            return
        var s = $('<span></span>')
        s.insertAfter(self)
    
        var s1 = $('<span></span>')
        s1.insertAfter(target)
    
        $(target).insertBefore(s)
        $(self).insertAfter(s1)
    
        s.remove()
        s1.remove()
    }
})(jQuery);









$.fn.oneall_nestAttr = function (chain) {
    var eles = chain.split('.')
    var data = this[0];
    for (let index = 0; index < eles.length; index++) {
        const ele = eles[index];
        data = data[ele]
        if (data == null || data == undefined)
            return data;

    }
    return data
}