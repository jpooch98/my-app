import React from "react";
import ReactDOM from "react-dom/client";

import { books } from './books';
import './index.css';
import Book from './Book'


function BookList() {
    return (
        <div>
            <h1 className="center">Amazon's Best Sellers list</h1>
            <section className="BookList">
                <EventExample />
                {books.map((book, index) => {
                    return (
                        <Book {...book} key={book.id} number={index} />
                    )
                })}
            </section>
        </div>
    );
};

const EventExample = () => {
    return <section>
        <form onSubmit={handleFormSubmission}>
            <h2>Typical form</h2>
            <input type="text" name="example" onChange={handleFormInput} style={{ margin: '1rems 0' }}></input>
        </form>
        <button type="submit" onClick={handleFormSubmission}>Submit</button>
    </section>
}




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);