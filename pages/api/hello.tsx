import { NextApiResponse } from 'next';

export default (_, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};
