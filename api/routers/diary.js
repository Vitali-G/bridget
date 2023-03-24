const { Router } = require('express');
const diaryController = require('../controllers/diaryController')

const diaryRouter = Router();

// countryRouter.get("/", countryController.index);
// countryRouter.get("/:name", countryController.show);
// countryRouter.post("/", countryController.create);
// countryRouter.delete("/:name", countryController.destroy);

module.exports = diaryRouter;
