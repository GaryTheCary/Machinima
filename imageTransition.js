#pragma strict
var titleImg: GameObject;
var alpha: float;
function Start () {
titleImg.GetComponent.<Renderer>().material.color.a = 0.0f;
alpha = 0.0f;
}

function Update () {

alpha = Mathf.Lerp(0.0f, 1.0f, Time.time/1.5f);
titleImg.GetComponent.<Renderer>().material.color.a = alpha;
}