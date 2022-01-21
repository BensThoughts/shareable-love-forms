import NonEscalatorHowTo from '@app/components/NonEscalatorRelationship/NonEscalatorHowTo';
import TitleCard from '@app/components/Card/TitleCard';
import NextLinkButton from '@app/components/NextLinkButton';
import GridWrapper from '@app/components/GridWrapper';
import FlexSection from '@app/components/FlexSection';
import BootstrapForm from '@app/utils/store/features/forms/BootstrapForm';

export const NON_ESCALATOR_FORM_ID = 'non-escalator-relationship';
export const NON_ESCALATOR_FORM_NAME = 'Non Escalator Relationship';

export default function NonEscalatorRelationshipHomePage() {
  return (
    <BootstrapForm formId={NON_ESCALATOR_FORM_ID}>
      <GridWrapper>
        <FlexSection>
          <TitleCard title={NON_ESCALATOR_FORM_NAME}>
            <NonEscalatorHowTo />
          </TitleCard>
        </FlexSection>
        <FlexSection>
          <NextLinkButton href="non-escalator-relationship/commitment" className="max-w-md">
          Start
          </NextLinkButton>
        </FlexSection>
      </GridWrapper>
    </BootstrapForm>

  );
}
