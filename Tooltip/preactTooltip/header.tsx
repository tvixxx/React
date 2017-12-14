import { h, render, Component } from 'preact';

import classNames from 'classnames';
import { Tooltip } from './components/tooltip/tooltip';

interface HeaderProps {}
interface HeaderState {}

export class Header extends Component<HeaderProps, HeaderState> {

  createPreactElem(tag, text) {
      return h(tag, {}, text);
  }

  render() {
    return 
      <header>
         <Tooltip element={this.createPreactElem('span', 'login')}>
              <a href="http://example.url" class="icon icon--user header__icon">Login</a>
          </Tooltip>
      </header>;
  }
}
