let searchInput = document.getElementById('search-input')
let searchBtn = document.getElementById('search-btn')
let tempTxt = document.getElementById('temp-txt')
let cityTxt = document.getElementById('city-txt')


searchBtn.addEventListener("click", function() {

    cityTxt.innerText = searchInput.value

})