import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "@store/userSlice";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const user22 = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  return (
    <>
      <div>{user}</div>
      <div className="text-white bg-black">{user22}</div>
    </>
  );
};

export default Profile;
