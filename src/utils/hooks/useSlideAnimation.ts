import { useContext } from 'react';
import { SlideAnimationContext } from '../context/SlideAnimationContext';

export default function useSlideAnimation() {
  const context = useContext(SlideAnimationContext);
  if (context === undefined) {
    throw new Error('useSlideAnimation must be used within a SlideAnimationProvider');
  }
  const slideAnimationDirection = context.slideAnimationDirection;
  const setSlideAnimationDirection = context.setSlideAnimationDirection;

  return [slideAnimationDirection, setSlideAnimationDirection] as const;
};
