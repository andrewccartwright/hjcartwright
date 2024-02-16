import Image from "next/image";
import styles from "./page.module.css";
import NewRelease from "./components/home/NewRelease";
import Book from "./components/Book";

export default function Home() {
  const book: Book = {
    "name": "Diluted Truths: The Advocates",
    "description": "",
    "url": "/shop"
  }

  return (
    <main className={styles.main}>
      <NewRelease book={book} />
    </main>
  );
}
