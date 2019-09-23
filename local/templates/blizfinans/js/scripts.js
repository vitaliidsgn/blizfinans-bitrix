!function(a,n){"function"==typeof define&&define.amd?define(n):"object"==typeof exports?module.exports=n(require,exports,module):a.CountUp=n()}(this,function(a,n,t){return function(a,n,t,e,i,r){var u=this;if(u.version=function(){return"1.9.3"},u.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(a,n,t,e){return t*(1-Math.pow(2,-10*a/e))*1024/1023+n},formattingFn:function(a){var n,t,e,i,r,o,s=a<0;if(a=Math.abs(a).toFixed(u.decimals),n=(a+="").split("."),t=n[0],e=1<n.length?u.options.decimal+n[1]:"",u.options.useGrouping){for(i="",r=0,o=t.length;r<o;++r)0!==r&&r%3==0&&(i=u.options.separator+i),i=t[o-r-1]+i;t=i}return u.options.numerals.length&&(t=t.replace(/[0-9]/g,function(a){return u.options.numerals[+a]}),e=e.replace(/[0-9]/g,function(a){return u.options.numerals[+a]})),(s?"-":"")+u.options.prefix+t+e+u.options.suffix},prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var o in u.options)r.hasOwnProperty(o)&&null!==r[o]&&(u.options[o]=r[o]);""===u.options.separator?u.options.useGrouping=!1:u.options.separator=""+u.options.separator;for(var s=0,l=["webkit","moz","ms","o"],m=0;m<l.length&&!window.requestAnimationFrame;++m)window.requestAnimationFrame=window[l[m]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[l[m]+"CancelAnimationFrame"]||window[l[m]+"CancelRequestAnimationFrame"];function d(a){return"number"==typeof a&&!isNaN(a)}window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=(new Date).getTime(),e=Math.max(0,16-(t-s)),i=window.setTimeout(function(){a(t+e)},e);return s=t+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),u.initialize=function(){return!!u.initialized||(u.error="",u.d="string"==typeof a?document.getElementById(a):a,u.d?(u.startVal=Number(n),u.endVal=Number(t),d(u.startVal)&&d(u.endVal)?(u.decimals=Math.max(0,e||0),u.dec=Math.pow(10,u.decimals),u.duration=1e3*Number(i)||2e3,u.countDown=u.startVal>u.endVal,u.frameVal=u.startVal,u.initialized=!0):(u.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",!1)):!(u.error="[CountUp] target is null or undefined"))},u.printValue=function(a){var n=u.options.formattingFn(a);"INPUT"===u.d.tagName?this.d.value=n:"text"===u.d.tagName||"tspan"===u.d.tagName?this.d.textContent=n:this.d.innerHTML=n},u.count=function(a){u.startTime||(u.startTime=a);var n=(u.timestamp=a)-u.startTime;u.remaining=u.duration-n,u.options.useEasing?u.countDown?u.frameVal=u.startVal-u.options.easingFn(n,0,u.startVal-u.endVal,u.duration):u.frameVal=u.options.easingFn(n,u.startVal,u.endVal-u.startVal,u.duration):u.countDown?u.frameVal=u.startVal-(u.startVal-u.endVal)*(n/u.duration):u.frameVal=u.startVal+(u.endVal-u.startVal)*(n/u.duration),u.countDown?u.frameVal=u.frameVal<u.endVal?u.endVal:u.frameVal:u.frameVal=u.frameVal>u.endVal?u.endVal:u.frameVal,u.frameVal=Math.round(u.frameVal*u.dec)/u.dec,u.printValue(u.frameVal),n<u.duration?u.rAF=requestAnimationFrame(u.count):u.callback&&u.callback()},u.start=function(a){u.initialize()&&(u.callback=a,u.rAF=requestAnimationFrame(u.count))},u.pauseResume=function(){u.paused?(u.paused=!1,delete u.startTime,u.duration=u.remaining,u.startVal=u.frameVal,requestAnimationFrame(u.count)):(u.paused=!0,cancelAnimationFrame(u.rAF))},u.reset=function(){u.paused=!1,delete u.startTime,u.initialized=!1,u.initialize()&&(cancelAnimationFrame(u.rAF),u.printValue(u.startVal))},u.update=function(a){u.initialize()&&(d(a=Number(a))?(u.error="",a!==u.frameVal&&(cancelAnimationFrame(u.rAF),u.paused=!1,delete u.startTime,u.startVal=u.frameVal,u.endVal=a,u.countDown=u.startVal>u.endVal,u.rAF=requestAnimationFrame(u.count))):u.error="[CountUp] update() - new endVal is not a number: "+a)},u.initialize()&&u.printValue(u.startVal)}});
/*! nouislider - 13.1.4 - 3/20/2019 */
!function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():window.noUiSlider=t()}(function(){"use strict";var ut="13.1.4";function ct(t){t.parentElement.removeChild(t)}function s(t){return null!=t}function pt(t){t.preventDefault()}function i(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function ft(t,e,r){0<r&&(mt(t,e),setTimeout(function(){gt(t,e)},r))}function dt(t){return Math.max(Math.min(t,100),0)}function ht(t){return Array.isArray(t)?t:[t]}function e(t){var e=(t=String(t)).split(".");return 1<e.length?e[1].length:0}function mt(t,e){t.classList?t.classList.add(e):t.className+=" "+e}function gt(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function vt(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function c(t,e){return 100/(e-t)}function p(t,e){return 100*e/(t[1]-t[0])}function f(t,e){for(var r=1;t>=e[r];)r+=1;return r}function r(t,e,r){if(r>=t.slice(-1)[0])return 100;var n,i,o=f(r,t),a=t[o-1],s=t[o],l=e[o-1],u=e[o];return l+(i=r,p(n=[a,s],n[0]<0?i+Math.abs(n[0]):i-n[0])/c(l,u))}function n(t,e,r,n){if(100===n)return n;var i,o,a=f(n,t),s=t[a-1],l=t[a];return r?(l-s)/2<n-s?l:s:e[a-1]?t[a-1]+(i=n-t[a-1],o=e[a-1],Math.round(i/o)*o):n}function o(t,e,r){var n;if("number"==typeof e&&(e=[e]),!Array.isArray(e))throw new Error("noUiSlider ("+ut+"): 'range' contains invalid value.");if(!i(n="min"===t?0:"max"===t?100:parseFloat(t))||!i(e[0]))throw new Error("noUiSlider ("+ut+"): 'range' value isn't numeric.");r.xPct.push(n),r.xVal.push(e[0]),n?r.xSteps.push(!isNaN(e[1])&&e[1]):isNaN(e[1])||(r.xSteps[0]=e[1]),r.xHighestCompleteStep.push(0)}function a(t,e,r){if(e)if(r.xVal[t]!==r.xVal[t+1]){r.xSteps[t]=p([r.xVal[t],r.xVal[t+1]],e)/c(r.xPct[t],r.xPct[t+1]);var n=(r.xVal[t+1]-r.xVal[t])/r.xNumSteps[t],i=Math.ceil(Number(n.toFixed(3))-1),o=r.xVal[t]+r.xNumSteps[t]*i;r.xHighestCompleteStep[t]=o}else r.xSteps[t]=r.xHighestCompleteStep[t]=r.xVal[t]}function l(t,e,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e;var i=[];for(n in t)t.hasOwnProperty(n)&&i.push([t[n],n]);for(i.length&&"object"==typeof i[0][0]?i.sort(function(t,e){return t[0][0]-e[0][0]}):i.sort(function(t,e){return t[0]-e[0]}),n=0;n<i.length;n++)o(i[n][1],i[n][0],this);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)a(n,this.xNumSteps[n],this)}l.prototype.getMargin=function(t){var e=this.xNumSteps[0];if(e&&t/e%1!=0)throw new Error("noUiSlider ("+ut+"): 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length&&p(this.xVal,t)},l.prototype.toStepping=function(t){return t=r(this.xVal,this.xPct,t)},l.prototype.fromStepping=function(t){return function(t,e,r){if(100<=r)return t.slice(-1)[0];var n,i=f(r,e),o=t[i-1],a=t[i],s=e[i-1],l=e[i];return n=[o,a],(r-s)*c(s,l)*(n[1]-n[0])/100+n[0]}(this.xVal,this.xPct,t)},l.prototype.getStep=function(t){return t=n(this.xPct,this.xSteps,this.snap,t)},l.prototype.getDefaultStep=function(t,e,r){var n=f(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},l.prototype.getNearbySteps=function(t){var e=f(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},l.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},l.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var u={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number};function d(t){if("object"==typeof(e=t)&&"function"==typeof e.to&&"function"==typeof e.from)return!0;var e;throw new Error("noUiSlider ("+ut+"): 'format' requires 'to' and 'from' methods.")}function h(t,e){if(!i(e))throw new Error("noUiSlider ("+ut+"): 'step' is not numeric.");t.singleStep=e}function m(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider ("+ut+"): 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider ("+ut+"): Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider ("+ut+"): 'range' 'min' and 'max' cannot be equal.");t.spectrum=new l(e,t.snap,t.singleStep)}function g(t,e){if(e=ht(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider ("+ut+"): 'start' option is incorrect.");t.handles=e.length,t.start=e}function v(t,e){if("boolean"!=typeof(t.snap=e))throw new Error("noUiSlider ("+ut+"): 'snap' option must be a boolean.")}function b(t,e){if("boolean"!=typeof(t.animate=e))throw new Error("noUiSlider ("+ut+"): 'animate' option must be a boolean.")}function S(t,e){if("number"!=typeof(t.animationDuration=e))throw new Error("noUiSlider ("+ut+"): 'animationDuration' option must be a number.")}function x(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider ("+ut+"): 'connect' option doesn't match handle count.");n=e}t.connect=n}function w(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider ("+ut+"): 'orientation' option is invalid.")}}function y(t,e){if(!i(e))throw new Error("noUiSlider ("+ut+"): 'margin' option must be numeric.");if(0!==e&&(t.margin=t.spectrum.getMargin(e),!t.margin))throw new Error("noUiSlider ("+ut+"): 'margin' option is only supported on linear sliders.")}function E(t,e){if(!i(e))throw new Error("noUiSlider ("+ut+"): 'limit' option must be numeric.");if(t.limit=t.spectrum.getMargin(e),!t.limit||t.handles<2)throw new Error("noUiSlider ("+ut+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function C(t,e){if(!i(e)&&!Array.isArray(e))throw new Error("noUiSlider ("+ut+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!i(e[0])&&!i(e[1]))throw new Error("noUiSlider ("+ut+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){if(Array.isArray(e)||(e=[e,e]),!(t.padding=[t.spectrum.getMargin(e[0]),t.spectrum.getMargin(e[1])])===t.padding[0]||!1===t.padding[1])throw new Error("noUiSlider ("+ut+"): 'padding' option is only supported on linear sliders.");if(t.padding[0]<0||t.padding[1]<0)throw new Error("noUiSlider ("+ut+"): 'padding' option must be a positive number(s).");if(100<=t.padding[0]+t.padding[1])throw new Error("noUiSlider ("+ut+"): 'padding' option must not exceed 100% of the range.")}}function N(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider ("+ut+"): 'direction' option was not recognized.")}}function U(t,e){if("string"!=typeof e)throw new Error("noUiSlider ("+ut+"): 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),o=0<=e.indexOf("snap"),a=0<=e.indexOf("hover"),s=0<=e.indexOf("unconstrained");if(i){if(2!==t.handles)throw new Error("noUiSlider ("+ut+"): 'fixed' behaviour must be used with 2 handles");y(t,t.start[1]-t.start[0])}if(s&&(t.margin||t.limit))throw new Error("noUiSlider ("+ut+"): 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,fixed:i,snap:o,hover:a,unconstrained:s}}function k(t,e){if(!1!==e)if(!0===e){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(!0)}else{if(t.tooltips=ht(e),t.tooltips.length!==t.handles)throw new Error("noUiSlider ("+ut+"): must pass a formatter for all handles.");t.tooltips.forEach(function(t){if("boolean"!=typeof t&&("object"!=typeof t||"function"!=typeof t.to))throw new Error("noUiSlider ("+ut+"): 'tooltips' must be passed a formatter or 'false'.")})}}function P(t,e){d(t.ariaFormat=e)}function A(t,e){d(t.format=e)}function V(t,e){if("boolean"!=typeof(t.keyboardSupport=e))throw new Error("noUiSlider ("+ut+"): 'keyboardSupport' option must be a boolean.")}function M(t,e){t.documentElement=e}function O(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider ("+ut+"): 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function L(t,e){if("object"!=typeof e)throw new Error("noUiSlider ("+ut+"): 'cssClasses' must be an object.");if("string"==typeof t.cssPrefix)for(var r in t.cssClasses={},e)e.hasOwnProperty(r)&&(t.cssClasses[r]=t.cssPrefix+e[r]);else t.cssClasses=e}function bt(e){var r={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:u,format:u},n={step:{r:!1,t:h},start:{r:!0,t:g},connect:{r:!0,t:x},direction:{r:!0,t:N},snap:{r:!1,t:v},animate:{r:!1,t:b},animationDuration:{r:!1,t:S},range:{r:!0,t:m},orientation:{r:!1,t:w},margin:{r:!1,t:y},limit:{r:!1,t:E},padding:{r:!1,t:C},behaviour:{r:!0,t:U},ariaFormat:{r:!1,t:P},format:{r:!1,t:A},tooltips:{r:!1,t:k},keyboardSupport:{r:!0,t:V},documentElement:{r:!1,t:M},cssPrefix:{r:!0,t:O},cssClasses:{r:!0,t:L}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(t){if(!s(e[t])&&void 0===i[t]){if(n[t].r)throw new Error("noUiSlider ("+ut+"): '"+t+"' is required.");return!0}n[t].t(r,s(e[t])?e[t]:i[t])}),r.pips=e.pips;var t=document.createElement("div"),o=void 0!==t.style.msTransform,a=void 0!==t.style.transform;r.transformRule=a?"transform":o?"msTransform":"webkitTransform";return r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function z(t,f,o){var l,u,a,c,i,s,e,p,d=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},h=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),y=t,E=f.spectrum,m=[],g=[],v=[],b=0,S={},x=t.ownerDocument,w=f.documentElement||x.documentElement,C=x.body,N=-1,U=0,k=1,P=2,A="rtl"===x.dir||1===f.ort?0:100;function V(t,e){var r=x.createElement("div");return e&&mt(r,e),t.appendChild(r),r}function M(t,e){var r=V(t,f.cssClasses.origin),n=V(r,f.cssClasses.handle);return V(n,f.cssClasses.touchArea),n.setAttribute("data-handle",e),f.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(t){return function(t,e){if(L()||z(e))return!1;var r=["Left","Right"],n=["Down","Up"];f.dir&&!f.ort?r.reverse():f.ort&&!f.dir&&n.reverse();var i=t.key.replace("Arrow",""),o=i===n[0]||i===r[0],a=i===n[1]||i===r[1];if(!o&&!a)return!0;t.preventDefault();var s=o?0:1,l=lt(e)[s];if(null===l)return!1;!1===l&&(l=E.getDefaultStep(g[e],o,10));return l=Math.max(l,1e-7),l*=o?-1:1,at(e,m[e]+l,!0),!1}(t,e)})),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",f.ort?"vertical":"horizontal"),0===e?mt(n,f.cssClasses.handleLower):e===f.handles-1&&mt(n,f.cssClasses.handleUpper),r}function O(t,e){return!!e&&V(t,f.cssClasses.connect)}function r(t,e){return!!f.tooltips[e]&&V(t.firstChild,f.cssClasses.tooltip)}function L(){return y.hasAttribute("disabled")}function z(t){return u[t].hasAttribute("disabled")}function j(){i&&(G("update.tooltips"),i.forEach(function(t){t&&ct(t)}),i=null)}function H(){j(),i=u.map(r),$("update.tooltips",function(t,e,r){if(i[e]){var n=t[e];!0!==f.tooltips[e]&&(n=f.tooltips[e].to(r[e])),i[e].innerHTML=n}})}function F(e,i,o){var a=x.createElement("div"),s=[];s[U]=f.cssClasses.valueNormal,s[k]=f.cssClasses.valueLarge,s[P]=f.cssClasses.valueSub;var l=[];l[U]=f.cssClasses.markerNormal,l[k]=f.cssClasses.markerLarge,l[P]=f.cssClasses.markerSub;var u=[f.cssClasses.valueHorizontal,f.cssClasses.valueVertical],c=[f.cssClasses.markerHorizontal,f.cssClasses.markerVertical];function p(t,e){var r=e===f.cssClasses.value,n=r?s:l;return e+" "+(r?u:c)[f.ort]+" "+n[t]}return mt(a,f.cssClasses.pips),mt(a,0===f.ort?f.cssClasses.pipsHorizontal:f.cssClasses.pipsVertical),Object.keys(e).forEach(function(t){!function(t,e,r){if((r=i?i(e,r):r)!==N){var n=V(a,!1);n.className=p(r,f.cssClasses.marker),n.style[f.style]=t+"%",U<r&&((n=V(a,!1)).className=p(r,f.cssClasses.value),n.setAttribute("data-value",e),n.style[f.style]=t+"%",n.innerHTML=o.to(e))}}(t,e[t][0],e[t][1])}),a}function D(){c&&(ct(c),c=null)}function T(t){D();var m,g,v,b,e,r,S,x,w,n=t.mode,i=t.density||1,o=t.filter||!1,a=function(t,e,r){if("range"===t||"steps"===t)return E.xVal;if("count"===t){if(e<2)throw new Error("noUiSlider ("+ut+"): 'values' (>= 2) required for mode 'count'.");var n=e-1,i=100/n;for(e=[];n--;)e[n]=n*i;e.push(100),t="positions"}return"positions"===t?e.map(function(t){return E.fromStepping(r?E.getStep(t):t)}):"values"===t?r?e.map(function(t){return E.fromStepping(E.getStep(E.toStepping(t)))}):e:void 0}(n,t.values||!1,t.stepped||!1),s=(m=i,g=n,v=a,b={},e=E.xVal[0],r=E.xVal[E.xVal.length-1],x=S=!1,w=0,(v=v.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==e&&(v.unshift(e),S=!0),v[v.length-1]!==r&&(v.push(r),x=!0),v.forEach(function(t,e){var r,n,i,o,a,s,l,u,c,p,f=t,d=v[e+1],h="steps"===g;if(h&&(r=E.xNumSteps[e]),r||(r=d-f),!1!==f&&void 0!==d)for(r=Math.max(r,1e-7),n=f;n<=d;n=(n+r).toFixed(7)/1){for(u=(a=(o=E.toStepping(n))-w)/m,p=a/(c=Math.round(u)),i=1;i<=c;i+=1)b[(s=w+i*p).toFixed(5)]=[E.fromStepping(s),0];l=-1<v.indexOf(n)?k:h?P:U,!e&&S&&(l=0),n===d&&x||(b[o.toFixed(5)]=[n,l]),w=o}}),b),l=t.format||{to:Math.round};return c=y.appendChild(F(s,o,l))}function R(){var t=l.getBoundingClientRect(),e="offset"+["Width","Height"][f.ort];return 0===f.ort?t.width||l[e]:t.height||l[e]}function B(n,i,o,a){var e=function(t){return!!(t=function(t,e,r){var n,i,o=0===t.type.indexOf("touch"),a=0===t.type.indexOf("mouse"),s=0===t.type.indexOf("pointer");0===t.type.indexOf("MSPointer")&&(s=!0);if(o){var l=function(t){return t.target===r||r.contains(t.target)};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,l);if(1<u.length)return!1;n=u[0].pageX,i=u[0].pageY}else{var c=Array.prototype.find.call(t.changedTouches,l);if(!c)return!1;n=c.pageX,i=c.pageY}}e=e||vt(x),(a||s)&&(n=t.clientX+e.x,i=t.clientY+e.y);return t.pageOffset=e,t.points=[n,i],t.cursor=a||s,t}(t,a.pageOffset,a.target||i))&&(!(L()&&!a.doNotReject)&&(e=y,r=f.cssClasses.tap,!((e.classList?e.classList.contains(r):new RegExp("\\b"+r+"\\b").test(e.className))&&!a.doNotReject)&&(!(n===d.start&&void 0!==t.buttons&&1<t.buttons)&&((!a.hover||!t.buttons)&&(h||t.preventDefault(),t.calcPoint=t.points[f.ort],void o(t,a))))));var e,r},r=[];return n.split(" ").forEach(function(t){i.addEventListener(t,e,!!h&&{passive:!0}),r.push([t,e])}),r}function q(t){var e,r,n,i,o,a,s=100*(t-(e=l,r=f.ort,n=e.getBoundingClientRect(),i=e.ownerDocument,o=i.documentElement,a=vt(i),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(a.x=0),r?n.top+a.y-o.clientTop:n.left+a.x-o.clientLeft))/R();return s=dt(s),f.dir?100-s:s}function X(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&_(t,e)}function Y(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return _(t,e);var r=(f.dir?-1:1)*(t.calcPoint-e.startCalcPoint);Z(0<r,100*r/e.baseSize,e.locations,e.handleNumbers)}function _(t,e){e.handle&&(gt(e.handle,f.cssClasses.active),b-=1),e.listeners.forEach(function(t){w.removeEventListener(t[0],t[1])}),0===b&&(gt(y,f.cssClasses.drag),et(),t.cursor&&(C.style.cursor="",C.removeEventListener("selectstart",pt))),e.handleNumbers.forEach(function(t){J("change",t),J("set",t),J("end",t)})}function I(t,e){if(e.handleNumbers.some(z))return!1;var r;1===e.handleNumbers.length&&(r=u[e.handleNumbers[0]].children[0],b+=1,mt(r,f.cssClasses.active));t.stopPropagation();var n=[],i=B(d.move,w,Y,{target:t.target,handle:r,listeners:n,startCalcPoint:t.calcPoint,baseSize:R(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:g.slice()}),o=B(d.end,w,_,{target:t.target,handle:r,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers}),a=B("mouseout",w,X,{target:t.target,handle:r,listeners:n,doNotReject:!0,handleNumbers:e.handleNumbers});n.push.apply(n,i.concat(o,a)),t.cursor&&(C.style.cursor=getComputedStyle(t.target).cursor,1<u.length&&mt(y,f.cssClasses.drag),C.addEventListener("selectstart",pt,!1)),e.handleNumbers.forEach(function(t){J("start",t)})}function n(t){t.stopPropagation();var n,i,o,e=q(t.calcPoint),r=(n=e,o=!(i=100),u.forEach(function(t,e){if(!z(e)){var r=Math.abs(g[e]-n);(r<i||100===r&&100===i)&&(o=e,i=r)}}),o);if(!1===r)return!1;f.events.snap||ft(y,f.cssClasses.tap,f.animationDuration),rt(r,e,!0,!0),et(),J("slide",r,!0),J("update",r,!0),J("change",r,!0),J("set",r,!0),f.events.snap&&I(t,{handleNumbers:[r]})}function W(t){var e=q(t.calcPoint),r=E.getStep(e),n=E.fromStepping(r);Object.keys(S).forEach(function(t){"hover"===t.split(".")[0]&&S[t].forEach(function(t){t.call(s,n)})})}function $(t,e){S[t]=S[t]||[],S[t].push(e),"update"===t.split(".")[0]&&u.forEach(function(t,e){J("update",e)})}function G(t){var n=t&&t.split(".")[0],i=n&&t.substring(n.length);Object.keys(S).forEach(function(t){var e=t.split(".")[0],r=t.substring(e.length);n&&n!==e||i&&i!==r||delete S[t]})}function J(r,n,i){Object.keys(S).forEach(function(t){var e=t.split(".")[0];r===e&&S[t].forEach(function(t){t.call(s,m.map(f.format.to),n,m.slice(),i||!1,g.slice())})})}function K(t,e,r,n,i,o){return 1<u.length&&!f.events.unconstrained&&(n&&0<e&&(r=Math.max(r,t[e-1]+f.margin)),i&&e<u.length-1&&(r=Math.min(r,t[e+1]-f.margin))),1<u.length&&f.limit&&(n&&0<e&&(r=Math.min(r,t[e-1]+f.limit)),i&&e<u.length-1&&(r=Math.max(r,t[e+1]-f.limit))),f.padding&&(0===e&&(r=Math.max(r,f.padding[0])),e===u.length-1&&(r=Math.min(r,100-f.padding[1]))),!((r=dt(r=E.getStep(r)))===t[e]&&!o)&&r}function Q(t,e){var r=f.ort;return(r?e:t)+", "+(r?t:e)}function Z(t,n,r,e){var i=r.slice(),o=[!t,t],a=[t,!t];e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){var r=K(i,t,i[t]+n,o[e],a[e],!1);!1===r?n=0:(n=r-i[t],i[t]=r)}):o=a=[!0];var s=!1;e.forEach(function(t,e){s=rt(t,r[t]+n,o[e],a[e])||s}),s&&e.forEach(function(t){J("update",t),J("slide",t)})}function tt(t,e){return f.dir?100-t-e:t}function et(){v.forEach(function(t){var e=50<g[t]?-1:1,r=3+(u.length+e*t);u[t].style.zIndex=r})}function rt(t,e,r,n){return!1!==(e=K(g,t,e,r,n,!1))&&(function(t,e){g[t]=e,m[t]=E.fromStepping(e);var r="translate("+Q(tt(e,0)-A+"%","0")+")";u[t].style[f.transformRule]=r,nt(t),nt(t+1)}(t,e),!0)}function nt(t){if(a[t]){var e=0,r=100;0!==t&&(e=g[t-1]),t!==a.length-1&&(r=g[t]);var n=r-e,i="translate("+Q(tt(e,n)+"%","0")+")",o="scale("+Q(n/100,"1")+")";a[t].style[f.transformRule]=i+" "+o}}function it(t,e){return null===t||!1===t||void 0===t?g[e]:("number"==typeof t&&(t=String(t)),t=f.format.from(t),!1===(t=E.toStepping(t))||isNaN(t)?g[e]:t)}function ot(t,e){var r=ht(t),n=void 0===g[0];e=void 0===e||!!e,f.animate&&!n&&ft(y,f.cssClasses.tap,f.animationDuration),v.forEach(function(t){rt(t,it(r[t],t),!0,!1)}),v.forEach(function(t){rt(t,g[t],!0,!0)}),et(),v.forEach(function(t){J("update",t),null!==r[t]&&e&&J("set",t)})}function at(t,e,r){if(!(0<=(t=Number(t))&&t<v.length))throw new Error("noUiSlider ("+ut+"): invalid handle number, got: "+t);rt(t,it(e,t),!0,!0),J("update",t),r&&J("set",t)}function st(){var t=m.map(f.format.to);return 1===t.length?t[0]:t}function lt(t){var e=g[t],r=E.getNearbySteps(e),n=m[t],i=r.thisStep.step,o=null;if(f.snap)return[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null];!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),o=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?i=null:0===e&&(o=null);var a=E.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(a))),null!==o&&!1!==o&&(o=Number(o.toFixed(a))),[o,i]}return mt(e=y,f.cssClasses.target),0===f.dir?mt(e,f.cssClasses.ltr):mt(e,f.cssClasses.rtl),0===f.ort?mt(e,f.cssClasses.horizontal):mt(e,f.cssClasses.vertical),l=V(e,f.cssClasses.base),function(t,e){var r=V(e,f.cssClasses.connects);u=[],(a=[]).push(O(r,t[0]));for(var n=0;n<f.handles;n++)u.push(M(e,n)),v[n]=n,a.push(O(r,t[n+1]))}(f.connect,l),(p=f.events).fixed||u.forEach(function(t,e){B(d.start,t.children[0],I,{handleNumbers:[e]})}),p.tap&&B(d.start,l,n,{}),p.hover&&B(d.move,l,W,{hover:!0}),p.drag&&a.forEach(function(t,e){if(!1!==t&&0!==e&&e!==a.length-1){var r=u[e-1],n=u[e],i=[t];mt(t,f.cssClasses.draggable),p.fixed&&(i.push(r.children[0]),i.push(n.children[0])),i.forEach(function(t){B(d.start,t,I,{handles:[r,n],handleNumbers:[e-1,e]})})}}),ot(f.start),f.pips&&T(f.pips),f.tooltips&&H(),$("update",function(t,e,a,r,s){v.forEach(function(t){var e=u[t],r=K(g,t,0,!0,!0,!0),n=K(g,t,100,!0,!0,!0),i=s[t],o=f.ariaFormat.to(a[t]);r=E.fromStepping(r).toFixed(1),n=E.fromStepping(n).toFixed(1),i=E.fromStepping(i).toFixed(1),e.children[0].setAttribute("aria-valuemin",r),e.children[0].setAttribute("aria-valuemax",n),e.children[0].setAttribute("aria-valuenow",i),e.children[0].setAttribute("aria-valuetext",o)})}),s={destroy:function(){for(var t in f.cssClasses)f.cssClasses.hasOwnProperty(t)&&gt(y,f.cssClasses[t]);for(;y.firstChild;)y.removeChild(y.firstChild);delete y.noUiSlider},steps:function(){return v.map(lt)},on:$,off:G,get:st,set:ot,setHandle:at,reset:function(t){ot(f.start,t)},__moveHandles:function(t,e,r){Z(t,e,g,r)},options:o,updateOptions:function(e,t){var r=st(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];n.forEach(function(t){void 0!==e[t]&&(o[t]=e[t])});var i=bt(o);n.forEach(function(t){void 0!==e[t]&&(f[t]=i[t])}),E=i.spectrum,f.margin=i.margin,f.limit=i.limit,f.padding=i.padding,f.pips?T(f.pips):D(),f.tooltips?H():j(),g=[],ot(e.start||r,t)},target:y,removePips:D,removeTooltips:j,pips:T}}return{__spectrum:l,version:ut,create:function(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider ("+ut+"): create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider ("+ut+"): Slider was already initialized.");var r=z(t,bt(e),e);return t.noUiSlider=r}}});
/* Polyfill service v3.16.0
 * For detailed credits and licence information see https://github.com/financial-times/polyfill-service.
 *
 * UA detected: ie/11.0.0
 * Features requested: default
 *
 * - Array.from, License: CC0 (required by "default")
 * - Array.of, License: MIT (required by "default")
 * - Array.prototype.fill, License: CC0 (required by "default")
 * - Event, License: CC0 (required by "default", "CustomEvent", "Promise")
 * - CustomEvent, License: CC0 (required by "default")
 * - _DOMTokenList, License: CC0 (required by "DOMTokenList", "default")
 * - DOMTokenList, License: CC0 (required by "default")
 * - _mutation, License: CC0 (required by "Element.prototype.after", "default", "Element.prototype.append", "Element.prototype.before", "Element.prototype.prepend", "Element.prototype.remove", "Element.prototype.replaceWith")
 * - Element.prototype.after, License: CC0 (required by "default")
 * - Element.prototype.append, License: CC0 (required by "default")
 * - Element.prototype.before, License: CC0 (required by "default")
 * - Element.prototype.matches, License: CC0 (required by "default", "Element.prototype.closest")
 * - Element.prototype.closest, License: CC0 (required by "default")
 * - Element.prototype.prepend, License: CC0 (required by "default")
 * - Element.prototype.remove, License: CC0 (required by "default")
 * - Element.prototype.replaceWith, License: CC0 (required by "default")
 * - Symbol, License: MIT (required by "Map", "default", "Set", "Symbol.iterator", "Symbol.species")
 * - Symbol.iterator, License: MIT (required by "Map", "default", "Set")
 * - Symbol.species, License: MIT (required by "Map", "default", "Set")
 * - Number.isNaN, License: MIT (required by "default", "Map", "Set")
 * - Map, License: CC0 (required by "default")
 * - Node.prototype.contains, License: CC0 (required by "default")
 * - Object.assign, License: CC0 (required by "default")
 * - Promise, License: MIT (required by "default")
 * - Set, License: CC0 (required by "default")
 * - String.prototype.endsWith, License: CC0 (required by "default")
 * - String.prototype.includes, License: CC0 (required by "default")
 * - String.prototype.startsWith, License: CC0 (required by "default")
 * - URL, License: CC0 (required by "default") */



// Element.prototype.matches
Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function matches(selector) {

	var element = this;
	var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
	var index = 0;

	while (elements[index] && elements[index] !== element) {
		++index;
	}

	return !!elements[index];
};

// Element.prototype.closest
Element.prototype.closest = function closest(selector) {
	var node = this;

	while (node) {
		if (node.matches(selector)) return node;
		else node = node.parentElement;
	}

	return null;
};



/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||function(a){if("Element"in a){a=a.Element.prototype;var h=Object,l=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},n=Array.prototype.indexOf||function(c){for(var b=0,k=this.length;b<k;b++)if(b in this&&this[b]===c)return b;return-1},f=function(c,b){this.name=c;this.code=DOMException[c];this.message=b},e=function(c,
b){if(""===b)throw new f("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(b))throw new f("INVALID_CHARACTER_ERR","The token must not contain space characters.");return n.call(c,b)},g=function(c){var b=l.call(c.getAttribute("class")||"");b=b?b.split(/\s+/):[];for(var k=0,e=b.length;k<e;k++)this.push(b[k]);this._updateClassName=function(){c.setAttribute("class",this.toString())}},d=g.prototype=[],m=function(){return new g(this)};f.prototype=Error.prototype;d.item=function(c){return this[c]||
null};d.contains=function(c){return!~e(this,c+"")};d.add=function(){var c=arguments,b=0,k=c.length,d=!1;do{var a=c[b]+"";~e(this,a)&&(this.push(a),d=!0)}while(++b<k);d&&this._updateClassName()};d.remove=function(){var c=arguments,b=0,d=c.length,a=!1,f;do{var g=c[b]+"";for(f=e(this,g);~f;)this.splice(f,1),a=!0,f=e(this,g)}while(++b<d);a&&this._updateClassName()};d.toggle=function(c,b){var a=this.contains(c),d=a?!0!==b&&"remove":!1!==b&&"add";if(d)this[d](c);return!0===b||!1===b?b:!a};d.replace=function(c,
b){var a=e(c+"");~a&&(this.splice(a,1,b),this._updateClassName())};d.toString=function(){return this.join(" ")};if(h.defineProperty){d={get:m,enumerable:!0,configurable:!0};try{h.defineProperty(a,"classList",d)}catch(c){if(void 0===c.number||-2146823252===c.number)d.enumerable=!1,h.defineProperty(a,"classList",d)}}else h.prototype.__defineGetter__&&a.__defineGetter__("classList",m)}}(self),function(){var a=document.createElement("_");a.classList.add("c1","c2");if(!a.classList.contains("c2")){var h=
function(a){var f=DOMTokenList.prototype[a];DOMTokenList.prototype[a]=function(a){var e,d=arguments.length;for(e=0;e<d;e++)a=arguments[e],f.call(this,a)}};h("add");h("remove")}a.classList.toggle("c3",!1);if(a.classList.contains("c3")){var l=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(a,f){return 1 in arguments&&!this.contains(a)===!f?f:l.call(this,a)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(a,f){var e=this.toString().split(" "),
g=e.indexOf(a+"");~g&&(e=e.slice(g),this.remove.apply(this,e),this.add(f),this.add.apply(this,e.slice(1)))});a=null}());



(function () {

  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  window.CustomEvent = CustomEvent;
})();
'use strict';

// polyfill
function polyfill() {
  // aliases
  var w = window;
  var d = document;

  // return if scroll behavior is supported and polyfill is not forced
  if (
    'scrollBehavior' in d.documentElement.style &&
    w.__forceSmoothScrollPolyfill__ !== true
  ) {
    return;
  }

  // globals
  var Element = w.HTMLElement || w.Element;
  var SCROLL_TIME = 468;

  // object gathering original scroll methods
  var original = {
    scroll: w.scroll || w.scrollTo,
    scrollBy: w.scrollBy,
    elementScroll: Element.prototype.scroll || scrollElement,
    scrollIntoView: Element.prototype.scrollIntoView
  };

  // define timing method
  var now =
    w.performance && w.performance.now
      ? w.performance.now.bind(w.performance)
      : Date.now;

  /**
   * indicates if a the current browser is made by Microsoft
   * @method isMicrosoftBrowser
   * @param {String} userAgent
   * @returns {Boolean}
   */
  function isMicrosoftBrowser(userAgent) {
    var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

    return new RegExp(userAgentPatterns.join('|')).test(userAgent);
  }

  /*
   * IE has rounding bug rounding down clientHeight and clientWidth and
   * rounding up scrollHeight and scrollWidth causing false positives
   * on hasScrollableSpace
   */
  var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

  /**
   * changes scroll position inside an element
   * @method scrollElement
   * @param {Number} x
   * @param {Number} y
   * @returns {undefined}
   */
  function scrollElement(x, y) {
    this.scrollLeft = x;
    this.scrollTop = y;
  }

  /**
   * returns result of applying ease math function to a number
   * @method ease
   * @param {Number} k
   * @returns {Number}
   */
  function ease(k) {
    return 0.5 * (1 - Math.cos(Math.PI * k));
  }

  /**
   * indicates if a smooth behavior should be applied
   * @method shouldBailOut
   * @param {Number|Object} firstArg
   * @returns {Boolean}
   */
  function shouldBailOut(firstArg) {
    if (
      firstArg === null ||
      typeof firstArg !== 'object' ||
      firstArg.behavior === undefined ||
      firstArg.behavior === 'auto' ||
      firstArg.behavior === 'instant'
    ) {
      // first argument is not an object/null
      // or behavior is auto, instant or undefined
      return true;
    }

    if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
      // first argument is an object and behavior is smooth
      return false;
    }

    // throw error when behavior is not supported
    throw new TypeError(
      'behavior member of ScrollOptions ' +
        firstArg.behavior +
        ' is not a valid value for enumeration ScrollBehavior.'
    );
  }

  /**
   * indicates if an element has scrollable space in the provided axis
   * @method hasScrollableSpace
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */
  function hasScrollableSpace(el, axis) {
    if (axis === 'Y') {
      return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
    }

    if (axis === 'X') {
      return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
    }
  }

  /**
   * indicates if an element has a scrollable overflow property in the axis
   * @method canOverflow
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */
  function canOverflow(el, axis) {
    var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

    return overflowValue === 'auto' || overflowValue === 'scroll';
  }

  /**
   * indicates if an element can be scrolled in either axis
   * @method isScrollable
   * @param {Node} el
   * @param {String} axis
   * @returns {Boolean}
   */
  function isScrollable(el) {
    var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
    var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

    return isScrollableY || isScrollableX;
  }

  /**
   * finds scrollable parent of an element
   * @method findScrollableParent
   * @param {Node} el
   * @returns {Node} el
   */
  function findScrollableParent(el) {
    while (el !== d.body && isScrollable(el) === false) {
      el = el.parentNode || el.host;
    }

    return el;
  }

  /**
   * self invoked function that, given a context, steps through scrolling
   * @method step
   * @param {Object} context
   * @returns {undefined}
   */
  function step(context) {
    var time = now();
    var value;
    var currentX;
    var currentY;
    var elapsed = (time - context.startTime) / SCROLL_TIME;

    // avoid elapsed times higher than one
    elapsed = elapsed > 1 ? 1 : elapsed;

    // apply easing to elapsed time
    value = ease(elapsed);

    currentX = context.startX + (context.x - context.startX) * value;
    currentY = context.startY + (context.y - context.startY) * value;

    context.method.call(context.scrollable, currentX, currentY);

    // scroll more if we have not reached our destination
    if (currentX !== context.x || currentY !== context.y) {
      w.requestAnimationFrame(step.bind(w, context));
    }
  }

  /**
   * scrolls window or element with a smooth behavior
   * @method smoothScroll
   * @param {Object|Node} el
   * @param {Number} x
   * @param {Number} y
   * @returns {undefined}
   */
  function smoothScroll(el, x, y) {
    var scrollable;
    var startX;
    var startY;
    var method;
    var startTime = now();

    // define scroll context
    if (el === d.body) {
      scrollable = w;
      startX = w.scrollX || w.pageXOffset;
      startY = w.scrollY || w.pageYOffset;
      method = original.scroll;
    } else {
      scrollable = el;
      startX = el.scrollLeft;
      startY = el.scrollTop;
      method = scrollElement;
    }

    // scroll looping over a frame
    step({
      scrollable: scrollable,
      method: method,
      startTime: startTime,
      startX: startX,
      startY: startY,
      x: x,
      y: y
    });
  }

  // ORIGINAL METHODS OVERRIDES
  // w.scroll and w.scrollTo
  w.scroll = w.scrollTo = function() {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      original.scroll.call(
        w,
        arguments[0].left !== undefined
          ? arguments[0].left
          : typeof arguments[0] !== 'object'
            ? arguments[0]
            : w.scrollX || w.pageXOffset,
        // use top prop, second argument if present or fallback to scrollY
        arguments[0].top !== undefined
          ? arguments[0].top
          : arguments[1] !== undefined
            ? arguments[1]
            : w.scrollY || w.pageYOffset
      );

      return;
    }

    // LET THE SMOOTHNESS BEGIN!
    smoothScroll.call(
      w,
      d.body,
      arguments[0].left !== undefined
        ? ~~arguments[0].left
        : w.scrollX || w.pageXOffset,
      arguments[0].top !== undefined
        ? ~~arguments[0].top
        : w.scrollY || w.pageYOffset
    );
  };

  // w.scrollBy
  w.scrollBy = function() {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0])) {
      original.scrollBy.call(
        w,
        arguments[0].left !== undefined
          ? arguments[0].left
          : typeof arguments[0] !== 'object' ? arguments[0] : 0,
        arguments[0].top !== undefined
          ? arguments[0].top
          : arguments[1] !== undefined ? arguments[1] : 0
      );

      return;
    }

    // LET THE SMOOTHNESS BEGIN!
    smoothScroll.call(
      w,
      d.body,
      ~~arguments[0].left + (w.scrollX || w.pageXOffset),
      ~~arguments[0].top + (w.scrollY || w.pageYOffset)
    );
  };

  // Element.prototype.scroll and Element.prototype.scrollTo
  Element.prototype.scroll = Element.prototype.scrollTo = function() {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      // if one number is passed, throw error to match Firefox implementation
      if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
        throw new SyntaxError('Value could not be converted');
      }

      original.elementScroll.call(
        this,
        // use left prop, first number argument or fallback to scrollLeft
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
        // use top prop, second argument or fallback to scrollTop
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
      );

      return;
    }

    var left = arguments[0].left;
    var top = arguments[0].top;

    // LET THE SMOOTHNESS BEGIN!
    smoothScroll.call(
      this,
      this,
      typeof left === 'undefined' ? this.scrollLeft : ~~left,
      typeof top === 'undefined' ? this.scrollTop : ~~top
    );
  };

  // Element.prototype.scrollBy
  Element.prototype.scrollBy = function() {
    // avoid action when no arguments are passed
    if (arguments[0] === undefined) {
      return;
    }

    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      original.elementScroll.call(
        this,
        arguments[0].left !== undefined
          ? ~~arguments[0].left + this.scrollLeft
          : ~~arguments[0] + this.scrollLeft,
        arguments[0].top !== undefined
          ? ~~arguments[0].top + this.scrollTop
          : ~~arguments[1] + this.scrollTop
      );

      return;
    }

    this.scroll({
      left: ~~arguments[0].left + this.scrollLeft,
      top: ~~arguments[0].top + this.scrollTop,
      behavior: arguments[0].behavior
    });
  };

  // Element.prototype.scrollIntoView
  Element.prototype.scrollIntoView = function() {
    // avoid smooth behavior if not required
    if (shouldBailOut(arguments[0]) === true) {
      original.scrollIntoView.call(
        this,
        arguments[0] === undefined ? true : arguments[0]
      );

      return;
    }

    // LET THE SMOOTHNESS BEGIN!
    var scrollableParent = findScrollableParent(this);
    var parentRects = scrollableParent.getBoundingClientRect();
    var clientRects = this.getBoundingClientRect();

    if (scrollableParent !== d.body) {
      // reveal element inside parent
      smoothScroll.call(
        this,
        scrollableParent,
        scrollableParent.scrollLeft + clientRects.left - parentRects.left,
        scrollableParent.scrollTop + clientRects.top - parentRects.top
      );

      // reveal parent in viewport unless is fixed
      if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
        w.scrollBy({
          left: parentRects.left,
          top: parentRects.top,
          behavior: 'smooth'
        });
      }
    } else {
      // reveal element in viewport
      w.scrollBy({
        left: clientRects.left,
        top: clientRects.top,
        behavior: 'smooth'
      });
    }
  };
}

