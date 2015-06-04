using UnityEngine;
using System.Collections;

public class introCamMove : MonoBehaviour {

	// Use this for initialization
	public float view_Field;
	public Camera introCam;
	void Start () {
		//iTween.MoveTo (this.gameObject, iTween.Hash("path", iTweenPath.GetPath("introCam"), "time", 5, "loopType", "pingpong", "easetype", iTween.EaseType.linear));
		view_Field = 1.0f;
		introCam.fieldOfView = 1.0f;
	}
	
	// Update is called once per frame
	void Update () {
		view_Field = Mathf.Lerp (1.0f, 9.2f, Time.time/3);
		introCam.fieldOfView = view_Field;

	}
}
