import Image from 'next/image';
import React from 'react';
import Wrapper from './Wrapper';

// icons
import { SiNike } from 'react-icons/si';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaGithub,
    FaDribbble,
} from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-14 pb-3">
            <Wrapper className="space-y-8 lg:space-y-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <SiNike size={60} className="text-white" />

                        <p className="mt-4 max-w-xs text-white/[0.5] text-sm">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Esse non cupiditate quae nam molestias.
                        </p>

                        <ul className="mt-8 flex gap-6">
                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:text-white"
                                >
                                    <FaFacebook size={24} />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:text-white"
                                >
                                    <FaInstagram size={24} />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:text-white"
                                >
                                    <FaTwitter size={24} />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:text-white"
                                >
                                    <FaGithub size={24} />
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:text-white"
                                >
                                    <FaDribbble size={24} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
                        <div>
                            <p className="font-medium text-sm">Information</p>

                            <ul className="mt-6 space-y-3 text-sm">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-sm text-white/[0.5] hover:text-white cursor-pointer"
                                    >
                                        About Us
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/"
                                        className="text-sm text-white/[0.5] hover:text-white cursor-pointer"
                                    >
                                        FAQ
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/"
                                        className="text-sm text-white/[0.5] hover:text-white cursor-pointer"
                                    >
                                        Terms & Conditions
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/"
                                        className="text-sm text-white/[0.5] hover:text-white cursor-pointer"
                                    >
                                        Contact Us
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/"
                                        className="text-sm text-white/[0.5] hover:text-white cursor-pointer"
                                    >
                                        Help
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-sm">
                                Customer Service
                            </p>

                            <ul className="mt-6 space-y-3 text-sm">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-sm text-white/[0.5] hover:text-white cursor-pointer"
                                    >
                                        Payment Methods
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/"
                                        className="text-sm text-white/[0.5] hover:text-white cursor-pointer"
                                    >
                                        Money Back
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/"
                                        className="text-sm text-white/[0.5] hover:text-white cursor-pointer"
                                    >
                                        Returns
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/"
                                        className="text-sm text-white/[0.5] hover:text-white cursor-pointer"
                                    >
                                        Shipping
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/"
                                        className="text-sm text-white/[0.5] hover:text-white cursor-pointer"
                                    >
                                        Privacy & Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-medium text-sm">Get In Touch</p>

                            <ul className="mt-6 space-y-3 text-sm">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-sm text-white/[0.5] hover:text-white cursor-pointer"
                                    >
                                        Payment Methods
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/"
                                        className="text-sm text-white/[0.5] hover:text-white cursor-pointer"
                                    >
                                        Money Back
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/"
                                        className="text-sm text-white/[0.5] hover:text-white cursor-pointer"
                                    >
                                        Returns
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/"
                                        className="text-sm text-white/[0.5] hover:text-white cursor-pointer"
                                    >
                                        Shipping
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Wrapper>

            <Wrapper className="flex justify-between items-center flex-col md:flex-row gap-[10px] md:gap-0 mt-10">
                {/* left side */}
                <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
                    © 2023 Nike, Inc. All Rights Reserved
                </div>
                {/* left side */}

                {/* right side */}
                <div className="flex items-center justify-center gap-2 md:gap-5">
                    <Image
                        src="/visa.png"
                        alt="visa card"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                    <Image
                        src="/card.png"
                        alt="master card"
                        width={35}
                        height={35}
                        className="object-contain"
                    />
                </div>
                {/* right side */}
            </Wrapper>
        </footer>
    );
};

export default Footer;
