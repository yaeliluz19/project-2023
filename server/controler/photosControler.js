const Photos = require("../models/Photos");
//Photos (title, imageUrl)
const getAllPhotos = async (req, res) => {
    const photos = await Photos.find().lean()
    if (!photos?.length) {
    return res.status(400).json({ message: "the photos not find!!" })
    }
    res.json(photos)
    }
    const createNewPhoto = async (req, res) => {
        const {title,imageUrl} = req.body
        if (!title) 
        {
            return res.status(400).json({ message: 'title is required' })
        }
        const photo = await Photos.create({title,imageUrl })
        if (photo) 
        {
            return res.status(201).json({ message: 'New photo created' })
        }
        else 
        {
            return res.status(400).json({ message: 'Invalid photo ' })
        }
    }
    
const getPhotoById = async (req, res) => {
    const {id} = req.params
    const photo = await Photos.findById(id).lean()
    if (!photo) {
    return res.status(400).json({ message: "No photo found" })
    }
    res.json(photo)
    }

    const deletePhoto = async (req, res) => {
        const { id } = req.params
        const photo = await Photos.findById(id)
        if (!photo) {
        return res.status(400).json({ message: "photo not found" })
        }
        const result = await photo.deleteOne()
        const reply=`post '${result.title}' ID ${result._id} deleted`
        res.json(reply)
    }
    const updatePhoto = async (req, res) => {
        const {_id,title}= req.body
        if (!_id || !title ) {
        return res.status(400).json({ message: "fields are required" })
        }
        const photos = await Photos.findById(_id)
        if (!photos) {
        return res.status(400).json({ message: "Photo not found" })
        }
        photos.title=title
        const updatedPhoto = await photos.save()
        res.json(`"${updatedPhoto.title}" updated`)

    }
    
    module.exports = {getAllPhotos,createNewPhoto,getPhotoById,updatePhoto,deletePhoto}