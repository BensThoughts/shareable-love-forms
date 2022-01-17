import {createContext, Dispatch, ReactNode, SetStateAction, useState} from 'react';

export type SlideAnimationMode = 'next' | 'prev';

// interface SlideAnimationContextProps {
//   direction: SlideAnimationMode
// }

// const slideAnimationContext: SlideAnimationContextProps = {
//   direction: 'next',
// }

export const SlideAnimationContext = createContext<{
  slideMode: SlideAnimationMode,
  setSlideMode: Dispatch<SetStateAction<SlideAnimationMode>>
} | undefined>(undefined);

interface SlideAnimationProviderProps {
  children: ReactNode
}

const SlideAnimationProvider = ({children}: SlideAnimationProviderProps) => {
  const [slideMode, setSlideMode] = useState<SlideAnimationMode>('next');

  return (
    <SlideAnimationContext.Provider value={{slideMode, setSlideMode}}>
      {children}
    </SlideAnimationContext.Provider>
  );
};

export default SlideAnimationProvider;
