import styles from "./page.module.css";
import HomePage from "./components/home/HomePage";

export default function Home() {

  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  );
}
