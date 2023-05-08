const page = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        next: {
            revalidate: 10,
        },
    });

    const post = await res.json();

    return (
        <div className='p-4'>
            <h1>Dashboard</h1>
            <br />
            <p>{JSON.stringify(post)}</p>
        </div>
    );
};

export default page;
