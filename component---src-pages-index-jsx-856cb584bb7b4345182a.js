(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2SVd":function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,r){"use strict";r("pIFo"),e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"6QWT":function(e,t,r){"use strict";r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo"),r("Vd3H"),r("bHtr"),r("xfY5");var n=r("wTIg"),o=r("q1tI"),a=r.n(o),i=r("vDqi"),s=r.n(i),c=r("5RMe");function u(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=Object(n.a)("table",{target:"e1gz6i0f0"})("font-size:.85em;width:100%;border-spacing:0;tr{display:flex;padding:10px 0;border-bottom:1px solid ",c.c,";@media only screen and (max-width:600px){flex-direction:column;}td{margin-right:10px;flex:1;}}"),f=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).state={numberOfRows:null,rows:[],error:null},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=n.prototype;return o.componentDidMount=function(){var e=this;s.a.get("https://spreadsheets.google.com/feeds/cells/1YeYLbmwW1cz92vLtOlaaF1d5POl8HI7lmYXYS9-nHAA/1/public/full?alt=json").catch((function(t){return e.setState({error:"Error connecting to google sheets. Please disable adblock or try another browser. "+(t&&t.message)})})).then((function(e){return e&&e.data&&e.data.feed&&e.data.feed.entry})).then((function(t){t||e.setState({error:"Error connecting to google sheets. Please disable adblock or try another browser."});var r=0,n=t.reduce((function(e,t){var n=Number(t.gs$cell.row),o=Number(t.gs$cell.col);return 1===n&&(r+=1),1!==o&&(e[n-1]||(e[n-1]=new Array(r).fill(" ")),e[n-1][o-1]=t.content.$t),e}),[]).slice(1).map((function(e){return e.splice(1)})).map((function(e){var t="",r=e.slice(0,1)[0],n=e.slice(1);try{t=r.slice(0,1).toUpperCase()+r.slice(1)}catch(o){t=r}return[t].concat(u(n))})).sort();e.setState({rows:n,numberOfRows:n.length,error:null})}))},o.render=function(){var e=this.state,t=e.numberOfRows,r=e.rows,n=e.error,o=this.props.spanish;return a.a.createElement("div",null,a.a.createElement("div",null,o?"Numero de firmas:":"Number of Signatures:"," ",t),a.a.createElement("p",null,n),a.a.createElement(l,null,r&&r.map((function(e,t){return a.a.createElement("tr",{key:e+"_"+t},e&&e.map((function(e,t){return a.a.createElement("td",{key:e+"_"+t},e)})))}))))},n}(a.a.Component);t.a=f},"9rSQ":function(e,t,r){"use strict";r("8+KV");var n=r("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},AphP:function(e,t,r){"use strict";var n=r("XKFU"),o=r("S/j/"),a=r("apmT");n(n.P+n.F*r("eeVq")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(e){var t=o(this),r=a(t);return"number"!=typeof r||isFinite(r)?t.toISOString():null}})},CgaS:function(e,t,r){"use strict";r("pIFo"),r("8+KV"),r("VRzm"),r("Btvt");var n=r("xTJ+"),o=r("MLWZ"),a=r("9rSQ"),i=r("UnBK"),s=r("SntB");function c(e){this.defaults=e,this.interceptors={request:new a,response:new a}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,r){return this.request(n.merge(r||{},{method:e,url:t}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,r,o){return this.request(n.merge(o||{},{method:e,url:t,data:r}))}})),e.exports=c},DfZB:function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},Dtc0:function(e,t,r){"use strict";r.r(t);var n=r("wTIg"),o=r("q1tI"),a=r.n(o),i=r("5RMe"),s=r("hYuR"),c=r("xb/Z"),u=r("PMBy"),l=r("6QWT"),f=r("vCQb");var d=Object(n.a)("div",{target:"e1sex62n0"})({name:"1xgyioy",styles:"display:flex;justify-content:space-between;@media only screen and (max-width:370px){flex-direction:column;}"});t.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(s.a,null),a.a.createElement("div",{style:{background:i.b,color:i.a,fontSize:"1.5rem"}},a.a.createElement(c.a,null,a.a.createElement("div",null,a.a.createElement(f.a,{style:{fontSize:".75em",textDecoration:"none",borderBottomColor:i.a},internal:!0,to:"/"},"English")," ",a.a.createElement("b",null,"/")," ",a.a.createElement(f.a,{style:{fontSize:".75em",textDecoration:"none"},internal:!0,to:"/es"},"Español")),a.a.createElement(u.a,{short:!0})),a.a.createElement(c.a,{noWrapperPadding:!0},a.a.createElement(d,null,a.a.createElement("div",null,a.a.createElement(f.a,{internal:!0,to:"/letter"},"Read More")),a.a.createElement("div",null,a.a.createElement(f.a,{external:!0,to:"https://berniesanders.com/volunteer/"},"Volunteer")),a.a.createElement("div",null,a.a.createElement(f.a,{external:!0,to:"mailto:service4bernie@gmail.com"},"Contact")))),a.a.createElement(c.a,null,a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(f.a,{style:{flex:1},button:!0,external:!0,to:"https://docs.google.com/forms/d/e/1FAIpQLScLnCwB99uTtfoF5arewMXdsaX6nLrRzg4ErxTg6aY2E6zqxw/viewform?usp=sf_link"},"Sign your name"))),a.a.createElement(c.a,null,a.a.createElement(l.a,null))))}},HSsa:function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},JEQr:function(e,t,r){"use strict";(function(t){r("8+KV"),r("a1Th"),r("h7Nl"),r("Btvt");var n=r("xTJ+"),o=r("yK9s"),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:("undefined"!=typeof XMLHttpRequest?s=r("tQ2B"):void 0!==t&&"[object process]"===Object.prototype.toString.call(t)&&(s=r("tQ2B")),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(a)})),e.exports=c}).call(this,r("8oxB"))},LYNF:function(e,t,r){"use strict";var n=r("OH9c");e.exports=function(e,t,r,o,a){var i=new Error(e);return n(i,t,r,o,a)}},Lmem:function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,r){"use strict";r("V+eJ"),r("jqX0"),r("8+KV"),r("a1Th"),r("h7Nl"),r("Btvt"),r("pIFo");var n=r("xTJ+");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var a;if(r)a=r(t);else if(n.isURLSearchParams(t))a=t.toString();else{var i=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),a=i.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},Nr18:function(e,t,r){"use strict";var n=r("S/j/"),o=r("d/Gc"),a=r("ne8i");e.exports=function(e){for(var t=n(this),r=a(t.length),i=arguments.length,s=o(i>1?arguments[1]:void 0,r),c=i>2?arguments[2]:void 0,u=void 0===c?r:o(c,r);u>s;)t[s++]=e;return t}},OH9c:function(e,t,r){"use strict";r("f3/d"),r("AphP"),e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,r){"use strict";r("OG14"),r("pIFo");var n=r("xTJ+");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},PMBy:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n);t.a=function(e){var t=e.short;return o.a.createElement("div",null,o.a.createElement("p",null,"As members of the food service industry, we endorse Bernie Sanders for President. His platform attempts to address the precarity faced by service workers, and we see him as an ally in our struggle for stable, dignified lives. As we well know, food service workers in both the front and back of house are typically left to negotiate healthcare on the “marketplace,” and are not guaranteed sick or parental leave (to the detriment of public health.) While we work in an industry notoriously difficult to unionize and collectively bargain within, we are not unorganized or divided. With a collective voice, we invite Bernie into our struggle, and commit ourselves to the campaign."),o.a.createElement("p",{style:{marginBottom:0}},"We come together as service industry workers to imagine a brighter"," ",o.a.createElement("i",null,"present and future")," ","because our community is already a bright one. We count as one of Bernie’s largest bases of volunteer and donor support, and want to formally endorse him for President through this forum, since we do not have a union or formal body through which we can do so. We sign this endorsement echoing the central slogan of the movement that supports Bernie:"," ",o.a.createElement("i",{style:{color:"white"}},"Not me, us.")),o.a.createElement("div",null,t?"":o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Here are a few of the many reasons why the service industry SPECIFICALLY should and DOES support Bernie Sanders for President:"),o.a.createElement("ol",{style:{marginBottom:0}},o.a.createElement("li",null,"Simply put, we need single-payer Medicare For All. We need the freedom of movement it provides, both for ourselves and for our families. Many of us dedicate at least some of our paycheck and much mental energy toward our families’ and specifically our parents’ healthcare. Our jobs offer no annual raises or bonuses, no tenure; we need the security of our own healthcare and healthcare for our families as we both age."),o.a.createElement("li",null,"Sanders has plans to build social services beyond healthcare that our industry doesn’t provide but—because of the physical and at times inconsistent nature of our work—we desperately need."),o.a.createElement("li",null,"We want a President who will advocate for those who are undocumented, in the food service industry and beyond. We need compassionate immigration reform and paths to citizenship, and, like Sanders, demand an immediate halt to all deportation and the complete abolition of ICE."),o.a.createElement("li",null,"Bernie Sanders has consistently fought for and wants to expand Social Security, a social safety net we as service industry workers desperately need for a dignified retirement."),o.a.createElement("li",null,"The Sanders’ campaign has invested in and built on the organizing efforts of people of color across the country. We are an industry that is as segregated as it is diverse. We commit to recognizing and fighting the persistent evils of white supremacy. We as service industry workers must echo the work of Bernie’s multiracial coalition in this struggle to counter racism—and antiblackness specifically—in the workplace, the workforce, and in the larger public consciousness."),o.a.createElement("li",null,"As laborers who primarily work with produce from the land and animals, we recognize that we need a President who will enact a Green New Deal and pass comprehensive environmental justice reforms to ensure sustainable food production and food / water security for all as climate catastrophe looms."),o.a.createElement("li",null,"Sanders has publicly invested in his role as a mentor since the last election cycle. As democratic socialism’s role in our national discourse grows, we will also need to learn from and teach each other  about labor and workers’ rights. Sanders’ growth as a candidate models how we can all be pushed to be better for those in our industry and beyond it!"),o.a.createElement("li",null,"Bernie Sanders is a pro-worker candidate, with one of his central issues being workplace democracy focused on expanding union membership and protecting workers’ rights. This is vital for workers in industries typically excluded from labor protections, such as the food service and agricultural industries."),o.a.createElement("li",null,"The risks we will be able to take when we have a social safety net will not only make our lives better, but will actually improve and grow the food service industry. It will also mean we can pursue meaningful, careful, expansive lives outside of work."),o.a.createElement("li",null,"Many workers in the service industry are saddled with student debt, and struggle to keep up with payments or have the time to find work beyond restaurants, coffee shops, or bars. Bernie is the only candidate who wants to cancel"," ",o.a.createElement("i",null,"all")," ","student debt, and guarantee tuition-free public universities moving forward. Again, these changes can only improve our industry."),o.a.createElement("li",null,"Some of us have the schedules and flexibility to organize for these very changes; a match made in heaven."),o.a.createElement("li",{style:{marginBottom:0}},"The Sanders movement is the sole campaign invested in a hopeful and joyful vision of the future beyond a “just good enough” neoliberal present in which most people struggle to survive. We may love service but refuse to establish ourselves as a permanent underclass serving the wealthy. We witness these imbalances of power every day in our working lives, and want a president who will fight for the working people. We owe it to each other, and those we do not know, to imagine a better world. We all deserve the right to a dignified life.")))))}},"Rn+g":function(e,t,r){"use strict";var n=r("LYNF");e.exports=function(e,t,r){var o=r.config.validateStatus;!o||o(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},SntB:function(e,t,r){"use strict";r("V+eJ"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("0l/t"),r("8+KV");var n=r("xTJ+");e.exports=function(e,t){t=t||{};var r={},o=["url","method","params","data"],a=["headers","auth","proxy"],i=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];n.forEach(o,(function(e){void 0!==t[e]&&(r[e]=t[e])})),n.forEach(a,(function(o){n.isObject(t[o])?r[o]=n.deepMerge(e[o],t[o]):void 0!==t[o]?r[o]=t[o]:n.isObject(e[o])?r[o]=n.deepMerge(e[o]):void 0!==e[o]&&(r[o]=e[o])})),n.forEach(i,(function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])}));var s=o.concat(a).concat(i),c=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return n.forEach(c,(function(n){void 0!==t[n]?r[n]=t[n]:void 0!==e[n]&&(r[n]=e[n])})),r}},UnBK:function(e,t,r){"use strict";r("VRzm"),r("Btvt"),r("8+KV");var n=r("xTJ+"),o=r("xAGQ"),a=r("Lmem"),i=r("JEQr");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},bHtr:function(e,t,r){var n=r("XKFU");n(n.P,"Array",{fill:r("Nr18")}),r("nGyu")("fill")},endd:function(e,t,r){"use strict";function n(e){this.message=e}r("a1Th"),r("h7Nl"),r("Btvt"),n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},eqyj:function(e,t,r){"use strict";r("eM6i"),r("Oyvg"),r("SRfc");var n=r("xTJ+");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},g7np:function(e,t,r){"use strict";var n=r("2SVd"),o=r("5oMp");e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},"jfS+":function(e,t,r){"use strict";r("VRzm"),r("Btvt");var n=r("endd");function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},jqX0:function(e,t,r){var n=r("XKFU"),o=r("jtBr");n(n.P+n.F*(Date.prototype.toISOString!==o),"Date",{toISOString:o})},jtBr:function(e,t,r){"use strict";var n=r("eeVq"),o=Date.prototype.getTime,a=Date.prototype.toISOString,i=function(e){return e>9?e:"0"+e};e.exports=n((function(){return"0385-07-25T07:06:39.999Z"!=a.call(new Date(-5e13-1))}))||!n((function(){a.call(new Date(NaN))}))?function(){if(!isFinite(o.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),r=e.getUTCMilliseconds(),n=t<0?"-":t>9999?"+":"";return n+("00000"+Math.abs(t)).slice(n?-6:-4)+"-"+i(e.getUTCMonth()+1)+"-"+i(e.getUTCDate())+"T"+i(e.getUTCHours())+":"+i(e.getUTCMinutes())+":"+i(e.getUTCSeconds())+"."+(r>99?r:"0"+i(r))+"Z"}:a},tQ2B:function(e,t,r){"use strict";r("8+KV"),r("V+eJ"),r("VRzm"),r("Btvt");var n=r("xTJ+"),o=r("Rn+g"),a=r("MLWZ"),i=r("g7np"),s=r("w0Vi"),c=r("OTTw"),u=r("LYNF");e.exports=function(e){return new Promise((function(t,l){var f=e.data,d=e.headers;n.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password||"";d.Authorization="Basic "+btoa(h+":"+m)}var g=i(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),a(g,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};o(t,l,n),p=null}},p.onabort=function(){p&&(l(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){l(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),l(u(t,e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var v=r("eqyj"),y=(e.withCredentials||c(g))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&n.forEach(d,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(w){if("json"!==e.responseType)throw w}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),l(e),p=null)})),void 0===f&&(f=null),p.send(f)}))}},vDqi:function(e,t,r){e.exports=r("zuR4")},w0Vi:function(e,t,r){"use strict";r("Tze0"),r("V+eJ"),r("KKXr"),r("8+KV");var n=r("xTJ+"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,a,i={};return e?(n.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=n.trim(e.substr(0,a)).toLowerCase(),r=n.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}})),i):i}},xAGQ:function(e,t,r){"use strict";r("8+KV");var n=r("xTJ+");e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},"xTJ+":function(e,t,r){"use strict";r("pIFo"),r("a1Th"),r("h7Nl"),r("Btvt");var n=r("HSsa"),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function i(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===o.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:i,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)u(arguments[n],r);return t},deepMerge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]="object"==typeof r?e({},r):r}for(var n=0,o=arguments.length;n<o;n++)u(arguments[n],r);return t},extend:function(e,t,r){return u(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},xfY5:function(e,t,r){"use strict";var n=r("dyZX"),o=r("aagx"),a=r("LZWt"),i=r("Xbzi"),s=r("apmT"),c=r("eeVq"),u=r("kJMx").f,l=r("EemH").f,f=r("hswa").f,d=r("qncB").trim,p=n.Number,h=p,m=p.prototype,g="Number"==a(r("Kuth")(m)),v="trim"in String.prototype,y=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var r,n,o,a=(t=v?t.trim():d(t,3)).charCodeAt(0);if(43===a||45===a){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var i,c=t.slice(2),u=0,l=c.length;u<l;u++)if((i=c.charCodeAt(u))<48||i>o)return NaN;return parseInt(c,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof p&&(g?c((function(){m.valueOf.call(r)})):"Number"!=a(r))?i(new h(y(t)),r,p):y(t)};for(var w,b=r("nh4g")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;b.length>E;E++)o(h,w=b[E])&&!o(p,w)&&f(p,w,l(h,w));p.prototype=m,m.constructor=p,r("KroJ")(n,"Number",p)}},yK9s:function(e,t,r){"use strict";r("8+KV");var n=r("xTJ+");e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},zuR4:function(e,t,r){"use strict";r("VRzm"),r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3");var n=r("xTJ+"),o=r("HSsa"),a=r("CgaS"),i=r("SntB");function s(e){var t=new a(e),r=o(a.prototype.request,t);return n.extend(r,a.prototype,t),n.extend(r,t),r}var c=s(r("JEQr"));c.Axios=a,c.create=function(e){return s(i(c.defaults,e))},c.Cancel=r("endd"),c.CancelToken=r("jfS+"),c.isCancel=r("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=r("DfZB"),e.exports=c,e.exports.default=c}}]);
//# sourceMappingURL=component---src-pages-index-jsx-856cb584bb7b4345182a.js.map