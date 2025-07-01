import Navbar from "@/components/Navbar";
import { Button, buttonVariants } from "@/components/ui/button";
import { quickSand } from "../../public/fonts/fonts";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex flex-col gap-2 min-h-screen items-center justify-center bg-[var(--primaryBg)]"
      >
        <div className="flex flex-col w-full px-9 -mt-20 text-center justify-center items-center">
          <h1
            className={` text-[27px] mphone:text-[32px] lphone:text-[38px] tablet:text-[44px] laptop:text-[60px] font-semibold`}
          >
            Hello,{" "}
            <span className="-ml-2 tablet:-ml-4 ">
              I'm Liam <span className="hidden tablet:inline">Kyle</span>
            </span>
          </h1>
          <h1
            className={`text-[16px] lphone:text-[22px] tablet:text-[20px] laptop:text-[28px] italic`}
          >
            An Aspiring Full Stack <br className="tablet:hidden" /> Software
            Engineer
          </h1>

          <div className="flex flex-col lphone:flex-row w-full lphone:w-fit gap-3 laptop:gap-5 items-center mt-4 px-3 justify-center">
            <a
              href="#about"
              className={`${buttonVariants({
                variant: "default",
              })} flex-1 bg-blue-700 p-4 w-full !px-6 lphone:!py-4 laptop:!px-9 text-[15px] lphone:text-[15px] tablet:text-[18px] tablet:!py-5 text-white hover:bg-blue-800 active:bg-blue-400 shadow-xl`}
            >
              Know About Me
            </a>

            <Button className="flex-1 bg-[var(--secondaryBg)] w-full !px-6 lphone:!py-4 laptop:!px-9 text-[15px] lphone:text-[15px] tablet:text-[18px] tablet:!py-5 shadow-xl">
              Download CV
            </Button>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="flex flex-col gap-2 h-screen items-center justify-center"
      ></section>
    </>
  );
}
