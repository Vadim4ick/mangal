"use client";

import { ReactNode, useEffect, useState } from "react";
import { Loader } from "../ui/loader";
import { useBasketStore } from "@/store/basket";
import { useStore } from "../hooks/useStore";

const Providers = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useStore(useBasketStore, (state) => state);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="z-50 h-screen w-full bg-white">
        <Loader className="absolute left-1/2 top-1/2 size-10" />
      </div>
    );
  }

  return <>{children}</>;
};

export { Providers };
