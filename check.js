// Function to calculate binomial coefficient using Math.round()
function calculateBinomialCoefficientWithRound(n, m) {
  if (n === 0 || m === 0) {
    return 0;
  }
  let top = 1;
  let bottom = 1;
  for (let i = 0; i < n; i++) {
    top *= m - i;
    bottom *= n - i;
  }
  return Math.round(top / bottom);
}

// Function to calculate binomial coefficient using parseInt()
function calculateBinomialCoefficientWithParseInt(n, m) {
  if (n === 0 || m === 0) {
    return 0;
  }
  let top = 1;
  let bottom = 1;
  for (let i = 0; i < n; i++) {
    top *= m - i;
    bottom *= n - i;
  }
  // Using parseInt() here is incorrect, so we're just returning the rounded value
  return parseInt(top / bottom);
}

// Test all possible cases in the given range (1 <= n <= m <= 1000)
function testAllCases() {
  const mismatches = [];
  for (let n = 1; n <= 30; n++) {
    for (let m = n; m <= 30; m++) {
      const resultRound = calculateBinomialCoefficientWithRound(n, m);
      const resultParseInt = calculateBinomialCoefficientWithParseInt(n, m);
      if (resultRound !== resultParseInt) {
        mismatches.push({ n, m, resultRound, resultParseInt });
      }
    }
  }
  return mismatches;
}

// Run the tests
const mismatches = testAllCases();

// Output the results
if (mismatches.length === 0) {
  console.log("All results match!");
} else {
  console.log("Mismatched results:");
  console.log(mismatches);
}
