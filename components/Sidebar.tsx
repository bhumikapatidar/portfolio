import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { MdEmail } from 'react-icons/md';

const Sidebar = () => {
    return (
        <div>
            <img className='w-52 h-64 md:h-72 md:w-64 rounded-lg mx-auto' src="me.jpeg" alt="pfp" />
            <h1 className='text-2xl font-medium my-4 font-mitr'>Bhumika Patidar</h1>
            <p className='py-1 my-2 bg-slate-100 rounded-lg'>Web Developer</p>
            <a href='' download='name' className='py-1 my-2 bg-slate-100 rounded-lg flex items-center justify-center' >Download Resume</a>

            {/* social icons */}
            <div className='flex mx-auto items-center justify-center space-x-6 py-5'>
                <a href="https://github.com/bhumikapatidar" target="_blank" className='cursor-pointer'><AiFillGithub className='w-8 h-8' /></a>
                <a href="https://www.linkedin.com/in/bhumika-patidar-b526511b7/" target="_blank" className='cursor-pointer'> <AiFillLinkedin className='w-8 h-8' /></a>
            </div>

            {/* address */}
            <div className='bg-slate-100 rounded-lg'>
                <div className='flex py-1 justify-center items-center space-x-2'>
                    {/* location icons */}
                    <GoLocation />
                    <span>Pune, India</span>
                </div>
                <p className='py-1'>bhumikapat911@gmail.com</p>
                <p className='py-1'>7089611911</p>
            </div>
                
            <button onClick={()=>window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=bhumikapat911@gmail.com")} 
            className='bg-slate-100 my-2 py-1 rounded-lg w-8/12 flex justify-center items-center mx-auto hover:bg-slate-300'><MdEmail/>&nbsp;Email</button>


        </div>
    )
};

export default Sidebar;
