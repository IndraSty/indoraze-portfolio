import React, {useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { navigationLinkList } from "../constants/NavigationLinks";
import Link from "next/link"

const MobileNavbarComponent = ({ isOpen, onClose, activeHref }) => {
  return (
    <div className="block xl:hidden">
      <Transition show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={onClose}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-gray-900 shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-primary"
                >
                  Indoraze.
                </Dialog.Title>

                <div className="mt-2 flex flex-col items-center py-3">
                  {navigationLinkList.map(({ title, href }, index) => (
                    <Link
                      key={`#${title} - ${index}`}
                      href={`#${href}`}
                      className={`p-3 rounded-lg transition-all ease-in-out duration-200 
          hover:text-primary dark:hover:text-primary underline-offset-8 
          ${
            activeHref === href
              ? "text-primary underline"
              : "text-black dark:text-white"
          }`}
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MobileNavbarComponent;
