import { buttonVariants } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Subheading from "@/components/Subheading";

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
              I&apos;m
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent font-bold">
                {" "}
                Liam <span className="hidden tablet:inline">Kyle</span>
              </span>
            </span>
          </h1>
          <Subheading />

          <div className="flex flex-col lphone:flex-row w-full lphone:w-fit gap-3 laptop:gap-5 items-center mt-4 px-3 justify-center">
            <Link
              href="#about"
              className={`${buttonVariants({
                variant: "default",
              })} flex-1 bg-blue-700 p-4 w-full !px-6 lphone:!py-4 laptop:!px-9 text-[15px] lphone:text-[15px] tablet:text-[18px] tablet:!py-5 text-white hover:bg-blue-800 active:bg-blue-400 shadow-xl`}
            >
              Know About Me
            </Link>

            <Link
              download
              href={"/downloads/Liam-Kyle-Viray_CV.pdf"}
              className={`${buttonVariants({
                variant: "default",
              })} flex-1 bg-[var(--secondaryBg)] w-full !px-6 lphone:!py-4 laptop:!px-9 text-[15px] lphone:text-[15px] tablet:text-[18px] tablet:!py-5 shadow-xl`}
            >
              Download CV
            </Link>
          </div>
          <div className="flex gap-7 items-center mt-10">
            <Link href="https://github.com/xNeshi">
              <Icon
                icon="codicon:github-inverted"
                className="size-10 transition-colors duration-200 hover:text-blue-400"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/liam-kyle-viray/">
              <Icon
                icon="devicon-plain:linkedin"
                className="size-10 transition-colors duration-200 hover:text-blue-400"
              />
            </Link>
          </div>
        </div>
      </section>

      <div className="px-4 tablet:px-9 laptop:px-12">
        <section
          id="about"
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center px-9 w-full max-w-[1250px] tablet:items-start">
            <h1 className="mt-[6rem] desktop:mt-[8rem] font-bold text-[30px] lphone:text-[45px] tablet:text-[70px] tracking-tight transition-colors duration-200 hover:text-blue-400">
              About Me
            </h1>

            <AboutSection />
          </div>
        </section>
        <section
          id="projects"
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center px-9 w-full max-w-[1250px]">
            <h1 className="mt-[6rem] desktop:mt-[8rem] font-bold text-[30px] lphone:text-[45px] tablet:text-[70px] tracking-tight transition-colors duration-200 hover:text-blue-400">
              My Projects
            </h1>
          </div>

          <ProjectSection />
        </section>
        <section
          id="contact"
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center px-9 w-full max-w-[1250px] tablet:items-start">
            <h1 className="mt-[6rem] desktop:mt-[8rem] font-bold text-[30px] lphone:text-[45px] tablet:text-[70px] tracking-tight transition-colors duration-200 hover:text-blue-400">
              Contact Me
            </h1>

            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
