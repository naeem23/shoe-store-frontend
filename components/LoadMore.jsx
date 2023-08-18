'use client';
import { useRouter } from 'next/navigation';

const LoadMore = ({ pageSize }) => {
    const router = useRouter();

    const handleNavigation = () => {
        const searchParams = new URLSearchParams(window.location.searchParams);
        searchParams.set('limit', pageSize + 10);

        const newPathname = `${
            window.location.pathname
        }?${searchParams.toString()}`;
        router.push(newPathname);
    };

    return (
        <div className="flex justify-center my-16 md:my-0">
            <button
                type="button"
                className="rounded py-2 px-4 bg-black text-white"
                onClick={handleNavigation}
            >
                Load More
            </button>
        </div>
    );
};

export default LoadMore;
