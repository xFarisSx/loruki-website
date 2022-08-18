"use strict";
// if (document.querySelector(".navbar").style.top > 10) {
// 	document.querySelector(".navbar").style.boxShadow =
//         "0 0.5px 1px rgba(0,0,0,0.5)";
// } else {
// 	document.querySelector(".navbar").style.boxShadow =
//         "0 2px 2px rgba(255,255,255,1)";
// }
let can = true;
let created = false;
let btn;
document.addEventListener("scroll", function (e) {
    let rect = document.querySelector(".btn-s").getBoundingClientRect();
    if (rect.top > 200) {
        document.querySelector(".navbar").style.boxShadow = "none";
    } else {
        document.querySelector(".navbar").style.boxShadow =
            "0 1px 0px rgba(255,255,255,1)";
    }
    if (rect.bottom < -688 && can) {
        can = false;
        if (!created) {
            btn = document.createElement("button");
            btn.classList.add("back");
            btn.style.transition = "all 0.2s";
            btn.style.animation = "come 0.5s 1 forwards";
            btn.innerHTML = "<i class='fas fa-arrow-up'></i>";
            document.body.appendChild(btn);
        } else if (created && document.querySelector(".back").classList) {
            document.querySelector(".back").classList.remove("hidden");
            btn.style.animation = "come 0.5s 1 forwards";
        }
        document.querySelector(".back").addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
        created = true;
    } else if (rect.bottom >= -688 && !can) {
        can = true;
        btn.style.animation = "hide 0.5s 1 forwards";
        document.querySelector(".back").classList.add("hidden");
    }
});
