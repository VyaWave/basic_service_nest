import{R as l,j as t,a as c,I as p,E,b as g,C as B,c as F,V as A,B as U,S as D,d as f,t as y,N as M,e as O}from"./vendor.c478b483.js";const P=function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))h(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&h(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function h(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}};P();const R="_container_1922i_1",W="_main_1922i_13",k="_ctxWrapper_1922i_46",j="_tips_1922i_57",G="_title_1922i_64";var i={container:R,main:W,ctxWrapper:k,tips:j,title:G};var V="/assets/icon.782a31a3.svg";const v=s=>t(M,{type:s.type,header:s.title,closable:!0,children:t("div",{style:{minWidth:200,minHeight:40},children:s.content})}),C={width:300,marginBottom:20},Y=()=>{const[s,u]=l.useState(!1),[r,h]=l.useState(!0),[e,n]=l.useState(""),[o,_]=l.useState(""),[L,m]=l.useState(!1),S=()=>{u(!s)},b=()=>{h(!r)},N=a=>{_(a.trim())},w=a=>{n(a.trim())},x=()=>{const a="https://api.weiya.design/api";return f.post(`${a}/account/register`,{email:e,password:o}).then(d=>{d.data.code==200&&(m(!0),y.push(v({type:"success",title:"\u63D0\u793A",content:"\u6CE8\u518C\u6210\u529F"}),{placement:"topEnd"}))})},I=()=>{const a="https://api.weiya.design/api";return f.post(`${a}/account/login`,{email:e,password:o}).then(d=>{console.info(d),d.data.code==200&&(m(!0),y.push(v({type:"success",title:"\u63D0\u793A",content:"\u767B\u5F55\u6210\u529F"}),{placement:"topEnd"}),window.location.href=d.data.nextUrl)})};return t("div",{className:i.container,children:c("main",{className:i.main,children:[t("img",{src:V,"data-origin":"_media/icon.svg",alt:"logo",width:"250",height:"60",style:{zIndex:100,position:"relative"}}),L?t("p",{className:i.title,children:"You Success Login!"}):c("div",{className:i.ctxWrapper,children:[c(p,{inside:!0,style:C,className:i.input,children:[t(p.Addon,{children:t(E,{})}),t(g,{placeholder:"Your Account",value:e,onChange:w})]}),c(p,{inside:!0,style:C,className:i.input,children:[t(p.Addon,{children:t(B,{})}),t(g,{placeholder:"Your Password",type:s?"text":"password",value:o,onChange:N}),t(p.Button,{onClick:S,children:s?t(F,{}):t(A,{})})]}),c(U,{type:"submit",className:i.button,appearance:"primary",style:{width:300},color:"blue",onClick:r?I:x,children:[r?"\u767B\u5F55\u7CFB\u7EDF":"\u6CE8\u518C\u8D26\u53F7",t(D,{style:{transform:"rotate(90deg)",fontSize:"20px"}})]}),c("div",{className:i.tips,onClick:b,children:[r?"Go To SignUp":"Go To Login"," "]})]})]})})};O.render(t(l.StrictMode,{children:t(Y,{})}),document.getElementById("root"));
