import { useNavigate} from 'react-router-dom'
import ProjectForm from '../projects/ProjectForm'
import styles from './NewProject.module.css'

const NewProject = ({ btnText, projectData }) => {
    const navigate = useNavigate()

    const createPost = (project) => {
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        }).then(
            (resp) => resp.json()
        ).then((data) => {
            console.log(data)
            navigate('/projects', {message: 'Projeto criado com sucesso!'})
        })
            .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para adicionar os serviços em seguida.</p>
            <ProjectForm handleSubmit={createPost} btnText='Criar Projeto'/>
        </div>
    )
}

export default NewProject