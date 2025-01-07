var mt=Object.defineProperty;var yt=(e,n,t)=>n in e?mt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var x=(e,n,t)=>yt(e,typeof n!="symbol"?n+"":n,t);import{o as xe,t as wt}from"./scheduler.DJbpphU1.js";import{w as we}from"./index.CxVYBNaI.js";new URL("sveltekit-internal://");function _t(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function vt(e){return e.split("%25").map(decodeURI).join("%25")}function bt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function ue({href:e}){return e.split("#")[0]}function At(e,n,t,a=!1){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(i,s){if(s==="get"||s==="getAll"||s==="has")return f=>(t(f),i[s](f));n();const c=Reflect.get(i,s);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const o=["href","pathname","search","toString","toJSON"];a&&o.push("hash");for(const i of o)Object.defineProperty(r,i,{get(){return n(),e[i]},enumerable:!0,configurable:!0});return r}const kt="/__data.json",St=".html__data.json";function Et(e){return e.endsWith(".html")?e.replace(/\.html$/,St):e.replace(/\/$/,"")+kt}function Rt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let a=t.length;for(;a;)n=n*33^t.charCodeAt(--a)}else if(ArrayBuffer.isView(t)){const a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function It(e){const n=atob(e),t=new Uint8Array(n.length);for(let a=0;a<n.length;a++)t[a]=n.charCodeAt(a);return t.buffer}const Me=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&G.delete(_e(e)),Me(e,n));const G=new Map;function Ut(e,n){const t=_e(e,n),a=document.querySelector(t);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&G.set(t,{body:r,init:o,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=It(r)),Promise.resolve(new Response(r,o))}return window.fetch(e,n)}function Lt(e,n,t){if(G.size>0){const a=_e(e,t),r=G.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(r.body,r.init);G.delete(a)}}return window.fetch(n,t)}function _e(e,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${Rt(...r)}"]`}return a}const Tt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function xt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Ct(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return de(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return de(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=Tt.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?f===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return de(c)}).join("")}).join("")}/?$`),params:n}}function Pt(e){return!/^\([^)]+\)$/.test(e)}function Ct(e){return e.slice(1).split("/").filter(Pt)}function Ot(e,n,t){const a={},r=e.slice(1),o=r.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let f=r[s-i];if(c.chained&&c.rest&&i&&(f=r.slice(s-i,s+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||t[c.matcher](f)){a[c.name]=f;const d=n[s+1],h=r[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(a).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function de(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Nt({nodes:e,server_loads:n,dictionary:t,matchers:a}){const r=new Set(n);return Object.entries(t).map(([s,[c,f,d]])=>{const{pattern:h,params:y}=xt(s),u={id:s,exec:g=>{const l=h.exec(g);if(l)return Ot(l,y,a)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...f||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[r.has(s),e[s]]}}function qe(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Pe(e,n,t=JSON.stringify){const a=t(n);try{sessionStorage[e]=a}catch{}}var Be;const T=((Be=globalThis.__sveltekit_17osfwd)==null?void 0:Be.base)??"/rainfly";var Ge;const $t=((Ge=globalThis.__sveltekit_17osfwd)==null?void 0:Ge.assets)??T,jt="1736276266291",He="sveltekit:snapshot",Ke="sveltekit:scroll",We="sveltekit:states",Dt="sveltekit:pageurl",j="sveltekit:history",H="sveltekit:navigation",z={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},J=location.origin;function Ye(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function ve(){return{x:pageXOffset,y:pageYOffset}}function $(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Ce={...z,"":z.hover};function Je(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function ze(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Je(e)}}function ge(e,n,t){let a;try{a=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,o=!a||!!r||oe(a,n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(a==null?void 0:a.origin)===J&&e.hasAttribute("download");return{url:a,external:o,target:r,download:i}}function X(e){let n=null,t=null,a=null,r=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)a===null&&(a=$(s,"preload-code")),r===null&&(r=$(s,"preload-data")),n===null&&(n=$(s,"keepfocus")),t===null&&(t=$(s,"noscroll")),o===null&&(o=$(s,"reload")),i===null&&(i=$(s,"replacestate")),s=Je(s);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ce[a??"off"],preload_data:Ce[r??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function Oe(e){const n=we(e);let t=!0;function a(){t=!0,n.update(i=>i)}function r(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:a,set:r,subscribe:o}}const Xe={v:()=>{}};function Ft(){const{set:e,subscribe:n}=we(!1);let t;async function a(){clearTimeout(t);try{const r=await fetch(`${$t}/app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==jt;return i&&(e(!0),Xe.v(),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:a}}function oe(e,n,t){return e.origin!==J||!e.pathname.startsWith(n)?!0:t?!(e.pathname===n+"/"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===n):!1}function Ne(e){const n=Bt(e),t=new ArrayBuffer(n.length),a=new DataView(t);for(let r=0;r<t.byteLength;r++)a.setUint8(r,n.charCodeAt(r));return t}const Vt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Bt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,a=0;for(let r=0;r<e.length;r++)t<<=6,t|=Vt.indexOf(e[r]),a+=6,a===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=a=0);return a===12?(t>>=4,n+=String.fromCharCode(t)):a===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const Gt=-1,Mt=-2,qt=-3,Ht=-4,Kt=-5,Wt=-6;function Yt(e,n){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,a=Array(t.length);function r(o,i=!1){if(o===Gt)return;if(o===qt)return NaN;if(o===Ht)return 1/0;if(o===Kt)return-1/0;if(o===Wt)return-0;if(i)throw new Error("Invalid input");if(o in a)return a[o];const s=t[o];if(!s||typeof s!="object")a[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],f=n==null?void 0:n[c];if(f)return a[o]=f(r(s[1]));switch(c){case"Date":a[o]=new Date(s[1]);break;case"Set":const d=new Set;a[o]=d;for(let u=1;u<s.length;u+=1)d.add(r(s[u]));break;case"Map":const h=new Map;a[o]=h;for(let u=1;u<s.length;u+=2)h.set(r(s[u]),r(s[u+1]));break;case"RegExp":a[o]=new RegExp(s[1],s[2]);break;case"Object":a[o]=Object(s[1]);break;case"BigInt":a[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);a[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=r(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],l=Ne(g),p=new u(l);a[o]=p;break}case"ArrayBuffer":{const u=s[1],g=Ne(u);a[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);a[o]=c;for(let f=0;f<s.length;f+=1){const d=s[f];d!==Mt&&(c[f]=r(d))}}else{const c={};a[o]=c;for(const f in s){const d=s[f];c[f]=r(d)}}return a[o]}return r(0)}const Ze=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ze];const Jt=new Set([...Ze]);[...Jt];function zt(e){return e.filter(n=>n!=null)}class se{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Qe{constructor(n,t){this.status=n,this.location=t}}class be extends Error{constructor(n,t,a){super(a),this.status=n,this.text=t}}const Xt="x-sveltekit-invalidated",Zt="x-sveltekit-trailing-slash";function Z(e){return e instanceof se||e instanceof be?e.status:500}function Qt(e){return e instanceof be?e.text:"Internal Error"}let I,K,he;const en=xe.toString().includes("$$")||/function \w+\(\) \{\}/.test(xe.toString());en?(I={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},K={current:null},he={current:!1}):(I=new class{constructor(){x(this,"data",$state.raw({}));x(this,"form",$state.raw(null));x(this,"error",$state.raw(null));x(this,"params",$state.raw({}));x(this,"route",$state.raw({id:null}));x(this,"state",$state.raw({}));x(this,"status",$state.raw(-1));x(this,"url",$state.raw(new URL("https://example.com")))}},K=new class{constructor(){x(this,"current",$state.raw(null))}},he=new class{constructor(){x(this,"current",$state.raw(!1))}},Xe.v=()=>he.current=!0);function tn(e){Object.assign(I,e)}const nn=new Set(["icon","shortcut icon","apple-touch-icon"]),N=qe(Ke)??{},W=qe(He)??{},C={url:Oe({}),page:Oe({}),navigating:we(null),updated:Ft()};function Ae(e){N[e]=ve()}function an(e,n){let t=e+1;for(;N[t];)delete N[t],t+=1;for(t=n+1;W[t];)delete W[t],t+=1}function F(e){return location.href=e.href,new Promise(()=>{})}async function et(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(T||"/");e&&await e.update()}}function $e(){}let ie,me,Q,P,ye,A;const tt=[],ee=[];let U=null;const nt=new Set,rn=new Set,M=new Set;let w={branch:[],error:null,url:null},ke=!1,te=!1,je=!0,Y=!1,V=!1,at=!1,Se=!1,rt,R,L,ne;const q=new Set;async function bn(e,n,t){var r,o,i,s;document.URL!==location.href&&(location.href=location.href),A=e,await((o=(r=e.hooks).init)==null?void 0:o.call(r)),ie=Nt(e),P=document.documentElement,ye=n,me=e.nodes[0],Q=e.nodes[1],me(),Q(),R=(i=history.state)==null?void 0:i[j],L=(s=history.state)==null?void 0:s[H],R||(R=L=Date.now(),history.replaceState({...history.state,[j]:R,[H]:L},""));const a=N[R];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),t?await hn(ye,t):un(location.href,{replaceState:!0}),dn()}function on(){tt.length=0,Se=!1}function ot(e){ee.some(n=>n==null?void 0:n.snapshot)&&(W[e]=ee.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function st(e){var n;(n=W[e])==null||n.forEach((t,a)=>{var r,o;(o=(r=ee[a])==null?void 0:r.snapshot)==null||o.restore(t)})}function De(){Ae(R),Pe(Ke,N),ot(L),Pe(He,W)}async function it(e,n,t,a){return B({type:"goto",url:Ye(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:a,accept:()=>{n.invalidateAll&&(Se=!0)}})}async function sn(e){if(e.id!==(U==null?void 0:U.id)){const n={};q.add(n),U={id:e.id,token:n,promise:lt({...e,preload:n}).then(t=>(q.delete(n),t.type==="loaded"&&t.state.error&&(U=null),t))}}return U.promise}async function pe(e){const n=ie.find(t=>t.exec(ft(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function ct(e,n,t){var o;w=e.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),Object.assign(I,e.props.page),rt=new A.root({target:n,props:{...e.props,stores:C,components:ee},hydrate:t,sync:!1}),st(L);const r={from:null,to:{params:w.params,route:{id:((o=w.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};M.forEach(i=>i(r)),te=!0}function ae({url:e,params:n,branch:t,status:a,error:r,route:o,form:i}){let s="never";if(T&&(e.pathname===T||e.pathname===T+"/"))s="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=_t(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:r,route:o},props:{constructors:zt(t).map(u=>u.node.component),page:Ue(I)}};i!==void 0&&(c.props.form=i);let f={},d=!I,h=0;for(let u=0;u<Math.max(t.length,w.branch.length);u+=1){const g=t[u],l=w.branch[u];(g==null?void 0:g.data)!==(l==null?void 0:l.data)&&(d=!0),g&&(f={...f,...g.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!w.url||e.href!==w.url.href||w.error!==r||i!==void 0&&i!==I.form||d)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(e),form:i??null,data:d?f:I.data}),c}async function Ee({loader:e,parent:n,url:t,params:a,route:r,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const p of l){const{href:b}=new URL(p,t);c.dependencies.add(b)}};const g={route:new Proxy(r,{get:(l,p)=>(s&&(c.route=!0),l[p])}),params:new Proxy(a,{get:(l,p)=>(s&&c.params.add(p),l[p])}),data:(o==null?void 0:o.data)??null,url:At(t,()=>{s&&(c.url=!0)},l=>{s&&c.search_params.add(l)},A.hash),async fetch(l,p){let b;l instanceof Request?(b=l.url,p={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:[...l.headers].length?l.headers:void 0,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...p}):b=l;const S=new URL(b,t);return s&&u(S.href),S.origin===t.origin&&(b=S.href.slice(t.origin.length)),te?Lt(b,S.href,p):Ut(b,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(l){s=!1;try{return l()}finally{s=!0}}};i=await f.universal.load.call(null,g)??null}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Fe(e,n,t,a,r,o){if(Se)return!0;if(!r)return!1;if(r.parent&&e||r.route&&n||r.url&&t)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(o[i]!==w.params[i])return!0;for(const i of r.dependencies)if(tt.some(s=>s(new URL(i))))return!0;return!1}function Re(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function cn(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const a of t){const r=e.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(i=>o.includes(i))&&o.every(i=>r.includes(i))&&t.delete(a)}return t}function Ve({error:e,url:n,route:t,params:a}){return{type:"loaded",state:{error:e,url:n,route:t,params:a,branch:[]},props:{page:Ue(I),constructors:[]}}}async function lt({id:e,invalidating:n,url:t,params:a,route:r,preload:o}){if((U==null?void 0:U.id)===e)return q.delete(U.token),U.promise;const{errors:i,layouts:s,leaf:c}=r,f=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),f.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=w.url?e!==re(w.url):!1,y=w.route?r.id!==w.route.id:!1,u=cn(w.url,t);let g=!1;const l=f.map((m,_)=>{var O;const k=w.branch[_],E=!!(m!=null&&m[0])&&((k==null?void 0:k.loader)!==m[1]||Fe(g,y,h,u,(O=k.server)==null?void 0:O.uses,a));return E&&(g=!0),E});if(l.some(Boolean)){try{d=await ht(t,l)}catch(m){const _=await D(m,{url:t,params:a,route:{id:e}});return q.has(o)?Ve({error:_,url:t,params:a,route:r}):ce({status:Z(m),error:_,url:t,route:r})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let b=!1;const S=f.map(async(m,_)=>{var le;if(!m)return;const k=w.branch[_],E=p==null?void 0:p[_];if((!E||E.type==="skip")&&m[1]===(k==null?void 0:k.loader)&&!Fe(b,y,h,u,(le=k.universal)==null?void 0:le.uses,a))return k;if(b=!0,(E==null?void 0:E.type)==="error")throw E;return Ee({loader:m[1],url:t,params:a,route:r,parent:async()=>{var Te;const Le={};for(let fe=0;fe<_;fe+=1)Object.assign(Le,(Te=await S[fe])==null?void 0:Te.data);return Le},server_data_node:Re(E===void 0&&m[0]?{type:"skip"}:E??null,m[0]?k==null?void 0:k.server:void 0)})});for(const m of S)m.catch(()=>{});const v=[];for(let m=0;m<f.length;m+=1)if(f[m])try{v.push(await S[m])}catch(_){if(_ instanceof Qe)return{type:"redirect",location:_.location};if(q.has(o))return Ve({error:await D(_,{params:a,url:t,route:{id:r.id}}),url:t,params:a,route:r});let k=Z(_),E;if(p!=null&&p.includes(_))k=_.status??k,E=_.error;else if(_ instanceof se)E=_.body;else{if(await C.updated.check())return await et(),await F(t);E=await D(_,{params:a,url:t,route:{id:r.id}})}const O=await ln(m,v,i);return O?ae({url:t,params:a,branch:v.slice(0,O.idx).concat(O.node),status:k,error:E,route:r}):await dt(t,{id:r.id},E,k)}else v.push(void 0);return ae({url:t,params:a,branch:v,status:200,error:null,route:r,form:n?void 0:null})}async function ln(e,n,t){for(;e--;)if(t[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ce({status:e,error:n,url:t,route:a}){const r={};let o=null;if(A.server_loads[0]===0)try{const f=await ht(t,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(t.origin!==J||t.pathname!==location.pathname||ke)&&await F(t)}const s=await Ee({loader:me,url:t,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Re(o)}),c={node:await Q(),loader:Q,universal:null,server:null,data:null};return ae({url:t,params:r,branch:[s,c],status:e,error:n,route:null})}function Ie(e,n){if(!e||oe(e,T,A.hash))return;let t;try{if(t=A.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const r=new URL(e);A.hash?r.hash=t:r.pathname=t,t=r}}catch{return}const a=ft(t);for(const r of ie){const o=r.exec(a);if(o)return{id:re(e),invalidating:n,route:r,params:bt(o),url:e}}}function ft(e){return vt(A.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(T.length))||"/"}function re(e){return(A.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function ut({url:e,type:n,intent:t,delta:a}){let r=!1;const o=gt(w,t,e,n);a!==void 0&&(o.navigation.delta=a);const i={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return Y||nt.forEach(s=>s(i)),r?null:o}async function B({type:e,url:n,popped:t,keepfocus:a,noscroll:r,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:f=$e,block:d=$e}){const h=Ie(n,!1),y=ut({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!y){d();return}const u=R,g=L;f(),Y=!0,te&&C.navigating.set(K.current=y.navigation),ne=c;let l=h&&await lt(h);if(!l){if(oe(n,T,A.hash))return await F(n);l=await dt(n,{id:null},await D(new be(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,ne!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(s>=20)l=await ce({status:500,error:await D(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return it(new URL(l.location,n).href,{},s+1,c),!1;else l.props.page.status>=400&&await C.updated.check()&&(await et(),await F(n));if(on(),Ae(u),ot(g),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),i=t?t.state:i,!t){const v=o?0:1,m={[j]:R+=v,[H]:L+=v,[We]:i};(o?history.replaceState:history.pushState).call(history,m,"",n),o||an(R,L)}if(U=null,l.props.page.state=i,te){w=l.state,l.props.page&&(l.props.page.url=n);const v=(await Promise.all(Array.from(rn,m=>m(y.navigation)))).filter(m=>typeof m=="function");if(v.length>0){let m=function(){v.forEach(_=>{M.delete(_)})};v.push(m),v.forEach(_=>{M.add(_)})}rt.$set(l.props),tn(l.props.page),at=!0}else ct(l,ye,!1);const{activeElement:p}=document;await wt();const b=t?t.scroll:r?ve():null;if(je){const v=n.hash&&document.getElementById(decodeURIComponent(A.hash?n.hash.split("#")[2]??"":n.hash.slice(1)));b?scrollTo(b.x,b.y):v?v.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==p&&document.activeElement!==document.body;!a&&!S&&pn(),je=!0,l.props.page&&Object.assign(I,l.props.page),Y=!1,e==="popstate"&&st(L),y.fulfil(void 0),M.forEach(v=>v(y.navigation)),C.navigating.set(K.current=null)}async function dt(e,n,t,a){return e.origin===J&&e.pathname===location.pathname&&!ke?await ce({status:a,error:t,url:e,route:n}):await F(e)}function fn(){let e;P.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{a(i,2)},20)});function n(o){o.defaultPrevented||a(o.composedPath()[0],1)}P.addEventListener("mousedown",n),P.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(pe(new URL(i.target.href)),t.unobserve(i.target))},{threshold:0});function a(o,i){const s=ze(o,P);if(!s)return;const{url:c,external:f,download:d}=ge(s,T,A.hash);if(f||d)return;const h=X(s),y=c&&re(w.url)===re(c);if(!h.reload&&!y)if(i<=h.preload_data){const u=Ie(c,!1);u&&sn(u)}else i<=h.preload_code&&pe(c)}function r(){t.disconnect();for(const o of P.querySelectorAll("a")){const{url:i,external:s,download:c}=ge(o,T,A.hash);if(s||c)continue;const f=X(o);f.reload||(f.preload_code===z.viewport&&t.observe(o),f.preload_code===z.eager&&pe(i))}}M.add(r),r()}function D(e,n){if(e instanceof se)return e.body;const t=Z(e),a=Qt(e);return A.hooks.handleError({error:e,event:n,status:t,message:a})??{message:a}}function un(e,n={}){return e=new URL(Ye(e)),e.origin!==J?Promise.reject(new Error("goto: invalid URL")):it(e,n,0)}function dn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let a=!1;if(De(),!Y){const r=gt(w,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};nt.forEach(i=>i(o))}a?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&De()}),(n=navigator.connection)!=null&&n.saveData||fn(),P.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const a=ze(t.composedPath()[0],P);if(!a)return;const{url:r,external:o,target:i,download:s}=ge(a,T,A.hash);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=X(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||s)return;const[d,h]=(A.hash?r.hash.replace(/^#/,""):r.href).split("#"),y=d===ue(location);if(o||c.reload&&(!y||!h)){ut({url:r,type:"link"})?Y=!0:t.preventDefault();return}if(h!==void 0&&y){const[,u]=w.url.href.split("#");if(u===h){if(t.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=a.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(V=!0,Ae(R),e(r),!c.replace_state)return;V=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),B({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),P.addEventListener("submit",t=>{if(t.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const s=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(oe(s,T,!1))return;const c=t.target,f=X(c);if(f.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=r==null?void 0:r.getAttribute("name");h&&d.append(h,(r==null?void 0:r.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),B({type:"form",url:s,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var a;if((a=t.state)!=null&&a[j]){const r=t.state[j];if(ne={},r===R)return;const o=N[r],i=t.state[We]??{},s=new URL(t.state[Dt]??location.href),c=t.state[H],f=ue(location)===ue(w.url);if(c===L&&(at||f)){i!==I.state&&(I.state=i),e(s),N[R]=ve(),o&&scrollTo(o.x,o.y),R=r;return}const h=r-R;await B({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{R=r,L=c},block:()=>{history.go(-h)},nav_token:ne})}else if(!V){const r=new URL(location.href);e(r)}}),addEventListener("hashchange",()=>{V?(V=!1,history.replaceState({...history.state,[j]:++R,[H]:L},"",location.href)):A.hash&&w.url.hash===location.hash&&B({type:"goto",url:w.url})});for(const t of document.querySelectorAll("link"))nn.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&C.navigating.set(K.current=null)});function e(t){w.url=I.url=t,C.page.set(Ue(I)),C.page.notify()}}async function hn(e,{status:n=200,error:t,node_ids:a,params:r,route:o,data:i,form:s}){ke=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=Ie(c,!1)||{});let f,d=!0;try{const h=a.map(async(g,l)=>{const p=i[l];return p!=null&&p.uses&&(p.uses=pt(p.uses)),Ee({loader:A.nodes[g],url:c,params:r,route:o,parent:async()=>{const b={};for(let S=0;S<l;S+=1)Object.assign(b,(await h[S]).data);return b},server_data_node:Re(p)})}),y=await Promise.all(h),u=ie.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let l=0;l<g.length;l++)g[l]||y.splice(l,0,void 0)}f=ae({url:c,params:r,branch:y,status:n,error:t,form:s,route:u??null})}catch(h){if(h instanceof Qe){await F(new URL(h.location,location.href));return}f=await ce({status:Z(h),error:await D(h,{url:c,params:r,route:o}),url:c,route:o}),e.textContent="",d=!1}f.props.page&&(f.props.page.state={}),ct(f,e,d)}async function ht(e,n){var r;const t=new URL(e);t.pathname=Et(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(Zt,"1"),t.searchParams.append(Xt,n.map(o=>o?"1":"0").join(""));const a=await Me(t.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new se(a.status,o)}return new Promise(async o=>{var h;const i=new Map,s=a.body.getReader(),c=new TextDecoder;function f(y){return Yt(y,{...A.decoders,Promise:u=>new Promise((g,l)=>{i.set(u,{fulfil:g,reject:l})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const l=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=pt(p.uses),p.data=f(p.data))}),o(l);else if(l.type==="chunk"){const{id:p,data:b,error:S}=l,v=i.get(p);i.delete(p),S?v.reject(f(S)):v.fulfil(f(b))}}}})}function pt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function pn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const i=r[o],s=a.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}a.removeAllRanges()}})}}}function gt(e,n,t,a){var c,f;let r,o;const i=new Promise((d,h)=>{r=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:t},willUnload:!n,type:a,complete:i},fulfil:r,reject:o}}function Ue(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}export{bn as a,C as s};