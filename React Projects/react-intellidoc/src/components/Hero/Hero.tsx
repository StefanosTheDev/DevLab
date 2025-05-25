import styles from './Hero.module.css';
import { useNavigate } from 'react-router-dom';
function Hero() {
  const navigate = useNavigate();

  function handleCreate() {
    const newId = crypto.randomUUID(); // create unique doc ID
    navigate(`/doc/${newId}`);
  }

  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>A Super Cool App </h1>
      <p className={styles.heroDescription}>PEW POO PEW POO</p>

      <button onClick={handleCreate} className={styles.start}>
        Create A Document
      </button>
      {
        <button onClick={handleCreate} className={styles.start}>
          View Documents
        </button>
      }
    </div>
  );
}

export default Hero;
