#pragma strict

/*function Start () {
	Vector3 startPos = transform.position;
}*/

function Update () {
	if(transform.position.y < -30)
		Application.LoadLevel(Application.loadedLevel);
	
}