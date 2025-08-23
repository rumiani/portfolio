import HomePage from "@/components/home-page/homePage";
export const metadata = {
  title: "Rumiani | Home",
  description: "Welcome to my portfolio website.",
};
export default function Home() {
  return (
    <div className="font-sans">
      <main className="w-full">
          <HomePage />
      </main>
    </div>
  );
}
