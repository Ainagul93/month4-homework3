import './ToDoList.css'


const List = ({list}) => {
    return (
        <ul>
            {list.map((i, idx) => <li key={idx} > {i} </li> )}
        </ul>
    );
};

export default List;