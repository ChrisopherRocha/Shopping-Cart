import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom'
import Price from './Price.jsx';
import Rating from './Rating.jsx'

const Book = ({ book }) => {
    return (
        <div className='book'>
            <Link to="">
                <figure className='book__img--wrapper'>
                    <img src={book.url} alt="" className='book__img' />
                </figure>
            </Link>
            <div className='book__title'>
                <Link to="/" className='book__title--link'>
                    {book.title}
                </Link>
            </div>
            <Rating rating={book.rating} />
            {/* 
                Paste this into Price.jsx, 2) destructure {} salePrice and originalPrice in the parameters of const Price and delete the book in book.salePrice and book.originalPrice
            <div className='book__price'>
                {
                    book.salePrice ? (
                        <>
                        <span className='book__price--normal'>${book.originalPrice.toFixed(2)}</span>
                        ${book.salePrice.toFixed(2)}
                        </>
                    ) : (
                        <>${book.originalPrice.toFixed(2)}</>
                    )
                }
            </div> */}
            <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
        </div>
    )
}

export default Book