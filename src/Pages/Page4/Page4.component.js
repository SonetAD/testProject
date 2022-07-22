import rounded from '../../assets/images/rounded.png';
import Button from '../../Components/Button/Button.component';
import Profilenavbar from '../../Components/Profilenavbar/Profilenavbar.component';
import styles from './Page4.module.css';

export default function Page4() {
  const style = {
    left: '26.15%',
    right: '22.82%',
    top: '59.36%',
    bottom: '35.9%',
  };
  return (
    <div>
      <Profilenavbar />
      <p className={styles.textOne}>
        تعرف على عضوياتنا
      </p>
      <p className={styles.textTwo}>
        لا يوجد عضوية
      </p>
      <Button customStyle={style}>
        <img src={rounded} alt="" />
      </Button>
    </div>

  );
}
