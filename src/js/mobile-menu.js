
// export const CHANGE_HTML_FOR_HERO = () => {
//   const HERO_MAIN_DIV = document.querySelector('.hero-main-div');
//   const HERO_SOCIAL_DIV = document.querySelector('.hero-social-div');
//   const OPEN_MODAL_BTN = document.getElementById('openModalBtn');
  
//   const EXISTING_ELEMENT = document.querySelector('.hero-main-open');
  
//   if (EXISTING_ELEMENT) {
//     document.querySelectorAll('.menu-items-opens li').forEach((li, index) => {
//       setTimeout(() => {
//         li.classList.remove('show');
//       }, index * 100); 
//     });
    
//     setTimeout(() => {
//       EXISTING_ELEMENT.classList.remove('show');
//       setTimeout(() => {
//         EXISTING_ELEMENT.remove();
//         HERO_MAIN_DIV.classList.add('show');
//         HERO_SOCIAL_DIV.classList.add('show');
//         document.body.classList.remove('no-scroll');
//         OPEN_MODAL_BTN.innerHTML = `
//           <svg width="24" height="24" viewBox="0 0 24 24">
//             <path d="M3 6h18M3 12h18M3 18h18" stroke="black" stroke-width="2" stroke-linecap="round"/>
//           </svg>
//         `;
//       }, 1000); 
//     }, document.querySelectorAll('.menu-items-opens li').length * 100); 
//   } else {
//     let new_element = document.createElement('div');
//     new_element.className = 'hero-main-open';
//     new_element.innerHTML = `
//       <ul class="menu-items-opens">
//         <li class="hero-social-li"><a href="#about-me">About me</a></li>
//         <li class="hero-social-li"><a href="#projects">Projects</a></li>
//         <li class="hero-social-li"><a href="#contacts">Contacts</a></li>
//       </ul>
//     `;

//     HERO_MAIN_DIV.classList.remove('show');
//     HERO_SOCIAL_DIV.classList.remove('show');
//     HERO_MAIN_DIV.parentNode.insertBefore(new_element, HERO_MAIN_DIV);
    
//     setTimeout(() => {
//       new_element.classList.add('show');
//       document.querySelectorAll('.menu-items-opens li').forEach((li, index) => {
//         setTimeout(() => {
//           li.classList.add('show');
//         }, index * 100); 
//       });
//     }, 10);

//     document.body.classList.add('no-scroll');
   
//     OPEN_MODAL_BTN.innerHTML = `
//       <svg width="24" height="24" viewBox="0 0 24 24">
//         <path d="M6 6L18 18M6 18L18 6" stroke="black" stroke-width="2" stroke-linecap="round"/>
//       </svg>
//     `;
//   }
// };





export const CHANGE_HTML_FOR_HERO = () => {
  const HERO_MAIN_DIV = document.querySelector('.hero-main-div');
  const HERO_SOCIAL_DIV = document.querySelector('.hero-social-div');
  const OPEN_MODAL_BTN = document.getElementById('openModalBtn');
  
  const EXISTING_ELEMENT = document.querySelector('.hero-main-open');

  const smoothScrollTo = (target) => {
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
  };

  if (EXISTING_ELEMENT) {
    document.querySelectorAll('.menu-items-opens li').forEach((li, index) => {
      setTimeout(() => {
        li.classList.remove('show');
      }, index * 100); 
    });
    
    setTimeout(() => {
      EXISTING_ELEMENT.classList.remove('show');
      setTimeout(() => {
        EXISTING_ELEMENT.remove();
        HERO_MAIN_DIV.classList.add('show');
        HERO_SOCIAL_DIV.classList.add('show');
        document.body.classList.remove('no-scroll');
        OPEN_MODAL_BTN.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="black" stroke-width="2" stroke-linecap="round"/>
          </svg>
        `;
      }, 1000); 
    }, document.querySelectorAll('.menu-items-opens li').length * 100); 
  } else {
    let new_element = document.createElement('div');
    new_element.className = 'hero-main-open';
    new_element.innerHTML = `
      <ul class="menu-items-opens">
        <li class="hero-social-li"><a href="#about-me" class="menu-link">About me</a></li>
        <li class="hero-social-li"><a href="#projects" class="menu-link">Projects</a></li>
        <li class="hero-social-li"><a href="#contacts" class="menu-link">Contacts</a></li>
      </ul>
    `;

    HERO_MAIN_DIV.classList.remove('show');
    HERO_SOCIAL_DIV.classList.remove('show');
    HERO_MAIN_DIV.parentNode.insertBefore(new_element, HERO_MAIN_DIV);
    
    setTimeout(() => {
      new_element.classList.add('show');
      document.querySelectorAll('.menu-items-opens li').forEach((li, index) => {
        setTimeout(() => {
          li.classList.add('show');
        }, index * 100); 
      });
    }, 10); 

    document.body.classList.add('no-scroll');
   
    OPEN_MODAL_BTN.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M6 6L18 18M6 18L18 6" stroke="black" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `;


    document.querySelectorAll('.menu-link').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        CHANGE_HTML_FOR_HERO();
        setTimeout(() => {
          smoothScrollTo(target);
        }, 1000); 
      });
    });
  }
};