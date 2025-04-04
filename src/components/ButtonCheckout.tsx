'use client';

import axios, { AxiosError } from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";

const ButtonCheckout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();

  const handleSubscribe = async () => {
    if (isLoading) return;
    
    if (!session?.user) {
      signIn("google");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post("/api/billing/create-checkout", {
        successUrl: "https://selectivi.cat/premium/success",
        cancelUrl: "https://selectivi.cat/premium",
      });

      const checkoutUrl = response.data.url;
      
      if (!checkoutUrl) {
        throw new Error("No checkout URL received");
      }

      console.log("Redirecting to:", checkoutUrl);
      window.location.href = checkoutUrl;

    } catch (error) {
      console.error("Checkout error:", error);
      
      const errorMessage = 
        (error as AxiosError<{ error: string }>)?.response?.data?.error ||
        (error as Error).message ||
        "Something went wrong";
      
      toast.error(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <button 
      className="w-full group bg-selectivi-yellow text-black px-6 py-4 rounded-xl font-bold text-lg relative overflow-hidden hover:bg-selectivi-yellow/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={handleSubscribe}
      disabled={isLoading}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {isLoading && (
          <span className="loading loading-spinner loading-xs"></span>
        )}
        <span className="flex items-center gap-2">
          Començar ara per només 14.99€
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
      </span>
    </button>
  );
};

export default ButtonCheckout; 