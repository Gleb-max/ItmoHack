export const formatPhone = (input: string): string => {
  const cutLength = input.length - 10;
  const callingCode = input.slice(0, cutLength);
  const phoneNumber = input.slice(cutLength);
  const phoneNumberParts = [phoneNumber.slice(0, 4), phoneNumber.slice(4)];

  return `${callingCode} ${phoneNumberParts[0]} ${phoneNumberParts[1]}`;
};
