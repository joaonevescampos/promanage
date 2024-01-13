import ProjectForm from '../projects/ProjectForm'
import styles from './NewProject.module.css'

const NewProject = () => {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para adicionar os serviços em seguida.</p>
            <ProjectForm />
        </div>
    )
}

export default NewProject