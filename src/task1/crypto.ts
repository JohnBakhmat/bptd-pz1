import {
  letters,
  isLowercase,
  lowercaseAlphabet,
  uppercaseAlphabet,
  alphabetLength,
} from "../shared";

const proceed = (text: string, key: number, isEncode: boolean) => {
  const splited = text.split("");
  const encoded = splited.map((char) => {
    if (!letters.includes(char)) {
      return char;
    }
    const shift = isEncode ? key : -key;

    const isLower = isLowercase(char);
    const alphabet = isLower ? lowercaseAlphabet : uppercaseAlphabet;
    const charIndex = alphabet.lastIndexOf(char);
    const encodedIndex = (charIndex + shift) % alphabetLength;
    const encodedChar = alphabet.at(encodedIndex);
    return encodedChar;
  });
  return encoded.join("");
};

export const getEncoder = (key: number) => (textToEncode: string) => {
  return proceed(textToEncode, key, true);
};
export const getDecoder = (key: number) => (textToDecode: string) => {
  return proceed(textToDecode, key, false);
};
