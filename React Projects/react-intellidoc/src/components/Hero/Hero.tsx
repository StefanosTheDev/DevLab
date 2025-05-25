import styles from './Hero.module.css';

function Hero() {
  function toggle() {
    // Add logic here later
  }

  return (
    <div className={styles.hero}>
      <h1 className={styles.heroTitle}>The Most Realistic Voice AI Platform</h1>
      <p className={styles.heroDescription}>
        AI voice models and products powering millions of developers, creators,
        and enterprises. From low‑latency conversational agents to the leading
        AI voice generator for voiceovers and audiobooks.
      </p>

      <button onClick={toggle} className={styles.start}>
        Get Started For Free
      </button>
      <button onClick={toggle} className={styles.contact}>
        Contact Sales
      </button>
    </div>
  );
}

export default Hero;
