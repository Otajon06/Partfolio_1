import Footer from "../deteils/footer/Footer";
import Navbar from "../deteils/navbar";
import WomenSection from "../deteils/section/womenSection";
import styles from "../page.module.css";

export default function Women() {
  return (
    <main className={styles.main}>
      <header className={styles.description}>
        <Navbar/>
      </header>
      <section>
        <WomenSection/>
      </section>
        <Footer/>
    </main>
  );
}
