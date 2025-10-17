(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const i=document.querySelector("#bg-video"),l=document.querySelector("#startBtn"),d=document.querySelector("#quiz");let a=0;const u=[{question:"Q1. 1が正解",a:{img:"/q1a.png",correct:!0},b:{img:"/q1b.png",correct:!1}},{question:"Q2. 2が正解",a:{img:"/q2a.png",correct:!1},b:{img:"/q2b.png",correct:!0}},{question:"Q3. 1が正解",a:{img:"/q3a.png",correct:!0},b:{img:"/q3b.png",correct:!1}}];l.addEventListener("click",async()=>{l.style.display="none";try{await i.play()}catch(t){console.warn("Video playback blocked:",t)}m(0)});function m(t){const n=u[t];a=t,d.innerHTML=`
    <div class="quiz">
      <div class="question">${n.question}</div>
      <div class="answers">
        <img src="${n.a.img}" onclick="selectAnswer(${n.a.correct})">
        <img src="${n.b.img}" onclick="selectAnswer(${n.b.correct})">
      </div>
    </div>
  `}window.selectAnswer=function(t){const n=document.querySelectorAll(".answers img");n.forEach(e=>{e.style.pointerEvents="none",e.style.opacity="0.6"});const c=document.createElement("div");c.classList.add("result-label"),c.textContent=t?"正解！":"はずれ...",c.classList.add(t?"correct":"wrong");const o=event.target;o.parentElement.style.position="relative",o.parentElement.appendChild(c),g(t?"correct.mp3":"wrong.mp3"),n.forEach(e=>{e.style.transform="scale(0.95)"}),setTimeout(()=>{a<u.length-1?m(a+1):p()},3e3)};function p(){d.innerHTML="";const t=document.createElement("div");t.classList.add("end-screen"),t.innerHTML=`
    <div class="end-text">
      おしまい！<br><small>タップで戻る</small>
    </div>
  `,document.body.appendChild(t);const n=()=>{f(),t.removeEventListener("click",n),t.remove()};t.addEventListener("click",n)}function f(){i.pause(),i.currentTime=0,d.innerHTML="",l.style.display="block"}function g(t){new Audio(`/${t}`).play()}
