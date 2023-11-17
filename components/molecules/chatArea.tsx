import React from "react";
import ImageUpload from "./profilePhoto";

const ChartArea: React.FC = () => {
  return (
    <div>
      <div className="bg-white p-4 rounded-[30px] h-[80vh] w-[100%]">
        <ImageUpload />
      </div>
    </div>
  );
};

export default ChartArea;
