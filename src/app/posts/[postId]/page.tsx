import Link from 'next/link';
import React from 'react';

type PageProps = {
    params: {
        postId: string;
    };
};

export async function generateStaticParams() {
    const posts = ['post-one', 'post-two'];

    return posts.map((post) => {
        return {
            postId: post,
        };
    });
}

const page = (props: PageProps) => {
    const { postId } = props.params;

    console.log(`/post/${postId} is rendered on the server`);

    return (
        <div className='p-4'>
            <h1>Post - {postId}</h1>
            <br />
            <button className='bg-red-300 text-gray-700'>
                <Link href={`/posts/`}>Back</Link>
            </button>
        </div>
    );
};

export default page;
