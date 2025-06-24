const User =({name,Location})=>{
    return(
        <div className="user">
            <h1>{name}</h1>
            <h3>{Location}</h3>
        </div>
    )
};

export default User;