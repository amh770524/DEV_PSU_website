$(document).ready(() => {
    $("#btn1").mousedown(() => {
        //$("p").slideToggle();
        let p = $("p");
        p.animate({height: "100px"}, "fast")
    });
});

// document.getElementById('demo').style.color = 'red';

// function myFunc() {
//     alert('WARNNING: ALERT');
// }

// function lightMode() {
//     document.getElementById('pagestyle').setAttribute('href', "./style.css");
// }

// function darkMode() {
//     document.getElementById('pagestyle').setAttribute('href', "./style-dark.css");
// }

// function key_pressed(input) {
//     console.log(input);
//     document.getElementById('keypressed_text').innerHTML = input;
// }

// const key = function keyEvent(e) {
//     key_pressed(e.key);
//     if(e.key === "f") {
//         alert("F key pressed");
//     }
// }

// document.addEventListener("keypress", key);