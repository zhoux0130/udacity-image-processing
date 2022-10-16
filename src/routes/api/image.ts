import { JSONSchemaType } from 'ajv'
import express from 'express'
import imageHandler, { GetImageQuery } from '../../utilities/images'

const imageRouter = express.Router()
// image handler处理请求的地方，并且返回对应的处理后的数据到server


imageRouter.get('/welcome', async(req, res) => {
    //解析request中的params
    const { filename, width, height } = req.query as unknown as GetImageQuery ;
    if(!filename){
        res.send('The following error occured processing image, 【Error】Input file is missing')
        return
    }
    const data = await imageHandler(filename, width, height)

    res.send('image handler welcome')
})


export default imageRouter;