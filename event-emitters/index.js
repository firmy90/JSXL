const TicketManager = require("./ticketManager");
const EmailService = require("./emailService");
const DatabaseService = require("./databaseService");

const ticketManager = new TicketManager(2);
const emailService = new EmailService();
const databaseService = new DatabaseService();

const onBuy = () => {
  console.log("Niebawem usuniemy ten listener");
  ticketManager.off("buy", onBuy);
};

ticketManager.on("buy", (email, price, timestamp) => {
  emailService.send(email);
  databaseService.save(email, price, timestamp);
});

ticketManager.on("buy", onBuy);
ticketManager.on("error", (error) => {
  console.log(error.message);
});



console.log(
  `Mamy ${ticketManager.listenerCount("buy")} listenerów na zdarzenie buy`
);
console.log(
  `Mamy ${ticketManager.listenerCount("error")} listenerów na zdarzenie error`
);

ticketManager.buy2("mail@gmail.com", 22.5);
ticketManager.buy2("mail@gmail.com", 22.5);

ticketManager.removeAllListeners('buy'); //usuwanie wszystkich listenerow
console.log(
  `Mamy ${ticketManager.listenerCount("buy")} listenerów na zdarzenie buy`
);
console.log(
  `Mamy ${ticketManager.listenerCount("error")} listenerów na zdarzenie error`
);