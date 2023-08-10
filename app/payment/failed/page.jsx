import { Wrapper } from '@/components';
import Link from 'next/link';
import React from 'react';

const Failed = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                    <p className="text-2xl font-bold">Payment Failed!</p>
                    <p className="text-base mt-5">
                        For any product related query, drop an email to
                    </p>
                    <p className="underline">shoeshopcontact@shop.com</p>

                    <Link href="/" className="font-bold mt-5">
                        Continue Shopping
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Failed;
