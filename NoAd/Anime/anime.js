dc = document
wn = window

var q=360, e="1", n="", Q=1, k, or=[144,240,360,480,720,1080], E;

function bdy(){bild()}
function hid(a){ gebi("chs",2).display="none" }

function shw(a)
{
	E=a.innerHTML.substr(3)
	gebi("che").innerHTML="Episode : "+a.innerHTML.substr(3);
	qu(gebc("q",Q));
	gebi("chs",2).display="block";
}

async function qu(a)
{
	while(gebc("gSl",0))
		gebc("gSl",0).className="but q";
	a.className+=" gSl";
	Q=Array.prototype.slice.call(gebc("q")).indexOf(a);
	a=a.innerHTML;
	q=Number(a.substring(0, a.length-1));
	ldq();
	gebi("lod",2).display="";
}

async function bild()
{
	var h=gebi("Ep",2);
	h.display="none";
	if(localStorage.getItem("e")-0<(new Date()).getTime() || !localStorage.getItem("a"))
		wn.location.href="http://localhost/SenBhai/NoAd/main/"
	var a=localStorage.getItem("a").split("O:0").map(x=>x.replace("go/","https://gogoanime.so/category/")).sort(), i=0;
	ad="";
	lst=[];
	for(;i<a.length;++i)
	{
		tx=(await GetServer(a[i])).responseText
		nm=tx.substring(tx.indexOf("<title>")+7, tx.indexOf("</title>")-13)
		im=tx.substring(tx.indexOf(':image" content="')+17, tx.indexOf(":image:s")-22)
		ep=tx.substr(tx.indexOf('ve" e')+33, 11)
		ep=ep.substring(ep.indexOf("-")+1,ep.indexOf("<"))
		sm=tx.substring(tx.indexOf("ary: </sp")+5, tx.indexOf("n>Ge")-37)
		lst.push([nm,im,ep,sm,a[i]])
		ad+='<div class="lti" onclick="gto('+i+')"><img class="img" src="'+im+'"/><H2 class="nam">'+nm+'</H2>'+"<Br/><H3>Episodes : "+ep+'<BR/><B>Summary:-</B><BR/>'+sm+'</H3></div>'
	}
	gebi("lst").innerHTML+=ad
	h.display="";
}

async function hnd(a)
{
	var lnk=gebc("q",or.indexOf(q)).link, l=wn.location.href
	if(a)
		window.open(lnk);
	else
	{
		localStorage.setItem("vidURL", lnk)
		window.open(l.substring(0,l.length-6)+"Player/")
	}
}

function gto(a)
{
	k=a;
	a=lst[a];
	gebi("nm").innerHTML="<H1>"+a[0]+"</H1>";
	gebi("ep").innerHTML="(Episodes: "+a[2]+")";
	gebi("Sm").innerHTML="<big><B>Summary:-</B></big><BR/>"+a[3];
	gebi("epD",2).backgroundImage='url("'+a[1]+'")';
	var i=0, o=gebi("Ep");
	o.innerHTML=""
	for(var i=0;i<a[2];++i)
		o.innerHTML+='<div class="but" onclick="shw(this);event.stopPropagation()">Ep '+(i+1)+'</div>'
	gebi("epD",2).display="block"
	gebi("chs",2).display="none"
	Array.prototype.slice.call(gebc("q")).forEach(x=>{x.style.display="none"})
}

async function ldq()
{
	var m=(await GetServer("https://cors-anywhere.herokuapp.com/"+lst[k][4].replace("category/","")+"-episode-"+E)).responseText
	m=(await GetServer("https://cors-anywhere.herokuapp.com/"+m.substring(m.indexOf('ads"><a')+14,m.indexOf("ec-do")-33))).responseText
	m=m.substring(m.indexOf('ad"><a')).replaceAll("\n","").replaceAll(" ","").replaceAll("amp;","")
	m=m.substring(12,m.indexOf('iv><sp')-19).split('P-mp4)</a></div><divclass="dowload"><ahref="').map(x=>x.split('"download>Download('))
	n=m.map(x=>Number(x[1]))
	m=m.map(x=>x[0])
	or.forEach( (x,i)=>
				{
					var p=n.indexOf(x)
					if(p>-1)
					{
						gebc("q",i).link=m[p]
						gebc("q",i,2).display=""
					}
					else
						gebc("q",i,2).display="none"
				})
	gebi("lod",2).display="none"
}


