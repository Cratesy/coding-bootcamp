const nodejs = {
  name: "Node.js",
  type: "JavaScript runtime environment",
};

// const name = nodejs.name;
// const type = nodejs.type;

const { name, type } = nodejs;

const { name: myName } = nodejs;

console.log(name);
console.log(type);
console.log(myName);

const js = {
  name: "JavaScript",
  type: "programming language",
  version: "ES6",
  tools: {
    frameworks: {
      framework1: "AngularJS",
      framework2: "Vue.js",
    },
    libraries: {
      library1: "jQuery",
      library2: "React",
    },
  },
};

// const {
//   tools: {
//     frameworks: { framework1, framework2 },
//   },
// } = js;

const { framework1, framework2 } = js.tools.frameworks;

console.log(framework1);
console.log(framework2);

const languages = ["HTML", "CSS", "JavaScript"];

const [markup, style, scripting] = languages;

console.log(markup, style, scripting);
console.log(markup);
