


var nm=["a","m","w","h","p","e"], lst=[];

function bdy()
{
	a=dc.cookie.split("; ").map(x=>x.split("=")[0])
	if(localStorage.getItem("Bdt")&&nm.map(x=>a.includes(x)?1:0).reduce((n,m)=>m+n)-1>0)
	{
		lst=localStorage.getItem("Bdt").split("\n").map(x=>x.split("\t"))
		los()
	}
}

function gto(x){window.location.href="../"+["Anime","Movies","WebSeries","Hentai","Play"][x]}
function GAPIinit(){GInit("GSignIn");}

function bld()
{
	var i=0, g=gebi("lst");
	for(;i<5;++i)
		if(lst[i]!="0")
			g.innerHTML+='<div class="lti" onclick="gto('+i+')"><img class="img" src="https://raw.githubusercontent.com/SenBhai/Col/main/Media/Img/'+lst[i][1]+'.png"/><div class="nam">'+lst[i][0]+'</div></div>';
}

async function GSignUp()
{
	gebi("bdy").innerHTML+='<div id="ldf">Loading Files</div>';
	nor();
	await lod();
	gebi("ldf",2).display="none";
}

async function lod()
{
	console.log("lod");
	var shet = ["1dd4OUN5Ko4RTCKMA3PYENSYPrn8BhK0uOD1pU2glsRE", "1AhsnjW01lLgMFif6nR23gPFUBVUEZjE_oM6wCkRzUiY",
				"1cR9b4t3EOoPMWGkOb5fL1iWwjAMFK0HDZpwxUs7jqRE", "17pziS6eywiVyJkmuBb6jr1-HOcu2Q0nwN7z8HXAuVwY",
				"1pAqnfu4KXLPix0KEP-4kl1a8QHTsU1T9qqmJBTAquz0"], i=0, tmp;
	console.log("for load");
	lst=[]
	for(;i<5;++i)
	{
		try{tmp=(await sheet(shet[i], null, "A1:B1"))[0]}
		catch{tmp=0}
		lst.push(tmp);
		shet[i]=tmp?(await sheet(shet[i],null,"B4:B"+(parseInt((await sheet(shet[i],null,"B2"))[0][0])+2))).map(x=>x[0]).join("O:0"):0;
	}
	console.log("for load ended");
	console.log(lst)
	var d=new Date();
	d.setTime(d.getTime() + 2*24*60*60*1000);
	dc.cookie="e="+d.getTime();
	for(i=0;i<5;++i)
		dc.cookie=nm[i]+"="+shet[i]+";expires="+d.toUTCString()+";";
	localStorage.setItem("Bdt",lst.map(x=>x?x.join("\t"):0).join("\n"))
	los();
}

function delCok(){nm.forEach(x=>dc.cookie=x+"=;expires=Thu, 01 Jan 1970 00:00:00 UTC;");localStorage.removeItem("Bdt");}
function nor(){if(gebi("GBlock"))gebi("GBlock").id=gebi("sign").id="C"}

function los()
{
	var a=dc.cookie.split("; ").map(x=>x.split("=")[0]), b=dc.cookie.split("; ").map(x=>x.split("=")[1])
	nm.forEach((t,n)=>{ var i=a.indexOf(t);
						if(i>-1)
							localStorage.setItem(a[i], b[i])})
	bld();
	nor();
}

