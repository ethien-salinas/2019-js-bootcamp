import React from 'react'
import OrderList from '../components/OrderList'

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="columns">
        <div className="column is-one-third">
          <OrderList />
        </div>
        <div className="column is-one-third">
          <OrderList />
        </div>
        <div className="column is-one-third">
          <OrderList />
        </div>
      </div>
    </>
  )
}

export default Dashboard