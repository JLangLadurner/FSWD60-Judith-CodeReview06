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
    function What(a, b, c, d, img) {
        this.image = "";
        this.date = a;
        this.cityName = b;
        this.cityZip = c;
        this.cityadd = d;
        this.image = img;
    }
    return What;
}());
// extension for restaurants
var restaurants = /** @class */ (function (_super) {
    __extends(restaurants, _super);
    function restaurants(a, b, c, d, img, type, tele) {
        var _this = _super.call(this, a, b, c, d, img) || this;
        _this.type = type;
        _this.telephonenr = tele;
        return _this;
    }
    return restaurants;
}(What));
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(a, b, c, d, img, eventDate, eventTime, Price) {
        var _this = _super.call(this, a, b, c, d, img) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.Price = Price;
        return _this;
    }
    return events;
}(What));
var locData;
var locData = new Array();
locData[0] = new What("img/schonbrunn.jpg", "16.09.2018", "Schönbrunn", "Maxingstrasse 13b", 1130);
locData[1] = new What("img/Karlsplatz.jpg", "20.09.2018", "Karlsplatz", "Karlsplatz 1", 1010);
locData[2] = new restaurants("img/italianRes.jpg", "20.10.2018", "Best Pizza", "OnSome Street 5", 1240, "Italian", "+43(1)5693302");
locData[3] = new restaurants("img/chineseRes.jpg", "27.10.2018", "Lemon Leaf Thai Restaurant", "Kettenbrückengasse 19", 1050, "Thai", "+43(1)5812308");
locData[4] = new events("img/Kris.jpg", "22.11.2019", "Kris Kristofferson", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", 1150, "Fr., 15.11.2019", "20:00", "58,50");
locData[5] = new events("img/lenny.jpg", "23.12.2019", "Lenny Kravitz", "Wiener Stadthalle, Halle D, Roland Rainer Platz 1", 1150, "Sa., 09.12.2019", "19:30", "47,80");
var _loop_1 = function (d1) {
    window.addEventListener('DOMContentLoaded', function () {
        document.getElementsByClassName(".todo").innerHTML +=
            "<img src='img/" + locData[d1].img + ".jpg'>"
                + "<h2>" + "cityName: " + locData[d1].b + "</h2>"
                + "<p>" + "Movement Type: " + locData[d1].a + "</p>"
                + "<p>" + "Colour: " + locData[d1].c + "</p>"
                + "<p>" + "List Price New: €" + locData[d1].d + "</p>"
                + "<p>" + "Fuel Type: " + locData[d1].type + "</p>"
                + "<p>" + "Year: " + locData[d1].tele + "</p>"
                + "<p>" + "Seats: " + locData[d1].price + "</p>"
                + "<p>" + "Number of Kilometers: " + locData[d1].eventDate + "</p>";
    }, false);
};
for (var d1 in locData) {
    _loop_1(d1);
}
;
