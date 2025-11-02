export const ITypeMessage = {
  Success: "success",
  Error: "error",
} as const;

export type ITypeMessage = (typeof ITypeMessage)[keyof typeof ITypeMessage];
