import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";

function UsersList() {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    const [doAddUser, isAddingUser, addingUserError] = useThunk(addUser);
    //  access state data
    const { data } = useSelector((state) => state.users);
    useEffect(() => {
        doFetchUsers();
    }, [doFetchUsers]);
       
    let content;
    if (isLoadingUsers) {
        content = <Skeleton times={6} className="h-10 w-full" />;
    }
    if (loadingUsersError) {
        content = <div>error fetching data</div>;
    }

    const handleAddUser = () => {
        doAddUser();
    };

    content = data.map((user) => {
        return <UsersListItem key={user.id} user={user} />;
    });
    return (
        <div>
            <div className="flex flex-row justify-between items-center m-3">
                <h1 className="m-2 text-xl">List of Users</h1>
                <Button
                    loading={isAddingUser}
                    onClick={handleAddUser}>
                    + Add User
                </Button>
                { addingUserError && 'error adding user...'}
            </div>
            {content}
        </div>
    )
}

export default UsersList;