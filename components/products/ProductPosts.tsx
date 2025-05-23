

import Link from 'next/link';

import { getProductPosts } from '@/lib/products';

import { FaArrowRight, FaSnowflake } from 'react-icons/fa';

export function ProductPosts() {
    const allProducts = getProductPosts();
    const sortedProducts = allProducts.sort((a, b) => {
        if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
        }
        
return 1;
    });

    return (
        <div className='flex h-screen flex-col'>
            {/* Background Elements */}
            {/* <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--bg-base),var(--primary-bg))]" />
      </div> */}

            <div className='relative z-10 mx-auto flex max-w-[90%] flex-1 flex-col justify-center py-8 xl:max-w-[1280px]'>
                {/* Header */}
                <div className='mx-auto mb-12 max-w-3xl text-center'>
                    <span className='text-primary-text border-fg-line mb-4 max-w-fit rounded border border-none bg-transparent px-1 font-mono text-sm leading-normal font-normal tracking-widest whitespace-nowrap uppercase md:text-base'>
                        Products
                    </span>
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <h1 className='text-fg-text-contrast text-4xl leading-tight font-bold tracking-tight md:text-6xl'>
                            What We{' '}
                        </h1>
                        <h1 className='from-primary-solid via-primary-text to-primary-text-contrast border-none bg-transparent bg-gradient-to-r bg-clip-text text-4xl leading-tight font-bold tracking-tight text-transparent md:text-6xl'>
                            Build
                        </h1>
                    </div>

                    <h4 className='text-fg-text text-xl leading-relaxed font-normal tracking-normal text-balance md:text-2xl'>
                        Discover the products we&apos;ve crafted at Silverthread Labs to save time, boost performance.
                    </h4>
                </div>

                {/* Products Grid */}
                <div className='mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2'>
                    {sortedProducts.map((post) => (
                        <Link key={post.slug} href={`/products/${post.slug}`} className='group block'>
                            <div className='bg-bg-bg border-bg-bg-active hover:border-fg-line h-full rounded-lg border px-8 py-5 backdrop-blur-sm transition-all duration-300'>
                                <div className='flex h-full flex-col'>
                                    <div className='from-bg-bg via-primary-bg-subtle to-primary-bg hover:via-primary-bg hover:to-primary-bg-hover w-fit rounded-sm bg-gradient-to-br p-2.5 transition-transform duration-300 group-hover:scale-110'>
                                        <FaSnowflake className='text-primary-text group-hover:text-primary-text-contrast h-4 w-4 transition-colors duration-300' />
                                    </div>

                                    <div className='mt-4'>
                                        <h4 className='text-fg-text-contrast group-hover:text-primary-text mb-2 text-xl leading-relaxed font-semibold tracking-normal transition-colors duration-300 md:text-2xl'>
                                            {post.metadata.title}
                                        </h4>
                                        <p className='text-fg-text group-hover:text-fg-text text-base leading-relaxed font-normal tracking-normal text-balance transition-colors duration-300 md:text-lg'>
                                            {post.metadata.summary}
                                        </p>
                                    </div>

                                    <div className='text-primary-text group-hover:text-primary-text-contrast mt-auto flex items-center gap-2 pt-4 text-sm transition-colors'>
                                        <span className='text-sm font-medium'>Learn more</span>
                                        <FaArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
