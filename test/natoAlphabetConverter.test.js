const NatoAlphabetConverter = require("../src/natoAlphabetConverter");

describe("GIVEN an individual letter", () => {
  test.each`
    letter | codeWord
    ${"a"} | ${"Alfa"}
    ${"b"} | ${"Bravo"}
    ${"c"} | ${"Charlie"}
    ${"d"} | ${"Delta"}
    ${"e"} | ${"Echo"}
    ${"f"} | ${"Foxtrot"}
    ${"g"} | ${"Golf"}
    ${"h"} | ${"Hotel"}
    ${"i"} | ${"India"}
    ${"j"} | ${"Juliett"}
    ${"k"} | ${"Kilo"}
    ${"l"} | ${"Lima"}
    ${"m"} | ${"Mike"}
    ${"n"} | ${"November"}
    ${"o"} | ${"Oscar"}
    ${"p"} | ${"Papa"}
    ${"q"} | ${"Quebec"}
    ${"r"} | ${"Romeo"}
    ${"s"} | ${"Sierra"}
    ${"t"} | ${"Tango"}
    ${"u"} | ${"Uniform"}
    ${"v"} | ${"Victor"}
    ${"w"} | ${"Whiskey"}
    ${"x"} | ${"Xray"}
    ${"y"} | ${"Yankee"}
    ${"z"} | ${"Zulu"}
  `(
    "WHEN the letter is $letter, THEN the code word should be $codeWord",
    ({ letter, codeWord }) => {
      expect(new NatoAlphabetConverter().convert(letter)).toStrictEqual(
        codeWord
      );
    }
  );

  test("GIVEN a whole word, WHEN converted, THEN each letter should be converted, with a space in between", () => {
    expect(new NatoAlphabetConverter().convert("Helloword")).toStrictEqual(
      "Hotel Echo Lima Lima Oscar Whiskey Oscar Romeo Delta"
    );
  });
});