if (typeof exports === 'object' && typeof module !== 'undefined') {
  // commonjs
  module.exports = { polyfill: polyfill };
} else {
  // global
  polyfill();
}

/*! UTF-8

© kovrigin
Все права разрешены
красивый дизайн должен иметь красивый код®

https://github.com/htmlpluscss/

*/

var BF = {};

(function(){

	// обработчик анимаций
	BF.cssAnimation = function(a){var b,c,d=document.createElement("cssanimation");switch(a){case'animation':b={"animation":"animationend","OAnimation":"oAnimationEnd","MozAnimation":"animationend","WebkitAnimation":"webkitAnimationEnd"};break;case'transition':b={"transition":"transitionend","OTransition":"oTransitionEnd","MozTransition":"transitionend","WebkitTransition":"webkitTransitionEnd"}}for(c in b)if(d.style[c]!==undefined)return b[c]}

	// Determine if an element is in the visible viewport
	BF.isInViewport = function(element) {
		var rect = element.getBoundingClientRect();
		return (rect.top >= 0 && rect.bottom <= window.innerHeight);
	}

})();
(function(calculator){

	if(!calculator) {

		return;

	}

	window.CALCULATOR = window.CALCULATOR || {};

	var param = calculator.querySelector('.calculator__param'),

		// данные для отправки
		sumHidden = calculator.querySelector('.calculator__param-loan-sum'),
		dateHidden = calculator.querySelector('.calculator__param-loan-time'),

		// слайдер суммы
		sum = calculator.querySelector('.calculator__slider--sum'),
//		sumPlus = calculator.querySelector('.calculator__btn-step--sum-plus'),
//		sumMinus = calculator.querySelector('.calculator__btn-step--sum-minus'),
		sumTextInput = calculator.querySelector(".calculator__input-text--sum"),
		sumSelect = document.createElement('select'),

		// сумма займа ввод
		sumSet = calculator.querySelector('#sum-set'),

		// сумма займа вывод
		sumText = calculator.querySelector('.calculator__sum-text'),

		// сумма возврата вывод
		returnSum = calculator.querySelector('.calculator__sum-return'),


		// слайдер срока
		date = calculator.querySelector('.calculator__slider--date'),
//		datePlus = calculator.querySelector('.calculator__btn-step--date-plus'),
//		dateMinus = calculator.querySelector('.calculator__btn-step--date-minus'),
		dateTextInput = calculator.querySelector('.calculator__input-text--date'),
		dateSelect = document.createElement('select'),

		// срок займа ввод
		dateSet = calculator.querySelector('#date-set'),

		// дата возврата вывод
		returnDateText = calculator.querySelector('.calculator__date-return');

	// select

	sumTextInput.parentNode.appendChild(sumSelect);
	dateTextInput.parentNode.appendChild(dateSelect);

	sumSelect.addEventListener('change', function() {

		CALCULATOR.SUM.value = this.value;

		sum.noUiSlider.set(this.value);

	});

	dateSelect.addEventListener('change', function() {

		CALCULATOR.DATE.value = this.value;

		date.noUiSlider.set(this.value);

	});


	// resize

	var resizeTimeout = null;

	window.addEventListener("resize", function(){

		if (!resizeTimeout) {

			resizeTimeout = setTimeout(function() {

				resizeTimeout = null;
				CALCULATOR.result();

			}, 1000);

		}

	});

	// default

	CALCULATOR.CountUp = {
		useEasing: false,
		useGrouping: true,
		separator: ' ',
		decimal: ''
	}

	CALCULATOR.result = function(){

		CALCULATOR.SUM.value = parseInt(CALCULATOR.SUM.value, 10);
		CALCULATOR.DATE.value = parseInt(CALCULATOR.DATE.value, 10);

		sumHidden.value = CALCULATOR.SUM.value;
		dateHidden.value = CALCULATOR.DATE.value;

		// инпуты
		sumSet.value = sepNumber(CALCULATOR.SUM.value);
		dateSet.value = CALCULATOR.DATE.value;

		sumTextInput.textContent = sepNumber(CALCULATOR.SUM.value);
		dateTextInput.textContent = CALCULATOR.DATE.value;

		// select
		sumSelect.value = CALCULATOR.SUM.value;
		dateSelect.value = CALCULATOR.DATE.value;

		// максимальная сумма
		calculator.classList.toggle('calculator--max-sum', CALCULATOR.SUM.value > CALCULATOR.param.maxSumFirstLoad);

		// расчет переплаты
		CALCULATOR.diff = CALCULATOR.STAVKA * CALCULATOR.SUM.value * CALCULATOR.DATE.value / 100;

		CALCULATOR.diff = parseInt(CALCULATOR.diff, 10);

		// вывели К возврату

		if(CALCULATOR.returnSumCountUp){

			CALCULATOR.returnSumCountUp.update(CALCULATOR.SUM.value + CALCULATOR.diff);

		}
		else {

			returnSum.textContent = sepNumber(CALCULATOR.SUM.value + CALCULATOR.diff);

			CALCULATOR.returnSumCountUp = new CountUp(returnSum, 0, 0, 0, 0.3, CALCULATOR.CountUp);

			if (CALCULATOR.returnSumCountUp.error) {

				returnSum.textContent = sepNumber(CALCULATOR.SUM.value + CALCULATOR.diff);

			}
			else {

				CALCULATOR.returnSumCountUp.start();

			}

		}

		// вывели Вы получите

		if(CALCULATOR.sumTextCountUp){

			CALCULATOR.sumTextCountUp.update(CALCULATOR.SUM.value);

		}
		else{

			sumText.textContent = sepNumber(CALCULATOR.SUM.value);

			CALCULATOR.sumTextCountUp = new CountUp(sumText, 0, 0, 0, 0.3, CALCULATOR.CountUp);

			if (CALCULATOR.sumTextCountUp.error) {

				sumText.textContent = sepNumber(CALCULATOR.SUM.value);

			}
			else {

				CALCULATOR.sumTextCountUp.start();

			}

		}

		dateSet.parentNode.setAttribute('data-suf',declension(CALCULATOR.DATE.value,CALCULATOR.days));


		// вывели дату возврата
		var refundDate = new Date();
		refundDate.setDate(refundDate.getDate() + CALCULATOR.DATE.value);

		returnDateText.innerHTML = '<b>' + ('0' + refundDate.getDate()).slice(-2) + '</b> ' + CALCULATOR.months[refundDate.getMonth()] + ', <b>' + refundDate.getFullYear() + '</b>';


	};

	// инициализация слайдеров

	CALCULATOR.updateSlider = function(){

		// % ставка
		CALCULATOR.STAVKA = CALCULATOR.param.stavka;

		// сумма
		CALCULATOR.SUM = {
			min : CALCULATOR.param.sumMin,
			max : CALCULATOR.param.sumMax,
			step : CALCULATOR.param.sumStep,
			value : CALCULATOR.param.sumValue
		};

		// дата
		CALCULATOR.DATE = {
			min : CALCULATOR.param.dateMin,
			max : CALCULATOR.param.dateMax,
			step : CALCULATOR.param.dateStep,
			value : CALCULATOR.param.dateValue
		};

		if(sum.noUiSlider) {

			sum.noUiSlider.updateOptions({
				start: CALCULATOR.SUM.value,
				range: {
					'min': CALCULATOR.SUM.min,
					'max': CALCULATOR.SUM.max
				},
				step: CALCULATOR.SUM.step
			});

			date.noUiSlider.updateOptions({
				start: CALCULATOR.DATE.value,
				range: {
					'min': CALCULATOR.DATE.min,
					'max': CALCULATOR.DATE.max
				},
				step: CALCULATOR.DATE.step
			});

		}

		calculator.querySelector('.calculator__min-sum').textContent = sepNumber(CALCULATOR.SUM.min);
		calculator.querySelector('.calculator__max-sum').textContent = sepNumber(CALCULATOR.SUM.max);
		calculator.querySelector('.calculator__min-date').textContent = CALCULATOR.DATE.min;
		calculator.querySelector('.calculator__max-date').textContent = CALCULATOR.DATE.max;

		// select

		var option = '<option disabled="disabled">' + CALCULATOR.selectLabel[0]+ '</option>';
		for (var i = CALCULATOR.SUM.min; i <= CALCULATOR.SUM.max; i += CALCULATOR.SUM.step){

			option += '<option value="'+ i +'">'+ sepNumber(i) +'</option>';

		}

		sumSelect.innerHTML = option;
		sumSelect.value = CALCULATOR.SUM.value;

		option = '<option disabled="disabled">' + CALCULATOR.selectLabel[1] + '</option>';

		for (var i = CALCULATOR.DATE.min; i <= CALCULATOR.DATE.max; i += CALCULATOR.DATE.step){

			option += '<option value="' + i + '">' + i + '</option>';

		}

		dateSelect.innerHTML = option;
		dateSelect.value = CALCULATOR.DATE.value;

	};

	CALCULATOR.updateSlider();

	noUiSlider.create(sum, {
		start: CALCULATOR.SUM.value,
		connect: [true, false],
		range: {
			'min': CALCULATOR.SUM.min,
			'max': CALCULATOR.SUM.max
		},
		step: CALCULATOR.SUM.step
	});

	sum.noUiSlider.on('update', function(e){
		CALCULATOR.SUM.value = e[0];
		CALCULATOR.result();
	});

	sum.noUiSlider.on('slide', function(e){
		CALCULATOR.SUM.value = e[0];
		CALCULATOR.result();
	});

	sum.noUiSlider.on('change', function(e){
		CALCULATOR.SUM.value = e[0];
		CALCULATOR.result();
	});

	noUiSlider.create(date, {
		start: CALCULATOR.DATE.value,
		connect: [true, false],
		range: {
			'min': CALCULATOR.DATE.min,
			'max': CALCULATOR.DATE.max
		},
		step: CALCULATOR.DATE.step
	});

	date.noUiSlider.on('update', function(e){
		CALCULATOR.DATE.value = e[0];
		CALCULATOR.result();
	});

	date.noUiSlider.on('slide', function(e){
		CALCULATOR.DATE.value = e[0];
		CALCULATOR.result();
	});

	date.noUiSlider.on('change', function(e){
		CALCULATOR.DATE.value = e[0];
		CALCULATOR.result();
	});


	// события в инпутах

	function inputChange(input){

		if(input == sum) {

			var v = sumSet.value;

			if (v.match(/[^0-9]/g))
				v = v.replace(/[^0-9]/g, '');

			if(v > CALCULATOR.SUM.max)
				v = CALCULATOR.SUM.max;

			if(v < CALCULATOR.SUM.min)
				v = CALCULATOR.SUM.min;

			sum.noUiSlider.set(v);

		}
		else {

			var v = dateSet.value;

			if (v.match(/[^0-9]/g))
				v = v.replace(/[^0-9]/g, '');

			if(v > CALCULATOR.DATE.max)
				v = CALCULATOR.DATE.max;

			if(v < CALCULATOR.DATE.min)
				v = CALCULATOR.DATE.min;

			date.noUiSlider.set(v);

		}

	}

	// фокус суммы в инпуте
	sumSet.addEventListener('focus', function() {

		this.value = CALCULATOR.SUM.value;

		setTimeout(function(){

			sumSet.setSelectionRange(0,9);

		},100)

	});

	// фокус даты в инпуте
	dateSet.addEventListener('focus', function() {

		setTimeout(function(){

			dateSet.setSelectionRange(0,9);

		},100)

	});

	// ввод суммы и даты в инпуте
	sumSet.addEventListener('blur', function() {

		inputChange(sum);

	});

	sumSet.addEventListener('keydown', function(e) {

		if (e.keyCode == 13) {

			this.blur();

		}

	});

	dateSet.addEventListener('blur', function() {

		inputChange(date);

	});

	dateSet.addEventListener('keydown', function(e) {

		if (e.keyCode == 13) {

			this.blur();

		}

	});

	// +/-
	sumSet.addEventListener('keydown',function(e){

		if (e.key == "+") {

			e.preventDefault();
			btnPlusMinus("sum", 1);

		}
		if (e.key == "-") {

			e.preventDefault();
			btnPlusMinus("sum", -1);

		}

	});

	dateSet.addEventListener('keydown',function(e) {

		if (e.key == "+") {

			e.preventDefault();
			btnPlusMinus("date", 1);

		}
		if (e.key == "-") {

			e.preventDefault();
			btnPlusMinus("date", -1);

		}

	});

	// кнопки +/-
/*
	function btnPlusMinus(type,step){

		if(type=="sum"){
			CALCULATOR.SUM.value += CALCULATOR.SUM.step * step;
			sum.noUiSlider.set(CALCULATOR.SUM.value);
		}

		else if(type=="date"){
			CALCULATOR.DATE.value += CALCULATOR.DATE.step * step;
			date.noUiSlider.set(CALCULATOR.DATE.value);
		}

	}

	sumPlus.addEventListener('click',function(){
		btnPlusMinus("sum", 1);
	});
	sumMinus.addEventListener('click',function(){
		btnPlusMinus("sum", -1);
	});
	datePlus.addEventListener('click',function(){
		btnPlusMinus("date", 1);
	});
	dateMinus.addEventListener('click',function(){
		btnPlusMinus("date", -1);
	});

*/

	// отделяем тысячи
	function sepNumber(str){
		str = parseInt(str, 10).toString();
		return str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	}
	// склеиваем тысячи
	function strToNumber(n){
		return parseInt(n.replace(/\s+/g,''), 10);
	}
	// склонение
	function declension(num, expressions) {
		var r;
		var count = num % 100;
		if (count > 4 && count < 21)
			r = expressions['2'];
		else {
			count = count % 10;
			if (count == 1)
				r = expressions['0'];
			else if (count > 1 && count < 5)
				r = expressions['1'];
			else
				r = expressions['2'];
		}
		return r;
	}

})(document.querySelector('.calculator'));
(function(faq){

	if(faq) {

		var nav = faq.querySelectorAll('.faq__nav-link'),
			block = faq.querySelectorAll('.faq__block');

		Array.prototype.forEach.call(nav, function(link){

			link.addEventListener('click', function (e) {

				e.preventDefault();

				Array.prototype.forEach.call(nav, function(el){

					el.classList.toggle('faq__nav-link--active', el === link);

				});

				var href = link.getAttribute('href').slice(1);

				Array.prototype.forEach.call(block, function(el){

					el.classList.toggle('visuallyhidden', el.getAttribute('id') !== href);

				});

			});

		});

		if (window.innerWidth < 768) {

			Array.prototype.forEach.call(faq.querySelectorAll('.faq__visuallyhidden'), function(el){

				el.classList.remove('visuallyhidden');

			});

		}

	}

})(document.querySelector('.faq'));


