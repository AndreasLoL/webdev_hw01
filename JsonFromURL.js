/**
 * Created by ANDREAS on 05.09.2016.
 */
var ajaxGet = function (url, callback) {
    var callback = (typeof callback == 'function' ? callback : false), xhr = null;
    try {
        xhr = new XMLHttpRequest();
    } catch (e) {
        try {
            ajxhrax = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    if (!xhr)
        return null;
    xhr.open("GET", url,true);
    xhr.onreadystatechange=function() {
        if (xhr.readyState==4 && callback) {
            callback(xhr.responseText)
        }
    }
    xhr.send(null);
    return xhr;
}

ajaxGet(
    'https://api.guildwars2.com/v1/wvw/matches.json',
    function (response) {
        response = JSON.parse(response);
        if (!response)
            return;
        var i, list = response.wvw_matches;
        for (i in list) {
            console.log(list[i].red_world_id); // outputs an id
        }
    });

