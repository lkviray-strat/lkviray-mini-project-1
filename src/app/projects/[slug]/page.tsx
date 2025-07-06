import FadeInSection from "@/components/motion/FadeInSection";
import ProjectCarousel from "@/components/project/ProjectCarousel";
import ProjectPageButtons from "@/components/project/ProjectPageButtons";
import { getProjectBySlug } from "@/lib/queries/project";
import { Project } from "@/lib/types";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return (
    <div className="px-4 tablet:px-9 laptop:px-12">
      <section
        id="projects"
        className="flex flex-col items-center"
      >
        <div className="mt-[6rem] desktop:mt-[8rem] py-8 laptop:mb-0 mb-30 h-full flex flex-col laptop:flex-row items-center px-9 w-full max-w-[1400px]">
          <FadeInSection
            delay={0.3}
            className="w-full"
          >
            <ProjectCarousel project={project as Project} />
          </FadeInSection>

          <div className="flex flex-col gap-3 w-full max-w-[600px] laptop:ml-10">
            <FadeInSection delay={0.5}>
              <h1 className=" text-[20px] lphone:text-[35px] tablet:text-[30px] font-extrabold tracking-tight transition-colors duration-200 hover:text-blue-400">
                {project?.title}
              </h1>
            </FadeInSection>

            <FadeInSection delay={0.7}>
              <p className="text-[13px] tablet:text-[16px] mb-4">
                {project?.description}
              </p>
            </FadeInSection>

            <FadeInSection delay={0.9}>
              <ProjectPageButtons project={project as Project} />
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}
