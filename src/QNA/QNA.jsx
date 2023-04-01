import React from 'react';

const QNA = () => {
    return (
        <div className='bg-violet-100 rounded-lg p-3 mb-6 shadow-xl'>
            <div className='bg-white rounded-lg p-3 my-5'>
                <h3 className='font-bold text-xl'>Deference between Props vs state</h3>
                <p className='font-semibold text-sm'>Props is used for passing by one component to another component . On the other hand useState used for managing data within a component . props are unchangeable but useState is changeable. props are read only but useState can be updated and state will re-render with the new data.</p>
            </div>
            <div className='bg-white rounded-lg p-2 my-5'>
                <h3 className='font-bold text-xl'>How does useState work?</h3>
                <p className='font-semibold text-sm'>UseState is react hook that can change a state in functional component. The useState hook can be used for string, number, boolean, array, object. It takes initial value as it's argument and returns an array with two elements , first one is the store current value and second one is a function, its used for updating the current value. We can call second function as many times and state will be changed every time and we will get new value in state. That's the process of useState work.</p>
            </div>
            <div className='bg-white rounded-lg p-2 my-5'>
                <h3 className='font-bold text-xl'>Purpose of useEffect other than fetching data.</h3>
                <p className='font-semibold text-sm'>UseEffect is react hook that do many work more than data fetching . UseEffect takes two perametter , the first perametter is a callback function and secound perametter is is an optional array of dependencies that determine when the effect should be run. We can use this dependencies arrey and make lot of thing in useEffect . For example , I can write a funtion which should call every re render.Also i want run a spicify function when a condition match . In That case we can be use useEffect . Also we can run a function when a state is changed by using useEffect . UseEffect also used for get data in local strorage/sesson strorage.</p>
            </div>
            <div className='bg-white rounded-lg p-2 my-5'>
                <h3 className='font-bold text-xl'>How Does React work?</h3>
                <p className='font-semibold text-sm'>React is popular javascript library that used for making user interface for mobile and web application development. React created by facebook in 2013. React is very powerful library that contains a collection of JavaScript code and used for user interface building called component . We can divide a site using many component and we can also re use a component in react . we also can add functionality in Element . Its create a virtual dom so that he can track which component is changed and update the specific component/element in the actual DOM only when necessary. That's make react faster and efficient. That's how react work.</p>
            </div>
        </div>
    );
};

export default QNA;