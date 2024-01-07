import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  const photo = uploadPhoto(fileName);
  const user = signUpUser(firstName, lastName);

  return Promise.allSettled([photo, user]).then((values) => {
    const profileResults = values.map((value) => {
      if (value.status === 'fulfilled') {
        return value.value;
      }
      return { error: value.reason.message };
    });

    return profileResults;
  });
}

export default handleProfileSignup;
