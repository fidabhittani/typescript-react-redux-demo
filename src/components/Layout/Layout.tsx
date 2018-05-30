import * as React from "react";
import { Grid, Menu } from "semantic-ui-react";

export interface IProps {
  children?: React.ReactNode;
}
/**
 * Application layout component
 */
export default class Layout extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <Grid>
        <Grid.Row columns={1}>
          <Grid.Column>
            <Menu>
              <Menu.Item header={true}>Online Store</Menu.Item>
              <Menu.Item name="demo" />
            </Menu>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1}>
          <Grid.Column>
            <div className="body">{this.props.children}</div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
