import avatar from '../assets/avatar.png';
import { AboutSVG } from './Icons';
import { Testimonials } from './Testimonials';
export const About = () => {
  return (
    <section id="about" className="container py-14 pt-0 sm:py-32 flex flex-col items-center justify-center">
      <div className='flex flex-col-reverse md:flex-row gap-10 items-center justify-center md:px-20'>
        <div className="space-y-6">
          <h1 className="text-2xl md:text-3xl inline font-heading text-black dark:text-white">About Me</h1>
          <div className="space-y-6 text-justify">
            <p>
              Hey, I'm Armaan, a 22-year-old UI/UX Designer based in Lucknow, India. My job? To create designs that not only look great but actually work because let's be real, what's the point of something pretty if it doesn't function? Whether it's a website, an app, a logo, or a complete brand makeover, I make sure every design is a perfect balance of form and function.
            </p>
            <p>
              I've been designing for 4 years, and while I'm also surviving my 4th year of Computer Science at BBDEC Lucknow, it's design that gets me out of bed in the morning (or at least keeps me from hitting snooze for the 10th time). Freelancing lets me dive into exciting projects, challenge myself, and learn something new every time plus, it's a great excuse to avoid that 'real job' life.
            </p>
            <p>
              I've done it all - logos, apps, websites but my sweet spot is creating designs that are clean, pixel-perfect, and user-friendly. Because it's not just about making things look good; it's about making sure they actually work for the people using them.
              When I'm not designing, you'll probably find me binge-watching movies and shows, gaming (because who can resist?), or traveling to new places.
            </p>
            <p>
              That's enough about me for now! Got a project that needs a bit of creativity? Let's chat - no pressure, just a friendly conversation. I'd be happy to help bring your vision to life!            </p>
          </div>
        </div>

        <img src={avatar} alt="Armaan Parvez" width={300} />

      </div>
      <hr className="border-dotted border-t-2 border-gray-400 my-20 w-5/12" />
      <div className='md:px-20 relative'>
        <div className='flex flex-col items-start justify-center space-y-6'>
          <h1 className="text-2xl md:text-3xl inline font-heading text-black dark:text-white">How I work?</h1>
          <p>My design process? Simple, yet powerful ~</p>
          <ul className='flex flex-col md:w-2/3 gap-4 text-justify'>
            <li>
              <span className='text-2xl'>1. Listen <br /></span>For me, every great design starts with a conversation. I'll take the time to really understand your vision, goals, and what you need. It's not about rushing in. It's about figuring out how to make your project shine (and maybe doing a little doodling in my sketchbook if inspiration hits).
            </li>
            <li>
              <span className='text-2xl'>2. Brainstorm <br /></span>Before jumping into the digital side of things, I grab my trusty sketchbook. This is where rough ideas start to take shape, whether it's wireframes or logo concepts. Honestly, my sketchbook doesn't get much attention otherwise, so it's a special moment for both of us.
            </li>
            <li>
              <span className='text-2xl'>3. Design <br /></span>With the sketches as a guide, I bring your ideas to life on screen. This is where the magic happens - designs take form, feedback sharpens them, and together, we create something that's not only beautiful but also works perfectly.
            </li>
            <li>
              <span className='text-2xl'>4. Deliver <br /></span>Once you're excited about the result, I wrap everything up and send it your way. There's nothing better than seeing a happy client :) (and maybe treating myself to a coffee after a job well done).
            </li>
          </ul>
        </div>
        <div className='absolute right-9 bottom-10'>
          <AboutSVG />
        </div>
      </div>
      <hr className="border-dotted border-t-2 border-gray-400 my-20 w-5/12" />
      <Testimonials />
    </section>
  );
};
