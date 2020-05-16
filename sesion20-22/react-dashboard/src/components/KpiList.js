import React from 'react'
import KpiItem from './KpiItem'

const KpiList = () => {
  const kpis = [
    {
      id: 1,
      amount: 232,
      title: 'Orders',
      class: 'is-link'
    },
    {
      id: 2,
      amount: 7648,
      title: 'Revenue',
      class: 'is-info'
    },
    {
      id: 3,
      amount: 1678,
      title: 'Visitors',
      class: 'is-primary'
    },
    {
      id: 4,
      amount: 20756,
      title: 'PageViews',
      class: 'is-success'
    }
  ]
  return (
    <>
      {kpis.map((kpi, idx) => {
        return <KpiItem key={idx} kpi={kpi} />
      })}
    </>
  )
}

export default KpiList