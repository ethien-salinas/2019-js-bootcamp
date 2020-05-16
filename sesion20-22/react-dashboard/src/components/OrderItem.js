import React from 'react'

const OrderItem = (props) => {

  const {orderId, dateTime, customerName, amount, status, statusClass} = props.data

  return (
    <div className="level">
      <div className="level-left">
        <div>
          <p className="title is-6 is-marginless">
            <a>{orderId}</a>
          </p>
          <small>{dateTime}</small> por <a>{customerName}</a>
        </div>
      </div>
      <div className="level-right">
        <div className="">
          <p className="title is-6 is-marginless">${amount}</p>
          <span className={`tag ${statusClass}`}>{status}</span>
        </div>
      </div>
    </div>
  )
}

export default OrderItem