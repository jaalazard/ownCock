const database = require("../../database");

const getCocktails = (req, res) => {
  let sql = "select * from cocktail";
  const sqlValues = [];

  if (req.query.name != null) {
    sql += ` ${sqlValues.length < 1 ? "where name LIKE ?" : "and name LIKE ?"}`;
    sqlValues.push(`%${req.query.name}%`);
}

  if (req.query.total_calories != null) {
    sql += ` ${sqlValues.length < 1 ? "where total_calories = ?" : "and total_calories = ?"}`;
    sqlValues.push(req.query.total_calories);
  }

  if (req.query.total_degree != null) {
    sql += ` ${sqlValues.length < 1 ? "where total_degree = ?" : "and total_degree = ?"}`;
    sqlValues.push(req.query.total_degree);
  }

  if (req.query.author != null) {
    sql += ` ${sqlValues.length < 1 ? "where author = ?" : "and author = ?"}`;
    sqlValues.push(req.query.author);
  }

  if (req.query.total_rating != null) {
    sql += ` ${sqlValues.length < 1 ? "where total_rating = ?" : "and total_rating = ?"}`;
    sqlValues.push(req.query.total_rating);
  }

  if (req.query.glass_id != null) {
    sql += ` ${sqlValues.length < 1 ? "where glass_id = ?" : "and glass_id = ?"}`;
    sqlValues.push(req.query.glass_id);
  }

  if (req.query.flavour_id != null) {
    sql += ` ${sqlValues.length < 1 ? "where flavour_id = ?" : "and flavour_id = ?"}`;
    sqlValues.push(req.query.flavour_id);
  }

  if (req.query.topping_id != null) {
    sql += ` ${sqlValues.length < 1 ? "where topping_id = ?" : "and topping_id = ?"}`;
    sqlValues.push(req.query.topping_id);
  }

  if (req.query.aspect_id != null) {
    sql += ` ${sqlValues.length < 1 ? "where aspect_id = ?" : "and aspect_id = ?"}`;
    sqlValues.push(req.query.aspect_id);
  }

  if (req.query.type_id != null) {
    sql += ` ${sqlValues.length < 1 ? "where type_id = ?" : "and type_id = ?"}`;
    sqlValues.push(req.query.type_id);
  }

  if (req.query.total_duration != null) {
    sql += ` ${sqlValues.length < 1 ? "where total_duration = ?" : "and total_duration = ?"}`;
    sqlValues.push(req.query.total_duration);
  }

  if (req.query.total_complexity != null) {
    sql += ` ${sqlValues.length < 1 ? "where total_complexity = ?" : "and total_complexity = ?"}`;
    sqlValues.push(req.query.total_complexity);
  }

  database.query(sql, sqlValues)
    .then(([cocktails]) => {
      res.json(cocktails);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getCocktailById = (req, res) => {
  const id = parseInt(req.params.id);
  database
    .query("select * from cocktail where id = ?", [id])
    .then(([cocktails]) => {
      if (cocktails[0] != null) {
        res.json(cocktails[0]);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getCocktails,
  getCocktailById,
};
