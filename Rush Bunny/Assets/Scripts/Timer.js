#pragma strict

static var timer: float; // set duration time in seconds in the Inspector

function Update()
{
	timer += Time.deltaTime; // I need timer which from a particular time goes to zero

	guiText.text = timer.ToString("00.0");
}