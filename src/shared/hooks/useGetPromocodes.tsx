import { useEffect, useState } from "react";
import { fetchPromocodes } from "../services/createPayment";
import { Promocodes } from "@/graphql/__generated__";

const useGetPromocodes = () => {
  const [promocodes, setPromocodes] = useState<
    readonly Promocodes[] | undefined | null
  >(null);

  useEffect(() => {
    fetchPromocodes().then((res) => {
      setPromocodes(res);
    });
  }, []);

  return { promocodes };
};

export { useGetPromocodes };
