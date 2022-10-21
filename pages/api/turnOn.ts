// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  fetch('https://46f1-177-65-158-83.sa.ngrok.io/on?password=190899',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }

  })
  .then((response) => response)
  .then((data) => res.status(200));
  return res.send({
        name: 'ok'
  });
}
