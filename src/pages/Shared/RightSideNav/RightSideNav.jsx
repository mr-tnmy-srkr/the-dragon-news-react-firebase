import { FaGoogle,FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/images/qZone1.png'
import qZone2 from '../../../assets/images/qZone2.png'
import qZone3 from '../../../assets/images/qZone3.png'


const RightSideNav = () => {
    return (
        <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-semibold">Login with</h2>
        <button className='btn btn-outline w-full capitalize'>
            <FaGoogle></FaGoogle>
            Login with Google
        </button><button className='btn btn-outline w-full capitalize'>
            <FaGithub></FaGithub>
            Login with Github
        </button>
      </div>

      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl font-medium">Find us on</h2>
        <div className='border border-black rounded-xl'>
        <a href="" className='p-4 flex text-lg items-center border-b border-black'>
           <div className='text-xl mr-2'>
           <FaFacebook></FaFacebook>
           </div>
            <span>Facebook</span>
        </a><a href="" className='p-4 flex text-lg items-center border-b border-black'>
        <div className='text-xl mr-2'>
            <FaTwitter></FaTwitter>
            </div>
            <span>Twitter</span>
        </a><a href="" className='p-4 flex text-lg items-center '>
        <div className='text-xl mr-2'>
            <FaInstagram></FaInstagram>
            </div>
            <span>Instagram</span>
        </a>
        </div>
      </div>

      {/* q-zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-2xl font-medium">Q-zone</h2>
      <div className='bg-[#F3F3F3]'>
      <div className=''>
      <img className='w-full' src={qZone1} alt="" />
      </div>
      <div className=''>
       <img className='w-full' src={qZone2} alt="" />
       </div>
       <div className=''>
       <img className='w-full' src={qZone3} alt="" />
       </div>
      </div>
      </div>

        </div>
    );
};

export default RightSideNav;