import Scanner from "./Scanner";
import nestTokens from "./nestToken";

export default function parseTemplateToTokens(templateStr) {
  let tokens = [];

  const scanner = new Scanner(templateStr);
  let words;

  while (!scanner.eos()) {
    words = scanner.scanUntil("{{");
    if (words !== "") {
      tokens.push(["text", words]);
    }
    scanner.scan("{{");

    words = scanner.scanUntil("}}");
    if (words !== "") {
      if (words[0] === "#") {
        tokens.push(["#", words.substring(1)]);
      } else if (words[0] === "/") {
        tokens.push(["/", words.substring(1)]);
      } else {
        tokens.push(["name", words]);
      }
    }
    scanner.scan("}}");
  }

  // 返回折叠收集的tokens
  return nestTokens(tokens);
}
