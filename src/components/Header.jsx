import logo from '../assets/logo-2.png';

export default function Header({ changeTheme, darkTheme }) {
    return (
        <div className="h-16 fixed inset-x-0 top-0 z-10 border-b border-gray-500 bg-white dark:bg-gray-800">
            <div className="flex h-14 items-center justify-between gap-8 px-30">
                <div className="flex items-center gap-4">
                    <img src={logo} alt="Logo" className="h-10" />
                </div>
                <div>
                    <button onClick={changeTheme} className="bg-black dark:bg-gray-600 px-3 py-1 rounded text-sm text-white dark: text-black hover:bg-gray-500">
                        {darkTheme ? 'Light Theme' : 'Dark Theme'}
                    </button>
                </div>
            </div>
            
        </div>
    );
}