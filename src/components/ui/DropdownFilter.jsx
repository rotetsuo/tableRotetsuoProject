import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function DropdownFilter({ value, onChange, options }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>

                <MenuButton className="inline-flex w-ffull justify-center gap-x-1.5 rounded-md bg-gray-200 dark:bg-gray-700 px-3 text-sm font-semibold text-gray-900 dark:text-white shadow-xs ring-inset hover:bg-gray:50" >
                    {value}
                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                </MenuButton>
            </div>

            <MenuItems transition className="z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 sata-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in" >
                <div className="py-1">
                   {options.map((option) => (
                    <MenuItem>
  {({ active }) => (
    <button
      onClick={() => onChange(option)}
      className={`w-full text-left px-4 py-2 text-sm ${
        active
          ? 'bg-gray-100 text-gray-900'
          : 'text-gray-700 dark:text-white'
      }`}
    >
      {option}
    </button>
  )}
</MenuItem>
                    ))}
                   
                </div>
            </MenuItems>

        </Menu>


    );
}