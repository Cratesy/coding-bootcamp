DROP DATABASE IF EXISTS top_songsDB;
CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE Top5000(
  id INT NOT NULL AUTO_INCREMENT,
  artist VARCHAR(50) NOT NULL,
  song_title VARCHAR(100) NOT NULL,
  year_of_release INT NOT NULL,
  total_sales DECIMAL (5,2),
  total_usa DECIMAL (5,2),
  total_uk DECIMAL (5,2),
  total_eur DECIMAL (5,2),
  total_rest_of_world DECIMAL (5,2),
  PRIMARY KEY (id)
);

-- SELECT * FROM Top5000 WHERE artist="Eminem";
-- SELECT COUNT(*) as occurences FROM Top5000 GROUP BY artist HAVING COUNT(*) > 1;
-- SELECT * FROM Top5000 WHERE year_of_release BETWEEN 1995 AND 2000;
-- SELECT * FROM Top5000 WHERE song_title LIKE "%fast%";