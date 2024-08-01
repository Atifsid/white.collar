import { cn } from '@/lib/utils';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3',
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    click,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    click?: any;
}) => {
    return (
        <div
            className={cn(
                'group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-slate-600 p-4 text-neutral-600 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none',
                className
            )}
        >
            {header}
            <div className='transition duration-200 group-hover/bento:translate-x-2'>
                {icon}
                <div className='mb-2 mt-2 font-sans font-bold text-neutral-200'>
                    {title}
                </div>
                <div className='font-sans text-xs font-normal text-neutral-200'>
                    {description}
                </div>
                <div className='flex justify-end'>
                    <button className='relative mt-4 p-[1px]' onClick={click}>
                        <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 to-red-600' />
                        <div className='group relative rounded-[6px] bg-black px-3 py-1 text-xs text-white transition duration-200 hover:bg-transparent'>
                            <div className='flex items-center justify-end gap-1'>
                                {`Explore`}
                                <IoIosArrowDroprightCircle />
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};