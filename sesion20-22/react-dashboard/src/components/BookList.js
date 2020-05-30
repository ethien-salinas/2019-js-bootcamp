import React from 'react'
import BookItem from './BookItem'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const BookList = () => {

  const ALL_BOOKS = gql`
    {
      books{
        id
        title
        imgUrl
        amountSold
      }
    }
  `

  const { loading, error, data } = useQuery(ALL_BOOKS)

  if (loading) return <p>Loading... ⏳</p>
  if (error) return <p>Error 😞</p>

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="title is-3">Libros más populares</h2>
        {data.books.map((item, idx) => {
          return <BookItem key={idx} data={item} />
        })}
        <button className="button is-link is-outlined">Ver todos</button>
      </div>
    </div>
  )
}

export default BookList