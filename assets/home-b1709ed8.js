(function(x,t){const e=l,n=x();for(;[];)try{if(parseInt(e(452))/1+-parseInt(e(443))/2+-parseInt(e(450))/3*(-parseInt(e(449))/4)+parseInt(e(454))/5*(parseInt(e(446))/6)+-parseInt(e(445))/7*(-parseInt(e(444))/8)+parseInt(e(448))/9+parseInt(e(453))/10*(-parseInt(e(451))/11)===t)break;n.push(n.shift())}catch{n.push(n.shift())}})(_,918333);async function b(x){const t=l;try{return await(await fetch(x))[t(447)]()}catch(e){console.error(e)}}function l(x,t){const e=_();return l=function(n,c){return n=n-443,e[n]},l(x,t)}function _(){const x=["33cLcJKu","1609396zRVgwW","14948110GQsbtB","5HNqiEa","2448902ycJKNV","3312376FBFWTR","14xJxmSa","9598704dFdSdJ","json","14685552KvnQfU","255524NatSjG","45TXXNPz"];return _=function(){return x},_()}const f=r;(function(x,t){const e=r,n=x();for(;[];)try{if(-parseInt(e(454))/1+-parseInt(e(492))/2*(-parseInt(e(459))/3)+parseInt(e(518))/4+parseInt(e(457))/5*(parseInt(e(456))/6)+parseInt(e(505))/7*(-parseInt(e(515))/8)+-parseInt(e(478))/9*(parseInt(e(468))/10)+-parseInt(e(499))/11*(-parseInt(e(500))/12)===t)break;n.push(n.shift())}catch{n.push(n.shift())}})(p,526403);function y(x){const t=r,e=document[t(514)](t(482));e.classList.add(t(509));const n=document[t(514)]("img");n.alt=x.dogName;const c=new Image;let d=document.createElement("p");d.textContent=t(475),d[t(483)][t(466)]=t(488),e.appendChild(d),c.onerror=function(){const a=t;console[a(498)](a(513)),n.style[a(466)]="none",d[a(483)][a(466)]=a(494)},c.onload=function(){const a=t;n[a(483)][a(466)]="block",d[a(483)][a(466)]=a(488),n[a(495)]=x[a(490)]},c[t(495)]=x.image;const o=document[t(514)]("h2");o[t(463)]=x.dogName,o.id=x[t(491)];const s=document[t(514)](t(477));return s[t(462)][t(467)](t(455)),s.textContent=t(486),s[t(508)]=!![],e[t(460)](n),e[t(460)](o),e[t(460)](s),e}async function v(x){const t=r,e=document[t(464)](t(465));if(e)for(const n in x){const c=await b(t(502)+n+t(516)),d={dogName:n,image:c[t(511)]},o=y(d);e[t(460)](o)}}function r(x,t){const e=p();return r=function(n,c){return n=n-453,e[n]},r(x,t)}function p(){const x=["45aLjydq","includes","favorite-item","querySelector","div","style"," wurde aus Favoriten entfernt","https://dog.ceo/api/breeds/list/all","Zu Favoriten hinzufügen","filter","none","getElementsByClassName","image","dogName","32nPRMDR","click","block","src","push","target","log","143jkjMMr","17652VfEGFJ","notification","https://dog.ceo/api/breed/","parse","#3498db","85155nHXtEE",".dog-card","closest","disabled","dog-card","loading-icon","message","favorites-list","error","createElement","352LwKCWZ","/images/random","setItem","290460uYumgb","getItem","28974acvqsf","add-to-favorites","12Wjvhdi","2248345fotSiz","favorites","127188Peownj","appendChild","favoritesContainer","classList","textContent","getElementById","apiDataContainer","display","add","1157550TuoCLu","#4CAF50","backgroundColor","load","addEventListener","DOMContentLoaded","#ff0000","Leider kein Bild vorhanden!"," wurde zu Favoriten hinzugefügt","button"];return p=function(){return x},p()}function m(x,t){const e=r;x&&(t?(x[e(463)]="Als Favorit entfernen",x.style.backgroundColor="#c00"):(x[e(463)]=e(486),x[e(483)].backgroundColor=e(504)))}function w(){const x=r,t=document[x(464)](x(461));if(t){const e=document[x(514)]("ul");e[x(462)][x(467)](x(512));const n=JSON[x(503)](localStorage[x(453)](x(458)))||[];for(const c of n){const d=document[x(514)]("li");d[x(463)]=c,d.classList[x(467)](x(480)),e[x(460)](d)}t[x(460)](e)}}window[f(472)](f(471),()=>{const x=f,t=document.getElementById(x(510));t&&(t.style[x(466)]=x(494))});function g(x,t=!![]){const e=f,n=document[e(464)](e(501));n&&(n[e(463)]=x,n[e(483)][e(470)]=e(t?469:474),n[e(483)][e(466)]=e(494),setTimeout(()=>{const c=e;n.style[c(466)]=c(488)},3e3))}async function C(){const x=f;console[x(498)]("TEST Deployment/Main Branch");const t=await b(x(485));await v(t[x(511)]);const e=document.getElementById(x(510));e&&(e[x(483)][x(466)]=x(488));const n=document[x(489)](x(455));for(const c of n){c[x(508)]=![];const d=JSON[x(503)](localStorage.getItem(x(458)))||[],o=c[x(507)](x(506)),s=o[x(481)]("h2");if(s){const a=s.id;d[x(479)](a)&&m(c,!![])}}if(n)for(const c of n)c[x(472)](x(493),d=>{const o=x,s=d[o(497)].closest(".dog-card");if(s){const a=s[o(481)]("h2");if(a){const i=a.id,u=JSON[o(503)](localStorage[o(453)](o(458)))||[];if(!u[o(479)](i))u[o(496)](i),u.sort(),localStorage.setItem("favorites",JSON.stringify(u)),g(i+o(476),!![]),m(c,!![]);else{const I=u[o(487)](h=>h!==i);localStorage[o(517)](o(458),JSON.stringify(I)),g(i+o(484),![]),m(c,![])}}}})}document[f(472)](f(473),()=>{C(),w()});
