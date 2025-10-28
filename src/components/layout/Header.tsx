'use client';

const Header = () => {
    return (
        <div className="bg-purple-200 flex justify-around items-center">
            <h1 className="p-6 text-2xl text-black">
                m4player
            </h1>
            <a href="#" className="">
                <img  className="h-15" src="https://www.svgrepo.com/show/506725/login.svg" alt="" />
            </a>
        </div>
    );
};

export default Header;