import{H as b,s as d}from"./index.33fbba09.js";const e=[];function g(n,a=b){let o;const i=new Set;function r(t){if(d(n,t)&&(n=t,o)){const c=!e.length;for(const s of i)s[1](),e.push(s,n);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(n))}function _(t,c=b){const s=[t,c];return i.add(s),i.size===1&&(o=a(r)||b),t(n),()=>{i.delete(s),i.size===0&&o&&(o(),o=null)}}return{set:r,update:l,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_1jsc7md)==null?void 0:u.base)??"/svelte-counter";var f;const m=((f=globalThis.__sveltekit_1jsc7md)==null?void 0:f.assets)??h;export{m as a,h as b,g as w};
