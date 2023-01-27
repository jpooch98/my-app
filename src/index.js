import React from "react";
import ReactDOM from "react-dom/client";

import './index.css';

const books = [
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/91Szm8FpdfL._AC_UL900_SR900,600_.jpg",
        title: "Spare",
        author: "Prince Harry",
        id: 1,
    },
    {
        image: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
        title: "Atomic Habbits",
        author: "James Cleary",
        id: 2,
    }
];

function BookList() {
    return (
        <div>
            <h1 className="center">Amazon's Best Sellers list</h1>
            <section className="BookList">
                <EventExample />
                {books.map((book) => {
                    const { image, title, author, id } = book
                    return (
                        <Book {...book} key={id} />
                    )
                })}
            </section>
        </div>
    );
};

const EventExample = () => {
    const handleFormInput = (e) => {
        console.log(e.target)
        console.log(e.target.name)
        console.log(e.target.value)
        console.log('Handle Form input')
    }
    const handleButtonClick = () => {
        alert('Button pressed')
    }
    const handleFormSubmission = (e) => {
        e.preventDefault();
        console.log('form Sumbitted')
    }
    return <section>
        <form onSubmit={handleFormSubmission}>
            <h2>Typical form</h2>
            <input type="text" name="example" onChange={handleFormInput} style={{ margin: '1rems 0' }}></input>
        </form>
        <button onClick={handleButtonClick}>Click Me</button>
    </section>
}

const Book = (props) => {
    return (
        <article className="Book">
            <img src={props.image} />
            <h1><b>{props.title}</b></h1>
            <p>{props.author}</p>
        </article>
    );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);