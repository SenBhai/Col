var CLIENT_ID = "1093024018427-b1rhhgmeo8oqobuq9uk0vdii0qf7mn5i.apps.googleusercontent.com";
var API_KEY = "AIzaSyBP4haXHhVTi-6nK-7_XF8E7FYdYGOkCrk";

var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest", "https://sheets.googleapis.com/$discovery/rest?version=v4"];
var googleUser = {};
var GUserBasic;

var GInit = function(eid)
{
	gapi.load('auth2', function()
	{
		DATA = {
			apiKey: API_KEY,
			client_id: CLIENT_ID,
			discoveryDocs: DISCOVERY_DOCS,
			cookiepolicy: 'single_host_origin',
			scope: [
				"https://www.googleapis.com/auth/drive.appdata",
				"https://www.googleapis.com/auth/userinfo.profile",
				"https://www.googleapis.com/auth/spreadsheets.readonly"
			].join(" ")
		};
		auth2 = gapi.auth2.init(DATA);
		handleClientLoad();
		attachSignin(gebi(eid));
	});
};

function attachSignin(el)
{
	auth2.attachClickHandler(el, {},
		function(googleUser)
		{
			GSignUp(JSON.stringify(googleUser.getBasicProfile()),'Ggl-oA');
        },
		function(error)
		{
			console.log("attachSignin function(error)");
			console.log(JSON.stringify(error, undefined, 2));
			alert(JSON.stringify(error, undefined, 2));
		});
}

function handleClientLoad()
{
	gapi.load('client', 
	function()
	{
		gapi.client.load('drive', 'v2', ()=>{gapi.client.load('drive', 'v3', ()=>{console.log("All Loaded...");} ); } );
	});
}

