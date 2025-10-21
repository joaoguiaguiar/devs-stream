import styles from './Title.module.scss'


interface TituloProps {
    children: string;
}


const Title = ({ children }: TituloProps) => {
    return (
        <>
            <h1 className={styles.section__title}>{children}</h1>
        </>
    )
}


export default Title