import Link from 'next/link';

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: Post[] = await response.json();
    return data;
};

const page = async () => {
    // await wait(1000);

    const posts = await fetchPosts();

    console.log('/posts are rendered on the server');

    return (
        <>
            {posts &&
                posts.map((post) => {
                    return (
                        <div className='p-4' key={post.id}>
                            <h1>Title: {post.title}</h1>
                            <p>Body: {post.body}</p>
                            <button className='bg-red-300 text-gray-700'>
                                <Link href={`/posts/${post.id}`}>
                                    View Post
                                </Link>
                            </button>
                        </div>
                    );
                })}
        </>
    );
};

export default page;
