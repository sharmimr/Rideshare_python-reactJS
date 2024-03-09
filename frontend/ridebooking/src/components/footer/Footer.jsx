

const Footer = () => {
    return (
        <footer className="p-4 bg-white md:p-8 lg:p-10 mt-14 border-t-2">
            <div className="mx-auto max-w-screen-xl text-center">
                <a
                    href="#"
                    className="flex justify-center items-center text-2xl font-semibold"
                >
                    <h1 className="text-2xl font-bold text-mid-night-blue flex items-center gap-2">
                    <div className="w-[20px] h-[20px] inline-block bg-mid-night-blue rounded-full"></div> 
                    Ride Share App</h1>
                </a>
                <p className="my-6 text-gray-500 ">
                    Transportation provider, make your life easier with few clicks
                </p>
                <span className="text-sm text-gray-500 sm:text-center flex justify-center items-center">
                Ride Share App
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer