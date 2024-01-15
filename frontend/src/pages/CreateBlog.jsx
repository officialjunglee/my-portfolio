import { useState } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import BackButton from '../components/BackButton';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleSaveBlog = () => {
        const data = {
            title,
            content,
        };
        setLoading(true);
        axios
            .post('https://my-portfolio-backend-kohl.vercel.app/createblog', data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Book Created successfully', { variant: 'success' });
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                // alert('An error happened. Please Chack console');
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(error);
            });
    };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Create Blog</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Content</label>
                    <input
                        type='text'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className='border-2 border-gray-500 px-20 py-10  w-full '
                    />
                </div>
                <button className='p-2 bg-sky-300 hover:bg-sky-600 m-8' onClick={handleSaveBlog}>
                    Save
                </button>
            </div>
        </div>
    );
}

export default CreateBlog
