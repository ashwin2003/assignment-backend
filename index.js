const app = require("./server");

const { PORT } = process.env;

const server = app.listen(PORT || 5000, () => {
  console.log(`Server running at port ${PORT}`);
});
