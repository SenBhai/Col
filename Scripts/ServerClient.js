var r,R;


async function PostServer(u, s, r, a, k=0)
{
	return (k ? await serverRequest(u, s, r, a, 'post') : serverRequest(u, s, r, a, 'post'));
}

function GetServer(u, T, s, r, a){ return serverRequest(u, T, s, r, a, 'get') }

function PutServer(u, T, s, r, a) // URL, Send Data, responseType, AccessToken
{
	return serverRequest(u, T, s, r, a, 'put');
}

function PatchServer(u, T, s, r, a, h=null) // URL, Send Data, responseType, AccessToken
{
	return serverRequest(u, T, s, r, a, 'PATCH', h);
}

function serverRequest(u, T=1, s, r, a, t, h) // URL, Send Data, responseType, AccessToken
{
	var xhr = new XMLHttpRequest();
	xhr.open(t, u);
	if(ntEmpt(a))
		xhr.setRequestHeader('Authorization', 'Bearer ' + a);
	if(ntEmpt(h))
		xhr.setRequestHeader("Access-Control-Allow-Origin", h);
	if(ntEmpt(r))
		xhr.responseType = r;
	return new Promise(
	(resolve)=>
	{
		xhr.onload = () =>
		{
			resolve(T?xhr:xhr.response);
		};
		if(ntEmpt(s))
			xhr.send(s);
		else
			xhr.send();
	});
}
