import React from 'react';
import type {NextPage} from 'next';
import Card from '@app/components/Card/Card';
import GridWrapper from '@app/components/GridWrapper';
import Title from '@app/components/Title';
import FlexSection from '@app/components/FlexSection';

const Home: NextPage = () => {
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
        <Title className="self-center">
        Shareable Love Forms
        </Title>
      </FlexSection>

      <FlexSection>
        <Card
          title="Non Escalator Relationship Form"
          className="self-center max-w-md"
        >
        This is a form designed to help you think and talk about what you want in a relationship.
        </Card>

      </FlexSection>
    </GridWrapper>
  );
};

export default Home;
