import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const EventPage = () => {
  const router = useRouter();

  return <Layout>{router.query.slug}</Layout>;
};

export default EventPage;
