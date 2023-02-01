const Book = (props) => {
    const { image, title, author, id, number } = props
    return (
        <article className="Book">
            <span className="number"># {props.number +1}</span>
            <img src={props.image} />
            <h1><b>{props.title}</b></h1>
            <p>{props.author}</p>
        </article>
    );
};

export default Book