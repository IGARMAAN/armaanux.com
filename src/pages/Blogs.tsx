import astronaut from "@/assets/astronaut.gif"

export const Blogs = () => {
    return (
        <section className="pb-14 h-[77vh] flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-end gap-2 w-8/12">
            <img src={astronaut} alt="" width={300} />
            <p className="w-10/12">Looks like this space is still brewing its first story! Stay tuned, exciting blogs are on the way. In the meantime, dive into the rest of my portfolio, there's plenty to explore :)</p>
            </div>
           
        </section>
    )
}
