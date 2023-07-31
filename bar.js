import styles from "./styles/sort.module.css"


export default function SortBar({onSort, activeSort }) {
    return <div className={styles.container}>
        <div>
            <h3>Collection</h3>
        </div>
        <div className={styles.sortby}>
            <div className={activeSort === "health"?styles.activeSort:styles.sort} onClick={() => onSort("health")}>Health ⬇️</div>
            <div className={activeSort === "damage"?styles.activeSort:styles.sort} onClick={() => onSort("damage")}>Damage  ⬆️</div>
            <div className={activeSort === "armor"?styles.activeSort:styles.sort} onClick={() => onSort("armor")}>Armor ⬇️</div>
        </div>
    </div>
}