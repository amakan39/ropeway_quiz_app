(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const i=document.querySelector("#bg-video"),l=document.querySelector("#startBtn"),d=document.querySelector("#quiz");let a=0;const u=[{question:"Q1. 1が正解",a:{img:"./assets/q1a.png",correct:!0},b:{img:"./assets/q1b.png",correct:!1}},{question:"Q2. 2が正解",a:{img:"./assets/q2a.png",correct:!1},b:{img:"./assets/q2b.png",correct:!0}},{question:"Q3. 1が正解",a:{img:"./assets/q3a.png",correct:!0},b:{img:"./assets/q3b.png",correct:!1}}];l.addEventListener("click",async()=>{l.style.display="none";try{await i.play()}catch(t){console.warn("Video playback blocked:",t)}m(0)});function m(t){const s=u[t];a=t,d.innerHTML=`
    <div class="quiz">
      <div class="question">${s.question}</div>
      <div class="answers">
        <img src="${s.a.img}" onclick="selectAnswer(${s.a.correct})">
        <img src="${s.b.img}" onclick="selectAnswer(${s.b.correct})">
      </div>
    </div>
  `}window.selectAnswer=function(t){const s=document.querySelectorAll(".answers img");s.forEach(e=>{e.style.pointerEvents="none",e.style.opacity="0.6"});const r=document.createElement("div");r.classList.add("result-label"),r.textContent=t?"正解！":"はずれ...",r.classList.add(t?"correct":"wrong");const c=event.target;c.parentElement.style.position="relative",c.parentElement.appendChild(r),g(t?"correct.mp3":"wrong.mp3"),s.forEach(e=>{e.style.transform="scale(0.95)"}),setTimeout(()=>{a<u.length-1?m(a+1):p()},3e3)};function p(){d.innerHTML="";const t=document.createElement("div");t.classList.add("end-screen"),t.innerHTML=`
    <div class="end-text">
      おしまい！<br><small>タップで戻る</small>
    </div>
  `,document.body.appendChild(t);const s=()=>{f(),t.removeEventListener("click",s),t.remove()};t.addEventListener("click",s)}function f(){i.pause(),i.currentTime=0,d.innerHTML="",l.style.display="block"}function g(t){new Audio(`./assets/${t}`).play()}
