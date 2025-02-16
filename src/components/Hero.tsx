import HeroShape from "./HeroShape";

export const Hero = () => {
  return (
    <section className="dark:bg-[url('@/assets/image.png')] bg-cover bg-center bg-no-repeat grid lg:grid-cols-2 items-center justify-center py-20 md:py-44">
      <div className="text-center lg:text-start pl-20">
        <p className="text-[25px] text-white/50 md:w-10/12 mx-auto lg:mx-0 italic font-extrabold">
          Hello, I'm
        </p>
        <main className="text-5xl md:text-[82px] font-bold">
          <h1 className="inline font-heading text-black dark:text-white">
            Armaan Parvez
          </h1>
        </main>

        <p className="text-[20px] text-nowrap pt-3 text-black dark:text-white md:w-10/12 mx-auto lg:mx-0">
          I create designs that are clean, functional, and leave a lasting impression.
        </p>
      </div>

      <div className="z-10">
        <HeroShape />
        <div className="absolute shadow-black/60 shadow-[10px_10px_70px_70px] -z-10 w-40 h-40 -rotate-90 right-[227px] top-[348px] rounded-full" />
      </div>

    </section>
  );
};
