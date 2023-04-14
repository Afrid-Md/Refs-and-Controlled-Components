
function userList(props){
    return(
        <ul>
            {props.users.map((user) =>{
                return <li key={user.id}>{user.name} ({user.age} Years old) {user.clge}</li>
            })}
        </ul>
    )
}
export default userList;