import styles from '../projects/ProjectCard.module.css'
import {BsFillTrashFill} from 'react-icons/bs'

const ServiceCard = ({ id, name, cost, description, handleRemove }) => {
    const remove = (e) => { }
    
    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
               <strong>Custo total:</strong> R${cost}
            </p>
            <p>{description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                <BsFillTrashFill />
                Excluir
                </button>
                
            </div>
        </div>
    )
}

export default ServiceCard