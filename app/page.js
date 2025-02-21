import { Explore } from "@/components/Explore";
import HomeCarousel from "@/components/HomeCarousel";
import { Objective } from "@/components/Objective";
import { SubFooter } from "@/components/SubFooter";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HomeCarousel />
      <div className="relative">
        <Explore />
        <SubFooter/>
        <Objective/>
      </div>
    </div>
  );
}
