// import type {NextPage} from 'next';
import Card from '@app/components/Card/Card';
import GridWrapper from '@app/components/GridWrapper';
import FlexSection from '@app/components/FlexSection';
import LogoSVG from '@app/components/Layout/Background/LogoSVG';
import TitleCard from '@app/components/Card/TitleCard';

export default function Home() {
  // React.useEffect(() => {

  //   const fn = async () => {
  //     const Peer = (await import('simple-peer')).default;
  //     console.log(Peer.WEBRTC_SUPPORT)
  //     // set it to state here
  //     const peer1 = new Peer({ initiator: true })
  //     const peer2 = new Peer();

  //     peer1.on('signal', data => {
  //       console.log(data);
  //       peer2.signal(data);
  //     });

  //     peer2.on('signal', data => {
  //       peer1.signal(data);
  //     });

  //     peer1.on('connect', () => {
  //       peer1.send('hey peer2, how is it going?');
  //     });

  //     peer2.on('data', data => {
  //       console.log('got a message from peer1: ' + data);
  //     })
  //   }
  //   fn()
  // }, []);


  return (
    <GridWrapper>
      <FlexSection>
        <LogoSVG
          // width={600}
          // height={600}
          className="w-[20rem] h-[16rem] sm:w-auto sm:h-auto"
        />
      </FlexSection>
      <FlexSection>
        <TitleCard title="About">
          Sharable love forms is a website focused on forms that can help you with your love life. Pick from a form
          below, fill it out, and then share the results with a partner. Form results can be downloaded as a PDF file,
          or shared as a link.
        </TitleCard>
      </FlexSection>
      <FlexSection>
        <Card
          title="Non Escalator Relationship Form"
          className="self-center max-w-md"
          href='/non-escalator-relationship'
        >
        This is a form designed to help you think and talk about what you want in a relationship.
        </Card>

      </FlexSection>
      <FlexSection>
      </FlexSection>
    </GridWrapper>
  );
};
