(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();function c(){const i=document.querySelector(".informacoes-data"),r=new Date;let e=r.getMonth(),s=r.getDate(),t=r.getFullYear();e===0?e=1:e===1?e=2:e===2?e=3:e===3?e=4:e===4?e=5:e===5?e=6:e===6?e=7:e===7?e=8:e===8?e=9:e===9?e=10:e===10?e=11:e=12,i instanceof HTMLElement&&(i.innerHTML=`${s}/${e}/${t}`);const n=document.querySelector(".informacoes-hora");n instanceof HTMLElement&&setInterval(()=>{const o=new Date;n.innerHTML=`${o.getHours()}:${o.getMinutes()}:${o.getSeconds()}`},1e3),n instanceof HTMLElement&&setInterval(()=>{const o=new Date;n.innerHTML=`${o.getHours()}:${o.getMinutes()}:${o.getSeconds()}`},1e3)}c();function a(){const i="Campo Grande",r="e9a4d66f536eb1b95acc5a7265f0f966",e=document.querySelector(".informacoes-clima");function s(n){e instanceof Element&&(e.innerHTML=n+" C")}async function t(){const o=await(await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${i}&units=metric&appid=${r}`)).json();s(parseInt(o.main.temp))}t()}a();function f(){let i=document.querySelector(".efeito-texto"),e=i.innerHTML.split("");i.innerHTML="",e.forEach((s,t)=>{setTimeout(()=>{i.innerHTML+=s},t*70)})}f();c();a();f();