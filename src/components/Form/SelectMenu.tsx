import {useState, Fragment} from 'react';
import {Listbox, Transition} from '@headlessui/react';
import {CheckIcon, SelectorIcon} from '@heroicons/react/solid';
import {ResponseOption} from '../../utils/store/questions';

export default function SelectMenu({
  initialValue,
  options,
  onChange,
}: {
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
        <div className="relative mt-1">
          <Listbox.Button
            className="relative py-2 pr-10 pl-3 w-full text-left rounded-lg shadow-md cursor-default bg-app-bg-primary focus:outline-none focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
          >
            <span className="block truncate">{selectedValue}</span>
            <span className="flex absolute inset-y-0 right-0 items-center pr-2 pointer-events-none">
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
              className="overflow-auto absolute z-10 py-1 mt-1 w-full max-h-60 text-base rounded-md ring-1 ring-black ring-opacity-5 shadow-lg bg-app-bg-primary focus:outline-none sm:text-sm"
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
