
function AlbumsList({user}) {
    return (
        <div>
            <h1>Albums for {user.name}</h1>
        <ul>
            <li>Album 1</li>
            <li>Album 2</li>
            <li>Album 3</li>
        </ul>
        </div>
    );
}

export default AlbumsList;