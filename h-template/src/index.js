import parseTemplateToTokens from "./parseTemplateToTokens";

window.HTemplate = {
  render(templateStr, data) {
    console.log(templateStr);
    const tokens = parseTemplateToTokens(templateStr);
    console.log(tokens);
  },
};
