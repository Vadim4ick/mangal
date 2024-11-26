import { Header } from "@/components/Header";
import { Toaster } from "sonner";

export default function OrdersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header bottomLinks={false} />

      {children}

      <Toaster richColors duration={2000} />
    </>
  );
}
