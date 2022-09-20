const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
const uppercaseAlphabet = alphabet.toUpperCase();
const lowercaseAlphabet = alphabet.toLowerCase();
const letters = uppercaseAlphabet + lowercaseAlphabet;
const alphabetLength = alphabet.length;

const isLowercase = (letter: string) => lowercaseAlphabet.includes(letter);

export {
  alphabet,
  uppercaseAlphabet,
  lowercaseAlphabet,
  letters,
  alphabetLength,
  isLowercase,
};
