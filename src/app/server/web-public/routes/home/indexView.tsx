import { Page, Content } from '../../ui/page';

const view = () => (
    <Page title="Welcome to the public home page!">
        <Content>
            <h2>This is some content</h2>
            <div>
                <img alt="a cat" src="/assets/cat.jpg" />
            </div>
        </Content>
    </Page>
);

export default view;