import BgImage from "../assets/Black-Grapes-3.jpg";
export const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  text-white bg-cyahjhn-100">
            <div className="flex justify-between items-center w-full border-b-2 m-5 border-gray-300">
                <div className="w-100 mt-8 border-red-500">
                    <img
                        src="src/assets/KRUSHIDHARM1.png"
                        alt="KRUSHIDHARMA"
                    />
                </div>
            </div>
            <div
                className="relative h-96 w-full bg-cover bg-center flex flex-col items-center justify-center items-center justify-center"
                style={{ backgroundImage: `url(${BgImage})` }}
            >
                <h1 className="text-4xl font-bold mb-4 ">Welcome to My App</h1>
                <p className="text-lg ">This is a simple React app with Tailwind CSS.</p>


            </div>
        </div>
    )
}
