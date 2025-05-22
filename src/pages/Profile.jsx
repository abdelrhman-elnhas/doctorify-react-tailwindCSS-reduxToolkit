import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "@store/userSlice";
import Loading from "@components/Loading";
import ProfileImg from "@components/ProfileImg";

const Profile = () => {
  /* ___ States ___ */
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const [activeTab, setActiveTab] = useState("appointments");

  /* ___ Hooks ___ */
  const { user, isLoading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name,
        email: user.email,
        phone: user.phone,
        gender: user.gender === "male" ? "ذكر" : "أنثى",
        address: user.address,
      });
    }
  }, [user]);

  /* ___ Handlers ___ */
  const handleEdit = () => {
    if (isEditing) {
      handleProfileUpdate();
      console.log("updating");
    } else {
      setIsEditing(!isEditing);
      console.log("end update");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProfileUpdate = async () => {
    const formData = new FormData();
    formData.append("user_id", user.id);
    formData.append("about", "");
    Object.entries(profileData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch(
        `https://darkgray-crow-946145.hostingersite.com/api/user/update`,
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
      setIsEditing(false);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  /* ___ Renders ___ */
  if (isLoading) {
    return (
      <div className="min-h-[100vh] flex items-center justify-center">
        <Loading color={"primary-color"} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[100vh] flex items-center justify-center">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-8 font-gehili">
      <div className="max-w-6xl p-8 mx-auto">
        {user && (
          <>
            <div className="flex flex-col gap-8 md:flex-row">
              {/* Profile Image */}
              <ProfileImg />

              {/* Profile Info */}
              <div className="flex-grow space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="block mb-1 text-gray-600">الاسم</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={profileData?.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md max-w-[300px]"
                      />
                    ) : (
                      <h1 className="text-2xl font-bold">
                        {profileData?.name}
                      </h1>
                    )}
                  </div>

                  <button
                    onClick={handleEdit}
                    className="px-4 py-2 text-white transition-colors rounded-lg bg-primary-color hover:bg-primary-color-75"
                  >
                    {isEditing ? "حفظ التعديل" : "تعديل الحساب"}
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block mb-1 text-gray-600">
                      البريد الإلكتروني
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={profileData.email}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                      />
                    ) : (
                      <p className="text-gray-800">{profileData?.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-1 text-gray-600">
                      رقم الموبايل
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                      />
                    ) : (
                      <p className="text-gray-800">{profileData?.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-1 text-gray-600">النوع</label>
                    {isEditing ? (
                      <select
                        name="gender"
                        value={profileData?.gender}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                      >
                        <option value="ذكر">ذكر</option>
                        <option value="أنثى">أنثى</option>
                      </select>
                    ) : (
                      <p className="text-gray-800">{profileData?.gender}</p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-1 text-gray-600">العنوان</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="address"
                        value={profileData.address}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                      />
                    ) : (
                      <p className="text-gray-800">{profileData?.address}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-8">
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px space-x-8" aria-label="Tabs">
                  <button
                    onClick={() => handleTabClick("appointments")}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                      activeTab === "appointments"
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    الحجوزات
                  </button>
                  <button
                    onClick={() => handleTabClick("payments")}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium ${
                      activeTab === "payments"
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    المدفوعات
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              <div className="mt-4">
                {activeTab === "payments" && (
                  <div className="space-y-4">
                    {user &&
                      user.payment?.map((payment) => (
                        <div
                          key={payment.id}
                          className="p-4 rounded-lg bg-gray-50"
                        >
                          <p className="text-sm text-gray-600">
                            التاريخ: {payment.date}
                          </p>
                          <p className="text-sm text-gray-600">
                            المبلغ: {payment.total}
                          </p>
                          <p className="text-sm text-green-600">
                            الحالة: {payment.status}
                          </p>
                        </div>
                      ))}
                  </div>
                )}
                {activeTab === "appointments" && (
                  <div className="space-y-4">
                    {user &&
                      user.dates?.map((appointment) => (
                        <div
                          key={appointment.id}
                          className="p-4 rounded-lg bg-gray-50"
                        >
                          <p className="text-sm text-gray-600">
                            التاريخ: {appointment.day.split(" ")[0]}
                          </p>
                          <p className="text-sm text-gray-600">
                            الوقت: {appointment.hour}
                          </p>
                          <p className="text-sm text-gray-600">
                            الحالة: {appointment.type}
                          </p>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
