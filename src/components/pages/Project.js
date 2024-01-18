import styles from './Project.module.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'

const Project = () => {
    const { id } = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then((data) => {
                setProject(data)
                console.log(project)
        }).catch((err) => console.log(err))
        }, 1000)
    }, [id])

    const toggleProjectForm = () => {
        setShowProjectForm(!showProjectForm)
    }

    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass='column'>
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <strong>Categoria:</strong> {project.category.name}
                                    </p>
                                    <p>
                                        <strong>Orçamento total:</strong> R${project.budget},00
                                    </p>
                                    <p>
                                        <strong>Total utilizado:</strong> {project.cost}
                                    </p>         
                              
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <p>form</p>
                                </div>
                            )}
                        </div>
                    </Container>
                </div>
            ) : (
                    <Loading />
            )}
        </>
            
    )
}

export default Project