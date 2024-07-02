import HeroSection from "@/components/Hero/Hero";
import styles from "./page.module.css";
// import axios from "axios";

export default function Home() {


  // let data = await axios.post('localhost:3000/api/data/', {'username': 'piratecoderz', 'email': 'pirate@gmail.com'});
  // if(data.success){
  // }
  // else {
  //   console.error("Data Fetching error");
  // }
  // await axios.get('localhost:3000/api/data/65e05deac6d5bdd38ddba2a4').then((result) => {
  // }).catch((err) => {
  // });

  return (
    <>
      <main className={styles.main}>
        <h2 className={styles.heading}>Our Latest Blogs</h2>
        <HeroSection />
        </main>
    </>
  );
}
