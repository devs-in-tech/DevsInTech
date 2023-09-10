import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";

const BlogAThons = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: 100, color: 'white', alignItems: 'center' }}>
        <h1 className="text-5xl font-bold text-center text-blue-500">Blog-a-thons</h1>
        <div className='w-[100%] flex flex-wrap mx-auto justify-center items-center mt-26 py-8 mb-5 max-w-screen-2xl format-card'>
          <div className="md:w-2/3 ml-5" data-aos="fade-left" data-aos-duration="500">
            <p className="team-description font-bold text-2xl text-center">
              Join our DevsInTech community for an array of exciting online tech events. Attend insightful webinars featuring industry experts, dive deep into practical workshops to enhance your skills, and unleash your creativity in our competitive hackathons. Engage with fellow developers, expand your network, and stay updated on cutting-edge technologies and industry trends.
            </p>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default BlogAThons;