#pragma strict

function start(){
	this.renderer.material.color = Color.red;
}

function OnMouseEnter(){
	this.renderer.material.color = Color.blue;
}

function OnMouseExit(){
	this.renderer.material.color = Color.red;
}


function OnMouseDown(){
	this.renderer.material.color = Color.green;
}

function OnMouseUp(){
	Application.LoadLevel(1);
}