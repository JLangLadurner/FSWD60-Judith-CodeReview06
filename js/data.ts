
// location base for every 'item'
class What {
	img = "";
	cityName: " ";
	cityadd: "string";
	cityZip: " ";
	date: " ";
	

	constructor (a,b,c,d,date){
		this.img = a;
		this.cityName = b;
		this.cityZip = c;
		this.cityadd = d;
		this.date = date;

	}
	render(){
		return `<div class="col-md-12">
				<h4> Locations In Vienna</h4>
				</div>
				<div class="row"
				<div class="col-md-4"
				<div class="card" style="width:18rem;">
				<img id="img" class="card-img-top src="${this.img}" alt="Card image cap">
				</div>
				<div class="card-body">
				<h5>${this.cityName}</h5>
				<p>${this.cityZip}</p>
				<p>${this.cityadd}</p>
				<p>${this.date}</p>
				</div>
				</div
				</div>`
}
}
var schon = new What ("../img/schonbrunn.jpg","Schönbrunn","Maxingstrasse 13b","1130","16.09.2018");
var karl = new What ("../img/Karlsplatz.jpg","Karlsplatz","Karlsplatz 1","1010","20.09.2018");
// extension for restaurants
class restaurants extends What {
	type;
	telephonenr;

	constructor (a,b,c,d,date,type,tele){
		super(a,b,c,d,date);
		this.type = type;
		this.telephonenr = tele;
	}
	render(){
		return `<div class="col-md-12">
				<h4> Restaurants I tried</h4>
				</div>
				<div class="row"
				<div class="col-md-4"
				<div class="card" style="width:18rem;">
				<img id="img" class="card-img-top src="${this.img}" alt="Card image cap">
				</div>
				<div class="card-body">
				<h5>${this.cityName}</h5>
				<p>${this.cityZip}</p>
				<p>${this.cityadd}</p>
				<p>${this.date}</p>
				<p>Dining: ${this.type}</p>
				<p>Call them at: ${this.telephonenr}</p>
				</div>
				</div>
				</div>
				`

		
	};

}
var Ital = new restaurants ("../img/itlalianRes.jpg","Best Pizza","OnSome Street 5","1240","20.10.2018", "Italian", "+43(1)5693302");
var china = new restaurants ("../img/chineseRes.jpg","Lemon Leaf Thai Restaurant","Kettenbrückengasse 19","27.10.2018","1050", "Thai", "+43(1)5812308");

class events extends What {
	eventDate;
	eventTime;
	Price;

	constructor (a,b,c,d,date,eventDate,eventTime,Price){
		super(a,b,c,d,date);
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.Price = Price;
	}
	render(){
		return `<div class="col-md-12">
				<h4> Upcoming Events</h4>
				</div>
				<div class="row"
				<div class="col-md-4"
				<div class="card" style="width:18rem;">
				<img id="img" class="card-img-top src="${this.img}" alt="Card image cap">
				</div>
				<div class="card-body">
				<h5>${this.cityName}</h5>
				<p>${this.cityZip}</p>
				<p>${this.cityadd}</p>
				<p>Created on: ${this.date}</p>
				<p>Happening on: ${this.eventDate}</p>
				<p>Start: ${this.eventTime}</p>
				<p>At only: ${this.Price}</p>
				</div>
				</div>
				</div>`
	};

}

var Kris = new events ("../img/Kris.jpg","Kris Kristofferson","Wiener Stadthalle, Halle F, Roland Rainer Platz 1","1150","22.11.2019", "Fr., 15.11.2019", "20:00","58,50");
var lenny = new events ("../img/lenny.jpg","Lenny Kravitz","Wiener Stadthalle, Halle D, Roland Rainer Platz 1","1150","23.12.2019", "Sa., 09.12.2019", "19:30","47,80");

// function test (obj,i){
//  document.getElementsByClassName("todo")[i].innerHTML= "div>"+arr[i]+"</p>";
// }

var arr : Array<any>;

arr =[schon,karl,Ital,china,Kris,lenny];

for (let i of arr) {
	document.getElementById("demo").innerHTML +=i.render();
	}







