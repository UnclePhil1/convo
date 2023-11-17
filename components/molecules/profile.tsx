import React from "react";
import ProfileHead from "../atoms/profileHead";
import Dropbox from "./dropbox";

const Profile: React.FC = () => {
  return (
    <div>
      <div className="bg-white p-4 rounded-[30px] flex flex-col justify-center items-center">
        <ProfileHead />
        <div className="pt-4">
          <Dropbox />
        </div>
      </div>
    </div>
  );
};

export default Profile;
