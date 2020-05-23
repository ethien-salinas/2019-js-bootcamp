import React from 'react'
import OrderItem from './OrderItem'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const ALL_USERS = gql`
  {  
    allUsers {
      id
      name
    }
  }
`

const OrderList = () => {

  const dataBooks = [
    {
      orderId: 787352,
      dateTime: '03/05/2020 05:33:06',
      customerName: 'Ethien Salinas',
      amount: 63.96,
      status: 'Success',
      statusClass: 'is-success'
    },
    {
      orderId: 352787,
      dateTime: '04/05/2020 06:36:06',
      customerName: 'Ariadna Espinosa',
      amount: 96.33,
      status: 'Warning',
      statusClass: 'is-warning'
    },
    {
      orderId: 527873,
      dateTime: '05/05/2020 07:39:06',
      customerName: 'Sara Cortéz',
      amount: 36.69,
      status: 'Danger',
      statusClass: 'is-danger'
    },
  ]

  const { loading, error, data } = useQuery(ALL_USERS)

  if (loading) return <p>Loading... ⏳</p>
  if (error) return <p>Error 😞</p>
  if (data) return <p>{JSON.stringify(data)}</p>

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="title is-3">Últimas órdenes</h2>
        {dataBooks.map((item, idx) => {
          return <OrderItem key={idx} data={item} />
        })}
        <button className="button is-link is-outlined">Ver todas</button>
      </div>
    </div>
  )
}

export default OrderList