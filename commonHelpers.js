import{i,S as m}from"./assets/vendor-19194e05.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const p="https://api.thecatapi.com/v1",f="live_8XKHlqqv3aE5QA52L0hARQc79GEqRJL64EXVjpAnRYOYqWwCD0L6w3VkXJnzdwWG",l={title:"❌ ",message:"Oops! Something went wrong! Try reloading the page!",backgroundColor:"tomato",icon:"",messageColor:"white",position:"center",timeout:900,close:!1,animateInside:!1,progressBar:!1,transitionIn:"bounceInUp"},d=()=>{c.errorMsg.innerHTML=`<div>
    <div class="frame">
      <iframe
        src="https://giphy.com/embed/xA88mlhRVZ3lm"
        width="100%"
        height="100%"
        frameborder="0"
        allowfullscreen=""
      ></iframe>
    </div>
    <p>Oops...</p>
  </div>`},u={method:"GET",headers:{"Content-Type":"application/json","x-api-key":f}},h=async()=>{try{const t=await fetch(`${p}/breeds`,u);if(!t.ok)throw new Error;return t.json()}catch(t){i.error(l),setTimeout(d,1e3),console.log(t)}},g=async t=>{try{const e=await fetch(`${p}/images/search?breed_ids=${t}`,u),o=await e.json();if(!e.ok||!o.length)throw new Error;return o}catch(e){i.error(l),setTimeout(d,1e3),console.log(e)}},c={select:document.querySelector("select.breed-select"),cardWrapper:document.querySelector(".cat-info"),errorMsg:document.querySelector(".error-msg")},y=t=>t.reduce((e,{name:o,id:n})=>e+=`<option value="${n}">${o}</option>`,'<option data-placeholder="true"></option>'),w=({breeds:t,url:e})=>{const[o]=t;return`<article class="cat-card">
    <div class="cat-card-left">
      <img
        class="cat-card-img"
        src="${e}"
        alt="${o.name}"
      />
    </div>
    <div class="cat-card-right">
      <h2 class="cat-card-title">${o.name}</h2>
      <p class="cat-card-desc">${o.description}</p>
      <p class="cat-card-tepm">
        <strong>Temperament:</strong>
        ${o.temperament}
      </p>
    </div>
  </article>`},v=async t=>{try{c.cardWrapper.innerHTML="",c.errorMsg.innerHTML="";const{value:e}=t[0],o=await g(e);if(!o)return;const n=o[0];c.cardWrapper.innerHTML=w(n)}catch(e){i.error(l),setTimeout(d,1e3),console.log(e)}},L=async()=>{const t=await h();if(!t){c.select.style.display="none";return}c.select.innerHTML=await y(t),new m({select:"select.breed-select",settings:{placeholderText:"Select the cat breed"},events:{afterChange:e=>{v(e)}}})};document.addEventListener("DOMContentLoaded",L);
//# sourceMappingURL=commonHelpers.js.map
