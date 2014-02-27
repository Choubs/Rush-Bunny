#pragma strict

var scTimer : Timer;

function Start(){
	
	insert();
}

function insert(){
	guiText.text = "Tableau des scores" + 	"\n" + PlayerPrefs.GetFloat("Score1").ToString()
										+	"\n" + PlayerPrefs.GetFloat("Score2").ToString()
										+	"\n" + PlayerPrefs.GetFloat("Score3").ToString();
}