import * as React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>Portfolio Contact: New message fro {name}</Preview>
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
              width: "100%",
            }}
          >
            <Text
              style={{
                fontSize: "18px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              ✉️ New Contact Form Submission
            </Text>

            <Text style={{ fontSize: "16px", marginBottom: "-15px" }}>
              <strong>From:</strong> {name}
            </Text>

            <Text style={{ fontSize: "16px", marginBottom: "20px" }}>
              <strong>Email:</strong> {email}
            </Text>

            <Text style={{ fontSize: "13px", marginBottom: "24px" }}>
              You’ve received a new message through your website’s contact form.
              The details are provided below. Be sure to follow up as soon as
              possible to keep the conversation going.
            </Text>

            <Section
              style={{
                backgroundColor: "#f9f9f9",
                borderRadius: "8px",
                border: "1px solid #e0e0e0",
                width: "full",
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
                  <strong>Message:</strong>
                </Text>
                <Text
                  style={{ fontSize: "15px", color: "#333", lineHeight: "1.6" }}
                >
                  {message}
                </Text>
              </Section>
            </Section>

            <Text style={{ fontSize: "13px", color: "#888" }}>
              You received this email because someone submitted your website
              contact form.
            </Text>
          </Container>
        </Container>
      </Body>
    </Html>
  );
}
