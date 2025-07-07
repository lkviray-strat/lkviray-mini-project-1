import AboutSection from "@/components/about/AboutSection";
import ContactForm from "@/components/contact/ContactForm";
import Heading from "@/components/home/Heading";
import HomeButtons from "@/components/home/HomeButtons";
import SocialButtons from "@/components/home/SocialButtons";
import Subheading from "@/components/home/Subheading";
import FadeInSection from "@/components/motion/FadeInSection";
import ProjectSection from "@/components/project/ProjectSection";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex select-none flex-col gap-2 min-h-screen items-center justify-center"
      >
        <div className="flex flex-col w-full px-9 -mt-15 text-center justify-center items-center">
          <FadeInSection delay={0.1}>
            <Heading />
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <Subheading />
          </FadeInSection>
          <FadeInSection
            delay={0.7}
            className="flex w-full items-center justify-center"
          >
            <HomeButtons />
          </FadeInSection>
          <FadeInSection delay={0.9}>
            <SocialButtons />
          </FadeInSection>
        </div>
      </section>

      <div className=" select-none px-4 tablet:px-9 laptop:px-12">
        <section
          id="about"
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center px-9 w-full max-w-[1250px] tablet:items-start">
            <FadeInSection delay={0.3}>
              <h1 className="mt-[6rem] desktop:mt-[8rem] font-bold text-[30px] lphone:text-[45px] tablet:text-[70px] tracking-tight transition-colors duration-200 hover:text-blue-400">
                About Me
              </h1>
            </FadeInSection>

            <AboutSection />
          </div>
        </section>
        <section
          id="projects"
          className="flex flex-col items-center"
        >
          <FadeInSection delay={0.3}>
            <div className="flex flex-col items-center px-9 w-full max-w-[1250px]">
              <h1 className="mt-[6rem] desktop:mt-[8rem] font-bold text-[30px] lphone:text-[45px] tablet:text-[70px] tracking-tight transition-colors duration-200 hover:text-blue-400">
                My Projects
              </h1>
            </div>
          </FadeInSection>

          <ProjectSection />
        </section>
        <section
          id="contact"
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center px-9 w-full max-w-[1250px] tablet:items-start">
            <FadeInSection delay={0.3}>
              <h1 className="mt-[6rem] desktop:mt-[8rem] font-bold text-[30px] lphone:text-[45px] tablet:text-[70px] tracking-tight transition-colors duration-200 hover:text-blue-400">
                Contact Me
              </h1>
            </FadeInSection>
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
