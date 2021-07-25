var tag_css = document.createElement('link');
tag_css.href = 'css/responsive.css'; // здесь указывается URL стилевого файла
tag_css.rel = 'stylesheet';
tag_css.type = 'text/css';
tag_css.id = 'res';


window.onload = function () {

document.getElementById("btt").addEventListener("click", function() {
	var tag_head = document.getElementsByTagName('head');
	tag_head[0].appendChild(tag_css);
});

document.getElementById("btt2").addEventListener("click", function() {
	tag_css.remove();
});

}