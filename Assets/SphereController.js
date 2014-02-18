#pragma strict

function Start () {

}

function Update () {

}

//destroy the sphere when it becomes invisible
function OnBecameInvisible() {
	//once you become invisible, destroy yourself.
	Destroy(this.gameObject);
}