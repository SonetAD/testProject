import call from '../../assets/images/call.png';
import notification from '../../assets/images/notification.png';
import styles from './Simplenavbar.module.css';
export default function Simplenavbar() {
  return (
    <div>
      <div className={styles.rect}></div>
      <img src={call} className={styles.call} alt='' />
      <img src={notification} className={styles.notification} alt='' />
    </div>
  );
}
