#pragma strict

var anim : Animation;

function Update () {

	if((Input.GetKey(KeyCode.Z)) || (Input.GetAxis("Vertical"))){
		anim.CrossFade("course");
	}
	if((Input.GetKey(KeyCode.Space)) || (Input.GetKey(KeyCode.JoystickButton4))){
		anim.CrossFade("jump");	
	}
}
