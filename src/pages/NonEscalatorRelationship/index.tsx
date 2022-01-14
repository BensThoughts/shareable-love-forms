import {nonEscalatorMenu} from '../../utils/store/questions';
import NonEscalatorHowTo from '@app/components/NonEscalatorRelationship/NonEscalatorHowTo';
import TitleCard from '@app/components/Card/TitleCard';
import RoundedButton from '@app/components/RoundedButton';
import Link from 'next/link';
import GridWrapper from '@app/components/GridWrapper';
import FlexSection from '@app/components/FlexSection';

export default function NonEscalatorRelationshipMenu() {
  return (
    <GridWrapper>
      <FlexSection>
        <TitleCard title={nonEscalatorMenu.formName}>
          <NonEscalatorHowTo />
        </TitleCard>
      </FlexSection>
      <FlexSection>
        <Link href="NonEscalatorRelationship/Commitment" passHref>
          <RoundedButton className="max-w-md">
          Start
          </RoundedButton>
        </Link>
      </FlexSection>

    </GridWrapper>
  );
}
