import ReservationMenu from '@/components/ReservationMenu'
import styles from './booking.module.css'

export default function ReservationLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.sectionlayout}>
            {/* <ReservationMenu /> */}
            {children}
        </div>
    );
}