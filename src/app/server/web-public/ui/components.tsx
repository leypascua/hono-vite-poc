import { FC } from 'hono/jsx';
import { raw } from 'hono/html';

const Head: FC = (props) => {
  return <>{props.children}</>;
};

const ClientScript: FC = (props) => (
  <script type="text/javascript">{raw(props.children)}</script>
);

export { Head, ClientScript };
