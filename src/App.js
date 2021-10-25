import "./App.css";
import { useQuery, gql } from "@apollo/client";

const GET_LAUNCHES = gql`
  query GetLaunches {
    launches(limit: 5) {
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
      details
    }
  }
`;
function App() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div className="App">
      {data.launches.map((launch) => {
        return (
          <>
            <p>{launch.launch_date_utc}</p>
            <p>is a Success ? {launch.launch_success ? "true" : "false"}</p>
            <p>{launch.rocket.rocket_name}</p>
            <a href={launch.links.video_link}>{launch.links.video_link}</a>
            <p>{launch.details}</p>
          </>
        );
      })}
    </div>
  );
}

export default App;
