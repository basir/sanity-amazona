export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      title: 'User',
      name: 'user',
      type: 'reference',
      to: [{ type: 'user' }],
      options: {
        disableNew: true,
      },
    },
    {
      name: 'userName',
      title: 'User Name',
      type: 'string',
    },
    {
      name: 'itemsPrice',
      title: 'itemsPrice',
      type: 'number',
    },
    {
      name: 'shippingPrice',
      title: 'shippingPrice',
      type: 'number',
    },
    {
      name: 'taxPrice',
      title: 'taxPrice',
      type: 'number',
    },
    {
      name: 'totalPrice',
      title: 'totalPrice',
      type: 'number',
    },
    {
      name: 'paymentMethod',
      title: 'paymentMethod',
      type: 'string',
    },
    {
      title: 'shippingAddress',
      name: 'shippingAddress',
      type: 'shippingAddress',
    },
    {
      title: 'paymentResult',
      name: 'paymentResult',
      type: 'paymentResult',
    },
    {
      title: 'Order Items',
      name: 'orderItems',
      type: 'array',
      of: [
        {
          title: 'Order Item',
          type: 'orderItem',
        },
      ],
    },
    {
      title: 'IsPaid',
      name: 'isPaid',
      type: 'boolean',
    },
    {
      title: 'Paid Date',
      name: 'paidAt',
      type: 'datetime',
    },
    {
      title: 'IsDelivered',
      name: 'isDelivered',
      type: 'boolean',
    },
    {
      title: 'DeliveredAt',
      name: 'deliveredAt',
      type: 'datetime',
    },
    {
      title: 'CreatedAt',
      name: 'createdAt',
      type: 'datetime',
    },
  ],
};
