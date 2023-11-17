"use client";
import React, { useState } from "react";
import { Person, NotificationAdd, FileCopySharp, CalendarViewDayRounded, Settings, Sms } from "@mui/icons-material";
import Image from "next/image";
import "../../components/style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Sidebar:React.FC = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const SideList = [
    {
        title: "Charts",
        icon: <Sms />,
        path: "/dashboard",
      },
      {
        title: "Calender",
        icon: <CalendarViewDayRounded />,
        path: "/dashboard/calender",
      },
      {
        title: "Files",
        icon: <FileCopySharp />,
        path: "/dashboard/files",
      },
      {
        title: "Noifications",
        icon: <NotificationAdd />,
        path: "/dashboard/notifications",
      },
      {
        title: "Profile",
        icon: <Person />,
        path: "/dashboard/profile",
      },
      {
        title: "Settings",
        icon: <Settings />,
        path: "/dashboard/settings",
      }
  ];
  const pathname = usePathname();

  return (
    <div className="w-[100%] lg:block lg:relative fixed top-0">
      <section
        className={`background h-screen duration-300 ${
          hovered ? "w-60 scale-100" : "w-[70px]"
        } py-3 pr-3 pt-[25px]`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <ul
          className={`${
            hovered ? "mt-[20px]" : "mt-[20px]"
          } flex flex-col justify-end align-end items-start gap-[10px]`}
        >
          {SideList.map((item, i) => (
            <li key={i} className={`${pathname == item.path ? 'border-l-[3px] border-l-white border-r-transparent border-t-transparent border-b-transparent border' : ''} flex w-[100%] justify-start items-center hover:bg-[#4d94ff14]`}>
              <span className="py-2 ml-2 text-[25px] text-white">{item.icon}</span>
              <Link
                className={`px-2 text-[15px] text-white w-[80%] self-center ${
                  hovered ? "scale-100 ml-[5px] cursor-pointer" : "scale-0"
                } duration-100`}
                href={item.path}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
