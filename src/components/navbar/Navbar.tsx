import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const initNav = [
  { name: 'Home', href: '/', current: true },
  { name: 'Wishlist', href: '/wishlist', current: false },
  { name: 'Mybook', href: '#', current: false },
]

function classNames(...classes : string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [navigation, setNavigation] = useState(initNav)

  const movePage = (name: string)=>{
    const newNav = navigation.map((nav)=>{
      if(nav.name === name){
        return {...nav, current: true}
      }
      return {...nav, current: false}
    })
    setNavigation(newNav)
  }
  return (
    <Disclosure as="nav" className="bg-blue-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-blue-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://www.bluebirdgroup.com/asset/51_tahun/Icon_BBG_51th_Bluebird_Group.svg"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        onClick={() => movePage(item.name)}
                        // href={item.href}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-blue-900 text-white' : 'text-blue-300 hover:bg-blue-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute right-0 inset-y-0 justify-end flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <SearchBar/>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  onClick={() => movePage(item.name)}
                  // href={item.href}
                  className={classNames(
                    item.current ? 'bg-blue-900 text-white' : 'text-blue-300 hover:bg-blue-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
