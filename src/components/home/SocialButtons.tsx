import { Icon } from "@iconify/react";

export const SocialButtons = () => {
  return (
    <div className="flex gap-4 tablet:gap-6 items-center justify-center mt-6">
      <a
        href="https://www.facebook.com/NeshiViray/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          icon="cib:facebook"
          className="size-8 tablet:size-10 transition-colors duration-200 hover:text-blue-400"
        />
      </a>
      <a
        href="https://www.instagram.com/neshi.vry/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          icon="mage:instagram-circle"
          className="size-10 rounded-full tablet:size-12 transition-colors duration-200 hover:text-blue-400"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/liam-kyle-viray/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          icon="entypo-social:linkedin-with-circle"
          className="size-9 tablet:size-11 rounded-full transition-colors duration-200 hover:text-blue-400"
        />
      </a>

      <a
        href="https://github.com/xNeshi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon
          icon="codicon:github-inverted"
          className="size-8 tablet:size-10 transition-colors duration-200 hover:text-blue-400"
        />
      </a>
    </div>
  );
};

export default SocialButtons;
