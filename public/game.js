// prompt page should be linked
//we need to create a prompt page that has a game.js in the script tag

//the page should have the follogin elements
// <div>{{prompt}}</div>

// <button id="yesbtn" type="button">YES!</button>

// <button id="nobtn" type="button">Nope :( </button>

// game logic
function addKarp(){
    //  returns the sum of value of prompt + current userScore.

    const userScore = fetch('/').then( data).then(data.user.userscore)
   
    const promptvalue =  fetch('/').then( data).then(data.prompt.promptscore)

    finalScore = userScore + promptvalue
    return finalScore;
}

document.querySelector('#yesbtn').addEventListener("click", addKarp())