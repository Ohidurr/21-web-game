// let button = document.createElement("button")
// button.innerText= "start"
// alert(button.outerHTML)
document.addEventListener("DOMContentLoaded",() => {
    const getDeck = async() => {
        try{
            let response = await axios.get("https://deckofcardsapi.com/api/deck/new/")
            let deck_id = response.data.deck_id
            let shuffle = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`);
            let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`);
        }catch(error){
            console.log(error + " this a error ");
            
        }
        const displayCards = async () => {
          let img = document.createElement("img")
          
        }
    }
    displayCards()
    getDeck()
})

// if compScore < userScore === 21 (win)
//  compScore < userScore  < 21 (win)
// compScore > 21 === win