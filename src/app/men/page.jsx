import Footer from "../deteils/footer/Footer";
import Navbar from "../deteils/navbar";
import MenSection from "../deteils/section/menSection";
import styles from "../page.module.css";

export default function Men() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Navbar/>
      </div>
        <MenSection/>
        <Footer/>
    </main>
  );
}
