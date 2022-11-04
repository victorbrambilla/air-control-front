import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const url = req.body.url.replace(/\/$/, '')
    await axios.post(url + '/on?password=190899')
    return res.send({
      message: 'ok',
    })
  } catch (error) {
    return res.send({
      message: 'error',
    })
  }
}
