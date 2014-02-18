#pragma strict
static var totalSpheres:int;
var mySphere:Rigidbody;

function makemeasphere ()
{
	totalSpheres = totalSpheres + 1;
	
	var ypositionofsphere:int;
	var xpositionofsphere:int;
	
	ypositionofsphere = 5;
	
	//any value between -12 and 12 for x
	xpositionofsphere = Random.Range(-5,5);
	
	//create the sphere
	Instantiate(mySphere,Vector3(xpositionofsphere,ypositionofsphere,0),Quaternion.identity);
}


function shrinkCube()
{
	var cubeTransform:Transform;
	
	cubeTransform = GameObject.FindGameObjectWithTag("Player").transform;
	
	cubeTransform.localScale.x *= 0.95;
	
	
}

function Start () {
	//invoke this function after 0.5 seconds every second
	InvokeRepeating("makemeasphere",0.5,1.0);
	InvokeRepeating("shrinkCube",0.5,3.0);
}

function Update () {

}