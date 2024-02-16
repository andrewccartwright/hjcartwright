import '../../css/NewRelease.css';
import Book from '../Book';

const NewRelease = (props: {book: Book}) => {
    const book : Book = props.book;

    return (
        <div id="new-release-section">
            <div id="new-release-text-container">
                <h2 id="new-release-title">Newest Release</h2>
                <div id="book-information">
                    <strong><p id="book-name">{book.name}</p></strong>
                    <p id="book-description">{book.description}</p>
                </div>
                <a id="" href={book.url}><button type="button" className='my-buttons btn btn-primary'>Learn More</button></a>
            </div>
            
        </div>
    )
}

export default NewRelease;