'use client';
import { useState } from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/slices/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SizeAndCheckout = ({ product, id }) => {
    const [selectedSize, setSelectedSize] = useState('');
    const [showError, setShowError] = useState(false);
    const dispatch = useDispatch();

    const notify = () => {
        toast.success('Success, check your cart!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        });
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            setShowError(true);
            document.getElementById('sizeGrid').scrollIntoView({
                block: 'center',
                behavior: 'smooth',
            });
        } else {
            dispatch(
                addToCart({
                    id,
                    ...product,
                    pricePerUnit: product.price,
                    selectedSize,
                })
            );
            notify();
        }
    };

    return (
        <>
            {/* product sizes */}
            <div className="mb-10">
                {/* size heading */}
                <div className="flex justify-between mb-2">
                    <span className="text-md font-semibold">Select Size</span>
                    <span className="text-md font-medium text-black/[0.5] cursor-pointer">
                        Select Guide
                    </span>
                </div>

                {/* sizes */}
                <div id="sizeGrid" className="grid grid-cols-3 gap-2">
                    {product?.size?.data?.map((item, i) => (
                        <div
                            key={i}
                            className={`border rounded-md text-center py-3 font-medium ${
                                item.enabled
                                    ? 'hover:border-black cursor-pointer'
                                    : 'cursor-not-allowed bg-black/[0.1] opacity-50'
                            } ${
                                selectedSize === item.size ? 'border-black' : ''
                            }`}
                            onClick={() => {
                                setSelectedSize(item.size);
                                setShowError(false);
                            }}
                        >
                            {item.size}
                        </div>
                    ))}
                </div>
                {/* sizes end */}

                {/* show error */}
                {showError && (
                    <div className="text-red-600 mt-2">
                        Size selection is required
                    </div>
                )}
                {/* show error end */}
            </div>
            {/* product sizes end */}

            {/* add to cart button */}
            <button
                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                onClick={handleAddToCart}
            >
                Add to Cart
            </button>

            {/* wishlist button */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 mb-10 hover:opacity-75">
                Wishlist
                <IoMdHeartEmpty size={20} />
            </button>
            <ToastContainer />
        </>
    );
};

export default SizeAndCheckout;
