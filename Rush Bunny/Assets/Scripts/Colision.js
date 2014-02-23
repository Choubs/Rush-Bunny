#pragma strict

function OnTriggerEnter(other : Collider){
	if(other.gameObject.CompareTag("Finish"))
	{
		Application.LoadLevel(Application.loadedLevel);
	}
}