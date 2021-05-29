// prompt page should be linked
//we need to create a prompt page that has a game.js in the script tag

//the page should have the follogin elements
// <div>{{prompt}}</div>

// <button id="yesbtn" type="button">YES!</button>

// <button id="nobtn" type="button">Nope :( </button>


function addKarp(){
    //  returns the sum of value of prompt + current userScore.
    const userScore = fetch('/user/score/:id').then(console.log(data)).then(data.score)
   
    const promptScore =  fetch('/prompt/score/:id').then(console.log(data)).then(data.score)

    // make another api route to update the current value of player score
    finalScore = userScore + promptScore

    return finalScore;
}



function clickHandler(){
    
        const index = [1,2,3,4,5,6,7,8,9,10]
        const randomPromptId =  index[Math.floor(Math.random()*index.length)]
        console.log(parseInt(randomPromptId))
        const response = fetch('/api/prompt/'+ randomPromptId)
        .then(data =>data.json())
        .then(response=>{
            console.log(response.title)//this is good to go!

            let result = response.title
            console.log(result)//this works too!

            let randomPromptContainer = document.querySelector("#randomPrompt");
         
            randomPromptContainer.append(result);
            
        })

}

clickHandler()

document.querySelector('#yesbtn').addEventListener("click", console.log("Awesome! get some karps!"))
document.querySelector('#nobtn').addEventListener("click", console.log("No karps for you!"))