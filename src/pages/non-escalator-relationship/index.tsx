import {NextSeo} from 'next-seo';

import Card from '@app/components/Card/Card';
import NextLinkButton from '@app/components/NextLinkButton';
import GridWrapper from '@app/components/GridWrapper';
import FlexSection from '@app/components/FlexSection';
import BootstrapForm from '@app/utils/store/features/forms/BootstrapForm';
import Title from '@app/components/Title';
import AnimatedLink from '@app/components/AnimatedLink';

export const NON_ESCALATOR_FORM_ID = 'non-escalator-relationship';
export const NON_ESCALATOR_FORM_NAME = 'Non-Escalator Relationship Form';

export default function NonEscalatorRelationshipHomePage() {
  return (
    <>
      <NextSeo
        title={NON_ESCALATOR_FORM_NAME}
        description="The non-escalator relationship form is designed help you determine what you need, want, and will not accept in a romantic relationship."
      />
      <BootstrapForm formId={NON_ESCALATOR_FORM_ID}>
        <GridWrapper>

          {/* About Form */}
          <FlexSection>
            <Card className="max-w-2xl rounded-md bg-neutral-dark">
              <Card.Header>
                <div className="pb-4 w-full text-center border-b-8 border-secondary">
                  <Title className="text-neutral-lightest">{NON_ESCALATOR_FORM_NAME}</Title>
                </div>
              </Card.Header>
              <div className="flex flex-col gap-2 text-neutral-lighter">
                <h2 className="text-xl text-neutral-lightest">About The Form</h2>
                <p>
                  This form is designed help you determine what you need, want, and will not accept in a romantic relationship.
                  You can use it on your own to get a better understanding of what you want in your next romantic relationship.
                  You can also fill it out and share it with someone else. Try comparing your responses to those of a current romantic partner
                  to find out where your interests align and where you may need to have further discussion.
                </p>
                <div className="self-center">
                  <NextLinkButton href="non-escalator-relationship/commitment" className="max-w-md">
                    Start Form
                  </NextLinkButton>
                </div>
              </div>
            </Card>
          </FlexSection>

          {/* Escalator About */}
          <FlexSection>
            <Card
              title="What Is the Relationship Escalator?"
              className="max-w-2xl rounded-md bg-neutral-dark text-neutral-lightest"
            >
              <div className="flex flex-col gap-4 mt-4 text-neutral-lighter">
                <p>
                  Before jumping into what a non-escalator relationship is, it makes sense to understand what the
                  relationship escalator is.
                </p>
                <p>
                  On the site&nbsp;-&nbsp;
                  <AnimatedLink
                    href="https://offescalator.com/what-escalator/"
                    className="text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Off The Relationship Escalator
                  </AnimatedLink>
                  &nbsp;-&nbsp;
                  <span className="italic font-bold">
                    Amy Gahran&nbsp;
                  </span>
                  defines the relationship escalator in the following way...
                </p>
                <div className="px-3 py-2 italic border-l-4 border-l-secondary">
                  <p>
                    The Relationship Escalator is one of many social scripts — customs for how people are “supposed”
                    to behave, and how we “should” think or feel, in certain contexts, situations or interactions.
                    These customs benefit many people, but not always, and not everyone.
                  </p>
                </div>
              </div>
            </Card>
          </FlexSection>

          {/* Non-Escalator About */}
          <FlexSection>
            <Card
              title="What Is a Non-Escalator Relationship?"
              className="max-w-2xl rounded-md bg-neutral-dark text-neutral-lightest"
            >
              <div className="flex flex-col gap-4 mt-4 text-neutral-lighter">
                <p>
                  Now that we have a common definition for what a relationship escalator is, we can start to
                  understand what it means to be in a non-escalator relationship. In essence a non-escalator relationship
                  is a relationship that does not follow the traditional script.
                </p>
                <p>
                  In the article
                  &nbsp;-&nbsp;
                  <AnimatedLink
                    href="https://radicalrelationshipcoaching.ca/non-escalator-relationships/"
                    className="text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Navigating Non-Escalator Relationships
                  </AnimatedLink>
                  &nbsp;-&nbsp;
                  <span className="italic font-bold">
                  Melina&nbsp;
                  </span>
                  sums this up as...
                </p>
                <div className="flex flex-col gap-2 px-3 py-2 italic border-l-4 border-l-secondary">
                  <p>
                    let&apos;s be honest- most relationships you will experience in your life (including platonic ones)
                    are not on an Escalator.
                  </p>
                  <p>
                    Non-escalator relationships can be short term and casual, and they can also be long term,
                    emotionally invested relationships. They are build-your-own-lunch-box relationships,
                    relationships a la carte.
                  </p>
                </div>
              </div>
            </Card>
          </FlexSection>

          {/* You Have Questions, There are Answers */}
          <FlexSection>
            <Card
              title="You Have Questions, There are Answers"
              className="max-w-2xl rounded-md bg-neutral-dark text-neutral-lightest"
            >
              <div className="flex flex-col gap-4 mt-4 text-neutral-lighter">
                <p>
                  In the article
                  &nbsp;-&nbsp;
                  <AnimatedLink
                    href="https://radicalrelationshipcoaching.ca/non-escalator-relationships/"
                    className="text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Navigating Non-Escalator Relationships
                  </AnimatedLink>
                  &nbsp;-&nbsp;
                  <span className="italic font-bold">
                    Melina&nbsp;
                  </span>
                  points out...
                </p>
                <div className="flex flex-col gap-2 px-3 py-2 italic border-l-4 border-l-secondary">
                  <p>
                    how do people in non escalator relationships measure the investment? How do they read emotional
                    commitment, security, and the ongoing life of the relationship, when they aren&apos;t defaulting to the
                    regular milestones of dating, moving in, getting married, and so forth?
                  </p>
                </div>
                <p>
                  Relationships run a spectrum from very traditional to radically non-traditional. The Non-Escalator
                  Relationship Form can help you to get clarity on the priorities and values you seek in a current
                  relationship or one that is soon to be.
                </p>
                <div className="self-center">
                  <NextLinkButton href="non-escalator-relationship/commitment" className="max-w-md">
                    Start Form
                  </NextLinkButton>
                </div>
              </div>
            </Card>
          </FlexSection>
        </GridWrapper>
      </BootstrapForm>
    </>
  );
}
