"use strict";(self.webpackChunkadnd_compendium_static_frontend=self.webpackChunkadnd_compendium_static_frontend||[]).push([[248],{9972:function(e,a,t){t.d(a,{Z:function(){return r}});var n=t(7294),o=t(4854);var r=function(e){return n.createElement("div",{className:"bookcard-module--book-card--80c92"},n.createElement("div",{className:"bookcard-module--book-card-header-rectangle--5729a"},n.createElement("p",{className:"bookcard-module--book-card-header--1db8a"},e.title)),n.createElement("div",{className:"bookcard-module--book_arrow--25480"},n.createElement("div",{className:"bookcard-module--book_point-left--f3a5e"}),n.createElement("div",{className:"bookcard-module--book_line--e18a0"}),n.createElement("div",{className:"bookcard-module--book_point-right--1535f"})),n.createElement(o.Link,{to:"/catalog/"+e.category+"/"+e.id,className:"bookcard-module--book-link--0cee9"},n.createElement("div",{className:"bookcard-module--hover01--6e188"},n.createElement("figure",null,n.createElement("img",{src:"/images/Books/Hi Resolution/"+e.id+".jpg",className:"bookcard-module--book_img-2--b8199",alt:e.title+"Cover art",title:e.title,loading:"lazy",onError:a=>{let{currentTarget:t}=a;t.onerror=null,t.alt="This monster is missing it's image. It will be found eventually.",t.src="/img/placeholder.svg",t.title="Missing book cover image of "+e.title}})))),n.createElement("div",{className:"bookcard-module--group-1-2--918c9"},n.createElement("div",{className:"bookcard-module--book-card-footer-rectangle--90228"},n.createElement("p",{className:"bookcard-module--book-card-description-text--136e3"},e.id))))}},235:function(e,a,t){t.r(a),t.d(a,{catalog:function(){return A},default:function(){return b}});var n=t(7294),o=t(8541),r=t(4854);t(7315);const s=t(2137),g=t(7872),l=t(3415);function i(){const{0:e,1:a}=(0,n.useState)(new Array),{0:t,1:o}=(0,n.useState)(new Array);(0,n.useEffect)((()=>{(async()=>{const e=g;var t=new Array;for(let a=0;a<e.length;a++)t.push(e[a].setting_name);a(e),o(t)})()}),[]);let i=[];return Object.entries(l).forEach(((e,a)=>{let[t,o]=e;"string"!=typeof o||i.push(n.createElement("div",{className:"setting-frame",title:t,key:t},n.createElement(r.Link,{to:"/catalog/"+t,className:"category"},n.createElement("div",{className:"setting-button"},n.createElement("img",{className:"catImg",src:"/images/grf/"+t+".gif",alt:o+"image"}),n.createElement("div",{className:"setting-subtitle"},n.createElement("div",{className:"setting-title"},o),n.createElement("div",{className:"setting-world"},s[t]))))))})),n.createElement(n.Fragment,null,n.createElement("div",{className:"CategoryList"},i))}var d=t(9972);const c=t(9382),u=t(63),m=t(7315),D={display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"};function k(){const e=[];var a={};for(const[t,n]of Object.entries(u))for(const e of n)a[e]=m[t];for(const[t]of Object.entries(c))e.push(n.createElement(d.Z,{key:t,id:t,category:a[t],title:c[t]}));return n.createElement("div",{style:D},e)}var _="catalog-module--CatalogDescription--ab901",p="catalog-module--catalog-title--8fbbd";function A(){return"undefined"!=typeof document&&(document.title="Catalog - Complete Compendium"),n.createElement(n.Fragment,null,n.createElement(o.Z,{url:"/catalog",props:""},n.createElement("div",{className:"backgroundCatalog"},n.createElement("h2",{className:"catalogTitle",id:"settings"},"All Campaign Settings"),n.createElement("div",{className:_},"Browse monster books by setting or browse all at once."),n.createElement(i,null),n.createElement("h2",{className:p,id:"books"},"All Books"),n.createElement(k,null))))}var b=A},7315:function(e){e.exports=JSON.parse('{"ADnD":"add2_01","Advanced Dungeons &amp; Dragons 2nd Edition":"add2_01","Advanced Dungeons & Dragons 2nd Edition":"add2_01","Al-Qadim (Forgotten Realms)":"aq","Alternity":"al","Birthright":"br","Dark Sun":"ds","Dragon Magazine":"dr","Dragonlance":"dl","Dungeon Magazine":"du","Fiends Folio":"ff","Forgotten Realms":"fr","Greyhawk":"gh","Kara-Tur (Forgotten Realms)":"kt","Lankhmar":"lm","Masque of the Red Death (Ravenloft)":"rd","Maztica (Forgotten Realms)":"mz","Mystara":"ms","Planescape":"ps","Ravenloft":"rv","Red Steel (Mystara)":"rs","Spelljammer":"sj","The Horde (Forgotten Realms)":"th"}')},2137:function(e){e.exports=JSON.parse('{"Advanced Dungeons & Dragons 2nd Edition":"Generic Monsters","Alternity":"Generic","Al-Qadim (Forgotten Realms)":"Zakhara (Toril)","Birthright":"Cerilia","Dark Sun":"Athas","Dragon Magazine":"Various","Dragonlance":"Krynn","Dungeon Magazine":"Various","Fiends Folio":"Generic","Forgotten Realms":"Toril","Greyhawk":"Oerth","The Horde (Forgotten Realms)":"Hordelands (Toril)","Kara-Tur (Forgotten Realms)":"Kara-Tur (Toril)","Lankhmar":"Nehwon","Masque of the Red Death (Ravenloft)":"Gothic Earth","Maztica (Forgotten Realms)":"Maztica (Toril)","Mystara":"The Known World","Planescape":"the Great Wheel","Ravenloft":"Demiplane of Dread","Red Steel (Mystara)":"Savage Coast (Mystara)","Spelljammer":"Outer Space/All"}')},63:function(e){e.exports=JSON.parse('{"Advanced Dungeons & Dragons 2nd Edition":["2101","2140","2158","9539","2103","2145","2166","2173","9533","2102","9376","2109","9547","9569","1089","2107","9572","9570","2125","2146","11383"],"Al-Qadim (Forgotten Realms)":["2146","9449","1091","2129","9433"],"Alternity":["2800","2805"],"Birthright":["3117","3140","3110","3121"],"Dark Sun":["2433","2400","2438","2405","2408","2422","2432","2418","2439","2417","2444","2406","2413","2437","2403","2412"],"Dragon Magazine":["DragonMagazineAnnual1998","Dragon238","Dragon210","DragonMagazinAnnual1996","DragonMagazineAnnual1997","Dungeon#76","DragonMagazinAnnual1997"],"Dragonlance":["2105","9278","11372","9344","1050","9275"],"Dungeon Magazine":["Dungeon24","Dungeon35","Dungeon37","Dungeon54","Dungeon56","Dungeon61","Dungeon62","Dungeon64","Dungeon71","Dungeon76","Dungeon269"],"Fiends Folio":["2132"],"Forgotten Realms":["2125","1083","1120","1060","2104","9430","9274","9300","9491","9547","9575","1109","9351","11405","1121","9574","9487","9388","9391","11430","1084","1085","9535","9540"],"Greyhawk":["1064","2107","2012","1162","9279","9309","9302","9270","9289"],"The Horde (Forgotten Realms)":["1055"],"Kara-Tur (Forgotten Realms)":["2116","2104","9258"],"Lankhmar":["2137","9295"],"Masque of the Red Death (Ravenloft)":["9529"],"Maztica (Forgotten Realms)":["9333","9340","1066","9349"],"Mystara":["2501","2524","9533"],"Planescape":["2118","2602","2613","Dungeon#23","2615","2600","2635","2607","2603","11431","1145","2129","9506","2621","2119","2132","2107","2626","Dungeon#31","2433","2122","Dungeon#28","9444","9533","2631","1602"],"Ravenloft":["1088","2153","1163","9419","1124","2122","2139","9452","1146","1053","9439","9416","9348","9582","11507","9364","9321","9541","9526"],"Red Steel (Mystara)":["2524"],"Spelljammer":["2109","2119","1065","1049"]}')},7872:function(e){e.exports=JSON.parse('[{"setting_key":"adnd2e","setting_name":"Advanced Dungeons &amp; Dragons 2nd Edition","source_books":["2101","2140","2158","9539","2103","2145","2166","2173","9533","2102","9376","2109","9547","9569","1089","2107","9572","9570","2125","2146","11383"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"alqadim","setting_name":"Al-Qadim (Forgotten Realms)","source_books":["2146","9449","1091","2129","9433"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"alternity","setting_name":"Alternity","source_books":["2800","2805"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"birthright","setting_name":"Birthright","source_books":["3117","3140","3110","3121"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"dark_sun","setting_name":"Dark Sun","source_books":["2433","2400","2438","2405","2408","2422","2432","2418","2439","2417","2444","2406","2413","2437","2403","2412"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"dragon_magazine","setting_name":"Dragon Magazine","source_books":["DragonMagazineAnnual1998","Dragon238","Dragon210","DragonMagazinAnnual1996","DragonMagazineAnnual1997","DragonMagazineAnnual1997","Dragon156","Dragon159","Dragon162","Dragon163","Dragon165","Dragon167","Dragon170","Dragon172","Dragon174","Dragon180","Dragon182","Dragon185","Dragon186","Dragon187","Dragon190","Dragon191","Dragon198","Dragon199","Dragon206","Dragon210","Dragon223","Dragon227","Dragon228","Dragon235","Dragon237","Dragon238","Dragon239","Dragon242","Dragon243","Dragon244","Dragon247","Dragon248","Dragon267","Dragon268","Dragon269","Dragon270","Dragon271","Dragon272"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"dragonlance","setting_name":"Dragonlance","source_books":["2105","9278","11372","9344","1050","9275"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"dungeon_magazine","setting_name":"Dungeon Magazine","source_books":["Dungeon23","Dungeon24","Dungeon28","Dungeon31","Dungeon33","Dungeon35","Dungeon37","Dungeon54","Dungeon56","Dungeon57","Dungeon61","Dungeon62","Dungeon64","Dungeon71","Dungeon76","Dungeon269"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"fiends_folio","setting_name":"Fiends Folio","source_books":["2132"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"forgotten_realms","setting_name":"Forgotten Realms","source_books":["2125","1083","1120","1060","2104","9430","9274","9300","9491","9547","9575","1109","9351","11405","1121","9574","9487","9388","9391","11430","1084","1085","9535","9540"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"greyhawk","setting_name":"Greyhawk","source_books":["1064","2107","2012","1162","9279","9309","9302","9270","9289"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"kara-tur","setting_name":"Kara-Tur (Forgotten Realms)","source_books":["2116","2104","9258"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"lankhmar","setting_name":"Lankhmar","source_books":["2137","9295"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"masque_of_the_red_death","setting_name":"Masque of the Red Death (Ravenloft)","source_books":["9529"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"maztica","setting_name":"Maztica (Forgotten Realms)","source_books":["9333","9340","1066","9349"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"mystara","setting_name":"Mystara","source_books":["2501","2524","9533"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"planescape","setting_name":"Planescape","source_books":["2118","2602","2613","2615","2600","2635","2607","2603","11431","1145","2129","9506","2621","2119","2132","2107","2626","2433","2122","9444","9533","2631","1602"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"ravenloft","setting_name":"Ravenloft","source_books":["1088","2153","1163","9419","1124","2122","2139","9452","1146","1053","9439","9416","9348","9582","11507","9364","9321","9541","9526"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"red_steel","setting_name":"Red Steel (Mystara)","source_books":["2524"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"spelljammer","setting_name":"Spelljammer","source_books":["2109","2119","1065","1049"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"},{"setting_key":"the_horde","setting_name":"The Horde (Forgotten Realms)","source_books":["1055"],"createdAt":"2022-09-14T02:07:27.753Z","updatedAt":"2022-10-29T22:10:09.440Z"}]')}}]);
//# sourceMappingURL=component---src-pages-catalog-tsx-277e9e0dc49e0fac809a.js.map