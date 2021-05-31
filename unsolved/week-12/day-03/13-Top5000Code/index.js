const DB = require("./db/DB");

const init = async () => {
  const db = new DB("top_songsDB");

  await db.start();

  const query1 = await db.parameterisedQuery(
    "SELECT * FROM ?? WHERE ??=?",
    ["Top5000", "artist", "Eminem"],
    true
  );

  console.table(query1);

  const query2 = await db.parameterisedQuery(
    "SELECT COUNT(*) as ?? FROM ?? GROUP BY ?? HAVING COUNT(*) > 1",
    ["occurrences", "Top5000", "artist"],
    true
  );

  console.table(query2);

  const query3 = await db.parameterisedQuery(
    "SELECT * FROM ?? WHERE ?? BETWEEN ? AND ?",
    ["Top5000", "year_of_release", 1995, 1995],
    true
  );

  console.table(query3);

  const query4 = await db.parameterisedQuery(
    "SELECT * FROM ?? WHERE ?? LIKE ?",
    ["Top5000", "song_title", "%fast%"],
    true
  );

  console.table(query4);

  await db.end();
};

init();

/**
-- SELECT * FROM Top5000 WHERE artist="Eminem";
-- SELECT COUNT(*) as occurences FROM Top5000 GROUP BY artist HAVING COUNT(*) > 1;
-- SELECT * FROM Top5000 WHERE year_of_release BETWEEN 1995 AND 2000;
-- SELECT * FROM Top5000 WHERE song_title LIKE "%fast%";
 */
