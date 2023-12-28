const express = require("express")
const router = express.Router()
const Photos = require("../models/Photos");
const photosControler = require("../controler/photosControler")


router.get("/getAll",photosControler.getAllPhotos)
router.get("/:id", photosControler.getPhotoById)
router.post("/create",photosControler.createNewPhoto)
router.delete("/:id",photosControler.deletePhoto)
router.put("/update",photosControler.updatePhoto)

module.exports = router

