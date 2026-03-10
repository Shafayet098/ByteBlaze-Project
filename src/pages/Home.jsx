import Hero from '../components/Hero';
import wave from '../assets/wave1.svg'

const Home = () => {
    return (
        <div>
           <div className=' flex relative flex-col justify-center items-center min-h-[calc(100vh-116px)]'>
             <Hero></Hero>
           </div>
            <img className='absolute bottom-13 h-[200px] w-full' src={wave} alt="" />
        </div>
    );
};

export default Home;