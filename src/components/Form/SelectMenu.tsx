import {useState, Fragment} from 'react';
import {Listbox, Transition} from '@headlessui/react';
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid';
import {ResponseOption} from '../../utils/store/questions';

export default function SelectMenu({
  label,
  initialValue,
  options,
  onChange,
}: {
  label: string,
  options: string[],
  initialValue: string,
  onChange(e: ResponseOption): void,
}) {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  function onSelectionChange(selection: ResponseOption) {
    setSelectedValue(selection);
    onChange(selection);
  }

  return (
    <Listbox value={selectedValue} onChange={onSelectionChange}>
      <div className="w-72 md:w-96">
        <Listbox.Label>{label}:</Listbox.Label>
        <div className="relative mt-1">
          <Listbox.Button
            className="relative w-full py-2 pl-3 pr-10 text-left bg-app-bg-primary rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
          >
            <span className="block truncate">{selectedValue}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="z-10 absolute w-full py-1 mt-1 overflow-auto text-base bg-app-bg-primary rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({active}) => `${active ? 'text-secondary bg-secondary' : 'text-primary'}
                      cursor-default select-none relative py-2 pl-10 pr-4
                  `}
                  value={option}
                >
                  {({selected, active}) => (
                    <>
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {option}
                      </span>
                      {selected ? (
                       <span
                         className={`${
                         active ? 'text-icon-accent' : 'text-icon-primary'
                         }
                             absolute inset-y-0 left-0 flex items-center pl-3`}
                       >
                         <CheckIcon className="w-5 h-5" aria-hidden="true" />
                       </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </div>
    </Listbox>
  );
}
