// our-domain.com/new-meetup

import keys from '../../keys';

import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {

  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {

    console.log(enteredMeetupData);
    console.log(keys.MDB_username);
    console.log(keys.MDB_password);
    // uses api function
    // getting 404 errors
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;

