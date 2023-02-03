// console.log("Hello World");
// alert("How are you?");
// let response = prompt("What is your name?");
// console.log(response);
// alert("Hello" + response);
// let output = document.querySelector("#output");
// console.log(output);
// output.innerText = response;
let yourName = document.querySelector("#yourName");
let theirName = document.querySelector("#theirName");
let output = document.querySelector("#output");
let singlePeople = ['sandipa', 'pranisha', 'sandy']
function calculate() {
    let name1 = yourName.value;
    let name2 = theirName.value;
    if (name1.length == 0 || name2.length == 0) {
        output.innerText = "Please enter both names!"

    }
    else {
        if (singlePeople.includes(name1.toLowerCase())) {
            output.innerText = "Hate you!";
            // yourName.value = ""
            // theirName.value = ""
        }
        else {
            let lovePercent = parseInt(Math.random() * 100)
            output.innerText = name1 + " " + name2 + " are " + lovePercent + " % in love"
            // yourName.value = ""
            // theirName.value = ""
        }
        yourName.value = ""
        theirName.value = ""

    }
    // console.log(name1, name2);
}