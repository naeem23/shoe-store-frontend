import ReactMarkdown from 'react-markdown';
import {
    ProductImageCarousel,
    RelatedProducts,
    SizeAndCheckout,
    Wrapper,
} from '@/components';
import { fetchDataFromApi, getDiscountPercentage } from '@/utils';

const ProductDetails = async ({ params }) => {
    const { data } = await fetchDataFromApi(
        `/api/products?populate=*&filters[slug][$eqi]=${params.slug}`
    );
    const product = data?.[0]?.attributes;

    const { data: relatedProducts } = await fetchDataFromApi(
        `/api/products?populate=thumbnail&filters[slug][$nei]=${params.slug}`
    );

    return (
        <div className="w-full md:py-20">
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* left column */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductImageCarousel images={product.image.data} />
                    </div>
                    {/* left column end */}

                    {/* right column */}
                    <div className="flex-[1] py-3">
                        {/* product title */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            {product.name}
                        </div>

                        {/* product subtitle */}
                        <div className="text-lg font-semibold mb-5">
                            {product.subtitle}
                        </div>

                        {/* product price */}
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP: &#2547;{product.price}
                            </p>
                            {product.original_price && (
                                <>
                                    <p className="text-base font-medium line-through">
                                        &#2547;{product.original_price}
                                    </p>
                                    <p className="ml-auto text-base font-medium text-green-500">
                                        {getDiscountPercentage(
                                            product.original_price,
                                            product.price
                                        )}
                                        % off
                                    </p>
                                </>
                            )}
                        </div>
                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            (Also includes all applicable duties)
                        </div>

                        <SizeAndCheckout product={product} id={data?.[0]?.id} />

                        {/* product details */}
                        <div>
                            <p className="text-lg font-bold mb-5">
                                Product Details
                            </p>
                            <div className="markdown text-md mb-5">
                                <ReactMarkdown>
                                    {product.description}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                    {/* right column end */}
                </div>

                {/* related products */}
                <RelatedProducts relatedProducts={relatedProducts} />
            </Wrapper>
        </div>
    );
};

export default ProductDetails;
