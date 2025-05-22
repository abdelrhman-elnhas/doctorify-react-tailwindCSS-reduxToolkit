import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { FaPenToSquare } from "react-icons/fa6";

const ProfileImg = () => {
  /* ___ States ___ */
  const { user } = useSelector((state) => state.user);
  const [img, setImg] = useState("");
  const [loadingImg, setLoadingImg] = useState(false);

  /* ___ Handlers ___ */
  const handleImgUpdate = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;
    setImg(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("user_id", user.id);
    formData.append("file", file);

    try {
      setLoadingImg(true);
      const response = await fetch(
        `https://darkgray-crow-946145.hostingersite.com/api/user/updateimg`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: formData,
        }
      );

      const result = await response.json();
      console.log("Upload result:", result);

      if (!response.ok) {
        throw new Error(result.message || "Failed to upload image");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingImg(false);
    }
  };
  useEffect(() => {
    if (user.image) {
      setImg(user.image.image);
    }
  }, [user]);
  return (
    <div className="flex-shrink-0">
      <div className="relative w-40 h-40 overflow-hidden bg-gray-200 rounded-full">
        <img
          src={img ? img : "https://readymadeui.com/team-6.webp"}
          alt="Profile"
          className="object-cover w-full h-full"
        />
        <input
          type="file"
          className="absolute top-[50%] left-[50%]  transform -translate-x-1/2 -translate-y-1/2 opacity-0
										z-10 cursor-pointer"
          accept="image/*"
          onClick={() => console.log("Change photo clicked")}
          onChange={handleImgUpdate}
        />
        <button
          disabled={loadingImg}
          className="absolute top-[50%] left-[50%] px-4 py-2 text-white transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-color-75 hover:bg-primary-color text-sm "
        >
          {loadingImg ? <Loading color={"white"} /> : <FaPenToSquare />}
        </button>
      </div>
    </div>
  );
};

export default ProfileImg;
