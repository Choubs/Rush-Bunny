#pragma strict

private var positionStart: Vector3;

function Start(){
	positionStart = gameObject.transform.position;
}

function OnTriggerEnter(other : Collider){
	if(other.gameObject.CompareTag("Finish"))
	{
		gameObject.transform.position = positionStart;
		//Application.LoadLevel(Application.loadedLevel);
	}
	else if(other.gameObject.CompareTag("EditorOnly"))
	{
		Application.LoadLevel(Application.loadedLevel);
	}
}