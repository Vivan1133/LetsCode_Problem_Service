const marked = require("marked");
const sanitizeHtmlLib = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {
    const turndownService = new TurndownService();

    
    
    // convert markdown content to html
    const convertedHtml = marked.parse(markdownContent);

    

    // sanitize html
    const sanitizedHtml = sanitizeHtmlLib(convertedHtml, {
        allowedTags: sanitizeHtmlLib.defaults.allowedTags
    });

    // convert back from html to markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    return sanitizedMarkdown;

}

module.exports = sanitizeMarkdownContent;