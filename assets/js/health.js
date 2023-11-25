let height = document.getElementById('height-input')
let weight = document.getElementById('weght-input')
let rangebox = document.getElementById('show-reasult')
let range = document.getElementById('vol')
let show = document.getElementById('lable-show')


function checkvalue(text) {
    if (0 > text || text > 300) {
        alert('Enter number  again');
        return false;
    } else {
        return true;
    }

}

function BMI() {
    if (checkvalue((parseInt(height.value))) && checkvalue(parseInt(weight.value))) {
        bmi = parseInt(weight.value) / ((parseInt(height.value) / 100) * (parseInt(height.value) / 100))
        showreasult(bmi)
    }
}

function showreasult(bmi) {

    rangebox.style.display = "inline-block"
    range.value = bmi
    show.innerText = bmi

}