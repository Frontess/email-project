const fs = require("fs");
const juice = require("juice");

function inlineStyles(htmlFile, cssFile, outputFile) {
  const htmlContent = fs.readFileSync(htmlFile, "utf8");
  const cssContent = fs.readFileSync(cssFile, "utf8");
  const inlinedHtml = juice.inlineContent(htmlContent, cssContent);

  fs.writeFileSync(outputFile, inlinedHtml, "utf8");
  console.log("Стили успешно встроены!");
}
