import React from 'react'
import OrderList from '../components/OrderList'
import BookList from '../components/BookList'
import KpiList from '../components/KpiList'

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <div className="columns is-multiline">
        <KpiList />
        <div className="column is-one-third">
          <OrderList />
        </div>
        <div className="column is-one-third">
          <BookList />
        </div>
        <div className="column is-one-third">
          <OrderList />
        </div>
      </div>
    </>
  )
}

export default Dashboard