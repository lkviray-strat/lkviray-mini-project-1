import AboutSection from "@/components/about/AboutSection";
import ContactForm from "@/components/contact/ContactForm";
import Heading from "@/components/home/Heading";
import HomeButtons from "@/components/home/HomeButtons";
import Subheading from "@/components/home/Subheading";
import ProjectSection from "@/components/project/ProjectSection";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex flex-col gap-2 min-h-screen items-center justify-center"
      >
        <div className="flex flex-col w-full px-9 -mt-15 text-center justify-center items-center">
          <Heading />
          <Subheading />

          <HomeButtons />
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
