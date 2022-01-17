import {createContext, Dispatch, ReactNode, SetStateAction, useState} from 'react';

export type SlideAnimationDirection = 'left' | 'right';

export const SlideAnimationContext = createContext<{
  slideAnimationDirection: SlideAnimationDirection,
  setSlideAnimationDirection: Dispatch<SetStateAction<SlideAnimationDirection>>
} | undefined>(undefined);

interface SlideAnimationProviderProps {
  children: ReactNode
}

const SlideAnimationProvider = ({children}: SlideAnimationProviderProps) => {
  const [slideAnimationDirection, setSlideAnimationDirection] = useState<SlideAnimationDirection>('left');

  return (
    <SlideAnimationContext.Provider value={{slideAnimationDirection, setSlideAnimationDirection}}>
      {children}
    </SlideAnimationContext.Provider>
  );
};

export default SlideAnimationProvider;
