'use client';

type ErrorProps = {
    error: Error;
    reset: () => void;
};

const error = ({ error, reset }: ErrorProps) => {
    return (
        <div>
            <h1>Error</h1>
            <button className='bg-red-200' onClick={reset}>
                Try again?
            </button>
        </div>
    );
};

export default error;
