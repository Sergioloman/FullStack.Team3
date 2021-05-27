// prompt page should be linked
//we need to create a prompt page that has a game.js in the script tag

//the page should have the follogin elements
// <div>{{prompt}}</div>

// <button id="yesbtn" type="button">YES!</button>

// <button id="nobtn" type="button">Nope :( </button>

// game logic
function addKarp(){
    //  returns the sum of value of prompt + current userScore.
    const userScore = fetch('/user/score/:id').then(console.log(data)).then(data.score)
   
    const promptScore =  fetch('/prompt/score/:id').then(console.log(data)).then(data.score)

    // make another api route to update the current value of player score
    finalScore = userScore + promptScore

    return finalScore;
}

document.querySelector('#yesbtn').addEventListener("click", addKarp())