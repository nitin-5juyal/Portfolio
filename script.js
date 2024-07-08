let navbar = document.querySelector("#nav-log");

function menuBar(){
    navbar.classList.toggle('hidden')
}


 // <!-------Function to toggle dark mode--------->

 function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');

    // Store user preference
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.removeItem('theme');
    }
  }

  // Check user preference on page load
  document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  });


// <!---setup and run animation --->

var typed = new Typed('#element', {
    strings: [ 'Web Developer.','Coder.',  'Designer.','Frontend Developer.' ],
    typeSpeed: 100,
    loop : true,
    backSpeed: 80,
    backDelay: 2000,    
  });


// <!---setup and scroll reveal animation --->

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,
});

sr.reveal('#element',{ delay: 100 });
sr.reveal('#text-info',{ delay: 200 });
sr.reveal('#btn',{ delay: 200 });
sr.reveal('#social-icon',{ delay: 200 });
sr.reveal('#featured-img',{ delay: 320 });

sr.reveal('#project-box',{ interval : 200 });

sr.reveal('#top-header',{});

const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true,
});

srLeft.reveal('#about-info',{ delay: 100 });
srLeft.reveal('#contact-info',{ delay: 100 });

const srRight = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true,
});

srRight.reveal('#skill',{ delay: 100 });
srRight.reveal('#skill-box',{ delay: 100 });




// //<!-----active links-------->

// const sections = document.querySelectorAll("section[id]");

// function scrollActive() {
//     const scrollY = window.scrollY;

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute("id");

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector(".active").classList.remove("active");
//             document.querySelector(`.${sectionId}`).classList.add("active");
//         } else {
//             document.querySelector(`.${sectionId}`).classList.remove("active");
//         }
//     });
//   }

//   window.addEventListener("scroll", scrollActive);

// // <!-----active links-------->