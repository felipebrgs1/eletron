import { Minus, Square, X } from 'lucide-react';
import { Button } from './ui/button';

export const TitleBar = () => {
    return (
        <div
            className='w-full h-8 bg-gray-800 flex items-center px-2 select-none'
            style={{ WebkitAppRegion: 'drag' } as any}
        >
            <span className='text-white text-sm flex-1'>Minha App</span>
            <div
                className='flex gap-2'
                style={{ WebkitAppRegion: 'no-drag' } as any}
            >
                <Button
                    variant='ghost'
                    size='title'
                    onClick={() => window.electronAPI.minimize()}
                    className='text-white hover:bg-yellow-500'
                >
                    <Minus size={16} />
                </Button>
                <Button
                    variant='ghost'
                    size='title'
                    onClick={() => window.electronAPI.maximize()}
                    className='text-white hover:bg-sky-500'
                >
                    <Square size={16} />
                </Button>
                <Button
                    variant='ghost'
                    size='title'
                    onClick={() => window.electronAPI.close()}
                    className='text-white hover:bg-red-500'
                >
                    <X
                        size={16}
                        className=''
                    />
                </Button>
            </div>
        </div>
    );
};
