const chosenPet = "Lulu";

const shelter = {
  dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],
  cats: ["Astrid", "Lulu", "Fluffy", "Mouser"],
  apptMessage: function () {
    console.log(
      "Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend."
    );
  },
};

function dogMessage() {
  const message = `Congrats! ${chosenPet}, a great dog, is available for adoption!`;
  console.log(message);
  shelter.apptMessage();
}

function catMessage() {
  const message = `Congrats! ${chosenPet}, an awesome cat, is available for adoption!`;
  console.log(message);
  shelter.apptMessage();
}

if (shelter.dogs.includes(chosenPet)) {
  dogMessage();
} else if (shelter.cats.includes(chosenPet)) {
  catMessage();
} else {
  const featureDog = shelter.dogs[0];
  const featureCat = shelter.cats[0];
  const message = `Check out our featured dog, ${featureDog}, or our featured cat, ${featureCat}`;

  console.log("It looks like the pet is not available.");
  console.log(message);
}
