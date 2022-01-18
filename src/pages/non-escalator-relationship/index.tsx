import {nonEscalatorMenu} from '../../utils/store/questions';
import NonEscalatorHowTo from '@app/components/NonEscalatorRelationship/NonEscalatorHowTo';
import TitleCard from '@app/components/Card/TitleCard';
import NextLinkButton from '@app/components/NextLinkButton';
import GridWrapper from '@app/components/GridWrapper';
import FlexSection from '@app/components/FlexSection';
import {useAppDispatch, useAppSelector} from '@app/utils/store/hooks';
import {formSelectors, upsertForm} from '@app/utils/store/formsSlice';

export default function NonEscalatorRelationshipHomePage() {
  const form = useAppSelector((state) => formSelectors.selectById(state, nonEscalatorMenu.formId));
  const dispatch = useAppDispatch();
  if (!form) {
    dispatch(upsertForm({form: nonEscalatorMenu}));
  }
  return (
    <GridWrapper>
      <FlexSection>
        <TitleCard title={nonEscalatorMenu.formName}>
          <NonEscalatorHowTo />
        </TitleCard>
      </FlexSection>
      <FlexSection>
        <NextLinkButton href="non-escalator-relationship/commitment" className="max-w-md">
          Start
        </NextLinkButton>
      </FlexSection>

    </GridWrapper>
  );
}
