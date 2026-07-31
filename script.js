/* ==========================================
   SUMAN PORTFOLIO
   SCRIPT - PART 1
========================================== */

/* ---------------- Loader ---------------- */

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});


/* ---------------- Navbar ---------------- */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ---------------- Progress Bar ---------------- */

const progress = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressHeight =
        (window.pageYOffset / totalHeight) * 100;

    progress.style.width = progressHeight + "%";

});


/* ---------------- Smooth Scroll ---------------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior:"smooth"

            });

    });

});


/* ---------------- Reveal Animation ---------------- */

const reveals = document.querySelectorAll(".section");

function revealSections(){

    const trigger = window.innerHeight * .85;

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealSections);

revealSections();


/* ---------------- Mouse Glow ---------------- */

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});


/* ---------------- Typing Effect ---------------- */

const heroTitle = document.querySelector(".hero h2");

const words=[
"Class 11 Commerce Student",
"Web Developer",
"UI Designer",
"Creator of FLOP CORN 🍿"
];

let word=0;
let letter=0;
let deleting=false;

function typing(){

    let current=words[word];

    if(!deleting){

        heroTitle.textContent=current.substring(0,letter++);

        if(letter>current.length){

            deleting=true;

            setTimeout(typing,1500);

            return;

        }

    }

    else{

        heroTitle.textContent=current.substring(0,letter--);

        if(letter===0){

            deleting=false;

            word++;

            if(word>=words.length){

                word=0;

            }

        }

    }

    setTimeout(typing,deleting?40:90);

}

typing();
/* ==========================================
   SCRIPT PART 2
   Counter • Particles • Active Nav • Effects
========================================== */

/* ---------------- Animated Counter ---------------- */

const counters = document.querySelectorAll(".stat-card h2");

let counterStarted = false;

function animateCounters() {

    if (counterStarted) return;

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const text = counter.innerText;

            const target = parseInt(text.replace(/\D/g, ""));

            const suffix = text.replace(/[0-9]/g, "");

            let value = 0;

            const speed = Math.max(10, target / 80);

            const update = () => {

                value += speed;

                if (value >= target) {

                    counter.innerText = target + suffix;

                } else {

                    counter.innerText = Math.floor(value) + suffix;

                    requestAnimationFrame(update);

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", animateCounters);

animateCounters();


/* ---------------- Active Navigation ---------------- */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ---------------- Floating Particles ---------------- */

for (let i = 0; i < 35; i++) {

    const particle = document.createElement("div");

    particle.className = "particle";

    const size = Math.random() * 6 + 3;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.left = Math.random() * 100 + "vw";
    particle.style.bottom = "-20px";

    particle.style.animationDuration =
        (8 + Math.random() * 12) + "s";

    particle.style.animationDelay =
        Math.random() * 10 + "s";

    document.body.appendChild(particle);

}


/* ---------------- Card Hover Tilt ---------------- */

const cards = document.querySelectorAll(

".about-card,.skill-card,.stat-card,.featured-project"

);

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - .5) * 10;

        const rotateX = ((y / rect.height) - .5) * -10;

        card.style.transform =

        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* ---------------- Ripple Button Effect ---------------- */

const buttons = document.querySelectorAll(

".primary-btn,.secondary-btn"

);

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left =

        e.clientX - rect.left + "px";

        ripple.style.top =

        e.clientY - rect.top + "px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


/* ---------------- Floating Logo ---------------- */

const logo = document.querySelector(".logo");

setInterval(()=>{

    logo.animate([

        {transform:"translateY(0px)"},

        {transform:"translateY(-5px)"},

        {transform:"translateY(0px)"}

    ],{

        duration:2500,

        easing:"ease-in-out"

    });

},2600);


/* ---------------- Console Message ---------------- */

console.log("%cWelcome to Suman Patil's Portfolio 🍿",
"color:#FFD60A;font-size:20px;font-weight:bold;");

console.log("%cDesigned with HTML • CSS • JavaScript",
"color:white;font-size:14px;");


/* ---------------- Contact Form ---------------- */

const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}


/* ---------------- End ---------------- */