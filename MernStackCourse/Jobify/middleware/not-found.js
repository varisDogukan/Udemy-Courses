const notfoundMiddleWare = (req, res) =>
  res.status(404).send('Route doest not exist');

export default notfoundMiddleWare;
