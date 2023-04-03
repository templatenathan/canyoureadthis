const letterToCodeWord = {
  a: "Alfa",
  b: "Bravo",
  c: "Charlie",
  d: "Delta",
  e: "Echo",
  f: "Foxtrot",
  g: "Golf",
  h: "Hotel",
  i: "India",
  j: "Juliett",
  k: "Kilo",
  l: "Lima",
  m: "Mike",
  n: "November",
  o: "Oscar",
  p: "Papa",
  q: "Quebec",
  r: "Romeo",
  s: "Sierra",
  t: "Tango",
  u: "Uniform",
  v: "Victor",
  w: "Whiskey",
  x: "Xray",
  y: "Yankee",
  z: "Zulu",
};

const punctuation = new Set([",", ".", "!", "?"]);

class NatoAlphabetConverter {
  convert(word) {
    return word.split("").map(this.convertLetter).join(" ");
  }

  convertLetter(letter) {
    if (punctuation.has(letter)) {
      return letter;
    } else {
      return letterToCodeWord[letter.toLowerCase()];
    }
  }
}

module.exports = NatoAlphabetConverter;
