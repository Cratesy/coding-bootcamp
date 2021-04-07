console.log(this);

function helloThis() {
  console.log("Inside this function, this is " + this);
}

const child = {
  age: 10,
  ageTenYears: function () {
    // const helloThis = function () {
    //   console.log("Inside this function, this is " + this);
    // };
    console.log(this.age + 10);
    // helloThis();
  },
};

const investor = {
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
      // helloThis();
    },
  },
};

child.ageTenYears();
investor.investment.investmentGrowth();
