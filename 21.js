document.addEventListener("DOMContentLoaded",() => {
    const getDeck = () => {
        fetch("https://deckofcardsapi.com/api/deck/new/").then(res => {
            if(!res.ok === true ){
            throw Error(res.statusText+ " This is a error")
            }
            let deck_id = res.data.deck_id
            let shuffle = fetch(`https://deckofcardsapi.com/api/deck/${deckID}/shuffle/`);
            let draw = fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`);
            return res.json();
        }).then(res => {
            const displayCard = () => {
            deck_id.card
            let h2 = document.createElement("h2")
            document.body.appendChild(h2)

            }
            
            displayCard()
            
        })
    }
})