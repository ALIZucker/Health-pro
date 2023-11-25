let height = document.getElementById('height-input')
let weight = document.getElementById('weght-input')
let rangebox = document.getElementById('show-reasult')
let range = document.getElementById('vol')
let box1 = document.getElementById('sectionone')
let box2 = document.getElementById('input-bmi')

function checkvalue(text) {
    if (text.length == 0) {
        alert('Enter number again');
        return false;
    } else {
        return true;
    }

}

function BMI() {
    if (checkvalue(height.value) && checkvalue(weight.value)) {
        bmi = parseInt(weight.value) / ((parseInt(height.value) / 100) * (parseInt(height.value) / 100))
        showreasult(bmi)
    }
}

function showreasult(bmi) {

    rangebox.style.display = "block"
    range.value = bmi

}