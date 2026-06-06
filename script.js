/* ==================================
   KINGDOM OF LILY v2
================================== */

let musicStarted = false;
let discoveredItems = 0;

const totalItems = 8;

/* ==================================
   OPEN KINGDOM
================================== */

function openKingdom() {

    const gates =
    document.querySelector(".castle-gate");

    gates.classList.add("open");

    startMusic();

    setTimeout(() => {
        nextScene(2);
    }, 2000);
}

/* ==================================
   MUSIC
================================== */

function startMusic() {

    if (musicStarted) return;

    const music =
    document.getElementById("bgMusic");

    if (music) {

        music.volume = 0.15;

        music.play().catch(() => {});
    }

    musicStarted = true;
}

/* ==================================
   SCENE TRANSITIONS
================================== */

/*function nextScene(sceneNumber) {

    const current =
    document.querySelector(".scene.active");

    const next =
    document.getElementById(
        "scene" + sceneNumber
    );

    if (!next) return;

    current.classList.remove("active");

    setTimeout(() => {

        next.classList.add("active");

        handleSceneEvents(sceneNumber);

    }, 500);
}*/

function nextScene(sceneNumber) {

    console.log("Moving to scene:", sceneNumber);

    const current =
    document.querySelector(".scene.active");

    const next =
    document.getElementById(
        "scene" + sceneNumber
    );

    if (!next) {

        console.log(
            "Scene not found:",
            "scene" + sceneNumber
        );

        return;
    }

    current.classList.remove("active");

    setTimeout(() => {

        next.classList.add("active");

        handleSceneEvents(sceneNumber);

    }, 500);
}

/* ==================================
   SCENE EVENTS
================================== */

function handleSceneEvents(sceneNumber) {

    if (sceneNumber === 4) {

        setTimeout(() => {

            const seed =
            document.getElementById("seed");

            const flower =
            document.getElementById("flowerBloom");

            if(seed) seed.style.display = "none";

            if(flower) {

                flower.style.display = "block";

                flower.animate([
                    {
                        transform:"scale(0)"
                    },
                    {
                        transform:"scale(1)"
                    }
                ],{
                    duration:1500,
                    easing:"ease-out"
                });
            }

        }, 2000);
    }

    if (sceneNumber === 7) {

        createStarfield();

        animateConstellation();
    }
}

/* ==================================
   GARDEN OF WONDERS
================================== */

function revealMessage(element) {

    if (
        element.classList.contains("revealed")
    ) {
        return;
    }

    element.classList.add("revealed");

    discoveredItems++;

    element.animate([
        {
            transform:"scale(.8)"
        },
        {
            transform:"scale(1.1)"
        },
        {
            transform:"scale(1)"
        }
    ],{
        duration:700
    });

    if (
        discoveredItems >= totalItems
    ) {

        const btn =
        document.getElementById(
            "discoverBtn"
        );

        setTimeout(() => {

            btn.classList.remove("hidden");

            btn.animate([
                {
                    opacity:0
                },
                {
                    opacity:1
                }
            ],{
                duration:1000
            });

        },1000);
    }
}

/* ==================================
   TREASURE CHEST
================================== */

/* ==================================
   TREASURE CHEST
================================== */

function openTreasure() {

    const chest =
    document.getElementById("treasureChest");

    if(chest){
        chest.classList.add("chest-open");
    }

    burstParticles();

    const container =
    document.getElementById("treasureContent");

    if(!container) return;

    container.innerHTML = "";

    const words = [

        "Wonderful Friend",
        "Strongest Daughter",
        "Kindest Heart",
        "Adorable Partner",
        "Beautiful Soul",
        "Queen Of Courage",
        "Never Gives Up",
        "Forever Lily"

    ];

    words.forEach((word,index)=>{

        setTimeout(()=>{

            const text =
            document.createElement("div");

            text.className =
            "treasure-word";

            text.innerText =
            word;

            container.appendChild(text);

        }, index * 700);

    });

    setTimeout(()=>{

        const btn =
        document.createElement("button");

        btn.innerText =
        "Continue";

        btn.onclick = () =>
        nextScene(6);

        container.appendChild(btn);

    }, 6500);
}

/* ==================================
   FINAL GIFT
================================== */

function showGift() {

    const finalContent =
    document.querySelector(".final-content");

    finalContent.innerHTML = `

    <div class="raagaverse-ending">

        <div class="lily-decor left-lily"></div>
        <div class="lily-decor right-lily"></div>

        <div class="coming-small">
            A New Story Awaits...
        </div>

        <div class="tales-title">
            The Tales of Raaga
        </div>

        <div class="raagaverse">
            RaagaVerse
        </div>

        <div class="coming-soon">
            Coming Soon...
        </div>

    </div>

    `;

    createLilyPetals();
}


