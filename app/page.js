import HeroSection from "@/components/Hero/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h2 className={styles.heading}>Our Latest Blogs</h2>
        <HeroSection />
        </main>
    </>
  );
}
