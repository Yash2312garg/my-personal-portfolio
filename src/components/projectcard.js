import todo from "../images/to-do-list.png"
const Card = ()=>{
    return (
        <div className="card-container">
            <div className="card-container-image">
                <img src={todo} alt="project_image" width="250px"/>
            </div>
            <div className="class-container-content">
                <h3>To-Do List</h3>
                view, update, create, delete your daily to-do list
            </div>

        </div>
    )
}
export default Card