import {Router} from 'express';
const router = Router();
import {createPhoto, getPhoto, getaPhoto, deletePhoto, updatePhoto} from '../controllers/photo.controller';
import multer from '../libs/multer';

router.route("/photos")
    .get(getPhoto)
    .post(multer.single("image") ,createPhoto)
    
router.route("/photos/:id")
    .get(getaPhoto)
    .delete(deletePhoto)
    .put(updatePhoto)
export default router;