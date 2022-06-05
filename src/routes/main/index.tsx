import styles from './main.module.scss';
import profile from '../../assets/images/profile.png';

const Main = () => {
  return (
    <div>
      <section className={styles.homeSectionWrapper}>
        <h1>WEB FRONT-END</h1>
        <h1>DEVELOPER</h1>
        <h1 className={styles.right}>HONG</h1>
        <h1 className={styles.right}>SEONYOUNG</h1>
      </section>
      <section>
        <div className={styles.aboutMeWrapper}>
          <h5>나를 소개하는 문장</h5>

          <img src={profile} alt='my photo' />
        </div>
      </section>
      {/* <section>
        <h3>Projects</h3>
      </section>
      <section>
        <h3>Contact</h3>
      </section> */}
    </div>
  );
};

export default Main;
