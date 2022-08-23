let terminators = [
  {
    shipName: "Terminator",
    Hull: 20,
    firePower: 5,
    accuracy: 0.7,
    // get shipName() {
    //     return this.shipName;
    // },
    // /*
    //  * @param {any} value
    //  */
    // set shipName(value) {
    //     this.shipName = value;
    // },
    // this.shipName: 'Terminator';
    // this.hull = Math.floor(Math.random() * 4) + 3;
    // this.firepower = Math.floor(Math.random() * 3) + 2;
    // this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10,
  },

  {
    shipName: "Terminator2",
    Hull: 20,
    firePower: 5,
    accuracy: 0.7,
  },
];

let alienShips = [
  {
    shipName: "Alien1",
    Hull: Math.random() * (6 - 3) + 3,
    firePower: Math.random() * (4 - 2) + 2,
    accuracy: Math.random() * (0.8 - 0.6) + 0.6,
  },

  {
    shipName: "Alien2",
    Hull: Math.random() * (6 - 3) + 3,
    firePower: Math.random() * (4 - 2) + 2,
    accuracy: Math.random() * (0.8 - 0.6) + 0.6,
  },
  {
    shipName: "Alien3",
    Hull: Math.random() * (6 - 3) + 3,
    firePower: Math.random() * (4 - 2) + 2,
    accuracy: Math.random() * (0.8 - 0.6) + 0.6,
  },
  {
    shipName: "Alien4",
    Hull: Math.random() * (6 - 3) + 3,
    firePower: Math.random() * (4 - 2) + 2,
    accuracy: Math.random() * (0.8 - 0.6) + 0.6,
  },
  {
    shipName: "Alien5",
    Hull: Math.random() * (6 - 3) + 3,
    firePower: Math.random() * (4 - 2) + 2,
    accuracy: Math.random() * (0.8 - 0.6) + 0.6,
  },
  {
    shipName: "Alien6",
    Hull: Math.random() * (6 - 3) + 3,
    firePower: Math.random() * (4 - 2) + 2,
    accuracy: Math.random() * (0.8 - 0.6) + 0.6,
  },
];

function ship1Attk(x, y) {
  if (Math.random() < x.accuracy) {
    y.Hull = y.Hull - x.firePower;
    console.log(x.shipName + " MISS " + y.shipName);
  } else {
    console.log(x.shipName + " MISS " + y.shipName);
  }
}
function ship2Attk(ship1, ship2) {
  if (Math.random() < ship2.accuracy) {
    ship1.Hull = ship1.Hull - ship2.firePower;
    console.log(ship2.shipName + " HIT! " + ship1.shipName);
  } else {
    console.log(ship2.shipName + " MISS " + ship1.shipName);
  }
}
function vs(ship1, ship2) {
  do {
    ship1Attk(ship1, ship2);
    //ship2Attk();
  } while (ship1.Hull > 0 && ship2.Hull > 0);
}

for (let i = 0; i < alienShips.length; i++) {
  if (terminators[0].Hull <= 0 && alienShips[i].Hull > 0) {
    console.log("Your ship has been destroyed");
  } else {
    vs(terminators[0], alienShips[i]);
  }
}
if (terminators[0].Hull > 0 && alienShips[0].Hull <= 0) {
  console.log("Continue? Y/N");
}
