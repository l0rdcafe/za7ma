!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!x[e]||!g[e])return;for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--m&&0===v&&w()}(e,n),t&&t(e,n)};var n,r=!0,o="d0cc8bcaa86e3f636392",i=1e4,a={},c=[],s=[];function l(e){var t=j[e];if(!t)return A;var r=function(r){return t.hot.active?(j[r]?-1===j[r].parents.indexOf(e)&&j[r].parents.push(e):(c=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),A(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return A[e]},set:function(t){A[e]=t}}};for(var i in A)Object.prototype.hasOwnProperty.call(A,i)&&"e"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===d&&f("prepare"),v++,A.e(e).then(t,function(e){throw t(),e});function t(){v--,"prepare"===d&&(y[e]||E(e),0===v&&0===m&&w())}},r}var u=[],d="idle";function f(e){d=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var p,h,_,m=0,v=0,y={},g={},x={};function b(e){return+e+""===e?+e:e}function O(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return r=e,f("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=A.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return f("idle"),null;g={},y={},x=e.c,_=e.h,f("prepare");var t=new Promise(function(e,t){p={resolve:e,reject:t}});h={};return E(0),"prepare"===d&&0===v&&0===m&&w(),t});var t}function E(e){x[e]?(g[e]=!0,m++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=A.p+""+e+"."+o+".hot-update.js",t.appendChild(n)}(e)):y[e]=!0}function w(){f("ready");var e=p;if(p=null,e)if(r)Promise.resolve().then(function(){return D(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(b(n));e.resolve(t)}}function D(t){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var n,r,i,s,l;function u(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,a=o.chain;if((s=j[i])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var c=0;c<s.parents.length;c++){var l=s.parents[c],u=j[l];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([l]),moduleId:i,parentId:l};-1===t.indexOf(l)&&(u.hot._acceptedDependencies[i]?(n[l]||(n[l]=[]),p(n[l],[i])):(delete n[l],t.push(l),r.push({chain:a.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},v=[],y={},g=function(){console.warn("[HMR] unexpected require("+E.moduleId+") to disposed module")};for(var O in h)if(Object.prototype.hasOwnProperty.call(h,O)){var E;l=b(O);var w=!1,D=!1,T=!1,M="";switch((E=h[O]?u(l):{type:"disposed",moduleId:O}).chain&&(M="\nUpdate propagation: "+E.chain.join(" -> ")),E.type){case"self-declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(w=new Error("Aborted because of self decline: "+E.moduleId+M));break;case"declined":t.onDeclined&&t.onDeclined(E),t.ignoreDeclined||(w=new Error("Aborted because of declined dependency: "+E.moduleId+" in "+E.parentId+M));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(E),t.ignoreUnaccepted||(w=new Error("Aborted because "+l+" is not accepted"+M));break;case"accepted":t.onAccepted&&t.onAccepted(E),D=!0;break;case"disposed":t.onDisposed&&t.onDisposed(E),T=!0;break;default:throw new Error("Unexception type "+E.type)}if(w)return f("abort"),Promise.reject(w);if(D)for(l in y[l]=h[l],p(v,E.outdatedModules),E.outdatedDependencies)Object.prototype.hasOwnProperty.call(E.outdatedDependencies,l)&&(m[l]||(m[l]=[]),p(m[l],E.outdatedDependencies[l]));T&&(p(v,[E.moduleId]),y[l]=g)}var N,P=[];for(r=0;r<v.length;r++)l=v[r],j[l]&&j[l].hot._selfAccepted&&P.push({module:l,errorHandler:j[l].hot._selfAccepted});f("dispose"),Object.keys(x).forEach(function(e){!1===x[e]&&function(e){delete installedChunks[e]}(e)});for(var F,S,k=v.slice();k.length>0;)if(l=k.pop(),s=j[l]){var I={},H=s.hot._disposeHandlers;for(i=0;i<H.length;i++)(n=H[i])(I);for(a[l]=I,s.hot.active=!1,delete j[l],delete m[l],i=0;i<s.children.length;i++){var C=j[s.children[i]];C&&((N=C.parents.indexOf(l))>=0&&C.parents.splice(N,1))}}for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(s=j[l]))for(S=m[l],i=0;i<S.length;i++)F=S[i],(N=s.children.indexOf(F))>=0&&s.children.splice(N,1);for(l in f("apply"),o=_,y)Object.prototype.hasOwnProperty.call(y,l)&&(e[l]=y[l]);var X=null;for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(s=j[l])){S=m[l];var L=[];for(r=0;r<S.length;r++)if(F=S[r],n=s.hot._acceptedDependencies[F]){if(-1!==L.indexOf(n))continue;L.push(n)}for(r=0;r<L.length;r++){n=L[r];try{n(S)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:S[r],error:e}),t.ignoreErrored||X||(X=e)}}}for(r=0;r<P.length;r++){var q=P[r];l=q.module,c=[l];try{A(l)}catch(e){if("function"==typeof q.errorHandler)try{q.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||X||(X=n),X||(X=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||X||(X=e)}}return X?(f("fail"),Promise.reject(X)):(f("idle"),new Promise(function(e){e(v)}))}var j={};function A(t){if(j[t])return j[t].exports;var r=j[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:D,status:function(e){if(!e)return d;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:a[e]};return n=void 0,t}(t),parents:(s=c,c=[],s),children:[]};return e[t].call(r.exports,r,r.exports,l(t)),r.l=!0,r.exports}A.m=e,A.c=j,A.d=function(e,t,n){A.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},A.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},A.t=function(e,t){if(1&t&&(e=A(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(A.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)A.d(n,r,function(t){return e[t]}.bind(null,r));return n},A.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return A.d(t,"a",t),t},A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},A.p="",A.h=function(){return o},l(5)(A.s=5)}([function(e,t,n){var r,o,i;"function"==typeof Symbol&&Symbol.iterator;o=[],void 0===(i="function"==typeof(r=function(){return function(e){"use strict";void 0===(e=e||{}).escapeMode&&(e.escapeMode=!0),e.attributePrefix=e.attributePrefix||"_",e.arrayAccessForm=e.arrayAccessForm||"none",e.emptyNodeForm=e.emptyNodeForm||"text",void 0===e.enableToStringFunc&&(e.enableToStringFunc=!0),e.arrayAccessFormPaths=e.arrayAccessFormPaths||[],void 0===e.skipEmptyTextNodesForObj&&(e.skipEmptyTextNodesForObj=!0),void 0===e.stripWhitespaces&&(e.stripWhitespaces=!0),e.datetimeAccessFormPaths=e.datetimeAccessFormPaths||[],void 0===e.useDoubleQuotes&&(e.useDoubleQuotes=!1),e.xmlElementsFilter=e.xmlElementsFilter||[],e.jsonPropertiesFilter=e.jsonPropertiesFilter||[],void 0===e.keepCData&&(e.keepCData=!1);var t={ELEMENT_NODE:1,TEXT_NODE:3,CDATA_SECTION_NODE:4,COMMENT_NODE:8,DOCUMENT_NODE:9};function n(e){var t=e.localName;return null==t&&(t=e.baseName),null!=t&&""!=t||(t=e.nodeName),t}function r(e){return"string"==typeof e?e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"):e}function o(e,t,n,r){for(var o=0;o<e.length;o++){var i=e[o];if("string"==typeof i){if(i==r)break}else if(i instanceof RegExp){if(i.test(r))break}else if("function"==typeof i&&i(t,n,r))break}return o!=e.length}function i(t,n,r){switch(e.arrayAccessForm){case"property":t[n]instanceof Array?t[n+"_asArray"]=t[n]:t[n+"_asArray"]=[t[n]]}!(t[n]instanceof Array)&&e.arrayAccessFormPaths.length>0&&o(e.arrayAccessFormPaths,t,n,r)&&(t[n]=[t[n]])}function a(e){var t=e.split(/[-T:+Z]/g),n=new Date(t[0],t[1]-1,t[2]),r=t[5].split(".");if(n.setHours(t[3],t[4],r[0]),r.length>1&&n.setMilliseconds(r[1]),t[6]&&t[7]){var o=60*t[6]+Number(t[7]),i=/\d\d-\d\d:\d\d$/.test(e)?"-":"+";o=0+("-"==i?-1*o:o),n.setMinutes(n.getMinutes()-o-n.getTimezoneOffset())}else-1!==e.indexOf("Z",e.length-1)&&(n=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds())));return n}function c(n,r,i,a){return!(r==t.ELEMENT_NODE&&e.xmlElementsFilter.length>0)||o(e.xmlElementsFilter,n,i,a)}function s(r,l){if(r.nodeType==t.DOCUMENT_NODE){for(var u=new Object,d=r.childNodes,f=0;f<d.length;f++){var p=d.item(f);if(p.nodeType==t.ELEMENT_NODE){var h=n(p);u[h]=s(p,h)}}return u}if(r.nodeType==t.ELEMENT_NODE){var u=new Object;u.__cnt=0;for(var d=r.childNodes,f=0;f<d.length;f++){var p=d.item(f),h=n(p);if(p.nodeType!=t.COMMENT_NODE){var _=l+"."+h;c(u,p.nodeType,h,_)&&(u.__cnt++,null==u[h]?(u[h]=s(p,_),i(u,h,_)):(null!=u[h]&&(u[h]instanceof Array||(u[h]=[u[h]],i(u,h,_))),u[h][u[h].length]=s(p,_)))}}for(var m=0;m<r.attributes.length;m++){var v=r.attributes.item(m);u.__cnt++,u[e.attributePrefix+v.name]=v.value}var y=function(e){return e.prefix}(r);return null!=y&&""!=y&&(u.__cnt++,u.__prefix=y),null!=u["#text"]&&(u.__text=u["#text"],u.__text instanceof Array&&(u.__text=u.__text.join("\n")),e.stripWhitespaces&&(u.__text=u.__text.trim()),delete u["#text"],"property"==e.arrayAccessForm&&delete u["#text_asArray"],u.__text=function(t,n,r){if(e.datetimeAccessFormPaths.length>0){var i=r.split(".#")[0];return o(e.datetimeAccessFormPaths,t,n,i)?a(t):t}return t}(u.__text,h,l+"."+h)),null!=u["#cdata-section"]&&(u.__cdata=u["#cdata-section"],delete u["#cdata-section"],"property"==e.arrayAccessForm&&delete u["#cdata-section_asArray"]),0==u.__cnt&&"text"==e.emptyNodeForm?u="":1==u.__cnt&&null!=u.__text?u=u.__text:1!=u.__cnt||null==u.__cdata||e.keepCData?u.__cnt>1&&null!=u.__text&&e.skipEmptyTextNodesForObj&&(e.stripWhitespaces&&""==u.__text||""==u.__text.trim())&&delete u.__text:u=u.__cdata,delete u.__cnt,!e.enableToStringFunc||null==u.__text&&null==u.__cdata||(u.toString=function(){return(null!=this.__text?this.__text:"")+(null!=this.__cdata?this.__cdata:"")}),u}if(r.nodeType==t.TEXT_NODE||r.nodeType==t.CDATA_SECTION_NODE)return r.nodeValue}function l(t,n,o,i){var a="<"+(null!=t&&null!=t.__prefix?t.__prefix+":":"")+n;if(null!=o)for(var c=0;c<o.length;c++){var s=o[c],l=t[s];e.escapeMode&&(l=r(l)),a+=" "+s.substr(e.attributePrefix.length)+"=",e.useDoubleQuotes?a+='"'+l+'"':a+="'"+l+"'"}return a+=i?"/>":">"}function u(e,t){return"</"+(null!=e.__prefix?e.__prefix+":":"")+t+">"}function d(t,n){return"property"==e.arrayAccessForm&&(r=n.toString(),o="_asArray",-1!==r.indexOf(o,r.length-o.length))||0==n.toString().indexOf(e.attributePrefix)||0==n.toString().indexOf("__")||t[n]instanceof Function;var r,o}function f(e){var t=0;if(e instanceof Object)for(var n in e)d(e,n)||t++;return t}function p(t,n,r){return 0==e.jsonPropertiesFilter.length||""==r||o(e.jsonPropertiesFilter,t,n,r)}function h(t){var n=[];if(t instanceof Object)for(var r in t)-1==r.toString().indexOf("__")&&0==r.toString().indexOf(e.attributePrefix)&&n.push(r);return n}function _(t){var n="";return t instanceof Object?n+=function(t){var n="";return null!=t.__cdata&&(n+="<![CDATA["+t.__cdata+"]]>"),null!=t.__text&&(e.escapeMode?n+=r(t.__text):n+=t.__text),n}(t):null!=t&&(e.escapeMode?n+=r(t):n+=t),n}function m(e,t){return""===e?t:e+"."+t}function v(e,t,n,r){var o="";if(0==e.length)o+=l(e,t,n,!0);else for(var i=0;i<e.length;i++)o+=l(e[i],t,h(e[i]),!1),o+=y(e[i],m(r,t)),o+=u(e[i],t);return o}function y(e,t){var n="",r=f(e);if(r>0)for(var o in e)if(!d(e,o)&&(""==t||p(e,o,m(t,o)))){var i=e[o],a=h(i);if(null==i||void 0==i)n+=l(i,o,a,!0);else if(i instanceof Object)if(i instanceof Array)n+=v(i,o,a,t);else if(i instanceof Date)n+=l(i,o,a,!1),n+=i.toISOString(),n+=u(i,o);else{var c=f(i);c>0||null!=i.__text||null!=i.__cdata?(n+=l(i,o,a,!1),n+=y(i,m(t,o)),n+=u(i,o)):n+=l(i,o,a,!0)}else n+=l(i,o,a,!1),n+=_(i),n+=u(i,o)}return n+=_(e)}this.parseXmlString=function(e){var t=window.ActiveXObject||"ActiveXObject"in window;if(void 0===e)return null;var n=void 0;if(window.DOMParser){var r=new window.DOMParser,o=null;if(!t)try{o=r.parseFromString("INVALID","text/xml").getElementsByTagName("parsererror")[0].namespaceURI}catch(e){o=null}try{n=r.parseFromString(e,"text/xml"),null!=o&&n.getElementsByTagNameNS(o,"parsererror").length>0&&(n=null)}catch(e){n=null}}else 0==e.indexOf("<?")&&(e=e.substr(e.indexOf("?>")+2)),(n=new ActiveXObject("Microsoft.XMLDOM")).async="false",n.loadXML(e);return n},this.asArray=function(e){return void 0===e||null==e?[]:e instanceof Array?e:[e]},this.toXmlDateTime=function(e){return e instanceof Date?e.toISOString():"number"==typeof e?new Date(e).toISOString():null},this.asDateTime=function(e){return"string"==typeof e?a(e):e},this.xml2json=function(e){return s(e)},this.xml_str2json=function(e){var t=this.parseXmlString(e);return null!=t?this.xml2json(t):null},this.json2xml_str=function(e){return y(e,"")},this.json2xml=function(e){var t=this.json2xml_str(e);return this.parseXmlString(t)},this.getVersion=function(){return"1.2.0"}}})?r.apply(t,o):r)||(e.exports=i)},function(e,t,n){"use strict";n.r(t);var r={qs:function(e,t){return(t||document).querySelector(e)},qsa:function(e,t){return(t||document).querySelectorAll(e)},$on:function(e,t,n,r){e.addEventListener(t,n,!!r)},newEl:function(e){return document.createElement(e)},getXML:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch(e,t).then(function(e){return e.text()}).catch(function(e){return console.error(e)})}},o=n(0),i=n.n(o);var a=function(){return r.getXML("https://www.bey2ollak.com/Bey2ollak/Traffic?action=getTraffic&ver=1.0&w=320&h=240&deviceType=0&lang=1&protocol=1&city=0&lang=1").then(function(e){return t=e,(new i.a).xml_str2json(t);var t}).then(function(e){return function(e){var t=[],n=[];return e.en.rd.forEach(function(e,r){var o=e.nm,i=e.mn,a=e.hr,c=o.match(/(.)+;/),s=o.match(/;(.)+To/),l=o.match(/To(.)+/);if(null!==s&&null!==l&&null!==c){var u=s[0].replace(/;/,"").replace(/To/,"").trim();if(""!==u){var d=void 0,f=void 0;d=e.stnm?e.stnm:"unknown",f="0"===a?i+" mins":a+" hrs "+i+" mins";var p=c[0].replace(/;/,""),h=l[0].replace(/To/,"").trim(),_={label:h},m={label:u},v={source:u,target:h,road:p,traffic:d,time:f,id:"e"+r};y(_,t)||t.push(_),y(m,t)||t.push(m),n.push(v)}}function y(e,t){return t.some(function(t){return t.label===e.label})}}),{nodes:t,edges:n}}(e)})},c={},s=function(e){return(c={}).graph=e,c},l=function(e){var t=e.nodes,n=e.edges,r={"mafeesh amal":"#ed2c2c",za7ma:"#ff6f1c",lazeez:"#ffdc00",mashy:"#cefd4c","7alawa":"#19ac15",unknown:"#000"},o=t.map(function(e){return{id:e.label,label:e.label,x:Math.random(),y:Math.random(),color:"#000",size:1}}),i=n.map(function(e){return{id:e.id,source:e.source,target:e.target,color:r[""+e.traffic],x:Math.random(),y:Math.random()}}),a=new sigma({graph:{nodes:o,edges:i},renderer:{container:"sigma"}});a.startForceAtlas2(),setTimeout(function(){a.killForceAtlas2()},430),a.refresh()};r.$on(document,"DOMContentLoaded",function(){a().then(function(e){var t=s(e).graph;l(t)}).catch(function(e){return console.error(e)})})},,,function(e,t,n){},function(e,t,n){n(1),e.exports=n(4)}]);
//# sourceMappingURL=main.js.map