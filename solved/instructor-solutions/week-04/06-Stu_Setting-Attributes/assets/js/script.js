const site1El = document.querySelector(".site1");
const site2El = document.querySelector(".site2");
const site3El = document.querySelector(".site3");

const heading1 = site1El.children[0];
heading1.textContent = "Site 1";

const link1 = site1El.children[1];
link1.setAttribute("href", "https://google.com");

const image1 = link1.children[0];
image1.setAttribute("src", "assets/images/image_1.jpg");
image1.setAttribute("alt", "man working");
image1.setAttribute("style", "padding:10px;");

const heading2 = site2El.children[0];
heading2.textContent = "Site 2";

const link2 = site2El.children[1];
link2.setAttribute("href", "https://twitter.com");

const image2 = link2.children[0];
image2.setAttribute("src", "assets/images/image_2.jpg");
image2.setAttribute("alt", "group brainstorm");
image2.setAttribute("style", "padding:10px;");

const heading3 = site3El.children[0];
heading3.textContent = "Site 3";

const link3 = site3El.children[1];
link3.setAttribute("href", "https://instagram.com");

const image3 = link3.children[0];
image3.setAttribute("src", "assets/images/image_3.jpg");
image3.setAttribute("alt", "women working");
image3.setAttribute("style", "padding:10px;");

const allHeadings = document.querySelectorAll("h4");

allHeadings.forEach((heading) => {
  // heading.setAttribute(
  //   'style',
  //   'color:blue;font-size:30px;font-weight:bold;padding-left:10px;margin:0;'
  // );
  heading.setAttribute("class", "title");
});
