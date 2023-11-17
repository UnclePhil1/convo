"use client";
import React, { useState, ChangeEvent, useEffect } from "react";

const ImageUpload: React.FC = () => {
  const storedImage =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("uploadedImage")
      : null;
  const [selectedImage, setSelectedImage] = useState<string | null>(
    storedImage || null
  );

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (readerEvent) => {
        const imageData = readerEvent.target?.result as string;
        setSelectedImage(imageData);
        if (typeof localStorage !== "undefined") {
          localStorage.setItem("uploadedImage", imageData);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    // Clear local storage on component unmount
    return () => {
      if (typeof localStorage !== "undefined") {
        localStorage.removeItem("uploadedImage");
      }
    };
  }, []);

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: "100%", maxHeight: "300px" }}
          />
      )}
    </div>
  );
};

export default ImageUpload;
