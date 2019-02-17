var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// location base for every 'item'
var What = /** @class */ (function () {
    function What(img, date, a, b, c, town, d) {
        this.img = "";
        this.img = img;
        this.date = date;
        this.cityName = a;
        this.cityadd = b;
        this.cityZip = c;
        this.town = town;
        this.link = d;
    }
    What.prototype.render = function () {
        return "<div  class=\"col-lg-6 col-md-6 col-xs-12 mp-2 border top\">\n        <div class=\"col-lg-3\" style=\"width: 24rem;\">\n        <img id=\"img\" class=\"card-img-top\" src = \"" + this.img + "\" width=\"250px\" height=\"170px\" alt=\"Card image cap\">\n        <hr>\n          <small id=\"" + this.date + "\" class=\"text-muted\">created: " + this.date + "</small>\n        </div>\n        <div class=\"col-lg-5 col-lg-offset-1\">\n        <h5>" + this.cityName + "</h5>\n        <p>" + this.cityadd + ", " + this.cityZip + " " + this.town + "</p>\n        <a href=\"" + this.link + "\">\n        <span class=\"glyphicon glyphicon-globe\"></span></a>\n        </div>\n          \n        </div>";
    };
    return What;
}());
var schon = new What("img/schonbrunn.jpg", "16.09.2018", "Schönbrunn", "Maxingstrasse 13b", "1130", "Vienna", "https://www.schoenbrunn.at");
var karl = new What("img/Karlsplatz.jpg", "20.09.2018", "Karlsplatz", "Karlsplatz 1", "1010", "Vienna", "http://karlsplatz.org");
// extension for restaurants
var restaurants = /** @class */ (function (_super) {
    __extends(restaurants, _super);
    function restaurants(img, date, a, b, c, town, type, tel, d) {
        var _this = _super.call(this, img, date, a, b, c, town, d) || this;
        _this.type = type;
        _this.telephonenr = tel;
        return _this;
    }
    restaurants.prototype.render = function () {
        return "<div  class=\"col-lg-6 col-md-6 col-xs-12 mp-2 border top\">\n        <div class=\"col-lg-3\"style=\"width: 24rem;\">\n        <img id=\"img\" class=\"card-img-top\" src = \"" + this.img + "\" width=\"250px\" height=\"170px\" alt=\"Card image cap\">\n        <hr>\n          <small id=\"" + this.date + "\" class=\"text-muted\">created: " + this.date + "</small>\n        </div>\n        <div class=\"col-lg-5 col-lg-offset-1\">\n        <h5>" + this.cityName + "</h5>\n        <p>" + this.cityadd + ", " + this.cityZip + " " + this.town + "</p>\n        <p>Dining: " + this.type + "</p>\n        <p>call: " + this.telephonenr + "</p>\n        <a href=\"" + this.link + "\">\n        <span class=\"glyphicon glyphicon-globe\"></span></a>\n        </div>  \n        </div>";
    };
    ;
    return restaurants;
}(What));
var Ital = new restaurants("img/itlalianRes.jpg", "09.09.2018", "Danieli", "Himmelpfortgasse 3", "1010", "Vienna", "Italian", "+43(1)5693302", "http://www.danieli.at/");
var china = new restaurants("img/chineseRes.jpg", "27.10.2018", "Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19", "1050", "Vienna", "Thai", "+43(1)5812308", "http://www.lemonleaf.at/");
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(img, date, a, b, c, town, eventDate, eventTime, Price, d) {
        var _this = _super.call(this, img, date, a, b, c, town, d) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.Price = Price;
        return _this;
    }
    events.prototype.render = function () {
        return "<div  class=\"col-lg-6 col-md-6 col-xs-12 mp-2 border top\">\n        <div class=\"col-lg-3\"style=\"width: 24rem;\">\n        <img id=\"img\" class=\"card-img-top\" src = \"" + this.img + "\" width=\"250px\" height=\"170px\" alt=\"Card image cap\">\n        <hr>\n          <small id=\"" + this.date + "\" class=\"text-muted\">created: " + this.date + "</small>\n        </div>\n        <div class=\"col-lg-5 col-lg-offset-1\">\n        <h5>" + this.cityName + "</h5>\n        <p>" + this.cityadd + ", " + this.cityZip + " " + this.town + "</p>\n        <p>Date: " + this.eventDate + "</p>\n        <p>Start: " + this.eventTime + "</p>\n        <p> \u20AC " + this.Price + "</p>\n        <a href=\"" + this.link + "\">\n        <span class=\"glyphicon glyphicon-globe\"></span></a>\n        </div>\n        </div>";
    };
    ;
    return events;
}(What));
var Kris = new events("img/Kris.jpg", "22.11.2019", "Kris Kristofferson", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "1150", "Vienna", "Fr., 15.11.2019", "20:00", "58,50", "http://kriskristofferson.com/");
var lenny = new events("img/lenny.jpg", "23.12.2019", "Lenny Kravitz", "Wiener Stadthalle, Halle D, Roland Rainer Platz 1", "1150", "Vienna", "Sa., 09.12.2019", "19:30", "47,80", "http://www.lennykravitz.com/");
// function test (obj,i){
//  document.getElementsByClassName("todo")[i].innerHTML= "div>"+arr[i]+"</p>";
// }
var arr;
arr = [schon, karl, Ital, china, Kris, lenny];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    document.getElementById("demo").innerHTML += i.render();
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
