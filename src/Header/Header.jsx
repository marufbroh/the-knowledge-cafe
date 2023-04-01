import React from 'react';

const Header = () => {
    return (
        <>
            <div className="navbar bg-base-100 mt-6 lg:mt-12 mb-6 flex-col-reverse lg:flex-row">
                <div className="flex-1">
                    <a className="normal-case text-3xl font-bold">The Knowledge Cafe With marufbroh</a>
                </div>

                <div className='flex lg:gap-12 gap-6'>
                    <div className='flex gap-3'>
                        <a href="/home">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                        <a href="/blog">Blog</a>
                    </div>
                    <label tabIndex={0} className="flex-none btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://picsum.photos/200" />
                        </div>
                    </label>
                </div>
            </div>
        </>
    );
};

export default Header;