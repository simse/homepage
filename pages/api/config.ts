// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'



export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const configFile = fs.readFileSync(path.join(process.cwd(), 'sample.config.yml'), 'utf8')

  const config = yaml.load(configFile)

  res.status(200).json(config)
}
