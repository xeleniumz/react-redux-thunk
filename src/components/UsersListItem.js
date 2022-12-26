import { GoTrashcan } from "react-icons/go";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";


function UsersListItem({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);
    const handleRemoveUser = () => {
        doRemoveUser(user);
    };
    const header = <>
        <Button
            className="mr-2"
            loading={isLoading}
            onClick={handleRemoveUser}>
            <GoTrashcan />
        </Button>
        { error && <div>'error removing user...'</div>}
        {user.name}
    </>
    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user} />
        </ExpandablePanel>
    );
}

export default UsersListItem;