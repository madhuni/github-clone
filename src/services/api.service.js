const baseURL = 'https://api.github.com/users/supreetsingh247';

/**
 * This function will fetch the Github profile details of the user
 *
 * @returns {Promise<any>}
 */
export async function getUserProfile() {
  const url = baseURL;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = response.json();
    return Promise.resolve(data);
  } catch (error) {
    console.error(error);
    alert('Something went wrong while fetching profile details.');
    return Promise.resolve(null);
  }
}

/**
 * This function will fetch the Github repositories of the user.
 *
 * In this function catch and replace strategy is implemented. In case of any
 * error occurs while fetching the repository details, we will show an alert
 * message and then send the empty list back to handle the error gracefully.
 *
 * @returns {Promise<any[]>}
 */
export async function getRepoDetails() {
  const url = `${baseURL}/repos`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = response.json();
    return Promise.resolve(data);
  } catch (error) {
    console.error(error);
    alert('Something went wrong while fetching the repositories.');
    return Promise.resolve([]);
  }
}
