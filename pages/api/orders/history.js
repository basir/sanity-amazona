import nc from 'next-connect';
import { isAuth } from '../../../utils/auth';
import client from '../../../utils/client';

const handler = nc();

handler.use(isAuth);
handler.get(async (req, res) => {
  const orders = await client.fetch(
    `*[_type == "order" && user._ref == $userId]`,
    {
      userId: req.user._id,
    }
  );
  res.send(orders);
});
export default handler;
