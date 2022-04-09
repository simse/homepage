// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import mime from 'mime'

import { cacheAndReturnRemoteImage } from '../../lib/cache'
import { listFilesAsKeys } from '../../lib/files'



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // get image key
  let imageKey = req.query.key.toString()

  let imagePath = ''

  // check if image key is external
  if (imageKey.startsWith('http') || imageKey.startsWith('https')) {
    imagePath = await cacheAndReturnRemoteImage(imageKey);
  }

  // check if image key is local from logo directory
  else {
    let logoFiles = await listFilesAsKeys(process.cwd() + '/logos')

    if(fs.existsSync(process.env.STORAGE_DIR + '/logos')) {
      let storageLogoFiles = await listFilesAsKeys(process.env.STORAGE_DIR + '/logos')
      logoFiles = logoFiles.concat(storageLogoFiles)
    }

    
    logoFiles.forEach(file => {
      if(file.key === imageKey) {
        imagePath = file.path
      }
    })
  }

  // no image path has been found
  if(imagePath === '') {
    res.status(404)
    return
  }

  // load image from path
  const image = await fs.createReadStream(imagePath)

  // set headers
  res.status(200).setHeader('Content-Type', mime.getType(imagePath) || '')

  // pipe image data to response
  image.pipe(res)
}
