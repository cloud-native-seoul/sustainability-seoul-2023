(self.webpackChunksustainability_week=self.webpackChunksustainability_week||[]).push([[230],{4852:function(e){"use strict";e.exports=Object.assign},8032:function(e,t,n){"use strict";n.d(t,{G:function(){return R},L:function(){return g},M:function(){return C},P:function(){return w},_:function(){return s},a:function(){return i},b:function(){return d},c:function(){return l},g:function(){return p},h:function(){return c}});var r=n(7294),a=(n(2369),n(5697)),o=n.n(a);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t.indexOf(n=o[r])>=0||(a[n]=e[n]);return a}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const l=e=>{var t;return(e=>{var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,n){const r={};let a="gatsby-image-wrapper";return"fixed"===n?(r.width=e,r.height=t):"constrained"===n&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,n,r,a){return void 0===a&&(a={}),i({},n,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function p(e,t,n,r,a,o,s,c){const l={};o&&(l.backgroundColor=o,"fixed"===n?(l.width=r,l.height=a,l.backgroundColor=o,l.position="relative"):("constrained"===n||"fullWidth"===n)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),s&&(l.objectFit=s),c&&(l.objectPosition=c);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return u}const f=["children"],m=function(e){let{layout:t,width:n,height:a}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/n*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:n,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${n}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,n=s(e,f);return r.createElement(r.Fragment,null,r.createElement(m,i({},n)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:n,loading:a,alt:o="",shouldLoad:c}=e,l=s(e,y);return r.createElement("img",i({},l,{decoding:"async",loading:a,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?n:void 0,"data-srcset":c?void 0:n,alt:o}))},v=function(e){let{fallback:t,sources:n=[],shouldLoad:a=!0}=e,o=s(e,h);const c=o.sizes||(null==t?void 0:t.sizes),l=r.createElement(b,i({},o,t,{sizes:c,shouldLoad:a}));return n.length?r.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:o}=e;return r.createElement("source",{key:`${t}-${o}-${n}`,type:o,media:t,srcSet:a?n:void 0,"data-srcset":a?void 0:n,sizes:c})})),l):l};var E;b.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},v.displayName="Picture",v.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const T=["fallback"],w=function(e){let{fallback:t}=e,n=s(e,T);return t?r.createElement(v,i({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},n))};w.displayName="Placeholder",w.propTypes={fallback:a.string,sources:null==(E=v.propTypes)?void 0:E.sources,alt:function(e,t,n){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${n}\`. Validation failed.`):null}};const C=function(e){return r.createElement(r.Fragment,null,r.createElement(v,i({},e)),r.createElement("noscript",null,r.createElement(v,i({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=v.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],O=["style","className"],A=e=>e.replace(/\n/g,""),k=function(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),i=3;i<r;i++)a[i-3]=arguments[i];return e.alt||""===e.alt?o().string.apply(o(),[e,t,n].concat(a)):new Error(`The "alt" prop is required in ${n}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},L={image:o().object.isRequired,alt:k},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],I=new Set;let j,P;const M=function(e){let{as:t="div",image:a,style:o,backgroundColor:l,className:d,class:p,onStartLoad:f,onLoad:m,onError:g}=e,y=s(e,N);const{width:h,height:b,layout:v}=a,E=u(h,b,v),{style:T,className:w}=E,C=s(E,x),S=(0,r.useRef)(),O=(0,r.useMemo)((()=>JSON.stringify(a.images)),[a.images]);p&&(d=p);const A=function(e,t,n){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${n/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(v,h,b);return(0,r.useEffect)((()=>{j||(j=n.e(731).then(n.bind(n,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return P=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==f||f({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==f||f({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(O);if(P&&I.has(O))return;let t,r;return j.then((e=>{let{renderImageToString:n,swapPlaceholderImage:s}=e;S.current&&(S.current.innerHTML=n(i({isLoading:!0,isLoaded:I.has(O),image:a},y)),I.has(O)||(t=requestAnimationFrame((()=>{S.current&&(r=s(S.current,O,I,o,f,m,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[a]),(0,r.useLayoutEffect)((()=>{I.has(O)&&P&&(S.current.innerHTML=P(i({isLoading:I.has(O),isLoaded:I.has(O),image:a},y)),null==f||f({wasCached:!0}),null==m||m({wasCached:!0}))}),[a]),(0,r.createElement)(t,i({},C,{style:i({},T,o,{backgroundColor:l}),className:`${w}${d?` ${d}`:""}`,ref:S,dangerouslySetInnerHTML:{__html:A},suppressHydrationWarning:!0}))},R=(0,r.memo)((function(e){return e.image?(0,r.createElement)(M,e):null}));R.propTypes=L,R.displayName="GatsbyImage";const _=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function $(e){return function(t){let{src:n,__imageData:a,__error:o}=t,c=s(t,_);return o&&console.warn(o),a?r.createElement(e,i({image:a},c)):(console.warn("Image not loaded",n),null)}}const q=$((function(e){let{as:t="div",className:n,class:a,style:o,image:c,loading:l="lazy",imgClassName:f,imgStyle:m,backgroundColor:y,objectFit:h,objectPosition:b}=e,v=s(e,S);if(!c)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(n=a),m=i({objectFit:h,objectPosition:b,backgroundColor:y},m);const{width:E,height:T,layout:k,images:L,placeholder:N,backgroundColor:x}=c,I=u(E,T,k),{style:j,className:P}=I,M=s(I,O),R={fallback:void 0,sources:[]};return L.fallback&&(R.fallback=i({},L.fallback,{srcSet:L.fallback.srcSet?A(L.fallback.srcSet):void 0})),L.sources&&(R.sources=L.sources.map((e=>i({},e,{srcSet:A(e.srcSet)})))),r.createElement(t,i({},M,{style:i({},j,o,{backgroundColor:y}),className:`${P}${n?` ${n}`:""}`}),r.createElement(g,{layout:k,width:E,height:T},r.createElement(w,i({},p(N,!1,k,E,T,x,h,b))),r.createElement(C,i({"data-gatsby-image-ssr":"",className:f},v,d("eager"===l,!1,R,l,m)))))})),H=function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},D=new Set(["fixed","fullWidth","constrained"]),F={src:o().string.isRequired,alt:k,width:H,height:H,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!D.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};q.displayName="StaticImage",q.propTypes=F;const U=$(R);U.displayName="StaticImage",U.propTypes=F},2369:function(e){"use strict";const t=/[\p{Lu}]/u,n=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,i=new RegExp("^"+o.source),s=new RegExp(o.source+a.source,"gu"),c=new RegExp("\\d+"+a.source,"gu"),l=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),l=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?l(e):o(e);return e!==o(e)&&(e=((e,r,a)=>{let o=!1,i=!1,s=!1;for(let c=0;c<e.length;c++){const l=e[c];o&&t.test(l)?(e=e.slice(0,c)+"-"+e.slice(c),o=!1,s=i,i=!0,c++):i&&s&&n.test(l)?(e=e.slice(0,c-1)+"-"+e.slice(c-1),s=i,i=!1,o=!0):(o=r(l)===l&&a(l)!==l,s=i,i=a(l)===l&&r(l)!==l)}return e})(e,o,l)),e=e.replace(i,""),e=a.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,o):o(e),a.pascalCase&&(e=l(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,c.lastIndex=0,e.replace(s,((e,n)=>t(n))).replace(c,(e=>t(e)))))(e,l)};e.exports=l,e.exports.default=l},621:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Je}});var r,a,o,i,s=n(7294),c=n(4160),l=n(5697),u=n.n(l),d=n(3524),p=n.n(d),f=n(9590),m=n.n(f),g=n(4852),y=n.n(g),h="bodyAttributes",b="htmlAttributes",v="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(E).map((function(e){return E[e]})),"charset"),w="cssText",C="href",S="http-equiv",O="innerHTML",A="itemprop",k="name",L="property",N="rel",x="src",I="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",M="defer",R="encodeSpecialCharacters",_="onChangeClientState",$="titleTemplate",q=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),H=[E.NOSCRIPT,E.SCRIPT,E.STYLE],D="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Y=function(e){var t=Q(e,E.TITLE),n=Q(e,$);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,P);return t||r||void 0},K=function(e){return Q(e,_)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var s=o[i],c=s.toLowerCase();-1===t.indexOf(c)||n===N&&"canonical"===e[n].toLowerCase()||c===N&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(s)||s!==O&&s!==w&&s!==A||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var s=o[i],c=y()({},r[s],a[s]);r[s]=c}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),Z=function(e){return clearTimeout(e)},ee="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,te="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Z:n.g.cancelAnimationFrame||Z,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,p=e.titleAttributes;se(E.BODY,r),se(E.HTML,a),ie(d,p);var f={baseTag:ce(E.BASE,n),linkTags:ce(E.LINK,o),metaTags:ce(E.META,i),noscriptTags:ce(E.NOSCRIPT,s),scriptTags:ce(E.SCRIPT,l),styleTags:ce(E.STYLE,u)},m={},g={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(g[e]=f[e].oldTags)})),t&&t(),c(e,m,g)},oe=function(e){return Array.isArray(e)?e.join(""):e},ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(E.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(D),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),s=0;s<i.length;s++){var c=i[s],l=t[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var u=o.indexOf(c);-1!==u&&o.splice(u,1)}for(var d=o.length-1;d>=0;d--)n.removeAttribute(o[d]);a.length===o.length?n.removeAttribute(D):n.getAttribute(D)!==i.join(",")&&n.setAttribute(D,i.join(","))}},ce=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"["+D+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(D,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[j[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[D]=!0,a=ue(n,r),[s.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),o=oe(t);return a?"<"+e+" "+D+'="true" '+a+">"+W(o,r)+"</"+e+">":"<"+e+" "+D+'="true">'+W(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case b:return{toComponent:function(){return ue(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[D]=!0,r);return Object.keys(t).forEach((function(e){var n=j[e]||e;if(n===O||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),s.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===O||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===H.indexOf(e);return t+"<"+e+" "+D+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,p=e.titleAttributes;return{base:de(E.BASE,t,r),bodyAttributes:de(h,n,r),htmlAttributes:de(b,a,r),link:de(E.LINK,o,r),meta:de(E.META,i,r),noscript:de(E.NOSCRIPT,s,r),script:de(E.SCRIPT,c,r),style:de(E.STYLE,l,r),title:de(E.TITLE,{title:d,titleAttributes:p},r)}},fe=p()((function(e){return{baseTag:V([C,I],e),bodyAttributes:G(h,e),defer:Q(e,M),encode:Q(e,R),htmlAttributes:G(b,e),linkTags:J(E.LINK,[N,C],e),metaTags:J(E.META,[k,T,S,L,A],e),noscriptTags:J(E.NOSCRIPT,[O],e),onChangeClientState:K(e),scriptTags:J(E.SCRIPT,[x,O],e),styleTags:J(E.STYLE,[w],e),title:Y(e),titleAttributes:G(v,e)}}),(function(e){re&&te(re),e.defer?re=ee((function(){ae(e,(function(){re=null}))})):(ae(e),re=null)}),pe)((function(){return null})),me=(a=fe,i=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case E.TITLE:return z({},a,((t={})[r.type]=i,t.titleAttributes=z({},o),t));case E.BODY:return z({},a,{bodyAttributes:z({},o)});case E.HTML:return z({},a,{htmlAttributes:z({},o)})}return z({},a,((n={})[r.type]=z({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[q[n]||n]=e[n],t}),t)}(B(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=B(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),s.createElement(a,r)},U(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(s.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind;function ge(e){let{title:t="",description:n=""}=e;return s.createElement(me,{htmlAttributes:{lang:"en-US"}},s.createElement("title",null,t),s.createElement("meta",{name:"description",content:n}),s.createElement("meta",{property:"og:title",name:"title",content:t}),s.createElement("meta",{property:"og:description",name:"description",content:n}),s.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),s.createElement("meta",{name:"twitter:title",content:t}),s.createElement("meta",{name:"twitter:description",content:n}))}var ye="variables-module--root--87783",he="layout-module--footer--034b6 layout-module--container--76637",be="layout-module--main--034ed",ve="layout-module--root--49564";function Ee(e){return s.createElement("div",{className:[ye,ve].join(" ")},s.createElement(ge,{title:"Cloud Native Sustainability Week in Seoul",description:"Cloud Native Sustainability Week 행사 소개"}),s.createElement("main",{className:be},e.children),s.createElement("footer",{className:he},s.createElement(c.rU,{to:"https://www.facebook.com/groups/InfraEngineer/"},"IT 인프라 엔지니어 그룹"),s.createElement(c.rU,{to:"https://www.facebook.com/groups/openstack.kr/"},"OpenStack 한국 커뮤니티"),s.createElement(c.rU,{to:"https://ubuntu-kr.org/"},"우분투 한국 커뮤니티")))}var Te="page-module--root--03060";function we(e){return s.createElement("div",{className:Te},e.children)}var Ce=n(8032),Se="section-module--root--9eef7",Oe="container-module--root--5c153";function Ae(e){let{className:t="",...n}=e;return s.createElement("div",Object.assign({},n,{className:[Oe,t].join(" ")}))}function ke(e){let{children:t,className:n="",...r}=e;return t?s.createElement("section",Object.assign({className:`${Se} ${n}`},r),s.createElement(Ae,null,t)):null}var Le="hero-module--content--3eca2",Ne="hero-module--heading--2935a",xe="hero-module--image--f1baa",Ie="hero-module--root--40604",je="hero-module--secondaryHeading--1fad2";function Pe(e){let{heading:t,secondaryHeading:n,content:r}=e;const a=(0,c.K2)("3816367823");return s.createElement(ke,null,s.createElement("div",{className:Ie},s.createElement("div",{className:Le},s.createElement("h2",{className:je},n),s.createElement("h1",{className:Ne},t),s.createElement("p",null,r)),s.createElement("div",{className:xe},s.createElement(Ce.G,{alt:"Image",image:(0,Ce.c)(null==a?void 0:a.file)}))))}var Me=()=>{const{site:e}=(0,c.K2)("2048573580");return e.siteMetadata},Re="content-module--contentContainer--4db9a",_e="content-module--copyColumn--af7c5",$e="content-module--copyContainer--a3db9",qe="content-module--imageColumn--85ad6",He="content-module--primaryText--d275e",De="content-module--reverse--d67ee",Fe="content-module--secondaryText--ca0ed";function Ue(e){let{primaryText:t,content:n,image:r,orientation:a="default"}=e;const o="default"===a?"":De;return s.createElement("div",{className:`${Re} ${o}`},s.createElement("div",{className:_e},s.createElement("div",{className:$e},s.createElement("h4",{className:He},t),s.createElement("p",{className:Fe},n))),s.createElement("div",{className:qe},s.createElement(Ce.G,{alt:"Image",image:r})))}var ze="contents-module--contents--a6d0d";function Be(){const{about:e,session1:t,session2:n,session3:r,sponsors:a}=Me(),{aboutTitle:o,aboutContent:i}=e,{session1Title:l,session1Content:u}=t,{session2Title:d,session2Content:p}=n,{session3Title:f,session3Content:m}=r,{sponsorTitle:g,sponsorContent:y}=a,h=(0,c.K2)("2058211333");return s.createElement(ke,null,s.createElement("div",{className:ze},s.createElement(Ue,{primaryText:o,content:i,image:(0,Ce.c)(null==h?void 0:h.heroImage),orientation:"default"}),s.createElement(Ue,{primaryText:l,content:u,image:(0,Ce.c)(null==h?void 0:h.session1Image),orientation:"reverse"}),s.createElement(Ue,{primaryText:d,content:p,image:(0,Ce.c)(null==h?void 0:h.session2Image),orientation:"default"}),s.createElement(Ue,{primaryText:f,content:m,image:(0,Ce.c)(null==h?void 0:h.session3Image),orientation:"reverse"}),s.createElement(Ue,{primaryText:g,content:y,image:(0,Ce.c)(null==h?void 0:h.sponsorImage),orientation:"default"})))}var We="picture-module--picture--0a2d9";function Ye(e){let{image:t}=e;return s.createElement("div",{className:We},s.createElement(Ce.G,{image:(0,Ce.c)(t),alt:"Image"}))}var Ke="pictures-module--pictures--bc131",Ge="pictures-module--picturesTitle--fbb46";function Ve(){const e=(0,c.K2)("2802841402");return s.createElement(s.Fragment,null,s.createElement("h3",{className:Ge},"행사 현장"),s.createElement("div",{className:Ke},s.createElement(Ye,{image:e.pic1}),s.createElement(Ye,{image:e.pic2}),s.createElement(Ye,{image:e.pic3}),s.createElement(Ye,{image:e.pic4}),s.createElement(Ye,{image:e.pic5}),s.createElement(Ye,{image:e.pic6})))}function Je(){const{hero:e}=Me(),{heroHeading:t,heroSecondaryHeading:n,heroContent:r}=e;return s.createElement(Ee,null,s.createElement(we,null,s.createElement(Ae,null,s.createElement(Pe,{heading:t,secondaryHeading:n,content:r}),s.createElement(Be,null),s.createElement(Ve,null))))}},9590:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var s,c,l,u;if(Array.isArray(e)){if((s=e.length)!=i.length)return!1;for(c=s;0!=c--;)if(!o(e[c],i[c]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!o(c.value[1],i.get(c.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((s=e.length)!=i.length)return!1;for(c=s;0!=c--;)if(e[c]!==i[c])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof i.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof i.toString)return e.toString()===i.toString();if((s=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,l[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!e.$$typeof)&&!o(e[l[c]],i[l[c]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},3524:function(e,t,n){"use strict";var r,a=n(7294),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),d.canUseDOM?t(c):n&&(c=n(c))}var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(d,"canUseDOM",s),d}}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-478a44adf2a673618ed7.js.map