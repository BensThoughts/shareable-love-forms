import {nonEscalatorMenu} from '../../utils/store/questions';
import NonEscalatorHowTo from '@app/components/NonEscalatorRelationship/NonEscalatorHowTo';
import TitleCard from '@app/components/Card/TitleCard';
import NextLinkButton from '@app/components/NextLinkButton';
import GridWrapper from '@app/components/GridWrapper';
import FlexSection from '@app/components/FlexSection';
import useFormCache from '@app/utils/hooks/useFormCache';

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
