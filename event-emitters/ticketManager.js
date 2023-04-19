const EventEmitter = require("events");

class TicketManager extends EventEmitter {
  constructor(supply) {
    super();
    this.supply = supply;
  }

  buy(email, price) {
    console.log("Kupowanie biletu w metodzie buy");
    this.supply--;
    this.emit("buy", email, price, Date.now());
    console.log("Kupiono bilet w metodzie buy i zostało ich: " + this.supply);
  }

  buy2(email, price) {
    console.log("Kupowanie biletu w metodzie buy");
    if (this.supply > 0) {
      this.supply--;
      this.emit("buy", email, price, Date.now());
      console.log("Kupiono bilet w metodzie buy i zostało ich: " + this.supply);
      return; //undefined
    }
    this.emit("error", new Error("Brak biletów"));
  }
}

module.exports = TicketManager;
