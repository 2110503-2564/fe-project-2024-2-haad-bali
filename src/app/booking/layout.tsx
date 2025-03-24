import ReservationMenu from '@/components/ReservationMenu';
import styles from './reservations.module.css'
import TopMenu from '@/components/TopMenu';

export default function ReservationLayout ({children}: {children:React.ReactNode}){
        return (
                <div className={styles.sectionlayout}>
                        <TopMenu/>
                        {children}
                </div>
        );
}