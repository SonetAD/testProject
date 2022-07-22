import Button from '../../Components/Button/Button.component';
import styles from './Page1.module.css';

export default function Page1() {
  const style = {
    left: '23.08%',
    right: '25.9%',
    top: '72.04%',
    bottom: '23.22%',
    'border-radius': '15px',
  };
  return (
    <div>
      <div className={styles.mainBody}>
        <div className={styles.mainImg} />
        <p className={styles.textOne}>
          نحن في خدمتكم
        </p>
        <p className={styles.textTwo}>
          عضوية مميزة لغير حاملي بطاقات التأمين الطبي
        </p>
        <p className={styles.textThree}>
          عضوية مجمع الرازي ينبع الطبي
        </p>
        <Button path='D2' customStyle={style} text="استمرار" />

      </div>
    </div>
  );
}
