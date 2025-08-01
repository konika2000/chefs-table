
const Banner = () => {
    return (
        <div className=" bg-cover bg-no-repeat rounded-3xl  md:w-full h-full"
        style={{
            backgroundImage: 'url(https://i.ibb.co.com/3kYtv41/banner.png)',
        }}
        >   
        <div className="w-9/12 mx-auto flex flex-col justify-center items-center text-center h-full space-y-6 py-4">
             <h1 className="text-white font-bold md:text-[3.2rem]">Discover an exceptional cooking class tailored for you!</h1>
             <p className="text-lg text-white font-normal">Join a hands-on cooking class designed to match your taste and skill level. Learn new recipes, techniques, and tips from expert chefs. Whether you're a beginner or a foodie, there's something just for you!</p>
             <div className="flex gap-4 text-xl font-semibold">
                <button className="btn bg-green-400 rounded-full border-none">Explore Now</button>
                <button className="btn btn-outline text-white hover:bg-green-400 rounded-full">Our Feedback</button>
             </div>
        </div> 
        </div>
    );
};

export default Banner;