import crypto from 'crypto'
import fs from 'fs'
import {createWriteStream} from 'node:fs'
import fetch from 'node-fetch'

import { pipeline } from 'node:stream'
import { promisify } from 'node:util'

const streamPipeline = promisify(pipeline)

const cacheAndReturnRemoteImage = async (url: string): Promise<string> => {
    // calculate cache key
    const key = crypto.createHash('sha256').update(url).digest('hex');

    // get image extension
    const extension = url.split('.').pop();

    // generate file path
    const filePath = `${process.env.STORAGE_DIR}/cache/${key}.${extension}`;

    // check if file exists
    if (fs.existsSync(filePath)) {
        return filePath;
    }

    // create cache dir if missing
    if (!fs.existsSync(process.env.STORAGE_DIR + '/cache')) {
        fs.mkdirSync(process.env.STORAGE_DIR + '/cache');
    }

    // download image
    const response = await fetch(url);

    // @ts-ignore
    await streamPipeline(response.body, createWriteStream(filePath));

    return filePath
}

export {
    cacheAndReturnRemoteImage
}