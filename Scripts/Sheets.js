


function sheet(id, sheet, range)
{
	return new Promise((re)=>
	{
		gapi.client.sheets.spreadsheets.values.get({spreadsheetId:id, range:(Empt(sheet)?"Sheet1":sheet)+(Empt(range)?"":"!"+range),}).then(function(r){re(r.result.values)}).catch(er=>{re(null)})
	});
}