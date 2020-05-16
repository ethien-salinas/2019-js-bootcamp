import React from 'react'
import BookItem from './BookItem'

const BookList = () => {

  const data = [
    {
      bookId: 1,
      title: 'JS desde 2020 🤔',
      bookImg: 'https://via.placeholder.com/160x210?text=Book%20Image',
      amountSold: 36
    },
    {
      bookId: 2,
      title: 'Spring boot 🚀',
      bookImg: 'https://via.placeholder.com/160x210?text=Book%20Image',
      amountSold: 63
    },
    {
      bookId: 3,
      title: 'Go from zero to hero 👻',
      bookImg: 'https://via.placeholder.com/160x210?text=Book%20Image',
      amountSold: 36
    },
  ]

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="title is-3">Libros más populares</h2>
        {data.map((item, idx) => {
          return <BookItem key={idx} data={item} />
        })}
        <button className="button is-link is-outlined">Ver todos</button>
      </div>
    </div>
  )
}

export default BookList