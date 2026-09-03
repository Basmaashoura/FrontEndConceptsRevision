```css title:redText
p {
  color: red;
}
``` 
* `p` is called a **selector** — it selects the element(s) to style.
* line inside the curly braces (`{ }`) is called a **declaration** – it sets a value for a specific property.
* the **property** is `color`, which controls the text color of the paragraphs, and the **property value** set is `red`.
* The whole structure is called a **ruleset**. (The term _ruleset_ is often referred to as just _rule_.)
* multiple selectors would be included in one rule, separating them by commas.

### The BOX MODEL
3 main properties of the box:
* **padding:** The space around the content. In the previous example, it is the space around the paragraph text.
* **border:** The solid line just outside the padding.
* **margin:** The space outside the border.


***The `<body>` element is a block element, meaning it takes up space on the page and can accept margin, padding, and other box properties.***

 `<img>` (image) elements, on the other hand, are **inline** elements: by default, they don't accept margin values in the same way block elements do. For the auto-margin trick to work on this image, we must give it block-level behavior by using `display: block;`.