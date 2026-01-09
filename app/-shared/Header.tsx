"use client"


import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';

function Header()  {
 const {user}=useUser();
  return (
   
    <div>
            <div className="flex items-center justify-between p-4">
      <div className="flex gap-2 items-center">
     <Image src={'/logo.png'} alt="logo" width={40} height={40}></Image>
         <h2 className="text-xl font-semibold"><span className="text-primary">UIUX</span> MOCK</h2>
      </div>
  <ul className="flex gap-10 items-center text-lg ">
    <li className="hover:text-primary cursor-pointer">home</li>
    <li className="hover:text-primary cursor-pointer">pricing</li>
  </ul>

  {!user? (
  <SignInButton mode='modal'>
    <Button>GET Started</Button>
  </SignInButton>
  ) : (
   <UserButton/>
)}
    </div>
    </div>
  );
  
}

export default Header
