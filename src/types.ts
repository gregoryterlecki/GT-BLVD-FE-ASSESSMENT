export type EmailType = string;
export type MessageType = string;
export type DateType = string;
export type ErrorType = boolean;

export type RowType = {
  email: EmailType,
  message: MessageType,
  date: DateType
};

export type AddRowPayloadType = {
  email: EmailType,
  message: MessageType
};

export type ProcessResultType = {
  email: EmailType,
  error: ErrorType,
  message: MessageType
};
