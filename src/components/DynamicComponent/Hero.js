// components/Hero.js
export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center px-10 py-20 min-h-[80vh]">
            {/* Left Content */}
            <div className="md:w-1/2 space-y-6">
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    Future Is Here, <br /> Start Exploring Now.
                </h1>
                <p className="text-gray-500 text-lg max-w-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Delectus eius distinctio odit, magni magnam qui ex perferendis vitae!
                </p>
                <button className="bg-blue-300 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-400 transition">
                    Get Started
                </button>
            </div>

            {/* Right Content (Image area) */}
            <div className="md:w-1/2 mt-12 md:mt-0 relative">
                {/* Background shapes from your design */}
                <div className="absolute -z-10 bg-blue-100 w-full h-full rounded-3xl rotate-3"></div>
                <img
                    src="/hero-man.png" // Put your image in the 'public' folder
                    alt="User exploring"
                    className="rounded-2xl w-full object-cover"
                />
            </div>
        </section>
    );
}