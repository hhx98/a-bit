import parseTemplateToTokens from "./parseTemplateToTokens";
import renderTemplate from "./renderTemplate";
import lookup from "./lookup";

window.HTemplate = {
  render(templateStr, data) {
    console.log(templateStr);
    const tokens = parseTemplateToTokens(templateStr);
    // console.log(tokens);

    const domStr = renderTemplate(tokens, data);
    // console.log(domStr);

    return domStr;
  },
};
