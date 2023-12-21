import { FaFacebookF, FaGoogle, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../../assets/nav-logo.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#090C1B] text-white">

                <nav className="pt-10">
                    <img className="w-52" src={logo} alt="" />
                    <p className="w-full">Task management helps you stay organized, prioritize tasks, and efficiently complete your work with ease and effectiveness.</p>
                </nav>
                <nav>
                    <header className="footer-title border-b w-full py-3">CONTACT US</header>
                    <a className="link link-hover">123 ABS Street, Uni 21, Bangladesh</a>
                    <a className="link link-hover">+88 123456789</a>
                    <a className="link link-hover">Mon - Fri: 08:00 - 22:00</a>
                    <a className="link link-hover">Sat - Sun: 10:00 - 23:00</a>
                </nav>
                <nav>
                    <header className="footer-title border-b w-full py-3">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <form>
                    <header className="footer-title border-b w-full py-3">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <div className="">
                            <input type="text" placeholder="Enter your email address" className="rounded-sm input input-bordered join-item" />
                            <button className="btn border-none rounded-sm ml-2 bg-[#173bb7] text-white">Subscribe</button>
                        </div>
                    </fieldset>
                </form>


            </footer>
            <div className="footer items-center p-4 bg-black text-white">
                <aside className="items-center grid-flow-col">
                    <p>Copyright © 2023 - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href='https://www.facebook.com/' target="none"><FaFacebookF className="text-[#173bb7] border-2 border-[#173bb7] h-8 w-8 p-2 rounded-none"></FaFacebookF></a>
                    <a href="https://www.youtube.com/" target="none"><FaYoutube className="text-[#173bb7] border-2 border-[#173bb7] h-8 w-8 p-2 rounded-none"></FaYoutube></a>
                    <a href="https://www.google.com/" target="none"><FaGoogle className="text-[#173bb7] border-2 border-[#173bb7] h-8 w-8 p-2 rounded-none"></FaGoogle></a>
                    <a href="" target="none"><FaPinterest className="text-[#173bb7] border-2 border-[#173bb7] h-8 w-8 p-2 rounded-none"></FaPinterest></a>
                    <a href="" target="none"><FaTwitter className="text-[#173bb7] border-2 border-[#173bb7] h-8 w-8 p-2 rounded-none"></FaTwitter></a>
                </nav>
            </div>
            <div className="h-1 bg-[#173bb7]"></div>
        </div>
    );
};

export default Footer;