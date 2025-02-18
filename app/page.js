import { Explore } from "@/components/Explore";
import HomeCarousel from "@/components/HomeCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomeCarousel />
      <div className="relative">
        <Explore />
      </div>
    </div>
  );
}
