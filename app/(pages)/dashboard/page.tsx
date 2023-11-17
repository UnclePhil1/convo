import ChartArea from "@/components/molecules/chatArea";
import Profile from "@/components/molecules/profile";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="w-[100%] h-auto flex gap-5 justify-center items-center p-8">
        <div className="w-[70%]">
          <ChartArea />
        </div>
        <div className="w-[30%]">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
