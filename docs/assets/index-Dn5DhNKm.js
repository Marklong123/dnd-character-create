const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomeView-DdGsjZMb.js","assets/character-Y7paHrAL.js","assets/game-dnd5e-equipment-BkKXBeTh.js","assets/useGameTerms-0UpE7G4M.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/HomeView-BsZlbSMO.css","assets/BuilderView-DluN36qB.js","assets/CharacterListView-fcsRusRt.js","assets/BlogListView-Bty0HBip.js","assets/characters-BDljAXvI.js","assets/game-dnd5e-spells-CSkkUIdW.js","assets/BlogCharacterView-2JlOhnQN.js","assets/usePdfExport-Bq7BWhIO.js","assets/pdf-lib-DDxuDbgR.js","assets/game-apo-rules-DFGtCeNz.js","assets/shareCharacter-Dg2_seZe.js","assets/BlogCharacterView-IpGrpvYt.css","assets/ShareView-CIIA5xw6.js"])))=>i.map(i=>d[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();function si(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const ge={},Ut=[],Fn=()=>{},Mc=()=>!1,jo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ci=e=>e.startsWith("onUpdate:"),Ne=Object.assign,li=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},rd=Object.prototype.hasOwnProperty,fe=(e,n)=>rd.call(e,n),K=Array.isArray,Ht=e=>ta(e)==="[object Map]",Yo=e=>ta(e)==="[object Set]",Hi=e=>ta(e)==="[object Date]",id=e=>ta(e)==="[object RegExp]",ne=e=>typeof e=="function",Ce=e=>typeof e=="string",Yn=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",Fc=e=>(me(e)||ne(e))&&ne(e.then)&&ne(e.catch),qc=Object.prototype.toString,ta=e=>qc.call(e),sd=e=>ta(e).slice(8,-1),jc=e=>ta(e)==="[object Object]",Wo=e=>Ce(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fa=si(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Uo=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},cd=/-\w/g,wn=Uo(e=>e.replace(cd,n=>n.slice(1).toUpperCase())),ld=/\B([A-Z])/g,Nt=Uo(e=>e.replace(ld,"-$1").toLowerCase()),Ho=Uo(e=>e.charAt(0).toUpperCase()+e.slice(1)),ir=Uo(e=>e?`on${Ho(e)}`:""),ht=(e,n)=>!Object.is(e,n),Vt=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Yc=(e,n,t,a=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:a,value:t})},Vo=e=>{const n=parseFloat(e);return isNaN(n)?e:n},ud=e=>{const n=Ce(e)?Number(e):NaN;return isNaN(n)?e:n};let Vi;const $o=()=>Vi||(Vi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ui(e){if(K(e)){const n={};for(let t=0;t<e.length;t++){const a=e[t],o=Ce(a)?hd(a):ui(a);if(o)for(const r in o)n[r]=o[r]}return n}else if(Ce(e)||me(e))return e}const dd=/;(?![^(]*\))/g,fd=/:([^]+)/,md=/\/\*[^]*?\*\//g;function hd(e){const n={};return e.replace(md,"").split(dd).forEach(t=>{if(t){const a=t.split(fd);a.length>1&&(n[a[0].trim()]=a[1].trim())}}),n}function Bo(e){let n="";if(Ce(e))n=e;else if(K(e))for(let t=0;t<e.length;t++){const a=Bo(e[t]);a&&(n+=a+" ")}else if(me(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const gd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pd=si(gd);function Wc(e){return!!e||e===""}function _d(e,n){if(e.length!==n.length)return!1;let t=!0;for(let a=0;t&&a<e.length;a++)t=Na(e[a],n[a]);return t}function Na(e,n){if(e===n)return!0;let t=Hi(e),a=Hi(n);if(t||a)return t&&a?e.getTime()===n.getTime():!1;if(t=Yn(e),a=Yn(n),t||a)return e===n;if(t=K(e),a=K(n),t||a)return t&&a?_d(e,n):!1;if(t=me(e),a=me(n),t||a){if(!t||!a)return!1;const o=Object.keys(e).length,r=Object.keys(n).length;if(o!==r)return!1;for(const i in e){const s=e.hasOwnProperty(i),c=n.hasOwnProperty(i);if(s&&!c||!s&&c||!Na(e[i],n[i]))return!1}}return String(e)===String(n)}function yd(e,n){return e.findIndex(t=>Na(t,n))}const Uc=e=>!!(e&&e.__v_isRef===!0),Pe=e=>Ce(e)?e:e==null?"":K(e)||me(e)&&(e.toString===qc||!ne(e.toString))?Uc(e)?Pe(e.value):JSON.stringify(e,Hc,2):String(e),Hc=(e,n)=>Uc(n)?Hc(e,n.value):Ht(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[a,o],r)=>(t[sr(a,r)+" =>"]=o,t),{})}:Yo(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>sr(t))}:Yn(n)?sr(n):me(n)&&!K(n)&&!jc(n)?String(n):n,sr=(e,n="")=>{var t;return Yn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};let We;class Vc{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=We,!n&&We&&(this.index=(We.scopes||(We.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].pause();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].resume();for(n=0,t=this.effects.length;n<t;n++)this.effects[n].resume()}}run(n){if(this._active){const t=We;try{return We=this,n()}finally{We=t}}}on(){++this._on===1&&(this.prevScope=We,We=this)}off(){this._on>0&&--this._on===0&&(We=this.prevScope,this.prevScope=void 0)}stop(n){if(this._active){this._active=!1;let t,a;for(t=0,a=this.effects.length;t<a;t++)this.effects[t].stop();for(this.effects.length=0,t=0,a=this.cleanups.length;t<a;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function di(e){return new Vc(e)}function $c(){return We}function vd(e,n=!1){We&&We.cleanups.push(e)}let _e;const cr=new WeakSet;class Bc{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,We&&We.active&&We.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,cr.has(this)&&(cr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,$i(this),Kc(this);const n=_e,t=In;_e=this,In=!0;try{return this.fn()}finally{Xc(this),_e=n,In=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)hi(n);this.deps=this.depsTail=void 0,$i(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?cr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Lr(this)&&this.run()}get dirty(){return Lr(this)}}let Gc=0,ma,ha;function zc(e,n=!1){if(e.flags|=8,n){e.next=ha,ha=e;return}e.next=ma,ma=e}function fi(){Gc++}function mi(){if(--Gc>0)return;if(ha){let n=ha;for(ha=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;ma;){let n=ma;for(ma=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(a){e||(e=a)}n=t}}if(e)throw e}function Kc(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Xc(e){let n,t=e.depsTail,a=t;for(;a;){const o=a.prevDep;a.version===-1?(a===t&&(t=o),hi(a),bd(a)):n=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=o}e.deps=n,e.depsTail=t}function Lr(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Jc(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function Jc(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ca)||(e.globalVersion=Ca,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Lr(e))))return;e.flags|=2;const n=e.dep,t=_e,a=In;_e=e,In=!0;try{Kc(e);const o=e.fn(e._value);(n.version===0||ht(o,e._value))&&(e.flags|=128,e._value=o,n.version++)}catch(o){throw n.version++,o}finally{_e=t,In=a,Xc(e),e.flags&=-3}}function hi(e,n=!1){const{dep:t,prevSub:a,nextSub:o}=e;if(a&&(a.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=a,e.nextSub=void 0),t.subs===e&&(t.subs=a,!a&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)hi(r,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function bd(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let In=!0;const Qc=[];function Zn(){Qc.push(In),In=!1}function et(){const e=Qc.pop();In=e===void 0?!0:e}function $i(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=_e;_e=void 0;try{n()}finally{_e=t}}}let Ca=0;class kd{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gi{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!_e||!In||_e===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==_e)t=this.activeLink=new kd(_e,this),_e.deps?(t.prevDep=_e.depsTail,_e.depsTail.nextDep=t,_e.depsTail=t):_e.deps=_e.depsTail=t,Zc(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const a=t.nextDep;a.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=a),t.prevDep=_e.depsTail,t.nextDep=void 0,_e.depsTail.nextDep=t,_e.depsTail=t,_e.deps===t&&(_e.deps=a)}return t}trigger(n){this.version++,Ca++,this.notify(n)}notify(n){fi();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{mi()}}}function Zc(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let a=n.deps;a;a=a.nextDep)Zc(a)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const Co=new WeakMap,Pt=Symbol(""),Rr=Symbol(""),Ea=Symbol("");function Ue(e,n,t){if(In&&_e){let a=Co.get(e);a||Co.set(e,a=new Map);let o=a.get(t);o||(a.set(t,o=new gi),o.map=a,o.key=t),o.track()}}function Kn(e,n,t,a,o,r){const i=Co.get(e);if(!i){Ca++;return}const s=c=>{c&&c.trigger()};if(fi(),n==="clear")i.forEach(s);else{const c=K(e),l=c&&Wo(t);if(c&&t==="length"){const u=Number(a);i.forEach((d,h)=>{(h==="length"||h===Ea||!Yn(h)&&h>=u)&&s(d)})}else switch((t!==void 0||i.has(void 0))&&s(i.get(t)),l&&s(i.get(Ea)),n){case"add":c?l&&s(i.get("length")):(s(i.get(Pt)),Ht(e)&&s(i.get(Rr)));break;case"delete":c||(s(i.get(Pt)),Ht(e)&&s(i.get(Rr)));break;case"set":Ht(e)&&s(i.get(Pt));break}}mi()}function wd(e,n){const t=Co.get(e);return t&&t.get(n)}function Dt(e){const n=ce(e);return n===e?n:(Ue(n,"iterate",Ea),pn(e)?n:n.map(Sn))}function Go(e){return Ue(e=ce(e),"iterate",Ea),e}function lt(e,n){return nt(e)?Gt(Jn(e)?Sn(n):n):Sn(n)}const Cd={__proto__:null,[Symbol.iterator](){return lr(this,Symbol.iterator,e=>lt(this,e))},concat(...e){return Dt(this).concat(...e.map(n=>K(n)?Dt(n):n))},entries(){return lr(this,"entries",e=>(e[1]=lt(this,e[1]),e))},every(e,n){return Un(this,"every",e,n,void 0,arguments)},filter(e,n){return Un(this,"filter",e,n,t=>t.map(a=>lt(this,a)),arguments)},find(e,n){return Un(this,"find",e,n,t=>lt(this,t),arguments)},findIndex(e,n){return Un(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Un(this,"findLast",e,n,t=>lt(this,t),arguments)},findLastIndex(e,n){return Un(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Un(this,"forEach",e,n,void 0,arguments)},includes(...e){return ur(this,"includes",e)},indexOf(...e){return ur(this,"indexOf",e)},join(e){return Dt(this).join(e)},lastIndexOf(...e){return ur(this,"lastIndexOf",e)},map(e,n){return Un(this,"map",e,n,void 0,arguments)},pop(){return ra(this,"pop")},push(...e){return ra(this,"push",e)},reduce(e,...n){return Bi(this,"reduce",e,n)},reduceRight(e,...n){return Bi(this,"reduceRight",e,n)},shift(){return ra(this,"shift")},some(e,n){return Un(this,"some",e,n,void 0,arguments)},splice(...e){return ra(this,"splice",e)},toReversed(){return Dt(this).toReversed()},toSorted(e){return Dt(this).toSorted(e)},toSpliced(...e){return Dt(this).toSpliced(...e)},unshift(...e){return ra(this,"unshift",e)},values(){return lr(this,"values",e=>lt(this,e))}};function lr(e,n,t){const a=Go(e),o=a[n]();return a!==e&&!pn(e)&&(o._next=o.next,o.next=()=>{const r=o._next();return r.done||(r.value=t(r.value)),r}),o}const Ed=Array.prototype;function Un(e,n,t,a,o,r){const i=Go(e),s=i!==e&&!pn(e),c=i[n];if(c!==Ed[n]){const d=c.apply(e,r);return s?Sn(d):d}let l=t;i!==e&&(s?l=function(d,h){return t.call(this,lt(e,d),h,e)}:t.length>2&&(l=function(d,h){return t.call(this,d,h,e)}));const u=c.call(i,l,a);return s&&o?o(u):u}function Bi(e,n,t,a){const o=Go(e);let r=t;return o!==e&&(pn(e)?t.length>3&&(r=function(i,s,c){return t.call(this,i,s,c,e)}):r=function(i,s,c){return t.call(this,i,lt(e,s),c,e)}),o[n](r,...a)}function ur(e,n,t){const a=ce(e);Ue(a,"iterate",Ea);const o=a[n](...t);return(o===-1||o===!1)&&zo(t[0])?(t[0]=ce(t[0]),a[n](...t)):o}function ra(e,n,t=[]){Zn(),fi();const a=ce(e)[n].apply(e,t);return mi(),et(),a}const Ad=si("__proto__,__v_isRef,__isVue"),el=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Yn));function Id(e){Yn(e)||(e=String(e));const n=ce(this);return Ue(n,"has",e),n.hasOwnProperty(e)}class nl{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,a){if(t==="__v_skip")return n.__v_skip;const o=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!o;if(t==="__v_isReadonly")return o;if(t==="__v_isShallow")return r;if(t==="__v_raw")return a===(o?r?Md:rl:r?ol:al).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(a)?n:void 0;const i=K(n);if(!o){let c;if(i&&(c=Cd[t]))return c;if(t==="hasOwnProperty")return Id}const s=Reflect.get(n,t,we(n)?n:a);if((Yn(t)?el.has(t):Ad(t))||(o||Ue(n,"get",t),r))return s;if(we(s)){const c=i&&Wo(t)?s:s.value;return o&&me(c)?xr(c):c}return me(s)?o?xr(s):xa(s):s}}class tl extends nl{constructor(n=!1){super(!1,n)}set(n,t,a,o){let r=n[t];const i=K(n)&&Wo(t);if(!this._isShallow){const l=nt(r);if(!pn(a)&&!nt(a)&&(r=ce(r),a=ce(a)),!i&&we(r)&&!we(a))return l||(r.value=a),!0}const s=i?Number(t)<n.length:fe(n,t),c=Reflect.set(n,t,a,we(n)?n:o);return n===ce(o)&&(s?ht(a,r)&&Kn(n,"set",t,a):Kn(n,"add",t,a)),c}deleteProperty(n,t){const a=fe(n,t);n[t];const o=Reflect.deleteProperty(n,t);return o&&a&&Kn(n,"delete",t,void 0),o}has(n,t){const a=Reflect.has(n,t);return(!Yn(t)||!el.has(t))&&Ue(n,"has",t),a}ownKeys(n){return Ue(n,"iterate",K(n)?"length":Pt),Reflect.ownKeys(n)}}class Td extends nl{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const Sd=new tl,Od=new Td,Pd=new tl(!0);const Nr=e=>e,Ua=e=>Reflect.getPrototypeOf(e);function Ld(e,n,t){return function(...a){const o=this.__v_raw,r=ce(o),i=Ht(r),s=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,l=o[e](...a),u=t?Nr:n?Gt:Sn;return!n&&Ue(r,"iterate",c?Rr:Pt),Ne(Object.create(l),{next(){const{value:d,done:h}=l.next();return h?{value:d,done:h}:{value:s?[u(d[0]),u(d[1])]:u(d),done:h}}})}}function Ha(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function Rd(e,n){const t={get(o){const r=this.__v_raw,i=ce(r),s=ce(o);e||(ht(o,s)&&Ue(i,"get",o),Ue(i,"get",s));const{has:c}=Ua(i),l=n?Nr:e?Gt:Sn;if(c.call(i,o))return l(r.get(o));if(c.call(i,s))return l(r.get(s));r!==i&&r.get(o)},get size(){const o=this.__v_raw;return!e&&Ue(ce(o),"iterate",Pt),o.size},has(o){const r=this.__v_raw,i=ce(r),s=ce(o);return e||(ht(o,s)&&Ue(i,"has",o),Ue(i,"has",s)),o===s?r.has(o):r.has(o)||r.has(s)},forEach(o,r){const i=this,s=i.__v_raw,c=ce(s),l=n?Nr:e?Gt:Sn;return!e&&Ue(c,"iterate",Pt),s.forEach((u,d)=>o.call(r,l(u),l(d),i))}};return Ne(t,e?{add:Ha("add"),set:Ha("set"),delete:Ha("delete"),clear:Ha("clear")}:{add(o){!n&&!pn(o)&&!nt(o)&&(o=ce(o));const r=ce(this);return Ua(r).has.call(r,o)||(r.add(o),Kn(r,"add",o,o)),this},set(o,r){!n&&!pn(r)&&!nt(r)&&(r=ce(r));const i=ce(this),{has:s,get:c}=Ua(i);let l=s.call(i,o);l||(o=ce(o),l=s.call(i,o));const u=c.call(i,o);return i.set(o,r),l?ht(r,u)&&Kn(i,"set",o,r):Kn(i,"add",o,r),this},delete(o){const r=ce(this),{has:i,get:s}=Ua(r);let c=i.call(r,o);c||(o=ce(o),c=i.call(r,o)),s&&s.call(r,o);const l=r.delete(o);return c&&Kn(r,"delete",o,void 0),l},clear(){const o=ce(this),r=o.size!==0,i=o.clear();return r&&Kn(o,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=Ld(o,e,n)}),t}function pi(e,n){const t=Rd(e,n);return(a,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?a:Reflect.get(fe(t,o)&&o in a?t:a,o,r)}const Nd={get:pi(!1,!1)},xd={get:pi(!1,!0)},Dd={get:pi(!0,!1)};const al=new WeakMap,ol=new WeakMap,rl=new WeakMap,Md=new WeakMap;function Fd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qd(e){return e.__v_skip||!Object.isExtensible(e)?0:Fd(sd(e))}function xa(e){return nt(e)?e:_i(e,!1,Sd,Nd,al)}function il(e){return _i(e,!1,Pd,xd,ol)}function xr(e){return _i(e,!0,Od,Dd,rl)}function _i(e,n,t,a,o){if(!me(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=qd(e);if(r===0)return e;const i=o.get(e);if(i)return i;const s=new Proxy(e,r===2?a:t);return o.set(e,s),s}function Jn(e){return nt(e)?Jn(e.__v_raw):!!(e&&e.__v_isReactive)}function nt(e){return!!(e&&e.__v_isReadonly)}function pn(e){return!!(e&&e.__v_isShallow)}function zo(e){return e?!!e.__v_raw:!1}function ce(e){const n=e&&e.__v_raw;return n?ce(n):e}function yi(e){return!fe(e,"__v_skip")&&Object.isExtensible(e)&&Yc(e,"__v_skip",!0),e}const Sn=e=>me(e)?xa(e):e,Gt=e=>me(e)?xr(e):e;function we(e){return e?e.__v_isRef===!0:!1}function Le(e){return sl(e,!1)}function vi(e){return sl(e,!0)}function sl(e,n){return we(e)?e:new jd(e,n)}class jd{constructor(n,t){this.dep=new gi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:ce(n),this._value=t?n:Sn(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,a=this.__v_isShallow||pn(n)||nt(n);n=a?n:ce(n),ht(n,t)&&(this._rawValue=n,this._value=a?n:Sn(n),this.dep.trigger())}}function ee(e){return we(e)?e.value:e}const Yd={get:(e,n,t)=>n==="__v_raw"?e:ee(Reflect.get(e,n,t)),set:(e,n,t,a)=>{const o=e[n];return we(o)&&!we(t)?(o.value=t,!0):Reflect.set(e,n,t,a)}};function cl(e){return Jn(e)?e:new Proxy(e,Yd)}function Wd(e){const n=K(e)?new Array(e.length):{};for(const t in e)n[t]=Hd(e,t);return n}class Ud{constructor(n,t,a){this._object=n,this._key=t,this._defaultValue=a,this.__v_isRef=!0,this._value=void 0,this._raw=ce(n);let o=!0,r=n;if(!K(n)||!Wo(String(t)))do o=!zo(r)||pn(r);while(o&&(r=r.__v_raw));this._shallow=o}get value(){let n=this._object[this._key];return this._shallow&&(n=ee(n)),this._value=n===void 0?this._defaultValue:n}set value(n){if(this._shallow&&we(this._raw[this._key])){const t=this._object[this._key];if(we(t)){t.value=n;return}}this._object[this._key]=n}get dep(){return wd(this._raw,this._key)}}function Hd(e,n,t){return new Ud(e,n,t)}class Vd{constructor(n,t,a){this.fn=n,this.setter=t,this._value=void 0,this.dep=new gi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ca-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return zc(this,!0),!0}get value(){const n=this.dep.track();return Jc(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function $d(e,n,t=!1){let a,o;return ne(e)?a=e:(a=e.get,o=e.set),new Vd(a,o,t)}const Va={},Eo=new WeakMap;let At;function Bd(e,n=!1,t=At){if(t){let a=Eo.get(t);a||Eo.set(t,a=[]),a.push(e)}}function Gd(e,n,t=ge){const{immediate:a,deep:o,once:r,scheduler:i,augmentJob:s,call:c}=t,l=b=>o?b:pn(b)||o===!1||o===0?Xn(b,1):Xn(b);let u,d,h,_,C=!1,k=!1;if(we(e)?(d=()=>e.value,C=pn(e)):Jn(e)?(d=()=>l(e),C=!0):K(e)?(k=!0,C=e.some(b=>Jn(b)||pn(b)),d=()=>e.map(b=>{if(we(b))return b.value;if(Jn(b))return l(b);if(ne(b))return c?c(b,2):b()})):ne(e)?n?d=c?()=>c(e,2):e:d=()=>{if(h){Zn();try{h()}finally{et()}}const b=At;At=u;try{return c?c(e,3,[_]):e(_)}finally{At=b}}:d=Fn,n&&o){const b=d,T=o===!0?1/0:o;d=()=>Xn(b(),T)}const R=$c(),P=()=>{u.stop(),R&&R.active&&li(R.effects,u)};if(r&&n){const b=n;n=(...T)=>{b(...T),P()}}let E=k?new Array(e.length).fill(Va):Va;const y=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(n){const T=u.run();if(o||C||(k?T.some((O,x)=>ht(O,E[x])):ht(T,E))){h&&h();const O=At;At=u;try{const x=[T,E===Va?void 0:k&&E[0]===Va?[]:E,_];E=T,c?c(n,3,x):n(...x)}finally{At=O}}}else u.run()};return s&&s(y),u=new Bc(d),u.scheduler=i?()=>i(y,!1):y,_=b=>Bd(b,!1,u),h=u.onStop=()=>{const b=Eo.get(u);if(b){if(c)c(b,4);else for(const T of b)T();Eo.delete(u)}},n?a?y(!0):E=u.run():i?i(y.bind(null,!0),!0):u.run(),P.pause=u.pause.bind(u),P.resume=u.resume.bind(u),P.stop=P,P}function Xn(e,n=1/0,t){if(n<=0||!me(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,we(e))Xn(e.value,n,t);else if(K(e))for(let a=0;a<e.length;a++)Xn(e[a],n,t);else if(Yo(e)||Ht(e))e.forEach(a=>{Xn(a,n,t)});else if(jc(e)){for(const a in e)Xn(e[a],n,t);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Xn(e[a],n,t)}return e}function Da(e,n,t,a){try{return a?e(...a):e()}catch(o){Ma(o,n,t)}}function On(e,n,t,a){if(ne(e)){const o=Da(e,n,t,a);return o&&Fc(o)&&o.catch(r=>{Ma(r,n,t)}),o}if(K(e)){const o=[];for(let r=0;r<e.length;r++)o.push(On(e[r],n,t,a));return o}}function Ma(e,n,t,a=!0){const o=n?n.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=n&&n.appContext.config||ge;if(n){let s=n.parent;const c=n.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const u=s.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,c,l)===!1)return}s=s.parent}if(r){Zn(),Da(r,null,10,[e,c,l]),et();return}}zd(e,t,o,a,i)}function zd(e,n,t,a=!0,o=!1){if(o)throw e;console.error(e)}const Ke=[];let Rn=-1;const $t=[];let ut=null,Ft=0;const ll=Promise.resolve();let Ao=null;function Ko(e){const n=Ao||ll;return e?n.then(this?e.bind(this):e):n}function Kd(e){let n=Rn+1,t=Ke.length;for(;n<t;){const a=n+t>>>1,o=Ke[a],r=Aa(o);r<e||r===e&&o.flags&2?n=a+1:t=a}return n}function bi(e){if(!(e.flags&1)){const n=Aa(e),t=Ke[Ke.length-1];!t||!(e.flags&2)&&n>=Aa(t)?Ke.push(e):Ke.splice(Kd(n),0,e),e.flags|=1,ul()}}function ul(){Ao||(Ao=ll.then(fl))}function Xd(e){K(e)?$t.push(...e):ut&&e.id===-1?ut.splice(Ft+1,0,e):e.flags&1||($t.push(e),e.flags|=1),ul()}function Gi(e,n,t=Rn+1){for(;t<Ke.length;t++){const a=Ke[t];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;Ke.splice(t,1),t--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function dl(e){if($t.length){const n=[...new Set($t)].sort((t,a)=>Aa(t)-Aa(a));if($t.length=0,ut){ut.push(...n);return}for(ut=n,Ft=0;Ft<ut.length;Ft++){const t=ut[Ft];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ut=null,Ft=0}}const Aa=e=>e.id==null?e.flags&2?-1:1/0:e.id;function fl(e){try{for(Rn=0;Rn<Ke.length;Rn++){const n=Ke[Rn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Da(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Rn<Ke.length;Rn++){const n=Ke[Rn];n&&(n.flags&=-2)}Rn=-1,Ke.length=0,dl(),Ao=null,(Ke.length||$t.length)&&fl()}}let mn=null,ml=null;function Io(e){const n=mn;return mn=e,ml=e&&e.type.__scopeId||null,n}function Nn(e,n=mn,t){if(!n||e._n)return e;const a=(...o)=>{a._d&&Lo(-1);const r=Io(n);let i;try{i=e(...o)}finally{Io(r),a._d&&Lo(1)}return i};return a._n=!0,a._c=!0,a._d=!0,a}function ky(e,n){if(mn===null)return e;const t=Zo(mn),a=e.dirs||(e.dirs=[]);for(let o=0;o<n.length;o++){let[r,i,s,c=ge]=n[o];r&&(ne(r)&&(r={mounted:r,updated:r}),r.deep&&Xn(i),a.push({dir:r,instance:t,value:i,oldValue:void 0,arg:s,modifiers:c}))}return e}function vt(e,n,t,a){const o=e.dirs,r=n&&n.dirs;for(let i=0;i<o.length;i++){const s=o[i];r&&(s.oldValue=r[i].value);let c=s.dir[a];c&&(Zn(),On(c,t,8,[e.el,s,e,n]),et())}}function uo(e,n){if(Ye){let t=Ye.provides;const a=Ye.parent&&Ye.parent.provides;a===t&&(t=Ye.provides=Object.create(a)),t[e]=n}}function _n(e,n,t=!1){const a=at();if(a||Rt){let o=Rt?Rt._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return t&&ne(n)?n.call(a&&a.proxy):n}}function Jd(){return!!(at()||Rt)}const Qd=Symbol.for("v-scx"),Zd=()=>_n(Qd);function ef(e,n){return ki(e,null,n)}function Qn(e,n,t){return ki(e,n,t)}function ki(e,n,t=ge){const{immediate:a,deep:o,flush:r,once:i}=t,s=Ne({},t),c=n&&a||!n&&r!=="post";let l;if(Kt){if(r==="sync"){const _=Zd();l=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Fn,_.resume=Fn,_.pause=Fn,_}}const u=Ye;s.call=(_,C,k)=>On(_,u,C,k);let d=!1;r==="post"?s.scheduler=_=>{De(_,u&&u.suspense)}:r!=="sync"&&(d=!0,s.scheduler=(_,C)=>{C?_():bi(_)}),s.augmentJob=_=>{n&&(_.flags|=4),d&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const h=Gd(e,n,s);return Kt&&(l?l.push(h):c&&h()),h}function nf(e,n,t){const a=this.proxy,o=Ce(e)?e.includes(".")?hl(a,e):()=>a[e]:e.bind(a,a);let r;ne(n)?r=n:(r=n.handler,t=n);const i=Ya(this),s=ki(o,r.bind(a),t);return i(),s}function hl(e,n){const t=n.split(".");return()=>{let a=e;for(let o=0;o<t.length&&a;o++)a=a[t[o]];return a}}const tf=Symbol("_vte"),gl=e=>e.__isTeleport,xn=Symbol("_leaveCb"),ia=Symbol("_enterCb");function af(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qa(()=>{e.isMounted=!0}),Ci(()=>{e.isUnmounting=!0}),e}const vn=[Function,Array],pl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vn,onEnter:vn,onAfterEnter:vn,onEnterCancelled:vn,onBeforeLeave:vn,onLeave:vn,onAfterLeave:vn,onLeaveCancelled:vn,onBeforeAppear:vn,onAppear:vn,onAfterAppear:vn,onAppearCancelled:vn},_l=e=>{const n=e.subTree;return n.component?_l(n.component):n},of={name:"BaseTransition",props:pl,setup(e,{slots:n}){const t=at(),a=af();return()=>{const o=n.default&&bl(n.default(),!0);if(!o||!o.length)return;const r=yl(o),i=ce(e),{mode:s}=i;if(a.isLeaving)return dr(r);const c=zi(r);if(!c)return dr(r);let l=Dr(c,i,a,t,d=>l=d);c.type!==He&&zt(c,l);let u=t.subTree&&zi(t.subTree);if(u&&u.type!==He&&!ft(u,c)&&_l(t).type!==He){let d=Dr(u,i,a,t);if(zt(u,d),s==="out-in"&&c.type!==He)return a.isLeaving=!0,d.afterLeave=()=>{a.isLeaving=!1,t.job.flags&8||t.update(),delete d.afterLeave,u=void 0},dr(r);s==="in-out"&&c.type!==He?d.delayLeave=(h,_,C)=>{const k=vl(a,u);k[String(u.key)]=u,h[xn]=()=>{_(),h[xn]=void 0,delete l.delayedLeave,u=void 0},l.delayedLeave=()=>{C(),delete l.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function yl(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==He){n=t;break}}return n}const rf=of;function vl(e,n){const{leavingVNodes:t}=e;let a=t.get(n.type);return a||(a=Object.create(null),t.set(n.type,a)),a}function Dr(e,n,t,a,o){const{appear:r,mode:i,persisted:s=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:h,onLeave:_,onAfterLeave:C,onLeaveCancelled:k,onBeforeAppear:R,onAppear:P,onAfterAppear:E,onAppearCancelled:y}=n,b=String(e.key),T=vl(t,e),O=(S,$)=>{S&&On(S,a,9,$)},x=(S,$)=>{const X=$[1];O(S,$),K(S)?S.every(j=>j.length<=1)&&X():S.length<=1&&X()},q={mode:i,persisted:s,beforeEnter(S){let $=c;if(!t.isMounted)if(r)$=R||c;else return;S[xn]&&S[xn](!0);const X=T[b];X&&ft(e,X)&&X.el[xn]&&X.el[xn](),O($,[S])},enter(S){if(T[b]===e)return;let $=l,X=u,j=d;if(!t.isMounted)if(r)$=P||l,X=E||u,j=y||d;else return;let J=!1;S[ia]=Se=>{J||(J=!0,Se?O(j,[S]):O(X,[S]),q.delayedLeave&&q.delayedLeave(),S[ia]=void 0)};const pe=S[ia].bind(null,!1);$?x($,[S,pe]):pe()},leave(S,$){const X=String(e.key);if(S[ia]&&S[ia](!0),t.isUnmounting)return $();O(h,[S]);let j=!1;S[xn]=pe=>{j||(j=!0,$(),pe?O(k,[S]):O(C,[S]),S[xn]=void 0,T[X]===e&&delete T[X])};const J=S[xn].bind(null,!1);T[X]=e,_?x(_,[S,J]):J()},clone(S){const $=Dr(S,n,t,a,o);return o&&o($),$}};return q}function dr(e){if(Fa(e))return e=tt(e),e.children=null,e}function zi(e){if(!Fa(e))return gl(e.type)&&e.children?yl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&ne(t.default))return t.default()}}function zt(e,n){e.shapeFlag&6&&e.component?(e.transition=n,zt(e.component.subTree,n)):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function bl(e,n=!1,t){let a=[],o=0;for(let r=0;r<e.length;r++){let i=e[r];const s=t==null?i.key:String(t)+String(i.key!=null?i.key:r);i.type===fn?(i.patchFlag&128&&o++,a=a.concat(bl(i.children,n,s))):(n||i.type!==He)&&a.push(s!=null?tt(i,{key:s}):i)}if(o>1)for(let r=0;r<a.length;r++)a[r].patchFlag=-2;return a}function Wn(e,n){return ne(e)?Ne({name:e.name},n,{setup:e}):e}function wi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ki(e,n){let t;return!!((t=Object.getOwnPropertyDescriptor(e,n))&&!t.configurable)}const To=new WeakMap;function ga(e,n,t,a,o=!1){if(K(e)){e.forEach((k,R)=>ga(k,n&&(K(n)?n[R]:n),t,a,o));return}if(Lt(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&ga(e,n,t,a.component.subTree);return}const r=a.shapeFlag&4?Zo(a.component):a.el,i=o?null:r,{i:s,r:c}=e,l=n&&n.r,u=s.refs===ge?s.refs={}:s.refs,d=s.setupState,h=ce(d),_=d===ge?Mc:k=>Ki(u,k)?!1:fe(h,k),C=(k,R)=>!(R&&Ki(u,R));if(l!=null&&l!==c){if(Xi(n),Ce(l))u[l]=null,_(l)&&(d[l]=null);else if(we(l)){const k=n;C(l,k.k)&&(l.value=null),k.k&&(u[k.k]=null)}}if(ne(c))Da(c,s,12,[i,u]);else{const k=Ce(c),R=we(c);if(k||R){const P=()=>{if(e.f){const E=k?_(c)?d[c]:u[c]:C()||!e.k?c.value:u[e.k];if(o)K(E)&&li(E,r);else if(K(E))E.includes(r)||E.push(r);else if(k)u[c]=[r],_(c)&&(d[c]=u[c]);else{const y=[r];C(c,e.k)&&(c.value=y),e.k&&(u[e.k]=y)}}else k?(u[c]=i,_(c)&&(d[c]=i)):R&&(C(c,e.k)&&(c.value=i),e.k&&(u[e.k]=i))};if(i){const E=()=>{P(),To.delete(e)};E.id=-1,To.set(e,E),De(E,t)}else Xi(e),P()}}}function Xi(e){const n=To.get(e);n&&(n.flags|=8,To.delete(e))}const Ji=e=>e.nodeType===8;$o().requestIdleCallback;$o().cancelIdleCallback;function sf(e,n){if(Ji(e)&&e.data==="["){let t=1,a=e.nextSibling;for(;a;){if(a.nodeType===1){if(n(a)===!1)break}else if(Ji(a))if(a.data==="]"){if(--t===0)break}else a.data==="["&&t++;a=a.nextSibling}}else n(e)}const Lt=e=>!!e.type.__asyncLoader;function wy(e){ne(e)&&(e={loader:e});const{loader:n,loadingComponent:t,errorComponent:a,delay:o=200,hydrate:r,timeout:i,suspensible:s=!0,onError:c}=e;let l=null,u,d=0;const h=()=>(d++,l=null,_()),_=()=>{let C;return l||(C=l=n().catch(k=>{if(k=k instanceof Error?k:new Error(String(k)),c)return new Promise((R,P)=>{c(k,()=>R(h()),()=>P(k),d+1)});throw k}).then(k=>C!==l&&l?l:(k&&(k.__esModule||k[Symbol.toStringTag]==="Module")&&(k=k.default),u=k,k)))};return Wn({name:"AsyncComponentWrapper",__asyncLoader:_,__asyncHydrate(C,k,R){let P=!1;(k.bu||(k.bu=[])).push(()=>P=!0);const E=()=>{P||R()},y=r?()=>{const b=r(E,T=>sf(C,T));b&&(k.bum||(k.bum=[])).push(b)}:E;u?y():_().then(()=>!k.isUnmounted&&y())},get __asyncResolved(){return u},setup(){const C=Ye;if(wi(C),u)return()=>$a(u,C);const k=y=>{l=null,Ma(y,C,13,!a)};if(s&&C.suspense||Kt)return _().then(y=>()=>$a(y,C)).catch(y=>(k(y),()=>a?le(a,{error:y}):null));const R=Le(!1),P=Le(),E=Le(!!o);return o&&setTimeout(()=>{E.value=!1},o),i!=null&&setTimeout(()=>{if(!R.value&&!P.value){const y=new Error(`Async component timed out after ${i}ms.`);k(y),P.value=y}},i),_().then(()=>{R.value=!0,C.parent&&Fa(C.parent.vnode)&&C.parent.update()}).catch(y=>{k(y),P.value=y}),()=>{if(R.value&&u)return $a(u,C);if(P.value&&a)return le(a,{error:P.value});if(t&&!E.value)return $a(t,C)}}})}function $a(e,n){const{ref:t,props:a,children:o,ce:r}=n.vnode,i=le(e,a,o);return i.ref=t,i.ce=r,delete n.vnode.ce,i}const Fa=e=>e.type.__isKeepAlive,cf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const t=at(),a=t.ctx;if(!a.renderer)return()=>{const E=n.default&&n.default();return E&&E.length===1?E[0]:E};const o=new Map,r=new Set;let i=null;const s=t.suspense,{renderer:{p:c,m:l,um:u,o:{createElement:d}}}=a,h=d("div");a.activate=(E,y,b,T,O)=>{const x=E.component;l(E,y,b,0,s),c(x.vnode,E,y,b,x,s,T,E.slotScopeIds,O),De(()=>{x.isDeactivated=!1,x.a&&Vt(x.a);const q=E.props&&E.props.onVnodeMounted;q&&bn(q,x.parent,E)},s)},a.deactivate=E=>{const y=E.component;Oo(y.m),Oo(y.a),l(E,h,null,1,s),De(()=>{y.da&&Vt(y.da);const b=E.props&&E.props.onVnodeUnmounted;b&&bn(b,y.parent,E),y.isDeactivated=!0},s)};function _(E){fr(E),u(E,t,s,!0)}function C(E){o.forEach((y,b)=>{const T=Ur(Lt(y)?y.type.__asyncResolved||{}:y.type);T&&!E(T)&&k(b)})}function k(E){const y=o.get(E);y&&(!i||!ft(y,i))?_(y):i&&fr(i),o.delete(E),r.delete(E)}Qn(()=>[e.include,e.exclude],([E,y])=>{E&&C(b=>ua(E,b)),y&&C(b=>!ua(y,b))},{flush:"post",deep:!0});let R=null;const P=()=>{R!=null&&(Po(t.subTree.type)?De(()=>{o.set(R,Ba(t.subTree))},t.subTree.suspense):o.set(R,Ba(t.subTree)))};return qa(P),Cl(P),Ci(()=>{o.forEach(E=>{const{subTree:y,suspense:b}=t,T=Ba(y);if(E.type===T.type&&E.key===T.key){fr(T);const O=T.component.da;O&&De(O,b);return}_(E)})}),()=>{if(R=null,!n.default)return i=null;const E=n.default(),y=E[0];if(E.length>1)return i=null,E;if(!Ta(y)||!(y.shapeFlag&4)&&!(y.shapeFlag&128))return i=null,y;let b=Ba(y);if(b.type===He)return i=null,b;const T=b.type,O=Ur(Lt(b)?b.type.__asyncResolved||{}:T),{include:x,exclude:q,max:S}=e;if(x&&(!O||!ua(x,O))||q&&O&&ua(q,O))return b.shapeFlag&=-257,i=b,y;const $=b.key==null?T:b.key,X=o.get($);return b.el&&(b=tt(b),y.shapeFlag&128&&(y.ssContent=b)),R=$,X?(b.el=X.el,b.component=X.component,b.transition&&zt(b,b.transition),b.shapeFlag|=512,r.delete($),r.add($)):(r.add($),S&&r.size>parseInt(S,10)&&k(r.values().next().value)),b.shapeFlag|=256,i=b,Po(y.type)?y:b}}},Cy=cf;function ua(e,n){return K(e)?e.some(t=>ua(t,n)):Ce(e)?e.split(",").includes(n):id(e)?(e.lastIndex=0,e.test(n)):!1}function lf(e,n){kl(e,"a",n)}function uf(e,n){kl(e,"da",n)}function kl(e,n,t=Ye){const a=e.__wdc||(e.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Xo(n,a,t),t){let o=t.parent;for(;o&&o.parent;)Fa(o.parent.vnode)&&df(a,n,t,o),o=o.parent}}function df(e,n,t,a){const o=Xo(n,e,a,!0);Jo(()=>{li(a[n],o)},t)}function fr(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Ba(e){return e.shapeFlag&128?e.ssContent:e}function Xo(e,n,t=Ye,a=!1){if(t){const o=t[e]||(t[e]=[]),r=n.__weh||(n.__weh=(...i)=>{Zn();const s=Ya(t),c=On(n,t,e,i);return s(),et(),c});return a?o.unshift(r):o.push(r),r}}const ot=e=>(n,t=Ye)=>{(!Kt||e==="sp")&&Xo(e,(...a)=>n(...a),t)},wl=ot("bm"),qa=ot("m"),ff=ot("bu"),Cl=ot("u"),Ci=ot("bum"),Jo=ot("um"),mf=ot("sp"),hf=ot("rtg"),gf=ot("rtc");function pf(e,n=Ye){Xo("ec",e,n)}const El="components";function Mr(e,n){return Il(El,e,!0,n)||e}const Al=Symbol.for("v-ndc");function Ey(e){return Ce(e)?Il(El,e,!1)||e:e||Al}function Il(e,n,t=!0,a=!1){const o=mn||Ye;if(o){const r=o.type;{const s=Ur(r,!1);if(s&&(s===n||s===wn(n)||s===Ho(wn(n))))return r}const i=Qi(o[e]||r[e],n)||Qi(o.appContext[e],n);return!i&&a?r:i}}function Qi(e,n){return e&&(e[n]||e[wn(n)]||e[Ho(wn(n))])}function _f(e,n,t,a){let o;const r=t,i=K(e);if(i||Ce(e)){const s=i&&Jn(e);let c=!1,l=!1;s&&(c=!pn(e),l=nt(e),e=Go(e)),o=new Array(e.length);for(let u=0,d=e.length;u<d;u++)o[u]=n(c?l?Gt(Sn(e[u])):Sn(e[u]):e[u],u,void 0,r)}else if(typeof e=="number"){o=new Array(e);for(let s=0;s<e;s++)o[s]=n(s+1,s,void 0,r)}else if(me(e))if(e[Symbol.iterator])o=Array.from(e,(s,c)=>n(s,c,void 0,r));else{const s=Object.keys(e);o=new Array(s.length);for(let c=0,l=s.length;c<l;c++){const u=s[c];o[c]=n(e[u],u,c,r)}}else o=[];return o}const Fr=e=>e?$l(e)?Zo(e):Fr(e.parent):null,pa=Ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Fr(e.parent),$root:e=>Fr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Sl(e),$forceUpdate:e=>e.f||(e.f=()=>{bi(e.update)}),$nextTick:e=>e.n||(e.n=Ko.bind(e.proxy)),$watch:e=>nf.bind(e)}),mr=(e,n)=>e!==ge&&!e.__isScriptSetup&&fe(e,n),yf={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:a,data:o,props:r,accessCache:i,type:s,appContext:c}=e;if(n[0]!=="$"){const h=i[n];if(h!==void 0)switch(h){case 1:return a[n];case 2:return o[n];case 4:return t[n];case 3:return r[n]}else{if(mr(a,n))return i[n]=1,a[n];if(o!==ge&&fe(o,n))return i[n]=2,o[n];if(fe(r,n))return i[n]=3,r[n];if(t!==ge&&fe(t,n))return i[n]=4,t[n];qr&&(i[n]=0)}}const l=pa[n];let u,d;if(l)return n==="$attrs"&&Ue(e.attrs,"get",""),l(e);if((u=s.__cssModules)&&(u=u[n]))return u;if(t!==ge&&fe(t,n))return i[n]=4,t[n];if(d=c.config.globalProperties,fe(d,n))return d[n]},set({_:e},n,t){const{data:a,setupState:o,ctx:r}=e;return mr(o,n)?(o[n]=t,!0):a!==ge&&fe(a,n)?(a[n]=t,!0):fe(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:a,appContext:o,props:r,type:i}},s){let c;return!!(t[s]||e!==ge&&s[0]!=="$"&&fe(e,s)||mr(n,s)||fe(r,s)||fe(a,s)||fe(pa,s)||fe(o.config.globalProperties,s)||(c=i.__cssModules)&&c[s])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:fe(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function Zi(e){return K(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let qr=!0;function vf(e){const n=Sl(e),t=e.proxy,a=e.ctx;qr=!1,n.beforeCreate&&es(n.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:s,provide:c,inject:l,created:u,beforeMount:d,mounted:h,beforeUpdate:_,updated:C,activated:k,deactivated:R,beforeDestroy:P,beforeUnmount:E,destroyed:y,unmounted:b,render:T,renderTracked:O,renderTriggered:x,errorCaptured:q,serverPrefetch:S,expose:$,inheritAttrs:X,components:j,directives:J,filters:pe}=n;if(l&&bf(l,a,null),i)for(const Z in i){const re=i[Z];ne(re)&&(a[Z]=re.bind(t))}if(o){const Z=o.call(t,t);me(Z)&&(e.data=xa(Z))}if(qr=!0,r)for(const Z in r){const re=r[Z],Ve=ne(re)?re.bind(t,t):ne(re.get)?re.get.bind(t,t):Fn,tn=!ne(re)&&ne(re.set)?re.set.bind(t):Fn,Ee=ye({get:Ve,set:tn});Object.defineProperty(a,Z,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:Ae=>Ee.value=Ae})}if(s)for(const Z in s)Tl(s[Z],a,t,Z);if(c){const Z=ne(c)?c.call(t):c;Reflect.ownKeys(Z).forEach(re=>{uo(re,Z[re])})}u&&es(u,e,"c");function oe(Z,re){K(re)?re.forEach(Ve=>Z(Ve.bind(t))):re&&Z(re.bind(t))}if(oe(wl,d),oe(qa,h),oe(ff,_),oe(Cl,C),oe(lf,k),oe(uf,R),oe(pf,q),oe(gf,O),oe(hf,x),oe(Ci,E),oe(Jo,b),oe(mf,S),K($))if($.length){const Z=e.exposed||(e.exposed={});$.forEach(re=>{Object.defineProperty(Z,re,{get:()=>t[re],set:Ve=>t[re]=Ve,enumerable:!0})})}else e.exposed||(e.exposed={});T&&e.render===Fn&&(e.render=T),X!=null&&(e.inheritAttrs=X),j&&(e.components=j),J&&(e.directives=J),S&&wi(e)}function bf(e,n,t=Fn){K(e)&&(e=jr(e));for(const a in e){const o=e[a];let r;me(o)?"default"in o?r=_n(o.from||a,o.default,!0):r=_n(o.from||a):r=_n(o),we(r)?Object.defineProperty(n,a,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):n[a]=r}}function es(e,n,t){On(K(e)?e.map(a=>a.bind(n.proxy)):e.bind(n.proxy),n,t)}function Tl(e,n,t,a){let o=a.includes(".")?hl(t,a):()=>t[a];if(Ce(e)){const r=n[e];ne(r)&&Qn(o,r)}else if(ne(e))Qn(o,e.bind(t));else if(me(e))if(K(e))e.forEach(r=>Tl(r,n,t,a));else{const r=ne(e.handler)?e.handler.bind(t):n[e.handler];ne(r)&&Qn(o,r,e)}}function Sl(e){const n=e.type,{mixins:t,extends:a}=n,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,s=r.get(n);let c;return s?c=s:!o.length&&!t&&!a?c=n:(c={},o.length&&o.forEach(l=>So(c,l,i,!0)),So(c,n,i)),me(n)&&r.set(n,c),c}function So(e,n,t,a=!1){const{mixins:o,extends:r}=n;r&&So(e,r,t,!0),o&&o.forEach(i=>So(e,i,t,!0));for(const i in n)if(!(a&&i==="expose")){const s=kf[i]||t&&t[i];e[i]=s?s(e[i],n[i]):n[i]}return e}const kf={data:ns,props:ts,emits:ts,methods:da,computed:da,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:da,directives:da,watch:Cf,provide:ns,inject:wf};function ns(e,n){return n?e?function(){return Ne(ne(e)?e.call(this,this):e,ne(n)?n.call(this,this):n)}:n:e}function wf(e,n){return da(jr(e),jr(n))}function jr(e){if(K(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Be(e,n){return e?[...new Set([].concat(e,n))]:n}function da(e,n){return e?Ne(Object.create(null),e,n):n}function ts(e,n){return e?K(e)&&K(n)?[...new Set([...e,...n])]:Ne(Object.create(null),Zi(e),Zi(n??{})):n}function Cf(e,n){if(!e)return n;if(!n)return e;const t=Ne(Object.create(null),e);for(const a in n)t[a]=Be(e[a],n[a]);return t}function Ol(){return{app:null,config:{isNativeTag:Mc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ef=0;function Af(e,n){return function(a,o=null){ne(a)||(a=Ne({},a)),o!=null&&!me(o)&&(o=null);const r=Ol(),i=new WeakSet,s=[];let c=!1;const l=r.app={_uid:Ef++,_component:a,_props:o,_container:null,_context:r,_instance:null,version:am,get config(){return r.config},set config(u){},use(u,...d){return i.has(u)||(u&&ne(u.install)?(i.add(u),u.install(l,...d)):ne(u)&&(i.add(u),u(l,...d))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,d){return d?(r.components[u]=d,l):r.components[u]},directive(u,d){return d?(r.directives[u]=d,l):r.directives[u]},mount(u,d,h){if(!c){const _=l._ceVNode||le(a,o);return _.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),e(_,u,h),c=!0,l._container=u,u.__vue_app__=l,Zo(_.component)}},onUnmount(u){s.push(u)},unmount(){c&&(On(s,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return r.provides[u]=d,l},runWithContext(u){const d=Rt;Rt=l;try{return u()}finally{Rt=d}}};return l}}let Rt=null;const If=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${wn(n)}Modifiers`]||e[`${Nt(n)}Modifiers`];function Tf(e,n,...t){if(e.isUnmounted)return;const a=e.vnode.props||ge;let o=t;const r=n.startsWith("update:"),i=r&&If(a,n.slice(7));i&&(i.trim&&(o=t.map(u=>Ce(u)?u.trim():u)),i.number&&(o=t.map(Vo)));let s,c=a[s=ir(n)]||a[s=ir(wn(n))];!c&&r&&(c=a[s=ir(Nt(n))]),c&&On(c,e,6,o);const l=a[s+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,On(l,e,6,o)}}const Sf=new WeakMap;function Pl(e,n,t=!1){const a=t?Sf:n.emitsCache,o=a.get(e);if(o!==void 0)return o;const r=e.emits;let i={},s=!1;if(!ne(e)){const c=l=>{const u=Pl(l,n,!0);u&&(s=!0,Ne(i,u))};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!r&&!s?(me(e)&&a.set(e,null),null):(K(r)?r.forEach(c=>i[c]=null):Ne(i,r),me(e)&&a.set(e,i),i)}function Qo(e,n){return!e||!jo(n)?!1:(n=n.slice(2).replace(/Once$/,""),fe(e,n[0].toLowerCase()+n.slice(1))||fe(e,Nt(n))||fe(e,n))}function as(e){const{type:n,vnode:t,proxy:a,withProxy:o,propsOptions:[r],slots:i,attrs:s,emit:c,render:l,renderCache:u,props:d,data:h,setupState:_,ctx:C,inheritAttrs:k}=e,R=Io(e);let P,E;try{if(t.shapeFlag&4){const b=o||a,T=b;P=Dn(l.call(T,b,u,d,_,h,C)),E=s}else{const b=n;P=Dn(b.length>1?b(d,{attrs:s,slots:i,emit:c}):b(d,null)),E=n.props?s:Of(s)}}catch(b){_a.length=0,Ma(b,e,1),P=le(He)}let y=P;if(E&&k!==!1){const b=Object.keys(E),{shapeFlag:T}=y;b.length&&T&7&&(r&&b.some(ci)&&(E=Pf(E,r)),y=tt(y,E,!1,!0))}return t.dirs&&(y=tt(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&zt(y,t.transition),P=y,Io(R),P}const Of=e=>{let n;for(const t in e)(t==="class"||t==="style"||jo(t))&&((n||(n={}))[t]=e[t]);return n},Pf=(e,n)=>{const t={};for(const a in e)(!ci(a)||!(a.slice(9)in n))&&(t[a]=e[a]);return t};function Lf(e,n,t){const{props:a,children:o,component:r}=e,{props:i,children:s,patchFlag:c}=n,l=r.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return a?os(a,i,l):!!i;if(c&8){const u=n.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(Ll(i,a,h)&&!Qo(l,h))return!0}}}else return(o||s)&&(!s||!s.$stable)?!0:a===i?!1:a?i?os(a,i,l):!0:!!i;return!1}function os(e,n,t){const a=Object.keys(n);if(a.length!==Object.keys(e).length)return!0;for(let o=0;o<a.length;o++){const r=a[o];if(Ll(n,e,r)&&!Qo(t,r))return!0}return!1}function Ll(e,n,t){const a=e[t],o=n[t];return t==="style"&&me(a)&&me(o)?!Na(a,o):a!==o}function Rf({vnode:e,parent:n},t){for(;n;){const a=n.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=n.vnode).el=t,n=n.parent;else break}}const Rl={},Nl=()=>Object.create(Rl),xl=e=>Object.getPrototypeOf(e)===Rl;function Nf(e,n,t,a=!1){const o={},r=Nl();e.propsDefaults=Object.create(null),Dl(e,n,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);t?e.props=a?o:il(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function xf(e,n,t,a){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,s=ce(o),[c]=e.propsOptions;let l=!1;if((a||i>0)&&!(i&16)){if(i&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Qo(e.emitsOptions,h))continue;const _=n[h];if(c)if(fe(r,h))_!==r[h]&&(r[h]=_,l=!0);else{const C=wn(h);o[C]=Yr(c,s,C,_,e,!1)}else _!==r[h]&&(r[h]=_,l=!0)}}}else{Dl(e,n,o,r)&&(l=!0);let u;for(const d in s)(!n||!fe(n,d)&&((u=Nt(d))===d||!fe(n,u)))&&(c?t&&(t[d]!==void 0||t[u]!==void 0)&&(o[d]=Yr(c,s,d,void 0,e,!0)):delete o[d]);if(r!==s)for(const d in r)(!n||!fe(n,d))&&(delete r[d],l=!0)}l&&Kn(e.attrs,"set","")}function Dl(e,n,t,a){const[o,r]=e.propsOptions;let i=!1,s;if(n)for(let c in n){if(fa(c))continue;const l=n[c];let u;o&&fe(o,u=wn(c))?!r||!r.includes(u)?t[u]=l:(s||(s={}))[u]=l:Qo(e.emitsOptions,c)||(!(c in a)||l!==a[c])&&(a[c]=l,i=!0)}if(r){const c=ce(t),l=s||ge;for(let u=0;u<r.length;u++){const d=r[u];t[d]=Yr(o,c,d,l[d],e,!fe(l,d))}}return i}function Yr(e,n,t,a,o,r){const i=e[t];if(i!=null){const s=fe(i,"default");if(s&&a===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&ne(c)){const{propsDefaults:l}=o;if(t in l)a=l[t];else{const u=Ya(o);a=l[t]=c.call(null,n),u()}}else a=c;o.ce&&o.ce._setProp(t,a)}i[0]&&(r&&!s?a=!1:i[1]&&(a===""||a===Nt(t))&&(a=!0))}return a}const Df=new WeakMap;function Ml(e,n,t=!1){const a=t?Df:n.propsCache,o=a.get(e);if(o)return o;const r=e.props,i={},s=[];let c=!1;if(!ne(e)){const u=d=>{c=!0;const[h,_]=Ml(d,n,!0);Ne(i,h),_&&s.push(..._)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!c)return me(e)&&a.set(e,Ut),Ut;if(K(r))for(let u=0;u<r.length;u++){const d=wn(r[u]);rs(d)&&(i[d]=ge)}else if(r)for(const u in r){const d=wn(u);if(rs(d)){const h=r[u],_=i[d]=K(h)||ne(h)?{type:h}:Ne({},h),C=_.type;let k=!1,R=!0;if(K(C))for(let P=0;P<C.length;++P){const E=C[P],y=ne(E)&&E.name;if(y==="Boolean"){k=!0;break}else y==="String"&&(R=!1)}else k=ne(C)&&C.name==="Boolean";_[0]=k,_[1]=R,(k||fe(_,"default"))&&s.push(d)}}const l=[i,s];return me(e)&&a.set(e,l),l}function rs(e){return e[0]!=="$"&&!fa(e)}const Ei=e=>e==="_"||e==="_ctx"||e==="$stable",Ai=e=>K(e)?e.map(Dn):[Dn(e)],Mf=(e,n,t)=>{if(n._n)return n;const a=Nn((...o)=>Ai(n(...o)),t);return a._c=!1,a},Fl=(e,n,t)=>{const a=e._ctx;for(const o in e){if(Ei(o))continue;const r=e[o];if(ne(r))n[o]=Mf(o,r,a);else if(r!=null){const i=Ai(r);n[o]=()=>i}}},ql=(e,n)=>{const t=Ai(n);e.slots.default=()=>t},jl=(e,n,t)=>{for(const a in n)(t||!Ei(a))&&(e[a]=n[a])},Ff=(e,n,t)=>{const a=e.slots=Nl();if(e.vnode.shapeFlag&32){const o=n._;o?(jl(a,n,t),t&&Yc(a,"_",o,!0)):Fl(n,a)}else n&&ql(e,n)},qf=(e,n,t)=>{const{vnode:a,slots:o}=e;let r=!0,i=ge;if(a.shapeFlag&32){const s=n._;s?t&&s===1?r=!1:jl(o,n,t):(r=!n.$stable,Fl(n,o)),i=n}else n&&(ql(e,n),i={default:1});if(r)for(const s in o)!Ei(s)&&i[s]==null&&delete o[s]},De=Hf;function jf(e){return Yf(e)}function Yf(e,n){const t=$o();t.__VUE__=!0;const{insert:a,remove:o,patchProp:r,createElement:i,createText:s,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:h,setScopeId:_=Fn,insertStaticContent:C}=e,k=(g,v,p,I=null,F=null,D=null,U=void 0,W=null,f=!!v.dynamicChildren)=>{if(g===v)return;g&&!ft(g,v)&&(I=M(g),Ae(g,F,D,!0),g=null),v.patchFlag===-2&&(f=!1,v.dynamicChildren=null);const{type:m,ref:A,shapeFlag:L}=v;switch(m){case ja:R(g,v,p,I);break;case He:P(g,v,p,I);break;case gr:g==null&&E(v,p,I,U);break;case fn:j(g,v,p,I,F,D,U,W,f);break;default:L&1?T(g,v,p,I,F,D,U,W,f):L&6?J(g,v,p,I,F,D,U,W,f):(L&64||L&128)&&m.process(g,v,p,I,F,D,U,W,f,G)}A!=null&&F?ga(A,g&&g.ref,D,v||g,!v):A==null&&g&&g.ref!=null&&ga(g.ref,null,D,g,!0)},R=(g,v,p,I)=>{if(g==null)a(v.el=s(v.children),p,I);else{const F=v.el=g.el;v.children!==g.children&&l(F,v.children)}},P=(g,v,p,I)=>{g==null?a(v.el=c(v.children||""),p,I):v.el=g.el},E=(g,v,p,I)=>{[g.el,g.anchor]=C(g.children,v,p,I,g.el,g.anchor)},y=({el:g,anchor:v},p,I)=>{let F;for(;g&&g!==v;)F=h(g),a(g,p,I),g=F;a(v,p,I)},b=({el:g,anchor:v})=>{let p;for(;g&&g!==v;)p=h(g),o(g),g=p;o(v)},T=(g,v,p,I,F,D,U,W,f)=>{if(v.type==="svg"?U="svg":v.type==="math"&&(U="mathml"),g==null)O(v,p,I,F,D,U,W,f);else{const m=g.el&&g.el._isVueCE?g.el:null;try{m&&m._beginPatch(),S(g,v,F,D,U,W,f)}finally{m&&m._endPatch()}}},O=(g,v,p,I,F,D,U,W)=>{let f,m;const{props:A,shapeFlag:L,transition:H,dirs:Y}=g;if(f=g.el=i(g.type,D,A&&A.is,A),L&8?u(f,g.children):L&16&&q(g.children,f,null,I,F,hr(g,D),U,W),Y&&vt(g,null,I,"created"),x(f,g,g.scopeId,U,I),A){for(const N in A)N!=="value"&&!fa(N)&&r(f,N,null,A[N],D,I);"value"in A&&r(f,"value",null,A.value,D),(m=A.onVnodeBeforeMount)&&bn(m,I,g)}Y&&vt(g,null,I,"beforeMount");const w=Wf(F,H);w&&H.beforeEnter(f),a(f,v,p),((m=A&&A.onVnodeMounted)||w||Y)&&De(()=>{m&&bn(m,I,g),w&&H.enter(f),Y&&vt(g,null,I,"mounted")},F)},x=(g,v,p,I,F)=>{if(p&&_(g,p),I)for(let D=0;D<I.length;D++)_(g,I[D]);if(F){let D=F.subTree;if(v===D||Po(D.type)&&(D.ssContent===v||D.ssFallback===v)){const U=F.vnode;x(g,U,U.scopeId,U.slotScopeIds,F.parent)}}},q=(g,v,p,I,F,D,U,W,f=0)=>{for(let m=f;m<g.length;m++){const A=g[m]=W?zn(g[m]):Dn(g[m]);k(null,A,v,p,I,F,D,U,W)}},S=(g,v,p,I,F,D,U)=>{const W=v.el=g.el;let{patchFlag:f,dynamicChildren:m,dirs:A}=v;f|=g.patchFlag&16;const L=g.props||ge,H=v.props||ge;let Y;if(p&&bt(p,!1),(Y=H.onVnodeBeforeUpdate)&&bn(Y,p,v,g),A&&vt(v,g,p,"beforeUpdate"),p&&bt(p,!0),(L.innerHTML&&H.innerHTML==null||L.textContent&&H.textContent==null)&&u(W,""),m?$(g.dynamicChildren,m,W,p,I,hr(v,F),D):U||re(g,v,W,null,p,I,hr(v,F),D,!1),f>0){if(f&16)X(W,L,H,p,F);else if(f&2&&L.class!==H.class&&r(W,"class",null,H.class,F),f&4&&r(W,"style",L.style,H.style,F),f&8){const w=v.dynamicProps;for(let N=0;N<w.length;N++){const z=w[N],ie=L[z],be=H[z];(be!==ie||z==="value")&&r(W,z,ie,be,F,p)}}f&1&&g.children!==v.children&&u(W,v.children)}else!U&&m==null&&X(W,L,H,p,F);((Y=H.onVnodeUpdated)||A)&&De(()=>{Y&&bn(Y,p,v,g),A&&vt(v,g,p,"updated")},I)},$=(g,v,p,I,F,D,U)=>{for(let W=0;W<v.length;W++){const f=g[W],m=v[W],A=f.el&&(f.type===fn||!ft(f,m)||f.shapeFlag&198)?d(f.el):p;k(f,m,A,null,I,F,D,U,!0)}},X=(g,v,p,I,F)=>{if(v!==p){if(v!==ge)for(const D in v)!fa(D)&&!(D in p)&&r(g,D,v[D],null,F,I);for(const D in p){if(fa(D))continue;const U=p[D],W=v[D];U!==W&&D!=="value"&&r(g,D,W,U,F,I)}"value"in p&&r(g,"value",v.value,p.value,F)}},j=(g,v,p,I,F,D,U,W,f)=>{const m=v.el=g?g.el:s(""),A=v.anchor=g?g.anchor:s("");let{patchFlag:L,dynamicChildren:H,slotScopeIds:Y}=v;Y&&(W=W?W.concat(Y):Y),g==null?(a(m,p,I),a(A,p,I),q(v.children||[],p,A,F,D,U,W,f)):L>0&&L&64&&H&&g.dynamicChildren&&g.dynamicChildren.length===H.length?($(g.dynamicChildren,H,p,F,D,U,W),(v.key!=null||F&&v===F.subTree)&&Yl(g,v,!0)):re(g,v,p,A,F,D,U,W,f)},J=(g,v,p,I,F,D,U,W,f)=>{v.slotScopeIds=W,g==null?v.shapeFlag&512?F.ctx.activate(v,p,I,U,f):pe(v,p,I,F,D,U,f):Se(g,v,f)},pe=(g,v,p,I,F,D,U)=>{const W=g.component=Jf(g,I,F);if(Fa(g)&&(W.ctx.renderer=G),Qf(W,!1,U),W.asyncDep){if(F&&F.registerDep(W,oe,U),!g.el){const f=W.subTree=le(He);P(null,f,v,p),g.placeholder=f.el}}else oe(W,g,v,p,F,D,U)},Se=(g,v,p)=>{const I=v.component=g.component;if(Lf(g,v,p))if(I.asyncDep&&!I.asyncResolved){Z(I,v,p);return}else I.next=v,I.update();else v.el=g.el,I.vnode=v},oe=(g,v,p,I,F,D,U)=>{const W=()=>{if(g.isMounted){let{next:L,bu:H,u:Y,parent:w,vnode:N}=g;{const je=Wl(g);if(je){L&&(L.el=N.el,Z(g,L,U)),je.asyncDep.then(()=>{De(()=>{g.isUnmounted||m()},F)});return}}let z=L,ie;bt(g,!1),L?(L.el=N.el,Z(g,L,U)):L=N,H&&Vt(H),(ie=L.props&&L.props.onVnodeBeforeUpdate)&&bn(ie,w,L,N),bt(g,!0);const be=as(g),$e=g.subTree;g.subTree=be,k($e,be,d($e.el),M($e),g,F,D),L.el=be.el,z===null&&Rf(g,be.el),Y&&De(Y,F),(ie=L.props&&L.props.onVnodeUpdated)&&De(()=>bn(ie,w,L,N),F)}else{let L;const{el:H,props:Y}=v,{bm:w,m:N,parent:z,root:ie,type:be}=g,$e=Lt(v);bt(g,!1),w&&Vt(w),!$e&&(L=Y&&Y.onVnodeBeforeMount)&&bn(L,z,v),bt(g,!0);{ie.ce&&ie.ce._hasShadowRoot()&&ie.ce._injectChildStyle(be);const je=g.subTree=as(g);k(null,je,p,I,g,F,D),v.el=je.el}if(N&&De(N,F),!$e&&(L=Y&&Y.onVnodeMounted)){const je=v;De(()=>bn(L,z,je),F)}(v.shapeFlag&256||z&&Lt(z.vnode)&&z.vnode.shapeFlag&256)&&g.a&&De(g.a,F),g.isMounted=!0,v=p=I=null}};g.scope.on();const f=g.effect=new Bc(W);g.scope.off();const m=g.update=f.run.bind(f),A=g.job=f.runIfDirty.bind(f);A.i=g,A.id=g.uid,f.scheduler=()=>bi(A),bt(g,!0),m()},Z=(g,v,p)=>{v.component=g;const I=g.vnode.props;g.vnode=v,g.next=null,xf(g,v.props,I,p),qf(g,v.children,p),Zn(),Gi(g),et()},re=(g,v,p,I,F,D,U,W,f=!1)=>{const m=g&&g.children,A=g?g.shapeFlag:0,L=v.children,{patchFlag:H,shapeFlag:Y}=v;if(H>0){if(H&128){tn(m,L,p,I,F,D,U,W,f);return}else if(H&256){Ve(m,L,p,I,F,D,U,W,f);return}}Y&8?(A&16&&xe(m,F,D),L!==m&&u(p,L)):A&16?Y&16?tn(m,L,p,I,F,D,U,W,f):xe(m,F,D,!0):(A&8&&u(p,""),Y&16&&q(L,p,I,F,D,U,W,f))},Ve=(g,v,p,I,F,D,U,W,f)=>{g=g||Ut,v=v||Ut;const m=g.length,A=v.length,L=Math.min(m,A);let H;for(H=0;H<L;H++){const Y=v[H]=f?zn(v[H]):Dn(v[H]);k(g[H],Y,p,null,F,D,U,W,f)}m>A?xe(g,F,D,!0,!1,L):q(v,p,I,F,D,U,W,f,L)},tn=(g,v,p,I,F,D,U,W,f)=>{let m=0;const A=v.length;let L=g.length-1,H=A-1;for(;m<=L&&m<=H;){const Y=g[m],w=v[m]=f?zn(v[m]):Dn(v[m]);if(ft(Y,w))k(Y,w,p,null,F,D,U,W,f);else break;m++}for(;m<=L&&m<=H;){const Y=g[L],w=v[H]=f?zn(v[H]):Dn(v[H]);if(ft(Y,w))k(Y,w,p,null,F,D,U,W,f);else break;L--,H--}if(m>L){if(m<=H){const Y=H+1,w=Y<A?v[Y].el:I;for(;m<=H;)k(null,v[m]=f?zn(v[m]):Dn(v[m]),p,w,F,D,U,W,f),m++}}else if(m>H)for(;m<=L;)Ae(g[m],F,D,!0),m++;else{const Y=m,w=m,N=new Map;for(m=w;m<=H;m++){const dn=v[m]=f?zn(v[m]):Dn(v[m]);dn.key!=null&&N.set(dn.key,m)}let z,ie=0;const be=H-w+1;let $e=!1,je=0;const yt=new Array(be);for(m=0;m<be;m++)yt[m]=0;for(m=Y;m<=L;m++){const dn=g[m];if(ie>=be){Ae(dn,F,D,!0);continue}let Ln;if(dn.key!=null)Ln=N.get(dn.key);else for(z=w;z<=H;z++)if(yt[z-w]===0&&ft(dn,v[z])){Ln=z;break}Ln===void 0?Ae(dn,F,D,!0):(yt[Ln-w]=m+1,Ln>=je?je=Ln:$e=!0,k(dn,v[Ln],p,null,F,D,U,W,f),ie++)}const rr=$e?Uf(yt):Ut;for(z=rr.length-1,m=be-1;m>=0;m--){const dn=w+m,Ln=v[dn],Wi=v[dn+1],Ui=dn+1<A?Wi.el||Ul(Wi):I;yt[m]===0?k(null,Ln,p,Ui,F,D,U,W,f):$e&&(z<0||m!==rr[z]?Ee(Ln,p,Ui,2):z--)}}},Ee=(g,v,p,I,F=null)=>{const{el:D,type:U,transition:W,children:f,shapeFlag:m}=g;if(m&6){Ee(g.component.subTree,v,p,I);return}if(m&128){g.suspense.move(v,p,I);return}if(m&64){U.move(g,v,p,G);return}if(U===fn){a(D,v,p);for(let L=0;L<f.length;L++)Ee(f[L],v,p,I);a(g.anchor,v,p);return}if(U===gr){y(g,v,p);return}if(I!==2&&m&1&&W)if(I===0)W.beforeEnter(D),a(D,v,p),De(()=>W.enter(D),F);else{const{leave:L,delayLeave:H,afterLeave:Y}=W,w=()=>{g.ctx.isUnmounted?o(D):a(D,v,p)},N=()=>{D._isLeaving&&D[xn](!0),L(D,()=>{w(),Y&&Y()})};H?H(D,w,N):N()}else a(D,v,p)},Ae=(g,v,p,I=!1,F=!1)=>{const{type:D,props:U,ref:W,children:f,dynamicChildren:m,shapeFlag:A,patchFlag:L,dirs:H,cacheIndex:Y}=g;if(L===-2&&(F=!1),W!=null&&(Zn(),ga(W,null,p,g,!0),et()),Y!=null&&(v.renderCache[Y]=void 0),A&256){v.ctx.deactivate(g);return}const w=A&1&&H,N=!Lt(g);let z;if(N&&(z=U&&U.onVnodeBeforeUnmount)&&bn(z,v,g),A&6)un(g.component,p,I);else{if(A&128){g.suspense.unmount(p,I);return}w&&vt(g,null,v,"beforeUnmount"),A&64?g.type.remove(g,v,p,G,I):m&&!m.hasOnce&&(D!==fn||L>0&&L&64)?xe(m,v,p,!1,!0):(D===fn&&L&384||!F&&A&16)&&xe(f,v,p),I&&yn(g)}(N&&(z=U&&U.onVnodeUnmounted)||w)&&De(()=>{z&&bn(z,v,g),w&&vt(g,null,v,"unmounted")},p)},yn=g=>{const{type:v,el:p,anchor:I,transition:F}=g;if(v===fn){ln(p,I);return}if(v===gr){b(g);return}const D=()=>{o(p),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(g.shapeFlag&1&&F&&!F.persisted){const{leave:U,delayLeave:W}=F,f=()=>U(p,D);W?W(g.el,D,f):f()}else D()},ln=(g,v)=>{let p;for(;g!==v;)p=h(g),o(g),g=p;o(v)},un=(g,v,p)=>{const{bum:I,scope:F,job:D,subTree:U,um:W,m:f,a:m}=g;Oo(f),Oo(m),I&&Vt(I),F.stop(),D&&(D.flags|=8,Ae(U,g,v,p)),W&&De(W,v),De(()=>{g.isUnmounted=!0},v)},xe=(g,v,p,I=!1,F=!1,D=0)=>{for(let U=D;U<g.length;U++)Ae(g[U],v,p,I,F)},M=g=>{if(g.shapeFlag&6)return M(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const v=h(g.anchor||g.el),p=v&&v[tf];return p?h(p):v};let B=!1;const V=(g,v,p)=>{let I;g==null?v._vnode&&(Ae(v._vnode,null,null,!0),I=v._vnode.component):k(v._vnode||null,g,v,null,null,null,p),v._vnode=g,B||(B=!0,Gi(I),dl(),B=!1)},G={p:k,um:Ae,m:Ee,r:yn,mt:pe,mc:q,pc:re,pbc:$,n:M,o:e};return{render:V,hydrate:void 0,createApp:Af(V)}}function hr({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function bt({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function Wf(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Yl(e,n,t=!1){const a=e.children,o=n.children;if(K(a)&&K(o))for(let r=0;r<a.length;r++){const i=a[r];let s=o[r];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=o[r]=zn(o[r]),s.el=i.el),!t&&s.patchFlag!==-2&&Yl(i,s)),s.type===ja&&(s.patchFlag===-1&&(s=o[r]=zn(s)),s.el=i.el),s.type===He&&!s.el&&(s.el=i.el)}}function Uf(e){const n=e.slice(),t=[0];let a,o,r,i,s;const c=e.length;for(a=0;a<c;a++){const l=e[a];if(l!==0){if(o=t[t.length-1],e[o]<l){n[a]=o,t.push(a);continue}for(r=0,i=t.length-1;r<i;)s=r+i>>1,e[t[s]]<l?r=s+1:i=s;l<e[t[r]]&&(r>0&&(n[a]=t[r-1]),t[r]=a)}}for(r=t.length,i=t[r-1];r-- >0;)t[r]=i,i=n[i];return t}function Wl(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Wl(n)}function Oo(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Ul(e){if(e.placeholder)return e.placeholder;const n=e.component;return n?Ul(n.subTree):null}const Po=e=>e.__isSuspense;function Hf(e,n){n&&n.pendingBranch?K(e)?n.effects.push(...e):n.effects.push(e):Xd(e)}const fn=Symbol.for("v-fgt"),ja=Symbol.for("v-txt"),He=Symbol.for("v-cmt"),gr=Symbol.for("v-stc"),_a=[];let hn=null;function Xe(e=!1){_a.push(hn=e?null:[])}function Vf(){_a.pop(),hn=_a[_a.length-1]||null}let Ia=1;function Lo(e,n=!1){Ia+=e,e<0&&hn&&n&&(hn.hasOnce=!0)}function Hl(e){return e.dynamicChildren=Ia>0?hn||Ut:null,Vf(),Ia>0&&hn&&hn.push(e),e}function on(e,n,t,a,o,r){return Hl(se(e,n,t,a,o,r,!0))}function $f(e,n,t,a,o){return Hl(le(e,n,t,a,o,!0))}function Ta(e){return e?e.__v_isVNode===!0:!1}function ft(e,n){return e.type===n.type&&e.key===n.key}const Vl=({key:e})=>e??null,fo=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Ce(e)||we(e)||ne(e)?{i:mn,r:e,k:n,f:!!t}:e:null);function se(e,n=null,t=null,a=0,o=null,r=e===fn?0:1,i=!1,s=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Vl(n),ref:n&&fo(n),scopeId:ml,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:a,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:mn};return s?(Ti(c,t),r&128&&e.normalize(c)):t&&(c.shapeFlag|=Ce(t)?8:16),Ia>0&&!i&&hn&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&hn.push(c),c}const le=Bf;function Bf(e,n=null,t=null,a=0,o=null,r=!1){if((!e||e===Al)&&(e=He),Ta(e)){const s=tt(e,n,!0);return t&&Ti(s,t),Ia>0&&!r&&hn&&(s.shapeFlag&6?hn[hn.indexOf(e)]=s:hn.push(s)),s.patchFlag=-2,s}if(tm(e)&&(e=e.__vccOpts),n){n=Gf(n);let{class:s,style:c}=n;s&&!Ce(s)&&(n.class=Bo(s)),me(c)&&(zo(c)&&!K(c)&&(c=Ne({},c)),n.style=ui(c))}const i=Ce(e)?1:Po(e)?128:gl(e)?64:me(e)?4:ne(e)?2:0;return se(e,n,t,a,o,i,r,!0)}function Gf(e){return e?zo(e)||xl(e)?Ne({},e):e:null}function tt(e,n,t=!1,a=!1){const{props:o,ref:r,patchFlag:i,children:s,transition:c}=e,l=n?zf(o||{},n):o,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Vl(l),ref:n&&n.ref?t&&r?K(r)?r.concat(fo(n)):[r,fo(n)]:fo(n):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==fn?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&tt(e.ssContent),ssFallback:e.ssFallback&&tt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&a&&zt(u,c.clone(u)),u}function En(e=" ",n=0){return le(ja,null,e,n)}function Ii(e="",n=!1){return n?(Xe(),$f(He,null,e)):le(He,null,e)}function Dn(e){return e==null||typeof e=="boolean"?le(He):K(e)?le(fn,null,e.slice()):Ta(e)?zn(e):le(ja,null,String(e))}function zn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:tt(e)}function Ti(e,n){let t=0;const{shapeFlag:a}=e;if(n==null)n=null;else if(K(n))t=16;else if(typeof n=="object")if(a&65){const o=n.default;o&&(o._c&&(o._d=!1),Ti(e,o()),o._c&&(o._d=!0));return}else{t=32;const o=n._;!o&&!xl(n)?n._ctx=mn:o===3&&mn&&(mn.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else ne(n)?(n={default:n,_ctx:mn},t=32):(n=String(n),a&64?(t=16,n=[En(n)]):t=8);e.children=n,e.shapeFlag|=t}function zf(...e){const n={};for(let t=0;t<e.length;t++){const a=e[t];for(const o in a)if(o==="class")n.class!==a.class&&(n.class=Bo([n.class,a.class]));else if(o==="style")n.style=ui([n.style,a.style]);else if(jo(o)){const r=n[o],i=a[o];i&&r!==i&&!(K(r)&&r.includes(i))&&(n[o]=r?[].concat(r,i):i)}else o!==""&&(n[o]=a[o])}return n}function bn(e,n,t,a=null){On(e,n,7,[t,a])}const Kf=Ol();let Xf=0;function Jf(e,n,t){const a=e.type,o=(n?n.appContext:e.appContext)||Kf,r={uid:Xf++,vnode:e,type:a,parent:n,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(o.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ml(a,o),emitsOptions:Pl(a,o),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:a.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=Tf.bind(null,r),e.ce&&e.ce(r),r}let Ye=null;const at=()=>Ye||mn;let Ro,Wr;{const e=$o(),n=(t,a)=>{let o;return(o=e[t])||(o=e[t]=[]),o.push(a),r=>{o.length>1?o.forEach(i=>i(r)):o[0](r)}};Ro=n("__VUE_INSTANCE_SETTERS__",t=>Ye=t),Wr=n("__VUE_SSR_SETTERS__",t=>Kt=t)}const Ya=e=>{const n=Ye;return Ro(e),e.scope.on(),()=>{e.scope.off(),Ro(n)}},is=()=>{Ye&&Ye.scope.off(),Ro(null)};function $l(e){return e.vnode.shapeFlag&4}let Kt=!1;function Qf(e,n=!1,t=!1){n&&Wr(n);const{props:a,children:o}=e.vnode,r=$l(e);Nf(e,a,r,n),Ff(e,o,t||n);const i=r?Zf(e,n):void 0;return n&&Wr(!1),i}function Zf(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,yf);const{setup:a}=t;if(a){Zn();const o=e.setupContext=a.length>1?nm(e):null,r=Ya(e),i=Da(a,e,0,[e.props,o]),s=Fc(i);if(et(),r(),(s||e.sp)&&!Lt(e)&&wi(e),s){if(i.then(is,is),n)return i.then(c=>{ss(e,c)}).catch(c=>{Ma(c,e,0)});e.asyncDep=i}else ss(e,i)}else Bl(e)}function ss(e,n,t){ne(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:me(n)&&(e.setupState=cl(n)),Bl(e)}function Bl(e,n,t){const a=e.type;e.render||(e.render=a.render||Fn);{const o=Ya(e);Zn();try{vf(e)}finally{et(),o()}}}const em={get(e,n){return Ue(e,"get",""),e[n]}};function nm(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,em),slots:e.slots,emit:e.emit,expose:n}}function Zo(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(cl(yi(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in pa)return pa[t](e)},has(n,t){return t in n||t in pa}})):e.proxy}function Ur(e,n=!0){return ne(e)?e.displayName||e.name:e.name||n&&e.__name}function tm(e){return ne(e)&&"__vccOpts"in e}const ye=(e,n)=>$d(e,n,Kt);function Wa(e,n,t){try{Lo(-1);const a=arguments.length;return a===2?me(n)&&!K(n)?Ta(n)?le(e,null,[n]):le(e,n):le(e,null,n):(a>3?t=Array.prototype.slice.call(arguments,2):a===3&&Ta(t)&&(t=[t]),le(e,n,t))}finally{Lo(1)}}const am="3.5.29";let Hr;const cs=typeof window<"u"&&window.trustedTypes;if(cs)try{Hr=cs.createPolicy("vue",{createHTML:e=>e})}catch{}const Gl=Hr?e=>Hr.createHTML(e):e=>e,om="http://www.w3.org/2000/svg",rm="http://www.w3.org/1998/Math/MathML",Gn=typeof document<"u"?document:null,ls=Gn&&Gn.createElement("template"),im={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,a)=>{const o=n==="svg"?Gn.createElementNS(om,e):n==="mathml"?Gn.createElementNS(rm,e):t?Gn.createElement(e,{is:t}):Gn.createElement(e);return e==="select"&&a&&a.multiple!=null&&o.setAttribute("multiple",a.multiple),o},createText:e=>Gn.createTextNode(e),createComment:e=>Gn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Gn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,a,o,r){const i=t?t.previousSibling:n.lastChild;if(o&&(o===r||o.nextSibling))for(;n.insertBefore(o.cloneNode(!0),t),!(o===r||!(o=o.nextSibling)););else{ls.innerHTML=Gl(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const s=ls.content;if(a==="svg"||a==="mathml"){const c=s.firstChild;for(;c.firstChild;)s.appendChild(c.firstChild);s.removeChild(c)}n.insertBefore(s,t)}return[i?i.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},rt="transition",sa="animation",Sa=Symbol("_vtc"),zl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sm=Ne({},pl,zl),cm=e=>(e.displayName="Transition",e.props=sm,e),Ay=cm((e,{slots:n})=>Wa(rf,lm(e),n)),kt=(e,n=[])=>{K(e)?e.forEach(t=>t(...n)):e&&e(...n)},us=e=>e?K(e)?e.some(n=>n.length>1):e.length>1:!1;function lm(e){const n={};for(const j in e)j in zl||(n[j]=e[j]);if(e.css===!1)return n;const{name:t="v",type:a,duration:o,enterFromClass:r=`${t}-enter-from`,enterActiveClass:i=`${t}-enter-active`,enterToClass:s=`${t}-enter-to`,appearFromClass:c=r,appearActiveClass:l=i,appearToClass:u=s,leaveFromClass:d=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:_=`${t}-leave-to`}=e,C=um(o),k=C&&C[0],R=C&&C[1],{onBeforeEnter:P,onEnter:E,onEnterCancelled:y,onLeave:b,onLeaveCancelled:T,onBeforeAppear:O=P,onAppear:x=E,onAppearCancelled:q=y}=n,S=(j,J,pe,Se)=>{j._enterCancelled=Se,wt(j,J?u:s),wt(j,J?l:i),pe&&pe()},$=(j,J)=>{j._isLeaving=!1,wt(j,d),wt(j,_),wt(j,h),J&&J()},X=j=>(J,pe)=>{const Se=j?x:E,oe=()=>S(J,j,pe);kt(Se,[J,oe]),ds(()=>{wt(J,j?c:r),Hn(J,j?u:s),us(Se)||fs(J,a,k,oe)})};return Ne(n,{onBeforeEnter(j){kt(P,[j]),Hn(j,r),Hn(j,i)},onBeforeAppear(j){kt(O,[j]),Hn(j,c),Hn(j,l)},onEnter:X(!1),onAppear:X(!0),onLeave(j,J){j._isLeaving=!0;const pe=()=>$(j,J);Hn(j,d),j._enterCancelled?(Hn(j,h),gs(j)):(gs(j),Hn(j,h)),ds(()=>{j._isLeaving&&(wt(j,d),Hn(j,_),us(b)||fs(j,a,R,pe))}),kt(b,[j,pe])},onEnterCancelled(j){S(j,!1,void 0,!0),kt(y,[j])},onAppearCancelled(j){S(j,!0,void 0,!0),kt(q,[j])},onLeaveCancelled(j){$(j),kt(T,[j])}})}function um(e){if(e==null)return null;if(me(e))return[pr(e.enter),pr(e.leave)];{const n=pr(e);return[n,n]}}function pr(e){return ud(e)}function Hn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Sa]||(e[Sa]=new Set)).add(n)}function wt(e,n){n.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const t=e[Sa];t&&(t.delete(n),t.size||(e[Sa]=void 0))}function ds(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let dm=0;function fs(e,n,t,a){const o=e._endId=++dm,r=()=>{o===e._endId&&a()};if(t!=null)return setTimeout(r,t);const{type:i,timeout:s,propCount:c}=fm(e,n);if(!i)return a();const l=i+"end";let u=0;const d=()=>{e.removeEventListener(l,h),r()},h=_=>{_.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},s+1),e.addEventListener(l,h)}function fm(e,n){const t=window.getComputedStyle(e),a=C=>(t[C]||"").split(", "),o=a(`${rt}Delay`),r=a(`${rt}Duration`),i=ms(o,r),s=a(`${sa}Delay`),c=a(`${sa}Duration`),l=ms(s,c);let u=null,d=0,h=0;n===rt?i>0&&(u=rt,d=i,h=r.length):n===sa?l>0&&(u=sa,d=l,h=c.length):(d=Math.max(i,l),u=d>0?i>l?rt:sa:null,h=u?u===rt?r.length:c.length:0);const _=u===rt&&/\b(?:transform|all)(?:,|$)/.test(a(`${rt}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:_}}function ms(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,a)=>hs(t)+hs(e[a])))}function hs(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function gs(e){return(e?e.ownerDocument:document).body.offsetHeight}function mm(e,n,t){const a=e[Sa];a&&(n=(n?[n,...a]:[...a]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const ps=Symbol("_vod"),hm=Symbol("_vsh"),gm=Symbol(""),pm=/(?:^|;)\s*display\s*:/;function _m(e,n,t){const a=e.style,o=Ce(t);let r=!1;if(t&&!o){if(n)if(Ce(n))for(const i of n.split(";")){const s=i.slice(0,i.indexOf(":")).trim();t[s]==null&&mo(a,s,"")}else for(const i in n)t[i]==null&&mo(a,i,"");for(const i in t)i==="display"&&(r=!0),mo(a,i,t[i])}else if(o){if(n!==t){const i=a[gm];i&&(t+=";"+i),a.cssText=t,r=pm.test(t)}}else n&&e.removeAttribute("style");ps in e&&(e[ps]=r?a.display:"",e[hm]&&(a.display="none"))}const _s=/\s*!important$/;function mo(e,n,t){if(K(t))t.forEach(a=>mo(e,n,a));else if(t==null&&(t=""),n.startsWith("--"))e.setProperty(n,t);else{const a=ym(e,n);_s.test(t)?e.setProperty(Nt(a),t.replace(_s,""),"important"):e[a]=t}}const ys=["Webkit","Moz","ms"],_r={};function ym(e,n){const t=_r[n];if(t)return t;let a=wn(n);if(a!=="filter"&&a in e)return _r[n]=a;a=Ho(a);for(let o=0;o<ys.length;o++){const r=ys[o]+a;if(r in e)return _r[n]=r}return n}const vs="http://www.w3.org/1999/xlink";function bs(e,n,t,a,o,r=pd(n)){a&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(vs,n.slice(6,n.length)):e.setAttributeNS(vs,n,t):t==null||r&&!Wc(t)?e.removeAttribute(n):e.setAttribute(n,r?"":Yn(t)?String(t):t)}function ks(e,n,t,a,o){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?Gl(t):t);return}const r=e.tagName;if(n==="value"&&r!=="PROGRESS"&&!r.includes("-")){const s=r==="OPTION"?e.getAttribute("value")||"":e.value,c=t==null?e.type==="checkbox"?"on":"":String(t);(s!==c||!("_value"in e))&&(e.value=c),t==null&&e.removeAttribute(n),e._value=t;return}let i=!1;if(t===""||t==null){const s=typeof e[n];s==="boolean"?t=Wc(t):t==null&&s==="string"?(t="",i=!0):s==="number"&&(t=0,i=!0)}try{e[n]=t}catch{}i&&e.removeAttribute(o||n)}function It(e,n,t,a){e.addEventListener(n,t,a)}function vm(e,n,t,a){e.removeEventListener(n,t,a)}const ws=Symbol("_vei");function bm(e,n,t,a,o=null){const r=e[ws]||(e[ws]={}),i=r[n];if(a&&i)i.value=a;else{const[s,c]=km(n);if(a){const l=r[n]=Em(a,o);It(e,s,l,c)}else i&&(vm(e,s,i,c),r[n]=void 0)}}const Cs=/(?:Once|Passive|Capture)$/;function km(e){let n;if(Cs.test(e)){n={};let a;for(;a=e.match(Cs);)e=e.slice(0,e.length-a[0].length),n[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Nt(e.slice(2)),n]}let yr=0;const wm=Promise.resolve(),Cm=()=>yr||(wm.then(()=>yr=0),yr=Date.now());function Em(e,n){const t=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=t.attached)return;On(Am(a,t.value),n,5,[a])};return t.value=e,t.attached=Cm(),t}function Am(e,n){if(K(n)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},n.map(a=>o=>!o._stopped&&a&&a(o))}else return n}const Es=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Im=(e,n,t,a,o,r)=>{const i=o==="svg";n==="class"?mm(e,a,i):n==="style"?_m(e,t,a):jo(n)?ci(n)||bm(e,n,t,a,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Tm(e,n,a,i))?(ks(e,n,a),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&bs(e,n,a,i,r,n!=="value")):e._isVueCE&&(/[A-Z]/.test(n)||!Ce(a))?ks(e,wn(n),a,r,n):(n==="true-value"?e._trueValue=a:n==="false-value"&&(e._falseValue=a),bs(e,n,a,i))};function Tm(e,n,t,a){if(a)return!!(n==="innerHTML"||n==="textContent"||n in e&&Es(n)&&ne(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Es(n)&&Ce(t)?!1:n in e}const No=e=>{const n=e.props["onUpdate:modelValue"]||!1;return K(n)?t=>Vt(n,t):n};function Sm(e){e.target.composing=!0}function As(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Bt=Symbol("_assign");function Is(e,n,t){return n&&(e=e.trim()),t&&(e=Vo(e)),e}const Iy={created(e,{modifiers:{lazy:n,trim:t,number:a}},o){e[Bt]=No(o);const r=a||o.props&&o.props.type==="number";It(e,n?"change":"input",i=>{i.target.composing||e[Bt](Is(e.value,t,r))}),(t||r)&&It(e,"change",()=>{e.value=Is(e.value,t,r)}),n||(It(e,"compositionstart",Sm),It(e,"compositionend",As),It(e,"change",As))},mounted(e,{value:n}){e.value=n??""},beforeUpdate(e,{value:n,oldValue:t,modifiers:{lazy:a,trim:o,number:r}},i){if(e[Bt]=No(i),e.composing)return;const s=(r||e.type==="number")&&!/^0\d/.test(e.value)?Vo(e.value):e.value,c=n??"";s!==c&&(document.activeElement===e&&e.type!=="range"&&(a&&n===t||o&&e.value.trim()===c)||(e.value=c))}},Ty={deep:!0,created(e,{value:n,modifiers:{number:t}},a){const o=Yo(n);It(e,"change",()=>{const r=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>t?Vo(xo(i)):xo(i));e[Bt](e.multiple?o?new Set(r):r:r[0]),e._assigning=!0,Ko(()=>{e._assigning=!1})}),e[Bt]=No(a)},mounted(e,{value:n}){Ts(e,n)},beforeUpdate(e,n,t){e[Bt]=No(t)},updated(e,{value:n}){e._assigning||Ts(e,n)}};function Ts(e,n){const t=e.multiple,a=K(n);if(!(t&&!a&&!Yo(n))){for(let o=0,r=e.options.length;o<r;o++){const i=e.options[o],s=xo(i);if(t)if(a){const c=typeof s;c==="string"||c==="number"?i.selected=n.some(l=>String(l)===String(s)):i.selected=yd(n,s)>-1}else i.selected=n.has(s);else if(Na(xo(i),n)){e.selectedIndex!==o&&(e.selectedIndex=o);return}}!t&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function xo(e){return"_value"in e?e._value:e.value}const Om=["ctrl","shift","alt","meta"],Pm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Om.some(t=>e[`${t}Key`]&&!n.includes(t))},Sy=(e,n)=>{if(!e)return e;const t=e._withMods||(e._withMods={}),a=n.join(".");return t[a]||(t[a]=((o,...r)=>{for(let i=0;i<n.length;i++){const s=Pm[n[i]];if(s&&s(o,n))return}return e(o,...r)}))},Lm=Ne({patchProp:Im},im);let Ss;function Rm(){return Ss||(Ss=jf(Lm))}const Nm=((...e)=>{const n=Rm().createApp(...e),{mount:t}=n;return n.mount=a=>{const o=Dm(a);if(!o)return;const r=n._component;!ne(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const i=t(o,!1,xm(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},n});function xm(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Dm(e){return Ce(e)?document.querySelector(e):e}let Kl;const er=e=>Kl=e,Xl=Symbol();function Vr(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ya;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ya||(ya={}));function Mm(){const e=di(!0),n=e.run(()=>Le({}));let t=[],a=[];const o=yi({install(r){er(o),o._a=r,r.provide(Xl,o),r.config.globalProperties.$pinia=o,a.forEach(i=>t.push(i)),a=[]},use(r){return this._a?t.push(r):a.push(r),this},_p:t,_a:null,_e:e,_s:new Map,state:n});return o}const Jl=()=>{};function Os(e,n,t,a=Jl){e.add(n);const o=()=>{e.delete(n)&&a()};return!t&&$c()&&vd(o),o}function Mt(e,...n){e.forEach(t=>{t(...n)})}const Fm=e=>e(),Ps=Symbol(),vr=Symbol();function $r(e,n){e instanceof Map&&n instanceof Map?n.forEach((t,a)=>e.set(a,t)):e instanceof Set&&n instanceof Set&&n.forEach(e.add,e);for(const t in n){if(!n.hasOwnProperty(t))continue;const a=n[t],o=e[t];Vr(o)&&Vr(a)&&e.hasOwnProperty(t)&&!we(a)&&!Jn(a)?e[t]=$r(o,a):e[t]=a}return e}const qm=Symbol();function jm(e){return!Vr(e)||!Object.prototype.hasOwnProperty.call(e,qm)}const{assign:ct}=Object;function Ym(e){return!!(we(e)&&e.effect)}function Wm(e,n,t,a){const{state:o,actions:r,getters:i}=n,s=t.state.value[e];let c;function l(){s||(t.state.value[e]=o?o():{});const u=Wd(t.state.value[e]);return ct(u,r,Object.keys(i||{}).reduce((d,h)=>(d[h]=yi(ye(()=>{er(t);const _=t._s.get(e);return i[h].call(_,_)})),d),{}))}return c=Ql(e,l,n,t,a,!0),c}function Ql(e,n,t={},a,o,r){let i;const s=ct({actions:{}},t),c={deep:!0};let l,u,d=new Set,h=new Set,_;const C=a.state.value[e];!r&&!C&&(a.state.value[e]={});let k;function R(q){let S;l=u=!1,typeof q=="function"?(q(a.state.value[e]),S={type:ya.patchFunction,storeId:e,events:_}):($r(a.state.value[e],q),S={type:ya.patchObject,payload:q,storeId:e,events:_});const $=k=Symbol();Ko().then(()=>{k===$&&(l=!0)}),u=!0,Mt(d,S,a.state.value[e])}const P=r?function(){const{state:S}=t,$=S?S():{};this.$patch(X=>{ct(X,$)})}:Jl;function E(){i.stop(),d.clear(),h.clear(),a._s.delete(e)}const y=(q,S="")=>{if(Ps in q)return q[vr]=S,q;const $=function(){er(a);const X=Array.from(arguments),j=new Set,J=new Set;function pe(Z){j.add(Z)}function Se(Z){J.add(Z)}Mt(h,{args:X,name:$[vr],store:T,after:pe,onError:Se});let oe;try{oe=q.apply(this&&this.$id===e?this:T,X)}catch(Z){throw Mt(J,Z),Z}return oe instanceof Promise?oe.then(Z=>(Mt(j,Z),Z)).catch(Z=>(Mt(J,Z),Promise.reject(Z))):(Mt(j,oe),oe)};return $[Ps]=!0,$[vr]=S,$},b={_p:a,$id:e,$onAction:Os.bind(null,h),$patch:R,$reset:P,$subscribe(q,S={}){const $=Os(d,q,S.detached,()=>X()),X=i.run(()=>Qn(()=>a.state.value[e],j=>{(S.flush==="sync"?u:l)&&q({storeId:e,type:ya.direct,events:_},j)},ct({},c,S)));return $},$dispose:E},T=xa(b);a._s.set(e,T);const x=(a._a&&a._a.runWithContext||Fm)(()=>a._e.run(()=>(i=di()).run(()=>n({action:y}))));for(const q in x){const S=x[q];if(we(S)&&!Ym(S)||Jn(S))r||(C&&jm(S)&&(we(S)?S.value=C[q]:$r(S,C[q])),a.state.value[e][q]=S);else if(typeof S=="function"){const $=y(S,q);x[q]=$,s.actions[q]=S}}return ct(T,x),ct(ce(T),x),Object.defineProperty(T,"$state",{get:()=>a.state.value[e],set:q=>{R(S=>{ct(S,q)})}}),a._p.forEach(q=>{ct(T,i.run(()=>q({store:T,app:a._a,pinia:a,options:s})))}),C&&r&&t.hydrate&&t.hydrate(T.$state,C),l=!0,u=!0,T}function Um(e,n,t){let a;const o=typeof n=="function";a=o?t:n;function r(i,s){const c=Jd();return i=i||(c?_n(Xl,null):null),i&&er(i),i=Kl,i._s.has(e)||(o?Ql(e,n,a,i):Wm(e,a,i)),i._s.get(e)}return r.$id=e,r}function Hm(e,n){if(e==null)return;let t=e;for(let a=0;a<n.length;a++){if(t===void 0||t[n[a]]===void 0)return;if(t===null||t[n[a]]===null)return null;t=t[n[a]]}return t}function Si(e,n,t){if(t.length===0)return n;const a=t[0];return t.length>1&&(n=Si(typeof e!="object"||e===null||!Object.prototype.hasOwnProperty.call(e,a)?Number.isInteger(Number(t[1]))?[]:{}:e[a],n,Array.prototype.slice.call(t,1))),Number.isInteger(Number(a))&&Array.isArray(e)?e.slice()[a]:Object.assign({},e,{[a]:n})}function Zl(e,n){if(e==null||n.length===0)return e;if(n.length===1){if(e==null)return e;if(Number.isInteger(n[0])&&Array.isArray(e))return Array.prototype.slice.call(e,0).splice(n[0],1);const t={};for(const a in e)t[a]=e[a];return delete t[n[0]],t}if(e[n[0]]==null){if(Number.isInteger(n[0])&&Array.isArray(e))return Array.prototype.concat.call([],e);const t={};for(const a in e)t[a]=e[a];return t}return Si(e,Zl(e[n[0]],Array.prototype.slice.call(n,1)),[n[0]])}function eu(e,n){return n.map(t=>t.split(".")).map(t=>[t,Hm(e,t)]).filter(t=>t[1]!==void 0).reduce((t,a)=>Si(t,a[1],a[0]),{})}function nu(e,n){return n.map(t=>t.split(".")).reduce((t,a)=>Zl(t,a),e)}function Ls(e,{storage:n,serializer:t,key:a,debug:o,pick:r,omit:i,beforeHydrate:s,afterHydrate:c},l,u=!0){try{u&&s?.(l);const d=n.getItem(a);if(d){const h=t.deserialize(d),_=r?eu(h,r):h,C=i?nu(_,i):_;e.$patch(C)}u&&c?.(l)}catch(d){o&&console.error("[pinia-plugin-persistedstate]",d)}}function Rs(e,{storage:n,serializer:t,key:a,debug:o,pick:r,omit:i}){try{const s=r?eu(e,r):e,c=i?nu(s,i):s,l=t.serialize(c);n.setItem(a,l)}catch(s){o&&console.error("[pinia-plugin-persistedstate]",s)}}function Vm(e,n){return typeof e=="function"?e(n):typeof e=="string"?e:n}function $m(e,n,t){const{pinia:a,store:o,options:{persist:r=t}}=e;if(!r)return;if(!(o.$id in a.state.value)){const s=a._s.get(o.$id.replace("__hot:",""));s&&Promise.resolve().then(()=>s.$persist());return}const i=(Array.isArray(r)?r:r===!0?[{}]:[r]).map(n);o.$hydrate=({runHooks:s=!0}={})=>{i.forEach(c=>{Ls(o,c,e,s)})},o.$persist=()=>{i.forEach(s=>{Rs(o.$state,s)})},i.forEach(s=>{Ls(o,s,e),o.$subscribe((c,l)=>Rs(l,s),{detached:!0})})}function Bm(e={}){return function(n){$m(n,t=>{const a=Vm(t.key,n.store.$id);return{key:(e.key?e.key:o=>o)(a),debug:t.debug??e.debug??!1,serializer:t.serializer??e.serializer??{serialize:o=>JSON.stringify(o),deserialize:o=>JSON.parse(o)},storage:t.storage??e.storage??window.localStorage,beforeHydrate:t.beforeHydrate??e.beforeHydrate,afterHydrate:t.afterHydrate??e.afterHydrate,pick:t.pick,omit:t.omit}},e.auto??!1)}}var Gm=Bm();const Do=typeof window<"u",gt=(e,n=!1)=>n?Symbol.for(e):Symbol(e),Xt=e=>typeof e=="number"&&isFinite(e),Jt=e=>Qm(e)==="[object RegExp]",zm=e=>Te(e)&&Object.keys(e).length===0,Tn=Object.assign,Km=Object.create,rn=(e=null)=>Km(e);let Ns;const qt=()=>Ns||(Ns=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:rn()),Xm=Object.prototype.hasOwnProperty;function Mo(e,n){return Xm.call(e,n)}const Ze=Array.isArray,mt=e=>typeof e=="function",ue=e=>typeof e=="string",ke=e=>typeof e=="boolean",en=e=>e!==null&&typeof e=="object",Jm=Object.prototype.toString,Qm=e=>Jm.call(e),Te=e=>{if(!en(e))return!1;const n=Object.getPrototypeOf(e);return n===null||n.constructor===Object};function tu(e){let n=e;return()=>++n}const Ga=e=>!en(e)||Ze(e);function ho(e,n){if(Ga(e)||Ga(n))throw new Error("Invalid value");const t=[{src:e,des:n}];for(;t.length;){const{src:a,des:o}=t.pop();Object.keys(a).forEach(r=>{r!=="__proto__"&&(en(a[r])&&!en(o[r])&&(o[r]=Array.isArray(a[r])?[]:rn()),Ga(o[r])||Ga(a[r])?o[r]=a[r]:t.push({src:a[r],des:o[r]}))})}}function Zm(e,n){typeof console<"u"&&(console.warn("[intlify] "+e),n&&console.warn(n.stack))}const eh=(e,n,t)=>nh({l:e,k:n,s:t}),nh=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),Je=e=>typeof e=="number"&&isFinite(e),th=e=>ou(e)==="[object Date]",xs=e=>ou(e)==="[object RegExp]",Oi=e=>ve(e)&&Object.keys(e).length===0,aa=Object.assign,ah=Object.create,nn=(e=null)=>ah(e);let Ds;const br=()=>Ds||(Ds=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:nn());function Ms(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function Fs(e){return e.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function oh(e){return e=e.replace(/(\w+)\s*=\s*"([^"]*)"/g,(a,o,r)=>`${o}="${Fs(r)}"`),e=e.replace(/(\w+)\s*=\s*'([^']*)'/g,(a,o,r)=>`${o}='${Fs(r)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(e)&&(e=e.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(a=>{e=e.replace(a,"$1javascript&#58;")}),e}const rh=Object.prototype.hasOwnProperty;function Tt(e,n){return rh.call(e,n)}const qn=Array.isArray,Me=e=>typeof e=="function",te=e=>typeof e=="string",Qe=e=>typeof e=="boolean",Fe=e=>e!==null&&typeof e=="object",ih=e=>Fe(e)&&Me(e.then)&&Me(e.catch),au=Object.prototype.toString,ou=e=>au.call(e),ve=e=>{if(!Fe(e))return!1;const n=Object.getPrototypeOf(e);return n===null||n.constructor===Object},sh=e=>e==null?"":qn(e)||ve(e)&&e.toString===au?JSON.stringify(e,null,2):String(e);function ch(e,n=""){return e.reduce((t,a,o)=>o===0?t+a:t+n+a,"")}function ru(e){let n=e;return()=>++n}function lh(e,n,t){return{line:e,column:n,offset:t}}function Fo(e,n,t){return{start:e,end:n}}const uh=/\{([0-9a-zA-Z]+)\}/g;function iu(e,...n){return n.length===1&&dh(n[0])&&(n=n[0]),(!n||!n.hasOwnProperty)&&(n={}),e.replace(uh,(t,a)=>n.hasOwnProperty(a)?n[a]:"")}const su=Object.assign,qs=e=>typeof e=="string",dh=e=>e!==null&&typeof e=="object";function cu(e,n=""){return e.reduce((t,a,o)=>o===0?t+a:t+n+a,"")}const Pi={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},fh={[Pi.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."};function mh(e,n,...t){const a=iu(fh[e],...t||[]),o={message:String(a),code:e};return n&&(o.location=n),o}const Q={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},hh={[Q.EXPECTED_TOKEN]:"Expected token: '{0}'",[Q.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[Q.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[Q.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[Q.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[Q.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[Q.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[Q.EMPTY_PLACEHOLDER]:"Empty placeholder",[Q.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[Q.INVALID_LINKED_FORMAT]:"Invalid linked format",[Q.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[Q.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[Q.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[Q.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[Q.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[Q.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function oa(e,n,t={}){const{domain:a,messages:o,args:r}=t,i=iu((o||hh)[e]||"",...r||[]),s=new SyntaxError(String(i));return s.code=e,n&&(s.location=n),s.domain=a,s}function gh(e){throw e}const Vn=" ",ph="\r",Ge=`
`,_h="\u2028",yh="\u2029";function vh(e){const n=e;let t=0,a=1,o=1,r=0;const i=x=>n[x]===ph&&n[x+1]===Ge,s=x=>n[x]===Ge,c=x=>n[x]===yh,l=x=>n[x]===_h,u=x=>i(x)||s(x)||c(x)||l(x),d=()=>t,h=()=>a,_=()=>o,C=()=>r,k=x=>i(x)||c(x)||l(x)?Ge:n[x],R=()=>k(t),P=()=>k(t+r);function E(){return r=0,u(t)&&(a++,o=0),i(t)&&t++,t++,o++,n[t]}function y(){return i(t+r)&&r++,r++,n[t+r]}function b(){t=0,a=1,o=1,r=0}function T(x=0){r=x}function O(){const x=t+r;for(;x!==t;)E();r=0}return{index:d,line:h,column:_,peekOffset:C,charAt:k,currentChar:R,currentPeek:P,next:E,peek:y,reset:b,resetPeek:T,skipToPeek:O}}const it=void 0,bh=".",js="'",kh="tokenizer";function wh(e,n={}){const t=n.location!==!1,a=vh(e),o=()=>a.index(),r=()=>lh(a.line(),a.column(),a.index()),i=r(),s=o(),c={currentType:14,offset:s,startLoc:i,endLoc:i,lastType:14,lastOffset:s,lastStartLoc:i,lastEndLoc:i,braceNest:0,inLinked:!1,text:""},l=()=>c,{onError:u}=n;function d(f,m,A,...L){const H=l();if(m.column+=A,m.offset+=A,u){const Y=t?Fo(H.startLoc,m):null,w=oa(f,Y,{domain:kh,args:L});u(w)}}function h(f,m,A){f.endLoc=r(),f.currentType=m;const L={type:m};return t&&(L.loc=Fo(f.startLoc,f.endLoc)),A!=null&&(L.value=A),L}const _=f=>h(f,14);function C(f,m){return f.currentChar()===m?(f.next(),m):(d(Q.EXPECTED_TOKEN,r(),0,m),"")}function k(f){let m="";for(;f.currentPeek()===Vn||f.currentPeek()===Ge;)m+=f.currentPeek(),f.peek();return m}function R(f){const m=k(f);return f.skipToPeek(),m}function P(f){if(f===it)return!1;const m=f.charCodeAt(0);return m>=97&&m<=122||m>=65&&m<=90||m===95}function E(f){if(f===it)return!1;const m=f.charCodeAt(0);return m>=48&&m<=57}function y(f,m){const{currentType:A}=m;if(A!==2)return!1;k(f);const L=P(f.currentPeek());return f.resetPeek(),L}function b(f,m){const{currentType:A}=m;if(A!==2)return!1;k(f);const L=f.currentPeek()==="-"?f.peek():f.currentPeek(),H=E(L);return f.resetPeek(),H}function T(f,m){const{currentType:A}=m;if(A!==2)return!1;k(f);const L=f.currentPeek()===js;return f.resetPeek(),L}function O(f,m){const{currentType:A}=m;if(A!==8)return!1;k(f);const L=f.currentPeek()===".";return f.resetPeek(),L}function x(f,m){const{currentType:A}=m;if(A!==9)return!1;k(f);const L=P(f.currentPeek());return f.resetPeek(),L}function q(f,m){const{currentType:A}=m;if(!(A===8||A===12))return!1;k(f);const L=f.currentPeek()===":";return f.resetPeek(),L}function S(f,m){const{currentType:A}=m;if(A!==10)return!1;const L=()=>{const Y=f.currentPeek();return Y==="{"?P(f.peek()):Y==="@"||Y==="%"||Y==="|"||Y===":"||Y==="."||Y===Vn||!Y?!1:Y===Ge?(f.peek(),L()):j(f,!1)},H=L();return f.resetPeek(),H}function $(f){k(f);const m=f.currentPeek()==="|";return f.resetPeek(),m}function X(f){const m=k(f),A=f.currentPeek()==="%"&&f.peek()==="{";return f.resetPeek(),{isModulo:A,hasSpace:m.length>0}}function j(f,m=!0){const A=(H=!1,Y="",w=!1)=>{const N=f.currentPeek();return N==="{"?Y==="%"?!1:H:N==="@"||!N?Y==="%"?!0:H:N==="%"?(f.peek(),A(H,"%",!0)):N==="|"?Y==="%"||w?!0:!(Y===Vn||Y===Ge):N===Vn?(f.peek(),A(!0,Vn,w)):N===Ge?(f.peek(),A(!0,Ge,w)):!0},L=A();return m&&f.resetPeek(),L}function J(f,m){const A=f.currentChar();return A===it?it:m(A)?(f.next(),A):null}function pe(f){const m=f.charCodeAt(0);return m>=97&&m<=122||m>=65&&m<=90||m>=48&&m<=57||m===95||m===36}function Se(f){return J(f,pe)}function oe(f){const m=f.charCodeAt(0);return m>=97&&m<=122||m>=65&&m<=90||m>=48&&m<=57||m===95||m===36||m===45}function Z(f){return J(f,oe)}function re(f){const m=f.charCodeAt(0);return m>=48&&m<=57}function Ve(f){return J(f,re)}function tn(f){const m=f.charCodeAt(0);return m>=48&&m<=57||m>=65&&m<=70||m>=97&&m<=102}function Ee(f){return J(f,tn)}function Ae(f){let m="",A="";for(;m=Ve(f);)A+=m;return A}function yn(f){R(f);const m=f.currentChar();return m!=="%"&&d(Q.EXPECTED_TOKEN,r(),0,m),f.next(),"%"}function ln(f){let m="";for(;;){const A=f.currentChar();if(A==="{"||A==="}"||A==="@"||A==="|"||!A)break;if(A==="%")if(j(f))m+=A,f.next();else break;else if(A===Vn||A===Ge)if(j(f))m+=A,f.next();else{if($(f))break;m+=A,f.next()}else m+=A,f.next()}return m}function un(f){R(f);let m="",A="";for(;m=Z(f);)A+=m;return f.currentChar()===it&&d(Q.UNTERMINATED_CLOSING_BRACE,r(),0),A}function xe(f){R(f);let m="";return f.currentChar()==="-"?(f.next(),m+=`-${Ae(f)}`):m+=Ae(f),f.currentChar()===it&&d(Q.UNTERMINATED_CLOSING_BRACE,r(),0),m}function M(f){return f!==js&&f!==Ge}function B(f){R(f),C(f,"'");let m="",A="";for(;m=J(f,M);)m==="\\"?A+=V(f):A+=m;const L=f.currentChar();return L===Ge||L===it?(d(Q.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,r(),0),L===Ge&&(f.next(),C(f,"'")),A):(C(f,"'"),A)}function V(f){const m=f.currentChar();switch(m){case"\\":case"'":return f.next(),`\\${m}`;case"u":return G(f,m,4);case"U":return G(f,m,6);default:return d(Q.UNKNOWN_ESCAPE_SEQUENCE,r(),0,m),""}}function G(f,m,A){C(f,m);let L="";for(let H=0;H<A;H++){const Y=Ee(f);if(!Y){d(Q.INVALID_UNICODE_ESCAPE_SEQUENCE,r(),0,`\\${m}${L}${f.currentChar()}`);break}L+=Y}return`\\${m}${L}`}function ae(f){return f!=="{"&&f!=="}"&&f!==Vn&&f!==Ge}function g(f){R(f);let m="",A="";for(;m=J(f,ae);)A+=m;return A}function v(f){let m="",A="";for(;m=Se(f);)A+=m;return A}function p(f){const m=A=>{const L=f.currentChar();return L==="{"||L==="%"||L==="@"||L==="|"||L==="("||L===")"||!L||L===Vn?A:(A+=L,f.next(),m(A))};return m("")}function I(f){R(f);const m=C(f,"|");return R(f),m}function F(f,m){let A=null;switch(f.currentChar()){case"{":return m.braceNest>=1&&d(Q.NOT_ALLOW_NEST_PLACEHOLDER,r(),0),f.next(),A=h(m,2,"{"),R(f),m.braceNest++,A;case"}":return m.braceNest>0&&m.currentType===2&&d(Q.EMPTY_PLACEHOLDER,r(),0),f.next(),A=h(m,3,"}"),m.braceNest--,m.braceNest>0&&R(f),m.inLinked&&m.braceNest===0&&(m.inLinked=!1),A;case"@":return m.braceNest>0&&d(Q.UNTERMINATED_CLOSING_BRACE,r(),0),A=D(f,m)||_(m),m.braceNest=0,A;default:{let H=!0,Y=!0,w=!0;if($(f))return m.braceNest>0&&d(Q.UNTERMINATED_CLOSING_BRACE,r(),0),A=h(m,1,I(f)),m.braceNest=0,m.inLinked=!1,A;if(m.braceNest>0&&(m.currentType===5||m.currentType===6||m.currentType===7))return d(Q.UNTERMINATED_CLOSING_BRACE,r(),0),m.braceNest=0,U(f,m);if(H=y(f,m))return A=h(m,5,un(f)),R(f),A;if(Y=b(f,m))return A=h(m,6,xe(f)),R(f),A;if(w=T(f,m))return A=h(m,7,B(f)),R(f),A;if(!H&&!Y&&!w)return A=h(m,13,g(f)),d(Q.INVALID_TOKEN_IN_PLACEHOLDER,r(),0,A.value),R(f),A;break}}return A}function D(f,m){const{currentType:A}=m;let L=null;const H=f.currentChar();switch((A===8||A===9||A===12||A===10)&&(H===Ge||H===Vn)&&d(Q.INVALID_LINKED_FORMAT,r(),0),H){case"@":return f.next(),L=h(m,8,"@"),m.inLinked=!0,L;case".":return R(f),f.next(),h(m,9,".");case":":return R(f),f.next(),h(m,10,":");default:return $(f)?(L=h(m,1,I(f)),m.braceNest=0,m.inLinked=!1,L):O(f,m)||q(f,m)?(R(f),D(f,m)):x(f,m)?(R(f),h(m,12,v(f))):S(f,m)?(R(f),H==="{"?F(f,m)||L:h(m,11,p(f))):(A===8&&d(Q.INVALID_LINKED_FORMAT,r(),0),m.braceNest=0,m.inLinked=!1,U(f,m))}}function U(f,m){let A={type:14};if(m.braceNest>0)return F(f,m)||_(m);if(m.inLinked)return D(f,m)||_(m);switch(f.currentChar()){case"{":return F(f,m)||_(m);case"}":return d(Q.UNBALANCED_CLOSING_BRACE,r(),0),f.next(),h(m,3,"}");case"@":return D(f,m)||_(m);default:{if($(f))return A=h(m,1,I(f)),m.braceNest=0,m.inLinked=!1,A;const{isModulo:H,hasSpace:Y}=X(f);if(H)return Y?h(m,0,ln(f)):h(m,4,yn(f));if(j(f))return h(m,0,ln(f));break}}return A}function W(){const{currentType:f,offset:m,startLoc:A,endLoc:L}=c;return c.lastType=f,c.lastOffset=m,c.lastStartLoc=A,c.lastEndLoc=L,c.offset=o(),c.startLoc=r(),a.currentChar()===it?h(c,14):U(a,c)}return{nextToken:W,currentOffset:o,currentPosition:r,context:l}}const Ch="parser",Eh=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function Ah(e,n,t){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const a=parseInt(n||t,16);return a<=55295||a>=57344?String.fromCodePoint(a):"�"}}}function Ih(e={}){const n=e.location!==!1,{onError:t,onWarn:a}=e;function o(y,b,T,O,...x){const q=y.currentPosition();if(q.offset+=O,q.column+=O,t){const S=n?Fo(T,q):null,$=oa(b,S,{domain:Ch,args:x});t($)}}function r(y,b,T,O,...x){const q=y.currentPosition();if(q.offset+=O,q.column+=O,a){const S=n?Fo(T,q):null;a(mh(b,S,x))}}function i(y,b,T){const O={type:y};return n&&(O.start=b,O.end=b,O.loc={start:T,end:T}),O}function s(y,b,T,O){n&&(y.end=b,y.loc&&(y.loc.end=T))}function c(y,b){const T=y.context(),O=i(3,T.offset,T.startLoc);return O.value=b,s(O,y.currentOffset(),y.currentPosition()),O}function l(y,b){const T=y.context(),{lastOffset:O,lastStartLoc:x}=T,q=i(5,O,x);return q.index=parseInt(b,10),y.nextToken(),s(q,y.currentOffset(),y.currentPosition()),q}function u(y,b,T){const O=y.context(),{lastOffset:x,lastStartLoc:q}=O,S=i(4,x,q);return S.key=b,T===!0&&(S.modulo=!0),y.nextToken(),s(S,y.currentOffset(),y.currentPosition()),S}function d(y,b){const T=y.context(),{lastOffset:O,lastStartLoc:x}=T,q=i(9,O,x);return q.value=b.replace(Eh,Ah),y.nextToken(),s(q,y.currentOffset(),y.currentPosition()),q}function h(y){const b=y.nextToken(),T=y.context(),{lastOffset:O,lastStartLoc:x}=T,q=i(8,O,x);return b.type!==12?(o(y,Q.UNEXPECTED_EMPTY_LINKED_MODIFIER,T.lastStartLoc,0),q.value="",s(q,O,x),{nextConsumeToken:b,node:q}):(b.value==null&&o(y,Q.UNEXPECTED_LEXICAL_ANALYSIS,T.lastStartLoc,0,Cn(b)),q.value=b.value||"",s(q,y.currentOffset(),y.currentPosition()),{node:q})}function _(y,b){const T=y.context(),O=i(7,T.offset,T.startLoc);return O.value=b,s(O,y.currentOffset(),y.currentPosition()),O}function C(y){const b=y.context(),T=i(6,b.offset,b.startLoc);let O=y.nextToken();if(O.type===9){const x=h(y);T.modifier=x.node,O=x.nextConsumeToken||y.nextToken()}switch(O.type!==10&&o(y,Q.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Cn(O)),O=y.nextToken(),O.type===2&&(O=y.nextToken()),O.type){case 11:O.value==null&&o(y,Q.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Cn(O)),T.key=_(y,O.value||"");break;case 5:O.value==null&&o(y,Q.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Cn(O)),T.key=u(y,O.value||"");break;case 6:O.value==null&&o(y,Q.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Cn(O)),T.key=l(y,O.value||"");break;case 7:O.value==null&&o(y,Q.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Cn(O)),T.key=d(y,O.value||"");break;default:{o(y,Q.UNEXPECTED_EMPTY_LINKED_KEY,b.lastStartLoc,0);const x=y.context(),q=i(7,x.offset,x.startLoc);return q.value="",s(q,x.offset,x.startLoc),T.key=q,s(T,x.offset,x.startLoc),{nextConsumeToken:O,node:T}}}return s(T,y.currentOffset(),y.currentPosition()),{node:T}}function k(y){const b=y.context(),T=b.currentType===1?y.currentOffset():b.offset,O=b.currentType===1?b.endLoc:b.startLoc,x=i(2,T,O);x.items=[];let q=null,S=null;do{const j=q||y.nextToken();switch(q=null,j.type){case 0:j.value==null&&o(y,Q.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Cn(j)),x.items.push(c(y,j.value||""));break;case 6:j.value==null&&o(y,Q.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Cn(j)),x.items.push(l(y,j.value||""));break;case 4:S=!0;break;case 5:j.value==null&&o(y,Q.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Cn(j)),x.items.push(u(y,j.value||"",!!S)),S&&(r(y,Pi.USE_MODULO_SYNTAX,b.lastStartLoc,0,Cn(j)),S=null);break;case 7:j.value==null&&o(y,Q.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,Cn(j)),x.items.push(d(y,j.value||""));break;case 8:{const J=C(y);x.items.push(J.node),q=J.nextConsumeToken||null;break}}}while(b.currentType!==14&&b.currentType!==1);const $=b.currentType===1?b.lastOffset:y.currentOffset(),X=b.currentType===1?b.lastEndLoc:y.currentPosition();return s(x,$,X),x}function R(y,b,T,O){const x=y.context();let q=O.items.length===0;const S=i(1,b,T);S.cases=[],S.cases.push(O);do{const $=k(y);q||(q=$.items.length===0),S.cases.push($)}while(x.currentType!==14);return q&&o(y,Q.MUST_HAVE_MESSAGES_IN_PLURAL,T,0),s(S,y.currentOffset(),y.currentPosition()),S}function P(y){const b=y.context(),{offset:T,startLoc:O}=b,x=k(y);return b.currentType===14?x:R(y,T,O,x)}function E(y){const b=wh(y,su({},e)),T=b.context(),O=i(0,T.offset,T.startLoc);return n&&O.loc&&(O.loc.source=y),O.body=P(b),e.onCacheKey&&(O.cacheKey=e.onCacheKey(y)),T.currentType!==14&&o(b,Q.UNEXPECTED_LEXICAL_ANALYSIS,T.lastStartLoc,0,y[T.offset]||""),s(O,b.currentOffset(),b.currentPosition()),O}return{parse:E}}function Cn(e){if(e.type===14)return"EOF";const n=(e.value||"").replace(/\r?\n/gu,"\\n");return n.length>10?n.slice(0,9)+"…":n}function Th(e,n={}){const t={ast:e,helpers:new Set};return{context:()=>t,helper:r=>(t.helpers.add(r),r)}}function Ys(e,n){for(let t=0;t<e.length;t++)Li(e[t],n)}function Li(e,n){switch(e.type){case 1:Ys(e.cases,n),n.helper("plural");break;case 2:Ys(e.items,n);break;case 6:{Li(e.key,n),n.helper("linked"),n.helper("type");break}case 5:n.helper("interpolate"),n.helper("list");break;case 4:n.helper("interpolate"),n.helper("named");break}}function Sh(e,n={}){const t=Th(e);t.helper("normalize"),e.body&&Li(e.body,t);const a=t.context();e.helpers=Array.from(a.helpers)}function Oh(e){const n=e.body;return n.type===2?Ws(n):n.cases.forEach(t=>Ws(t)),e}function Ws(e){if(e.items.length===1){const n=e.items[0];(n.type===3||n.type===9)&&(e.static=n.value,delete n.value)}else{const n=[];for(let t=0;t<e.items.length;t++){const a=e.items[t];if(!(a.type===3||a.type===9)||a.value==null)break;n.push(a.value)}if(n.length===e.items.length){e.static=cu(n);for(let t=0;t<e.items.length;t++){const a=e.items[t];(a.type===3||a.type===9)&&delete a.value}}}}const Ph="minifier";function jt(e){switch(e.t=e.type,e.type){case 0:{const n=e;jt(n.body),n.b=n.body,delete n.body;break}case 1:{const n=e,t=n.cases;for(let a=0;a<t.length;a++)jt(t[a]);n.c=t,delete n.cases;break}case 2:{const n=e,t=n.items;for(let a=0;a<t.length;a++)jt(t[a]);n.i=t,delete n.items,n.static&&(n.s=n.static,delete n.static);break}case 3:case 9:case 8:case 7:{const n=e;n.value&&(n.v=n.value,delete n.value);break}case 6:{const n=e;jt(n.key),n.k=n.key,delete n.key,n.modifier&&(jt(n.modifier),n.m=n.modifier,delete n.modifier);break}case 5:{const n=e;n.i=n.index,delete n.index;break}case 4:{const n=e;n.k=n.key,delete n.key;break}default:throw oa(Q.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:Ph,args:[e.type]})}delete e.type}const Lh="parser";function Rh(e,n){const{filename:t,breakLineCode:a,needIndent:o}=n,r=n.location!==!1,i={filename:t,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:a,needIndent:o,indentLevel:0};r&&e.loc&&(i.source=e.loc.source);const s=()=>i;function c(k,R){i.code+=k}function l(k,R=!0){const P=R?a:"";c(o?P+"  ".repeat(k):P)}function u(k=!0){const R=++i.indentLevel;k&&l(R)}function d(k=!0){const R=--i.indentLevel;k&&l(R)}function h(){l(i.indentLevel)}return{context:s,push:c,indent:u,deindent:d,newline:h,helper:k=>`_${k}`,needIndent:()=>i.needIndent}}function Nh(e,n){const{helper:t}=e;e.push(`${t("linked")}(`),Qt(e,n.key),n.modifier?(e.push(", "),Qt(e,n.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}function xh(e,n){const{helper:t,needIndent:a}=e;e.push(`${t("normalize")}([`),e.indent(a());const o=n.items.length;for(let r=0;r<o&&(Qt(e,n.items[r]),r!==o-1);r++)e.push(", ");e.deindent(a()),e.push("])")}function Dh(e,n){const{helper:t,needIndent:a}=e;if(n.cases.length>1){e.push(`${t("plural")}([`),e.indent(a());const o=n.cases.length;for(let r=0;r<o&&(Qt(e,n.cases[r]),r!==o-1);r++)e.push(", ");e.deindent(a()),e.push("])")}}function Mh(e,n){n.body?Qt(e,n.body):e.push("null")}function Qt(e,n){const{helper:t}=e;switch(n.type){case 0:Mh(e,n);break;case 1:Dh(e,n);break;case 2:xh(e,n);break;case 6:Nh(e,n);break;case 8:e.push(JSON.stringify(n.value),n);break;case 7:e.push(JSON.stringify(n.value),n);break;case 5:e.push(`${t("interpolate")}(${t("list")}(${n.index}))`,n);break;case 4:e.push(`${t("interpolate")}(${t("named")}(${JSON.stringify(n.key)}))`,n);break;case 9:e.push(JSON.stringify(n.value),n);break;case 3:e.push(JSON.stringify(n.value),n);break;default:throw oa(Q.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:Lh,args:[n.type]})}}const Fh=(e,n={})=>{const t=qs(n.mode)?n.mode:"normal",a=qs(n.filename)?n.filename:"message.intl";n.sourceMap;const o=n.breakLineCode!=null?n.breakLineCode:t==="arrow"?";":`
`,r=n.needIndent?n.needIndent:t!=="arrow",i=e.helpers||[],s=Rh(e,{filename:a,breakLineCode:o,needIndent:r});s.push(t==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),s.indent(r),i.length>0&&(s.push(`const { ${cu(i.map(u=>`${u}: _${u}`),", ")} } = ctx`),s.newline()),s.push("return "),Qt(s,e),s.deindent(r),s.push("}"),delete e.helpers;const{code:c,map:l}=s.context();return{ast:e,code:c,map:l?l.toJSON():void 0}};function qh(e,n={}){const t=su({},n),a=!!t.jit,o=!!t.minify,r=t.optimize==null?!0:t.optimize,s=Ih(t).parse(e);return a?(r&&Oh(s),o&&jt(s),{ast:s,code:""}):(Sh(s,t),Fh(s,t))}function jh(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(br().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(br().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(br().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function jn(e){return Fe(e)&&Ri(e)===0&&(Tt(e,"b")||Tt(e,"body"))}const lu=["b","body"];function Yh(e){return pt(e,lu)}const uu=["c","cases"];function Wh(e){return pt(e,uu,[])}const du=["s","static"];function Uh(e){return pt(e,du)}const fu=["i","items"];function Hh(e){return pt(e,fu,[])}const mu=["t","type"];function Ri(e){return pt(e,mu)}const hu=["v","value"];function za(e,n){const t=pt(e,hu);if(t!=null)return t;throw Oa(n)}const gu=["m","modifier"];function Vh(e){return pt(e,gu)}const pu=["k","key"];function $h(e){const n=pt(e,pu);if(n)return n;throw Oa(6)}function pt(e,n,t){for(let a=0;a<n.length;a++){const o=n[a];if(Tt(e,o)&&e[o]!=null)return e[o]}return t}const _u=[...lu,...uu,...du,...fu,...pu,...gu,...hu,...mu];function Oa(e){return new Error(`unhandled node type: ${e}`)}const _t=[];_t[0]={w:[0],i:[3,0],"[":[4],o:[7]};_t[1]={w:[1],".":[2],"[":[4],o:[7]};_t[2]={w:[2],i:[3,0],0:[3,0]};_t[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};_t[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};_t[5]={"'":[4,0],o:8,l:[5,0]};_t[6]={'"':[4,0],o:8,l:[6,0]};const Bh=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Gh(e){return Bh.test(e)}function zh(e){const n=e.charCodeAt(0),t=e.charCodeAt(e.length-1);return n===t&&(n===34||n===39)?e.slice(1,-1):e}function Kh(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Xh(e){const n=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:Gh(n)?zh(n):"*"+n}function Jh(e){const n=[];let t=-1,a=0,o=0,r,i,s,c,l,u,d;const h=[];h[0]=()=>{i===void 0?i=s:i+=s},h[1]=()=>{i!==void 0&&(n.push(i),i=void 0)},h[2]=()=>{h[0](),o++},h[3]=()=>{if(o>0)o--,a=4,h[0]();else{if(o=0,i===void 0||(i=Xh(i),i===!1))return!1;h[1]()}};function _(){const C=e[t+1];if(a===5&&C==="'"||a===6&&C==='"')return t++,s="\\"+C,h[0](),!0}for(;a!==null;)if(t++,r=e[t],!(r==="\\"&&_())){if(c=Kh(r),d=_t[a],l=d[c]||d.l||8,l===8||(a=l[0],l[1]!==void 0&&(u=h[l[1]],u&&(s=r,u()===!1))))return;if(a===7)return n}}const Us=new Map;function Qh(e,n){return Fe(e)?e[n]:null}function Zh(e,n){if(!Fe(e))return null;let t=Us.get(n);if(t||(t=Jh(n),t&&Us.set(n,t)),!t)return null;const a=t.length;let o=e,r=0;for(;r<a;){const i=t[r];if(_u.includes(i)&&jn(o))return null;const s=o[i];if(s===void 0||Me(o))return null;o=s,r++}return o}const eg=e=>e,ng=e=>"",tg="text",ag=e=>e.length===0?"":ch(e),og=sh;function Hs(e,n){return e=Math.abs(e),n===2?e?e>1?1:0:1:e?Math.min(e,2):0}function rg(e){const n=Je(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(Je(e.named.count)||Je(e.named.n))?Je(e.named.count)?e.named.count:Je(e.named.n)?e.named.n:n:n}function ig(e,n){n.count||(n.count=e),n.n||(n.n=e)}function sg(e={}){const n=e.locale,t=rg(e),a=Fe(e.pluralRules)&&te(n)&&Me(e.pluralRules[n])?e.pluralRules[n]:Hs,o=Fe(e.pluralRules)&&te(n)&&Me(e.pluralRules[n])?Hs:void 0,r=P=>P[a(t,P.length,o)],i=e.list||[],s=P=>i[P],c=e.named||nn();Je(e.pluralIndex)&&ig(t,c);const l=P=>c[P];function u(P){const E=Me(e.messages)?e.messages(P):Fe(e.messages)?e.messages[P]:!1;return E||(e.parent?e.parent.message(P):ng)}const d=P=>e.modifiers?e.modifiers[P]:eg,h=ve(e.processor)&&Me(e.processor.normalize)?e.processor.normalize:ag,_=ve(e.processor)&&Me(e.processor.interpolate)?e.processor.interpolate:og,C=ve(e.processor)&&te(e.processor.type)?e.processor.type:tg,R={list:s,named:l,plural:r,linked:(P,...E)=>{const[y,b]=E;let T="text",O="";E.length===1?Fe(y)?(O=y.modifier||O,T=y.type||T):te(y)&&(O=y||O):E.length===2&&(te(y)&&(O=y||O),te(b)&&(T=b||T));const x=u(P)(R),q=T==="vnode"&&qn(x)&&O?x[0]:x;return O?d(O)(q,T):q},message:u,type:C,interpolate:_,normalize:h,values:aa(nn(),i,c)};return R}let Pa=null;function cg(e){Pa=e}function lg(e,n,t){Pa&&Pa.emit("i18n:init",{timestamp:Date.now(),i18n:e,version:n,meta:t})}const ug=dg("function:translate");function dg(e){return n=>Pa&&Pa.emit(e,n)}const fg=Pi.__EXTEND_POINT__,Ct=ru(fg),mg={FALLBACK_TO_TRANSLATE:Ct(),CANNOT_FORMAT_NUMBER:Ct(),FALLBACK_TO_NUMBER_FORMAT:Ct(),CANNOT_FORMAT_DATE:Ct(),FALLBACK_TO_DATE_FORMAT:Ct(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:Ct(),__EXTEND_POINT__:Ct()},yu=Q.__EXTEND_POINT__,Et=ru(yu),An={INVALID_ARGUMENT:yu,INVALID_DATE_ARGUMENT:Et(),INVALID_ISO_DATE_ARGUMENT:Et(),NOT_SUPPORT_NON_STRING_MESSAGE:Et(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:Et(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:Et(),NOT_SUPPORT_LOCALE_TYPE:Et(),__EXTEND_POINT__:Et()};function Mn(e){return oa(e,null,void 0)}function Ni(e,n){return n.locale!=null?Vs(n.locale):Vs(e.locale)}let kr;function Vs(e){if(te(e))return e;if(Me(e)){if(e.resolvedOnce&&kr!=null)return kr;if(e.constructor.name==="Function"){const n=e();if(ih(n))throw Mn(An.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return kr=n}else throw Mn(An.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Mn(An.NOT_SUPPORT_LOCALE_TYPE)}function hg(e,n,t){return[...new Set([t,...qn(n)?n:Fe(n)?Object.keys(n):te(n)?[n]:[t]])]}function vu(e,n,t){const a=te(t)?t:Zt,o=e;o.__localeChainCache||(o.__localeChainCache=new Map);let r=o.__localeChainCache.get(a);if(!r){r=[];let i=[t];for(;qn(i);)i=$s(r,i,n);const s=qn(n)||!ve(n)?n:n.default?n.default:null;i=te(s)?[s]:s,qn(i)&&$s(r,i,!1),o.__localeChainCache.set(a,r)}return r}function $s(e,n,t){let a=!0;for(let o=0;o<n.length&&Qe(a);o++){const r=n[o];te(r)&&(a=gg(e,n[o],t))}return a}function gg(e,n,t){let a;const o=n.split("-");do{const r=o.join("-");a=pg(e,r,t),o.splice(-1,1)}while(o.length&&a===!0);return a}function pg(e,n,t){let a=!1;if(!e.includes(n)&&(a=!0,n)){a=n[n.length-1]!=="!";const o=n.replace(/!/g,"");e.push(o),(qn(t)||ve(t))&&t[o]&&(a=t[o])}return a}const _g="9.14.5",nr=-1,Zt="en-US",Bs="",Gs=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function yg(){return{upper:(e,n)=>n==="text"&&te(e)?e.toUpperCase():n==="vnode"&&Fe(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,n)=>n==="text"&&te(e)?e.toLowerCase():n==="vnode"&&Fe(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,n)=>n==="text"&&te(e)?Gs(e):n==="vnode"&&Fe(e)&&"__v_isVNode"in e?Gs(e.children):e}}let bu;function zs(e){bu=e}let ku;function vg(e){ku=e}let wu;function bg(e){wu=e}let Cu=null;const kg=e=>{Cu=e},wg=()=>Cu;let Eu=null;const Ks=e=>{Eu=e},Cg=()=>Eu;let Xs=0;function Eg(e={}){const n=Me(e.onWarn)?e.onWarn:Zm,t=te(e.version)?e.version:_g,a=te(e.locale)||Me(e.locale)?e.locale:Zt,o=Me(a)?Zt:a,r=qn(e.fallbackLocale)||ve(e.fallbackLocale)||te(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:o,i=ve(e.messages)?e.messages:wr(o),s=ve(e.datetimeFormats)?e.datetimeFormats:wr(o),c=ve(e.numberFormats)?e.numberFormats:wr(o),l=aa(nn(),e.modifiers,yg()),u=e.pluralRules||nn(),d=Me(e.missing)?e.missing:null,h=Qe(e.missingWarn)||xs(e.missingWarn)?e.missingWarn:!0,_=Qe(e.fallbackWarn)||xs(e.fallbackWarn)?e.fallbackWarn:!0,C=!!e.fallbackFormat,k=!!e.unresolving,R=Me(e.postTranslation)?e.postTranslation:null,P=ve(e.processor)?e.processor:null,E=Qe(e.warnHtmlMessage)?e.warnHtmlMessage:!0,y=!!e.escapeParameter,b=Me(e.messageCompiler)?e.messageCompiler:bu,T=Me(e.messageResolver)?e.messageResolver:ku||Qh,O=Me(e.localeFallbacker)?e.localeFallbacker:wu||hg,x=Fe(e.fallbackContext)?e.fallbackContext:void 0,q=e,S=Fe(q.__datetimeFormatters)?q.__datetimeFormatters:new Map,$=Fe(q.__numberFormatters)?q.__numberFormatters:new Map,X=Fe(q.__meta)?q.__meta:{};Xs++;const j={version:t,cid:Xs,locale:a,fallbackLocale:r,messages:i,modifiers:l,pluralRules:u,missing:d,missingWarn:h,fallbackWarn:_,fallbackFormat:C,unresolving:k,postTranslation:R,processor:P,warnHtmlMessage:E,escapeParameter:y,messageCompiler:b,messageResolver:T,localeFallbacker:O,fallbackContext:x,onWarn:n,__meta:X};return j.datetimeFormats=s,j.numberFormats=c,j.__datetimeFormatters=S,j.__numberFormatters=$,__INTLIFY_PROD_DEVTOOLS__&&lg(j,t,X),j}const wr=e=>({[e]:nn()});function xi(e,n,t,a,o){const{missing:r,onWarn:i}=e;if(r!==null){const s=r(e,t,n,o);return te(s)?s:n}else return n}function ca(e,n,t){const a=e;a.__localeChainCache=new Map,e.localeFallbacker(e,t,n)}function Ag(e,n){return e===n?!1:e.split("-")[0]===n.split("-")[0]}function Ig(e,n){const t=n.indexOf(e);if(t===-1)return!1;for(let a=t+1;a<n.length;a++)if(Ag(e,n[a]))return!0;return!1}function Cr(e){return t=>Tg(t,e)}function Tg(e,n){const t=Yh(n);if(t==null)throw Oa(0);if(Ri(t)===1){const r=Wh(t);return e.plural(r.reduce((i,s)=>[...i,Js(e,s)],[]))}else return Js(e,t)}function Js(e,n){const t=Uh(n);if(t!=null)return e.type==="text"?t:e.normalize([t]);{const a=Hh(n).reduce((o,r)=>[...o,Br(e,r)],[]);return e.normalize(a)}}function Br(e,n){const t=Ri(n);switch(t){case 3:return za(n,t);case 9:return za(n,t);case 4:{const a=n;if(Tt(a,"k")&&a.k)return e.interpolate(e.named(a.k));if(Tt(a,"key")&&a.key)return e.interpolate(e.named(a.key));throw Oa(t)}case 5:{const a=n;if(Tt(a,"i")&&Je(a.i))return e.interpolate(e.list(a.i));if(Tt(a,"index")&&Je(a.index))return e.interpolate(e.list(a.index));throw Oa(t)}case 6:{const a=n,o=Vh(a),r=$h(a);return e.linked(Br(e,r),o?Br(e,o):void 0,e.type)}case 7:return za(n,t);case 8:return za(n,t);default:throw new Error(`unhandled node on format message part: ${t}`)}}const Au=e=>e;let Wt=nn();function Iu(e,n={}){let t=!1;const a=n.onError||gh;return n.onError=o=>{t=!0,a(o)},{...qh(e,n),detectError:t}}const Sg=(e,n)=>{if(!te(e))throw Mn(An.NOT_SUPPORT_NON_STRING_MESSAGE);{Qe(n.warnHtmlMessage)&&n.warnHtmlMessage;const a=(n.onCacheKey||Au)(e),o=Wt[a];if(o)return o;const{code:r,detectError:i}=Iu(e,n),s=new Function(`return ${r}`)();return i?s:Wt[a]=s}};function Og(e,n){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&te(e)){Qe(n.warnHtmlMessage)&&n.warnHtmlMessage;const a=(n.onCacheKey||Au)(e),o=Wt[a];if(o)return o;const{ast:r,detectError:i}=Iu(e,{...n,location:!1,jit:!0}),s=Cr(r);return i?s:Wt[a]=s}else{const t=e.cacheKey;if(t){const a=Wt[t];return a||(Wt[t]=Cr(e))}else return Cr(e)}}const Qs=()=>"",kn=e=>Me(e);function Zs(e,...n){const{fallbackFormat:t,postTranslation:a,unresolving:o,messageCompiler:r,fallbackLocale:i,messages:s}=e,[c,l]=Gr(...n),u=Qe(l.missingWarn)?l.missingWarn:e.missingWarn,d=Qe(l.fallbackWarn)?l.fallbackWarn:e.fallbackWarn,h=Qe(l.escapeParameter)?l.escapeParameter:e.escapeParameter,_=!!l.resolvedMessage,C=te(l.default)||Qe(l.default)?Qe(l.default)?r?c:()=>c:l.default:t?r?c:()=>c:"",k=t||C!=="",R=Ni(e,l);h&&Pg(l);let[P,E,y]=_?[c,R,s[R]||nn()]:Tu(e,c,R,i,d,u),b=P,T=c;if(!_&&!(te(b)||jn(b)||kn(b))&&k&&(b=C,T=b),!_&&(!(te(b)||jn(b)||kn(b))||!te(E)))return o?nr:c;let O=!1;const x=()=>{O=!0},q=kn(b)?b:Su(e,c,E,b,T,x);if(O)return b;const S=Ng(e,E,y,l),$=sg(S),X=Lg(e,q,$);let j=a?a(X,c):X;if(h&&te(j)&&(j=oh(j)),__INTLIFY_PROD_DEVTOOLS__){const J={timestamp:Date.now(),key:te(c)?c:kn(b)?b.key:"",locale:E||(kn(b)?b.locale:""),format:te(b)?b:kn(b)?b.source:"",message:j};J.meta=aa({},e.__meta,wg()||{}),ug(J)}return j}function Pg(e){qn(e.list)?e.list=e.list.map(n=>te(n)?Ms(n):n):Fe(e.named)&&Object.keys(e.named).forEach(n=>{te(e.named[n])&&(e.named[n]=Ms(e.named[n]))})}function Tu(e,n,t,a,o,r){const{messages:i,onWarn:s,messageResolver:c,localeFallbacker:l}=e,u=l(e,a,t);let d=nn(),h,_=null;const C="translate";for(let k=0;k<u.length&&(h=u[k],d=i[h]||nn(),(_=c(d,n))===null&&(_=d[n]),!(te(_)||jn(_)||kn(_)));k++)if(!Ig(h,u)){const R=xi(e,n,h,r,C);R!==n&&(_=R)}return[_,h,d]}function Su(e,n,t,a,o,r){const{messageCompiler:i,warnHtmlMessage:s}=e;if(kn(a)){const l=a;return l.locale=l.locale||t,l.key=l.key||n,l}if(i==null){const l=(()=>a);return l.locale=t,l.key=n,l}const c=i(a,Rg(e,t,o,a,s,r));return c.locale=t,c.key=n,c.source=a,c}function Lg(e,n,t){return n(t)}function Gr(...e){const[n,t,a]=e,o=nn();if(!te(n)&&!Je(n)&&!kn(n)&&!jn(n))throw Mn(An.INVALID_ARGUMENT);const r=Je(n)?String(n):(kn(n),n);return Je(t)?o.plural=t:te(t)?o.default=t:ve(t)&&!Oi(t)?o.named=t:qn(t)&&(o.list=t),Je(a)?o.plural=a:te(a)?o.default=a:ve(a)&&aa(o,a),[r,o]}function Rg(e,n,t,a,o,r){return{locale:n,key:t,warnHtmlMessage:o,onError:i=>{throw r&&r(i),i},onCacheKey:i=>eh(n,t,i)}}function Ng(e,n,t,a){const{modifiers:o,pluralRules:r,messageResolver:i,fallbackLocale:s,fallbackWarn:c,missingWarn:l,fallbackContext:u}=e,h={locale:n,modifiers:o,pluralRules:r,messages:_=>{let C=i(t,_);if(C==null&&u){const[,,k]=Tu(u,_,n,s,c,l);C=i(k,_)}if(te(C)||jn(C)){let k=!1;const P=Su(e,_,n,C,_,()=>{k=!0});return k?Qs:P}else return kn(C)?C:Qs}};return e.processor&&(h.processor=e.processor),a.list&&(h.list=a.list),a.named&&(h.named=a.named),Je(a.plural)&&(h.pluralIndex=a.plural),h}function ec(e,...n){const{datetimeFormats:t,unresolving:a,fallbackLocale:o,onWarn:r,localeFallbacker:i}=e,{__datetimeFormatters:s}=e,[c,l,u,d]=zr(...n),h=Qe(u.missingWarn)?u.missingWarn:e.missingWarn;Qe(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn;const _=!!u.part,C=Ni(e,u),k=i(e,o,C);if(!te(c)||c==="")return new Intl.DateTimeFormat(C,d).format(l);let R={},P,E=null;const y="datetime format";for(let O=0;O<k.length&&(P=k[O],R=t[P]||{},E=R[c],!ve(E));O++)xi(e,c,P,h,y);if(!ve(E)||!te(P))return a?nr:c;let b=`${P}__${c}`;Oi(d)||(b=`${b}__${JSON.stringify(d)}`);let T=s.get(b);return T||(T=new Intl.DateTimeFormat(P,aa({},E,d)),s.set(b,T)),_?T.formatToParts(l):T.format(l)}const Ou=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function zr(...e){const[n,t,a,o]=e,r=nn();let i=nn(),s;if(te(n)){const c=n.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!c)throw Mn(An.INVALID_ISO_DATE_ARGUMENT);const l=c[3]?c[3].trim().startsWith("T")?`${c[1].trim()}${c[3].trim()}`:`${c[1].trim()}T${c[3].trim()}`:c[1].trim();s=new Date(l);try{s.toISOString()}catch{throw Mn(An.INVALID_ISO_DATE_ARGUMENT)}}else if(th(n)){if(isNaN(n.getTime()))throw Mn(An.INVALID_DATE_ARGUMENT);s=n}else if(Je(n))s=n;else throw Mn(An.INVALID_ARGUMENT);return te(t)?r.key=t:ve(t)&&Object.keys(t).forEach(c=>{Ou.includes(c)?i[c]=t[c]:r[c]=t[c]}),te(a)?r.locale=a:ve(a)&&(i=a),ve(o)&&(i=o),[r.key||"",s,r,i]}function nc(e,n,t){const a=e;for(const o in t){const r=`${n}__${o}`;a.__datetimeFormatters.has(r)&&a.__datetimeFormatters.delete(r)}}function tc(e,...n){const{numberFormats:t,unresolving:a,fallbackLocale:o,onWarn:r,localeFallbacker:i}=e,{__numberFormatters:s}=e,[c,l,u,d]=Kr(...n),h=Qe(u.missingWarn)?u.missingWarn:e.missingWarn;Qe(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn;const _=!!u.part,C=Ni(e,u),k=i(e,o,C);if(!te(c)||c==="")return new Intl.NumberFormat(C,d).format(l);let R={},P,E=null;const y="number format";for(let O=0;O<k.length&&(P=k[O],R=t[P]||{},E=R[c],!ve(E));O++)xi(e,c,P,h,y);if(!ve(E)||!te(P))return a?nr:c;let b=`${P}__${c}`;Oi(d)||(b=`${b}__${JSON.stringify(d)}`);let T=s.get(b);return T||(T=new Intl.NumberFormat(P,aa({},E,d)),s.set(b,T)),_?T.formatToParts(l):T.format(l)}const Pu=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Kr(...e){const[n,t,a,o]=e,r=nn();let i=nn();if(!Je(n))throw Mn(An.INVALID_ARGUMENT);const s=n;return te(t)?r.key=t:ve(t)&&Object.keys(t).forEach(c=>{Pu.includes(c)?i[c]=t[c]:r[c]=t[c]}),te(a)?r.locale=a:ve(a)&&(i=a),ve(o)&&(i=o),[r.key||"",s,r,i]}function ac(e,n,t){const a=e;for(const o in t){const r=`${n}__${o}`;a.__numberFormatters.has(r)&&a.__numberFormatters.delete(r)}}jh();const xg="9.14.5";function Dg(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(qt().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(qt().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(qt().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(qt().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(qt().__INTLIFY_PROD_DEVTOOLS__=!1)}const Mg=mg.__EXTEND_POINT__,$n=tu(Mg);$n(),$n(),$n(),$n(),$n(),$n(),$n(),$n(),$n();const Lu=An.__EXTEND_POINT__,an=tu(Lu),Re={UNEXPECTED_RETURN_TYPE:Lu,INVALID_ARGUMENT:an(),MUST_BE_CALL_SETUP_TOP:an(),NOT_INSTALLED:an(),NOT_AVAILABLE_IN_LEGACY_MODE:an(),REQUIRED_VALUE:an(),INVALID_VALUE:an(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:an(),NOT_INSTALLED_WITH_PROVIDE:an(),UNEXPECTED_ERROR:an(),NOT_COMPATIBLE_LEGACY_VUE_I18N:an(),BRIDGE_SUPPORT_VUE_2_ONLY:an(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:an(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:an(),__EXTEND_POINT__:an()};function qe(e,...n){return oa(e,null,void 0)}const Xr=gt("__translateVNode"),Jr=gt("__datetimeParts"),Qr=gt("__numberParts"),Ru=gt("__setPluralRules"),Nu=gt("__injectWithOption"),Zr=gt("__dispose");function La(e){if(!en(e)||jn(e))return e;for(const n in e)if(Mo(e,n))if(!n.includes("."))en(e[n])&&La(e[n]);else{const t=n.split("."),a=t.length-1;let o=e,r=!1;for(let i=0;i<a;i++){if(t[i]==="__proto__")throw new Error(`unsafe key: ${t[i]}`);if(t[i]in o||(o[t[i]]=rn()),!en(o[t[i]])){r=!0;break}o=o[t[i]]}if(r||(jn(o)?_u.includes(t[a])||delete e[n]:(o[t[a]]=e[n],delete e[n])),!jn(o)){const i=o[t[a]];en(i)&&La(i)}}return e}function tr(e,n){const{messages:t,__i18n:a,messageResolver:o,flatJson:r}=n,i=Te(t)?t:Ze(a)?rn():{[e]:rn()};if(Ze(a)&&a.forEach(s=>{if("locale"in s&&"resource"in s){const{locale:c,resource:l}=s;c?(i[c]=i[c]||rn(),ho(l,i[c])):ho(l,i)}else ue(s)&&ho(JSON.parse(s),i)}),o==null&&r)for(const s in i)Mo(i,s)&&La(i[s]);return i}function xu(e){return e.type}function Du(e,n,t){let a=en(n.messages)?n.messages:rn();"__i18nGlobal"in t&&(a=tr(e.locale.value,{messages:a,__i18n:t.__i18nGlobal}));const o=Object.keys(a);o.length&&o.forEach(r=>{e.mergeLocaleMessage(r,a[r])});{if(en(n.datetimeFormats)){const r=Object.keys(n.datetimeFormats);r.length&&r.forEach(i=>{e.mergeDateTimeFormat(i,n.datetimeFormats[i])})}if(en(n.numberFormats)){const r=Object.keys(n.numberFormats);r.length&&r.forEach(i=>{e.mergeNumberFormat(i,n.numberFormats[i])})}}}function oc(e){return le(ja,null,e,0)}const rc="__INTLIFY_META__",ic=()=>[],Fg=()=>!1;let sc=0;function cc(e){return((n,t,a,o)=>e(t,a,at()||void 0,o))}const qg=()=>{const e=at();let n=null;return e&&(n=xu(e)[rc])?{[rc]:n}:null};function Di(e={},n){const{__root:t,__injectWithOption:a}=e,o=t===void 0,r=e.flatJson,i=Do?Le:vi,s=!!e.translateExistCompatible;let c=ke(e.inheritLocale)?e.inheritLocale:!0;const l=i(t&&c?t.locale.value:ue(e.locale)?e.locale:Zt),u=i(t&&c?t.fallbackLocale.value:ue(e.fallbackLocale)||Ze(e.fallbackLocale)||Te(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:l.value),d=i(tr(l.value,e)),h=i(Te(e.datetimeFormats)?e.datetimeFormats:{[l.value]:{}}),_=i(Te(e.numberFormats)?e.numberFormats:{[l.value]:{}});let C=t?t.missingWarn:ke(e.missingWarn)||Jt(e.missingWarn)?e.missingWarn:!0,k=t?t.fallbackWarn:ke(e.fallbackWarn)||Jt(e.fallbackWarn)?e.fallbackWarn:!0,R=t?t.fallbackRoot:ke(e.fallbackRoot)?e.fallbackRoot:!0,P=!!e.fallbackFormat,E=mt(e.missing)?e.missing:null,y=mt(e.missing)?cc(e.missing):null,b=mt(e.postTranslation)?e.postTranslation:null,T=t?t.warnHtmlMessage:ke(e.warnHtmlMessage)?e.warnHtmlMessage:!0,O=!!e.escapeParameter;const x=t?t.modifiers:Te(e.modifiers)?e.modifiers:{};let q=e.pluralRules||t&&t.pluralRules,S;S=(()=>{o&&Ks(null);const w={version:xg,locale:l.value,fallbackLocale:u.value,messages:d.value,modifiers:x,pluralRules:q,missing:y===null?void 0:y,missingWarn:C,fallbackWarn:k,fallbackFormat:P,unresolving:!0,postTranslation:b===null?void 0:b,warnHtmlMessage:T,escapeParameter:O,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};w.datetimeFormats=h.value,w.numberFormats=_.value,w.__datetimeFormatters=Te(S)?S.__datetimeFormatters:void 0,w.__numberFormatters=Te(S)?S.__numberFormatters:void 0;const N=Eg(w);return o&&Ks(N),N})(),ca(S,l.value,u.value);function X(){return[l.value,u.value,d.value,h.value,_.value]}const j=ye({get:()=>l.value,set:w=>{l.value=w,S.locale=l.value}}),J=ye({get:()=>u.value,set:w=>{u.value=w,S.fallbackLocale=u.value,ca(S,l.value,w)}}),pe=ye(()=>d.value),Se=ye(()=>h.value),oe=ye(()=>_.value);function Z(){return mt(b)?b:null}function re(w){b=w,S.postTranslation=w}function Ve(){return E}function tn(w){w!==null&&(y=cc(w)),E=w,S.missing=y}const Ee=(w,N,z,ie,be,$e)=>{X();let je;try{__INTLIFY_PROD_DEVTOOLS__,o||(S.fallbackContext=t?Cg():void 0),je=w(S)}finally{__INTLIFY_PROD_DEVTOOLS__,o||(S.fallbackContext=void 0)}if(z!=="translate exists"&&Xt(je)&&je===nr||z==="translate exists"&&!je){const[yt,rr]=N();return t&&R?ie(t):be(yt)}else{if($e(je))return je;throw qe(Re.UNEXPECTED_RETURN_TYPE)}};function Ae(...w){return Ee(N=>Reflect.apply(Zs,null,[N,...w]),()=>Gr(...w),"translate",N=>Reflect.apply(N.t,N,[...w]),N=>N,N=>ue(N))}function yn(...w){const[N,z,ie]=w;if(ie&&!en(ie))throw qe(Re.INVALID_ARGUMENT);return Ae(N,z,Tn({resolvedMessage:!0},ie||{}))}function ln(...w){return Ee(N=>Reflect.apply(ec,null,[N,...w]),()=>zr(...w),"datetime format",N=>Reflect.apply(N.d,N,[...w]),()=>Bs,N=>ue(N))}function un(...w){return Ee(N=>Reflect.apply(tc,null,[N,...w]),()=>Kr(...w),"number format",N=>Reflect.apply(N.n,N,[...w]),()=>Bs,N=>ue(N))}function xe(w){return w.map(N=>ue(N)||Xt(N)||ke(N)?oc(String(N)):N)}const B={normalize:xe,interpolate:w=>w,type:"vnode"};function V(...w){return Ee(N=>{let z;const ie=N;try{ie.processor=B,z=Reflect.apply(Zs,null,[ie,...w])}finally{ie.processor=null}return z},()=>Gr(...w),"translate",N=>N[Xr](...w),N=>[oc(N)],N=>Ze(N))}function G(...w){return Ee(N=>Reflect.apply(tc,null,[N,...w]),()=>Kr(...w),"number format",N=>N[Qr](...w),ic,N=>ue(N)||Ze(N))}function ae(...w){return Ee(N=>Reflect.apply(ec,null,[N,...w]),()=>zr(...w),"datetime format",N=>N[Jr](...w),ic,N=>ue(N)||Ze(N))}function g(w){q=w,S.pluralRules=q}function v(w,N){return Ee(()=>{if(!w)return!1;const z=ue(N)?N:l.value,ie=F(z),be=S.messageResolver(ie,w);return s?be!=null:jn(be)||kn(be)||ue(be)},()=>[w],"translate exists",z=>Reflect.apply(z.te,z,[w,N]),Fg,z=>ke(z))}function p(w){let N=null;const z=vu(S,u.value,l.value);for(let ie=0;ie<z.length;ie++){const be=d.value[z[ie]]||{},$e=S.messageResolver(be,w);if($e!=null){N=$e;break}}return N}function I(w){const N=p(w);return N??(t?t.tm(w)||{}:{})}function F(w){return d.value[w]||{}}function D(w,N){if(r){const z={[w]:N};for(const ie in z)Mo(z,ie)&&La(z[ie]);N=z[w]}d.value[w]=N,S.messages=d.value}function U(w,N){d.value[w]=d.value[w]||{};const z={[w]:N};if(r)for(const ie in z)Mo(z,ie)&&La(z[ie]);N=z[w],ho(N,d.value[w]),S.messages=d.value}function W(w){return h.value[w]||{}}function f(w,N){h.value[w]=N,S.datetimeFormats=h.value,nc(S,w,N)}function m(w,N){h.value[w]=Tn(h.value[w]||{},N),S.datetimeFormats=h.value,nc(S,w,N)}function A(w){return _.value[w]||{}}function L(w,N){_.value[w]=N,S.numberFormats=_.value,ac(S,w,N)}function H(w,N){_.value[w]=Tn(_.value[w]||{},N),S.numberFormats=_.value,ac(S,w,N)}sc++,t&&Do&&(Qn(t.locale,w=>{c&&(l.value=w,S.locale=w,ca(S,l.value,u.value))}),Qn(t.fallbackLocale,w=>{c&&(u.value=w,S.fallbackLocale=w,ca(S,l.value,u.value))}));const Y={id:sc,locale:j,fallbackLocale:J,get inheritLocale(){return c},set inheritLocale(w){c=w,w&&t&&(l.value=t.locale.value,u.value=t.fallbackLocale.value,ca(S,l.value,u.value))},get availableLocales(){return Object.keys(d.value).sort()},messages:pe,get modifiers(){return x},get pluralRules(){return q||{}},get isGlobal(){return o},get missingWarn(){return C},set missingWarn(w){C=w,S.missingWarn=C},get fallbackWarn(){return k},set fallbackWarn(w){k=w,S.fallbackWarn=k},get fallbackRoot(){return R},set fallbackRoot(w){R=w},get fallbackFormat(){return P},set fallbackFormat(w){P=w,S.fallbackFormat=P},get warnHtmlMessage(){return T},set warnHtmlMessage(w){T=w,S.warnHtmlMessage=w},get escapeParameter(){return O},set escapeParameter(w){O=w,S.escapeParameter=w},t:Ae,getLocaleMessage:F,setLocaleMessage:D,mergeLocaleMessage:U,getPostTranslationHandler:Z,setPostTranslationHandler:re,getMissingHandler:Ve,setMissingHandler:tn,[Ru]:g};return Y.datetimeFormats=Se,Y.numberFormats=oe,Y.rt=yn,Y.te=v,Y.tm=I,Y.d=ln,Y.n=un,Y.getDateTimeFormat=W,Y.setDateTimeFormat=f,Y.mergeDateTimeFormat=m,Y.getNumberFormat=A,Y.setNumberFormat=L,Y.mergeNumberFormat=H,Y[Nu]=a,Y[Xr]=V,Y[Jr]=ae,Y[Qr]=G,Y}function jg(e){const n=ue(e.locale)?e.locale:Zt,t=ue(e.fallbackLocale)||Ze(e.fallbackLocale)||Te(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:n,a=mt(e.missing)?e.missing:void 0,o=ke(e.silentTranslationWarn)||Jt(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,r=ke(e.silentFallbackWarn)||Jt(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,i=ke(e.fallbackRoot)?e.fallbackRoot:!0,s=!!e.formatFallbackMessages,c=Te(e.modifiers)?e.modifiers:{},l=e.pluralizationRules,u=mt(e.postTranslation)?e.postTranslation:void 0,d=ue(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,h=!!e.escapeParameterHtml,_=ke(e.sync)?e.sync:!0;let C=e.messages;if(Te(e.sharedMessages)){const O=e.sharedMessages;C=Object.keys(O).reduce((q,S)=>{const $=q[S]||(q[S]={});return Tn($,O[S]),q},C||{})}const{__i18n:k,__root:R,__injectWithOption:P}=e,E=e.datetimeFormats,y=e.numberFormats,b=e.flatJson,T=e.translateExistCompatible;return{locale:n,fallbackLocale:t,messages:C,flatJson:b,datetimeFormats:E,numberFormats:y,missing:a,missingWarn:o,fallbackWarn:r,fallbackRoot:i,fallbackFormat:s,modifiers:c,pluralRules:l,postTranslation:u,warnHtmlMessage:d,escapeParameter:h,messageResolver:e.messageResolver,inheritLocale:_,translateExistCompatible:T,__i18n:k,__root:R,__injectWithOption:P}}function ei(e={},n){{const t=Di(jg(e)),{__extender:a}=e,o={id:t.id,get locale(){return t.locale.value},set locale(r){t.locale.value=r},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(r){t.fallbackLocale.value=r},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(r){},get missing(){return t.getMissingHandler()},set missing(r){t.setMissingHandler(r)},get silentTranslationWarn(){return ke(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(r){t.missingWarn=ke(r)?!r:r},get silentFallbackWarn(){return ke(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(r){t.fallbackWarn=ke(r)?!r:r},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(r){t.fallbackFormat=r},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(r){t.setPostTranslationHandler(r)},get sync(){return t.inheritLocale},set sync(r){t.inheritLocale=r},get warnHtmlInMessage(){return t.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){t.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(r){t.escapeParameter=r},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(r){},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t(...r){const[i,s,c]=r,l={};let u=null,d=null;if(!ue(i))throw qe(Re.INVALID_ARGUMENT);const h=i;return ue(s)?l.locale=s:Ze(s)?u=s:Te(s)&&(d=s),Ze(c)?u=c:Te(c)&&(d=c),Reflect.apply(t.t,t,[h,u||d||{},l])},rt(...r){return Reflect.apply(t.rt,t,[...r])},tc(...r){const[i,s,c]=r,l={plural:1};let u=null,d=null;if(!ue(i))throw qe(Re.INVALID_ARGUMENT);const h=i;return ue(s)?l.locale=s:Xt(s)?l.plural=s:Ze(s)?u=s:Te(s)&&(d=s),ue(c)?l.locale=c:Ze(c)?u=c:Te(c)&&(d=c),Reflect.apply(t.t,t,[h,u||d||{},l])},te(r,i){return t.te(r,i)},tm(r){return t.tm(r)},getLocaleMessage(r){return t.getLocaleMessage(r)},setLocaleMessage(r,i){t.setLocaleMessage(r,i)},mergeLocaleMessage(r,i){t.mergeLocaleMessage(r,i)},d(...r){return Reflect.apply(t.d,t,[...r])},getDateTimeFormat(r){return t.getDateTimeFormat(r)},setDateTimeFormat(r,i){t.setDateTimeFormat(r,i)},mergeDateTimeFormat(r,i){t.mergeDateTimeFormat(r,i)},n(...r){return Reflect.apply(t.n,t,[...r])},getNumberFormat(r){return t.getNumberFormat(r)},setNumberFormat(r,i){t.setNumberFormat(r,i)},mergeNumberFormat(r,i){t.mergeNumberFormat(r,i)},getChoiceIndex(r,i){return-1}};return o.__extender=a,o}}const Mi={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function Yg({slots:e},n){return n.length===1&&n[0]==="default"?(e.default?e.default():[]).reduce((a,o)=>[...a,...o.type===fn?o.children:[o]],[]):n.reduce((t,a)=>{const o=e[a];return o&&(t[a]=o()),t},rn())}function Mu(e){return fn}const Wg=Wn({name:"i18n-t",props:Tn({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>Xt(e)||!isNaN(e)}},Mi),setup(e,n){const{slots:t,attrs:a}=n,o=e.i18n||xt({useScope:e.scope,__useComponent:!0});return()=>{const r=Object.keys(t).filter(d=>d!=="_"),i=rn();e.locale&&(i.locale=e.locale),e.plural!==void 0&&(i.plural=ue(e.plural)?+e.plural:e.plural);const s=Yg(n,r),c=o[Xr](e.keypath,s,i),l=Tn(rn(),a),u=ue(e.tag)||en(e.tag)?e.tag:Mu();return Wa(u,l,c)}}}),lc=Wg;function Ug(e){return Ze(e)&&!ue(e[0])}function Fu(e,n,t,a){const{slots:o,attrs:r}=n;return()=>{const i={part:!0};let s=rn();e.locale&&(i.locale=e.locale),ue(e.format)?i.key=e.format:en(e.format)&&(ue(e.format.key)&&(i.key=e.format.key),s=Object.keys(e.format).reduce((h,_)=>t.includes(_)?Tn(rn(),h,{[_]:e.format[_]}):h,rn()));const c=a(e.value,i,s);let l=[i.key];Ze(c)?l=c.map((h,_)=>{const C=o[h.type],k=C?C({[h.type]:h.value,index:_,parts:c}):[h.value];return Ug(k)&&(k[0].key=`${h.type}-${_}`),k}):ue(c)&&(l=[c]);const u=Tn(rn(),r),d=ue(e.tag)||en(e.tag)?e.tag:Mu();return Wa(d,u,l)}}const Hg=Wn({name:"i18n-n",props:Tn({value:{type:Number,required:!0},format:{type:[String,Object]}},Mi),setup(e,n){const t=e.i18n||xt({useScope:e.scope,__useComponent:!0});return Fu(e,n,Pu,(...a)=>t[Qr](...a))}}),uc=Hg,Vg=Wn({name:"i18n-d",props:Tn({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Mi),setup(e,n){const t=e.i18n||xt({useScope:e.scope,__useComponent:!0});return Fu(e,n,Ou,(...a)=>t[Jr](...a))}}),dc=Vg;function $g(e,n){const t=e;if(e.mode==="composition")return t.__getInstance(n)||e.global;{const a=t.__getInstance(n);return a!=null?a.__composer:e.global.__composer}}function Bg(e){const n=i=>{const{instance:s,modifiers:c,value:l}=i;if(!s||!s.$)throw qe(Re.UNEXPECTED_ERROR);const u=$g(e,s.$),d=fc(l);return[Reflect.apply(u.t,u,[...mc(d)]),u]};return{created:(i,s)=>{const[c,l]=n(s);Do&&e.global===l&&(i.__i18nWatcher=Qn(l.locale,()=>{s.instance&&s.instance.$forceUpdate()})),i.__composer=l,i.textContent=c},unmounted:i=>{Do&&i.__i18nWatcher&&(i.__i18nWatcher(),i.__i18nWatcher=void 0,delete i.__i18nWatcher),i.__composer&&(i.__composer=void 0,delete i.__composer)},beforeUpdate:(i,{value:s})=>{if(i.__composer){const c=i.__composer,l=fc(s);i.textContent=Reflect.apply(c.t,c,[...mc(l)])}},getSSRProps:i=>{const[s]=n(i);return{textContent:s}}}}function fc(e){if(ue(e))return{path:e};if(Te(e)){if(!("path"in e))throw qe(Re.REQUIRED_VALUE,"path");return e}else throw qe(Re.INVALID_VALUE)}function mc(e){const{path:n,locale:t,args:a,choice:o,plural:r}=e,i={},s=a||{};return ue(t)&&(i.locale=t),Xt(o)&&(i.plural=o),Xt(r)&&(i.plural=r),[n,s,i]}function Gg(e,n,...t){const a=Te(t[0])?t[0]:{},o=!!a.useI18nComponentName;(!ke(a.globalInstall)||a.globalInstall)&&([o?"i18n":lc.name,"I18nT"].forEach(i=>e.component(i,lc)),[uc.name,"I18nN"].forEach(i=>e.component(i,uc)),[dc.name,"I18nD"].forEach(i=>e.component(i,dc))),e.directive("t",Bg(n))}function zg(e,n,t){return{beforeCreate(){const a=at();if(!a)throw qe(Re.UNEXPECTED_ERROR);const o=this.$options;if(o.i18n){const r=o.i18n;if(o.__i18n&&(r.__i18n=o.__i18n),r.__root=n,this===this.$root)this.$i18n=hc(e,r);else{r.__injectWithOption=!0,r.__extender=t.__vueI18nExtend,this.$i18n=ei(r);const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}}else if(o.__i18n)if(this===this.$root)this.$i18n=hc(e,o);else{this.$i18n=ei({__i18n:o.__i18n,__injectWithOption:!0,__extender:t.__vueI18nExtend,__root:n});const r=this.$i18n;r.__extender&&(r.__disposer=r.__extender(this.$i18n))}else this.$i18n=e;o.__i18nGlobal&&Du(n,o,o),this.$t=(...r)=>this.$i18n.t(...r),this.$rt=(...r)=>this.$i18n.rt(...r),this.$tc=(...r)=>this.$i18n.tc(...r),this.$te=(r,i)=>this.$i18n.te(r,i),this.$d=(...r)=>this.$i18n.d(...r),this.$n=(...r)=>this.$i18n.n(...r),this.$tm=r=>this.$i18n.tm(r),t.__setInstance(a,this.$i18n)},mounted(){},unmounted(){const a=at();if(!a)throw qe(Re.UNEXPECTED_ERROR);const o=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,o.__disposer&&(o.__disposer(),delete o.__disposer,delete o.__extender),t.__deleteInstance(a),delete this.$i18n}}}function hc(e,n){e.locale=n.locale||e.locale,e.fallbackLocale=n.fallbackLocale||e.fallbackLocale,e.missing=n.missing||e.missing,e.silentTranslationWarn=n.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=n.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=n.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=n.postTranslation||e.postTranslation,e.warnHtmlInMessage=n.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=n.escapeParameterHtml||e.escapeParameterHtml,e.sync=n.sync||e.sync,e.__composer[Ru](n.pluralizationRules||e.pluralizationRules);const t=tr(e.locale,{messages:n.messages,__i18n:n.__i18n});return Object.keys(t).forEach(a=>e.mergeLocaleMessage(a,t[a])),n.datetimeFormats&&Object.keys(n.datetimeFormats).forEach(a=>e.mergeDateTimeFormat(a,n.datetimeFormats[a])),n.numberFormats&&Object.keys(n.numberFormats).forEach(a=>e.mergeNumberFormat(a,n.numberFormats[a])),e}const Kg=gt("global-vue-i18n");function Xg(e={},n){const t=__VUE_I18N_LEGACY_API__&&ke(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,a=ke(e.globalInjection)?e.globalInjection:!0,o=__VUE_I18N_LEGACY_API__&&t?!!e.allowComposition:!0,r=new Map,[i,s]=Jg(e,t),c=gt("");function l(h){return r.get(h)||null}function u(h,_){r.set(h,_)}function d(h){r.delete(h)}{const h={get mode(){return __VUE_I18N_LEGACY_API__&&t?"legacy":"composition"},get allowComposition(){return o},async install(_,...C){if(_.__VUE_I18N_SYMBOL__=c,_.provide(_.__VUE_I18N_SYMBOL__,h),Te(C[0])){const P=C[0];h.__composerExtend=P.__composerExtend,h.__vueI18nExtend=P.__vueI18nExtend}let k=null;!t&&a&&(k=ip(_,h.global)),__VUE_I18N_FULL_INSTALL__&&Gg(_,h,...C),__VUE_I18N_LEGACY_API__&&t&&_.mixin(zg(s,s.__composer,h));const R=_.unmount;_.unmount=()=>{k&&k(),h.dispose(),R()}},get global(){return s},dispose(){i.stop()},__instances:r,__getInstance:l,__setInstance:u,__deleteInstance:d};return h}}function xt(e={}){const n=at();if(n==null)throw qe(Re.MUST_BE_CALL_SETUP_TOP);if(!n.isCE&&n.appContext.app!=null&&!n.appContext.app.__VUE_I18N_SYMBOL__)throw qe(Re.NOT_INSTALLED);const t=Qg(n),a=ep(t),o=xu(n),r=Zg(e,o);if(__VUE_I18N_LEGACY_API__&&t.mode==="legacy"&&!e.__useComponent){if(!t.allowComposition)throw qe(Re.NOT_AVAILABLE_IN_LEGACY_MODE);return op(n,r,a,e)}if(r==="global")return Du(a,e,o),a;if(r==="parent"){let c=np(t,n,e.__useComponent);return c==null&&(c=a),c}const i=t;let s=i.__getInstance(n);if(s==null){const c=Tn({},e);"__i18n"in o&&(c.__i18n=o.__i18n),a&&(c.__root=a),s=Di(c),i.__composerExtend&&(s[Zr]=i.__composerExtend(s)),ap(i,n,s),i.__setInstance(n,s)}return s}function Jg(e,n,t){const a=di();{const o=__VUE_I18N_LEGACY_API__&&n?a.run(()=>ei(e)):a.run(()=>Di(e));if(o==null)throw qe(Re.UNEXPECTED_ERROR);return[a,o]}}function Qg(e){{const n=_n(e.isCE?Kg:e.appContext.app.__VUE_I18N_SYMBOL__);if(!n)throw qe(e.isCE?Re.NOT_INSTALLED_WITH_PROVIDE:Re.UNEXPECTED_ERROR);return n}}function Zg(e,n){return zm(e)?"__i18n"in n?"local":"global":e.useScope?e.useScope:"local"}function ep(e){return e.mode==="composition"?e.global:e.global.__composer}function np(e,n,t=!1){let a=null;const o=n.root;let r=tp(n,t);for(;r!=null;){const i=e;if(e.mode==="composition")a=i.__getInstance(r);else if(__VUE_I18N_LEGACY_API__){const s=i.__getInstance(r);s!=null&&(a=s.__composer,t&&a&&!a[Nu]&&(a=null))}if(a!=null||o===r)break;r=r.parent}return a}function tp(e,n=!1){return e==null?null:n&&e.vnode.ctx||e.parent}function ap(e,n,t){qa(()=>{},n),Jo(()=>{const a=t;e.__deleteInstance(n);const o=a[Zr];o&&(o(),delete a[Zr])},n)}function op(e,n,t,a={}){const o=n==="local",r=vi(null);if(o&&e.proxy&&!(e.proxy.$options.i18n||e.proxy.$options.__i18n))throw qe(Re.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const i=ke(a.inheritLocale)?a.inheritLocale:!ue(a.locale),s=Le(!o||i?t.locale.value:ue(a.locale)?a.locale:Zt),c=Le(!o||i?t.fallbackLocale.value:ue(a.fallbackLocale)||Ze(a.fallbackLocale)||Te(a.fallbackLocale)||a.fallbackLocale===!1?a.fallbackLocale:s.value),l=Le(tr(s.value,a)),u=Le(Te(a.datetimeFormats)?a.datetimeFormats:{[s.value]:{}}),d=Le(Te(a.numberFormats)?a.numberFormats:{[s.value]:{}}),h=o?t.missingWarn:ke(a.missingWarn)||Jt(a.missingWarn)?a.missingWarn:!0,_=o?t.fallbackWarn:ke(a.fallbackWarn)||Jt(a.fallbackWarn)?a.fallbackWarn:!0,C=o?t.fallbackRoot:ke(a.fallbackRoot)?a.fallbackRoot:!0,k=!!a.fallbackFormat,R=mt(a.missing)?a.missing:null,P=mt(a.postTranslation)?a.postTranslation:null,E=o?t.warnHtmlMessage:ke(a.warnHtmlMessage)?a.warnHtmlMessage:!0,y=!!a.escapeParameter,b=o?t.modifiers:Te(a.modifiers)?a.modifiers:{},T=a.pluralRules||o&&t.pluralRules;function O(){return[s.value,c.value,l.value,u.value,d.value]}const x=ye({get:()=>r.value?r.value.locale.value:s.value,set:p=>{r.value&&(r.value.locale.value=p),s.value=p}}),q=ye({get:()=>r.value?r.value.fallbackLocale.value:c.value,set:p=>{r.value&&(r.value.fallbackLocale.value=p),c.value=p}}),S=ye(()=>r.value?r.value.messages.value:l.value),$=ye(()=>u.value),X=ye(()=>d.value);function j(){return r.value?r.value.getPostTranslationHandler():P}function J(p){r.value&&r.value.setPostTranslationHandler(p)}function pe(){return r.value?r.value.getMissingHandler():R}function Se(p){r.value&&r.value.setMissingHandler(p)}function oe(p){return O(),p()}function Z(...p){return r.value?oe(()=>Reflect.apply(r.value.t,null,[...p])):oe(()=>"")}function re(...p){return r.value?Reflect.apply(r.value.rt,null,[...p]):""}function Ve(...p){return r.value?oe(()=>Reflect.apply(r.value.d,null,[...p])):oe(()=>"")}function tn(...p){return r.value?oe(()=>Reflect.apply(r.value.n,null,[...p])):oe(()=>"")}function Ee(p){return r.value?r.value.tm(p):{}}function Ae(p,I){return r.value?r.value.te(p,I):!1}function yn(p){return r.value?r.value.getLocaleMessage(p):{}}function ln(p,I){r.value&&(r.value.setLocaleMessage(p,I),l.value[p]=I)}function un(p,I){r.value&&r.value.mergeLocaleMessage(p,I)}function xe(p){return r.value?r.value.getDateTimeFormat(p):{}}function M(p,I){r.value&&(r.value.setDateTimeFormat(p,I),u.value[p]=I)}function B(p,I){r.value&&r.value.mergeDateTimeFormat(p,I)}function V(p){return r.value?r.value.getNumberFormat(p):{}}function G(p,I){r.value&&(r.value.setNumberFormat(p,I),d.value[p]=I)}function ae(p,I){r.value&&r.value.mergeNumberFormat(p,I)}const g={get id(){return r.value?r.value.id:-1},locale:x,fallbackLocale:q,messages:S,datetimeFormats:$,numberFormats:X,get inheritLocale(){return r.value?r.value.inheritLocale:i},set inheritLocale(p){r.value&&(r.value.inheritLocale=p)},get availableLocales(){return r.value?r.value.availableLocales:Object.keys(l.value)},get modifiers(){return r.value?r.value.modifiers:b},get pluralRules(){return r.value?r.value.pluralRules:T},get isGlobal(){return r.value?r.value.isGlobal:!1},get missingWarn(){return r.value?r.value.missingWarn:h},set missingWarn(p){r.value&&(r.value.missingWarn=p)},get fallbackWarn(){return r.value?r.value.fallbackWarn:_},set fallbackWarn(p){r.value&&(r.value.missingWarn=p)},get fallbackRoot(){return r.value?r.value.fallbackRoot:C},set fallbackRoot(p){r.value&&(r.value.fallbackRoot=p)},get fallbackFormat(){return r.value?r.value.fallbackFormat:k},set fallbackFormat(p){r.value&&(r.value.fallbackFormat=p)},get warnHtmlMessage(){return r.value?r.value.warnHtmlMessage:E},set warnHtmlMessage(p){r.value&&(r.value.warnHtmlMessage=p)},get escapeParameter(){return r.value?r.value.escapeParameter:y},set escapeParameter(p){r.value&&(r.value.escapeParameter=p)},t:Z,getPostTranslationHandler:j,setPostTranslationHandler:J,getMissingHandler:pe,setMissingHandler:Se,rt:re,d:Ve,n:tn,tm:Ee,te:Ae,getLocaleMessage:yn,setLocaleMessage:ln,mergeLocaleMessage:un,getDateTimeFormat:xe,setDateTimeFormat:M,mergeDateTimeFormat:B,getNumberFormat:V,setNumberFormat:G,mergeNumberFormat:ae};function v(p){p.locale.value=s.value,p.fallbackLocale.value=c.value,Object.keys(l.value).forEach(I=>{p.mergeLocaleMessage(I,l.value[I])}),Object.keys(u.value).forEach(I=>{p.mergeDateTimeFormat(I,u.value[I])}),Object.keys(d.value).forEach(I=>{p.mergeNumberFormat(I,d.value[I])}),p.escapeParameter=y,p.fallbackFormat=k,p.fallbackRoot=C,p.fallbackWarn=_,p.missingWarn=h,p.warnHtmlMessage=E}return wl(()=>{if(e.proxy==null||e.proxy.$i18n==null)throw qe(Re.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const p=r.value=e.proxy.$i18n.__composer;n==="global"?(s.value=p.locale.value,c.value=p.fallbackLocale.value,l.value=p.messages.value,u.value=p.datetimeFormats.value,d.value=p.numberFormats.value):o&&v(p)}),g}const rp=["locale","fallbackLocale","availableLocales"],gc=["t","rt","d","n","tm","te"];function ip(e,n){const t=Object.create(null);return rp.forEach(o=>{const r=Object.getOwnPropertyDescriptor(n,o);if(!r)throw qe(Re.UNEXPECTED_ERROR);const i=we(r.value)?{get(){return r.value.value},set(s){r.value.value=s}}:{get(){return r.get&&r.get()}};Object.defineProperty(t,o,i)}),e.config.globalProperties.$i18n=t,gc.forEach(o=>{const r=Object.getOwnPropertyDescriptor(n,o);if(!r||!r.value)throw qe(Re.UNEXPECTED_ERROR);Object.defineProperty(e.config.globalProperties,`$${o}`,r)}),()=>{delete e.config.globalProperties.$i18n,gc.forEach(o=>{delete e.config.globalProperties[`$${o}`]})}}Dg();__INTLIFY_JIT_COMPILATION__?zs(Og):zs(Sg);vg(Zh);bg(vu);if(__INTLIFY_PROD_DEVTOOLS__){const e=qt();e.__INTLIFY__=!0,cg(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const sp="modulepreload",cp=function(e){return"/dnd-character-create/"+e},pc={},he=function(n,t,a){let o=Promise.resolve();if(t&&t.length>0){let c=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=i?.nonce||i?.getAttribute("nonce");o=c(t.map(l=>{if(l=cp(l),l in pc)return;pc[l]=!0;const u=l.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":sp,u||(h.as="script"),h.crossOrigin="",h.href=l,s&&h.setAttribute("nonce",s),document.head.appendChild(h),u)return new Promise((_,C)=>{h.addEventListener("load",_),h.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return o.then(i=>{for(const s of i||[])s.status==="rejected"&&r(s.reason);return n().catch(r)})},lp=["en","zh"],Fi=navigator.language.startsWith("zh")?"zh":"en",qu=he(()=>import("./en-D492HDwI.js"),[]).then(e=>e.default),up=Fi==="zh"?he(()=>import("./zh-DF9U4-cp.js"),[]).then(e=>e.default):qu,St=Xg({legacy:!1,locale:Fi,fallbackLocale:"en",messages:{},missingWarn:!1,fallbackWarn:!1});async function dp(){const[e,n]=await Promise.all([qu,up]);St.global.setLocaleMessage("en",e),St.global.setLocaleMessage(Fi,n),St.global.missingWarn=!0,St.global.fallbackWarn=!0}async function fp(e){if(St.global.availableLocales.includes(e))return;const n=lp.includes(e)?e:"en",t=n==="zh"?(await he(async()=>{const{default:a}=await import("./zh-DF9U4-cp.js");return{default:a}},[])).default:(await he(async()=>{const{default:a}=await import("./en-D492HDwI.js");return{default:a}},[])).default;St.global.setLocaleMessage(n,t)}const mp={class:"relative"},hp=["aria-expanded","aria-label"],gp=["aria-label"],pp=["aria-selected","onClick"],_c=Wn({__name:"LanguageSwitcher",setup(e){const{locale:n}=xt(),t=Le(!1),a=[{code:"en",label:"English",flag:"EN"},{code:"zh",label:"中文",flag:"中"}];async function o(i){await fp(i),n.value=i,t.value=!1}function r(){setTimeout(()=>{t.value=!1},150)}return(i,s)=>(Xe(),on("div",mp,[se("button",{onClick:s[0]||(s[0]=c=>t.value=!t.value),onBlur:r,class:"flex items-center gap-1 px-2 py-1 rounded bg-stone-700 hover:bg-stone-600 text-sm font-medium text-stone-200 transition-colors cursor-pointer","aria-expanded":t.value,"aria-haspopup":"listbox","aria-label":ee(n)==="zh"?"切换语言":"Change language"},[En(Pe(a.find(c=>c.code===ee(n))?.flag??"EN")+" ",1),s[1]||(s[1]=se("svg",{class:"w-3 h-3 ml-0.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},[se("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M19 9l-7 7-7-7"})],-1))],40,hp),t.value?(Xe(),on("ul",{key:0,role:"listbox","aria-label":ee(n)==="zh"?"可用语言":"Available languages",class:"absolute right-0 mt-1 bg-stone-700 border border-stone-600 rounded shadow-lg z-50 min-w-[140px] py-1"},[(Xe(),on(fn,null,_f(a,c=>se("li",{key:c.code,role:"option","aria-selected":ee(n)===c.code,onClick:l=>o(c.code),class:Bo(["px-3 py-1.5 text-sm cursor-pointer transition-colors",ee(n)===c.code?"text-amber-400 bg-stone-600":"text-stone-200 hover:bg-stone-600"])},Pe(c.flag)+" "+Pe(c.label),11,pp)),64))],8,gp)):Ii("",!0)]))}}),_p=Um("app",()=>{const e=Le(navigator.language.startsWith("zh")?"zh":"en"),n=Le(0),t=Le(8),a=Le("auto");function o(u){e.value=u}function r(u){a.value=u}function i(u){n.value=u}function s(){n.value<t.value-1&&n.value++}function c(){n.value>0&&n.value--}function l(){n.value=0}return{locale:e,currentStep:n,totalSteps:t,theme:a,setLocale:o,setTheme:r,setStep:i,nextStep:s,prevStep:c,resetSteps:l}},{persist:{pick:["locale","theme"]}});function ju(){const e=_p(),n=Le(!0),t=typeof window<"u"?window.matchMedia("(prefers-color-scheme: dark)"):null;if(t){n.value=t.matches;const s=c=>{n.value=c.matches};t.addEventListener("change",s),Jo(()=>t.removeEventListener("change",s))}const a=ye(()=>e.theme==="auto"?n.value?"dark":"light":e.theme),o=ye(()=>a.value==="dark");ef(()=>{typeof document<"u"&&document.documentElement.setAttribute("data-theme",a.value)});function r(){const s=["dark","light","auto"],c=s.indexOf(e.theme),l=s[(c+1)%s.length];e.setTheme(l)}function i(s){e.setTheme(s)}return{theme:ye(()=>e.theme),effectiveTheme:a,isDark:o,toggleTheme:r,setTheme:i}}const yp=["aria-label","title"],vp={key:0,class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},bp={key:1,class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},kp={key:2,class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},yc=Wn({__name:"ThemeToggle",setup(e){const{t:n}=xt(),{theme:t,effectiveTheme:a,toggleTheme:o}=ju();return(r,i)=>(Xe(),on("button",{onClick:i[0]||(i[0]=(...s)=>ee(o)&&ee(o)(...s)),class:"flex items-center justify-center w-8 h-8 rounded bg-stone-700 hover:bg-stone-600 text-stone-200 transition-colors cursor-pointer","aria-label":ee(n)("theme.toggle"),title:ee(t)==="auto"?ee(n)("theme.auto"):ee(t)==="light"?ee(n)("theme.light"):ee(n)("theme.dark")},[ee(a)==="light"?(Xe(),on("svg",vp,[...i[1]||(i[1]=[se("circle",{cx:"12",cy:"12",r:"5","stroke-width":"2"},null,-1),se("path",{"stroke-linecap":"round","stroke-width":"2",d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"},null,-1)])])):ee(t)==="dark"?(Xe(),on("svg",bp,[...i[2]||(i[2]=[se("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"},null,-1)])])):(Xe(),on("svg",kp,[...i[3]||(i[3]=[se("circle",{cx:"12",cy:"12",r:"9","stroke-width":"2"},null,-1),se("path",{d:"M12 3a9 9 0 010 18",fill:"currentColor",stroke:"none"},null,-1)])]))],8,yp))}}),wp={class:"bg-stone-800 border-b border-amber-700/30 shadow-lg",role:"banner"},Cp={class:"container mx-auto px-4 py-3 flex items-center justify-between"},Ep={class:"text-xl font-bold text-amber-500 leading-tight font-gothic"},Ap=["aria-expanded","aria-label"],Ip={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},Tp={key:0,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},Sp={key:1,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},Op=["aria-label"],Pp=["aria-label"],Lp={class:"flex items-center gap-3"},Rp=Wn({__name:"AppHeader",setup(e){const{t:n}=xt(),t=Le(!1);function a(){t.value=!1}return(o,r)=>{const i=Mr("router-link");return Xe(),on("header",wp,[se("div",Cp,[le(i,{to:"/",class:"flex items-center gap-3 no-underline","aria-label":ee(n)("app.title")},{default:Nn(()=>[r[1]||(r[1]=se("span",{class:"text-3xl","aria-hidden":"true"},"⚔️",-1)),se("div",null,[se("h1",Ep,Pe(ee(n)("app.title")),1)])]),_:1},8,["aria-label"]),se("button",{class:"sm:hidden p-2 text-stone-300 hover:text-amber-400 cursor-pointer",onClick:r[0]||(r[0]=s=>t.value=!t.value),"aria-expanded":t.value,"aria-controls":"main-nav","aria-label":t.value?ee(n)("a11y.closeMenu"):ee(n)("a11y.openMenu")},[(Xe(),on("svg",Ip,[t.value?(Xe(),on("path",Sp)):(Xe(),on("path",Tp))]))],8,Ap),se("nav",{id:"main-nav",class:"hidden sm:flex items-center gap-4",role:"navigation","aria-label":ee(n)("nav.home")},[le(i,{to:"/",class:"text-stone-300 hover:text-amber-400 transition-colors text-sm"},{default:Nn(()=>[En(Pe(ee(n)("nav.newCharacter")),1)]),_:1}),le(i,{to:"/characters",class:"text-stone-300 hover:text-amber-400 transition-colors text-sm"},{default:Nn(()=>[En(Pe(ee(n)("nav.characters")),1)]),_:1}),le(i,{to:"/blog",class:"text-stone-300 hover:text-amber-400 transition-colors text-sm"},{default:Nn(()=>[En(Pe(ee(n)("nav.blog")),1)]),_:1}),le(yc),le(_c)],8,Op)]),t.value?(Xe(),on("nav",{key:0,class:"sm:hidden border-t border-stone-700 px-4 py-3 flex flex-col gap-3",role:"navigation","aria-label":ee(n)("nav.home")},[le(i,{to:"/",onClick:a,class:"text-stone-300 hover:text-amber-400 text-sm no-underline"},{default:Nn(()=>[En(Pe(ee(n)("nav.newCharacter")),1)]),_:1}),le(i,{to:"/characters",onClick:a,class:"text-stone-300 hover:text-amber-400 text-sm no-underline"},{default:Nn(()=>[En(Pe(ee(n)("nav.characters")),1)]),_:1}),le(i,{to:"/blog",onClick:a,class:"text-stone-300 hover:text-amber-400 text-sm no-underline"},{default:Nn(()=>[En(Pe(ee(n)("nav.blog")),1)]),_:1}),se("div",Lp,[le(yc),le(_c)])],8,Pp)):Ii("",!0)])}}}),Np={class:"min-h-screen bg-stone-900 text-stone-100 flex flex-col"},xp={href:"#main-content",class:"sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-stone-900 focus:rounded focus:font-semibold"},Dp={id:"main-content",class:"container mx-auto px-4 py-6 flex-1",role:"main"},Mp={class:"border-t border-stone-800 py-6 text-center",role:"contentinfo"},Fp={class:"container mx-auto px-4 flex flex-col items-center gap-3"},qp=["aria-label"],jp=["aria-label"],Yp={href:"https://github.com/Marklong123/dnd-character-create",target:"_blank",rel:"noopener noreferrer",class:"hover:text-amber-400 transition-colors"},Wp=["title"],Up={key:0,class:"fixed bottom-0 left-0 right-0 bg-stone-800 border-t border-amber-700/30 p-4 z-50 shadow-lg",role:"alertdialog","aria-labelledby":"gdpr-title","aria-describedby":"gdpr-desc"},Hp={class:"container mx-auto flex flex-col sm:flex-row items-center gap-4 max-w-4xl"},Vp={id:"gdpr-desc",class:"text-sm text-stone-300 flex-1"},$p=Wn({__name:"App",setup(e){const{t:n}=xt(),t=Le(!1);ju(),qa(()=>{localStorage.getItem("gdpr-accepted")||(t.value=!0)});function a(){localStorage.setItem("gdpr-accepted","1"),t.value=!1}return(o,r)=>{const i=Mr("router-view"),s=Mr("router-link");return Xe(),on("div",Np,[se("a",xp,Pe(ee(n)("a11y.skipToContent")),1),le(Rp),se("main",Dp,[le(i)]),se("footer",Mp,[se("div",Fp,[se("a",{href:"https://paypal.me/fullo/2",target:"_blank",rel:"noopener noreferrer",class:"inline-flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-stone-900 font-semibold rounded-lg transition-colors no-underline text-sm","aria-label":ee(n)("a11y.coffee")},[...r[0]||(r[0]=[se("span",{"aria-hidden":"true"},"☕",-1),En(" Buy me a coffee ",-1)])],8,qp),se("nav",{class:"flex flex-wrap items-center justify-center gap-3 text-xs text-stone-500","aria-label":ee(n)("a11y.footerLinks")},[se("span",null,"🇪🇺 "+Pe(ee(n)("footer.madeInEU")),1),r[1]||(r[1]=se("span",{"aria-hidden":"true"},"·",-1)),le(s,{to:"/privacy",class:"hover:text-amber-400 transition-colors"},{default:Nn(()=>[En(Pe(ee(n)("footer.privacy")),1)]),_:1}),r[2]||(r[2]=se("span",{"aria-hidden":"true"},"·",-1)),se("a",Yp,Pe(ee(n)("footer.license")),1),r[3]||(r[3]=se("span",{"aria-hidden":"true"},"·",-1)),se("a",{href:"https://www.w3.org/TR/web-sustainability-guidelines/",target:"_blank",rel:"noopener noreferrer",class:"hover:text-amber-400 transition-colors",title:ee(n)("footer.wsgTitle")},Pe(ee(n)("footer.wsg")),9,Wp),r[4]||(r[4]=se("span",{"aria-hidden":"true"},"·",-1)),le(s,{to:"/sci-report",class:"hover:text-emerald-400 transition-colors",title:ee(n)("footer.sciTitle")},{default:Nn(()=>[En(Pe(ee(n)("footer.sci")),1)]),_:1},8,["title"])],8,jp)])]),t.value?(Xe(),on("div",Up,[se("div",Hp,[se("p",Vp,Pe(ee(n)("gdpr.banner")),1),se("button",{onClick:a,class:"px-6 py-2 bg-amber-600 hover:bg-amber-500 text-stone-900 font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer text-sm"},Pe(ee(n)("gdpr.accept")),1)])])):Ii("",!0)])}}});const Yt=typeof document<"u";function Yu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Bp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Yu(e.default)}const de=Object.assign;function Er(e,n){const t={};for(const a in n){const o=n[a];t[a]=Pn(o)?o.map(e):e(o)}return t}const va=()=>{},Pn=Array.isArray;function vc(e,n){const t={};for(const a in e)t[a]=a in n?n[a]:e[a];return t}const Wu=/#/g,Gp=/&/g,zp=/\//g,Kp=/=/g,Xp=/\?/g,Uu=/\+/g,Jp=/%5B/g,Qp=/%5D/g,Hu=/%5E/g,Zp=/%60/g,Vu=/%7B/g,e_=/%7C/g,$u=/%7D/g,n_=/%20/g;function qi(e){return e==null?"":encodeURI(""+e).replace(e_,"|").replace(Jp,"[").replace(Qp,"]")}function t_(e){return qi(e).replace(Vu,"{").replace($u,"}").replace(Hu,"^")}function ni(e){return qi(e).replace(Uu,"%2B").replace(n_,"+").replace(Wu,"%23").replace(Gp,"%26").replace(Zp,"`").replace(Vu,"{").replace($u,"}").replace(Hu,"^")}function a_(e){return ni(e).replace(Kp,"%3D")}function o_(e){return qi(e).replace(Wu,"%23").replace(Xp,"%3F")}function r_(e){return o_(e).replace(zp,"%2F")}function Ra(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const i_=/\/$/,s_=e=>e.replace(i_,"");function Ar(e,n,t="/"){let a,o={},r="",i="";const s=n.indexOf("#");let c=n.indexOf("?");return c=s>=0&&c>s?-1:c,c>=0&&(a=n.slice(0,c),r=n.slice(c,s>0?s:n.length),o=e(r.slice(1))),s>=0&&(a=a||n.slice(0,s),i=n.slice(s,n.length)),a=d_(a??n,t),{fullPath:a+r+i,path:a,query:o,hash:Ra(i)}}function c_(e,n){const t=n.query?e(n.query):"";return n.path+(t&&"?")+t+(n.hash||"")}function bc(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function l_(e,n,t){const a=n.matched.length-1,o=t.matched.length-1;return a>-1&&a===o&&ea(n.matched[a],t.matched[o])&&Bu(n.params,t.params)&&e(n.query)===e(t.query)&&n.hash===t.hash}function ea(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Bu(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(var t in e)if(!u_(e[t],n[t]))return!1;return!0}function u_(e,n){return Pn(e)?kc(e,n):Pn(n)?kc(n,e):e?.valueOf()===n?.valueOf()}function kc(e,n){return Pn(n)?e.length===n.length&&e.every((t,a)=>t===n[a]):e.length===1&&e[0]===n}function d_(e,n){if(e.startsWith("/"))return e;if(!e)return n;const t=n.split("/"),a=e.split("/"),o=a[a.length-1];(o===".."||o===".")&&a.push("");let r=t.length-1,i,s;for(i=0;i<a.length;i++)if(s=a[i],s!==".")if(s==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+a.slice(i).join("/")}const st={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ti=(function(e){return e.pop="pop",e.push="push",e})({}),Ir=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function f_(e){if(!e)if(Yt){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),s_(e)}const m_=/^[^#]+#/;function h_(e,n){return e.replace(m_,"#")+n}function g_(e,n){const t=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:n.behavior,left:a.left-t.left-(n.left||0),top:a.top-t.top-(n.top||0)}}const ar=()=>({left:window.scrollX,top:window.scrollY});function p_(e){let n;if("el"in e){const t=e.el,a=typeof t=="string"&&t.startsWith("#"),o=typeof t=="string"?a?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!o)return;n=g_(o,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.scrollX,n.top!=null?n.top:window.scrollY)}function wc(e,n){return(history.state?history.state.position-n:-1)+e}const ai=new Map;function __(e,n){ai.set(e,n)}function y_(e){const n=ai.get(e);return ai.delete(e),n}function v_(e){return typeof e=="string"||e&&typeof e=="object"}function Gu(e){return typeof e=="string"||typeof e=="symbol"}let Ie=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const zu=Symbol("");Ie.MATCHER_NOT_FOUND+"",Ie.NAVIGATION_GUARD_REDIRECT+"",Ie.NAVIGATION_ABORTED+"",Ie.NAVIGATION_CANCELLED+"",Ie.NAVIGATION_DUPLICATED+"";function na(e,n){return de(new Error,{type:e,[zu]:!0},n)}function Bn(e,n){return e instanceof Error&&zu in e&&(n==null||!!(e.type&n))}const b_=["params","query","hash"];function k_(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const n={};for(const t of b_)t in e&&(n[t]=e[t]);return JSON.stringify(n,null,2)}function w_(e){const n={};if(e===""||e==="?")return n;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<t.length;++a){const o=t[a].replace(Uu," "),r=o.indexOf("="),i=Ra(r<0?o:o.slice(0,r)),s=r<0?null:Ra(o.slice(r+1));if(i in n){let c=n[i];Pn(c)||(c=n[i]=[c]),c.push(s)}else n[i]=s}return n}function Cc(e){let n="";for(let t in e){const a=e[t];if(t=a_(t),a==null){a!==void 0&&(n+=(n.length?"&":"")+t);continue}(Pn(a)?a.map(o=>o&&ni(o)):[a&&ni(a)]).forEach(o=>{o!==void 0&&(n+=(n.length?"&":"")+t,o!=null&&(n+="="+o))})}return n}function C_(e){const n={};for(const t in e){const a=e[t];a!==void 0&&(n[t]=Pn(a)?a.map(o=>o==null?null:""+o):a==null?a:""+a)}return n}const E_=Symbol(""),Ec=Symbol(""),or=Symbol(""),ji=Symbol(""),oi=Symbol("");function la(){let e=[];function n(a){return e.push(a),()=>{const o=e.indexOf(a);o>-1&&e.splice(o,1)}}function t(){e=[]}return{add:n,list:()=>e.slice(),reset:t}}function dt(e,n,t,a,o,r=i=>i()){const i=a&&(a.enterCallbacks[o]=a.enterCallbacks[o]||[]);return()=>new Promise((s,c)=>{const l=h=>{h===!1?c(na(Ie.NAVIGATION_ABORTED,{from:t,to:n})):h instanceof Error?c(h):v_(h)?c(na(Ie.NAVIGATION_GUARD_REDIRECT,{from:n,to:h})):(i&&a.enterCallbacks[o]===i&&typeof h=="function"&&i.push(h),s())},u=r(()=>e.call(a&&a.instances[o],n,t,l));let d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(h=>c(h))})}function Tr(e,n,t,a,o=r=>r()){const r=[];for(const i of e)for(const s in i.components){let c=i.components[s];if(!(n!=="beforeRouteEnter"&&!i.instances[s]))if(Yu(c)){const l=(c.__vccOpts||c)[n];l&&r.push(dt(l,t,a,i,s,o))}else{let l=c();r.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${s}" at "${i.path}"`);const d=Bp(u)?u.default:u;i.mods[s]=u,i.components[s]=d;const h=(d.__vccOpts||d)[n];return h&&dt(h,t,a,i,s,o)()}))}}return r}function A_(e,n){const t=[],a=[],o=[],r=Math.max(n.matched.length,e.matched.length);for(let i=0;i<r;i++){const s=n.matched[i];s&&(e.matched.find(l=>ea(l,s))?a.push(s):t.push(s));const c=e.matched[i];c&&(n.matched.find(l=>ea(l,c))||o.push(c))}return[t,a,o]}let I_=()=>location.protocol+"//"+location.host;function Ku(e,n){const{pathname:t,search:a,hash:o}=n,r=e.indexOf("#");if(r>-1){let i=o.includes(e.slice(r))?e.slice(r).length:1,s=o.slice(i);return s[0]!=="/"&&(s="/"+s),bc(s,"")}return bc(t,e)+a+o}function T_(e,n,t,a){let o=[],r=[],i=null;const s=({state:h})=>{const _=Ku(e,location),C=t.value,k=n.value;let R=0;if(h){if(t.value=_,n.value=h,i&&i===C){i=null;return}R=k?h.position-k.position:0}else a(_);o.forEach(P=>{P(t.value,C,{delta:R,type:ti.pop,direction:R?R>0?Ir.forward:Ir.back:Ir.unknown})})};function c(){i=t.value}function l(h){o.push(h);const _=()=>{const C=o.indexOf(h);C>-1&&o.splice(C,1)};return r.push(_),_}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(de({},h.state,{scroll:ar()}),"")}}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",s),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",s),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:c,listen:l,destroy:d}}function Ac(e,n,t,a=!1,o=!1){return{back:e,current:n,forward:t,replaced:a,position:window.history.length,scroll:o?ar():null}}function S_(e){const{history:n,location:t}=window,a={value:Ku(e,t)},o={value:n.state};o.value||r(a.value,{back:null,current:a.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(c,l,u){const d=e.indexOf("#"),h=d>-1?(t.host&&document.querySelector("base")?e:e.slice(d))+c:I_()+e+c;try{n[u?"replaceState":"pushState"](l,"",h),o.value=l}catch(_){console.error(_),t[u?"replace":"assign"](h)}}function i(c,l){r(c,de({},n.state,Ac(o.value.back,c,o.value.forward,!0),l,{position:o.value.position}),!0),a.value=c}function s(c,l){const u=de({},o.value,n.state,{forward:c,scroll:ar()});r(u.current,u,!0),r(c,de({},Ac(a.value,c,null),{position:u.position+1},l),!1),a.value=c}return{location:a,state:o,push:s,replace:i}}function O_(e){e=f_(e);const n=S_(e),t=T_(e,n.state,n.location,n.replace);function a(r,i=!0){i||t.pauseListeners(),history.go(r)}const o=de({location:"",base:e,go:a,createHref:h_.bind(null,e)},n,t);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>n.state.value}),o}let Ot=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Oe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Oe||{});const P_={type:Ot.Static,value:""},L_=/[a-zA-Z0-9_]/;function R_(e){if(!e)return[[]];if(e==="/")return[[P_]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(_){throw new Error(`ERR (${t})/"${l}": ${_}`)}let t=Oe.Static,a=t;const o=[];let r;function i(){r&&o.push(r),r=[]}let s=0,c,l="",u="";function d(){l&&(t===Oe.Static?r.push({type:Ot.Static,value:l}):t===Oe.Param||t===Oe.ParamRegExp||t===Oe.ParamRegExpEnd?(r.length>1&&(c==="*"||c==="+")&&n(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Ot.Param,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):n("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;s<e.length;){if(c=e[s++],c==="\\"&&t!==Oe.ParamRegExp){a=t,t=Oe.EscapeNext;continue}switch(t){case Oe.Static:c==="/"?(l&&d(),i()):c===":"?(d(),t=Oe.Param):h();break;case Oe.EscapeNext:h(),t=a;break;case Oe.Param:c==="("?t=Oe.ParamRegExp:L_.test(c)?h():(d(),t=Oe.Static,c!=="*"&&c!=="?"&&c!=="+"&&s--);break;case Oe.ParamRegExp:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:t=Oe.ParamRegExpEnd:u+=c;break;case Oe.ParamRegExpEnd:d(),t=Oe.Static,c!=="*"&&c!=="?"&&c!=="+"&&s--,u="";break;default:n("Unknown state");break}}return t===Oe.ParamRegExp&&n(`Unfinished custom RegExp for param "${l}"`),d(),i(),o}const Ic="[^/]+?",N_={sensitive:!1,strict:!1,start:!0,end:!0};var ze=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(ze||{});const x_=/[.+*?^${}()[\]/\\]/g;function D_(e,n){const t=de({},N_,n),a=[];let o=t.start?"^":"";const r=[];for(const l of e){const u=l.length?[]:[ze.Root];t.strict&&!l.length&&(o+="/");for(let d=0;d<l.length;d++){const h=l[d];let _=ze.Segment+(t.sensitive?ze.BonusCaseSensitive:0);if(h.type===Ot.Static)d||(o+="/"),o+=h.value.replace(x_,"\\$&"),_+=ze.Static;else if(h.type===Ot.Param){const{value:C,repeatable:k,optional:R,regexp:P}=h;r.push({name:C,repeatable:k,optional:R});const E=P||Ic;if(E!==Ic){_+=ze.BonusCustomRegExp;try{`${E}`}catch(b){throw new Error(`Invalid custom RegExp for param "${C}" (${E}): `+b.message)}}let y=k?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||(y=R&&l.length<2?`(?:/${y})`:"/"+y),R&&(y+="?"),o+=y,_+=ze.Dynamic,R&&(_+=ze.BonusOptional),k&&(_+=ze.BonusRepeatable),E===".*"&&(_+=ze.BonusWildcard)}u.push(_)}a.push(u)}if(t.strict&&t.end){const l=a.length-1;a[l][a[l].length-1]+=ze.BonusStrict}t.strict||(o+="/?"),t.end?o+="$":t.strict&&!o.endsWith("/")&&(o+="(?:/|$)");const i=new RegExp(o,t.sensitive?"":"i");function s(l){const u=l.match(i),d={};if(!u)return null;for(let h=1;h<u.length;h++){const _=u[h]||"",C=r[h-1];d[C.name]=_&&C.repeatable?_.split("/"):_}return d}function c(l){let u="",d=!1;for(const h of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const _ of h)if(_.type===Ot.Static)u+=_.value;else if(_.type===Ot.Param){const{value:C,repeatable:k,optional:R}=_,P=C in l?l[C]:"";if(Pn(P)&&!k)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const E=Pn(P)?P.join("/"):P;if(!E)if(R)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${C}"`);u+=E}}return u||"/"}return{re:i,score:a,keys:r,parse:s,stringify:c}}function M_(e,n){let t=0;for(;t<e.length&&t<n.length;){const a=n[t]-e[t];if(a)return a;t++}return e.length<n.length?e.length===1&&e[0]===ze.Static+ze.Segment?-1:1:e.length>n.length?n.length===1&&n[0]===ze.Static+ze.Segment?1:-1:0}function Xu(e,n){let t=0;const a=e.score,o=n.score;for(;t<a.length&&t<o.length;){const r=M_(a[t],o[t]);if(r)return r;t++}if(Math.abs(o.length-a.length)===1){if(Tc(a))return 1;if(Tc(o))return-1}return o.length-a.length}function Tc(e){const n=e[e.length-1];return e.length>0&&n[n.length-1]<0}const F_={strict:!1,end:!0,sensitive:!1};function q_(e,n,t){const a=D_(R_(e.path),t),o=de(a,{record:e,parent:n,children:[],alias:[]});return n&&!o.record.aliasOf==!n.record.aliasOf&&n.children.push(o),o}function j_(e,n){const t=[],a=new Map;n=vc(F_,n);function o(d){return a.get(d)}function r(d,h,_){const C=!_,k=Oc(d);k.aliasOf=_&&_.record;const R=vc(n,d),P=[k];if("alias"in d){const b=typeof d.alias=="string"?[d.alias]:d.alias;for(const T of b)P.push(Oc(de({},k,{components:_?_.record.components:k.components,path:T,aliasOf:_?_.record:k})))}let E,y;for(const b of P){const{path:T}=b;if(h&&T[0]!=="/"){const O=h.record.path,x=O[O.length-1]==="/"?"":"/";b.path=h.record.path+(T&&x+T)}if(E=q_(b,h,R),_?_.alias.push(E):(y=y||E,y!==E&&y.alias.push(E),C&&d.name&&!Pc(E)&&i(d.name)),Ju(E)&&c(E),k.children){const O=k.children;for(let x=0;x<O.length;x++)r(O[x],E,_&&_.children[x])}_=_||E}return y?()=>{i(y)}:va}function i(d){if(Gu(d)){const h=a.get(d);h&&(a.delete(d),t.splice(t.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=t.indexOf(d);h>-1&&(t.splice(h,1),d.record.name&&a.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function s(){return t}function c(d){const h=U_(d,t);t.splice(h,0,d),d.record.name&&!Pc(d)&&a.set(d.record.name,d)}function l(d,h){let _,C={},k,R;if("name"in d&&d.name){if(_=a.get(d.name),!_)throw na(Ie.MATCHER_NOT_FOUND,{location:d});R=_.record.name,C=de(Sc(h.params,_.keys.filter(y=>!y.optional).concat(_.parent?_.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),d.params&&Sc(d.params,_.keys.map(y=>y.name))),k=_.stringify(C)}else if(d.path!=null)k=d.path,_=t.find(y=>y.re.test(k)),_&&(C=_.parse(k),R=_.record.name);else{if(_=h.name?a.get(h.name):t.find(y=>y.re.test(h.path)),!_)throw na(Ie.MATCHER_NOT_FOUND,{location:d,currentLocation:h});R=_.record.name,C=de({},h.params,d.params),k=_.stringify(C)}const P=[];let E=_;for(;E;)P.unshift(E.record),E=E.parent;return{name:R,path:k,params:C,matched:P,meta:W_(P)}}e.forEach(d=>r(d));function u(){t.length=0,a.clear()}return{addRoute:r,resolve:l,removeRoute:i,clearRoutes:u,getRoutes:s,getRecordMatcher:o}}function Sc(e,n){const t={};for(const a of n)a in e&&(t[a]=e[a]);return t}function Oc(e){const n={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Y_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(n,"mods",{value:{}}),n}function Y_(e){const n={},t=e.props||!1;if("component"in e)n.default=t;else for(const a in e.components)n[a]=typeof t=="object"?t[a]:t;return n}function Pc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function W_(e){return e.reduce((n,t)=>de(n,t.meta),{})}function U_(e,n){let t=0,a=n.length;for(;t!==a;){const r=t+a>>1;Xu(e,n[r])<0?a=r:t=r+1}const o=H_(e);return o&&(a=n.lastIndexOf(o,a-1)),a}function H_(e){let n=e;for(;n=n.parent;)if(Ju(n)&&Xu(e,n)===0)return n}function Ju({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Lc(e){const n=_n(or),t=_n(ji),a=ye(()=>{const c=ee(e.to);return n.resolve(c)}),o=ye(()=>{const{matched:c}=a.value,{length:l}=c,u=c[l-1],d=t.matched;if(!u||!d.length)return-1;const h=d.findIndex(ea.bind(null,u));if(h>-1)return h;const _=Rc(c[l-2]);return l>1&&Rc(u)===_&&d[d.length-1].path!==_?d.findIndex(ea.bind(null,c[l-2])):h}),r=ye(()=>o.value>-1&&z_(t.params,a.value.params)),i=ye(()=>o.value>-1&&o.value===t.matched.length-1&&Bu(t.params,a.value.params));function s(c={}){if(G_(c)){const l=n[ee(e.replace)?"replace":"push"](ee(e.to)).catch(va);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:a,href:ye(()=>a.value.href),isActive:r,isExactActive:i,navigate:s}}function V_(e){return e.length===1?e[0]:e}const $_=Wn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Lc,setup(e,{slots:n}){const t=xa(Lc(e)),{options:a}=_n(or),o=ye(()=>({[Nc(e.activeClass,a.linkActiveClass,"router-link-active")]:t.isActive,[Nc(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=n.default&&V_(n.default(t));return e.custom?r:Wa("a",{"aria-current":t.isExactActive?e.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:o.value},r)}}}),B_=$_;function G_(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function z_(e,n){for(const t in n){const a=n[t],o=e[t];if(typeof a=="string"){if(a!==o)return!1}else if(!Pn(o)||o.length!==a.length||a.some((r,i)=>r.valueOf()!==o[i].valueOf()))return!1}return!0}function Rc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Nc=(e,n,t)=>e??n??t,K_=Wn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:t}){const a=_n(oi),o=ye(()=>e.route||a.value),r=_n(Ec,0),i=ye(()=>{let l=ee(r);const{matched:u}=o.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),s=ye(()=>o.value.matched[i.value]);uo(Ec,ye(()=>i.value+1)),uo(E_,s),uo(oi,o);const c=Le();return Qn(()=>[c.value,s.value,e.name],([l,u,d],[h,_,C])=>{u&&(u.instances[d]=l,_&&_!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),l&&u&&(!_||!ea(u,_)||!h)&&(u.enterCallbacks[d]||[]).forEach(k=>k(l))},{flush:"post"}),()=>{const l=o.value,u=e.name,d=s.value,h=d&&d.components[u];if(!h)return xc(t.default,{Component:h,route:l});const _=d.props[u],C=_?_===!0?l.params:typeof _=="function"?_(l):_:null,R=Wa(h,de({},C,n,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return xc(t.default,{Component:R,route:l})||R}}});function xc(e,n){if(!e)return null;const t=e(n);return t.length===1?t[0]:t}const X_=K_;function J_(e){const n=j_(e.routes,e),t=e.parseQuery||w_,a=e.stringifyQuery||Cc,o=e.history,r=la(),i=la(),s=la(),c=vi(st);let l=st;Yt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Er.bind(null,M=>""+M),d=Er.bind(null,r_),h=Er.bind(null,Ra);function _(M,B){let V,G;return Gu(M)?(V=n.getRecordMatcher(M),G=B):G=M,n.addRoute(G,V)}function C(M){const B=n.getRecordMatcher(M);B&&n.removeRoute(B)}function k(){return n.getRoutes().map(M=>M.record)}function R(M){return!!n.getRecordMatcher(M)}function P(M,B){if(B=de({},B||c.value),typeof M=="string"){const p=Ar(t,M,B.path),I=n.resolve({path:p.path},B),F=o.createHref(p.fullPath);return de(p,I,{params:h(I.params),hash:Ra(p.hash),redirectedFrom:void 0,href:F})}let V;if(M.path!=null)V=de({},M,{path:Ar(t,M.path,B.path).path});else{const p=de({},M.params);for(const I in p)p[I]==null&&delete p[I];V=de({},M,{params:d(p)}),B.params=d(B.params)}const G=n.resolve(V,B),ae=M.hash||"";G.params=u(h(G.params));const g=c_(a,de({},M,{hash:t_(ae),path:G.path})),v=o.createHref(g);return de({fullPath:g,hash:ae,query:a===Cc?C_(M.query):M.query||{}},G,{redirectedFrom:void 0,href:v})}function E(M){return typeof M=="string"?Ar(t,M,c.value.path):de({},M)}function y(M,B){if(l!==M)return na(Ie.NAVIGATION_CANCELLED,{from:B,to:M})}function b(M){return x(M)}function T(M){return b(de(E(M),{replace:!0}))}function O(M,B){const V=M.matched[M.matched.length-1];if(V&&V.redirect){const{redirect:G}=V;let ae=typeof G=="function"?G(M,B):G;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=E(ae):{path:ae},ae.params={}),de({query:M.query,hash:M.hash,params:ae.path!=null?{}:M.params},ae)}}function x(M,B){const V=l=P(M),G=c.value,ae=M.state,g=M.force,v=M.replace===!0,p=O(V,G);if(p)return x(de(E(p),{state:typeof p=="object"?de({},ae,p.state):ae,force:g,replace:v}),B||V);const I=V;I.redirectedFrom=B;let F;return!g&&l_(a,G,V)&&(F=na(Ie.NAVIGATION_DUPLICATED,{to:I,from:G}),Ee(G,G,!0,!1)),(F?Promise.resolve(F):$(I,G)).catch(D=>Bn(D)?Bn(D,Ie.NAVIGATION_GUARD_REDIRECT)?D:tn(D):re(D,I,G)).then(D=>{if(D){if(Bn(D,Ie.NAVIGATION_GUARD_REDIRECT))return x(de({replace:v},E(D.to),{state:typeof D.to=="object"?de({},ae,D.to.state):ae,force:g}),B||I)}else D=j(I,G,!0,v,ae);return X(I,G,D),D})}function q(M,B){const V=y(M,B);return V?Promise.reject(V):Promise.resolve()}function S(M){const B=ln.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(M):M()}function $(M,B){let V;const[G,ae,g]=A_(M,B);V=Tr(G.reverse(),"beforeRouteLeave",M,B);for(const p of G)p.leaveGuards.forEach(I=>{V.push(dt(I,M,B))});const v=q.bind(null,M,B);return V.push(v),xe(V).then(()=>{V=[];for(const p of r.list())V.push(dt(p,M,B));return V.push(v),xe(V)}).then(()=>{V=Tr(ae,"beforeRouteUpdate",M,B);for(const p of ae)p.updateGuards.forEach(I=>{V.push(dt(I,M,B))});return V.push(v),xe(V)}).then(()=>{V=[];for(const p of g)if(p.beforeEnter)if(Pn(p.beforeEnter))for(const I of p.beforeEnter)V.push(dt(I,M,B));else V.push(dt(p.beforeEnter,M,B));return V.push(v),xe(V)}).then(()=>(M.matched.forEach(p=>p.enterCallbacks={}),V=Tr(g,"beforeRouteEnter",M,B,S),V.push(v),xe(V))).then(()=>{V=[];for(const p of i.list())V.push(dt(p,M,B));return V.push(v),xe(V)}).catch(p=>Bn(p,Ie.NAVIGATION_CANCELLED)?p:Promise.reject(p))}function X(M,B,V){s.list().forEach(G=>S(()=>G(M,B,V)))}function j(M,B,V,G,ae){const g=y(M,B);if(g)return g;const v=B===st,p=Yt?history.state:{};V&&(G||v?o.replace(M.fullPath,de({scroll:v&&p&&p.scroll},ae)):o.push(M.fullPath,ae)),c.value=M,Ee(M,B,V,v),tn()}let J;function pe(){J||(J=o.listen((M,B,V)=>{if(!un.listening)return;const G=P(M),ae=O(G,un.currentRoute.value);if(ae){x(de(ae,{replace:!0,force:!0}),G).catch(va);return}l=G;const g=c.value;Yt&&__(wc(g.fullPath,V.delta),ar()),$(G,g).catch(v=>Bn(v,Ie.NAVIGATION_ABORTED|Ie.NAVIGATION_CANCELLED)?v:Bn(v,Ie.NAVIGATION_GUARD_REDIRECT)?(x(de(E(v.to),{force:!0}),G).then(p=>{Bn(p,Ie.NAVIGATION_ABORTED|Ie.NAVIGATION_DUPLICATED)&&!V.delta&&V.type===ti.pop&&o.go(-1,!1)}).catch(va),Promise.reject()):(V.delta&&o.go(-V.delta,!1),re(v,G,g))).then(v=>{v=v||j(G,g,!1),v&&(V.delta&&!Bn(v,Ie.NAVIGATION_CANCELLED)?o.go(-V.delta,!1):V.type===ti.pop&&Bn(v,Ie.NAVIGATION_ABORTED|Ie.NAVIGATION_DUPLICATED)&&o.go(-1,!1)),X(G,g,v)}).catch(va)}))}let Se=la(),oe=la(),Z;function re(M,B,V){tn(M);const G=oe.list();return G.length?G.forEach(ae=>ae(M,B,V)):console.error(M),Promise.reject(M)}function Ve(){return Z&&c.value!==st?Promise.resolve():new Promise((M,B)=>{Se.add([M,B])})}function tn(M){return Z||(Z=!M,pe(),Se.list().forEach(([B,V])=>M?V(M):B()),Se.reset()),M}function Ee(M,B,V,G){const{scrollBehavior:ae}=e;if(!Yt||!ae)return Promise.resolve();const g=!V&&y_(wc(M.fullPath,0))||(G||!V)&&history.state&&history.state.scroll||null;return Ko().then(()=>ae(M,B,g)).then(v=>v&&p_(v)).catch(v=>re(v,M,B))}const Ae=M=>o.go(M);let yn;const ln=new Set,un={currentRoute:c,listening:!0,addRoute:_,removeRoute:C,clearRoutes:n.clearRoutes,hasRoute:R,getRoutes:k,resolve:P,options:e,push:b,replace:T,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:r.add,beforeResolve:i.add,afterEach:s.add,onError:oe.add,isReady:Ve,install(M){M.component("RouterLink",B_),M.component("RouterView",X_),M.config.globalProperties.$router=un,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>ee(c)}),Yt&&!yn&&c.value===st&&(yn=!0,b(o.location).catch(G=>{}));const B={};for(const G in st)Object.defineProperty(B,G,{get:()=>c.value[G],enumerable:!0});M.provide(or,un),M.provide(ji,il(B)),M.provide(oi,c);const V=M.unmount;ln.add(M),M.unmount=function(){ln.delete(M),ln.size<1&&(l=st,J&&J(),J=null,c.value=st,yn=!1,Z=!1),V()}}};function xe(M){return M.reduce((B,V)=>B.then(()=>S(V)),Promise.resolve())}return un}function Oy(){return _n(or)}function Py(e){return _n(ji)}const Sr=J_({history:O_("/dnd-character-create/"),routes:[{path:"/",name:"home",component:()=>he(()=>import("./HomeView-DdGsjZMb.js"),__vite__mapDeps([0,1,2,3,4,5]))},{path:"/builder",name:"builder",component:()=>he(()=>import("./BuilderView-DluN36qB.js"),__vite__mapDeps([6,1,2]))},{path:"/characters",name:"characters",component:()=>he(()=>import("./CharacterListView-fcsRusRt.js"),__vite__mapDeps([7,1,2,3]))},{path:"/blog",name:"blog",component:()=>he(()=>import("./BlogListView-Bty0HBip.js"),__vite__mapDeps([8,9,10,3]))},{path:"/blog/:slug",name:"blog-character",component:()=>he(()=>import("./BlogCharacterView-2JlOhnQN.js"),__vite__mapDeps([11,9,10,1,2,3,12,13,14,15,4,16])),beforeEnter:e=>{const n=e.params.slug;return!n||!/^[a-z0-9-]+$/.test(n)||n.length>100?{name:"blog"}:!0}},{path:"/privacy",name:"privacy",component:()=>he(()=>import("./PrivacyView-DmomDEGq.js"),[])},{path:"/sci-report",name:"sci-report",component:()=>he(()=>import("./SciReportView-DiQuAYB8.js"),[])},{path:"/share/:data",name:"share",component:()=>he(()=>import("./ShareView-CIIA5xw6.js"),__vite__mapDeps([17,1,2,15])),beforeEnter:e=>{const n=e.params.data;return!n||n.length>2e4?{name:"home"}:!0}},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>he(()=>import("./HomeView-DdGsjZMb.js"),__vite__mapDeps([0,1,2,3,4,5]))}]}),Q_=`- name: Acid Splash
  level: 0
  school: conjuration
  attack_type: saving_throw
  save_type: dex
  save_half: false
  damage_dice: 1d6
  damage_modifier: 0
  damage_type: acid
  cantrip_scaling: true
  cantrip_scale_dice: 1d6
  aoe: true
  aoe_shape: sphere
  aoe_size: 5-foot radius
  duration: Instantaneous
  requires_concentration: false
  description: You hurl a bubble of acid. Each creature in a 5-foot radius must make a Dexterity save or take acid damage.
- name: Chill Touch
  level: 0
  school: necromancy
  attack_type: attack_roll
  damage_dice: 1d8
  damage_modifier: 0
  damage_type: necrotic
  cantrip_scaling: true
  cantrip_scale_dice: 1d8
  duration: 1 round
  requires_concentration: false
  description: You create a ghostly hand that reaches toward a creature within range. On a hit, the target cannot regain hit
    points until the start of your next turn.
- name: Eldritch Blast
  level: 0
  school: evocation
  attack_type: attack_roll
  damage_dice: 1d10
  damage_modifier: 0
  damage_type: force
  cantrip_scaling: true
  cantrip_scale_dice: 1d10
  multi_hit: true
  duration: Instantaneous
  requires_concentration: false
  description: A beam of crackling energy streaks toward a creature within range. Multiple beams at higher levels; each is
    a separate attack roll.
- name: Fire Bolt
  level: 0
  school: evocation
  attack_type: attack_roll
  damage_dice: 1d10
  damage_modifier: 0
  damage_type: fire
  cantrip_scaling: true
  cantrip_scale_dice: 1d10
  duration: Instantaneous
  requires_concentration: false
  description: You hurl a mote of fire at a creature or object within range.
- name: Guidance
  level: 0
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  cantrip_scaling: false
  no_damage: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  buffs:
    ability_checks: +1d4
  description: You touch one willing creature. Once before the spell ends, it can roll a d4 and add the result to one ability
    check of its choice.
- name: Poison Spray
  level: 0
  school: conjuration
  attack_type: saving_throw
  save_type: con
  save_half: false
  damage_dice: 1d12
  damage_modifier: 0
  damage_type: poison
  cantrip_scaling: true
  cantrip_scale_dice: 1d12
  duration: Instantaneous
  requires_concentration: false
  description: You extend your hand toward a creature you can see and a noxious cloud of poison gas billows from your palm.
- name: Produce Flame
  level: 0
  school: conjuration
  attack_type: attack_roll
  damage_dice: 1d8
  damage_modifier: 0
  damage_type: fire
  cantrip_scaling: true
  cantrip_scale_dice: 1d8
  duration: 10 minutes
  requires_concentration: false
  description: A flickering flame appears in your hand. You can hurl it at a creature within range as a ranged spell attack,
    or hold it for light.
- name: Ray of Frost
  level: 0
  school: evocation
  attack_type: attack_roll
  damage_dice: 1d8
  damage_modifier: 0
  damage_type: cold
  cantrip_scaling: true
  cantrip_scale_dice: 1d8
  duration: 1 round
  requires_concentration: false
  description: A frigid beam of blue-white light streaks toward a creature. On a hit, the target's speed is reduced by 10
    feet.
- name: Resistance
  level: 0
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  cantrip_scaling: false
  no_damage: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  buffs:
    saving_throws_once: +1d4
  description: You touch one willing creature. Once before the spell ends, it can roll a d4 and add the result to one saving
    throw of its choice.
- name: Sacred Flame
  level: 0
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: false
  damage_dice: 1d8
  damage_modifier: 0
  damage_type: radiant
  cantrip_scaling: true
  cantrip_scale_dice: 1d8
  duration: Instantaneous
  requires_concentration: false
  description: Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity
    saving throw.
- name: Shocking Grasp
  level: 0
  school: evocation
  attack_type: attack_roll
  damage_dice: 1d8
  damage_modifier: 0
  damage_type: lightning
  cantrip_scaling: true
  cantrip_scale_dice: 1d8
  duration: 1 round
  requires_concentration: false
  description: Lightning springs from your hand to deliver a shock to a creature you try to touch. Advantage on the attack
    if the target is wearing armor made of metal. On hit, target cannot take reactions.
- name: Spare the Dying
  level: 0
  school: necromancy
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  cantrip_scaling: false
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: You touch a living creature that has 0 hit points. The creature becomes stable.
- name: Thorn Whip
  level: 0
  school: transmutation
  attack_type: attack_roll
  damage_dice: 1d6
  damage_modifier: 0
  damage_type: piercing
  cantrip_scaling: true
  cantrip_scale_dice: 1d6
  duration: Instantaneous
  requires_concentration: false
  description: You create a long, vine-like whip that lashes out at a creature within range. On a hit, you pull the target
    up to 10 feet closer to you.
- name: Vicious Mockery
  level: 0
  school: enchantment
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 1d4
  damage_modifier: 0
  damage_type: psychic
  cantrip_scaling: true
  cantrip_scale_dice: 1d4
  duration: 1 round
  requires_concentration: false
  description: You unleash a string of insults at a creature. On a failed save, it has disadvantage on its next attack roll.
- name: Animal Friendship
  level: 1
  school: enchantment
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Charmed
  condition_duration: 24 hours
  duration: 24 hours
  requires_concentration: false
  description: You convince a beast that you mean it no harm. The beast must make a Wisdom saving throw. On a failure, it
    is charmed. The spell ends if you or your companions harm the target.
- name: Bane
  level: 1
  school: enchantment
  attack_type: saving_throw
  save_type: cha
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  buffs:
    attack_rolls: -1d4
    saving_throws: -1d4
  higher_levels: +1 target
  description: Up to three creatures must make Charisma saving throws. On failure, whenever a target makes an attack roll
    or saving throw before the spell ends, it must roll a d4 and subtract the result.
- name: Bless
  level: 1
  school: enchantment
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  buffs:
    attack_rolls: +1d4
    saving_throws: +1d4
  higher_levels: +1 target
  description: You bless up to three creatures. Whenever a target makes an attack roll or saving throw, it can roll a d4 and
    add the result to the roll.
- name: Burning Hands
  level: 1
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 3d6
  damage_modifier: 0
  damage_type: fire
  aoe: true
  aoe_shape: cone
  aoe_size: 15-foot cone
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d6
  description: As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your
    outstretched fingertips.
- name: Charm Person
  level: 1
  school: enchantment
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Charmed
  condition_duration: 1 hour
  duration: 1 hour
  requires_concentration: false
  higher_levels: +1 target
  description: You attempt to charm a humanoid you can see. On a failed Wisdom save, it is charmed by you. It regards you
    as a friendly acquaintance. The charm ends if you or your companions do anything harmful.
- name: Color Spray
  level: 1
  school: illusion
  attack_type: automatic
  damage_dice: 6d10
  damage_modifier: 0
  damage_type: ''
  hp_pool: true
  aoe: true
  aoe_shape: cone
  aoe_size: 15-foot cone
  duration: 1 round
  requires_concentration: false
  higher_levels: +2d10
  condition: Blinded
  condition_duration: 1 round
  description: 'Roll 6d10; the total is how many hit points of creatures this spell can affect.

    Creatures in a 15-foot cone are affected in ascending order of current HP.

    Each affected creature is blinded until the end of your next turn.

    '
- name: Command
  level: 1
  school: enchantment
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Commanded
  condition_duration: 1 round
  duration: 1 round
  requires_concentration: false
  higher_levels: +1 target
  description: 'You speak a one-word command to a creature you can see. It must succeed on a

    Wisdom save or follow the command on its next turn. Commands: "Approach", "Drop",

    "Flee", "Grovel", or "Halt". No effect on undead or creatures that don''t

    understand your language.

    '
- name: Create or Destroy Water
  level: 1
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +10 gallons created
  description: 'Create up to 10 gallons of clean water or destroy up to 10 gallons of water

    in an open container. The water can fall as rain in a 30-foot cube. For destruction,

    fog within a 30-foot cube is removed.

    '
- name: Cure Wounds
  level: 1
  school: evocation
  attack_type: automatic
  damage_dice: 1d8
  damage_modifier: 0
  damage_type: healing
  healing: true
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d8
  description: A creature you touch regains hit points equal to 1d8 + your spellcasting ability modifier. No effect on undead
    or constructs.
- name: Detect Magic
  level: 1
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  ritual: true
  description: For the duration, you sense the presence of magic within 30 feet. You can use your action to see a faint aura
    around any visible creature or object bearing magic and learn its school.
- name: Disguise Self
  level: 1
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 hour
  requires_concentration: false
  description: You make yourself look different — including clothing, armor, and weapons — until the spell ends. An observer
    can use an action to make an Intelligence (Investigation) check against your spell save DC.
- name: Divine Favor
  level: 1
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  is_supplementary: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  buffs:
    damage_rolls: +1d4
  description: Your weapon attacks deal an extra 1d4 radiant damage on a hit.
- name: Faerie Fire
  level: 1
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: cube
  aoe_size: 20-foot cube
  condition: Outlined
  condition_duration: Concentration, up to 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: 'Each object in a 20-foot cube is outlined in colored light. Creatures in the area

    must make a Dexterity saving throw. On failure, they shed dim light in a 10-foot

    radius and attack rolls against them have advantage.

    '
- name: Fog Cloud
  level: 1
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 20-foot radius
  duration: Concentration, up to 1 hour
  requires_concentration: true
  higher_levels: +20-foot radius
  description: You create a 20-foot-radius sphere of fog. The area is heavily obscured.
- name: Grease
  level: 1
  school: conjuration
  attack_type: saving_throw
  save_type: dex
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: square
  aoe_size: 10-foot square
  duration: 1 minute
  requires_concentration: false
  description: Slick grease covers the ground in a 10-foot square. Creatures entering or ending their turn must make a Dexterity
    save or fall prone.
- name: Guiding Bolt
  level: 1
  school: evocation
  attack_type: attack_roll
  damage_dice: 4d6
  damage_modifier: 0
  damage_type: radiant
  duration: 1 round
  requires_concentration: false
  higher_levels: +1d6
  description: A flash of light streaks toward a creature. On a hit, the next attack roll made against the target before the
    end of your next turn has advantage.
- name: Healing Word
  level: 1
  school: evocation
  attack_type: automatic
  damage_dice: 1d4
  damage_modifier: 0
  damage_type: healing
  healing: true
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d4
  description: A creature of your choice within range regains hit points equal to 1d4 + your spellcasting ability modifier.
    No effect on undead or constructs.
- name: Hellish Rebuke
  level: 1
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 2d10
  damage_modifier: 0
  damage_type: fire
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d10
  description: Cast as a reaction to being damaged by a creature you can see. The creature must make a Dexterity saving throw,
    taking 2d10 fire damage on failure.
- name: Inflict Wounds
  level: 1
  school: necromancy
  attack_type: attack_roll
  damage_dice: 3d10
  damage_modifier: 0
  damage_type: necrotic
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d10
  description: You make a melee spell attack against a creature you can reach. On a hit, the target takes necrotic damage.
- name: Longstrider
  level: 1
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 hour
  requires_concentration: false
  buffs:
    speed: '+10'
  higher_levels: +1 target
  description: A creature you touch gains +10 feet to its speed for the duration.
- name: Mage Armor
  level: 1
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 8 hours
  requires_concentration: false
  buffs:
    armor_class: 13 + DEX
  description: You touch a willing creature not wearing armor. Its base AC becomes 13 + its Dexterity modifier for the duration.
    The spell ends if it dons armor.
- name: Magic Missile
  level: 1
  school: evocation
  attack_type: automatic
  damage_dice: 3d4
  damage_modifier: 3
  damage_type: force
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d4+1
  description: You create three glowing darts of magical force. Each dart deals 1d4+1 force damage. The darts all strike simultaneously
    and can target one or multiple creatures.
- name: Protection from Evil and Good
  level: 1
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: 'One willing creature is protected against aberrations, celestials, elementals,

    fey, fiends, and undead. Those creatures have disadvantage on attack rolls

    against the target, and the target cannot be charmed, frightened, or possessed

    by them.

    '
- name: Sanctuary
  level: 1
  school: abjuration
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 minute
  requires_concentration: false
  description: You ward a creature. Until the spell ends, any creature targeting the warded creature with an attack or harmful
    spell must make a Wisdom save. On failure, it must choose a new target or lose the attack/spell.
- name: Shield
  level: 1
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 round
  requires_concentration: false
  buffs:
    armor_class: '+5'
  description: 'Cast as a reaction when hit by an attack or targeted by Magic Missile.

    Until your next turn, you have +5 AC (including against the triggering attack)

    and take no damage from Magic Missile.

    '
- name: Shield of Faith
  level: 1
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  buffs:
    armor_class: '+2'
  description: A shimmering field appears around a creature, granting +2 AC for the duration.
- name: Sleep
  level: 1
  school: enchantment
  attack_type: automatic
  damage_dice: 5d8
  damage_modifier: 0
  damage_type: ''
  hp_pool: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 20-foot radius
  duration: 1 minute
  requires_concentration: false
  higher_levels: +2d8
  condition: Unconscious
  condition_duration: 1 minute
  description: 'Roll 5d8; the total is how many hit points this spell can affect. Creatures

    within 20 feet are affected in ascending order of current HP. Each affected

    creature falls unconscious. They wake from damage or an action to shake/slap.

    '
- name: Speak with Animals
  level: 1
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 10 minutes
  requires_concentration: false
  ritual: true
  description: You gain the ability to comprehend and verbally communicate with beasts for the duration.
- name: Thunderwave
  level: 1
  school: evocation
  attack_type: saving_throw
  save_type: con
  save_half: true
  damage_dice: 2d8
  damage_modifier: 0
  damage_type: thunder
  aoe: true
  aoe_shape: cube
  aoe_size: 15-foot cube
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d8
  description: A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube makes a Constitution saving
    throw. On failure, it takes thunder damage and is pushed 10 feet.
- name: Witch Bolt
  level: 1
  school: evocation
  attack_type: attack_roll
  damage_dice: 1d12
  damage_modifier: 0
  damage_type: lightning
  duration: Concentration, up to 1 minute
  requires_concentration: true
  higher_levels: +1d12
  description: A beam of crackling blue energy lances out. On hit, the target takes lightning damage. On each of your subsequent
    turns, you can use an action to deal 1d12 lightning automatically.
- name: Acid Arrow
  level: 2
  school: evocation
  attack_type: attack_roll
  damage_dice: 4d4
  damage_modifier: 0
  damage_type: acid
  damage_on_miss: 2d4
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +2d4
  description: A shimmering green arrow streaks toward a target and bursts in a spray of acid. On a miss, the target still
    takes half damage from the splash.
- name: Aid
  level: 2
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 8 hours
  requires_concentration: false
  higher_levels: +5 max HP per level above 2nd
  description: Up to three creatures gain 5 temporary maximum HP and current HP for the duration.
- name: Alter Self
  level: 2
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 hour
  requires_concentration: true
  description: You alter your physical form. You can gain natural weapons (1d6 + STR, +1 magical), aquatic adaptation (gills
    + swim speed), or change your appearance.
- name: Barkskin
  level: 2
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 hour
  requires_concentration: true
  buffs:
    armor_class: 16 (minimum)
  description: A creature's skin becomes as tough as bark. Its AC cannot be lower than 16, regardless of armor worn.
- name: Blindness/Deafness
  level: 2
  school: necromancy
  attack_type: saving_throw
  save_type: con
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Blinded or Deafened
  condition_duration: 1 minute
  duration: 1 minute
  requires_concentration: false
  higher_levels: +1 target
  description: You can blind or deafen a foe. It must make a Constitution save. On failure, it is blinded or deafened (your
    choice). It repeats the save at the end of each turn.
- name: Blur
  level: 2
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: Your body becomes blurred. Attack rolls against you have disadvantage.
- name: Calm Emotions
  level: 2
  school: enchantment
  attack_type: saving_throw
  save_type: cha
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 20-foot radius
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: Each humanoid in a 20-foot radius must make a Charisma save. On failure, you suppress any charm or frightened
    effects, or make creatures indifferent about hostile targets.
- name: Cloud of Daggers
  level: 2
  school: conjuration
  attack_type: automatic
  damage_dice: 4d4
  damage_modifier: 0
  damage_type: slashing
  aoe: true
  aoe_shape: cube
  aoe_size: 5-foot cube
  duration: Concentration, up to 1 minute
  requires_concentration: true
  higher_levels: +2d4
  description: You fill a 5-foot cube with spinning daggers. A creature takes 4d4 slashing when it first enters on a turn
    or ends its turn there.
- name: Continual Flame
  level: 2
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Until dispelled
  requires_concentration: false
  description: A flame springs from an object, equivalent to a torch. It produces no heat, doesn't consume oxygen, and cannot
    be smothered or quenched. Lasts until dispelled.
- name: Darkness
  level: 2
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 15-foot radius
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: Magical darkness fills a 15-foot-radius sphere. Darkvision cannot see through it. Nonmagical light cannot illuminate
    it. Completely covering the source blocks the darkness.
- name: Darkvision
  level: 2
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 8 hours
  requires_concentration: false
  description: A willing creature gains 60-foot darkvision for the duration.
- name: Enhance Ability
  level: 2
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 hour
  requires_concentration: true
  description: A creature gains advantage on one ability check type and additional benefits (temporary HP, double carry capacity,
    etc.) based on the chosen ability.
- name: Enlarge/Reduce
  level: 2
  school: transmutation
  attack_type: saving_throw
  save_type: con
  save_half: false
  damage_dice: 1d4
  damage_modifier: 0
  damage_type: ''
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: A creature or object doubles or halves in size. If enlarged, it has advantage on Strength checks/saves and
    deals +1d4 weapon damage. If reduced, disadvantage on Strength checks/saves, -1d4 weapon damage.
- name: Find Steed
  level: 2
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: You summon a spirit that assumes the form of a loyal, intelligent warhorse, pony, camel, elk, or mastiff. It
    acts independently but obeys your commands.
- name: Find Traps
  level: 2
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: You sense any trap within line of sight and 120 feet. The spell reveals the general nature of the danger but
    not its exact location or how to disarm it.
- name: Flame Blade
  level: 2
  school: evocation
  attack_type: attack_roll
  damage_dice: 3d6
  damage_modifier: 0
  damage_type: fire
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  higher_levels: +1d6
  description: A blade of fire appears in your hand. You can make a melee spell attack dealing 3d6 fire on hit. You can also
    make the attack on subsequent turns as an action.
- name: Flaming Sphere
  level: 2
  school: conjuration
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 2d6
  damage_modifier: 0
  damage_type: fire
  aoe: true
  aoe_shape: sphere
  aoe_size: 5-foot diameter
  duration: Concentration, up to 1 minute
  requires_concentration: true
  higher_levels: +1d6
  description: A 5-foot-diameter sphere of fire rolls across the battlefield. Creatures ending their turn within 5 feet must
    make a Dexterity save. You can ram it as a bonus action for the same damage.
- name: Gentle Repose
  level: 2
  school: necromancy
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 10 days
  requires_concentration: false
  ritual: true
  description: You touch a corpse or remains. The target is protected from decay and cannot become undead for the duration.
    Also effectively extends the time limit on raising the target from the dead.
- name: Gust of Wind
  level: 2
  school: evocation
  attack_type: saving_throw
  save_type: str
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: line
  aoe_size: 60-foot line, 10 feet wide
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: A line of strong wind 60 feet long and 10 feet wide blasts from you. Creatures starting their turn in the line
    must succeed on a Strength save or be pushed 15 feet away. Disperses gas or vapor and extinguishes small flames.
- name: Heat Metal
  level: 2
  school: transmutation
  attack_type: saving_throw
  save_type: con
  save_half: false
  damage_dice: 2d8
  damage_modifier: 0
  damage_type: fire
  duration: Concentration, up to 1 minute
  requires_concentration: true
  higher_levels: +1d8
  description: A manufactured metal object you can see becomes red-hot. Any creature in contact takes 2d8 fire damage. As
    a bonus action on later turns, you can deal the damage again. If the object is held/worn, disadvantage on attacks/ability
    checks.
- name: Hold Person
  level: 2
  school: enchantment
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Paralyzed
  condition_duration: Concentration, up to 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  higher_levels: +1 target
  description: A humanoid must make a Wisdom save or be paralyzed. It repeats the save at the end of each of its turns. With
    a 3rd+ level slot, you can target one additional humanoid per level above 2nd.
- name: Invisibility
  level: 2
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Invisible
  condition_duration: Concentration, up to 1 hour
  duration: Concentration, up to 1 hour
  requires_concentration: true
  higher_levels: +1 target
  description: A creature you touch becomes invisible. Anything worn or carried is invisible as well. The spell ends if the
    target attacks or casts a spell.
- name: Knock
  level: 2
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: An object that is barred by mundane means or a lock unlocks or unlatches. Stuck doors swing open. Arcane Lock
    is suppressed for 10 minutes.
- name: Lesser Restoration
  level: 2
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: healing
  healing: true
  flat_healing: true
  duration: Instantaneous
  requires_concentration: false
  description: 'You touch a creature and end one disease or condition: blinded, deafened, paralyzed, or poisoned.'
- name: Levitate
  level: 2
  school: transmutation
  attack_type: saving_throw
  save_type: con
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Levitating
  condition_duration: Concentration, up to 10 minutes
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: A creature or loose object rises vertically up to 20 feet and remains suspended. An unwilling creature makes
    a Constitution save. The target can move only by pushing or pulling against a fixed surface.
- name: Locate Object
  level: 2
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: You sense the direction of a familiar object within 1,000 feet. This spell cannot locate objects blocked by
    lead.
- name: Magic Mouth
  level: 2
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Until dispelled
  requires_concentration: false
  ritual: true
  description: You implant a message within an object. When a specified trigger occurs (visual or audible within 30 feet),
    the mouth appears and delivers the message.
- name: Magic Weapon
  level: 2
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  is_supplementary: true
  duration: Concentration, up to 1 hour
  requires_concentration: true
  buffs:
    attack_rolls: '+1'
    damage_rolls: '+1'
  higher_levels: +1 bonus every 2 levels above 2nd (max +3)
  description: A nonmagical weapon becomes a +1 magic weapon for the duration.
- name: Mirror Image
  level: 2
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Illusory Duplicates
  condition_duration: 1 minute
  duration: 1 minute
  requires_concentration: false
  description: Three illusory duplicates appear in your space. Each time you're targeted by an attack or harmful spell, roll
    a d20 to see if it hits a duplicate instead. A duplicate's AC equals 10 + your Dexterity modifier and is destroyed when
    hit.
- name: Misty Step
  level: 2
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Teleported
  condition_duration: Instant
  duration: Instantaneous
  requires_concentration: false
  description: Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space you can see.
- name: Moonbeam
  level: 2
  school: evocation
  attack_type: saving_throw
  save_type: con
  save_half: true
  damage_dice: 2d10
  damage_modifier: 0
  damage_type: radiant
  aoe: true
  aoe_shape: cylinder
  aoe_size: 5-foot radius, 40-foot high
  duration: Concentration, up to 1 minute
  requires_concentration: true
  higher_levels: +1d10
  description: A silvery beam of pale light shines down. Creatures entering the area or ending their turn there must make
    a Constitution save. Shapechangers have disadvantage. A shapechanger that fails instantly reverts to its natural form.
- name: Pass Without Trace
  level: 2
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 30-foot radius
  duration: Concentration, up to 1 hour
  requires_concentration: true
  buffs:
    stealth_checks: '+10'
  description: A veil of shadows and silence emanates from you. You and creatures within 30 feet get +10 to Dexterity (Stealth)
    checks and cannot be tracked except by magical means.
- name: Phantasmal Force
  level: 2
  school: illusion
  attack_type: saving_throw
  save_type: int
  save_half: false
  damage_dice: 1d6
  damage_modifier: 0
  damage_type: psychic
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: You craft an illusion so vivid it takes root in the target's mind. It must make an Intelligence save. On failure,
    it sees and feels whatever you imagine and takes 1d6 psychic each turn it interacts with the illusion.
- name: Prayer of Healing
  level: 2
  school: evocation
  attack_type: automatic
  damage_dice: 2d8
  damage_modifier: 0
  damage_type: healing
  healing: true
  duration: 10 minutes (casting time)
  requires_concentration: false
  higher_levels: +1d8
  description: Up to six creatures you can see regain 2d8 + your spellcasting ability modifier hit points. This spell has
    no effect on undead or constructs.
- name: Protection from Poison
  level: 2
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 hour
  requires_concentration: false
  description: You touch a creature. It has advantage on saves against being poisoned and resistance to poison damage. If
    already poisoned, you neutralize one poison affecting it.
- name: Ray of Enfeeblement
  level: 2
  school: necromancy
  attack_type: attack_roll
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Weakened
  condition_duration: Concentration, up to 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: A black beam of enervating energy springs toward a creature. On a hit, the target deals only half damage with
    Strength-based weapon attacks for the duration. It can repeat the save at the end of each of its turns.
- name: Rope Trick
  level: 2
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 hour
  requires_concentration: false
  description: A rope rises into the air, leading to an extradimensional space that can hold up to eight Medium creatures.
    The rope can be pulled in to hide the entrance. Attacks and spells cannot cross the entrance.
- name: Scorching Ray
  level: 2
  school: evocation
  attack_type: attack_roll
  damage_dice: 2d6
  damage_modifier: 0
  damage_type: fire
  multi_hit: true
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +2d6
  description: You create three rays of fire and hurl them at one or more targets. Each ray requires a separate attack roll
    and deals 2d6 fire on hit.
- name: See Invisibility
  level: 2
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 hour
  requires_concentration: false
  description: For the duration, you see invisible creatures and objects as if they were visible, and you can see into the
    Ethereal Plane within your normal vision range.
- name: Shatter
  level: 2
  school: evocation
  attack_type: saving_throw
  save_type: con
  save_half: true
  damage_dice: 3d8
  damage_modifier: 0
  damage_type: thunder
  aoe: true
  aoe_shape: sphere
  aoe_size: 10-foot radius
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d8
  description: A sudden loud ringing noise erupts from a point. Creatures in a 10-foot radius make a Constitution save. On
    failure, 3d8 thunder. Constructs and objects made of stone/crystal/metal have disadvantage.
- name: Silence
  level: 2
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 20-foot radius
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  ritual: true
  description: A 20-foot-radius sphere of magical silence. No sound can be created within or pass through. Creatures inside
    are immune to thunder damage and deafened. Verbal spell components cannot be used inside.
- name: Spike Growth
  level: 2
  school: transmutation
  attack_type: automatic
  damage_dice: 2d4
  damage_modifier: 0
  damage_type: piercing
  aoe: true
  aoe_shape: sphere
  aoe_size: 20-foot radius
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: The ground in a 20-foot radius sprouts hard spikes and thorns. A creature moving through the area takes 2d4
    piercing damage for every 5 feet it travels. The area is difficult terrain and the spikes are camouflaged.
- name: Spiritual Weapon
  level: 2
  school: evocation
  attack_type: attack_roll
  damage_dice: 1d8
  damage_modifier: 0
  damage_type: force
  duration: 1 minute
  requires_concentration: false
  higher_levels: +1d8
  description: You create a floating, spectral weapon that attacks at range. Make a melee spell attack for 1d8 + your spellcasting
    ability modifier force. As a bonus action on subsequent turns, you can move it 20 feet and attack again.
- name: Suggestion
  level: 2
  school: enchantment
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Charmed (Suggested)
  condition_duration: Concentration, up to 8 hours
  duration: Concentration, up to 8 hours
  requires_concentration: true
  description: You suggest a reasonable course of activity to a creature. It must make a Wisdom save. On failure, it pursues
    the activity to the best of its ability. The suggestion must be worded to sound reasonable.
- name: Web
  level: 2
  school: conjuration
  attack_type: saving_throw
  save_type: dex
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: cube
  aoe_size: 20-foot cube
  condition: Restrained
  condition_duration: Concentration, up to 1 hour
  duration: Concentration, up to 1 hour
  requires_concentration: true
  description: A mass of thick, sticky webbing fills a 20-foot cube. The area is difficult terrain and lightly obscures. Creatures
    entering or starting their turn must make a Dexterity save or be restrained. A restrained creature can use its action
    to make a Strength check to escape. The webs are flammable.
- name: Zone of Truth
  level: 2
  school: enchantment
  attack_type: saving_throw
  save_type: cha
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 15-foot radius
  duration: 10 minutes
  requires_concentration: false
  description: A 15-foot-radius sphere where creatures cannot speak deliberate lies. Creatures entering or within must make
    a Charisma save. On failure, they cannot lie knowingly. You know whether each creature succeeds or fails.
- name: Animate Dead
  level: 3
  school: necromancy
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: You create an undead servant from a pile of bones or a corpse. The creature obeys your commands for 24 hours,
    after which you must recast to maintain control. Can create skeletons or zombies.
- name: Beacon of Hope
  level: 3
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 30-foot radius
  duration: Concentration, up to 1 minute
  requires_concentration: true
  buffs:
    wisdom_saves: advantage
    death_saves: advantage
  description: Choose any number of creatures within 30 feet. For the duration, they have advantage on Wisdom saves and death
    saves, and any healing they receive is maximized.
- name: Bestow Curse
  level: 3
  school: necromancy
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Cursed
  condition_duration: Concentration, up to 1 minute (or permanent at 5th+)
  duration: Concentration, up to 1 minute
  requires_concentration: true
  higher_levels: 'Duration increases: 10 min (4th), 8 hours (5th), 24 hours (7th), until dispelled (9th). Concentration required
    only at level 3-4.'
  description: 'A creature must make a Wisdom save or be cursed. Choose one curse: disadvantage on one ability check/save
    type, disadvantage on attacks vs you, lose its action on a failed Wisdom save each turn, or your attacks deal +1d8 necrotic
    extra.'
- name: Call Lightning
  level: 3
  school: conjuration
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 3d10
  damage_modifier: 0
  damage_type: lightning
  aoe: true
  aoe_shape: cylinder
  aoe_size: 5-foot radius, 60-foot high
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  higher_levels: +1d10
  description: A storm cloud appears overhead. On each of your turns, you can call down a bolt of lightning to strike a point.
    If outdoors in stormy conditions, damage increases by 1d10.
- name: Clairvoyance
  level: 3
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: You create an invisible sensor in a familiar or obvious location visible or audible to you. You can see or
    hear (but not both) through the sensor. Can be blocked by lead.
- name: Conjure Barrage
  level: 3
  school: conjuration
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 3d8
  damage_modifier: 0
  damage_type: piercing
  aoe: true
  aoe_shape: cone
  aoe_size: 60-foot cone
  duration: Instantaneous
  requires_concentration: false
  description: You throw a nonmagical weapon or fire ammunition into the air, creating a cone of identical spectral weapons.
    Creatures in the cone make a Dexterity save. The damage type matches the weapon/ammunition used.
- name: Counterspell
  level: 3
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Spell Interrupted
  condition_duration: Instant
  duration: Instantaneous
  requires_concentration: false
  description: 'Cast as a reaction when a creature within 60 feet casts a spell. If 3rd level or lower, the spell fails. If
    4th or higher, make an ability check using your spellcasting ability (DC = 10 + spell''s level). On success, the spell
    fails. Upcast: automatically counters spells of the slot level used.'
- name: Daylight
  level: 3
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 60-foot radius bright, 60-foot dim
  duration: 1 hour
  requires_concentration: false
  description: A 60-foot-radius sphere of bright light with another 60 feet of dim light. The light is sunlight.
- name: Dispel Magic
  level: 3
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: 'Choose one creature, object, or magical effect. Any spell of 3rd level or lower on the target ends. For each
    spell of 4th level or higher, make a check (DC 10 + spell level). On success, the spell ends. Upcast: automatically dispels
    spells of the slot level used.'
- name: Fear
  level: 3
  school: illusion
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: cone
  aoe_size: 30-foot cone
  condition: Frightened
  condition_duration: Concentration, up to 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: Creatures in a 30-foot cone must make a Wisdom save. On failure, they drop what they are holding and become
    frightened, using the Dash action each turn to move away. They can repeat the save at the end of each turn once out of
    line of sight.
- name: Fireball
  level: 3
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 6d6
  damage_modifier: 0
  damage_type: fire
  aoe: true
  aoe_shape: sphere
  aoe_size: 20-foot radius
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d6
  description: A bright streak flashes to a point and blossoms into an explosion of flame. Each creature in a 20-foot-radius
    sphere must make a Dexterity save. The fire spreads around corners and ignites flammable objects.
- name: Fly
  level: 3
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  buffs:
    speed: fly 60
  higher_levels: +1 target
  description: A willing creature gains 60-foot flying speed for the duration. When the spell ends, the target falls unless
    it can stop it.
- name: Gaseous Form
  level: 3
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Gaseous
  condition_duration: Concentration, up to 1 hour
  duration: Concentration, up to 1 hour
  requires_concentration: true
  description: A creature becomes a misty cloud with 10-foot fly speed. Resistant to nonmagical damage, advantage on Str/Dex/Con
    saves. Cannot attack, cast spells, talk, or manipulate objects. Can pass through small cracks.
- name: Glyph of Warding
  level: 3
  school: abjuration
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 5d8
  damage_modifier: 0
  damage_type: acid
  aoe: true
  aoe_shape: sphere
  aoe_size: 20-foot radius
  duration: Until dispelled or triggered
  requires_concentration: false
  higher_levels: +1d8
  description: 'An inscribed glyph explodes when triggered. Damage type: acid, cold, fire, lightning, or thunder. Creatures
    in a 20-foot radius make a Dexterity save. You can also store a spell of 3rd level or lower (up to the slot used).'
- name: Haste
  level: 3
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  buffs:
    speed: doubled
    armor_class: '+2'
    dexterity_saves: advantage
    extra_action: one additional action (limited options)
  description: A willing creature's speed is doubled, gains +2 AC, advantage on Dexterity saves, and an additional action
    each turn (Attack one weapon attack only, Dash, Disengage, Hide, or Use an Object). When the spell ends, the target is
    stunned for one round.
- name: Hypnotic Pattern
  level: 3
  school: illusion
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: cube
  aoe_size: 30-foot cube
  condition: Charmed (Incapacitated)
  condition_duration: Concentration, up to 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: A twisting pattern of colors fills a 30-foot cube. Creatures seeing it must make a Wisdom save. On failure,
    they become charmed and incapacitated with speed 0. The effect ends if the creature takes damage or is shaken awake.
- name: Leomund's Tiny Hut
  level: 3
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 10-foot radius
  duration: 8 hours
  requires_concentration: false
  ritual: true
  description: A 10-foot-radius dome of force appears. The inside is comfortable and dry. Creatures and objects inside at
    the time of casting can pass freely; all others cannot. Spells and attacks cannot pass through.
- name: Lightning Bolt
  level: 3
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 6d6
  damage_modifier: 0
  damage_type: lightning
  aoe: true
  aoe_shape: line
  aoe_size: 100-foot line, 5 feet wide
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d6
  description: A stroke of lightning 100 feet long and 5 feet wide blasts from you. Creatures in the line must make a Dexterity
    save. The lightning ignites flammable objects.
- name: Magic Circle
  level: 3
  school: abjuration
  attack_type: saving_throw
  save_type: cha
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: cylinder
  aoe_size: 10-foot radius, 20-foot tall
  duration: 1 hour
  requires_concentration: false
  higher_levels: 'Duration: 2 hours (4th), 3 hours (5th), etc.'
  description: A 10-foot-radius, 20-foot-tall cylinder of silver energy. You can bind it against celestials, elementals, fey,
    fiends, or undead. Such a creature cannot enter by nonmagical means, has disadvantage on attacks inside, and cannot be
    charmed/frightened/possessed. A trapped creature makes a Charisma save to escape.
- name: Mass Healing Word
  level: 3
  school: evocation
  attack_type: automatic
  damage_dice: 1d4
  damage_modifier: 0
  damage_type: healing
  healing: true
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d4
  description: Up to six creatures of your choice within range regain hit points equal to 1d4 + your spellcasting ability
    modifier. No effect on undead or constructs.
- name: Nondetection
  level: 3
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 8 hours
  requires_concentration: false
  description: A creature or object you touch cannot be targeted by divination magic or perceived through magical scrying
    sensors for the duration.
- name: Plant Growth
  level: 3
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 100-foot radius
  duration: Instantaneous
  requires_concentration: false
  description: In a 100-foot radius, all normal plants grow thick and overgrown, creating difficult terrain that costs 4 feet
    of movement per 1 foot traveled. Alternatively, you can enrich the land, doubling crop yield for one year.
- name: Protection from Energy
  level: 3
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 hour
  requires_concentration: true
  buffs:
    damage_resistance: chosen type (acid, cold, fire, lightning, or thunder)
  description: A willing creature gains resistance to one damage type you choose for the duration.
- name: Remove Curse
  level: 3
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: All curses affecting one creature or object end. For a cursed magic item, the bearer's attunement to it ends.
    This spell does not remove a curse from a cursed shield, weapon, or armor, but it does break attunement.
- name: Revivify
  level: 3
  school: necromancy
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: You touch a creature that has died within the last minute. It returns to life with 1 hit point. Cannot return
    a creature killed by old age or missing body parts. Consumes 300 gp of diamond dust.
- name: Sending
  level: 3
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 round
  requires_concentration: false
  description: You send a short message of up to 25 words to a creature you are familiar with, regardless of distance or plane.
    The creature can reply in kind. The message can cross planar boundaries, with a 5% failure chance if on another plane.
- name: Slow
  level: 3
  school: transmutation
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: cube
  aoe_size: 40-foot cube
  condition: Slowed
  condition_duration: Concentration, up to 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: 'Up to six creatures in a 40-foot cube make a Wisdom save. On failure: speed halved, -2 AC and Dexterity saves,
    cannot use reactions, can only take an action OR bonus action, only one attack per Attack action. Spellcasting may take
    an extra round. Targets repeat the save at end of turns.'
- name: Speak with Dead
  level: 3
  school: necromancy
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 10 minutes
  requires_concentration: false
  description: You grant a semblance of life to a corpse, allowing it to answer up to five questions. The corpse knows only
    what it knew in life and answers are often brief, cryptic, or repetitive. Cannot have been used on the corpse in the last
    10 days.
- name: Spirit Guardians
  level: 3
  school: conjuration
  attack_type: saving_throw
  save_type: wis
  save_half: true
  damage_dice: 3d8
  damage_modifier: 0
  damage_type: radiant
  aoe: true
  aoe_shape: sphere
  aoe_size: 15-foot radius
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  higher_levels: +1d8
  description: Spirits flit around you. Creatures of your choice that start their turn within 15 feet must make a Wisdom save.
    On failure, 3d8 radiant or necrotic (your choice). Speed halved in the area.
- name: Stinking Cloud
  level: 3
  school: conjuration
  attack_type: saving_throw
  save_type: con
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 20-foot radius
  condition: Incapacitated
  condition_duration: Concentration, up to 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: A 20-foot-radius sphere of yellow, nauseating gas. It heavily obscures. Creatures starting their turn must
    make a Constitution save. On failure, they are incapacitated and spend their action retching. They repeat the save upon
    leaving.
- name: Tongues
  level: 3
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 hour
  requires_concentration: false
  description: A creature you touch understands any spoken language and any creature that speaks at least one language understands
    it.
- name: Vampiric Touch
  level: 3
  school: necromancy
  attack_type: attack_roll
  damage_dice: 3d6
  damage_modifier: 0
  damage_type: necrotic
  duration: Concentration, up to 1 minute
  requires_concentration: true
  higher_levels: +1d6
  description: Your shadow-wrapped hand deals 3d6 necrotic on a melee spell attack hit. You regain half the damage as HP.
    You can repeat the attack as an action on subsequent turns without spending another slot.
- name: Water Breathing
  level: 3
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 24 hours
  requires_concentration: false
  ritual: true
  description: Up to ten willing creatures gain the ability to breathe underwater for the duration.
- name: Water Walk
  level: 3
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 hour
  requires_concentration: false
  ritual: true
  description: Up to ten willing creatures can walk on liquid surfaces as if solid ground for the duration. They can also
    traverse acid, lava, and similar hazards safely (halved damage if submerged).
- name: Wind Wall
  level: 3
  school: evocation
  attack_type: automatic
  damage_dice: 3d8
  damage_modifier: 0
  damage_type: bludgeoning
  aoe: true
  aoe_shape: line
  aoe_size: 50-foot long, 15-foot high, 1-foot thick
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: A wall of strong wind rises. It blocks arrows, bolts, and other small projectiles automatically. Creatures
    passing through must make a Strength save or take 3d8 bludgeoning; on success they pass but take no damage. The wall disperses
    gas and vapor.
- name: Arcane Eye
  level: 4
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 hour
  requires_concentration: true
  description: You create an invisible magical eye that sends visual information to you. It has 30 ft. darkvision, can look
    in any direction, and travels up to 30 ft. per round.
- name: Banishment
  level: 4
  school: abjuration
  attack_type: saving_throw
  save_type: cha
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Banished
  condition_duration: Concentration, up to 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  higher_levels: +1 target
  description: A creature you can see must make a Charisma save or be banished to a harmless demiplane. If native to another
    plane, it is sent there instead and remains until the spell ends. If native to the current plane, it is incapacitated
    while banished.
- name: Blight
  level: 4
  school: necromancy
  attack_type: saving_throw
  save_type: con
  save_half: true
  damage_dice: 8d8
  damage_modifier: 0
  damage_type: necrotic
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d8
  description: Necromantic energy washes over a creature. Plant creatures and magical plants have disadvantage and take maximum
    damage.
- name: Confusion
  level: 4
  school: enchantment
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 10-foot radius
  condition: Confused
  condition_duration: Concentration, up to 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  higher_levels: +5-foot radius
  description: 'Creatures in a 10-foot-radius sphere must make a Wisdom save. On failure, roll a d10 at the start of each
    of their turns: 1 = move random direction, 2-6 = no move/action, 7-8 = attack nearest, 9-10 = act normally. Repeat save
    at end of turn.'
- name: Conjure Minor Elementals
  level: 4
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 hour
  requires_concentration: true
  higher_levels: Doubles elementals summoned
  description: You summon elementals of challenge rating 2 or lower from a chosen area. They are friendly and obey verbal
    commands.
- name: Control Water
  level: 4
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: cube
  aoe_size: 100-foot cube
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: You control a 100-foot cube of water. You can raise/lower the water, redirect its flow, create a whirlpool,
    or part it to create a trench.
- name: Death Ward
  level: 4
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 8 hours
  requires_concentration: false
  description: A touched creature gains a ward against death. The first time it would drop to 0 HP, it instead drops to 1
    HP. Also protects against instant-death effects that don't deal damage.
- name: Dimension Door
  level: 4
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Teleported
  condition_duration: Instant
  duration: Instantaneous
  requires_concentration: false
  description: You teleport up to 500 feet to an unoccupied space you can see or visualize. You can bring one willing creature
    of your size or smaller.
- name: Divination
  level: 4
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  ritual: true
  description: You ask a god or a god's servant a single question about a specific goal, event, or activity within the next
    7 days. You receive a truthful reply — a short phrase, cryptic rhyme, or omen.
- name: Dominate Beast
  level: 4
  school: enchantment
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Dominated
  condition_duration: Concentration, up to 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: A beast you can see must make a Wisdom save or be charmed. You establish a telepathic link and can issue precise
    commands. It obeys to the best of its ability. It repeats the save when damaged.
- name: Evard's Black Tentacles
  level: 4
  school: conjuration
  attack_type: saving_throw
  save_type: dex
  save_half: false
  damage_dice: 3d6
  damage_modifier: 0
  damage_type: bludgeoning
  aoe: true
  aoe_shape: square
  aoe_size: 20-foot square
  condition: Restrained
  condition_duration: Concentration, up to 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: Black tentacles fill a 20-foot square. The area is difficult terrain. Creatures entering or starting their
    turn must make a Dexterity save. On failure, they take 3d6 bludgeoning and are restrained. They can use their action to
    make a Strength or Dexterity check to escape.
- name: Fabricate
  level: 4
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: You convert raw materials into products of the same material. You can craft a bridge from lumber, rope from
    hemp, clothes from flax or wool, etc. Requires tool proficiency and the raw materials.
- name: Fire Shield
  level: 4
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: false
  damage_dice: 2d8
  damage_modifier: 0
  damage_type: fire
  damage_type_alt: cold
  duration: 10 minutes
  requires_concentration: false
  description: Wispy flames (warm or chill shield) surround you for 10 minutes. Melee attackers take 2d8 fire or cold damage.
    You have resistance to cold (warm shield) or fire (chill shield), and shed light.
- name: Freedom of Movement
  level: 4
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 hour
  requires_concentration: false
  description: A creature you touch cannot be restrained, grappled, or have its speed reduced by nonmagical terrain, spells,
    or other magical effects. It can spend 5 feet of movement to escape from restraints or grapples.
- name: Giant Insect
  level: 4
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: You transform centipedes, spiders, scorpions, or beetles into giant versions. They obey verbal commands and
    fight with you.
- name: Grasping Vine
  level: 4
  school: conjuration
  attack_type: saving_throw
  save_type: dex
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Pulled
  condition_duration: Instant
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: A vine sprouts from the ground. As a bonus action, you can direct it to pull a creature within 30 feet. The
    creature makes a Dexterity save or is pulled 20 feet toward the vine.
- name: Greater Invisibility
  level: 4
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Invisible
  condition_duration: Concentration, up to 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: A creature becomes invisible for the duration. Unlike the 2nd-level Invisibility spell, this does not end when
    the target attacks or casts a spell.
- name: Guardian of Faith
  level: 4
  school: conjuration
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 20
  damage_modifier: 0
  damage_type: radiant
  flat_healing: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 10-foot radius
  duration: 8 hours
  requires_concentration: false
  description: A Large spectral guardian appears and guards a 10-foot-radius area. Any hostile creature entering the area
    for the first time on a turn must make a Dexterity save, taking 20 radiant damage on failure. The guardian vanishes after
    dealing 60 total damage.
- name: Hallucinatory Terrain
  level: 4
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: cube
  aoe_size: 150-foot cube
  duration: 24 hours
  requires_concentration: false
  description: You make natural terrain look, sound, and feel like another type. A road becomes a swamp, a plain a mountain,
    etc. Structures and equipment remain unchanged. A creature making an Intelligence (Investigation) check against your spell
    save DC can see through the illusion.
- name: Ice Storm
  level: 4
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 2d8
  damage_modifier: 0
  damage_type: bludgeoning
  extra_damage_dice: 4d6
  extra_damage_type: cold
  aoe: true
  aoe_shape: cylinder
  aoe_size: 20-foot radius, 40-foot high
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d8
  extra_higher_levels: +1d6
  description: Hail of rock-hard ice pounds the ground. Creatures take bludgeoning and cold damage. The area becomes difficult
    terrain until the end of your next turn.
- name: Leomund's Secret Chest
  level: 4
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: You hide a chest in the Ethereal Plane. It can be recalled with an action for 60 days, after which there is
    a cumulative 5 percent chance per day the connection is lost.
- name: Locate Creature
  level: 4
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 hour
  requires_concentration: true
  description: You sense the direction of a familiar creature within 1,000 feet. This spell cannot locate creatures blocked
    by running water.
- name: Otiluke's Resilient Sphere
  level: 4
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Trapped
  condition_duration: Concentration, up to 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: A sphere of shimmering force encloses a Large or smaller creature. Nothing can pass through the sphere. The
    trapped creature can use its action to make a Strength check against your spell save DC to break out.
- name: Phantasmal Killer
  level: 4
  school: illusion
  attack_type: saving_throw
  save_type: wis
  save_half: true
  damage_dice: 4d10
  damage_modifier: 0
  damage_type: psychic
  duration: Concentration, up to 1 minute
  requires_concentration: true
  higher_levels: +1d10
  description: You tap into a creature's nightmares. It must make a Wisdom save. On failure, it takes 4d10 psychic and is
    frightened. It repeats the save at the end of each of its turns.
- name: Polymorph
  level: 4
  school: transmutation
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Polymorphed
  condition_duration: Concentration, up to 1 hour
  duration: Concentration, up to 1 hour
  requires_concentration: true
  description: A creature transforms into a beast (CR <= level or CR, whichever is lower). It assumes the beast's game statistics,
    including HP, but retains its alignment and personality. When reduced to 0 HP, it reverts with its original HP.
- name: Stone Shape
  level: 4
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: You touch a stone object of Medium size or smaller at any point. You reshape it to any form that serves a purpose
    — a weapon, doorway, or coffer — forming a new shape. Fine mechanical detail is not possible.
- name: Stoneskin
  level: 4
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 hour
  requires_concentration: true
  buffs:
    damage_resistance: bludgeoning, piercing, slashing from nonmagical weapons
  description: A creature's body turns hard as stone. It has resistance to nonmagical bludgeoning, piercing, and slashing
    damage for the duration.
- name: Wall of Fire
  level: 4
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 5d8
  damage_modifier: 0
  damage_type: fire
  aoe: true
  aoe_shape: line
  aoe_size: 60-foot long, 20-foot high, 1-foot thick
  duration: Concentration, up to 1 minute
  requires_concentration: true
  higher_levels: +1d8
  description: A wall of fire erupts. One side deals 5d8 fire to creatures within 10 feet when it appears and when they end
    their turn there. The other side deals no damage. The wall can be shaped into a 20-foot-diameter ring instead.
- name: Animate Objects
  level: 5
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: Objects of your choice animate. As a bonus action, you mentally command any creature you made with this spell.
    The animated objects use a stat block based on their size, with attack bonuses and damage listed in the spell.
- name: Awaken
  level: 5
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: A Huge or smaller beast or plant gains intelligence 10 and the ability to speak one language you know. It is
    charmed by you for 30 days. Consumes a 1,000 gp agate.
- name: Cone of Cold
  level: 5
  school: evocation
  attack_type: saving_throw
  save_type: con
  save_half: true
  damage_dice: 8d8
  damage_modifier: 0
  damage_type: cold
  aoe: true
  aoe_shape: cone
  aoe_size: 60-foot cone
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d8
  description: A blast of cold air erupts from your hands in a 60-foot cone. Creatures make a Constitution save. Creatures
    killed by this spell become frozen statues until they thaw.
- name: Contact Other Plane
  level: 5
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 minute
  requires_concentration: false
  ritual: true
  description: You mentally contact a demigod, an ancient sage, or a mysterious entity from another plane. You can ask up
    to five questions, receiving one-word answers. You risk a DC 15 Intelligence save or take 6d6 psychic damage and go insane
    until a long rest.
- name: Creation
  level: 5
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Special
  requires_concentration: false
  description: You pull shadow material to create a nonmagical object of vegetable or mineral matter. The object cannot be
    used as a spell component or perform tasks requiring high precision. Consumes a small sample of the material. Duration
    depends on the material.
- name: Dispel Evil and Good
  level: 5
  school: abjuration
  attack_type: saving_throw
  save_type: cha
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: 'Five functions, choose one: Break Enchantment (end charmed, frightened, or possessed on a touched creature),
    Dismissal (melee spell attack against a celestial, elemental, fey, or fiend — on hit, banish to its home plane for 24
    hours on a failed Charisma save), or protection against those creature types within 30 feet.

    '
- name: Dominate Person
  level: 5
  school: enchantment
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Dominated
  condition_duration: Concentration, up to 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  higher_levels: 'Duration: 10 min (6th), 1 hour (7th), 8 hours (8th)'
  description: A humanoid you can see must make a Wisdom save or be charmed and dominated. You share a telepathic link and
    can issue precise commands the target follows to the best of its ability. It repeats the save when damaged.
- name: Dream
  level: 5
  school: illusion
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 3d6
  damage_modifier: 0
  damage_type: psychic
  duration: 8 hours
  requires_concentration: false
  description: You shape a creature's dreams when it sleeps. You can deliver a message of any length, or send a nightmare
    that deals 3d6 psychic on a failed Wisdom save, prevents rest benefits, and causes exhaustion. Creatures that don't sleep
    are immune.
- name: Flame Strike
  level: 5
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 4d6
  damage_modifier: 0
  damage_type: fire
  extra_damage_dice: 4d8
  extra_damage_type: radiant
  aoe: true
  aoe_shape: cylinder
  aoe_size: 10-foot radius, 40-foot high
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d6
  extra_higher_levels: +1d8
  description: A vertical column of divine fire roars down from above. Creatures in a 10-foot-radius, 40-foot-high cylinder
    make a Dexterity save.
- name: Geas
  level: 5
  school: enchantment
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 5d10
  damage_modifier: 0
  damage_type: psychic
  condition: Geased
  condition_duration: 30 days
  duration: 30 days
  requires_concentration: false
  higher_levels: 'Duration: 1 year (7th), until dispelled (9th)'
  description: A creature must make a Wisdom save or become charmed for the duration. You issue a command it must follow.
    If it acts counter to your instructions, it takes 5d10 psychic damage (once per day).
- name: Greater Restoration
  level: 5
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: You remove one effect that reduces ability scores, or one effect that charms/petrifies the target, or one curse
    (including attunement to a cursed item), or any reduction to hit point maximum. Also ends one level of exhaustion. Consumes
    100 gp of diamond dust.
- name: Hallow
  level: 5
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 60-foot radius
  duration: Until dispelled
  requires_concentration: false
  description: 'A 60-foot-radius area becomes hallowed ground. You choose an additional effect: Courage (no frightened), Darkness
    (magical darkness), Daylight (bright sunlight), Energy Protection (resistance to one damage type), Energy Vulnerability,
    Everlasting Rest (undead cannot be raised), Extradimensional Interference, Fear, Silence, or Tongues. Consumes 1,000 gp
    of herbs, oils, and incense.'
- name: Hold Monster
  level: 5
  school: enchantment
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Paralyzed
  condition_duration: Concentration, up to 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  higher_levels: +1 target
  description: A creature must make a Wisdom save or be paralyzed. Unlike Hold Person, this works on any creature type. The
    target repeats the save at the end of each of its turns.
- name: Insect Plague
  level: 5
  school: conjuration
  attack_type: saving_throw
  save_type: con
  save_half: true
  damage_dice: 4d10
  damage_modifier: 0
  damage_type: piercing
  aoe: true
  aoe_shape: sphere
  aoe_size: 20-foot radius
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  higher_levels: +1d10
  description: Swarming, biting locusts fill a 20-foot-radius sphere that lightly obscures. Creatures entering or starting
    their turn must make a Constitution save.
- name: Legend Lore
  level: 5
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: You name or describe a person, place, or object of legendary importance. You learn a brief summary of the significant
    lore about it. If the thing is at hand, the casting time is shorter. Consumes 250 gp of incense, plus four ivory strips
    worth 50 gp each.
- name: Mass Cure Wounds
  level: 5
  school: evocation
  attack_type: automatic
  damage_dice: 3d8
  damage_modifier: 0
  damage_type: healing
  healing: true
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d8
  description: A wave of healing energy washes out from a point you choose. Up to six creatures regain hit points equal to
    3d8 + your spellcasting ability modifier. No effect on undead or constructs.
- name: Mislead
  level: 5
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 hour
  requires_concentration: true
  description: You become invisible and an illusory double of you appears where you stand. The double moves, speaks, and gestures
    per your direction. You can see and hear through its senses as if you were there. The invisibility ends if you attack
    or cast a spell.
- name: Modify Memory
  level: 5
  school: enchantment
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Altered Memories
  condition_duration: Permanent
  duration: Instantaneous
  requires_concentration: true
  description: You reshape a creature's memory. It must make a Wisdom save or you alter up to 10 minutes of its memory from
    the last 24 hours. You can eliminate all recollection, change how it remembers, or implant a memory. The affected memory
    is permanent. A Remove Curse or Greater Restoration can restore the true memory.
- name: Planar Binding
  level: 5
  school: abjuration
  attack_type: saving_throw
  save_type: cha
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Bound
  condition_duration: 24 hours (or longer with higher slots)
  duration: 24 hours
  requires_concentration: false
  higher_levels: 'Duration: 10 days (6th), 30 days (7th), 180 days (8th), 1 year + 1 day (9th).'
  description: A celestial, elemental, fey, or fiend must make a Charisma save or be bound to your service for the duration.
    It follows your commands. The spell is cast as an action but requires the creature to be within range for the full 1-hour
    casting time.
- name: Raise Dead
  level: 5
  school: necromancy
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: You return a dead creature that has been dead no longer than 10 days to life with 1 hit point. Cannot raise
    creatures that died of old age or are missing body parts. The raised creature suffers a -4 penalty to all attack rolls,
    saves, and ability checks, diminishing by 1 per long rest. Consumes a 500 gp diamond.
- name: Scrying
  level: 5
  school: divination
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: You can see and hear a particular creature you are familiar with. The target makes a Wisdom save modified by
    how well you know it and your physical connection to it. The sensor is invisible and follows the target.
- name: Seeming
  level: 5
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 8 hours
  requires_concentration: false
  description: You can make any number of creatures you can see look different for the duration. You choose each creature's
    new appearance (clothing, armor, weapons, and equipment). The disguise can be revealed by an Intelligence (Investigation)
    check against your save DC.
- name: Telekinesis
  level: 5
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: You exert your will on a creature or object you can see. You can move a Huge or smaller creature (up to 30
    feet per action after winning a Strength contest) or manipulate an object up to 1,000 pounds. As an action, you can hurl
    creatures or objects for 1d6 per 10 pounds (max 100d6) at a target.
- name: Teleportation Circle
  level: 5
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: circle
  aoe_size: 10-foot diameter
  duration: 1 round
  requires_concentration: false
  description: You draw a 10-foot-diameter circle on the ground that links to a permanent teleportation circle of your choice
    whose sigil sequence you know. Any creature entering the portal instantly teleports. You can create a permanent circle
    by casting this spell in the same spot daily for one year.
- name: Wall of Stone
  level: 5
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: line
  aoe_size: Up to ten 10-foot-by-10-foot panels, 6 inches thick
  duration: Concentration, up to 10 minutes (permanent if concentrated for full duration)
  requires_concentration: true
  description: A nonmagical wall of solid stone appears at a point you choose. It can be shaped, including crenellations and
    battlements. The wall has AC 15 and 30 HP per inch of thickness. Reducing a panel to 0 HP destroys it. If you maintain
    concentration for the full duration, the wall becomes permanent.
- name: Blade Barrier
  level: 6
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 6d10
  damage_modifier: 0
  damage_type: slashing
  aoe: true
  aoe_shape: line
  aoe_size: 100-foot long, 20-foot high, 5-foot thick
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  higher_levels: +1d10
  description: A wall of whirling blades appears. Creatures in the area when it appears make a Dexterity save. Creatures passing
    through must also save. The wall provides three-quarters cover.
- name: Chain Lightning
  level: 6
  school: evocation
  attack_type: attack_roll
  damage_dice: 10d6
  damage_modifier: 0
  damage_type: lightning
  aoe: true
  aoe_shape: line
  aoe_size: Arcs to up to 3 secondary targets within 30 feet
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d6
  description: A bolt of lightning streaks toward a target. On a hit, it takes 10d6 lightning. The lightning then arcs to
    up to three additional targets within 30 feet, each taking half the damage.
- name: Circle of Death
  level: 6
  school: necromancy
  attack_type: saving_throw
  save_type: con
  save_half: true
  damage_dice: 8d6
  damage_modifier: 0
  damage_type: necrotic
  aoe: true
  aoe_shape: sphere
  aoe_size: 60-foot radius
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +2d6
  description: A sphere of negative energy radiates from a point in a 60-foot radius. Creatures in the area must make a Constitution
    saving throw.
- name: Create Undead
  level: 6
  school: necromancy
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  higher_levels: Creates additional or more powerful undead
  description: You create up to three ghouls from corpses. They obey your commands for 24 hours. You must recast before each
    24-hour period to maintain control. Higher slots create ghasts, wights, or mummies.
- name: Disintegrate
  level: 6
  school: transmutation
  attack_type: saving_throw
  save_type: dex
  save_half: false
  damage_dice: 10d6
  damage_modifier: 40
  damage_type: force
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +3d6
  description: A thin green ray springs from your pointing finger. The target makes a Dexterity save. On failure, it takes
    10d6+40 force. If reduced to 0 HP, it is disintegrated. The ray can also disintegrate a 10-foot cube of nonmagical matter.
- name: Eyebite
  level: 6
  school: necromancy
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Asleep, Panicked, or Sickened
  condition_duration: Concentration, up to 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: 'Your eyes become black voids. On each of your turns until the spell ends, you can target one creature you
    can see. Choose one effect: Asleep (unconscious, wakes on damage/shake), Panicked (frightened, must Dash away), or Sickened
    (disadvantage on attacks/checks).'
- name: Find the Path
  level: 6
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 day
  requires_concentration: true
  description: You determine the shortest, most direct physical route to a specific fixed location. The spell works on any
    destination, even on another plane, provided you have visited it or have a clear description.
- name: Flesh to Stone
  level: 6
  school: transmutation
  attack_type: saving_throw
  save_type: con
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Petrified
  condition_duration: Permanent (after 3 failed saves)
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: A creature makes a Constitution save. On failure, it is restrained and must repeat the save at the end of each
    of its turns. After three failed saves, it is permanently petrified. After three successes, the spell ends.
- name: Forbiddance
  level: 6
  school: abjuration
  attack_type: automatic
  damage_dice: 5d10
  damage_modifier: 0
  damage_type: radiant
  aoe: true
  aoe_shape: cube
  aoe_size: Up to a 40,000-square-foot area, 30 feet high
  duration: 1 day (permanent if cast daily for 30 days)
  requires_concentration: false
  ritual: true
  description: You ward a large area against planar travel and one creature type (celestials, elementals, fey, fiends, or
    undead). Such creatures cannot enter and take 5d10 radiant or necrotic if they start their turn there. Consumes 1,000
    gp of holy water, rare incense, and powdered ruby.
- name: Globe of Invulnerability
  level: 6
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 10-foot radius
  duration: Concentration, up to 1 minute
  requires_concentration: true
  higher_levels: Blocks spells of level = slot level - 1 or lower
  description: An immobile barrier surrounds you in a 10-foot radius. Spells of 5th level or lower cast from outside the barrier
    cannot affect creatures or objects inside, even if upcast.
- name: Guards and Wards
  level: 6
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: cube
  aoe_size: Up to a 2,500-square-foot area
  duration: 24 hours (permanent if cast daily for one year)
  requires_concentration: false
  description: 'You create a ward protecting the area with: fog (heavily obscured), locked doors, dancing lights, a gust of
    wind in one corridor, suggestion on up to two staircases, and a minor illusion hiding one door. Dispel Magic removes one
    effect but not the whole spell.'
- name: Harm
  level: 6
  school: necromancy
  attack_type: saving_throw
  save_type: con
  save_half: false
  damage_dice: 14d6
  damage_modifier: 0
  damage_type: necrotic
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d6
  description: You unleash a virulent disease on a creature you can see. On a failed Constitution save, it takes 14d6 necrotic.
    The target's hit points cannot be reduced below 1 by this spell.
- name: Heal
  level: 6
  school: evocation
  attack_type: automatic
  damage_dice: 70
  damage_modifier: 0
  damage_type: healing
  healing: true
  flat_healing: true
  duration: Instantaneous
  requires_concentration: false
  higher_levels: '+10'
  description: A flush of vitality surges through a creature, restoring 70 hit points. Also ends blindness, deafness, and
    any diseases affecting the target. No effect on undead or constructs.
- name: Heroes' Feast
  level: 6
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 24 hours
  requires_concentration: false
  description: You conjure a magnificent feast. Up to 12 creatures gain 2d10 temporary HP, advantage on Wisdom saves, advantage
    on Constitution saves against poison and disease, and immunity to poison and being frightened for 24 hours. The feast
    takes 1 hour to consume. Consumes a 1,000 gp gem-encrusted bowl.
- name: Magic Jar
  level: 6
  school: necromancy
  attack_type: saving_throw
  save_type: cha
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Possessed
  condition_duration: Until the caster ends it or the host dies
  duration: Until dispelled or destroyed
  requires_concentration: false
  description: Your soul leaves your body and enters a container (the magic jar). From there, you can attempt to possess a
    humanoid within 100 feet. The target makes a Charisma save. On failure, your soul enters its body and controls it. Your
    body falls into a catatonic state.
- name: Mass Suggestion
  level: 6
  school: enchantment
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Charmed (Suggested)
  condition_duration: 24 hours
  duration: 24 hours
  requires_concentration: false
  description: Up to twelve creatures you can see must make Wisdom saves. On failure, they follow a reasonable suggestion
    you word for the duration.
- name: Move Earth
  level: 6
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: cube
  aoe_size: 40-foot square
  duration: Concentration, up to 2 hours
  requires_concentration: true
  description: You reshape dirt, sand, or clay. You can raise or lower the ground by up to 20 feet, dig trenches, or create/destroy
    earthen walls. The changes take 10 minutes per 40-foot-square area. The effect is permanent unless dispelled.
- name: Planar Ally
  level: 6
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: You beseech an otherworldly entity for aid. A celestial, elemental, or fey spirit appears in an unoccupied
    space. It requests payment for its service, generally in coin, gems, or a service in return. The cost and task should
    be negotiated.
- name: Sunbeam
  level: 6
  school: evocation
  attack_type: saving_throw
  save_type: con
  save_half: true
  damage_dice: 6d8
  damage_modifier: 0
  damage_type: radiant
  aoe: true
  aoe_shape: line
  aoe_size: 60-foot line
  condition: Blinded
  condition_duration: 1 round
  duration: Concentration, up to 1 minute
  requires_concentration: true
  higher_levels: +1d8
  description: A beam of brilliant light flashes out in a 60-foot line. Creatures in the line make a Constitution save, taking
    6d8 radiant and becoming blinded for 1 round. Undead and oozes have disadvantage. On each of your subsequent turns, you
    can use an action to create a new beam.
- name: True Seeing
  level: 6
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 hour
  requires_concentration: false
  description: 'A creature you touch gains truesight to 120 feet for the duration: sees through magical and nonmagical darkness,
    sees invisible creatures and objects, automatically detects visual illusions, perceives the true form of shapechangers,
    and sees into the Ethereal Plane. Consumes 25 gp of ointment made from mushroom powder, saffron, and fat.'
- name: Wall of Ice
  level: 6
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 10d6
  damage_modifier: 0
  damage_type: cold
  aoe: true
  aoe_shape: line
  aoe_size: Up to ten 10-foot-square panels
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  higher_levels: +1d6
  description: A wall of ice appears. Creatures in the space when it appears make a Dexterity save, taking 10d6 cold damage
    on failure. The wall can be a flat barrier or a hemispherical dome. The ice has AC 12 and 30 HP per 10-foot section. When
    destroyed, it leaves a zone of frigid air dealing 5d6 cold.
- name: Wind Walk
  level: 6
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 8 hours
  requires_concentration: false
  description: You and up to ten willing creatures become gaseous clouds for the duration, gaining 300-foot fly speed and
    resistance to nonmagical weapon damage. You can only Dash in this form and revert after 1 minute of not moving. The spell
    ends if you revert to solid form.
- name: Delayed Blast Fireball
  level: 7
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 7d6
  damage_modifier: 0
  damage_type: fire
  aoe: true
  aoe_shape: sphere
  aoe_size: 20-foot radius
  duration: Concentration, up to 1 minute
  requires_concentration: true
  higher_levels: +1d6
  description: A glowing bead of yellow light forms and can be detonated at any time. Damage increases by 1d6 for each round
    the bead remains, up to an additional 10d6 after 10 rounds. Creatures in the area make a Dexterity save.
- name: Divine Word
  level: 7
  school: evocation
  attack_type: saving_throw
  save_type: cha
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 30-foot radius
  condition: Deafened, Blinded, Stunned, or killed based on current HP
  condition_duration: Varies
  duration: Instantaneous
  requires_concentration: false
  description: 'You utter a divine word. Creatures of your choice within 30 feet must make a Charisma save. Failure effects
    depend on current HP: 50 or fewer = deafened 1 min, 40 or fewer = blinded 1 hour, 30 or fewer = stunned 1 hour, 20 or
    fewer = killed instantly. Celestials, elementals, fey, and fiends that fail are also banished.'
- name: Etherealness
  level: 7
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Up to 8 hours
  requires_concentration: false
  description: You step into the Border Ethereal. You can see and hear the plane of origin in shades of gray and cannot affect
    or be affected by anything there. You can move in any direction at half speed. The spell ends if you use an action to
    dismiss it.
- name: Finger of Death
  level: 7
  school: necromancy
  attack_type: saving_throw
  save_type: con
  save_half: true
  damage_dice: 7d8
  damage_modifier: 30
  damage_type: necrotic
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d8
  description: You send negative energy through a creature you can see. On a failed Constitution save, it takes 7d8+30 necrotic.
    A humanoid killed rises as a zombie permanently under your control at the start of your next turn.
- name: Fire Storm
  level: 7
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 7d10
  damage_modifier: 0
  damage_type: fire
  aoe: true
  aoe_shape: cube
  aoe_size: Ten 10-foot cubes (configurable)
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +1d10
  description: A storm of roaring flame fills up to ten 10-foot cubes you can see. Creatures in the area make a Dexterity
    save. The fire ignites flammable objects and damages plants/foliage.
- name: Forcecage
  level: 7
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: cube
  aoe_size: 20-foot cube or 10-foot-by-20-foot cage
  condition: Trapped
  condition_duration: 1 hour
  duration: 1 hour
  requires_concentration: false
  description: An immobile, invisible prison of force traps a creature. It must fit entirely within the cage. The barred version
    allows spells and attacks to pass through; the solid version blocks all matter. The cage cannot be dispelled by Dispel
    Magic. A creature can try to escape with a Charisma save; on failure, it cannot attempt again for 24 hours.
- name: Mirage Arcane
  level: 7
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: square
  aoe_size: 1 mile square
  duration: 10 days
  requires_concentration: false
  description: You make terrain in a 1-mile square look, sound, smell, and feel like other terrain. The illusion includes
    tactile effects, so it can make difficult terrain or hide hazards. Creatures can attempt an Intelligence (Investigation)
    check to determine it's an illusion on close inspection.
- name: Plane Shift
  level: 7
  school: conjuration
  attack_type: saving_throw
  save_type: cha
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Banished
  condition_duration: Permanent
  duration: Instantaneous
  requires_concentration: false
  description: You and up to eight willing creatures are transported to a different plane of existence. Alternatively, you
    can banish an unwilling creature with a melee spell attack; on a hit, it must make a Charisma save or be sent to a plane
    you designate. Consumes a 250 gp forked metal rod attuned to the destination plane.
- name: Prismatic Spray
  level: 7
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: false
  damage_dice: 10d6
  damage_modifier: 0
  damage_type: variable
  aoe: true
  aoe_shape: cone
  aoe_size: 60-foot cone
  duration: Instantaneous
  requires_concentration: false
  description: 'Eight multicolored rays spray from your hand. Each creature in a 60-foot cone rolls a d8 to determine which
    ray affects it: 1=fire 10d6, 2=acid 10d6, 3=lightning 10d6, 4=poison 10d6, 5=cold 10d6, 6=restrained (repeat saves), 7=banished
    to another plane (return after 1 turn), 8=two rays (reroll, applying both).'
- name: Regenerate
  level: 7
  school: transmutation
  attack_type: automatic
  damage_dice: 4d8
  damage_modifier: 15
  damage_type: healing
  healing: true
  duration: 1 hour
  requires_concentration: false
  description: A creature regains 4d8+15 hit points and regrows severed body parts over the course of 2 minutes. For the duration,
    it regains 1 HP at the start of each of its turns (or regrows a missing body part).
- name: Resurrection
  level: 7
  school: necromancy
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: You return a dead creature to life that has been dead no longer than 100 years. It returns with full hit points,
    all wounds closed, and any missing body parts restored. It does not restore lost levels or remove diseases and curses
    present at time of death. The caster suffers a -4 penalty on all attack rolls, saving throws, and ability checks until
    finishing a long rest. Consumes a 1,000 gp diamond.
- name: Reverse Gravity
  level: 7
  school: transmutation
  attack_type: saving_throw
  save_type: dex
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: cylinder
  aoe_size: 50-foot radius, 100-foot high
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: Gravity reverses in a 50-foot-radius, 100-foot-high cylinder. Creatures and objects fall upward, taking appropriate
    falling damage if they hit the top of the area or an obstacle. Creatures can make a Dexterity save to grab a fixed object.
    When the spell ends, they fall back down.
- name: Sequester
  level: 7
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Until dispelled
  requires_concentration: false
  description: A willing creature or object is hidden away in a state of suspended animation. It is invisible, cannot be targeted
    by divination spells or scrying, and time ceases to flow for it. Consumes a powder of diamond, emerald, ruby, and sapphire
    dust worth 5,000 gp.
- name: Simulacrum
  level: 7
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Until dispelled
  requires_concentration: false
  description: You create an illusory duplicate of one beast or humanoid. It appears to be the same as the original but has
    half its hit point maximum, no equipment, and cannot learn or become more powerful. It obeys spoken commands and acts
    on your turn. If damaged, it can be repaired in an alchemical laboratory costing 100 gp per hit point. Casting time is
    12 hours. Consumes powdered ruby worth 1,500 gp.
- name: Symbol
  level: 7
  school: abjuration
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 10d10
  damage_modifier: 0
  damage_type: necrotic
  aoe: true
  aoe_shape: sphere
  aoe_size: 60-foot radius
  condition: Varies by symbol type
  condition_duration: 10 minutes
  duration: Until dispelled or triggered
  requires_concentration: false
  higher_levels: +1d10
  description: 'You inscribe a glyph that triggers when a creature passes over/touches/looks at it. Effects: Death (10d10
    necrotic on a Constitution save), Discord (argue and bicker, unable to take meaningful action for 1 min on a failed Wisdom
    save), Fear (frightened for 1 min), Hopelessness (disadvantage on attacks/checks/saves for 1 min on a failed Charisma
    save), Insanity (acts randomly, attacking nearest for 1 min), Pain (incapacitated and blinded for 1 min on a failed Constitution
    save), Sleep (unconscious 10 min), Stunning (stunned 1 min). Each triggers in a 60-foot radius.'
- name: Teleport
  level: 7
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Teleported
  condition_duration: Instant
  duration: Instantaneous
  requires_concentration: false
  description: 'You and up to eight willing creatures or one object are transported to a destination. The destination''s familiarity
    determines your chance of mishap: ''Very familiar'' (100%), ''Studied carefully'' (80%), ''Seen casually'' (50%), ''Viewed
    once'' (35%), ''Description'' (25%), ''False destination'' (mishap + you take a further risk). A mishap deals 3d10 force
    and you roll again, possibly arriving off-target.'
- name: Antimagic Field
  level: 8
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 10-foot radius
  condition: Magic Suppressed
  condition_duration: Concentration, up to 1 hour
  duration: Concentration, up to 1 hour
  requires_concentration: true
  description: A 10-foot-radius invisible sphere of antimagic surrounds you. Spells, magic items, and summoned creatures within
    the area are suppressed. Spell slots are not consumed but have no effect. A creature or object summoned or created by
    magic disappears while in the sphere.
- name: Antipathy/Sympathy
  level: 8
  school: enchantment
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: cube
  aoe_size: Either a 200-foot cube or a 60-foot cone
  condition: Frightened (Antipathy) or Charmed (Sympathy)
  condition_duration: 10 days
  duration: 10 days
  requires_concentration: false
  description: 'You attract or repel creatures of a specified kind (e.g. red dragons, goblins, vampires). Antipathy: such
    creatures within 60 feet are frightened and must use their movement to flee. Sympathy: such creatures within 60 feet are
    charmed and must move closer. Consumes a mix of honey and bitter vinegar/alum.'
- name: Clone
  level: 8
  school: necromancy
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: An inert duplicate of a living creature is grown from a sample of its flesh inside a sealed vessel. At any
    time after it matures (120 days), if the original dies, its soul transfers to the clone, provided the soul is free and
    willing. The clone is physically identical to the original. Consumes a 2,000 gp diamond and 150 days of growth.
- name: Control Weather
  level: 8
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 5-mile radius
  duration: Concentration, up to 8 hours
  requires_concentration: true
  description: You alter weather conditions within a 5-mile radius. You can change precipitation, temperature, and wind in
    stages over 1d4 x 10 minutes per stage. You can choose clear skies, overcast, precipitation, blizzard, or arctic/desert-level
    heat.
- name: Demiplane
  level: 8
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 hour
  requires_concentration: false
  description: 'You create a shadowy door on a flat surface, opening onto a demiplane: a 30-foot cube of empty space made
    of wood or stone. You and any creatures you designate can enter. The door closes after 1 hour, trapping anyone inside.
    A new casting can reopen the same demiplane.'
- name: Dominate Monster
  level: 8
  school: enchantment
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Dominated
  condition_duration: Concentration, up to 1 hour
  duration: Concentration, up to 1 hour
  requires_concentration: true
  higher_levels: 'Duration: 8 hours (9th)'
  description: Like Dominate Person, but works on any creature type. A creature you see makes a Wisdom save or becomes charmed
    with a telepathic link and follows your precise commands.
- name: Earthquake
  level: 8
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 5d6
  damage_modifier: 0
  damage_type: bludgeoning
  aoe: true
  aoe_shape: sphere
  aoe_size: 100-foot radius
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: A seismic disturbance shakes the ground in a 100-foot radius. Creatures on the ground make a Dexterity save,
    taking 5d6 bludgeoning on failure. The ground becomes difficult terrain. Fissures open (25% chance to fall 1d10 x 10 feet).
    Structures take 50 bludgeoning damage. The area remains unstable for 1 minute.
- name: Feeblemind
  level: 8
  school: enchantment
  attack_type: saving_throw
  save_type: int
  save_half: false
  damage_dice: 4d6
  damage_modifier: 0
  damage_type: psychic
  condition: Feebleminded
  condition_duration: Instantaneous (permanent until saved against)
  duration: Instantaneous
  requires_concentration: false
  description: A creature's Intelligence and Charisma become 1. It cannot cast spells, activate magic items, understand language,
    or communicate intelligibly. It can still recognize friends, follow them, and protect them. It repeats the save every
    30 days. Greater Restoration, Heal, or Wish can end it.
- name: Holy Aura
  level: 8
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 30-foot radius
  duration: Concentration, up to 1 minute
  requires_concentration: true
  buffs:
    saving_throws: advantage
    damage_resistance: bludgeoning, piercing, slashing from nonmagical weapons for allies
  description: Divine light surrounds you. Creatures of your choice in the area have advantage on saving throws. Other creatures
    have disadvantage on attack rolls against them. Fiends and undead that hit an affected creature must make a Constitution
    save or be blinded.
- name: Incendiary Cloud
  level: 8
  school: conjuration
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 10d8
  damage_modifier: 0
  damage_type: fire
  aoe: true
  aoe_shape: sphere
  aoe_size: 20-foot radius
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: A swirling cloud of embers and smoke appears. It moves 10 feet directly away from you. Creatures entering the
    cloud or starting their turn there must make a Dexterity save, taking 10d8 fire on failure. The area is heavily obscured.
- name: Maze
  level: 8
  school: conjuration
  attack_type: saving_throw
  save_type: int
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Banished to Maze
  condition_duration: Concentration, up to 10 minutes
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: You banish a creature into a labyrinthine demiplane. It must use its action each turn to attempt an Intelligence
    check (DC 20) to escape. On success, it returns. Minotaurs and goristro demons automatically succeed. If the duration
    expires, it returns to its previous space.
- name: Mind Blank
  level: 8
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 24 hours
  requires_concentration: false
  buffs:
    psychic_immunity: true
    condition_immunity: charmed
    divination_immunity: cannot be scryed, read, or affected by thought reading
  description: You become immune to psychic damage, cannot be charmed, and your mind cannot be read, scryed upon, or affected
    by any effect that would sense your emotions or thoughts. The Wish spell can still read your mind or affect your thoughts.
- name: Power Word Stun
  level: 8
  school: enchantment
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Stunned
  condition_duration: Varies
  duration: Instantaneous
  requires_concentration: false
  description: A creature with 150 hit points or fewer is stunned. At the end of each of its turns, it makes a Constitution
    save. On success, the stun ends.
- name: Sunburst
  level: 8
  school: evocation
  attack_type: saving_throw
  save_type: con
  save_half: true
  damage_dice: 12d6
  damage_modifier: 0
  damage_type: radiant
  aoe: true
  aoe_shape: sphere
  aoe_size: 60-foot radius
  condition: Blinded
  condition_duration: 1 minute
  duration: Instantaneous
  requires_concentration: false
  higher_levels: +2d6
  description: A sphere of brilliant sunlight explodes in a 60-foot radius. Creatures inside make a Constitution save, taking
    12d6 radiant and becoming blinded for 1 minute. Oozes and undead have disadvantage. The light dispels magical darkness
    of 8th level or lower.
- name: Astral Projection
  level: 9
  school: necromancy
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Special
  requires_concentration: false
  description: You and up to eight willing creatures project your astral bodies into the Astral Plane. Your physical bodies
    remain behind in suspended animation. Your astral body can travel through the Astral Plane and pass through color pools
    to other planes. If your astral cord is severed, you die. Consumes a 1,000 gp jacinth and a 100 gp silver bar per creature.
- name: Foresight
  level: 9
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 8 hours
  requires_concentration: false
  buffs:
    foresight: Cannot be surprised, advantage on attack rolls/ability checks/saving throws, disadvantage on attacks against
      target
  description: A creature you touch gains the ability to see moments into the future. For 8 hours, it cannot be surprised,
    has advantage on attack rolls, ability checks, and saving throws, and all attacks against it have disadvantage.
- name: Gate
  level: 9
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: circle
  aoe_size: 5- to 20-foot diameter
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: You create a portal linking to another plane's precise location. Any creature entering moves to the destination
    plane. You can also speak a specific creature's name to pull it through the portal to you. Deities and planar rulers can
    prevent this. Consumes a 5,000 gp diamond.
- name: Imprisonment
  level: 9
  school: abjuration
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Imprisoned
  condition_duration: Permanent (until dispelled by a 9th-level slot)
  duration: Permanent (until dispelled)
  requires_concentration: false
  description: 'You bind a creature into a nearly inescapable prison. Options: Burial (deep underground entombment), Chaining
    (bound by chains and unable to move), Hedged Prison (confined to a small demiplane), Minimus Containment (shrinks into
    a gem), or Slumber (eternal sleep). The creature must make a Wisdom save; on failure, it''s trapped forever. Only a 9th-level
    Dispel Magic can free it.'
- name: Mass Heal
  level: 9
  school: evocation
  attack_type: automatic
  damage_dice: 700
  damage_modifier: 0
  damage_type: healing
  healing: true
  flat_healing: true
  duration: Instantaneous
  requires_concentration: false
  description: A flood of healing energy flows from you into any number of creatures you can see, restoring up to 700 HP divided
    among them. Also cures blindness, deafness, and all diseases. No effect on undead or constructs.
- name: Meteor Swarm
  level: 9
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 20d6
  damage_modifier: 0
  damage_type: fire
  extra_damage_dice: 20d6
  extra_damage_type: bludgeoning
  aoe: true
  aoe_shape: sphere
  aoe_size: Four 40-foot-radius spheres
  duration: Instantaneous
  requires_concentration: false
  description: Four blazing orbs plummet from the sky at points you choose. Creatures in each 40-foot-radius sphere make a
    Dexterity save. The fire ignites flammable objects.
- name: Power Word Kill
  level: 9
  school: enchantment
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  instant_kill: true
  instant_kill_hp_threshold: 100
  duration: Instantaneous
  requires_concentration: false
  description: You utter a word of power that compels a creature you can see to die instantly. If the creature has 100 hit
    points or fewer, it dies. Otherwise, the spell has no effect.
- name: Time Stop
  level: 9
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Time Stopped
  condition_duration: 1d4 + 1 turns
  duration: Instantaneous
  requires_concentration: false
  description: You briefly stop the flow of time for everyone but yourself. You take 1d4+1 additional turns in a row during
    which other creatures are frozen and cannot act or react. The spell ends if you affect a creature other than yourself
    or move more than 1,000 feet from your starting position.
- name: True Polymorph
  level: 9
  school: transmutation
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Polymorphed (Permanent)
  condition_duration: Permanent (until dispelled)
  duration: Concentration, up to 1 hour (permanent if concentrated for full duration)
  requires_concentration: true
  description: A creature or object you can see transforms permanently. Creature into another creature (CR <= its level),
    object into a creature (CR <= 9), or creature into an object. The new form replaces all statistics. If concentrated for
    the full hour, the transformation becomes permanent until dispelled.
- name: True Resurrection
  level: 9
  school: necromancy
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: You return a dead creature to life that has been dead no longer than 200 years, even without a body — you need
    only speak its name. It returns with full hit points, fully restored body, and all curses, diseases, and poisons removed.
    The creature does not suffer resurrection sickness. Consumes a 25,000 gp diamond.
- name: Weird
  level: 9
  school: illusion
  attack_type: saving_throw
  save_type: wis
  save_half: true
  damage_dice: 4d10
  damage_modifier: 0
  damage_type: psychic
  aoe: true
  aoe_shape: sphere
  aoe_size: 30-foot radius
  condition: Frightened
  condition_duration: Concentration, up to 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: Creatures of your choice in a 30-foot radius must make a Wisdom save. On failure, they become frightened and
    take 4d10 psychic. At the end of each of their turns, they repeat the save; on failure they take another 4d10 psychic,
    on success the spell ends for them.
- name: Wish
  level: 9
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: 'The mightiest spell a mortal can cast. Safest use: duplicate any 8th-level or lower spell with no components
    or cost. Alternatively, you can wish for any other effect. The GM has great latitude in ruling what occurs. Beyond duplicating
    a spell, you suffer stress: Strength drops to 3 for 2d4 days, 1d10 necrotic per spell level cast until a long rest, and
    a 33% chance you can never cast Wish again.'
- name: Blade Ward
  level: 0
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  cantrip_scaling: false
  no_damage: true
  duration: 1 round
  requires_concentration: false
  buffs:
    damage_resistance: bludgeoning, piercing, and slashing from weapon attacks
  description: You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance
    against bludgeoning, piercing, and slashing damage dealt by weapon attacks.
- name: Dancing Lights
  level: 0
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  cantrip_scaling: false
  no_damage: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: You create up to four torch-sized lights within range, each shedding dim light in a 10-foot radius. As a bonus
    action, you can move the lights up to 60 feet. You can also combine them into a glowing, humanoid-shaped form of Medium
    size.
- name: Druidcraft
  level: 0
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  cantrip_scaling: false
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: 'Whispering to the spirits of nature, you create one of the following effects within range: a tiny sensory
    effect that predicts weather, cause a flower to blossom or a leaf bud to open, create an instantaneous harmless sensory
    effect like falling leaves, or light or snuff a small campfire.'
- name: Friends
  level: 0
  school: enchantment
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  cantrip_scaling: false
  no_damage: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  buffs:
    ability_checks: +1d4 (Charisma checks)
  description: For the duration, you have advantage on all Charisma checks directed at one creature of your choice that is
    not hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and may become
    hostile.
- name: Light
  level: 0
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  cantrip_scaling: false
  no_damage: true
  duration: 1 hour
  requires_concentration: false
  description: You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds
    bright light in a 20-foot radius and dim light for an additional 20 feet. Covering the object with something opaque blocks
    the light. If you cast this spell again, the first casting ends.
- name: Mage Hand
  level: 0
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  cantrip_scaling: false
  no_damage: true
  duration: 1 minute
  requires_concentration: false
  description: A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration. You
    can use your action to control the hand. It can manipulate an object, open an unlocked door or container, or pour out
    the contents of a vial. The hand cannot attack, activate magic items, or carry more than 10 pounds.
- name: Mending
  level: 0
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  cantrip_scaling: false
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of
    a broken key, or a torn cloak. The break or tear can be no larger than 1 foot in any dimension. This spell can physically
    repair a magic item but cannot restore magical properties.
- name: Message
  level: 0
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  cantrip_scaling: false
  no_damage: true
  duration: 1 round
  requires_concentration: false
  description: You point your finger toward a creature within range and whisper a message. The target (and only the target)
    hears the message and can reply in a whisper that only you can hear. You can cast this spell through solid objects if
    you are familiar with the target and know it is beyond the barrier.
- name: Minor Illusion
  level: 0
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  cantrip_scaling: false
  no_damage: true
  duration: 1 minute
  requires_concentration: false
  description: You create a sound or an image of an object within range that lasts for the duration. If you create a sound,
    its volume can range from a whisper to a scream. If you create an image of an object, it must be no larger than a 5-foot
    cube. Physical interaction with the image reveals it to be an illusion.
- name: Prestidigitation
  level: 0
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  cantrip_scaling: false
  no_damage: true
  duration: Up to 1 hour
  requires_concentration: false
  description: 'This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following
    magical effects within range: a sensory effect, light or snuff a small fire, clean or soil an object, chill/warm/flavor
    material, make a symbol or mark appear on a surface, or create a small trinket that fits in your hand and lasts until
    the end of your next turn. You can have up to three non-instantaneous effects active at a time.'
- name: Shillelagh
  level: 0
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  cantrip_scaling: false
  no_damage: true
  duration: 1 minute
  requires_concentration: false
  description: The wood of a club or quarterstaff you are holding is imbued with nature's power. For the duration, you can
    use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon,
    and the weapon's damage die becomes a d8. The spell ends if you cast it again or let go of the weapon.
- name: Thaumaturgy
  level: 0
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  cantrip_scaling: false
  no_damage: true
  duration: Up to 1 minute
  requires_concentration: false
  description: 'You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical
    effects: your voice booms up to three times as loud, flames flicker/brighten/dim, cause harmless tremors in the ground,
    create an instantaneous sound, cause a door to fly open or slam shut, or alter the appearance of your eyes. You can have
    up to three 1-minute effects active at a time.'
- name: True Strike
  level: 0
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  cantrip_scaling: false
  no_damage: true
  duration: Concentration, up to 1 round
  requires_concentration: true
  buffs:
    attack_rolls: +1d4 (first attack roll only)
  description: You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the
    target's defenses. On your next turn, you gain advantage on your first attack roll against the target, provided this spell
    has not ended.
- name: Alarm
  level: 1
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  ritual: true
  duration: 8 hours
  requires_concentration: false
  description: You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger
    than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the
    warded area. When you cast the spell, you can designate creatures that do not set off the alarm. You also choose whether
    the alarm is mental or audible.
- name: Armor of Agathys
  level: 1
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  higher_levels: +5_temp_HP_per_level
  duration: 1 hour
  requires_concentration: false
  buffs:
    hp_temporary: 5
  description: 'A protective magical force surrounds you, manifesting as a spectral frost. You gain 5 temporary hit points
    for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold
    damage. At Higher Levels: both the temporary hit points and the cold damage increase by 5 for each slot level above 1st.'
- name: Arms of Hadar
  level: 1
  school: conjuration
  attack_type: saving_throw
  save_type: str
  save_half: false
  damage_dice: 2d6
  damage_modifier: 0
  damage_type: necrotic
  aoe: true
  aoe_shape: sphere
  aoe_size: 10-foot radius centered on self
  higher_levels: +1d6
  duration: Instantaneous
  requires_concentration: false
  description: You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures
    within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes
    2d6 necrotic damage and cannot take reactions until its next turn.
- name: Comprehend Languages
  level: 1
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  ritual: true
  duration: 1 hour
  requires_concentration: false
  description: For the duration, you understand the literal meaning of any spoken language that you hear. You also understand
    any written language that you see, but you must be touching the surface on which the words are written. It takes about
    1 minute to read one page of text. This spell does not decode secret messages or glyphs that are not part of a written
    language.
- name: Detect Evil and Good
  level: 1
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 30
    feet of you, as well as where the creature is located. Similarly, you know if there is a place or object that has been
    magically consecrated or desecrated within 30 feet of you.
- name: Detect Poison and Disease
  level: 1
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  ritual: true
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within
    30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case. The spell can penetrate
    most barriers, but is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.
- name: Entangle
  level: 1
  school: conjuration
  attack_type: saving_throw
  save_type: str
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  aoe: true
  aoe_shape: square
  aoe_size: 20-foot square
  condition: Restrained
  condition_duration: 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: Grasping weeds and vines sprout from the ground in a 20-foot square starting from a point within range. For
    the duration, these plants turn the ground in the area into difficult terrain. A creature in the area when you cast the
    spell must succeed on a Strength saving throw or be restrained by the entangling plants until the spell ends. A creature
    restrained by the plants can use its action to make a Strength check against your spell save DC. On a success, it frees
    itself.
- name: Expeditious Retreat
  level: 1
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  buffs:
    speed: Dash as bonus action
  description: This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on
    each of your turns until the spell ends, you can take the Dash action.
- name: False Life
  level: 1
  school: necromancy
  attack_type: automatic
  damage_dice: 1d4
  damage_modifier: 4
  damage_type: healing
  healing: true
  flat_healing: true
  no_damage: true
  higher_levels: +5_temp
  duration: 1 hour
  requires_concentration: false
  buffs:
    hp_temporary: 1d4+4
  description: 'Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration.
    At Higher Levels: you gain 5 additional temporary hit points for each slot level above 1st.'
- name: Feather Fall
  level: 1
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 minute
  requires_concentration: false
  description: Choose up to five falling creatures within range. A falling creature's rate of descent slows to 60 feet per
    round. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell
    ends for that creature.
- name: Find Familiar
  level: 1
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  ritual: true
  duration: Instantaneous
  requires_concentration: false
  description: You gain the service of a familiar, a spirit that takes an animal form you choose. The familiar has the statistics
    of the chosen form, though it is a celestial, fey, or fiend (your choice). Your familiar acts independently of you, but
    always obeys your commands. It can deliver touch spells you cast. When the familiar drops to 0 HP, it disappears leaving
    behind no physical form. Casting this spell again resummons the familiar.
- name: Floating Disk
  level: 1
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  ritual: true
  duration: 1 hour
  requires_concentration: false
  description: This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats
    3 feet above the ground. It can carry up to 500 pounds. The disk remains stationary unless you move more than 20 feet
    away from it, in which case it follows you. If you move more than 100 feet away, the spell ends. The disk cannot cross
    elevation changes of 10 feet or more.
- name: Goodberry
  level: 1
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  healing: true
  duration: Instantaneous
  requires_concentration: false
  description: Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action
    to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature
    for one day. The berries lose their potency if they have not been consumed within 24 hours of the casting of this spell.
- name: Heroism
  level: 1
  school: enchantment
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  buffs:
    hp_temporary: spellcasting_modifier_at_start_of_each_turn
    condition_immunity: frightened
  description: A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being
    frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns.
    When the spell ends, the target loses any remaining temporary hit points from this spell.
- name: Hex
  level: 1
  school: enchantment
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  higher_levels: +1-hour_duration_per_level
  duration: Concentration, up to 1 hour
  requires_concentration: true
  buffs:
    damage_rolls: +1d6_nectrotic
  description: 'You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6
    necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The
    target has disadvantage on ability checks made with the chosen ability. At Higher Levels: the duration increases to 8
    hours (3rd/4th level) and 24 hours (5th level or higher).'
- name: Hunter's Mark
  level: 1
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  higher_levels: +1-hour_duration_per_level
  duration: Concentration, up to 1 hour
  requires_concentration: true
  buffs:
    damage_rolls: +1d6
  description: 'You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends,
    you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom
    (Perception) or Wisdom (Survival) check you make to find it. At Higher Levels: the duration increases to 8 hours (3rd/4th
    level) and 24 hours (5th level or higher).'
- name: Identify
  level: 1
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  ritual: true
  duration: Instantaneous
  requires_concentration: false
  description: You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some
    other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how
    many charges it has, if any. If the item was created by a spell, you learn which spell created it. If you instead touch
    a creature, you learn what spells, if any, are currently affecting it.
- name: Illusory Script
  level: 1
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  ritual: true
  duration: 10 days
  requires_concentration: false
  description: You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion
    that lasts for the duration. To you and any creatures you designate, the message appears normal. To all others, the script
    appears to be some unknown magical script or unintelligible. Alternatively, you can cause the writing to appear to be
    a different message.
- name: Jump
  level: 1
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 minute
  requires_concentration: false
  buffs:
    speed: triple_jump_distance
  description: You touch a creature. The creature's jump distance is tripled until the spell ends.
- name: Purify Food and Drink
  level: 1
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  ritual: true
  duration: Instantaneous
  requires_concentration: false
  description: All nonmagical food and drink within a 5-foot-radius sphere centered on a point of your choice within range
    is purified and rendered free of poison and disease.
- name: Silent Image
  level: 1
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot
    cube. The image appears at a spot within range and lasts for the duration. The image is purely visual. Physical interaction
    with the image reveals it to be an illusion. You can use your action to cause the image to move to any spot within range,
    changing its appearance naturally.
- name: Unseen Servant
  level: 1
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  ritual: true
  duration: 1 hour
  requires_concentration: false
  description: This spell creates an invisible, mindless, shapeless, Medium force that performs simple tasks at your command
    until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC
    10, 1 hit point, and a Strength of 2, and it cannot attack. If it drops to 0 hit points, the spell ends. As a bonus action,
    you can mentally command the servant to move and interact with an object.
- name: Tasha's Hideous Laughter
  level: 1
  school: enchantment
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Prone and Incapacitated
  condition_duration: Concentration, up to 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: A creature of your choice is overcome with laughter. The target must succeed on a Wisdom save or fall prone,
    becoming incapacitated and unable to stand up for the duration. Creatures with Intelligence 4 or less are unaffected.
- name: Animal Messenger
  level: 2
  school: enchantment
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 24 hours
  requires_concentration: false
  ritual: true
  higher_levels: +48h_duration
  description: 'You whisper a message to a Tiny beast. It travels to deliver the message to a location you describe. The message
    is no longer than 25 words. At Higher Levels: +48h duration per slot.'
- name: Arcane Lock
  level: 2
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Until dispelled
  requires_concentration: false
  description: A closed door, window, gate, chest, or other entryway becomes magically locked. The DC to break or pick the
    lock increases by 10.
- name: Arcanist's Magic Aura
  level: 2
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 24 hours
  requires_concentration: false
  description: You place an illusion on a creature or object so divination spells reveal false information. You can mask or
    change apparent creature type, alignment, or whether it is magical.
- name: Augury
  level: 2
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  ritual: true
  description: 'You receive an omen about a specific course of action within the next 30 minutes: Weal (good), Woe (bad),
    Weal and Woe (both), Nothing (no significant result). Subsequent castings on the same topic return random results.'
- name: Beast Sense
  level: 2
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 hour
  requires_concentration: true
  ritual: true
  description: You touch a willing beast. For the duration, you can use your action to see through the beast's eyes and hear
    what it hears, until you use your action to return to your normal senses.
- name: Branding Smite
  level: 2
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  is_supplementary: true
  higher_levels: +1d6
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: The next time you hit a creature with a weapon attack, the attack deals an extra 2d6 radiant damage. The target
    sheds dim light in a 5-foot radius and cannot be invisible until the spell ends.
- name: Cordon of Arrows
  level: 2
  school: transmutation
  attack_type: saving_throw
  save_type: dex
  save_half: false
  damage_dice: 1d6
  damage_modifier: 0
  damage_type: piercing
  higher_levels: +1_arrow
  duration: 8 hours
  requires_concentration: false
  description: You plant four nonmagical arrows/bolts in the ground. When a creature comes within 30 ft or ends its turn there,
    one piece flies up. Target makes a Dex save or takes 1d6 piercing damage.
- name: Detect Thoughts
  level: 2
  school: divination
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: You can read surface thoughts. As an action, you can probe deeper; the target makes a Wisdom save. On failure,
    you gain insight into its reasoning, emotional state, or central concern.
- name: Dust Devil
  level: 2
  school: conjuration
  attack_type: saving_throw
  save_type: str
  save_half: false
  damage_dice: 1d8
  damage_modifier: 0
  damage_type: bludgeoning
  higher_levels: +1d8
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: A 5-foot dust devil appears. As a bonus action, move it 30 ft. Creatures within 5 ft make a Str save or take
    1d8 bludgeoning damage. Disperses fog and extinguishes unprotected flames.
- name: Earthbind
  level: 2
  school: transmutation
  attack_type: saving_throw
  save_type: str
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: An airborne creature within range must make a Str save. On failure, its flying speed drops to 0 and it descends
    60 ft per round until safely grounded.
- name: Enthrall
  level: 2
  school: enchantment
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 minute
  requires_concentration: false
  description: You weave a distracting string of words. Creatures of your choice that hear you make a Wis save. Those who
    fail have disadvantage on Perception checks to perceive creatures other than you.
- name: Locate Animals or Plants
  level: 2
  school: divination
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  ritual: true
  description: Describe or name a specific kind of beast or plant. You learn the direction and distance to the closest creature
    or plant of that kind within 5 miles, if any are present.
- name: Snilloc's Snowball Swarm
  level: 2
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 3d6
  damage_modifier: 0
  damage_type: cold
  higher_levels: +1d6
  aoe: true
  aoe_shape: sphere
  aoe_size: 5-foot radius
  duration: Instantaneous
  requires_concentration: false
  description: A flurry of magic snowballs erupts from a point you choose. Each creature in a 5-foot radius makes a Dex save,
    taking 3d6 cold damage on failure, or half on success.
- name: Skywrite
  level: 2
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 hour
  requires_concentration: true
  ritual: true
  description: You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud. A
    strong wind can disperse them early.
- name: Spider Climb
  level: 2
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 hour
  requires_concentration: true
  description: Until the spell ends, one willing creature gains the ability to move up, down, and across vertical surfaces
    and upside down along ceilings, while leaving its hands free.
- name: Warding Bond
  level: 2
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  buffs:
    armor_class: '+1'
    saving_throws: '+1'
    damage_resistance: all
  duration: 1 hour
  requires_concentration: false
  description: Wards a willing creature. Target gains +1 AC, +1 to all saves, and resistance to all damage. However, each
    time the target takes damage, you take the same amount.
- name: Aura of Vitality
  level: 3
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  healing: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: Healing energy radiates from you. As a bonus action, you can cause one creature in the aura to regain 2d6 HP.
    You can use this bonus action each round for the duration (total ~20d6).
- name: Blinding Smite
  level: 3
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  is_supplementary: true
  higher_levels: +1d8
  condition: Blinded
  condition_duration: 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: The next time you hit with a melee weapon attack, the attack deals an extra 3d8 radiant damage and the target
    must make a Con save or be blinded until the spell ends.
- name: Blink
  level: 3
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 minute
  requires_concentration: false
  description: Roll a d20 at the end of each of your turns. On 11+, you vanish into the Ethereal Plane until the start of
    your next turn (or until your spell ends there). While ethereal, you can only affect and be affected by creatures on the
    Ethereal Plane.
- name: Conjure Animals
  level: 3
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 hour
  requires_concentration: true
  description: 'You summon fey spirits that take the form of beasts. Choose: 1 beast CR 2, 2 beasts CR 1, 4 beasts CR 1/2,
    or 8 beasts CR 1/4. The DM has the statistics.'
- name: Create Food and Water
  level: 3
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: You create 45 pounds of food and 30 gallons of water on the ground or in containers within range — enough to
    sustain up to fifteen humanoids or five steeds for 24 hours. The food is bland but nourishing, and spoils if uneaten after
    24 hours.
- name: Crusader's Mantle
  level: 3
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  buffs:
    damage_rolls: +1d4_radiant
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: Holy power radiates from you in a 30-foot aura. Nonhostile creatures of your choice in the aura deal an extra
    1d4 radiant damage when they hit with a weapon attack.
- name: Elemental Weapon
  level: 3
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  buffs:
    attack_rolls: '+1'
    damage_rolls: +1d4
  higher_levels: +1_damage_die_size
  duration: Concentration, up to 1 hour
  requires_concentration: true
  description: 'A nonmagical weapon you touch becomes a +1 magic weapon and deals an extra 1d4 damage of your choice: acid,
    cold, fire, lightning, or thunder.'
- name: Feign Death
  level: 3
  school: necromancy
  attack_type: automatic
  ritual: true
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 hour
  requires_concentration: false
  description: You touch a willing creature and put it into a cataleptic state indistinguishable from death. The target appears
    dead to all outward inspection, is blinded and incapacitated, has resistance to all damage except psychic, and cannot
    detect disease or poison.
- name: Lightning Arrow
  level: 3
  school: transmutation
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 4d8
  damage_modifier: 0
  damage_type: lightning
  higher_levels: +1d8
  aoe: true
  aoe_shape: sphere
  aoe_size: 10-foot radius
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: 'The next time you make a ranged weapon attack, the weapon turns into a bolt of lightning. Instead of a weapon
    attack, make a spell ranged weapon attack. On hit: 4d8 lightning. All within 10 ft of target make Dex save or take 2d8
    lightning.'
- name: Major Image
  level: 3
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  higher_levels: no_concentration_at_6th
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: 'You create an image no larger than a 20-foot cube. It includes sound, smell, and temperature. As an action
    you can move it. Physical interaction reveals the illusion. At 6th level+: duration becomes permanent until dispelled
    without concentration.'
- name: Meld into Stone
  level: 3
  school: transmutation
  attack_type: automatic
  ritual: true
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 8 hours
  requires_concentration: false
  description: You step into a stone object or surface large enough to fully contain your body. You can hear but not see what
    occurs outside. Minor damage to the stone does not harm you. Complete destruction or partial removal ejects you and deals
    6d6 bludgeoning damage.
- name: Phantom Steed
  level: 3
  school: illusion
  attack_type: automatic
  ritual: true
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 hour
  requires_concentration: false
  description: A Large, quasi-real, horselike creature appears. You decide its appearance. The spell ends if you use an action
    to dismiss it. The steed has speed 100 ft/rd (1000 ft/min, 13 mph).
- name: Sleet Storm
  level: 3
  school: conjuration
  attack_type: saving_throw
  save_type: dex
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Prone
  condition_duration: Concentration, up to 1 minute
  aoe: true
  aoe_shape: cylinder
  aoe_size: 40-foot radius, 20-foot height
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: Freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius. The area is heavily obscured,
    flames are doused, and the ground is icy (difficult terrain). Creatures starting a turn in the area must make a Dex save
    or fall prone. Concentration checks needed.
- name: Tidal Wave
  level: 3
  school: conjuration
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 4d8
  damage_modifier: 0
  damage_type: bludgeoning
  higher_levels: +1d8
  condition: Prone
  condition_duration: Instantaneous
  aoe: true
  aoe_shape: line
  aoe_size: 30 ft long, 10 ft wide, 10 ft tall
  duration: Instantaneous
  requires_concentration: false
  description: 'You conjure up a wave of water that crashes down. Each creature in the 30x10x10 ft line makes a Dex save.
    Failure: 4d8 bludgeoning and knocked prone. Success: half damage.'
- name: Compulsion
  level: 4
  school: enchantment
  attack_type: saving_throw
  save_type: wis
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: Creatures of your choice that you can see must make a Wis save. On failure, each time the creature moves on
    its turn, you can choose the direction (cannot force into hazards). Targets retry save end of each turn.
- name: Conjure Woodland Beings
  level: 4
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 hour
  requires_concentration: true
  description: 'You summon fey spirits that take the form of woodland beings: 1 creature CR 2, 2 creatures CR 1, 4 creatures
    CR 1/2, or 8 creatures CR 1/4. The creatures appear in unoccupied spaces and are friendly to you and your allies.'
- name: Elemental Bane
  level: 4
  school: transmutation
  attack_type: saving_throw
  save_type: con
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  higher_levels: +1_creature
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: Choose acid/cold/fire/lightning/thunder. A creature must make a Con save. On failure, the first time each turn
    it takes that damage type, it takes an extra 2d6 of that damage and loses resistance for the duration.
- name: Mordenkainen's Faithful Hound
  level: 4
  school: conjuration
  attack_type: attack_roll
  damage_dice: 4d8
  damage_modifier: 0
  damage_type: piercing
  duration: 8 hours
  requires_concentration: false
  aoe: true
  aoe_shape: sphere
  aoe_size: 30-foot radius
  description: You conjure a phantom watchdog in an unoccupied space. The hound is invisible and barks whenever a Small or
    larger creature comes within 30 feet. It attacks nearby hostile creatures for 4d8 piercing damage, considering all attacks,
    bonuses, and immunity.
- name: Mordenkainen's Private Sanctum
  level: 4
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 24 hours
  requires_concentration: false
  description: 'You create an area within a cube up to 100 ft on each side. Choose from: prevent sound/visuals from passing
    through, prevent divination sensors, prevent teleportation, prevent planar travel. Casting it in the same spot each day
    for a year makes it permanent.'
- name: Storm Sphere
  level: 4
  school: evocation
  attack_type: saving_throw
  save_type: str
  save_half: false
  damage_dice: 2d6
  damage_modifier: 0
  damage_type: bludgeoning
  higher_levels: +1d6
  duration: Concentration, up to 1 minute
  requires_concentration: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 20-foot radius
  description: 'A 20-foot-radius sphere of storm energy appears. Creatures making a Str save within take 2d6 bludgeoning.
    On subsequent turns as a bonus action, you can hurl a bolt from the sphere: ranged spell attack, 60 ft, 4d6 lightning
    damage.'
- name: Vitriolic Sphere
  level: 4
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 10d4
  damage_modifier: 0
  damage_type: acid
  higher_levels: +2d4
  aoe: true
  aoe_shape: sphere
  aoe_size: 20-foot radius
  damage_on_miss: 5d4
  duration: Instantaneous
  requires_concentration: false
  description: 'A glowing sphere streaks to a point and explodes. Creatures in a 20-foot radius make a Dex save. Failure:
    10d4 acid, and 5d4 acid at the end of its next turn. Success: half initial, no ongoing damage.'
- name: Watery Sphere
  level: 4
  school: conjuration
  attack_type: saving_throw
  save_type: str
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Restrained
  condition_duration: 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: You conjure a 5-foot-diameter sphere of water. As a bonus action, move it up to 30 ft and ram creatures (Str
    save or restrained inside). Creatures inside are restrained and cannot breathe. Targets can re-attempt the save at the
    end of each turn.
- name: Antilife Shell
  level: 5
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 hour
  requires_concentration: true
  description: A shimmering barrier extends from you in a 10-foot radius, pushing away all creatures other than undead and
    constructs. Creatures cannot willingly move through the barrier by nonmagical means. Ends if you force the barrier against
    a creature or the creature passes.
- name: Banishing Smite
  level: 5
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  is_supplementary: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: The next time you hit a creature with a weapon attack, the attack deals an extra 5d10 force damage and, if
    under 50 HP after this attack, the target is banished to a harmless demiplane.
- name: Bigby's Hand
  level: 5
  school: evocation
  attack_type: attack_roll
  damage_dice: 4d8
  damage_modifier: 0
  damage_type: force
  higher_levels: +2d8
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: 'You create a Large hand of shimmering, translucent force in an unoccupied space. As a bonus action: Clenched
    Fist (4d8 force to target within 5 ft), Forceful Hand (push 5x spell mod ft), Grasping Hand (grapple Large or smaller,
    2d6+mod bludgeoning), Interposing Hand (cover vs enemy).'
- name: Cloudkill
  level: 5
  school: conjuration
  attack_type: saving_throw
  save_type: con
  save_half: true
  damage_dice: 5d8
  damage_modifier: 0
  damage_type: poison
  higher_levels: +1d8
  aoe: true
  aoe_shape: sphere
  aoe_size: 20-foot radius
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: Yellow-green fog billows out in a 20-foot-radius sphere. The area is heavily obscured. Creatures entering or
    starting their turn in the area take 5d8 poison on a failed Con save.
- name: Commune
  level: 5
  school: divination
  attack_type: automatic
  ritual: true
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 minute
  requires_concentration: false
  description: You contact your deity or a divine proxy to ask up to three yes-or-no questions. You receive a correct answer.
    Entities are not necessarily omniscient; 'Unclear' is a valid answer. Once per long rest.
- name: Commune with Nature
  level: 5
  school: divination
  attack_type: automatic
  ritual: true
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: 'You briefly become one with nature. You learn about the surrounding land within 3 miles: terrain, bodies of
    water, predominant creatures, plants, minerals, buildings, and otherworldly influences (celestials/fiends/elementals/fey/undead).'
- name: Conjure Elemental
  level: 5
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 hour
  requires_concentration: true
  description: You call forth an elemental (air, earth, fire, or water). The elemental is friendly to you and your allies.
    It obeys your verbal commands. After 1 hour, the elemental becomes hostile to you if you lose concentration.
- name: Conjure Volley
  level: 5
  school: conjuration
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 8d8
  damage_modifier: 0
  damage_type: variable (weapon)
  aoe: true
  aoe_shape: cylinder
  aoe_size: 40-foot radius, 20-foot height
  duration: Instantaneous
  requires_concentration: false
  description: You fire a piece of nonmagical ammunition or throw a nonmagical weapon into the air. It multiplies into a rain
    of ammunition/weapons in a 40-foot radius, dealing 8d8 damage of the weapon type on a failed Dex save (half on success).
- name: Contagion
  level: 5
  school: necromancy
  attack_type: attack_roll
  save_type: con
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Diseased
  condition_duration: 7 days
  duration: 7 days
  requires_concentration: false
  description: 'You inflict a disease: Blinding Sickness (disadvantage on Wis checks/saves), Filth Fever (disadvantage on
    Str checks/saves), Flesh Rot (vulnerability to all damage), Mindfire (disadvantage on Int checks/saves), Seizure (disadvantage
    on Dex checks/saves), or Slimy Doom (stunned when damaged). 3 successful saves end it, 3 failures = lasts 7 days.'
- name: Destructive Wave
  level: 5
  school: evocation
  attack_type: saving_throw
  save_type: con
  save_half: true
  damage_dice: 5d6
  damage_modifier: 0
  damage_type: thunder
  extra_damage_dice: 5d6
  extra_damage_type: radiant_or_necrotic
  condition: Prone
  condition_duration: Instantaneous
  aoe: true
  aoe_shape: sphere
  aoe_size: 30-foot radius centered on self
  duration: Instantaneous
  requires_concentration: false
  description: 'You strike the ground, creating a burst of divine energy. Creatures of your choice within 30 feet make a Con
    save. Failure: 5d6 thunder + 5d6 radiant/necrotic and knocked prone. Success: half damage and not prone.'
- name: Holy Weapon
  level: 5
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  buffs:
    damage_rolls: +2d8_radiant
  duration: Concentration, up to 1 hour
  requires_concentration: true
  description: 'You imbue a weapon you touch with holy power. For the duration, the weapon emits bright light in a 30 ft radius
    and deals an extra 2d8 radiant damage on hit. Bonus action to explode the aura ending the spell: 4d8 radiant in 30 ft
    radius, blinding for 1 round (Con save for half).'
- name: Passwall
  level: 5
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 hour
  requires_concentration: false
  description: A passage appears at a point of your choice on a wooden, plaster, or stone surface (such as a wall, ceiling,
    or floor). The passage is 5 ft wide, 8 ft tall, up to 20 ft deep. It creates no instability at its edge.
- name: Reincarnate
  level: 5
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: You touch a dead humanoid or a piece of it that has been dead no more than 10 days. The target returns to life
    with a new adult body. The new body may be a different race from the original (DM determines from local population). All
    nonmagical ailments are cured.
- name: Steel Wind Strike
  level: 5
  school: conjuration
  attack_type: attack_roll
  damage_dice: 6d10
  damage_modifier: 0
  damage_type: force
  duration: Instantaneous
  requires_concentration: false
  description: 'You flourish the weapon used in the casting and then vanish to strike like the wind. Choose up to five creatures
    within range. Make a melee spell attack against each. On hit: 6d10 force damage. You can then teleport to an unoccupied
    space within 5 ft of one target.'
- name: Swift Quiver
  level: 5
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: You transmute a quiver so it produces nonmagical ammunition for you. On each of your turns, you can use a bonus
    action to make two attacks with a weapon that uses ammunition from the quiver. Each attack draws its own ammunition from
    the quiver.
- name: Tree Stride
  level: 5
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: You gain the ability to enter a tree and move from inside it to inside another tree of the same kind within
    500 feet. Both trees must be living and at least the same size as you. You must use 5 feet of movement to enter the first
    tree. You appear within 5 ft of the dest tree.
- name: Arcane Gate
  level: 6
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: You create two linked teleportation portals on a flat surface. Each portal is a 10-foot circle. Any creature
    or object entering one portal exits from the other. They must be on a solid, unoccupied surface and within 500 ft of each
    other.
- name: Bones of the Earth
  level: 6
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: Up to six pillars of stone burst from the ground. Large and smaller creatures above must make a Dex save or
    be lifted 10 ft per pillar. Each pillar is 5 ft diameter, 10-30 ft tall. Pillars can be damaged (AC 15, 30 HP).
- name: Conjure Fey
  level: 6
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  higher_levels: +1_CR_per_level
  duration: Concentration, up to 1 hour
  requires_concentration: true
  description: You summon a fey creature of CR 6 or lower, or a spirit that takes the form of a beast (CR 6 or lower). It's
    friendly to you and your allies and obeys verbal commands.
- name: Contingency
  level: 6
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 10 days
  requires_concentration: false
  description: You cast a companion spell of 5th level or lower that triggers on a condition you define. When the condition
    occurs (e.g. 'When I fall to 0 HP'), the companion spell takes effect instantly. Contingency ends early if you cast it
    again. Only one Contingency active at a time.
- name: Drawmij's Instant Summons
  level: 6
  school: conjuration
  attack_type: automatic
  ritual: true
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Until dispelled
  requires_concentration: false
  description: You touch an object (10 ft or less) and place an arcane mark on it, storing it in an extradimensional space.
    You can crush the sapphire to summon the object to your hand regardless of distance. If the object is held by another
    creature, you learn the holder's identity and approximate location.
- name: Druid Grove
  level: 6
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 24 hours
  requires_concentration: false
  description: 'You create a warded area (up to 90 ft cube). Effects: solid fog (heavily obscured), grasp undead (Wis save
    or frightened 1 min), grove guardians (4 awakened trees), and extra wards (solid fog for 10 min after intruder passes).
    Ritual cast.'
- name: Investiture of Flame
  level: 6
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  buffs:
    damage_immunity: fire
    damage_resistance: cold
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: Flames race across your body. You are immune to fire damage and resistant to cold damage. Creatures within
    5 ft take 1d10 fire on your turn. You can use your action to create a 15 ft line of fire (4d8, Dex save for half).
- name: Mental Prison
  level: 6
  school: illusion
  attack_type: saving_throw
  save_type: int
  save_half: false
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  damage_on_miss: 0d0
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: You trap a creature in an illusory prison. The target must make an Int save. On failure, the target is restrained
    and cannot move. It perceives a terrifying environment around it. If it attempts to move or makes a physical interaction,
    it takes 5d10 psychic damage.
- name: Otto's Irresistible Dance
  level: 6
  school: enchantment
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Restrained
  condition_duration: 1 minute
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: 'A creature you can see starts a comical dance: shuffling, tapping its feet, capering. It must use all its
    movement dancing, has disadvantage on Dex saves and attack rolls, and other creatures have advantage on attack rolls against
    it. It can use an action to re-save.'
- name: Primordial Ward
  level: 6
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  buffs:
    damage_immunity: acid,cold,fire,lightning,thunder (reaction to change)
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: You gain immunity to acid, cold, fire, lightning, and thunder damage, but only one at a time (your choice).
    As a reaction after taking damage, you can switch your immunity to a different type on the list.
- name: Programmed Illusion
  level: 6
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Until dispelled
  requires_concentration: false
  description: 'You create an illusion of an object, creature, or visible phenomenon within range, which performs programmed
    script: instructions on visual, audio, and movement. A simple trigger must be specified. The illusion is permanent until
    dispelled.'
- name: Scatter
  level: 6
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: The air quivers around up to five creatures you can see. Each must make a Wis save; an unwilling creature teleports
    120 feet to an unoccupied space on the ground. A willing creature teleports as you choose. Any teleportation must be to
    a spot you can see.
- name: Soul Cage
  level: 6
  school: necromancy
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  buffs:
    healing: null
  duration: 8 hours
  requires_concentration: false
  description: You snatch the soul of a humanoid as it dies and trap it inside a cage. The soul answers up to 6 questions,
    grants advantage on 1 roll, heals you 2d8 when you kill for 1 round, or you can ask questions to gain its knowledge. The
    soul disappears after use.
- name: Transport via Plants
  level: 6
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 round
  requires_concentration: false
  description: This spell creates a magical link between a Large or larger inanimate plant within range and another plant
    at any distance on the same plane of existence. Any creature can step through in one round, emerging from the destination
    plant.
- name: Word of Recall
  level: 6
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: You and up to five willing creatures within 5 feet of you instantly teleport to a previously designated sanctuary
    (a place strongly linked to your deity). All arrive together. Any creatures not linked to you are left behind.
- name: Conjure Celestial
  level: 7
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  higher_levels: +1_CR_per_level
  duration: Concentration, up to 1 hour
  requires_concentration: true
  description: You summon a celestial of CR 4 or lower. It is friendly to you and your allies. It obeys your verbal commands.
    After 1 hour, the celestial becomes hostile to you if you lose concentration. The DM has the statistic block.
- name: Magnificent Mansion
  level: 7
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 24 hours
  requires_concentration: false
  description: You conjure a door that leads into an extradimensional dwelling containing 50 rooms. The dwelling is furnished
    and decorated as you choose. Furnishings last the spell duration. You decide who can enter. A staff of 100 translucent
    servants attends to guests.
- name: Mordenkainen's Sword
  level: 7
  school: evocation
  attack_type: attack_roll
  damage_dice: 3d10
  damage_modifier: 0
  damage_type: force
  higher_levels: +1d10
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: You create a sword-shaped plane of force that hovers within range. You can make a melee spell attack against
    a creature within 5 ft, dealing 3d10 force damage on hit. Until the spell ends, you can use a bonus action to move the
    sword up to 20 ft and repeat the attack.
- name: Project Image
  level: 7
  school: illusion
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 day
  requires_concentration: true
  description: You create an illusory copy of yourself in a location you have visited before. The image can speak and behave
    as you choose; you see and hear through its senses. You can use an action to move it or change its behavior.
- name: Whirlwind
  level: 7
  school: evocation
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 10d6
  damage_modifier: 0
  damage_type: bludgeoning
  higher_levels: +1d6
  condition: Restrained (if in cyclone)
  condition_duration: Concentration, up to 1 minute
  aoe: true
  aoe_shape: cylinder
  aoe_size: 30-foot tall cylinder with 5-foot radius
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: 'A whirlwind appears. Creatures within 5 ft of the column make a Dex save: on failure 10d6 bludgeoning plus
    lifted 20 ft and restrained; on success half damage and not lifted. Whirlwind automatically extinguishes nonmagical fire
    and disperses gas.'
- name: Abi-Dalzim's Horrid Wilting
  level: 8
  school: necromancy
  attack_type: saving_throw
  save_type: con
  save_half: true
  damage_dice: 12d8
  damage_modifier: 0
  damage_type: necrotic
  aoe: true
  aoe_shape: cube
  aoe_size: 30-foot cube
  duration: Instantaneous
  requires_concentration: false
  description: You draw the moisture from every creature in a 30-foot cube. Creatures take 12d8 necrotic damage on failed
    Con save (half on success). Plants, water elementals, and plant-based creatures have disadvantage on the save and take
    maximum damage.
- name: Animal Shapes
  level: 8
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 24 hours
  requires_concentration: true
  description: You transform up to ten willing creatures into beasts of CR 4 or lower. Each target assumes its own beast form.
    All statistics except alignment and personality are replaced.
- name: Glibness
  level: 8
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 1 hour
  requires_concentration: false
  description: Your speech becomes fluent and more convincing. You have advantage on Charisma checks made to influence others.
    Truth-detecting magic registers any lie you tell as true. You can speak and understand any spoken or written language.
- name: Illusory Dragon
  level: 8
  school: illusion
  attack_type: saving_throw
  save_type: int
  save_half: true
  damage_dice: 7d6
  damage_modifier: 0
  damage_type: fire/cold/acid/lightning/poison
  aoe: true
  aoe_shape: cone
  aoe_size: 60-foot cone
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: An illusory dragon of your choice materializes. Creatures aware it is an illusion have advantage on saves;
    on a success, they see through it. As a bonus action, the dragon breathes a 60 ft cone, dealing 7d6 damage of a chosen
    type (Int save half).
- name: Maddening Darkness
  level: 8
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: psychic
  higher_levels: +1_per_two_levels
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  aoe: true
  aoe_shape: sphere
  aoe_size: 60-foot radius
  description: 'A sphere of pure dark energy appears. Creatures in it emit a maddening screech: each creature starting its
    turn there takes 8d8 psychic damage. The spell consumes all light within its area; only light from a 9th-level spell can
    dispel it.'
- name: Mighty Fortress
  level: 8
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Instantaneous
  requires_concentration: false
  description: A fortress of stone springs up in 1 minute. It includes 30-foot curtain walls, a keep 80 feet square, four
    towers 30 feet wide, doors and furnishings. 100 servants attend. If cast once per week for a year, it becomes permanent.
- name: Telepathy
  level: 8
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 24 hours
  requires_concentration: false
  description: You create a telepathic link between yourself and a willing creature you know. You can communicate telepathically
    at any range and share sensory information. You can see through the target's eyes, hear through its ears, and speak through
    its mouth.
- name: Prismatic Wall
  level: 9
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 10 minutes
  requires_concentration: false
  description: A shimmering, multicolored plane of light forms a vertical opaque wall (up to 90 ft long). Each color layer
    causes a specific effect when crossed (blindness, damage, restrained/poisoned, petrified, confused) and each must be bypassed.
    Seven layers must be traversed or dispelled.
- name: Psychic Scream
  level: 9
  school: enchantment
  attack_type: saving_throw
  save_type: int
  save_half: true
  damage_dice: 14d6
  damage_modifier: 0
  damage_type: psychic
  condition: Stunned
  condition_duration: Instantaneous
  duration: Instantaneous
  requires_concentration: false
  description: 'You emit a psionic scream. Up to ten creatures of your choice within range must make an Int save. Failure:
    14d6 psychic damage and stunned. A stunned target repeats the save at the end of each of its turns. If the save succeeds,
    it is no longer stunned.'
- name: Shapechange
  level: 9
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 hour
  requires_concentration: true
  description: You assume the form of a different creature for the duration. You can assume any creature of CR <= your level.
    You retain your mind and all game statistics but replace physical statistics. You can change forms as an action, gaining
    each new form's HP (but not cumulative).
- name: Storm of Vengeance
  level: 9
  school: conjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 1 minute
  requires_concentration: true
  aoe: true
  aoe_shape: cylinder
  aoe_size: 360-foot radius, 40-foot height
  description: 'A churning storm cloud forms. Effects over 6 turns: deafening thunder, acid rain, six lightning bolts (10d6
    each), hail (2d6 bludgeoning), freezing rain (1d6 cold + difficult terrain for 2 turns), and gale winds (disadvantage
    on ranged attacks per each). Creatures must make Con saves to avoid the effects.'
- name: Hunger of Hadar
  level: 3
  school: conjuration
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 2d6
  damage_modifier: 0
  damage_type: cold
  extra_damage_dice: 2d6
  extra_damage_type: acid
  aoe: true
  aoe_shape: sphere
  aoe_size: 20-foot radius
  duration: Concentration, up to 1 minute
  requires_concentration: true
  description: You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot sphere
    of blackness appears. Creatures starting their turn in the area take 2d6 cold damage. Creatures ending their turn there
    make a Dex save or take 2d6 acid damage.
- name: Speak with Plants
  level: 3
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: 10 minutes
  requires_concentration: false
  description: You imbue plants within 30 feet of you with limited sentience and animation. You can question plants about
    events in the spell's area. Plants can turn normal terrain into difficult terrain (or vice versa) while the spell lasts.
- name: Wall of Sand
  level: 3
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: A wall of swirling sand rises. The wall blocks line of sight but not movement. Creatures in the wall when cast
    are blinded. Creatures ending their turn inside are blinded. The wall provides heavy obscurement; ranged attacks through
    it are impossible.
- name: Wall of Water
  level: 3
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: A wall of water springs up. The wall is difficult terrain, and ranged attacks passing through have disadvantage.
    Fire effects have their damage halved when crossing the wall. Cold damage freezes a section for 1 hour. An object passes
    through easily.
- name: Aura of Life
  level: 4
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  buffs:
    condition_immunity: necrotic_hp_max_reduction
  healing: true
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: Life-preserving energy radiates from you in a 30-foot aura. Allies in the aura have resistance to necrotic
    damage, cannot have their maximum HP reduced, and dying creatures automatically stabilize at the start of their turns.
    Creatures with 0 HP regain 1 HP if they start their turn there (1 min/long rest per creature).
- name: Aura of Purity
  level: 4
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  buffs:
    condition_immunity: charmed,frightened,possessed,diseased,poisoned
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: Purifying energy radiates from you in a 30-foot aura. Allies in the aura have resistance to poison damage,
    advantage on saves against Blinded, Charmed, Deafened, Frightened, Paralyzed, Poisoned, and Stunned. If already suffering
    a condition, the save is made with advantage.
- name: Circle of Power
  level: 5
  school: abjuration
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  buffs:
    saving_throws: +advantage
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: Divine energy surrounds you in a 30-foot aura. Allies have advantage on saving throws. When you succeed on
    a save for half damage, you instead take no damage.
- name: Wall of Force
  level: 5
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: An invisible wall of force springs into existence. The wall can be free-floating or resting on a solid surface.
    Nothing can physically pass through. It is immune to all damage and cannot be dispelled by Dispel Magic. A Disintegrate
    spell destroys it instantly.
- name: Investiture of Ice
  level: 6
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  buffs:
    damage_immunity: cold
    damage_resistance: fire
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: You are encased in ice. Immune to cold, resistant to fire. Difficult terrain around you. You can use an action
    to fire a 60 ft line of cold (4d8 cold, Dex save half).
- name: Investiture of Stone
  level: 6
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  buffs:
    damage_resistance: bludgeoning,piercing,slashing from nonmagical
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: 'You become like stone. Resistance to nonmagical bludgeoning/piercing/slashing. Can move through difficult
    terrain of earth/stone without penalty. Action to cause a localized quake: 15 ft cube, 3d6 bludgeoning (Dex save for half),
    knocked prone on failure.'
- name: Investiture of Wind
  level: 6
  school: transmutation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  buffs:
    damage_resistance: ranged_weapon_attacks
    speed: flying 60 ft
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: 'Wind swirls around you. Ranged weapon attacks have disadvantage against you. You gain a flying speed of 60
    ft. Action: 15 ft cube of air deals 2d10 bludgeoning (Con save, knocked prone on failure) and pushes creatures 10 ft away.'
- name: Otiluke's Freezing Sphere
  level: 6
  school: evocation
  attack_type: saving_throw
  save_type: con
  save_half: true
  damage_dice: 10d6
  damage_modifier: 0
  damage_type: cold
  higher_levels: +1d6
  aoe: true
  aoe_shape: sphere
  aoe_size: 60-foot radius
  duration: Instantaneous
  requires_concentration: false
  description: 'A globule of freezing energy streaks to a point and explodes. Creatures in a 60-foot radius make a Con save.
    Failure: 10d6 cold. Success: half. Water in the area freezes solid to a depth of 6 inches for 1 minute. You can hold the
    sphere for 1 minute before firing.'
- name: Wall of Thorns
  level: 6
  school: conjuration
  attack_type: saving_throw
  save_type: dex
  save_half: true
  damage_dice: 7d8
  damage_modifier: 0
  damage_type: piercing
  higher_levels: +1d8
  aoe: true
  aoe_shape: line
  aoe_size: 60 ft long, 10 ft wide, 20 ft tall
  duration: Concentration, up to 10 minutes
  requires_concentration: true
  description: A 7d8 damage-dealing wall of tough, flexible brush springs up. Creatures within the wall when cast must make
    a Dex save or take 7d8 piercing, or half. Creatures moving through make a Dex save or take 7d8 piercing (re-entry repeats)
    and the wall slows them.
- name: Power Word Pain
  level: 7
  school: enchantment
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  condition: Pain
  condition_duration: Instantaneous (until save)
  duration: Instantaneous
  requires_concentration: false
  description: 'A creature you can see has its speed reduced to 10 ft and suffers disadvantage on attack rolls, ability checks,
    and saving throws other than Constitution. The target repeats the Con save at the end of its next turn. 100 or fewer HP:
    no save.'
- name: Power Word Heal
  level: 9
  school: evocation
  attack_type: automatic
  damage_dice: 0d0
  damage_modifier: 0
  damage_type: ''
  no_damage: true
  healing: true
  flat_healing: true
  duration: Instantaneous
  requires_concentration: false
  description: A wave of healing energy washes over the target. The target regains all lost hit points. Any blindness, deafness,
    or disease is cured. This spell has no effect on undead or constructs.
`;function Qu(e){return String(e||"").trim().replace(/\s+/g," ").toLowerCase()}function Z_(e){const n=e.trim();return n.startsWith('"')&&n.endsWith('"')||n.startsWith("'")&&n.endsWith("'")?n.slice(1,-1):n}function ey(e){const n=new Set;for(const t of e.split(/\r?\n/)){const a=t.match(/^\s*-\s+name:\s*(.+?)\s*$/);if(!a)continue;const o=Qu(Z_(a[1]??""));o&&n.add(o)}return n}const ny=ey(Q_);function ty(e){return ny.has(Qu(e))}function Dc(e){return e.filter(n=>ty(n.name))}const ay="60e9b64",Yi=`gamedata:v${ay}:`;function oy(){try{const e=[];for(let n=0;n<localStorage.length;n++){const t=localStorage.key(n);t?.startsWith("gamedata:")&&!t.startsWith(Yi)&&e.push(t)}for(const n of e)localStorage.removeItem(n)}catch{}}function sn(e){try{const n=localStorage.getItem(Yi+e);if(n)return JSON.parse(n)}catch{}return null}function cn(e,n){try{localStorage.setItem(Yi+e,JSON.stringify(n))}catch{}}let go=null,gn=null,po=null,_o=null,yo=null,qo=null,vo=null,ba=null,ka=null,bo=null,Or=null,ko=null,wa=null,wo=null,Pr=null,Ka=null,Xa=null,Ja=null,Qa=null,Za=null,eo=null,no=null,to=null,ao=null,oo=null,ro=null,io=null,so=null,co=null;function Zu(){if(go)return Promise.resolve();if(Ka)return Ka;const e=sn("dnd5e-races");return e?(go=e,Promise.resolve()):(Ka=he(()=>import("./game-dnd5e-races-BZtvfoVY.js"),[]).then(n=>{go=n.races,cn("dnd5e-races",n.races)}),Ka)}function ri(){if(gn)return Promise.resolve();if(Xa)return Xa;const e=sn("dnd5e-classes");return e?(gn=e,Promise.resolve()):(Xa=he(()=>import("./game-dnd5e-classes-BXTvgYgP.js"),[]).then(n=>{gn=n.classes,cn("dnd5e-classes",n.classes)}),Xa)}function ed(){if(po)return Promise.resolve();if(Ja)return Ja;const e=sn("dnd5e-backgrounds");return e?(po=e,Promise.resolve()):(Ja=he(()=>import("./game-dnd5e-backgrounds-Dd1yZjw7.js"),[]).then(n=>{po=n.backgrounds,cn("dnd5e-backgrounds",n.backgrounds)}),Ja)}function nd(){if(_o)return Promise.resolve();if(Qa)return Qa;const e=sn("dnd5e-spells");return e?(_o=Dc(e),Promise.resolve()):(Qa=he(()=>import("./game-dnd5e-spells-CSkkUIdW.js"),[]).then(n=>{const t=Dc(n.spells);_o=t,cn("dnd5e-spells",t)}),Qa)}function td(){if(yo)return Promise.resolve();if(Za)return Za;const e=sn("dnd5e-equipment");return e?(yo=e,Promise.resolve()):(Za=he(()=>import("./game-dnd5e-equipment-BkKXBeTh.js"),[]).then(n=>{yo=n.equipmentData,cn("dnd5e-equipment",n.equipmentData)}),Za)}function ad(){return qo?Promise.resolve():eo||(eo=he(()=>import("./game-dnd5e-rules-CdLK10vy.js"),[]).then(e=>{qo=e.getSpellSlotsForLevel,e.getMulticlassSpellSlots}),eo)}function ry(){if(vo)return Promise.resolve();if(no)return no;const e=sn("branca-races");return e?(vo=e,Promise.resolve()):(no=he(()=>import("./game-branca-races-By3c2hGd.js"),[]).then(n=>{vo=n.brancaloniaRaces,cn("branca-races",n.brancaloniaRaces)}),no)}function iy(){if(ba&&ka)return Promise.resolve();if(to)return to;const e=sn("branca-subclasses"),n=sn("branca-burattinaio");return e&&n?(ba=e,ka=n,Promise.resolve()):(to=Promise.all([he(()=>import("./game-branca-classes-Du0xP9ox.js").then(t=>t.c),[]),he(()=>import("./game-branca-classes-Du0xP9ox.js").then(t=>t.b),[])]).then(([t,a])=>{ba=t.brancaloniaSubclasses,ka=a.burattinaioBrancaloniaClass,cn("branca-subclasses",t.brancaloniaSubclasses),cn("branca-burattinaio",a.burattinaioBrancaloniaClass)}),to)}function sy(){if(bo)return Promise.resolve();if(ao)return ao;const e=sn("branca-backgrounds");return e?(bo=e,Promise.resolve()):(ao=he(()=>import("./game-branca-backgrounds-Butas5UI.js"),[]).then(n=>{bo=n.brancaloniaBackgrounds,cn("branca-backgrounds",n.brancaloniaBackgrounds)}),ao)}function cy(){if(Or)return Promise.resolve();if(oo)return oo;const e=sn("branca-rules");return e?(Or=e,Promise.resolve()):(oo=he(()=>import("./game-branca-rules-BkVqwbJe.js"),[]).then(n=>{Or=n.brancaloniaRules,cn("branca-rules",n.brancaloniaRules)}),oo)}function ly(){if(ko)return Promise.resolve();if(ro)return ro;const e=sn("apo-races");return e?(ko=e,Promise.resolve()):(ro=he(()=>import("./game-apo-races-Cur1OFB5.js"),[]).then(n=>{ko=n.apocalisseRaces,cn("apo-races",n.apocalisseRaces)}),ro)}function uy(){if(wa)return Promise.resolve();if(io)return io;const e=sn("apo-subclasses");return e?(wa=e,Promise.resolve()):(io=he(()=>import("./game-apo-classes-C5jxQA0f.js"),[]).then(n=>{wa=n.apocalisseSubclasses,cn("apo-subclasses",n.apocalisseSubclasses)}),io)}function dy(){if(wo)return Promise.resolve();if(so)return so;const e=sn("apo-backgrounds");return e?(wo=e,Promise.resolve()):(so=he(()=>import("./game-apo-backgrounds-CpsOf3zd.js"),[]).then(n=>{wo=n.apocalisseBackgrounds,cn("apo-backgrounds",n.apocalisseBackgrounds)}),so)}function fy(){if(Pr)return Promise.resolve();if(co)return co;const e=sn("apo-rules");return e?(Pr=e,Promise.resolve()):(co=he(()=>import("./game-apo-rules-DFGtCeNz.js"),[]).then(n=>{Pr=n.apocalisseRules,cn("apo-rules",n.apocalisseRules)}),co)}async function my(e,n){const t=[];switch(n){case 1:break;case 2:t.push(Zu());break;case 3:t.push(ri());break;case 4:break;case 5:t.push(ed());break;case 6:t.push(td());break;case 7:t.push(nd(),ad(),ri());break;case 8:t.push(od(e));break}await Promise.all(t),n<8&&my(e,n+1).catch(()=>{})}async function od(e){const n=[Zu(),ri(),ed(),nd(),td(),ad()];e==="brancalonia"&&n.push(ry(),iy(),sy(),cy()),e==="apocalisse"&&n.push(ly(),uy(),dy(),fy()),await Promise.all(n)}async function Ly(e){await od(e)}function Ry(e){switch(e){case"brancalonia":return vo??[];case"apocalisse":return ko??[];default:return go??[]}}function Ny(e){if(!gn)return[];switch(e){case"brancalonia":{if(!ba)return[];const n=gn.map(t=>{const a=ba.filter(r=>r.parentClassId===t.id);if(a.length===0)return t;const o=a.map(r=>({id:r.id,name:r.nameOriginal?`${r.name} (${r.nameOriginal})`:r.name,description:r.description,features:r.features}));return{...t,subclasses:o}});return ka&&n.push(ka),n}case"apocalisse":return wa?gn.map(n=>{const t=wa.filter(o=>o.parentClassId===n.id);if(t.length===0)return n;const a=t.map(o=>({id:o.id,name:o.nameOriginal?`${o.name} (${o.nameOriginal})`:o.name,description:o.description,features:o.features}));return{...n,subclasses:a}}):[];default:return gn}}function xy(e){switch(e){case"brancalonia":return bo??[];case"apocalisse":return wo??[];default:return po??[]}}const hy={maxLevel:20,currencyStandard:"gold",shortRestDuration:"1 hour",longRestDuration:"8 hours"},gy={maxLevel:10,currencyStandard:"silver",shortRestDuration:"1 night (8 hours)",longRestDuration:"1 week of rollicking"},py={maxLevel:20,currencyStandard:"gold",shortRestDuration:"1 hour",longRestDuration:"8 hours"};function _y(e){switch(e){case"brancalonia":return gy;case"apocalisse":return py;default:return hy}}function Dy(e){return _y(e).maxLevel}function My(e){return yo??{simpleWeapons:[],martialWeapons:[],armor:[],packs:[]}}function Fy(e){return _o??[]}function qy(e,n){if(!gn||!qo)return{};const t=gn.find(a=>a.id===e);return t?.spellcasting?qo(t.spellcasting.casterType,n):{}}function jy(e,n){if(!gn)return 0;const t=gn.find(o=>o.id===e);if(!t?.spellcasting)return 0;const a=Math.min(n-1,t.spellcasting.cantripsKnown.length-1);return t.spellcasting.cantripsKnown[a]??0}function Yy(e,n,t){if(!gn)return 0;const a=gn.find(o=>o.id===e);if(!a?.spellcasting)return 0;if(a.spellcasting.preparedCaster){const o=t[a.spellcasting.ability]??0;return Math.max(1,o+n)}if(a.spellcasting.spellsKnown){const o=Math.min(n-1,a.spellcasting.spellsKnown.length-1);return a.spellcasting.spellsKnown[o]??0}return 0}const yy=new URLSearchParams(window.location.search),lo=yy.get("route"),vy=/^[a-zA-Z0-9/_\-.]+(#[a-zA-Z0-9_-]*)?$/,ii=lo&&vy.test(lo)&&lo.length<2e3?lo:null;if(ii){const e=window.location.pathname;window.history.replaceState(null,"",e+"#restored")}async function by(){oy(),await dp();const e=Mm();e.use(Gm);const n=Nm($p);n.use(e),n.use(Sr),n.use(St),ii&&Sr.isReady().then(()=>{Sr.replace("/"+ii)}),n.mount("#app")}by();export{Jo as A,Ly as B,Py as C,Fy as D,jy as E,fn as F,Yy as G,qy as H,Um as I,Qn as J,Cy as K,ky as L,Iy as M,Ty as N,Ry as O,xy as P,My as Q,Sy as R,Ay as T,he as _,_p as a,se as b,on as c,Wn as d,ee as e,Ii as f,ye as g,my as h,Oy as i,qa as j,le as k,$f as l,Ey as m,Bo as n,Xe as o,En as p,wy as q,_f as r,Le as s,Pe as t,xt as u,Ny as v,Nn as w,Mr as x,Dy as y,ef as z};
