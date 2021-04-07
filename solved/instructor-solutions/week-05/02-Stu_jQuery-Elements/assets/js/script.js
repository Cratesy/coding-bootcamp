const h1Element = $("<h1>")
  .text(
    "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
  )
  .attr("class", "fancy");

const pElement = $("<p>").text("~ Carol Dweck").attr("class", "plain");

$("#root").append([h1Element, pElement]);
