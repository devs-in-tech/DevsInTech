import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Contributors_Api = () => {
    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://api.github.com/repos/devs-in-tech/DevsInTech/contributors'
                );
                const data = response.data;
                setContributors(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <h1>Developers</h1>
            <div className="Contributor_container">
                {contributors.map((i) => (
                    <>
                        <div className="Contributor_card" key={i.id}>
                            <div className="Contributor_image">
                                <img className='avatar' src={i.avatar_url} alt="" />
                            </div>
                            <div className="Contributor_name">
                                <h1>{i.login}</h1>
                            </div>
                            <div className="Contributor_Contributions">
                                <h3>Commits:{i.contributions}</h3>
                            </div>
                            <div className="Contributor_account">
                                <button className='Contributor_view_button' >
                                    <a href={i.html_url} target='_blank' rel='noopener noreferrer'>View</a>
                                </button>
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <Footer />
        </>
    );
};

export default Contributors_Api;
