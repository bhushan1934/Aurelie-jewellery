import RawPage from '../../components/RawPage';
import data from '../../content/privacy.json';

export const metadata = { title: data.title };

export default function Page() {
  return <RawPage title={data.title} html={data.html} scripts={data.scripts} />;
}
