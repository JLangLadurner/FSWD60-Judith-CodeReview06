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
var All = /** @class */ (function () {
    function All(a, b, c, d, img) {
        this.image = "";
        this.date = a;
        this.cityName = b;
        this.cityZip = c;
        this.cityadd = d;
        this.image = img;
    }
    All.prototype.locInfo = function () {
        return "<img src=\"" + this.image + "\">\n\t\t\t\t<p>Date created: " + this.date + "</p>\n\t\t\t\t<p>Address: " + this.cityadd + "</p>\n\t\t\t\t<p>Zip Code: " + this.cityZip + "</p>";
    };
    return All;
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
    restaurants.prototype.locInfo = function () {
        return _super.prototype.locInfo.call(this) + " <p> Type of Dining: " + this.type + "</p><br>\n\t\t\t\t<p> Type of Dining: " + this.telephonenr + "</p>";
    };
    return restaurants;
}(All));
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(a, b, c, d, img, eventDate, eventTime, Price) {
        var _this = _super.call(this, a, b, c, d, img) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.Price = Price;
        return _this;
    }
    events.prototype.locInfo = function () {
        return _super.prototype.locInfo.call(this) + " <p> Date of Event: " + this.eventDate + "</p><br>\n\t\t\t\t<p> Start: " + this.eventTime + "</p>\n\t\t\t\t<p> Price/Ticket: " + this.Price + "</p>";
    };
    return events;
}(All));
