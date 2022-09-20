import { test, expect } from "@playwright/test";
const { describe } = test;

import { getEncoder, getDecoder } from "../task2/crypto";

import testCases from "./testData.json";
describe("Task 3 tests", () => {
  testCases.forEach(async (testCase, i) => {
    test(`Test case: ${i}`, () => {
      const { key, text, startsWith } = testCase;
      const decoder = getDecoder(key);
      expect(decoder(text)).toContain(startsWith.toLowerCase());
    });
  });
});
