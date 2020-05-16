import React from 'react'

const KpiItem = (props) => {
  const { id, amount, title, class:className } = props.kpi
  return (
    <div class="column is-one-quarter">
      <div className={`${className} notification has-text`}>
        <p class="title is-1">{amount}</p>
        <p class="subtitle is-4">{title}</p>
      </div>
    </div>
  )
}

export default KpiItem