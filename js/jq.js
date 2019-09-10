/* var mote = $("#mote")
var a = $("#right-content a")
a.hover(function(){
	mote.css("backgroundImage","url(img/mote" + $(this).index() + ".png)")
},function(){
	mote.css("backgroundImage","")
}) */
//头部导航条显示隐藏
var li=$(".nav-ul-left>li")
li.hover(function(){
	if($(this).children("div")){
		$(this).children("div").show().addClass("fadeIn")
	}
},function(){
	if($(this).children("div")){
		$(this).children("div").hide().removeClass("fadeIn")
	}
}) 
