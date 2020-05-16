import React from 'react'

const OrderItem = (props) => {

  return (
    <div className="level">
      <div className="level-left">
        <div>
          <p className="title is-6 is-marginless">
            <a>787352</a>
          </p>
          <small>03/05/2020 05:30:06</small> por <a>{props.data.custtomer}</a>
        </div>
      </div>
      <div className="level-right">
        <div className="">
          <p className="title is-6 is-marginless">$63.96</p>
          <span class="tag is-success">Success</span>
        </div>
      </div>
    </div>
  )
}

export default OrderItem