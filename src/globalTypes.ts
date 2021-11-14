import { Browser, Page, Context} from "playwright";

declare global {
  const page: Page;
  const browser: Browser;
  const browserName: string;
  const context: Context
}