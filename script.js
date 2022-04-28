let cards = document.querySelectorAll(".card");
let classes = ["red", "green", "blue", "yellow", "orange", "purple"];
let win = false;
randomColor()
for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", function(e){
        let selectedCards = document.querySelectorAll(".card.selected");
            if(selectedCards.length == 0){
                console.log("funziona")
                e.currentTarget.classList.toggle("selected");
            }else if(selectedCards.length == 1){
                e.currentTarget.classList.toggle("selected");
                checkWin(e);
            }else if(selectedCards.length > 1){
                setTimeout(function(){
                selectedCards[0].classList.remove("selected")
                selectedCards[1].classList.remove("selected")
                },1000);
                }
            });
}


function getRandomInt(){
    let items = classes.length;
    let total = items - 1;
    let mamt = classes[Math.floor(Math.random() * total)];
    return mamt;
}
function randomColor(){
    let quadrati = document.querySelectorAll(".card");
    for(let i = 0; i < quadrati.length; i++){
        let quadratoDaColorare = quadrati[i];
        quadratoDaColorare.dataset.color = getRandomInt();
        quadrati[i] = document.querySelectorAll(".card[data-color='"+quadratoDaColorare.dataset.color+"']");
        if(quadrati[i].length > 2){
            quadratoDaColorare.dataset.color = getRandomInt();
            quadrati[i] = document.querySelectorAll(".card[data-color='"+quadratoDaColorare.dataset.color+"']");
        }
        quadratoDaColorare.classList.add(quadratoDaColorare.dataset.color);
    }
} 

function checkWin(e){
    let selectedCards = document.querySelectorAll(".card.selected");
    let quadrato1 = selectedCards[0].dataset.color;
    let quadrato2 = selectedCards[1].dataset.color;
    if(quadrato1 == quadrato2){
        setTimeout(function(){
        console.log("prova vittoria")
        console.log("mamt")
        win = true;
        selectedCards[0].classList.add("hidden");
        selectedCards[1].classList.add("hidden");
        },2000);
    }else{
        setTimeout(function(){
            selectedCards[0].classList.remove("selected");
            selectedCards[1].classList.remove("selected");
        },1500)
    }
}
function twoElementsForClass(){
    // just two quadratis with the same class
}

