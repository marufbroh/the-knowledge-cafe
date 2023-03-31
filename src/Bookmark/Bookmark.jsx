import React from 'react';

const Bookmark = ({ bookmark }) => {
    return (
        <div>
            <h4 className='bg-white rounded-lg p-3 font-semibold text-lg my-5'>{bookmark.title}</h4>
        </div>
    );
};

export default Bookmark;