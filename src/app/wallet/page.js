"use client";
import { Suspense } from "react";
import WalletInner from "./WalletInner";
export default function Wallet() {
  

  return (

    <Suspense fallback={<div>Loading...</div>}>
        <WalletInner/>  
    </Suspense>
  );
}
