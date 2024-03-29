// @Author Nick Haynes
var revealText = document.getElementsByClassName('interpolateText');
//an array used to hold all the interpolate text objects
var revealArray = [];
var nextButton = document.getElementsByClassName('nextButton');
// The array holding the book container
var bookContainer = document.getElementById('bookHolder');
// The audio file
var audio = document.getElementById('myAudio');
// The timer variable that controls the audio playing
var playAudioTimer = setTimeout(playAudio(), 3000);



// This loops through all my interpolated text boxes
for(i=0; i<revealText.length; i++)
{
	revealText[i].setAttribute('onClick', 'reveal(this)');
	//adding the interpolate objects to the array
	revealArray.push(revealText[i]);
};

// The function used change the opacity on click @me is the variable that allows for the clicked p to be the revealed one.
function reveal(me)
{
	//begins the fade in animations for the interpolated text
	me.style.animation = "interpolateFadeIn";
	me.style.animationDuration = "4s";
	me.style.animationIterationCount = "infinite";
	me.style.opacity = ".5";
	
	// This checks to see if every interpolated text is revealed and if it is to show the next level button.
	if(revealArray.every(checkOpacity) == true)
	{
		//Make the next level button start its animation
		nextButton[0].classList.add("revealed");
		moveBook();
	}
}

//Checks the opactiy of every button
function checkOpacity(me)
{
	return me.style.opacity == .5;
}

//moves the book container div to make room for the next level button.
function moveBook()
{

	void bookContainer.offsetWidth;
	bookContainer.classList.add("nextPageButton");
}

//Plays the page turning audio
function playAudio()
{
	audio.play();
}


// Load new web page links
function loadLevelOne()
{
	window.location = "/index.html";
	
}


function loadLevelTwo()
{

	window.location = "webpages/LevelTwo.html";
}
function loadLevelThree()
{
	window.location = "LevelThree.html";
}
function loadLevelFour()
{
	window.location = "LevelFour.html";
}

function loadReplayScreen()
{
	window.location = "ReplayScreen.html"
}