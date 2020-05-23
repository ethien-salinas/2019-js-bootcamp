import React from 'react'

const KpiItem = (props) => {
  const { id, amount, title, class:className } = props.kpi
  return (
    <div className="column is-one-quarter">
      <div className={`${className} notification has-text`}>
        <p className="title is-1">{amount}</p>
        <p className="subtitle is-4">{title}</p>
      </div>
    </div>
  )
}

export default KpiItem