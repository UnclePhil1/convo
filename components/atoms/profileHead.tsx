import Image from "next/image";
import React from "react";
import Face from '@/../../public/images/face.jpg'

const ProfileHead: React.FC = () => {

    return(
        <div>
            <div className="flex flex-col justify-center items-center">
                <Image src={Face} alt="Face.jpg" className="w-[50px] h-[50px] shadow-lg object-cover rounded-full" width={700} height={300}/>
                <h1 className="text-[18px] font-semibold pt-3">UnclePhil Nssien</h1>
                <h3 className="text-[13px] font-semibold text-slate-500">CEO / FOUNDER</h3>
            </div>
        </div>
    )
}

export default ProfileHead;