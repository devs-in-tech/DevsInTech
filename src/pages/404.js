import Link from "next/link";

export default function custom404(){
    return (
        <div>
            <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                <div className="shadow overflow-hidden sm:rounded-lg pb-8">
                    <div className="border-t border-gray-200 text-center pt-8">
                        <h1 className="text-9xl font-bold text-red-500">404</h1>
                        <h1 className="text-6xl font-medium py-8 text-white">oops! Page not found</h1>
                        <p className="text-2xl pb-8 px-12 font-medium text-gray-300">
                            Oops! The page you are looking for does not exist. It might have been moved or deleted.
                            </p>
                        <Link href="/" 
                        className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-indigo-500 
                        hover:to-purple-500 text-white font-semibold px-6 py-3 mt-5 rounded-md mr-6">
                            Go to HOME
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}