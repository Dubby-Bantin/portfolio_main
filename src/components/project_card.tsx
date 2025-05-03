import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProjectCardProps {
  completed?: boolean;
  title: string;
  desc: string;
  img: StaticImageData;
  iconLists: (
    | {
        name: string;
        image: StaticImageData;
      }
    | undefined
  )[];
  live_url: string;
  git_link?: string;
}
const ProjectCard = ({
  completed,
  title,
  desc,
  img,
  iconLists,
  live_url,
  git_link,
}: ProjectCardProps) => {
  return (
    <div className="bg-gradient-to-r from-[#0C0E23]  rounded-lg p-6 text-white shadow-lg max-w-[26rem] mx-auto max-h-max">
      <div className="bg-gradient-to-r from-[#0C0E23] rounded-lg overflow-clip">
        <Image
          src={img}
          alt={title}
          className="w-full cursor-pointer object-cover"
          width={400}
          height={400}
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center w-full">
          <h3 className="text-lg font-semibold font-heading text-transparent  bg-clip-text bg-gradient-to-t from-indigo-900 via-blue-500 to-neutral-200 bg-opacity-60">
            {title}
          </h3>
          {completed === false && (
            <div className="py-1.5 px-3 rounded-lg text-xs font-medium  bg-blue-900/20 backdrop-blur-sm border border-blue-400/30 text-blue-100 shadow-sm shadow-blue-900/30 hover:bg-blue-900/30 transition-all duration-200">
              Under Development
            </div>
          )}
        </div>
        <p className="mt-2 text-sm text-gray-300 font-text">{desc}</p>
      </div>
      <div className="mt-4 flex items-center">
        {iconLists?.map(
          (icon, i) =>
            icon && (
              <TooltipProvider key={i}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    {/* <Button variant="ghost"> */}
                    <div className="p-2 rounded-full bg-gradient-to-r from-[#0C0E23] to-[#050112] -mr-2">
                      <Image
                        src={icon.image}
                        alt="Tech Stack 1"
                        width={22}
                        height={22}
                        className="rounded-full"
                      />
                    </div>
                    {/* </Button> */}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{icon.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )
        )}
      </div>
      <div className="flex items-center justify-between mt-4 ">
        {git_link && (
          <div className="flex items-center gap-2">
            <Link
              href={git_link}
              target="_blank"
              className="text-right text-transparent font-heading font-bold bg-clip-text bg-gradient-to-t from-indigo-900 via-blue-500 to-neutral-200 bg-opacity-60"
            >
              Source code
            </Link>
            <FaCode className="text-blue-500 text-sm" />
          </div>
        )}

        <div className="flex items-center gap-2">
          {completed === undefined && (
            <Link
              href={live_url}
              target="_blank"
              className="text-right text-transparent font-heading font-bold bg-clip-text bg-gradient-to-t from-indigo-900 via-blue-500 to-neutral-200 bg-opacity-60"
            >
              Check Live Site
            </Link>
          )}
          <FaArrowTrendUp className="text-blue-500 text-sm" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
