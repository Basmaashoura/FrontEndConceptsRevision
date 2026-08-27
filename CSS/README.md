# What is CSS?
**Cascading Style Sheets** (**CSS**) is a [stylesheet](https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet) language used to describe the presentation of a document written in [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) or [XML](https://developer.mozilla.org/en-US/docs/Web/XML/Guides/XML_introduction) (including XML dialects such as [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG), [MathML](https://developer.mozilla.org/en-US/docs/Web/MathML) or [XHTML](https://developer.mozilla.org/en-US/docs/Glossary/XHTML)). ***CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.***

# Why do we need CSS? 
Without it, ***HTML would only handle structure/content*** — no way to control layout, colors, fonts, spacing, or responsiveness. ***CSS separates presentation from content***, so you can restyle a whole site without touching the HTML.

# When do we need CSS? 
Whenever you're ***building anything visual for the web*** — a webpage, web app, or any HTML/XML-based document that needs specific look and feel, layout, or responsive behavior across devices.

# Where do we use CSS?
Three ways to apply it:
- **Inline** — `style="color:red;"` directly on an HTML tag
- **Internal** — inside a `<style>` tag in the HTML `<head>`
- **External** — a separate `.css` file linked via `<link rel="stylesheet" href="style.css">` (most common/maintainable)

# How to use CSS?
Basic syntax: a **selector** targets HTML elements, and a block of **declarations** (property: value pairs) styles them.

```css
selector {
  property: value;
}

/* example */
h1 {
  color: navy;
  font-size: 24px;
}

.card {
  padding: 16px;
  border-radius: 8px;
}

#header {
  background-color: #f0f0f0;
}
```

- `selector` can be a tag name (`h1`), class (`.card`), ID (`#header`), or more complex combinators.
- Rules cascade — later/more specific rules override earlier/less specific ones (hence "Cascading").