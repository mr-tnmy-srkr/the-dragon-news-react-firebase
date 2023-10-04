import React from 'react';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';

const DetailsNews = () => {
    return (
        <div>
         <Header></Header>
         <div className='grid md:grid-cols-4 my-10'>
<div className='col-span-3 border-black border'>News Details</div>
<div className='border border-black'><RightSideNav></RightSideNav></div>
         </div>
        </div>
    );
};

export default DetailsNews;