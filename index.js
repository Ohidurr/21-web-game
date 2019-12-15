document.addEventListener("DOMContentLoaded",() => {
    const getDeck = async() => {
        try{
            let response = await axios.get("https://deckofcardsapi.com/api/deck/new/")
            let deckID = response.data.deckID
            let shuffle = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/shuffle/`);
            let draw = await axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`);
        }catch(error){
            console.log("You ran into a error! oh no!");
            debugger
        }
    }
})