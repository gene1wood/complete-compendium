"use strict";(self.webpackChunkcomplete_compendium=self.webpackChunkcomplete_compendium||[]).push([[314],{4138:function(e,t,n){n.d(t,{A:function(){return d}});var a=n(6540),r=n(9687),o=n(4794);const m=n(7636),l=n(5565),i=n(8712);var s=e=>{var t=[],n="",r=0,s="",c=e.path[0];return e.path.forEach((e=>{switch(c){case"appendix":switch(r){case 0:s=e;break;case 1:s=l[e];break;default:s="APendix"}break;case"catalog":switch(r){case 0:s=e;break;case 1:s=m[e];break;case 2:s=i[e].title;break;case 3:s=l[e];break;default:s="Catalog"}break;case"about":switch(r){case 0:s=e;break;case 1:s="the-monsters"==e?"The Monsters":e;break;default:s="About"}case"table":s="Table"}n+=`/${e}`,0!=r&&t.push(a.createElement("div",{className:"breadcrumb-module--arrow-box--8f143",key:`arrow-${e}`},"/")),t.push(a.createElement(o.Link,{className:"breadcrumb-module--bc-element--36f40",to:n,key:e},s," ")),r++})),a.createElement("div",{className:"breadcrumb-module--bc-frame--78140"},t,a.createElement("div",{className:"breadcrumb-module--bc-bg--8b107"}))},c=n(572);var d=e=>{const t=e.url.split("/");return t.length,t.shift(),console.log(t),a.createElement("div",{className:"layout-module--layout-wrapper--c2f92"},a.createElement(r.A,null),a.createElement("div",{className:"layout-module--layout--d56eb"},a.createElement(s,{path:t}),e.children),a.createElement(c.A,null))}},2820:function(e,t,n){var a=n(6540),r=n(4794),o=n(5565);const m={marginBlockStart:"unset",marginBlockEnd:"unset",marginInlineStart:"unset",marginInlineEnd:"unset",position:"relative",fontFamily:"Leksa Sans DemiBold",fontStyle:"normal",fontWeight:600,fontSize:"24px",display:"flex",alignItems:"center",textAlign:"center",textDecoration:"none",textTransform:"capitalize",color:"white",paddingTop:"1rem",paddingBottom:"1rem",paddingLeft:"2rem",paddingRight:"2rem",zIndex:1},l={marginBlockStart:"unset",marginBlockEnd:"unset",marginInlineStart:"unset",marginInlineEnd:"unset",position:"relative",fontFamily:"Leksa Sans DemiBold",fontStyle:"normal",fontWeight:600,fontSize:"18px",display:"flex",alignItems:"center",textAlign:"center",textDecoration:"none",textTransform:"capitalize",color:"white",zIndex:1},i={position:"relative",fontFamily:"Leksa Sans DemiBold",fontStyle:"normal",fontWeight:400,display:"flex",alignItems:"center",textAlign:"center",textDecoration:"none",textTransform:"capitalize",color:"white",paddingTop:"2mm",paddingBottom:"2mm",paddingLeft:"1.5rem",paddingRight:"1.5rem",zIndex:1};t.A=e=>{const{0:t,1:n}=(0,a.useState)(""),s=()=>{const e=Object.keys(o);if(void 0!==e){const a=e[(t=e.length,Math.floor(Math.random()*t))];n(a)}var t};let c;return(0,a.useEffect)((()=>{s()}),[]),c=e.home?m:l,a.createElement("div",{style:c},a.createElement(r.Link,{to:"/appendix/"+t,style:{textDecoration:"none"}},a.createElement("div",{style:i,onClick:s},"Random Monster")))}},3095:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return f}});var a=n(6540),r=n(4138),o=n(4794),m=n(4087),l=n(2449),i=n(2820),s=n(2657);var c=function(e,t){let n="";const a=t.match(/<p class=\"f\">([^<].+?)<\/p>/);return null!==a&&a[1]&&(n=a[1]),n=n.replace(/<.*?>/g,""),n};(0,n(8980).polyfill)();const d=n(6772),u=n(4790),g=n(8712),p=e=>{let{pageContext:t}=e;return a.createElement(a.Fragment,null,a.createElement("title",null,t.title+" - AD&D Complete Compendium"),a.createElement("meta",{property:"og:site_name",content:"AD&D 2nd Edition Complete Monstrous Compendium"}),a.createElement("meta",{property:"og:title",content:t.monster_data.title+" | AD&D Complete Compendium"}),a.createElement("meta",{property:"og:description",content:c(t.monster_key,t.monster_data.fullBody)}),a.createElement("meta",{property:"og:url",content:"https://www.completecompendium.com"+t.monster_path}),a.createElement("meta",{property:"og:type",content:"website"}),t.monster_data.images[1]&&t.monster_data.images[1].match(new RegExp(t.monster_key,"g"))?a.createElement(a.Fragment,null,a.createElement("meta",{property:"og:image",content:"https://www.completecompendium.com/images/monsters/img/"+t.monster_key+".gif"}),a.createElement("meta",{name:"twitter:image",content:"https://www.completecompendium.com/images/monsters/img/"+t.monster_key+".gif"})):a.createElement(a.Fragment,null),a.createElement("meta",{property:"og:image:width",content:"300"}),a.createElement("meta",{property:"og:image:height",content:"360"}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:url",content:"https://www.completecompendium.com"+t.monster_path}),a.createElement("meta",{name:"twitter:title",content:"Advanced Dungeons & Dragons 2nd Edition Complete Compendium"}),a.createElement("meta",{name:"twitter:description",content:c(t.monster_key,t.monster_data.fullBody)}))};var f=e=>{let{pageContext:t}=e;const n=t,c=n.monster_key,p=(n.title,n.sources,n.prev_key),f=n.next_key,E=n.monster_data.fullBody;let h=a.createElement(a.Fragment,null),k=!0,y="",v="img/"+n.monster_key;if(k=!(!n.monster_data.images[1]||!n.monster_data.images[1].match(new RegExp(v,"g"))),k){y="/images/monsters/img/"+n.monster_key+".gif";let e="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";h=a.createElement("img",{className:s.yF,src:y,alt:n.monster_data.title,title:n.monster_data.title,onError:t=>{let{currentTarget:a}=t;a.onerror=null,a.alt="This monster is missing it's image. It will be found eventually.",a.src=e,a.title="Missing image of "+n.monster_data.title}})}const b=n.monster_data.setting,_=d[b];var w="hr2",x={};if(_){w="hr2-"+_;x={color:l.A.get(_)}}let N=a.createElement("div",null,a.createElement("div",{className:s.b_},a.createElement("div",{className:s.pk},a.createElement(i.A,{home:!1})),a.createElement("div",{className:s.gE},a.createElement(o.Link,{className:s.Wp,to:"../"+p},a.createElement("div",{className:s.E_},"Previous")),a.createElement(o.Link,{className:s.Wp,to:"../"+f},a.createElement("div",{className:s.E_},"Next")))));return a.createElement(a.Fragment,null,a.createElement(r.A,{url:`/appendix/${c}`},a.createElement("div",null,N,a.createElement("div",{className:s.ZS},a.createElement("h1",{style:x},n.monster_data.title),a.createElement(o.Link,{to:"/catalog/"+d[n.monster_data.setting]},a.createElement("img",{className:s.s1,src:`/img_settings/${d[n.monster_data.setting]}.gif`,alt:n.monster_data.setting+"Campaign Setting Logo",title:n.monster_data.setting}))),a.createElement("hr",{className:s.UW}),a.createElement("hr",{className:w}),a.createElement("div",{className:s.l_},h),a.createElement(m.BW,{className:"interweave",content:E}),a.createElement("div",{className:s._k},a.createElement("div",{className:s.Q$},"Sourcebooks:"),a.createElement("div",{className:s.KT},n.monster_data.hasOwnProperty("TSR")&&null!=n.monster_data.TSR?n.monster_data.TSR.map((e=>{var t;return a.createElement("div",{key:e},a.createElement(o.Link,{to:"/catalog/"+u[e]+"/"+e},null===(t=g[e])||void 0===t?void 0:t.title," (",e,")"),a.createElement("br",null))})):"No TSR")),a.createElement("div",{className:s.i4},a.createElement(o.Link,{to:`/appendix/${c}/print`},"Print-friendly page")," (Experimental)"))))}},2657:function(e,t,n){n.d(t,{E_:function(){return l},KT:function(){return f},Q$:function(){return E},UW:function(){return r},Wp:function(){return i},ZS:function(){return p},_k:function(){return g},b_:function(){return s},gE:function(){return a},i4:function(){return d},l_:function(){return m},pk:function(){return c},s1:function(){return u},yF:function(){return o}});var a="monsterpage-module--horizontal-monster-links--21e47",r="monsterpage-module--hr1--f5b5c",o="monsterpage-module--monster-image--bb97d",m="monsterpage-module--monster-img-frame--67133",l="monsterpage-module--monster-nav--3c352",i="monsterpage-module--monster-nav-link--495ca",s="monsterpage-module--monster-nav-links--c9a5a",c="monsterpage-module--page-random-monster-button--2d0e4",d="monsterpage-module--print-link--bc6b6",u="monsterpage-module--setting-image--e8b92",g="monsterpage-module--source-list--66a63",p="monsterpage-module--top-header--5efbc",f="monsterpage-module--tsr--2eb82",E="monsterpage-module--tsr-label--b394a"},7636:function(e){e.exports=JSON.parse('{"add2_01":"Advanced Dungeons & Dragons 2nd Edition","aq":"Al-Qadim (Forgotten Realms)","al":"Alternity","br":"Birthright","ds":"Dark Sun","dr":"Dragon Magazine","dl":"Dragonlance","du":"Dungeon Magazine","ff":"Fiends Folio","fr":"Forgotten Realms","gh":"Greyhawk","kt":"Kara-Tur (Forgotten Realms)","lm":"Lankhmar","rd":"Masque of the Red Death (Ravenloft)","mz":"Maztica (Forgotten Realms)","ms":"Mystara","ps":"Planescape","rv":"Ravenloft","rs":"Red Steel (Mystara)","sj":"Spelljammer","th":"The Horde (Forgotten Realms)"}')}}]);
//# sourceMappingURL=component---src-templates-monster-tsx-c4ac87f8397021c16922.js.map