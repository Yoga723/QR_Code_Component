import Head from "next/head";
import QRImage from "../../public/images/image-qr-code.png";
import Image from "next/image";
import { outfit_400, outfit_700 } from "../styles/fontsSettings";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>QR Code FrontEnd Challenge</title>
      </Head>

      <div className="flex flex-col items-center justify-between min-h-screen bg-[#D5E1EF]">
        <div className="z-10 w-full md:w-10/12 max-w-sm min-h-[580px] bg-[#FEFFFF] font-mono text-sm flex flex-col items-center shadow-xl rounded-2xl mt-7">
          <Image
            src={QRImage}
            alt="picture of QR"
            className="flex rounded-xl max-w-[345px] w-11/12  mt-4"
          />

          <div className="flex flex-col px-4 items-center">
            <p
              className={`text-[#333C55] text-[24px] text-center ${outfit_700.variable} font-merryWeather_700 font-bold pt-7 pb-5`}
            >
              Improve your front-end <br /> skills by building projects
            </p>

            <p
              className={`flex-wrap w-9/12 text-[#A9ACB3] font-normal text-[15px] text-center ${outfit_400.variable} font-merryWeather_400`}
            >
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      <Footer/>
      </div>
    </div>
  );
}
