import testData from "./testData.json";

import { getEncoder, getDecoder } from "../task2/crypto";

testData.forEach((testCase, i) => {
  // const encoder = getEncoder(testCase.key);
  const decoder = getDecoder(testCase.key, true);

  const text = decoder(testCase.text);

  console.log(text);
});
