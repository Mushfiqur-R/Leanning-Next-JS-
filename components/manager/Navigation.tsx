"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navigation (){
      const pathname = usePathname();
  if (pathname === "/Signin") return null;
    if (pathname === "/manager/signup") return null;
    return(
        <>
        <div className="h-[50px] w-full flex justify-between px-2 ">
            <div className="h-[50px] w-[100px] border-2 border-red-500"> logo</div>
           <div className="h-[50px] w-[90vw] rounded p-2 border-2 bg-transperent border-red-500  flex justify-center gap-50">
              <Link href="/About" className="hover:underline">About</Link>
               <Link href="/Contact">Contacts</Link>
               <Link href="/DonerList">Doner List</Link>
              <Link href ="/Signin">SignIn</Link>
              <Link href ="/manager/signup">Signup</Link>
            </div>
         </div>
        </>
    )
};

