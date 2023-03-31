import React from 'react';

const Blog = ({ blog }) => {
    const { id, name, date, published_date, reading_time, title, img, author_img } = blog;
    return (
        <>
            <div className="card card-compact bg-base-100 shadow-xl my-3">
                <figure className='px-10 pt-10'><img className='rounded-xl' src={img} alt="Shoes" /></figure>
                <div className="card-body my-10">
                    <div className='flex justify-between'>
                        <div className='flex gap-3 items-center'>
                            <label tabIndex={0} className="flex-none btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={author_img} />
                                </div>
                            </label>
                            <div>
                                <h3 className='font-semibold text-lg'>{name}</h3>
                                <p>{date} ({published_date} Days ago)</p>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p>{reading_time} min read</p>
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                            </span>
                        </div>
                    </div>
                    <h2 className="card-title font-bold text-3xl">{title}</h2>
                    <div className='flex-none'>
                        <p>#beginners</p>
                        <p>#programming</p>
                    </div>
                    <div className="card-actions justify-start">
                        <a className='underline font-bold text-violet-500' href="">Mark as read</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;