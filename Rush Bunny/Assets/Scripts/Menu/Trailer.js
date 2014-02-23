#pragma strict

function start(){
	this.renderer.material.color = Color.red;
}

function OnMouseEnter(){
	this.renderer.material.color = Color(255,0,127);
}

function OnMouseExit(){
	this.renderer.material.color = Color.red;
}


function OnMouseDown(){
	this.renderer.material.color = Color(255,54,0);
}

function OnMouseUp(){
	//le film prochainement à venir
}