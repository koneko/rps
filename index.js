// 1 = rock
// 2 = paper
// 3 = scissors


const rock = function() {
    var ai = Math.floor((Math.random() * 3) + 1);
    if(ai == 1) {
        console.log("he choose rock")
        document.getElementById("result").innerText = "Draw."
    } else if (ai == 2) {
        console.log("he choose paper")
        document.getElementById("result").innerText = "U loose boi."
    } else {
        console.log("he choose scissors")
        document.getElementById("result").innerText = "U win, gg."
    }
}
const paper = function() {
    var ai = Math.floor((Math.random() * 3) + 1);
    if(ai == 1) {
        console.log("he choose rock")
        document.getElementById("result").innerText = "U win, gg."
    } else if (ai == 2) {
        console.log("he choose paper")
        document.getElementById("result").innerText = "Draw."
    } else {
        console.log("he choose scissors")
        document.getElementById("result").innerText = "U loose boi."
    }
}
const scissors = function() {
    var ai = Math.floor((Math.random() * 3) + 1);
    if(ai == 1) {
        console.log("he choose rock")
        document.getElementById("result").innerText = "U loose."
    } else if (ai == 2) {
        console.log("he choose paper")
        document.getElementById("result").innerText =  "U win."
    } else {
        console.log("he choose scissors")
        document.getElementById("result").innerText = "Draw."
    }
}
// console.log(ai)