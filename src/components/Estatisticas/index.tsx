import styles from './Estatisticas.module.scss'


const Estatistica = () => {

    const estatisticas = [
        { value: '2,450', label: 'Vídeos Publicados' },
        { value: '15.8K', label: 'Desenvolvedores' },
        { value: '320', label: 'Tecnologias' },
    ];


    return (
        <section className={styles.container__stats}>


            {estatisticas.map((estatistica) => (

                <div className={styles.stat_item}>
                    <div className={styles.stat_value}>{estatistica.value}</div>
                    <div className={styles.stat_label}>{estatistica.label}</div>
                </div>

            ))}


        </section>
    )


}

export default Estatistica