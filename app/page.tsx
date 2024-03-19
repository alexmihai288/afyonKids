import { Container } from "@/components/Container";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <main className="relative z-20">
      <video
        src="/main-video.mp4"
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        className="object-cover w-full h-full min-h-[90vh] md:h-[60vh] max-h-[100vh] brightness-75"
      ></video>
      <div className="w-full absolute top-0 left-0 right-0 p-2 sm:px-5 sm:py-2.5 md:px-10 md:py-5 z-50">
        <Container>
          <Navbar whereClause="main" />
        </Container>
      </div>
    </main>
  );
}
