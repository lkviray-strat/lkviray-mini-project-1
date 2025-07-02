import * as React from "react";

interface EmailTemplateProps {
  name: string;
  message: string;
}

export function EmailTemplate({ name, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>From {name},</h1>
      <p>{message}</p>
    </div>
  );
}
