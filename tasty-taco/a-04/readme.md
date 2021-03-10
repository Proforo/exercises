
# Exercise A-04: Anchors & attributes

The navigation of this document will include a number of anchors. In HTML, at the top of the `<body>`, write anchors that meet the criteria outlined in point form below. As these anchor will eventually be structured, it is sufficient to simply list one `<a>` element per line. 

Write HTML for the following anchors, where the bolded word is the anchors text, and the description outlines where this anchor's `href=""` attribute will direct the browser:

- **Home**: Pointing to the website's root domain name will load up the site's home page (usually the file named `index.html`). This can be done using the full website path, or more simply, but just using only the forward-slash (`/`) as the path
- **Menu**: As this is the menu page itself, it should simply link back to the top of this document. This can be achieved by setting the `href` path to simply the hashtag (`#`) character
- The following three links should point to the three `<h2>` elements respectively, so that the browser will scroll that element to the top of the browser's viewport (or as high as it can go, if near the bottom of the page). For each, you will both write the appropriate anchor, as well as add the `id=""` attribute to the matching heading
   - **Starters**: Point this link to an element with `id="starters"`
   - **Tacos**: Point this link to an element with `id="tacos"`
   - **Dessert**: Point this link to an element with `id="dessert"`
- **About**: To point to other documents within the project's root folder, you can simply provide the filename of the destination page. Although we won't be building the "About" page, direct this anchor to a hypothetical future web page named `about.html`
- **Contact**: Rather than simply linking this to `contact.html`, let's setup this anchor to request your computer's default mail client and begin composing an email. To do so, set the `href=""` attribute to the value: `youremail@address.com` (replacing this email address with your email address)
   - Try changing the `href` value to `youremail@address.com?subject=hello&body=world`, which will begin composing the email, pre-filling the email's subject with *"hello"* and the body of the email with *"world"*
- **Extra**: This will not be part of the page, but just for practice, let's link to an absolute path. Create another anchor, setting the `href=""` to the location of a page with documentation on the anchor element: `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a`

**Note** that when testing each link, you may be redirect away and have difficulty returning. If the browser's "back" button is not directing you, try right-clicking the new page and using the "Back" option at the top of the right-click menu.
