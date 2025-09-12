import styles from './Navbar.module.css'

const Navbar=({children})=>{
    return(
        <div className={styles.navbar}>
            <div className={styles.navbarList}>                
            <a href="#" className={styles.siteTitle}>Ecommerce</a>
            {children}
            </div>
        </div>
    )
}
export default Navbar