import { Page, Content } from '../../ui/page';
import { Head, ClientScript } from '../../ui/components';

const view = () => (
  <Page title="Welcome to the public home page!">
    <Head>
      <meta name="foo" content="bar" />
    </Head>
    <Content>
      <h2>This is some content</h2>
      <div>
        <img alt="a cat" src="/assets/cat.jpg" />
      </div>
    </Content>
    <script type="text/javascript" defer src="/ui/scripts/page-one.js"></script>
    <ClientScript>
      {`
        document.querySelector("h1").addEventListener('click', (e) => {
          e.target.textContent = "Something else!"
        })
      `}
    </ClientScript>
  </Page>
);

export default view;
