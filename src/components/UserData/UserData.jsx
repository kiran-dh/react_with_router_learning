import UseFetch from "../../hooks/UseFetch";

function UserData(){

    const{data,loading}=UseFetch("https://jsonplaceholder.typicode.com/users");

    if(loading)
        return <h1>Loading Please Wait .....</h1>

    return(
        <table border="1" cellPadding="8">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

}

export default UserData;