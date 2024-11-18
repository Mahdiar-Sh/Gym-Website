let bannerUser = document.getElementById("bannerUser");
let opacity = 0, size = 0, frame = 0, height = 0;

if (screen.orientation.type == "landscape-primary") {
    setTimeout(() => {
        animate();
    }, 1000);
}
else {
    setTimeout(() => {
        animate();
    }, 600);
}

function update() {
    if (frame % 1 == 0) {
        bannerUser.style.transform = `scale(${size})`;
        bannerUser.style.opacity = opacity;
        size += 0.03;
        opacity += 0.03;
    }

}
function animate() {
    update();
    if (size > 1) {
        return;
    }
    frame++;
    requestAnimationFrame(animate)
}

let anim = document.getElementById("anim");
let btn = document.getElementById("menu");

btn.addEventListener("click", () => {
    document.getElementById("line1").classList.toggle("line1");
    document.getElementById("line2").classList.toggle("line2");
    if (height == 0) {
        document.getElementById("navbar").style.removeProperty("background")
        document.getElementById("navbar").style.background = "url(../images/bgnav.jpeg)";
        document.getElementById("line3").classList.add("hidden");
        animateAnime();
    }
    else {
        document.getElementById("line3").classList.remove("hidden");
        animateAnime1();
    }
})

document.addEventListener("scroll", () => {
    if (scrollY > 430) {
        document.getElementById("navbar").classList.replace("navpad2", "navpad");
    } else document.getElementById("navbar").classList.replace("navpad", "navpad2");

})

function updateAnime() {
    if (frame % 1 == 0) {
        anim.style.height = `${height}px`;
        height += 10
    }
}
function animateAnime() {
    updateAnime();
    if (height == 330) {
        return;
    }
    frame++;
    requestAnimationFrame(animateAnime)
}
function updateAnime1() {
    if (frame % 1 == 0) {
        anim.style.height = `${height}px`;
        height -= 10
    }
}
function animateAnime1() {
    updateAnime1();
    if (height == 0) {
        document.getElementById("navbar").style.removeProperty("background")
        document.getElementById("navbar").style.background = "linear-gradient(rgb(0, 0, 0, .5), rgb(0, 0, 0, .8))";
        return;
    }
    frame++;
    requestAnimationFrame(animateAnime1);
}
let img = document.getElementById("animImg");
let text = document.getElementById("animText");
if (screen.orientation.type == "landscape-primary") {
    document.addEventListener("scroll", () => {
        console.log(scrollY);
        if (scrollY >= 1200) {
            img.classList.add("animClassImg");
            text.classList.add("animClassText");
        }
        else {
            img.classList.remove("animClassImg");
            text.classList.remove("animClassText");
        }
    })
}

let images = [...document.getElementById("imags").children];
document.getElementById("one").addEventListener("click", () => {
    addHidden();
    images.forEach((e) => {
        if (e.getAttribute("class").includes("imgone"))
            e.classList.remove("hidden");
    })
})
document.getElementById("two").addEventListener("click", () => {
    addHidden();
    images.forEach((e) => {
        if (e.getAttribute("class").includes("imgtwo"))
            e.classList.remove("hidden");
    })
})
document.getElementById("three").addEventListener("click", () => {
    addHidden();
    images.forEach((e) => {
        if (e.getAttribute("class").includes("imgthree"))
            e.classList.remove("hidden");
    })
})
document.getElementById("evryone").addEventListener("click", () => {
    addHidden();
    images.forEach((e) => {
        if (e.getAttribute("class").includes("evry"))
            e.classList.remove("hidden");
    })
})

function addHidden() {
    images.forEach((e) => {
        e.classList.add("hidden");
    })

}


let index = 1;
let slides = [...document.getElementById("slides").children];
setInterval(() => {
    addHiddenSlide();
    document.getElementById(`slide${index}`).classList.remove("hidden");
    index++;
    if (index == 4) index = 1;
}, 3000);

function addHiddenSlide() {
    slides.forEach((e) => {
        e.classList.add("hidden");
    })
}

if (screen.orientation.type == "landscape-primary") {
    document.addEventListener("scroll", () => {
        if (scrollY > 6400) {
            document.getElementById("card-1").classList.add("card1");
            document.getElementById("card-2").classList.add("card2");
            document.getElementById("card-3").classList.add("card3");
        }
        else {
            document.getElementById("card-1").classList.remove("card1");
            document.getElementById("card-2").classList.remove("card2");
            document.getElementById("card-3").classList.remove("card3");
        }
    })
}