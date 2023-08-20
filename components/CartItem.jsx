import { updateCart, removeFromCart } from '@/redux/slices/cartSlice';
import Image from 'next/image';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';

const CartItem = ({ data }) => {
    const dispatch = useDispatch();

    const updateCartItem = (e, key) => {
        const payload = {
            key,
            val: key === 'quantity' ? parseInt(e.target.value) : e.target.value,
            id: data.id,
        };
        dispatch(updateCart(payload));
    };

    return (
        <div className="flex py-5 gap-3 md:gap-5 border-b">
            {/* image start */}
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                <Image
                    src={data.thumbnail.data.attributes.url}
                    alt={data.name}
                    width={120}
                    height={120}
                />
            </div>
            {/* image start */}

            {/* cart item info */}
            <div className="w-full flex flex-col">
                {/* product title and price */}
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                        {data.name}
                    </div>
                    <div className="text-sm font-medium text-black/[0.5] block md:hidden">
                        {data.subtitle}
                    </div>
                    <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                        MRP: &#2547;{data.price}
                    </div>
                </div>

                {/* product subtitle */}
                <div className="text-md font-medium text-black/[0.5] hidden md:block">
                    {data.subtitle}
                </div>

                {/* size and quantity selector */}
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                        {/* size selector */}
                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Size:</div>
                            <select
                                className="hover:text-black"
                                onChange={(e) =>
                                    updateCartItem(e, 'selectedSize')
                                }
                            >
                                {data.size?.data?.map((item, i) => (
                                    <option
                                        key={i}
                                        value={item.size}
                                        disabled={!item.enabled}
                                        selected={
                                            data.selectedSize === item.size
                                        }
                                    >
                                        {item.size}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* size selector */}

                        {/* quantity selector */}
                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Quantity:</div>
                            <select
                                className="hover:text-black"
                                onChange={(e) => updateCartItem(e, 'quantity')}
                            >
                                {Array.from(
                                    { length: 10 },
                                    (_, i) => i + 1
                                ).map((q, i) => (
                                    <option
                                        key={i}
                                        value={q}
                                        selected={data.quantity === q}
                                    >
                                        {q}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* quantity selector */}
                    </div>

                    <RiDeleteBin6Line
                        className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                        onClick={() =>
                            dispatch(removeFromCart({ id: data.id }))
                        }
                    />
                </div>
            </div>
            {/* cart item info */}
        </div>
    );
};

export default CartItem;
