import styles from "./page.module.css";
import Navbar from "./deteils/navbar";
import HomeSection from "./deteils/section/homeSection";
import HomeFooter from "./deteils/footer/homeFooter";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Navbar/>
      </div>
      <div className={styles.space}></div>
      <HomeSection/>
      <HomeFooter/>
    </main>
  );
}
