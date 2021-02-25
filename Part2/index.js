const idInput = document.getElementById('idInput')
const colorInput = document.getElementById('colorInput')
function setCard(){
    const card = document.getElementById(idInput.value)
    // console.log(card)
    card.style.color = colorInput.value
}

// button.innerHTML = 'Reset'
// button.addEventListener('click', function(){
//     document.getElementById('button').reset
// })