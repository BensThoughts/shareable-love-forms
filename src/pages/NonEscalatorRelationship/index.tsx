import {nonEscalatorMenu} from '../../utils/store/questions';
import NonEscalatorHowTo from '@app/components/NonEscalatorRelationship/NonEscalatorHowTo';
import TitleCard from '@app/components/Card/TitleCard';
import NextLinkButton from '@app/components/NextLinkButton';
import GridWrapper from '@app/components/GridWrapper';
import FlexSection from '@app/components/FlexSection';
// import FormCacheProvider from '@app/utils/context/FormCacheContext';
// import SlideAnimationProvider from '@app/utils/context/SlideAnimationContext';
import type {ReactElement} from 'react';
import useFormCache from '@app/utils/hooks/useFormCache';
import FormContextLayout from '@app/components/Layout/FormContextLayout';

export default function NonEscalatorRelationshipHomePage() {
  const [state] = useFormCache();
  console.log(state);
  return (
    <GridWrapper>
      <FlexSection>
        <TitleCard title={nonEscalatorMenu.formName}>
          <NonEscalatorHowTo />
        </TitleCard>
      </FlexSection>
      <FlexSection>
        <NextLinkButton href="NonEscalatorRelationship/Commitment" className="max-w-md">
          Start
        </NextLinkButton>
      </FlexSection>

    </GridWrapper>
  );
}

NonEscalatorRelationshipHomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <FormContextLayout
      initialFormState={nonEscalatorMenu}
      page={page}
    />
  );
};

// NonEscalatorRelationshipHomePage.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <div>
//       {page}
//     </div>
//   );
// };
