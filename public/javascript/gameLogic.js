var randomIndex;
var rPrompt;
var pScore; 
var finalScore; 
async function randomizer() {

  randomIndex = await fetch("/api/prompts/")
    .then((data) => data.json())
    .then((response) => {
      let result = response.length;
      let randoresult = Math.floor(Math.random() * result);
      return randoresult;
    });

  // console.log(randomIndex)

  rPrompt = await fetch("/api/prompts/" + randomIndex)
    .then((data) => data.json())
    .then((response) => {
      let result = response.title;
      console.log(response);
      let randomPromptContainer = document.querySelector("#randomPrompt");
      randomPromptContainer.innerHTML=''
      randomPromptContainer.append(result);

      return result;
    });
  console.log(rPrompt);

  pScore = await fetch("/api/prompts/" + randomIndex)
    .then((data) => data.json())
    .then((response) => {
      let result = response.promptScore;
      return result;
    });
  console.log("rando prompt's score: " + pScore);
}
//  returns the sum of value of prompt + current userScore.
async function addKarp(e) {
  e.preventDefault();

  const Id = 1; //this is our test//this should be the id of the user once logged in!

  //get current user's information
  const iduser = await fetch("api/users/" + Id)
    .then((data) => data.json())
    .then((response) => {
      // console.log(response)
      currentUserId = response.id;
      // console.log(currentUserId)
      return currentUserId;
    });

  const userScore = await fetch("api/scores/" + iduser)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
    //   console.log('user current score is' + data.score)
      currentUserScore = data.score;
      return currentUserScore;
    });
  const userName = await fetch("api/scores/" + iduser)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      // console.log(data.User.username)
      currentUserName = data.User.username;
      return currentUserName;
    });

  let Name = userName;
  let Score = userScore;
  let newScore = Score + pScore;

  console.log("yay! " + Name + " get a Karp!");
  console.log("this is was your previous score:" + Score);
  
console.log("this is the new score!" + newScore);

  //update value score value
  fetch("api/scores/" + iduser, {
    method: "PUT",
    body: JSON.stringify({
      score: newScore,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    // .then((response) => response.json())
    // .then((data) => console.log(data));
}

function goBack(e) {
  e.preventDefault();
  console.log("take me back to homepage");
  document.location.replace("/");
}
function playAgain(e) {
    e.preventDefault();
    console.log("play again!");
    document.location.replace("/play");
  }
  
randomizer();

document.querySelector("#yesbtn").addEventListener("click", addKarp);
document.querySelector("#replaybtn").addEventListener("click", randomizer);
document.querySelector("#nobtn").addEventListener("click", goBack);
