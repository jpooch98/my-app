import React from "react";
import ReactDOM from "react-dom/client";

import Book from './Book';
import { books } from './books';
import './index.css';

//ok ok
function BookList() {
    return (
        <div>
            <h1 className="center">Amazon's Best Sellers list</h1>
            <section className="BookList">
                {books.map((book, index) => {
                    return (
                        <Book {...book} key={book.id} number={index} />
                    )
                })}
            </section>
        </div>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);