import React from 'react'
import OrderList from '../components/OrderList'
import BookList from '../components/BookList'
import KpiList from '../components/KpiList'
import NavMenu from '../components/NavMenu'
import LeftSideLayout from '../layout/LeftSideLayout'
import RightSideLayout from '../layout/RightSideLayout'

const Dashboard = () => {
  return (
    <>
      <section className="section">
        <div className="columns">
          <div className="column is-one-fifth">
            <LeftSideLayout />
          </div>
          <div className="column">
            <RightSideLayout />
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard