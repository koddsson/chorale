function Snackbar(t,e,i){""!==t?(this.options=this.activateOptions(e),this.data=t,this.callback=i,this.start(),this.snackbar()):console.warn("SnackbarLight: You can not create a empty snackbar please give it a string.")}Snackbar.prototype={options:{timeout:5e3,activeClass:"active",link:!1,url:"#"},start:function(){if(!document.getElementById("snackbar-container")){var t=document.createElement("div");t.setAttribute("id","snackbar-container"),document.body.appendChild(t)}},timer:function(t,e){var i=e;this.timer={timerId:Math.round(1e3*Math.random()),pause:function(){window.clearTimeout(this.timerId),i-=new Date-start},resume:function(){start=new Date,window.clearTimeout(this.timerId),this.timerId=window.setTimeout(t,i)}},this.timer.resume()},snackbar:function(){var t=this,e=document.createElement("div");document.getElementById("snackbar-container").appendChild(e),e.innerHTML=this.getData(),e.setAttribute("class","snackbar"),setTimeout(function(){e.setAttribute("class","snackbar "+t.options.activeClass)},50),this.options.timeout!==!1&&this.timer(function(){e.setAttribute("class","snackbar"),t.destroy(e)},this.options.timeout),this.listeners(e)},getData:function(){return this.options.link!==!1?"<span>"+this.data+"</span><a href='"+this.options.url+"'>"+this.options.link+"</a>":"<span>"+this.data+"</span>"},listeners:function(t){var e=this;t.addEventListener("click",function(){"function"==typeof e.callback&&e.callback(),t.setAttribute("class","snackbar"),e.destroy(t)}),t.addEventListener("mouseenter",function(){e.timer.pause()}),t.addEventListener("mouseout",function(){e.timer.resume()})},destroy:function(t){this.timer.pause(),setTimeout(function(){t.remove()},1e4)},activateOptions:function(t){var e=this,i=t||{};for(var n in this.options)e.options.hasOwnProperty(n)&&!i.hasOwnProperty(n)&&(i[n]=e.options[n]);return i}},SnackbarLight={install:function(t){var e=this;t.prototype.$snackbar={},t.prototype.$snackbar.create=function(t,i,n){e.create(t,i,n)}},create:function(t,e,i){new Snackbar(t,e,i)}},"object"==typeof exports?module.exports=SnackbarLight:"function"==typeof define&&define.amd?define([],function(){return SnackbarLight}):window.Vue&&Vue.use(SnackbarLight);for(var elements=document.querySelectorAll("[data-toggle=snackbar]"),i=elements.length-1;i>=0;i--)elements[i].addEventListener("click",function(){var t={};null!==this.getAttribute("data-link")&&(t.link=this.getAttribute("data-link")),null!==this.getAttribute("data-timeout")&&(t.timeout=this.getAttribute("data-timeout")),null!==this.getAttribute("data-activeClass")&&(t.activeClass=this.getAttribute("data-active-class")),this.getAttribute("data-url")&&(t.url=this.getAttribute("data-url")),new Snackbar(this.getAttribute("data-content"),t)});

document.querySelector('.nav-mobile__menu').addEventListener('click', function () {
  document.querySelector('.nav-mobile').classList.toggle('nav-mobile--active');
})

'use strict';

[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
});

console.log('JavaScript loaded. Lazy loading initialized.');
