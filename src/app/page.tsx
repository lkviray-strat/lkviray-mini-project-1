import Navbar from "@/components/Navbar";
import { Button, buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="flex flex-col gap-2 h-screen items-center justify-center bg-[var(--primaryBg)]"
      >
        <div className="flex flex-col -mt-10">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="text-6xl font-semibold">Hello, I'm Liam Kyle</h1>
            <h1 className="text-3xl italic">
              An Aspiring Full Stack Software Engineer
            </h1>
          </div>

          <div className="flex flex-row gap-2 items-center mt-4 justify-center">
            <a
              href="#about"
              className={`${buttonVariants({
                variant: "default",
              })} bg-blue-700 p-4 px-6 text-[17px] text-white hover:bg-blue-800 transition-colors active:bg-blue-400 duration-300`}
            >
              Know About Me
            </a>

            <Button className="bg-[var(--secondaryBg)] px-6 p-4 text-[17px] ">
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
