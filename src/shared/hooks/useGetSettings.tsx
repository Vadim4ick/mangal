import { useEffect, useState } from "react";
import { fetchSettings } from "../services/createPayment";
import { Settings } from "@/graphql/__generated__";

const useGetSettings = () => {
  const [settings, setSettings] = useState<Partial<
    Settings | undefined
  > | null>(null);

  useEffect(() => {
    fetchSettings().then((settings) => {
      setSettings(settings);
    });
  }, []);

  return { settings };
};

export { useGetSettings };
