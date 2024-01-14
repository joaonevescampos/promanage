import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

const ProjectForm = ({btnText}) => {
    return (
        <form className={styles.form}>
            <Input
                type='text'
                text='Nome do projeto'
                name='name'
                placeholder='Nome do Projeto'     
            />
            <Input
                type='number'
                text='Orçamento'
                name='budge'
                placeholder='Orçamento total do projeto'     
            />
            <Select name='category_id' text='Selecione a categoria'/>
            <SubmitButton text={ btnText } />
        </form>
    )
}

export default ProjectForm