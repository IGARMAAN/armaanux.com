import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import projectimg1 from "@/assets/project-1.png"
import { Button } from "@/components/ui/button";

interface ProjectsProps {
  image: string;
  name: string;
  description: string;
  time: string;
  casestudyLink?: string;
  prototypeLink?: string;
}

const projects: ProjectsProps[] = [
{
  image: projectimg1,
  name: "Freelancer App Redesigned",
  description: "Redesigning the Freelancer app to create a modern, seamless experience that's easier to navigate and tailored to user needs.",
  time: "34",
  casestudyLink: "https://www.redgifs.com",
  prototypeLink: "https://www.redgifs.com"
},
{
  image: projectimg1,
  name: "Freelancer App Redesigned",
  description: "Redesigning the Freelancer app to create a modern, seamless experience that's easier to navigate and tailored to user needs.",
  time: "34",
  casestudyLink: "https://www.redgifs.com",
  prototypeLink: "https://www.redgifs.com"
},
{
  image: projectimg1,
  name: "Freelancer App Redesigned",
  description: "Redesigning the Freelancer app to create a modern, seamless experience that's easier to navigate and tailored to user needs.",
  time: "34",
  casestudyLink: "https://www.redgifs.com",
  prototypeLink: "https://www.redgifs.com"
},
{
  image: projectimg1,
  name: "Freelancer App Redesigned",
  description: "Redesigning the Freelancer app to create a modern, seamless experience that's easier to navigate and tailored to user needs.",
  time: "34",
  casestudyLink: "https://www.redgifs.com",
  prototypeLink: "https://www.redgifs.com"
},
{
  image: projectimg1,
  name: "Freelancer App Redesigned",
  description: "Redesigning the Freelancer app to create a modern, seamless experience that's easier to navigate and tailored to user needs.",
  time: "34",
  casestudyLink: "https://www.redgifs.com",
  prototypeLink: "https://www.redgifs.com"
},
{
  image: projectimg1,
  name: "Freelancer App Redesigned",
  description: "Redesigning the Freelancer app to create a modern, seamless experience that's easier to navigate and tailored to user needs.",
  time: "34",
  casestudyLink: "https://www.redgifs.com",
  prototypeLink: "https://www.redgifs.com"
},
];
export const Projects = () => {
  return (
    <section
      id="testimonials"
      className="w-full px-20 space-y-5 container py-14 pt-0 sm:py-32"
    >
      <h1 className="text-2xl md:text-3xl inline font-heading text-black dark:text-white">Projects</h1>
      <p>Here's a glimpse of the work I'm proud of - projects that challenged me, inspired me, and made me a better designer.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {projects.map(
          ({ image, name, description, time }: ProjectsProps) => (
            <Card
              key={name}
              className=" md:break-inside-avoid overflow-hidden"
            >

              
                <img src={image} alt="" className="w-full" />
             
              <CardTitle className="text-xl">{name}</CardTitle>
              <CardContent className="text-[#B4B4B4]">{description}</CardContent>
              <CardContent className="flex flex-row justify-start items-center gap-2"><Timeiconsvg />{time}{" Hours"}</CardContent>
              <CardFooter className="flex flex-row justify-end items-center gap-4">
                <Button className="w-full bg-white hover:bg-[#ffffffb0]">Case Study</Button>
                <Button variant={"outline"} className="w-full border-white">View Prototype</Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  )
}

const Timeiconsvg = () => {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.51479 7.51467C5.55166 9.47777 4.32995 12.0608 4.05781 14.8237C3.78567 17.5866 4.47995 20.3584 6.02234 22.6668C7.56473 24.9752 9.85981 26.6773 12.5165 27.4833C15.1732 28.2892 18.0272 28.149 20.5921 27.0866C23.1571 26.0242 25.2743 24.1053 26.583 21.6568C27.8918 19.2084 28.3111 16.3819 27.7695 13.659C27.2279 10.9361 25.7589 8.4852 23.6128 6.72394C21.4668 4.96268 18.7764 4.00002 16.0001 4V6.66667M16.0001 16L8.00012 8M28.0001 16H25.3335M16.0001 25.3333V28M6.66679 16H4.00012" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>

  )
}
