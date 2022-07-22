import profile from '../../assets/images/profile.png';
import Simplenavbar from '../Simplenavbar/Simplenavbar.component';
import styles from './Profilenavbar.module.css';

export default function Profilenavbar() {
  return (
    <div>
      <img className={styles.profile} src={profile} alt="" />
      <Simplenavbar />
    </div>
  );
}
