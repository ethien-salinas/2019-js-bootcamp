import React from 'react'

const BookItem = (props) => {

  const { bookId, title, bookImg, amountSold } = props.data

  return (
    <article className="media">
      <div className="media-left">
        <span className="tag is-rounded is-large">{bookId}</span>
      </div>
      <figure className="media-left">
        <p className="image is-48x48">
          <img src={bookImg}></img>
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <p className="title is-6 is-marginless">
            <a>{title}</a>
          </p>
        </div>
      </div>
      <div className="media-right">
        {amountSold} sold
      </div>
    </article>
  )
}

export default BookItem