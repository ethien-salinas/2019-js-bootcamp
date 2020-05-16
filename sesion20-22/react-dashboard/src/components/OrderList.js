import React from 'react'
import OrderItem from './OrderItem'

const OrderList = () => {

  const data = [
    {
      orderId: 787352,
      dateTime: '03/05/2020 05:30:06',
      custtomer: 'Ethien Salinas',
      amount: 63.96,
      status: 'Success',
      statusClass: 'is-success'
    },
    {
      orderId: 352787,
      dateTime: '03/05/2020 05:30:06',
      custtomer: 'Ariadna Espinosa',
      amount: 96.33,
      status: 'Warning',
      statusClass: 'is-warning'
    },
    {
      orderId: 527873,
      dateTime: '03/05/2020 05:30:06',
      custtomer: 'Sara Cortéz',
      amount: 36.69,
      status: 'Danger',
      statusClass: 'is-danger'
    },
  ]

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="title is-3">Últimas órdenes</h2>
        <OrderItem data={data[0]}>OrderList</OrderItem>
        <OrderItem data={data[1]}>OrderList</OrderItem>
        <OrderItem data={data[2]}>OrderList</OrderItem>
        <button className="button is-link is-outlined">Ver todas</button>
      </div>
    </div>
  )
}

export default OrderList