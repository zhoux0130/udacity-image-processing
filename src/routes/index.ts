import express from 'express'
import imageRouter from './api/image'

const routes = express.Router()
//imageRouter里面的全部endpoints，都是已image作为入口
routes.use('/image', imageRouter)

routes.get('/', (req, res)=>{
    res.send('Main routes')
})

export default routes;