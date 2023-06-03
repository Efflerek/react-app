import styles from './Column.module.scss'

const Column = ({ title, icon }) => {
    return (
        <article className={styles.column}>
            <h2 className={styles.title}>
                <span className={`${styles.icon} fa fa-${icon}`}></span>
                {title}
            </h2>
        </article>
    );
};

export default Column;

//ALTERNATYWA
//const Column = ({ children }) => {
   // return (
//<article className={styles.column}>
//<h2 className={styles.title}>{children}</h2>
//</article>
//);
//};

//export default Column;