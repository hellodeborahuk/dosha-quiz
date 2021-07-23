import React from "react";
import "./App.css";
import Vata from "./Vata";

function Result({results}) {

      const aCount = results.filter((answer) => answer === "a").length;
      const bCount = results.filter((answer) => answer === "b").length;
      const cCount = results.filter((answer) => answer === "c").length;
      const totals = [
        { label: "a", value: aCount },
        { label: "b", value: bCount },
        { label: "c", value: cCount },
      ];
let dosha;

if (aCount > bCount && aCount > cCount) {
  dosha = <Vata />
  // Vata
} else if (bCount > aCount && bCount > cCount) {
  // Pitta
}
else if (cCount > aCount && cCount > bCount) {
  // Kapha
}
else if (aCount == bCount) {
// Vata Pitta
} else if (bCount == cCount) {
// Pitta Kapha
}
else if (aCount == cCount) {
// Vata Kapha
} else {
  dosha = "You screwed up";
}

      // if a > b && a > c 
// else if b > a && b > c
// else if c > a && c > b
// else if a == b
// else if b == c
// else if a == c
// else alert (you screwed up)

 console.log(totals);
  return (
    <div className="Result">
      <h1>Your dosha is likely to be...</h1>
      {dosha}
    </div>
  );
}

export default Result;
