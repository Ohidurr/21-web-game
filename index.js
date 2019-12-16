// let button = document.createElement("button")
// button.innerText= "start"
// alert(button.outerHTML)
document.addEventListener("DOMContentLoaded",() => {
    let deck_id
    let humanScore = 0
    let compScore = 0
    let computer;
    let human;
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
        const setValue = (value,score) => {
            if(value === "JACK" || value === "QUEEN" || value === "KING"){
            score += 10;
            }else if(value === "ACE"){
                 if(score <= 10){
                     score += 11
                 }else{
                     score +=1
                 }
             }else{
                 score += Number(value)
             }
             return score;
            }
        const draw = async (deck_id, num, score, player) => {
        let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${num}`);
        for (let i = 0; i < num; i++){
            let value = draw.data.cards[i].value
            score = setValue(value,score)
            let h2 = document.createElement("h2")
            h2.innerText = score;
            document.body.appendChild(h2)
            let img = document.createElement("img")
            let url = draw.data.cards[i].image
            img.src = url 
            document.body.appendChild(img)
            
          }
        }
        // const winCND = (score) =>{
            
        //     if(human > comp && human < 21){
        //         console.log("Congrat human, you won!");
                
        //     }else if(comp > human && comp < 21){
        //         console.log("Better luck next time");
                
        //     }else if(human> 21){
        //         console.log("BUSTED");
                
        //     }else if(comp > 21){
        //         console.log("you Win, computer loses");
                
        //     }


        // }
        
        let start = document.querySelector("#start")
        start.addEventListener("click",() =>{
            draw(deck_id,2,humanScore,human)
        })
        let hit = document.querySelector("#hit")
        hit.addEventListener("click",() => {
            draw(deck_id,1,humanScore,human) 
        })
        let stay = document.querySelector("#stay")
        stay.addEventListener("click",() => {
            draw(deck_id,3,compScore,computer)
        })
        
    
    //displayCards(draw, 2)
})
// if compScore < userScore === 21 (win)
//  compScore < userScore  < 21 (win)
// compScore > 21 === win