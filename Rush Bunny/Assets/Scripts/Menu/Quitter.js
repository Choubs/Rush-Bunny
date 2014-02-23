#pragma strict

function start(){
	this.renderer.material.color = Color.red;
}

function OnMouseEnter(){
	this.renderer.material.color = Color.yellow;
}

function OnMouseExit(){
	this.renderer.material.color = Color.red;
}


function OnMouseDown(){
	this.renderer.material.color = Color(204,0,204);
}

function OnMouseUp(){
	Application.Quit();
}