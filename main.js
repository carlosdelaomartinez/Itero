!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=12)}([function(t,e,i){t.exports=i.p+"images/0844fd034db2ec287b426c27869ea354.png"},function(t,e,i){t.exports=i.p+"images/2f4dc122b0d449c01edb8a06fc278b77.png"},function(t,e,i){t.exports=i.p+"images/6756bfb01a8ef61cc97e36576024eed5.png"},function(t,e,i){t.exports=i.p+"images/22204c350c877319a524c2b0be763d75.png"},function(t,e,i){"use strict";var n=i(5),r=i(8);function o(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}e.parse=b,e.resolve=function(t,e){return b(t,!1,!0).resolve(e)},e.resolveObject=function(t,e){return t?b(t,!1,!0).resolveObject(e):e},e.format=function(t){r.isString(t)&&(t=b(t));return t instanceof o?t.format():o.prototype.format.call(t)},e.Url=o;var s=/^([a-z0-9.+-]+:)/i,a=/:[0-9]*$/,h=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,l=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),c=["'"].concat(l),u=["%","/","?",";","#"].concat(c),f=["/","?","#"],p=/^[+a-z0-9A-Z_-]{0,63}$/,v=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,d={javascript:!0,"javascript:":!0},y={javascript:!0,"javascript:":!0},g={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},m=i(9);function b(t,e,i){if(t&&r.isObject(t)&&t instanceof o)return t;var n=new o;return n.parse(t,e,i),n}o.prototype.parse=function(t,e,i){if(!r.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var o=t.indexOf("?"),a=-1!==o&&o<t.indexOf("#")?"?":"#",l=t.split(a);l[0]=l[0].replace(/\\/g,"/");var b=t=l.join(a);if(b=b.trim(),!i&&1===t.split("#").length){var w=h.exec(b);if(w)return this.path=b,this.href=b,this.pathname=w[1],w[2]?(this.search=w[2],this.query=e?m.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var C=s.exec(b);if(C){var S=(C=C[0]).toLowerCase();this.protocol=S,b=b.substr(C.length)}if(i||C||b.match(/^\/\/[^@\/]+@[^@\/]+/)){var D="//"===b.substr(0,2);!D||C&&y[C]||(b=b.substr(2),this.slashes=!0)}if(!y[C]&&(D||C&&!g[C])){for(var I,O,M=-1,Y=0;Y<f.length;Y++){-1!==(x=b.indexOf(f[Y]))&&(-1===M||x<M)&&(M=x)}-1!==(O=-1===M?b.lastIndexOf("@"):b.lastIndexOf("@",M))&&(I=b.slice(0,O),b=b.slice(O+1),this.auth=decodeURIComponent(I)),M=-1;for(Y=0;Y<u.length;Y++){var x;-1!==(x=b.indexOf(u[Y]))&&(-1===M||x<M)&&(M=x)}-1===M&&(M=b.length),this.host=b.slice(0,M),b=b.slice(M),this.parseHost(),this.hostname=this.hostname||"";var R="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!R)for(var X=this.hostname.split(/\./),_=(Y=0,X.length);Y<_;Y++){var k=X[Y];if(k&&!k.match(p)){for(var j="",A=0,P=k.length;A<P;A++)k.charCodeAt(A)>127?j+="x":j+=k[A];if(!j.match(p)){var T=X.slice(0,Y),E=X.slice(Y+1),W=k.match(v);W&&(T.push(W[1]),E.unshift(W[2])),E.length&&(b="/"+E.join(".")+b),this.hostname=T.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),R||(this.hostname=n.toASCII(this.hostname));var F=this.port?":"+this.port:"",L=this.hostname||"";this.host=L+F,this.href+=this.host,R&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==b[0]&&(b="/"+b))}if(!d[S])for(Y=0,_=c.length;Y<_;Y++){var q=c[Y];if(-1!==b.indexOf(q)){var K=encodeURIComponent(q);K===q&&(K=escape(q)),b=b.split(q).join(K)}}var U=b.indexOf("#");-1!==U&&(this.hash=b.substr(U),b=b.slice(0,U));var N=b.indexOf("?");if(-1!==N?(this.search=b.substr(N),this.query=b.substr(N+1),e&&(this.query=m.parse(this.query)),b=b.slice(0,N)):e&&(this.search="",this.query={}),b&&(this.pathname=b),g[S]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){F=this.pathname||"";var B=this.search||"";this.path=F+B}return this.href=this.format(),this},o.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var e=this.protocol||"",i=this.pathname||"",n=this.hash||"",o=!1,s="";this.host?o=t+this.host:this.hostname&&(o=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(o+=":"+this.port)),this.query&&r.isObject(this.query)&&Object.keys(this.query).length&&(s=m.stringify(this.query));var a=this.search||s&&"?"+s||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||g[e])&&!1!==o?(o="//"+(o||""),i&&"/"!==i.charAt(0)&&(i="/"+i)):o||(o=""),n&&"#"!==n.charAt(0)&&(n="#"+n),a&&"?"!==a.charAt(0)&&(a="?"+a),e+o+(i=i.replace(/[?#]/g,(function(t){return encodeURIComponent(t)})))+(a=a.replace("#","%23"))+n},o.prototype.resolve=function(t){return this.resolveObject(b(t,!1,!0)).format()},o.prototype.resolveObject=function(t){if(r.isString(t)){var e=new o;e.parse(t,!1,!0),t=e}for(var i=new o,n=Object.keys(this),s=0;s<n.length;s++){var a=n[s];i[a]=this[a]}if(i.hash=t.hash,""===t.href)return i.href=i.format(),i;if(t.slashes&&!t.protocol){for(var h=Object.keys(t),l=0;l<h.length;l++){var c=h[l];"protocol"!==c&&(i[c]=t[c])}return g[i.protocol]&&i.hostname&&!i.pathname&&(i.path=i.pathname="/"),i.href=i.format(),i}if(t.protocol&&t.protocol!==i.protocol){if(!g[t.protocol]){for(var u=Object.keys(t),f=0;f<u.length;f++){var p=u[f];i[p]=t[p]}return i.href=i.format(),i}if(i.protocol=t.protocol,t.host||y[t.protocol])i.pathname=t.pathname;else{for(var v=(t.pathname||"").split("/");v.length&&!(t.host=v.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==v[0]&&v.unshift(""),v.length<2&&v.unshift(""),i.pathname=v.join("/")}if(i.search=t.search,i.query=t.query,i.host=t.host||"",i.auth=t.auth,i.hostname=t.hostname||t.host,i.port=t.port,i.pathname||i.search){var d=i.pathname||"",m=i.search||"";i.path=d+m}return i.slashes=i.slashes||t.slashes,i.href=i.format(),i}var b=i.pathname&&"/"===i.pathname.charAt(0),w=t.host||t.pathname&&"/"===t.pathname.charAt(0),C=w||b||i.host&&t.pathname,S=C,D=i.pathname&&i.pathname.split("/")||[],I=(v=t.pathname&&t.pathname.split("/")||[],i.protocol&&!g[i.protocol]);if(I&&(i.hostname="",i.port=null,i.host&&(""===D[0]?D[0]=i.host:D.unshift(i.host)),i.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===v[0]?v[0]=t.host:v.unshift(t.host)),t.host=null),C=C&&(""===v[0]||""===D[0])),w)i.host=t.host||""===t.host?t.host:i.host,i.hostname=t.hostname||""===t.hostname?t.hostname:i.hostname,i.search=t.search,i.query=t.query,D=v;else if(v.length)D||(D=[]),D.pop(),D=D.concat(v),i.search=t.search,i.query=t.query;else if(!r.isNullOrUndefined(t.search)){if(I)i.hostname=i.host=D.shift(),(R=!!(i.host&&i.host.indexOf("@")>0)&&i.host.split("@"))&&(i.auth=R.shift(),i.host=i.hostname=R.shift());return i.search=t.search,i.query=t.query,r.isNull(i.pathname)&&r.isNull(i.search)||(i.path=(i.pathname?i.pathname:"")+(i.search?i.search:"")),i.href=i.format(),i}if(!D.length)return i.pathname=null,i.search?i.path="/"+i.search:i.path=null,i.href=i.format(),i;for(var O=D.slice(-1)[0],M=(i.host||t.host||D.length>1)&&("."===O||".."===O)||""===O,Y=0,x=D.length;x>=0;x--)"."===(O=D[x])?D.splice(x,1):".."===O?(D.splice(x,1),Y++):Y&&(D.splice(x,1),Y--);if(!C&&!S)for(;Y--;Y)D.unshift("..");!C||""===D[0]||D[0]&&"/"===D[0].charAt(0)||D.unshift(""),M&&"/"!==D.join("/").substr(-1)&&D.push("");var R,X=""===D[0]||D[0]&&"/"===D[0].charAt(0);I&&(i.hostname=i.host=X?"":D.length?D.shift():"",(R=!!(i.host&&i.host.indexOf("@")>0)&&i.host.split("@"))&&(i.auth=R.shift(),i.host=i.hostname=R.shift()));return(C=C||i.host&&D.length)&&!X&&D.unshift(""),D.length?i.pathname=D.join("/"):(i.pathname=null,i.path=null),r.isNull(i.pathname)&&r.isNull(i.search)||(i.path=(i.pathname?i.pathname:"")+(i.search?i.search:"")),i.auth=t.auth||i.auth,i.slashes=i.slashes||t.slashes,i.href=i.format(),i},o.prototype.parseHost=function(){var t=this.host,e=a.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},function(t,e,i){(function(t,n){var r;/*! https://mths.be/punycode v1.4.1 by @mathias */!function(o){e&&e.nodeType,t&&t.nodeType;var s="object"==typeof n&&n;s.global!==s&&s.window!==s&&s.self;var a,h=2147483647,l=36,c=1,u=26,f=38,p=700,v=72,d=128,y="-",g=/^xn--/,m=/[^\x20-\x7E]/,b=/[\x2E\u3002\uFF0E\uFF61]/g,w={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},C=l-c,S=Math.floor,D=String.fromCharCode;function I(t){throw new RangeError(w[t])}function O(t,e){for(var i=t.length,n=[];i--;)n[i]=e(t[i]);return n}function M(t,e){var i=t.split("@"),n="";return i.length>1&&(n=i[0]+"@",t=i[1]),n+O((t=t.replace(b,".")).split("."),e).join(".")}function Y(t){for(var e,i,n=[],r=0,o=t.length;r<o;)(e=t.charCodeAt(r++))>=55296&&e<=56319&&r<o?56320==(64512&(i=t.charCodeAt(r++)))?n.push(((1023&e)<<10)+(1023&i)+65536):(n.push(e),r--):n.push(e);return n}function x(t){return O(t,(function(t){var e="";return t>65535&&(e+=D((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=D(t)})).join("")}function R(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function X(t,e,i){var n=0;for(t=i?S(t/p):t>>1,t+=S(t/e);t>C*u>>1;n+=l)t=S(t/C);return S(n+(C+1)*t/(t+f))}function _(t){var e,i,n,r,o,s,a,f,p,g,m,b=[],w=t.length,C=0,D=d,O=v;for((i=t.lastIndexOf(y))<0&&(i=0),n=0;n<i;++n)t.charCodeAt(n)>=128&&I("not-basic"),b.push(t.charCodeAt(n));for(r=i>0?i+1:0;r<w;){for(o=C,s=1,a=l;r>=w&&I("invalid-input"),((f=(m=t.charCodeAt(r++))-48<10?m-22:m-65<26?m-65:m-97<26?m-97:l)>=l||f>S((h-C)/s))&&I("overflow"),C+=f*s,!(f<(p=a<=O?c:a>=O+u?u:a-O));a+=l)s>S(h/(g=l-p))&&I("overflow"),s*=g;O=X(C-o,e=b.length+1,0==o),S(C/e)>h-D&&I("overflow"),D+=S(C/e),C%=e,b.splice(C++,0,D)}return x(b)}function k(t){var e,i,n,r,o,s,a,f,p,g,m,b,w,C,O,M=[];for(b=(t=Y(t)).length,e=d,i=0,o=v,s=0;s<b;++s)(m=t[s])<128&&M.push(D(m));for(n=r=M.length,r&&M.push(y);n<b;){for(a=h,s=0;s<b;++s)(m=t[s])>=e&&m<a&&(a=m);for(a-e>S((h-i)/(w=n+1))&&I("overflow"),i+=(a-e)*w,e=a,s=0;s<b;++s)if((m=t[s])<e&&++i>h&&I("overflow"),m==e){for(f=i,p=l;!(f<(g=p<=o?c:p>=o+u?u:p-o));p+=l)O=f-g,C=l-g,M.push(D(R(g+O%C,0))),f=S(O/C);M.push(D(R(f,0))),o=X(i,w,n==r),i=0,++n}++i,++e}return M.join("")}a={version:"1.4.1",ucs2:{decode:Y,encode:x},decode:_,encode:k,toASCII:function(t){return M(t,(function(t){return m.test(t)?"xn--"+k(t):t}))},toUnicode:function(t){return M(t,(function(t){return g.test(t)?_(t.slice(4).toLowerCase()):t}))}},void 0===(r=function(){return a}.call(e,i,e,t))||(t.exports=r)}()}).call(this,i(6)(t),i(7))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){"use strict";t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},function(t,e,i){"use strict";e.decode=e.parse=i(10),e.encode=e.stringify=i(11)},function(t,e,i){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,i,o){e=e||"&",i=i||"=";var s={};if("string"!=typeof t||0===t.length)return s;var a=/\+/g;t=t.split(e);var h=1e3;o&&"number"==typeof o.maxKeys&&(h=o.maxKeys);var l=t.length;h>0&&l>h&&(l=h);for(var c=0;c<l;++c){var u,f,p,v,d=t[c].replace(a,"%20"),y=d.indexOf(i);y>=0?(u=d.substr(0,y),f=d.substr(y+1)):(u=d,f=""),p=decodeURIComponent(u),v=decodeURIComponent(f),n(s,p)?r(s[p])?s[p].push(v):s[p]=[s[p],v]:s[p]=v}return s};var r=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},function(t,e,i){"use strict";var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,i,a){return e=e||"&",i=i||"=",null===t&&(t=void 0),"object"==typeof t?o(s(t),(function(s){var a=encodeURIComponent(n(s))+i;return r(t[s])?o(t[s],(function(t){return a+encodeURIComponent(n(t))})).join(e):a+encodeURIComponent(n(t[s]))})).join(e):a?encodeURIComponent(n(a))+i+encodeURIComponent(n(t)):""};var r=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function o(t,e){if(t.map)return t.map(e);for(var i=[],n=0;n<t.length;n++)i.push(e(t[n],n));return i}var s=Object.keys||function(t){var e=[];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.push(i);return e}},function(t,e,i){"use strict";i.r(e);var n=i(0),r=i.n(n),o=i(1),s=i.n(o);function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h,l,c,u=function(){function t(e,i,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.xpos=e,this.ypos=i,this.velX=n,this.velY=r}var e,i,n;return e=t,(i=[{key:"move",value:function(t){var e=t/Object.FRAME_RATE_TIME_CHANGE;this.xpos=this.xpos+this.velX*e,this.ypos=this.ypos+this.velY*e}}])&&a(e.prototype,i),n&&a(e,n),t}();c=1e3/60,(l="FRAME_RATE_TIME_CHANGE")in(h=u)?Object.defineProperty(h,l,{value:c,enumerable:!0,configurable:!0,writable:!0}):h[l]=c;var f=u;function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function y(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var C=function(t){function e(t){var i;return v(this,e),(i=y(this,g(e).call(this))).carImage=t.carImage,i.width=t.width+t.optLength,i.povToggled=t.povToggled,i.xpos=t.xpos+t.offset,i.ypos=t.ypos,i.velX=t.velX,i.velY=t.velY,i.optLength=t.optLength,i.height=t.height,i.playerCollision=!1,i.collidedWidthId="",i.time=t.time,i.first=t.first,i.direction=t.direction,i.carImageY=i.getRandomCarPosition(),i.carDirection=i.direction===k.FORWARD?128:640,i.id="".concat(Math.round(Math.random()*i.xpos)).concat(Math.round(Math.random()*i.ypos)).concat(Math.round(i.time)),i.rotationSpeed=0,i.rotating=!1,i.rotateDirection=!1,i.setCenter(),i.handleKeys(),i}var i,n,r;return m(e,t),i=e,(n=[{key:"getRandomCarPosition",value:function(){return Math.floor(12*Math.random())/12*768}},{key:"handleKeys",value:function(){}},{key:"setCenter",value:function(){this.centerX=this.xpos+this.width/2,this.centerY=this.ypos+this.height/2}},{key:"move",value:function(t){var e=t/(1e3/60);Math.abs(this.velX)>3&&(this.velX=5*Math.sign(this.velX)),Math.abs(this.velY)>3&&(this.velY=5*Math.sign(this.velY)),this.xpos+=this.velX*e,this.ypos+=this.velY*e,this.centerX+=this.velX*e,this.centerY+=this.velY*e}},{key:"draw",value:function(t){var e=new Image;e.src=s.a,t.beginPath(),t.fillStyle=this.color,t.fillRect(this.xpos,this.ypos,this.width,this.height),!0===this.rotating?(this.rotateCarImage(this.rotateDirection),t.save(),t.translate(this.xpos,this.ypos),t.rotate(20*Math.PI/180),t.drawImage(e,this.carDirection,this.carImageY+13,60,35,0,0,this.width,this.height),t.restore()):t.drawImage(e,this.carDirection,this.carImageY+13,60,35,this.xpos,this.ypos,this.width,this.height),t.closePath()}},{key:"rotateCarImage",value:function(t){this.rotationSpeed+=1,t===e.CLOCKWISE&&3===this.rotationSpeed?(this.carDirection={0:64,64:128,128:192,192:256,256:320,320:384,384:448,448:512,512:576,576:640,640:704,704:768,768:832,832:896,896:0}[this.carDirection],this.rotationSpeed=0):t==e.COUNTERCLOCKWISE&&3===this.rotationSpeed&&(this.carDirection={0:896,64:0,128:64,192:128,256:192,320:256,384:320,448:384,512:448,576:512,640:576,704:640,768:704,832:768,896:832}[this.carDirection],this.rotationSpeed=0)}},{key:"startRotateEvent",value:function(t){var i=this;this.rotateDirection=1===t?e.CLOCKWISE:e.COUNTERCLOCKWISE,this.rotating=!0,setTimeout((function(){i.rotating=!1}),1500)}},{key:"togglePlayerCollision",value:function(){var t=this;this.playerCollision=!0,setTimeout((function(){t.playerCollision=!1}),1500)}}])&&d(i.prototype,n),r&&d(i,r),e}(f);w(C,"CLOCKWISE","CLOCKWISE"),w(C,"COUNTERCLOCKWISE","COUNTERCLOCKWISE");var S=function(t){function e(t){var i;return v(this,e),(i=y(this,g(e).call(this,t))).color="#7cfc00",i.weight=500,i}return m(e,t),e}(C),D=function(t){function e(t){var i;return v(this,e),(i=y(this,g(e).call(this,t))).color="#565257",i.weight=300,i}return m(e,t),e}(C),I=function(t){function e(t){var i;return v(this,e),(i=y(this,g(e).call(this,t))).color="#EDC9AF",i.weight=100,i}return m(e,t),e}(C),O=i(2),M=i.n(O);function Y(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var x=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.xpos=e.xpos,this.velX=-.15,this.width=.6*N.X_DIMS}var e,i,n;return e=t,(i=[{key:"move",value:function(t){var e=t/(1e3/60);this.xpos+=this.velX*e}},{key:"draw",value:function(t){var e=new Image;e.src=M.a,t.beginPath(),t.drawImage(e,0,0,this.width,139,this.xpos,0,this.width,.25*N.Y_DIMS),t.closePath()}}])&&Y(e.prototype,i),n&&Y(e,n),t}();function R(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function X(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var _=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.width=.06*N.X_DIMS,this.height=.066*N.Y_DIMS,this.optLength=0,this.bgVel={x:-3,y:0},this.mgVel={x:-3,y:0},this.fgVel={x:-3,y:0},this.bgY=.35*N.Y_DIMS,this.mgY=.6*N.Y_DIMS,this.fgY=.85*N.Y_DIMS,this.yOffset=.1*N.Y_DIMS,this.game=e}var e,i,n;return e=t,(i=[{key:"pushMoreRoads",value:function(e){this.paths=this.generateLengthPojos(),this.generateRoads(this.paths[0],this.paths[1],this.paths[2],t.FORWARD,e)}},{key:"pushMoreRevRoads",value:function(e){this.revPaths=this.generateLengthPojos(),this.generateRoads(this.revPaths[0],this.revPaths[1],this.revPaths[2],t.BACKWARDS,e)}},{key:"handleMovingBackground",value:function(){var t=this.game.peicesToDraw.background[0],e=this.game.peicesToDraw.background[this.game.peicesToDraw.background.length-1];t.xpos+t.width<0&&(this.game.peicesToDraw.background.push(new x({xpos:e.xpos+e.width})),this.game.peicesToDraw.background.shift())}},{key:"pushStartRoads",value:function(){this.paths=this.generateLengthPojos(),this.revPaths=this.generateLengthPojos(),this.generateRoads(this.revPaths[0],this.revPaths[1],this.revPaths[2],t.BACKWARDS),this.generateRoads(this.paths[0],this.paths[1],this.paths[2],t.FORWARD),this.pushCityBackgrounds()}},{key:"pushCityBackgrounds",value:function(){for(var t=0;t<1.8*N.X_DIMS;t+=.6*N.X_DIMS)this.game.peicesToDraw.background.push(new x({xpos:t}))}},{key:"generateRoads",value:function(t,e,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this.genRoad(S,this.bgVel,i,!1,r,this.bgY,n),this.genRoad(D,this.mgVel,e,!0,r,this.mgY,n),this.genRoad(I,this.fgVel,t,!1,r,this.fgY,n)}},{key:"genRoad",value:function(e,i,n,r,o,s,a){var h=a===t.FORWARD?0:n.length-this.width;t.BACKWARDS;for(var l=0;l<N.X_DIMS;l+=this.width)if(n[l]){var c=void 0;c=l===h;var u={xpos:l,ypos:a===t.FORWARD?s:s-this.yOffset,velX:a===t.FORWARD?i.x:-i.x,velY:a===t.FORWARD?i.y:-i.y,width:this.width,optLength:this.optLength,height:this.height,povToggled:r,offset:0===o?0:a===t.FORWARD?N.X_DIMS:-N.X_DIMS,time:o,first:c,direction:a===t.FORWARD?t.FORWARD:t.BACKWARDS};a===t.FORWARD?this.game.forwardCars+=1:this.game.revCars+=1;var f=new e(u);this.game.peicesToDraw.paths[f.id]=f}}},{key:"generateLengthPojos",value:function(){for(var t=[[],[],[]],e=0;e<N.X_DIMS;)for(var i=Math.round(2*Math.random()),n=0;n<this.width;n+=this.width){switch(i){case 0:t[0][e]=!0,t[1][e]=!1,t[2][e]=!1;break;case 1:t[0][e]=!1,t[1][e]=!0,t[2][e]=!1;break;case 2:t[0][e]=!1,t[1][e]=!1,t[2][e]=!0}e++}return t}},{key:"povChange",value:function(){}}])&&R(e.prototype,i),n&&R(e,n),t}();X(_,"FORWARD","FORWARD"),X(_,"BACKWARDS","BACKWARDS");var k=_,j=i(3),A=i.n(j);function P(t){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function T(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function W(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function F(t,e){return(F=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var L=function(t){function e(){var t,i,n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,(t=!(n=E(e).call(this))||"object"!==P(n)&&"function"!=typeof n?W(i):n).height=.05*N.Y_DIMS,t.width=.025*N.X_DIMS,t.xpos=N.X_DIMS/2,t.ypos=N.Y_DIMS-t.height,t.velX=0,t.velY=0,t.color="red",t.playerCollision=!0,t.handleKeys.bind(W(t))(),t.animationX=0,t.animationY=210,t.animationCounter=0,t.animationDirection="down",t.setCenter(),t}var i,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&F(t,e)}(e,t),i=e,(n=[{key:"setCenter",value:function(){this.centerX=this.xpos+this.width/2,this.centerY=this.ypos+this.height/2}},{key:"handleKeys",value:function(){var t=this;document.addEventListener("keydown",(function(e){switch(e.keyCode){case 65:t.animationY=255,t.velX<2&&(t.velX=-.05,t.centerX+=.02*-N.X_DIMS);break;case 68:t.animationY=305,t.velX>-2&&(t.velX=.05,t.centerX+=.02*N.X_DIMS);break;case 87:t.animationY=355,t.velY>-2&&(t.velY=-.05,t.centerY+=.042*-N.Y_DIMS);break;case 83:t.animationY=210,t.velY<2&&(t.velY=.05,t.centerY+=.042*N.Y_DIMS)}}))}},{key:"move",value:function(t){var e=t/(1e3/60);this.ypos+this.height>N.Y_DIMS?(this.ypos=N.Y_DIMS-this.height,this.setCenter(),this.velY=0):this.ypos<0?(this.ypos=0,this.setCenter()):this.xpos+this.width>N.X_DIMS?(this.xpos=N.X_DIMS-this.width,this.setCenter()):this.xpos<0?(this.xpos=0,this.setCenter()):(this.ypos+=this.velY*e,this.xpos+=this.velX*e,this.setCenter())}},{key:"draw",value:function(t){this.idle();var e=new Image;e.src=A.a,t.fillStyle="red",t.fillRect(this.xpos,this.ypos,this.width,this.height),t.drawImage(e,this.animationX,this.animationY,35,35,this.xpos,this.ypos,this.width,this.height)}},{key:"idle",value:function(){10===this.animationCounter&&(this.animationX={0:50,50:100,100:0}[this.animationX],this.animationCounter=0),this.animationCounter+=1}}])&&T(i.prototype,n),r&&T(i,r),e}(f);function q(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function K(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var U=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.peicesToDraw={paths:{},player:"",background:[]},this.addPlayer(),this.recipientSpeedMod=1.5,this.colliderSpeedMod=.5,this.collisions=0,this.music=!0,this.startGameMusic(),this.forwardCars=0,this.revCars=0,this.level=new k(this),this.level.pushStartRoads()}var e,i,n;return e=t,(i=[{key:"startGameMusic",value:function(){var t=new Audio("../src/GameMusic.ogg");t.addEventListener("ended",(function(){t.currentTime=0,t.play()})),t.play()}},{key:"addPlayer",value:function(){this.peicesToDraw.player=new L}},{key:"colorBackground",value:function(e){e.fillStyle="gray",e.fillRect(0,0,t.X_DIMS,t.Y_DIMS);var i=new Image;i.src=r.a,e.drawImage(i,0,0,480,160,0,0,t.X_DIMS,.2*t.Y_DIMS),e.fillStyle="#807E78"}},{key:"step",value:function(e){for(var i in this.level.handleMovingBackground(),this.checkForPlatformCollisions(),this.peicesToDraw.paths){this.peicesToDraw.player.move(e);var n=this.peicesToDraw.paths[i];n.xpos+n.width<=0||n.ypos+n.width<=0||n.xpos>t.X_DIMS||n.ypos>t.Y_DIMS?(this.forwardCars<=t.X_DIMS/this.level.width?this.level.pushMoreRoads(e):this.revCars<=t.X_DIMS/this.level.width&&this.level.pushMoreRevRoads(e),n.direction===k.FORWARD?this.forwardCars--:this.revCars--,delete this.peicesToDraw.paths[i]):n.move(e)}this.peicesToDraw.background.forEach((function(t){return t.move(e)}))}},{key:"checkForPlatformCollisions",value:function(){var e=this.peicesToDraw.player;for(var i in this.peicesToDraw.paths){var n=this.peicesToDraw.paths[i];for(var r in this.peicesToDraw.paths){var o=this.peicesToDraw.paths[r];if(n.id!==o.id&&!0===this.checkCollision(n,o)&&n.colllidedWithId!==o.id&&o.colllidedWithId!==n.id){var s=this.getCollisionModifier(n,o),a=void 0,h=void 0;Math.abs(n.velX)+Math.abs(n.velY)>Math.abs(o.velX)+Math.abs(o.velY)?(a=n,h=o):(a=o,h=n),!0===a.playerCollision?(h.velY=(h.velY+a.velY)*s[1]*this.recipientSpeedMod,a.velY=(a.velY-h.velY)*this.colliderSpeedMod,h.velX=(h.velX+a.velX)*s[0]*this.recipientSpeedMod,a.velX=(a.velX-h.velX)*this.colliderSpeedMod,h.togglePlayerCollision(),h.colllidedWithId=a.id,a.colllidedWithId=h.id,h.startRotateEvent(s[3]),this.collisions+=1):!0===h.playerCollision&&(h.velY=(h.velY+a.velY)*s[1]*this.recipientSpeedMod,a.velY=(a.velY-h.velY)*this.colliderSpeedMod,h.velX=(h.velX+a.velX)*s[0]*this.recipientSpeedMod,a.velY=(a.velY-h.velY)*this.colliderSpeedMod,h.color="green",a.color="blue",a.togglePlayerCollision(),h.colllidedWithId=a.id,a.colllidedWithId=h.id,h.startRotateEvent(s[3]),this.collisions+=1)}}if(this.checkCollision(e,n)){var l=this.getCollisionModifier(e,n);carThud.play(),n.color="blue",e.color="blue",n.velX=0,n.velY=0,n.velX+=3*l[0],n.velY+=3*l[1],n.togglePlayerCollision(),n.colllidedWithId="",n.startRotateEvent(l[3]),this.collisions+=1}else setTimeout((function(){e.color="red"}),1e4);!0===n.rotating&&(n.xpos+n.width>t.X_DIMS?(n.xpos=t.X_DIMS-n.width,n.setCenter(),n.velX=-1*n.velX):n.xpos<0?(n.xpos=0,n.setCenter(),n.velX=-1*n.velX):n.ypos+n.height>t.Y_DIMS?(n.ypos=t.Y_DIMS-n.height,n.setCenter(),n.velY=-1*n.velY):n.ypos<.2*t.Y_DIMS&&(n.ypos=.2*t.Y_DIMS,n.setCenter(),n.velY=-1*n.velY))}}},{key:"checkCollision",value:function(t,e){return Math.abs(t.centerX-e.centerX)<(e.width+t.width)/2&&Math.abs(t.centerY-e.centerY)<(t.height+e.height)/2&&(!0===t.playerCollision||!0===e.playerCollision)}},{key:"getCollisionModifier",value:function(t,e){switch((t.centerX>e.centerX?"Xtrue":"Xfalse")+(t.centerY>e.centerY?"true":"Yfalse")){case"Xtruetrue":return[-1,-1,0];case"XtrueYfalse":return[-1,1,1];case"Xfalsetrue":return[1,-1,1];case"XfalseYfalse":return[1,1,0]}}}])&&q(e.prototype,i),n&&q(e,n),t}();K(U,"Y_DIMS",700),K(U,"X_DIMS",1e3);var N=U;i(4);function B(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var z=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.game=e,this.ctx=i,this.fontSize=Math.round(18*N.X_DIMS/800)}var e,i,n;return e=t,(i=[{key:"draw",value:function(t){for(var e in this.ctx.clearRect(0,0,N.X_DIMS,N.Y_DIMS),this.game.colorBackground(t),this.game.peicesToDraw.background.forEach((function(e){return e.draw(t)})),this.game.peicesToDraw.paths)this.game.peicesToDraw.paths[e].draw(t);this.game.peicesToDraw.player.draw(t),t.font="".concat(this.fontSize,"px Arial"),t.fillStyle="black",t.fillText("Collision Counter: ".concat(this.game.collisions),.01*N.X_DIMS,N.Y_DIMS-this.fontSize/2)}},{key:"begin",value:function(){this.previousTime=0,requestAnimationFrame(this.animate.bind(this))}},{key:"animate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=t-this.previousTime;this.game.step(e),this.draw(this.ctx),this.previousTime=t,requestAnimationFrame(this.animate.bind(this))}}])&&B(e.prototype,i),n&&B(e,n),t}();document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("canvas");t.width=N.X_DIMS,t.height=N.Y_DIMS;var e=t.getContext("2d"),i=new N;new z(i,e).begin()}))}]);