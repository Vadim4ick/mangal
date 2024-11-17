import { Header } from "@/components/Header";

export default function OrdersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header bottomLinks={false} />

      {children}
    </>
  );
}
