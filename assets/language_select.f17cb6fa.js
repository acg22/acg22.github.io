import{P as i,o as e,f as l,g as u,C as c,p as d,d as b}from"./cursor.d7e0ff2b.js";import{u as m,B as s}from"./debug.a095a0f0.js";const p=()=>{const{t:n}=l(),o=u(b,r=>r.setLang),t=m(),a=()=>{t.setTrue(),document.body.style.opacity="0",setTimeout(()=>{location.href="./"},1100)};return e(d,{children:[e("div",{class:"text-center mx-auto w-[50%] mt-[35vh]",children:[e("h2",{class:"text-amber-400 text-3xl font-bold mb-12 tracking-wide [-webkit-text-stroke:3px_rgba(255,255,100,0.4)]",children:n("Choose a Display Language.")}),e(s,{disabled:t.value,class:"pointer button--gray-600 !block mx-auto mb-4 min-w-[200px] [-webkit-text-stroke:3px_rgba(255,255,255,0.2)]",onMouseOver:()=>{t.value||o("en-US")},onClick:()=>{o("en-US"),a()},children:"English (US)"}),e(s,{disabled:t.value,class:"pointer button--gray-600 !block mx-auto mb-4 min-w-[200px] [-webkit-text-stroke:3px_rgba(255,255,255,0.2)]",onMouseOver:()=>{t.value||o("ja-JP")},onClick:()=>{o("ja-JP"),a()},children:"\u65E5\u672C\u8A9E"})]}),e(c,{})]})};i(e(p,{}),document.querySelector("div#app"));
