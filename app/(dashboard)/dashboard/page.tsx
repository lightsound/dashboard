import { Chart } from "./components/Chart";
import { Cards } from "./components/Cards";
import { PageShell } from "./components/PageShell";

const Page = () => {
  return (
    <PageShell
      title="Dashboard"
      text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr."
    >
      <div className="space-y-6">
        <Cards />
        <Chart />
      </div>
    </PageShell>
  );
};

export default Page;
