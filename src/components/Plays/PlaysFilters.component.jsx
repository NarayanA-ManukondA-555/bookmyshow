import { Disclosure } from '@headlessui/react';
import { BiChevronUp, BiChevronDown } from "react-icons/bi";

function PlaysFilters(props) {
  return (
    <Disclosure>
      {({ open }) => (
        /* Use the `open` state to conditionally change the direction of an icon. */
        <>
        <div className="bg-white px-4 py-2">
         <div className="flex items-center justify-between">
          <div>
            <Disclosure.Button className="py-2">
                 <div className="flex items-center gap-3">
                  {open ? <BiChevronUp /> : <BiChevronDown />}
                  <span className={open ? "text-red-600" : "text-gray-950"}>{props.title}</span>
                 </div>
            </Disclosure.Button>
          </div>
          <div className="text-gray-950 hover:text-red-600">
             <h4>{props.clear}</h4>
          </div>
         </div>
          <Disclosure.Panel className="">
            <div className="flex flex-wrap items-center gap-3 py-2">
              {props.tags.map((tag) => (
                <>
                 <div className="border border-gray-200 px-2 py-0.5">
                  <span className="text-sm text-red-600">{tag}</span>
                 </div>
                </>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
        </>
      )}
    </Disclosure>
  );
};

export default PlaysFilters;
