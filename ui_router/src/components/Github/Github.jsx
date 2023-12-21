import React, {useEffect, useState} from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData();
    
    // const [data, setData] = useState([])

    // useEffect(() => {

    //   fetch("https://api.github.com/users/xshshanu").then(response => response.json()).then(data => {
    //     console.log(data);
    //     setData(data);
    //   });
    // }, [])
    

  return (
    <div className='text-center text-3xl m-4 bg-gray-600 text-white p-4'>Github Followers : <span className='text-orange-700'>{data.followers}</span> 
        <div className='flex items-center justify-center mt-4 '>
            <img className='rounded-full' src={data.avatar_url} alt="github_profile" width={300} />
        </div>
    </div>
  )
}

export default Github

export const githubInfo = async () => {
    const response = await fetch('https://api.github.com/users/xshshanu')

    return response.json()
}