(function(){

// input-box

	var inputLabel = document.querySelectorAll('.input-box__input');

	function focusInputLabel(el){

		el.parentNode.classList.toggle('input-box--no-empty', el.value);

	}

	if(inputLabel.length) {

		Array.prototype.forEach.call(inputLabel, function(el){

			el.addEventListener('focus', function() {

				focusInputLabel(el);

			});

			el.addEventListener('keyup', function() {

				focusInputLabel(el);

			});

			el.addEventListener('blur', function() {

				focusInputLabel(el);

			});

			focusInputLabel(el);

			setTimeout(function(){

				focusInputLabel(el);

			},1000);

		});

	}

})();
BF.mask = function(elems){

	if(!elems.length) {

		return;

	}

	if (typeof Inputmask === 'undefined') {

		var script = document.createElement('script');

		script.type = 'text/javascript';
		script.async = true;
		script.src ='/local/templates/blizfinans/js/inputmask.min.js';

		script.onload = function () {

			Inputmask.extendDefaults({
				oncomplete: function () {
					/*console.log('complete');*/
					this.classList.add('inputmask--complete');
				},
				onincomplete: function () {
					/*console.log('incomplete');*/
					this.classList.remove('inputmask--complete');
				},
				oncleared: function () {
					/*console.log('cleared');*/
				},
				onKeyValidation: function(key, result){
					/*console.log(key, result);*/
				}
			});

			setMask();

		};

		setTimeout(function(){

			document.head.appendChild(script);

		}, 3000);

	} else {

		setMask();

	}

	function setMask() {

		Array.prototype.forEach.call(elems, function(el){

			if(el.classList.contains('inputmask--phone')) {

				var maskInput = new Inputmask({
					mask: "+7 999 999 99 99",
					showMaskOnHover: false,
					placeholder: "+7 ___ ___ __ __"
				});

			}
			else if(el.classList.contains('inputmask--date')) {

				var maskInput = new Inputmask({
					alias: "datetime",
					showMaskOnHover: false,
					inputFormat: "dd.mm.yyyy",
					placeholder: "дд.мм.гггг"
				});

			}
			else if(el.classList.contains('inputmask--currency')) {

				var maskInput = new Inputmask({
					alias: "integer",
					suffix: ' рублей',
					groupSize: 3,
					autoGroup: true,
					groupSeparator: ' ',
					rightAlign: false
				});

			}
			else {

				var maskInput = new Inputmask(el.getAttribute('data-mask'));

			}

			maskInput.mask(el);

		});

	}

};

BF.mask(document.querySelectorAll('.inputmask'));

(function(btns){

	Array.prototype.forEach.call(btns, function(btn){

		btn.addEventListener('click', function () {

			if(BF.OpenMenu) {

				document.body.classList.remove('menu-show');

				window.scrollTo(0,BF.windowScrollOld);

				BF.OpenMenu = false;

			}
			else {

				BF.OpenMenu = true;

				// записываем значение скролла страницы
				BF.windowScrollOld = window.pageYOffset;
				window.scrollTo(0,0);

				document.body.classList.add('menu-show');

			}

		});

	});

})(document.querySelectorAll('.btn-menu-toggle'));

(function(){

	var modal = document.querySelector('.modal'),
		items = modal.querySelectorAll('.modal__item'),
		btns = document.querySelectorAll('[data-modal]'),
		wrapper = document.querySelector('.wrapper'),
		windowScroll = 0;

	modal.addEventListener('click', function (e) {

		if(e.target.classList.contains('modal__box') || e.target.classList.contains('modal__close')){

			BF.hideModal();

		}

	});

	BF.hideModal = function() {

		modal.classList.add('visuallyhidden');

		document.body.classList.remove('modal-show');
		wrapper.style.top = 0;
		window.scrollTo(0,windowScroll);

		BF.activeModal = false;

		setTimeout(function(){

			document.body.classList.remove('scroll-behavior-off');

		});

		// clear video
		document.getElementById('modal-video').innerHTML = '';

	};

	BF.modalShow = function (selector, text) {

		document.body.classList.toggle('menu-open', selector == 'menu');

		document.body.classList.add('scroll-behavior-off');
		document.body.classList.remove('menu-show');

		if(!BF.activeModal){

			windowScroll = window.pageYOffset;

			wrapper.style.top = -windowScroll + 'px';

		}

		BF.activeModal = modal.querySelector('.modal__item--' + selector);

		if(selector == 'ok'){

			BF.activeModal.querySelector('.modal-form__ok').textContent = text;

		}

		Array.prototype.forEach.call(items, function(el){

			el.classList.toggle('visuallyhidden', el !== BF.activeModal);

		});

		modal.classList.remove('visuallyhidden');

		document.body.classList.add('modal-show');
		window.scrollTo(0,0);

		BF.activeModal.focus();

	};

	Array.prototype.forEach.call(btns, function(el){

		el.addEventListener('click', function(e) {
			e.preventDefault();

			BF.modalShow(this.getAttribute('data-modal'));

		});

	});

	Array.prototype.forEach.call(document.querySelectorAll('.modal a.menu__link'), function(el){

		el.addEventListener('click', function() {

			BF.hideModal();

			setTimeout(function(){

				window.scrollTo(0,document.querySelector(el.getAttribute('href')));

			},100);

		});

	});

})();
BF.swiper = function(swiperContainer){

	Array.prototype.forEach.call(swiperContainer, function(swipe){

		var mySwipe = null,
			resizeTimeout = null,
			windowWidthOLd = null,
			toggleSwipe = null,
			resetSwipe = null,
			swipeNav = document.createElement('div'),
			swipeNext = document.createElement('button'),
			swipePrev = document.createElement('button'),
			items = swipe.querySelectorAll('.swiper-slide'),
			count = items.length,
			faq = swipe.classList.contains('swiper-container--faq'),
			feedback = swipe.classList.contains('swiper-container--feedback');

		swipeNav.className = 'swiper-pagination';
		swipePrev.className = 'swiper-button-prev button';
		swipeNext.className = 'swiper-button-next button';

		swipePrev.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M9.95 14.05L5.046 9.142H16V6.857H5.045L9.95 1.951 8.335.335.67 8l7.665 7.665z"/></svg>';
		swipeNext.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.05 14.05l4.905-4.907H0V6.857h10.955L6.05 1.951 7.665.335 15.33 8l-7.665 7.665z"/></svg>';

		swipe.appendChild(swipeNav);
		swipe.parentNode.appendChild(swipeNext);
		swipe.parentNode.appendChild(swipePrev);

		resetSwipe = function(){

			if(mySwipe) {

				mySwipe.destroy(false,true);
				mySwipe = undefined;

			}

			swipeNav.classList.add('hide');
			swipeNext.classList.add('hide');
			swipePrev.classList.add('hide');

		}

		resetSwipe();

		if (feedback) {

			toggleSwipe = function() {

				resetSwipe();

				swipeNext.classList.remove('hide');
				swipePrev.classList.remove('hide');

				mySwipe = new Swiper(swipe, {
					loop: false,
					autoHeight: true,
					navigation: {
						nextEl: swipeNext,
						prevEl: swipePrev
					}
				});

			}

		}

		if (faq) {

			toggleSwipe = function() {

				resetSwipe();

				// удаляем/добавляем классы, чтобы не переопределять стили, когда свайп отключен
				swipe.parentNode.classList.toggle('swiper-container-style', window.innerWidth < 768);

				if (window.innerWidth < 768) {

					Array.prototype.forEach.call(swipe.querySelectorAll('.faq__visuallyhidden'), function(el){

						el.classList.remove('visuallyhidden');

					});

					swipeNext.classList.remove('hide');
					swipePrev.classList.remove('hide');

					mySwipe = new Swiper(swipe, {
						loop: true,
						autoHeight: true,
						navigation: {
							nextEl: swipeNext,
							prevEl: swipePrev
						}
					});

				}
				else {

					Array.prototype.forEach.call(swipe.querySelectorAll('.faq__visuallyhidden'), function(el){

						el.classList.add('visuallyhidden');

					});

				}

			}

		}

		window.addEventListener("resize", function(){

			window.requestAnimationFrame(function(){

				if (window.Swiper && !resizeTimeout) {

					resizeTimeout = setTimeout(function() {

						resizeTimeout = null;

						if(window.innerWidth != windowWidthOLd){

							windowWidthOLd = window.innerWidth;

							toggleSwipe();

						}

					}, 1000);

				}

			});

		});

		if(window.Swiper) {

			toggleSwipe();

		}

		if(!BF.swiper.init) {

			BF.swiper.init = true;

			setTimeout(function(){

				var script = document.createElement('script');

				script.type = 'text/javascript';
				script.async = true;
				script.src = '/local/templates/blizfinans/js/swiper.min.js';

				script.onload = function () {

					var event = new Event('resize');
					window.dispatchEvent(event);

				};

				document.head.appendChild(script);

			},3000);

		}

	});

};

