const { Router } = require("express");
const players = require("./api/players");
const logos = require("./api/logos");
const router = Router();

router.get("/players", players.getPlayers);
router.get("/logos", logos.getLogos);

module.exports = router;
