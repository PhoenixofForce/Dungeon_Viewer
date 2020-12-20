var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function l(t){let e;return s(t,(t=>e=t))(),e}function c(t,e,n){t.$$.on_destroy.push(s(e,n))}function u(t,e,n,o){if(t){const i=a(t,e,n,o);return t[0](i)}}function a(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function d(t,e,n,o,i,r,s){const l=function(t,e,n,o){if(t[2]&&o){const i=t[2](o(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|i[o];return t}return e.dirty|i}return e.dirty}(e,o,i,r);if(l){const i=a(e,n,o,s);t.p(i,l)}}function f(t,e,n=e){return t.set(n),e}function h(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function g(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function x(){return $(" ")}function b(){return $("")}function w(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function M(t,e){t.value=null==e?"":e}function N(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function E(t,e,n){t.classList[n?"add":"remove"](e)}let P;function S(t){P=t}function O(){if(!P)throw new Error("Function called outside component initialization");return P}function R(t){O().$$.on_mount.push(t)}function _(){const t=O();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const i=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach((e=>{e.call(t,i)}))}}}const T=[],F=[],C=[],J=[],Y=Promise.resolve();let A=!1;function L(t){C.push(t)}function D(t){J.push(t)}let j=!1;const X=new Set;function G(){if(!j){j=!0;do{for(let t=0;t<T.length;t+=1){const e=T[t];S(e),I(e.$$)}for(S(null),T.length=0;F.length;)F.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];X.has(e)||(X.add(e),e())}C.length=0}while(T.length);for(;J.length;)J.pop()();A=!1,j=!1,X.clear()}}function I(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const H=new Set;let W;function q(){W={r:0,c:[],p:W}}function z(){W.r||o(W.c),W=W.p}function B(t,e){t&&t.i&&(H.delete(t),t.i(e))}function K(t,e,n,o){if(t&&t.o){if(H.has(t))return;H.add(t),W.c.push((()=>{H.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const Q="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function U(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function V(t){t&&t.c()}function Z(t,n,r){const{fragment:s,on_mount:l,on_destroy:c,after_update:u}=t.$$;s&&s.m(n,r),L((()=>{const n=l.map(e).filter(i);c?c.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(L)}function tt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){-1===t.$$.dirty[0]&&(T.push(t),A||(A=!0,Y.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(e,i,r,s,l,c,u=[-1]){const a=P;S(e);const d=i.props||{},f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let h=!1;if(f.ctx=r?r(e,d,((t,n,...o)=>{const i=o.length?o[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=i)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](i),h&&et(e,t)),n})):[],f.update(),h=!0,o(f.before_update),f.fragment=!!s&&s(f.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);f.fragment&&f.fragment.l(t),t.forEach(m)}else f.fragment&&f.fragment.c();i.intro&&B(e.$$.fragment),Z(e,i.target,i.anchor),G()}S(a)}class ot{$destroy(){tt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const it=[];function rt(e,n=t){let o;const i=[];function s(t){if(r(e,t)&&(e=t,o)){const t=!it.length;for(let t=0;t<i.length;t+=1){const n=i[t];n[1](),it.push(n,e)}if(t){for(let t=0;t<it.length;t+=2)it[t][0](it[t+1]);it.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(r,l=t){const c=[r,l];return i.push(c),1===i.length&&(o=n(s)||t),r(e),()=>{const t=i.indexOf(c);-1!==t&&i.splice(t,1),0===i.length&&(o(),o=null)}}}}function st(e,n,r){const l=!Array.isArray(e),c=l?[e]:e,u=n.length<2;return{subscribe:rt(r,(e=>{let r=!1;const a=[];let d=0,f=t;const h=()=>{if(d)return;f();const o=n(l?a[0]:a,e);u?e(o):f=i(o)?o:t},p=c.map(((t,e)=>s(t,(t=>{a[e]=t,d&=~(1<<e),r&&h()}),(()=>{d|=1<<e}))));return r=!0,h(),function(){o(p),f()}})).subscribe}}const lt=rt({id:-1});const ct="vast-cliffs-53607.herokuapp.com";let ut;function at(t){return new Promise((function(e,n){let o=new XMLHttpRequest;o.onload=function(){var t=o.status;200==t?e(JSON.parse(o.responseText)):n(t),console.log(t)},o.open("POST",`https://${ct}`,!0),o.setRequestHeader("Content-type","application/json"),o.send(t)}))}function dt(t,e){ut=new WebSocket(`wss://${ct}`),ut.onopen=function(){let n={action:"register",pid:e,gid:t};ut.send(JSON.stringify(n))},ut.onmessage=function(t){let e=JSON.parse(t.data);if(console.log(e),"userJoined"===e.action)r=e.user,lt.update((t=>(t.playerNames.push(r),t)));else if("showRoom"===e.action)i=e.room,lt.update((t=>(t.thisPlayer.isMaster?t.dungeon.rects.find((t=>t.x==i.x&&t.y==i.y&&t.w==i.w&&t.h==i.h)).visible=i.visible:t.dungeon.rects=[...t.dungeon.rects,i],t)));else if("showDoor"===e.action)!function(t){lt.update((e=>(e.thisPlayer.isMaster||(e.dungeon.doors=[...e.dungeon.doors,t]),e)))}(e.door);else if("kick"===e.action)ut.close();else if("ping"===e.action){let t=l(lt).id,e={action:"pong",pid:l(lt).thisPlayer.id,gid:t};ut.send(JSON.stringify(e))}else"userLeft"===e.action?(o=e.user,lt.update((t=>(t.playerNames.splice(t.playerNames.indexOf(o),1),t)))):"hideDoor"===e.action?(n=e.door,lt.update((t=>{if(!t.thisPlayer.isMaster){let e=t.dungeon.doors.findIndex((t=>t.x===n.x&&t.y===n.y));e>=0&&t.dungeon.doors.splice(e,1)}return t}))):"hideRoom"===e.action&&function(t){lt.update((e=>{if(e.thisPlayer.isMaster)e.dungeon.rects.find((e=>e.x==t.x&&e.y==t.y&&e.w==t.w&&e.h==t.h)).visible=t.visible;else{let n=e.dungeon.rects.findIndex((e=>e.x==t.x&&e.y==t.y&&e.w==t.w&&e.h==t.h));n>=0&&e.dungeon.rects.splice(n,1)}return e}))}(e.room);var n,o,i,r}}function ft(e){let n,i,r,s,l,c,u,a,d,f,g,$,b,k,N,E;return{c(){n=y("div"),i=y("div"),r=y("div"),s=y("input"),l=x(),c=y("div"),u=y("div"),a=y("input"),d=x(),f=y("div"),g=y("button"),g.textContent="Join Game",$=x(),b=y("div"),k=y("button"),k.textContent="Create Game",v(s,"placeholder","Enter Game Name"),v(s,"class","is-rounded"),v(r,"class","col"),v(i,"class","row"),v(a,"placeholder","Enter your Name"),v(a,"class","is-rounded"),v(u,"class","col"),v(g,"class","button is-full-width"),v(f,"class","col-2"),v(k,"class","button primary is-full-width"),v(b,"class","col-2"),v(c,"class","row"),v(n,"class","main card svelte-7esanw")},m(t,o){p(t,n,o),h(n,i),h(i,r),h(r,s),M(s,e[0]),h(n,l),h(n,c),h(c,u),h(u,a),M(a,e[1]),h(c,d),h(c,f),h(f,g),h(c,$),h(c,b),h(b,k),N||(E=[w(s,"input",e[4]),w(a,"input",e[5]),w(g,"click",e[3]),w(k,"click",e[2])],N=!0)},p(t,[e]){1&e&&s.value!==t[0]&&M(s,t[0]),2&e&&a.value!==t[1]&&M(a,t[1])},i:t,o:t,d(t){t&&m(n),N=!1,o(E)}}}function ht(t,e,n){let o;c(t,lt,(t=>n(6,o=t)));let i="",r="";return[i,r,async function(){let t=await function(t,e){let n={action:"createGame",gameName:t,masterName:e};return at(JSON.stringify(n))}(i,r);console.log(t),t.isError?alert(t.error):(f(lt,o={id:t.game.id,name:t.game.name,playerNames:[{name:r,isMaster:!0,isYou:!0}],thisPlayer:{id:t.player.id,name:r,isMaster:!0,isYou:!0},dungeon:t.dungeon},o),dt(o.id,o.thisPlayer.id))},async function(){let t=await function(t,e){let n={action:"joinGame",gameID:t,playerName:e};return at(JSON.stringify(n))}(i,r);console.log(t),t.isError?alert(t.error):(f(lt,o={id:t.id,name:t.gameName,playerNames:t.player,thisPlayer:{id:t.playerID,name:r,isMaster:!1,isYou:!0},dungeon:t.dungeon},o),dt(o.id,o.thisPlayer.id))},function(){i=this.value,n(0,i)},function(){r=this.value,n(1,r)}]}class pt extends ot{constructor(t){super(),nt(this,t,ht,ft,r,{})}}const mt=rt(window.innerWidth),gt=rt(window.innerHeight),yt=rt(window.devicePixelRatio),$t=rt(),xt=rt(),bt=rt({dx:0,dy:0}),wt=rt(0),vt=rt(32),kt=rt({background:"#0E0E0E",rooms:"#EEEEEE"}),Mt=function(t){const e=Object.keys(t);return st(e.map((e=>t[e])),(t=>t.reduce(((t,n,o)=>(t[e[o]]=n,t)),{})))}({context:$t,canvas:xt,width:mt,height:gt,pixelRatio:yt,time:wt}),Nt=Symbol(),Et=t=>{const e=function(t){return O().$$.context.get(t)}(Nt),n={ready:!1,mounted:!1};"function"==typeof t?(n.render=t,n.height=0):t&&(t.render&&(n.render=t.render),t.setup&&(n.setup=t.setup),t.height&&(n.height=t.height)),e.add(n),R((()=>(n.mounted=!0,()=>{e.remove(n),n.mounted=!1})))};const{window:Pt}=Q;function St(t){let e,n,i,r,s,l,c;const a=t[11].default,f=u(a,t,t[10],null);return{c(){e=y("canvas"),r=x(),f&&f.c(),v(e,"width",n=t[2]*t[1]),v(e,"height",i=t[3]*t[1]),N(e,"width",t[2]+"px"),N(e,"height",t[3]+"px")},m(n,o){p(n,e,o),t[12](e),p(n,r,o),f&&f.m(n,o),s=!0,l||(c=[w(Pt,"resize",t[4],{passive:!0}),w(e,"mousemove",t[6]),w(e,"mousedown",t[7]),w(e,"mouseup",t[5])],l=!0)},p(t,[o]){(!s||6&o&&n!==(n=t[2]*t[1]))&&v(e,"width",n),(!s||10&o&&i!==(i=t[3]*t[1]))&&v(e,"height",i),(!s||4&o)&&N(e,"width",t[2]+"px"),(!s||8&o)&&N(e,"height",t[3]+"px"),f&&f.p&&1024&o&&d(f,a,t,t[10],o,null,null)},i(t){s||(B(f,t),s=!0)},o(t){K(f,t),s=!1},d(n){n&&m(e),t[12](null),n&&m(r),f&&f.d(n),l=!1,o(c)}}}function Ot(t,e,n){let o,i,r,s,l,u;c(t,Mt,(t=>n(19,o=t))),c(t,bt,(t=>n(20,i=t))),c(t,yt,(t=>n(1,r=t))),c(t,vt,(t=>n(21,s=t))),c(t,mt,(t=>n(2,l=t))),c(t,gt,(t=>n(3,u=t)));let a,d,h,p,{$$slots:m={},$$scope:g}=e,{killLoopOnError:y=!0}=e,{attributes:$={}}=e,x=!1,b=0,w=0,v=[];R((()=>(h=d.getContext("2d",$),xt.set(d),$t.set(h),function(t){let e=0,n=performance.now();return function o(){p=requestAnimationFrame(o);const i=performance.now(),r=(i-n)/1e3;n=i,e+=r,t(e,r)}(),()=>{cancelAnimationFrame(p)}}(((t,e)=>{wt.set(t),function(t){h.save(),h.translate(-i.dx,-i.dy),h.scale(r,r),v.forEach((e=>{try{e.mounted&&e.ready&&e.render&&e.render(o,t)}catch(t){console.error(t),y&&(cancelAnimationFrame(p),console.warn("Animation loop stopped due to an error"))}})),h.restore()}(e)}))))),function(t,e){O().$$.context.set(t,e)}(Nt,{add(t){if(this.remove(t),v.push(t),t.setup){let e=t.setup(o);e&&e.then}t.ready=!0,v.sort(((t,e)=>t.height-e.height))},remove(t){const e=v.indexOf(t);e>=0&&v.splice(e,1)}});const k=_();return t.$$set=t=>{"killLoopOnError"in t&&n(8,y=t.killLoopOnError),"attributes"in t&&n(9,$=t.attributes),"$$scope"in t&&n(10,g=t.$$scope)},[d,r,l,u,function(){mt.set(window.innerWidth),gt.set(window.innerHeight),yt.set(window.devicePixelRatio)},function(t){x=!1;let e=t.x+i.dx/r,n=t.y+i.dy/r;Date.now()-a<200&&k("click",{x:e,y:n,tileX:e/s,tileY:n/s})},function(t){x&&f(bt,i={dx:i.dx+(b-t.clientX)*r,dy:i.dy+(w-t.clientY)*r},i),b=t.clientX,w=t.clientY},function(t){x=!0,a=Date.now()},y,$,g,m,function(t){F[t?"unshift":"push"]((()=>{d=t,n(0,d)}))}]}class Rt extends ot{constructor(t){super(),nt(this,t,Ot,St,r,{killLoopOnError:8,attributes:9})}}function _t(t){let e;const n=t[2].default,o=u(n,t,t[1],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,[e]){o&&o.p&&2&e&&d(o,n,t,t[1],e,null,null)},i(t){e||(B(o,t),e=!0)},o(t){K(o,t),e=!1},d(t){o&&o.d(t)}}}function Tt(t,e,n){let o,i,r,s;c(t,kt,(t=>n(3,o=t))),c(t,yt,(t=>n(4,i=t))),c(t,bt,(t=>n(5,r=t))),c(t,vt,(t=>n(6,s=t)));let{$$slots:l={},$$scope:u}=e,{color:a=o.background+"6"}=e;return Et({render:t=>{const{context:e,width:n,height:o}=t;e.save();let l=i,c=r.dx/l,u=r.dy/l,d=n,f=o,h=c/s;h=h<0?Math.floor(h):Math.ceil(h);let p=u/s;p=p<0?Math.floor(p):Math.ceil(p);for(let t=Math.min(0,h);t<Math.max(0,h)+d/s;t++)e.beginPath(),e.strokeStyle=a,e.moveTo(t*s,u),e.lineTo(t*s,f+u),e.stroke();for(let t=Math.min(0,p);t<Math.max(0,p)+f/s;t++)e.beginPath(),e.strokeStyle=a,e.moveTo(c,t*s),e.lineTo(c+d,t*s),e.stroke();e.restore()},height:3}),t.$$set=t=>{"color"in t&&n(0,a=t.color),"$$scope"in t&&n(1,u=t.$$scope)},[a,u,l]}class Ft extends ot{constructor(t){super(),nt(this,t,Tt,_t,r,{color:0})}}function Ct(t){let e;const n=t[1].default,o=u(n,t,t[0],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,[e]){o&&o.p&&1&e&&d(o,n,t,t[0],e,null,null)},i(t){e||(B(o,t),e=!0)},o(t){K(o,t),e=!1},d(t){o&&o.d(t)}}}function Jt(t,e,n){let o,i,r;c(t,kt,(t=>n(2,o=t))),c(t,yt,(t=>n(3,i=t))),c(t,bt,(t=>n(4,r=t)));let{$$slots:s={},$$scope:l}=e,u=o.background+"F";return Et((t=>{const{context:e,width:n,height:o}=t;e.save();let s=i;e.clearRect(r.dx/s,r.dy/s,n,o),u&&(e.fillStyle=u,e.fillRect(r.dx/s,r.dy/i,n,o)),e.restore()})),t.$$set=t=>{"$$scope"in t&&n(0,l=t.$$scope)},[l,s]}class Yt extends ot{constructor(t){super(),nt(this,t,Jt,Ct,r,{})}}function At(t,e,n){let o,i;c(t,vt,(t=>n(1,o=t))),c(t,kt,(t=>n(2,i=t)));let{dimension:r}=e;return Et({render:(t,e)=>{const{context:n,width:s,height:l}=t;if(n.save(),r){let t=r.x*o,e=r.y*o,s=r.w*o,l=r.h*o;r.rotunda?(n.beginPath(),n.fillStyle=i.rooms,n.ellipse(t+s/2,e+l/2,s/2,l/2,0,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),r.visible||(n.fillStyle=r.visible?"#0F06":"#F006",n.ellipse(t+s/2,e+l/2,s/2,l/2,0,0,2*Math.PI),n.closePath(),n.fill())):(n.fillStyle=i.rooms,n.fillRect(t,e,s,l),r.visible||(n.fillStyle=r.visible?"#0F06":"#F006",n.fillRect(t,e,s,l)))}n.restore()},height:1}),t.$$set=t=>{"dimension"in t&&n(0,r=t.dimension)},[r]}class Lt extends ot{constructor(t){super(),nt(this,t,At,null,r,{dimension:0})}}function Dt(t,e,n){let o;c(t,vt,(t=>n(2,o=t)));let{color:i="#F8F8F4"}=e,{dimension:r}=e;return Et({render:(t,e)=>{const{context:n,width:i,height:s}=t;n.save(),r&&(n.strokeStyle="#FF0",n.lineWidth=3,n.strokeRect(r.x*o,r.y*o,r.w*o,r.h*o),n.lineWidth=1),n.restore()},height:4}),t.$$set=t=>{"color"in t&&n(0,i=t.color),"dimension"in t&&n(1,r=t.dimension)},[i,r]}class jt extends ot{constructor(t){super(),nt(this,t,Dt,null,r,{color:0,dimension:1})}}function Xt(t,e,n){let o,i;c(t,kt,(t=>n(1,o=t))),c(t,vt,(t=>n(2,i=t)));let{dimension:r}=e;function s(t){t.fillStyle=o.background;let e=r.x*i,n=r.y*i,s=i,l=i;1==Math.abs(r.dir.y)?(l/=2,n+=l/2,s=i/8):(s/=2,e+=s/2,l=i/8),t.fillRect(e,n,s,l),1==Math.abs(r.dir.y)?e+=i-s:n+=i-l,t.fillRect(e,n,s,l)}function l(t,e){t.strokeStyle=o.background;let n=r.x*i,s=r.y*i,l=i,c=i;1==e?(1==Math.abs(r.dir.y)?(c/=4,s+=1.5*c):(l/=4,n+=1.5*l),t.strokeRect(n,s,l,c)):5==e&&(1==Math.abs(r.dir.y)?(c/=4,s+=1.5*c,l/=2):(l/=4,n+=1.5*l,c/=2),t.strokeRect(n,s,l,c),1==Math.abs(r.dir.y)?n+=l:s+=c,t.strokeRect(n,s,l,c))}function u(t){t.fillStyle=o.background;let e=r.x*i,n=r.y*i,s=.8*i,l=i/5;if(1==Math.abs(r.dir.x)){-1==r.dir.x&&(e+=i,l*=-1);for(let o=0;o<4;o++)e+=l,t.moveTo(e,n+(i-s)/2),t.lineTo(e,n+(i-s)/2+s),s*=.8}else if(1==Math.abs(r.dir.y)){-1==r.dir.y&&(n+=i,l*=-1);for(let o=0;o<4;o++)n+=l,t.moveTo(e+(i-s)/2,n),t.lineTo(e+(i-s)/2+s,n),s*=.8}t.stroke()}return Et({render:(t,e)=>{const{context:n,width:c,height:a}=t;n.save(),r&&r.type>0&&(1==r.type?(s(n),l(n,1)):2==r.type?s(n):3==r.type?u(n):4==r.type||(5==r.type?(s(n),l(n,5)):6==r.type?function(t){t.fillStyle=o.background;let e=r.x*i,n=r.y*i,s=i,l=i;1==Math.abs(r.dir.y)?(l/=2,-1==r.dir.y&&(n+=l)):(s/=2,-1==r.dir.x&&(e+=s));t.fillRect(e,n,s,l)}(n):7==r.type?(s(n),l(n,1)):8==r.type&&u(n))),n.restore()},height:2}),t.$$set=t=>{"dimension"in t&&n(0,r=t.dimension)},[r]}class Gt extends ot{constructor(t){super(),nt(this,t,Xt,null,r,{dimension:0})}}function It(t,e,n){const o=t.slice();return o[12]=e[n],o[13]=e,o[14]=n,o}function Ht(t,e,n){const o=t.slice();return o[12]=e[n],o}function Wt(t,e,n){const o=t.slice();return o[17]=e[n],o}function qt(t){let e,n,o,i,r,s,l=t[17].name+"",c=t[17].isMaster?"(Master)":"";return{c(){e=y("span"),n=$(l),o=x(),i=$(c),r=x(),s=y("br"),E(e,"text-primary",t[17].isYou)},m(t,l){p(t,e,l),h(e,n),h(e,o),h(e,i),h(e,r),p(t,s,l)},p(t,o){4&o&&l!==(l=t[17].name+"")&&k(n,l),4&o&&c!==(c=t[17].isMaster?"(Master)":"")&&k(i,c),4&o&&E(e,"text-primary",t[17].isYou)},d(t){t&&m(e),t&&m(s)}}}function zt(e){let n,o,i;return{c(){n=y("input"),v(n,"class","button primary"),v(n,"type","file")},m(t,r){p(t,n,r),o||(i=w(n,"change",e[6]),o=!0)},p:t,d(t){t&&m(n),o=!1,i()}}}function Bt(t){let e,n,o,i,r;return n=new Rt({props:{$$slots:{default:[Vt]},$$scope:{ctx:t}}}),n.$on("click",t[4]),{c(){e=y("div"),V(n.$$.fragment),v(e,"id","canvasDisplay")},m(s,l){p(s,e,l),Z(n,e,null),o=!0,i||(r=w(e,"mousemove",t[5]),i=!0)},p(t,e){const o={};1048582&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(B(n.$$.fragment,t),o=!0)},o(t){K(n.$$.fragment,t),o=!1},d(t){t&&m(e),tt(n),i=!1,r()}}}function Kt(t){let e,n;return e=new Lt({props:{dimension:t[12]}}),{c(){V(e.$$.fragment)},m(t,o){Z(e,t,o),n=!0},p(t,n){const o={};4&n&&(o.dimension=t[12]),e.$set(o)},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){tt(e,t)}}}function Qt(t){let e,n,o;function i(e){t[7].call(null,e,t[12],t[13],t[14])}let r={};return void 0!==t[12]&&(r.dimension=t[12]),e=new Gt({props:r}),F.push((()=>U(e,"dimension",i))),{c(){V(e.$$.fragment)},m(t,n){Z(e,t,n),o=!0},p(o,i){t=o;const r={};!n&&4&i&&(n=!0,r.dimension=t[12],D((()=>n=!1))),e.$set(r)},i(t){o||(B(e.$$.fragment,t),o=!0)},o(t){K(e.$$.fragment,t),o=!1},d(t){tt(e,t)}}}function Ut(t){let e,n,o;function i(e){t[8].call(null,e)}let r={};return void 0!==t[1]&&(r.dimension=t[1]),e=new jt({props:r}),F.push((()=>U(e,"dimension",i))),{c(){V(e.$$.fragment)},m(t,n){Z(e,t,n),o=!0},p(t,o){const i={};!n&&2&o&&(n=!0,i.dimension=t[1],D((()=>n=!1))),e.$set(i)},i(t){o||(B(e.$$.fragment,t),o=!0)},o(t){K(e.$$.fragment,t),o=!1},d(t){tt(e,t)}}}function Vt(t){let e,n,o,i,r,s,l,c;e=new Yt({});let u=t[2].dungeon.rects,a=[];for(let e=0;e<u.length;e+=1)a[e]=Kt(Ht(t,u,e));const d=t=>K(a[t],1,1,(()=>{a[t]=null}));let f=t[2].dungeon.doors,h=[];for(let e=0;e<f.length;e+=1)h[e]=Qt(It(t,f,e));const y=t=>K(h[t],1,1,(()=>{h[t]=null}));r=new Ft({});let $=t[2].thisPlayer.isMaster&&Ut(t);return{c(){V(e.$$.fragment),n=x();for(let t=0;t<a.length;t+=1)a[t].c();o=x();for(let t=0;t<h.length;t+=1)h[t].c();i=x(),V(r.$$.fragment),s=x(),$&&$.c(),l=b()},m(t,u){Z(e,t,u),p(t,n,u);for(let e=0;e<a.length;e+=1)a[e].m(t,u);p(t,o,u);for(let e=0;e<h.length;e+=1)h[e].m(t,u);p(t,i,u),Z(r,t,u),p(t,s,u),$&&$.m(t,u),p(t,l,u),c=!0},p(t,n){const r={};if(1048576&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r),4&n){let e;for(u=t[2].dungeon.rects,e=0;e<u.length;e+=1){const i=Ht(t,u,e);a[e]?(a[e].p(i,n),B(a[e],1)):(a[e]=Kt(i),a[e].c(),B(a[e],1),a[e].m(o.parentNode,o))}for(q(),e=u.length;e<a.length;e+=1)d(e);z()}if(4&n){let e;for(f=t[2].dungeon.doors,e=0;e<f.length;e+=1){const o=It(t,f,e);h[e]?(h[e].p(o,n),B(h[e],1)):(h[e]=Qt(o),h[e].c(),B(h[e],1),h[e].m(i.parentNode,i))}for(q(),e=f.length;e<h.length;e+=1)y(e);z()}t[2].thisPlayer.isMaster?$?($.p(t,n),4&n&&B($,1)):($=Ut(t),$.c(),B($,1),$.m(l.parentNode,l)):$&&(q(),K($,1,1,(()=>{$=null})),z())},i(t){if(!c){B(e.$$.fragment,t);for(let t=0;t<u.length;t+=1)B(a[t]);for(let t=0;t<f.length;t+=1)B(h[t]);B(r.$$.fragment,t),B($),c=!0}},o(t){K(e.$$.fragment,t),a=a.filter(Boolean);for(let t=0;t<a.length;t+=1)K(a[t]);h=h.filter(Boolean);for(let t=0;t<h.length;t+=1)K(h[t]);K(r.$$.fragment,t),K($),c=!1},d(t){tt(e,t),t&&m(n),g(a,t),t&&m(o),g(h,t),t&&m(i),tt(r,t),t&&m(s),$&&$.d(t),t&&m(l)}}}function Zt(t){let e,n,o,i,r,s,l,c,u,a,d,f,M,N,E,P=t[2].name+"",S=t[2].playerNames,O=[];for(let e=0;e<S.length;e+=1)O[e]=qt(Wt(t,S,e));let R=t[2].thisPlayer.isMaster&&!t[2].dungeon.init&&zt(t),_=t[2].dungeon.init&&Bt(t);return{c(){e=y("div"),n=y("div"),o=y("button"),o.innerHTML='<img alt="Copy Game Link" src="https://icongr.am/feather/copy.svg?size=12"/>',i=x(),r=y("b"),s=$(P),l=x(),c=y("br"),u=x();for(let t=0;t<O.length;t+=1)O[t].c();a=x(),R&&R.c(),d=x(),_&&_.c(),f=b(),v(o,"class","button icon-only"),v(n,"class","card"),v(e,"class","info svelte-jic93")},m(m,g){p(m,e,g),h(e,n),h(n,o),h(n,i),h(n,r),h(r,s),h(r,l),h(n,c),h(n,u);for(let t=0;t<O.length;t+=1)O[t].m(n,null);h(e,a),R&&R.m(e,null),p(m,d,g),_&&_.m(m,g),p(m,f,g),M=!0,N||(E=w(o,"click",t[3]),N=!0)},p(t,[o]){if((!M||4&o)&&P!==(P=t[2].name+"")&&k(s,P),4&o){let e;for(S=t[2].playerNames,e=0;e<S.length;e+=1){const i=Wt(t,S,e);O[e]?O[e].p(i,o):(O[e]=qt(i),O[e].c(),O[e].m(n,null))}for(;e<O.length;e+=1)O[e].d(1);O.length=S.length}t[2].thisPlayer.isMaster&&!t[2].dungeon.init?R?R.p(t,o):(R=zt(t),R.c(),R.m(e,null)):R&&(R.d(1),R=null),t[2].dungeon.init?_?(_.p(t,o),4&o&&B(_,1)):(_=Bt(t),_.c(),B(_,1),_.m(f.parentNode,f)):_&&(q(),K(_,1,1,(()=>{_=null})),z())},i(t){M||(B(_),M=!0)},o(t){K(_),M=!1},d(t){t&&m(e),g(O,t),R&&R.d(),t&&m(d),_&&_.d(t),t&&m(f),N=!1,E()}}}function te(t,e,n){let o,i,r,s,l;c(t,lt,(t=>n(2,o=t))),c(t,bt,(t=>n(9,i=t))),c(t,yt,(t=>n(10,r=t))),c(t,vt,(t=>n(11,s=t)));let u={x:0,y:0,w:1,h:1};return t.$$.update=()=>{if(1&t.$$.dirty&&l&&l[0]){let t=l[0],e=new FileReader;e.onload=function(t){let n=JSON.parse(e.result),i=0,r=0;for(let t in n.rects){let e=n.rects[t];e.x<i&&(i=e.x),e.y<r&&(r=e.y)}i-=1,r-=1;for(let t in n.rects){let e=n.rects[t];e.x-=i,e.y-=r,e.visible=!1}for(let t in n.doors){let e=n.doors[t];e.x-=i,e.y-=r}f(lt,o.dungeon=n,o),f(lt,o.dungeon.init=!0,o)},e.readAsText(t)}},[l,u,o,function(){var t=document.createElement("textarea");document.body.appendChild(t),t.value=o.id,t.select(),document.execCommand("copy"),document.body.removeChild(t)},function(t){let e=t.detail,n=o.dungeon.rects.find((t=>e.tileX>=t.x&&e.tileX<t.x+t.w&&e.tileY>=t.y&&e.tileY<=t.y+t.h)),i=o.dungeon.doors.find((t=>Math.floor(e.tileX)==t.x&&Math.floor(e.tileY)==t.y));n&&(n.visible?(function(t,e,n){let o={action:"hideRoom",room:t,pid:n,gid:e},i=JSON.stringify(o);ut&&ut.send(i)}(n,o.id,o.thisPlayer.id),i&&function(t,e,n){let o={action:"hideDoor",door:t,pid:n,gid:e},i=JSON.stringify(o);ut&&ut.send(i)}(i,o.id,o.thisPlayer.id)):(function(t,e,n){let o={action:"showRoom",room:t,pid:n,gid:e},i=JSON.stringify(o);ut&&ut.send(i)}(n,o.id,o.thisPlayer.id),i&&function(t,e,n){let o={action:"showDoor",door:t,pid:n,gid:e},i=JSON.stringify(o);ut&&ut.send(i)}(i,o.id,o.thisPlayer.id)))},function(t){let e=(t.clientX+i.dx/r)/s,l=(t.clientY+i.dy/r)/s;n(1,u=o.dungeon.rects.find((t=>e>=t.x&&e<t.x+t.w&&l>=t.y&&l<=t.y+t.h)))},function(){l=this.files,n(0,l)},function(t,e,n,i){n[i]=t,lt.set(o)},function(t){u=t,n(1,u)}]}class ee extends ot{constructor(t){super(),nt(this,t,te,Zt,r,{})}}function ne(t){let e,n;return e=new ee({}),{c(){V(e.$$.fragment)},m(t,o){Z(e,t,o),n=!0},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){tt(e,t)}}}function oe(t){let e,n;return e=new pt({}),{c(){V(e.$$.fragment)},m(t,o){Z(e,t,o),n=!0},i(t){n||(B(e.$$.fragment,t),n=!0)},o(t){K(e.$$.fragment,t),n=!1},d(t){tt(e,t)}}}function ie(t){let e,n,o,i;const r=[oe,ne],s=[];function l(t,e){return-1==t[0].id?0:1}return e=l(t),n=s[e]=r[e](t),{c(){n.c(),o=b()},m(t,n){s[e].m(t,n),p(t,o,n),i=!0},p(t,[i]){let c=e;e=l(t),e!==c&&(q(),K(s[c],1,1,(()=>{s[c]=null})),z(),n=s[e],n?n.p(t,i):(n=s[e]=r[e](t),n.c()),B(n,1),n.m(o.parentNode,o))},i(t){i||(B(n),i=!0)},o(t){K(n),i=!1},d(t){s[e].d(t),t&&m(o)}}}function re(t,e,n){let o;return c(t,lt,(t=>n(0,o=t))),[o]}return new class extends ot{constructor(t){super(),nt(this,t,re,ie,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
