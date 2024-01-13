import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'


const Home = () => {
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Pro Manage</span></h1>
            <p>Gerencie seus projetos agora mesmo!</p>
            <LinkButton to='/newproject' text='Criar Projeto'/>
            <img src={savings} alt='Pro Manage'/>
        </section>
    )
}

export default Home