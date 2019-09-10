// 游戏中心
/* var rcontent = document.getElementById("right-content");
var mote = document.getElementById("mote");
var child = rcontent.children;
for (var a = 0; a < child.length; a++) {
	child[a].onmouseover = function() {
		var index = this.getAttribute("data-bgimg");
		mote.style.backgroundImage = "url(img/mote" + index + ".png)";
	}
	child[a].onmouseout = function() {
		mote.style.backgroundImage = "";
	}
}
 */
var child = document.querySelectorAll("#right-content a")
var mote = document.querySelector("#mote")
child.forEach(function(item,i){
	item.onmouseover=function(){
		mote.style.backgroundImage="url(img/mote" + i + ".png)"
	}
	item.onmouseout=function(){
		mote.style.backgroundImage=""
	}
})

var li = document.querySelectorAll(".nav-ul-left>li");
var lii = document.querySelectorAll(".nav-ul-right>li");
/* for (var i = 0; i < li.length; i++) {
	if (li[i].children[1] != undefined) {
		li[i].onmouseover = function() {
			this.children[1].style.display = "block";
			this.children[1].classList.add("fadeIn");
		}
		li[i].onmouseout = function() {
			this.children[1].style.display = "none";
			this.children[1].classList.remove("fadeIn");
		}
	}
} */
/* li.forEach(function(item,i){
	if(item.children[1]!=undefined){
		item.onmouseover=function(){
			this.children[1].style.display = "block";
			this.children[1].classList.add("fadeIn");
		}
		item.onmouseout=function(){
			this.children[1].style.display = "none";
			this.children[1].classList.remove("fadeIn");
		}
	}
}) */
for (var v = 0; v < lii.length; v++) {
	if (lii[v].children[1] != undefined) {
		lii[v].onmouseover = function() {
			this.children[1].style.display = "block";
			this.children[1].classList.add("fadeIn");
		}
		lii[v].onmouseout = function() {
			this.children[1].style.display = "none";
			this.children[1].classList.remove("fadeIn");
		}
	}
}

var index = 0;
var flag = true;
var time="";
var banner_ul = document.getElementById("banner-ul");
var banner_list = document.querySelectorAll(".banner-list>li");

function carousel2() {
	if (flag) {
		flag=false;
		for (var i = 0; i < banner_list.length; i++) {
			banner_list[i].className = "";
			this.className = "active";
		}
		var index2 = this.getAttribute("data-index");
		banner_ul.style.left = "-" + index2 * 100 + "%";
		index = index2;
		setTimeout("flag=true",1000);
	}
}

for (var r = 0; r < banner_list.length; r++) {
	banner_list[r].onclick = carousel2;
	banner_list[r].onmouseover=function(){
		clearInterval(time);
	}
	banner_list[r].onmouseout = function(){
			time=setInterval(carousel,5000);
	}
}

function carousel() {
	if (index == 4) {
		index = 0;
	} else {
		index++;
	}
	for (var b = 0; b < banner_list.length; b++) {
		if (index == b) {
			banner_list[b].classList.add("active");
		} else {
			banner_list[b].classList.remove("active");
		}
	}
	banner_ul.style.left = "-" + index * 100 + "%";
}

banner_ul.onmouseover=function(){
	clearInterval(time);
}
banner_ul.onmouseout = function(){
		time=setInterval(carousel,5000);
}
time=setInterval(carousel, 5000);


var srcbox=document.querySelectorAll(".zzzb-body>a");
var srcimg=document.querySelectorAll(".srcimg");
for(var s=0;s<srcbox.length;s++){
	srcbox[s].onmouseover=function(){
		var index=this.getAttribute("data-index");
		srcimg[index].src="img/zzb"+index+"."+index+".png";
	}
	srcbox[s].onmouseout=function(){
		var index=this.getAttribute("data-index");
		srcimg[index].src="img/zzb"+index+".png";
	}
}

var zbph_ul=document.querySelector(".zbph-ul");
var zbph_list=document.querySelectorAll(".zbph-list>li");
zbph_list[0].onclick=function(){
	zbph_list[1].className="";
	this.className="active";
	zbph_ul.style.left="0%";
}
zbph_list[1].onclick=function(){
	zbph_list[0].className="";
	this.className="active";
	zbph_ul.style.left="-100%";
}


var zbph=document.querySelectorAll("#gzdzb>li");
var zbph2=document.querySelector(".zbph");
for(var p=0;p<zbph.length;p++){
	zbph[p].onclick=function(){
		for(var i=0;i<zbph.length;i++){
			zbph[i].className="";
			this.className="active";
		}
		var index=this.getAttribute("data-index");
		zbph2.style.left="-"+index*100+"%";
	}
}


function paihang(obj,id,yd,index){
	var li=document.querySelectorAll("#"+id+">li");
	var ydd=document.getElementById(yd);
	for(var i=0;i<li.length;i++){
		li[i].className="";
		obj.className="active";
	}
	ydd.style.left="-"+index*100+"%";
}

var cebian_li=document.querySelectorAll(".cebian-ul>li");
for(var n=0;n<cebian_li.length;n++){
	cebian_li[n].onclick=function(){
		for(var i=0;i<cebian_li.length;i++){
			cebian_li[i].className="";
			this.className="active";
		}
	}
}

var cebian_nav=document.getElementById("cebian-nav")
window.onscroll=function () {
        var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop>300){
            cebian_nav.style.top="80px";
        }else{
			cebian_nav.style.top="240px";
		}
}


var dhul=document.querySelectorAll("#dhul1>li")
var dhbody=document.querySelectorAll(".donghua1>.donghua_body")

dhul.forEach(function(item,i){
	item.onclick=function(){
		dhul.forEach(function(item,it){
			item.className=""
			dhbody[it].style.display="none";
			dhbody[it].classList.remove("fadeIn")
		})
		item.className="active"
		dhbody[i].style.display="block";
		dhbody[i].classList.add("fadeIn")
	}
})

var fjul=document.querySelectorAll(".fj-ul>li")
fjul.forEach(function(item,i){
	item.onclick=function(){
		fjul.forEach(function(item){
			item.className=""
		})
		item.className="active"
	}
})
