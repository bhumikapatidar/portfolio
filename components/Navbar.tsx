import { useState, useEffect, FunctionComponent } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";

const NavItem:FunctionComponent<{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string

}> = ({activeItem,setActiveItem,name,route}) => {
    return (
        
            activeItem !== name ? (
                <Link href={route}>
                    <a >
                        <span className="hover:text-blue-400 text-lg" onClick={() =>setActiveItem(name)}>{name}</span>
                    </a>
                </Link>
            ) : null
    )
}

const Navbar = () => {

    const [activeItem, setActiveItem] = useState<string>('');

    const {pathname} = useRouter()

    useEffect(() => {
      if(pathname === '/')setActiveItem('About')
      if(pathname === '/projects')setActiveItem('Projects')
      if(pathname === '/experience')setActiveItem('Experience')
    }, []);
    

    return (
        <div className="flex justify-between px-5 py-3 my-3">
            <span className="font-bold text-blue-400 text-lg border-b-4 border-blue-400 md:text-2xl">{activeItem}</span>
            <div className="text-lg flex space-x-5">
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About' route='/' />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Projects' route='/projects' />
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Experience' route='/experience' />
            </div>
        </div>
    )
};

export default Navbar;
