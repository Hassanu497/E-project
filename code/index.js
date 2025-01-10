// document.getElementsByClassName("card_onclick_hover")
var card_onclick = document.getElementsByClassName("card_onclick_hover")

var cardArr = Array.from(card_onclick)
function navlink_active_handler(link_recive){
    // console.log(link_recive
    console.log(card_onclick)
    console.log(cardArr[0])
}
navlink_active_handler()