import { Order } from '../../model/entity/Order';

export const orders: Order[] = [
  {
    id: '2',
    status: 'pedido',
    total: 0,
    produtcs: [
      {
        id: '1',
        image:
          'http://www.postotropical.net.br/wp-content/uploads/2021/02/refrigerantes-lata-350ml-min-768x768.jpg',
        description: 'Bebida Top',
        quantity: 2,
        price: 5.9,
        name: 'guarana',
        extras: [
          {
            id: '4',
            name: 'canudo',
            description: 'conserve o meio ambiente',
            price: 3,
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyL3KeTBUwyw38SJIKFTvg8P4O6gk1YS9Dg&usqp=CAU',
          },
        ],
      },
      {
        id: '1',
        image:
          'http://www.postotropical.net.br/wp-content/uploads/2021/02/refrigerantes-lata-350ml-min-768x768.jpg',
        description: 'Bebida Top',
        quantity: 2,
        price: 5.9,
        name: 'guarana dsfdjknsfjikdfjnkdsfnjfdjkns',
        extras: [
          {
            id: '4',
            name: 'canudo',
            description: 'conserve o meio ambiente',
            price: 3,
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyL3KeTBUwyw38SJIKFTvg8P4O6gk1YS9Dg&usqp=CAU',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    status: 'preparando',
    total: 0,
    produtcs: [
      {
        id: '1',
        image:
          'http://www.postotropical.net.br/wp-content/uploads/2021/02/refrigerantes-lata-350ml-min-768x768.jpg',
        description: 'Bebida Top',
        quantity: 2,
        price: 5.9,
        name: 'guarana',
        extras: [
          {
            id: '4',
            name: 'canudo',
            description: 'conserve o meio ambiente',
            price: 3,
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyL3KeTBUwyw38SJIKFTvg8P4O6gk1YS9Dg&usqp=CAU',
          },
        ],
      },
    ],
  },
];
