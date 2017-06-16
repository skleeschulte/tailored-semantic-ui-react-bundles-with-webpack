import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Menu, Accordion, Icon, Flag, Loader, Step, Button } from 'semantic-ui-react';

import './semantic-ui-theme';

// Just some of the examples from https://react.semantic-ui.com/ thrown together:
const App = () => (
    <Grid>
        <Grid.Row>
            <Grid.Column>
                <Menu>
                    <Menu.Item onClick={() => null}>Editorials</Menu.Item>
                    <Menu.Item onClick={() => null}>Reviews</Menu.Item>
                    <Menu.Item onClick={() => null}>Upcoming Events</Menu.Item>
                </Menu>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <Accordion>
                    <Accordion.Title>
                        <Icon name='dropdown' />
                        What is a dog?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p>
                            A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
                            {' '}it can be found as a welcome guest in many households across the world.
                        </p>
                    </Accordion.Content>
                    <Accordion.Title>
                        <Icon name='dropdown' />
                        What kinds of dogs are there?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p>
                            There are many breeds of dogs. Each breed varies in size and temperament.
                            Owners often select a breed of dog that they find to be compatible
                            with their own lifestyle and desires from a companion.
                        </p>
                    </Accordion.Content>
                    <Accordion.Title>
                        <Icon name='dropdown' />
                        How do you acquire a dog?
                    </Accordion.Title>
                    <Accordion.Content>
                        <p>
                            Three common ways for a prospective owner to acquire a dog is from pet shops,
                            private owners, or shelters.
                        </p>
                        <p> A pet shop may be the most convenient way to buy a dog.
                            Buying a dog from a private owner allows you to assess the pedigree and
                            upbringing of your dog before choosing to take it home. Lastly, finding your dog
                            from a shelter, helps give a good home to a dog who may not find one so readily.
                        </p>
                    </Accordion.Content>
                </Accordion>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <p>
                    Just a flag and a spinner - nothing is actually loading here:
                </p>
                <Flag name="de" /><Loader active inline />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <p>
                    The Step component is themed with the amazon theme (see src/semantic-ui-theme/theme.config).
                </p>
                <Step.Group ordered>
                    <Step completed>
                        <Step.Content>
                            <Step.Title>Shipping</Step.Title>
                            <Step.Description>Choose your shipping options</Step.Description>
                        </Step.Content>
                    </Step>

                    <Step completed title='Billing' description='Enter billing information' />

                    <Step active title='Confirm Order' description='Verify order details' />
                </Step.Group>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <p>
                    The red color is not red anymore (see src/semantic-ui-theme/site/globals/site.variables).
                </p>
                <Button color='red'>This is a RED button. You see theming in effect.</Button>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

ReactDOM.render(<App />, document.getElementById('appRoot'));
