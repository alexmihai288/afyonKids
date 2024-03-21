import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Container>
        <Navbar />
      </Container>
      {children}
    </div>
  );
}
