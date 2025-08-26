import styles from './page.module.css';

export default async function Styles() {
    // const data = await fetch('https://api.example.com/data', 
    // { cache: 'force-cache' }).then(res => res.json());
    return <button className={styles.button}>Server</button>;
}