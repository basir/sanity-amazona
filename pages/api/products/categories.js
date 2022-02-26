import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Shirts', 'Pants'];
  res.send(categories);
});

export default handler;
