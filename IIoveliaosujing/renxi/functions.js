/*
 * http://www.mycodes.net
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	// var current = Date();
	// var t_minutes = 1000 * 60
	// var t_hours = t_minutes * 60
	// var t_days = t_hours * 24
	// var t_years = t_days * 365
	// var seconds = (Date.parse(current) - Date.parse(date));
	// var days = Math.floor(seconds / t_days);
	// //seconds = seconds % (3600 * 24);
	// var hours = Math.floor(seconds / t_hours);
	// if (hours < 10) {
	// 	hours = "0" + hours;
	// }
	// seconds = seconds % 3600;
	// var minutes = Math.floor(seconds / 60);
	// if (minutes < 10) {
	// 	minutes = "0" + minutes;
	// }
	// seconds = seconds % 60;
	// if (seconds < 10) {
	// 	seconds = "0" + seconds;
	// }
	var current = Date();
	var diff=Date.parse(current) - Date.parse(date);//时间差的毫秒数

    //计算出相差天数
    var days=Math.floor(diff/(24*3600*1000))+29;

    //计算出小时数
    var leave1=diff%(24*3600*1000);    //计算天数后剩余的毫秒数
    var hours=Math.floor(leave1/(3600*1000));
    //计算相差分钟数
    var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60*1000));

    //计算相差秒数
    var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
    var seconds=Math.round(leave3/1000);

	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒"; 
	$("#clock").html(result);
}

function diffTime(startDate,endDate) {
    var diff=endDate.getTime() - startDate;//.getTime();//时间差的毫秒数

    //计算出相差天数
    var days=Math.floor(diff/(24*3600*1000));

    //计算出小时数
    var leave1=diff%(24*3600*1000);    //计算天数后剩余的毫秒数
    var hours=Math.floor(leave1/(3600*1000));
    //计算相差分钟数
    var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60*1000));

    //计算相差秒数
    var leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
    var seconds=Math.round(leave3/1000);

    var returnStr = seconds + "秒前";
    if(minutes>0) {
        returnStr = minutes + "分钟前";//+ returnStr;
    }
    if(hours>0) {
        returnStr = hours + "小时前";// + returnStr;
    }
    if(days>0) {
        returnStr = days + "天前" ;//+ returnStr;
    }
    return returnStr;
}