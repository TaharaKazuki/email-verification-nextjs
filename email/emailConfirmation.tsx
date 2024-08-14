import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components';
import React from 'react';

type EmailTemplateProps = {
  email: string;
  link: string;
};

const ConfirmationEmail = ({ link }: EmailTemplateProps) => {
  return (
    <Tailwind>
      <Html lang="ja">
        <Head />
        <Preview>Confirm your email address</Preview>
        <Body className="mx-auto bg-white p-4 font-sans">
          <Container>
            <Heading className="text-2xl">You&apos;re Almost There</Heading>
            <Text className="-mt-2">
              Confirm your email address to start receiving amazing emails about
              amazing things!
            </Text>

            <Text>
              If you are having trouble clicking the link, copy and paste the
              Button👇
            </Text>

            <Button
              className=" rounded-md bg-gray-100 px-4 py-2 text-center text-black"
              href={link}
            >
              Click Me
            </Button>

            <Text className="mt-10 text-xs">
              *If you did not request this email, there is nothing to worry
              about, you can safely ignore it.
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default ConfirmationEmail;
