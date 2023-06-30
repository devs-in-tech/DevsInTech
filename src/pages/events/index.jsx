import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Image from "next/image";
import Link from "next/link";
import about from '../../../public/about.png';
import blog from '../../../public/blog.jpg';
import coffee from '../../../public/coffee.jpg';
import quiz from '../../../public/quiz.jpg';
import spaces from '../../../public/spaces.jpg';
import tech from '../../../public/tech-events.jpg';

const Events = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: 100, color: 'white', alignItems: 'center' }}>
        <h1 className="text-5xl font-bold text-center text-blue-500">Welcome to the DevsinTech Community Events Page!</h1>
        <div className='w-[100%] flex flex-wrap mx-auto justify-center items-center mt-26 py-8 mb-5 max-w-screen-2xl format-card'>
          <div className="md:w-2/3 ml-5" data-aos="fade-left" data-aos-duration="500">
            <p className="team-description font-bold text-2xl text-center">
              At DevsinTech, we believe in fostering a vibrant and inclusive community of tech enthusiasts, developers, and industry professionals. Our events are designed to bring together like-minded individuals to learn, share knowledge, and network.<br></br> Join our community to stay updated on the latest tech trends, expand your skillset, and connect with fellow developers.
            </p>
          </div>
        </div>
      </div>

      <div className="book-formats-container" style={{ marginTop: 100, color: 'white' }}>
        <div className='w-11/12 flex flex-wrap mx-auto justify-center items-center mt-26 py-8 mb-5 max-w-screen-2xl format-card'>
          <div className="" data-aos="fade-right" data-aos-duration="500">
            <Image src={about} className="team-member-image rounded-lg" alt="team" />
          </div>
          <div className="md:w-1/2 ml-5 items-center text-center" data-aos="fade-left" data-aos-duration="500">
            <h1 className="text-5xl mb-7 font-bold text-blue-500">Features</h1>
            <p className="team-description font-bold text-3xl">
              <li className="mb-5">Networking Opportunities</li>
              <li className="mb-5">Learning from Industry Experts</li>
              <li className="mb-5">Collaboration and Partnership Opportunities</li>
              <li className="mb-5">Stay Up-to-Date with the Latest Tech Trends</li>
              <li className="mb-5">Expand Your Knowledge and Skillset</li>
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-6xl font-bold text-center text-blue-500 mt-10 py-4">Explore our Events!</h1>

      <div className="grid md:grid-cols-2 my-10 lg:grid-cols-3 gap-6 max-w-xs md:max-w-full m-auto">

        <div class="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href="/events/tech">
            <Image class="rounded-t-lg" src={tech} alt="" className="h-4000 w-6000" />
          </Link>
          <div class="p-5">
            <Link href='/events/tech' >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white text-center">Online Tech Events</h5>
            </Link>
            <p class="mb-5 font-medium text-gray-400 text-lg text-justify">Online tech events are virtual gatherings that bring together tech enthusiasts, professionals, and industry experts from around the world.</p>
            <Link href="/events/tech" class="relative w-max items-center py-3 px-7 font-medium transition-all duration-75 group flex flex-row gap-1 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 outline-none text-white">
              Explore...
              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
          </div>
        </div>
        <div class="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href="/events/blogathon">
            <Image class="rounded-t-lg" src={blog} alt="" className="h-4000 w-6000" />
          </Link>
          <div class="p-5">
            <Link href="/events/blogathon">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white text-center">Blog-a-thons</h5>
            </Link>
            <p class="mb-5 font-medium text-lg text-gray-400 text-justify">Participate in our thrilling Blog-a-thon event, where passionate writers and tech enthusiasts come together to showcase their expertise and share their insights on trending tech topics. </p>
            <Link href="/events/blogathon" class="relative w-max items-center py-3 px-7 font-medium transition-all duration-75 group flex flex-row gap-1 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 outline-none text-white">
              Explore...
              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
          </div>
        </div>
        <div class="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href="/events/quiz">
            <Image class="rounded-t-lg" src={quiz} alt="" height={4000} width={6000} />
          </Link>
          <div class="p-5">
            <Link href="/events/quiz">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white text-center">Quiz Nights</h5>
            </Link>
            <p class="mb-5 font-medium text-gray-400 text-lg text-justify">Put your tech knowledge to the test and join us for our engaging Quiz Nights, where you can compete with fellow enthusiasts in a friendly and challenging environment.</p>
            <Link href="/events/quiz" class="relative w-max items-center py-3 px-7 font-medium transition-all duration-75 group flex flex-row gap-1 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 outline-none text-white">
              Explore...
              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
          </div>
        </div>
        <div class="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href="/events/coffee">
            <Image class="rounded-t-lg" src={coffee} alt="" />
          </Link>
          <div class="p-5">
            <Link href="/events/coffee">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white text-center">Coffee Chats</h5>
            </Link>
            <p class="mb-5 font-medium text-gray-400 text-lg text-justify">Unwind and engage in meaningful conversations with our Coffee Chats, where you can connect with fellow tech enthusiasts in a relaxed and informal setting.</p>
            <Link href="/events/coffee" class="relative w-max items-center py-3 px-7 font-medium transition-all duration-75 group flex flex-row gap-1 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 outline-none text-white">
              Explore...
              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
          </div>
        </div>
        <div class="max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href="/events/spaces">
            <Image class="rounded-t-lg" src={spaces} alt="" />
          </Link>
          <div class="p-5">
            <Link href="/events/spaces">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white text-center">Twitter Spaces</h5>
            </Link>
            <p class="mb-5 font-medium text-gray-400 text-lg text-justify">Join us in the dynamic world of Twitter Spaces, where we host live audio discussions on various tech topics. Dive into interactive conversations, listen to industry experts, ask questions, and share your insights, all within the Twitter platform. </p>
            <Link href="/events/spaces" class="relative w-max items-center py-3 px-7 font-medium transition-all duration-75 group flex flex-row gap-1 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 outline-none text-white">
              Explore...
              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
          </div>
        </div>

      </div>

      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Events;
