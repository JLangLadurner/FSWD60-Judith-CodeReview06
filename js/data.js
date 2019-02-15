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
    function What(a, b, c, d, date) {
        this.img = "";
        this.img = a;
        this.cityName = b;
        this.cityZip = c;
        this.cityadd = d;
        this.date = date;
    }
    What.prototype.render = function () {
        return "<div class=\"col-md-12\">\n\t\t\t\t<h4> Locations In Vienna</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\"\n\t\t\t\t<div class=\"col-md-4\"\n\t\t\t\t<div class=\"card\" style=\"width:18rem;\">\n\t\t\t\t<img id=\"img\" class=\"card-img-top src=\"" + this.img + "\" alt=\"Card image cap\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t<h5>" + this.cityName + "</h5>\n\t\t\t\t<p>" + this.cityZip + "</p>\n\t\t\t\t<p>" + this.cityadd + "</p>\n\t\t\t\t<p>" + this.date + "</p>\n\t\t\t\t</div>\n\t\t\t\t</div\n\t\t\t\t</div>";
    };
    return What;
}());
var schon = new What("../img/schonbrunn.jpg", "Schönbrunn", "Maxingstrasse 13b", "1130", "16.09.2018");
var karl = new What("../img/Karlsplatz.jpg", "Karlsplatz", "Karlsplatz 1", "1010", "20.09.2018");
// extension for restaurants
var restaurants = /** @class */ (function (_super) {
    __extends(restaurants, _super);
    function restaurants(a, b, c, d, date, type, tele) {
        var _this = _super.call(this, a, b, c, d, date) || this;
        _this.type = type;
        _this.telephonenr = tele;
        return _this;
    }
    restaurants.prototype.render = function () {
        return "<div class=\"col-md-12\">\n\t\t\t\t<h4> Restaurants I tried</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\"\n\t\t\t\t<div class=\"col-md-4\"\n\t\t\t\t<div class=\"card\" style=\"width:18rem;\">\n\t\t\t\t<img id=\"img\" class=\"card-img-top src=\"" + this.img + "\" alt=\"Card image cap\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t<h5>" + this.cityName + "</h5>\n\t\t\t\t<p>" + this.cityZip + "</p>\n\t\t\t\t<p>" + this.cityadd + "</p>\n\t\t\t\t<p>" + this.date + "</p>\n\t\t\t\t<p>Dining: " + this.type + "</p>\n\t\t\t\t<p>Call them at: " + this.telephonenr + "</p>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t";
    };
    ;
    return restaurants;
}(What));
var Ital = new restaurants("../img/itlalianRes.jpg", "Best Pizza", "OnSome Street 5", "1240", "20.10.2018", "Italian", "+43(1)5693302");
var china = new restaurants("../img/chineseRes.jpg", "Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19", "27.10.2018", "1050", "Thai", "+43(1)5812308");
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(a, b, c, d, date, eventDate, eventTime, Price) {
        var _this = _super.call(this, a, b, c, d, date) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.Price = Price;
        return _this;
    }
    events.prototype.render = function () {
        return "<div class=\"col-md-12\">\n\t\t\t\t<h4> Upcoming Events</h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\"\n\t\t\t\t<div class=\"col-md-4\"\n\t\t\t\t<div class=\"card\" style=\"width:18rem;\">\n\t\t\t\t<img id=\"img\" class=\"card-img-top src=\"" + this.img + "\" alt=\"Card image cap\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t<h5>" + this.cityName + "</h5>\n\t\t\t\t<p>" + this.cityZip + "</p>\n\t\t\t\t<p>" + this.cityadd + "</p>\n\t\t\t\t<p>Created on: " + this.date + "</p>\n\t\t\t\t<p>Happening on: " + this.eventDate + "</p>\n\t\t\t\t<p>Start: " + this.eventTime + "</p>\n\t\t\t\t<p>At only: " + this.Price + "</p>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>";
    };
    ;
    return events;
}(What));
var Kris = new events("../img/Kris.jpg", "Kris Kristofferson", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "1150", "22.11.2019", "Fr., 15.11.2019", "20:00", "58,50");
var lenny = new events("../img/lenny.jpg", "Lenny Kravitz", "Wiener Stadthalle, Halle D, Roland Rainer Platz 1", "1150", "23.12.2019", "Sa., 09.12.2019", "19:30", "47,80");
// function test (obj,i){
//  document.getElementsByClassName("todo")[i].innerHTML= "div>"+arr[i]+"</p>";
// }
var arr;
arr = [schon, karl, Ital, china, Kris, lenny];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    document.getElementById("demo").innerHTML += i.render();
}
