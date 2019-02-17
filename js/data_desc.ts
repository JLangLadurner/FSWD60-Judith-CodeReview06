
// location base for every 'item'
class What {
	img = "";
	cityName: "";
	cityadd: "";
	cityZip: " ";
	town:"";
	link:"";
	date: " ";
	

	constructor (img,date,a,b,c,town,d){
		this.img = img;
		this.date = date;
		this.cityName = a;
		this.cityadd = b;
		this.cityZip = c;
		this.town = town;
		this.link=d;
		

	}
	render(){
		return `<div  class="col-lg-6 col-md-6 col-xs-12 mp-2 border top">
        <div class="col-lg-3" style="width: 24rem;">
        <img id="img" class="card-img-top" src = "${this.img}" width="250px" height="170px" alt="Card image cap">
        <hr>
          <small id="${this.date}" class="text-muted">created: ${this.date}</small>
        </div>
        <div class="col-lg-5 col-lg-offset-1">
        <h5>${this.cityName}</h5>
        <p>${this.cityadd}, ${this.cityZip} ${this.town}</p>
        <a href="${this.link}">
        <span class="glyphicon glyphicon-globe"></span></a>
        </div>
          
        </div>`
}
}
var schon = new What ("img/schonbrunn.jpg","16.09.2018","Schönbrunn","Maxingstrasse 13b","1130","Vienna","https://www.schoenbrunn.at");
var karl = new What ("img/Karlsplatz.jpg","20.09.2018","Karlsplatz","Karlsplatz 1","1010","Vienna","http://karlsplatz.org");
// extension for restaurants
class restaurants extends What {
	type;
	telephonenr;

	constructor (img,date,a,b,c,town,type,tel,d){
		super(img,date,a,b,c,town,d);
		this.type = type;
		this.telephonenr = tel;
	}
	render(){
		return `<div  class="col-lg-6 col-md-6 col-xs-12 mp-2 border top">
        <div class="col-lg-3"style="width: 24rem;">
        <img id="img" class="card-img-top" src = "${this.img}" width="250px" height="170px" alt="Card image cap">
        <hr>
          <small id="${this.date}" class="text-muted">created: ${this.date}</small>
        </div>
        <div class="col-lg-5 col-lg-offset-1">
        <h5>${this.cityName}</h5>
        <p>${this.cityadd}, ${this.cityZip} ${this.town}</p>
        <p>Dining: ${this.type}</p>
        <p>call: ${this.telephonenr}</p>
        <a href="${this.link}">
        <span class="glyphicon glyphicon-globe"></span></a>
        </div>  
        </div>`

		
	};

}
var Ital = new restaurants ("img/itlalianRes.jpg","09.09.2018","Danieli","Himmelpfortgasse 3","1010", "Vienna", "Italian", "+43(1)5693302", "http://www.danieli.at/" );
var china = new restaurants ("img/chineseRes.jpg","27.10.2018","Lemon Leaf Thai Restaurant","Kettenbrückengasse 19","1050", "Vienna","Thai","+43(1)5812308","http://www.lemonleaf.at/");

class events extends What {
	eventDate;
	eventTime;
	Price;

	constructor (img,date,a,b,c,town,eventDate,eventTime,Price,d){
		super(img,date,a,b,c,town,d);
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.Price = Price;
	}
	render(){
		return `<div  class="col-lg-6 col-md-6 col-xs-12 mp-2 border top">
        <div class="col-lg-3"style="width: 24rem;">
        <img id="img" class="card-img-top" src = "${this.img}" width="250px" height="170px" alt="Card image cap">
        <hr>
          <small id="${this.date}" class="text-muted">created: ${this.date}</small>
        </div>
        <div class="col-lg-5 col-lg-offset-1">
        <h5>${this.cityName}</h5>
        <p>${this.cityadd}, ${this.cityZip} ${this.town}</p>
        <p>Date: ${this.eventDate}</p>
        <p>Start: ${this.eventTime}</p>
        <p> € ${this.Price}</p>
        <a href="${this.link}">
        <span class="glyphicon glyphicon-globe"></span></a>
        </div>
        </div>`

	};

}

var Kris = new events ("img/Kris.jpg","22.11.2019","Kris Kristofferson","Wiener Stadthalle, Halle F, Roland Rainer Platz 1","1150","Vienna", "Fr., 15.11.2019", "20:00","58,50","http://kriskristofferson.com/");
var lenny = new events ("img/lenny.jpg","23.12.2019","Lenny Kravitz","Wiener Stadthalle, Halle D, Roland Rainer Platz 1","1150","Vienna", "Sa., 09.12.2019", "19:30","47,80","http://www.lennykravitz.com/");

// function test (obj,i){
//  document.getElementsByClassName("todo")[i].innerHTML= "div>"+arr[i]+"</p>";
// }

var arr : Array<any>;

arr =[schon,karl,Ital,china,Kris,lenny];

for (let i of arr) {
	document.getElementById("demo").innerHTML +=i.render();
	}

	// 'g' means global replace is needed. This means that your replace will replace all copies of the matched string with the replacement
	// provided

// function descending(a,b){
// 	const A = a.date;
// 	let test1 = A.replace(/\./g, '').replace(/\./g,'').substring(2,8);
// 	console.log(test1);
// 	const B = b.date;
// 	let test2 = B.replace(/\./g, '').replace(/\./g,'').substring(2,8);
// 	let comparison = -1;
// 	if(+test1 >test2) {
// 		comparison = -1;
// 	}

// 	return comparison;
// }

// $("#demo").text("");
// 	var sorted=arr.sort(descending);
// 	for(let i = 0; i<sorted.length ; i++){
// 		document.getElementById("demo").innerHTML +=sorted[i].render();
// 	}











