"use strict";(self.webpackChunkcomplete_compendium=self.webpackChunkcomplete_compendium||[]).push([[245],{2532:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return k},P:function(){return w},S:function(){return W},_:function(){return i},a:function(){return s},b:function(){return m},g:function(){return d},h:function(){return l}});var n=a(6540),r=(a(5147),a(5556)),o=a.n(r);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t.indexOf(a=o[n])>=0||(r[a]=e[a]);return r}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function m(e,t,a,n,r){return void 0===r&&(r={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function d(e,t,a,n,r,o,i,l){const c={};o&&(c.backgroundColor=o,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=o,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),l&&(c.objectPosition=l);const m=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return m}const u=["children"],p=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=i(e,u);return n.createElement(n.Fragment,null,n.createElement(p,s({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:r,alt:o="",shouldLoad:l}=e,c=i(e,h);return n.createElement("img",s({},c,{decoding:"async",loading:r,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:o}))},E=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,o=i(e,f);const l=o.sizes||(null==t?void 0:t.sizes),c=n.createElement(y,s({},o,t,{sizes:l,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:o}=e;return n.createElement("source",{key:`${t}-${o}-${a}`,type:o,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:l})})),c):c};var b;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},E.displayName="Picture",E.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const v=["fallback"],w=function(e){let{fallback:t}=e,a=i(e,v);return t?n.createElement(E,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};w.displayName="Placeholder",w.propTypes={fallback:r.string,sources:null==(b=E.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const k=function(e){return n.createElement(n.Fragment,null,n.createElement(E,s({},e)),n.createElement("noscript",null,n.createElement(E,s({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=E.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],S=e=>e.replace(/\n/g,""),N=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),s=3;s<n;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?o().string.apply(o(),[e,t,a].concat(r)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},_={image:o().object.isRequired,alt:N},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],A=["style","className"],T=new Set;let D,I;const R=function(e){let{as:t="div",image:r,style:o,backgroundColor:m,className:d,class:u,onStartLoad:p,onLoad:g,onError:h}=e,f=i(e,L);const{width:y,height:E,layout:b}=r,v=c(y,E,b),{style:w,className:k}=v,x=i(v,A),C=(0,n.useRef)(),S=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);u&&(d=u);const N=function(e,t,a){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(b,y,E);return(0,n.useEffect)((()=>{D||(D=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return I=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(S);if(I&&T.has(S))return;let t,n;return D.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;C.current&&(C.current.innerHTML=a(s({isLoading:!0,isLoaded:T.has(S),image:r},f)),T.has(S)||(t=requestAnimationFrame((()=>{C.current&&(n=i(C.current,S,T,o,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{T.has(S)&&I&&(C.current.innerHTML=I(s({isLoading:T.has(S),isLoaded:T.has(S),image:r},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[r]),(0,n.createElement)(t,s({},x,{style:s({},w,o,{backgroundColor:m}),className:`${k}${d?` ${d}`:""}`,ref:C,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},M=(0,n.memo)((function(e){return e.image?(0,n.createElement)(R,e):null}));M.propTypes=_,M.displayName="GatsbyImage";const $=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:a,__imageData:r,__error:o}=t,l=i(t,$);return o&&console.warn(o),r?n.createElement(e,s({image:r},l)):(console.warn("Image not loaded",a),null)}}const O=z((function(e){let{as:t="div",className:a,class:r,style:o,image:l,loading:u="lazy",imgClassName:p,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:E}=e,b=i(e,x);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),h=s({objectFit:y,objectPosition:E,backgroundColor:f},h);const{width:v,height:N,layout:_,images:L,placeholder:A,backgroundColor:T}=l,D=c(v,N,_),{style:I,className:R}=D,M=i(D,C),$={fallback:void 0,sources:[]};return L.fallback&&($.fallback=s({},L.fallback,{srcSet:L.fallback.srcSet?S(L.fallback.srcSet):void 0})),L.sources&&($.sources=L.sources.map((e=>s({},e,{srcSet:S(e.srcSet)})))),n.createElement(t,s({},M,{style:s({},I,o,{backgroundColor:f}),className:`${R}${a?` ${a}`:""}`}),n.createElement(g,{layout:_,width:v,height:N},n.createElement(w,s({},d(A,!1,_,v,N,T,y,E))),n.createElement(k,s({"data-gatsby-image-ssr":"",className:p},b,m("eager"===u,!1,$,u,h)))))})),j=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?o().number.apply(o(),[e,t].concat(n)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},q=new Set(["fixed","fullWidth","constrained"]),F={src:o().string.isRequired,alt:N,width:j,height:j,sizes:o().string,layout:e=>{if(void 0!==e.layout&&!q.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};O.displayName="StaticImage",O.propTypes=F;const W=z(M);W.displayName="StaticImage",W.propTypes=F},5147:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,o=/[_.\- ]+/,s=new RegExp("^"+o.source),i=new RegExp(o.source+r.source,"gu"),l=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const o=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):o(e);return e!==o(e)&&(e=((e,n,r)=>{let o=!1,s=!1,i=!1;for(let l=0;l<e.length;l++){const c=e[l];o&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),o=!1,i=s,s=!0,l++):s&&i&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),i=s,s=!1,o=!0):(o=n(c)===c&&r(c)!==c,i=s,s=r(c)===c&&n(c)!==c)}return e})(e,o,c)),e=e.replace(s,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,o):o(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,l.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2820:function(e,t,a){var n=a(6540),r=a(4794),o=a(5565);const s={marginBlockStart:"unset",marginBlockEnd:"unset",marginInlineStart:"unset",marginInlineEnd:"unset",position:"relative",fontFamily:"Leksa Sans DemiBold",fontStyle:"normal",fontWeight:600,fontSize:"24px",display:"flex",alignItems:"center",textAlign:"center",textDecoration:"none",textTransform:"capitalize",color:"white",paddingTop:"1rem",paddingBottom:"1rem",paddingLeft:"2rem",paddingRight:"2rem",zIndex:1},i={marginBlockStart:"unset",marginBlockEnd:"unset",marginInlineStart:"unset",marginInlineEnd:"unset",position:"relative",fontFamily:"Leksa Sans DemiBold",fontStyle:"normal",fontWeight:600,fontSize:"18px",display:"flex",alignItems:"center",textAlign:"center",textDecoration:"none",textTransform:"capitalize",color:"white",zIndex:1},l={position:"relative",fontFamily:"Leksa Sans DemiBold",fontStyle:"normal",fontWeight:400,display:"flex",alignItems:"center",textAlign:"center",textDecoration:"none",textTransform:"capitalize",color:"white",paddingTop:"2mm",paddingBottom:"2mm",paddingLeft:"1.5rem",paddingRight:"1.5rem",zIndex:1};t.A=e=>{const{0:t,1:a}=(0,n.useState)(""),c=()=>{const e=Object.keys(o);if(void 0!==e){const n=e[(t=e.length,Math.floor(Math.random()*t))];a(n)}var t};let m;return(0,n.useEffect)((()=>{c()}),[]),m=e.home?s:i,n.createElement("div",{style:m},n.createElement(r.Link,{to:"/appendix/"+t,style:{textDecoration:"none"}},n.createElement("div",{style:l,onClick:c},"Random Monster")))}},6066:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f},default:function(){return h}});var n=a(6540),r=a(4794),o=a(9687),s=a(572),i=a(2820);function l(e){return n.createElement("div",{className:"HomeCard"},n.createElement("div",{className:"card-frame"},n.createElement("div",{className:"flex-top"},n.createElement("div",{className:"card-title"},e.title),n.createElement("div",{className:"card-body"},e.body)),n.createElement("div",{className:"card-link"},n.createElement("a",{href:e.link},e.linkText))))}function c(){return n.createElement("div",{className:"Cards"},n.createElement("div",{className:"card-row"},n.createElement(l,{title:"Every Monster",body:"Compiled from every sourcebook, every monster with a page in any AD&D 2nd Edition source material is indexed.",linkText:"See the Complete Appendix",link:"/appendix"}),n.createElement(l,{title:"Every Setting",body:"This compendium contains every campaign setting from Forgotten Realms to the obscure Alternity. The Mists of Ravenloft to Castle Greyhawk to the great city of Cigil at the center of the Cosmos.",linkText:"See Every Campaign Setting",link:"/catalog#settings"}),n.createElement(l,{title:"Every Book",body:"Every publication id number mentioned across all the monster files has been collected and cataloged. ",linkText:"See Every Monster Sourcebook",link:"/catalog#books"})))}const m=a(7521),d=e=>n.createElement("div",{className:"statistic"},n.createElement("div",{className:"stat-number"},e.value),n.createElement("div",{className:"stat-name"},e.name)),u=()=>{var e,t,a,r;return e=m.settings_count,t=m.books_count,a=m.pages_count,r=m.unique_count,n.createElement("div",{className:"statistics"},n.createElement("div",{className:"statistics_container"},n.createElement("div",{className:"statistics_header"},n.createElement("h1",null,"Statistics")),n.createElement("div",{className:"statistics_grid"},n.createElement(d,{name:"Settings",value:e}),n.createElement(d,{name:"Books",value:t}),n.createElement(d,{name:"Monster Pages",value:a}),n.createElement(d,{name:"Unique Monsters",value:r}))))};var p=a(2532);const g=e=>n.createElement(n.Fragment,null,n.createElement("title",null,"AD&D 2nd Edition Complete Monstrous Compendium"),n.createElement("meta",{property:"og:title",content:"AD&D 2nd Edition Complete Monstrous Compendium"}),n.createElement("meta",{property:"og:site_name",content:"Complete Compendium"}),n.createElement("meta",{property:"og:description",content:"Complete browsable, searchable appendix of EVERY monster, sourcebook, manual, and campaign setting in Advanced Dungeons & Dragons 2nd Edition."}),n.createElement("meta",{property:"og:url",content:"https://www.completecompendium.com"}),n.createElement("meta",{property:"og:image",content:"https://www.completecompendium.com/opengraph_banner.webp"}),n.createElement("meta",{property:"og:image:width",content:"1200"}),n.createElement("meta",{property:"og:image:height",content:"630"}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:image",content:"https://www.completecompendium.com/opengraph_banner.webp"}),n.createElement("meta",{name:"twitter:site",content:"@completecompendium"}),n.createElement("meta",{name:"twitter:title",content:"Advanced Dungeons & Dragons 2nd Edition Complete Compendium"}),n.createElement("meta",{name:"twitter:description",content:"Complete browsable, searchable appendix of EVERY monster, sourcebook, manual, and campaign setting in Advanced Dungeons & Dragons 2nd Edition"}),e.children);var h=()=>n.createElement("main",null,n.createElement(n.Fragment,null,n.createElement(o.A,null),n.createElement("div",{className:"home-module--home--7f4e1"},n.createElement("div",{className:"home-module--hero-container--c5a59"},n.createElement("div",{className:"image-container"},n.createElement("picture",null,n.createElement(p.S,{src:"../images/paper.webp",alt:"Soft gray paper texture background.",__imageData:a(6235)}),n.createElement("img",{className:"hero-img",src:"/images/paper.webp",alt:"Soft gray paper texture background."}),n.createElement("img",{className:"hero-img-hidden",src:"/opengraph_banner.webp",alt:"A menagery of monsters from across the lands of Dungeons & Dragons together on a white background."}))),n.createElement("h1",{className:"home-module--adnd--f775c"},"Advanced Dungeons & Dragons 2nd Edition"),n.createElement("h2",null,"Complete Monstrous ",n.createElement("br",null),"Compendium"),n.createElement("div",{className:"home-module--random_monster_button_wrapper--48097"},n.createElement(i.A,{home:!0}))),n.createElement(c,null),n.createElement(u,null),n.createElement("div",{className:"summary"},n.createElement("div",{className:"summary_banner_container"},n.createElement("div",{className:"summary_text"},n.createElement("p",{className:"summary_par"},"Complete* browsable, searchable appendix of EVERY monster, sourcebook, manual, and campaign setting in Advanced Dungeons & Dragons 2nd Edition. An ongoing effort to fully catalog and index every monster from AD&D 2nd edition, there is still much work to be done. With missing images, bad unicode characters, and missing information, I have my work cut out for me. The next phase will involve scanning the source data for errors and displaying this on the ",n.createElement(r.Link,{to:"/about"},"About")," page."),n.createElement("p",{className:"summary_par"},"Welcome to the Complete Compendium! A work in progress, this compendium seeks to archive and catalogue every monster from Advanced Dungeons & Dragons, 2nd Edition. Not just monsters from the core books, not just from monstrous compendiums.  Every. Monster. Across all sources, magazines, and settings. Go to the Index for a full (and redundant) list of monster names and links to their pages, or check out the Catalogue for a more browsable experience."),n.createElement("p",{className:"summary_par"},"This website has resurrected the efforts of an another, the creator of lomion.de, archived by the wayback machine. I coded an extractor for harvesting monster data from all these files and putting it into a database. Read more about my process on the About page."))))),n.createElement(s.A,null)));function f(e){return n.createElement(n.Fragment,null,n.createElement("script",{src:"https://kit.fontawesome.com/c6a77c0087.js",crossOrigin:"anonymous"}),n.createElement("title",null,e.data.site.siteMetadata.title),n.createElement(g,null))}},6235:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/fba763d817b1ddd195dae45dd5d4e323/d266c/paper.webp","srcSet":"/static/fba763d817b1ddd195dae45dd5d4e323/b9fb4/paper.webp 720w,\\n/static/fba763d817b1ddd195dae45dd5d4e323/de7ed/paper.webp 1440w,\\n/static/fba763d817b1ddd195dae45dd5d4e323/d266c/paper.webp 2880w","sizes":"(min-width: 2880px) 2880px, 100vw"},"sources":[]},"width":2880,"height":1488}')},7521:function(e){e.exports=JSON.parse('{"settings_count":21,"books_count":253,"pages_count":2363,"unique_count":3104}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-d341546a19e5987b9f20.js.map