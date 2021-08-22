function solve(input) {
    let daysForStay = Number(input[0]);
    let typeOfRoom = input[1];
    let feedback = input[2];
    let nightsForStay = daysForStay - 1;
    let discount = 0;
    let priceForOnePersonRoom = 18;
    let priceForApartment = 25;
    let priceForPresidentApartment = 35;
    let priceWithoutDiscountForOnePersonRoomStay =
      nightsForStay * priceForOnePersonRoom;
    let priceWithoutDiscountForApartment = nightsForStay * priceForApartment;
    let priceWithoutDiscountForPresidentApartment =
      nightsForStay * priceForPresidentApartment;
    let finalPrice = 0;
  
    if (typeOfRoom === "room for one person") {
      if (nightsForStay < 10) {
        discount = 0;
        finalPrice =
          priceWithoutDiscountForOnePersonRoomStay -
          discount * priceWithoutDiscountForOnePersonRoomStay;
      } else if (nightsForStay >= 10 && nightsForStay <= 15) {
        discount = 0;
        finalPrice =
          priceWithoutDiscountForOnePersonRoomStay -
          discount * priceWithoutDiscountForOnePersonRoomStay;
      } else if (nightsForStay > 15) {
        discount = 0;
        finalPrice =
          priceWithoutDiscountForOnePersonRoomStay -
          discount * priceWithoutDiscountForOnePersonRoomStay;
      }
    } else if (typeOfRoom === "apartment") {
      if (nightsForStay < 10) {
        discount = 0.3;
        finalPrice =
          priceWithoutDiscountForApartment -
          discount * priceWithoutDiscountForApartment;
      } else if (nightsForStay >= 10 && nightsForStay <= 15) {
        discount = 0.35;
        finalPrice =
          priceWithoutDiscountForApartment -
          discount * priceWithoutDiscountForApartment;
      } else if (nightsForStay > 15) {
        discount = 0.5;
        finalPrice =
          priceWithoutDiscountForApartment -
          discount * priceWithoutDiscountForApartment;
      }
    } else if (typeOfRoom === "president apartment") {
      if (nightsForStay < 10) {
        discount = 0.1;
        finalPrice =
          priceWithoutDiscountForPresidentApartment -
          discount * priceWithoutDiscountForPresidentApartment;
      } else if (nightsForStay >= 10 && nightsForStay <= 15) {
        discount = 0.15;
        finalPrice =
          priceWithoutDiscountForPresidentApartment -
          discount * priceWithoutDiscountForPresidentApartment;
      } else if (nightsForStay > 15) {
        discount = 0.2;
        finalPrice =
          priceWithoutDiscountForPresidentApartment -
          discount * priceWithoutDiscountForPresidentApartment;
      }
    }
  
    if (feedback === "positive") {
      let finalPriceAfterPositiveFeedback = finalPrice + 0.25 * finalPrice;
      console.log(finalPriceAfterPositiveFeedback.toFixed(2));
    } else if (feedback === "negative") {
      let finalPriceAfterNegativeFeedback = finalPrice - 0.1 * finalPrice;
      console.log(finalPriceAfterNegativeFeedback.toFixed(2));
    }
  }