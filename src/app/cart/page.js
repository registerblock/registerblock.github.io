"use client";

import { Suspense } from "react";
import CartInner from "./CartInner";        
export default function Cart() {

  
return (
    <Suspense fallback={<div>Loading...</div>}>
        <CartInner/>
    </Suspense>
    
    
  );
}
