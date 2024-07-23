let s = document.querySelector("#n");
let enter = document.getElementById("enter");
enter.addEventListener("click", () => {
    let m = prompt("Enter your text");
    s.innerText = m;
    let vowels = 0;
    for (let i of m) {
        if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u' ||
            i == 'A' || i == 'E' || i == 'I' || i == 'O' || i == 'U') {
            vowels++;
        }
    }
    let r = document.querySelector("#v");
    r.innerText = vowels;
    let c = document.querySelector("#c");
    c.innerText = (m.length) - vowels;
    let o = document.querySelector("#t")
    o.innerText = m.length;
});
let v = document.querySelector("#clear");
v.addEventListener("click", () => {
    let r = document.querySelector("#n");
    r.innerText = "";
    let a = document.querySelector("#v");
    a.innerText = "";
    let h = document.querySelector("#c");
    h.innerText = "";
    let u = document.querySelector("#t");
    u.innerText = "";

})
