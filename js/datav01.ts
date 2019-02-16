function comment (){
	let name = (<HTMLInputElement>document.getElementById('name')).value;
	let comment =(<HTMLInputElement>document.getElementById('comment')).value;

	document.getElementById('output').innerHTML += "<h3>"+name+"</h3><br><p>"+comment+"</p>"
	}
	document.getElementById('btn').addEventListener('click', comment,false);








