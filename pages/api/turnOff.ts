import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const url = req.body.url.replace(/\/$/, '')
    await axios.post(url + '/off?password=190899')

    return res.send({
      message: 'ok',
    })
  } catch (error) {
    return res.send({
      message: 'error',
    })
  }
}
