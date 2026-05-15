import { redirect } from "next/navigation";

export const metadata = {
  title: "Terms"
};

export default function TermsPage() {
  redirect("https://www.droidates.com/p/terms-of-use-delayd.html");
}
