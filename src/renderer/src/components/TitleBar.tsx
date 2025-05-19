import { Minus, Square, X } from 'lucide-react';

export const TitleBar = () => {
    return (
        <div
            className='w-full h-8 bg-gray-800 flex items-center px-2 select-none'
            style={{ WebkitAppRegion: 'drag' }}
        >
            <span className='text-white text-sm flex-1'>Minha App</span>
            <div
                className='flex gap-2'
                style={{ WebkitAppRegion: 'no-drag' }}
            >
                {/* Botões de minimizar, maximizar, fechar */}
                <button
                    onClick={() => window.electronAPI.minimize()}
                    className='text-white px-2'
                >
                    <Minus size={16} />
                </button>
                <button
                    onClick={() => window.electronAPI.maximize()}
                    className='text-white px-2'
                >
                    <Square size={16} />
                </button>
                <button
                    onClick={() => window.electronAPI.close()}
                    className='text-white px-2'
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
};
