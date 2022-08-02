"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let streak = document.getElementById("streaks");
let inputone = document.getElementById("inputone");
let inputtwo = document.getElementById("inputtwo");
let inputthree = document.getElementById("inputthree");
let submit = document.getElementById("submit");
const allnewstreaks = document.querySelector(".streaks");
let remove = document.querySelector(".minus_one");
let main = document.querySelector(".main");
let plus = document.querySelector(".plus_one");
let bottom = document.querySelector(".bottom");
let activity = document.querySelector(".header");
let popup = document.getElementById("single");
let validation = document.getElementById('validation');
class newstreaks {
    constructor() {
        this.mystreak = [];
        this.displayStreaks();
    }
    createStreak(streaks) {
        this.mystreak.push(streaks);
        this.displayStreaks();
    }
    getStreak() {
        return this.mystreak;
    }
    deleteStreak(id) {
        this.mystreak.splice(id, 1);
        this.displayStreaks();
    }
    displayStreaks() {
        // console.log(this.mystreak);
        this.mystreak.length === 0 ? activity.innerHTML = "You have no Activity" :
            activity.innerHTML = "Activities";
        activity.style.textAlign = 'center';
        allnewstreaks.innerHTML = "";
        this.mystreak.map((streaks, i) => {
            const mainone = document.createElement("div");
            const h1 = document.createElement("h1");
            const img = document.createElement("img");
            const p = document.createElement("p");
            const deleted = document.createElement("button");
            img.style.height = "200px";
            img.style.width = "200px";
            h1.textContent = `${streaks.title}`;
            h1.style.color = "black";
            img.src = `${streaks.image}`;
            p.textContent = `${streaks.date}`;
            mainone.appendChild(h1);
            mainone.appendChild(img);
            mainone.appendChild(p);
            mainone.appendChild(deleted);
            allnewstreaks.appendChild(mainone);
            mainone.addEventListener("click", () => {
                this.displayOne(i);
                popup.style.display = "block";
            });
        });
    }
    displayOne(i) {
        popup.innerHTML = "";
        const item = this.mystreak[i];
        let dateNow = new Date();
        let date = new Date(item.date);
        let start = dateNow.getTime();
        let beststreak = date.getTime();
        let diff = Math.ceil((beststreak - start) / (24 * 3600 * 1000));
        const main = document.createElement("div");
        const h1 = document.createElement("h3");
        const h3 = document.createElement("img");
        const p = document.createElement("p");
        const bests = document.createElement("p");
        const deleted = document.createElement("button");
        const close = document.createElement("button");
        h3.style.height = "200px";
        h3.style.width = "400px";
        deleted.style.backgroundColor = "red";
        deleted.textContent = "Delete";
        deleted.style.width = "90px";
        deleted.style.height = "40px";
        deleted.style.borderRadius = "8px";
        deleted.style.marginRight = "15px";
        deleted.addEventListener("click", () => {
            removeOne(i);
            popup.style.display = "none";
        });
        close.textContent = "Close";
        close.style.width = "90px";
        close.style.height = "40px";
        close.style.borderRadius = "8px";
        close.addEventListener("click", () => {
            popup.style.display = "none";
        });
        h1.textContent = item.title;
        h3.src = item.image;
        bests.textContent = ` Posted ${diff} days ago`;
        bests.style.padding = '10px';
        main.appendChild(h1);
        h1.style.color = "black";
        main.appendChild(h3);
        main.appendChild(p);
        main.append(bests);
        main.appendChild(deleted);
        main.append(close);
        popup.append(main);
        popup.style.textAlign = "center";
    }
}
const streaks = new newstreaks();
submit.addEventListener("click", (e) => {
    if (inputone.value === "" || inputtwo.value === "" || inputthree.value === "") {
        inputone.style.border = '1px solid red';
        inputtwo.style.border = '1px solid red';
        inputthree.style.border = '1px solid red';
        validation.innerText = ' Mercy Cannot Submit Empty Fields';
        validation.style.color = 'Red';
        validation.style.fontSize = '20px';
        validation.style.textAlign = 'center';
    }
    else {
        e.preventDefault();
        inputone.style.border = '1px solid black';
        inputtwo.style.border = '1px solid black';
        inputthree.style.border = '1px solid black';
        const title = inputone.value;
        const image = inputtwo.value;
        const date = inputthree.value;
        inputone.value = "";
        inputtwo.value = "";
        inputthree.value = "";
        streaks.createStreak({ title, image, date });
    }
});
bottom.style.display = "none";
plus.addEventListener("click", (e) => {
    e.preventDefault();
    main.style.display = "none";
    bottom.style.display = "block";
    bottom.style.display = "flex";
});
remove.addEventListener("click", (e) => {
    e.preventDefault();
    main.style.display = "block";
    bottom.style.display = "none";
    main.style.display = "flex";
    remove.style.display = "flex";
});
const removeOne = (streaksIndex) => {
    streaks.deleteStreak(streaksIndex);
};
popup.style.display = "none";
