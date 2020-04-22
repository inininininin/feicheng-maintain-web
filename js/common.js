var common = {}



common.newTab = function (title, url) {
    tabPad = $('#tabPad').length == 0 ? parent.$('#tabPad') : $('#tabPad')

    tabPad.tabs('add', {
        url: url,
        title: title,
        closable: true,
        width: '100%',
        content: `<iframe src="${url}" style="width:100%;height:99%;border:none;"/>`,
        tools: [{
            iconCls: 'icon-mini-refresh',
            handler: function () {
                var current_tab = tabPad.tabs('getSelected');
                tabPad.tabs('update', {
                    tab: current_tab,
                    options: {
                        content: current_tab.panel('options', 'content'),
                    }
                });
            }
        }
        ]
    });
}



common.sizeInNice = function (b) {
    if (!b)
        return b;

    var num = 1024.00; //byte

    if (b < num)
        return b + "B";
    if (b < Math.pow(num, 2))
        return (b / num).toFixed(2) + "KB"; //kB
    if (b < Math.pow(num, 3))
        return (b / Math.pow(num, 2)).toFixed(2) + "MB"; //M
    if (b < Math.pow(num, 4))
        return (b / Math.pow(num, 3)).toFixed(2) + "GB"; //G
    return (b / Math.pow(num, 4)).toFixed(2) + "TB"; //T
}

common.sizeInMb = function (b,scale) {
    if (!b)
        return b;
    if(scale !=0 && !scale)
        scale = 6
    var num = 1024.00; //byte
    return (b / Math.pow(num, 2)).toFixed(scale) + "MB"; //M
}

common.queryStringObject = function(queryString) {
    if (!queryString)
        queryString = window.location.search.substr(1);
    if (queryString.startsWith('?'))
        queryString=queryString.substr(1)
    const queryList = queryString.split('&')
    let result = {}
    queryString && queryList.map((item) => {
        let keyValue = item.split('=')
        result[keyValue[0]] = decodeURIComponent(keyValue[1])
    })
    return result
}



