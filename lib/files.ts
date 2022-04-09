import fs from 'fs/promises'
import path from 'path'

// listFiles returns a list of files in a directory
const listFiles = async (dir:string) => {
    const files = await fs.readdir(dir)

    return files.map(file => path.join(dir, file))
}

// listFilesAndExtensions returns a list of files and their extensions in a directory
const listFilesAsKeys = async (dir:string) => {
    const files = await listFiles(dir)

    return files.map(file => {
        const extension = path.extname(file)
        const key = path.basename(file, extension)

        return {
            path: file,
            key
        }
    })
}

export {
    listFiles,
    listFilesAsKeys
}