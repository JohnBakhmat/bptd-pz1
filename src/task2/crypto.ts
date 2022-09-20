import {
  isLowercase,
  lowercaseAlphabet,
  uppercaseAlphabet,
  letters,
} from "../shared";

export const getKey = (text: string, key: string) => {
  const keySlice = key
    .repeat(Math.ceil(text.length / key.length))
    .slice(0, text.length)
    .toUpperCase();

  let result = "";
  let j = 0;
  for (let i = 0; i < text.length; i++) {
    if (!letters.includes(text[i])) {
      result += text[i];
    } else {
      result += keySlice[j];
      j++;
    }
  }
  return result;
};
const proceed = (
  text: string,
  key: string,
  isEncode: boolean,
  isCaseSensetive: boolean
) => {
  const keySlice = getKey(text, key);
  const splited = text.split("");

  const shiftDirection = isEncode ? 1 : -1;
  const encoded = splited.map((letter, i) => {
    if (!letters.includes(letter)) {
      return letter;
    }
    const letterIndex = uppercaseAlphabet.indexOf(letter.toUpperCase());
    const keyLetterIndex = uppercaseAlphabet.indexOf(keySlice[i]);
    const encodedIndex =
      (letterIndex + keyLetterIndex * shiftDirection) %
      uppercaseAlphabet.length;

    if (isCaseSensetive)
      return isLowercase(letter)
        ? lowercaseAlphabet.at(encodedIndex)
        : uppercaseAlphabet.at(encodedIndex);
    else return lowercaseAlphabet.at(encodedIndex);
  });
  return encoded.join("");
};
export const getEncoder =
  (key: string, isCaseSensetive: boolean = false) =>
  (textToEncode: string) => {
    return proceed(textToEncode, key, true, isCaseSensetive);
  };

export const getDecoder =
  (key: string, isCaseSensetive: boolean = false) =>
  (textToDecode: string) => {
    return proceed(textToDecode, key, false, isCaseSensetive);
  };
