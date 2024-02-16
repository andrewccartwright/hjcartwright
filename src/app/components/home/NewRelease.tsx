import Image from 'next/image';
import '../../css/Home.css';
import Book from './Book';

const NewRelease = (props: {book: Book}) => {
    const book : Book = props.book;
    const sizeMult = 0.3

    return (
        <div id="new-release-section" className="home-section">
            <div id="new-release-text-container">
                <h2 id="new-release-title">Newest Release</h2>
                <div id="book-information">
                    <strong><p id="book-name">{book.name}</p></strong>
                    <p id="book-description">{book.description}</p>
                </div>
                <a id="" href={book.url}><button type="button" className='my-buttons btn btn-primary'>Learn More</button></a>
            </div>

            <Image id='cover-image' src={book.cover_image} height={1173 * sizeMult} width={735 * sizeMult} alt="Cover of Diluted Truths: The Advocates" />
            
        </div>
    )
}

export default NewRelease;