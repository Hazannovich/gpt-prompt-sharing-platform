import Image from "next/image";

const Profile = ({ setToggleDropdown, avatar }) => {
  return (
    <Image
      src={avatar}
      alt="User Profile"
      width={37}
      height={37}
      className="rounded-full"
      onClick={() => setToggleDropdown((prev) => !prev)}
    />
  );
};

export default Profile;
