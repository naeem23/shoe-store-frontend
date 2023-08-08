import { ProductImageCarousel, Wrapper } from '@/components';
import React from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';

const ProductDetails = () => {
    return (
        <div className="w-full md:py-20">
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* left column */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductImageCarousel />
                    </div>
                    {/* left column end */}

                    {/* right column */}
                    <div className="flex-[1] py-3">
                        {/* product title */}
                        <div className="text-[34px] font-semibold mb-2">
                            Jordan Retro 6 G
                        </div>

                        {/* product subtitle */}
                        <div className="text-lg font-semibold mb-5">
                            Men&apos;s Golf Shoes
                        </div>

                        {/* product price */}
                        <div className="text-lg font-semibold">
                            MRP: $190.99
                        </div>
                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            (Also includes all applicable duties)
                        </div>

                        {/* product sizes */}
                        <div className="mb-10">
                            {/* size heading */}
                            <div className="flex justify-between mb-2">
                                <span className="text-md font-semibold">
                                    Select Size
                                </span>
                                <span className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </span>
                            </div>

                            {/* sizes */}
                            <div className="grid grid-cols-3 gap-2">
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                                    UK 6
                                </div>
                                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                                    UK 6
                                </div>
                            </div>
                            {/* sizes end */}

                            {/* show error */}
                            <div className="text-red-600 mt-2">
                                Size selection is required
                            </div>
                            {/* show error end */}
                        </div>
                        {/* product sizes end */}

                        {/* add to cart button */}
                        <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                            Add to Cart
                        </button>

                        {/* wishlist button */}
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 mb-10 hover:opacity-75">
                            Wishlist
                            <IoMdHeartEmpty size={20} />
                        </button>

                        {/* product details */}
                        <div>
                            <p className="text-lg font-bold mb-5">
                                Product Details
                            </p>
                            <p className="text-md mb-5">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Optio impedit sapiente dolorem
                                minus velit nostrum voluptatibus laudantium qui,
                                saepe, rem itaque doloremque totam fuga,
                                similique voluptas harum officia! Voluptates,
                                sint. lorem
                            </p>
                            <p className="text-md mb-5">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Provident illum, cum hic
                                asperiores excepturi quibusdam. Repellendus,
                                optio eos pariatur quasi recusandae iste
                                doloremque delectus odit nobis reiciendis magnam
                                cum fugit!
                            </p>
                        </div>
                    </div>
                    {/* right column end */}
                </div>
            </Wrapper>
        </div>
    );
};

export default ProductDetails;
