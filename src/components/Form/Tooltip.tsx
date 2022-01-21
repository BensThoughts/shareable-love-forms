import {InformationCircleIcon} from '@heroicons/react/solid';
import React, {useState, useRef, useEffect} from 'react';
import {usePopper} from 'react-popper';
// import styled from 'styled-components';
import styled from '@emotion/styled';

const Tooltip = ({
  text,
}: {
  text: string;
}) => {
  const [showPopper, setShowPopper] = useState(false);

  const buttonRef = useRef(null);
  const popperRef = useRef<HTMLDivElement>(null);
  // the ref for the arrow must be a callback ref
  const [arrowRef, setArrowRef] = useState<HTMLDivElement | null>(null);

  const {styles, attributes} = usePopper(
      buttonRef.current,
      popperRef.current,
      {
        placement: 'top',
        modifiers: [
          {
            name: 'arrow',
            options: {
              element: arrowRef,
            },
          },
          {
            name: 'offset',
            options: {
              offset: [0, 10],
            },
          },
        ],
      }
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // TODO: Not sure if as Node is good here
      if (popperRef.current && !popperRef.current.contains(event.target as Node)) {
        setShowPopper(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popperRef]);

  return (
    <>
      <div>
        <button
          ref={buttonRef}
          onClick={() => setShowPopper(true)}
          style={{
            overflow: 'hidden',
            display: 'block',
          }}
        >
          <InformationCircleIcon className='w-6 h-6 text-icon-secondary'/>
        </button>
      </div>

      { showPopper ? (

        <PopperContainer
          as="div"
          ref={popperRef}
          style={styles.popper}
          {...attributes.popper}
        >

          <div ref={setArrowRef} style={styles.arrow} id="arrow" />
          {/* <div className="w-full h-full bg-gradient-to-tr rounded-md shadow-md from-primary to-secondary" */}

          {/* <div className="flex flex-col gap-2 justify-between p-4 w-full h-full rounded-md bg-app-bg-primary"> */}
          <div className="p-2 w-full h-full rounded-md bg-app-bg-primary">
            <p>{text}</p>
          </div>

          {/* </div> */}
          {/* </div> */}
        </PopperContainer>

      ) : null }
    </>
  );
};

// const Button = styled.button`
//   background: lightblue;
//   border: none;
//   box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
//   width: 150px;
//   height: 50px;
//   outline: none;
// `;

const PopperContainer = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background: linear-gradient(to right top, rgb(var(--color-app-accent)), rgb(var(--color-app-secondary)));
  padding: 3px;
  text-align: center;
  z-index: 101;
  /* border: 2px solid rgb(var(--color-app-primary)); */


  #arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    &:after {
      content: " ";
      border: 2px solid rgb(var(--color-app-primary));

      background-color: rgb(var(--color-bg-primary));
      box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
      position: absolute;
      top: -7px; // padding + popper height
      left: 0;
      transform: rotate(45deg);
      width: 10px;
      height: 10px;
    }
  }

  &[data-popper-placement^='top'] > #arrow {
    bottom: -10px;
    :after {
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    }
  }
`;

export default Tooltip;
