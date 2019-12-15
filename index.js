// let button = document.createElement("button")
// button.innerText= "start"
// alert(button.outerHTML)
document.addEventListener("DOMContentLoaded",() => {
    let deck_id
    let human 
    let computer
    const getDeck = async() => {
        try{
            let res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
             deck_id = res.data.deck_id
            let num = res.data.num
           // let shuffle = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`);
            
        }catch(error){
            console.log(error + " this a error ");
            //debugger
            
        }
    }
        getDeck()
        const setValue = (deck_id,score) => {
            for (let i = 0; i < num; i++){
            let value = draw.data.cards[i].value
           if(draw.cards.value === "JACK" || draw.cards.value === "QUEEN" || draw.cards.value === "KING")
            score += 10;
             }
            }
        const draw = async (deck_id, num, player, score) => {
        let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${num}`);
        for (let i = 0; i < num; i++){
            let value = draw.data.cards[i].value
            let score = value;
            let img = document.createElement("img")
            let url = draw.data.cards[i].image
            img.src = url 
            document.body.appendChild(img)
            
          }
        }
        const winCND = (player,score) =>{
            let humanScore = score1
            let compScore = score2
            if(humanScore > compScore && humanScore < 21){
                console.log("Congrat human, you won!");
                
            }else if(compScore > humanScore && compScore < 21){
                console.log("Better luck next time");
                
            }else if(playerScore > 21){
                console.log("BUSTED");
                
            }else if(compScore > 21){
                console.log("you Win, computer loses");
                
            }


        }
        let start = document.querySelector("#start")
        start.addEventListener("click",() =>{
            draw(deck_id,2,human,score)
        })
        let hit = document.querySelector("#hit")
        hit.addEventListener("click",() => {
            draw(deck_id,1,human,score) 
        })
        let stay = document.querySelector("#stay")
        stay.addEventListener("click",() => {
            draw(deck_id,3,computer,score)
        })
        
    
    //displayCards(draw, 2)
})

// if compScore < userScore === 21 (win)
//  compScore < userScore  < 21 (win)
// compScore > 21 === win