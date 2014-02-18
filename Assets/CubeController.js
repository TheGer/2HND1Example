#pragma strict
//a number.  This number will increase every time the ball hits the paddle
var score:int;


//every function that has to do with displaying text on screen in this.
//this function is CaSe SeNsItIvE
function OnGUI (){
	//create a label to show the score in the TOP LEFT corner of the screen
	//values in pixels.  Rect(X,Y,WIDTH,HEIGHT)
	GUI.Label(Rect(1,2,400,50),"Score: "+score+"/"+SphereGenerator.totalSpheres);

}

//this function happens every time the cube collides with the sphere
function OnTriggerEnter (otherobject:Collider) {
	//add to the score
	score = score + 1;
	//make the ball disappear
	Destroy(otherobject.gameObject);
}


function Start () {

}

function Update () {
	//horizontal movement with a speed of 10
	transform.Translate(Vector3.right * 10 * Input.GetAxis("Horizontal") * Time.deltaTime);
	//enable mouse control
	transform.position.x = Camera.main.ScreenToWorldPoint(Input.mousePosition).x;
	
}