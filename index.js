window.onload = function(){
	//获取元素节点
	var currentAddr = 
	document.getElementsByClassName('currentAddr')[0];
	var select = 
	document.getElementsByClassName('select')[0];
	//获取地址列表中地指项
	var address = select.children;
	//为每一项添加点击事件
	for(var i = 0;i<address.length;i++) {
		address[i].onclick = function(){
			currentAddr.innerHTML = this.innerHTML
		}
	}
	// 图片轮播
	//1.获取图片数组
	//2.定时器实现图片切换
	//3.图片切换主要切换数组下标，防止数组越界
	var banner = document.getElementsByClassName('wrapper')[0];
	var imgs = banner.children;
	var imgNav = document.getElementsByClassName('imgNav')[0];
	var indInfo = imgNav.children;//索引数组
	var imgIndex = 0;
	var timer = setInterval(autoplay,1000);
	function autoplay() {

		//设置元素的隐藏与显示
		imgs[imgIndex].style.display = "none";
		// ++ imgIndex;
		// if(imgIndex == imgs.length){
		// 	imgIndex = 0
		// }

		imgIndex = ++imgIndex == imgs.length ?0 : imgIndex;
		imgs[imgIndex].style.display = "block";
		for(var i = 0;i<indInfo.length;i ++){
			indInfo[i].style.background = "gray"
		}
		//切换索引 切换背景色
		indInfo[imgIndex].style.background = "pink"

	}
	banner.onmouseover = function () {
		//停止定时器
		clearInterval(timer);
	}
	banner.onmouseout = function () {
		timer = setInterval(autoplay,1000)
	}
}