import express from "express";

const app = express();
app.use(express.json());

app.get("/expense", (req, res) => {
  console.log("Get all expenses");
  res.send([
    {
      id: 1,
      amount: 1500,
      description: "Purchased a keyboard",
      date: "2024-09-24",
    },
    {
      id: 2,
      amount: 800,
      description: "Purchased an optical mouse",
      date: "2024-09-24",
    },
  ]);
});

app.get("/expense/:id", (req, res) => {
  console.log("Get the expense with id: " + req.params.id);

  res.send({
    id: 1,
    amount: 1500,
    description: "Purchased a keyboard",
    date: "2024-09-24",
  });
});

app.post("/expense", (req, res) => {
  console.log("Add expense: ");
  console.log(req.body);
  res.sendStatus(200);
});

app.put("/expense/:id", (req, res) => {
  console.log("Update the expense with id: " + req.params.id);
  console.log(req.body);
  res.sendStatus(200);
});

app.delete("/expense/:id", (req, res) => {
  console.log("Delete the expense with id: " + req.params.id);
  res.sendStatus(200);
});

app.get("/income", (req, res) => {
  console.log("Get all income");
  res.send([
    {
      id: 1,
      amount: 1500,
      description: "reveived pocket money",
      date: "2024-09-24",
    },
    {
      id: 2,
      amount: 800,
      description: "received my selary",
      date: "2024-09-24",
    },
  ]);
});

app.get("/income/:id", (req, res) => {
  console.log("Get the income with id: " + req.params.id);

  res.send({
    id: 1,
    amount: 1500,
    description: "get salary",
    date: "2024-09-24",
  });
});

app.post("/income", (req, res) => {
  console.log("Add income: ");
  console.log(req.body);
  res.sendStatus(200);
});

app.put("/income/:id", (req, res) => {
  console.log("Update the income with id: " + req.params.id);
  console.log(req.body);
  res.sendStatus(200);
});

app.delete("/income/:id", (req, res) => {
  console.log("Delete the income with id: " + req.params.id);
  res.sendStatus(200);
});


app.listen(3020, function () {
  console.log("Server is running on port 3020");
});
