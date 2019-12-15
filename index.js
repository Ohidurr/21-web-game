document.addEventListener("DOMContentLoaded",() => {
    const getDeck = async() => {
        try{
            let response = await axios.get("https://deckofcardsapi.com/api/deck/new/")
            let deckID = response.data.deckID
            let shuffle = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/shuffle/`);
            let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`);
        }catch(error){
            console.log(error + " this a error ");
            
        }
        
        const displayCards = () => {
            let h2 = document.createElement("h2")
            draw.document.appendChild(h2)
    }

    }
    //displayCards()
    getDeck()
})

// if compScore < userScore === 21 (win)
//  compScore < userScore  < 21 (win)
// compScore > 21 === win