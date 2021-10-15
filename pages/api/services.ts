// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

const NextApi = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req, res);
  // BY default get request
  // res.status(200).json({ services });
};

export default NextApi;
