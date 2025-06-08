"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import HeroRegister from "../../components/HeroRegister/HeroRegister";

export default function Register() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      router.push("/");
    }
  }, [router]);

  return (
    <main className="bg-[#1E1E1E] text-white">
      <HeroRegister />
    </main>
  );
}
