import styles from './styles/botCollection.module.css'


export default function BotCollection({ bots, onDisplayBotInfo, onRetireBot }) {

    const emojis = {
        "Support": "🚚",
        "Defender": "🛡️",
        "Assault": "🔫",
        "Medic": "🩺",
        "Captain": "👨‍✈️",
        "Witch": "🚀"
    }

    return <div className={styles.botCollection}>
        {bots.map((bot, i) => {
            return <div  className={styles.bot} key={i}>
                <img onClick={()=>onDisplayBotInfo(bot.id)} className={styles.botImage} src={bot.avatar_url} alt={bot.name} />
                <div className={styles.name}>
                    <div className={styles.botName}>{bot.name} {emojis[bot.bot_class]}</div>
                    <button onClick={()=>onRetireBot(bot.id)}>❌</button>
                </div>
                <div className={styles.catchPhrase}>{bot.catchphrase}</div>
            </div>
        })}
    </div>
}