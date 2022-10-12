document.getElementById('demo').style.color = 'red';

function myFunc() {
    alert('WARNNING: ALERT');
}

function lightMode() {
    document.getElementById('pagestyle').setAttribute('href', "./style.css")
}

function darkMode() {
    document.getElementById('pagestyle').setAttribute('href', "./style-dark.css");
}