import { getEncoder, getDecoder } from "./crypto";
import { test, expect } from "@playwright/test";
const { describe } = test;

import testCases from "./testData.json";
describe("Task 1 tests", () => {
  testCases.forEach((testCase, i) => {
    test(`Test case: ${i}`, async () => {
      const { key, decoded, encoded } = testCase;
      const encoder = getEncoder(key);
      const decoder = getDecoder(key);
      expect(encoder(decoded)).toBe(encoded);
      expect(decoder(encoded)).toBe(decoded);
    });
  });
});

export {};
