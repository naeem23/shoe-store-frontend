import { menuData } from '@/constants';
import Link from 'next/link';
import { Fragment } from 'react';
import { BsChevronDown } from 'react-icons/bs';

const Menu = ({ showCatMenu, setShowCatMenu, categories }) => {
    return (
        <ul className="hidden md:flex items-center gap-8 font-medium text-black">
            {menuData.map((item) => (
                <Fragment key={item.id}>
                    {!!item?.subMenu ? (
                        <li
                            className="cursor-pointer flex items-center gap-2 relative"
                            onMouseEnter={() => setShowCatMenu(true)}
                            onMouseLeave={() => setShowCatMenu(false)}
                        >
                            {item.name}
                            <BsChevronDown size={14} />

                            {showCatMenu && (
                                <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                                    {categories?.map(
                                        ({ attributes: c, id }) => (
                                            <Link
                                                key={id}
                                                href={`/category/${c.slug}`}
                                                onClick={() =>
                                                    setShowCatMenu(false)
                                                }
                                            >
                                                <li className="h-10 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                                                    {c.name}
                                                    <span className="opacity-50 text-sm">
                                                        (
                                                        {
                                                            c?.products?.data
                                                                ?.length
                                                        }
                                                        )
                                                    </span>
                                                </li>
                                            </Link>
                                        )
                                    )}
                                </ul>
                            )}
                        </li>
                    ) : (
                        <li className="cursor-pointer">
                            <Link href={item?.url}>{item.name}</Link>
                        </li>
                    )}
                </Fragment>
            ))}
        </ul>
    );
};

export default Menu;
