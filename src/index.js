import React from "react";
import ReactDOM from "react-dom/client";

function BookList() {
    return (
        <section>
            <Book />
            <Book />
            <Book />
        </section>
    );
};

const Book = () => {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    );
};

const Image = () => <img src="https://m.media-amazon.com/images/I/41hYQIILU3L.jpg" />;

const Title = () => <h1><b>Spare</b></h1>;

const Author = () => <p>Prince Harry</p>;


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);