import React from 'react';

const Main = () => {
    return (
        <div className='flex my-6 gap-6'>
            <div className='basis-2/3'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex justify-between'>
                            <div className='flex gap-3 items-center'>
                                <label tabIndex={0} className="flex-none btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://picsum.photos/200" />
                                    </div>
                                </label>
                                <div>
                                    <h3 className='font-semibold text-lg'>Mr. Raju</h3>
                                    <p>Mar 14 (4 Days ago)</p>
                                </div>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <p>05 min read</p>
                                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                </svg>
                                </span>
                            </div>
                        </div>
                        <h2 className="card-title font-bold text-3xl">How to get your first job as a self-taught programmer</h2>
                        <div className='flex-none'>
                            <p>#beginners</p>
                            <p>#programming</p>
                        </div>
                        <div className="card-actions justify-start">
                            <a className='underline font-bold text-violet-500' href="">Mark as read</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='basis-1/3'>
                hello
            </div>
        </div>
    );
};

export default Main;