import React from 'react'
import OrderItem from './OrderItem'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const ALL_ORDERS = gql`
  {
    allOrders {
      orderId
      dateTime
      customerName
      amount
      status
      statusClass
    }
  }
`

const OrderList = () => {

  const { loading, error, data } = useQuery(ALL_ORDERS)

  if (loading) return <p>Loading... ⏳</p>
  if (error) return <p>Error 😞</p>

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="title is-3">Últimas órdenes</h2>
        {data.allOrders.map((item, idx) => {
          return <OrderItem key={idx} data={item} />
        })}
        <button className="button is-link is-outlined">Ver todas</button>
      </div>
    </div>
  )
}

export default OrderList