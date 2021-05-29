//cant prevent defaul efficiently
function addKarp(e){
    e.preventDefault()
    //  returns the sum of value of prompt + current userScore.
    console.log("yay! get a Karp!")
    const userId = 1 //this is our test

    const userScore = fetch('api/users/'+ userId).then(data=>console.log(data)).then(response=>response.score)
    
    const promptid = x
    const promptScore =  fetch('api/prompts/'+prompId).

    // make another api route to update the current value of player score
    finalScore = userScore + promptScore

    return finalScore;
}

function goBack(e){
    e.preventDefault()
    console.log('no points! time to go back and play again')
}

function randomizer(){
    
    
        const index = [1,2,3,4,5,6,7,8,9,10]
        const randomPromptId =  index[Math.floor(Math.random()*index.length)]
        
        const response = fetch('/api/prompts/'+ randomPromptId)
        .then(data =>data.json())
        .then(response=>{
            let result = response.title
            console.log(result)

            let randomPromptContainer = document.querySelector("#randomPrompt");
         
            randomPromptContainer.append(result);
            
        })

}

randomizer()

document.querySelector('#yesbtn').addEventListener("click",addKarp())
document.querySelector('#nobtn').addEventListener("click",goBack())