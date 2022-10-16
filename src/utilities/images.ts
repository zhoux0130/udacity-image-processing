// 相当于服务层，此处放置处理Image的逻辑代码。在Route中只做调用
import fs from 'fs'
import sharp from 'sharp'
const assetsOriginPath = __dirname + '/assets/origin/'
const assetsThumbPath = __dirname + '/assets/thumb/'

export interface GetImageQuery {
    filename: string
    width: string
    height: string
}

const imageHandler = async (filename: string, width: string, height: string) => {
    //按照传入参数读取服务器上的文件
    const fullFilename = './assets/origin/' + filename + '.png'
    const thumbFile = './assets/thumb/'+ filename + '_thumb.png'
    
    //使用sharp库，按照要求尺寸处理图片,并将文件写入到thumb目录
    sharp(fullFilename).
    resize({
        width:parseInt(width), 
        height:parseInt(height)
    }).toFile(thumbFile)
}

export default imageHandler;