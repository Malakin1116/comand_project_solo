(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();document.getElementById("openModalBtn").addEventListener("click",()=>{const r=document.querySelector(".hero-main-div"),o=document.querySelector(".hero-main-open");if(o)o.remove(),r.style.display="block";else{var i=document.createElement("div");i.className="hero-main-open",i.innerHTML=`
            <ul class="menu-items-opens">
                <li class="hero-social-li"><a href="https://www.instagram.com/goitclub/">Instagram</a></li>
                <li class="hero-social-li"><a href="https://www.facebook.com/goITclub/">Facebook</a></li>
                <li class="hero-social-li"><a href="#">LinkedIn</a></li>
            </ul>
        `,r.style.display="none",r.parentNode.insertBefore(i,r)}});
//# sourceMappingURL=commonHelpers.js.map
