import React, { useState, useEffect, useCallback } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '../card/Card.tsx';

interface Post {
    id: number;
    title: string;
    body: string;
}

const InfiniteScroll: React.FC = () => {
    const [items, setItems] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const fetchItems = useCallback(async () => {
        if (loading || !hasMore) return;

        setLoading(true);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
            const newItems: Post[] = await response.json();

            if (newItems.length === 0) {
                setHasMore(false);
                toast.info('No more data available.');
            } else {
                setItems((prev) => [...prev, ...newItems]);
                setPage((prev) => prev + 1);
            }
        } catch (error) {
            console.error('Failed to fetch items:', error);
            toast.error('Failed to load data. Please try again later.');
        } finally {
            setLoading(false);
        }
    }, [loading, hasMore, page]);

    const handleScroll = () => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const currentScroll = document.documentElement.scrollTop;

        // Trigger data fetch only when scrolled to the bottom
        if (currentScroll >= scrollableHeight - 10 && !loading && hasMore) {
            fetchItems();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore, fetchItems]);

    useEffect(() => {
        fetchItems();
    }, []); // Initial data fetch on mount

    return (
        <div>
            {items.map((item) => (
                <Card key={item.id} title={item.title} description={item.body} />
            ))}
            {loading && <p className="text-center text-gray-500">Loading...</p>}
            <ToastContainer position="bottom-right" autoClose={3000} />
        </div>
    );
};

export default InfiniteScroll;
