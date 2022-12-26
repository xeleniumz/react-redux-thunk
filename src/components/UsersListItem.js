import { GoTrashcan } from "react-icons/go";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import Button from "./Button";

function UsersListItem({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);
    const handleRemoveUser = () => {
        doRemoveUser(user);
    };
    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <Button
                    loading={isLoading}
                    onClick={handleRemoveUser}>
                    <GoTrashcan />
                </Button>
                { error && <div>'error removing user...'</div>}
                {user.name}
            </div>
        </div>
    );
}

export default UsersListItem;