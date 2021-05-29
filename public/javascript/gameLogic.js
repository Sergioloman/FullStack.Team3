
//cant prevent defaul efficiently
async function addKarp(e){
    e.preventDefault()
    //  returns the sum of value of prompt + current userScore.
    console.log("yay! get a Karp!")
    const userId = 1 //this is our test

    const userScore = await fetch('api/users/'+ userId)
    .then(data=>data.json())
    .then(response=>response.score)
    
    const promptid = 1
    const promptScore =  await fetch('api/prompts/'+ promptid)
    .then(response => response.json())
    .then(data=>console.log(data))

    // make another api route to update the current value of player score
    finalScore = userScore + promptScore

    console.log(finalScore)
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

fetch('/test',{
    method: 'post',
    body: JSON.stringify({hello: "hello"}),
    headers: {'Content-Type' : 'application/json'}
})

randomizer()

document.querySelector('#yesbtn').addEventListener("click",addKarp)
document.querySelector('#nobtn').addEventListener("click",goBack)