"use client";
import { approachSteps } from "@/lib/constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

const WorkApproach = () => {
  const themeColor = "#050112";
  const contentBackgroundColor = "#0A0B20";

  return (
    <div
      id="strategy"
      className="flex items-center flex-col justify-center gap-5"
    >
      <h1 className="text_gradient text-3xl font-bold">
        Developement strategy
      </h1>
      <VerticalTimeline>
        {approachSteps.map(({ Icon, title, description }, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--work`}
            iconStyle={{ background: themeColor, color: "#fff" }}
            visible
            icon={<Icon />}
            contentStyle={{
              background: contentBackgroundColor,
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${contentBackgroundColor}`,
            }}
          >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <p>{description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default WorkApproach;
