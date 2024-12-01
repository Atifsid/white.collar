'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import Image, { StaticImageData } from 'next/image';
import politicalCampaignImg from '../../public/static/images/political-campaign.jpeg';
import adFilmImg from '../../public/static/images/ad-film.jpg';

export function GridLayout() {
    return (
        <BentoGrid className='mx-auto max-w-4xl md:auto-rows-[20rem]'>
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={cn('[&>p:text-lg]', item.className)}
                    click={item.onClick}
                />
            ))}
        </BentoGrid>
    );
}

const SkeletonOne = (src: StaticImageData) => {
    return (
        <Image
            className='flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-transparent bg-neutral-100 dark:border-white/[0.2] dark:bg-black'
            src={src}
            alt={'political-campaign'}
        />
    );
};

const items = [
    {
        title: 'Political Campaign',
        description: (
            <span className='text-sm'>
                Ease the Political Campaign flow with our support.
            </span>
        ),
        header: <SkeletonOne src={politicalCampaignImg.src} height={politicalCampaignImg.height} width={politicalCampaignImg.width} />,
        className: 'md:col-span-1',
        onClick: () => { },
    },
    {
        title: 'Ad Film',
        description: (
            <span className='text-sm'>
                Get your Ad Films ready with the support of talented creators.
            </span>
        ),
        header: <SkeletonOne src={adFilmImg.src} height={adFilmImg.height} width={adFilmImg.width} />,
        className: 'md:col-span-1',
        onClick: () => { },
    },
    {
        title: 'Ad Film',
        description: (
            <span className='text-sm'>
                Get your Ad Films ready with the support of talented creators.
            </span>
        ),
        header: <SkeletonOne src={adFilmImg.src} height={adFilmImg.height} width={adFilmImg.width} />,
        className: 'md:col-span-1',
        onClick: () => { },
    },
    {
        title: 'Ad Film',
        description: (
            <span className='text-sm'>
                Get your Ad Films ready with the support of talented creators.
            </span>
        ),
        header: <SkeletonOne src={adFilmImg.src} height={adFilmImg.height} width={adFilmImg.width} />,
        className: 'md:col-span-1',
        onClick: () => { },
    },
    {
        title: 'Ad Film',
        description: (
            <span className='text-sm'>
                Get your Ad Films ready with the support of talented creators.
            </span>
        ),
        header: <SkeletonOne src={adFilmImg.src} height={adFilmImg.height} width={adFilmImg.width} />,
        className: 'md:col-span-1',
        onClick: () => { },
    },
    {
        title: 'Ad Film',
        description: (
            <span className='text-sm'>
                Get your Ad Films ready with the support of talented creators.
            </span>
        ),
        header: <SkeletonOne src={adFilmImg.src} height={adFilmImg.height} width={adFilmImg.width} />,
        className: 'md:col-span-1',
        onClick: () => { },
    },
];