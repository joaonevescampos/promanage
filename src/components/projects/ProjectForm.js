const ProjectForm = () => {
    return (
        <form>
            <div><input type="text" placeholder="Nome do Projeto" /></div>
            <div><input type="number" placeholder="Orçamento total do projeto" /></div>
            <div>
                <select name="category_id">
                    <option disable>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar Projeto"/>
            </div>
        </form>
    )
}

export default ProjectForm