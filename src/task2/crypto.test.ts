import { test, expect } from "@playwright/test";
const { describe } = test;
import { getEncoder, getDecoder, getKey } from "./crypto";

import testCases from "./testData.json";

describe("Task 2 tests", () => {
  testCases.forEach(async (testCase, i) => {
    test(`Test case: ${i}`, () => {
      const { key, decoded, encoded } = testCase;
      const encoder = getEncoder(key);
      const decoder = getDecoder(key);
      expect(encoder(decoded)).toStrictEqual(encoded);
      expect(decoder(encoded)).toStrictEqual(decoded.toLowerCase());
    });
  });
});
