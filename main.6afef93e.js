parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".message-lose"),r=document.querySelector(".message-win"),t=document.querySelector(".message-start"),n=document.querySelector(".restart"),o=document.querySelector(".game-score"),i=document.getElementsByClassName("tile"),a=document.querySelector(".start"),c=4,s=4,u=0,d=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],l=!1;function f(){p()&&(l=!0,e.classList.remove("hidden"))}function v(){for(var e=0;e<c;e++)for(var r=0;r<s;r++)if(0===d[e][r])return!0;return!1}function m(){if(!v())return!0;for(var e=[],r=0;r<c;r++)for(var t=0;t<s;t++)0===d[r][t]&&e.push({row:r,column:t});if(0===e.length)return!1;var n=e[Math.floor(Math.random()*e.length)],o=n.row,i=n.column,a=Math.random()<.01?4:2;d[o][i]=a;var u=document.getElementById(o.toString()+"-"+i.toString());return u.innerText=a.toString(),u.classList.add("tile--".concat(a)),!0}function g(e,t){e.innerText="",e.classList.value="",e.classList.add("tile"),t>0&&(e.innerText=t.toString(),t<=2048&&e.classList.add("tile--".concat(t)),2048===t&&r.classList.remove("hidden"))}function h(e){return e.filter(function(e){return 0!==e})}function S(e){var r=e;r=h(r);for(var t=0;t<r.length;t++)r[t]===r[t+1]&&(r[t]*=2,r[t+1]=0,u+=r[t]);for(r=h(r);r.length<s;)r.push(0);return r}function y(){for(var e=!1,r=0;r<c;r++){var t=d[r].slice();d[r]=S(d[r]),B(t,d[r])||(e=!0);for(var n=0;n<s;n++){g(document.getElementById(r.toString()+"-"+n.toString()),d[r][n])}}e&&(m(),f())}function L(){for(var e=!1,r=0;r<c;r++){var t=d[r].slice(),n=S(d[r].slice().reverse()).reverse();d[r]=n,B(t,d[r])||(e=!0);for(var o=0;o<s;o++){g(document.getElementById(r.toString()+"-"+o.toString()),d[r][o])}}e&&(m(),f())}function E(){for(var e=!1,r=0;r<s;r++){for(var t=k(d,r).slice(),n=S(k(d,r)).slice(),o=0;o<c;o++)d[o][r]=n[o];B(t,k(d,r))||(e=!0);for(var i=0;i<c;i++){g(document.getElementById(i.toString()+"-"+r.toString()),d[i][r])}}e&&(m(),f())}function w(){for(var e=!1,r=0;r<s;r++){for(var t=k(d,r).slice().reverse(),n=S(k(d,r).slice().reverse()).reverse(),o=0;o<c;o++)d[o][r]=n[o];B(t,k(d,r).slice().reverse())||(e=!0);for(var i=0;i<c;i++){g(document.getElementById(i.toString()+"-"+r.toString()),d[i][r])}}e&&(m(),f())}function k(e,r){return e.map(function(e){return e[r]})}function B(e,r){if(e.length!==r.length)return!1;for(var t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}function p(){if(v())return!1;for(var e=0;e<c;e++)for(var r=0;r<s;r++){var t=d[e][r];if(r<s-1&&t===d[e][r+1])return!1;if(e<c-1&&t===d[e+1][r])return!1}return!0}a.addEventListener("click",function(){for(var e=0;e<c;e++)for(var r=0;r<s;r++){var o=document.createElement("div"),i=d[e][r];o.id=e.toString()+"-"+r.toString(),g(o,i),document.getElementById("board").append(o)}a.classList.add("hidden"),t.classList.add("hidden"),n.classList.remove("hidden"),m(),m()}),n.addEventListener("click",function(){d=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],Array.from(i).forEach(function(e){e.innerText="",e.className="tile"}),u=0,o.innerHTML=u,e.classList.add("hidden"),r.classList.add("hidden"),m(),m(),l=!1}),document.addEventListener("keydown",function(e){if(l)return!1;switch(e.key){case"ArrowRight":L();break;case"ArrowLeft":y();break;case"ArrowUp":E();break;case"ArrowDown":w()}o.innerText=u});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.6afef93e.js.map