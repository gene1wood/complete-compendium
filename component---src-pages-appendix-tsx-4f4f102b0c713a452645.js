(self.webpackChunkadnd_compendium_static_frontend=self.webpackChunkadnd_compendium_static_frontend||[]).push([[897],{4969:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return Kt},appendix:function(){return Zt},default:function(){return Jt}});var n=r(7294),o=r(4854);var s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)};Object.create;function a(e,t,r){if(r||2===arguments.length)for(var n,o=0,s=t.length;o<s;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;"function"==typeof SuppressedError&&SuppressedError;var i=r(6774),c=r.n(i),u="-ms-",l="-moz-",f="-webkit-",p="comm",d="rule",h="decl",m="@import",g="@keyframes",v="@layer",y=Math.abs,b=String.fromCharCode,S=Object.assign;function w(e){return e.trim()}function C(e,t){return(e=t.exec(e))?e[0]:e}function x(e,t,r){return e.replace(t,r)}function I(e,t){return e.indexOf(t)}function E(e,t){return 0|e.charCodeAt(t)}function k(e,t,r){return e.slice(t,r)}function P(e){return e.length}function A(e){return e.length}function _(e,t){return t.push(e),e}function $(e,t){return e.filter((function(e){return!C(e,t)}))}var O=1,R=1,j=0,N=0,D=0,T="";function F(e,t,r,n,o,s,a,i){return{value:e,root:t,parent:r,type:n,props:o,children:s,line:O,column:R,length:a,return:"",siblings:i}}function z(e,t){return S(F("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function G(e){for(;e.root;)e=z(e.root,{children:[e]});_(e,e.siblings)}function B(){return D=N>0?E(T,--N):0,R--,10===D&&(R=1,O--),D}function M(){return D=N<j?E(T,N++):0,R++,10===D&&(R=1,O++),D}function L(){return E(T,N)}function W(){return N}function Y(e,t){return k(T,e,t)}function H(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function q(e){return O=R=1,j=P(T=e),N=0,[]}function U(e){return T="",e}function V(e){return w(Y(N-1,K(91===e?e+2:40===e?e+1:e)))}function Z(e){for(;(D=L())&&D<33;)M();return H(e)>2||H(D)>3?"":" "}function J(e,t){for(;--t&&M()&&!(D<48||D>102||D>57&&D<65||D>70&&D<97););return Y(e,W()+(t<6&&32==L()&&32==M()))}function K(e){for(;M();)switch(D){case e:return N;case 34:case 39:34!==e&&39!==e&&K(D);break;case 40:41===e&&K(e);break;case 92:M()}return N}function Q(e,t){for(;M()&&e+D!==57&&(e+D!==84||47!==L()););return"/*"+Y(t,N-1)+"*"+b(47===e?e:M())}function X(e){for(;!H(L());)M();return Y(e,N)}function ee(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function te(e,t,r,n){switch(e.type){case v:if(e.children.length)break;case m:case h:return e.return=e.return||e.value;case p:return"";case g:return e.return=e.value+"{"+ee(e.children,n)+"}";case d:if(!P(e.value=e.props.join(",")))return""}return P(r=ee(e.children,n))?e.return=e.value+"{"+r+"}":""}function re(e,t,r){switch(function(e,t){return 45^E(e,0)?(((t<<2^E(e,0))<<2^E(e,1))<<2^E(e,2))<<2^E(e,3):0}(e,t)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 4789:return l+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+l+e+u+e+e;case 5936:switch(E(e,t+11)){case 114:return f+e+u+x(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+u+x(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+u+x(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return f+e+u+e+e;case 6165:return f+e+u+"flex-"+e+e;case 5187:return f+e+x(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+u+"flex-$1$2")+e;case 5443:return f+e+u+"flex-item-"+x(e,/flex-|-self/g,"")+(C(e,/flex-|baseline/)?"":u+"grid-row-"+x(e,/flex-|-self/g,""))+e;case 4675:return f+e+u+"flex-line-pack"+x(e,/align-content|flex-|-self/g,"")+e;case 5548:return f+e+u+x(e,"shrink","negative")+e;case 5292:return f+e+u+x(e,"basis","preferred-size")+e;case 6060:return f+"box-"+x(e,"-grow","")+f+e+u+x(e,"grow","positive")+e;case 4554:return f+x(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return x(x(x(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return x(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return x(x(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+u+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4200:if(!C(e,/flex-|baseline/))return u+"grid-column-align"+k(e,t)+e;break;case 2592:case 3360:return u+x(e,"template-","")+e;case 4384:case 3616:return r&&r.some((function(e,r){return t=r,C(e.props,/grid-\w+-end/)}))?~I(e+(r=r[t].value),"span")?e:u+x(e,"-start","")+e+u+"grid-row-span:"+(~I(r,"span")?C(r,/\d+/):+C(r,/\d+/)-+C(e,/\d+/))+";":u+x(e,"-start","")+e;case 4896:case 4128:return r&&r.some((function(e){return C(e.props,/grid-\w+-start/)}))?e:u+x(x(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return x(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(P(e)-1-t>6)switch(E(e,t+1)){case 109:if(45!==E(e,t+4))break;case 102:return x(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+l+(108==E(e,t+3)?"$3":"$2-$3"))+e;case 115:return~I(e,"stretch")?re(x(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return x(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,r,n,o,s,a,i){return u+r+":"+n+i+(o?u+r+"-span:"+(s?a:+a-+n)+i:"")+e}));case 4949:if(121===E(e,t+6))return x(e,":",":"+f)+e;break;case 6444:switch(E(e,45===E(e,14)?18:11)){case 120:return x(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+f+(45===E(e,14)?"inline-":"")+"box$3$1"+f+"$2$3$1"+u+"$2box$3")+e;case 100:return x(e,":",":"+u)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return x(e,"scroll-","scroll-snap-")+e}return e}function ne(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case h:return void(e.return=re(e.value,e.length,r));case g:return ee([z(e,{value:x(e.value,"@","@"+f)})],n);case d:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,(function(t){switch(C(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":G(z(e,{props:[x(t,/:(read-\w+)/,":"+l+"$1")]})),G(z(e,{props:[t]})),S(e,{props:$(r,n)});break;case"::placeholder":G(z(e,{props:[x(t,/:(plac\w+)/,":"+f+"input-$1")]})),G(z(e,{props:[x(t,/:(plac\w+)/,":"+l+"$1")]})),G(z(e,{props:[x(t,/:(plac\w+)/,u+"input-$1")]})),G(z(e,{props:[t]})),S(e,{props:$(r,n)})}return""}))}}function oe(e){return U(se("",null,null,null,[""],e=q(e),0,[0],e))}function se(e,t,r,n,o,s,a,i,c){for(var u=0,l=0,f=a,p=0,d=0,h=0,m=1,g=1,v=1,y=0,S="",w=o,C=s,k=n,A=S;g;)switch(h=y,y=M()){case 40:if(108!=h&&58==E(A,f-1)){-1!=I(A+=x(V(y),"&","&\f"),"&\f")&&(v=-1);break}case 34:case 39:case 91:A+=V(y);break;case 9:case 10:case 13:case 32:A+=Z(h);break;case 92:A+=J(W()-1,7);continue;case 47:switch(L()){case 42:case 47:_(ie(Q(M(),W()),t,r,c),c);break;default:A+="/"}break;case 123*m:i[u++]=P(A)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+l:-1==v&&(A=x(A,/\f/g,"")),d>0&&P(A)-f&&_(d>32?ce(A+";",n,r,f-1,c):ce(x(A," ","")+";",n,r,f-2,c),c);break;case 59:A+=";";default:if(_(k=ae(A,t,r,u,l,o,i,S,w=[],C=[],f,s),s),123===y)if(0===l)se(A,t,k,k,w,s,f,i,C);else switch(99===p&&110===E(A,3)?100:p){case 100:case 108:case 109:case 115:se(e,k,k,n&&_(ae(e,k,k,0,0,o,i,S,o,w=[],f,C),C),o,C,f,i,n?w:C);break;default:se(A,k,k,k,[""],C,0,i,C)}}u=l=d=0,m=v=1,S=A="",f=a;break;case 58:f=1+P(A),d=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==B())continue;switch(A+=b(y),y*m){case 38:v=l>0?1:(A+="\f",-1);break;case 44:i[u++]=(P(A)-1)*v,v=1;break;case 64:45===L()&&(A+=V(M())),p=L(),l=f=P(S=A+=X(W())),y++;break;case 45:45===h&&2==P(A)&&(m=0)}}return s}function ae(e,t,r,n,o,s,a,i,c,u,l,f){for(var p=o-1,h=0===o?s:[""],m=A(h),g=0,v=0,b=0;g<n;++g)for(var S=0,C=k(e,p+1,p=y(v=a[g])),I=e;S<m;++S)(I=w(v>0?h[S]+" "+C:x(C,/&\f/g,h[S])))&&(c[b++]=I);return F(e,t,r,0===o?d:i,c,u,l,f)}function ie(e,t,r,n){return F(e,t,r,p,b(D),k(e,2,-2),0,n)}function ce(e,t,r,n,o){return F(e,t,r,h,k(e,0,n),k(e,n+1,-1),n,o)}var ue={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},le="undefined"!=typeof process&&void 0!=={}&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",fe="undefined"!=typeof window&&"HTMLElement"in window,pe=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={}.REACT_APP_SC_DISABLE_SPEEDY&&{}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={}&&void 0!=={}.SC_DISABLE_SPEEDY&&""!=={}.SC_DISABLE_SPEEDY&&("false"!=={}.SC_DISABLE_SPEEDY&&{}.SC_DISABLE_SPEEDY)),de=(new Set,Object.freeze([])),he=Object.freeze({});function me(e,t,r){return void 0===r&&(r=he),e.theme!==r.theme&&e.theme||t||r.theme}var ge=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ve=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ye=/(^-|-$)/g;function be(e){return e.replace(ve,"-").replace(ye,"")}var Se=/(a)(d)/gi,we=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ce(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=we(t%52)+r;return(we(t%52)+r).replace(Se,"$1-$2")}var xe,Ie=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Ee=function(e){return Ie(5381,e)};function ke(e){return Ce(Ee(e)>>>0)}function Pe(e){return"string"==typeof e&&!0}var Ae="function"==typeof Symbol&&Symbol.for,_e=Ae?Symbol.for("react.memo"):60115,$e=Ae?Symbol.for("react.forward_ref"):60112,Oe={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Re={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},je={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ne=((xe={})[$e]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xe[_e]=je,xe);function De(e){return("type"in(t=e)&&t.type.$$typeof)===_e?je:"$$typeof"in e?Ne[e.$$typeof]:Oe;var t}var Te=Object.defineProperty,Fe=Object.getOwnPropertyNames,ze=Object.getOwnPropertySymbols,Ge=Object.getOwnPropertyDescriptor,Be=Object.getPrototypeOf,Me=Object.prototype;function Le(e,t,r){if("string"!=typeof t){if(Me){var n=Be(t);n&&n!==Me&&Le(e,n,r)}var o=Fe(t);ze&&(o=o.concat(ze(t)));for(var s=De(e),a=De(t),i=0;i<o.length;++i){var c=o[i];if(!(c in Re||r&&r[c]||a&&c in a||s&&c in s)){var u=Ge(t,c);try{Te(e,c,u)}catch(e){}}}}return e}function We(e){return"function"==typeof e}function Ye(e){return"object"==typeof e&&"styledComponentId"in e}function He(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function qe(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Ue(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ve(e,t,r){if(void 0===r&&(r=!1),!r&&!Ue(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Ve(e[n],t[n]);else if(Ue(t))for(var n in t)e[n]=Ve(e[n],t[n]);return e}function Ze(e,t){Object.defineProperty(e,"toString",{value:t})}function Je(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ke=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw Je(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=n;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),i=(s=0,t.length);s<i;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,s=n;s<o;s++)t+="".concat(this.tag.getRule(s)).concat("/*!sc*/\n");return t},e}(),Qe=new Map,Xe=new Map,et=1,tt=function(e){if(Qe.has(e))return Qe.get(e);for(;Xe.has(et);)et++;var t=et++;return Qe.set(e,t),Xe.set(t,e),t},rt=function(e,t){Qe.set(e,t),Xe.set(t,e)},nt="style[".concat(le,"][").concat("data-styled-version",'="').concat("6.0.8",'"]'),ot=new RegExp("^".concat(le,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),st=function(e,t,r){for(var n,o=r.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&e.registerName(t,n)},at=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split("/*!sc*/\n"),o=[],s=0,a=n.length;s<a;s++){var i=n[s].trim();if(i){var c=i.match(ot);if(c){var u=0|parseInt(c[1],10),l=c[2];0!==u&&(rt(l,u),st(e,l,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(i)}}};function it(){return r.nc}var ct=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(le,"]")));return t[t.length-1]}(r),s=void 0!==o?o.nextSibling:null;n.setAttribute(le,"active"),n.setAttribute("data-styled-version","6.0.8");var a=it();return a&&n.setAttribute("nonce",a),r.insertBefore(n,s),n},ut=function(){function e(e){this.element=ct(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw Je(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),lt=function(){function e(e){this.element=ct(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ft=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),pt=fe,dt={isServer:!fe,useCSSOMInjection:!pe},ht=function(){function e(e,t,r){void 0===e&&(e=he),void 0===t&&(t={});var n=this;this.options=s(s({},dt),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&fe&&pt&&(pt=!1,function(e){for(var t=document.querySelectorAll(nt),r=0,n=t.length;r<n;r++){var o=t[r];o&&"active"!==o.getAttribute(le)&&(at(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),Ze(this,(function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=function(r){var o=function(e){return Xe.get(e)}(r);if(void 0===o)return"continue";var s=e.names.get(o),a=t.getGroup(r);if(void 0===s||0===a.length)return"continue";var i="".concat(le,".g").concat(r,'[id="').concat(o,'"]'),c="";void 0!==s&&s.forEach((function(e){e.length>0&&(c+="".concat(e,","))})),n+="".concat(a).concat(i,'{content:"').concat(c,'"}').concat("/*!sc*/\n")},s=0;s<r;s++)o(s);return n}(n)}))}return e.registerId=function(e){return tt(e)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(s(s({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new ft(r):t?new ut(r):new lt(r)}(this.options),new Ke(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(tt(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(tt(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(tt(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),mt=/&/g,gt=/^\s*\/\/.*$/gm;function vt(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=vt(e.children,t)),e}))}function yt(e){var t,r,n,o=void 0===e?he:e,s=o.options,a=void 0===s?he:s,i=o.plugins,c=void 0===i?de:i,u=function(e,n,o){return o===r||o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},l=c.slice();l.push((function(e){e.type===d&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(mt,r).replace(n,u))})),a.prefix&&l.push(ne),l.push(te);var f=function(e,o,s,i){void 0===o&&(o=""),void 0===s&&(s=""),void 0===i&&(i="&"),t=i,r=o,n=new RegExp("\\".concat(r,"\\b"),"g");var c=e.replace(gt,""),u=oe(s||o?"".concat(s," ").concat(o," { ").concat(c," }"):c);a.namespace&&(u=vt(u,a.namespace));var f,p,d,h=[];return ee(u,(f=l.concat((d=function(e){return h.push(e)},function(e){e.root||(e=e.return)&&d(e)})),p=A(f),function(e,t,r,n){for(var o="",s=0;s<p;s++)o+=f[s](e,t,r,n)||"";return o})),h};return f.hash=c.length?c.reduce((function(e,t){return t.name||Je(15),Ie(e,t.name)}),5381).toString():"",f}var bt=new ht,St=yt(),wt=n.createContext({shouldForwardProp:void 0,styleSheet:bt,stylis:St}),Ct=(wt.Consumer,n.createContext(void 0));function xt(){return(0,n.useContext)(wt)}function It(e){var t=(0,n.useState)(e.stylisPlugins),r=t[0],o=t[1],s=xt().styleSheet,a=(0,n.useMemo)((function(){var t=s;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,s]),i=(0,n.useMemo)((function(){return yt({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,n.useEffect)((function(){c()(r,e.stylisPlugins)||o(e.stylisPlugins)}),[e.stylisPlugins]);var u=(0,n.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:i}}),[e.shouldForwardProp,a,i]);return n.createElement(wt.Provider,{value:u},n.createElement(Ct.Provider,{value:i},e.children))}var Et=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=St);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Ze(this,(function(){throw Je(12,String(r.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=St),this.name+e.hash},e}(),kt=function(e){return e>="A"&&e<="Z"};function Pt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;kt(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var At=function(e){return null==e||!1===e||""===e},_t=function(e){var t,r,n=[];for(var o in e){var s=e[o];e.hasOwnProperty(o)&&!At(s)&&(Array.isArray(s)&&s.isCss||We(s)?n.push("".concat(Pt(o),":"),s,";"):Ue(s)?n.push.apply(n,a(a(["".concat(o," {")],_t(s),!1),["}"],!1)):n.push("".concat(Pt(o),": ").concat((t=o,null==(r=s)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in ue||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function $t(e,t,r,n){return At(e)?[]:Ye(e)?[".".concat(e.styledComponentId)]:We(e)?!We(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:$t(e(t),t,r,n):e instanceof Et?r?(e.inject(r,n),[e.getName(n)]):[e]:Ue(e)?_t(e):Array.isArray(e)?Array.prototype.concat.apply(de,e.map((function(e){return $t(e,t,r,n)}))):[e.toString()];var o}function Ot(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(We(r)&&!Ye(r))return!1}return!0}var Rt=Ee("6.0.8"),jt=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&Ot(e),this.componentId=t,this.baseHash=Ie(Rt,t),this.baseStyle=r,ht.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=He(n,this.staticRulesId);else{var o=qe($t(this.rules,e,t,r)),s=Ce(Ie(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,a)}n=He(n,s),this.staticRulesId=s}else{for(var i=Ie(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var l=this.rules[u];if("string"==typeof l)c+=l;else if(l){var f=qe($t(l,e,t,r));i=Ie(i,f+u),c+=f}}if(c){var p=Ce(i>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(c,".".concat(p),void 0,this.componentId)),n=He(n,p)}}return n},e}(),Nt=n.createContext(void 0);Nt.Consumer;var Dt={};new Set;function Tt(e,t,r){var o=Ye(e),a=e,i=!Pe(e),c=t.attrs,u=void 0===c?de:c,l=t.componentId,f=void 0===l?function(e,t){var r="string"!=typeof e?"sc":be(e);Dt[r]=(Dt[r]||0)+1;var n="".concat(r,"-").concat(ke("6.0.8"+r+Dt[r]));return t?"".concat(t,"-").concat(n):n}(t.displayName,t.parentComponentId):l,p=t.displayName,d=(void 0===p&&function(e){Pe(e)?"styled.".concat(e):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(e),")")}(e),t.displayName&&t.componentId?"".concat(be(t.displayName),"-").concat(t.componentId):t.componentId||f),h=o&&a.attrs?a.attrs.concat(u).filter(Boolean):u,m=t.shouldForwardProp;if(o&&a.shouldForwardProp){var g=a.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new jt(r,d,o?a.componentStyle:void 0);var b=n.forwardRef((function(e,t){return function(e,t,r){var o=e.attrs,a=e.componentStyle,i=e.defaultProps,c=e.foldedComponentIds,u=e.styledComponentId,l=e.target,f=n.useContext(Nt),p=xt(),d=e.shouldForwardProp||p.shouldForwardProp,h=function(e,t,r){for(var n,o=s(s({},t),{className:void 0,theme:r}),a=0;a<e.length;a+=1){var i=We(n=e[a])?n(o):n;for(var c in i)o[c]="className"===c?He(o[c],i[c]):"style"===c?s(s({},o[c]),i[c]):i[c]}return t.className&&(o.className=He(o.className,t.className)),o}(o,t,me(t,f,i)||he),m=h.as||l,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v||("forwardedAs"===v?g.as=h.forwardedAs:d&&!d(v,m)||(g[v]=h[v]));var y=function(e,t){var r=xt();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(a,h),b=He(c,u);return y&&(b+=" "+y),h.className&&(b+=" "+h.className),g[Pe(m)&&!ge.has(m)?"class":"className"]=b,g.ref=r,(0,n.createElement)(m,g)}(b,e,t)}));return b.attrs=h,b.componentStyle=y,b.shouldForwardProp=m,b.foldedComponentIds=o?He(a.foldedComponentIds,a.styledComponentId):"",b.styledComponentId=d,b.target=o?a.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,o=t;n<o.length;n++)Ve(e,o[n],!0);return e}({},a.defaultProps,e):e}}),Ze(b,(function(){return".".concat(b.styledComponentId)})),i&&Le(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Ft(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var zt=function(e){return Object.assign(e,{isCss:!0})};function Gt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(We(e)||Ue(e))return zt($t(Ft(de,a([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?$t(n):zt($t(Ft(n,t)))}function Bt(e,t,r){if(void 0===r&&(r=he),!t)throw Je(1,t);var n=function(n){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,r,Gt.apply(void 0,a([n],o,!1)))};return n.attrs=function(n){return Bt(e,t,s(s({},r),{attrs:Array.prototype.concat(r.attrs,n).filter(Boolean)}))},n.withConfig=function(n){return Bt(e,t,s(s({},r),n))},n}var Mt=function(e){return Bt(Tt,e)},Lt=Mt;ge.forEach((function(e){Lt[e]=Mt(e)}));!function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ot(e),ht.registerId(this.componentId+1)}e.prototype.createStyles=function(e,t,r,n){var o=n(qe($t(this.rules,t,r,n)),""),s=this.componentId+e;r.insertRules(s,s,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&ht.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)}}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),r=it(),n=qe([r&&'nonce="'.concat(r,'"'),"".concat(le,'="true"'),"".concat("data-styled-version",'="').concat("6.0.8",'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Je(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw Je(2);var r=((t={})[le]="",t["data-styled-version"]="6.0.8",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=it();return o&&(r.nonce=o),[n.createElement("style",s({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new ht({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Je(2);return n.createElement(It,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Je(3)}})(),"__sc-".concat(le,"__");const Wt=Lt.div`
  flex: 1 1 160px;
  flex-basis: 30%;
`;var Yt=e=>{let{monster_key:t,monster_title:r}=e;return n.createElement(Wt,null,n.createElement(o.Link,{to:`/appendix/${t}`,className:"monster-link"},r))},Ht=r(8541);const qt=r(6153),Ut=Lt.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 1rem;
`,Vt=e=>{const t=e.monster_keys,r=Array.from(Object.keys(e.monster_keys)).sort(((e,t)=>e.localeCompare(t))),o=r.map((r=>n.createElement(Yt,{key:r,monster_key:r,monster_title:t[r]?e.monster_keys[r]:""})));return n.createElement(n.Fragment,null,n.createElement(Ut,null,o))};function Zt(){const{0:e,1:t}=(0,n.useState)(new Map);return n.createElement(n.Fragment,null,n.createElement(Ht.Z,{url:"/appendix"},n.createElement("div",{className:"background-appendix"},n.createElement("div",{className:"AppendixDescription"},"Browse monster source books by setting or browse all at once."),n.createElement(Vt,{monster_keys:qt}))))}var Jt=Zt;function Kt(e){return n.createElement(n.Fragment,null,n.createElement("title",null,"Appendix - AD&D 2e Complete Compendium"))}},6774:function(e){e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var s=Object.keys(e),a=Object.keys(t);if(s.length!==a.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),c=0;c<s.length;c++){var u=s[c];if(!i(u))return!1;var l=e[u],f=t[u];if(!1===(o=r?r.call(n,l,f,u):void 0)||void 0===o&&l!==f)return!1}return!0}}}]);
//# sourceMappingURL=component---src-pages-appendix-tsx-4f4f102b0c713a452645.js.map