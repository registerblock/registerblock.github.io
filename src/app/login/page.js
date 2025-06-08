"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import HeroLogin from "../../components/HeroLogin/HeroLogin"

export default function Login() {
  const router = useRouter();
  
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      router.push("/");
    }
  }, [router]);
    
  return (
    <main className="bg-[#1E1E1E] text-white ">
      <HeroLogin/>
    </main>
  )
}