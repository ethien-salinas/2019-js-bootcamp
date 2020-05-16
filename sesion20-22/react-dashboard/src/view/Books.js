import React from 'react'
import LeftSideLayout from '../layout/LeftSideLayout'

const Books = () => {
  return (
    <>
      <section className="section">
        <h1 className="title is-1">Books View</h1>
        <div className="columns">
          <div className="column is-one-fifth">
            <LeftSideLayout />
          </div>
          <div className="column">
          </div>
        </div>
      </section>
    </>
  )
}

export default Books