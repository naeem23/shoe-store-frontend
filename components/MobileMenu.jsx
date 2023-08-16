import { menuData } from '@/constants';
import Link from 'next/link';
import { Fragment } from 'react';
import { BsChevronDown } from 'react-icons/bs';

const MobileMenu = ({
    showCatMenu,
    setShowCatMenu,
    setMobileMenu,
    categories,
}) => {
    return (
        <ul className="flex flex-col md:hidden font-medium absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
            {menuData.map((item) => (
                <Fragment key={item.id}>
                    {!!item?.subMenu ? (
                        <li
                            className="cursor-pointer py-2 px-5 border-b flex flex-col relative"
                            onClick={() => setShowCatMenu(!showCatMenu)}
                        >
                            <div className="flex justify-between items-center">
                                {item.name}
                                <BsChevronDown size={14} />
                            </div>
                            {showCatMenu && (
                                <ul className="bg-black/[0.05] -mx-5 mt-2 -mb-2">
                                    {categories.map(({ attributes: c, id }) => (
                                        <Link
                                            key={id}
                                            href={`/category/${c.slug}`}
                                            onClick={() => {
                                                setShowCatMenu(false);
                                                setMobileMenu(false);
                                            }}
                                        >
                                            <li className="py-2 px-8 border-t flex justify-between">
                                                {c.name}
                                                <span className="opacity-50 text-sm">
                                                    ({c?.products?.data?.length}
                                                    )
                                                </span>
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ) : (
                        <li className="cursor-pointer py-2 px-5 border-b">
                            <Link
                                href={item?.url}
                                onClick={() => setMobileMenu(false)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    )}
                </Fragment>
            ))}
        </ul>
    );
};

export default MobileMenu;
