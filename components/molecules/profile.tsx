import React from "react";
import ProfileHead from "../atoms/profileHead";
import DropboxStarred from "./dropboxstarred";
import DropboxMedia from "./dropboxmedia";
import '../style.css';
import DropboxFiles from "./dropboxfiles";
import DropboxInfo from "./dropboxinfo";
import Logout from "../atoms/logout";

const Profile: React.FC = () => {
  return (
    <div>
      <div className="bg-white p-4 rounded-[30px] flex flex-col justify-start items-center w-[100%] h-[80vh] overflow-hidden overflow-y-auto scrollbar">
        <ProfileHead />
        <div className="pt-4 w-[100%]">
          <DropboxStarred />
        </div>
        <div className="pt-4 w-[100%]">
          <DropboxMedia />
        </div>
        <div className="pt-4 w-[100%]">
          <DropboxFiles />
        </div>
        <div className="pt-4 w-[100%]">
          <DropboxInfo />
        </div>
        <div className="pt-4 w-[100%]">
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Profile;
