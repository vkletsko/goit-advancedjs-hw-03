import{i,S as u}from"./assets/vendor-19194e05.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const d="https://api.thecatapi.com/v1",f="live_8XKHlqqv3aE5QA52L0hARQc79GEqRJL64EXVjpAnRYOYqWwCD0L6w3VkXJnzdwWG",l={title:"❌ ",message:"Oops! Something went wrong! Try reloading the page!",backgroundColor:"tomato",icon:"",messageColor:"white",position:"center",timeout:900,close:!1,animateInside:!1,progressBar:!1,transitionIn:"bounceInUp"},p={method:"GET",headers:{"Content-Type":"application/json","x-api-key":f}},m=async()=>{try{const e=await fetch(`${d}/breeds`,p);if(!e.ok)throw new Error;return e.json()}catch(e){i.error(l),console.log(e)}},h=async e=>{try{const t=await fetch(`${d}/images/search?breed_ids=${e}`,p),o=await t.json();if(!t.ok||!o.length)throw new Error;return o}catch(t){i.error(l),console.log(t)}},c={select:document.querySelector("select.breed-select"),cardWrapper:document.querySelector(".cat-info"),preloader:document.querySelector(".preloader")},y=e=>e.reduce((t,{name:o,id:n})=>t+=`<option value="${n}">${o}</option>`,'<option data-placeholder="true"></option>'),g=({breeds:e,url:t})=>{const[o]=e;return`
    <article class="cat-card">
      <div class="cat-card-content">
        <div class="cat-card-left">
          <div class="cat-card-img-container">
            <img
              class="cat-card-img"
              src="${t}"
              alt="${o.name}"
            />
          </div>
        </div>
        <div class="cat-card-right">
          <h2 class="cat-card-title">${o.name}</h2>
          <p class="cat-card-desc">${o.description}</p>
          <p class="cat-card-temp">
            <strong>Temperament:</strong>
            ${o.temperament}
          </p>
        </div>
      </div>
    </article>`},w=async e=>{try{c.cardWrapper.innerHTML="";const{value:t}=e[0];c.preloader.style.display="block";const o=await h(t);if(c.preloader.style.display="none",!o)return;const n=o[0];c.cardWrapper.innerHTML=g(n)}catch(t){i.error(l),console.log(t)}},v=async()=>{try{c.preloader.style.display="block";const e=await m();if(!e)return;c.select.innerHTML=await y(e),new u({select:"select.breed-select",settings:{placeholderText:"Select the cat breed",showSearch:!1,maxValuesShown:10},events:{afterChange:t=>{w(t)}}})}catch(e){console.log(e)}finally{c.preloader.style.display="none"}};document.addEventListener("DOMContentLoaded",()=>{v()},{once:!0});
//# sourceMappingURL=commonHelpers.js.map
