dc = document
wn = window

var q=360, e="1", n="", Q=1, k, or=[144,240,360,480,720,1080], E,tm,o;

function bdy()
{
	tm=gebi("cpn");o=gebi("opa")
	dat()
}
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

async function dat()
{
	if(localStorage.getItem("e")-0<(new Date()).getTime() || !localStorage.getItem("a"))
		wn.location.href="https://senbhai.github.io/Col/NoAd/main/"
	var a=localStorage.getItem("a").split("O:0").map(x=>x.replace("go/","https://gogoanime.sh/category/")).sort(), i=0,tmp;
	lst=[],l=a.length;
	for(;i<l;++i)
	{
		tx=(await GetServer(a[i])).responseText
		nm=tx.substring(tx.indexOf("<title>")+7, tx.indexOf("</title>")-13)
		im=tx.substring(tx.indexOf(':image" content="')+17, tx.indexOf(":image:s")-22)
		ep=tx.substr(tx.indexOf('ve" e')+33, 11)
		tmp=ep.indexOf("-")+1
		ep=ep.substring(tmp?tmp:3,ep.indexOf("<"))
		sm=tx.substring(tx.indexOf("ary: </sp")+5, tx.indexOf("n>Ge")-37)
		lst.push([nm,im,ep,sm,a[i]])
	}
	bld();
}

function bds(){o.value=tm.value=1;bld()}

function bld(x=gebi('cpn'))
{
	x=x.value
	var h=gebi("Ep",2),op="",ad="",ppr=parseInt(gebi("ppc").value);
	var i=(x-1)*ppr,l=x*ppr;
	l=lst.length<l?lst.length:l;
	tm.innerHTML=""
	h.display="none";
	for(;i<l;++i)
		ad+='<div class="lti" onclick="gto('+i+')"><img class="img" src="'+lst[i][1]+'"/><H2 class="nam">'+lst[i][0]+'</H2>'+"<Br/><H3>Episodes : "+lst[i][2]+'<BR/><B>Summary:-</B><BR/>'+lst[i][3]+'</H3></div>'
	for(i=1,l=Math.ceil(lst.length/ppr)+1;i<l;++i)
		tm.innerHTML+='<option value="'+i+'">'+i+'</option>'
	gebi("lst").innerHTML=ad;
	o.max=l-1;
	o.value=tm.value=x;
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


