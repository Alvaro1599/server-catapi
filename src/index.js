const app = require('./app');

app.listen(app.get("PORT"), () => {
  console.log(`App listening on port ${app.get("PORT")}`);
})