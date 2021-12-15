import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Moscow_July_2011-16.jpg",
    address: "Moscow, 12345",
    description: "First meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Moscow_July_2011-16.jpg",
    address: "Moscow, 12345",
    description: "Second meetup",
  },

  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Moscow_July_2011-16.jpg",
    address: "Moscow, 12345",
    description: "Third meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
