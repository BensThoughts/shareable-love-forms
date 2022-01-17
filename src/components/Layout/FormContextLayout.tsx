import FormCacheProvider, {FormState} from '@app/utils/context/FormCacheContext';
import SlideAnimationProvider from '@app/utils/context/SlideAnimationContext';
import type {ReactElement} from 'react';

interface FormContextLayoutProps {
  page: ReactElement;
  initialFormState: FormState;
}

export default function FormContextLayout({
  page,
  initialFormState,
}: FormContextLayoutProps) {
  return (
    <FormCacheProvider initialState={initialFormState}>
      <SlideAnimationProvider>
        {page}
      </SlideAnimationProvider>
    </FormCacheProvider>
  );
};
