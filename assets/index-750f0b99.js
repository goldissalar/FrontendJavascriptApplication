(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function x(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(o){if(o.ep)return;o.ep=!0;const c=x(o);fetch(o.href,c)}})();function m(e,t){const x=l();return m=function(n,o){return n=n-346,x[n]},m(e,t)}function l(){const e=["989007BOQQKy","138hbuMvS","3985387Uerrmp","9214680rWsYpI","2876334tYaHqW","5mHeQTQ","53499qfDEBB","2168732fKbhOa","14088645RJvjaa"];return l=function(){return e},l()}(function(e,t){const x=m,n=e();for(;[];)try{if(parseInt(x(349))/1+parseInt(x(350))/2*(-parseInt(x(346))/3)+-parseInt(x(347))/4*(-parseInt(x(354))/5)+parseInt(x(353))/6+-parseInt(x(351))/7+-parseInt(x(352))/8+parseInt(x(348))/9===t)break;n.push(n.shift())}catch{n.push(n.shift())}})(l,624331);async function g(e){try{return await(await fetch(e)).json()}catch(t){console.error(t)}}const d=i;(function(e,t){const x=i,n=e();for(;[];)try{if(parseInt(x(342))/1+parseInt(x(352))/2+-parseInt(x(370))/3*(parseInt(x(343))/4)+parseInt(x(339))/5*(parseInt(x(394))/6)+parseInt(x(362))/7*(parseInt(x(348))/8)+-parseInt(x(354))/9+-parseInt(x(359))/10===t)break;n.push(n.shift())}catch{n.push(n.shift())}})(p,347921);function I(e){const t=i,x=document[t(337)]("div");x.classList.add("dog-card");const n=document[t(337)](t(355));n[t(393)]=e[t(345)];const o=new Image;let c=document[t(337)]("p");c[t(381)]="Leider kein Bild vorhanden!",c[t(369)][t(376)]=t(335),x.appendChild(c),o.onerror=function(){const a=t;console[a(334)](a(389)),n[a(369)].display="none",c.style[a(376)]=a(388)},o[t(395)]=function(){const a=t;n.style[a(376)]=a(388),c[a(369)][a(376)]="none",n[a(365)]=e[a(332)]},o[t(365)]=e[t(332)];const s=document[t(337)]("h2");s[t(381)]=e[t(345)],s.id=e[t(345)];const r=document[t(337)](t(350));return r.classList[t(387)](t(371)),r[t(381)]=t(349),r[t(357)]=!![],x.appendChild(n),x[t(360)](s),x[t(360)](r),x}function i(e,t){const x=p();return i=function(n,o){return n=n-332,x[n]},i(e,t)}async function v(e){const t=i,x=document[t(375)](t(338));if(x)for(const n in e){const o=await g(t(379)+n+t(346)),c={dogName:n,image:o.message},s=I(c);x[t(360)](s)}}function _(e,t){const x=i;e&&(t?(e[x(381)]=x(372),e.style.backgroundColor=x(385)):(e.textContent=x(349),e[x(369)][x(373)]="#3498db"))}function w(){const e=i,t=document[e(375)](e(367));if(t){const x=document[e(337)]("ul");x[e(390)][e(387)](e(378));const n=JSON[e(351)](localStorage[e(368)](e(396)))||"[]";for(const o of n){const c=document.createElement("li");c[e(381)]=o,c[e(390)][e(387)]("favorite-item"),x[e(360)](c)}t[e(360)](x)}}window[d(377)](d(383),()=>{const e=d,t=document[e(375)](e(341));t&&(t[e(369)][e(376)]=e(388))});function b(e,t=!![]){const x=d,n=document.getElementById(x(382));n&&(n[x(381)]=e,n[x(369)][x(373)]=t?x(340):"#ff0000",n[x(369)].display="block",setTimeout(()=>{const o=x;n[o(369)][o(376)]=o(335)},3e3))}function p(){const e=["add-to-favorites","Als Favorit entfernen","backgroundColor","sort","getElementById","display","addEventListener","favorites-list","https://dog.ceo/api/breed/","includes","textContent","notification","load","filter","#c00",".dog-card","add","block","error","classList","target","stringify","alt","4488PFKNQR","onload","favorites","image"," wurde aus Favoriten entfernt","log","none","message","createElement","apiDataContainer","885MJfLqh","#4CAF50","loading-icon","615819gdMGuX","131884pyuSHg"," wurde zu Favoriten hinzugefügt","dogName","/images/random","querySelector","8NtWCXU","Zu Favoriten hinzufügen","button","parse","1141732lcEbwC","getElementsByClassName","5329926OHEdLe","img","TEST","disabled","DOMContentLoaded","6448300GmfQBh","appendChild","closest","3015173OIQtpY","https://dog.ceo/api/breeds/list/all","click","src","setItem","favoritesContainer","getItem","style","15qXKyPM"];return p=function(){return e},p()}async function O(){const e=d;console[e(334)](e(356));const t=await g(e(363));await v(t[e(336)]);const x=document[e(375)](e(341));x&&(x[e(369)].display=e(335));const n=document[e(353)](e(371));for(const o of n){o[e(357)]=![];const c=JSON[e(351)](localStorage.getItem("favorites"))||[],s=o[e(361)](e(386)),r=s[e(347)]("h2");if(r){const a=r.id;c[e(380)](a)&&_(o,!![])}}if(n)for(const o of n)o.addEventListener(e(364),c=>{const s=e,r=c[s(391)][s(361)](s(386));if(r){const a=r.querySelector("h2");if(a){const f=a.id,u=JSON[s(351)](localStorage[s(368)](s(396)))||[];if(!u[s(380)](f))u.push(f),u[s(374)](),localStorage[s(366)](s(396),JSON.stringify(u)),b(f+s(344),!![]),_(o,!![]);else{const h=u[s(384)](y=>y!==f);localStorage[s(366)](s(396),JSON[s(392)](h)),b(f+s(333),![]),_(o,![])}}}})}document.addEventListener(d(358),()=>{O(),w()});
