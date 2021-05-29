//generate a random prompt
async function randomizer(){
    let randomPrompt = await fetch('/api/prompts/')
        .then(data =>data.json())
        .then(response=>{
            let result = response.length
            let randoresult = Math.floor(Math.random()*result)
            return randoresult;
        })
    
    console.log(randomPrompt)

    fetch('/api/prompts/'+ randomPrompt)
        .then(data =>data.json())
        .then(response=>{
        let result = response.title
        console.log(result)
        let randomPromptContainer = document.querySelector("#randomPrompt");
        randomPromptContainer.append(result);
        })

}

//cant prevent defaul efficiently
async function addKarp(e){
    e.preventDefault()
    //  returns the sum of value of prompt + current userScore.
    console.log("yay! get a Karp!")
    const userId = 1 //this is our test

    const userScore = await fetch('api/users/'+ userId)
    .then(data=>data.json())
    .then(response=>response.score)
    
    //promptid should match the random prompt being generated.
    const promptid = 1


    const promptScore =  await fetch('api/prompts/'+ promptid)
    .then(response => response.json())
    .then(data=>console.log(data.promptScore, data.title, data.promptId))

    // make another api route to update the current value of player score
    finalScore = userScore + promptScore

    console.log(finalScore)
    return finalScore;
}

function goBack(e){
    e.preventDefault()
    console.log('take me back to homepage')
    document.location.replace('/')
}


fetch('/test',{
    method: 'post',
    body: JSON.stringify({hello: "hello"}),
    headers: {'Content-Type' : 'application/json'}
})

randomizer()
// setArray()  
document.querySelector('#yesbtn').addEventListener("click",addKarp)
document.querySelector('#nobtn').addEventListener("click",goBack)