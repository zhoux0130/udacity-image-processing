// 相当于服务层，此处放置处理Image的逻辑代码。在Route中只做调用
import {promises as fsPromises} from 'fs'
const assetsPath = 'assets/'

export interface GetImageQuery {
    filename: string
    width: number
    height: number
}

const imageHandler = async (filename: string, width: number, heigh: number) => {
    //按照传入参数读取服务器上的文件
    const fullFilename = assetsPath + filename + '.png'
    const imageFile = await fsPromises.readFile(fullFilename, 'utf-8');
    console.log(imageFile)

    //使用sharp库，按照要求尺寸处理图片

    //处理过的结果，也会写入到本地文件中
    return imageFile
}

export default imageHandler;