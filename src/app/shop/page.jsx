import Navbar from "../deteils/navbar";
import ShopSection from "../deteils/section/shopSection";
import styles from "../page.module.css";

export default function Shop() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Navbar/>
      </div>
      <div className={styles.space}></div>

        <ShopSection/>
    </main>
  );
}
