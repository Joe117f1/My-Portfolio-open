import type { NextApiRequest, NextApiResponse } from 'next';
import mail from '@sendgrid/mail';
mail.setApiKey(process.env.sendgridKey!);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body);
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: 'myEmail@email.com',
    from: 'email.com',
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };

  await mail.send(data);

  res.status(200).json({ status: 'OK' });
};

export default handler;
