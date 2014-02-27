#pragma strict

private var positionStart: Vector3;
private var rotationStart: Quaternion;
var scTimer : Timer;

function Start(){
	positionStart = gameObject.transform.position;
	rotationStart = gameObject.transform.rotation;
}

function OnTriggerEnter(other : Collider){
	//Game Over
	if(other.gameObject.CompareTag("Finish"))
	{
		gameObject.transform.position = positionStart;
		gameObject.transform.rotation = rotationStart;
		//Application.LoadLevel(Application.loadedLevel);
	}
	//Win
	else if(other.gameObject.CompareTag("EditorOnly"))
	{
		Application.LoadLevel(Application.loadedLevel);
		//Sauvegarde d'un seul score
		if(PlayerPrefs.GetFloat("Score1") >  scTimer.timer){
			//decalage des scores
			PlayerPrefs.SetFloat("Score3", PlayerPrefs.GetFloat("Score2"));
			PlayerPrefs.SetFloat("Score2", PlayerPrefs.GetFloat("Score1")) ;
			//Actualisation du nouveau score
			PlayerPrefs.SetFloat("Score1", scTimer.timer);
		}
		else if(PlayerPrefs.GetFloat("Score2") >  scTimer.timer){
			//decalage des scores
			PlayerPrefs.SetFloat("Score3", PlayerPrefs.GetFloat("Score2"));
			//Actualisation du nouveau score
			PlayerPrefs.SetFloat("Score2", scTimer.timer);
		}
		else if(PlayerPrefs.GetFloat("Score3") >  scTimer.timer){
			PlayerPrefs.SetFloat("Score3", scTimer.timer);
		}
		else
			OnGui();
		//A faire :
			//Sauvegarde entre 3 scores via des testes du meilleurs scores
			
			//Metrre un String de 3 caractère.
	}
}

function OnGui(){
	guiText.text = "Vous etes trop mauvais !";
}