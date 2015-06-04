#pragma strict

//CHANGING CAMERA
var firstCam: Camera;
var secondCam: Camera;
var thirdCam: Camera;
var fourCam: Camera;
var fiveCam: Camera;

//COUNTING THE TIME TO MAKE CUT
var timer: float;
var audiotrack: AudioSource;

function Start () {
firstCam.enabled = true;
secondCam.enabled = false;
thirdCam.enabled = false;
fourCam.enabled = false;
fiveCam.enabled = false;
audiotrack = GameObject.FindGameObjectWithTag("MainCamera").GetComponent.<Camera>().GetComponent.<AudioSource>();
//show the title then play the song no loop just one time
yield WaitForSeconds(3);
audiotrack.Play();
}

function Update () {

timer += Time.deltaTime;
print(timer);

//CAMERA CUT
cameraCut(timer);
}


function cameraCut(mtimer: float)
{
if(mtimer <= 3.7f)
{
firstCam.enabled = true;
secondCam.enabled = false;
thirdCam.enabled = false;
fourCam.enabled = false;
fiveCam.enabled = false;
}

if(mtimer>3.7f&&mtimer<=9.4f)
{
firstCam.enabled = false;
secondCam.enabled = true;
thirdCam.enabled = false;
fourCam.enabled = false;
fiveCam.enabled = false;
}

if(mtimer>9.4f&&mtimer<=13.74622f)
{
thirdCam.enabled = true;
secondCam.enabled = false;
firstCam.enabled = false;
fourCam.enabled = false;
fiveCam.enabled = false;
}

if(mtimer>13.74622f&&mtimer<=25.6f)
{
firstCam.enabled = false;
secondCam.enabled = false;
thirdCam.enabled = false;
fourCam.enabled = true;
fiveCam.enabled = false;
}

if(mtimer>25.6f)
{
firstCam.enabled = false;
secondCam.enabled = false;
thirdCam.enabled = false;
fourCam.enabled = false;
fiveCam.enabled = true;
}


}
