function solve(input) {
  let city = input[0];
  let sales = Number(input[1]);
  let commissions = 0;

  if (city === "Sofia") {
    if (sales >= 0 && sales <= 500) {
      commissions = sales * 0.05;
      console.log(commissions.toFixed(2));
    } else if (sales > 500 && sales <= 1000) {
      commissions = sales * 0.07;
      console.log(commissions.toFixed(2));
    } else if (sales > 1000 && sales <= 10000) {
      commissions = sales * 0.08;
      console.log(commissions.toFixed(2));
    } else if (sales > 10000) {
      commissions = sales * 0.12;
      console.log(commissions.toFixed(2));
    } else {
      console.log(`error`);
    }
  } else if (city === "Plovdiv") {
    if (sales >= 0 && sales <= 500) {
      commissions = sales * 0.055;
      console.log(commissions.toFixed(2));
    } else if (sales > 500 && sales <= 1000) {
      commissions = sales * 0.08;
      console.log(commissions.toFixed(2));
    } else if (sales > 1000 && sales <= 10000) {
      commissions = sales * 0.12;
      console.log(commissions.toFixed(2));
    } else if (sales > 10000) {
      commissions = sales * 0.145;
      console.log(commissions.toFixed(2));
    } else {
      console.log(`error`);
    }
  } else if (city === "Varna") {
    if (sales >= 0 && sales <= 500) {
      commissions = sales * 0.045;
      console.log(commissions.toFixed(2));
    } else if (sales > 500 && sales <= 1000) {
      commissions = sales * 0.075;
      console.log(commissions.toFixed(2));
    } else if (sales > 1000 && sales <= 10000) {
      commissions = sales * 0.1;
      console.log(commissions.toFixed(2));
    } else if (sales > 10000) {
      commissions = sales * 0.13;
      console.log(commissions.toFixed(2));
    } else {
      console.log(`error`);
    }
  } else {
    console.log(`error`);
  }
}
solve(["Kaspichan", "-50"]);
