import Navbar from "@/components/Navbar";
import { Button, buttonVariants } from "@/components/ui/button";
import { quickSand } from "../../public/fonts/fonts";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex flex-col gap-2 min-h-screen items-center justify-center"
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
      <div className="px-4 tablet:px-9 laptop:px-12">
        <section
          id="about"
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center px-9 w-full max-w-[950px] tablet:items-start">
            <h1 className="mt-[6rem] laptop:mt-[8rem] font-bold text-[30px] lphone:text-[45px] tablet:text-[70px] tracking-tight">
              About Me
            </h1>

            {/* PlaceHolder */}
            <div className="h-[100vh]"></div>
          </div>
        </section>
        <section
          id="projects"
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center px-9 w-full max-w-[950px] tablet:items-start">
            <h1 className="mt-[6rem] laptop:mt-[8rem] font-bold text-[30px] lphone:text-[45px] tablet:text-[70px] tracking-tight">
              Projects
            </h1>

            {/* PlaceHolder */}
            <div className="h-[100vh]"></div>
          </div>
        </section>
        <section
          id="contact"
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center px-9 w-full max-w-[950px] tablet:items-start">
            <h1 className="mt-[6rem] laptop:mt-[8rem] font-bold text-[30px] lphone:text-[45px] tablet:text-[70px] tracking-tight">
              Contact Me
            </h1>

            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
