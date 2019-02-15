
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

	}

var schon = new What ("img/schonbrunn.jpg","16.09.2018","Schönbrunn","Maxingstrasse 13b",1130);
var karl = new What ("img/Karlsplatz.jpg","20.09.2018","Karlsplatz","Karlsplatz 1",1010);
var Ital = new restaurants ("img/italianRes.jpg","20.10.2018","Best Pizza","OnSome Street 5",1240, "Italian", "+43(1)5693302");
var china = new restaurants ("img/chineseRes.jpg","27.10.2018","Lemon Leaf Thai Restaurant","Kettenbrückengasse 19",1050, "Thai", "+43(1)5812308");
var Kris = new events ("img/Kris.jpg","22.11.2019","Kris Kristofferson","Wiener Stadthalle, Halle F, Roland Rainer Platz 1",1150, "Fr., 15.11.2019", "20:00","58,50");
var lenny = new events ("img/lenny.jpg","23.12.2019","Lenny Kravitz","Wiener Stadthalle, Halle D, Roland Rainer Platz 1",1150, "Sa., 09.12.2019", "19:30","47,80");

function test (obj,i){
 document.getElementsByClassName('todo')[i].innerHTML= "<p>"+arr[i]+"</p>";
}

var arr : Array<any>;

arr =[schon,karl,Ital,china,Kris,lenny];

for (let i in arr) {
	document.getElementsByClassName('todo')[i].addEventListener('DOMContentLoaded', function(){
		test(arr[i],i)
	})
	}







