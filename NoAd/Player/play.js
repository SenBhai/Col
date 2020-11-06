dc = document
wn = window

function bdy()
{
	gebi("viD").innerHTML+='<video id="vid" controls onclick="event.stopPropagation()"><source id="vsc" src="'+localStorage.getItem("vidURL")+'" type="video/mp4"><H1>Your browser does not support the video tag.<H1></video>';
}

function rst()
{
	var g=gebi("opa");
	g.value=25;
	opa(g);
}

function opa(a)
{
	a=a.value
	a=a>0&&a<25?a=0:a-25;
	var g=gebi("viD",2),b=100;
	g.backgroundColor=a>0?"#FFF":(a<0?"#000":"");
	b=(b-Math.abs(a))/b;
	gebi("vid",2).opacity=b;
}


