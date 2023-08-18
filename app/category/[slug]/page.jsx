import { LoadMore, ProductCard, Wrapper } from '@/components';
import { fetchDataFromApi } from '@/utils';

const Category = async ({ params, searchParams }) => {
    const { data: category } = await fetchDataFromApi(
        `/api/categories?filters[slug][$eqi]=${params.slug}`
    );

    const pageSize = searchParams.limit || 10;

    const endPoint = `/api/products?populate=thumbnail&filters[categories][slug][$eqi]=${params.slug}&pagination[pageSize]=${pageSize}`;

    const products = await fetchDataFromApi(endPoint);

    const pageCount = products?.meta?.pagination?.pageCount || 1;
    const page = products?.meta?.pagination?.page || 1;

    return (
        <div className="w-full md:py-20">
            <Wrapper>
                {/* heading and paragraph */}
                <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        {category[0]?.attributes?.name}
                    </div>
                </div>
                {/* heading and paragraph end */}

                {/* product card list */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {products?.data?.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
                {/* product card list end */}

                {pageCount !== page && <LoadMore pageSize={pageSize} />}
            </Wrapper>
        </div>
    );
};

export default Category;
