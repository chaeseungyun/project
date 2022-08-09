import useDetailcommon from "./useDetailcommon";

const Mainpage = () => {
  const info = useDetailcommon();
  return <div>{info && info[0].overview}</div>;
};

export default Mainpage;
