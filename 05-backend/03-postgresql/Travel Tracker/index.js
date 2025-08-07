import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "World",
  password: "postgres",
  port: 5432,
});
db.connect(); // Connect once

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Set view engine
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const result = await db.query("SELECT country_code FROM visited_countries");
    const countries = result.rows.map(row => row.country_code.trim());
    res.render("index.ejs", { countries: countries, total: countries.length });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Something went wrong.");
  }
});
app.post("/add", async (req, res) => {
  const input = req.body["country"];

  const result = await db.query(
    "SELECT country_code FROM countries WHERE country_name = $1",
    [input]
  );

  if (result.rows.length !== 0) {
    const data = result.rows[0];
    const countryCode = data.country_code;

    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
      countryCode,
    ]);
    res.redirect("/");
  }
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
