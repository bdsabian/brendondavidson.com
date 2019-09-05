import React, { Component } from "react";
import { gql, graphql } from "react-apollo";

import Block from "jsxstyle/Block";
import Col from "jsxstyle/Col";
import Row from "jsxstyle/Row";

import Button from "./components/Button";
import Container from "./components/Container";
import Icon from "./components/Icon";
import SectionHeading from "./components/SectionHeading";
import SectionSubHeading from "./components/SectionSubHeading";

import theme from "./lib/theme";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate() {
    const errors = {};
    const emailRegex = /^\w+([\.-]? w+)*@\w+([\.-]? w+)*(\.\w{2,3})+$/;

    if (!this.nameField.value) errors.name = "Please enter your name";

    if (!this.emailField.value)
      errors.email = "Please enter your email address";
    else if (!emailRegex.test(this.emailField.value))
      errors.email = "Please enter a valid email address";

    if (!this.messageField.value)
      errors.message = "Please enter a brief message";

    this.setState({ errors });

    return !Object.keys(errors).length;
  }

  handleSubmit(e) {
    e.preventDefault();

    // Bail if we don't pass validation
    if (!this.validate()) return;

    this.props
      .mutate({
        variables: {
          name: this.nameField.value,
          email: this.emailField.value,
          message: this.messageField.value
        }
      })
      .then(({ data }) => {
        console.log(data);
        this.setState({ submitted: true });
      });
  }

  renderField({ error, label, style, type, ref, ...rest }) {
    const inputStyles = type === "checkbox"
      ? style
      : {
          padding: "0.8rem",
          border: error ? "1px solid red" : "none",
          ...style
        };

    const inputComponent = type === "textarea" ? "textarea" : "input";
    const inputType = type === "textarea" ? null : type;

    return (
      <Row alignItems="center" flexWrap="wrap" marginBottom="0.8rem">
        {label &&
          <Block
            component="label"
            props={{ htmlFor: rest.id }}
            flex="1 0 6.5rem"
            maxWidth="12rem"
            padding="0.5rem"
            color="#777"
            fontWeight="500"
            textTransform="uppercase"
          >
            {label}
          </Block>}
        <Col flex="1 0 16.5rem">
          <Block
            component={inputComponent}
            ref={ref}
            {...inputStyles}
            props={{ ...rest, type: inputType }}
          />
          {error && <Block color="red">{error}</Block>}
        </Col>
      </Row>
    );
  }

  render() {
    const { submitted } = this.state;
    const { id } = this.props;

    return (
      <Block
        props={{ id }}
        backgroundColor={theme.contact.backgroundColor}
        padding="1.75rem 0"
      >
        <Container style={{ maxWidth: "40rem", textAlign: "center" }}>
          <SectionHeading>Contact Me</SectionHeading>
          <SectionSubHeading>
            I may be able to help you with your next project!
          </SectionSubHeading>

          <Button
            component="a"
            href="mailto:brendon@brendondavidson.com"
            color={theme.contact.contactButton.backgroundColor}
            borderColor={theme.contact.contactButton.borderColor}
            textColor={theme.contact.contactButton.color}
          >
            <Icon
              color={theme.contact.contactButton.borderColor}
              name="envelope"
              style={{ marginRight: "0.5rem" }}
            />
            {" "}Email me (brendon@brendondavidson.com)
          </Button>
          {false &&
            submitted &&
            <Block
              padding="15px"
              fontWeight="bold"
              backgroundColor="#dff0d8"
              textAlign="center"
            >
              Thanks for reaching out!  I'll get back to you ASAP.
            </Block>}
          {false &&
            !submitted &&
            <form onSubmit={this.handleSubmit}>
              <Col>
                {this.renderField({
                  id: "name",
                  label: "Name",
                  placeholder: "Your Name",
                  error: this.state.errors.name,
                  ref: input => {
                    this.nameField = input;
                  }
                })}
                {this.renderField({
                  id: "email",
                  label: "Email Address",
                  placeholder: "Your Email",
                  error: this.state.errors.email,
                  ref: input => {
                    this.emailField = input;
                  }
                })}
                {this.renderField({
                  type: "textarea",
                  id: "message",
                  label: "Message",
                  placeholder: "How can I help?",
                  error: this.state.errors.message,
                  ref: input => {
                    this.messageField = input;
                  }
                })}
                <Button>Submit</Button>
              </Col>
            </form>}
        </Container>
      </Block>
    );
  }
}

const submitForm = gql`
mutation createMessage($name: String!, $email: String!, $message: String!) {
  createMessage(
    name: $name,
    email: $email,
    message: $message
  ) {
    id
    name
    email
    message
  }
}
`;

export default graphql(submitForm)(Contact);
