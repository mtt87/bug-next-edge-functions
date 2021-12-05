import { NextApiRequest, NextApiResponse } from "next";

function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("lambda:", req.body);
  res.send(req.body);
}

export default handler;
