import React from 'react';

const Header = () => {
    return (
        <>
            <div className="navbar bg-base-100 my-12">
                <div className="flex-1">
                    <a className="normal-case text-3xl font-bold">Knowledge Cafe With marufbroh</a>
                </div>

                <label tabIndex={0} className="flex-none btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://picsum.photos/200" />
                    </div>
                </label>
            </div>
        </>
    );
};

export default Header;