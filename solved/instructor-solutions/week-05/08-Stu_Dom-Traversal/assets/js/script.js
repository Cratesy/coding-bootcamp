const rootEl = $("#root");

// rootEl.find("li").css("background-color", "#ffffff");
rootEl.find("li").addClass("tiles");

rootEl.children().last().children().first().text("O");

$(".item-b3")
  .closest("main")
  .children("ul")
  .first()
  .children("li")
  .first()
  .text("O");