/* ==================================
   CONSTELLATION
================================== */

function animateConstellation() {

    const letters =
    document.querySelectorAll(
        "#raagaConstellation span"
    );

    letters.forEach(
    (letter,index)=>{

        setTimeout(()=>{

            letter.animate([
                {
                    opacity:.1,
                    transform:
                    "translateY(20px)"
                },
                {
                    opacity:1,
                    transform:
                    "translateY(0)"
                }
            ],{
                duration:1200,
                fill:"forwards"
            });

        }, index * 500);

    });
}

/* ==================================
   STARFIELD
================================== */

function createStarfield() {

    const starfield =
    document.getElementById(
        "starfield"
    );

    if(!starfield) return;

    for(let i=0;i<200;i++) {

        const star =
        document.createElement("div");

        star.style.position =
        "absolute";

        star.style.width =
        Math.random()*3+1+"px";

        star.style.height =
        star.style.width;

        star.style.background =
        "white";

        star.style.borderRadius =
        "50%";

        star.style.left =
        Math.random()*100+"%";

        star.style.top =
        Math.random()*100+"%";

        star.style.opacity =
        Math.random();

        star.style.animation =
        `twinkle ${
        2+Math.random()*4
        }s infinite`;

        starfield.appendChild(
            star
        );
    }
}

/* ==================================
   MAGIC PARTICLES
================================== */

function createMagicParticle() {

    const container =
    document.getElementById(
        "magicParticles"
    );

    const particle =
    document.createElement("div");

    particle.classList.add(
        "magic-particle"
    );

    particle.style.left =
    Math.random()*100+"vw";

    particle.style.width =
    5+Math.random()*12+"px";

    particle.style.height =
    particle.style.width;

    particle.style.animationDuration =
    8+Math.random()*10+"s";

    container.appendChild(
        particle
    );

    setTimeout(()=>{

        particle.remove();

    },15000);
}

setInterval(
    createMagicParticle,
    400
);

/* ==================================
   CURSOR SPARKLES
================================== */

document.addEventListener(
"mousemove",
(e)=>{

    const sparkle =
    document.createElement("div");

    sparkle.style.position =
    "fixed";

    sparkle.style.left =
    e.clientX + "px";

    sparkle.style.top =
    e.clientY + "px";

    sparkle.style.width =
    "6px";

    sparkle.style.height =
    "6px";

    sparkle.style.borderRadius =
    "50%";

    sparkle.style.pointerEvents =
    "none";

    sparkle.style.background =
    "rgba(255,255,255,.9)";

    sparkle.style.boxShadow =
    "0 0 12px white";

    sparkle.style.zIndex =
    "99999";

    document.body.appendChild(
        sparkle
    );

    sparkle.animate([
        {
            opacity:1,
            transform:
            "scale(1)"
        },
        {
            opacity:0,
            transform:
            "scale(0)"
        }
    ],{
        duration:800
    });

    setTimeout(()=>{
        sparkle.remove();
    },800);

});

/* ==================================
   PARTICLE BURST
================================== */

function burstParticles(
count = 80
){

    for(
        let i=0;
        i<count;
        i++
    ){

        const p =
        document.createElement(
            "div"
        );

        p.style.position =
        "fixed";

        p.style.width =
        "8px";

        p.style.height =
        "8px";

        p.style.borderRadius =
        "50%";

        p.style.background =
        [
            "#ffb3d9",
            "#ffd8a8",
            "#d7b3ff",
            "#ffffff"
        ][
        Math.floor(
        Math.random()*4
        )];

        p.style.left =
        "50%";

        p.style.top =
        "50%";

        p.style.pointerEvents =
        "none";

        p.style.zIndex =
        "99999";

        document.body.appendChild(
            p
        );

        const x =
        (Math.random()-0.5)
        *1000;

        const y =
        (Math.random()-0.5)
        *1000;

        p.animate([
            {
                transform:
                "translate(0,0)",
                opacity:1
            },
            {
                transform:
                `translate(${x}px,${y}px)`,
                opacity:0
            }
        ],{
            duration:
            2000 +
            Math.random()*1000
        });

        setTimeout(()=>{
            p.remove();
        },3000);
    }
}

/* ==================================
   TWINKLE ANIMATION
================================== */

const style =
document.createElement("style");

style.innerHTML = `
@keyframes twinkle {

0%{
opacity:.2;
}

50%{
opacity:1;
}

100%{
opacity:.2;
}

}
`;

document.head.appendChild(
style
);