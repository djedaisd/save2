import { Outlet } from 'react-router-dom';
import styles from './navigation.module.css';
import Sidebar from '../components/SidebarMenu';
const NavigationLayout = () => {


    return (
        <div className={styles.wrapper}>
            <div className={styles.sideBarWrapper}>
                <Sidebar />
            </div>
            <div className={styles.main}>

                <div className={styles.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default NavigationLayout;