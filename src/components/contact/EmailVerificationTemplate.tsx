import * as React from "react";
import { EmailTemplateProps } from "./EmailTemplate"; // Assuming you have a types file
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type EmailVerificationTemplateProps = Omit<EmailTemplateProps, "email">;

export const EmailVerificationTemplate = ({
  name,
  message,
}: EmailVerificationTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thanks for reaching out!</Preview>
      <Body
        style={{
          backgroundColor: "#f2f2f2",
          fontFamily: "Arial, sans-serif",
          padding: "40px 0",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            maxWidth: "600px",
            margin: "0 auto",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}
        >
          <Container
            style={{
              margin: "10px 20px",
              width: "fit-content",
            }}
          >
            <Text
              style={{
                fontSize: "18px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Hi {name},
            </Text>

            <Text style={{ fontSize: "16px", marginBottom: "24px" }}>
              Thank you for reaching out! Your message has been successfully
              received. I truly appreciate it and will get back to you as soon
              as possible.
            </Text>

            <Section
              style={{
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                marginBottom: "32px",
              }}
            >
              <Section
                style={{
                  margin: "0px 20px",
                  width: "fit-content",
                }}
              >
                <Text
                  style={{
                    fontSize: "14px",
                    color: "#555",
                    marginBottom: "10px",
                  }}
                >
                  <strong>Your message:</strong>
                </Text>
                <Text
                  style={{ fontSize: "15px", color: "#333", lineHeight: "1.6" }}
                >
                  {message}
                </Text>
              </Section>
            </Section>

            <Text
              style={{ fontSize: "15px", color: "#444", marginBottom: "32px" }}
            >
              Looking forward to connecting with you soon!
            </Text>

            <Text
              style={{ fontSize: "15px", color: "#222", fontWeight: "bold" }}
            >
              Best regards,
              <br />
              {process.env.RESEND_MY_NAME}
            </Text>
          </Container>
        </Container>
      </Body>
    </Html>
  );
};
