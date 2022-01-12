import React from 'react';
import type {NextPage} from 'next';
import Card from '@app/components/Card/Card';

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
    <div className="flex flex-col gap-6 items-center">
      <h1 className="text-2xl font-bold">
        Shareable Love Forms
      </h1>
      <div className="max-w-md">
        <Card title="Non Escalator Relationship Form">
        This is a form designed to help you talk about your relationship with your partners.
        </Card>
      </div>

    </div>
  );
};

export default Home;
