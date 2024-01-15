import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BlogCard from '../components/home/BlogCard';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://my-portfolio-backend-kohl.vercel.app/blogs')
      .then((response) => {
        setBlogs(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      {/* Navbar */}
      <div className='flex justify-between items-center mb-4'>
        <div className='border border-slate-600 rounded-md'>
          Hello User
        </div>

        <div className='flex gap-x-4'>
          <Link to='/blog/create'>
            <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
              onClick={() => setLoading(true)}
            >
              Post your thoughts
            </button>
          </Link>
          <Link to='/'>
            <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
            >
              What are my thoughts?
            </button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className='flex justify-content:space-between items-center'>
        <h1 className='text-3xl my-8'>My Daily Blogs</h1>
        <Link to='/blog/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>

      {loading ? <Spinner /> : <BlogCard blogs={blogs} />}
    </div>
  );
};

export default Home;
