function signCheck(a, b, c) {
  let result = "";

  if (a > 0 && b > 0) {
    if (c > 0) {
      result = "Positive";
    } else if (c < 0) {
      result = "Negative";
    }
  } else if (a > 0 && b < 0) {
    if (c > 0) {
      result = "Negative";
    } else if (c < 0) {
      result = "Positive";
    }
  } else if (a < 0 && b > 0) {
    if (c > 0) {
      result = "Negative";
    } else if (c < 0) {
      result = "Positive";
    }
  } else if (a < 0 && b < 0) {
    if (c > 0) {
      result = "Positive";
    } else if (c < 0) {
      result = "Negative";
    }
  }
  console.log(result);
}
signCheck(-1, -2, -3);
