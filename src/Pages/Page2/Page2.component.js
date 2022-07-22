import Button from '../../Components/Button/Button.component';
import Simplenavbar from '../../Components/Simplenavbar/Simplenavbar.component';
import styles from './Page2and3.module.css';

export default function Page2() {
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
      <p className={styles.textOne}>+٩٦٦</p>
      <p className={styles.textTwo}>٥٥٥٥٠٩٨٥٤</p>
      <Button path='D3' text="اطلب رمز التحقق" customStyle={style} />
    </div>
  );
}
