# Front-End Concepts Revision

This repo is meant to gather **-deep dive-** info about frontend core concepts, starting from HTML to CSS and JS, then **frameworks** and libraries. It would be handy for interview revision and overall revision.

### Thinking Methodology
You should discuss the planning and design work you have to do for your website before writing code, including:
1. **What is your website about?** 
2. **What information are you presenting on the subject?**
3. **What does your website look like?

##### HTML (**H**yper**T**ext **M**arkup **L**anguage) is the code that is used to structure a web page and its content.
HTML is a _markup language_ consisting of a series of **[elements](https://developer.mozilla.org/en-US/docs/Glossary/Element)**(**Elements and [tags](https://developer.mozilla.org/en-US/docs/Glossary/Tag) are _not_ the same things. Tags begin or end an element in source code, whereas elements are part of the [DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM)**) used to wrap (or enclose) text content to define its structure and cause it to behave in a certain way.

* `<html></html>`: The [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/html) element wraps all the content on the entire page and is sometimes known as the **root element**. It also includes the `lang` [attribute](https://developer.mozilla.org/en-US/docs/Glossary/Attribute), which sets the primary language of the document.
* `<head></head>`: The [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/head) element acts as a container for all the stuff you want to include on the HTML page that _isn't_ the content you are showing to your page's viewers.
*  the `alt` attribute in `img` tag is to specify descriptive text for users who cannot see the image, possibly because of the following reasons:
	1. They are visually impaired. Users with significant visual impairments often use tools called screen readers to read out the alt text to them.
	2. Something has gone wrong, causing the image not to display.
* elements with no closing tag are called **empty/void elements.**

###### JavaScript
* JavaScript is a programming language that adds interactivity to websites.
* is a full-fledged programming language — it contains all the classic programming features in other programming languages such as **variables**, **loops**, and **functions**.
* JavaScript, when used on web pages (though it can also be used in other places), generally works by:
	* **Getting references to one or more values** such as numbers or to elements on the page.
		- **Doing something with those values**, such as adding the numbers together.
		- **Returning a result that can be used to do something else later on**. For example, you might want to display the sum of those numbers on the page.
-  **HTML DOM API** is made up of the interfaces that define the functionality of each of the elements in HTML, functional areas included in the HTML DOM API include:
	- Access to and control of HTML elements via the DOM.
	- Access to and manipulation of form data.
	- Interacting with the contents of 2D images and the context of an HTML <canvas>, for example to draw on top of them.
	- Management of media connected to the HTML media elements (<audio> and <video>).
	- Dragging and dropping of content on webpages.
	- Access to the browser navigation history
	- Supporting and connective interfaces for other APIs such as Web Components, Web Storage, Web Workers, WebSocket, and Server-sent events.