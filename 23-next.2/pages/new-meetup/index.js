import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const router = useRouter();
  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    router.push('/');
  };

  return (
    <Fragment>
      <Head>
        <title>Meetup</title>
        <meta name="description" content="Meetup" />
        <NewMeetupForm onAddMeetup={addMeetupHandler} />;
      </Head>
    </Fragment>
  );
};

export default NewMeetupPage;
