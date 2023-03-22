import { Router } from 'express'; 
import { createByVideoId } from '../services/rapidapi-service.js';

const router = Router();

// router.get('/api/music/:id', async(req,res) => {
//   const { id } = req.params;
//   const getMusic = await getByVideoId(id);
//   res.json(getMusic)
// })

router.get('/api/create-music/:id', async(req,res) => {
  const { id } = req.params;
  const getMusic = await createByVideoId(id);
  res.json(getMusic)
})


export default router;