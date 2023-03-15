import express from "express";
import campaignsController from "./controllers/campaigns";

const router = express.Router();

router.use("/api/campaigns", campaignsController);

export default router;
