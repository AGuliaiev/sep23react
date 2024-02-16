import React from 'react';
import {useLoaderData} from "react-router-dom";
import UserDetails from "../components/usersContainers/UserDetails";

const UserDetailsPage = () => {
    // const [userDetails, setUserDetails] = useState(null)
    // const {id} = useParams();
    // const {state} = useLocation();
    const {data} = useLoaderData();

    // useEffect(() => {
    //     // if (state?.user){
    //     //     setUserDetails(state.user)
    //     // } else {
    //     //     userService.getById(id).then(({data}) => setUserDetails(data))
    //     // }
    // }, [id, state]);
    return (
        <div>
             <UserDetails userDetails={data}/>
        </div>
    );
};

export default UserDetailsPage;