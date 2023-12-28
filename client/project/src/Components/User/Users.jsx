import GetAllUsers from "./GetAllUsers";

function Users(props) {
  const searchVal=props.searchVal
  return (
    <div className="Users">
      <GetAllUsers page="users" searchVal={searchVal}/>
    </div>
  );
}

export default Users;
