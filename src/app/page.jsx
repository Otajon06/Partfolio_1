import styles from "./page.module.css";
import Navbar from "./deteils/navbar";
import HomeSection from "./deteils/section/homeSection";
import Footer from "./deteils/footer/Footer";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Navbar/>
      </div>
      <div className={styles.space}></div>
      <HomeSection/>
      <Footer/>
    </main>
  );
}