if(document.querySelector('.swiper-container')) {

	BF.swiper(document.querySelectorAll('.swiper-container'));

}
(function(el){

	if(el) {

		function setDatePlus(){

			var date = new Date();
			date.setMinutes(date.getMinutes() + timer);

			var h = ('0' + date.getHours()).slice(-2),
				m = ('0' + date.getMinutes()).slice(-2);

			item[0].textContent = h[0];
			item[1].textContent = h[1];
			item[2].textContent = m[0];
			item[3].textContent = m[1];

		}

		var item = el.querySelectorAll('.timer-money__tablo-item'),
			timer = parseInt(el.getAttribute('data-timer'));

		el.querySelector('.timer-money__tablo-sep').textContent = ':';
		setDatePlus();

		// раз в минуту обновляем часы
		setInterval(function(){

			setDatePlus();

		},60000);

		Array.prototype.forEach.call(item, function(elem){

			elem.classList.remove('hide');

		});

	}

})(document.querySelector('.timer-money'));
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50VXAubWluLmpzIiwibm91aXNsaWRlci5taW4uanMiLCJwb2x5ZmlsbC5qcyIsInNtb290aHNjcm9sbC5qcyIsImpzLmpzIiwiY2FsY3VsYXRvci5qcyIsImZhcS5qcyIsImZvcm0uanMiLCJtYXNrLmpzIiwibWVudS5qcyIsIm1vZGFsLmpzIiwic3dpcGVyLmpzIiwidGltZXItbW9uZXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4ZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGEsbil7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShuKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1uKHJlcXVpcmUsZXhwb3J0cyxtb2R1bGUpOmEuQ291bnRVcD1uKCl9KHRoaXMsZnVuY3Rpb24oYSxuLHQpe3JldHVybiBmdW5jdGlvbihhLG4sdCxlLGkscil7dmFyIHU9dGhpcztpZih1LnZlcnNpb249ZnVuY3Rpb24oKXtyZXR1cm5cIjEuOS4zXCJ9LHUub3B0aW9ucz17dXNlRWFzaW5nOiEwLHVzZUdyb3VwaW5nOiEwLHNlcGFyYXRvcjpcIixcIixkZWNpbWFsOlwiLlwiLGVhc2luZ0ZuOmZ1bmN0aW9uKGEsbix0LGUpe3JldHVybiB0KigxLU1hdGgucG93KDIsLTEwKmEvZSkpKjEwMjQvMTAyMytufSxmb3JtYXR0aW5nRm46ZnVuY3Rpb24oYSl7dmFyIG4sdCxlLGkscixvLHM9YTwwO2lmKGE9TWF0aC5hYnMoYSkudG9GaXhlZCh1LmRlY2ltYWxzKSxuPShhKz1cIlwiKS5zcGxpdChcIi5cIiksdD1uWzBdLGU9MTxuLmxlbmd0aD91Lm9wdGlvbnMuZGVjaW1hbCtuWzFdOlwiXCIsdS5vcHRpb25zLnVzZUdyb3VwaW5nKXtmb3IoaT1cIlwiLHI9MCxvPXQubGVuZ3RoO3I8bzsrK3IpMCE9PXImJnIlMz09MCYmKGk9dS5vcHRpb25zLnNlcGFyYXRvcitpKSxpPXRbby1yLTFdK2k7dD1pfXJldHVybiB1Lm9wdGlvbnMubnVtZXJhbHMubGVuZ3RoJiYodD10LnJlcGxhY2UoL1swLTldL2csZnVuY3Rpb24oYSl7cmV0dXJuIHUub3B0aW9ucy5udW1lcmFsc1srYV19KSxlPWUucmVwbGFjZSgvWzAtOV0vZyxmdW5jdGlvbihhKXtyZXR1cm4gdS5vcHRpb25zLm51bWVyYWxzWythXX0pKSwocz9cIi1cIjpcIlwiKSt1Lm9wdGlvbnMucHJlZml4K3QrZSt1Lm9wdGlvbnMuc3VmZml4fSxwcmVmaXg6XCJcIixzdWZmaXg6XCJcIixudW1lcmFsczpbXX0sciYmXCJvYmplY3RcIj09dHlwZW9mIHIpZm9yKHZhciBvIGluIHUub3B0aW9ucylyLmhhc093blByb3BlcnR5KG8pJiZudWxsIT09cltvXSYmKHUub3B0aW9uc1tvXT1yW29dKTtcIlwiPT09dS5vcHRpb25zLnNlcGFyYXRvcj91Lm9wdGlvbnMudXNlR3JvdXBpbmc9ITE6dS5vcHRpb25zLnNlcGFyYXRvcj1cIlwiK3Uub3B0aW9ucy5zZXBhcmF0b3I7Zm9yKHZhciBzPTAsbD1bXCJ3ZWJraXRcIixcIm1velwiLFwibXNcIixcIm9cIl0sbT0wO208bC5sZW5ndGgmJiF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOysrbSl3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPXdpbmRvd1tsW21dK1wiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdLHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZT13aW5kb3dbbFttXStcIkNhbmNlbEFuaW1hdGlvbkZyYW1lXCJdfHx3aW5kb3dbbFttXStcIkNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTtmdW5jdGlvbiBkKGEpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBhJiYhaXNOYU4oYSl9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU9ZnVuY3Rpb24oYSxuKXt2YXIgdD0obmV3IERhdGUpLmdldFRpbWUoKSxlPU1hdGgubWF4KDAsMTYtKHQtcykpLGk9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXthKHQrZSl9LGUpO3JldHVybiBzPXQrZSxpfSksd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHwod2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKGEpe2NsZWFyVGltZW91dChhKX0pLHUuaW5pdGlhbGl6ZT1mdW5jdGlvbigpe3JldHVybiEhdS5pbml0aWFsaXplZHx8KHUuZXJyb3I9XCJcIix1LmQ9XCJzdHJpbmdcIj09dHlwZW9mIGE/ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYSk6YSx1LmQ/KHUuc3RhcnRWYWw9TnVtYmVyKG4pLHUuZW5kVmFsPU51bWJlcih0KSxkKHUuc3RhcnRWYWwpJiZkKHUuZW5kVmFsKT8odS5kZWNpbWFscz1NYXRoLm1heCgwLGV8fDApLHUuZGVjPU1hdGgucG93KDEwLHUuZGVjaW1hbHMpLHUuZHVyYXRpb249MWUzKk51bWJlcihpKXx8MmUzLHUuY291bnREb3duPXUuc3RhcnRWYWw+dS5lbmRWYWwsdS5mcmFtZVZhbD11LnN0YXJ0VmFsLHUuaW5pdGlhbGl6ZWQ9ITApOih1LmVycm9yPVwiW0NvdW50VXBdIHN0YXJ0VmFsIChcIituK1wiKSBvciBlbmRWYWwgKFwiK3QrXCIpIGlzIG5vdCBhIG51bWJlclwiLCExKSk6ISh1LmVycm9yPVwiW0NvdW50VXBdIHRhcmdldCBpcyBudWxsIG9yIHVuZGVmaW5lZFwiKSl9LHUucHJpbnRWYWx1ZT1mdW5jdGlvbihhKXt2YXIgbj11Lm9wdGlvbnMuZm9ybWF0dGluZ0ZuKGEpO1wiSU5QVVRcIj09PXUuZC50YWdOYW1lP3RoaXMuZC52YWx1ZT1uOlwidGV4dFwiPT09dS5kLnRhZ05hbWV8fFwidHNwYW5cIj09PXUuZC50YWdOYW1lP3RoaXMuZC50ZXh0Q29udGVudD1uOnRoaXMuZC5pbm5lckhUTUw9bn0sdS5jb3VudD1mdW5jdGlvbihhKXt1LnN0YXJ0VGltZXx8KHUuc3RhcnRUaW1lPWEpO3ZhciBuPSh1LnRpbWVzdGFtcD1hKS11LnN0YXJ0VGltZTt1LnJlbWFpbmluZz11LmR1cmF0aW9uLW4sdS5vcHRpb25zLnVzZUVhc2luZz91LmNvdW50RG93bj91LmZyYW1lVmFsPXUuc3RhcnRWYWwtdS5vcHRpb25zLmVhc2luZ0ZuKG4sMCx1LnN0YXJ0VmFsLXUuZW5kVmFsLHUuZHVyYXRpb24pOnUuZnJhbWVWYWw9dS5vcHRpb25zLmVhc2luZ0ZuKG4sdS5zdGFydFZhbCx1LmVuZFZhbC11LnN0YXJ0VmFsLHUuZHVyYXRpb24pOnUuY291bnREb3duP3UuZnJhbWVWYWw9dS5zdGFydFZhbC0odS5zdGFydFZhbC11LmVuZFZhbCkqKG4vdS5kdXJhdGlvbik6dS5mcmFtZVZhbD11LnN0YXJ0VmFsKyh1LmVuZFZhbC11LnN0YXJ0VmFsKSoobi91LmR1cmF0aW9uKSx1LmNvdW50RG93bj91LmZyYW1lVmFsPXUuZnJhbWVWYWw8dS5lbmRWYWw/dS5lbmRWYWw6dS5mcmFtZVZhbDp1LmZyYW1lVmFsPXUuZnJhbWVWYWw+dS5lbmRWYWw/dS5lbmRWYWw6dS5mcmFtZVZhbCx1LmZyYW1lVmFsPU1hdGgucm91bmQodS5mcmFtZVZhbCp1LmRlYykvdS5kZWMsdS5wcmludFZhbHVlKHUuZnJhbWVWYWwpLG48dS5kdXJhdGlvbj91LnJBRj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodS5jb3VudCk6dS5jYWxsYmFjayYmdS5jYWxsYmFjaygpfSx1LnN0YXJ0PWZ1bmN0aW9uKGEpe3UuaW5pdGlhbGl6ZSgpJiYodS5jYWxsYmFjaz1hLHUuckFGPXJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KSl9LHUucGF1c2VSZXN1bWU9ZnVuY3Rpb24oKXt1LnBhdXNlZD8odS5wYXVzZWQ9ITEsZGVsZXRlIHUuc3RhcnRUaW1lLHUuZHVyYXRpb249dS5yZW1haW5pbmcsdS5zdGFydFZhbD11LmZyYW1lVmFsLHJlcXVlc3RBbmltYXRpb25GcmFtZSh1LmNvdW50KSk6KHUucGF1c2VkPSEwLGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUuckFGKSl9LHUucmVzZXQ9ZnVuY3Rpb24oKXt1LnBhdXNlZD0hMSxkZWxldGUgdS5zdGFydFRpbWUsdS5pbml0aWFsaXplZD0hMSx1LmluaXRpYWxpemUoKSYmKGNhbmNlbEFuaW1hdGlvbkZyYW1lKHUuckFGKSx1LnByaW50VmFsdWUodS5zdGFydFZhbCkpfSx1LnVwZGF0ZT1mdW5jdGlvbihhKXt1LmluaXRpYWxpemUoKSYmKGQoYT1OdW1iZXIoYSkpPyh1LmVycm9yPVwiXCIsYSE9PXUuZnJhbWVWYWwmJihjYW5jZWxBbmltYXRpb25GcmFtZSh1LnJBRiksdS5wYXVzZWQ9ITEsZGVsZXRlIHUuc3RhcnRUaW1lLHUuc3RhcnRWYWw9dS5mcmFtZVZhbCx1LmVuZFZhbD1hLHUuY291bnREb3duPXUuc3RhcnRWYWw+dS5lbmRWYWwsdS5yQUY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUuY291bnQpKSk6dS5lcnJvcj1cIltDb3VudFVwXSB1cGRhdGUoKSAtIG5ldyBlbmRWYWwgaXMgbm90IGEgbnVtYmVyOiBcIithKX0sdS5pbml0aWFsaXplKCkmJnUucHJpbnRWYWx1ZSh1LnN0YXJ0VmFsKX19KTsiLCIvKiEgbm91aXNsaWRlciAtIDEzLjEuNCAtIDMvMjAvMjAxOSAqL1xyXG4hZnVuY3Rpb24odCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz10KCk6d2luZG93Lm5vVWlTbGlkZXI9dCgpfShmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB1dD1cIjEzLjEuNFwiO2Z1bmN0aW9uIGN0KHQpe3QucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0KX1mdW5jdGlvbiBzKHQpe3JldHVybiBudWxsIT10fWZ1bmN0aW9uIHB0KHQpe3QucHJldmVudERlZmF1bHQoKX1mdW5jdGlvbiBpKHQpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiB0JiYhaXNOYU4odCkmJmlzRmluaXRlKHQpfWZ1bmN0aW9uIGZ0KHQsZSxyKXswPHImJihtdCh0LGUpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtndCh0LGUpfSxyKSl9ZnVuY3Rpb24gZHQodCl7cmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHQsMTAwKSwwKX1mdW5jdGlvbiBodCh0KXtyZXR1cm4gQXJyYXkuaXNBcnJheSh0KT90Olt0XX1mdW5jdGlvbiBlKHQpe3ZhciBlPSh0PVN0cmluZyh0KSkuc3BsaXQoXCIuXCIpO3JldHVybiAxPGUubGVuZ3RoP2VbMV0ubGVuZ3RoOjB9ZnVuY3Rpb24gbXQodCxlKXt0LmNsYXNzTGlzdD90LmNsYXNzTGlzdC5hZGQoZSk6dC5jbGFzc05hbWUrPVwiIFwiK2V9ZnVuY3Rpb24gZ3QodCxlKXt0LmNsYXNzTGlzdD90LmNsYXNzTGlzdC5yZW1vdmUoZSk6dC5jbGFzc05hbWU9dC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXGIpXCIrZS5zcGxpdChcIiBcIikuam9pbihcInxcIikrXCIoXFxcXGJ8JClcIixcImdpXCIpLFwiIFwiKX1mdW5jdGlvbiB2dCh0KXt2YXIgZT12b2lkIDAhPT13aW5kb3cucGFnZVhPZmZzZXQscj1cIkNTUzFDb21wYXRcIj09PSh0LmNvbXBhdE1vZGV8fFwiXCIpO3JldHVybnt4OmU/d2luZG93LnBhZ2VYT2Zmc2V0OnI/dC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDp0LmJvZHkuc2Nyb2xsTGVmdCx5OmU/d2luZG93LnBhZ2VZT2Zmc2V0OnI/dC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wOnQuYm9keS5zY3JvbGxUb3B9fWZ1bmN0aW9uIGModCxlKXtyZXR1cm4gMTAwLyhlLXQpfWZ1bmN0aW9uIHAodCxlKXtyZXR1cm4gMTAwKmUvKHRbMV0tdFswXSl9ZnVuY3Rpb24gZih0LGUpe2Zvcih2YXIgcj0xO3Q+PWVbcl07KXIrPTE7cmV0dXJuIHJ9ZnVuY3Rpb24gcih0LGUscil7aWYocj49dC5zbGljZSgtMSlbMF0pcmV0dXJuIDEwMDt2YXIgbixpLG89ZihyLHQpLGE9dFtvLTFdLHM9dFtvXSxsPWVbby0xXSx1PWVbb107cmV0dXJuIGwrKGk9cixwKG49W2Esc10sblswXTwwP2krTWF0aC5hYnMoblswXSk6aS1uWzBdKS9jKGwsdSkpfWZ1bmN0aW9uIG4odCxlLHIsbil7aWYoMTAwPT09bilyZXR1cm4gbjt2YXIgaSxvLGE9ZihuLHQpLHM9dFthLTFdLGw9dFthXTtyZXR1cm4gcj8obC1zKS8yPG4tcz9sOnM6ZVthLTFdP3RbYS0xXSsoaT1uLXRbYS0xXSxvPWVbYS0xXSxNYXRoLnJvdW5kKGkvbykqbyk6bn1mdW5jdGlvbiBvKHQsZSxyKXt2YXIgbjtpZihcIm51bWJlclwiPT10eXBlb2YgZSYmKGU9W2VdKSwhQXJyYXkuaXNBcnJheShlKSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIit1dCtcIik6ICdyYW5nZScgY29udGFpbnMgaW52YWxpZCB2YWx1ZS5cIik7aWYoIWkobj1cIm1pblwiPT09dD8wOlwibWF4XCI9PT10PzEwMDpwYXJzZUZsb2F0KHQpKXx8IWkoZVswXSkpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrdXQrXCIpOiAncmFuZ2UnIHZhbHVlIGlzbid0IG51bWVyaWMuXCIpO3IueFBjdC5wdXNoKG4pLHIueFZhbC5wdXNoKGVbMF0pLG4/ci54U3RlcHMucHVzaCghaXNOYU4oZVsxXSkmJmVbMV0pOmlzTmFOKGVbMV0pfHwoci54U3RlcHNbMF09ZVsxXSksci54SGlnaGVzdENvbXBsZXRlU3RlcC5wdXNoKDApfWZ1bmN0aW9uIGEodCxlLHIpe2lmKGUpaWYoci54VmFsW3RdIT09ci54VmFsW3QrMV0pe3IueFN0ZXBzW3RdPXAoW3IueFZhbFt0XSxyLnhWYWxbdCsxXV0sZSkvYyhyLnhQY3RbdF0sci54UGN0W3QrMV0pO3ZhciBuPShyLnhWYWxbdCsxXS1yLnhWYWxbdF0pL3IueE51bVN0ZXBzW3RdLGk9TWF0aC5jZWlsKE51bWJlcihuLnRvRml4ZWQoMykpLTEpLG89ci54VmFsW3RdK3IueE51bVN0ZXBzW3RdKmk7ci54SGlnaGVzdENvbXBsZXRlU3RlcFt0XT1vfWVsc2Ugci54U3RlcHNbdF09ci54SGlnaGVzdENvbXBsZXRlU3RlcFt0XT1yLnhWYWxbdF19ZnVuY3Rpb24gbCh0LGUscil7dmFyIG47dGhpcy54UGN0PVtdLHRoaXMueFZhbD1bXSx0aGlzLnhTdGVwcz1bcnx8ITFdLHRoaXMueE51bVN0ZXBzPVshMV0sdGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcD1bXSx0aGlzLnNuYXA9ZTt2YXIgaT1bXTtmb3IobiBpbiB0KXQuaGFzT3duUHJvcGVydHkobikmJmkucHVzaChbdFtuXSxuXSk7Zm9yKGkubGVuZ3RoJiZcIm9iamVjdFwiPT10eXBlb2YgaVswXVswXT9pLnNvcnQoZnVuY3Rpb24odCxlKXtyZXR1cm4gdFswXVswXS1lWzBdWzBdfSk6aS5zb3J0KGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRbMF0tZVswXX0pLG49MDtuPGkubGVuZ3RoO24rKylvKGlbbl1bMV0saVtuXVswXSx0aGlzKTtmb3IodGhpcy54TnVtU3RlcHM9dGhpcy54U3RlcHMuc2xpY2UoMCksbj0wO248dGhpcy54TnVtU3RlcHMubGVuZ3RoO24rKylhKG4sdGhpcy54TnVtU3RlcHNbbl0sdGhpcyl9bC5wcm90b3R5cGUuZ2V0TWFyZ2luPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMueE51bVN0ZXBzWzBdO2lmKGUmJnQvZSUxIT0wKXRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiK3V0K1wiKTogJ2xpbWl0JywgJ21hcmdpbicgYW5kICdwYWRkaW5nJyBtdXN0IGJlIGRpdmlzaWJsZSBieSBzdGVwLlwiKTtyZXR1cm4gMj09PXRoaXMueFBjdC5sZW5ndGgmJnAodGhpcy54VmFsLHQpfSxsLnByb3RvdHlwZS50b1N0ZXBwaW5nPWZ1bmN0aW9uKHQpe3JldHVybiB0PXIodGhpcy54VmFsLHRoaXMueFBjdCx0KX0sbC5wcm90b3R5cGUuZnJvbVN0ZXBwaW5nPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbih0LGUscil7aWYoMTAwPD1yKXJldHVybiB0LnNsaWNlKC0xKVswXTt2YXIgbixpPWYocixlKSxvPXRbaS0xXSxhPXRbaV0scz1lW2ktMV0sbD1lW2ldO3JldHVybiBuPVtvLGFdLChyLXMpKmMocyxsKSooblsxXS1uWzBdKS8xMDArblswXX0odGhpcy54VmFsLHRoaXMueFBjdCx0KX0sbC5wcm90b3R5cGUuZ2V0U3RlcD1mdW5jdGlvbih0KXtyZXR1cm4gdD1uKHRoaXMueFBjdCx0aGlzLnhTdGVwcyx0aGlzLnNuYXAsdCl9LGwucHJvdG90eXBlLmdldERlZmF1bHRTdGVwPWZ1bmN0aW9uKHQsZSxyKXt2YXIgbj1mKHQsdGhpcy54UGN0KTtyZXR1cm4oMTAwPT09dHx8ZSYmdD09PXRoaXMueFBjdFtuLTFdKSYmKG49TWF0aC5tYXgobi0xLDEpKSwodGhpcy54VmFsW25dLXRoaXMueFZhbFtuLTFdKS9yfSxsLnByb3RvdHlwZS5nZXROZWFyYnlTdGVwcz1mdW5jdGlvbih0KXt2YXIgZT1mKHQsdGhpcy54UGN0KTtyZXR1cm57c3RlcEJlZm9yZTp7c3RhcnRWYWx1ZTp0aGlzLnhWYWxbZS0yXSxzdGVwOnRoaXMueE51bVN0ZXBzW2UtMl0saGlnaGVzdFN0ZXA6dGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtlLTJdfSx0aGlzU3RlcDp7c3RhcnRWYWx1ZTp0aGlzLnhWYWxbZS0xXSxzdGVwOnRoaXMueE51bVN0ZXBzW2UtMV0saGlnaGVzdFN0ZXA6dGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtlLTFdfSxzdGVwQWZ0ZXI6e3N0YXJ0VmFsdWU6dGhpcy54VmFsW2VdLHN0ZXA6dGhpcy54TnVtU3RlcHNbZV0saGlnaGVzdFN0ZXA6dGhpcy54SGlnaGVzdENvbXBsZXRlU3RlcFtlXX19fSxsLnByb3RvdHlwZS5jb3VudFN0ZXBEZWNpbWFscz1mdW5jdGlvbigpe3ZhciB0PXRoaXMueE51bVN0ZXBzLm1hcChlKTtyZXR1cm4gTWF0aC5tYXguYXBwbHkobnVsbCx0KX0sbC5wcm90b3R5cGUuY29udmVydD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5nZXRTdGVwKHRoaXMudG9TdGVwcGluZyh0KSl9O3ZhciB1PXt0bzpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwIT09dCYmdC50b0ZpeGVkKDIpfSxmcm9tOk51bWJlcn07ZnVuY3Rpb24gZCh0KXtpZihcIm9iamVjdFwiPT10eXBlb2YoZT10KSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS50byYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5mcm9tKXJldHVybiEwO3ZhciBlO3Rocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiK3V0K1wiKTogJ2Zvcm1hdCcgcmVxdWlyZXMgJ3RvJyBhbmQgJ2Zyb20nIG1ldGhvZHMuXCIpfWZ1bmN0aW9uIGgodCxlKXtpZighaShlKSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIit1dCtcIik6ICdzdGVwJyBpcyBub3QgbnVtZXJpYy5cIik7dC5zaW5nbGVTdGVwPWV9ZnVuY3Rpb24gbSh0LGUpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlfHxBcnJheS5pc0FycmF5KGUpKXRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiK3V0K1wiKTogJ3JhbmdlJyBpcyBub3QgYW4gb2JqZWN0LlwiKTtpZih2b2lkIDA9PT1lLm1pbnx8dm9pZCAwPT09ZS5tYXgpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrdXQrXCIpOiBNaXNzaW5nICdtaW4nIG9yICdtYXgnIGluICdyYW5nZScuXCIpO2lmKGUubWluPT09ZS5tYXgpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrdXQrXCIpOiAncmFuZ2UnICdtaW4nIGFuZCAnbWF4JyBjYW5ub3QgYmUgZXF1YWwuXCIpO3Quc3BlY3RydW09bmV3IGwoZSx0LnNuYXAsdC5zaW5nbGVTdGVwKX1mdW5jdGlvbiBnKHQsZSl7aWYoZT1odChlKSwhQXJyYXkuaXNBcnJheShlKXx8IWUubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiK3V0K1wiKTogJ3N0YXJ0JyBvcHRpb24gaXMgaW5jb3JyZWN0LlwiKTt0LmhhbmRsZXM9ZS5sZW5ndGgsdC5zdGFydD1lfWZ1bmN0aW9uIHYodCxlKXtpZihcImJvb2xlYW5cIiE9dHlwZW9mKHQuc25hcD1lKSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIit1dCtcIik6ICdzbmFwJyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpfWZ1bmN0aW9uIGIodCxlKXtpZihcImJvb2xlYW5cIiE9dHlwZW9mKHQuYW5pbWF0ZT1lKSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIit1dCtcIik6ICdhbmltYXRlJyBvcHRpb24gbXVzdCBiZSBhIGJvb2xlYW4uXCIpfWZ1bmN0aW9uIFModCxlKXtpZihcIm51bWJlclwiIT10eXBlb2YodC5hbmltYXRpb25EdXJhdGlvbj1lKSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIit1dCtcIik6ICdhbmltYXRpb25EdXJhdGlvbicgb3B0aW9uIG11c3QgYmUgYSBudW1iZXIuXCIpfWZ1bmN0aW9uIHgodCxlKXt2YXIgcixuPVshMV07aWYoXCJsb3dlclwiPT09ZT9lPVshMCwhMV06XCJ1cHBlclwiPT09ZSYmKGU9WyExLCEwXSksITA9PT1lfHwhMT09PWUpe2ZvcihyPTE7cjx0LmhhbmRsZXM7cisrKW4ucHVzaChlKTtuLnB1c2goITEpfWVsc2V7aWYoIUFycmF5LmlzQXJyYXkoZSl8fCFlLmxlbmd0aHx8ZS5sZW5ndGghPT10LmhhbmRsZXMrMSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIit1dCtcIik6ICdjb25uZWN0JyBvcHRpb24gZG9lc24ndCBtYXRjaCBoYW5kbGUgY291bnQuXCIpO249ZX10LmNvbm5lY3Q9bn1mdW5jdGlvbiB3KHQsZSl7c3dpdGNoKGUpe2Nhc2VcImhvcml6b250YWxcIjp0Lm9ydD0wO2JyZWFrO2Nhc2VcInZlcnRpY2FsXCI6dC5vcnQ9MTticmVhaztkZWZhdWx0OnRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiK3V0K1wiKTogJ29yaWVudGF0aW9uJyBvcHRpb24gaXMgaW52YWxpZC5cIil9fWZ1bmN0aW9uIHkodCxlKXtpZighaShlKSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIit1dCtcIik6ICdtYXJnaW4nIG9wdGlvbiBtdXN0IGJlIG51bWVyaWMuXCIpO2lmKDAhPT1lJiYodC5tYXJnaW49dC5zcGVjdHJ1bS5nZXRNYXJnaW4oZSksIXQubWFyZ2luKSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIit1dCtcIik6ICdtYXJnaW4nIG9wdGlvbiBpcyBvbmx5IHN1cHBvcnRlZCBvbiBsaW5lYXIgc2xpZGVycy5cIil9ZnVuY3Rpb24gRSh0LGUpe2lmKCFpKGUpKXRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiK3V0K1wiKTogJ2xpbWl0JyBvcHRpb24gbXVzdCBiZSBudW1lcmljLlwiKTtpZih0LmxpbWl0PXQuc3BlY3RydW0uZ2V0TWFyZ2luKGUpLCF0LmxpbWl0fHx0LmhhbmRsZXM8Mil0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIit1dCtcIik6ICdsaW1pdCcgb3B0aW9uIGlzIG9ubHkgc3VwcG9ydGVkIG9uIGxpbmVhciBzbGlkZXJzIHdpdGggMiBvciBtb3JlIGhhbmRsZXMuXCIpfWZ1bmN0aW9uIEModCxlKXtpZighaShlKSYmIUFycmF5LmlzQXJyYXkoZSkpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrdXQrXCIpOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIik7aWYoQXJyYXkuaXNBcnJheShlKSYmMiE9PWUubGVuZ3RoJiYhaShlWzBdKSYmIWkoZVsxXSkpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrdXQrXCIpOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgbnVtZXJpYyBvciBhcnJheSBvZiBleGFjdGx5IDIgbnVtYmVycy5cIik7aWYoMCE9PWUpe2lmKEFycmF5LmlzQXJyYXkoZSl8fChlPVtlLGVdKSwhKHQucGFkZGluZz1bdC5zcGVjdHJ1bS5nZXRNYXJnaW4oZVswXSksdC5zcGVjdHJ1bS5nZXRNYXJnaW4oZVsxXSldKT09PXQucGFkZGluZ1swXXx8ITE9PT10LnBhZGRpbmdbMV0pdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrdXQrXCIpOiAncGFkZGluZycgb3B0aW9uIGlzIG9ubHkgc3VwcG9ydGVkIG9uIGxpbmVhciBzbGlkZXJzLlwiKTtpZih0LnBhZGRpbmdbMF08MHx8dC5wYWRkaW5nWzFdPDApdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrdXQrXCIpOiAncGFkZGluZycgb3B0aW9uIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIocykuXCIpO2lmKDEwMDw9dC5wYWRkaW5nWzBdK3QucGFkZGluZ1sxXSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIit1dCtcIik6ICdwYWRkaW5nJyBvcHRpb24gbXVzdCBub3QgZXhjZWVkIDEwMCUgb2YgdGhlIHJhbmdlLlwiKX19ZnVuY3Rpb24gTih0LGUpe3N3aXRjaChlKXtjYXNlXCJsdHJcIjp0LmRpcj0wO2JyZWFrO2Nhc2VcInJ0bFwiOnQuZGlyPTE7YnJlYWs7ZGVmYXVsdDp0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIit1dCtcIik6ICdkaXJlY3Rpb24nIG9wdGlvbiB3YXMgbm90IHJlY29nbml6ZWQuXCIpfX1mdW5jdGlvbiBVKHQsZSl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrdXQrXCIpOiAnYmVoYXZpb3VyJyBtdXN0IGJlIGEgc3RyaW5nIGNvbnRhaW5pbmcgb3B0aW9ucy5cIik7dmFyIHI9MDw9ZS5pbmRleE9mKFwidGFwXCIpLG49MDw9ZS5pbmRleE9mKFwiZHJhZ1wiKSxpPTA8PWUuaW5kZXhPZihcImZpeGVkXCIpLG89MDw9ZS5pbmRleE9mKFwic25hcFwiKSxhPTA8PWUuaW5kZXhPZihcImhvdmVyXCIpLHM9MDw9ZS5pbmRleE9mKFwidW5jb25zdHJhaW5lZFwiKTtpZihpKXtpZigyIT09dC5oYW5kbGVzKXRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiK3V0K1wiKTogJ2ZpeGVkJyBiZWhhdmlvdXIgbXVzdCBiZSB1c2VkIHdpdGggMiBoYW5kbGVzXCIpO3kodCx0LnN0YXJ0WzFdLXQuc3RhcnRbMF0pfWlmKHMmJih0Lm1hcmdpbnx8dC5saW1pdCkpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrdXQrXCIpOiAndW5jb25zdHJhaW5lZCcgYmVoYXZpb3VyIGNhbm5vdCBiZSB1c2VkIHdpdGggbWFyZ2luIG9yIGxpbWl0XCIpO3QuZXZlbnRzPXt0YXA6cnx8byxkcmFnOm4sZml4ZWQ6aSxzbmFwOm8saG92ZXI6YSx1bmNvbnN0cmFpbmVkOnN9fWZ1bmN0aW9uIGsodCxlKXtpZighMSE9PWUpaWYoITA9PT1lKXt0LnRvb2x0aXBzPVtdO2Zvcih2YXIgcj0wO3I8dC5oYW5kbGVzO3IrKyl0LnRvb2x0aXBzLnB1c2goITApfWVsc2V7aWYodC50b29sdGlwcz1odChlKSx0LnRvb2x0aXBzLmxlbmd0aCE9PXQuaGFuZGxlcyl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIit1dCtcIik6IG11c3QgcGFzcyBhIGZvcm1hdHRlciBmb3IgYWxsIGhhbmRsZXMuXCIpO3QudG9vbHRpcHMuZm9yRWFjaChmdW5jdGlvbih0KXtpZihcImJvb2xlYW5cIiE9dHlwZW9mIHQmJihcIm9iamVjdFwiIT10eXBlb2YgdHx8XCJmdW5jdGlvblwiIT10eXBlb2YgdC50bykpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrdXQrXCIpOiAndG9vbHRpcHMnIG11c3QgYmUgcGFzc2VkIGEgZm9ybWF0dGVyIG9yICdmYWxzZScuXCIpfSl9fWZ1bmN0aW9uIFAodCxlKXtkKHQuYXJpYUZvcm1hdD1lKX1mdW5jdGlvbiBBKHQsZSl7ZCh0LmZvcm1hdD1lKX1mdW5jdGlvbiBWKHQsZSl7aWYoXCJib29sZWFuXCIhPXR5cGVvZih0LmtleWJvYXJkU3VwcG9ydD1lKSl0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIit1dCtcIik6ICdrZXlib2FyZFN1cHBvcnQnIG9wdGlvbiBtdXN0IGJlIGEgYm9vbGVhbi5cIil9ZnVuY3Rpb24gTSh0LGUpe3QuZG9jdW1lbnRFbGVtZW50PWV9ZnVuY3Rpb24gTyh0LGUpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlJiYhMSE9PWUpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrdXQrXCIpOiAnY3NzUHJlZml4JyBtdXN0IGJlIGEgc3RyaW5nIG9yIGBmYWxzZWAuXCIpO3QuY3NzUHJlZml4PWV9ZnVuY3Rpb24gTCh0LGUpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiBlKXRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiK3V0K1wiKTogJ2Nzc0NsYXNzZXMnIG11c3QgYmUgYW4gb2JqZWN0LlwiKTtpZihcInN0cmluZ1wiPT10eXBlb2YgdC5jc3NQcmVmaXgpZm9yKHZhciByIGluIHQuY3NzQ2xhc3Nlcz17fSxlKWUuaGFzT3duUHJvcGVydHkocikmJih0LmNzc0NsYXNzZXNbcl09dC5jc3NQcmVmaXgrZVtyXSk7ZWxzZSB0LmNzc0NsYXNzZXM9ZX1mdW5jdGlvbiBidChlKXt2YXIgcj17bWFyZ2luOjAsbGltaXQ6MCxwYWRkaW5nOjAsYW5pbWF0ZTohMCxhbmltYXRpb25EdXJhdGlvbjozMDAsYXJpYUZvcm1hdDp1LGZvcm1hdDp1fSxuPXtzdGVwOntyOiExLHQ6aH0sc3RhcnQ6e3I6ITAsdDpnfSxjb25uZWN0OntyOiEwLHQ6eH0sZGlyZWN0aW9uOntyOiEwLHQ6Tn0sc25hcDp7cjohMSx0OnZ9LGFuaW1hdGU6e3I6ITEsdDpifSxhbmltYXRpb25EdXJhdGlvbjp7cjohMSx0OlN9LHJhbmdlOntyOiEwLHQ6bX0sb3JpZW50YXRpb246e3I6ITEsdDp3fSxtYXJnaW46e3I6ITEsdDp5fSxsaW1pdDp7cjohMSx0OkV9LHBhZGRpbmc6e3I6ITEsdDpDfSxiZWhhdmlvdXI6e3I6ITAsdDpVfSxhcmlhRm9ybWF0OntyOiExLHQ6UH0sZm9ybWF0OntyOiExLHQ6QX0sdG9vbHRpcHM6e3I6ITEsdDprfSxrZXlib2FyZFN1cHBvcnQ6e3I6ITAsdDpWfSxkb2N1bWVudEVsZW1lbnQ6e3I6ITEsdDpNfSxjc3NQcmVmaXg6e3I6ITAsdDpPfSxjc3NDbGFzc2VzOntyOiEwLHQ6TH19LGk9e2Nvbm5lY3Q6ITEsZGlyZWN0aW9uOlwibHRyXCIsYmVoYXZpb3VyOlwidGFwXCIsb3JpZW50YXRpb246XCJob3Jpem9udGFsXCIsa2V5Ym9hcmRTdXBwb3J0OiEwLGNzc1ByZWZpeDpcIm5vVWktXCIsY3NzQ2xhc3Nlczp7dGFyZ2V0OlwidGFyZ2V0XCIsYmFzZTpcImJhc2VcIixvcmlnaW46XCJvcmlnaW5cIixoYW5kbGU6XCJoYW5kbGVcIixoYW5kbGVMb3dlcjpcImhhbmRsZS1sb3dlclwiLGhhbmRsZVVwcGVyOlwiaGFuZGxlLXVwcGVyXCIsdG91Y2hBcmVhOlwidG91Y2gtYXJlYVwiLGhvcml6b250YWw6XCJob3Jpem9udGFsXCIsdmVydGljYWw6XCJ2ZXJ0aWNhbFwiLGJhY2tncm91bmQ6XCJiYWNrZ3JvdW5kXCIsY29ubmVjdDpcImNvbm5lY3RcIixjb25uZWN0czpcImNvbm5lY3RzXCIsbHRyOlwibHRyXCIscnRsOlwicnRsXCIsZHJhZ2dhYmxlOlwiZHJhZ2dhYmxlXCIsZHJhZzpcInN0YXRlLWRyYWdcIix0YXA6XCJzdGF0ZS10YXBcIixhY3RpdmU6XCJhY3RpdmVcIix0b29sdGlwOlwidG9vbHRpcFwiLHBpcHM6XCJwaXBzXCIscGlwc0hvcml6b250YWw6XCJwaXBzLWhvcml6b250YWxcIixwaXBzVmVydGljYWw6XCJwaXBzLXZlcnRpY2FsXCIsbWFya2VyOlwibWFya2VyXCIsbWFya2VySG9yaXpvbnRhbDpcIm1hcmtlci1ob3Jpem9udGFsXCIsbWFya2VyVmVydGljYWw6XCJtYXJrZXItdmVydGljYWxcIixtYXJrZXJOb3JtYWw6XCJtYXJrZXItbm9ybWFsXCIsbWFya2VyTGFyZ2U6XCJtYXJrZXItbGFyZ2VcIixtYXJrZXJTdWI6XCJtYXJrZXItc3ViXCIsdmFsdWU6XCJ2YWx1ZVwiLHZhbHVlSG9yaXpvbnRhbDpcInZhbHVlLWhvcml6b250YWxcIix2YWx1ZVZlcnRpY2FsOlwidmFsdWUtdmVydGljYWxcIix2YWx1ZU5vcm1hbDpcInZhbHVlLW5vcm1hbFwiLHZhbHVlTGFyZ2U6XCJ2YWx1ZS1sYXJnZVwiLHZhbHVlU3ViOlwidmFsdWUtc3ViXCJ9fTtlLmZvcm1hdCYmIWUuYXJpYUZvcm1hdCYmKGUuYXJpYUZvcm1hdD1lLmZvcm1hdCksT2JqZWN0LmtleXMobikuZm9yRWFjaChmdW5jdGlvbih0KXtpZighcyhlW3RdKSYmdm9pZCAwPT09aVt0XSl7aWYoblt0XS5yKXRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiK3V0K1wiKTogJ1wiK3QrXCInIGlzIHJlcXVpcmVkLlwiKTtyZXR1cm4hMH1uW3RdLnQocixzKGVbdF0pP2VbdF06aVt0XSl9KSxyLnBpcHM9ZS5waXBzO3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksbz12b2lkIDAhPT10LnN0eWxlLm1zVHJhbnNmb3JtLGE9dm9pZCAwIT09dC5zdHlsZS50cmFuc2Zvcm07ci50cmFuc2Zvcm1SdWxlPWE/XCJ0cmFuc2Zvcm1cIjpvP1wibXNUcmFuc2Zvcm1cIjpcIndlYmtpdFRyYW5zZm9ybVwiO3JldHVybiByLnN0eWxlPVtbXCJsZWZ0XCIsXCJ0b3BcIl0sW1wicmlnaHRcIixcImJvdHRvbVwiXV1bci5kaXJdW3Iub3J0XSxyfWZ1bmN0aW9uIHoodCxmLG8pe3ZhciBsLHUsYSxjLGkscyxlLHAsZD13aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkP3tzdGFydDpcInBvaW50ZXJkb3duXCIsbW92ZTpcInBvaW50ZXJtb3ZlXCIsZW5kOlwicG9pbnRlcnVwXCJ9OndpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZD97c3RhcnQ6XCJNU1BvaW50ZXJEb3duXCIsbW92ZTpcIk1TUG9pbnRlck1vdmVcIixlbmQ6XCJNU1BvaW50ZXJVcFwifTp7c3RhcnQ6XCJtb3VzZWRvd24gdG91Y2hzdGFydFwiLG1vdmU6XCJtb3VzZW1vdmUgdG91Y2htb3ZlXCIsZW5kOlwibW91c2V1cCB0b3VjaGVuZFwifSxoPXdpbmRvdy5DU1MmJkNTUy5zdXBwb3J0cyYmQ1NTLnN1cHBvcnRzKFwidG91Y2gtYWN0aW9uXCIsXCJub25lXCIpJiZmdW5jdGlvbigpe3ZhciB0PSExO3RyeXt2YXIgZT1PYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJwYXNzaXZlXCIse2dldDpmdW5jdGlvbigpe3Q9ITB9fSk7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIsbnVsbCxlKX1jYXRjaCh0KXt9cmV0dXJuIHR9KCkseT10LEU9Zi5zcGVjdHJ1bSxtPVtdLGc9W10sdj1bXSxiPTAsUz17fSx4PXQub3duZXJEb2N1bWVudCx3PWYuZG9jdW1lbnRFbGVtZW50fHx4LmRvY3VtZW50RWxlbWVudCxDPXguYm9keSxOPS0xLFU9MCxrPTEsUD0yLEE9XCJydGxcIj09PXguZGlyfHwxPT09Zi5vcnQ/MDoxMDA7ZnVuY3Rpb24gVih0LGUpe3ZhciByPXguY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZSYmbXQocixlKSx0LmFwcGVuZENoaWxkKHIpLHJ9ZnVuY3Rpb24gTSh0LGUpe3ZhciByPVYodCxmLmNzc0NsYXNzZXMub3JpZ2luKSxuPVYocixmLmNzc0NsYXNzZXMuaGFuZGxlKTtyZXR1cm4gVihuLGYuY3NzQ2xhc3Nlcy50b3VjaEFyZWEpLG4uc2V0QXR0cmlidXRlKFwiZGF0YS1oYW5kbGVcIixlKSxmLmtleWJvYXJkU3VwcG9ydCYmKG4uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIixcIjBcIiksbi5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbih0LGUpe2lmKEwoKXx8eihlKSlyZXR1cm4hMTt2YXIgcj1bXCJMZWZ0XCIsXCJSaWdodFwiXSxuPVtcIkRvd25cIixcIlVwXCJdO2YuZGlyJiYhZi5vcnQ/ci5yZXZlcnNlKCk6Zi5vcnQmJiFmLmRpciYmbi5yZXZlcnNlKCk7dmFyIGk9dC5rZXkucmVwbGFjZShcIkFycm93XCIsXCJcIiksbz1pPT09blswXXx8aT09PXJbMF0sYT1pPT09blsxXXx8aT09PXJbMV07aWYoIW8mJiFhKXJldHVybiEwO3QucHJldmVudERlZmF1bHQoKTt2YXIgcz1vPzA6MSxsPWx0KGUpW3NdO2lmKG51bGw9PT1sKXJldHVybiExOyExPT09bCYmKGw9RS5nZXREZWZhdWx0U3RlcChnW2VdLG8sMTApKTtyZXR1cm4gbD1NYXRoLm1heChsLDFlLTcpLGwqPW8/LTE6MSxhdChlLG1bZV0rbCwhMCksITF9KHQsZSl9KSksbi5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsXCJzbGlkZXJcIiksbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLW9yaWVudGF0aW9uXCIsZi5vcnQ/XCJ2ZXJ0aWNhbFwiOlwiaG9yaXpvbnRhbFwiKSwwPT09ZT9tdChuLGYuY3NzQ2xhc3Nlcy5oYW5kbGVMb3dlcik6ZT09PWYuaGFuZGxlcy0xJiZtdChuLGYuY3NzQ2xhc3Nlcy5oYW5kbGVVcHBlcikscn1mdW5jdGlvbiBPKHQsZSl7cmV0dXJuISFlJiZWKHQsZi5jc3NDbGFzc2VzLmNvbm5lY3QpfWZ1bmN0aW9uIHIodCxlKXtyZXR1cm4hIWYudG9vbHRpcHNbZV0mJlYodC5maXJzdENoaWxkLGYuY3NzQ2xhc3Nlcy50b29sdGlwKX1mdW5jdGlvbiBMKCl7cmV0dXJuIHkuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIil9ZnVuY3Rpb24geih0KXtyZXR1cm4gdVt0XS5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX1mdW5jdGlvbiBqKCl7aSYmKEcoXCJ1cGRhdGUudG9vbHRpcHNcIiksaS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QmJmN0KHQpfSksaT1udWxsKX1mdW5jdGlvbiBIKCl7aigpLGk9dS5tYXAociksJChcInVwZGF0ZS50b29sdGlwc1wiLGZ1bmN0aW9uKHQsZSxyKXtpZihpW2VdKXt2YXIgbj10W2VdOyEwIT09Zi50b29sdGlwc1tlXSYmKG49Zi50b29sdGlwc1tlXS50byhyW2VdKSksaVtlXS5pbm5lckhUTUw9bn19KX1mdW5jdGlvbiBGKGUsaSxvKXt2YXIgYT14LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscz1bXTtzW1VdPWYuY3NzQ2xhc3Nlcy52YWx1ZU5vcm1hbCxzW2tdPWYuY3NzQ2xhc3Nlcy52YWx1ZUxhcmdlLHNbUF09Zi5jc3NDbGFzc2VzLnZhbHVlU3ViO3ZhciBsPVtdO2xbVV09Zi5jc3NDbGFzc2VzLm1hcmtlck5vcm1hbCxsW2tdPWYuY3NzQ2xhc3Nlcy5tYXJrZXJMYXJnZSxsW1BdPWYuY3NzQ2xhc3Nlcy5tYXJrZXJTdWI7dmFyIHU9W2YuY3NzQ2xhc3Nlcy52YWx1ZUhvcml6b250YWwsZi5jc3NDbGFzc2VzLnZhbHVlVmVydGljYWxdLGM9W2YuY3NzQ2xhc3Nlcy5tYXJrZXJIb3Jpem9udGFsLGYuY3NzQ2xhc3Nlcy5tYXJrZXJWZXJ0aWNhbF07ZnVuY3Rpb24gcCh0LGUpe3ZhciByPWU9PT1mLmNzc0NsYXNzZXMudmFsdWUsbj1yP3M6bDtyZXR1cm4gZStcIiBcIisocj91OmMpW2Yub3J0XStcIiBcIituW3RdfXJldHVybiBtdChhLGYuY3NzQ2xhc3Nlcy5waXBzKSxtdChhLDA9PT1mLm9ydD9mLmNzc0NsYXNzZXMucGlwc0hvcml6b250YWw6Zi5jc3NDbGFzc2VzLnBpcHNWZXJ0aWNhbCksT2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbih0KXshZnVuY3Rpb24odCxlLHIpe2lmKChyPWk/aShlLHIpOnIpIT09Til7dmFyIG49VihhLCExKTtuLmNsYXNzTmFtZT1wKHIsZi5jc3NDbGFzc2VzLm1hcmtlciksbi5zdHlsZVtmLnN0eWxlXT10K1wiJVwiLFU8ciYmKChuPVYoYSwhMSkpLmNsYXNzTmFtZT1wKHIsZi5jc3NDbGFzc2VzLnZhbHVlKSxuLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIixlKSxuLnN0eWxlW2Yuc3R5bGVdPXQrXCIlXCIsbi5pbm5lckhUTUw9by50byhlKSl9fSh0LGVbdF1bMF0sZVt0XVsxXSl9KSxhfWZ1bmN0aW9uIEQoKXtjJiYoY3QoYyksYz1udWxsKX1mdW5jdGlvbiBUKHQpe0QoKTt2YXIgbSxnLHYsYixlLHIsUyx4LHcsbj10Lm1vZGUsaT10LmRlbnNpdHl8fDEsbz10LmZpbHRlcnx8ITEsYT1mdW5jdGlvbih0LGUscil7aWYoXCJyYW5nZVwiPT09dHx8XCJzdGVwc1wiPT09dClyZXR1cm4gRS54VmFsO2lmKFwiY291bnRcIj09PXQpe2lmKGU8Mil0aHJvdyBuZXcgRXJyb3IoXCJub1VpU2xpZGVyIChcIit1dCtcIik6ICd2YWx1ZXMnICg+PSAyKSByZXF1aXJlZCBmb3IgbW9kZSAnY291bnQnLlwiKTt2YXIgbj1lLTEsaT0xMDAvbjtmb3IoZT1bXTtuLS07KWVbbl09bippO2UucHVzaCgxMDApLHQ9XCJwb3NpdGlvbnNcIn1yZXR1cm5cInBvc2l0aW9uc1wiPT09dD9lLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gRS5mcm9tU3RlcHBpbmcocj9FLmdldFN0ZXAodCk6dCl9KTpcInZhbHVlc1wiPT09dD9yP2UubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBFLmZyb21TdGVwcGluZyhFLmdldFN0ZXAoRS50b1N0ZXBwaW5nKHQpKSl9KTplOnZvaWQgMH0obix0LnZhbHVlc3x8ITEsdC5zdGVwcGVkfHwhMSkscz0obT1pLGc9bix2PWEsYj17fSxlPUUueFZhbFswXSxyPUUueFZhbFtFLnhWYWwubGVuZ3RoLTFdLHg9Uz0hMSx3PTAsKHY9di5zbGljZSgpLnNvcnQoZnVuY3Rpb24odCxlKXtyZXR1cm4gdC1lfSkuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiF0aGlzW3RdJiYodGhpc1t0XT0hMCl9LHt9KSlbMF0hPT1lJiYodi51bnNoaWZ0KGUpLFM9ITApLHZbdi5sZW5ndGgtMV0hPT1yJiYodi5wdXNoKHIpLHg9ITApLHYuZm9yRWFjaChmdW5jdGlvbih0LGUpe3ZhciByLG4saSxvLGEscyxsLHUsYyxwLGY9dCxkPXZbZSsxXSxoPVwic3RlcHNcIj09PWc7aWYoaCYmKHI9RS54TnVtU3RlcHNbZV0pLHJ8fChyPWQtZiksITEhPT1mJiZ2b2lkIDAhPT1kKWZvcihyPU1hdGgubWF4KHIsMWUtNyksbj1mO248PWQ7bj0obityKS50b0ZpeGVkKDcpLzEpe2Zvcih1PShhPShvPUUudG9TdGVwcGluZyhuKSktdykvbSxwPWEvKGM9TWF0aC5yb3VuZCh1KSksaT0xO2k8PWM7aSs9MSliWyhzPXcraSpwKS50b0ZpeGVkKDUpXT1bRS5mcm9tU3RlcHBpbmcocyksMF07bD0tMTx2LmluZGV4T2Yobik/azpoP1A6VSwhZSYmUyYmKGw9MCksbj09PWQmJnh8fChiW28udG9GaXhlZCg1KV09W24sbF0pLHc9b319KSxiKSxsPXQuZm9ybWF0fHx7dG86TWF0aC5yb3VuZH07cmV0dXJuIGM9eS5hcHBlbmRDaGlsZChGKHMsbyxsKSl9ZnVuY3Rpb24gUigpe3ZhciB0PWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksZT1cIm9mZnNldFwiK1tcIldpZHRoXCIsXCJIZWlnaHRcIl1bZi5vcnRdO3JldHVybiAwPT09Zi5vcnQ/dC53aWR0aHx8bFtlXTp0LmhlaWdodHx8bFtlXX1mdW5jdGlvbiBCKG4saSxvLGEpe3ZhciBlPWZ1bmN0aW9uKHQpe3JldHVybiEhKHQ9ZnVuY3Rpb24odCxlLHIpe3ZhciBuLGksbz0wPT09dC50eXBlLmluZGV4T2YoXCJ0b3VjaFwiKSxhPTA9PT10LnR5cGUuaW5kZXhPZihcIm1vdXNlXCIpLHM9MD09PXQudHlwZS5pbmRleE9mKFwicG9pbnRlclwiKTswPT09dC50eXBlLmluZGV4T2YoXCJNU1BvaW50ZXJcIikmJihzPSEwKTtpZihvKXt2YXIgbD1mdW5jdGlvbih0KXtyZXR1cm4gdC50YXJnZXQ9PT1yfHxyLmNvbnRhaW5zKHQudGFyZ2V0KX07aWYoXCJ0b3VjaHN0YXJ0XCI9PT10LnR5cGUpe3ZhciB1PUFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCh0LnRvdWNoZXMsbCk7aWYoMTx1Lmxlbmd0aClyZXR1cm4hMTtuPXVbMF0ucGFnZVgsaT11WzBdLnBhZ2VZfWVsc2V7dmFyIGM9QXJyYXkucHJvdG90eXBlLmZpbmQuY2FsbCh0LmNoYW5nZWRUb3VjaGVzLGwpO2lmKCFjKXJldHVybiExO249Yy5wYWdlWCxpPWMucGFnZVl9fWU9ZXx8dnQoeCksKGF8fHMpJiYobj10LmNsaWVudFgrZS54LGk9dC5jbGllbnRZK2UueSk7cmV0dXJuIHQucGFnZU9mZnNldD1lLHQucG9pbnRzPVtuLGldLHQuY3Vyc29yPWF8fHMsdH0odCxhLnBhZ2VPZmZzZXQsYS50YXJnZXR8fGkpKSYmKCEoTCgpJiYhYS5kb05vdFJlamVjdCkmJihlPXkscj1mLmNzc0NsYXNzZXMudGFwLCEoKGUuY2xhc3NMaXN0P2UuY2xhc3NMaXN0LmNvbnRhaW5zKHIpOm5ldyBSZWdFeHAoXCJcXFxcYlwiK3IrXCJcXFxcYlwiKS50ZXN0KGUuY2xhc3NOYW1lKSkmJiFhLmRvTm90UmVqZWN0KSYmKCEobj09PWQuc3RhcnQmJnZvaWQgMCE9PXQuYnV0dG9ucyYmMTx0LmJ1dHRvbnMpJiYoKCFhLmhvdmVyfHwhdC5idXR0b25zKSYmKGh8fHQucHJldmVudERlZmF1bHQoKSx0LmNhbGNQb2ludD10LnBvaW50c1tmLm9ydF0sdm9pZCBvKHQsYSkpKSkpKTt2YXIgZSxyfSxyPVtdO3JldHVybiBuLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2kuYWRkRXZlbnRMaXN0ZW5lcih0LGUsISFoJiZ7cGFzc2l2ZTohMH0pLHIucHVzaChbdCxlXSl9KSxyfWZ1bmN0aW9uIHEodCl7dmFyIGUscixuLGksbyxhLHM9MTAwKih0LShlPWwscj1mLm9ydCxuPWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksaT1lLm93bmVyRG9jdW1lbnQsbz1pLmRvY3VtZW50RWxlbWVudCxhPXZ0KGkpLC93ZWJraXQuKkNocm9tZS4qTW9iaWxlL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmKGEueD0wKSxyP24udG9wK2EueS1vLmNsaWVudFRvcDpuLmxlZnQrYS54LW8uY2xpZW50TGVmdCkpL1IoKTtyZXR1cm4gcz1kdChzKSxmLmRpcj8xMDAtczpzfWZ1bmN0aW9uIFgodCxlKXtcIm1vdXNlb3V0XCI9PT10LnR5cGUmJlwiSFRNTFwiPT09dC50YXJnZXQubm9kZU5hbWUmJm51bGw9PT10LnJlbGF0ZWRUYXJnZXQmJl8odCxlKX1mdW5jdGlvbiBZKHQsZSl7aWYoLTE9PT1uYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiTVNJRSA5XCIpJiYwPT09dC5idXR0b25zJiYwIT09ZS5idXR0b25zUHJvcGVydHkpcmV0dXJuIF8odCxlKTt2YXIgcj0oZi5kaXI/LTE6MSkqKHQuY2FsY1BvaW50LWUuc3RhcnRDYWxjUG9pbnQpO1ooMDxyLDEwMCpyL2UuYmFzZVNpemUsZS5sb2NhdGlvbnMsZS5oYW5kbGVOdW1iZXJzKX1mdW5jdGlvbiBfKHQsZSl7ZS5oYW5kbGUmJihndChlLmhhbmRsZSxmLmNzc0NsYXNzZXMuYWN0aXZlKSxiLT0xKSxlLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uKHQpe3cucmVtb3ZlRXZlbnRMaXN0ZW5lcih0WzBdLHRbMV0pfSksMD09PWImJihndCh5LGYuY3NzQ2xhc3Nlcy5kcmFnKSxldCgpLHQuY3Vyc29yJiYoQy5zdHlsZS5jdXJzb3I9XCJcIixDLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLHB0KSkpLGUuaGFuZGxlTnVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uKHQpe0ooXCJjaGFuZ2VcIix0KSxKKFwic2V0XCIsdCksSihcImVuZFwiLHQpfSl9ZnVuY3Rpb24gSSh0LGUpe2lmKGUuaGFuZGxlTnVtYmVycy5zb21lKHopKXJldHVybiExO3ZhciByOzE9PT1lLmhhbmRsZU51bWJlcnMubGVuZ3RoJiYocj11W2UuaGFuZGxlTnVtYmVyc1swXV0uY2hpbGRyZW5bMF0sYis9MSxtdChyLGYuY3NzQ2xhc3Nlcy5hY3RpdmUpKTt0LnN0b3BQcm9wYWdhdGlvbigpO3ZhciBuPVtdLGk9QihkLm1vdmUsdyxZLHt0YXJnZXQ6dC50YXJnZXQsaGFuZGxlOnIsbGlzdGVuZXJzOm4sc3RhcnRDYWxjUG9pbnQ6dC5jYWxjUG9pbnQsYmFzZVNpemU6UigpLHBhZ2VPZmZzZXQ6dC5wYWdlT2Zmc2V0LGhhbmRsZU51bWJlcnM6ZS5oYW5kbGVOdW1iZXJzLGJ1dHRvbnNQcm9wZXJ0eTp0LmJ1dHRvbnMsbG9jYXRpb25zOmcuc2xpY2UoKX0pLG89QihkLmVuZCx3LF8se3RhcmdldDp0LnRhcmdldCxoYW5kbGU6cixsaXN0ZW5lcnM6bixkb05vdFJlamVjdDohMCxoYW5kbGVOdW1iZXJzOmUuaGFuZGxlTnVtYmVyc30pLGE9QihcIm1vdXNlb3V0XCIsdyxYLHt0YXJnZXQ6dC50YXJnZXQsaGFuZGxlOnIsbGlzdGVuZXJzOm4sZG9Ob3RSZWplY3Q6ITAsaGFuZGxlTnVtYmVyczplLmhhbmRsZU51bWJlcnN9KTtuLnB1c2guYXBwbHkobixpLmNvbmNhdChvLGEpKSx0LmN1cnNvciYmKEMuc3R5bGUuY3Vyc29yPWdldENvbXB1dGVkU3R5bGUodC50YXJnZXQpLmN1cnNvciwxPHUubGVuZ3RoJiZtdCh5LGYuY3NzQ2xhc3Nlcy5kcmFnKSxDLmFkZEV2ZW50TGlzdGVuZXIoXCJzZWxlY3RzdGFydFwiLHB0LCExKSksZS5oYW5kbGVOdW1iZXJzLmZvckVhY2goZnVuY3Rpb24odCl7SihcInN0YXJ0XCIsdCl9KX1mdW5jdGlvbiBuKHQpe3Quc3RvcFByb3BhZ2F0aW9uKCk7dmFyIG4saSxvLGU9cSh0LmNhbGNQb2ludCkscj0obj1lLG89IShpPTEwMCksdS5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7aWYoIXooZSkpe3ZhciByPU1hdGguYWJzKGdbZV0tbik7KHI8aXx8MTAwPT09ciYmMTAwPT09aSkmJihvPWUsaT1yKX19KSxvKTtpZighMT09PXIpcmV0dXJuITE7Zi5ldmVudHMuc25hcHx8ZnQoeSxmLmNzc0NsYXNzZXMudGFwLGYuYW5pbWF0aW9uRHVyYXRpb24pLHJ0KHIsZSwhMCwhMCksZXQoKSxKKFwic2xpZGVcIixyLCEwKSxKKFwidXBkYXRlXCIsciwhMCksSihcImNoYW5nZVwiLHIsITApLEooXCJzZXRcIixyLCEwKSxmLmV2ZW50cy5zbmFwJiZJKHQse2hhbmRsZU51bWJlcnM6W3JdfSl9ZnVuY3Rpb24gVyh0KXt2YXIgZT1xKHQuY2FsY1BvaW50KSxyPUUuZ2V0U3RlcChlKSxuPUUuZnJvbVN0ZXBwaW5nKHIpO09iamVjdC5rZXlzKFMpLmZvckVhY2goZnVuY3Rpb24odCl7XCJob3ZlclwiPT09dC5zcGxpdChcIi5cIilbMF0mJlNbdF0uZm9yRWFjaChmdW5jdGlvbih0KXt0LmNhbGwocyxuKX0pfSl9ZnVuY3Rpb24gJCh0LGUpe1NbdF09U1t0XXx8W10sU1t0XS5wdXNoKGUpLFwidXBkYXRlXCI9PT10LnNwbGl0KFwiLlwiKVswXSYmdS5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7SihcInVwZGF0ZVwiLGUpfSl9ZnVuY3Rpb24gRyh0KXt2YXIgbj10JiZ0LnNwbGl0KFwiLlwiKVswXSxpPW4mJnQuc3Vic3RyaW5nKG4ubGVuZ3RoKTtPYmplY3Qua2V5cyhTKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBlPXQuc3BsaXQoXCIuXCIpWzBdLHI9dC5zdWJzdHJpbmcoZS5sZW5ndGgpO24mJm4hPT1lfHxpJiZpIT09cnx8ZGVsZXRlIFNbdF19KX1mdW5jdGlvbiBKKHIsbixpKXtPYmplY3Qua2V5cyhTKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBlPXQuc3BsaXQoXCIuXCIpWzBdO3I9PT1lJiZTW3RdLmZvckVhY2goZnVuY3Rpb24odCl7dC5jYWxsKHMsbS5tYXAoZi5mb3JtYXQudG8pLG4sbS5zbGljZSgpLGl8fCExLGcuc2xpY2UoKSl9KX0pfWZ1bmN0aW9uIEsodCxlLHIsbixpLG8pe3JldHVybiAxPHUubGVuZ3RoJiYhZi5ldmVudHMudW5jb25zdHJhaW5lZCYmKG4mJjA8ZSYmKHI9TWF0aC5tYXgocix0W2UtMV0rZi5tYXJnaW4pKSxpJiZlPHUubGVuZ3RoLTEmJihyPU1hdGgubWluKHIsdFtlKzFdLWYubWFyZ2luKSkpLDE8dS5sZW5ndGgmJmYubGltaXQmJihuJiYwPGUmJihyPU1hdGgubWluKHIsdFtlLTFdK2YubGltaXQpKSxpJiZlPHUubGVuZ3RoLTEmJihyPU1hdGgubWF4KHIsdFtlKzFdLWYubGltaXQpKSksZi5wYWRkaW5nJiYoMD09PWUmJihyPU1hdGgubWF4KHIsZi5wYWRkaW5nWzBdKSksZT09PXUubGVuZ3RoLTEmJihyPU1hdGgubWluKHIsMTAwLWYucGFkZGluZ1sxXSkpKSwhKChyPWR0KHI9RS5nZXRTdGVwKHIpKSk9PT10W2VdJiYhbykmJnJ9ZnVuY3Rpb24gUSh0LGUpe3ZhciByPWYub3J0O3JldHVybihyP2U6dCkrXCIsIFwiKyhyP3Q6ZSl9ZnVuY3Rpb24gWih0LG4scixlKXt2YXIgaT1yLnNsaWNlKCksbz1bIXQsdF0sYT1bdCwhdF07ZT1lLnNsaWNlKCksdCYmZS5yZXZlcnNlKCksMTxlLmxlbmd0aD9lLmZvckVhY2goZnVuY3Rpb24odCxlKXt2YXIgcj1LKGksdCxpW3RdK24sb1tlXSxhW2VdLCExKTshMT09PXI/bj0wOihuPXItaVt0XSxpW3RdPXIpfSk6bz1hPVshMF07dmFyIHM9ITE7ZS5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7cz1ydCh0LHJbdF0rbixvW2VdLGFbZV0pfHxzfSkscyYmZS5mb3JFYWNoKGZ1bmN0aW9uKHQpe0ooXCJ1cGRhdGVcIix0KSxKKFwic2xpZGVcIix0KX0pfWZ1bmN0aW9uIHR0KHQsZSl7cmV0dXJuIGYuZGlyPzEwMC10LWU6dH1mdW5jdGlvbiBldCgpe3YuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZT01MDxnW3RdPy0xOjEscj0zKyh1Lmxlbmd0aCtlKnQpO3VbdF0uc3R5bGUuekluZGV4PXJ9KX1mdW5jdGlvbiBydCh0LGUscixuKXtyZXR1cm4hMSE9PShlPUsoZyx0LGUscixuLCExKSkmJihmdW5jdGlvbih0LGUpe2dbdF09ZSxtW3RdPUUuZnJvbVN0ZXBwaW5nKGUpO3ZhciByPVwidHJhbnNsYXRlKFwiK1EodHQoZSwwKS1BK1wiJVwiLFwiMFwiKStcIilcIjt1W3RdLnN0eWxlW2YudHJhbnNmb3JtUnVsZV09cixudCh0KSxudCh0KzEpfSh0LGUpLCEwKX1mdW5jdGlvbiBudCh0KXtpZihhW3RdKXt2YXIgZT0wLHI9MTAwOzAhPT10JiYoZT1nW3QtMV0pLHQhPT1hLmxlbmd0aC0xJiYocj1nW3RdKTt2YXIgbj1yLWUsaT1cInRyYW5zbGF0ZShcIitRKHR0KGUsbikrXCIlXCIsXCIwXCIpK1wiKVwiLG89XCJzY2FsZShcIitRKG4vMTAwLFwiMVwiKStcIilcIjthW3RdLnN0eWxlW2YudHJhbnNmb3JtUnVsZV09aStcIiBcIitvfX1mdW5jdGlvbiBpdCh0LGUpe3JldHVybiBudWxsPT09dHx8ITE9PT10fHx2b2lkIDA9PT10P2dbZV06KFwibnVtYmVyXCI9PXR5cGVvZiB0JiYodD1TdHJpbmcodCkpLHQ9Zi5mb3JtYXQuZnJvbSh0KSwhMT09PSh0PUUudG9TdGVwcGluZyh0KSl8fGlzTmFOKHQpP2dbZV06dCl9ZnVuY3Rpb24gb3QodCxlKXt2YXIgcj1odCh0KSxuPXZvaWQgMD09PWdbMF07ZT12b2lkIDA9PT1lfHwhIWUsZi5hbmltYXRlJiYhbiYmZnQoeSxmLmNzc0NsYXNzZXMudGFwLGYuYW5pbWF0aW9uRHVyYXRpb24pLHYuZm9yRWFjaChmdW5jdGlvbih0KXtydCh0LGl0KHJbdF0sdCksITAsITEpfSksdi5mb3JFYWNoKGZ1bmN0aW9uKHQpe3J0KHQsZ1t0XSwhMCwhMCl9KSxldCgpLHYuZm9yRWFjaChmdW5jdGlvbih0KXtKKFwidXBkYXRlXCIsdCksbnVsbCE9PXJbdF0mJmUmJkooXCJzZXRcIix0KX0pfWZ1bmN0aW9uIGF0KHQsZSxyKXtpZighKDA8PSh0PU51bWJlcih0KSkmJnQ8di5sZW5ndGgpKXRocm93IG5ldyBFcnJvcihcIm5vVWlTbGlkZXIgKFwiK3V0K1wiKTogaW52YWxpZCBoYW5kbGUgbnVtYmVyLCBnb3Q6IFwiK3QpO3J0KHQsaXQoZSx0KSwhMCwhMCksSihcInVwZGF0ZVwiLHQpLHImJkooXCJzZXRcIix0KX1mdW5jdGlvbiBzdCgpe3ZhciB0PW0ubWFwKGYuZm9ybWF0LnRvKTtyZXR1cm4gMT09PXQubGVuZ3RoP3RbMF06dH1mdW5jdGlvbiBsdCh0KXt2YXIgZT1nW3RdLHI9RS5nZXROZWFyYnlTdGVwcyhlKSxuPW1bdF0saT1yLnRoaXNTdGVwLnN0ZXAsbz1udWxsO2lmKGYuc25hcClyZXR1cm5bbi1yLnN0ZXBCZWZvcmUuc3RhcnRWYWx1ZXx8bnVsbCxyLnN0ZXBBZnRlci5zdGFydFZhbHVlLW58fG51bGxdOyExIT09aSYmbitpPnIuc3RlcEFmdGVyLnN0YXJ0VmFsdWUmJihpPXIuc3RlcEFmdGVyLnN0YXJ0VmFsdWUtbiksbz1uPnIudGhpc1N0ZXAuc3RhcnRWYWx1ZT9yLnRoaXNTdGVwLnN0ZXA6ITEhPT1yLnN0ZXBCZWZvcmUuc3RlcCYmbi1yLnN0ZXBCZWZvcmUuaGlnaGVzdFN0ZXAsMTAwPT09ZT9pPW51bGw6MD09PWUmJihvPW51bGwpO3ZhciBhPUUuY291bnRTdGVwRGVjaW1hbHMoKTtyZXR1cm4gbnVsbCE9PWkmJiExIT09aSYmKGk9TnVtYmVyKGkudG9GaXhlZChhKSkpLG51bGwhPT1vJiYhMSE9PW8mJihvPU51bWJlcihvLnRvRml4ZWQoYSkpKSxbbyxpXX1yZXR1cm4gbXQoZT15LGYuY3NzQ2xhc3Nlcy50YXJnZXQpLDA9PT1mLmRpcj9tdChlLGYuY3NzQ2xhc3Nlcy5sdHIpOm10KGUsZi5jc3NDbGFzc2VzLnJ0bCksMD09PWYub3J0P210KGUsZi5jc3NDbGFzc2VzLmhvcml6b250YWwpOm10KGUsZi5jc3NDbGFzc2VzLnZlcnRpY2FsKSxsPVYoZSxmLmNzc0NsYXNzZXMuYmFzZSksZnVuY3Rpb24odCxlKXt2YXIgcj1WKGUsZi5jc3NDbGFzc2VzLmNvbm5lY3RzKTt1PVtdLChhPVtdKS5wdXNoKE8ocix0WzBdKSk7Zm9yKHZhciBuPTA7bjxmLmhhbmRsZXM7bisrKXUucHVzaChNKGUsbikpLHZbbl09bixhLnB1c2goTyhyLHRbbisxXSkpfShmLmNvbm5lY3QsbCksKHA9Zi5ldmVudHMpLmZpeGVkfHx1LmZvckVhY2goZnVuY3Rpb24odCxlKXtCKGQuc3RhcnQsdC5jaGlsZHJlblswXSxJLHtoYW5kbGVOdW1iZXJzOltlXX0pfSkscC50YXAmJkIoZC5zdGFydCxsLG4se30pLHAuaG92ZXImJkIoZC5tb3ZlLGwsVyx7aG92ZXI6ITB9KSxwLmRyYWcmJmEuZm9yRWFjaChmdW5jdGlvbih0LGUpe2lmKCExIT09dCYmMCE9PWUmJmUhPT1hLmxlbmd0aC0xKXt2YXIgcj11W2UtMV0sbj11W2VdLGk9W3RdO210KHQsZi5jc3NDbGFzc2VzLmRyYWdnYWJsZSkscC5maXhlZCYmKGkucHVzaChyLmNoaWxkcmVuWzBdKSxpLnB1c2gobi5jaGlsZHJlblswXSkpLGkuZm9yRWFjaChmdW5jdGlvbih0KXtCKGQuc3RhcnQsdCxJLHtoYW5kbGVzOltyLG5dLGhhbmRsZU51bWJlcnM6W2UtMSxlXX0pfSl9fSksb3QoZi5zdGFydCksZi5waXBzJiZUKGYucGlwcyksZi50b29sdGlwcyYmSCgpLCQoXCJ1cGRhdGVcIixmdW5jdGlvbih0LGUsYSxyLHMpe3YuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZT11W3RdLHI9SyhnLHQsMCwhMCwhMCwhMCksbj1LKGcsdCwxMDAsITAsITAsITApLGk9c1t0XSxvPWYuYXJpYUZvcm1hdC50byhhW3RdKTtyPUUuZnJvbVN0ZXBwaW5nKHIpLnRvRml4ZWQoMSksbj1FLmZyb21TdGVwcGluZyhuKS50b0ZpeGVkKDEpLGk9RS5mcm9tU3RlcHBpbmcoaSkudG9GaXhlZCgxKSxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVtaW5cIixyKSxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVtYXhcIixuKSxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWVub3dcIixpKSxlLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImFyaWEtdmFsdWV0ZXh0XCIsbyl9KX0pLHM9e2Rlc3Ryb3k6ZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gZi5jc3NDbGFzc2VzKWYuY3NzQ2xhc3Nlcy5oYXNPd25Qcm9wZXJ0eSh0KSYmZ3QoeSxmLmNzc0NsYXNzZXNbdF0pO2Zvcig7eS5maXJzdENoaWxkOyl5LnJlbW92ZUNoaWxkKHkuZmlyc3RDaGlsZCk7ZGVsZXRlIHkubm9VaVNsaWRlcn0sc3RlcHM6ZnVuY3Rpb24oKXtyZXR1cm4gdi5tYXAobHQpfSxvbjokLG9mZjpHLGdldDpzdCxzZXQ6b3Qsc2V0SGFuZGxlOmF0LHJlc2V0OmZ1bmN0aW9uKHQpe290KGYuc3RhcnQsdCl9LF9fbW92ZUhhbmRsZXM6ZnVuY3Rpb24odCxlLHIpe1oodCxlLGcscil9LG9wdGlvbnM6byx1cGRhdGVPcHRpb25zOmZ1bmN0aW9uKGUsdCl7dmFyIHI9c3QoKSxuPVtcIm1hcmdpblwiLFwibGltaXRcIixcInBhZGRpbmdcIixcInJhbmdlXCIsXCJhbmltYXRlXCIsXCJzbmFwXCIsXCJzdGVwXCIsXCJmb3JtYXRcIixcInBpcHNcIixcInRvb2x0aXBzXCJdO24uZm9yRWFjaChmdW5jdGlvbih0KXt2b2lkIDAhPT1lW3RdJiYob1t0XT1lW3RdKX0pO3ZhciBpPWJ0KG8pO24uZm9yRWFjaChmdW5jdGlvbih0KXt2b2lkIDAhPT1lW3RdJiYoZlt0XT1pW3RdKX0pLEU9aS5zcGVjdHJ1bSxmLm1hcmdpbj1pLm1hcmdpbixmLmxpbWl0PWkubGltaXQsZi5wYWRkaW5nPWkucGFkZGluZyxmLnBpcHM/VChmLnBpcHMpOkQoKSxmLnRvb2x0aXBzP0goKTpqKCksZz1bXSxvdChlLnN0YXJ0fHxyLHQpfSx0YXJnZXQ6eSxyZW1vdmVQaXBzOkQscmVtb3ZlVG9vbHRpcHM6aixwaXBzOlR9fXJldHVybntfX3NwZWN0cnVtOmwsdmVyc2lvbjp1dCxjcmVhdGU6ZnVuY3Rpb24odCxlKXtpZighdHx8IXQubm9kZU5hbWUpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrdXQrXCIpOiBjcmVhdGUgcmVxdWlyZXMgYSBzaW5nbGUgZWxlbWVudCwgZ290OiBcIit0KTtpZih0Lm5vVWlTbGlkZXIpdGhyb3cgbmV3IEVycm9yKFwibm9VaVNsaWRlciAoXCIrdXQrXCIpOiBTbGlkZXIgd2FzIGFscmVhZHkgaW5pdGlhbGl6ZWQuXCIpO3ZhciByPXoodCxidChlKSxlKTtyZXR1cm4gdC5ub1VpU2xpZGVyPXJ9fX0pOyIsIi8qIFBvbHlmaWxsIHNlcnZpY2UgdjMuMTYuMFxyXG4gKiBGb3IgZGV0YWlsZWQgY3JlZGl0cyBhbmQgbGljZW5jZSBpbmZvcm1hdGlvbiBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZpbmFuY2lhbC10aW1lcy9wb2x5ZmlsbC1zZXJ2aWNlLlxyXG4gKlxyXG4gKiBVQSBkZXRlY3RlZDogaWUvMTEuMC4wXHJcbiAqIEZlYXR1cmVzIHJlcXVlc3RlZDogZGVmYXVsdFxyXG4gKlxyXG4gKiAtIEFycmF5LmZyb20sIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gQXJyYXkub2YsIExpY2Vuc2U6IE1JVCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gQXJyYXkucHJvdG90eXBlLmZpbGwsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gRXZlbnQsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIsIFwiQ3VzdG9tRXZlbnRcIiwgXCJQcm9taXNlXCIpXHJcbiAqIC0gQ3VzdG9tRXZlbnQsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gX0RPTVRva2VuTGlzdCwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcIkRPTVRva2VuTGlzdFwiLCBcImRlZmF1bHRcIilcclxuICogLSBET01Ub2tlbkxpc3QsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gX211dGF0aW9uLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiRWxlbWVudC5wcm90b3R5cGUuYWZ0ZXJcIiwgXCJkZWZhdWx0XCIsIFwiRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kXCIsIFwiRWxlbWVudC5wcm90b3R5cGUuYmVmb3JlXCIsIFwiRWxlbWVudC5wcm90b3R5cGUucHJlcGVuZFwiLCBcIkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZVwiLCBcIkVsZW1lbnQucHJvdG90eXBlLnJlcGxhY2VXaXRoXCIpXHJcbiAqIC0gRWxlbWVudC5wcm90b3R5cGUuYWZ0ZXIsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gRWxlbWVudC5wcm90b3R5cGUuYXBwZW5kLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIEVsZW1lbnQucHJvdG90eXBlLmJlZm9yZSwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiLCBcIkVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3RcIilcclxuICogLSBFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0LCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIEVsZW1lbnQucHJvdG90eXBlLnByZXBlbmQsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIEVsZW1lbnQucHJvdG90eXBlLnJlcGxhY2VXaXRoLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIFN5bWJvbCwgTGljZW5zZTogTUlUIChyZXF1aXJlZCBieSBcIk1hcFwiLCBcImRlZmF1bHRcIiwgXCJTZXRcIiwgXCJTeW1ib2wuaXRlcmF0b3JcIiwgXCJTeW1ib2wuc3BlY2llc1wiKVxyXG4gKiAtIFN5bWJvbC5pdGVyYXRvciwgTGljZW5zZTogTUlUIChyZXF1aXJlZCBieSBcIk1hcFwiLCBcImRlZmF1bHRcIiwgXCJTZXRcIilcclxuICogLSBTeW1ib2wuc3BlY2llcywgTGljZW5zZTogTUlUIChyZXF1aXJlZCBieSBcIk1hcFwiLCBcImRlZmF1bHRcIiwgXCJTZXRcIilcclxuICogLSBOdW1iZXIuaXNOYU4sIExpY2Vuc2U6IE1JVCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIsIFwiTWFwXCIsIFwiU2V0XCIpXHJcbiAqIC0gTWFwLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIE5vZGUucHJvdG90eXBlLmNvbnRhaW5zLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIE9iamVjdC5hc3NpZ24sIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gUHJvbWlzZSwgTGljZW5zZTogTUlUIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBTZXQsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpXHJcbiAqIC0gU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aCwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzLCBMaWNlbnNlOiBDQzAgKHJlcXVpcmVkIGJ5IFwiZGVmYXVsdFwiKVxyXG4gKiAtIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCwgTGljZW5zZTogQ0MwIChyZXF1aXJlZCBieSBcImRlZmF1bHRcIilcclxuICogLSBVUkwsIExpY2Vuc2U6IENDMCAocmVxdWlyZWQgYnkgXCJkZWZhdWx0XCIpICovXHJcblxyXG5cclxuXHJcbi8vIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXNcclxuRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9IEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS5vTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3RvciB8fCBmdW5jdGlvbiBtYXRjaGVzKHNlbGVjdG9yKSB7XHJcblxyXG5cdHZhciBlbGVtZW50ID0gdGhpcztcclxuXHR2YXIgZWxlbWVudHMgPSAoZWxlbWVudC5kb2N1bWVudCB8fCBlbGVtZW50Lm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cdHZhciBpbmRleCA9IDA7XHJcblxyXG5cdHdoaWxlIChlbGVtZW50c1tpbmRleF0gJiYgZWxlbWVudHNbaW5kZXhdICE9PSBlbGVtZW50KSB7XHJcblx0XHQrK2luZGV4O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuICEhZWxlbWVudHNbaW5kZXhdO1xyXG59O1xyXG5cclxuLy8gRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdFxyXG5FbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xyXG5cdHZhciBub2RlID0gdGhpcztcclxuXHJcblx0d2hpbGUgKG5vZGUpIHtcclxuXHRcdGlmIChub2RlLm1hdGNoZXMoc2VsZWN0b3IpKSByZXR1cm4gbm9kZTtcclxuXHRcdGVsc2Ugbm9kZSA9IG5vZGUucGFyZW50RWxlbWVudDtcclxuXHR9XHJcblxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuXHJcblxyXG4vKiEgQHNvdXJjZSBodHRwOi8vcHVybC5lbGlncmV5LmNvbS9naXRodWIvY2xhc3NMaXN0LmpzL2Jsb2IvbWFzdGVyL2NsYXNzTGlzdC5qcyAqL1xyXG5cImRvY3VtZW50XCJpbiBzZWxmJiYoXCJjbGFzc0xpc3RcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJfXCIpJiYoIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROU3x8XCJjbGFzc0xpc3RcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXCJnXCIpKXx8ZnVuY3Rpb24oYSl7aWYoXCJFbGVtZW50XCJpbiBhKXthPWEuRWxlbWVudC5wcm90b3R5cGU7dmFyIGg9T2JqZWN0LGw9U3RyaW5nLnByb3RvdHlwZS50cmltfHxmdW5jdGlvbigpe3JldHVybiB0aGlzLnJlcGxhY2UoL15cXHMrfFxccyskL2csXCJcIil9LG49QXJyYXkucHJvdG90eXBlLmluZGV4T2Z8fGZ1bmN0aW9uKGMpe2Zvcih2YXIgYj0wLGs9dGhpcy5sZW5ndGg7YjxrO2IrKylpZihiIGluIHRoaXMmJnRoaXNbYl09PT1jKXJldHVybiBiO3JldHVybi0xfSxmPWZ1bmN0aW9uKGMsYil7dGhpcy5uYW1lPWM7dGhpcy5jb2RlPURPTUV4Y2VwdGlvbltjXTt0aGlzLm1lc3NhZ2U9Yn0sZT1mdW5jdGlvbihjLFxyXG5iKXtpZihcIlwiPT09Yil0aHJvdyBuZXcgZihcIlNZTlRBWF9FUlJcIixcIlRoZSB0b2tlbiBtdXN0IG5vdCBiZSBlbXB0eS5cIik7aWYoL1xccy8udGVzdChiKSl0aHJvdyBuZXcgZihcIklOVkFMSURfQ0hBUkFDVEVSX0VSUlwiLFwiVGhlIHRva2VuIG11c3Qgbm90IGNvbnRhaW4gc3BhY2UgY2hhcmFjdGVycy5cIik7cmV0dXJuIG4uY2FsbChjLGIpfSxnPWZ1bmN0aW9uKGMpe3ZhciBiPWwuY2FsbChjLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKTtiPWI/Yi5zcGxpdCgvXFxzKy8pOltdO2Zvcih2YXIgaz0wLGU9Yi5sZW5ndGg7azxlO2srKyl0aGlzLnB1c2goYltrXSk7dGhpcy5fdXBkYXRlQ2xhc3NOYW1lPWZ1bmN0aW9uKCl7Yy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHRoaXMudG9TdHJpbmcoKSl9fSxkPWcucHJvdG90eXBlPVtdLG09ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGcodGhpcyl9O2YucHJvdG90eXBlPUVycm9yLnByb3RvdHlwZTtkLml0ZW09ZnVuY3Rpb24oYyl7cmV0dXJuIHRoaXNbY118fFxyXG5udWxsfTtkLmNvbnRhaW5zPWZ1bmN0aW9uKGMpe3JldHVybiF+ZSh0aGlzLGMrXCJcIil9O2QuYWRkPWZ1bmN0aW9uKCl7dmFyIGM9YXJndW1lbnRzLGI9MCxrPWMubGVuZ3RoLGQ9ITE7ZG97dmFyIGE9Y1tiXStcIlwiO35lKHRoaXMsYSkmJih0aGlzLnB1c2goYSksZD0hMCl9d2hpbGUoKytiPGspO2QmJnRoaXMuX3VwZGF0ZUNsYXNzTmFtZSgpfTtkLnJlbW92ZT1mdW5jdGlvbigpe3ZhciBjPWFyZ3VtZW50cyxiPTAsZD1jLmxlbmd0aCxhPSExLGY7ZG97dmFyIGc9Y1tiXStcIlwiO2ZvcihmPWUodGhpcyxnKTt+ZjspdGhpcy5zcGxpY2UoZiwxKSxhPSEwLGY9ZSh0aGlzLGcpfXdoaWxlKCsrYjxkKTthJiZ0aGlzLl91cGRhdGVDbGFzc05hbWUoKX07ZC50b2dnbGU9ZnVuY3Rpb24oYyxiKXt2YXIgYT10aGlzLmNvbnRhaW5zKGMpLGQ9YT8hMCE9PWImJlwicmVtb3ZlXCI6ITEhPT1iJiZcImFkZFwiO2lmKGQpdGhpc1tkXShjKTtyZXR1cm4hMD09PWJ8fCExPT09Yj9iOiFhfTtkLnJlcGxhY2U9ZnVuY3Rpb24oYyxcclxuYil7dmFyIGE9ZShjK1wiXCIpO35hJiYodGhpcy5zcGxpY2UoYSwxLGIpLHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSgpKX07ZC50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmpvaW4oXCIgXCIpfTtpZihoLmRlZmluZVByb3BlcnR5KXtkPXtnZXQ6bSxlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH07dHJ5e2guZGVmaW5lUHJvcGVydHkoYSxcImNsYXNzTGlzdFwiLGQpfWNhdGNoKGMpe2lmKHZvaWQgMD09PWMubnVtYmVyfHwtMjE0NjgyMzI1Mj09PWMubnVtYmVyKWQuZW51bWVyYWJsZT0hMSxoLmRlZmluZVByb3BlcnR5KGEsXCJjbGFzc0xpc3RcIixkKX19ZWxzZSBoLnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fJiZhLl9fZGVmaW5lR2V0dGVyX18oXCJjbGFzc0xpc3RcIixtKX19KHNlbGYpLGZ1bmN0aW9uKCl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIik7YS5jbGFzc0xpc3QuYWRkKFwiYzFcIixcImMyXCIpO2lmKCFhLmNsYXNzTGlzdC5jb250YWlucyhcImMyXCIpKXt2YXIgaD1cclxuZnVuY3Rpb24oYSl7dmFyIGY9RE9NVG9rZW5MaXN0LnByb3RvdHlwZVthXTtET01Ub2tlbkxpc3QucHJvdG90eXBlW2FdPWZ1bmN0aW9uKGEpe3ZhciBlLGQ9YXJndW1lbnRzLmxlbmd0aDtmb3IoZT0wO2U8ZDtlKyspYT1hcmd1bWVudHNbZV0sZi5jYWxsKHRoaXMsYSl9fTtoKFwiYWRkXCIpO2goXCJyZW1vdmVcIil9YS5jbGFzc0xpc3QudG9nZ2xlKFwiYzNcIiwhMSk7aWYoYS5jbGFzc0xpc3QuY29udGFpbnMoXCJjM1wiKSl7dmFyIGw9RE9NVG9rZW5MaXN0LnByb3RvdHlwZS50b2dnbGU7RE9NVG9rZW5MaXN0LnByb3RvdHlwZS50b2dnbGU9ZnVuY3Rpb24oYSxmKXtyZXR1cm4gMSBpbiBhcmd1bWVudHMmJiF0aGlzLmNvbnRhaW5zKGEpPT09IWY/ZjpsLmNhbGwodGhpcyxhKX19XCJyZXBsYWNlXCJpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKS5jbGFzc0xpc3R8fChET01Ub2tlbkxpc3QucHJvdG90eXBlLnJlcGxhY2U9ZnVuY3Rpb24oYSxmKXt2YXIgZT10aGlzLnRvU3RyaW5nKCkuc3BsaXQoXCIgXCIpLFxyXG5nPWUuaW5kZXhPZihhK1wiXCIpO35nJiYoZT1lLnNsaWNlKGcpLHRoaXMucmVtb3ZlLmFwcGx5KHRoaXMsZSksdGhpcy5hZGQoZiksdGhpcy5hZGQuYXBwbHkodGhpcyxlLnNsaWNlKDEpKSl9KTthPW51bGx9KCkpO1xyXG5cclxuXHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICBpZiAoIHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09IFwiZnVuY3Rpb25cIiApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgZnVuY3Rpb24gQ3VzdG9tRXZlbnQgKCBldmVudCwgcGFyYW1zICkge1xyXG4gICAgcGFyYW1zID0gcGFyYW1zIHx8IHsgYnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IG51bGwgfTtcclxuICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCggJ0N1c3RvbUV2ZW50JyApO1xyXG4gICAgZXZ0LmluaXRDdXN0b21FdmVudCggZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCApO1xyXG4gICAgcmV0dXJuIGV2dDtcclxuICAgfVxyXG5cclxuICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudDtcclxufSkoKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG4vLyBwb2x5ZmlsbFxyXG5mdW5jdGlvbiBwb2x5ZmlsbCgpIHtcclxuICAvLyBhbGlhc2VzXHJcbiAgdmFyIHcgPSB3aW5kb3c7XHJcbiAgdmFyIGQgPSBkb2N1bWVudDtcclxuXHJcbiAgLy8gcmV0dXJuIGlmIHNjcm9sbCBiZWhhdmlvciBpcyBzdXBwb3J0ZWQgYW5kIHBvbHlmaWxsIGlzIG5vdCBmb3JjZWRcclxuICBpZiAoXHJcbiAgICAnc2Nyb2xsQmVoYXZpb3InIGluIGQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmXHJcbiAgICB3Ll9fZm9yY2VTbW9vdGhTY3JvbGxQb2x5ZmlsbF9fICE9PSB0cnVlXHJcbiAgKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBnbG9iYWxzXHJcbiAgdmFyIEVsZW1lbnQgPSB3LkhUTUxFbGVtZW50IHx8IHcuRWxlbWVudDtcclxuICB2YXIgU0NST0xMX1RJTUUgPSA0Njg7XHJcblxyXG4gIC8vIG9iamVjdCBnYXRoZXJpbmcgb3JpZ2luYWwgc2Nyb2xsIG1ldGhvZHNcclxuICB2YXIgb3JpZ2luYWwgPSB7XHJcbiAgICBzY3JvbGw6IHcuc2Nyb2xsIHx8IHcuc2Nyb2xsVG8sXHJcbiAgICBzY3JvbGxCeTogdy5zY3JvbGxCeSxcclxuICAgIGVsZW1lbnRTY3JvbGw6IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCB8fCBzY3JvbGxFbGVtZW50LFxyXG4gICAgc2Nyb2xsSW50b1ZpZXc6IEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3XHJcbiAgfTtcclxuXHJcbiAgLy8gZGVmaW5lIHRpbWluZyBtZXRob2RcclxuICB2YXIgbm93ID1cclxuICAgIHcucGVyZm9ybWFuY2UgJiYgdy5wZXJmb3JtYW5jZS5ub3dcclxuICAgICAgPyB3LnBlcmZvcm1hbmNlLm5vdy5iaW5kKHcucGVyZm9ybWFuY2UpXHJcbiAgICAgIDogRGF0ZS5ub3c7XHJcblxyXG4gIC8qKlxyXG4gICAqIGluZGljYXRlcyBpZiBhIHRoZSBjdXJyZW50IGJyb3dzZXIgaXMgbWFkZSBieSBNaWNyb3NvZnRcclxuICAgKiBAbWV0aG9kIGlzTWljcm9zb2Z0QnJvd3NlclxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyQWdlbnRcclxuICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cclxuICAgKi9cclxuICBmdW5jdGlvbiBpc01pY3Jvc29mdEJyb3dzZXIodXNlckFnZW50KSB7XHJcbiAgICB2YXIgdXNlckFnZW50UGF0dGVybnMgPSBbJ01TSUUgJywgJ1RyaWRlbnQvJywgJ0VkZ2UvJ107XHJcblxyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAodXNlckFnZW50UGF0dGVybnMuam9pbignfCcpKS50ZXN0KHVzZXJBZ2VudCk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIElFIGhhcyByb3VuZGluZyBidWcgcm91bmRpbmcgZG93biBjbGllbnRIZWlnaHQgYW5kIGNsaWVudFdpZHRoIGFuZFxyXG4gICAqIHJvdW5kaW5nIHVwIHNjcm9sbEhlaWdodCBhbmQgc2Nyb2xsV2lkdGggY2F1c2luZyBmYWxzZSBwb3NpdGl2ZXNcclxuICAgKiBvbiBoYXNTY3JvbGxhYmxlU3BhY2VcclxuICAgKi9cclxuICB2YXIgUk9VTkRJTkdfVE9MRVJBTkNFID0gaXNNaWNyb3NvZnRCcm93c2VyKHcubmF2aWdhdG9yLnVzZXJBZ2VudCkgPyAxIDogMDtcclxuXHJcbiAgLyoqXHJcbiAgICogY2hhbmdlcyBzY3JvbGwgcG9zaXRpb24gaW5zaWRlIGFuIGVsZW1lbnRcclxuICAgKiBAbWV0aG9kIHNjcm9sbEVsZW1lbnRcclxuICAgKiBAcGFyYW0ge051bWJlcn0geFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5XHJcbiAgICogQHJldHVybnMge3VuZGVmaW5lZH1cclxuICAgKi9cclxuICBmdW5jdGlvbiBzY3JvbGxFbGVtZW50KHgsIHkpIHtcclxuICAgIHRoaXMuc2Nyb2xsTGVmdCA9IHg7XHJcbiAgICB0aGlzLnNjcm9sbFRvcCA9IHk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXR1cm5zIHJlc3VsdCBvZiBhcHBseWluZyBlYXNlIG1hdGggZnVuY3Rpb24gdG8gYSBudW1iZXJcclxuICAgKiBAbWV0aG9kIGVhc2VcclxuICAgKiBAcGFyYW0ge051bWJlcn0ga1xyXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZWFzZShrKSB7XHJcbiAgICByZXR1cm4gMC41ICogKDEgLSBNYXRoLmNvcyhNYXRoLlBJICogaykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaW5kaWNhdGVzIGlmIGEgc21vb3RoIGJlaGF2aW9yIHNob3VsZCBiZSBhcHBsaWVkXHJcbiAgICogQG1ldGhvZCBzaG91bGRCYWlsT3V0XHJcbiAgICogQHBhcmFtIHtOdW1iZXJ8T2JqZWN0fSBmaXJzdEFyZ1xyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHNob3VsZEJhaWxPdXQoZmlyc3RBcmcpIHtcclxuICAgIGlmIChcclxuICAgICAgZmlyc3RBcmcgPT09IG51bGwgfHxcclxuICAgICAgdHlwZW9mIGZpcnN0QXJnICE9PSAnb2JqZWN0JyB8fFxyXG4gICAgICBmaXJzdEFyZy5iZWhhdmlvciA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIGZpcnN0QXJnLmJlaGF2aW9yID09PSAnYXV0bycgfHxcclxuICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgPT09ICdpbnN0YW50J1xyXG4gICAgKSB7XHJcbiAgICAgIC8vIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBvYmplY3QvbnVsbFxyXG4gICAgICAvLyBvciBiZWhhdmlvciBpcyBhdXRvLCBpbnN0YW50IG9yIHVuZGVmaW5lZFxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGZpcnN0QXJnID09PSAnb2JqZWN0JyAmJiBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ3Ntb290aCcpIHtcclxuICAgICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgYW4gb2JqZWN0IGFuZCBiZWhhdmlvciBpcyBzbW9vdGhcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRocm93IGVycm9yIHdoZW4gYmVoYXZpb3IgaXMgbm90IHN1cHBvcnRlZFxyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcclxuICAgICAgJ2JlaGF2aW9yIG1lbWJlciBvZiBTY3JvbGxPcHRpb25zICcgK1xyXG4gICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yICtcclxuICAgICAgICAnIGlzIG5vdCBhIHZhbGlkIHZhbHVlIGZvciBlbnVtZXJhdGlvbiBTY3JvbGxCZWhhdmlvci4nXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgaGFzIHNjcm9sbGFibGUgc3BhY2UgaW4gdGhlIHByb3ZpZGVkIGF4aXNcclxuICAgKiBAbWV0aG9kIGhhc1Njcm9sbGFibGVTcGFjZVxyXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWxcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhhc1Njcm9sbGFibGVTcGFjZShlbCwgYXhpcykge1xyXG4gICAgaWYgKGF4aXMgPT09ICdZJykge1xyXG4gICAgICByZXR1cm4gZWwuY2xpZW50SGVpZ2h0ICsgUk9VTkRJTkdfVE9MRVJBTkNFIDwgZWwuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChheGlzID09PSAnWCcpIHtcclxuICAgICAgcmV0dXJuIGVsLmNsaWVudFdpZHRoICsgUk9VTkRJTkdfVE9MRVJBTkNFIDwgZWwuc2Nyb2xsV2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBoYXMgYSBzY3JvbGxhYmxlIG92ZXJmbG93IHByb3BlcnR5IGluIHRoZSBheGlzXHJcbiAgICogQG1ldGhvZCBjYW5PdmVyZmxvd1xyXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWxcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGNhbk92ZXJmbG93KGVsLCBheGlzKSB7XHJcbiAgICB2YXIgb3ZlcmZsb3dWYWx1ZSA9IHcuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbClbJ292ZXJmbG93JyArIGF4aXNdO1xyXG5cclxuICAgIHJldHVybiBvdmVyZmxvd1ZhbHVlID09PSAnYXV0bycgfHwgb3ZlcmZsb3dWYWx1ZSA9PT0gJ3Njcm9sbCc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBjYW4gYmUgc2Nyb2xsZWQgaW4gZWl0aGVyIGF4aXNcclxuICAgKiBAbWV0aG9kIGlzU2Nyb2xsYWJsZVxyXG4gICAqIEBwYXJhbSB7Tm9kZX0gZWxcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xyXG4gICAqIEByZXR1cm5zIHtCb29sZWFufVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbCkge1xyXG4gICAgdmFyIGlzU2Nyb2xsYWJsZVkgPSBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsICdZJykgJiYgY2FuT3ZlcmZsb3coZWwsICdZJyk7XHJcbiAgICB2YXIgaXNTY3JvbGxhYmxlWCA9IGhhc1Njcm9sbGFibGVTcGFjZShlbCwgJ1gnKSAmJiBjYW5PdmVyZmxvdyhlbCwgJ1gnKTtcclxuXHJcbiAgICByZXR1cm4gaXNTY3JvbGxhYmxlWSB8fCBpc1Njcm9sbGFibGVYO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZmluZHMgc2Nyb2xsYWJsZSBwYXJlbnQgb2YgYW4gZWxlbWVudFxyXG4gICAqIEBtZXRob2QgZmluZFNjcm9sbGFibGVQYXJlbnRcclxuICAgKiBAcGFyYW0ge05vZGV9IGVsXHJcbiAgICogQHJldHVybnMge05vZGV9IGVsXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZmluZFNjcm9sbGFibGVQYXJlbnQoZWwpIHtcclxuICAgIHdoaWxlIChlbCAhPT0gZC5ib2R5ICYmIGlzU2Nyb2xsYWJsZShlbCkgPT09IGZhbHNlKSB7XHJcbiAgICAgIGVsID0gZWwucGFyZW50Tm9kZSB8fCBlbC5ob3N0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHNlbGYgaW52b2tlZCBmdW5jdGlvbiB0aGF0LCBnaXZlbiBhIGNvbnRleHQsIHN0ZXBzIHRocm91Z2ggc2Nyb2xsaW5nXHJcbiAgICogQG1ldGhvZCBzdGVwXHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcclxuICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHN0ZXAoY29udGV4dCkge1xyXG4gICAgdmFyIHRpbWUgPSBub3coKTtcclxuICAgIHZhciB2YWx1ZTtcclxuICAgIHZhciBjdXJyZW50WDtcclxuICAgIHZhciBjdXJyZW50WTtcclxuICAgIHZhciBlbGFwc2VkID0gKHRpbWUgLSBjb250ZXh0LnN0YXJ0VGltZSkgLyBTQ1JPTExfVElNRTtcclxuXHJcbiAgICAvLyBhdm9pZCBlbGFwc2VkIHRpbWVzIGhpZ2hlciB0aGFuIG9uZVxyXG4gICAgZWxhcHNlZCA9IGVsYXBzZWQgPiAxID8gMSA6IGVsYXBzZWQ7XHJcblxyXG4gICAgLy8gYXBwbHkgZWFzaW5nIHRvIGVsYXBzZWQgdGltZVxyXG4gICAgdmFsdWUgPSBlYXNlKGVsYXBzZWQpO1xyXG5cclxuICAgIGN1cnJlbnRYID0gY29udGV4dC5zdGFydFggKyAoY29udGV4dC54IC0gY29udGV4dC5zdGFydFgpICogdmFsdWU7XHJcbiAgICBjdXJyZW50WSA9IGNvbnRleHQuc3RhcnRZICsgKGNvbnRleHQueSAtIGNvbnRleHQuc3RhcnRZKSAqIHZhbHVlO1xyXG5cclxuICAgIGNvbnRleHQubWV0aG9kLmNhbGwoY29udGV4dC5zY3JvbGxhYmxlLCBjdXJyZW50WCwgY3VycmVudFkpO1xyXG5cclxuICAgIC8vIHNjcm9sbCBtb3JlIGlmIHdlIGhhdmUgbm90IHJlYWNoZWQgb3VyIGRlc3RpbmF0aW9uXHJcbiAgICBpZiAoY3VycmVudFggIT09IGNvbnRleHQueCB8fCBjdXJyZW50WSAhPT0gY29udGV4dC55KSB7XHJcbiAgICAgIHcucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXAuYmluZCh3LCBjb250ZXh0KSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzY3JvbGxzIHdpbmRvdyBvciBlbGVtZW50IHdpdGggYSBzbW9vdGggYmVoYXZpb3JcclxuICAgKiBAbWV0aG9kIHNtb290aFNjcm9sbFxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fE5vZGV9IGVsXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHhcclxuICAgKiBAcGFyYW0ge051bWJlcn0geVxyXG4gICAqIEByZXR1cm5zIHt1bmRlZmluZWR9XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gc21vb3RoU2Nyb2xsKGVsLCB4LCB5KSB7XHJcbiAgICB2YXIgc2Nyb2xsYWJsZTtcclxuICAgIHZhciBzdGFydFg7XHJcbiAgICB2YXIgc3RhcnRZO1xyXG4gICAgdmFyIG1ldGhvZDtcclxuICAgIHZhciBzdGFydFRpbWUgPSBub3coKTtcclxuXHJcbiAgICAvLyBkZWZpbmUgc2Nyb2xsIGNvbnRleHRcclxuICAgIGlmIChlbCA9PT0gZC5ib2R5KSB7XHJcbiAgICAgIHNjcm9sbGFibGUgPSB3O1xyXG4gICAgICBzdGFydFggPSB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldDtcclxuICAgICAgc3RhcnRZID0gdy5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXQ7XHJcbiAgICAgIG1ldGhvZCA9IG9yaWdpbmFsLnNjcm9sbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNjcm9sbGFibGUgPSBlbDtcclxuICAgICAgc3RhcnRYID0gZWwuc2Nyb2xsTGVmdDtcclxuICAgICAgc3RhcnRZID0gZWwuc2Nyb2xsVG9wO1xyXG4gICAgICBtZXRob2QgPSBzY3JvbGxFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNjcm9sbCBsb29waW5nIG92ZXIgYSBmcmFtZVxyXG4gICAgc3RlcCh7XHJcbiAgICAgIHNjcm9sbGFibGU6IHNjcm9sbGFibGUsXHJcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICBzdGFydFRpbWU6IHN0YXJ0VGltZSxcclxuICAgICAgc3RhcnRYOiBzdGFydFgsXHJcbiAgICAgIHN0YXJ0WTogc3RhcnRZLFxyXG4gICAgICB4OiB4LFxyXG4gICAgICB5OiB5XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIE9SSUdJTkFMIE1FVEhPRFMgT1ZFUlJJREVTXHJcbiAgLy8gdy5zY3JvbGwgYW5kIHcuc2Nyb2xsVG9cclxuICB3LnNjcm9sbCA9IHcuc2Nyb2xsVG8gPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXHJcbiAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcclxuICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcclxuICAgICAgb3JpZ2luYWwuc2Nyb2xsLmNhbGwoXHJcbiAgICAgICAgdyxcclxuICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICA/IGFyZ3VtZW50c1swXS5sZWZ0XHJcbiAgICAgICAgICA6IHR5cGVvZiBhcmd1bWVudHNbMF0gIT09ICdvYmplY3QnXHJcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdXHJcbiAgICAgICAgICAgIDogdy5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQsXHJcbiAgICAgICAgLy8gdXNlIHRvcCBwcm9wLCBzZWNvbmQgYXJndW1lbnQgaWYgcHJlc2VudCBvciBmYWxsYmFjayB0byBzY3JvbGxZXHJcbiAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICA/IGFyZ3VtZW50c1swXS50b3BcclxuICAgICAgICAgIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMV1cclxuICAgICAgICAgICAgOiB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldFxyXG4gICAgICApO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcclxuICAgIHNtb290aFNjcm9sbC5jYWxsKFxyXG4gICAgICB3LFxyXG4gICAgICBkLmJvZHksXHJcbiAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcclxuICAgICAgICA/IH5+YXJndW1lbnRzWzBdLmxlZnRcclxuICAgICAgICA6IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0LFxyXG4gICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcclxuICAgICAgICA/IH5+YXJndW1lbnRzWzBdLnRvcFxyXG4gICAgICAgIDogdy5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXRcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLy8gdy5zY3JvbGxCeVxyXG4gIHcuc2Nyb2xsQnkgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIGF2b2lkIGFjdGlvbiB3aGVuIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkXHJcbiAgICBpZiAoYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcclxuICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkpIHtcclxuICAgICAgb3JpZ2luYWwuc2Nyb2xsQnkuY2FsbChcclxuICAgICAgICB3LFxyXG4gICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgID8gYXJndW1lbnRzWzBdLmxlZnRcclxuICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcgPyBhcmd1bWVudHNbMF0gOiAwLFxyXG4gICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgPyBhcmd1bWVudHNbMF0udG9wXHJcbiAgICAgICAgICA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMFxyXG4gICAgICApO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcclxuICAgIHNtb290aFNjcm9sbC5jYWxsKFxyXG4gICAgICB3LFxyXG4gICAgICBkLmJvZHksXHJcbiAgICAgIH5+YXJndW1lbnRzWzBdLmxlZnQgKyAody5zY3JvbGxYIHx8IHcucGFnZVhPZmZzZXQpLFxyXG4gICAgICB+fmFyZ3VtZW50c1swXS50b3AgKyAody5zY3JvbGxZIHx8IHcucGFnZVlPZmZzZXQpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCBhbmQgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsVG9cclxuICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgPSBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxUbyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcclxuICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxyXG4gICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAvLyBpZiBvbmUgbnVtYmVyIGlzIHBhc3NlZCwgdGhyb3cgZXJyb3IgdG8gbWF0Y2ggRmlyZWZveCBpbXBsZW1lbnRhdGlvblxyXG4gICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gJ251bWJlcicgJiYgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoJ1ZhbHVlIGNvdWxkIG5vdCBiZSBjb252ZXJ0ZWQnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgb3JpZ2luYWwuZWxlbWVudFNjcm9sbC5jYWxsKFxyXG4gICAgICAgIHRoaXMsXHJcbiAgICAgICAgLy8gdXNlIGxlZnQgcHJvcCwgZmlyc3QgbnVtYmVyIGFyZ3VtZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbExlZnRcclxuICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLmxlZnRcclxuICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcgPyB+fmFyZ3VtZW50c1swXSA6IHRoaXMuc2Nyb2xsTGVmdCxcclxuICAgICAgICAvLyB1c2UgdG9wIHByb3AsIHNlY29uZCBhcmd1bWVudCBvciBmYWxsYmFjayB0byBzY3JvbGxUb3BcclxuICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0udG9wXHJcbiAgICAgICAgICA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gfn5hcmd1bWVudHNbMV0gOiB0aGlzLnNjcm9sbFRvcFxyXG4gICAgICApO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBsZWZ0ID0gYXJndW1lbnRzWzBdLmxlZnQ7XHJcbiAgICB2YXIgdG9wID0gYXJndW1lbnRzWzBdLnRvcDtcclxuXHJcbiAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXHJcbiAgICBzbW9vdGhTY3JvbGwuY2FsbChcclxuICAgICAgdGhpcyxcclxuICAgICAgdGhpcyxcclxuICAgICAgdHlwZW9mIGxlZnQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5zY3JvbGxMZWZ0IDogfn5sZWZ0LFxyXG4gICAgICB0eXBlb2YgdG9wID09PSAndW5kZWZpbmVkJyA/IHRoaXMuc2Nyb2xsVG9wIDogfn50b3BcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsQnlcclxuICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxCeSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcclxuICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxyXG4gICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xyXG4gICAgICBvcmlnaW5hbC5lbGVtZW50U2Nyb2xsLmNhbGwoXHJcbiAgICAgICAgdGhpcyxcclxuICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLmxlZnQgKyB0aGlzLnNjcm9sbExlZnRcclxuICAgICAgICAgIDogfn5hcmd1bWVudHNbMF0gKyB0aGlzLnNjcm9sbExlZnQsXHJcbiAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICA/IH5+YXJndW1lbnRzWzBdLnRvcCArIHRoaXMuc2Nyb2xsVG9wXHJcbiAgICAgICAgICA6IH5+YXJndW1lbnRzWzFdICsgdGhpcy5zY3JvbGxUb3BcclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNjcm9sbCh7XHJcbiAgICAgIGxlZnQ6IH5+YXJndW1lbnRzWzBdLmxlZnQgKyB0aGlzLnNjcm9sbExlZnQsXHJcbiAgICAgIHRvcDogfn5hcmd1bWVudHNbMF0udG9wICsgdGhpcy5zY3JvbGxUb3AsXHJcbiAgICAgIGJlaGF2aW9yOiBhcmd1bWVudHNbMF0uYmVoYXZpb3JcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3XHJcbiAgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXcgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcclxuICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcclxuICAgICAgb3JpZ2luYWwuc2Nyb2xsSW50b1ZpZXcuY2FsbChcclxuICAgICAgICB0aGlzLFxyXG4gICAgICAgIGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFyZ3VtZW50c1swXVxyXG4gICAgICApO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcclxuICAgIHZhciBzY3JvbGxhYmxlUGFyZW50ID0gZmluZFNjcm9sbGFibGVQYXJlbnQodGhpcyk7XHJcbiAgICB2YXIgcGFyZW50UmVjdHMgPSBzY3JvbGxhYmxlUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgdmFyIGNsaWVudFJlY3RzID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICBpZiAoc2Nyb2xsYWJsZVBhcmVudCAhPT0gZC5ib2R5KSB7XHJcbiAgICAgIC8vIHJldmVhbCBlbGVtZW50IGluc2lkZSBwYXJlbnRcclxuICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXHJcbiAgICAgICAgdGhpcyxcclxuICAgICAgICBzY3JvbGxhYmxlUGFyZW50LFxyXG4gICAgICAgIHNjcm9sbGFibGVQYXJlbnQuc2Nyb2xsTGVmdCArIGNsaWVudFJlY3RzLmxlZnQgLSBwYXJlbnRSZWN0cy5sZWZ0LFxyXG4gICAgICAgIHNjcm9sbGFibGVQYXJlbnQuc2Nyb2xsVG9wICsgY2xpZW50UmVjdHMudG9wIC0gcGFyZW50UmVjdHMudG9wXHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyByZXZlYWwgcGFyZW50IGluIHZpZXdwb3J0IHVubGVzcyBpcyBmaXhlZFxyXG4gICAgICBpZiAody5nZXRDb21wdXRlZFN0eWxlKHNjcm9sbGFibGVQYXJlbnQpLnBvc2l0aW9uICE9PSAnZml4ZWQnKSB7XHJcbiAgICAgICAgdy5zY3JvbGxCeSh7XHJcbiAgICAgICAgICBsZWZ0OiBwYXJlbnRSZWN0cy5sZWZ0LFxyXG4gICAgICAgICAgdG9wOiBwYXJlbnRSZWN0cy50b3AsXHJcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gcmV2ZWFsIGVsZW1lbnQgaW4gdmlld3BvcnRcclxuICAgICAgdy5zY3JvbGxCeSh7XHJcbiAgICAgICAgbGVmdDogY2xpZW50UmVjdHMubGVmdCxcclxuICAgICAgICB0b3A6IGNsaWVudFJlY3RzLnRvcCxcclxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gIC8vIGNvbW1vbmpzXHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IHBvbHlmaWxsOiBwb2x5ZmlsbCB9O1xyXG59IGVsc2Uge1xyXG4gIC8vIGdsb2JhbFxyXG4gIHBvbHlmaWxsKCk7XHJcbn1cclxuIiwiLyohIFVURi04XHJcblxyXG7CqSBrb3ZyaWdpblxyXG7QktGB0LUg0L/RgNCw0LLQsCDRgNCw0LfRgNC10YjQtdC90Ytcclxu0LrRgNCw0YHQuNCy0YvQuSDQtNC40LfQsNC50L0g0LTQvtC70LbQtdC9INC40LzQtdGC0Ywg0LrRgNCw0YHQuNCy0YvQuSDQutC+0LTCrlxyXG5cclxuaHR0cHM6Ly9naXRodWIuY29tL2h0bWxwbHVzY3NzL1xyXG5cclxuKi9cclxuXHJcbnZhciBCRiA9IHt9O1xyXG5cclxuKGZ1bmN0aW9uKCl7XHJcblxyXG5cdC8vINC+0LHRgNCw0LHQvtGC0YfQuNC6INCw0L3QuNC80LDRhtC40LlcclxuXHRCRi5jc3NBbmltYXRpb24gPSBmdW5jdGlvbihhKXt2YXIgYixjLGQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNzc2FuaW1hdGlvblwiKTtzd2l0Y2goYSl7Y2FzZSdhbmltYXRpb24nOmI9e1wiYW5pbWF0aW9uXCI6XCJhbmltYXRpb25lbmRcIixcIk9BbmltYXRpb25cIjpcIm9BbmltYXRpb25FbmRcIixcIk1vekFuaW1hdGlvblwiOlwiYW5pbWF0aW9uZW5kXCIsXCJXZWJraXRBbmltYXRpb25cIjpcIndlYmtpdEFuaW1hdGlvbkVuZFwifTticmVhaztjYXNlJ3RyYW5zaXRpb24nOmI9e1widHJhbnNpdGlvblwiOlwidHJhbnNpdGlvbmVuZFwiLFwiT1RyYW5zaXRpb25cIjpcIm9UcmFuc2l0aW9uRW5kXCIsXCJNb3pUcmFuc2l0aW9uXCI6XCJ0cmFuc2l0aW9uZW5kXCIsXCJXZWJraXRUcmFuc2l0aW9uXCI6XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCJ9fWZvcihjIGluIGIpaWYoZC5zdHlsZVtjXSE9PXVuZGVmaW5lZClyZXR1cm4gYltjXX1cclxuXHJcblx0Ly8gRGV0ZXJtaW5lIGlmIGFuIGVsZW1lbnQgaXMgaW4gdGhlIHZpc2libGUgdmlld3BvcnRcclxuXHRCRi5pc0luVmlld3BvcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcblx0XHR2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRyZXR1cm4gKHJlY3QudG9wID49IDAgJiYgcmVjdC5ib3R0b20gPD0gd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHR9XHJcblxyXG59KSgpOyIsIihmdW5jdGlvbihjYWxjdWxhdG9yKXtcclxuXHJcblx0aWYoIWNhbGN1bGF0b3IpIHtcclxuXHJcblx0XHRyZXR1cm47XHJcblxyXG5cdH1cclxuXHJcblx0d2luZG93LkNBTENVTEFUT1IgPSB3aW5kb3cuQ0FMQ1VMQVRPUiB8fCB7fTtcclxuXHJcblx0dmFyIHBhcmFtID0gY2FsY3VsYXRvci5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRvcl9fcGFyYW0nKSxcclxuXHJcblx0XHQvLyDQtNCw0L3QvdGL0LUg0LTQu9GPINC+0YLQv9GA0LDQstC60LhcclxuXHRcdHN1bUhpZGRlbiA9IGNhbGN1bGF0b3IucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0b3JfX3BhcmFtLWxvYW4tc3VtJyksXHJcblx0XHRkYXRlSGlkZGVuID0gY2FsY3VsYXRvci5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRvcl9fcGFyYW0tbG9hbi10aW1lJyksXHJcblxyXG5cdFx0Ly8g0YHQu9Cw0LnQtNC10YAg0YHRg9C80LzRi1xyXG5cdFx0c3VtID0gY2FsY3VsYXRvci5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRvcl9fc2xpZGVyLS1zdW0nKSxcclxuLy9cdFx0c3VtUGx1cyA9IGNhbGN1bGF0b3IucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0b3JfX2J0bi1zdGVwLS1zdW0tcGx1cycpLFxyXG4vL1x0XHRzdW1NaW51cyA9IGNhbGN1bGF0b3IucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0b3JfX2J0bi1zdGVwLS1zdW0tbWludXMnKSxcclxuXHRcdHN1bVRleHRJbnB1dCA9IGNhbGN1bGF0b3IucXVlcnlTZWxlY3RvcihcIi5jYWxjdWxhdG9yX19pbnB1dC10ZXh0LS1zdW1cIiksXHJcblx0XHRzdW1TZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSxcclxuXHJcblx0XHQvLyDRgdGD0LzQvNCwINC30LDQudC80LAg0LLQstC+0LRcclxuXHRcdHN1bVNldCA9IGNhbGN1bGF0b3IucXVlcnlTZWxlY3RvcignI3N1bS1zZXQnKSxcclxuXHJcblx0XHQvLyDRgdGD0LzQvNCwINC30LDQudC80LAg0LLRi9Cy0L7QtFxyXG5cdFx0c3VtVGV4dCA9IGNhbGN1bGF0b3IucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0b3JfX3N1bS10ZXh0JyksXHJcblxyXG5cdFx0Ly8g0YHRg9C80LzQsCDQstC+0LfQstGA0LDRgtCwINCy0YvQstC+0LRcclxuXHRcdHJldHVyblN1bSA9IGNhbGN1bGF0b3IucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0b3JfX3N1bS1yZXR1cm4nKSxcclxuXHJcblxyXG5cdFx0Ly8g0YHQu9Cw0LnQtNC10YAg0YHRgNC+0LrQsFxyXG5cdFx0ZGF0ZSA9IGNhbGN1bGF0b3IucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0b3JfX3NsaWRlci0tZGF0ZScpLFxyXG4vL1x0XHRkYXRlUGx1cyA9IGNhbGN1bGF0b3IucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0b3JfX2J0bi1zdGVwLS1kYXRlLXBsdXMnKSxcclxuLy9cdFx0ZGF0ZU1pbnVzID0gY2FsY3VsYXRvci5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRvcl9fYnRuLXN0ZXAtLWRhdGUtbWludXMnKSxcclxuXHRcdGRhdGVUZXh0SW5wdXQgPSBjYWxjdWxhdG9yLnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdG9yX19pbnB1dC10ZXh0LS1kYXRlJyksXHJcblx0XHRkYXRlU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JyksXHJcblxyXG5cdFx0Ly8g0YHRgNC+0Log0LfQsNC50LzQsCDQstCy0L7QtFxyXG5cdFx0ZGF0ZVNldCA9IGNhbGN1bGF0b3IucXVlcnlTZWxlY3RvcignI2RhdGUtc2V0JyksXHJcblxyXG5cdFx0Ly8g0LTQsNGC0LAg0LLQvtC30LLRgNCw0YLQsCDQstGL0LLQvtC0XHJcblx0XHRyZXR1cm5EYXRlVGV4dCA9IGNhbGN1bGF0b3IucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0b3JfX2RhdGUtcmV0dXJuJyk7XHJcblxyXG5cdC8vIHNlbGVjdFxyXG5cclxuXHRzdW1UZXh0SW5wdXQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzdW1TZWxlY3QpO1xyXG5cdGRhdGVUZXh0SW5wdXQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChkYXRlU2VsZWN0KTtcclxuXHJcblx0c3VtU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdENBTENVTEFUT1IuU1VNLnZhbHVlID0gdGhpcy52YWx1ZTtcclxuXHJcblx0XHRzdW0ubm9VaVNsaWRlci5zZXQodGhpcy52YWx1ZSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRkYXRlU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdENBTENVTEFUT1IuREFURS52YWx1ZSA9IHRoaXMudmFsdWU7XHJcblxyXG5cdFx0ZGF0ZS5ub1VpU2xpZGVyLnNldCh0aGlzLnZhbHVlKTtcclxuXHJcblx0fSk7XHJcblxyXG5cclxuXHQvLyByZXNpemVcclxuXHJcblx0dmFyIHJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpe1xyXG5cclxuXHRcdGlmICghcmVzaXplVGltZW91dCkge1xyXG5cclxuXHRcdFx0cmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cdFx0XHRcdENBTENVTEFUT1IucmVzdWx0KCk7XHJcblxyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxuXHQvLyBkZWZhdWx0XHJcblxyXG5cdENBTENVTEFUT1IuQ291bnRVcCA9IHtcclxuXHRcdHVzZUVhc2luZzogZmFsc2UsXHJcblx0XHR1c2VHcm91cGluZzogdHJ1ZSxcclxuXHRcdHNlcGFyYXRvcjogJyAnLFxyXG5cdFx0ZGVjaW1hbDogJydcclxuXHR9XHJcblxyXG5cdENBTENVTEFUT1IucmVzdWx0ID0gZnVuY3Rpb24oKXtcclxuXHJcblx0XHRDQUxDVUxBVE9SLlNVTS52YWx1ZSA9IHBhcnNlSW50KENBTENVTEFUT1IuU1VNLnZhbHVlLCAxMCk7XHJcblx0XHRDQUxDVUxBVE9SLkRBVEUudmFsdWUgPSBwYXJzZUludChDQUxDVUxBVE9SLkRBVEUudmFsdWUsIDEwKTtcclxuXHJcblx0XHRzdW1IaWRkZW4udmFsdWUgPSBDQUxDVUxBVE9SLlNVTS52YWx1ZTtcclxuXHRcdGRhdGVIaWRkZW4udmFsdWUgPSBDQUxDVUxBVE9SLkRBVEUudmFsdWU7XHJcblxyXG5cdFx0Ly8g0LjQvdC/0YPRgtGLXHJcblx0XHRzdW1TZXQudmFsdWUgPSBzZXBOdW1iZXIoQ0FMQ1VMQVRPUi5TVU0udmFsdWUpO1xyXG5cdFx0ZGF0ZVNldC52YWx1ZSA9IENBTENVTEFUT1IuREFURS52YWx1ZTtcclxuXHJcblx0XHRzdW1UZXh0SW5wdXQudGV4dENvbnRlbnQgPSBzZXBOdW1iZXIoQ0FMQ1VMQVRPUi5TVU0udmFsdWUpO1xyXG5cdFx0ZGF0ZVRleHRJbnB1dC50ZXh0Q29udGVudCA9IENBTENVTEFUT1IuREFURS52YWx1ZTtcclxuXHJcblx0XHQvLyBzZWxlY3RcclxuXHRcdHN1bVNlbGVjdC52YWx1ZSA9IENBTENVTEFUT1IuU1VNLnZhbHVlO1xyXG5cdFx0ZGF0ZVNlbGVjdC52YWx1ZSA9IENBTENVTEFUT1IuREFURS52YWx1ZTtcclxuXHJcblx0XHQvLyDQvNCw0LrRgdC40LzQsNC70YzQvdCw0Y8g0YHRg9C80LzQsFxyXG5cdFx0Y2FsY3VsYXRvci5jbGFzc0xpc3QudG9nZ2xlKCdjYWxjdWxhdG9yLS1tYXgtc3VtJywgQ0FMQ1VMQVRPUi5TVU0udmFsdWUgPiBDQUxDVUxBVE9SLnBhcmFtLm1heFN1bUZpcnN0TG9hZCk7XHJcblxyXG5cdFx0Ly8g0YDQsNGB0YfQtdGCINC/0LXRgNC10L/Qu9Cw0YLRi1xyXG5cdFx0Q0FMQ1VMQVRPUi5kaWZmID0gQ0FMQ1VMQVRPUi5TVEFWS0EgKiBDQUxDVUxBVE9SLlNVTS52YWx1ZSAqIENBTENVTEFUT1IuREFURS52YWx1ZSAvIDEwMDtcclxuXHJcblx0XHRDQUxDVUxBVE9SLmRpZmYgPSBwYXJzZUludChDQUxDVUxBVE9SLmRpZmYsIDEwKTtcclxuXHJcblx0XHQvLyDQstGL0LLQtdC70Lgg0Jog0LLQvtC30LLRgNCw0YLRg1xyXG5cclxuXHRcdGlmKENBTENVTEFUT1IucmV0dXJuU3VtQ291bnRVcCl7XHJcblxyXG5cdFx0XHRDQUxDVUxBVE9SLnJldHVyblN1bUNvdW50VXAudXBkYXRlKENBTENVTEFUT1IuU1VNLnZhbHVlICsgQ0FMQ1VMQVRPUi5kaWZmKTtcclxuXHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHJcblx0XHRcdHJldHVyblN1bS50ZXh0Q29udGVudCA9IHNlcE51bWJlcihDQUxDVUxBVE9SLlNVTS52YWx1ZSArIENBTENVTEFUT1IuZGlmZik7XHJcblxyXG5cdFx0XHRDQUxDVUxBVE9SLnJldHVyblN1bUNvdW50VXAgPSBuZXcgQ291bnRVcChyZXR1cm5TdW0sIDAsIDAsIDAsIDAuMywgQ0FMQ1VMQVRPUi5Db3VudFVwKTtcclxuXHJcblx0XHRcdGlmIChDQUxDVUxBVE9SLnJldHVyblN1bUNvdW50VXAuZXJyb3IpIHtcclxuXHJcblx0XHRcdFx0cmV0dXJuU3VtLnRleHRDb250ZW50ID0gc2VwTnVtYmVyKENBTENVTEFUT1IuU1VNLnZhbHVlICsgQ0FMQ1VMQVRPUi5kaWZmKTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdENBTENVTEFUT1IucmV0dXJuU3VtQ291bnRVcC5zdGFydCgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHQvLyDQstGL0LLQtdC70Lgg0JLRiyDQv9C+0LvRg9GH0LjRgtC1XHJcblxyXG5cdFx0aWYoQ0FMQ1VMQVRPUi5zdW1UZXh0Q291bnRVcCl7XHJcblxyXG5cdFx0XHRDQUxDVUxBVE9SLnN1bVRleHRDb3VudFVwLnVwZGF0ZShDQUxDVUxBVE9SLlNVTS52YWx1ZSk7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHJcblx0XHRcdHN1bVRleHQudGV4dENvbnRlbnQgPSBzZXBOdW1iZXIoQ0FMQ1VMQVRPUi5TVU0udmFsdWUpO1xyXG5cclxuXHRcdFx0Q0FMQ1VMQVRPUi5zdW1UZXh0Q291bnRVcCA9IG5ldyBDb3VudFVwKHN1bVRleHQsIDAsIDAsIDAsIDAuMywgQ0FMQ1VMQVRPUi5Db3VudFVwKTtcclxuXHJcblx0XHRcdGlmIChDQUxDVUxBVE9SLnN1bVRleHRDb3VudFVwLmVycm9yKSB7XHJcblxyXG5cdFx0XHRcdHN1bVRleHQudGV4dENvbnRlbnQgPSBzZXBOdW1iZXIoQ0FMQ1VMQVRPUi5TVU0udmFsdWUpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0Q0FMQ1VMQVRPUi5zdW1UZXh0Q291bnRVcC5zdGFydCgpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRkYXRlU2V0LnBhcmVudE5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXN1ZicsZGVjbGVuc2lvbihDQUxDVUxBVE9SLkRBVEUudmFsdWUsQ0FMQ1VMQVRPUi5kYXlzKSk7XHJcblxyXG5cclxuXHRcdC8vINCy0YvQstC10LvQuCDQtNCw0YLRgyDQstC+0LfQstGA0LDRgtCwXHJcblx0XHR2YXIgcmVmdW5kRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHRyZWZ1bmREYXRlLnNldERhdGUocmVmdW5kRGF0ZS5nZXREYXRlKCkgKyBDQUxDVUxBVE9SLkRBVEUudmFsdWUpO1xyXG5cclxuXHRcdHJldHVybkRhdGVUZXh0LmlubmVySFRNTCA9ICc8Yj4nICsgKCcwJyArIHJlZnVuZERhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMikgKyAnPC9iPiAnICsgQ0FMQ1VMQVRPUi5tb250aHNbcmVmdW5kRGF0ZS5nZXRNb250aCgpXSArICcsIDxiPicgKyByZWZ1bmREYXRlLmdldEZ1bGxZZWFyKCkgKyAnPC9iPic7XHJcblxyXG5cclxuXHR9O1xyXG5cclxuXHQvLyDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC70LDQudC00LXRgNC+0LJcclxuXHJcblx0Q0FMQ1VMQVRPUi51cGRhdGVTbGlkZXIgPSBmdW5jdGlvbigpe1xyXG5cclxuXHRcdC8vICUg0YHRgtCw0LLQutCwXHJcblx0XHRDQUxDVUxBVE9SLlNUQVZLQSA9IENBTENVTEFUT1IucGFyYW0uc3RhdmthO1xyXG5cclxuXHRcdC8vINGB0YPQvNC80LBcclxuXHRcdENBTENVTEFUT1IuU1VNID0ge1xyXG5cdFx0XHRtaW4gOiBDQUxDVUxBVE9SLnBhcmFtLnN1bU1pbixcclxuXHRcdFx0bWF4IDogQ0FMQ1VMQVRPUi5wYXJhbS5zdW1NYXgsXHJcblx0XHRcdHN0ZXAgOiBDQUxDVUxBVE9SLnBhcmFtLnN1bVN0ZXAsXHJcblx0XHRcdHZhbHVlIDogQ0FMQ1VMQVRPUi5wYXJhbS5zdW1WYWx1ZVxyXG5cdFx0fTtcclxuXHJcblx0XHQvLyDQtNCw0YLQsFxyXG5cdFx0Q0FMQ1VMQVRPUi5EQVRFID0ge1xyXG5cdFx0XHRtaW4gOiBDQUxDVUxBVE9SLnBhcmFtLmRhdGVNaW4sXHJcblx0XHRcdG1heCA6IENBTENVTEFUT1IucGFyYW0uZGF0ZU1heCxcclxuXHRcdFx0c3RlcCA6IENBTENVTEFUT1IucGFyYW0uZGF0ZVN0ZXAsXHJcblx0XHRcdHZhbHVlIDogQ0FMQ1VMQVRPUi5wYXJhbS5kYXRlVmFsdWVcclxuXHRcdH07XHJcblxyXG5cdFx0aWYoc3VtLm5vVWlTbGlkZXIpIHtcclxuXHJcblx0XHRcdHN1bS5ub1VpU2xpZGVyLnVwZGF0ZU9wdGlvbnMoe1xyXG5cdFx0XHRcdHN0YXJ0OiBDQUxDVUxBVE9SLlNVTS52YWx1ZSxcclxuXHRcdFx0XHRyYW5nZToge1xyXG5cdFx0XHRcdFx0J21pbic6IENBTENVTEFUT1IuU1VNLm1pbixcclxuXHRcdFx0XHRcdCdtYXgnOiBDQUxDVUxBVE9SLlNVTS5tYXhcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHN0ZXA6IENBTENVTEFUT1IuU1VNLnN0ZXBcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRkYXRlLm5vVWlTbGlkZXIudXBkYXRlT3B0aW9ucyh7XHJcblx0XHRcdFx0c3RhcnQ6IENBTENVTEFUT1IuREFURS52YWx1ZSxcclxuXHRcdFx0XHRyYW5nZToge1xyXG5cdFx0XHRcdFx0J21pbic6IENBTENVTEFUT1IuREFURS5taW4sXHJcblx0XHRcdFx0XHQnbWF4JzogQ0FMQ1VMQVRPUi5EQVRFLm1heFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c3RlcDogQ0FMQ1VMQVRPUi5EQVRFLnN0ZXBcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGNhbGN1bGF0b3IucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0b3JfX21pbi1zdW0nKS50ZXh0Q29udGVudCA9IHNlcE51bWJlcihDQUxDVUxBVE9SLlNVTS5taW4pO1xyXG5cdFx0Y2FsY3VsYXRvci5xdWVyeVNlbGVjdG9yKCcuY2FsY3VsYXRvcl9fbWF4LXN1bScpLnRleHRDb250ZW50ID0gc2VwTnVtYmVyKENBTENVTEFUT1IuU1VNLm1heCk7XHJcblx0XHRjYWxjdWxhdG9yLnF1ZXJ5U2VsZWN0b3IoJy5jYWxjdWxhdG9yX19taW4tZGF0ZScpLnRleHRDb250ZW50ID0gQ0FMQ1VMQVRPUi5EQVRFLm1pbjtcclxuXHRcdGNhbGN1bGF0b3IucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0b3JfX21heC1kYXRlJykudGV4dENvbnRlbnQgPSBDQUxDVUxBVE9SLkRBVEUubWF4O1xyXG5cclxuXHRcdC8vIHNlbGVjdFxyXG5cclxuXHRcdHZhciBvcHRpb24gPSAnPG9wdGlvbiBkaXNhYmxlZD1cImRpc2FibGVkXCI+JyArIENBTENVTEFUT1Iuc2VsZWN0TGFiZWxbMF0rICc8L29wdGlvbj4nO1xyXG5cdFx0Zm9yICh2YXIgaSA9IENBTENVTEFUT1IuU1VNLm1pbjsgaSA8PSBDQUxDVUxBVE9SLlNVTS5tYXg7IGkgKz0gQ0FMQ1VMQVRPUi5TVU0uc3RlcCl7XHJcblxyXG5cdFx0XHRvcHRpb24gKz0gJzxvcHRpb24gdmFsdWU9XCInKyBpICsnXCI+Jysgc2VwTnVtYmVyKGkpICsnPC9vcHRpb24+JztcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0c3VtU2VsZWN0LmlubmVySFRNTCA9IG9wdGlvbjtcclxuXHRcdHN1bVNlbGVjdC52YWx1ZSA9IENBTENVTEFUT1IuU1VNLnZhbHVlO1xyXG5cclxuXHRcdG9wdGlvbiA9ICc8b3B0aW9uIGRpc2FibGVkPVwiZGlzYWJsZWRcIj4nICsgQ0FMQ1VMQVRPUi5zZWxlY3RMYWJlbFsxXSArICc8L29wdGlvbj4nO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSBDQUxDVUxBVE9SLkRBVEUubWluOyBpIDw9IENBTENVTEFUT1IuREFURS5tYXg7IGkgKz0gQ0FMQ1VMQVRPUi5EQVRFLnN0ZXApe1xyXG5cclxuXHRcdFx0b3B0aW9uICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIGkgKyAnXCI+JyArIGkgKyAnPC9vcHRpb24+JztcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0ZGF0ZVNlbGVjdC5pbm5lckhUTUwgPSBvcHRpb247XHJcblx0XHRkYXRlU2VsZWN0LnZhbHVlID0gQ0FMQ1VMQVRPUi5EQVRFLnZhbHVlO1xyXG5cclxuXHR9O1xyXG5cclxuXHRDQUxDVUxBVE9SLnVwZGF0ZVNsaWRlcigpO1xyXG5cclxuXHRub1VpU2xpZGVyLmNyZWF0ZShzdW0sIHtcclxuXHRcdHN0YXJ0OiBDQUxDVUxBVE9SLlNVTS52YWx1ZSxcclxuXHRcdGNvbm5lY3Q6IFt0cnVlLCBmYWxzZV0sXHJcblx0XHRyYW5nZToge1xyXG5cdFx0XHQnbWluJzogQ0FMQ1VMQVRPUi5TVU0ubWluLFxyXG5cdFx0XHQnbWF4JzogQ0FMQ1VMQVRPUi5TVU0ubWF4XHJcblx0XHR9LFxyXG5cdFx0c3RlcDogQ0FMQ1VMQVRPUi5TVU0uc3RlcFxyXG5cdH0pO1xyXG5cclxuXHRzdW0ubm9VaVNsaWRlci5vbigndXBkYXRlJywgZnVuY3Rpb24oZSl7XHJcblx0XHRDQUxDVUxBVE9SLlNVTS52YWx1ZSA9IGVbMF07XHJcblx0XHRDQUxDVUxBVE9SLnJlc3VsdCgpO1xyXG5cdH0pO1xyXG5cclxuXHRzdW0ubm9VaVNsaWRlci5vbignc2xpZGUnLCBmdW5jdGlvbihlKXtcclxuXHRcdENBTENVTEFUT1IuU1VNLnZhbHVlID0gZVswXTtcclxuXHRcdENBTENVTEFUT1IucmVzdWx0KCk7XHJcblx0fSk7XHJcblxyXG5cdHN1bS5ub1VpU2xpZGVyLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKXtcclxuXHRcdENBTENVTEFUT1IuU1VNLnZhbHVlID0gZVswXTtcclxuXHRcdENBTENVTEFUT1IucmVzdWx0KCk7XHJcblx0fSk7XHJcblxyXG5cdG5vVWlTbGlkZXIuY3JlYXRlKGRhdGUsIHtcclxuXHRcdHN0YXJ0OiBDQUxDVUxBVE9SLkRBVEUudmFsdWUsXHJcblx0XHRjb25uZWN0OiBbdHJ1ZSwgZmFsc2VdLFxyXG5cdFx0cmFuZ2U6IHtcclxuXHRcdFx0J21pbic6IENBTENVTEFUT1IuREFURS5taW4sXHJcblx0XHRcdCdtYXgnOiBDQUxDVUxBVE9SLkRBVEUubWF4XHJcblx0XHR9LFxyXG5cdFx0c3RlcDogQ0FMQ1VMQVRPUi5EQVRFLnN0ZXBcclxuXHR9KTtcclxuXHJcblx0ZGF0ZS5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbihlKXtcclxuXHRcdENBTENVTEFUT1IuREFURS52YWx1ZSA9IGVbMF07XHJcblx0XHRDQUxDVUxBVE9SLnJlc3VsdCgpO1xyXG5cdH0pO1xyXG5cclxuXHRkYXRlLm5vVWlTbGlkZXIub24oJ3NsaWRlJywgZnVuY3Rpb24oZSl7XHJcblx0XHRDQUxDVUxBVE9SLkRBVEUudmFsdWUgPSBlWzBdO1xyXG5cdFx0Q0FMQ1VMQVRPUi5yZXN1bHQoKTtcclxuXHR9KTtcclxuXHJcblx0ZGF0ZS5ub1VpU2xpZGVyLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihlKXtcclxuXHRcdENBTENVTEFUT1IuREFURS52YWx1ZSA9IGVbMF07XHJcblx0XHRDQUxDVUxBVE9SLnJlc3VsdCgpO1xyXG5cdH0pO1xyXG5cclxuXHJcblx0Ly8g0YHQvtCx0YvRgtC40Y8g0LIg0LjQvdC/0YPRgtCw0YVcclxuXHJcblx0ZnVuY3Rpb24gaW5wdXRDaGFuZ2UoaW5wdXQpe1xyXG5cclxuXHRcdGlmKGlucHV0ID09IHN1bSkge1xyXG5cclxuXHRcdFx0dmFyIHYgPSBzdW1TZXQudmFsdWU7XHJcblxyXG5cdFx0XHRpZiAodi5tYXRjaCgvW14wLTldL2cpKVxyXG5cdFx0XHRcdHYgPSB2LnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XHJcblxyXG5cdFx0XHRpZih2ID4gQ0FMQ1VMQVRPUi5TVU0ubWF4KVxyXG5cdFx0XHRcdHYgPSBDQUxDVUxBVE9SLlNVTS5tYXg7XHJcblxyXG5cdFx0XHRpZih2IDwgQ0FMQ1VMQVRPUi5TVU0ubWluKVxyXG5cdFx0XHRcdHYgPSBDQUxDVUxBVE9SLlNVTS5taW47XHJcblxyXG5cdFx0XHRzdW0ubm9VaVNsaWRlci5zZXQodik7XHJcblxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHR2YXIgdiA9IGRhdGVTZXQudmFsdWU7XHJcblxyXG5cdFx0XHRpZiAodi5tYXRjaCgvW14wLTldL2cpKVxyXG5cdFx0XHRcdHYgPSB2LnJlcGxhY2UoL1teMC05XS9nLCAnJyk7XHJcblxyXG5cdFx0XHRpZih2ID4gQ0FMQ1VMQVRPUi5EQVRFLm1heClcclxuXHRcdFx0XHR2ID0gQ0FMQ1VMQVRPUi5EQVRFLm1heDtcclxuXHJcblx0XHRcdGlmKHYgPCBDQUxDVUxBVE9SLkRBVEUubWluKVxyXG5cdFx0XHRcdHYgPSBDQUxDVUxBVE9SLkRBVEUubWluO1xyXG5cclxuXHRcdFx0ZGF0ZS5ub1VpU2xpZGVyLnNldCh2KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0Ly8g0YTQvtC60YPRgSDRgdGD0LzQvNGLINCyINC40L3Qv9GD0YLQtVxyXG5cdHN1bVNldC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdHRoaXMudmFsdWUgPSBDQUxDVUxBVE9SLlNVTS52YWx1ZTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHRzdW1TZXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCw5KTtcclxuXHJcblx0XHR9LDEwMClcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINGE0L7QutGD0YEg0LTQsNGC0Ysg0LIg0LjQvdC/0YPRgtC1XHJcblx0ZGF0ZVNldC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdGRhdGVTZXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCw5KTtcclxuXHJcblx0XHR9LDEwMClcclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINCy0LLQvtC0INGB0YPQvNC80Ysg0Lgg0LTQsNGC0Ysg0LIg0LjQvdC/0YPRgtC1XHJcblx0c3VtU2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRpbnB1dENoYW5nZShzdW0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0c3VtU2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0aWYgKGUua2V5Q29kZSA9PSAxMykge1xyXG5cclxuXHRcdFx0dGhpcy5ibHVyKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0ZGF0ZVNldC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0aW5wdXRDaGFuZ2UoZGF0ZSk7XHJcblxyXG5cdH0pO1xyXG5cclxuXHRkYXRlU2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0aWYgKGUua2V5Q29kZSA9PSAxMykge1xyXG5cclxuXHRcdFx0dGhpcy5ibHVyKCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0Ly8gKy8tXHJcblx0c3VtU2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLGZ1bmN0aW9uKGUpe1xyXG5cclxuXHRcdGlmIChlLmtleSA9PSBcIitcIikge1xyXG5cclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRidG5QbHVzTWludXMoXCJzdW1cIiwgMSk7XHJcblxyXG5cdFx0fVxyXG5cdFx0aWYgKGUua2V5ID09IFwiLVwiKSB7XHJcblxyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGJ0blBsdXNNaW51cyhcInN1bVwiLCAtMSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0ZGF0ZVNldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJyxmdW5jdGlvbihlKSB7XHJcblxyXG5cdFx0aWYgKGUua2V5ID09IFwiK1wiKSB7XHJcblxyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGJ0blBsdXNNaW51cyhcImRhdGVcIiwgMSk7XHJcblxyXG5cdFx0fVxyXG5cdFx0aWYgKGUua2V5ID09IFwiLVwiKSB7XHJcblxyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGJ0blBsdXNNaW51cyhcImRhdGVcIiwgLTEpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdC8vINC60L3QvtC/0LrQuCArLy1cclxuLypcclxuXHRmdW5jdGlvbiBidG5QbHVzTWludXModHlwZSxzdGVwKXtcclxuXHJcblx0XHRpZih0eXBlPT1cInN1bVwiKXtcclxuXHRcdFx0Q0FMQ1VMQVRPUi5TVU0udmFsdWUgKz0gQ0FMQ1VMQVRPUi5TVU0uc3RlcCAqIHN0ZXA7XHJcblx0XHRcdHN1bS5ub1VpU2xpZGVyLnNldChDQUxDVUxBVE9SLlNVTS52YWx1ZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZWxzZSBpZih0eXBlPT1cImRhdGVcIil7XHJcblx0XHRcdENBTENVTEFUT1IuREFURS52YWx1ZSArPSBDQUxDVUxBVE9SLkRBVEUuc3RlcCAqIHN0ZXA7XHJcblx0XHRcdGRhdGUubm9VaVNsaWRlci5zZXQoQ0FMQ1VMQVRPUi5EQVRFLnZhbHVlKTtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRzdW1QbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cdFx0YnRuUGx1c01pbnVzKFwic3VtXCIsIDEpO1xyXG5cdH0pO1xyXG5cdHN1bU1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cdFx0YnRuUGx1c01pbnVzKFwic3VtXCIsIC0xKTtcclxuXHR9KTtcclxuXHRkYXRlUGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oKXtcclxuXHRcdGJ0blBsdXNNaW51cyhcImRhdGVcIiwgMSk7XHJcblx0fSk7XHJcblx0ZGF0ZU1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG5cdFx0YnRuUGx1c01pbnVzKFwiZGF0ZVwiLCAtMSk7XHJcblx0fSk7XHJcblxyXG4qL1xyXG5cclxuXHQvLyDQvtGC0LTQtdC70Y/QtdC8INGC0YvRgdGP0YfQuFxyXG5cdGZ1bmN0aW9uIHNlcE51bWJlcihzdHIpe1xyXG5cdFx0c3RyID0gcGFyc2VJbnQoc3RyLCAxMCkudG9TdHJpbmcoKTtcclxuXHRcdHJldHVybiBzdHIucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoW15cXGRdfCQpKS9nLCAnJDEgJyk7XHJcblx0fVxyXG5cdC8vINGB0LrQu9C10LjQstCw0LXQvCDRgtGL0YHRj9GH0LhcclxuXHRmdW5jdGlvbiBzdHJUb051bWJlcihuKXtcclxuXHRcdHJldHVybiBwYXJzZUludChuLnJlcGxhY2UoL1xccysvZywnJyksIDEwKTtcclxuXHR9XHJcblx0Ly8g0YHQutC70L7QvdC10L3QuNC1XHJcblx0ZnVuY3Rpb24gZGVjbGVuc2lvbihudW0sIGV4cHJlc3Npb25zKSB7XHJcblx0XHR2YXIgcjtcclxuXHRcdHZhciBjb3VudCA9IG51bSAlIDEwMDtcclxuXHRcdGlmIChjb3VudCA+IDQgJiYgY291bnQgPCAyMSlcclxuXHRcdFx0ciA9IGV4cHJlc3Npb25zWycyJ107XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0Y291bnQgPSBjb3VudCAlIDEwO1xyXG5cdFx0XHRpZiAoY291bnQgPT0gMSlcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzAnXTtcclxuXHRcdFx0ZWxzZSBpZiAoY291bnQgPiAxICYmIGNvdW50IDwgNSlcclxuXHRcdFx0XHRyID0gZXhwcmVzc2lvbnNbJzEnXTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdHIgPSBleHByZXNzaW9uc1snMiddO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHI7XHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGN1bGF0b3InKSk7IiwiKGZ1bmN0aW9uKGZhcSl7XHJcblxyXG5cdGlmKGZhcSkge1xyXG5cclxuXHRcdHZhciBuYXYgPSBmYXEucXVlcnlTZWxlY3RvckFsbCgnLmZhcV9fbmF2LWxpbmsnKSxcclxuXHRcdFx0YmxvY2sgPSBmYXEucXVlcnlTZWxlY3RvckFsbCgnLmZhcV9fYmxvY2snKTtcclxuXHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5hdiwgZnVuY3Rpb24obGluayl7XHJcblxyXG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5hdiwgZnVuY3Rpb24oZWwpe1xyXG5cclxuXHRcdFx0XHRcdGVsLmNsYXNzTGlzdC50b2dnbGUoJ2ZhcV9fbmF2LWxpbmstLWFjdGl2ZScsIGVsID09PSBsaW5rKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHZhciBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zbGljZSgxKTtcclxuXHJcblx0XHRcdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChibG9jaywgZnVuY3Rpb24oZWwpe1xyXG5cclxuXHRcdFx0XHRcdGVsLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc3VhbGx5aGlkZGVuJywgZWwuZ2V0QXR0cmlidXRlKCdpZCcpICE9PSBocmVmKTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcclxuXHJcblx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZmFxLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXFfX3Zpc3VhbGx5aGlkZGVuJyksIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHloaWRkZW4nKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufSkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhcScpKTsiLCJcclxuXHJcbihmdW5jdGlvbigpe1xyXG5cclxuLy8gaW5wdXQtYm94XHJcblxyXG5cdHZhciBpbnB1dExhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWJveF9faW5wdXQnKTtcclxuXHJcblx0ZnVuY3Rpb24gZm9jdXNJbnB1dExhYmVsKGVsKXtcclxuXHJcblx0XHRlbC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2lucHV0LWJveC0tbm8tZW1wdHknLCBlbC52YWx1ZSk7XHJcblxyXG5cdH1cclxuXHJcblx0aWYoaW5wdXRMYWJlbC5sZW5ndGgpIHtcclxuXHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGlucHV0TGFiZWwsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdGZvY3VzSW5wdXRMYWJlbChlbCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdGZvY3VzSW5wdXRMYWJlbChlbCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0Zm9jdXNJbnB1dExhYmVsKGVsKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0Zm9jdXNJbnB1dExhYmVsKGVsKTtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdFx0Zm9jdXNJbnB1dExhYmVsKGVsKTtcclxuXHJcblx0XHRcdH0sMTAwMCk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKCk7IiwiQkYubWFzayA9IGZ1bmN0aW9uKGVsZW1zKXtcclxuXHJcblx0aWYoIWVsZW1zLmxlbmd0aCkge1xyXG5cclxuXHRcdHJldHVybjtcclxuXHJcblx0fVxyXG5cclxuXHRpZiAodHlwZW9mIElucHV0bWFzayA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHJcblx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcblxyXG5cdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuXHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XHJcblx0XHRzY3JpcHQuc3JjID0nL2pzL2lucHV0bWFzay5taW4uanMnO1xyXG5cclxuXHRcdHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRJbnB1dG1hc2suZXh0ZW5kRGVmYXVsdHMoe1xyXG5cdFx0XHRcdG9uY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdC8qY29uc29sZS5sb2coJ2NvbXBsZXRlJyk7Ki9cclxuXHRcdFx0XHRcdHRoaXMuY2xhc3NMaXN0LmFkZCgnaW5wdXRtYXNrLS1jb21wbGV0ZScpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0b25pbmNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHQvKmNvbnNvbGUubG9nKCdpbmNvbXBsZXRlJyk7Ki9cclxuXHRcdFx0XHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRtYXNrLS1jb21wbGV0ZScpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0b25jbGVhcmVkOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHQvKmNvbnNvbGUubG9nKCdjbGVhcmVkJyk7Ki9cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG9uS2V5VmFsaWRhdGlvbjogZnVuY3Rpb24oa2V5LCByZXN1bHQpe1xyXG5cdFx0XHRcdFx0Lypjb25zb2xlLmxvZyhrZXksIHJlc3VsdCk7Ki9cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0c2V0TWFzaygpO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cclxuXHRcdH0sIDMwMDApO1xyXG5cclxuXHR9IGVsc2Uge1xyXG5cclxuXHRcdHNldE1hc2soKTtcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzZXRNYXNrKCkge1xyXG5cclxuXHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxlbXMsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRcdGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXRtYXNrLS1waG9uZScpKSB7XHJcblxyXG5cdFx0XHRcdHZhciBtYXNrSW5wdXQgPSBuZXcgSW5wdXRtYXNrKHtcclxuXHRcdFx0XHRcdG1hc2s6IFwiKzcgOTk5IDk5OSA5OSA5OVwiLFxyXG5cdFx0XHRcdFx0c2hvd01hc2tPbkhvdmVyOiBmYWxzZSxcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyOiBcIis3IF9fXyBfX18gX18gX19cIlxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXRtYXNrLS1kYXRlJykpIHtcclxuXHJcblx0XHRcdFx0dmFyIG1hc2tJbnB1dCA9IG5ldyBJbnB1dG1hc2soe1xyXG5cdFx0XHRcdFx0YWxpYXM6IFwiZGF0ZXRpbWVcIixcclxuXHRcdFx0XHRcdHNob3dNYXNrT25Ib3ZlcjogZmFsc2UsXHJcblx0XHRcdFx0XHRpbnB1dEZvcm1hdDogXCJkZC5tbS55eXl5XCIsXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogXCLQtNC0LtC80Lwu0LPQs9Cz0LNcIlxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKGVsLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXRtYXNrLS1jdXJyZW5jeScpKSB7XHJcblxyXG5cdFx0XHRcdHZhciBtYXNrSW5wdXQgPSBuZXcgSW5wdXRtYXNrKHtcclxuXHRcdFx0XHRcdGFsaWFzOiBcImludGVnZXJcIixcclxuXHRcdFx0XHRcdHN1ZmZpeDogJyDRgNGD0LHQu9C10LknLFxyXG5cdFx0XHRcdFx0Z3JvdXBTaXplOiAzLFxyXG5cdFx0XHRcdFx0YXV0b0dyb3VwOiB0cnVlLFxyXG5cdFx0XHRcdFx0Z3JvdXBTZXBhcmF0b3I6ICcgJyxcclxuXHRcdFx0XHRcdHJpZ2h0QWxpZ246IGZhbHNlXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHR2YXIgbWFza0lucHV0ID0gbmV3IElucHV0bWFzayhlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWFzaycpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG1hc2tJbnB1dC5tYXNrKGVsKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxufTtcclxuXHJcbkJGLm1hc2soZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0bWFzaycpKTsiLCJcclxuKGZ1bmN0aW9uKGJ0bnMpe1xyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGJ0bnMsIGZ1bmN0aW9uKGJ0bil7XHJcblxyXG5cdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0aWYoQkYuT3Blbk1lbnUpIHtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LXNob3cnKTtcclxuXHJcblx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsQkYud2luZG93U2Nyb2xsT2xkKTtcclxuXHJcblx0XHRcdFx0QkYuT3Blbk1lbnUgPSBmYWxzZTtcclxuXHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdEJGLk9wZW5NZW51ID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0Ly8g0LfQsNC/0LjRgdGL0LLQsNC10Lwg0LfQvdCw0YfQtdC90LjQtSDRgdC60YDQvtC70LvQsCDRgdGC0YDQsNC90LjRhtGLXHJcblx0XHRcdFx0QkYud2luZG93U2Nyb2xsT2xkID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLDApO1xyXG5cclxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21lbnUtc2hvdycpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tbWVudS10b2dnbGUnKSk7IiwiXHJcbihmdW5jdGlvbigpe1xyXG5cclxuXHR2YXIgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKSxcclxuXHRcdGl0ZW1zID0gbW9kYWwucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19pdGVtJyksXHJcblx0XHRidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWxdJyksXHJcblx0XHR3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXInKSxcclxuXHRcdHdpbmRvd1Njcm9sbCA9IDA7XHJcblxyXG5cdG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHJcblx0XHRpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsX19ib3gnKSB8fCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsX19jbG9zZScpKXtcclxuXHJcblx0XHRcdEJGLmhpZGVNb2RhbCgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblxyXG5cdEJGLmhpZGVNb2RhbCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5aGlkZGVuJyk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1zaG93Jyk7XHJcblx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IDA7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCx3aW5kb3dTY3JvbGwpO1xyXG5cclxuXHRcdEJGLmFjdGl2ZU1vZGFsID0gZmFsc2U7XHJcblxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtYmVoYXZpb3Itb2ZmJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gY2xlYXIgdmlkZW9cclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC12aWRlbycpLmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHR9O1xyXG5cclxuXHRCRi5tb2RhbFNob3cgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHRleHQpIHtcclxuXHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtb3BlbicsIHNlbGVjdG9yID09ICdtZW51Jyk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtYmVoYXZpb3Itb2ZmJyk7XHJcblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtc2hvdycpO1xyXG5cclxuXHRcdGlmKCFCRi5hY3RpdmVNb2RhbCl7XHJcblxyXG5cdFx0XHR3aW5kb3dTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcblxyXG5cdFx0XHR3cmFwcGVyLnN0eWxlLnRvcCA9IC13aW5kb3dTY3JvbGwgKyAncHgnO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRCRi5hY3RpdmVNb2RhbCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faXRlbS0tJyArIHNlbGVjdG9yKTtcclxuXHJcblx0XHRpZihzZWxlY3RvciA9PSAnb2snKXtcclxuXHJcblx0XHRcdEJGLmFjdGl2ZU1vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb3JtX19vaycpLnRleHRDb250ZW50ID0gdGV4dDtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChpdGVtcywgZnVuY3Rpb24oZWwpe1xyXG5cclxuXHRcdFx0ZWwuY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHloaWRkZW4nLCBlbCAhPT0gQkYuYWN0aXZlTW9kYWwpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHRcdG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5aGlkZGVuJyk7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1zaG93Jyk7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwwKTtcclxuXHJcblx0XHRCRi5hY3RpdmVNb2RhbC5mb2N1cygpO1xyXG5cclxuXHR9O1xyXG5cclxuXHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGJ0bnMsIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0QkYubW9kYWxTaG93KHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLW1vZGFsJykpO1xyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9KTtcclxuXHJcblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwgYS5tZW51X19saW5rJyksIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0QkYuaGlkZU1vZGFsKCk7XHJcblxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWwuZ2V0QXR0cmlidXRlKCdocmVmJykpKTtcclxuXHJcblx0XHRcdH0sMTAwKTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0fSk7XHJcblxyXG59KSgpOyIsIkJGLnN3aXBlciA9IGZ1bmN0aW9uKHN3aXBlckNvbnRhaW5lcil7XHJcblxyXG5cdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc3dpcGVyQ29udGFpbmVyLCBmdW5jdGlvbihzd2lwZSl7XHJcblxyXG5cdFx0dmFyIG15U3dpcGUgPSBudWxsLFxyXG5cdFx0XHRyZXNpemVUaW1lb3V0ID0gbnVsbCxcclxuXHRcdFx0d2luZG93V2lkdGhPTGQgPSBudWxsLFxyXG5cdFx0XHR0b2dnbGVTd2lwZSA9IG51bGwsXHJcblx0XHRcdHJlc2V0U3dpcGUgPSBudWxsLFxyXG5cdFx0XHRzd2lwZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxyXG5cdFx0XHRzd2lwZU5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSxcclxuXHRcdFx0c3dpcGVQcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyksXHJcblx0XHRcdGl0ZW1zID0gc3dpcGUucXVlcnlTZWxlY3RvckFsbCgnLnN3aXBlci1zbGlkZScpLFxyXG5cdFx0XHRjb3VudCA9IGl0ZW1zLmxlbmd0aCxcclxuXHRcdFx0ZmFxID0gc3dpcGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzd2lwZXItY29udGFpbmVyLS1mYXEnKSxcclxuXHRcdFx0ZmVlZGJhY2sgPSBzd2lwZS5jbGFzc0xpc3QuY29udGFpbnMoJ3N3aXBlci1jb250YWluZXItLWZlZWRiYWNrJyk7XHJcblxyXG5cdFx0c3dpcGVOYXYuY2xhc3NOYW1lID0gJ3N3aXBlci1wYWdpbmF0aW9uJztcclxuXHRcdHN3aXBlUHJldi5jbGFzc05hbWUgPSAnc3dpcGVyLWJ1dHRvbi1wcmV2IGJ1dHRvbic7XHJcblx0XHRzd2lwZU5leHQuY2xhc3NOYW1lID0gJ3N3aXBlci1idXR0b24tbmV4dCBidXR0b24nO1xyXG5cclxuXHRcdHN3aXBlUHJldi5pbm5lckhUTUwgPSAnPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+PHBhdGggZD1cIk05Ljk1IDE0LjA1TDUuMDQ2IDkuMTQySDE2VjYuODU3SDUuMDQ1TDkuOTUgMS45NTEgOC4zMzUuMzM1LjY3IDhsNy42NjUgNy42NjV6XCIvPjwvc3ZnPic7XHJcblx0XHRzd2lwZU5leHQuaW5uZXJIVE1MID0gJzxzdmcgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPjxwYXRoIGQ9XCJNNi4wNSAxNC4wNWw0LjkwNS00LjkwN0gwVjYuODU3aDEwLjk1NUw2LjA1IDEuOTUxIDcuNjY1LjMzNSAxNS4zMyA4bC03LjY2NSA3LjY2NXpcIi8+PC9zdmc+JztcclxuXHJcblx0XHRzd2lwZS5hcHBlbmRDaGlsZChzd2lwZU5hdik7XHJcblx0XHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHN3aXBlTmV4dCk7XHJcblx0XHRzd2lwZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHN3aXBlUHJldik7XHJcblxyXG5cdFx0cmVzZXRTd2lwZSA9IGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHRpZihteVN3aXBlKSB7XHJcblxyXG5cdFx0XHRcdG15U3dpcGUuZGVzdHJveShmYWxzZSx0cnVlKTtcclxuXHRcdFx0XHRteVN3aXBlID0gdW5kZWZpbmVkO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3dpcGVOYXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZU5leHQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cdFx0XHRzd2lwZVByZXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXNldFN3aXBlKCk7XHJcblxyXG5cdFx0aWYgKGZlZWRiYWNrKSB7XHJcblxyXG5cdFx0XHR0b2dnbGVTd2lwZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdFx0XHRyZXNldFN3aXBlKCk7XHJcblxyXG5cdFx0XHRcdHN3aXBlTmV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblx0XHRcdFx0c3dpcGVQcmV2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0bXlTd2lwZSA9IG5ldyBTd2lwZXIoc3dpcGUsIHtcclxuXHRcdFx0XHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0XHRcdFx0YXV0b0hlaWdodDogdHJ1ZSxcclxuXHRcdFx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdHByZXZFbDogc3dpcGVQcmV2XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChmYXEpIHtcclxuXHJcblx0XHRcdHRvZ2dsZVN3aXBlID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0XHRcdHJlc2V0U3dpcGUoKTtcclxuXHJcblx0XHRcdFx0Ly8g0YPQtNCw0LvRj9C10Lwv0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YHRiywg0YfRgtC+0LHRiyDQvdC1INC/0LXRgNC10L7Qv9GA0LXQtNC10LvRj9GC0Ywg0YHRgtC40LvQuCwg0LrQvtCz0LTQsCDRgdCy0LDQudC/INC+0YLQutC70Y7Rh9C10L1cclxuXHRcdFx0XHRzd2lwZS5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ3N3aXBlci1jb250YWluZXItc3R5bGUnLCB3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCk7XHJcblxyXG5cdFx0XHRcdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xyXG5cclxuXHRcdFx0XHRcdEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoc3dpcGUucXVlcnlTZWxlY3RvckFsbCgnLmZhcV9fdmlzdWFsbHloaWRkZW4nKSwgZnVuY3Rpb24oZWwpe1xyXG5cclxuXHRcdFx0XHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHloaWRkZW4nKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRzd2lwZU5leHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG5cdFx0XHRcdFx0c3dpcGVQcmV2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuXHJcblx0XHRcdFx0XHRteVN3aXBlID0gbmV3IFN3aXBlcihzd2lwZSwge1xyXG5cdFx0XHRcdFx0XHRsb29wOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRhdXRvSGVpZ2h0OiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0XHRcdFx0bmV4dEVsOiBzd2lwZU5leHQsXHJcblx0XHRcdFx0XHRcdFx0cHJldkVsOiBzd2lwZVByZXZcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHN3aXBlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXFfX3Zpc3VhbGx5aGlkZGVuJyksIGZ1bmN0aW9uKGVsKXtcclxuXHJcblx0XHRcdFx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5aGlkZGVuJyk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdFx0aWYgKHdpbmRvdy5Td2lwZXIgJiYgIXJlc2l6ZVRpbWVvdXQpIHtcclxuXHJcblx0XHRcdFx0XHRyZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHJcblx0XHRcdFx0XHRcdHJlc2l6ZVRpbWVvdXQgPSBudWxsO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYod2luZG93LmlubmVyV2lkdGggIT0gd2luZG93V2lkdGhPTGQpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHR3aW5kb3dXaWR0aE9MZCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuXHRcdFx0XHRcdFx0XHR0b2dnbGVTd2lwZSgpO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0sIDEwMDApO1xyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9KTtcclxuXHJcblx0XHRpZih3aW5kb3cuU3dpcGVyKSB7XHJcblxyXG5cdFx0XHR0b2dnbGVTd2lwZSgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZighQkYuc3dpcGVyLmluaXQpIHtcclxuXHJcblx0XHRcdEJGLnN3aXBlci5pbml0ID0gdHJ1ZTtcclxuXHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG5cclxuXHRcdFx0XHRzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG5cdFx0XHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XHJcblx0XHRcdFx0c2NyaXB0LnNyYyA9ICcvanMvc3dpcGVyLm1pbi5qcyc7XHJcblxyXG5cdFx0XHRcdHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdyZXNpemUnKTtcclxuXHRcdFx0XHRcdHdpbmRvdy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG5cclxuXHRcdFx0fSwzMDAwKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0pO1xyXG5cclxufTtcclxuXHJcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2lwZXItY29udGFpbmVyJykpIHtcclxuXHJcblx0QkYuc3dpcGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zd2lwZXItY29udGFpbmVyJykpO1xyXG5cclxufSIsIihmdW5jdGlvbihlbCl7XHJcblxyXG5cdGlmKGVsKSB7XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2V0RGF0ZVBsdXMoKXtcclxuXHJcblx0XHRcdHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdFx0ZGF0ZS5zZXRNaW51dGVzKGRhdGUuZ2V0TWludXRlcygpICsgdGltZXIpO1xyXG5cclxuXHRcdFx0dmFyIGggPSAoJzAnICsgZGF0ZS5nZXRIb3VycygpKS5zbGljZSgtMiksXHJcblx0XHRcdFx0bSA9ICgnMCcgKyBkYXRlLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpO1xyXG5cclxuXHRcdFx0aXRlbVswXS50ZXh0Q29udGVudCA9IGhbMF07XHJcblx0XHRcdGl0ZW1bMV0udGV4dENvbnRlbnQgPSBoWzFdO1xyXG5cdFx0XHRpdGVtWzJdLnRleHRDb250ZW50ID0gbVswXTtcclxuXHRcdFx0aXRlbVszXS50ZXh0Q29udGVudCA9IG1bMV07XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBpdGVtID0gZWwucXVlcnlTZWxlY3RvckFsbCgnLnRpbWVyLW1vbmV5X190YWJsby1pdGVtJyksXHJcblx0XHRcdHRpbWVyID0gcGFyc2VJbnQoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXRpbWVyJykpO1xyXG5cclxuXHRcdGVsLnF1ZXJ5U2VsZWN0b3IoJy50aW1lci1tb25leV9fdGFibG8tc2VwJykudGV4dENvbnRlbnQgPSAnOic7XHJcblx0XHRzZXREYXRlUGx1cygpO1xyXG5cclxuXHRcdC8vINGA0LDQtyDQsiDQvNC40L3Rg9GC0YMg0L7QsdC90L7QstC70Y/QtdC8INGH0LDRgdGLXHJcblx0XHRzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0c2V0RGF0ZVBsdXMoKTtcclxuXHJcblx0XHR9LDYwMDAwKTtcclxuXHJcblx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGl0ZW0sIGZ1bmN0aW9uKGVsZW0pe1xyXG5cclxuXHRcdFx0ZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcblxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcbn0pKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lci1tb25leScpKTsiXX0=
