import logo from '../assets/logo-2.png';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function Header({ changeTheme, darkTheme }) {
    return (
        <header className="h-16 fixed inset-x-0 top-0 z-10 border-b border-gray-500 bg-[#3B5249]">
            <div className="flex h-14 items-center justify-between gap-8 lg:px-30 md:px-10 px-1">
                <div className="flex items-center gap-4">
                    <img src={logo} alt="Logo" className="h-10" />
                </div>
                <div>
                    <button onClick={changeTheme} className="bg-transparent  p-2 rounded text-sm text-white dark: text-black hover:bg-[#8B575C] rounded-full">
                        {darkTheme ? (
                            <div className="flex items-center gap-2">
                                <SunIcon className="w-5 h-5" />
                            </div>
                            ) : (
                            <div className="flex items-center gap-2">
                                <MoonIcon className="w-5 h-5" />
                            </div>
                        )}
                    </button>
                </div>
            </div>
            
        </header>
    );
}