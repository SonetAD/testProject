import Button from '../../Components/Button/Button.component';
import Simplenavbar from '../../Components/Simplenavbar/Simplenavbar.component';
import styles from '../Page2/Page2and3.module.css';

export default function Page3() {
  const style = {
    left: '24.62%',
    right: '24.36%',
    top: '60.07%',
    bottom: '35.19%',
  };
  return (
    <div>
      <Simplenavbar />
      <div className={styles.mainImg} />
      <p className={styles.textFour}>
        ادخل رمز التحقق
      </p>
      <Button path='D4' text="تحقق الان" customStyle={style} />
    </div>
  );
}
