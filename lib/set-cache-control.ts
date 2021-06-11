import {NextApiResponse} from 'next'

export function setCacheControl(
  res: NextApiResponse,
  maxAge: number,
  staleWhileRevalidate: number,
) {
  res.setHeader(
    'Cache-Control',
    `public, s-maxage=${maxAge}, stale-while-revalidate=${staleWhileRevalidate}`,
  )
}
