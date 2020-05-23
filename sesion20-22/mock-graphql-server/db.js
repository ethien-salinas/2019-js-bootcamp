module.exports = {
  posts: [
    { id: 1, title: "Lorem Ipsum", views: 254, user_id: 123 },
    { id: 2, title: "Sic Dolor amet", views: 65, user_id: 456 },
  ],
  users: [
    { id: 123, name: "Daniel Salinas" },
    { id: 456, name: "Nallely Espinosa" },
    { id: 789, name: "Karla Cortéz" },
  ],
  comments: [
    { id: 987, post_id: 1, body: "Consectetur adipiscing elit", date: new Date('2017-07-03') },
    { id: 995, post_id: 1, body: "Nam molestie pellentesque dui", date: new Date('2017-08-17') }
  ],
  orders: [
    {
      orderId: 787352,
      dateTime: '03/05/2020 05:33:06',
      user_id: 123,
      customerName: 'Ethien Salinas',
      amount: 63.96,
      status: 'Success',
      statusClass: 'is-success'
    },
    {
      orderId: 352787,
      dateTime: '04/05/2020 06:36:06',
      user_id: 456,
      customerName: 'Ariadna Espinosa',
      amount: 96.33,
      status: 'Warning',
      statusClass: 'is-warning'
    },
    {
      orderId: 527873,
      dateTime: '05/05/2020 07:39:06',
      user_id: 789,
      customerName: 'Sara Cortéz',
      amount: 36.69,
      status: 'Danger',
      statusClass: 'is-danger'
    },
  ]
}
