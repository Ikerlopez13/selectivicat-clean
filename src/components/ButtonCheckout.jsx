"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const ButtonCheckout = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    if (isLoading) return;

    setIsLoading(true);

    try {
      const response = await axios.post("/api/billing/create-checkout", {
        successUrl: window.location.href + "/success",
        cancelUrl: window.location.href,
      });

      const checkoutUrl = response.data.url;
      window.location.href = checkoutUrl;
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        error.message ||
        "Something went wrong";

      toast.error(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-selectivi-yellow/50 rounded-lg p-4 text-center">
      <button 
        onClick={handleSubscribe}
        className="text-black/70 text-lg font-medium flex items-center justify-center gap-2 w-full hover:opacity-80 transition-opacity"
      >
        {isLoading ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : (
          <>
            Començar ara
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </>
        )}
      </button>
    </div>
  );
};

export default ButtonCheckout; 