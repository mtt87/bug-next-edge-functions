function handler(req, res) {
  console.log(req.body);
  res.send("ok");
}

export default handler;
