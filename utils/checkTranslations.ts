import en from "../messages/en.json";
import fa from "../messages/fa.json";

// Eforces fa.json matches the structure of en.json

type TranslationSchema = typeof en;
const faTyped: TranslationSchema = fa;

export { faTyped }; // optional
