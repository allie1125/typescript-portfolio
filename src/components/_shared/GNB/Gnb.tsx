import styles from './gnb.module.scss';

const Gnb = () => {
  return (
    <div className={styles.gnb}>
      <ul>
        <li>HOME</li>
        <li>ABOUT ME</li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>
    </div>
  );
};

export default Gnb;
