export function serializeValue(value: string) {
	const numericValue = value.replace(/\D/g, "").padStart(3, "0");

	const digitsFloat = numericValue.slice(0, -2) + "." + numericValue.slice(-2);

	return digitsFloat;
}