
// location base for every 'item'
class What {
	date: string;
	cityName: string;
	cityZip: number;
	cityadd: string;
	image = "";

	constructor (a,b,c,d,img){
		this.date = a;
		this.cityName = b;
		this.cityZip = c;
		this.cityadd = d;
		this.image = img;

	}

	locInfo(){
		return `<img src="${this.image}">
				<p>Date created: ${this.date}</p>
				<h2>${this.cityName}
				<p>Address: ${this.cityadd}</p>
				<p>Zip Code: ${this.cityZip}</p>`;
	}
}
// extension for restaurants

class restaurants extends What {
	type;
	telephonenr;

	constructor (a,b,c,d,img,type,tele){
		super(a,b,c,d,img);
		this.type = type;
		this.telephonenr = tele;
	}

	locInfo(){
		return `${super.locInfo()} <p> Type of Dining: ${this.type}</p><br>
				<p> Type of Dining: ${this.telephonenr}</p>`;
	}
}

class events extends What {
	eventDate;
	eventTime;
	Price;

	constructor (a,b,c,d,img,eventDate,eventTime,Price){
		super(a,b,c,d,img);
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.Price = Price;
	}

	locInfo(){
		return `${super.locInfo()} <p> Date of Event: ${this.eventDate}</p><br>
				<p> Start: ${this.eventTime}</p>
				<p> Price/Ticket: ${this.Price}</p>`
	}
}
var schon = new What ("img/schonbrunn.jpg","16.09.2018","Schönbrunn","Maxingstrasse 13b",1130);
var karl = new What ("img/Karlsplatz.jpg","20.09.2018","Schönbrunn","Maxingstrasse 13b",1130);
var Ital = new restaurants()






