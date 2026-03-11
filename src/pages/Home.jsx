import Hero from '../components/Hero';
import wave from '../assets/wave1.svg'

const Home = () => {
    return (
        <div>
           <div className=' flex relative flex-col justify-center items-center min-h-[calc(100vh-116px)]'>
             <Hero></Hero>
             <img className='absolute bottom-0 w-full' src={wave} alt="" />
           </div>
            <div className='w-full'>
                
            </div>
        </div>
    );
};

export default Home;