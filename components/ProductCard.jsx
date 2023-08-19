import { getDiscountPercentage } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ data: { attributes: p, id } }) => {
    return (
        <Link
            href={`/products/${p.slug}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <Image
                src={p?.thumbnail?.data?.attributes?.url}
                alt={p.name}
                className="w-full"
                width={386}
                height={386}
            />
            <div className="p-4 text-black/[0.9]">
                <h2 className="text-lg font-medium">{p.name}</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="mr-2 text-lg font-semibold">
                        &#2547;{p.price}
                    </p>
                    {p.original_price && (
                        <>
                            <p className="text-base font-medium line-through">
                                &#2547;{p.original_price}
                            </p>
                            <p className="ml-auto text-base font-medium text-green-500">
                                {getDiscountPercentage(
                                    p.original_price,
                                    p.price
                                )}
                                % off
                            </p>
                        </>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
