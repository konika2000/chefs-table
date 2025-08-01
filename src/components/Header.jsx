import { IoMdSearch } from "react-icons/io";
import { IoMdContact } from "react-icons/io";

const Header = () => {
    return (
        <div className="flex justify-between  items-center py-4">
            <h2 className='text-2xl font-bold '>Recipe Calories</h2>
            <ul className="flex gap-4 text-gray-500">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Recipes</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Search</a>
                </li>
            </ul>
            <div className="flex items-center gap-2">
                 <search className="flex items-center gap-1 border-2 rounded-xl px-8 bg-slate-100 text-gray-400"><IoMdSearch />Search</search>
                 <IoMdContact className="rounded-full text-2xl" />
            </div>
        </div>
    );
};

export default Header;