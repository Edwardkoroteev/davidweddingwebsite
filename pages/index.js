import MaxW from "@/components/MaxW";
import Footer from "@/components/Footer";
import { useRef } from "react";

export default function Index() {
  const scrollArea = useRef(null);

  const scrollToContactClick = () => {
    scrollArea.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white flex flex-col items-center">
      <div className="flex flex-col sm:flex-row w-full justify-center items-center bg-red-300 gap-10">
        <div className="aspect-w-1">
          <img src="/Img1.jpg" className="w-full h-full" />
        </div>
        <div className="aspect-w-1">
          <img src="/Img2.jpg" className="w-full h-full" />
        </div>
        <div className="aspect-w-1">
          <img src="/Img3.jpg" className="w-full h-full" />
        </div>
      </div>
      <MaxW className="xl:px-0 px-4 py-12">
        <Footer />
      </MaxW>
    </div>
  );
}
