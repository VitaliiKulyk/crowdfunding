import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Hello from test endpoint");
});

router.get("/", (req, res) => {
  const mockResponce = [
    {
      id: "iufeiufbiebi3",
      name: "United 24",
      description:
        "The campaign should be marked as fraud, if a Partner Authority Service calls our system API (named MarkDonatorAsFraud - we should implement this API) with the nickname of Donator.",
      goal: 500,
      currentAmount: 20,
      status: "active",
    },
    {
      id: "iufeiufbiebi3",
      name: "United 25",
      description:
        "The campaign should be marked as fraud, if a Partner Authority Service calls our system API (named MarkDonatorAsFraud - we should implement this API) with the nickname of Donator.",
      goal: 10000,
      currentAmount: 5455,
      status: "active",
    },
    {
      id: "iufeiufbiebi3",
      name: "United 26",
      description:
        "The campaign should be marked as fraud, if a Partner Authority Service calls our system API (named MarkDonatorAsFraud - we should implement this API) with the nickname of Donator.",
      goal: 500,
      currentAmount: 450,
      status: "active",
    },
    {
      id: "iufeiufbiebi3",
      name: "United 27",
      description:
        "The campaign should be marked as fraud, if a Partner Authority Service calls our system API (named MarkDonatorAsFraud - we should implement this API) with the nickname of Donator.",
      goal: 700,
      currentAmount: 620,
      status: "active",
    },
    {
      id: "iufeiufbiebi3",
      name: "United 25",
      description:
        "The campaign should be marked as fraud, if a Partner Authority Service calls our system API (named MarkDonatorAsFraud - we should implement this API) with the nickname of Donator.",
      goal: 10000,
      currentAmount: 5455,
      status: "active",
    },
    {
      id: "iufeiufbiebi3",
      name: "United 26",
      description:
        "The campaign should be marked as fraud, if a Partner Authority Service calls our system API (named MarkDonatorAsFraud - we should implement this API) with the nickname of Donator.",
      goal: 500,
      currentAmount: 450,
      status: "active",
    },
    {
      id: "iufeiufbiebi3",
      name: "United 27",
      description:
        "The campaign should be marked as fraud, if a Partner Authority Service calls our system API (named MarkDonatorAsFraud - we should implement this API) with the nickname of Donator.",
      goal: 700,
      currentAmount: 620,
      status: "active",
    },
    {
      id: "iufeiufbiebi3",
      name: "United 26",
      description:
        "The campaign should be marked as fraud, if a Partner Authority Service calls our system API (named MarkDonatorAsFraud - we should implement this API) with the nickname of Donator.",
      goal: 500,
      currentAmount: 450,
      status: "active",
    },
    {
      id: "iufeiufbiebi3",
      name: "United 27",
      description:
        "The campaign should be marked as fraud, if a Partner Authority Service calls our system API (named MarkDonatorAsFraud - we should implement this API) with the nickname of Donator.",
      goal: 700,
      currentAmount: 620,
      status: "active",
    },
    {
      id: "iufeiufbiebi3",
      name: "United 25",
      description:
        "The campaign should be marked as fraud, if a Partner Authority Service calls our system API (named MarkDonatorAsFraud - we should implement this API) with the nickname of Donator.",
      goal: 10000,
      currentAmount: 5455,
      status: "active",
    },
    {
      id: "iufeiufbiebi3",
      name: "United 26",
      description:
        "The campaign should be marked as fraud, if a Partner Authority Service calls our system API (named MarkDonatorAsFraud - we should implement this API) with the nickname of Donator.",
      goal: 500,
      currentAmount: 450,
      status: "active",
    },
    {
      id: "iufeiufbiebi3",
      name: "United 27",
      description:
        "The campaign should be marked as fraud, if a Partner Authority Service calls our system API (named MarkDonatorAsFraud - we should implement this API) with the nickname of Donator.",
      goal: 700,
      currentAmount: 620,
      status: "active",
    },
  ];

  res.send(mockResponce);
});

export default router;
