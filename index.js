// let button = document.createElement("button")
// button.innerText= "start"
// alert(button.outerHTML)
document.addEventListener("DOMContentLoaded",() => {
    const getDeck = async() => {
        try{
            let response = await axios.get("https://deckofcardsapi.com/api/deck/new/")
            let deck_id = res.data.deck_id
            let num = res.data.num
            let shuffle = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`);
            let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${num}`);
            debugger
        }catch(error){
            console.log(error + " this a error ");
            //debugger
            
        }
        const displayCards = async () => {
            try {
            let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${num}`);
        }catch(error){
            console.log("this is a error");
            
        }
        for(let i = 0; i < num; i++){
          let img = document.createElement("img")
          let url = draw.data.cards.image
          img.src = url 
          document.body.appendChild(img)
        }
          
        }
        // const getValue(deck_id) => {
        //     let score = response.
        // }
    }
    //displayCards()
    getDeck()
})

// if compScore < userScore === 21 (win)
//  compScore < userScore  < 21 (win)
// compScore > 21 === win