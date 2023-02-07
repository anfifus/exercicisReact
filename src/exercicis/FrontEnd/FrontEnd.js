import { useEffect, useState } from "react";

function FrontEnd() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3200/profile/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProfiles(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {profile.name} {profile.surname}
            <img src={profile.foto} alt="imatgeFons" />
          </li>
        ))}
      </ul>
    );
  }
}
export default FrontEnd;
