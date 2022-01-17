import {nonEscalatorMenu} from '../../utils/store/questions';
import NonEscalatorHowTo from '@app/components/NonEscalatorRelationship/NonEscalatorHowTo';
import TitleCard from '@app/components/Card/TitleCard';
import NextLinkButton from '@app/components/NextLinkButton';
import GridWrapper from '@app/components/GridWrapper';
import FlexSection from '@app/components/FlexSection';

export default function NonEscalatorRelationshipHomePage() {
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
