import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      title="Firsf meetup"
      address="Some Street 5, Some City"
      description="This is a Firsf meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: "m1",
        },
      },
      {
        params: {
          meetupid: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupid;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "Firsf meetup",
        address: "Some Street 5, Some City",
        description: "This is a Firsf meetup",
      },
    },
  };
}
