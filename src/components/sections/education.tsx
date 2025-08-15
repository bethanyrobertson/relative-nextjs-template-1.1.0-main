"use client";

import { Code, Brush, PenTool, BookOpen } from "lucide-react";

import SectionHeader from "../section-header";

const Education = () => {
  const services = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Certificate in Full-Stack Development With JavaScript",
      description:
        "University of Washington, 2024-2025",
      items: ["Javascript", "Frontend Development", "Backend Development", "React", "Node.JS", "MongoDB"],
    },
    {
      icon: <Brush className="h-6 w-6" />,
      title: "Master of Fine Arts",
      description:
        "Rutgers University",
      items: ["Printmaking", "Visual Arts", "Graphic Design"],
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Master of Science in Education",
      description:
        "The University of Tennessee, Knoxville",
      items: ["Art Education", "K-12"],
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Bachelor of Fine Arts",
      description:
        "The University of Tennessee, Knoxville",
      items: ["Printmaking", "Art Education", "Design"],
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <SectionHeader
            category="EDUCATION"
            title="I'm a continuous learner"
            icon={BookOpen}
            description="From teaching to design to coding, I've always loved learning."
            className="border-none"
        />

      <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-border bg-muted flex flex-col items-start gap-6 rounded-lg border p-6 md:flex-row"
              >
                <div className="flex-shrink-0">
                  <div className="bg-[#dbe9e7] dark:bg-[#002e34] flex h-12 w-12 items-center justify-center rounded-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="font-mono font-bold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="bg-muted dark:bg-[#002e34] inline-flex items-center rounded-full px-3 py-1 text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};

export default Education;
