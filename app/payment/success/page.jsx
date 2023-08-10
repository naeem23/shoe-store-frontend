import { Wrapper } from '@/components';
import Link from 'next/link';
import React from 'react';

const Success = () => {
    return (
        <div className="min-h-[650px] flex items-center">
            <Wrapper>
                <div className="max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col">
                    <span className="text-2xl font-bold">
                        Thanks for shopping with us!
                    </span>
                    <span className="text-lg font-bold mt-2">
                        Your order has been placed successfully.
                    </span>
                    <span className="text-base mt-5">
                        For any product related query, drop an email to
                    </span>
                    <span className="underline">shoeshopcontact@shop.com</span>

                    <Link href="/" className="font-bold mt-5">
                        Continue Shopping
                    </Link>
                </div>
            </Wrapper>
        </div>
    );
};

export default Success;
