import GetAllTodos from "./GetAllTodos"
function Todos(props) {
  const searchVal=props.searchVal
  return (
    <div className="Todos">
      <br/>
       <GetAllTodos page="todos" searchVal={searchVal}/> 
    </div>
  );
}

export default Todos;
 